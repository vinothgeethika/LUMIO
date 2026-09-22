<!DOCTYPE html>
<html lang="en">

<head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="next-head-count" content="2" />
    <script>
        if (window.location.pathname.endsWith('.html')) {
            var clean = window.location.pathname.replace(/\.html$/, '');
            try {
                window.history.replaceState(null, '', clean + window.location.search + window.location.hash);
            } catch(e) {}
        }
    </script>
    <link rel="icon" href="/fav.png" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="apple-touch-icon" href="/fav.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <script>
        window.Paddle = window.Paddle || { Initialize: function() {}, Checkout: { open: function() {} } };
    </script>
    <style>
        html, body {
            background-color: #0a0a0a !important;
            color: #ffffff;
            margin: 0;
            padding: 0;
        }
    </style>
    <script>
        (function() {
            // Transparent GLB fetch fallback to production CDN if missing locally
            var _origFetch = window.fetch;
            window.fetch = async function(input, init) {
                var url = typeof input === 'string' ? input : (input && input.url ? input.url : '');
                try {
                    var res = await _origFetch.apply(this, arguments);
                    if (!res.ok && url.includes('.glb')) {
                        var filename = url.split('/').pop().split('?')[0];
                        var sub = url.includes('ComputerAnimations') ? 'ComputerAnimations/' : (url.includes('phones') ? 'phones/' : (url.includes('computers') ? 'computers/' : ''));
                        var fallbackUrl = 'https://www.promogen.app/' + sub + filename;
                        return _origFetch(fallbackUrl, init);
                    }
                    return res;
                } catch(err) {
                    if (url.includes('.glb')) {
                        var filename = url.split('/').pop().split('?')[0];
                        var sub = url.includes('ComputerAnimations') ? 'ComputerAnimations/' : (url.includes('phones') ? 'phones/' : (url.includes('computers') ? 'computers/' : ''));
                        return _origFetch('https://www.promogen.app/' + sub + filename, init);
                    }
                    throw err;
                }
            };
        })();
    </script>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="/_next/static/css/7e36c186977fde27.css?v=fixed_v7" data-n-g="" />
    <link rel="stylesheet" href="/_next/static/css/50994dde67ebf138.css?v=fixed_v7" /><noscript data-n-css=""></noscript>
    <script src="/_next/static/chunks/polyfills-42372ed130431b0a.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/webpack-c3bfc08287283d84.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/framework-29322186b44cc109.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/1218-233da7b62ce439ae.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/2d36dd80.7d79bbe984ba05cd.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/fb7d5399.ee980910da19a5ed.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/fea29d9f.ec74428882428d05.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/67a3bf3c-41376aecf3652704.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/cb355538-99d1968dea0727ef.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/3aa185cf.5504a5ee84a4ea71.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/2376.c582058ee322835b.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/1160.03c5f9d9b0cffb3f.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/2674.c8a1b00fab34ea5a.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/6859.c16452b6c7496976.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/6501.1f08d59ba04e53b4.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/pages/_app-e431f9f57e7d28c7.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/pages/app-af57dfe080e0f8e5.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/G8flwmssn-xcrcoOSnqUZ/_buildManifest.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/G8flwmssn-xcrcoOSnqUZ/_ssgManifest.js?v=fixed_v7" defer=""></script>
    <script src="/_next/static/chunks/main-45063339e56edafe.js?v=fixed_v7" defer=""></script>
    <style data-href="https://fonts.googleapis.com/css2?family=Figtree:wght@700;800;900&display=swap">
        @font-face {
            font-family: 'Figtree';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_eYR15d.woff) format('woff')
        }

        @font-face {
            font-family: 'Figtree';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_f_R15d.woff) format('woff')
        }

        @font-face {
            font-family: 'Figtree';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_fWR15d.woff) format('woff')
        }

        @font-face {
            font-family: 'Figtree';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/figtree/v9/_Xms-HUzqDCFdgfMm4q9DaRvziissg.woff2) format('woff2');
            unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF
        }

        @font-face {
            font-family: 'Figtree';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/figtree/v9/_Xms-HUzqDCFdgfMm4S9DaRvzig.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
        }

        @font-face {
            font-family: 'Figtree';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/figtree/v9/_Xms-HUzqDCFdgfMm4q9DaRvziissg.woff2) format('woff2');
            unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF
        }

        @font-face {
            font-family: 'Figtree';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/figtree/v9/_Xms-HUzqDCFdgfMm4S9DaRvzig.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
        }

        @font-face {
            font-family: 'Figtree';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/figtree/v9/_Xms-HUzqDCFdgfMm4q9DaRvziissg.woff2) format('woff2');
            unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF
        }

        @font-face {
            font-family: 'Figtree';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/figtree/v9/_Xms-HUzqDCFdgfMm4S9DaRvzig.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
        }
    </style>
</head>
<body>
    <div id="__next">
        <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px;height:100vh;background-color:#0a0a0a">
            <style>
                @keyframes app-spinner {
                    to {
                        transform: rotate(360deg);
                    }
                }
            </style>
            <div style="width:40px;height:40px;border-radius:50%;border:3px solid rgba(255,255,255,0.1);border-top-color:#FF6B6B;border-right-color:#845EC2;animation:app-spinner 0.8s linear infinite"></div><span style="color:#c0c0c0;font-size:14px;font-weight:400;font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, sans-serif">Setting the stage…</span></div>
    </div>
    <script id="__NEXT_DATA__" type="application/json">
        {
            "props": {
                "pageProps": {}
            },
            "page": "/app",
            "query": {},
            "buildId": "G8flwmssn-xcrcoOSnqUZ",
            "nextExport": true,
            "autoExport": true,
            "isFallback": false,
            "scriptLoader": []
        }
    </script>
</body>

</html>