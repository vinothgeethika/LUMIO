(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6366], {
        4008: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/app", function() {
                return r(1215)
            }]);
            (window.__NEXT_P = window.__NEXT_P || []).push(["/app.html", function() {
                return r(1215)
            }]);
        },
        7438: function(e, t, a) {
            "use strict";
            a.d(t, {
                WE: function() {
                    return o
                },
                calculateVideoSync: function() {
                    return r
                }
            });
            let r = function(e) {
                    let {
                        currentTime: t,
                        videoDuration: a,
                        animationDuration: r,
                        frameIndex: o,
                        totalVideoFrames: s,
                        fps: l = 30
                    } = e;
                    return a > r ? i({
                        currentTime: t,
                        videoDuration: a,
                        animationDuration: r,
                        frameIndex: o,
                        totalVideoFrames: s,
                        fps: l
                    }) : n({
                        currentTime: t,
                        videoDuration: a,
                        animationDuration: r,
                        frameIndex: o,
                        totalVideoFrames: s,
                        fps: l
                    })
                },
                i = function(e) {
                    let t, a, {
                            currentTime: r,
                            videoDuration: n,
                            animationDuration: o,
                            frameIndex: s,
                            totalVideoFrames: l,
                            fps: c = 30
                        } = e,
                        p = Math.floor(o * c);
                    return void 0 === i._maxPhase1Time && (i._maxPhase1Time = 0), s < p - 1 ? (t = r, r > i._maxPhase1Time && (i._maxPhase1Time = r), a = "PLAYING") : (t = i._maxPhase1Time - .01, a = "FROZEN"), {
                        mixerTime: t,
                        videoFrameIndex: s % l,
                        phase: a,
                        type: "LONG",
                        animationEndFrame: p,
                        seekTime: r % n
                    }
                },
                n = function(e) {
                    let t, a, r, {
                        currentTime: i,
                        videoDuration: n,
                        animationDuration: o,
                        frameIndex: s,
                        totalVideoFrames: l,
                        fps: c = 30
                    } = e;
                    if (i < n) t = i, a = s, r = "PLAYING";
                    else if (i < o) t = n - .01, a = Math.floor((n - .01) * c), r = "FROZEN";
                    else {
                        let e = i % o;
                        e < n ? (t = e, a = Math.floor(e * c), r = "RESTARTED") : (t = n - .01, a = Math.floor((n - .01) * c), r = "FROZEN_CYCLE")
                    }
                    return {
                        mixerTime: i,
                        videoFrameIndex: Math.min(a, l - 1),
                        phase: r,
                        type: "SHORT",
                        seekTime: Math.max(0, Math.min(t, n - .01))
                    }
                },
                o = function() {
                    void 0 !== i._maxPhase1Time && (i._maxPhase1Time = 0)
                };
        },
        2602: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    default: function() {
                        return i
                    },
                    noSSR: function() {
                        return a
                    }
                });
            let l = r(8754);
            r(5893), r(7294);
            let n = l._(r(5491));

            function o(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function a(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function i(e, t) {
                let r = n.default,
                    l = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: r,
                                pastDelay: l
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? l.loader = () => e : "function" == typeof e ? l.loader = e : "object" == typeof e && (l = { ...l,
                    ...e
                });
                let i = (l = { ...l,
                    ...t
                }).loader;
                return (l.loadableGenerated && (l = { ...l,
                    ...l.loadableGenerated
                }, delete l.loadableGenerated), "boolean" != typeof l.ssr || l.ssr) ? r({ ...l,
                    loader: () => null != i ? i().then(o) : Promise.resolve(o(() => null))
                }) : (delete l.webpack, delete l.modules, a(r, l))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1159: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let l = r(8754)._(r(7294)).default.createContext(null)
        },
        5491: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            let l = r(8754)._(r(7294)),
                n = r(1159),
                o = [],
                a = [],
                i = !1;

            function u(e) {
                let t = e(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = t.then(e => (r.loading = !1, r.loaded = e, e)).catch(e => {
                    throw r.loading = !1, r.error = e, e
                }), r
            }
            class s {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, t.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = { ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...e
                    }, this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            }

            function d(e) {
                return function(e, t) {
                    let r = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        o = null;

                    function u() {
                        if (!o) {
                            let t = new s(e, r);
                            o = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return o.promise()
                    }
                    if (!i) {
                        let e = r.webpack ? r.webpack() : r.modules;
                        e && a.push(t => {
                            for (let r of e)
                                if (t.includes(r)) return u()
                        })
                    }

                    function d(e, t) {
                        ! function() {
                            u();
                            let e = l.default.useContext(n.LoadableContext);
                            e && Array.isArray(r.modules) && r.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let a = l.default.useSyncExternalStore(o.subscribe, o.getCurrentValue, o.getCurrentValue);
                        return l.default.useImperativeHandle(t, () => ({
                            retry: o.retry
                        }), []), l.default.useMemo(() => {
                            var t;
                            return a.loading || a.error ? l.default.createElement(r.loading, {
                                isLoading: a.loading,
                                pastDelay: a.pastDelay,
                                timedOut: a.timedOut,
                                error: a.error,
                                retry: o.retry
                            }) : a.loaded ? l.default.createElement((t = a.loaded) && t.default ? t.default : t, e) : null
                        }, [e, a])
                    }
                    return d.preload = () => u(), d.displayName = "LoadableComponent", l.default.forwardRef(d)
                }(u, e)
            }

            function c(e, t) {
                let r = [];
                for (; e.length;) {
                    let l = e.pop();
                    r.push(l(t))
                }
                return Promise.all(r).then(() => {
                    if (e.length) return c(e, t)
                })
            }
            d.preloadAll = () => new Promise((e, t) => {
                c(o).then(e, t)
            }), d.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
                let r = () => (i = !0, t());
                c(a, e).then(r, r)
            })), window.__NEXT_PRELOADREADY = d.preloadReady;
            let f = d
        },
        1215: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var l = r(5893),
                n = r(5152),
                o = r.n(n),
                a = r(7294),
                i = r(1163),
                u = r(8259);

            function s() {
                return (0, l.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 16,
                        height: "100vh",
                        backgroundColor: "#0a0a0a"
                    },
                    children: [(0, l.jsx)("style", {
                        children: `
        @keyframes app-spinner {
          to { transform: rotate(360deg); }
        }
      `
                    }), (0, l.jsx)("div", {
                        style: {
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            border: "3px solid rgba(255,255,255,0.1)",
                            borderTopColor: "#FF6B6B",
                            borderRightColor: "#845EC2",
                            animation: "app-spinner 0.8s linear infinite"
                        }
                    }), (0, l.jsx)("span", {
                        style: {
                            color: "#c0c0c0",
                            fontSize: 14,
                            fontWeight: 400,
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                        },
                        children: "Setting the stage… (React Hydrated)"
                    })]
                })
            }
            class SafeBoundary extends a.Component {
                constructor(props) {
                    super(props);
                    this.state = { error: null };
                }
                static getDerivedStateFromError(error) {
                    return { error: error };
                }
                componentDidCatch(error, errorInfo) {
                    window.__log && window.__log("React ErrorBoundary CAUGHT: " + error.message + "\nComponent Stack: " + (errorInfo ? errorInfo.componentStack : ''), "#ff2222");
                    console.error("ErrorBoundary caught:", error, errorInfo);
                }
                render() {
                    if (this.state.error) {
                        return (0, l.jsxs)("div", {
                            style: { padding: 40, color: '#ff6b6b', background: '#0a0a0a', minHeight: '100vh', fontFamily: 'monospace' },
                            children: [
                                (0, l.jsx)("h2", { children: "⚠️ Component Render Error Caught:" }),
                                (0, l.jsx)("p", { children: this.state.error.message }),
                                (0, l.jsx)("pre", { style: { background: '#181818', padding: 15, borderRadius: 8, overflow: 'auto' }, children: this.state.error.stack }),
                                (0, l.jsx)("button", { onClick: () => this.setState({ error: null }), style: { padding: '8px 16px', background: '#333', color: '#fff', border: '1px solid #555', cursor: 'pointer', borderRadius: 4, marginTop: 16 }, children: "Retry" })
                            ]
                        });
                    }
                    return this.props.children;
                }
            }

            let AppEditor = null;
            function d(props) {
                let [tick, setTick] = (0, a.useState)(0);
                (0, a.useEffect)(() => {
                    if (!AppEditor) {
                        try {
                            let mod = r(6501);
                            AppEditor = (mod && mod.default) || mod;
                            if (AppEditor) setTick(t => t + 1);
                        } catch(e) {}
                    }
                }, []);

                if (!AppEditor) {
                    try {
                        let mod = r(6501);
                        AppEditor = (mod && mod.default) || mod;
                    } catch(e) {}
                }

                if (AppEditor) {
                    return (0, l.jsx)(SafeBoundary, {
                        children: (0, l.jsx)(AppEditor, { ...props })
                    });
                }
                return (0, l.jsx)(s, {});
            }

            function c() {
                return (0, l.jsx)(d, {})
            }
        },
        5152: function(e, t, r) {
            e.exports = r(2602)
        },
        1163: function(e, t, r) {
            e.exports = r(3079)
        }
    },
    function(e) {
        e.O(0, [2888, 9774, 179], function() {
            return e(e.s = 4008)
        }), _N_E = e.O()
    }
]);