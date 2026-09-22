"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
        [102], {
            6626: function(e, t, n) {
                n.d(t, {
                    VK: function() {
                        return eg
                    }
                });
                var r, a, o = n(7294);
                n(4425), n(4155);
                var i = ((r = i || {}).Pop = "POP", r.Push = "PUSH", r.Replace = "REPLACE", r),
                    l = "popstate";

                function u(e, t) {
                    if (!1 === e || null == e) throw Error(t)
                }

                function s(e, t) {
                    if (!e) {
                        "undefined" != typeof console && console.warn(t);
                        try {
                            throw Error(t)
                        } catch (e) {}
                    }
                }

                function c(e, t) {
                    return {
                        usr: e.state,
                        key: e.key,
                        idx: t
                    }
                }

                function h(e, t, n = null, r) {
                    return {
                        pathname: "string" == typeof e ? e : e.pathname,
                        search: "",
                        hash: "",
                        ..."string" == typeof t ? p(t) : t,
                        state: n,
                        key: t && t.key || r || Math.random().toString(36).substring(2, 10)
                    }
                }

                function d({
                    pathname: e = "/",
                    search: t = "",
                    hash: n = ""
                }) {
                    return t && "?" !== t && (e += "?" === t.charAt(0) ? t : "?" + t), n && "#" !== n && (e += "#" === n.charAt(0) ? n : "#" + n), e
                }

                function p(e) {
                    let t = {};
                    if (e) {
                        let n = e.indexOf("#");
                        n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
                        let r = e.indexOf("?");
                        r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e)
                    }
                    return t
                }

                function m(e, t = !1) {
                    let n = "http://localhost";
                    "undefined" != typeof window && (n = "null" !== window.location.origin ? window.location.origin : window.location.href), u(n, "No window.location.(origin|href) available to create URL");
                    let r = "string" == typeof e ? e : d(e);
                    return r = r.replace(/ $/, "%20"), !t && r.startsWith("//") && (r = n + r), new URL(r, n)
                }

                function f(e, t, n = "/") {
                    return function(e, t, n, r) {
                        let a = w(("string" == typeof t ? p(t) : t).pathname || "/", n);
                        if (null == a) return null;
                        let o = function e(t, n = [], r = [], a = "") {
                            let o = (t, o, i) => {
                                let l = {
                                    relativePath: void 0 === i ? t.path || "" : i,
                                    caseSensitive: !0 === t.caseSensitive,
                                    childrenIndex: o,
                                    route: t
                                };
                                l.relativePath.startsWith("/") && (u(l.relativePath.startsWith(a), `Absolute route path "${l.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), l.relativePath = l.relativePath.slice(a.length));
                                let s = $([a, l.relativePath]),
                                    c = r.concat(l);
                                if (t.children && t.children.length > 0 && (u(!0 !== t.index, `Index routes must not have child routes. Please remove all child routes from route path "${s}".`), e(t.children, n, c, s)), null != t.path || t.index) {
                                    var h;
                                    let e, r;
                                    n.push({
                                        path: s,
                                        score: (h = t.index, r = (e = s.split("/")).length, e.some(y) && (r += -2), h && (r += 2), e.filter(e => !y(e)).reduce((e, t) => e + (g.test(t) ? 3 : "" === t ? 1 : 10), r)),
                                        routesMeta: c
                                    })
                                }
                            };
                            return t.forEach((e, t) => {
                                if ("" !== e.path && e.path ?.includes("?"))
                                    for (let n of function e(t) {
                                            let n = t.split("/");
                                            if (0 === n.length) return [];
                                            let [r, ...a] = n, o = r.endsWith("?"), i = r.replace(/\?$/, "");
                                            if (0 === a.length) return o ? [i, ""] : [i];
                                            let l = e(a.join("/")),
                                                u = [];
                                            return u.push(...l.map(e => "" === e ? i : [i, e].join("/"))), o && u.push(...l), u.map(e => t.startsWith("/") && "" === e ? "/" : e)
                                        }(e.path)) o(e, t, n);
                                else o(e, t)
                            }), n
                        }(e);
                        ! function(e) {
                            e.sort((e, t) => {
                                var n, r;
                                return e.score !== t.score ? t.score - e.score : (n = e.routesMeta.map(e => e.childrenIndex), r = t.routesMeta.map(e => e.childrenIndex), n.length === r.length && n.slice(0, -1).every((e, t) => e === r[t]) ? n[n.length - 1] - r[r.length - 1] : 0)
                            })
                        }(o);
                        let i = null;
                        for (let e = 0; null == i && e < o.length; ++e) {
                            let t = function(e) {
                                try {
                                    return e.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
                                } catch (t) {
                                    return s(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e
                                }
                            }(a);
                            i = function(e, t, n = !1) {
                                let {
                                    routesMeta: r
                                } = e, a = {}, o = "/", i = [];
                                for (let e = 0; e < r.length; ++e) {
                                    let l = r[e],
                                        u = e === r.length - 1,
                                        s = "/" === o ? t : t.slice(o.length) || "/",
                                        c = v({
                                            path: l.relativePath,
                                            caseSensitive: l.caseSensitive,
                                            end: u
                                        }, s),
                                        h = l.route;
                                    if (!c && u && n && !r[r.length - 1].route.index && (c = v({
                                            path: l.relativePath,
                                            caseSensitive: l.caseSensitive,
                                            end: !1
                                        }, s)), !c) return null;
                                    Object.assign(a, c.params), i.push({
                                        params: a,
                                        pathname: $([o, c.pathname]),
                                        pathnameBase: C($([o, c.pathnameBase])),
                                        route: h
                                    }), "/" !== c.pathnameBase && (o = $([o, c.pathnameBase]))
                                }
                                return i
                            }(o[e], t, r)
                        }
                        return i
                    }(e, t, n, !1)
                }
                new WeakMap;
                var g = /^:[\w-]+$/,
                    y = e => "*" === e;

                function v(e, t) {
                    "string" == typeof e && (e = {
                        path: e,
                        caseSensitive: !1,
                        end: !0
                    });
                    let [n, r] = function(e, t = !1, n = !0) {
                        s("*" === e || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);
                        let r = [],
                            a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n) => (r.push({
                                paramName: t,
                                isOptional: null != n
                            }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"));
                        return e.endsWith("*") ? (r.push({
                            paramName: "*"
                        }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]
                    }(e.path, e.caseSensitive, e.end), a = t.match(n);
                    if (!a) return null;
                    let o = a[0],
                        i = o.replace(/(.)\/+$/, "$1"),
                        l = a.slice(1);
                    return {
                        params: r.reduce((e, {
                            paramName: t,
                            isOptional: n
                        }, r) => {
                            if ("*" === t) {
                                let e = l[r] || "";
                                i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
                            }
                            let a = l[r];
                            return n && !a ? e[t] = void 0 : e[t] = (a || "").replace(/%2F/g, "/"), e
                        }, {}),
                        pathname: o,
                        pathnameBase: i,
                        pattern: e
                    }
                }

                function w(e, t) {
                    if ("/" === t) return e;
                    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
                    let n = t.endsWith("/") ? t.length - 1 : t.length,
                        r = e.charAt(n);
                    return r && "/" !== r ? null : e.slice(n) || "/"
                }

                function b(e, t, n, r) {
                    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
                }

                function x(e) {
                    let t = e.filter((e, t) => 0 === t || e.route.path && e.route.path.length > 0);
                    return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase)
                }

                function E(e, t, n, r = !1) {
                    let a, o;
                    "string" == typeof e ? a = p(e) : (u(!(a = { ...e
                    }).pathname || !a.pathname.includes("?"), b("?", "pathname", "search", a)), u(!a.pathname || !a.pathname.includes("#"), b("#", "pathname", "hash", a)), u(!a.search || !a.search.includes("#"), b("#", "search", "hash", a)));
                    let i = "" === e || "" === a.pathname,
                        l = i ? "/" : a.pathname;
                    if (null == l) o = n;
                    else {
                        let e = t.length - 1;
                        if (!r && l.startsWith("..")) {
                            let t = l.split("/");
                            for (;
                                ".." === t[0];) t.shift(), e -= 1;
                            a.pathname = t.join("/")
                        }
                        o = e >= 0 ? t[e] : "/"
                    }
                    let s = function(e, t = "/") {
                            let n, {
                                pathname: r,
                                search: a = "",
                                hash: o = ""
                            } = "string" == typeof e ? p(e) : e;
                            return {
                                pathname: r ? r.startsWith("/") ? r : (n = t.replace(/\/+$/, "").split("/"), r.split("/").forEach(e => {
                                    ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                                }), n.length > 1 ? n.join("/") : "/") : t,
                                search: R(a),
                                hash: S(o)
                            }
                        }(a, o),
                        c = l && "/" !== l && l.endsWith("/"),
                        h = (i || "." === l) && n.endsWith("/");
                    return !s.pathname.endsWith("/") && (c || h) && (s.pathname += "/"), s
                }
                var $ = e => e.join("/").replace(/\/\/+/g, "/"),
                    C = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                    R = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
                    S = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
                Symbol("ResetLoaderData");
                var L = o.createContext(null);
                L.displayName = "DataRouter";
                var k = o.createContext(null);
                k.displayName = "DataRouterState";
                var N = o.createContext({
                    isTransitioning: !1
                });
                N.displayName = "ViewTransition", o.createContext(new Map).displayName = "Fetchers", o.createContext(null).displayName = "Await";
                var P = o.createContext(null);
                P.displayName = "Navigation";
                var O = o.createContext(null);
                O.displayName = "Location";
                var _ = o.createContext({
                    outlet: null,
                    matches: [],
                    isDataRoute: !1
                });
                _.displayName = "Route";
                var T = o.createContext(null);

                function M() {
                    return null != o.useContext(O)
                }

                function W() {
                    return u(M(), "useLocation() may be used only in the context of a <Router> component."), o.useContext(O).location
                }
                T.displayName = "RouteError";
                var F = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

                function A(e) {
                    o.useContext(P).static || o.useLayoutEffect(e)
                }

                function j(e, {
                    relative: t
                } = {}) {
                    let {
                        matches: n
                    } = o.useContext(_), {
                        pathname: r
                    } = W(), a = JSON.stringify(x(n));
                    return o.useMemo(() => E(e, JSON.parse(a), r, "path" === t), [e, a, r, t])
                }
                o.createContext(null);
                var H = o.createElement(function() {
                        var e;
                        let t, n, r;
                        let a = (t = o.useContext(T), n = function(e) {
                                let t = o.useContext(k);
                                return u(t, B(e)), t
                            }("useRouteError"), r = I("useRouteError"), void 0 !== t ? t : n.errors ?.[r]),
                            i = null != (e = a) && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e ? `${a.status} ${a.statusText}` : a instanceof Error ? a.message : JSON.stringify(a),
                            l = a instanceof Error ? a.stack : null,
                            s = "rgba(200,200,200, 0.5)",
                            c = {
                                padding: "2px 4px",
                                backgroundColor: s
                            },
                            h = null;
                        return console.error("Error handled by React Router default ErrorBoundary:", a), h = o.createElement(o.Fragment, null, o.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), o.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", o.createElement("code", {
                            style: c
                        }, "ErrorBoundary"), " or", " ", o.createElement("code", {
                            style: c
                        }, "errorElement"), " prop on your route.")), o.createElement(o.Fragment, null, o.createElement("h2", null, "Unexpected Application Error!"), o.createElement("h3", {
                            style: {
                                fontStyle: "italic"
                            }
                        }, i), l ? o.createElement("pre", {
                            style: {
                                padding: "0.5rem",
                                backgroundColor: s
                            }
                        }, l) : null, h)
                    }, null),
                    U = class extends o.Component {
                        constructor(e) {
                            super(e), this.state = {
                                location: e.location,
                                revalidation: e.revalidation,
                                error: e.error
                            }
                        }
                        static getDerivedStateFromError(e) {
                            return {
                                error: e
                            }
                        }
                        static getDerivedStateFromProps(e, t) {
                            return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                                error: e.error,
                                location: e.location,
                                revalidation: e.revalidation
                            } : {
                                error: void 0 !== e.error ? e.error : t.error,
                                location: t.location,
                                revalidation: e.revalidation || t.revalidation
                            }
                        }
                        componentDidCatch(e, t) {
                            console.error("React Router caught the following error during render", e, t)
                        }
                        render() {
                            return void 0 !== this.state.error ? o.createElement(_.Provider, {
                                value: this.props.routeContext
                            }, o.createElement(T.Provider, {
                                value: this.state.error,
                                children: this.props.component
                            })) : this.props.children
                        }
                    };

                function D({
                    routeContext: e,
                    match: t,
                    children: n
                }) {
                    let r = o.useContext(L);
                    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), o.createElement(_.Provider, {
                        value: e
                    }, n)
                }

                function B(e) {
                    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
                }

                function I(e) {
                    let t;
                    let n = (u(t = o.useContext(_), B(e)), t),
                        r = n.matches[n.matches.length - 1];
                    return u(r.route.id, `${e} can only be used on routes that contain a unique "id"`), r.route.id
                }
                var J = {};

                function z(e, t, n) {
                    t || J[e] || (J[e] = !0, s(!1, n))
                }

                function Y({
                    basename: e = "/",
                    children: t = null,
                    location: n,
                    navigationType: r = "POP",
                    navigator: a,
                    static: i = !1
                }) {
                    u(!M(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
                    let l = e.replace(/^\/*/, "/"),
                        c = o.useMemo(() => ({
                            basename: l,
                            navigator: a,
                            static: i,
                            future: {}
                        }), [l, a, i]);
                    "string" == typeof n && (n = p(n));
                    let {
                        pathname: h = "/",
                        search: d = "",
                        hash: m = "",
                        state: f = null,
                        key: g = "default"
                    } = n, y = o.useMemo(() => {
                        let e = w(h, l);
                        return null == e ? null : {
                            location: {
                                pathname: e,
                                search: d,
                                hash: m,
                                state: f,
                                key: g
                            },
                            navigationType: r
                        }
                    }, [l, h, d, m, f, g, r]);
                    return (s(null != y, `<Router basename="${l}"> is not able to match the URL "${h}${d}${m}" because it does not start with the basename, so the <Router> won't render anything.`), null == y) ? null : o.createElement(P.Provider, {
                        value: c
                    }, o.createElement(O.Provider, {
                        children: t,
                        value: y
                    }))
                }
                o.memo(function({
                    routes: e,
                    future: t,
                    state: n
                }) {
                    return function(e, t, n, r) {
                        let a;
                        u(M(), "useRoutes() may be used only in the context of a <Router> component.");
                        let {
                            navigator: i
                        } = o.useContext(P), {
                            matches: l
                        } = o.useContext(_), c = l[l.length - 1], h = c ? c.params : {}, d = c ? c.pathname : "/", m = c ? c.pathnameBase : "/", g = c && c.route; {
                            let e = g && g.path || "";
                            z(d, !g || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)
                        }
                        let y = W();
                        if (t) {
                            let e = "string" == typeof t ? p(t) : t;
                            u("/" === m || e.pathname ?.startsWith(m), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`), a = e
                        } else a = y;
                        let v = a.pathname || "/",
                            w = v;
                        if ("/" !== m) {
                            let e = m.replace(/^\//, "").split("/");
                            w = "/" + v.replace(/^\//, "").split("/").slice(e.length).join("/")
                        }
                        let b = f(e, {
                            pathname: w
                        });
                        s(g || null != b, `No routes matched location "${a.pathname}${a.search}${a.hash}" `), s(null == b || void 0 !== b[b.length - 1].route.element || void 0 !== b[b.length - 1].route.Component || void 0 !== b[b.length - 1].route.lazy, `Matched leaf route at location "${a.pathname}${a.search}${a.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
                        let x = function(e, t = [], n = null, r = null) {
                            if (null == e) {
                                if (!n) return null;
                                if (n.errors) e = n.matches;
                                else {
                                    if (0 !== t.length || n.initialized || !(n.matches.length > 0)) return null;
                                    e = n.matches
                                }
                            }
                            let a = e,
                                i = n ?.errors;
                            if (null != i) {
                                let e = a.findIndex(e => e.route.id && i ?.[e.route.id] !== void 0);
                                u(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`), a = a.slice(0, Math.min(a.length, e + 1))
                            }
                            let l = !1,
                                s = -1;
                            if (n)
                                for (let e = 0; e < a.length; e++) {
                                    let t = a[e];
                                    if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e), t.route.id) {
                                        let {
                                            loaderData: e,
                                            errors: r
                                        } = n, o = t.route.loader && !e.hasOwnProperty(t.route.id) && (!r || void 0 === r[t.route.id]);
                                        if (t.route.lazy || o) {
                                            l = !0, a = s >= 0 ? a.slice(0, s + 1) : [a[0]];
                                            break
                                        }
                                    }
                                }
                            return a.reduceRight((e, r, u) => {
                                let c;
                                let h = !1,
                                    d = null,
                                    p = null;
                                n && (c = i && r.route.id ? i[r.route.id] : void 0, d = r.route.errorElement || H, l && (s < 0 && 0 === u ? (z("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), h = !0, p = null) : s === u && (h = !0, p = r.route.hydrateFallbackElement || null)));
                                let m = t.concat(a.slice(0, u + 1)),
                                    f = () => {
                                        let t;
                                        return t = c ? d : h ? p : r.route.Component ? o.createElement(r.route.Component, null) : r.route.element ? r.route.element : e, o.createElement(D, {
                                            match: r,
                                            routeContext: {
                                                outlet: e,
                                                matches: m,
                                                isDataRoute: null != n
                                            },
                                            children: t
                                        })
                                    };
                                return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === u) ? o.createElement(U, {
                                    location: n.location,
                                    revalidation: n.revalidation,
                                    component: d,
                                    error: c,
                                    children: f(),
                                    routeContext: {
                                        outlet: null,
                                        matches: m,
                                        isDataRoute: !0
                                    }
                                }) : f()
                            }, null)
                        }(b && b.map(e => Object.assign({}, e, {
                            params: Object.assign({}, h, e.params),
                            pathname: $([m, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
                            pathnameBase: "/" === e.pathnameBase ? m : $([m, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                        })), l, n, r);
                        return t && x ? o.createElement(O.Provider, {
                            value: {
                                location: {
                                    pathname: "/",
                                    search: "",
                                    hash: "",
                                    state: null,
                                    key: "default",
                                    ...a
                                },
                                navigationType: "POP"
                            }
                        }, x) : x
                    }(e, void 0, n, t)
                }), o.Component;
                var K = "get",
                    V = "application/x-www-form-urlencoded";

                function q(e) {
                    return null != e && "string" == typeof e.tagName
                }
                var X = null,
                    G = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

                function Q(e) {
                    return null == e || G.has(e) ? e : (s(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${V}"`), null)
                }

                function Z(e, t) {
                    if (!1 === e || null == e) throw Error(t)
                }
                async function ee(e, t) {
                    if (e.id in t) return t[e.id];
                    try {
                        let n = await
                        import (e.module);
                        return t[e.id] = n, n
                    } catch (t) {
                        return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(t), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
                    }
                }

                function et(e) {
                    return null != e && (null == e.href ? "preload" === e.rel && "string" == typeof e.imageSrcSet && "string" == typeof e.imageSizes : "string" == typeof e.rel && "string" == typeof e.href)
                }
                async function en(e, t, n) {
                    var r, a;
                    let o, i;
                    return r = (await Promise.all(e.map(async e => {
                        let r = t.routes[e.route.id];
                        if (r) {
                            let e = await ee(r, n);
                            return e.links ? e.links() : []
                        }
                        return []
                    }))).flat(1).filter(et).filter(e => "stylesheet" === e.rel || "preload" === e.rel).map(e => "stylesheet" === e.rel ? { ...e,
                        rel: "prefetch",
                        as: "style"
                    } : { ...e,
                        rel: "prefetch"
                    }), o = new Set, i = new Set(void 0), r.reduce((e, t) => {
                        if (a && !(null != t && "string" == typeof t.page) && "script" === t.as && t.href && i.has(t.href)) return e;
                        let n = JSON.stringify(function(e) {
                            let t = {};
                            for (let n of Object.keys(e).sort()) t[n] = e[n];
                            return t
                        }(t));
                        return o.has(n) || (o.add(n), e.push({
                            key: n,
                            link: t
                        })), e
                    }, [])
                }

                function er(e, t, n, r, a, o) {
                    let i = (e, t) => !n[t] || e.route.id !== n[t].route.id,
                        l = (e, t) => n[t].pathname !== e.pathname || n[t].route.path ?.endsWith("*") && n[t].params["*"] !== e.params["*"];
                    return "assets" === o ? t.filter((e, t) => i(e, t) || l(e, t)) : "data" === o ? t.filter((t, o) => {
                        let u = r.routes[t.route.id];
                        if (!u || !u.hasLoader) return !1;
                        if (i(t, o) || l(t, o)) return !0;
                        if (t.route.shouldRevalidate) {
                            let r = t.route.shouldRevalidate({
                                currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
                                currentParams: n[0] ?.params || {},
                                nextUrl: new URL(e, window.origin),
                                nextParams: t.params,
                                defaultShouldRevalidate: !0
                            });
                            if ("boolean" == typeof r) return r
                        }
                        return !0
                    }) : []
                }

                function ea(e, t, {
                    includeHydrateFallback: n
                } = {}) {
                    return [...new Set(e.map(e => {
                        let r = t.routes[e.route.id];
                        if (!r) return [];
                        let a = [r.module];
                        return r.clientActionModule && (a = a.concat(r.clientActionModule)), r.clientLoaderModule && (a = a.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (a = a.concat(r.hydrateFallbackModule)), r.imports && (a = a.concat(r.imports)), a
                    }).flat(1))]
                }
                Object.getOwnPropertyNames(Object.prototype).sort().join("\0"), "undefined" != typeof window ? window : "undefined" != typeof globalThis && globalThis, Symbol("SingleFetchRedirect");
                var eo = new Set([100, 101, 204, 205]);

                function ei() {
                    let e = o.useContext(L);
                    return Z(e, "You must render this element inside a <DataRouterContext.Provider> element"), e
                }

                function el() {
                    let e = o.useContext(k);
                    return Z(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e
                }
                o.Component;
                var eu = o.createContext(void 0);

                function es() {
                    let e = o.useContext(eu);
                    return Z(e, "You must render this element inside a <HydratedRouter> element"), e
                }

                function ec(e, t) {
                    return n => {
                        e && e(n), n.defaultPrevented || t(n)
                    }
                }

                function eh({
                    page: e,
                    ...t
                }) {
                    let {
                        router: n
                    } = ei(), r = o.useMemo(() => f(n.routes, e, n.basename), [n.routes, e, n.basename]);
                    return r ? o.createElement(ed, {
                        page: e,
                        matches: r,
                        ...t
                    }) : null
                }

                function ed({
                    page: e,
                    matches: t,
                    ...n
                }) {
                    let r = W(),
                        {
                            manifest: a,
                            routeModules: i
                        } = es(),
                        {
                            basename: l
                        } = ei(),
                        {
                            loaderData: u,
                            matches: s
                        } = el(),
                        c = o.useMemo(() => er(e, t, s, a, r, "data"), [e, t, s, a, r]),
                        h = o.useMemo(() => er(e, t, s, a, r, "assets"), [e, t, s, a, r]),
                        d = o.useMemo(() => {
                            let n;
                            if (e === r.pathname + r.search + r.hash) return [];
                            let o = new Set,
                                s = !1;
                            if (t.forEach(e => {
                                    let t = a.routes[e.route.id];
                                    t && t.hasLoader && (!c.some(t => t.route.id === e.route.id) && e.route.id in u && i[e.route.id] ?.shouldRevalidate ? s = !0 : t.hasClientLoader ? s = !0 : o.add(e.route.id))
                                }), 0 === o.size) return [];
                            let h = ("/" === (n = "string" == typeof e ? new URL(e, "undefined" == typeof window ? "server://singlefetch/" : window.location.origin) : e).pathname ? n.pathname = "_root.data" : l && "/" === w(n.pathname, l) ? n.pathname = `${l.replace(/\/$/,"")}/_root.data` : n.pathname = `${n.pathname.replace(/\/$/,"")}.data`, n);
                            return s && o.size > 0 && h.searchParams.set("_routes", t.filter(e => o.has(e.route.id)).map(e => e.route.id).join(",")), [h.pathname + h.search]
                        }, [l, u, r, a, c, t, e, i]),
                        p = o.useMemo(() => ea(h, a), [h, a]),
                        m = function(e) {
                            let {
                                manifest: t,
                                routeModules: n
                            } = es(), [r, a] = o.useState([]);
                            return o.useEffect(() => {
                                let r = !1;
                                return en(e, t, n).then(e => {
                                    r || a(e)
                                }), () => {
                                    r = !0
                                }
                            }, [e, t, n]), r
                        }(h);
                    return o.createElement(o.Fragment, null, d.map(e => o.createElement("link", {
                        key: e,
                        rel: "prefetch",
                        as: "fetch",
                        href: e,
                        ...n
                    })), p.map(e => o.createElement("link", {
                        key: e,
                        rel: "modulepreload",
                        href: e,
                        ...n
                    })), m.map(({
                        key: e,
                        link: t
                    }) => o.createElement("link", {
                        key: e,
                        ...t
                    })))
                }
                eu.displayName = "FrameworkContext";
                var ep = !1;

                function em(e) {
                    let {
                        manifest: t,
                        serverHandoffString: n,
                        isSpaMode: r,
                        renderMeta: a,
                        routeDiscovery: i,
                        ssr: l
                    } = es(), {
                        router: u,
                        static: s,
                        staticContext: c
                    } = ei(), {
                        matches: h
                    } = el(), d = "lazy" === i.mode && !0 === l;
                    a && (a.didRenderScripts = !0);
                    let p = r && !ep ? [h[0]] : h;
                    o.useEffect(() => {
                        ep = !0
                    }, []);
                    let m = o.useMemo(() => {
                                let r = c ? `window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());` : " ",
                                    a = s ? `${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(t.url)}`};
${p.map((e,n)=>{let r=`route${n}`,a=t.routes[e.route.id];Z(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:i,clientMiddlewareModule:l,hydrateFallbackModule:u,module:s}=a,c=[...o?[{module:o,varName:`
                                ${
                                    r
                                }
                                _clientAction `}]:[],...i?[{module:i,varName:`
                                ${
                                    r
                                }
                                _clientLoader `}]:[],...l?[{module:l,varName:`
                                ${
                                    r
                                }
                                _clientMiddleware `}]:[],...u?[{module:u,varName:`
                                ${
                                    r
                                }
                                _HydrateFallback `}]:[],{module:s,varName:`
                                ${
                                    r
                                }
                                _main `}];return 1===c.length?`
                                import * as ${
                                    r
                                } from ${
                                    JSON.stringify(s)
                                };
                                `:[c.map(e=>`
                                import * as ${
                                    e.varName
                                } from "${e.module}";
                                `).join("\n"),`
                                const ${
                                    r
                                } = {
                                    ${
                                        c.map(e => `...${e.varName}`).join(",")
                                    }
                                };
                                `].join("\n")}).join("\n")}
  ${d?`window.__reactRouterManifest = ${JSON.stringify(function({sri:e,...t},n){let r=new Set(n.state.matches.map(e=>e.route.id)),a=n.state.location.pathname.split("/").filter(Boolean),o=["/"];for(a.pop();a.length>0;)o.push(`/${a.join("/")}`), a.pop(); o.forEach(e => {
                                let t = f(n.routes, e, n.basename);
                                t && t.forEach(e => r.add(e.route.id))
                            });
                            let i = [...r].reduce((e, n) => Object.assign(e, {
                                [n]: t.routes[n]
                            }), {});
                            return { ...t,
                                routes: i,
                                sri: !!e || void 0
                            }
                        }(t, u),
                        null, 2)
            };
            `:""}
  window.__reactRouterRouteModules = {${p.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};

import(${JSON.stringify(t.entry.module)});`: " ";
            return o.createElement(o.Fragment, null, o.createElement("script", { ...e,
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: {
                    __html: r
                },
                type: void 0
            }), o.createElement("script", { ...e,
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: {
                    __html: a
                },
                type: "module",
                async: !0
            }))
        },
        []), g = ep ? [] : [...new Set(t.entry.imports.concat(ea(p, t, {
        includeHydrateFallback: !0
    })))], y = "object" == typeof t.sri ? t.sri : {};
    return ep ? null : o.createElement(o.Fragment, null, "object" == typeof t.sri ? o.createElement("script", {
        "rr-importmap": "",
        type: "importmap",
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: JSON.stringify({
                integrity: y
            })
        }
    }) : null, d ? null : o.createElement("link", {
        rel: "modulepreload",
        href: t.url,
        crossOrigin: e.crossOrigin,
        integrity: y[t.url],
        suppressHydrationWarning: !0
    }), o.createElement("link", {
        rel: "modulepreload",
        href: t.entry.module,
        crossOrigin: e.crossOrigin,
        integrity: y[t.entry.module],
        suppressHydrationWarning: !0
    }), g.map(t => o.createElement("link", {
        key: t,
        rel: "modulepreload",
        href: t,
        crossOrigin: e.crossOrigin,
        integrity: y[t],
        suppressHydrationWarning: !0
    })), m)
}
var ef = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
try {
    ef && (window.__reactRouterVersion = "7.6.2")
} catch (e) {}

function eg({
    basename: e,
    children: t,
    window: n
}) {
    let r = o.useRef();
    null == r.current && (r.current = function(e = {}) {
        return function(e, t, n, r = {}) {
            let {
                window: a = document.defaultView,
                v5Compat: o = !1
            } = r, i = a.history, u = "POP", s = null, d = p();

            function p() {
                return (i.state || {
                    idx: null
                }).idx
            }

            function f() {
                u = "POP";
                let e = p(),
                    t = null == e ? null : e - d;
                d = e, s && s({
                    action: u,
                    location: g.location,
                    delta: t
                })
            }
            null == d && (d = 0, i.replaceState({ ...i.state,
                idx: d
            }, ""));
            let g = {
                get action() {
                    return u
                },
                get location() {
                    return e(a, i)
                },
                listen(e) {
                    if (s) throw Error("A history only accepts one active listener");
                    return a.addEventListener(l, f), s = e, () => {
                        a.removeEventListener(l, f), s = null
                    }
                },
                createHref: e => t(a, e),
                createURL: function(e) {
                    return m(e)
                },
                encodeLocation(e) {
                    let t = m(e);
                    return {
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash
                    }
                },
                push: function(e, t) {
                    u = "PUSH";
                    let n = h(g.location, e, t),
                        r = c(n, d = p() + 1),
                        l = g.createHref(n);
                    try {
                        i.pushState(r, "", l)
                    } catch (e) {
                        if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
                        a.location.assign(l)
                    }
                    o && s && s({
                        action: u,
                        location: g.location,
                        delta: 1
                    })
                },
                replace: function(e, t) {
                    u = "REPLACE";
                    let n = h(g.location, e, t),
                        r = c(n, d = p()),
                        a = g.createHref(n);
                    i.replaceState(r, "", a), o && s && s({
                        action: u,
                        location: g.location,
                        delta: 0
                    })
                },
                go: e => i.go(e)
            };
            return g
        }(function(e, t) {
            let {
                pathname: n,
                search: r,
                hash: a
            } = e.location;
            return h("", {
                pathname: n,
                search: r,
                hash: a
            }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }, function(e, t) {
            return "string" == typeof t ? t : d(t)
        }, null, e)
    }({
        window: n,
        v5Compat: !0
    }));
    let a = r.current,
        [i, u] = o.useState({
            action: a.action,
            location: a.location
        }),
        s = o.useCallback(e => {
            o.startTransition(() => u(e))
        }, [u]);
    return o.useLayoutEffect(() => a.listen(s), [a, s]), o.createElement(Y, {
        basename: e,
        children: t,
        location: i.location,
        navigationType: i.action,
        navigator: a
    })
}
var ey = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ev = o.forwardRef(function({
        onClick: e,
        discover: t = "render",
        prefetch: n = "none",
        relative: r,
        reloadDocument: a,
        replace: i,
        state: l,
        target: c,
        to: h,
        preventScrollReset: p,
        viewTransition: m,
        ...f
    }, g) {
        let y, {
                basename: v
            } = o.useContext(P),
            b = "string" == typeof h && ey.test(h),
            C = !1;
        if ("string" == typeof h && b && (y = h, ef)) try {
            let e = new URL(window.location.href),
                t = new URL(h.startsWith("//") ? e.protocol + h : h),
                n = w(t.pathname, v);
            t.origin === e.origin && null != n ? h = n + t.search + t.hash : C = !0
        } catch (e) {
            s(!1, `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
        let R = function(e, {
                relative: t
            } = {}) {
                u(M(), "useHref() may be used only in the context of a <Router> component.");
                let {
                    basename: n,
                    navigator: r
                } = o.useContext(P), {
                    hash: a,
                    pathname: i,
                    search: l
                } = j(e, {
                    relative: t
                }), s = i;
                return "/" !== n && (s = "/" === i ? n : $([n, i])), r.createHref({
                    pathname: s,
                    search: l,
                    hash: a
                })
            }(h, {
                relative: r
            }),
            [S, k, N] = function(e, t) {
                let n = o.useContext(eu),
                    [r, a] = o.useState(!1),
                    [i, l] = o.useState(!1),
                    {
                        onFocus: u,
                        onBlur: s,
                        onMouseEnter: c,
                        onMouseLeave: h,
                        onTouchStart: d
                    } = t,
                    p = o.useRef(null);
                o.useEffect(() => {
                    if ("render" === e && l(!0), "viewport" === e) {
                        let e = new IntersectionObserver(e => {
                            e.forEach(e => {
                                l(e.isIntersecting)
                            })
                        }, {
                            threshold: .5
                        });
                        return p.current && e.observe(p.current), () => {
                            e.disconnect()
                        }
                    }
                }, [e]), o.useEffect(() => {
                    if (r) {
                        let e = setTimeout(() => {
                            l(!0)
                        }, 100);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [r]);
                let m = () => {
                        a(!0)
                    },
                    f = () => {
                        a(!1), l(!1)
                    };
                return n ? "intent" !== e ? [i, p, {}] : [i, p, {
                    onFocus: ec(u, m),
                    onBlur: ec(s, f),
                    onMouseEnter: ec(c, m),
                    onMouseLeave: ec(h, f),
                    onTouchStart: ec(d, m)
                }] : [!1, p, {}]
            }(n, f),
            O = function(e, {
                target: t,
                replace: n,
                state: r,
                preventScrollReset: a,
                relative: i,
                viewTransition: l
            } = {}) {
                let c = function() {
                        let {
                            isDataRoute: e
                        } = o.useContext(_);
                        return e ? function() {
                            var e;
                            let t;
                            let {
                                router: n
                            } = (e = "useNavigate", u(t = o.useContext(L), B(e)), t), r = I("useNavigate"), a = o.useRef(!1);
                            return A(() => {
                                a.current = !0
                            }), o.useCallback(async (e, t = {}) => {
                                s(a.current, F), a.current && ("number" == typeof e ? n.navigate(e) : await n.navigate(e, {
                                    fromRouteId: r,
                                    ...t
                                }))
                            }, [n, r])
                        }() : function() {
                            u(M(), "useNavigate() may be used only in the context of a <Router> component.");
                            let e = o.useContext(L),
                                {
                                    basename: t,
                                    navigator: n
                                } = o.useContext(P),
                                {
                                    matches: r
                                } = o.useContext(_),
                                {
                                    pathname: a
                                } = W(),
                                i = JSON.stringify(x(r)),
                                l = o.useRef(!1);
                            return A(() => {
                                l.current = !0
                            }), o.useCallback((r, o = {}) => {
                                if (s(l.current, F), !l.current) return;
                                if ("number" == typeof r) {
                                    n.go(r);
                                    return
                                }
                                let u = E(r, JSON.parse(i), a, "path" === o.relative);
                                null == e && "/" !== t && (u.pathname = "/" === u.pathname ? t : $([t, u.pathname])), (o.replace ? n.replace : n.push)(u, o.state, o)
                            }, [t, n, i, a, e])
                        }()
                    }(),
                    h = W(),
                    p = j(e, {
                        relative: i
                    });
                return o.useCallback(o => {
                    0 !== o.button || t && "_self" !== t || o.metaKey || o.altKey || o.ctrlKey || o.shiftKey || (o.preventDefault(), c(e, {
                        replace: void 0 !== n ? n : d(h) === d(p),
                        state: r,
                        preventScrollReset: a,
                        relative: i,
                        viewTransition: l
                    }))
                }, [h, c, p, n, r, t, e, a, i, l])
            }(h, {
                replace: i,
                state: l,
                target: c,
                preventScrollReset: p,
                relative: r,
                viewTransition: m
            }),
            T = o.createElement("a", { ...f,
                ...N,
                href: y || R,
                onClick: C || a ? e : function(t) {
                    e && e(t), t.defaultPrevented || O(t)
                },
                ref: function(...e) {
                    return t => {
                        e.forEach(e => {
                            "function" == typeof e ? e(t) : null != e && (e.current = t)
                        })
                    }
                }(g, k),
                target: c,
                "data-discover": b || "render" !== t ? void 0 : "true"
            });
        return S && !b ? o.createElement(o.Fragment, null, T, o.createElement(eh, {
            page: R
        })) : T
    });

function ew(e) {
    let t = o.useContext(L);
    return u(t, `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`), t
}
ev.displayName = "Link", o.forwardRef(function({
    "aria-current": e = "page",
    caseSensitive: t = !1,
    className: n = "",
    end: r = !1,
    style: a,
    to: i,
    viewTransition: l,
    children: s,
    ...c
}, h) {
    let d, p = j(i, {
            relative: c.relative
        }),
        m = W(),
        f = o.useContext(k),
        {
            navigator: g,
            basename: y
        } = o.useContext(P),
        b = null != f && function(e, t = {}) {
            let n = o.useContext(N);
            u(null != n, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
            let {
                basename: r
            } = ew("useViewTransitionState"), a = j(e, {
                relative: t.relative
            });
            if (!n.isTransitioning) return !1;
            let i = w(n.currentLocation.pathname, r) || n.currentLocation.pathname,
                l = w(n.nextLocation.pathname, r) || n.nextLocation.pathname;
            return null != v(a.pathname, l) || null != v(a.pathname, i)
        }(p) && !0 === l,
        x = g.encodeLocation ? g.encodeLocation(p).pathname : p.pathname,
        E = m.pathname,
        $ = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
    t || (E = E.toLowerCase(), $ = $ ? $.toLowerCase() : null, x = x.toLowerCase()), $ && y && ($ = w($, y) || $);
    let C = "/" !== x && x.endsWith("/") ? x.length - 1 : x.length,
        R = E === x || !r && E.startsWith(x) && "/" === E.charAt(C),
        S = null != $ && ($ === x || !r && $.startsWith(x) && "/" === $.charAt(x.length)),
        L = {
            isActive: R,
            isPending: S,
            isTransitioning: b
        },
        O = R ? e : void 0;
    d = "function" == typeof n ? n(L) : [n, R ? "active" : null, S ? "pending" : null, b ? "transitioning" : null].filter(Boolean).join(" ");
    let _ = "function" == typeof a ? a(L) : a;
    return o.createElement(ev, { ...c,
        "aria-current": O,
        className: d,
        ref: h,
        style: _,
        to: i,
        viewTransition: l
    }, "function" == typeof s ? s(L) : s)
}).displayName = "NavLink", o.forwardRef(({
    discover: e = "render",
    fetcherKey: t,
    navigate: n,
    reloadDocument: r,
    replace: a,
    state: i,
    method: l = K,
    action: s,
    onSubmit: c,
    relative: h,
    preventScrollReset: p,
    viewTransition: m,
    ...f
}, g) => {
    let y = function() {
            let {
                router: e
            } = ew("useSubmit"), {
                basename: t
            } = o.useContext(P), n = I("useRouteId");
            return o.useCallback(async (r, a = {}) => {
                let {
                    action: o,
                    method: i,
                    encType: l,
                    formData: u,
                    body: s
                } = function(e, t) {
                    let n, r, a, o, i;
                    if (q(e) && "form" === e.tagName.toLowerCase()) {
                        let i = e.getAttribute("action");
                        r = i ? w(i, t) : null, n = e.getAttribute("method") || K, a = Q(e.getAttribute("enctype")) || V, o = new FormData(e)
                    } else if (q(e) && "button" === e.tagName.toLowerCase() || q(e) && "input" === e.tagName.toLowerCase() && ("submit" === e.type || "image" === e.type)) {
                        let i = e.form;
                        if (null == i) throw Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                        let l = e.getAttribute("formaction") || i.getAttribute("action");
                        if (r = l ? w(l, t) : null, n = e.getAttribute("formmethod") || i.getAttribute("method") || K, a = Q(e.getAttribute("formenctype")) || Q(i.getAttribute("enctype")) || V, o = new FormData(i, e), ! function() {
                                if (null === X) try {
                                    new FormData(document.createElement("form"), 0), X = !1
                                } catch (e) {
                                    X = !0
                                }
                                return X
                            }()) {
                            let {
                                name: t,
                                type: n,
                                value: r
                            } = e;
                            if ("image" === n) {
                                let e = t ? `${t}.` : "";
                                o.append(`${e}x`, "0"), o.append(`${e}y`, "0")
                            } else t && o.append(t, r)
                        }
                    } else if (q(e)) throw Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
                    else n = K, r = null, a = V, i = e;
                    return o && "text/plain" === a && (i = o, o = void 0), {
                        action: r,
                        method: n.toLowerCase(),
                        encType: a,
                        formData: o,
                        body: i
                    }
                }(r, t);
                if (!1 === a.navigate) {
                    let t = a.fetcherKey || ex();
                    await e.fetch(t, n, a.action || o, {
                        preventScrollReset: a.preventScrollReset,
                        formData: u,
                        body: s,
                        formMethod: a.method || i,
                        formEncType: a.encType || l,
                        flushSync: a.flushSync
                    })
                } else await e.navigate(a.action || o, {
                    preventScrollReset: a.preventScrollReset,
                    formData: u,
                    body: s,
                    formMethod: a.method || i,
                    formEncType: a.encType || l,
                    replace: a.replace,
                    state: a.state,
                    fromRouteId: n,
                    flushSync: a.flushSync,
                    viewTransition: a.viewTransition
                })
            }, [e, t, n])
        }(),
        v = function(e, {
            relative: t
        } = {}) {
            let {
                basename: n
            } = o.useContext(P), r = o.useContext(_);
            u(r, "useFormAction must be used inside a RouteContext");
            let [a] = r.matches.slice(-1), i = { ...j(e || ".", {
                    relative: t
                })
            }, l = W();
            if (null == e) {
                i.search = l.search;
                let e = new URLSearchParams(i.search),
                    t = e.getAll("index");
                if (t.some(e => "" === e)) {
                    e.delete("index"), t.filter(e => e).forEach(t => e.append("index", t));
                    let n = e.toString();
                    i.search = n ? `?${n}` : ""
                }
            }
            return (!e || "." === e) && a.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (i.pathname = "/" === i.pathname ? n : $([n, i.pathname])), d(i)
        }(s, {
            relative: h
        }),
        b = "get" === l.toLowerCase() ? "get" : "post",
        x = "string" == typeof s && ey.test(s);
    return o.createElement("form", {
        ref: g,
        method: b,
        action: v,
        onSubmit: r ? c : e => {
            if (c && c(e), e.defaultPrevented) return;
            e.preventDefault();
            let r = e.nativeEvent.submitter,
                o = r ?.getAttribute("formmethod") || l;
            y(r || e.currentTarget, {
                fetcherKey: t,
                method: o,
                navigate: n,
                replace: a,
                state: i,
                relative: h,
                preventScrollReset: p,
                viewTransition: m
            })
        },
        ...f,
        "data-discover": x || "render" !== e ? void 0 : "true"
    })
}).displayName = "Form";
var eb = 0,
    ex = () => `__${String(++eb)}__`,
    eE = ((a = eE || {}).Development = "development", a.Production = "production", a.Test = "test", a);
[...eo]
}
}]);