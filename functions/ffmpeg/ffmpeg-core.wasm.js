export async function onRequest(context) {
    const url = new URL(context.request.url);
    const origin = url.origin;

    // Try fetching the direct wasm file first (if present)
    try {
        const directResp = await context.env.ASSETS.fetch(new URL('/ffmpeg/ffmpeg-core.wasm', origin));
        if (directResp.ok && directResp.status === 200) {
            const headers = new Headers(directResp.headers);
            headers.set('Content-Type', 'application/wasm');
            headers.set('Cache-Control', 'public, max-age=31536000, immutable');
            headers.set('Access-Control-Allow-Origin', '*');
            return new Response(directResp.body, { headers });
        }
    } catch (_) {}

    // Stream part1 and part2 together
    try {
        const [p1, p2] = await Promise.all([
            context.env.ASSETS.fetch(new URL('/ffmpeg/ffmpeg-core.wasm.part1', origin)),
            context.env.ASSETS.fetch(new URL('/ffmpeg/ffmpeg-core.wasm.part2', origin))
        ]);

        if (!p1.ok || !p2.ok) {
            return new Response('Failed to load WASM parts', { status: 502 });
        }

        const { readable, writable } = new TransformStream();

        (async () => {
            try {
                await p1.body.pipeTo(writable, { preventClose: true });
                await p2.body.pipeTo(writable);
            } catch (e) {
                try { writable.abort(e); } catch (_) {}
            }
        })();

        return new Response(readable, {
            headers: {
                'Content-Type': 'application/wasm',
                'Cache-Control': 'public, max-age=31536000, immutable',
                'Access-Control-Allow-Origin': '*',
                'Cross-Origin-Resource-Policy': 'cross-origin'
            }
        });
    } catch (err) {
        return new Response('Error assembling WASM: ' + err.message, { status: 500 });
    }
}
