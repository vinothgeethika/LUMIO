self.__BUILD_MANIFEST = function(s, e, a, c) {
    return {
        __rewrites: {
            afterFiles: [{
                has: s,
                source: "/sitemap.xml",
                destination: "/api/sitemap"
            }, {
                has: s,
                source: "/.well-known/oauth-authorization-server",
                destination: a
            }, {
                has: s,
                source: "/.well-known/oauth-authorization-server/:path*",
                destination: a
            }, {
                has: s,
                source: "/.well-known/oauth-protected-resource",
                destination: c
            }, {
                has: s,
                source: "/.well-known/oauth-protected-resource/:path*",
                destination: c
            }],
            beforeFiles: [],
            fallback: []
        },
        "/": ["static/chunks/67a3bf3c-41376aecf3652704.js", "static/chunks/cb355538-99d1968dea0727ef.js", "static/chunks/1712-09f48a5fc8a8afa9.js", "static/chunks/1218-233da7b62ce439ae.js", "static/chunks/pages/index-591818176a16a196.js"],
        "/_error": ["static/chunks/pages/_error-e4149ec882d21a8c.js"],
        "/account": ["static/chunks/pages/account-a5f3e58bfd076866.js"],
        "/app": ["static/chunks/pages/app-af57dfe080e0f8e5.js"],
        "/app.html": ["static/chunks/pages/app-af57dfe080e0f8e5.js"],
        "/auth": ["static/chunks/pages/auth-fe2e4a57bc63bb34.js"],
        "/blog": [e, "static/chunks/pages/blog-c394bfaffa61e0c7.js"],
        "/blog/[slug]": [e, "static/chunks/9072-ba5ae5e094a44b42.js", "static/chunks/pages/blog/[slug]-ae9d5b28b05c4181.js"],
        "/compare": ["static/chunks/pages/compare-9849c9c9faf52952.js"],
        "/cookie-policy": ["static/chunks/pages/cookie-policy-7fcd1917709182d2.js"],
        "/dev/preview-export": ["static/chunks/pages/dev/preview-export-edd052f03f4a7124.js"],
        "/licenses": [e, "static/chunks/pages/licenses-d2e746721b6d8bd9.js"],
        "/oauth/authorize": ["static/chunks/pages/oauth/authorize-5e0fac8f54157f0e.js"],
        "/privacy": ["static/chunks/pages/privacy-ef36db3dc13370f4.js"],
        "/screens": ["static/chunks/pages/screens-e710b8428a1d969c.js"],
        "/terms-of-service": ["static/chunks/pages/terms-of-service-e3da70ed46957099.js"],
        sortedPages: ["/", "/_app", "/_error", "/account", "/app", "/app.html", "/auth", "/blog", "/blog/[slug]", "/compare", "/cookie-policy", "/dev/preview-export", "/licenses", "/oauth/authorize", "/privacy", "/screens", "/terms-of-service"]
    }
}(void 0, "static/chunks/1664-5092c49100e558e0.js", "/api/oauth/metadata", "/api/oauth/protected-resource"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();