export async function onRequest(context) {
    const request = context.request;
    const url = new URL(request.url);
    const method = request.method;

    // Handle CORS preflight
    if (method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Max-Age': '86400'
            }
        });
    }

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };

    // Proxy media helper
    if (url.pathname.includes('/proxy-media')) {
        const targetUrl = url.searchParams.get('url');
        if (targetUrl) {
            try {
                const resp = await fetch(targetUrl);
                const respHeaders = new Headers(resp.headers);
                respHeaders.set('Access-Control-Allow-Origin', '*');
                return new Response(resp.body, {
                    status: resp.status,
                    headers: respHeaders
                });
            } catch (err) {
                return new Response(JSON.stringify({ error: err.message }), {
                    status: 502,
                    headers: corsHeaders
                });
            }
        }
    }

    // Handle get-upload-url
    if (url.pathname.includes('/get-upload-url')) {
        return new Response(JSON.stringify({
            uploadUrl: '/api/studio/mock-upload',
            publicUrl: '/placeholder/DropPill.png'
        }), { headers: corsHeaders });
    }

    // Handle lambda-render
    if (url.pathname.includes('/lambda-render')) {
        return new Response(JSON.stringify({
            renderId: 'cf_' + Date.now(),
            bucketName: 'local'
        }), { headers: corsHeaders });
    }

    // Handle lambda-progress
    if (url.pathname.includes('/lambda-progress')) {
        return new Response(JSON.stringify({
            done: true,
            progress: 1,
            outputFile: null
        }), { headers: corsHeaders });
    }

    // Handle promo-exports
    if (url.pathname.includes('/promo-exports')) {
        return new Response(JSON.stringify({
            exports: []
        }), { headers: corsHeaders });
    }

    // Default fallback for any studio / auth API routes
    return new Response(JSON.stringify({
        ok: true,
        success: true,
        message: 'Cloudflare Pages API endpoint active'
    }), { headers: corsHeaders });
}
