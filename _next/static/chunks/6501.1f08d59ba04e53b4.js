(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6501], {
        6501: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return eQ
                }
            });
            var o = r(5893),
                n = r(7294),
                i = r(3515);
            class a extends n.Component {
                constructor(e) {
                    super(e), this.handleReload = () => {
                        window.location.reload()
                    }, this.state = {
                        hasError: !1
                    }
                }
                static getDerivedStateFromError() {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(e) {
                    (0, i.bY)(), console.error("Studio editor crashed:", e)
                }
                componentDidMount() {
                    this.onWindowError = () => (0, i.bY)(), this.onUnhandledRejection = () => (0, i.bY)(), window.addEventListener("error", this.onWindowError), window.addEventListener("unhandledrejection", this.onUnhandledRejection)
                }
                componentWillUnmount() {
                    window.removeEventListener("error", this.onWindowError), window.removeEventListener("unhandledrejection", this.onUnhandledRejection)
                }
                render() {
                    if (this.state.hasError) {
                        let {
                            theme: e
                        } = this.props;
                        return (0, o.jsxs)("div", {
                            style: {
                                height: "100%",
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 12,
                                padding: 24,
                                textAlign: "center",
                                background: e ?.background || "#0b0b0f"
                            },
                            children: [(0, o.jsx)("div", {
                                style: {
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: e ?.text || "#fff"
                                },
                                children: "Something went wrong"
                            }), (0, o.jsx)("div", {
                                style: {
                                    fontSize: 13,
                                    color: e ?.textSecondary || "#aaa",
                                    maxWidth: 380,
                                    lineHeight: 1.5
                                },
                                children: "The editor hit an unexpected error. We saved a local backup of your project structure. Reload to recover it. Any video or image still needs to be reattached, since only the structure is backed up locally."
                            }), (0, o.jsx)("button", {
                                type: "button",
                                onClick: this.handleReload,
                                style: {
                                    border: "none",
                                    borderRadius: 10,
                                    background: "#FF6B6B",
                                    color: "#fff",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    padding: "10px 18px",
                                    cursor: "pointer"
                                },
                                children: "Reload editor"
                            })]
                        })
                    }
                    return this.props.children
                }
            }
            var s = r(6626),
                l = r(9095),
                d = r(4250),
                c = r(9599),
                p = r(3935),
                u = r(4078),
                x = r(4372);
            let h = () => (0, o.jsx)("span", {
                style: {
                    fontSize: 14,
                    lineHeight: 1
                },
                children: "\uD83D\uDC8E"
            });
            var g = function(e) {
                    let {
                        theme: t,
                        onPurchaseClick: r,
                        isPremium: i = !0,
                        compact: a = !1
                    } = e, {
                        credits: s,
                        spendableCredits: l,
                        promoTrialCredits: d,
                        promoTrialActive: c,
                        loading: g,
                        error: m
                    } = (0, u.B)(), [f, b] = (0, n.useState)(!1), [y, v] = (0, n.useState)(null), j = (0, n.useRef)(null), [w, k] = (0, n.useState)(!1), [C, S] = (0, n.useState)(""), [E, _] = (0, n.useState)(!1), M = (0, n.useRef)(0);
                    (0, n.useEffect)(() => {
                        g || E || (l > parseInt(localStorage.getItem("previousCredits") || "0") && (S("increase"), k(!0), setTimeout(() => k(!1), 1e3)), _(!0), M.current = l, localStorage.setItem("previousCredits", l.toString()))
                    }, [g, E, l]), (0, n.useEffect)(() => {
                        if (E && !g) {
                            if (M.current !== l && l >= 0) {
                                if (M.current > l) {
                                    S("decrease"), k(!0), M.current = l, localStorage.setItem("previousCredits", l.toString());
                                    let e = setTimeout(() => {
                                        k(!1)
                                    }, 600);
                                    return () => clearTimeout(e)
                                }
                                if (M.current < l) {
                                    S("increase"), k(!0), M.current = l, localStorage.setItem("previousCredits", l.toString());
                                    let e = setTimeout(() => {
                                        k(!1)
                                    }, 1e3);
                                    return () => clearTimeout(e)
                                }
                            }
                            M.current !== l && (M.current = l, localStorage.setItem("previousCredits", l.toString()))
                        }
                    }, [l, E, g]), (0, n.useEffect)(() => {
                        let e = "credit-animation-styles";
                        if (!document.getElementById(e)) {
                            let t = document.createElement("style");
                            t.id = e, t.textContent = `
        @keyframes creditPulse {
          0% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }
        
        @keyframes creditCelebration {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          25% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.4);
          }
          75% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1.6);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.8);
          }
        }
        
        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
          }
        }
        
        .credit-pulse {
          animation: creditPulse 0.6s ease-out;
        }
        
        .credit-celebration {
          animation: creditCelebration 1s ease-out;
        }
        
        .sparkle {
          animation: sparkle 0.8s ease-out;
        }
      `, document.head.appendChild(t)
                        }
                    }, []);
                    let I = {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        height: 38,
                        boxSizing: "border-box",
                        padding: "4px 11px",
                        background: "rgba(22, 22, 24, 0.42)",
                        backdropFilter: "blur(48px) saturate(180%)",
                        WebkitBackdropFilter: "blur(48px) saturate(180%)",
                        border: `1px solid ${x.fF}`,
                        borderRadius: 999,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.06)"
                    };
                    return g ? (0, o.jsx)("div", {
                        style: { ...I,
                            padding: "4px 12px",
                            fontSize: 12,
                            color: t.textSecondary
                        },
                        children: (0, o.jsx)("span", {
                            children: "…"
                        })
                    }) : m ? (0, o.jsx)("div", {
                        style: { ...I,
                            padding: "4px 12px",
                            fontSize: 11,
                            color: t.textSecondary
                        },
                        children: (0, o.jsx)("span", {
                            children: "Credits"
                        })
                    }) : (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsxs)("div", {
                            style: { ...I,
                                ...w ? "decrease" === C ? {
                                    transform: "scale(0.95)",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                } : "increase" === C ? {
                                    transform: "scale(1.05)",
                                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                    boxShadow: "0 8px 25px rgba(16, 185, 129, 0.3)"
                                } : {} : {}
                            },
                            children: [(0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 5,
                                    position: "relative",
                                    minWidth: 0
                                },
                                children: [(0, o.jsxs)("div", {
                                    ref: j,
                                    style: {
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "help",
                                        ...w ? "decrease" === C ? {
                                            transform: "rotate(-5deg)",
                                            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                        } : "increase" === C ? {
                                            transform: "rotate(15deg) scale(1.1)",
                                            transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                                        } : {} : {}
                                    },
                                    onMouseEnter: () => {
                                        let e = j.current ?.getBoundingClientRect();
                                        e && v({
                                            top: e.bottom,
                                            left: e.left + e.width / 2
                                        }), b(!0)
                                    },
                                    onMouseLeave: () => b(!1),
                                    children: [(0, o.jsx)(h, {}), f && y && "undefined" != typeof document && (0, p.createPortal)((0, o.jsxs)("div", {
                                        style: {
                                            position: "fixed",
                                            top: y.top,
                                            left: y.left,
                                            transform: "translateX(-50%)",
                                            marginTop: "8px",
                                            padding: "8px 12px",
                                            backgroundColor: t.surface,
                                            border: `1px solid ${t.border}`,
                                            borderRadius: "6px",
                                            fontSize: "12px",
                                            color: t.text,
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                            zIndex: 10060,
                                            maxWidth: "200px",
                                            whiteSpace: "normal",
                                            textAlign: "center"
                                        },
                                        children: [i ? "Premium subscription - unlimited exports!" : c ? `${d} welcome 💎${s>0?` + ${s} purchased`:""}. Usable in mockup and promo editors.` : "Credits are used for exports and generations. Each export costs 1 credit.", (0, o.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                bottom: "100%",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                width: 0,
                                                height: 0,
                                                borderLeft: "6px solid transparent",
                                                borderRight: "6px solid transparent",
                                                borderBottom: `6px solid ${t.border}`
                                            }
                                        })]
                                    }), document.body)]
                                }), (0, o.jsx)("span", {
                                    title: i ? "Premium subscription — unlimited exports" : `${l} credit${1===l?"":"s"} — used for premium exports`,
                                    style: {
                                        fontSize: i && a ? 17 : 13,
                                        fontWeight: 600,
                                        color: w ? "decrease" === C ? "#E8797A" : "increase" === C ? "#10B981" : t.text : t.text,
                                        transition: "color 0.3s ease",
                                        whiteSpace: "nowrap",
                                        letterSpacing: i && a ? 0 : "-0.02em",
                                        lineHeight: 1
                                    },
                                    children: i ? a ? "∞" : "Unlimited" : String(l)
                                }), w && "decrease" === C && (0, o.jsx)("div", {
                                    className: "credit-pulse",
                                    style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 999,
                                        border: "2px solid #E8797A",
                                        opacity: 0,
                                        pointerEvents: "none"
                                    }
                                }), w && "increase" === C && (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)("div", {
                                        className: "credit-celebration",
                                        style: {
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 999,
                                            border: "3px solid #10B981",
                                            opacity: 0,
                                            pointerEvents: "none"
                                        }
                                    }), [void 0, void 0, void 0, void 0].map((e, t) => (0, o.jsx)("div", {
                                        className: "sparkle",
                                        style: {
                                            position: "absolute",
                                            top: "20%",
                                            left: "20%",
                                            width: "8px",
                                            height: "8px",
                                            backgroundColor: "#10B981",
                                            borderRadius: "50%",
                                            opacity: 0,
                                            pointerEvents: "none",
                                            animationDelay: `${.1*t}s`,
                                            transform: `translate(${15*t}px, ${10*t}px)`
                                        }
                                    }, t)), [void 0, void 0, void 0].map((e, t) => (0, o.jsx)("div", {
                                        className: "sparkle",
                                        style: {
                                            position: "absolute",
                                            top: "60%",
                                            right: "10%",
                                            width: "6px",
                                            height: "6px",
                                            backgroundColor: "#F59E0B",
                                            borderRadius: "50%",
                                            opacity: 0,
                                            pointerEvents: "none",
                                            animationDelay: `${.2+.15*t}s`,
                                            transform: `translate(-${12*t}px, ${8*t}px)`
                                        }
                                    }, `sparkle-${t}`))]
                                })]
                            }), !i && (0, o.jsx)("div", {
                                style: {
                                    width: 1,
                                    height: 18,
                                    backgroundColor: x.fF,
                                    opacity: .9,
                                    flexShrink: 0
                                }
                            }), !i && (0, o.jsx)("button", {
                                type: "button",
                                title: "Add credits",
                                "aria-label": "Add credits",
                                onClick: r || (() => {}),
                                style: {
                                    width: 28,
                                    height: 28,
                                    padding: 0,
                                    backgroundColor: "#10B981",
                                    border: "none",
                                    borderRadius: 999,
                                    fontSize: 18,
                                    fontWeight: 700,
                                    lineHeight: 1,
                                    color: "white",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 2px 4px rgba(16, 185, 129, 0.3)",
                                    boxSizing: "border-box",
                                    flexShrink: 0
                                },
                                onMouseEnter: e => {
                                    e.currentTarget.style.backgroundColor = "#059669", e.currentTarget.style.transform = "scale(1.05)", e.currentTarget.style.boxShadow = "0 4px 8px rgba(16, 185, 129, 0.4)"
                                },
                                onMouseLeave: e => {
                                    e.currentTarget.style.backgroundColor = "#10B981", e.currentTarget.style.transform = "scale(1)", e.currentTarget.style.boxShadow = "0 2px 4px rgba(16, 185, 129, 0.3)"
                                },
                                children: "+"
                            })]
                        })
                    })
                },
                m = r(8259),
                f = r(8947),
                b = r(8275),
                y = r(5604),
                v = r(7219),
                j = r(2616),
                w = r(6036),
                k = r(5837),
                C = r(9171),
                S = r(8813);

            function E() {
                let e = v.T0.monthly.price,
                    t = v.T0.yearly.price,
                    r = 12 * e,
                    o = r - t,
                    n = o / e;
                return {
                    savedRounded: Math.round(o),
                    savePct: Math.round((1 - t / r) * 100),
                    monthsFree: n,
                    showOverFourMonthsFree: n >= 4
                }
            }
            var _ = r(3190);

            function M() {
                return (0, o.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.6",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                    children: (0, o.jsx)("path", {
                        d: "M5 12.5l4.5 4.5L19 7"
                    })
                })
            }
            var I = function(e) {
                    return null
                },
                D = function(e) {
                    return null
                },
                A = r(564),
                R = r(92),
                P = r(173),
                T = r(1873);
            let z = "lumio_welcome_dismissed",
                N = () => (0, o.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, o.jsx)("path", {
                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    }), (0, o.jsx)("polyline", {
                        points: "7 10 12 15 17 10"
                    }), (0, o.jsx)("line", {
                        x1: "12",
                        y1: "15",
                        x2: "12",
                        y2: "3"
                    })]
                }),
                $ = () => (0, o.jsx)("span", {
                    style: {
                        fontSize: "18px"
                    },
                    children: "\uD83D\uDC8E"
                });
            var L = function(e) {
                let {
                    isDarkMode: t,
                    setIsDarkMode: r,
                    handleExport: i,
                    isExporting: a,
                    exportProgress: s,
                    animationDuration: l,
                    theme: d,
                    credits: c = 0,
                    onPurchaseClick: p,
                    queueState: u = {
                        queue: []
                    },
                    currentScene: h = "",
                    currentUser: m = null,
                    isPremium: f = !0,
                    studioMode: b = !1,
                    onStudioModeChange: y = null,
                    onStudioExport: v = null,
                    studioExportDisabled: j = !0,
                    studioExportCreditCost: w = 0,
                    studioExportCreditsNeeded: k = 0,
                    studioExportActiveCount: C = 0,
                    studioExportHasShortVideo: E = !1,
                    onStudioSaveProject: M = null,
                    onStudioNewProject: I = null,
                    studioHasUnsavedChanges: L = !1,
                    studioHighlightSaveProject: W = !1,
                    saveProjectButtonRef: F = null,
                    trailingSlot: B = null
                } = e, [V, U] = (0, n.useState)(!1), [H, O] = (0, n.useState)(!1), [q, Z] = (0, n.useState)(""), [Q, Y] = (0, n.useState)(0), [K, J] = (0, n.useState)(!1), [G, X] = (0, n.useState)(null), [ee, et] = (0, n.useState)(9999), er = (0, n.useRef)(void 0), eo = (0, n.useRef)(null), en = (0, n.useRef)(null), ei = (0, n.useRef)(null), ea = (0, n.useRef)(null), {
                    allowAppOverlays: es
                } = (0, P.i)();
                (0, n.useLayoutEffect)(() => {
                    let e = ea.current;
                    if (!e || "undefined" == typeof ResizeObserver) return;
                    let t = new ResizeObserver(e => {
                        let t = e[0] ?.contentRect ?.width;
                        "number" == typeof t && et(t)
                    });
                    return t.observe(e), () => t.disconnect()
                }, []);
                let el = ee < 1250,
                    ed = ee < 1220,
                    ec = "flex-end",
                    ep = "undefined" != typeof navigator && (/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent || "") || /Mac/i.test(navigator.platform || "")),
                    eu = ep ? "⌘S" : "Ctrl+S",
                    ex = ep ? "⌘E" : "Ctrl+E";
                (0, n.useEffect)(() => {
                    if (!y || b || !es) {
                        J(!1);
                        return
                    }
                    try {
                        if ("1" === window.localStorage.getItem(z)) return
                    } catch (e) {}
                    J(!0)
                }, [y, b, es]), (0, n.useEffect)(() => {
                    if (!1 === er.current && !0 === b) {
                        try {
                            window.localStorage.setItem(z, "1")
                        } catch (e) {}
                        J(!1)
                    }
                    er.current = b
                }, [b]), (0, n.useLayoutEffect)(() => {
                    if (!K) {
                        X(null);
                        return
                    }
                    let e = () => {
                        let e = eo.current,
                            t = en.current;
                        if (!e || !t) return;
                        let r = e.getBoundingClientRect(),
                            o = t.getBoundingClientRect();
                        X(o.left + o.width / 2 - r.left)
                    };
                    e(), window.addEventListener("resize", e);
                    let t = window.setTimeout(e, 0);
                    return () => {
                        window.removeEventListener("resize", e), window.clearTimeout(t)
                    }
                }, [K]), (0, n.useEffect)(() => {
                    let e = ei.current;
                    if (!e || !K) return;
                    let t = () => {
                        e.playbackRate = 1.25
                    };
                    return t(), e.addEventListener("loadedmetadata", t), () => e.removeEventListener("loadedmetadata", t)
                }, [K]), (0, n.useEffect)(() => {
                    if (!W) {
                        Y(0);
                        return
                    }
                    let e = window.setInterval(() => {
                        Y(e => (e + 8) % 360)
                    }, 45);
                    return () => window.clearInterval(e)
                }, [W]), m && (0, R.Ng)(m);
                let eh = (0, S.q8)(h),
                    eg = u.queue.filter(e => ("queued" === e.status || "processing" === e.status) && !(0, S.q8)(e.data ?.sceneName || "")).length,
                    em = u.queue.filter(e => "queued" === e.status || "processing" === e.status).length,
                    ef = f ? 1 / 0 : Math.max(0, c - eg),
                    eb = eh || f,
                    ey = a || !l || !f && !eb && ef < 1,
                    ev = !f && !eb && ef < 1 && !a && l,
                    ej = {
                        padding: "8px 14px",
                        borderRadius: "999px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "background 0.15s ease, color 0.15s ease, border-color 0.15s ease",
                        fontSize: "13px",
                        fontWeight: 600,
                        minHeight: "38px",
                        minWidth: "78px",
                        boxSizing: "border-box",
                        justifyContent: "center",
                        whiteSpace: "nowrap"
                    },
                    ew = { ...ej,
                        ...(0, A.Rj)(d, {
                            disabled: j,
                            needsCredits: !E && !f && (w > 0 || k > 0) && c < (k || w)
                        }),
                        cursor: j ? "not-allowed" : "pointer",
                        opacity: j ? .55 : 1
                    },
                    ek = {
                        width: 38,
                        height: 38,
                        minWidth: 38,
                        padding: 0,
                        gap: 0,
                        justifyContent: "center"
                    },
                    eC = {
                        padding: ed ? "8px 10px" : "8px 12px",
                        background: d.surface,
                        color: d.text,
                        border: `1px solid ${x.fF}`,
                        borderRadius: "999px",
                        boxSizing: "border-box",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: 600,
                        minHeight: "38px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        lineHeight: 1,
                        whiteSpace: "nowrap",
                        transition: "all 0.15s ease"
                    };
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)("div", {
                        ref: ea,
                        style: {
                            display: y ? "grid" : "flex",
                            gridTemplateColumns: y ? "minmax(0,1fr) auto minmax(0,1fr)" : void 0,
                            alignItems: "center",
                            gap: "12px",
                            width: "100%",
                            minHeight: 52,
                            padding: "12px 16px",
                            boxSizing: "border-box",
                            position: "relative",
                            zIndex: 1e4,
                            overflow: "visible"
                        },
                        children: [(0, o.jsx)("div", {
                            style: {
                                minWidth: 0,
                                flexShrink: 0,
                                overflow: "visible",
                                justifySelf: y ? "stretch" : void 0
                            },
                            children: (0, o.jsx)(T.gG, {
                                as: "h1",
                                color: d.text,
                                logoSize: 26,
                                logoStyle: {
                                    letterSpacing: "-0.025em"
                                },
                                showBeta: !(ee < 1250),
                                betaVariant: "quiet"
                            })
                        }), y && (0, o.jsx)("div", {
                            style: {
                                justifySelf: "center",
                                display: "flex",
                                justifyContent: "center",
                                minWidth: 0
                            },
                            children: (0, o.jsxs)("div", {
                                ref: eo,
                                style: {
                                    position: "relative",
                                    flexShrink: 0,
                                    overflow: "visible",
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    alignItems: "stretch",
                                    gap: 5,
                                    padding: 5,
                                    borderRadius: 999,
                                    width: el ? Math.max(196, Math.min(280, 196 + (ee - 1e3) * .336)) : 280,
                                    transition: "width 0.15s ease",
                                    background: "rgba(22, 22, 24, 0.42)",
                                    backdropFilter: "blur(48px) saturate(180%)",
                                    WebkitBackdropFilter: "blur(48px) saturate(180%)",
                                    border: `1px solid ${x.fF}`,
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.07)"
                                },
                                title: "Switch between single-device mockups and a multi-clip promo timeline.",
                                children: [
                                    [{
                                        label: "Quick Mockups",
                                        value: !1,
                                        hint: "One scene at a time — pick a device, add your screen, export."
                                    }, {
                                        label: "LUMIO Motion Timeline",
                                        value: !0,
                                        hint: "Combine clips, text, and motion into one exportable promo video."
                                    }].map(e => {
                                        let {
                                            label: t,
                                            value: r,
                                            hint: n
                                        } = e, i = b === r;
                                        return (0, o.jsx)("button", {
                                            type: "button",
                                            ref: r ? en : void 0,
                                            title: n,
                                            "aria-label": n,
                                            onClick: () => y(r),
                                            onMouseEnter: e => {
                                                i || (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)")
                                            },
                                            onMouseLeave: e => {
                                                i || (e.currentTarget.style.backgroundColor = "transparent")
                                            },
                                            style: {
                                                width: "100%",
                                                minWidth: 0,
                                                boxSizing: "border-box",
                                                padding: el ? "8px 6px" : "8px 12px",
                                                borderRadius: 999,
                                                border: "none",
                                                outline: "none",
                                                background: i ? d.surfaceAlt || "#2a2a2e" : "transparent",
                                                color: i ? d.text : d.textSecondary,
                                                cursor: "pointer",
                                                fontSize: el ? "11px" : "12px",
                                                fontWeight: i ? "700" : "500",
                                                transition: "background 0.15s, box-shadow 0.15s, color 0.15s",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow: i ? "inset 0 1px 0 rgba(255,255,255,0.22), 0 2px 10px rgba(0,0,0,0.22)" : "none"
                                            },
                                            children: t
                                        }, t)
                                    }), K && null != G && (0, o.jsx)("div", {
                                        style: {
                                            position: "absolute",
                                            top: "100%",
                                            left: G,
                                            transform: "translateX(-50%)",
                                            marginTop: 12,
                                            zIndex: 10050,
                                            width: 560,
                                            maxWidth: "min(560px, calc(100vw - 24px))"
                                        },
                                        children: (0, o.jsxs)("div", {
                                            style: {
                                                position: "relative"
                                            },
                                            children: [(0, o.jsx)("div", {
                                                "aria-hidden": !0,
                                                style: {
                                                    position: "absolute",
                                                    bottom: "100%",
                                                    left: "50%",
                                                    transform: "translateX(-50%)",
                                                    width: 0,
                                                    height: 0,
                                                    borderLeft: "14px solid transparent",
                                                    borderRight: "14px solid transparent",
                                                    borderBottom: `14px solid ${d.border}`
                                                }
                                            }), (0, o.jsx)("div", {
                                                "aria-hidden": !0,
                                                style: {
                                                    position: "absolute",
                                                    bottom: "100%",
                                                    left: "50%",
                                                    transform: "translate(-50%, 1px)",
                                                    width: 0,
                                                    height: 0,
                                                    borderLeft: "13px solid transparent",
                                                    borderRight: "13px solid transparent",
                                                    borderBottom: `13px solid ${d.surface}`
                                                }
                                            }), (0, o.jsxs)("div", {
                                                style: {
                                                    backgroundColor: d.surface,
                                                    border: `1px solid ${d.border}`,
                                                    borderRadius: 16,
                                                    padding: 24,
                                                    boxShadow: "0 12px 40px rgba(0,0,0,0.24)"
                                                },
                                                children: [(0, o.jsx)("div", {
                                                    style: {
                                                        fontSize: 22,
                                                        fontWeight: 700,
                                                        color: d.text,
                                                        marginBottom: 12
                                                    },
                                                    children: "LUMIO Motion Timeline"
                                                }), (0, o.jsx)("p", {
                                                    style: {
                                                        margin: "0 0 18px",
                                                        fontSize: 18,
                                                        lineHeight: 1.45,
                                                        color: d.textSecondary
                                                    },
                                                    children: "Build a timeline from mockup clips, text, and motion, then export one promo video. Try it from the toggle above."
                                                }), (0, o.jsx)("video", {
                                                    ref: ei,
                                                    src: "/Landingpage/promo_mode_tooltip.mp4",
                                                    muted: !0,
                                                    playsInline: !0,
                                                    loop: !0,
                                                    autoPlay: !0,
                                                    controls: !1,
                                                    style: {
                                                        display: "block",
                                                        width: "100%",
                                                        maxHeight: 316,
                                                        objectFit: "cover",
                                                        borderRadius: 12,
                                                        backgroundColor: d.surfaceAlt || "#111"
                                                    }
                                                }), (0, o.jsx)("button", {
                                                    type: "button",
                                                    onClick: () => {
                                                        try {
                                                            window.localStorage.setItem(z, "1")
                                                        } catch (e) {}
                                                        J(!1)
                                                    },
                                                    style: {
                                                        marginTop: 18,
                                                        width: "100%",
                                                        padding: "14px 18px",
                                                        borderRadius: 12,
                                                        border: "none",
                                                        cursor: "pointer",
                                                        fontSize: 16,
                                                        fontWeight: 700,
                                                        color: "#111",
                                                        background: "#fff",
                                                        boxShadow: "0 2px 10px rgba(0,0,0,0.18)"
                                                    },
                                                    children: "Got it"
                                                })]
                                            })]
                                        })
                                    })
                                ]
                            })
                        }), !y && (0, o.jsx)("div", {
                            "aria-hidden": !0,
                            style: {
                                flex: "1 1 0",
                                minWidth: 0,
                                height: 1
                            }
                        }), (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: ec,
                                gap: ed ? "6px" : "8px",
                                minWidth: 0,
                                flexWrap: "nowrap",
                                flexShrink: 0,
                                justifySelf: y ? "stretch" : void 0,
                                marginLeft: y ? void 0 : "auto"
                            },
                            children: [(0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: ec,
                                    gap: ed ? "6px" : "8px",
                                    minWidth: 0,
                                    maxWidth: "100%",
                                    flexWrap: "nowrap",
                                    overflowX: "auto",
                                    WebkitOverflowScrolling: "touch"
                                },
                                children: [b && E && (0, o.jsx)("span", {
                                    title: "Your screen video is shorter than the device animation",
                                    style: {
                                        fontSize: "11px",
                                        color: "#ff8c00",
                                        marginRight: "2px",
                                        whiteSpace: "nowrap",
                                        cursor: "default"
                                    },
                                    children: "Short clip"
                                }), b && M && (0, o.jsx)("div", {
                                    ref: F || void 0,
                                    style: {
                                        position: "relative",
                                        overflow: "visible"
                                    },
                                    children: (0, o.jsx)("div", {
                                        style: W ? {
                                            padding: 1,
                                            borderRadius: 9,
                                            background: `conic-gradient(from ${Q}deg, rgba(255,107,107,0.95), rgba(132,94,194,0.95), rgba(255,107,107,0.95))`,
                                            boxShadow: "0 0 14px rgba(255, 107, 107, 0.24)"
                                        } : void 0,
                                        children: (0, o.jsxs)("button", {
                                            type: "button",
                                            onClick: M,
                                            title: L ? `Save — unsaved changes (${eu})` : `Save (${eu})`,
                                            style: { ...eC,
                                                borderColor: W ? "transparent" : eC.border,
                                                ...ed ? ek : null
                                            },
                                            onMouseEnter: e => {
                                                e.currentTarget.style.backgroundColor = d.surfaceAlt
                                            },
                                            onMouseLeave: e => {
                                                e.currentTarget.style.backgroundColor = d.surface
                                            },
                                            children: [(0, o.jsxs)("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [(0, o.jsx)("path", {
                                                    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                                                }), (0, o.jsx)("polyline", {
                                                    points: "17 21 17 13 7 13 7 21"
                                                }), (0, o.jsx)("polyline", {
                                                    points: "7 3 7 8 15 8"
                                                })]
                                            }), !ed && "Save", L && (0, o.jsx)("span", {
                                                "aria-label": "unsaved changes",
                                                style: {
                                                    display: "inline-block",
                                                    width: 7,
                                                    height: 7,
                                                    borderRadius: "50%",
                                                    background: "#ffb059",
                                                    boxShadow: "0 0 0 2px rgba(255, 176, 89, 0.22)",
                                                    marginLeft: 6,
                                                    flexShrink: 0
                                                }
                                            })]
                                        })
                                    })
                                }), b && I && (0, o.jsxs)("button", {
                                    type: "button",
                                    onClick: I,
                                    title: "Back to start screen",
                                    style: { ...eC,
                                        color: d.textSecondary,
                                        ...ed ? ek : null
                                    },
                                    onMouseEnter: e => {
                                        e.currentTarget.style.backgroundColor = d.surfaceAlt, e.currentTarget.style.color = d.text
                                    },
                                    onMouseLeave: e => {
                                        e.currentTarget.style.backgroundColor = d.surface, e.currentTarget.style.color = d.textSecondary
                                    },
                                    children: [(0, o.jsxs)("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [(0, o.jsx)("line", {
                                            x1: "12",
                                            y1: "5",
                                            x2: "12",
                                            y2: "19"
                                        }), (0, o.jsx)("line", {
                                            x1: "5",
                                            y1: "12",
                                            x2: "19",
                                            y2: "12"
                                        })]
                                    }), !ed && "New"]
                                }), (0, o.jsx)(g, {
                                    theme: d,
                                    onPurchaseClick: p,
                                    isPremium: f,
                                    compact: ed
                                }), b && v ? (0, o.jsxs)("button", {
                                    type: "button",
                                    "data-testid": "export-btn",
                                    onClick: v,
                                    disabled: j,
                                    title: E ? "Use a longer screen video" : !f && (w > 0 || k > 0) && c < (k || w) ? `Need ${k||w} credit${1!==(k||w)?"s":""} (you have ${c})` : !f && w > 0 ? `Uses ${w} credit${1!==w?"s":""}. ${ex}` : `Export (${ex})`,
                                    style: { ...ew,
                                        ...ed ? ek : null,
                                        cursor: j ? "not-allowed" : "pointer"
                                    },
                                    children: [(0, o.jsx)(N, {}), !ed && (f ? "Export" : w > 0 ? `Export (${w}💎)` : "Export")]
                                }) : b ? null : (0, o.jsx)("button", {
                                    type: "button",
                                    onClick: () => {
                                        ev ? U(!0) : ey || i()
                                    },
                                    disabled: a || !l,
                                    title: l ? a ? "Export in progress..." : f ? em > 0 ? `You have ${em} exports in progress. Premium subscription - unlimited exports!` : "Premium subscription - unlimited exports!" : eb ? em > 0 ? `You have ${em} exports in progress. This is a free template - no credits required.` : "This is a free template - no credits required!" : ev ? eg > 0 ? `You have ${c} credits and ${eg} premium exports in progress. Purchase more credits to add another export.` : "You need at least 1 credit to export premium templates" : em > 0 ? `You have ${ef} credits remaining after ${eg} premium exports` : "Export your animation" : "Select an animation to export",
                                    style: { ...ej,
                                        ...ed && !a ? ek : null,
                                        ...(0, A.Rj)(d, {
                                            disabled: ey,
                                            needsCredits: ev
                                        }),
                                        cursor: a || !l ? "not-allowed" : "pointer",
                                        opacity: ey ? .55 : 1
                                    },
                                    children: a ? (0, o.jsxs)(o.Fragment, {
                                        children: [(0, o.jsx)("span", {
                                            style: {
                                                fontSize: "16px",
                                                lineHeight: "16px",
                                                display: "inline-block",
                                                verticalAlign: "middle"
                                            },
                                            children: "⌛"
                                        }), s || "Processing..."]
                                    }) : (0, o.jsxs)(o.Fragment, {
                                        children: [ev ? (0, o.jsx)($, {}) : (0, o.jsx)(N, {}), !ed && (a ? s || "Processing..." : l ? f ? em > 0 ? `Export (${em} in queue)` : "Export" : eb ? em > 0 ? `Export (${em} in queue)` : "Export Free" : ev ? eg > 0 ? `Need Credits (${eg} premium in queue)` : "Need Credits" : em > 0 ? `Export (${ef} left)` : "Export" : "Export")]
                                    })
                                })]
                            }), B ? (0, o.jsx)("div", {
                                style: {
                                    flexShrink: 0,
                                    position: "relative",
                                    overflow: "visible",
                                    zIndex: 10001
                                },
                                children: B
                            }) : null]
                        })]
                    }), V && (0, o.jsx)(D, {
                        theme: d,
                        onClose: () => U(!1)
                    }), H && (0, o.jsx)("div", {
                        style: {
                            position: "fixed",
                            inset: 0,
                            zIndex: 10002,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0,0,0,0.5)"
                        },
                        onClick: () => O(!1),
                        children: (0, o.jsxs)("div", {
                            style: {
                                backgroundColor: d.surface,
                                border: `1px solid ${d.border}`,
                                borderRadius: "12px",
                                padding: "24px",
                                width: "min(90vw, 440px)",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                            },
                            onClick: e => e.stopPropagation(),
                            children: [(0, o.jsx)("h3", {
                                style: {
                                    margin: "0 0 16px",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    color: d.text
                                },
                                children: "Feature suggestion"
                            }), (0, o.jsx)("textarea", {
                                value: q,
                                onChange: e => Z(e.target.value),
                                placeholder: "What would you like to see in LUMIO?",
                                rows: 4,
                                style: {
                                    width: "100%",
                                    boxSizing: "border-box",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: `1px solid ${d.border}`,
                                    backgroundColor: d.background,
                                    color: d.text,
                                    fontSize: "14px",
                                    resize: "vertical",
                                    marginBottom: "16px"
                                }
                            }), (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: "8px",
                                    justifyContent: "flex-end"
                                },
                                children: [(0, o.jsx)("button", {
                                    onClick: () => {
                                        O(!1), Z("")
                                    },
                                    style: {
                                        padding: "8px 16px",
                                        borderRadius: "8px",
                                        border: `1px solid ${d.border}`,
                                        backgroundColor: d.surfaceAlt,
                                        color: d.text,
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        fontWeight: 500
                                    },
                                    children: "Cancel"
                                }), (0, o.jsx)("button", {
                                    onClick: () => {
                                        let e = q.trim();
                                        e && _.Z.track("feature_suggestion", {
                                            suggestion: e
                                        }), O(!1), Z("")
                                    },
                                    style: {
                                        padding: "8px 16px",
                                        borderRadius: "8px",
                                        border: "none",
                                        background: "#fff",
                                        color: "#111",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        fontWeight: 600
                                    },
                                    children: "Send"
                                })]
                            })]
                        })
                    })]
                })
            };
            let W = "browser_compat_banner_dismissed";

            function F() {
                let [e, t] = (0, n.useState)(!1);
                return ((0, n.useEffect)(() => {
                    localStorage.getItem(W) || function() {
                        if ("undefined" == typeof navigator) return !0;
                        let e = navigator.userAgent || "";
                        return /Chrome\//.test(e) && !/Edg\//.test(e) && !/OPR\//.test(e)
                    }() || new Promise(e => {
                        try {
                            if ("undefined" == typeof OffscreenCanvas || "undefined" == typeof Worker) {
                                e(!1);
                                return
                            }
                            let t = URL.createObjectURL(new Blob(["self.onmessage=function(){try{if(typeof OffscreenCanvas==='undefined'){self.postMessage(false);return;}var c=new OffscreenCanvas(1,1);self.postMessage(!!(c.getContext('webgl2')||c.getContext('webgl')));}catch(e){self.postMessage(false);}};"], {
                                    type: "application/javascript"
                                })),
                                r = new Worker(t),
                                o = o => {
                                    clearTimeout(n), r.terminate(), URL.revokeObjectURL(t), e(o)
                                },
                                n = setTimeout(() => o(!1), 2e3);
                            r.onmessage = e => o(!!e.data), r.onerror = () => o(!1), r.postMessage(null)
                        } catch (t) {
                            e(!1)
                        }
                    }).then(e => {
                        e || (_.Z.track("browser_compat_banner_shown", {
                            ua: navigator.userAgent
                        }), t(!0))
                    })
                }, []), e) ? (0, o.jsxs)("div", {
                    style: {
                        background: "#fef3c7",
                        borderBottom: "1px solid #f59e0b",
                        padding: "8px 16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                        fontSize: "13px",
                        color: "#92400e"
                    },
                    children: [(0, o.jsx)("span", {
                        children: "Heads up: your current setup may affect local export. Updating your browser or switching to Chrome usually gives the best results."
                    }), (0, o.jsx)("button", {
                        onClick: () => {
                            localStorage.setItem(W, "1"), t(!1)
                        },
                        style: {
                            background: "none",
                            border: "1px solid #f59e0b",
                            borderRadius: "4px",
                            padding: "2px 10px",
                            cursor: "pointer",
                            color: "#92400e",
                            fontSize: "12px",
                            whiteSpace: "nowrap"
                        },
                        children: "Got it"
                    })]
                }) : null
            }
            var B = r(8311),
                V = function(e) {
                    let {
                        onImageUpload: t,
                        onVideoUpload: r,
                        theme: i,
                        uploadedImage: a,
                        uploadedVideo: s,
                        onCropDataChange: l,
                        forceUpdateImage: d,
                        onOpenCropTool: c,
                        onOpenTrimTool: p,
                        selectedPhoneModel: u = "iPhone",
                        isComputerMode: x = !1,
                        selectedComputerModel: h = "MacbookPro",
                        embedded: g = !1
                    } = e, [m, f] = (0, n.useState)(!1), [b, y] = (0, n.useState)(null), [v, j] = (0, n.useState)(null), [w, k] = (0, n.useState)({
                        isDragging: !1,
                        isValid: !1
                    }), [C, S] = (0, n.useState)(!1), [E, _] = (0, n.useState)(null);
                    (0, n.useEffect)(() => {
                        d && y(d)
                    }, [d]);
                    let M = (0, n.useCallback)(e => {
                            e.preventDefault(), e.stopPropagation();
                            let t = e.dataTransfer.items;
                            if (t && t[0]) {
                                let e = t[0].type;
                                k({
                                    isDragging: !0,
                                    isValid: (e.startsWith("image/") || e.startsWith("video/")) && "video/quicktime" !== e
                                })
                            } else k({
                                isDragging: !0,
                                isValid: !1
                            })
                        }, []),
                        I = (0, n.useCallback)(e => {
                            e.preventDefault(), e.stopPropagation();
                            let t = e.dataTransfer.items;
                            if (t && t[0]) {
                                let e = t[0].type;
                                k({
                                    isDragging: !0,
                                    isValid: (e.startsWith("image/") || e.startsWith("video/")) && "video/quicktime" !== e
                                })
                            } else k({
                                isDragging: !0,
                                isValid: !1
                            })
                        }, []),
                        D = (0, n.useCallback)(e => {
                            e.preventDefault(), e.stopPropagation();
                            let t = e.currentTarget.getBoundingClientRect(),
                                r = e.clientX,
                                o = e.clientY;
                            (r < t.left || r > t.right || o < t.top || o < t.bottom) && k({
                                isDragging: !1,
                                isValid: !1
                            })
                        }, []),
                        A = (0, n.useCallback)(e => {
                            if (e) {
                                if (e instanceof File) {
                                    if (e.type.startsWith("image/")) {
                                        let r = new FileReader;
                                        r.onload = e => {
                                            let r = e.target.result;
                                            y(r), j(null);
                                            let o = new Image;
                                            o.onload = () => {
                                                _({
                                                    width: o.naturalWidth,
                                                    height: o.naturalHeight
                                                })
                                            }, o.src = r, t(r)
                                        }, r.readAsDataURL(e)
                                    } else e.type.startsWith("video/") && (0, B.Vh)(e, t => {
                                        j(t), y(null), r(e)
                                    }, e => {
                                        alert(e)
                                    })
                                } else "string" == typeof e && (y(e), j(null))
                            }
                        }, [t, r]),
                        R = (0, n.useCallback)(e => {
                            e.preventDefault(), e.stopPropagation(), k({
                                isDragging: !1,
                                isValid: !1
                            });
                            let t = e.dataTransfer.files;
                            if (t && t[0] && t[0] instanceof File) {
                                let e = t[0];
                                if ("video/quicktime" === e.type || e.name ?.toLowerCase().endsWith(".mov")) return;
                                A(e)
                            }
                        }, [A]),
                        P = (0, n.useCallback)(e => {
                            e.stopPropagation(), (b || a) && c && c()
                        }, [b, a, c]),
                        T = (0, n.useCallback)(e => {
                            e.stopPropagation(), y(null), j(null);
                            let o = {
                                clear: !0
                            };
                            t(o), r(o)
                        }, [t, r]);
                    (0, n.useEffect)(() => {
                        let e = () => {
                            k({
                                isDragging: !1,
                                isValid: !1
                            })
                        };
                        return window.addEventListener("dragend", e), window.addEventListener("dragleave", e), () => {
                            window.removeEventListener("dragend", e), window.removeEventListener("dragleave", e)
                        }
                    }, []);
                    let z = b || a || v || s,
                        N = g ? {
                            padding: "16px",
                            border: `2px dashed ${w.isDragging?w.isValid?i.primary||"#2196f3":i.error||"#f44336":"rgba(255, 255, 255, 0.08)"}`,
                            borderRadius: 12,
                            margin: "16px",
                            display: "flex",
                            flexDirection: z ? "row" : "column",
                            alignItems: "center",
                            justifyContent: z ? "flex-start" : "center",
                            background: w.isDragging ? w.isValid ? "rgba(33, 150, 243, 0.08)" : "rgba(244, 67, 54, 0.08)" : "rgba(255, 255, 255, 0.04)",
                            color: i.text,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            textAlign: "center",
                            boxSizing: "border-box",
                            minHeight: z ? 60 : 88,
                            position: "relative",
                            gap: z ? 12 : 0,
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)"
                        } : {
                            padding: "12px 16px",
                            border: `2px dashed ${w.isDragging?w.isValid?i.primary||"#2196f3":i.error||"#f44336":i.border}`,
                            borderRadius: "8px",
                            margin: "12px 16px",
                            display: "flex",
                            flexDirection: z ? "row" : "column",
                            alignItems: "center",
                            justifyContent: z ? "flex-start" : "center",
                            backgroundColor: w.isDragging ? w.isValid ? "rgba(33, 150, 243, 0.05)" : "rgba(244, 67, 54, 0.05)" : i.surface,
                            color: i.text,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            textAlign: "center",
                            boxSizing: "border-box",
                            minHeight: z ? "60px" : "80px",
                            position: "relative",
                            gap: z ? "12px" : "0"
                        };
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsxs)("div", {
                            style: g ? {
                                overflow: "hidden"
                            } : {
                                backgroundColor: i.surface,
                                borderRadius: "16px",
                                border: `1px solid ${i.surfaceAlt}`,
                                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)",
                                overflow: "hidden"
                            },
                            children: [!g && (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)("div", {
                                    style: {
                                        padding: "10px 16px",
                                        borderBottom: `1px solid ${i.surfaceAlt}`
                                    },
                                    children: (0, o.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        },
                                        children: [(0, o.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px"
                                            },
                                            children: [(0, o.jsx)("div", {
                                                style: {
                                                    width: "20px",
                                                    height: "20px",
                                                    borderRadius: "4px",
                                                    backgroundColor: i.surfaceAlt,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "12px"
                                                },
                                                children: "\uD83D\uDCF1"
                                            }), (0, o.jsx)("h3", {
                                                style: {
                                                    margin: 0,
                                                    color: i.text,
                                                    fontSize: "14px",
                                                    fontWeight: "600",
                                                    letterSpacing: "-0.01em",
                                                    lineHeight: "1.2"
                                                },
                                                children: "Upload Media"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            style: {
                                                position: "relative",
                                                display: "inline-block"
                                            },
                                            onMouseEnter: () => S(!0),
                                            onMouseLeave: () => S(!1),
                                            children: [(0, o.jsx)("div", {
                                                style: {
                                                    width: "16px",
                                                    height: "16px",
                                                    borderRadius: "50%",
                                                    backgroundColor: i.surfaceAlt,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    cursor: "help",
                                                    fontSize: "10px",
                                                    fontWeight: "600",
                                                    color: i.textSecondary
                                                },
                                                children: "?"
                                            }), C && (0, o.jsxs)("div", {
                                                style: {
                                                    position: "absolute",
                                                    top: "20px",
                                                    right: "0",
                                                    backgroundColor: i.surface,
                                                    border: `1px solid ${i.border}`,
                                                    borderRadius: "6px",
                                                    padding: "8px 12px",
                                                    fontSize: "12px",
                                                    color: i.text,
                                                    whiteSpace: "nowrap",
                                                    zIndex: 10,
                                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
                                                },
                                                children: [x ? (0, o.jsxs)(o.Fragment, {
                                                    children: ["Format: ", "MacbookPro1080" === h ? "2560\xd71440 (16:9)" : "3024\xd71964 (16:10)", " (Computer)", (0, o.jsx)("br", {}), E && (0, o.jsxs)(o.Fragment, {
                                                        children: ["Current: ", E.width, "\xd7", E.height, "px", (0, o.jsx)("br", {})]
                                                    })]
                                                }) : (0, o.jsxs)(o.Fragment, {
                                                    children: ["Format: 9:19.5 (e.g., 1206\xd72622px)", (0, o.jsx)("br", {})]
                                                }), "Supports: Images & Videos", (0, o.jsx)("br", {}), "Recommended: MP4 for videos"]
                                            })]
                                        })]
                                    })
                                })
                            }), (0, o.jsxs)("div", {
                                onDragEnter: I,
                                onDragLeave: D,
                                onDragOver: M,
                                onDrop: R,
                                style: N,
                                onClick: () => document.getElementById("fileInput").click(),
                                children: [w.isDragging && (0, o.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: w.isValid ? "rgba(33, 150, 243, 0.05)" : "rgba(244, 67, 54, 0.05)",
                                        borderRadius: "8px",
                                        zIndex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        pointerEvents: "none",
                                        backdropFilter: "blur(4px)"
                                    },
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            backgroundColor: i.surface,
                                            padding: "12px 16px",
                                            borderRadius: "8px",
                                            color: i.text,
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                                            border: `1px solid ${i.border}`
                                        },
                                        children: w.isValid ? (0, o.jsxs)(o.Fragment, {
                                            children: [(0, o.jsx)("span", {
                                                style: {
                                                    fontSize: "20px"
                                                },
                                                children: "\uD83D\uDCF1"
                                            }), (0, o.jsx)("span", {
                                                children: "Drop here"
                                            })]
                                        }) : (0, o.jsxs)(o.Fragment, {
                                            children: [(0, o.jsx)("span", {
                                                style: {
                                                    fontSize: "20px"
                                                },
                                                children: "⚠️"
                                            }), (0, o.jsx)("span", {
                                                children: "MOV not supported — use MP4 or an image"
                                            })]
                                        })
                                    })
                                }), z ? (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsxs)("div", {
                                        style: {
                                            position: "relative",
                                            height: "48px",
                                            width: "48px",
                                            flexShrink: 0,
                                            cursor: "grab"
                                        },
                                        draggable: !0,
                                        onDragStart: e => {
                                            e.dataTransfer.effectAllowed = "copy";
                                            let t = v || s,
                                                r = b || a;
                                            t && e.dataTransfer.setData("application/x-mockup-uploaded-video", t), r && e.dataTransfer.setData("application/x-mockup-uploaded-image", r), e.dataTransfer.setData("text/plain", "")
                                        },
                                        children: [v || s ? (0, o.jsx)("video", {
                                            src: v || s,
                                            style: {
                                                width: "48px",
                                                height: "48px",
                                                objectFit: "cover",
                                                borderRadius: "4px",
                                                border: `1px solid ${i.border}`
                                            },
                                            muted: !0,
                                            preload: "metadata",
                                            onLoadedData: e => {
                                                e.target.currentTime = 0
                                            }
                                        }) : (0, o.jsx)("img", {
                                            src: b || a,
                                            alt: "Preview",
                                            style: {
                                                width: "48px",
                                                height: "48px",
                                                objectFit: "cover",
                                                borderRadius: "4px",
                                                border: `1px solid ${i.border}`
                                            }
                                        }), (0, o.jsx)("button", {
                                            onClick: T,
                                            style: {
                                                position: "absolute",
                                                top: "-6px",
                                                right: "-6px",
                                                width: "18px",
                                                height: "18px",
                                                borderRadius: "50%",
                                                border: `1px solid ${i.border}`,
                                                backgroundColor: i.surface,
                                                color: i.textSecondary,
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "10px",
                                                fontWeight: "bold",
                                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                                                transition: "all 0.2s ease",
                                                zIndex: 10
                                            },
                                            onMouseEnter: e => {
                                                e.target.style.backgroundColor = "#ff4444", e.target.style.color = "#ffffff", e.target.style.transform = "scale(1.1)"
                                            },
                                            onMouseLeave: e => {
                                                e.target.style.backgroundColor = i.surface, e.target.style.color = i.textSecondary, e.target.style.transform = "scale(1)"
                                            },
                                            children: "\xd7"
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        style: {
                                            flex: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "center",
                                            textAlign: "left",
                                            minWidth: 0
                                        },
                                        children: [(0, o.jsx)("div", {
                                            style: {
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: i.text,
                                                marginBottom: "2px"
                                            },
                                            children: v || s ? "Video uploaded" : "Image uploaded"
                                        }), (0, o.jsx)("div", {
                                            style: {
                                                fontSize: "10px",
                                                color: i.textSecondary
                                            },
                                            children: "Click to change"
                                        })]
                                    }), (b || a) && (0, o.jsxs)("button", {
                                        onClick: P,
                                        style: {
                                            padding: "4px 8px",
                                            borderRadius: "4px",
                                            border: `1px solid ${i.border}`,
                                            backgroundColor: i.surfaceAlt,
                                            color: i.text,
                                            cursor: "pointer",
                                            fontSize: "10px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "3px",
                                            flexShrink: 0,
                                            transition: "all 0.2s ease"
                                        },
                                        onMouseEnter: e => {
                                            e.currentTarget.style.backgroundColor = i.surface
                                        },
                                        onMouseLeave: e => {
                                            e.currentTarget.style.backgroundColor = i.surfaceAlt
                                        },
                                        children: [(0, o.jsxs)("svg", {
                                            width: "10",
                                            height: "10",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, o.jsx)("rect", {
                                                x: "3",
                                                y: "3",
                                                width: "18",
                                                height: "18",
                                                rx: "2",
                                                ry: "2"
                                            }), (0, o.jsx)("line", {
                                                x1: "9",
                                                y1: "3",
                                                x2: "9",
                                                y2: "21"
                                            }), (0, o.jsx)("line", {
                                                x1: "15",
                                                y1: "3",
                                                x2: "15",
                                                y2: "21"
                                            })]
                                        }), "Edit"]
                                    }), (v || s) && p && (0, o.jsx)("button", {
                                        type: "button",
                                        onClick: e => {
                                            e.stopPropagation(), p()
                                        },
                                        style: {
                                            padding: "4px 8px",
                                            borderRadius: "4px",
                                            border: `1px solid ${i.border}`,
                                            backgroundColor: i.surfaceAlt,
                                            color: i.text,
                                            cursor: "pointer",
                                            fontSize: "10px",
                                            flexShrink: 0
                                        },
                                        children: "Trim"
                                    })]
                                }) : (0, o.jsx)("div", {
                                    style: {
                                        fontSize: "13px",
                                        fontWeight: "500",
                                        color: i.textSecondary,
                                        textAlign: "center"
                                    },
                                    children: "Drag & Drop or click to browse"
                                }), (0, o.jsx)("input", {
                                    type: "file",
                                    id: "fileInput",
                                    onChange: e => {
                                        let t = e.target.files[0];
                                        t && A(t)
                                    },
                                    style: {
                                        display: "none"
                                    },
                                    accept: "image/*,video/*"
                                })]
                            })]
                        })
                    })
                };
            r(6862);
            var U = r(2467),
                H = r(4306),
                O = function(e) {
                    let {
                        theme: t,
                        exportProgress: r,
                        captureProgress: n,
                        encodingProgress: i,
                        exportPhase: a,
                        onCancel: s,
                        isExporting: l
                    } = e;
                    if (!l) return null;
                    let d = () => "capturing" === a ? n.percent ?? n.current / n.total * 100 : "encoding" === a ? i.percent ?? i.current / i.total * 100 : 0;
                    return (0, o.jsx)("div", {
                        className: "export-overlay",
                        style: {
                            backgroundColor: t.overlay
                        },
                        children: (0, o.jsxs)("div", {
                            className: "export-modal",
                            style: {
                                backgroundColor: t.background,
                                color: t.text
                            },
                            children: [(0, o.jsx)("div", {
                                className: "loading-spinner",
                                style: {
                                    borderColor: `${t.border}`,
                                    borderTopColor: t.accent
                                }
                            }), (0, o.jsx)("h3", {
                                children: "Hardware Rendering Video"
                            }), (0, o.jsx)("div", {
                                className: "progress-bar-container",
                                style: {
                                    border: `1px solid ${t.border}`
                                },
                                children: (0, o.jsx)("div", {
                                    className: "progress-bar",
                                    style: {
                                        width: `${d()}%`,
                                        backgroundColor: t.accent
                                    }
                                })
                            }), (0, o.jsx)("div", {
                                className: "progress-details",
                                children: (0, o.jsxs)("p", {
                                    children: ["capturing" === a ? `Capturing Frames: ${n.current} / ${n.total}` : "encoding" === a ? i.message ? i.message : null != i.percent ? `Encoding Video: ${Math.round(i.percent)}%` : `Processing Video: ${i.current} / ${i.total}` : r, (0, o.jsx)("br", {}), (0, o.jsxs)("small", {
                                        children: ["(", Math.round(d()), "%)"]
                                    })]
                                })
                            }), (0, o.jsx)("button", {
                                onClick: s,
                                style: {
                                    backgroundColor: t.button,
                                    color: t.buttonText,
                                    border: `1px solid ${t.border}`
                                },
                                children: "Cancel"
                            })]
                        })
                    })
                },
                q = r(9520);
            let Z = new Date("2026-08-17T18:31:36Z"),
                Q = e => {
                    let t = e ?.metadata ?.creationTime;
                    if (!t) return !1;
                    let r = new Date(t);
                    return !isNaN(r.getTime()) && r < Z
                },
                Y = e => {
                    let {
                        isPremium: t,
                        currentUser: r,
                        sceneName: o
                    } = e;
                    return !(t || !(0, S.q8)(o) || Q(r))
                },
                K = e => {
                    let {
                        isPremium: t,
                        currentUser: r,
                        sceneName: o,
                        quality: n,
                        transparentBackground: i
                    } = e;
                    return !t && (!(0, S.q8)(o) || !Q(r) && ("4k" === n || !!i))
                };

            function J(e) {
                let {
                    theme: t,
                    icon: r,
                    title: n,
                    description: i,
                    quality: a,
                    setQuality: s,
                    isVerticalFormat: l,
                    showDiamond: d = !1
                } = e;
                return (0, o.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "16px",
                        backgroundColor: t.surfaceAlt,
                        borderRadius: "12px",
                        position: "relative"
                    },
                    children: [(0, o.jsx)("div", {
                        style: {
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            overflow: "hidden",
                            backgroundColor: t.surface,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: r
                    }), (0, o.jsxs)("div", {
                        style: {
                            flex: 1
                        },
                        children: [(0, o.jsx)("div", {
                            style: {
                                color: t.text,
                                fontSize: "16px",
                                fontWeight: "500",
                                marginBottom: "4px"
                            },
                            children: n
                        }), "Quality" === n ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("div", {
                                style: {
                                    color: t.textSecondary,
                                    fontSize: "14px",
                                    marginBottom: "8px"
                                },
                                children: "4k" === a ? l ? "2160 x 3840" : "3840 x 2160" : l ? "1080 x 1920" : "1920 x 1080"
                            }), (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: "4px",
                                    position: "absolute",
                                    right: "16px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    zIndex: 1,
                                    backgroundColor: t.surfaceAlt,
                                    padding: "4px",
                                    borderRadius: "10px"
                                },
                                children: [(0, o.jsx)("button", {
                                    onClick: () => s("1080p"),
                                    style: {
                                        padding: "8px 20px",
                                        borderRadius: "8px",
                                        border: `1px solid ${t.border}`,
                                        background: "1080p" === a ? t.surface || "#2a2a2e" : "transparent",
                                        color: "1080p" === a ? t.text : t.textSecondary,
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        transition: "all 0.2s ease",
                                        boxShadow: "none",
                                        minWidth: "90px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        opacity: "1080p" === a ? 1 : .7
                                    },
                                    children: "HD"
                                }), (0, o.jsxs)("button", {
                                    onClick: () => s("4k"),
                                    style: {
                                        position: "relative",
                                        padding: "8px 20px",
                                        borderRadius: "8px",
                                        border: `1px solid ${t.border}`,
                                        background: "4k" === a ? t.surface || "#2a2a2e" : "transparent",
                                        color: "4k" === a ? t.text : t.textSecondary,
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        transition: "all 0.2s ease",
                                        boxShadow: "none",
                                        minWidth: "90px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        opacity: "4k" === a ? 1 : .7
                                    },
                                    children: ["4K", d && (0, o.jsx)("span", {
                                        style: {
                                            position: "absolute",
                                            top: "-9px",
                                            right: "-9px",
                                            width: "22px",
                                            height: "22px",
                                            borderRadius: "50%",
                                            backgroundColor: t.surface,
                                            border: `1.5px solid ${t.border}`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "11px",
                                            lineHeight: 1
                                        },
                                        children: "\uD83D\uDC8E"
                                    })]
                                })]
                            })]
                        }) : (0, o.jsx)("div", {
                            style: {
                                color: t.textSecondary,
                                fontSize: "14px"
                            },
                            children: i
                        })]
                    })]
                })
            }
            var G = function(e) {
                let {
                    theme: t,
                    currentScene: r,
                    selectedColor: i,
                    lightColor: a,
                    lightIntensity: s,
                    uploadedImage: l,
                    uploadedVideo: d,
                    isVerticalFormat: c,
                    animationDuration: p,
                    backgroundVisible: u = !0,
                    onBackgroundVisibilityChange: x,
                    isPremium: h = !1,
                    currentUser: g = null,
                    spendableCredits: m = 0,
                    onClose: f,
                    onExport: b
                } = e, y = Y({
                    isPremium: h,
                    currentUser: g,
                    sceneName: r
                }), [v, j] = (0, n.useState)(() => r.startsWith("ComputerAnimations/") && !y ? "4k" : "1080p"), [w, k] = (0, n.useState)(null), [C, S] = (0, n.useState)(!u), [E, _] = (0, n.useState)("");
                return (0, n.useEffect)(() => {
                    S(!u)
                }, [u]), (0, n.useEffect)(() => {
                    if (d) {
                        let e = document.createElement("video");
                        e.crossOrigin = "anonymous", e.muted = !0, e.playsInline = !0, e.src = d, e.addEventListener("loadedmetadata", () => {
                            k(e.duration)
                        }), e.addEventListener("error", () => {
                            k(null)
                        })
                    } else k(null)
                }, [d]), (0, o.jsx)("div", {
                    style: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10001
                    },
                    onClick: f,
                    children: (0, o.jsxs)("div", {
                        style: {
                            backgroundColor: t.surface,
                            borderRadius: "16px",
                            padding: "32px",
                            maxWidth: "480px",
                            width: "90%",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                            border: `1px solid ${t.border}`
                        },
                        onClick: e => e.stopPropagation(),
                        children: [(0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "24px"
                            },
                            children: [(0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px"
                                },
                                children: [(0, o.jsx)("span", {
                                    style: {
                                        fontSize: "24px"
                                    },
                                    children: "\uD83C\uDFAC"
                                }), (0, o.jsx)("span", {
                                    style: {
                                        color: t.text,
                                        fontSize: "24px",
                                        fontWeight: "600"
                                    },
                                    children: "Render Summary"
                                })]
                            }), (0, o.jsx)("button", {
                                onClick: f,
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: t.textSecondary,
                                    cursor: "pointer",
                                    padding: "8px",
                                    borderRadius: "8px",
                                    transition: "all 0.2s ease"
                                },
                                children: "✕"
                            })]
                        }), (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px"
                            },
                            children: [(0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px"
                                },
                                children: [(0, o.jsx)("label", {
                                    style: {
                                        color: t.text,
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        minWidth: "100px"
                                    },
                                    children: "Export Name:"
                                }), (0, o.jsx)("input", {
                                    type: "text",
                                    value: E,
                                    onChange: e => {
                                        let t = e.target.value;
                                        t.length <= 50 && _(t)
                                    },
                                    placeholder: "My Export",
                                    maxLength: 50,
                                    style: {
                                        flex: 1,
                                        padding: "8px 12px",
                                        borderRadius: "8px",
                                        border: `1px solid ${t.border}`,
                                        backgroundColor: t.surfaceAlt,
                                        color: t.text,
                                        fontSize: "14px",
                                        outline: "none",
                                        transition: "all 0.2s ease"
                                    },
                                    onFocus: e => {
                                        e.target.style.borderColor = "#E8797A"
                                    },
                                    onBlur: e => {
                                        e.target.style.borderColor = t.border
                                    }
                                })]
                            }), (0, o.jsx)(J, {
                                theme: t,
                                icon: (0, o.jsxs)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: t.textSecondary,
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, o.jsx)("rect", {
                                        x: "3",
                                        y: "3",
                                        width: "18",
                                        height: "18",
                                        rx: "2",
                                        ry: "2"
                                    }), (0, o.jsx)("circle", {
                                        cx: "8.5",
                                        cy: "8.5",
                                        r: "1.5"
                                    }), (0, o.jsx)("polyline", {
                                        points: "21 15 16 10 5 21"
                                    })]
                                }),
                                title: "Quality",
                                quality: v,
                                setQuality: j,
                                isVerticalFormat: c,
                                showDiamond: y
                            }), r.startsWith("ComputerAnimations/") && (0, o.jsx)("div", {
                                style: {
                                    marginTop: "-8px",
                                    marginBottom: "8px",
                                    paddingLeft: "4px",
                                    fontSize: "12px",
                                    color: t.textSecondary
                                },
                                children: "4K recommended for computer mockups."
                            }), (0, o.jsx)("div", {
                                style: {
                                    padding: "16px",
                                    backgroundColor: t.surfaceAlt,
                                    borderRadius: "12px"
                                },
                                children: (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "16px",
                                        marginBottom: C ? "12px" : "0"
                                    },
                                    children: [(0, o.jsx)("div", {
                                        style: {
                                            width: "48px",
                                            height: "48px",
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                            backgroundColor: t.surface,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: (0, o.jsxs)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: t.textSecondary,
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, o.jsx)("rect", {
                                                x: "2",
                                                y: "2",
                                                width: "20",
                                                height: "20",
                                                rx: "2",
                                                ry: "2",
                                                strokeDasharray: "4 4"
                                            }), (0, o.jsx)("path", {
                                                d: "M8 12h8"
                                            })]
                                        })
                                    }), (0, o.jsxs)("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [(0, o.jsxs)("div", {
                                            style: {
                                                color: t.text,
                                                fontSize: "16px",
                                                fontWeight: "500",
                                                marginBottom: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px"
                                            },
                                            children: ["Transparent Background", y && (0, o.jsx)("span", {
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "4px",
                                                    fontSize: "10px",
                                                    fontWeight: "600",
                                                    color: "#ddd",
                                                    background: "rgba(255,255,255,0.1)",
                                                    padding: "3px 7px",
                                                    borderRadius: "5px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.5px"
                                                },
                                                children: "\uD83D\uDC8E Pro"
                                            })]
                                        }), (0, o.jsx)("div", {
                                            style: {
                                                color: t.textSecondary,
                                                fontSize: "14px"
                                            },
                                            children: "Export with transparent background"
                                        })]
                                    }), (0, o.jsxs)("label", {
                                        style: {
                                            position: "relative",
                                            display: "inline-block",
                                            width: "48px",
                                            height: "28px"
                                        },
                                        children: [(0, o.jsx)("input", {
                                            type: "checkbox",
                                            checked: C,
                                            onChange: e => {
                                                let t = e.target.checked;
                                                S(t), x && x(!t)
                                            },
                                            style: {
                                                opacity: 0,
                                                width: 0,
                                                height: 0
                                            }
                                        }), (0, o.jsx)("span", {
                                            style: {
                                                position: "absolute",
                                                cursor: "pointer",
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: C ? "#E8797A" : t.border,
                                                borderRadius: "28px",
                                                transition: "all 0.3s ease",
                                                background: C ? "#E8797A" : t.border
                                            },
                                            children: (0, o.jsx)("span", {
                                                style: {
                                                    position: "absolute",
                                                    content: '""',
                                                    height: "20px",
                                                    width: "20px",
                                                    left: C ? "24px" : "4px",
                                                    bottom: "4px",
                                                    backgroundColor: "white",
                                                    borderRadius: "50%",
                                                    transition: "all 0.3s ease",
                                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
                                                }
                                            })
                                        })]
                                    })]
                                })
                            }), y && ("4k" === v || C) && (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    padding: "12px 14px",
                                    borderRadius: "10px",
                                    border: "1px solid rgba(132, 94, 194, 0.35)",
                                    backgroundColor: "rgba(132, 94, 194, 0.12)",
                                    fontSize: "13px",
                                    lineHeight: 1.45
                                },
                                children: [(0, o.jsx)("span", {
                                    style: {
                                        fontSize: "15px",
                                        flexShrink: 0
                                    },
                                    children: "\uD83D\uDC8E"
                                }), (0, o.jsx)("span", {
                                    style: {
                                        color: t.textSecondary
                                    },
                                    children: m > 0 ? (0, o.jsxs)(o.Fragment, {
                                        children: ["4K and transparent background are ", (0, o.jsx)("strong", {
                                            style: {
                                                color: t.text,
                                                fontWeight: 600
                                            },
                                            children: "Pro"
                                        }), " features. This export uses ", (0, o.jsx)("strong", {
                                            style: {
                                                color: t.text,
                                                fontWeight: 600
                                            },
                                            children: "1 credit"
                                        }), ", or upgrade to Pro for unlimited."]
                                    }) : (0, o.jsxs)(o.Fragment, {
                                        children: ["4K and transparent background are ", (0, o.jsx)("strong", {
                                            style: {
                                                color: t.text,
                                                fontWeight: 600
                                            },
                                            children: "Pro"
                                        }), " features. ", (0, o.jsx)("strong", {
                                            style: {
                                                color: t.text,
                                                fontWeight: 600
                                            },
                                            children: "Buy credits"
                                        }), " or upgrade to Pro to unlock."]
                                    })
                                })]
                            }), (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: t.textSecondary,
                                    fontSize: "12px",
                                    fontStyle: "italic",
                                    textAlign: "left",
                                    margin: "8px 0",
                                    padding: "0 16px",
                                    lineHeight: 1.4
                                },
                                children: [(0, o.jsxs)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    style: {
                                        marginRight: 8,
                                        flexShrink: 0
                                    },
                                    children: [(0, o.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: t.textSecondary,
                                        strokeWidth: "2"
                                    }), (0, o.jsx)("rect", {
                                        x: "11",
                                        y: "10",
                                        width: "2",
                                        height: "6",
                                        rx: "1",
                                        fill: t.textSecondary
                                    }), (0, o.jsx)("rect", {
                                        x: "11",
                                        y: "7",
                                        width: "2",
                                        height: "2",
                                        rx: "1",
                                        fill: t.textSecondary
                                    })]
                                }), (0, o.jsx)("span", {
                                    children: C ? (0, o.jsxs)(o.Fragment, {
                                        children: ["Frames render locally, then the transparent video is encoded on our servers. Can sometime take up to ~10 minutes.", (0, o.jsx)("br", {}), "Keep this tab open while exporting."]
                                    }) : (0, o.jsxs)(o.Fragment, {
                                        children: ["Export happens locally. Can sometime take up to ~10 minutes.", (0, o.jsx)("br", {}), "For best results, close other heavy apps while exporting."]
                                    })
                                })]
                            })]
                        }), (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: "16px",
                                marginTop: "32px"
                            },
                            children: [(0, o.jsx)("button", {
                                onClick: f,
                                style: {
                                    padding: "12px 24px",
                                    borderRadius: "8px",
                                    border: `1px solid ${t.border}`,
                                    backgroundColor: t.surface,
                                    color: t.text,
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    transition: "all 0.2s ease"
                                },
                                children: "Cancel"
                            }), (0, o.jsxs)("button", {
                                onClick: () => {
                                    b({
                                        sceneName: r,
                                        duration: (0, q.Q5)(p, w, !!d) || 5,
                                        fps: 30,
                                        verticalFormat: c,
                                        selectedColor: i,
                                        lightColor: a,
                                        lightIntensity: s,
                                        uploadedImage: l,
                                        uploadedVideo: d,
                                        quality: v,
                                        transparentBackground: C,
                                        transparentFormat: C ? "prores4444" : void 0,
                                        exportName: E.trim() || void 0
                                    })
                                },
                                style: {
                                    padding: "12px 24px",
                                    borderRadius: "8px",
                                    ...(0, A.Rj)(t),
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                },
                                children: [(0, o.jsxs)("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, o.jsx)("path", {
                                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    }), (0, o.jsx)("polyline", {
                                        points: "7 10 12 15 17 10"
                                    }), (0, o.jsx)("line", {
                                        x1: "12",
                                        y1: "15",
                                        x2: "12",
                                        y2: "3"
                                    })]
                                }), "Start Export"]
                            })]
                        })]
                    })
                })
            };

            function X(e, t) {
                return {
                    border: t ? "1px solid #E8797A" : `1px solid ${x.fF}`,
                    background: t ? "#E8797A" : "rgba(255, 255, 255, 0.04)",
                    color: t ? "#ffffff" : e.textSecondary,
                    borderRadius: 8,
                    padding: "6px 10px",
                    cursor: "pointer",
                    fontSize: 11,
                    fontWeight: 700
                }
            }
            var ee = function(e) {
                let {
                    queue: t,
                    onCancelExport: r,
                    onDownload: i,
                    onRemoveFromQueue: a,
                    theme: s,
                    isPremium: l = !1
                } = e, [d, c] = (0, n.useState)(!1);
                if (0 === t.length) return null;
                let p = e => {
                        if ("completed" === e.status) return 100;
                        if ("extracting_frames" === e.phase) {
                            let t = e.message ?.match(/\((\d+)%\)/);
                            return t ? Math.max(1, Math.min(10, Math.round(.1 * parseInt(t[1], 10)))) : 1
                        }
                        if ("ready" === e.phase) return 10;
                        if ("capturing" === e.phase) {
                            let t = e.current || e.captureProgress ?.current || 0,
                                r = e.total || e.captureProgress ?.total || 0,
                                o = e.encodingStart ?? 95;
                            return r > 0 ? 10 + t / r * (o - 10) : 10
                        }
                        return "encoding" === e.phase ? Math.min(100, e.encodingProgress ?? e.encodingStart ?? 95) : 0
                    },
                    u = t.some(e => "completed" !== e.status && "failed" !== e.status),
                    h = t.map((e, t) => ({
                        item: e,
                        videoNumber: t + 1
                    })).filter(e => {
                        let {
                            item: t
                        } = e;
                        return "completed" === t.status
                    });
                return d ? (0, o.jsxs)("button", {
                    type: "button",
                    onClick: () => c(!1),
                    style: {
                        position: "fixed",
                        right: 16,
                        bottom: 20,
                        zIndex: 10001,
                        border: `1px solid ${x.fF}`,
                        background: "rgba(22, 22, 24, 0.8)",
                        color: s.text,
                        borderRadius: 12,
                        padding: "10px 14px",
                        cursor: "pointer",
                        fontSize: 12,
                        fontWeight: 700
                    },
                    children: ["Exports (", t.length, ")"]
                }) : (0, o.jsxs)("div", {
                    style: { ...x.TQ,
                        position: "fixed",
                        right: 16,
                        bottom: 20,
                        zIndex: 10001,
                        width: 340,
                        borderRadius: 14,
                        overflow: "hidden",
                        maxHeight: "calc(100vh - 40px)",
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [(0, o.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px 12px",
                            borderBottom: `1px solid ${x.fF}`
                        },
                        children: [(0, o.jsx)("span", {
                            style: {
                                color: s.text,
                                fontSize: 13,
                                fontWeight: 700
                            },
                            children: "GPU Render Engine"
                        }), (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8
                            },
                            children: [(0, o.jsx)("a", {
                                href: "https://forms.gle/DZqag2yFgqzoVHwe6",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: s.textSecondary,
                                    fontSize: 11,
                                    fontWeight: 600,
                                    textDecoration: "none"
                                },
                                children: "Feedback"
                            }), (0, o.jsx)("button", {
                                type: "button",
                                onClick: () => c(!0),
                                style: {
                                    border: `1px solid ${x.fF}`,
                                    background: "rgba(255, 255, 255, 0.04)",
                                    color: s.textSecondary,
                                    borderRadius: 8,
                                    padding: "4px 8px",
                                    cursor: "pointer",
                                    fontSize: 11,
                                    fontWeight: 600
                                },
                                children: "Minimize"
                            })]
                        })]
                    }), (0, o.jsxs)("div", {
                        style: {
                            maxHeight: "52vh",
                            overflowY: "auto",
                            padding: 10,
                            display: "flex",
                            flexDirection: "column",
                            gap: 8
                        },
                        children: [u && (0, o.jsx)("div", {
                            style: {
                                color: s.textSecondary,
                                fontSize: 11,
                                padding: "0 2px 4px"
                            },
                            children: "Exports usually take about 10 minutes."
                        }), t.map((e, t) => {
                            let n = (() => {
                                let r = e.exportName || e.data ?.exportName;
                                return r ? r.length > 30 ? `${r.substring(0,27)}...` : r : `Video ${t+1}`
                            })();
                            return (0, o.jsxs)("div", {
                                style: {
                                    border: `1px solid ${x.fF}`,
                                    borderRadius: 10,
                                    padding: 10,
                                    background: "rgba(255, 255, 255, 0.03)",
                                    position: "relative"
                                },
                                children: ["completed" === e.status && (0, o.jsx)("button", {
                                    type: "button",
                                    onClick: () => a(e.id),
                                    style: {
                                        position: "absolute",
                                        top: 8,
                                        right: 8,
                                        background: "none",
                                        border: "none",
                                        padding: 4,
                                        cursor: "pointer",
                                        color: s.textSecondary,
                                        zIndex: 2
                                    },
                                    title: "Remove from queue",
                                    children: (0, o.jsxs)("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [(0, o.jsx)("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }), (0, o.jsx)("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        })]
                                    })
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        gap: 10
                                    },
                                    children: [(0, o.jsx)("div", {
                                        style: {
                                            width: 56,
                                            height: 56,
                                            borderRadius: 8,
                                            overflow: "hidden",
                                            flexShrink: 0,
                                            border: `1px solid ${x.fF}`,
                                            background: "rgba(255, 255, 255, 0.02)"
                                        },
                                        children: (0, o.jsx)("img", {
                                            src: (e.data && e.data.uploadedImage) ? e.data.uploadedImage : `/previews/static/${(0,S.Au)(`${e.sceneBaseName}.glb`).replace(".glb","")}.png`,
                                            alt: "",
                                            onError: r => {
                                                if (e.data && e.data.uploadedImage && r.currentTarget.src !== e.data.uploadedImage) {
                                                    r.currentTarget.src = e.data.uploadedImage;
                                                } else {
                                                    r.currentTarget.src = "/category-thumbnails/mockups.jpg";
                                                }
                                            },
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            }
                                        })
                                    }), (0, o.jsxs)("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: [(0, o.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                gap: 8,
                                                marginBottom: 6
                                            },
                                            children: [(0, o.jsxs)("div", {
                                                style: {
                                                    minWidth: 0
                                                },
                                                children: [(0, o.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 6,
                                                        minWidth: 0
                                                    },
                                                    children: [(0, o.jsx)("div", {
                                                        style: {
                                                            color: s.text,
                                                            fontSize: 12,
                                                            fontWeight: 700,
                                                            whiteSpace: "nowrap",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis"
                                                        },
                                                        children: n
                                                    }), !l && (0, S.q8)(`${e.sceneBaseName}.glb`) ? (0, o.jsx)("span", {
                                                        style: {
                                                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                                                            color: s.textSecondary,
                                                            padding: "2px 6px",
                                                            borderRadius: 6,
                                                            fontSize: 9,
                                                            fontWeight: 700,
                                                            textTransform: "uppercase",
                                                            flexShrink: 0
                                                        },
                                                        children: "Free"
                                                    }) : l ? null : (0, o.jsx)("span", {
                                                        style: {
                                                            fontSize: 11,
                                                            flexShrink: 0
                                                        },
                                                        children: "\uD83D\uDC8E"
                                                    })]
                                                }), (0, o.jsxs)("div", {
                                                    style: {
                                                        color: s.textSecondary,
                                                        fontSize: 11,
                                                        marginTop: 2
                                                    },
                                                    children: [e.isVerticalFormat ? "9:16" : "16:9", " \xb7 ", "4k" === e.quality ? "4K" : "1080p", " \xb7 ", (e.duration || 5).toFixed(1), "s"]
                                                })]
                                            }), "completed" !== e.status && "failed" !== e.status && (0, o.jsx)("div", {
                                                style: {
                                                    color: A.Lr,
                                                    fontSize: 10,
                                                    fontWeight: 700,
                                                    textTransform: "uppercase",
                                                    flexShrink: 0
                                                },
                                                children: "capturing" === e.phase ? "Capturing" : "Encoding"
                                            })]
                                        }), "failed" === e.status && (0, o.jsx)("div", {
                                            style: {
                                                color: "#ff8c8c",
                                                fontSize: 11,
                                                marginBottom: 8
                                            },
                                            children: e.error || "Export failed"
                                        }), "completed" !== e.status && "failed" !== e.status && (0, o.jsxs)(o.Fragment, {
                                            children: [(0, o.jsx)("div", {
                                                style: {
                                                    height: 5,
                                                    borderRadius: 999,
                                                    background: "rgba(255, 255, 255, 0.08)",
                                                    overflow: "hidden",
                                                    marginBottom: 6
                                                },
                                                children: (0, o.jsx)("div", {
                                                    style: {
                                                        width: `${p(e)}%`,
                                                        height: "100%",
                                                        background: A.Lr
                                                    }
                                                })
                                            }), (0, o.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center"
                                                },
                                                children: [(0, o.jsxs)("span", {
                                                    style: {
                                                        color: s.textSecondary,
                                                        fontSize: 11
                                                    },
                                                    children: [Math.round(p(e)), "%"]
                                                }), (0, o.jsx)("button", {
                                                    type: "button",
                                                    onClick: () => r(e.id),
                                                    style: X(s, !1),
                                                    children: "Cancel"
                                                })]
                                            })]
                                        }), "completed" === e.status && (0, o.jsx)("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                marginTop: 4
                                            },
                                            children: (0, o.jsxs)("button", {
                                                type: "button",
                                                onClick: () => i(e, t + 1),
                                                style: { ...A.n,
                                                    ...X(s, !0),
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 6
                                                },
                                                children: [(0, o.jsxs)("svg", {
                                                    width: "14",
                                                    height: "14",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [(0, o.jsx)("path", {
                                                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                    }), (0, o.jsx)("polyline", {
                                                        points: "7 10 12 15 17 10"
                                                    }), (0, o.jsx)("line", {
                                                        x1: "12",
                                                        y1: "15",
                                                        x2: "12",
                                                        y2: "3"
                                                    })]
                                                }), "Download"]
                                            })
                                        })]
                                    })]
                                })]
                            }, e.id)
                        }), h.length >= 2 && (0, o.jsx)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "flex-end",
                                paddingRight: 10
                            },
                            children: (0, o.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                    h.forEach(e => {
                                        let {
                                            item: t,
                                            videoNumber: r
                                        } = e;
                                        i(t, r)
                                    })
                                },
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: s.textSecondary,
                                    cursor: "pointer",
                                    fontSize: 11,
                                    fontWeight: 600,
                                    padding: 0
                                },
                                children: "Download all"
                            })
                        })]
                    })]
                })
            };

            function et(e) {
                let {
                    queue: t,
                    onCancel: r,
                    onDownload: i,
                    onRemove: a,
                    theme: s,
                    bottom: l = 16
                } = e, [d, c] = (0, n.useState)(!1), [p, u] = (0, n.useState)(null), [, h] = (0, n.useState)(0);
                (0, n.useEffect)(() => {
                    let e = setInterval(() => {
                        h(e => e + 1), t.forEach(e => {
                            "completed" === e.status && e.expiresAt && Date.now() >= e.expiresAt && a(e.id)
                        })
                    }, 6e4);
                    return () => clearInterval(e)
                }, [t, a]);
                let g = (0, n.useCallback)(async e => {
                    if (null == p) {
                        u(e);
                        try {
                            await i(e)
                        } catch (e) {
                            console.error(e)
                        } finally {
                            u(null)
                        }
                    }
                }, [p, i]);
                return t.length ? d ? (0, o.jsxs)("button", {
                    type: "button",
                    onClick: () => c(!1),
                    style: {
                        position: "fixed",
                        right: 16,
                        bottom: l,
                        zIndex: 10010,
                        border: `1px solid ${x.fF}`,
                        background: "rgba(22,22,24,0.8)",
                        color: s.text,
                        borderRadius: 12,
                        padding: "10px 14px",
                        cursor: "pointer",
                        fontSize: 12,
                        fontWeight: 700
                    },
                    children: ["Exports (", t.length, ")"]
                }) : (0, o.jsxs)("div", {
                    style: { ...x.TQ,
                        position: "fixed",
                        right: 16,
                        bottom: l,
                        zIndex: 10010,
                        width: 340,
                        borderRadius: 14,
                        overflow: "hidden"
                    },
                    children: [(0, o.jsx)("style", {
                        children: `
        @keyframes studioExportSpin {
          to { transform: rotate(360deg); }
        }
      `
                    }), (0, o.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px 12px",
                            borderBottom: `1px solid ${x.fF}`
                        },
                        children: [(0, o.jsx)("span", {
                            style: {
                                color: s.text,
                                fontSize: 13,
                                fontWeight: 700
                            },
                            children: "GPU Render Engine"
                        }), (0, o.jsx)("button", {
                            type: "button",
                            onClick: () => c(!0),
                            style: {
                                border: `1px solid ${x.fF}`,
                                background: "rgba(255,255,255,0.04)",
                                color: s.textSecondary,
                                borderRadius: 8,
                                padding: "4px 8px",
                                cursor: "pointer",
                                fontSize: 11,
                                fontWeight: 600
                            },
                            children: "Minimize"
                        })]
                    }), (0, o.jsx)("div", {
                        style: {
                            maxHeight: "52vh",
                            overflowY: "auto",
                            padding: 10,
                            display: "flex",
                            flexDirection: "column",
                            gap: 8
                        },
                        children: t.map((e, t) => {
                            var n;
                            let i = e.exportName || `Export ${t+1}`,
                                l = e.expiresAt && Date.now() >= e.expiresAt,
                                d = "completed" === e.status && e.expiresAt ? function(e) {
                                    let t = e - Date.now();
                                    if (t <= 0) return null;
                                    let r = Math.floor(t / 36e5),
                                        o = Math.floor(t % 36e5 / 6e4);
                                    return r > 0 ? `Available for ${r}h ${o}m` : o > 1 ? `Available for ${o} min` : "Expiring soon"
                                }(e.expiresAt) : null;
                            return (0, o.jsxs)("div", {
                                style: {
                                    border: `1px solid ${x.fF}`,
                                    borderRadius: 10,
                                    padding: 10,
                                    background: "rgba(255,255,255,0.03)"
                                },
                                children: [(0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        gap: 8,
                                        marginBottom: 8
                                    },
                                    children: [(0, o.jsxs)("div", {
                                        style: {
                                            minWidth: 0
                                        },
                                        children: [(0, o.jsx)("div", {
                                            style: {
                                                color: s.text,
                                                fontSize: 12,
                                                fontWeight: 700,
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                            },
                                            children: i
                                        }), (0, o.jsxs)("div", {
                                            style: {
                                                color: s.textSecondary,
                                                fontSize: 11
                                            },
                                            children: ["4K" === e.quality ? "4K" : "1080p", " \xb7 ", e.outputAspectRatio]
                                        })]
                                    }), (0, o.jsx)("div", {
                                        style: {
                                            color: "completed" === (n = e.status) ? "#8ee28e" : "error" === n ? "#ff8c8c" : "processing" === n ? "#ffc66d" : "cancelled" === n ? "#c8c8c8" : "#a7a7a7",
                                            fontSize: 11,
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            textAlign: "right"
                                        },
                                        children: l ? "Expired" : e.status
                                    })]
                                }), "processing" === e.status && (0, o.jsxs)("div", {
                                    style: {
                                        marginBottom: 8
                                    },
                                    children: [(0, o.jsx)("div", {
                                        style: {
                                            height: 5,
                                            borderRadius: 999,
                                            background: "rgba(255,255,255,0.08)",
                                            overflow: "hidden"
                                        },
                                        children: (0, o.jsx)("div", {
                                            style: {
                                                width: `${e.progress||0}%`,
                                                height: "100%",
                                                background: "#E8797A"
                                            }
                                        })
                                    }), (0, o.jsxs)("div", {
                                        style: {
                                            marginTop: 5,
                                            color: s.textSecondary,
                                            fontSize: 11
                                        },
                                        children: [Math.round(e.progress || 0), "%", e.progressHint && (0, o.jsx)("span", {
                                            style: {
                                                marginLeft: 8,
                                                opacity: .9
                                            },
                                            children: e.progressHint
                                        })]
                                    })]
                                }), "error" === e.status && (0, o.jsx)("div", {
                                    style: {
                                        color: "#ff8c8c",
                                        fontSize: 11,
                                        marginBottom: 8
                                    },
                                    children: e.error || "Export failed"
                                }), d && !l && (0, o.jsxs)("div", {
                                    style: {
                                        marginBottom: 8,
                                        color: "rgba(255,255,255,0.28)",
                                        fontSize: 10
                                    },
                                    children: ["⏳ ", d]
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        gap: 6
                                    },
                                    children: [("queued" === e.status || "processing" === e.status) && (0, o.jsx)("button", {
                                        type: "button",
                                        onClick: () => r(e.id),
                                        style: er(s, !1),
                                        children: "Cancel"
                                    }), "completed" === e.status && !l && (0, o.jsxs)("button", {
                                        type: "button",
                                        disabled: p === e.id,
                                        onClick: () => g(e.id),
                                        style: { ...er(s, !0),
                                            opacity: p === e.id ? .85 : 1,
                                            cursor: p === e.id ? "wait" : "pointer",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 6
                                        },
                                        children: [p === e.id && (0, o.jsx)("span", {
                                            "aria-hidden": !0,
                                            style: {
                                                width: 12,
                                                height: 12,
                                                border: "2px solid rgba(255,255,255,0.35)",
                                                borderTopColor: "#fff",
                                                borderRadius: "50%",
                                                animation: "studioExportSpin 0.65s linear infinite",
                                                flexShrink: 0
                                            }
                                        }), p === e.id ? "Preparing…" : "Download"]
                                    }), ("completed" === e.status || "error" === e.status || "cancelled" === e.status || l) && (0, o.jsx)("button", {
                                        type: "button",
                                        onClick: () => a(e.id),
                                        style: er(s, !1),
                                        children: "Remove"
                                    })]
                                })]
                            }, e.id)
                        })
                    })]
                }) : null
            }

            function er(e, t) {
                return {
                    border: t ? "1px solid #E8797A" : `1px solid ${x.fF}`,
                    background: t ? "#E8797A" : "rgba(255,255,255,0.04)",
                    color: t ? "#ffffff" : e.textSecondary,
                    borderRadius: 8,
                    padding: "6px 10px",
                    cursor: "pointer",
                    fontSize: 11,
                    fontWeight: 700
                }
            }

            function eo(e) {
                let {
                    template: t,
                    onClick: r,
                    theme: i,
                    isVerticalFormat: a,
                    getPreviewPath: s,
                    isPremium: l = !1
                } = e, [d, c] = (0, n.useState)(!1), [p, u] = (0, n.useState)(null), x = (0, n.useRef)(null);
                return S.u_.includes(t) || S.om.includes(t), (0, n.useEffect)(() => {
                    let e = () => {
                        x.current && x.current.duration && !isNaN(x.current.duration) && u(x.current.duration)
                    };
                    e();
                    let t = x.current;
                    if (t) return t.addEventListener("loadedmetadata", e), () => {
                        t && t.removeEventListener("loadedmetadata", e)
                    }
                }, [t]), (0, o.jsxs)("button", {
                    onClick: () => r(t),
                    onMouseEnter: e => {
                        e.currentTarget.style.transform = "translateY(-2px)", e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)", c(!0)
                    },
                    onMouseLeave: e => {
                        e.currentTarget.style.transform = "translateY(0)", e.currentTarget.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.1)", c(!1)
                    },
                    style: {
                        width: "100%",
                        height: a ? "120px" : "140px",
                        backgroundColor: i.surface,
                        border: `1px solid ${i.border}`,
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                        padding: 0,
                        display: "block"
                    },
                    children: [(0, o.jsx)("video", {
                        ref: x,
                        src: s(t, !0),
                        poster: s(t, !1),
                        alt: t,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            transition: "all 0.3s ease",
                            transform: d ? "scale(1.05)" : "scale(1)",
                            willChange: "transform",
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 0
                        },
                        autoPlay: d,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        preload: "auto",
                        onLoadedMetadata: () => {
                            x.current && x.current.duration && !isNaN(x.current.duration) && u(x.current.duration)
                        },
                        onMouseEnter: () => {
                            x.current && x.current.play().catch(() => {})
                        },
                        onMouseLeave: () => {
                            x.current && x.current.pause(), x.current && (x.current.currentTime = 0)
                        }
                    }), !l && (0, o.jsxs)("div", {
                        style: {
                            position: "absolute",
                            top: "8px",
                            right: "8px",
                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                            backdropFilter: "blur(8px)",
                            color: "#fff",
                            padding: "3px 6px",
                            borderRadius: "8px",
                            fontSize: "8px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            zIndex: 2,
                            fontFamily: "system-ui, -apple-system, sans-serif",
                            display: "flex",
                            alignItems: "center",
                            gap: "3px"
                        },
                        children: [(0, o.jsx)("span", {
                            style: {
                                fontSize: "8px"
                            },
                            children: "\uD83D\uDC8E"
                        }), "PREMIUM"]
                    }), (0, o.jsx)("div", {
                        style: {
                            position: "absolute",
                            bottom: "6px",
                            right: "6px",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            backdropFilter: "blur(4px)",
                            color: "rgba(255, 255, 255, 0.85)",
                            padding: "2px 5px",
                            borderRadius: "5px",
                            fontSize: "9px",
                            fontWeight: "500",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                            zIndex: 2,
                            pointerEvents: "none",
                            opacity: p ? .8 : .4,
                            minWidth: "28px",
                            minHeight: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: p ? (0, q.LU)(p) : ""
                    })]
                })
            }
            var en = function(e) {
                    let {
                        theme: t,
                        onClose: r,
                        exportItem: i,
                        onGetAccess: a,
                        onSceneChange: s,
                        isPremium: l = !1
                    } = e, {
                        currentUser: d
                    } = (0, m.a)(), [c, p] = (0, n.useState)(!1), {
                        credits: x
                    } = (0, u.B)(), h = (0, n.useMemo)(() => {
                        let e = i ?.data ?.isVerticalFormat;
                        return [...S.v8.filter(t => {
                            let r = S.u_.includes(t) || S.om.includes(t);
                            return e ? r : !r
                        })].sort(() => Math.random() - .5).slice(0, e ? 3 : 2)
                    }, [i]), g = e => {
                        _.Z.track("premium_template_preview_clicked", {
                            userId: d ?.uid,
                            template: e,
                            originalExport: i ?.data ?.sceneName
                        }), r(), s && s(e)
                    }, f = (e, t) => {
                        let r = e.replace(".glb", "");
                        return t ? `/previews/${r}.mp4` : `/previews/static/${r}.png`
                    };
                    return l || x > 2 ? null : (0, o.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 10002,
                            padding: "20px",
                            animation: "fadeIn 0.3s ease-out"
                        },
                        onClick: r,
                        children: (0, o.jsxs)("div", {
                            style: {
                                backgroundColor: t.surface,
                                borderRadius: "24px",
                                maxWidth: "600px",
                                width: "100%",
                                maxHeight: "80vh",
                                boxShadow: "0 25px 80px rgba(0, 0, 0, 0.4)",
                                border: `1px solid ${t.border}`,
                                position: "relative",
                                animation: "slideUp 0.3s ease-out",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column"
                            },
                            onClick: e => e.stopPropagation(),
                            children: [(0, o.jsxs)("div", {
                                style: {
                                    position: "relative",
                                    height: "200px",
                                    overflow: "hidden"
                                },
                                children: [(0, o.jsxs)("video", {
                                    autoPlay: !0,
                                    muted: !0,
                                    loop: !0,
                                    playsInline: !0,
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block"
                                    },
                                    children: [(0, o.jsx)("source", {
                                        src: "/Landingpage/Landing_Video.mp4",
                                        type: "video/mp4"
                                    }), "Your browser does not support the video tag."]
                                }), (0, o.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: "linear-gradient(135deg, rgba(255, 215, 0, 0.3) 0%, rgba(139, 69, 19, 0.4) 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column"
                                    },
                                    children: (0, o.jsx)("h2", {
                                        style: {
                                            margin: "0",
                                            fontSize: "28px",
                                            fontWeight: "700",
                                            color: "white",
                                            lineHeight: "1.2",
                                            textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)"
                                        },
                                        children: (() => {
                                            if (0 === x);
                                            else if (1 === x) return "\uD83D\uDC8E Only 1 credit left";
                                            else if (2 === x) return "\uD83D\uDC8E Only 2 credits left";
                                            return "Liked your video?"
                                        })()
                                    })
                                })]
                            }), (0, o.jsxs)("div", {
                                style: {
                                    padding: "24px",
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                },
                                children: [(0, o.jsx)("button", {
                                    onClick: r,
                                    style: {
                                        position: "absolute",
                                        top: "16px",
                                        right: "16px",
                                        background: "rgba(0, 0, 0, 0.5)",
                                        border: "none",
                                        fontSize: "24px",
                                        cursor: "pointer",
                                        color: "white",
                                        padding: "8px",
                                        borderRadius: "50%",
                                        transition: "all 0.2s ease",
                                        width: "36px",
                                        height: "36px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        zIndex: 10
                                    },
                                    onMouseEnter: e => {
                                        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
                                    },
                                    onMouseLeave: e => {
                                        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
                                    },
                                    children: "\xd7"
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        backgroundColor: t.surfaceAlt,
                                        borderRadius: "12px",
                                        padding: "20px",
                                        marginBottom: "20px",
                                        border: `1px solid ${t.border}`
                                    },
                                    children: [(0, o.jsxs)("div", {
                                        style: {
                                            textAlign: "center",
                                            marginBottom: "16px"
                                        },
                                        children: [(0, o.jsx)("div", {
                                            style: {
                                                fontSize: "18px",
                                                fontWeight: "600",
                                                color: t.text,
                                                marginBottom: "16px"
                                            },
                                            children: "Want more like this?"
                                        }), (0, o.jsx)("div", {
                                            style: {
                                                display: "grid",
                                                gridTemplateColumns: i ?.data ?.isVerticalFormat ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
                                                gap: "12px",
                                                marginTop: "16px",
                                                width: "100%"
                                            },
                                            children: h.map((e, r) => (0, o.jsx)(eo, {
                                                template: e,
                                                onClick: g,
                                                theme: t,
                                                isVerticalFormat: i ?.data ?.isVerticalFormat,
                                                getPreviewPath: f,
                                                isPremium: l
                                            }, e))
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        style: {
                                            fontSize: "14px",
                                            color: t.textSecondary,
                                            textAlign: "center",
                                            marginTop: "16px"
                                        },
                                        children: ["With credits you can unlock all ", (0, S.IB)(), " premium templates"]
                                    })]
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: [(0, o.jsx)("button", {
                                        onClick: () => {
                                            _.Z.track("post_download_upgrade_attempted", {
                                                userId: d ?.uid,
                                                exportAnimation: i ?.data ?.sceneName,
                                                exportDevice: i ?.data ?.device
                                            }), a()
                                        },
                                        disabled: c,
                                        style: {
                                            background: "#ffffff",
                                            color: "#111111",
                                            border: "none",
                                            borderRadius: "12px",
                                            padding: "16px 32px",
                                            fontSize: "16px",
                                            fontWeight: "700",
                                            cursor: c ? "not-allowed" : "pointer",
                                            transition: "all 0.2s ease",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            margin: "0 auto",
                                            boxShadow: "0 6px 25px rgba(0, 0, 0, 0.25)",
                                            minWidth: "240px",
                                            justifyContent: "center",
                                            opacity: c ? .7 : 1
                                        },
                                        onMouseEnter: e => {
                                            c || (e.currentTarget.style.transform = "translateY(-2px)", e.currentTarget.style.boxShadow = "0 8px 35px rgba(0, 0, 0, 0.3)")
                                        },
                                        onMouseLeave: e => {
                                            c || (e.currentTarget.style.transform = "translateY(0)", e.currentTarget.style.boxShadow = "0 6px 25px rgba(0, 0, 0, 0.25)")
                                        },
                                        children: c ? (0, o.jsxs)(o.Fragment, {
                                            children: [(0, o.jsx)("div", {
                                                style: {
                                                    width: "16px",
                                                    height: "16px",
                                                    border: "2px solid rgba(255, 255, 255, 0.3)",
                                                    borderTop: "2px solid currentColor",
                                                    borderRadius: "50%",
                                                    animation: "spin 1s linear infinite"
                                                }
                                            }), "Loading..."]
                                        }) : "\uD83D\uDC8E Add Credits"
                                    }), (0, o.jsx)("p", {
                                        style: {
                                            margin: "12px 0 0 0",
                                            fontSize: "12px",
                                            color: t.textSecondary,
                                            textAlign: "center"
                                        },
                                        children: "Only buy what you need, 1 credit = 1 export"
                                    })]
                                })]
                            }), (0, o.jsx)("style", {
                                children: `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(30px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
              transform: translate3d(0,0,0);
            }
            40%, 43% {
              transform: translate3d(0, -30px, 0);
            }
            70% {
              transform: translate3d(0, -15px, 0);
            }
            90% {
              transform: translate3d(0, -4px, 0);
            }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
                            })]
                        })
                    })
                },
                ei = function(e) {
                    let {
                        theme: t,
                        onClose: r
                    } = e, [i, a] = (0, n.useState)(!0), [s, l] = (0, n.useState)(!1), {
                        currentUser: d
                    } = (0, m.a)(), c = () => {
                        d ? localStorage.setItem(`socialShareOfferSeen_${d.uid}`, "true") : localStorage.setItem("socialShareOfferSeen_guest", "true"), l(!0), setTimeout(() => {
                            a(!1), r ?.()
                        }, 300)
                    };
                    return i ? (0, o.jsxs)("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 10001,
                            animation: s ? "fadeOut 0.3s ease-out" : "fadeIn 0.3s ease-out",
                            pointerEvents: s ? "none" : "auto"
                        },
                        onClick: c,
                        children: [(0, o.jsx)("style", {
                            children: `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(20px);
            opacity: 0;
          }
        }
      `
                        }), (0, o.jsxs)("div", {
                            onClick: e => e.stopPropagation(),
                            style: {
                                maxWidth: "450px",
                                width: "90%",
                                backgroundColor: t.surface,
                                borderRadius: "16px",
                                padding: "32px",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
                                border: `1px solid ${t.border}`,
                                animation: s ? "slideDown 0.3s ease-out" : "slideUp 0.3s ease-out",
                                position: "relative"
                            },
                            children: [(0, o.jsx)("button", {
                                onClick: c,
                                style: {
                                    position: "absolute",
                                    top: "12px",
                                    right: "12px",
                                    background: "none",
                                    border: "none",
                                    color: t.textSecondary,
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    padding: "4px",
                                    lineHeight: "1",
                                    borderRadius: "4px",
                                    transition: "color 0.2s ease"
                                },
                                onMouseEnter: e => e.target.style.color = t.text,
                                onMouseLeave: e => e.target.style.color = t.textSecondary,
                                children: "\xd7"
                            }), (0, o.jsx)("div", {
                                style: {
                                    fontSize: "40px",
                                    marginBottom: "12px",
                                    textAlign: "center"
                                },
                                children: "\uD83C\uDF81"
                            }), (0, o.jsx)("h3", {
                                style: {
                                    margin: "0 0 12px 0",
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    color: t.text,
                                    textAlign: "center",
                                    lineHeight: "1.3"
                                },
                                children: "Want 3 free premium exports?"
                            }), (0, o.jsxs)("p", {
                                style: {
                                    margin: "0 0 20px 0",
                                    fontSize: "14px",
                                    color: t.textSecondary,
                                    lineHeight: "1.6",
                                    textAlign: "center"
                                },
                                children: ["If you are already sharing your mockup on social media, feel free to mention", " ", (0, o.jsx)("span", {
                                    style: {
                                        fontWeight: "600",
                                        color: t.primary || "#2196f3"
                                    },
                                    children: "lumio.studio"
                                }), ".", (0, o.jsx)("br", {}), (0, o.jsx)("br", {}), "Send us the link and we will add 3 premium credits to your account as a thank-you."]
                            }), (0, o.jsx)("button", {
                                onClick: () => {
                                    let e = encodeURIComponent("LUMIO Social Share - Free Credits Request"),
                                        t = encodeURIComponent(`I've shared my mockup on social media and mentioned lumio.studio!

Here's the link to my post:
[Your social media post link here]

My account email: ${d?.email||"N/A"}`),
                                        r = `mailto:contact.lumio@gmail.com?subject=${e}&body=${t}`;
                                    window.location.href = r, d ? localStorage.setItem(`socialShareOfferSeen_${d.uid}`, "true") : localStorage.setItem("socialShareOfferSeen_guest", "true"), c()
                                },
                                style: {
                                    width: "100%",
                                    padding: "12px 24px",
                                    backgroundColor: t.primary || "#2196f3",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)"
                                },
                                onMouseEnter: e => {
                                    e.target.style.backgroundColor = t.primaryHover || "#1976d2", e.target.style.transform = "translateY(-1px)", e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)"
                                },
                                onMouseLeave: e => {
                                    e.target.style.backgroundColor = t.primary || "#2196f3", e.target.style.transform = "translateY(0)", e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)"
                                },
                                children: "\uD83D\uDCE7 Send Email"
                            })]
                        })]
                    }) : null
                },
                ea = r(788);
            let es = [{
                    value: "work",
                    label: "Work / job",
                    Icon: ea.CvH
                }, {
                    value: "hobby",
                    label: "Hobby / side project",
                    Icon: ea.MVI
                }, {
                    value: "just_curious",
                    label: "Just curious",
                    Icon: ea.DTb
                }, {
                    value: "other",
                    label: "Other",
                    Icon: ea.xr$
                }],
                el = [{
                    value: "own_app",
                    label: "My own app or product",
                    Icon: ea.uuN
                }, {
                    value: "client_work",
                    label: "Client work (agency / freelance)",
                    Icon: ea.bwC
                }, {
                    value: "other_product",
                    label: "Promoting someone else's product",
                    Icon: ea.KQY
                }, {
                    value: "trying_out",
                    label: "Just trying it out",
                    Icon: ea.EGB
                }, {
                    value: "other",
                    label: "Other",
                    Icon: ea.xr$
                }],
                ed = [{
                    value: "tiktok",
                    label: "TikTok",
                    icon: "\uD83C\uDFB5"
                }, {
                    value: "youtube",
                    label: "YouTube",
                    icon: "▶️"
                }, {
                    value: "google",
                    label: "Google",
                    icon: "\uD83D\uDD0D"
                }, {
                    value: "friend",
                    label: "Friend or colleague",
                    icon: "\uD83D\uDC65"
                }, {
                    value: "twitter",
                    label: "Twitter/X",
                    icon: "\uD835\uDD4F"
                }, {
                    value: "instagram",
                    label: "Instagram",
                    icon: "\uD83D\uDCF7"
                }, {
                    value: "other",
                    label: "Other",
                    icon: "✨"
                }],
                ec = [{
                    value: "phone",
                    label: "Mobile app",
                    Icon: ea.uuN
                }, {
                    value: "computer",
                    label: "Desktop app",
                    Icon: ea.rEK
                }, {
                    value: "both",
                    label: "Both",
                    Icon: ea.xr$
                }, {
                    value: "neither",
                    label: "Neither",
                    Icon: ea.DTb
                }];
            var ep = function(e) {
                let {
                    open: t,
                    onComplete: r,
                    theme: i,
                    userId: a
                } = e, [s, l] = (0, n.useState)(0), [d, c] = (0, n.useState)(null), [p, u] = (0, n.useState)(null), [x, h] = (0, n.useState)([]), [g, m] = (0, n.useState)(null), [f, b] = (0, n.useState)(!1);
                if (!t) return null;
                let y = e => {
                        if (a) {
                            try {
                                window.localStorage.setItem(`onboardingPreferredDevice_${a}`, e || "")
                            } catch {}
                            try {
                                window.dispatchEvent(new CustomEvent("lumio:devicePreference", {
                                    detail: {
                                        userId: a,
                                        preferredDevice: e || null
                                    }
                                }))
                            } catch {}
                        }
                    },
                    v = async () => {
                        if (!a) {
                            r ?.();
                            return
                        }
                        b(!0);
                        try {
                            await (0, R.yO)(a, {
                                context: d,
                                useCase: p,
                                source: x.length ? x : null,
                                comment: null,
                                preferredDevice: g
                            }, !1), _.Z.track("onboarding_context", {
                                context: d
                            }), _.Z.track("onboarding_use_case", {
                                use_case: p
                            }), _.Z.track("onboarding_source", {
                                source: x.length ? x : []
                            }), _.Z.track("onboarding_preferred_device", {
                                preferred_device: g
                            }), _.Z.track("onboarding_completed", {
                                context: d,
                                useCase: p,
                                source: x.length ? x : null,
                                has_comment: !1,
                                preferred_device: g
                            }), _.Z.setUserProperties({
                                onboarding_context: d,
                                onboarding_use_case: p,
                                onboarding_source: x.length ? x : null,
                                onboarding_preferred_device: g
                            }), y(g), r ?.()
                        } catch (e) {
                            console.error(e)
                        }
                        b(!1)
                    },
                    j = e => {
                        h(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
                    },
                    w = 0 === s ? null != d : 1 === s ? null != p : 2 === s || null != g,
                    k = e => ({
                        padding: "14px 18px",
                        borderRadius: "12px",
                        border: `2px solid ${e?i.primary||"#845EC2":i.border}`,
                        backgroundColor: e ? i.surfaceAlt || "rgba(255,255,255,0.08)" : "transparent",
                        color: i.text,
                        fontSize: "15px",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px"
                    });
                return (0, o.jsxs)("div", {
                    style: {
                        position: "fixed",
                        inset: 0,
                        zIndex: 10003,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0,0,0,0.5)"
                    },
                    children: [(0, o.jsx)("style", {
                        children: ".onboarding-modal-content::-webkit-scrollbar { display: none; } .onboarding-modal-content { -ms-overflow-style: none; scrollbar-width: none; }"
                    }), (0, o.jsxs)("div", {
                        className: "onboarding-modal-content",
                        style: {
                            backgroundColor: i.surface,
                            border: `1px solid ${i.border}`,
                            borderRadius: "20px",
                            padding: "28px 32px",
                            width: "min(92vw, 520px)",
                            maxHeight: "88vh",
                            overflow: "auto",
                            boxShadow: "0 12px 40px rgba(0,0,0,0.3)"
                        },
                        onClick: e => e.stopPropagation(),
                        children: [(0, o.jsx)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                marginBottom: "24px"
                            },
                            children: Array.from({
                                length: 4
                            }, (e, t) => (0, o.jsx)("div", {
                                style: {
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    backgroundColor: t === s ? i.primary || "#845EC2" : i.border,
                                    opacity: t === s ? 1 : .5
                                }
                            }, t))
                        }), (0, o.jsx)("h3", {
                            style: {
                                margin: "0 0 22px",
                                fontSize: "20px",
                                fontWeight: 600,
                                color: i.text
                            },
                            children: 0 === s ? "What are you creating today?" : 1 === s ? "What do you use LUMIO for?" : 2 === s ? "How did you hear about us?" : "What are you making videos for?"
                        }), 0 === s && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("p", {
                                style: {
                                    margin: "0 0 16px",
                                    fontSize: "14px",
                                    color: i.textSecondary
                                },
                                children: "Only takes a minute."
                            }), (0, o.jsx)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    marginBottom: "28px"
                                },
                                children: es.map(e => (0, o.jsxs)("button", {
                                    type: "button",
                                    style: k(d === e.value),
                                    onClick: () => c(e.value),
                                    children: [(0, o.jsx)(e.Icon, {
                                        size: 22,
                                        style: {
                                            flexShrink: 0
                                        }
                                    }), e.label]
                                }, e.value))
                            })]
                        }), 1 === s && (0, o.jsx)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                marginBottom: "28px"
                            },
                            children: el.map(e => (0, o.jsxs)("button", {
                                type: "button",
                                style: k(p === e.value),
                                onClick: () => u(e.value),
                                children: [(0, o.jsx)(e.Icon, {
                                    size: 22,
                                    style: {
                                        flexShrink: 0
                                    }
                                }), e.label]
                            }, e.value))
                        }), 2 === s && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("p", {
                                style: {
                                    margin: "0 0 14px",
                                    fontSize: "14px",
                                    color: i.textSecondary
                                },
                                children: "Select your preferred workflow"
                            }), (0, o.jsx)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    marginBottom: "28px"
                                },
                                children: ed.map(e => (0, o.jsxs)("button", {
                                    type: "button",
                                    style: k(x.includes(e.value)),
                                    onClick: () => j(e.value),
                                    children: [(0, o.jsx)("span", {
                                        style: {
                                            fontSize: "20px",
                                            width: 28,
                                            textAlign: "center"
                                        },
                                        children: e.icon
                                    }), e.label]
                                }, e.value))
                            })]
                        }), 3 === s && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("p", {
                                style: {
                                    margin: "0 0 16px",
                                    fontSize: "14px",
                                    color: i.textSecondary
                                },
                                children: "This helps us pick the best defaults (you can change it anytime)."
                            }), (0, o.jsx)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    marginBottom: "28px"
                                },
                                children: ec.map(e => (0, o.jsxs)("button", {
                                    type: "button",
                                    style: k(g === e.value),
                                    onClick: () => m(e.value),
                                    children: [(0, o.jsx)(e.Icon, {
                                        size: 22,
                                        style: {
                                            flexShrink: 0
                                        }
                                    }), e.label]
                                }, e.value))
                            })]
                        }), (0, o.jsx)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center"
                            },
                            children: 3 === s ? (0, o.jsx)("button", {
                                type: "button",
                                disabled: f,
                                onClick: v,
                                style: {
                                    padding: "12px 24px",
                                    borderRadius: "10px",
                                    border: "none",
                                    background: "linear-gradient(135deg, #FF6B6B, #845EC2)",
                                    color: "white",
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    cursor: f ? "not-allowed" : "pointer"
                                },
                                children: f ? "..." : "Done"
                            }) : (0, o.jsx)("button", {
                                type: "button",
                                disabled: !w,
                                onClick: () => l(s + 1),
                                style: {
                                    padding: "12px 24px",
                                    borderRadius: "10px",
                                    border: "none",
                                    background: w ? "linear-gradient(135deg, #FF6B6B, #845EC2)" : i.surfaceAlt,
                                    color: "white",
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    cursor: w ? "pointer" : "not-allowed",
                                    opacity: w ? 1 : .6
                                },
                                children: "Next"
                            })
                        })]
                    })]
                })
            };

            function eu() {
                return (0, o.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "var(--obpw-tick)",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (0, o.jsx)("path", {
                        d: "M5 12.5l4.5 4.5L19 7"
                    })
                })
            }
            var ex = function(e) {
                return null;
            };

            function eh(e) {
                return `onboardingPaywallSeen_${e}`
            }

            function eg(e) {
                let {
                    theme: t,
                    currentUser: r,
                    children: i
                } = e, [a, s] = (0, n.useState)(null), [l, d] = (0, n.useState)(!1), {
                    isPremium: c
                } = (0, y.m)();
                (0, n.useEffect)(() => {
                    if (!r) {
                        s(!1);
                        return
                    }(0, R.YP)(r.uid).then(e => s(!e)).catch(() => s(!1))
                }, [r]);
                let p = !0 === a,
                    u = l && !c;
                return (0, o.jsxs)(P.S, {
                    onboardingOpen: p || u,
                    children: [i, p && r && (0, o.jsx)(ep, {
                        open: !0,
                        onComplete: () => {
                            s(!1), !c && r && ! function(e) {
                                if (!e) return !0;
                                try {
                                    return "true" === window.localStorage.getItem(eh(e))
                                } catch {
                                    return !1
                                }
                            }(r.uid) && d(!0)
                        },
                        theme: t,
                        userId: r.uid
                    }), u && r && (0, o.jsx)(ex, {
                        open: !0,
                        onDismiss: () => {
                            r && function(e) {
                                if (e) try {
                                    window.localStorage.setItem(eh(e), "true")
                                } catch {}
                            }(r.uid), d(!1)
                        }
                    })]
                })
            }
            var em = r(7417),
                ef = r(7764),
                eb = r(3601),
                ey = r(5057);
            async function ev() {
                let e = (0, em.v0)(C.l).currentUser;
                if (!e) throw Error("User not authenticated");
                return e.getIdToken()
            }
            class ej {
                constructor(e = null, t = !1) {
                    this.queue = [], this.isProcessing = !1, this.currentExport = null, this.worker = null, this.currentUser = e, this.isPremium = t, this.onQueueUpdated = null, this.onProgress = null, this.onExportComplete = null, this.initWorker()
                }
                initWorker() {
                    try {
                        this.worker && this.worker.terminate();
                        this.worker = new Worker(r.tu(new URL(r.p + r.u(862), r.b)));
                        this.worker.onmessage = this.handleWorkerMessage.bind(this);
                        this.worker.onerror = e => {
                            this.handleExportError(e, {
                                phase: "worker_crash"
                            });
                        };
                    } catch(err) {
                        console.warn("Export worker init warning:", err);
                    }
                }
                addToQueue(e) {
                    let t = {
                        id: Date.now().toString(),
                        status: "queued",
                        progress: 0,
                        data: e,
                        exportStartTime: Date.now(),
                        exportName: e.exportName,
                        ...e
                    };
                    return this.queue.push(t), this.notifyQueueUpdated(), this.isProcessing || this.processNextInQueue(), t.id
                }
                removeFromQueue(e) {
                    let t = this.queue.findIndex(t => t.id === e);
                    if (-1 !== t) {
                        let e = this.queue[t];
                        return e.result && URL.revokeObjectURL(e.result), this.queue.splice(t, 1), this.notifyQueueUpdated(), !0
                    }
                    return !1
                }
                cancelExport(e) {
                    if (this.currentExport && this.currentExport.id === e) {
                        this._stopSimulatedEncodingProgress(), this.initWorker();
                        let t = this.queue.findIndex(t => t.id === e);
                        return -1 !== t && this.queue.splice(t, 1), this.currentExport = null, this.isProcessing = !1, this.notifyQueueUpdated(), this.queue.length > 0 && this.processNextInQueue(), !0
                    }
                    return this.removeFromQueue(e)
                }
                async processNextInQueue() {
                    if (this.isProcessing) return;
                    let e = this.queue.findIndex(e => "queued" === e.status);
                    if (-1 === e) return;
                    let t = this.queue[e];
                    this.isProcessing = !0, this.currentExport = t, this.currentExport.status = "processing", this.exportStartTime = performance.now(), this.notifyQueueUpdated();
                    try {
                        t.data.uploadedVideo && !t.data.videoFrames && await this.extractVideoFramesForItem(t), this.worker || this.initWorker();
                        let e = { ...this.currentExport.data
                        };
                        e.transparentBackground && "prores4444" === e.transparentFormat && (e.exportId = e.exportId || `mockup_${Date.now()}_${Math.random().toString(36).slice(2,10)}`);
                        let r = e.transferredVideoBitmaps ? [...e.transferredVideoBitmaps] : [];
                        this.worker.postMessage({
                            type: "startExport",
                            data: e
                        }, r.length ? r : void 0)
                    } catch (e) {
                        this.handleExportError(e, {
                            phase: "frame_extraction"
                        })
                    }
                }
                async extractVideoFramesForItem(e) {
                    e.phase = "extracting_frames", e.message = "Extracting video frames...", this.notifyQueueUpdated();
                    let t = null;
                    try {
                        let r;
                        let o = t => {
                                e.message = t, this.notifyQueueUpdated()
                            },
                            n = e.data.uploadedVideo;
                        o("Preparing video for export…");
                        let i = await (0, ey.ensurePlaybackVideoUrl)(n, {
                            onProgress: e => {
                                "number" == typeof e && o(`Preparing video for export… ${Math.round(100*e)}%`)
                            },
                            getAuthToken: async () => this.currentUser ?.getIdToken ? this.currentUser.getIdToken() : null
                        });
                        n = i.url, t = i.revoke;
                        let a = parseInt(e.data.width, 10) || 0,
                            s = parseInt(e.data.height, 10) || 0,
                            l = await (0, eb.extractVideoFrames)(n, 30, e.data.duration || 5, e.data.animationDuration || 5, o, {
                                maxWidth: a,
                                maxHeight: s,
                                videoStartTime: e.data.videoStartTime || 0,
                                videoEndTime: e.data.videoEndTime ?? null
                            });
                        if (l.length > 0 && null != l[0].imageBitmap) r = l.map(e => e.imageBitmap);
                        else {
                            r = [];
                            for (let e = 0; e < l.length; e += 15) {
                                let t = l.slice(e, e + 15),
                                    o = await Promise.all(t.map(e => fetch(e.url).then(e => e.blob()))),
                                    n = await Promise.all(o.map(e => createImageBitmap(e)));
                                r.push(...n)
                            }
                            l.forEach(e => URL.revokeObjectURL(e.url))
                        }
                        e.data.videoFrames = l.map(e => {
                            let {
                                index: t,
                                time: r,
                                videoTime: o,
                                videoDuration: n
                            } = e;
                            return {
                                index: t,
                                time: r,
                                videoTime: o,
                                videoDuration: n
                            }
                        }), e.data.transferredVideoBitmaps = r, e.phase = "ready", e.message = "Ready to process...", this.notifyQueueUpdated()
                    } catch (t) {
                        let e = t ?.message ?? ("string" == typeof t ? t : "Unknown error");
                        throw console.error("[ExportQueue] video prepare/extract failed:", e), Error(`Your uploaded video couldn't be processed (${e}). Try a different video or format, then re-export.`)
                    } finally {
                        if (t) try {
                            URL.revokeObjectURL(t)
                        } catch {}
                    }
                }
                handleWorkerMessage(e) {
                    let {
                        type: t,
                        ...r
                    } = e.data;
                    switch (t) {
                        case "progress":
                            this.currentExport && (this.currentExport.phase = r.phase, null != r.encodingStart && (this.currentExport.encodingStart = r.encodingStart), this.currentExport.captureProgress = "capturing" === r.phase ? {
                                current: r.current,
                                total: r.total
                            } : void 0, this.currentExport.encodingProgress = "encoding" === r.phase ? r.progress : void 0, "precaching" === r.phase ? (this.currentExport.progress = r.progress, this.currentExport.message = r.message || `Pre-caching video frames: ${r.progress}%`) : "capturing" === r.phase ? (this.currentExport.progress = r.progress, this.currentExport.message = `Capturing Frames: ${r.current}/${r.total} (${r.progress}%)`) : "encoding" === r.phase && (this.currentExport.progress = r.progress, this.currentExport.message = `Encoding Video: ${Math.round(r.progress)}%`), this.onProgress && this.onProgress(r), this.notifyQueueUpdated());
                            break;
                        case "complete":
                            this.handleExportComplete(r);
                            break;
                        case "requestFrameUploadUrls":
                            this.handleFrameUploadUrlsRequest(r);
                            break;
                        case "framesUploaded":
                            this.handleFramesUploaded(r);
                            break;
                        case "error":
                            this.handleExportError(Error(r.error), {
                                phase: r.phase || "export_process",
                                errorStack: r.stack,
                                isTransparent: !0 === r.isTransparent
                            })
                    }
                }
                async handleFrameUploadUrlsRequest(e) {
                    let {
                        exportId: t,
                        frameCount: r
                    } = e;
                    try {
                        let e = await ev(),
                            o = await fetch("/api/studio/get-frame-upload-urls", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${e}`
                                },
                                body: JSON.stringify({
                                    exportId: t,
                                    frameCount: r
                                })
                            }),
                            n = await o.json().catch(() => ({}));
                        if (!o.ok) throw Error(n ?.error || `Failed to get frame upload URLs (${o.status})`);
                        this.worker.postMessage({
                            type: "frameUploadUrls",
                            data: {
                                uploadUrls: n.uploadUrls,
                                baseUrl: n.baseUrl
                            }
                        })
                    } catch (e) {
                        console.error("[ExportQueue] handleFrameUploadUrlsRequest failed", e), this.handleExportError(e, {
                            phase: "frame_upload_urls"
                        })
                    }
                }
                async handleFramesUploaded(e) {
                    let {
                        exportId: t,
                        frameCount: r,
                        width: o,
                        height: n,
                        fps: i
                    } = e;
                    if (this.currentExport) {
                        this.currentExport.phase = "encoding", this.currentExport.progress = 75, this.currentExport.encodingProgress = 75, this.currentExport.message = "Encoding Video: 75%", this.onProgress && this.onProgress({
                            phase: "encoding",
                            current: 75,
                            total: 100,
                            progress: 75
                        }), this.notifyQueueUpdated(), this._startSimulatedEncodingProgress();
                        try {
                            let e = await ev(),
                                a = this.currentExport.data ?.exportName,
                                s = await fetch("/api/studio/lambda-render-transparent", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${e}`
                                    },
                                    body: JSON.stringify({
                                        exportId: t,
                                        frameCount: r,
                                        width: o,
                                        height: n,
                                        fps: i,
                                        exportName: a
                                    })
                                }),
                                l = await s.json().catch(() => ({}));
                            if (!s.ok) throw Error(l ?.error || `Failed to start server render (${s.status})`);
                            let {
                                renderId: d,
                                bucketName: c
                            } = l, p = await this.pollServerRender({
                                renderId: d,
                                bucketName: c,
                                idToken: e
                            }), u = `${a||"mockup"}.mov`, x = await fetch("/api/studio/download", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${e}`
                                },
                                body: JSON.stringify({
                                    url: p.outputFile,
                                    filename: u,
                                    contentType: "video/quicktime"
                                })
                            }), h = await x.json().catch(() => ({}));
                            if (!x.ok) throw Error(h ?.error || `Failed to prepare download (${x.status})`);
                            await this.handleServerExportComplete({
                                downloadUrl: h.downloadUrl
                            })
                        } catch (e) {
                            this.handleExportError(e, {
                                phase: "server_render"
                            })
                        } finally {
                            this._stopSimulatedEncodingProgress()
                        }
                    }
                }
                _startSimulatedEncodingProgress() {
                    this._stopSimulatedEncodingProgress(), this._lastRealPct = 75, this._lastRealPctAt = Date.now(), this._lastRealPctPerMs = 0, this._simInterval = setInterval(() => {
                        if (!this.currentExport) {
                            this._stopSimulatedEncodingProgress();
                            return
                        }
                        let e = Date.now() - this._lastRealPctAt,
                            t = Math.max(Math.max(75, Math.min(99, Math.round(this._lastRealPct + this._lastRealPctPerMs * e))), this.currentExport.progress ?? 75);
                        t !== this.currentExport.progress && (this.currentExport.progress = t, this.currentExport.encodingProgress = t, this.currentExport.message = `Encoding Video: ${t}%`, this.onProgress && this.onProgress({
                            phase: "encoding",
                            current: t,
                            total: 100,
                            progress: t
                        }), this.notifyQueueUpdated())
                    }, 250)
                }
                _stopSimulatedEncodingProgress() {
                    this._simInterval && (clearInterval(this._simInterval), this._simInterval = null)
                }
                async pollServerRender(e) {
                    let {
                        renderId: t,
                        bucketName: r,
                        idToken: o
                    } = e;
                    for (;;) {
                        await new Promise(e => setTimeout(e, 2500));
                        let e = await fetch(`/api/studio/lambda-progress?renderId=${encodeURIComponent(t)}&bucketName=${encodeURIComponent(r)}`, {
                                headers: {
                                    Authorization: `Bearer ${o}`
                                }
                            }),
                            n = await e.json().catch(() => ({}));
                        if (!e.ok) throw Error(n ?.error || "Server render progress check failed");
                        if (n.fatalError) {
                            let e = (n.errors || []).join("; ");
                            throw console.error("[ExportQueue] server render failed", {
                                errors: n.errors
                            }), Error(e || "Server render failed")
                        }
                        if (n.done) {
                            if (!n.outputFile) throw Error((n.errors || []).join("; ") || "Server render finished but produced no output file");
                            return n
                        }
                        let i = n.encoding,
                            a = i && i.combinedFrames > 0 ? i.framesEncoded / i.combinedFrames : 0,
                            s = Math.round(75 + 24 * Math.max(n.progress ?? 0, a)),
                            l = Date.now(),
                            d = this._lastRealPct ?? 75,
                            c = this._lastRealPctAt ?? l,
                            p = l - c;
                        this._lastRealPctPerMs = p > 0 ? Math.max(0, (s - d) / p) : 0, this._lastRealPct = Math.max(d, s), this._lastRealPctAt = l
                    }
                }
                async handleServerExportComplete(e) {
                    let {
                        downloadUrl: t
                    } = e;
                    if (!this.currentExport) return;
                    if (this.currentExport.status = "completed", this.currentExport.progress = 100, this.currentExport.exportEndTime = Date.now(), this.currentExport.exportDuration = this.currentExport.exportEndTime - (this.currentExport.exportStartTime || this.currentExport.exportEndTime), this.currentExport.result = {
                            downloadUrl: t
                        }, this.currentExport.mimeType = "video/quicktime", this.currentExport.fileExtension = "mov", this.currentUser && !this.isPremium) try {
                        K({
                            isPremium: this.isPremium,
                            currentUser: this.currentUser,
                            sceneName: this.currentExport.data.sceneName,
                            quality: this.currentExport.data.quality,
                            transparentBackground: this.currentExport.data.transparentBackground
                        }) && await (0, ef.dp)(this.currentUser.uid, 1, `Export: ${this.currentExport.data.name||"Video"}`)
                    } catch (e) {
                        console.error("Error deducting credits:", e)
                    }
                    let r = this.currentExport;
                    this.isProcessing = !1, this.currentExport = null, this.notifyQueueUpdated(), this.onExportComplete && r && this.onExportComplete(r), this.queue.some(e => "queued" === e.status) && this.processNextInQueue()
                }
                async handleExportComplete(e) {
                    if (this.currentExport) {
                        this.currentExport.status = "completed", this.currentExport.progress = 100, this.currentExport.exportEndTime = Date.now(), this.currentExport.exportDuration = this.currentExport.exportEndTime - (this.currentExport.exportStartTime || this.currentExport.exportEndTime);
                        let t = e.imageBlob || e.videoBlob,
                            r = e.mimeType || (t ? t.type : "video/mp4");
                        if (this.currentExport.result = t, this.currentExport.mimeType = r, this.currentExport.fileExtension = "image/png" === r ? "png" : "video/quicktime" === r ? "mov" : "mp4", this.currentUser && !this.isPremium) try {
                            K({
                                isPremium: this.isPremium,
                                currentUser: this.currentUser,
                                sceneName: this.currentExport.data.sceneName,
                                quality: this.currentExport.data.quality,
                                transparentBackground: this.currentExport.data.transparentBackground
                            }) && await (0, ef.dp)(this.currentUser.uid, 1, `Export: ${this.currentExport.data.name||"Video"}`)
                        } catch (e) {
                            console.error("Error deducting credits:", e)
                        }
                        let o = this.currentExport;
                        this.isProcessing = !1, this.currentExport = null, this.notifyQueueUpdated(), this.onExportComplete && o && this.onExportComplete(o), this.queue.some(e => "queued" === e.status) && this.processNextInQueue()
                    }
                }
                handleExportError(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._stopSimulatedEncodingProgress();
                    let r = e ?.message ?? ("string" == typeof e ? e : "Unknown error"),
                        o = t.errorStack ?? (e ?.stack ? String(e.stack).slice(0, 400) : void 0),
                        n = /convertToBlob|Readback of the source image has failed/i.test(r),
                        i = /Error creating WebGL context/i.test(r),
                        a = n ? "Export failed. A combination of your setup might be causing the issue. Try switching to a different browser, or send me a message at contact.lumio@gmail.com and we can try to find the cause." : i ? "Local export requires macOS Sonoma or later when using Safari. Please update macOS, try Chrome, or use cloud export instead." : r;
                    if (this.currentExport) {
                        if (this.currentExport.status = "failed", this.currentExport.error = a, _.Z.isAnalyticsEnabled()) {
                            let e = this.currentExport.data || {};
                            _.Z.trackExportError({
                                errorMessage: r.slice(0, 500),
                                errorPhase: t.phase,
                                errorStack: o || void 0,
                                scene: e.sceneName,
                                format: e.isVerticalFormat ? "vertical" : "horizontal",
                                quality: e.quality,
                                duration: e.animationDuration,
                                hasUploadedVideo: !!e.uploadedVideo,
                                progress: this.currentExport.progress,
                                isTransparent: !0 === t.isTransparent
                            })
                        }
                        setTimeout(() => {
                            this.queue.length > 0 && this.queue[0].id === this.currentExport.id && this.queue.shift(), this.isProcessing = !1, this.currentExport = null, this.notifyQueueUpdated(), this.processNextInQueue()
                        }, 3e3)
                    }
                }
                notifyQueueUpdated() {
                    this.onQueueUpdated && this.onQueueUpdated(this.getQueueState())
                }
                getQueueState() {
                    return {
                        queue: [...this.queue],
                        isProcessing: this.isProcessing,
                        currentExport: this.currentExport
                    }
                }
                setCurrentUser(e) {
                    this.currentUser = e
                }
                setIsPremium(e) {
                    this.isPremium = e
                }
            }
            var ew = r(4467),
                ek = r(9607),
                eC = r(5319);

            function eS(e) {
                let {
                    onSceneReady: t
                } = e, {
                    scene: r,
                    camera: o
                } = (0, eC.D)();
                return (0, n.useEffect)(() => {
                    r && o && t({
                        scene: r,
                        camera: o
                    })
                }, [r, o, t]), null
            }
            var eE = function(e) {
                    let {
                        theme: t
                    } = e;
                    return (0, o.jsx)("div", {
                        style: {
                            minHeight: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "20px",
                            backgroundColor: t.background,
                            color: t.text,
                            textAlign: "center"
                        },
                        children: (0, o.jsxs)("div", {
                            style: {
                                maxWidth: "400px",
                                padding: "40px",
                                backgroundColor: t.surface,
                                borderRadius: "20px",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                                border: `1px solid ${t.border}`
                            },
                            children: [(0, o.jsx)("h1", {
                                style: {
                                    margin: "0 0 20px 0",
                                    fontSize: "24px",
                                    fontWeight: "900",
                                    color: t.text
                                },
                                children: "LUMIO MOTION TIMELINE"
                            }), (0, o.jsx)("div", {
                                style: {
                                    fontSize: "48px",
                                    margin: "20px 0"
                                },
                                children: "\uD83D\uDCF1"
                            }), (0, o.jsx)("h2", {
                                style: {
                                    margin: "0 0 16px 0",
                                    fontSize: "20px",
                                    color: t.text
                                },
                                children: "Mobile View Not Supported"
                            }), (0, o.jsx)("p", {
                                style: {
                                    margin: "0 0 24px 0",
                                    fontSize: "16px",
                                    color: t.textSecondary,
                                    lineHeight: "1.5"
                                },
                                children: "This application is designed for desktop use. Please visit this website on a computer to access all features."
                            }), (0, o.jsx)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px"
                                },
                                children: (0, o.jsx)("button", {
                                    onClick: () => window.location.reload(),
                                    style: {
                                        padding: "12px 24px",
                                        borderRadius: "8px",
                                        border: `1px solid ${t.border}`,
                                        backgroundColor: t.surfaceAlt,
                                        color: t.text,
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        transition: "all 0.2s ease"
                                    },
                                    children: "Try Again"
                                })
                            })]
                        })
                    })
                },
                e_ = r(1519),
                eM = function(e) {
                    let {
                        isOpen: t,
                        onClose: r,
                        currentScene: i,
                        onSelect: a,
                        onHover: s,
                        theme: l,
                        isVerticalFormat: d,
                        onFormatChange: c,
                        hoveredScene: p,
                        horizontalScenes: u,
                        verticalScenes: x,
                        computerScenes: h = [],
                        verticalComputerScenes: g = [],
                        isComputerMode: m = !1,
                        user: f = null,
                        isPremium: b = !1,
                        isDebug: y = !1
                    } = e, [v, j] = (0, n.useState)(d);
                    if (!t) return null;
                    let w = m ? v ? g : h : v ? x : u,
                        k = (0, S.Kf)(w),
                        C = y ? m ? v ? `Computer vertical (${(0,S.Kf)(g).length})` : `Computer (${(0,S.Kf)(h).length})` : v ? `Mobile vertical (${(0,S.Kf)(x).length})` : `Mobile horizontal (${(0,S.Kf)(u).length})` : null,
                        E = (0, S.Au)(i),
                        _ = e => {
                            j(e)
                        },
                        M = e => {
                            a(e), c(v), r()
                        },
                        I = "rgba(255, 255, 255, 0.08)";
                    return (0, o.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.55)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 9999,
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)"
                        },
                        onClick: r,
                        children: (0, o.jsxs)("div", {
                            style: {
                                backgroundColor: "rgba(28, 28, 32, 0.98)",
                                backdropFilter: "blur(40px) saturate(180%)",
                                WebkitBackdropFilter: "blur(40px) saturate(180%)",
                                borderRadius: 24,
                                width: "min(90vw, 1400px)",
                                maxHeight: "85vh",
                                overflow: "visible",
                                position: "relative",
                                boxShadow: "0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.06) inset",
                                border: `1px solid ${I}`,
                                display: "flex",
                                flexDirection: "column"
                            },
                            onClick: e => e.stopPropagation(),
                            children: [(0, o.jsx)("button", {
                                onClick: r,
                                style: {
                                    position: "absolute",
                                    top: "14px",
                                    right: "14px",
                                    background: "rgba(255, 255, 255, 0.08)",
                                    border: `1px solid ${I}`,
                                    color: l.text,
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    padding: 0,
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "background 0.2s, border-color 0.2s",
                                    zIndex: 2
                                },
                                onMouseEnter: e => {
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)", e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)"
                                },
                                onMouseLeave: e => {
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)", e.currentTarget.style.borderColor = I
                                },
                                children: "\xd7"
                            }), (0, o.jsxs)("div", {
                                style: {
                                    position: "sticky",
                                    top: 0,
                                    background: "rgba(32, 32, 36, 0.98)",
                                    padding: "16px 20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "14px",
                                    zIndex: 1,
                                    borderBottom: `1px solid ${I}`,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24
                                },
                                children: [(0, o.jsx)("div", {
                                    style: {
                                        color: l.textSecondary,
                                        margin: 0,
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        letterSpacing: "0.04em",
                                        textTransform: "uppercase",
                                        opacity: .95
                                    },
                                    children: "Cinematic Camera Trajectories"
                                }), C && (0, o.jsx)("div", {
                                    style: {
                                        fontSize: "11px",
                                        fontWeight: 600,
                                        color: l.textSecondary,
                                        opacity: .8
                                    },
                                    children: C
                                }), (0, o.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center"
                                    },
                                    children: (0, o.jsxs)("div", {
                                        style: {
                                            background: "rgba(255, 255, 255, 0.06)",
                                            borderRadius: "10px",
                                            padding: "3px",
                                            display: "flex",
                                            gap: 0,
                                            border: `1px solid ${I}`,
                                            width: "280px"
                                        },
                                        children: [(0, o.jsx)("button", {
                                            onClick: () => _(!1),
                                            style: {
                                                flex: 1,
                                                padding: "10px 14px",
                                                backgroundColor: v ? "transparent" : "rgba(255, 255, 255, 0.12)",
                                                border: "none",
                                                borderRadius: "8px",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: v ? l.textSecondary : l.text,
                                                transition: "all 0.2s ease",
                                                fontWeight: 500,
                                                fontSize: "13px"
                                            },
                                            children: "Horizontal"
                                        }), (0, o.jsx)("button", {
                                            onClick: () => _(!0),
                                            style: {
                                                flex: 1,
                                                padding: "10px 14px",
                                                backgroundColor: v ? "rgba(255, 255, 255, 0.12)" : "transparent",
                                                border: "none",
                                                borderRadius: "8px",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: v ? l.text : l.textSecondary,
                                                transition: "all 0.2s ease",
                                                fontWeight: 500,
                                                fontSize: "13px"
                                            },
                                            children: "Vertical"
                                        })]
                                    })
                                })]
                            }), (0, o.jsx)("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: v ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
                                    gap: "28px",
                                    padding: "32px 32px 80px 32px",
                                    width: "100%",
                                    maxWidth: "1200px",
                                    margin: "0 auto",
                                    overflowY: "auto",
                                    flex: 1,
                                    boxSizing: "border-box",
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                    background: "rgba(0, 0, 0, 0.15)"
                                },
                                className: "hide-scrollbar",
                                children: k.map(e => (0, o.jsx)("div", {
                                    style: {
                                        width: "100%",
                                        aspectRatio: v ? "3/4" : "5/3",
                                        background: "none",
                                        display: "flex",
                                        alignItems: "stretch",
                                        justifyContent: "stretch"
                                    },
                                    children: (0, o.jsx)(H.Z, {
                                        scene: e,
                                        isSelected: E === e || i === e,
                                        onSelect: M,
                                        onHover: s,
                                        theme: l,
                                        isVerticalFormat: v,
                                        hoveredScene: p,
                                        forceAspectRatio: !0,
                                        user: f,
                                        currentScene: i,
                                        isPremium: b
                                    })
                                }, e))
                            })]
                        })
                    })
                },
                eI = r(7448),
                eD = r(2867),
                eA = r(1534),
                eR = r(6040),
                eP = function(e) {
                    let {
                        selectedColor: t,
                        lightColor: r,
                        onColorChange: i,
                        onLightColorChange: a,
                        onColorPickerOpen: s,
                        onLightColorPickerOpen: l,
                        lightIntensity: d = 100,
                        onLightIntensityChange: c,
                        backgroundVisible: p = !0,
                        onBackgroundVisibilityChange: u,
                        theme: x,
                        embedded: h = !1,
                        gated: g = !1
                    } = e, [m, f] = (0, n.useState)(null), b = "rgba(255, 255, 255, 0.08)", y = {
                        color: x.textSecondary,
                        fontSize: 10,
                        fontWeight: 600,
                        lineHeight: 1,
                        opacity: .95,
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em"
                    }, v = h ? {
                        padding: "12px 14px",
                        borderRadius: 10,
                        border: `1px solid ${b}`,
                        background: "rgba(255, 255, 255, 0.04)"
                    } : {}, j = (0, o.jsxs)("div", {
                        style: {
                            padding: h ? 0 : "12px 16px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "stretch",
                            gap: h ? 12 : 0,
                            width: "100%"
                        },
                        children: [(0, o.jsxs)("div", {
                            style: { ...v,
                                ...h ? {} : {
                                    padding: "12px 0 16px",
                                    borderBottom: `1px solid ${x.surfaceAlt}`
                                }
                            },
                            children: [(0, o.jsx)("div", {
                                style: y,
                                children: "Background"
                            }), (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10
                                },
                                children: [(0, o.jsx)("button", {
                                    onClick: () => h ? f("background") : s("background"),
                                    style: {
                                        width: 40,
                                        height: 40,
                                        borderRadius: 10,
                                        border: `1px solid ${h?b:x.border}`,
                                        backgroundColor: t,
                                        cursor: "pointer",
                                        outline: "none",
                                        transition: "border-color 0.2s, opacity 0.2s",
                                        position: "relative",
                                        overflow: "hidden",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0
                                    },
                                    onMouseEnter: e => {
                                        e.currentTarget.style.borderColor = x.textSecondary, e.currentTarget.style.opacity = 1
                                    },
                                    onMouseLeave: e => {
                                        e.currentTarget.style.borderColor = h ? b : x.border, e.currentTarget.style.opacity = .9
                                    },
                                    children: !h && !p && (0, o.jsxs)("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        style: {
                                            position: "absolute",
                                            pointerEvents: "none",
                                            zIndex: 1
                                        },
                                        children: [(0, o.jsx)("line", {
                                            x1: "4",
                                            y1: "4",
                                            x2: "20",
                                            y2: "20",
                                            stroke: "#cc6666",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        }), (0, o.jsx)("line", {
                                            x1: "20",
                                            y1: "4",
                                            x2: "4",
                                            y2: "20",
                                            stroke: "#cc6666",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        })]
                                    })
                                }), (0, o.jsx)("span", {
                                    style: {
                                        color: x.textSecondary,
                                        fontSize: 12,
                                        opacity: .8
                                    },
                                    children: "Scene background color"
                                })]
                            })]
                        }), (0, o.jsxs)("div", {
                            style: { ...v,
                                ...h ? {} : {
                                    padding: "12px 0 16px",
                                    borderBottom: `1px solid ${x.surfaceAlt}`
                                }
                            },
                            children: [(0, o.jsx)("div", {
                                style: y,
                                children: "Light"
                            }), (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10
                                },
                                children: [(0, o.jsx)("button", {
                                    onClick: () => h ? f("light") : l("light"),
                                    style: {
                                        width: 40,
                                        height: 40,
                                        borderRadius: 10,
                                        border: `1px solid ${h?b:x.border}`,
                                        backgroundColor: r,
                                        cursor: "pointer",
                                        outline: "none",
                                        transition: "border-color 0.2s, opacity 0.2s",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        opacity: .9,
                                        flexShrink: 0
                                    },
                                    onMouseEnter: e => {
                                        e.currentTarget.style.borderColor = x.textSecondary, e.currentTarget.style.opacity = 1
                                    },
                                    onMouseLeave: e => {
                                        e.currentTarget.style.borderColor = h ? b : x.border, e.currentTarget.style.opacity = .9
                                    }
                                }), (0, o.jsx)("span", {
                                    style: {
                                        color: x.textSecondary,
                                        fontSize: 12,
                                        opacity: .8
                                    },
                                    children: "Light color"
                                })]
                            })]
                        }), (0, o.jsxs)("div", {
                            style: { ...v,
                                ...h ? {} : {
                                    padding: "12px 0 16px",
                                    borderBottom: h && u ? `1px solid ${x.surfaceAlt}` : "none"
                                }
                            },
                            children: [(0, o.jsx)("div", {
                                style: y,
                                children: "Light intensity"
                            }), (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12
                                },
                                children: [(0, o.jsx)("input", {
                                    type: "range",
                                    min: "0",
                                    max: "100",
                                    value: d,
                                    onChange: e => c(parseInt(e.target.value)),
                                    style: {
                                        flex: 1,
                                        minWidth: 0,
                                        height: 6,
                                        background: `linear-gradient(to right, ${x.text} 0%, ${x.text} ${d}%, ${h?"rgba(255,255,255,0.2)":x.border} ${d}%, ${h?"rgba(255,255,255,0.2)":x.border} 100%)`,
                                        borderRadius: 3,
                                        outline: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        WebkitAppearance: "none",
                                        appearance: "none"
                                    }
                                }), (0, o.jsxs)("span", {
                                    style: {
                                        color: x.textSecondary,
                                        fontSize: 12,
                                        fontWeight: 500,
                                        minWidth: 36,
                                        opacity: .9
                                    },
                                    children: [d, "%"]
                                })]
                            })]
                        }), h && u && (0, o.jsx)("div", {
                            style: { ...v
                            },
                            children: (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: 12
                                },
                                children: [(0, o.jsx)("span", {
                                    style: { ...y,
                                        marginBottom: 0
                                    },
                                    children: "Transparent background"
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        flexShrink: 0
                                    },
                                    children: [g && (0, o.jsxs)("span", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 4,
                                            fontSize: 9,
                                            fontWeight: 700,
                                            color: "#ddd",
                                            background: "rgba(255,255,255,0.1)",
                                            padding: "3px 7px",
                                            borderRadius: 999,
                                            letterSpacing: "0.06em",
                                            lineHeight: 1,
                                            whiteSpace: "nowrap"
                                        },
                                        children: [(0, o.jsx)("span", {
                                            style: {
                                                fontSize: 10
                                            },
                                            children: "\uD83D\uDC8E"
                                        }), " PRO"]
                                    }), (0, o.jsx)("button", {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": !p,
                                        onClick: () => u(!p),
                                        style: {
                                            width: 40,
                                            height: 22,
                                            borderRadius: 11,
                                            border: `1px solid ${p?"rgba(255,255,255,0.2)":b}`,
                                            background: p ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.12)",
                                            cursor: "pointer",
                                            padding: 0,
                                            position: "relative",
                                            transition: "background 0.2s, border-color 0.2s",
                                            flexShrink: 0
                                        },
                                        children: (0, o.jsx)("span", {
                                            style: {
                                                position: "absolute",
                                                top: 2,
                                                left: p ? 2 : 20,
                                                width: 16,
                                                height: 16,
                                                borderRadius: "50%",
                                                background: x.text,
                                                opacity: .9,
                                                transition: "left 0.2s"
                                            }
                                        })
                                    })]
                                })]
                            })
                        })]
                    });
                    return h && m ? (0, o.jsx)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            minHeight: 0,
                            overflow: "hidden"
                        },
                        children: (0, o.jsx)(U.Z, {
                            theme: x,
                            embed: !0,
                            onBack: () => f(null),
                            type: m,
                            selectedColor: "background" === m ? t : r,
                            onColorChange: "background" === m ? i : a,
                            onClose: () => f(null)
                        })
                    }) : h ? j : (0, o.jsx)("div", {
                        style: {
                            backgroundColor: x.surface,
                            borderRadius: "12px",
                            border: `1px solid ${x.surfaceAlt}`,
                            overflow: "hidden",
                            width: "fit-content",
                            minWidth: "320px"
                        },
                        children: j
                    })
                },
                eT = function(e) {
                    let {
                        animationDuration: t,
                        uploadedVideo: r,
                        videoDuration: i,
                        theme: a
                    } = e, [s, l] = (0, n.useState)(!1), d = (0, q.v3)(t, i, !!r);
                    if (d.effectiveDuration <= 0) return null;
                    let c = e => e <= 2 ? {
                        backgroundColor: "rgba(255, 193, 7, 0.8)",
                        border: "1px solid rgba(255, 193, 7, 0.3)"
                    } : e <= 5 ? {
                        backgroundColor: "rgba(255, 152, 0, 0.8)",
                        border: "1px solid rgba(255, 152, 0, 0.3)"
                    } : {
                        backgroundColor: "rgba(220, 53, 69, 0.8)",
                        border: "1px solid rgba(220, 53, 69, 0.3)"
                    };
                    return (0, o.jsxs)("div", {
                        style: (() => {
                            let e = {
                                position: "absolute",
                                top: "12px",
                                left: "12px",
                                color: "white",
                                padding: "6px 10px",
                                borderRadius: "6px",
                                fontSize: "14px",
                                fontFamily: "monospace",
                                fontWeight: "500",
                                zIndex: 1e3,
                                pointerEvents: "auto",
                                backdropFilter: "blur(4px)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                cursor: "help",
                                transition: "all 0.2s ease"
                            };
                            switch (d.type) {
                                case "video-shorter":
                                case "video-longer":
                                    return { ...e,
                                        ...c(d.difference)
                                    };
                                default:
                                    return { ...e,
                                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        cursor: "help"
                                    }
                            }
                        })(),
                        onMouseEnter: () => l(!0),
                        onMouseLeave: () => l(!1),
                        children: ["video-longer" === d.type ? (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            },
                            children: [(0, o.jsx)("span", {
                                style: {
                                    textDecoration: "line-through",
                                    opacity: .6
                                },
                                children: (0, q.LU)(d.actualAnimationDuration)
                            }), (0, o.jsx)("span", {
                                children: (0, q.LU)(d.effectiveDuration)
                            })]
                        }) : "video-shorter" === d.type ? (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            },
                            children: [(0, o.jsx)("span", {
                                children: (0, q.LU)(d.videoDuration)
                            }), (0, o.jsx)("span", {
                                style: {
                                    opacity: .7,
                                    fontSize: "12px"
                                },
                                children: "/"
                            }), (0, o.jsx)("span", {
                                style: {
                                    opacity: .7
                                },
                                children: (0, q.LU)(d.actualAnimationDuration)
                            }), (0, o.jsx)("div", {
                                style: {
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    border: "1px solid rgba(0, 0, 0, 0.3)"
                                }
                            })]
                        }) : (0, o.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            },
                            children: (0, o.jsx)("span", {
                                children: (0, q.LU)(d.effectiveDuration)
                            })
                        }), s && (0, o.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: "100%",
                                left: "0",
                                marginTop: "8px",
                                backgroundColor: "rgba(0, 0, 0, 0.95)",
                                color: "white",
                                padding: "12px 16px",
                                borderRadius: "8px",
                                fontSize: "12px",
                                fontFamily: "system-ui, -apple-system, sans-serif",
                                fontWeight: "400",
                                minWidth: "320px",
                                maxWidth: "400px",
                                zIndex: 9999,
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
                                lineHeight: "1.4",
                                textAlign: "left"
                            },
                            children: (() => {
                                switch (d.type) {
                                    case "video-shorter":
                                        return "Video shorter than animation. Last frame will freeze until animation ends. Try matching durations for best results.";
                                    case "video-longer":
                                        return "Video longer than animation. Animation will freeze until video ends. Try matching durations for best results.";
                                    case "same-duration":
                                        return "Perfect! Video and animation durations match.";
                                    default:
                                        return `Animation duration: ${(0,q.LU)(d.effectiveDuration)}`
                                }
                            })()
                        })]
                    })
                };
            let ez = {
                device: "device",
                upload: "upload",
                scene: "scene",
                animations: "animations"
            };
            var eN = function(e) {
                let {
                    theme: t,
                    canvasRect: r = null,
                    isComputerMode: i,
                    onDeviceChange: a,
                    onImageUpload: s,
                    onVideoUpload: l,
                    previewImage: d,
                    uploadedVideo: c,
                    onCropDataChange: p,
                    onOpenCropTool: u,
                    forceUpdateImage: x,
                    selectedPhoneModel: h,
                    selectedComputerModel: g,
                    availableScenes: m,
                    currentScene: f,
                    computerScenes: b,
                    verticalComputerScenes: y = [],
                    isPremium: v = !1,
                    currentUser: j = null,
                    onPhoneModelChange: w,
                    phoneMaterial: k,
                    onPhoneMaterialChange: C,
                    showNotch: S,
                    onShowNotchChange: E,
                    onComputerModelChange: _,
                    computerMaterial: M,
                    onComputerMaterialChange: I,
                    selectedColor: D,
                    lightColor: A,
                    onColorChange: R,
                    onLightColorChange: P,
                    onColorPickerOpen: T,
                    onLightColorPickerOpen: z,
                    lightIntensity: N,
                    onLightIntensityChange: $,
                    backgroundVisible: L,
                    onBackgroundVisibilityChange: W,
                    forceClosePanel: F = !1,
                    deviceColorPickerOpen: B = !1,
                    onDeviceColorPickerOpenChange: U,
                    animationDuration: H = 0,
                    videoDuration: O = 0
                } = e, [q, Z] = (0, n.useState)(null), [Q, K] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    F && Z(null)
                }, [F]);
                let J = (0, n.useRef)(null),
                    G = (0, n.useRef)(null),
                    X = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    if (null === q) return;
                    let e = e => {
                        X.current && !X.current.contains(e.target) && (B && U && U(!1), ee(null))
                    };
                    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
                }, [q, B, U]);
                let ee = e => {
                        (0, n.startTransition)(() => {
                            Z(e)
                        })
                    },
                    et = !i && m.includes(f),
                    er = i && (b.includes(f) || y.includes(f)),
                    eo = "rgba(22, 22, 24, 0.38)",
                    en = "rgba(255, 255, 255, 0.08)",
                    ei = "rgba(255, 255, 255, 0.1)",
                    ea = {
                        fontSize: "11px",
                        fontWeight: 600,
                        lineHeight: 1,
                        color: t.text,
                        opacity: .9,
                        letterSpacing: "-0.01em",
                        whiteSpace: "nowrap",
                        margin: 0,
                        padding: 0,
                        display: "block",
                        marginTop: 1
                    },
                    es = q === ez.device ? {
                        left: -216,
                        transform: "none"
                    } : q === ez.scene ? {
                        left: 160,
                        transform: "none"
                    } : {
                        left: "50%",
                        transform: "translateX(-50%)"
                    },
                    el = q && (0, o.jsx)("div", {
                        style: {
                            position: "absolute",
                            bottom: "100%",
                            marginBottom: 8,
                            width: 280,
                            height: "auto",
                            maxHeight: "calc(100vh - 120px)",
                            zIndex: 10,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            background: eo,
                            backdropFilter: "blur(80px) saturate(200%)",
                            WebkitBackdropFilter: "blur(80px) saturate(200%)",
                            border: `1px solid ${en}`,
                            borderRadius: 20,
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255,255,255,0.03) inset",
                            transition: "opacity 0.2s ease, transform 0.2s ease",
                            ...es
                        },
                        children: (0, o.jsxs)("div", {
                            style: {
                                flex: 1,
                                minHeight: 0,
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                                background: "transparent"
                            },
                            children: [q === ez.device && (0, o.jsxs)(o.Fragment, {
                                children: [!B && (0, o.jsx)("div", {
                                    style: {
                                        padding: "12px 16px",
                                        borderBottom: `1px solid ${en}`,
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        color: t.textSecondary,
                                        opacity: .95
                                    },
                                    children: i ? "Computer" : "Phone"
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        padding: B ? "0" : "0 16px 16px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
                                        flex: 1,
                                        minHeight: 0
                                    },
                                    children: [et && (0, o.jsx)(eA.Z, {
                                        selectedModel: h,
                                        onModelChange: w,
                                        onMaterialChange: C,
                                        showNotch: S,
                                        onShowNotchChange: E,
                                        theme: t,
                                        embedded: !0,
                                        onColorPickerOpenChange: U
                                    }), er && (0, o.jsx)(eR.Z, {
                                        selectedModel: g,
                                        onModelChange: _,
                                        onMaterialChange: I,
                                        theme: t,
                                        embedded: !0,
                                        onColorPickerOpenChange: U
                                    }), !et && !er && (0, o.jsx)("div", {
                                        style: {
                                            fontSize: "12px",
                                            color: t.textSecondary,
                                            opacity: .9,
                                            padding: "0 16px 16px"
                                        },
                                        children: "Select an animation to edit device model and color."
                                    })]
                                })]
                            }), q === ez.upload && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsxs)("div", {
                                    style: {
                                        padding: "12px 16px",
                                        borderBottom: `1px solid ${en}`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: 8
                                    },
                                    children: [(0, o.jsx)("span", {
                                        style: {
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            color: t.textSecondary,
                                            opacity: .95
                                        },
                                        children: "Upload Media"
                                    }), (0, o.jsxs)("div", {
                                        style: {
                                            position: "relative",
                                            display: "inline-block"
                                        },
                                        onMouseEnter: () => K(!0),
                                        onMouseLeave: () => K(!1),
                                        children: [(0, o.jsx)("div", {
                                            style: {
                                                width: 16,
                                                height: 16,
                                                borderRadius: "50%",
                                                backgroundColor: t.surfaceAlt,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "help",
                                                fontSize: 10,
                                                fontWeight: 600,
                                                color: t.textSecondary
                                            },
                                            children: "?"
                                        }), Q && (0, o.jsxs)("div", {
                                            style: {
                                                position: "absolute",
                                                top: 20,
                                                right: 0,
                                                backgroundColor: t.surface,
                                                border: `1px solid ${t.border}`,
                                                borderRadius: 6,
                                                padding: "8px 12px",
                                                fontSize: 12,
                                                color: t.text,
                                                whiteSpace: "nowrap",
                                                zIndex: 10,
                                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
                                            },
                                            children: [i ? (0, o.jsxs)(o.Fragment, {
                                                children: ["Format: ", "MacbookPro1080" === g ? "2560\xd71440 (16:9)" : "3024\xd71964 (16:10)", " (Computer)", (0, o.jsx)("br", {})]
                                            }) : (0, o.jsxs)(o.Fragment, {
                                                children: ["Format: 9:19.5 (e.g., 1206\xd72622px)", (0, o.jsx)("br", {})]
                                            }), "Supports: Images & Videos", (0, o.jsx)("br", {}), "Recommended: MP4 for videos"]
                                        })]
                                    })]
                                }), (0, o.jsx)("div", {
                                    style: {
                                        overflow: "auto"
                                    },
                                    children: (0, o.jsx)(V, {
                                        onImageUpload: s,
                                        onVideoUpload: l,
                                        theme: t,
                                        uploadedImage: d,
                                        uploadedVideo: c,
                                        onCropDataChange: p,
                                        onOpenCropTool: u,
                                        forceUpdateImage: x,
                                        selectedPhoneModel: h,
                                        isComputerMode: i,
                                        selectedComputerModel: g,
                                        embedded: !0
                                    })
                                })]
                            }), q === ez.scene && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("div", {
                                    style: {
                                        padding: "12px 16px",
                                        borderBottom: `1px solid ${en}`,
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        color: t.textSecondary,
                                        opacity: .95
                                    },
                                    children: "Scene"
                                }), (0, o.jsx)("div", {
                                    style: {
                                        padding: "16px"
                                    },
                                    children: (0, o.jsx)(eP, {
                                        selectedColor: D,
                                        lightColor: A,
                                        onColorChange: R,
                                        onLightColorChange: P,
                                        onColorPickerOpen: T,
                                        onLightColorPickerOpen: z,
                                        lightIntensity: N,
                                        onLightIntensityChange: $,
                                        backgroundVisible: L,
                                        onBackgroundVisibilityChange: W,
                                        theme: t,
                                        gated: Y({
                                            isPremium: v,
                                            currentUser: j,
                                            sceneName: f
                                        }),
                                        embedded: !0
                                    })
                                })]
                            }), q === ez.settings && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("div", {
                                    style: {
                                        padding: "12px 16px",
                                        borderBottom: `1px solid ${en}`,
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        color: t.textSecondary,
                                        opacity: .95
                                    },
                                    children: "Chassis & PBR Lab"
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        flex: 1,
                                        overflowY: "auto",
                                        padding: "12px"
                                    },
                                    children: [et && (0, o.jsx)(eA.Z, {
                                        selectedModel: h,
                                        onModelChange: w,
                                        onMaterialChange: C,
                                        showNotch: S,
                                        onShowNotchChange: E,
                                        theme: t,
                                        onColorPickerOpenChange: U
                                    }), er && (0, o.jsx)(eR.Z, {
                                        selectedModel: g,
                                        onModelChange: _,
                                        onMaterialChange: I,
                                        theme: t,
                                        onColorPickerOpenChange: U
                                    }), !et && !er && (0, o.jsx)("div", {
                                        style: {
                                            fontSize: "12px",
                                            color: t.textSecondary
                                        },
                                        children: "Select an animation to edit device settings."
                                    })]
                                }), (0, o.jsx)("div", {
                                    style: {
                                        padding: "12px",
                                        borderTop: `1px solid ${t.surfaceAlt}`
                                    },
                                    children: (0, o.jsx)(eT, {
                                        animationDuration: H,
                                        uploadedVideo: c,
                                        videoDuration: O,
                                        theme: t
                                    })
                                })]
                            })]
                        })
                    });
                return (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)("div", {
                        ref: X,
                        style: {
                            position: "relative",
                            display: "inline-flex",
                            flexDirection: "column",
                            alignItems: "center",
                            zIndex: null !== q ? 10 : void 0
                        },
                        children: [el, (0, o.jsx)("div", {
                            ref: J,
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 18,
                                paddingTop: 12,
                                paddingBottom: 12,
                                paddingLeft: 16,
                                paddingRight: 16,
                                background: eo,
                                backdropFilter: "blur(80px) saturate(200%)",
                                WebkitBackdropFilter: "blur(80px) saturate(200%)",
                                border: `1px solid ${en}`,
                                borderRadius: 14,
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255,255,255,0.03) inset"
                            },
                            children: (0, o.jsxs)("div", {
                                ref: G,
                                style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 18,
                                    margin: 0,
                                    padding: 0
                                },
                                children: [(0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: 0,
                                        padding: 0
                                    },
                                    children: [(0, o.jsx)("button", {
                                        onClick: () => ee(q === ez.device ? null : ez.device),
                                        title: "Device",
                                        style: {
                                            width: "40px",
                                            height: "40px",
                                            flexShrink: 0,
                                            margin: 0,
                                            padding: 0,
                                            borderRadius: "10px",
                                            border: "none",
                                            background: q === ez.device ? ei : "transparent",
                                            color: q === ez.device && t.primary || t.text,
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "background 0.2s, color 0.2s",
                                            opacity: q === ez.device ? 1 : .85,
                                            boxShadow: q === ez.device ? "0 0 0 1px " + en : "none"
                                        },
                                        children: (0, o.jsxs)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, o.jsx)("rect", {
                                                x: "5",
                                                y: "2",
                                                width: "14",
                                                height: "20",
                                                rx: "2",
                                                ry: "2"
                                            }), (0, o.jsx)("line", {
                                                x1: "12",
                                                y1: "18",
                                                x2: "12.01",
                                                y2: "18"
                                            })]
                                        })
                                    }), (0, o.jsx)("span", {
                                        style: ea,
                                        children: "Device"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: 0,
                                        padding: 0
                                    },
                                    children: [(0, o.jsx)("button", {
                                        onClick: () => ee(q === ez.upload ? null : ez.upload),
                                        title: "Upload Media",
                                        style: {
                                            width: "40px",
                                            height: "40px",
                                            flexShrink: 0,
                                            margin: 0,
                                            padding: 0,
                                            borderRadius: "10px",
                                            border: "none",
                                            background: q === ez.upload ? ei : "transparent",
                                            color: q === ez.upload && t.primary || t.text,
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "background 0.2s, color 0.2s",
                                            opacity: q === ez.upload ? 1 : .85,
                                            boxShadow: q === ez.upload ? "0 0 0 1px " + en : "none"
                                        },
                                        children: (0, o.jsxs)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, o.jsx)("rect", {
                                                x: "3",
                                                y: "3",
                                                width: "18",
                                                height: "18",
                                                rx: "2",
                                                ry: "2"
                                            }), (0, o.jsx)("circle", {
                                                cx: "8.5",
                                                cy: "8.5",
                                                r: "1.5"
                                            }), (0, o.jsx)("polyline", {
                                                points: "21 15 16 10 5 21"
                                            })]
                                        })
                                    }), (0, o.jsx)("span", {
                                        style: ea,
                                        children: "Upload"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: 0,
                                        padding: 0
                                    },
                                    children: [(0, o.jsx)("button", {
                                        onClick: () => ee(q === ez.scene ? null : ez.scene),
                                        title: "Background & Light",
                                        style: {
                                            width: "40px",
                                            height: "40px",
                                            flexShrink: 0,
                                            margin: 0,
                                            padding: 0,
                                            borderRadius: "10px",
                                            border: "none",
                                            background: q === ez.scene ? ei : "transparent",
                                            color: q === ez.scene && t.primary || t.text,
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "background 0.2s, color 0.2s",
                                            opacity: q === ez.scene ? 1 : .85,
                                            boxShadow: q === ez.scene ? "0 0 0 1px " + en : "none"
                                        },
                                        children: (0, o.jsxs)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, o.jsx)("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "5"
                                            }), (0, o.jsx)("line", {
                                                x1: "12",
                                                y1: "1",
                                                x2: "12",
                                                y2: "3"
                                            }), (0, o.jsx)("line", {
                                                x1: "12",
                                                y1: "21",
                                                x2: "12",
                                                y2: "23"
                                            }), (0, o.jsx)("line", {
                                                x1: "4.22",
                                                y1: "4.22",
                                                x2: "5.64",
                                                y2: "5.64"
                                            }), (0, o.jsx)("line", {
                                                x1: "18.36",
                                                y1: "18.36",
                                                x2: "19.78",
                                                y2: "19.78"
                                            }), (0, o.jsx)("line", {
                                                x1: "1",
                                                y1: "12",
                                                x2: "3",
                                                y2: "12"
                                            }), (0, o.jsx)("line", {
                                                x1: "21",
                                                y1: "12",
                                                x2: "23",
                                                y2: "12"
                                            }), (0, o.jsx)("line", {
                                                x1: "4.22",
                                                y1: "19.78",
                                                x2: "5.64",
                                                y2: "18.36"
                                            }), (0, o.jsx)("line", {
                                                x1: "18.36",
                                                y1: "5.64",
                                                x2: "19.78",
                                                y2: "4.22"
                                            })]
                                        })
                                    }), (0, o.jsx)("span", {
                                        style: ea,
                                        children: "Scene"
                                    })]
                                })]
                            })
                        })]
                    })
                })
            };
            let e$ = [{
                vertical: !1,
                label: "Horizontal",
                ratio: "16:9"
            }, {
                vertical: !0,
                label: "Vertical",
                ratio: "9:16"
            }];

            function eL(e) {
                let {
                    vertical: t,
                    active: r,
                    theme: n
                } = e;
                return (0, o.jsx)("span", {
                    "aria-hidden": !0,
                    style: { ...t ? {
                            width: 9,
                            height: 14
                        } : {
                            width: 16,
                            height: 10
                        },
                        borderRadius: 2,
                        border: `1.5px solid ${r?n.text:"rgba(255,255,255,0.35)"}`,
                        display: "inline-block",
                        flexShrink: 0,
                        boxSizing: "border-box"
                    }
                })
            }

            function eW(e) {
                let {
                    isVerticalFormat: t,
                    onFormatChange: r,
                    theme: i
                } = e, [a, s] = (0, n.useState)(!1), l = (0, n.useRef)(null), d = e$.find(e => e.vertical === t) || e$[0];
                return (0, n.useEffect)(() => {
                    if (!a) return;
                    let e = e => {
                            l.current && !l.current.contains(e.target) && s(!1)
                        },
                        t = e => {
                            "Escape" === e.key && s(!1)
                        };
                    return document.addEventListener("pointerdown", e), document.addEventListener("keydown", t), () => {
                        document.removeEventListener("pointerdown", e), document.removeEventListener("keydown", t)
                    }
                }, [a]), (0, o.jsxs)("div", {
                    ref: l,
                    style: {
                        position: "relative",
                        marginBottom: 14
                    },
                    children: [(0, o.jsx)("div", {
                        style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: i.textSecondary,
                            marginBottom: 6
                        },
                        children: "Format"
                    }), (0, o.jsxs)("button", {
                        type: "button",
                        "aria-haspopup": "listbox",
                        "aria-expanded": a,
                        onClick: () => s(e => !e),
                        style: {
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "10px 12px",
                            borderRadius: 10,
                            border: `1px solid ${a?"rgba(255,255,255,0.16)":x.fF}`,
                            background: a ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
                            color: i.text,
                            cursor: "pointer",
                            fontSize: 13,
                            fontWeight: 550,
                            letterSpacing: "-0.01em",
                            boxSizing: "border-box",
                            transition: "background 0.15s, border-color 0.15s"
                        },
                        children: [(0, o.jsx)(eL, {
                            vertical: d.vertical,
                            active: !0,
                            theme: i
                        }), (0, o.jsx)("span", {
                            children: d.label
                        }), (0, o.jsx)("span", {
                            style: {
                                marginLeft: "auto",
                                color: i.textSecondary,
                                fontSize: 12,
                                fontWeight: 500
                            },
                            children: d.ratio
                        }), (0, o.jsx)("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: i.textSecondary,
                            strokeWidth: "2.2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            style: {
                                transform: a ? "rotate(180deg)" : "none",
                                transition: "transform 0.15s",
                                flexShrink: 0
                            },
                            children: (0, o.jsx)("path", {
                                d: "M6 9l6 6 6-6"
                            })
                        })]
                    }), a && (0, o.jsx)("div", {
                        role: "listbox",
                        "aria-label": "Video format",
                        style: {
                            position: "absolute",
                            top: "calc(100% + 6px)",
                            left: 0,
                            right: 0,
                            zIndex: 20,
                            borderRadius: 10,
                            border: `1px solid ${x.fF}`,
                            background: "rgba(28, 28, 30, 0.98)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
                            overflow: "hidden"
                        },
                        children: e$.map(e => {
                            let n = e.vertical === t;
                            return (0, o.jsxs)("button", {
                                type: "button",
                                role: "option",
                                "aria-selected": n,
                                onClick: () => {
                                    r(e.vertical), s(!1)
                                },
                                style: {
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "11px 12px",
                                    border: "none",
                                    borderBottom: `1px solid ${x.fF}`,
                                    background: n ? "rgba(255,255,255,0.06)" : "transparent",
                                    color: n ? i.text : i.textSecondary,
                                    cursor: "pointer",
                                    fontSize: 13,
                                    fontWeight: n ? 600 : 500,
                                    textAlign: "left",
                                    boxSizing: "border-box"
                                },
                                onMouseEnter: e => {
                                    n || (e.currentTarget.style.background = "rgba(255,255,255,0.04)")
                                },
                                onMouseLeave: e => {
                                    e.currentTarget.style.background = n ? "rgba(255,255,255,0.06)" : "transparent"
                                },
                                children: [(0, o.jsx)(eL, {
                                    vertical: e.vertical,
                                    active: n,
                                    theme: i
                                }), (0, o.jsx)("span", {
                                    children: e.label
                                }), (0, o.jsx)("span", {
                                    style: {
                                        marginLeft: "auto",
                                        fontSize: 12,
                                        opacity: .75
                                    },
                                    children: e.ratio
                                })]
                            }, e.ratio)
                        })
                    })]
                })
            }
            var eF = function(e) {
                    let {
                        theme: t,
                        isComputerMode: r,
                        onDeviceChange: n,
                        onFormatChange: i,
                        isVerticalFormat: a,
                        horizontalScenes: s,
                        verticalScenes: l,
                        computerScenes: d,
                        verticalComputerScenes: c = [],
                        currentScene: p,
                        onSceneChange: u,
                        hoveredScene: h,
                        onHoverScene: g,
                        currentUser: m,
                        isPremium: f,
                        onOpenMoreAnimations: b
                    } = e, y = r ? a ? (0, S.Kf)(c) : (0, S.Kf)(d) : a ? (0, S.Kf)(l) : (0, S.Kf)(s);
                    return (0, o.jsxs)("div", {
                        style: { ...x.TQ,
                            width: 292,
                            minWidth: 292,
                            height: "calc(100% - 32px)",
                            marginTop: 16,
                            marginBottom: 16,
                            marginRight: 12,
                            flexShrink: 0,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            borderRadius: 16
                        },
                        children: [(0, o.jsx)("style", {
                            children: ".animations-panel-scroll::-webkit-scrollbar { display: none; }"
                        }), n && (0, o.jsx)("div", {
                            role: "tablist",
                            "aria-label": "Device library",
                            style: {
                                display: "flex",
                                padding: "4px 16px 0",
                                borderBottom: `1px solid ${x.fF}`,
                                flexShrink: 0,
                                gap: 4
                            },
                            children: [{
                                label: "Mobile",
                                value: !1
                            }, {
                                label: "Computer",
                                value: !0
                            }].map(e => {
                                let {
                                    label: i,
                                    value: a
                                } = e, s = r === a;
                                return (0, o.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": s,
                                    onClick: () => n(a),
                                    style: {
                                        flex: 1,
                                        padding: "14px 8px 12px",
                                        border: "none",
                                        borderBottom: s ? `2px solid ${t.text}` : "2px solid transparent",
                                        marginBottom: -1,
                                        background: "transparent",
                                        color: s ? t.text : t.textSecondary,
                                        fontSize: 13,
                                        fontWeight: s ? 650 : 500,
                                        letterSpacing: "-0.015em",
                                        cursor: "pointer",
                                        transition: "color 0.15s, border-color 0.15s"
                                    },
                                    children: i
                                }, i)
                            })
                        }), (0, o.jsxs)("div", {
                            style: {
                                padding: "16px 16px 14px",
                                flexShrink: 0
                            },
                            children: [(0, o.jsx)(eW, {
                                isVerticalFormat: a,
                                onFormatChange: i,
                                theme: t
                            }), (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "baseline",
                                    justifyContent: "space-between",
                                    gap: 8
                                },
                                children: [(0, o.jsxs)("div", {
                                    style: {
                                        fontSize: 13,
                                        fontWeight: 650,
                                        color: t.text,
                                        letterSpacing: "-0.02em"
                                    },
                                    children: [r ? "Computer" : "Mobile", " scenes"]
                                }), (0, o.jsx)("div", {
                                    style: {
                                        fontSize: 12,
                                        color: t.textSecondary
                                    },
                                    children: y.length
                                })]
                            })]
                        }), (0, o.jsx)("div", {
                            className: "animations-panel-scroll",
                            style: {
                                flex: 1,
                                minHeight: 0,
                                overflowY: "auto",
                                overflowX: "hidden",
                                padding: "0 16px 12px",
                                display: "flex",
                                flexDirection: "column",
                                gap: 12,
                                scrollbarWidth: "none",
                                msOverflowStyle: "none"
                            },
                            children: y.map(e => {
                                let r = (0, S.Au)(p) === e || p === e;
                                return (0, o.jsx)("div", {
                                    style: {
                                        width: "100%",
                                        flexShrink: 0,
                                        aspectRatio: a ? "3/4" : "16/10",
                                        minHeight: 0
                                    },
                                    children: (0, o.jsx)(H.Z, {
                                        scene: e,
                                        isSelected: r,
                                        onSelect: u,
                                        onHover: g,
                                        theme: t,
                                        isVerticalFormat: a,
                                        hoveredScene: h,
                                        user: m,
                                        currentScene: p,
                                        isPremium: f,
                                        forceAspectRatio: !0
                                    })
                                }, e)
                            })
                        }), (0, o.jsx)("div", {
                            style: {
                                padding: "12px 16px 16px",
                                borderTop: `1px solid ${x.fF}`
                            },
                            children: (0, o.jsxs)("button", {
                                type: "button",
                                onClick: b,
                                style: {
                                    width: "100%",
                                    padding: "12px 14px",
                                    borderRadius: 10,
                                    border: `1px solid ${x.fF}`,
                                    background: "rgba(255, 255, 255, 0.04)",
                                    color: t.textSecondary,
                                    fontSize: 13,
                                    fontWeight: 550,
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 8,
                                    transition: "background 0.15s, color 0.15s"
                                },
                                onMouseEnter: e => {
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)", e.currentTarget.style.color = t.text
                                },
                                onMouseLeave: e => {
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)", e.currentTarget.style.color = t.textSecondary
                                },
                                children: ["Browse all", (0, o.jsxs)("svg", {
                                    width: "13",
                                    height: "13",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, o.jsx)("path", {
                                        d: "M5 12h14"
                                    }), (0, o.jsx)("path", {
                                        d: "M12 5l7 7-7 7"
                                    })]
                                })]
                            })
                        })]
                    })
                },
                eB = function(e) {
                    let {
                        theme: t
                    } = e, {
                        currentUser: r,
                        logout: i
                    } = (0, m.a)(), {
                        isPremium: a,
                        subscription: s
                    } = (0, y.m)(), l = (0, f.h)(), [d, c] = (0, n.useState)(!1), p = (0, n.useRef)(null), u = !!(a && s && ["active", "trialing", "past_due"].includes(s.status || "active"));
                    return (0, n.useEffect)(() => {
                        let e = e => {
                            p.current && !p.current.contains(e.target) && c(!1)
                        };
                        return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
                    }, []), (0, o.jsxs)("div", {
                        style: {
                            position: "relative"
                        },
                        ref: p,
                        children: [(0, o.jsx)("button", {
                            onClick: () => c(!d),
                            style: {
                                background: "none",
                                border: `1px solid ${t.border}`,
                                borderRadius: "8px",
                                padding: "8px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "40px",
                                height: "40px",
                                transition: "all 0.2s ease",
                                backgroundColor: d ? t.surfaceAlt : "transparent"
                            },
                            onMouseEnter: e => {
                                d || (e.currentTarget.style.backgroundColor = t.surface)
                            },
                            onMouseLeave: e => {
                                d || (e.currentTarget.style.backgroundColor = "transparent")
                            },
                            children: (0, o.jsxs)("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: t.text,
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    transition: "transform 0.2s ease",
                                    transform: d ? "rotate(90deg)" : "rotate(0deg)"
                                },
                                children: [(0, o.jsx)("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "3"
                                }), (0, o.jsx)("path", {
                                    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                                })]
                            })
                        }), d && (0, o.jsxs)("div", {
                            style: {
                                position: "absolute",
                                top: "100%",
                                right: 0,
                                marginTop: "8px",
                                backgroundColor: t.surface,
                                border: `1px solid ${t.border}`,
                                borderRadius: "12px",
                                minWidth: "220px",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                                overflow: "hidden",
                                zIndex: 10050,
                                backdropFilter: "blur(8px)"
                            },
                            children: [(0, o.jsx)("div", {
                                style: {
                                    padding: "16px 20px",
                                    borderBottom: `1px solid ${t.border}`,
                                    backgroundColor: t.surfaceAlt
                                },
                                children: (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px"
                                    },
                                    children: [(0, o.jsx)("div", {
                                        style: {
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            backgroundColor: t.primary || "#667eea",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white",
                                            fontWeight: "600",
                                            fontSize: "16px"
                                        },
                                        children: r ?.email ?.charAt(0).toUpperCase()
                                    }), (0, o.jsxs)("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: [(0, o.jsx)("div", {
                                            style: {
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                color: t.text,
                                                marginBottom: "2px"
                                            },
                                            children: "Account"
                                        }), (0, o.jsx)("div", {
                                            style: {
                                                fontSize: "12px",
                                                color: t.textSecondary,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap"
                                            },
                                            children: r ?.email
                                        })]
                                    })]
                                })
                            }), (0, o.jsxs)("div", {
                                style: {
                                    padding: "8px 0"
                                },
                                children: [(0, o.jsxs)("button", {
                                    onClick: () => {
                                        l("/account"), c(!1)
                                    },
                                    style: {
                                        width: "100%",
                                        padding: "12px 20px",
                                        background: "none",
                                        border: "none",
                                        textAlign: "left",
                                        cursor: "pointer",
                                        color: t.text,
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px"
                                    },
                                    onMouseEnter: e => {
                                        e.currentTarget.style.backgroundColor = t.surfaceAlt
                                    },
                                    onMouseLeave: e => {
                                        e.currentTarget.style.backgroundColor = "transparent"
                                    },
                                    children: [(0, o.jsxs)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [(0, o.jsx)("path", {
                                            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                        }), (0, o.jsx)("circle", {
                                            cx: "12",
                                            cy: "7",
                                            r: "4"
                                        })]
                                    }), "Account Settings"]
                                }), u && (0, o.jsxs)("button", {
                                    onClick: () => {
                                        let e = k.zd.customerPortalUrl;
                                        e && window.open(e, "_blank", "noopener,noreferrer"), c(!1)
                                    },
                                    style: {
                                        width: "100%",
                                        padding: "12px 20px",
                                        background: "none",
                                        border: "none",
                                        textAlign: "left",
                                        cursor: "pointer",
                                        color: t.text,
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px"
                                    },
                                    onMouseEnter: e => {
                                        e.currentTarget.style.backgroundColor = t.surfaceAlt
                                    },
                                    onMouseLeave: e => {
                                        e.currentTarget.style.backgroundColor = "transparent"
                                    },
                                    children: [(0, o.jsxs)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [(0, o.jsx)("path", {
                                            d: "M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1"
                                        }), (0, o.jsx)("path", {
                                            d: "M1 8h22v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8z"
                                        }), (0, o.jsx)("line", {
                                            x1: "1",
                                            y1: "12",
                                            x2: "23",
                                            y2: "12"
                                        })]
                                    }), "Manage Subscription"]
                                }), (0, o.jsx)("div", {
                                    style: {
                                        height: "1px",
                                        backgroundColor: t.border,
                                        margin: "8px 20px"
                                    }
                                }), (0, o.jsxs)("button", {
                                    onClick: () => {
                                        i(), l("/"), c(!1)
                                    },
                                    style: {
                                        width: "100%",
                                        padding: "12px 20px",
                                        background: "none",
                                        border: "none",
                                        textAlign: "left",
                                        cursor: "pointer",
                                        color: t.textSecondary,
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px"
                                    },
                                    onMouseEnter: e => {
                                        e.currentTarget.style.backgroundColor = t.surfaceAlt, e.currentTarget.style.color = t.text
                                    },
                                    onMouseLeave: e => {
                                        e.currentTarget.style.backgroundColor = "transparent", e.currentTarget.style.color = t.textSecondary
                                    },
                                    children: [(0, o.jsxs)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [(0, o.jsx)("path", {
                                            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                                        }), (0, o.jsx)("polyline", {
                                            points: "16 17 21 12 16 7"
                                        }), (0, o.jsx)("line", {
                                            x1: "21",
                                            y1: "12",
                                            x2: "9",
                                            y2: "12"
                                        })]
                                    }), "Sign Out"]
                                })]
                            })]
                        })]
                    })
                },
                eV = r(7988),
                eU = r(1283),
                eH = () => {
                    let [e, t] = (0, n.useState)(!1), [r, i] = (0, n.useState)(!1), [a, s] = (0, n.useState)({
                        necessary: !0,
                        analytics: !0
                    });
                    (0, n.useEffect)(() => {
                        let e = localStorage.getItem("cookieConsent");
                        if (e) try {
                            let t = JSON.parse(e);
                            s(t), t.analytics ? _.Z.enableAnalytics() : _.Z.disableAnalytics()
                        } catch (e) {
                            console.error("Error loading cookie preferences:", e), t(!0)
                        } else t(!0)
                    }, []);
                    let l = e => {
                            try {
                                localStorage.setItem("cookieConsent", JSON.stringify(e)), localStorage.setItem("cookieConsentDate", new Date().toISOString()), e.analytics ? _.Z.enableAnalytics() : _.Z.disableAnalytics(), t(!1)
                            } catch (e) {
                                console.error("Error saving cookie preferences:", e)
                            }
                        },
                        d = e => {
                            "necessary" !== e && s(t => ({ ...t,
                                [e]: !t[e]
                            }))
                        };
                    return e ? (0, o.jsx)("div", {
                        className: `cookie-consent-overlay ${r?"detailed":""}`,
                        children: (0, o.jsx)("div", {
                            className: "cookie-consent-modal",
                            children: r ? (0, o.jsxs)("div", {
                                className: "cookie-consent-details",
                                children: [(0, o.jsxs)("div", {
                                    className: "cookie-consent-header",
                                    children: [(0, o.jsx)("div", {
                                        className: "cookie-icon",
                                        children: "\uD83C\uDF6A"
                                    }), (0, o.jsxs)("div", {
                                        children: [(0, o.jsx)("h3", {
                                            children: "Cookie Preferences"
                                        }), (0, o.jsx)("p", {
                                            children: "We use cookies to improve your experience and analyze usage."
                                        })]
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "cookie-categories",
                                    children: [(0, o.jsx)("div", {
                                        className: "cookie-category",
                                        children: (0, o.jsxs)("div", {
                                            className: "category-header",
                                            children: [(0, o.jsxs)("div", {
                                                className: "category-info",
                                                children: [(0, o.jsx)("h4", {
                                                    children: "Necessary Cookies"
                                                }), (0, o.jsx)("p", {
                                                    children: "These cookies are essential for the website to function. They enable basic features like security and authentication. They cannot be disabled as they are required by law for the website to work properly."
                                                })]
                                            }), (0, o.jsxs)("div", {
                                                className: "toggle-switch disabled",
                                                children: [(0, o.jsx)("input", {
                                                    type: "checkbox",
                                                    checked: !0,
                                                    disabled: !0
                                                }), (0, o.jsx)("span", {
                                                    className: "slider"
                                                })]
                                            })]
                                        })
                                    }), (0, o.jsx)("div", {
                                        className: "cookie-category",
                                        children: (0, o.jsxs)("div", {
                                            className: "category-header",
                                            children: [(0, o.jsxs)("div", {
                                                className: "category-info",
                                                children: [(0, o.jsx)("h4", {
                                                    children: "Analytics Cookies"
                                                }), (0, o.jsx)("p", {
                                                    children: "These cookies help us understand how you use our website. They are optional and you can disable them if you prefer not to be tracked."
                                                })]
                                            }), (0, o.jsxs)("div", {
                                                className: "toggle-switch",
                                                children: [(0, o.jsx)("input", {
                                                    type: "checkbox",
                                                    checked: a.analytics,
                                                    onChange: () => d("analytics")
                                                }), (0, o.jsx)("span", {
                                                    className: "slider"
                                                })]
                                            })]
                                        })
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "cookie-consent-actions",
                                    children: [(0, o.jsx)("button", {
                                        className: "btn-secondary",
                                        onClick: () => i(!1),
                                        children: "Back"
                                    }), (0, o.jsx)("button", {
                                        className: "btn-primary",
                                        onClick: () => {
                                            l(a)
                                        },
                                        children: "Save Preferences"
                                    })]
                                })]
                            }) : (0, o.jsxs)("div", {
                                className: "cookie-consent-simple",
                                children: [(0, o.jsxs)("div", {
                                    className: "cookie-consent-header",
                                    children: [(0, o.jsx)("div", {
                                        className: "cookie-icon",
                                        children: "\uD83C\uDF6A"
                                    }), (0, o.jsxs)("div", {
                                        children: [(0, o.jsx)("h3", {
                                            children: "We use cookies"
                                        }), (0, o.jsx)("p", {
                                            children: "We use cookies to make our website work and to understand how you use it. Some cookies are essential and cannot be disabled, while others help us improve our service."
                                        })]
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "cookie-consent-actions",
                                    children: [(0, o.jsx)("button", {
                                        className: "btn-text",
                                        onClick: () => i(!0),
                                        children: "Customize your cookie preferences"
                                    }), (0, o.jsx)("button", {
                                        className: "btn-secondary",
                                        onClick: () => {
                                            l({
                                                necessary: !0,
                                                analytics: !1
                                            })
                                        },
                                        children: "Reject all non-essential cookies"
                                    }), (0, o.jsx)("button", {
                                        className: "btn-primary",
                                        onClick: () => {
                                            l({
                                                necessary: !0,
                                                analytics: !0
                                            })
                                        },
                                        children: "Accept all cookies"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "cookie-links",
                                    children: [(0, o.jsx)("a", {
                                        href: "/privacy",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Privacy Policy"
                                    }), (0, o.jsx)("span", {
                                        children: "•"
                                    }), (0, o.jsx)("a", {
                                        href: "/cookie-policy",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Cookie Policy"
                                    })]
                                })]
                            })
                        })
                    }) : null
                };
            let eO = (0, n.lazy)(() => Promise.all([r.e(8546), r.e(222), r.e(5733), r.e(4429), r.e(6689)]).then(r.bind(r, 6689)));

            function eq(e) {
                let {
                    onOpen: t,
                    children: r
                } = e;
                return (0, n.useEffect)(() => {
                    "credits" === new URLSearchParams(window.location.search).get("open") && (t(), window.history.replaceState({}, "", window.location.pathname))
                }, [t]), r
            }
            let eZ = {
                x: 0,
                y: 0
            };
            var eQ = function() {
                let [e, t] = (0, n.useState)(null), [r, i] = (0, n.useState)(null), [p, x] = (0, n.useState)(0), [h, g] = (0, n.useState)(null), [f, b] = (0, n.useState)("Animation_32_Empty.glb"), [v, j] = (0, n.useState)(!1), [w, k] = (0, n.useState)(0), [C, E] = (0, n.useState)(0), [M, I] = (0, n.useState)(""), A = (0, n.useRef)(null);
                (0, n.useRef)(0), (0, n.useRef)([]), (0, n.useRef)(null), (0, n.useRef)(null);
                let [P, T] = (0, n.useState)(null), [z, N] = (0, n.useState)(null), [$, W] = (0, n.useState)(!1), [V, H] = (0, n.useState)(ek.K5[0]), [q, Z] = (0, n.useState)(ek.UP[0]), [Q, Y] = (0, n.useState)(100), [J, X] = (0, n.useState)(!0), [er, eo] = (0, n.useState)(null), [ea, es] = (0, n.useState)({
                    isDragging: !1,
                    isValid: !1
                }), [el, ed] = (0, n.useState)(null), [ec, ep] = (0, n.useState)(!1), [eu, ex] = (0, n.useState)(!1), [eh, em] = (0, n.useState)(!1), [ef, eb] = (0, n.useState)(!1), [ey, ev] = (0, n.useState)({
                    scene: null,
                    camera: null
                }), [eC, eA] = (0, n.useState)(!1), [eR, eP] = (0, n.useState)(!1), [ez, e$] = (0, n.useState)(null), [eL, eW] = (0, n.useState)(!1), [eQ, eY] = (0, n.useState)(!1), [eK, eJ] = (0, n.useState)(null), [eG, eX] = (0, n.useState)(null), [e0, e1] = (0, n.useState)("iPhone"), [e2, e5] = (0, n.useState)(null), [e4, e8] = (0, n.useState)(!0), [e6, e3] = (0, n.useState)(!1), [e9, e7] = (0, n.useState)("MacbookPro"), [te, tt] = (0, n.useState)(null), [tr, to] = (0, n.useState)(!1), [tn, ti] = (0, n.useState)(!1), [ta, ts] = (0, n.useState)(null), [tl, td] = (0, n.useState)(!1), [tc, tp] = (0, n.useState)(!1), [tu, tx] = (0, n.useState)(!1), [th, tg] = (0, n.useState)(null), [tm, tf] = (0, n.useState)(!1), [tb, ty] = (0, n.useState)(!1), [tv, tj] = (0, n.useState)(null), [tw, tk] = (0, n.useState)(null), [tC, tS] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    tm && ty(!0)
                }, [tm]), (0, n.useEffect)(() => {
                    let e = new URLSearchParams(window.location.search),
                        t = e.get("inject");
                    if (t) {
                        tS(t), tf(!0), ty(!0);
                        return
                    }
                    let r = e.get("promoTemplate");
                    r && (tk(r), tf(!0), ty(!0))
                }, []), (0, n.useEffect)(() => {
                    tm && tc && tp(!1)
                }, [tm, tc]);
                let {
                    theme: tE,
                    isDarkMode: t_,
                    setIsDarkMode: tM
                } = (0, ew.F)(), {
                    currentUser: tI
                } = (0, m.a)(), {
                    credits: tD,
                    spendableCredits: tA
                } = (0, u.B)(), {
                    isPremium: tR,
                    subscription: tP
                } = (0, y.m)(), tT = "localhost" === window.location.hostname || "127.0.0.1" === window.location.hostname, tz = (0, n.useRef)(ec);
                tz.current = ec;
                let tN = (0, n.useCallback)(e => {
                    if (e && "neither" !== e) {
                        if ("computer" === e) {
                            e3(!0), b((tz.current ? S.om : S.wg)[0]);
                            return
                        }("phone" === e || "both" === e) && e3(!1)
                    }
                }, []);
                (0, n.useEffect)(() => {
                    if (!tI) return;
                    let e = !1,
                        t = `onboardingPreferredDevice_${tI.uid}`,
                        r = (() => {
                            try {
                                return window.localStorage.getItem(t) || null
                            } catch {
                                return null
                            }
                        })();
                    if (r) {
                        tN(r);
                        return
                    }
                    return (0, R.Od)(tI.uid).then(t => {
                        !e && t && tN(t)
                    }).catch(() => {}), () => {
                        e = !0
                    }
                }, [tI, tN]), (0, n.useEffect)(() => {
                    let e = e => {
                        let t = e ?.detail || {};
                        tI && t.userId === tI.uid && tN(t.preferredDevice)
                    };
                    return window.addEventListener("lumio:devicePreference", e), () => window.removeEventListener("lumio:devicePreference", e)
                }, [tI, tN]);
                let {
                    showExportSummary: t$,
                    showExportOverlay: tL,
                    completedExportItem: tW,
                    setCompletedExportItem: tF,
                    queueState: tB,
                    handleExport: tV,
                    startExport: tU,
                    cancelExport: tH,
                    downloadExport: tO,
                    removeFromQueue: tq,
                    setShowExportSummary: tZ,
                    captureProgress: tQ,
                    encodingProgress: tY,
                    exportPhase: tK
                } = function(e) {
                    let {
                        canvasContainerRef: t,
                        currentScene: r,
                        animationDuration: o,
                        actions: i,
                        selectedColor: a,
                        lightColor: s,
                        lightIntensity: l,
                        uploadedImage: d,
                        uploadedVideo: c,
                        videoStartTime: p = 0,
                        videoEndTime: x = null,
                        isVerticalFormat: h,
                        scene: g,
                        camera: m,
                        onExportStart: f,
                        currentUser: b,
                        selectedPhoneModel: y,
                        isComputerMode: v = !1,
                        selectedComputerModel: j = "MacbookPro",
                        isPremium: w = !0,
                        onInsufficientCredits: k
                    } = e, [C, E] = (0, n.useState)(!1), [M, I] = (0, n.useState)(!1), [D, A] = (0, n.useState)(!1), [R, P] = (0, n.useState)({
                        current: 0,
                        total: 0
                    }), [T, z] = (0, n.useState)({
                        current: 0,
                        total: 0
                    }), [N, $] = (0, n.useState)(""), [L, W] = (0, n.useState)({
                        queue: [],
                        isProcessing: !1,
                        currentExport: null
                    }), [F, B] = (0, n.useState)(null), V = (0, n.useRef)(null), {
                        spendableCredits: U
                    } = (0, u.B)();
                    (0, n.useEffect)(() => {
                        if (V.current) V.current.setCurrentUser(b), V.current.setIsPremium(w);
                        else {
                            let e = new ej(b, w);
                            e.onQueueUpdated = e => {
                                W(e), A(e.isProcessing)
                            }, e.onProgress = e => {
                                let {
                                    phase: t,
                                    current: r,
                                    total: o,
                                    progress: n
                                } = e;
                                "extracting_frames" === t ? $("extracting_frames") : "ready" === t ? $("ready") : "capturing" === t ? (P({
                                    current: r,
                                    total: o,
                                    percent: n
                                }), $("capturing")) : "encoding" === t && (z({
                                    current: r,
                                    total: o,
                                    percent: n
                                }), $("encoding"))
                            }, e.onExportComplete = e => {
                                B(e)
                            }, V.current = e
                        }
                    }, [b, U, w]);
                    let H = (0, n.useCallback)(async function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "HD",
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                                u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                C = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "prores4444",
                                M = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
                            I(!1);
                            try {
                                let I, D, A, R;
                                if (b && !w && K({
                                        isPremium: w,
                                        currentUser: b,
                                        sceneName: r,
                                        quality: e,
                                        transparentBackground: u
                                    })) {
                                    let e = L.queue.filter(e => ("queued" === e.status || "processing" === e.status) && K({
                                        isPremium: w,
                                        currentUser: b,
                                        sceneName: e.data ?.sceneName || "",
                                        quality: e.data ?.quality,
                                        transparentBackground: e.data ?.transparentBackground
                                    })).length;
                                    if (U < e + 1) {
                                        k ? k() : alert("You don't have enough credits for this export. Please purchase more credits or upgrade to Pro.");
                                        return
                                    }
                                }
                                if (f ?.(), !g || !m) throw Error("Scene and camera are required for export");
                                if (!t ?.current) throw Error("Canvas container not found");
                                if (!t.current.querySelector("canvas")) throw Error("Canvas element not found in container");
                                "4k" === e ? (I = h ? 2160 : 3840, D = h ? 3840 : 2160) : (I = h ? 1080 : 1920, D = h ? 1920 : 1080), E(!0);
                                try {
                                    A = g.clone(), R = m.clone()
                                } catch (e) {
                                    throw console.error("Failed to clone scene or camera:", e), E(!1), Error("Failed to prepare export: " + e.message)
                                }
                                let P = A.getObjectByName("ComputerLocation"),
                                    T = A.getObjectByName("PhoneLocation");
                                if (P) {
                                    if (P.children.length, T && T.children.length > 0)
                                        for (; T.children.length > 0;) T.remove(T.children[0])
                                } else if (T && P && P.children.length > 0)
                                    for (; P.children.length > 0;) P.remove(P.children[0]);
                                let z = new Map,
                                    N = e => {
                                        if (!e || !e.image) return null;
                                        try {
                                            let t = e.image,
                                                r = document.createElement("canvas");
                                            if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) return r.width = t.width || e.image.width, r.height = t.height || e.image.height, r.getContext("2d").drawImage(t, 0, 0), r.toDataURL("image/png");
                                            if (t instanceof ImageBitmap) return r.width = t.width, r.height = t.height, r.getContext("2d").drawImage(t, 0, 0), r.toDataURL("image/png");
                                            if (t && "number" == typeof t.width && "number" == typeof t.height) {
                                                r.width = t.width, r.height = t.height;
                                                let e = r.getContext("2d");
                                                try {
                                                    return e.drawImage(t, 0, 0), r.toDataURL("image/png")
                                                } catch (e) {}
                                            }
                                        } catch (e) {}
                                        return null
                                    };
                                A.traverse(e => {
                                    if (e.isMesh && e.material) try {
                                        let t = Array.isArray(e.material) ? e.material.map(e => e.clone()) : e.material.clone();
                                        if (Array.isArray(t)) t.forEach((t, r) => {
                                            if ("screenMaterial" === t.name || "computerScreenMaterial" === t.name || "computerScreenMaterial.002" === t.name) t.map && (t.map = null), t.envMap && (t.envMap = null), t.emissiveMap && (t.emissiveMap = null);
                                            else {
                                                let o = t.name || "material",
                                                    n = `${e.name}_${o}_${r}`;
                                                if (e.name.toLowerCase().includes("keyboard") || o.toLowerCase().includes("keyboard"), t.map) {
                                                    let e = N(t.map);
                                                    e && z.set(`${n}_map`, e), t.map = null
                                                }
                                                if (t.bumpMap) {
                                                    let e = N(t.bumpMap);
                                                    e && z.set(`${n}_bumpMap`, e), t.bumpMap = null
                                                }
                                                if (t.normalMap) {
                                                    let e = N(t.normalMap);
                                                    e && z.set(`${n}_normalMap`, e), t.normalMap = null
                                                }
                                                if (t.specularMap) {
                                                    let e = N(t.specularMap);
                                                    e && z.set(`${n}_specularMap`, e), t.specularMap = null
                                                }
                                            }
                                            t.envMap && (t.envMap = null), t.lightMap && (t.lightMap = null)
                                        }), e.material = t;
                                        else {
                                            if ("screenMaterial" === t.name || "computerScreenMaterial" === t.name || "computerScreenMaterial.002" === t.name) t.map && (t.map = null), t.envMap && (t.envMap = null), t.emissiveMap && (t.emissiveMap = null);
                                            else {
                                                let r = t.name || "material",
                                                    o = `${e.name}_${r}_0`;
                                                if (e.name.toLowerCase().includes("keyboard") || r.toLowerCase().includes("keyboard"), t.map) {
                                                    let e = N(t.map);
                                                    e && z.set(`${o}_map`, e), t.map = null
                                                }
                                                if (t.bumpMap) {
                                                    let e = N(t.bumpMap);
                                                    e && z.set(`${o}_bumpMap`, e), t.bumpMap = null
                                                }
                                                if (t.normalMap) {
                                                    let e = N(t.normalMap);
                                                    e && z.set(`${o}_normalMap`, e), t.normalMap = null
                                                }
                                                if (t.specularMap) {
                                                    let e = N(t.specularMap);
                                                    e && z.set(`${o}_specularMap`, e), t.specularMap = null
                                                }
                                            }
                                            t.envMap && (t.envMap = null), t.lightMap && (t.lightMap = null), e.material = t
                                        }
                                    } catch (e) {}
                                });
                                let $ = [];
                                i && Object.values(i).forEach(e => {
                                    if (e && e.getClip()) {
                                        let t = e.getClip();
                                        $.push(t.toJSON())
                                    }
                                });
                                let W = e => {
                                    e.animations && e.animations.length > 0 && e.animations.forEach(e => {
                                        $.some(t => t.name === e.name) || $.push(e.toJSON())
                                    }), e.userData && e.userData.animationClips && e.userData.animationClips.forEach(e => {
                                        $.some(t => t.name === e.name) || $.push(e.toJSON())
                                    })
                                };
                                W(g), g.traverse(W), W(m), m.parent && m.parent.traverse(W);
                                let F = {};
                                z.forEach((e, t) => {
                                    F[t] = e
                                });
                                let B = {
                                    sceneName: r,
                                    sceneBaseName: r.replace(".glb", ""),
                                    name: "scene",
                                    exportName: M,
                                    scene: A.toJSON(),
                                    camera: R.toJSON(),
                                    animations: $,
                                    textureDataUrls: F,
                                    fps: 30,
                                    duration: n,
                                    width: I,
                                    height: D,
                                    isVerticalFormat: h,
                                    selectedColor: a,
                                    lightColor: s,
                                    lightIntensity: l,
                                    uploadedImage: d,
                                    uploadedVideo: c,
                                    videoStartTime: p,
                                    videoEndTime: x,
                                    videoDuration: null,
                                    videoFrames: null,
                                    quality: e,
                                    transparentBackground: u,
                                    transparentFormat: C,
                                    isComputerMode: v,
                                    selectedComputerModel: j
                                };
                                if (!V.current) throw console.error("Export queue ref is null!"), E(!1), Error("Export queue not initialized");
                                V.current.addToQueue(B), V.current.processNextInQueue();
                                let H = !(0, S.q8)(r);
                                _.Z.trackExportStarted({
                                    animation: r,
                                    scene: r,
                                    deviceType: v ? "computer" : "phone",
                                    device: v ? j : y,
                                    format: h ? "vertical" : "horizontal",
                                    quality: e,
                                    duration: o,
                                    hasCustomImage: !!d,
                                    hasCustomVideo: !!c,
                                    isPremium: H,
                                    userId: b ?.uid
                                })
                            } catch (e) {
                                throw console.error("Export error:", e), E(!1), e
                            }
                        }, [b, t, r, o, i, a, s, l, d, c, p, x, h, g, m, f, y, v, j, U, L, w, k]),
                        O = e => {
                            if (!e) return "";
                            let t = e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                            return (t = (t = t.replace(/\s+/g, "_")).replace(/[<>:"/\\|?*\x00-\x1f]/g, "")).trim()
                        };
                    return {
                        isExporting: C,
                        showExportSummary: M,
                        showExportOverlay: D,
                        completedExportItem: F,
                        setCompletedExportItem: B,
                        handleExport: () => {
                            I(!0)
                        },
                        startExport: H,
                        cancelExport: e => {
                            V.current.cancelExport(e)
                        },
                        removeFromQueue: e => {
                            V.current && V.current.removeFromQueue(e) && W(V.current.getQueueState())
                        },
                        setShowExportSummary: I,
                        captureProgress: R,
                        encodingProgress: T,
                        exportPhase: N,
                        queueState: L,
                        downloadExport: (e, t) => {
                            if (e.result) {
                                let o;
                                let n = e.result && "object" == typeof e.result && e.result.downloadUrl,
                                    i = n ? e.result.downloadUrl : URL.createObjectURL(e.result),
                                    a = document.createElement("a");
                                a.href = i;
                                let s = e.fileExtension || ("video/quicktime" === e.mimeType ? "mov" : "mp4"),
                                    l = e.exportName || e.data ?.exportName;
                                l && (o = O(l)) && 0 !== o.length || (o = `Video_${t||1}`), a.download = `${o}.${s}`, document.body.appendChild(a), a.click(), document.body.removeChild(a), n || URL.revokeObjectURL(i);
                                let d = e.data ?.sceneName || r,
                                    c = e.data ?.sceneName ? !(0, S.q8)(e.data.sceneName) : !(0, S.q8)(r),
                                    p = e.data ?.isComputerMode === !0,
                                    u = p ? e.data ?.selectedComputerModel || "MacbookPro" : y;
                                return _.Z.trackExportDownloaded({
                                    animation: d,
                                    scene: d,
                                    deviceType: p ? "computer" : "phone",
                                    device: u,
                                    format: h ? "vertical" : "horizontal",
                                    quality: e.quality || "HD",
                                    isPremium: c,
                                    userId: b ?.uid
                                }), {
                                    uploadedType: e.data ?.uploadedVideo ? "video" : e.data ?.uploadedImage ? "image" : "none",
                                    videoDuration: e.data ?.videoDuration || null,
                                    animation: d,
                                    isPremium: c,
                                    exportDuration: e.exportDuration ? Math.round(e.exportDuration / 1e3) : null
                                }
                            }
                            return null
                        }
                    }
                }({
                    canvasContainerRef: A,
                    currentScene: f,
                    animationDuration: w,
                    actions: er,
                    selectedColor: V,
                    lightColor: q,
                    lightIntensity: Q,
                    uploadedImage: e,
                    uploadedVideo: r,
                    videoStartTime: p,
                    videoEndTime: h,
                    isVerticalFormat: ec,
                    scene: ey.scene,
                    camera: ey.camera,
                    currentUser: tI,
                    selectedPhoneModel: e0,
                    isComputerMode: e6,
                    selectedComputerModel: e9,
                    isPremium: tR,
                    onInsufficientCredits: () => {
                        _.Z.trackPaywallOpened({
                            source: "export_underfunded"
                        }), to(!0)
                    }
                });
                (0, n.useEffect)(() => {
                    if (e6) {
                        let e = ec ? S.om : S.wg;
                        e.includes(f) || b(e[0])
                    } else ec && !S.u_.includes(f) ? b(S.u_[0]) : ec || S.jF.includes(f) || "Animation_32_Empty.glb" === f || b(S.jF[0])
                }, [ec, f, e6]), (0, n.useEffect)(() => {
                    t(null), i(null), x(0), g(null), ed(null), e$(null), eJ(null), eX(null), eW(!1)
                }, [e6]), (0, n.useEffect)(() => {
                    _.Z.checkConsent();
                    let e = () => {
                        eA(window.innerWidth <= 768)
                    };
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []);
                let [tJ, tG] = (0, n.useState)({
                    width: "800px",
                    height: "450px"
                }), tX = (0, n.useRef)(null), t0 = (0, n.useRef)(null), [t1, t2] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    let e = tX.current;
                    if (!e) return;
                    let t = () => {
                        e && t2(e.getBoundingClientRect())
                    };
                    t();
                    let r = new ResizeObserver(t);
                    return r.observe(e), window.addEventListener("resize", t), window.addEventListener("scroll", t, !0), () => {
                        r.disconnect(), window.removeEventListener("resize", t), window.removeEventListener("scroll", t, !0)
                    }
                }, []), (0, n.useEffect)(() => {
                    (() => {
                        let e, t;
                        let r = ec ? 9 / 16 : 16 / 9,
                            o = Math.max(window.innerWidth - 360, 500),
                            n = Math.max(window.innerHeight - 100, 400),
                            i = o / r;
                        i <= n ? (e = o, t = i) : (e = n * r, t = n), tG({
                            width: `${e}px`,
                            height: `${t}px`
                        })
                    })()
                }, [ec]);
                let t5 = (0, n.useCallback)(() => {
                    let e, t;
                    let r = t0.current,
                        o = tX.current,
                        n = r || o;
                    if (!n) return;
                    let i = n.getBoundingClientRect(),
                        a = r ? Math.max(0, i.height - 18) : i.height;
                    if (i.width < 100 || a < 100) return;
                    let s = ec ? 9 / 16 : 16 / 9,
                        l = .98 * i.width,
                        d = .98 * a,
                        c = l / s;
                    c <= d ? (e = l, t = c) : (e = d * s, t = d), tG({
                        width: `${e}px`,
                        height: `${t}px`
                    })
                }, [ec]);
                (0, n.useEffect)(() => {
                    let e;
                    let t = () => {
                        clearTimeout(e), e = setTimeout(t5, 100)
                    };
                    window.addEventListener("resize", t), t();
                    let r = tX.current,
                        o = t0.current;
                    if (r) {
                        let n = new ResizeObserver(t);
                        return n.observe(r), o && n.observe(o), () => {
                            clearTimeout(e), window.removeEventListener("resize", t), n.disconnect()
                        }
                    }
                    return () => {
                        clearTimeout(e), window.removeEventListener("resize", t)
                    }
                }, [ec, t5]), (0, n.useEffect)(() => {
                    let e = e => {
                        "Escape" === e.key && tc && tp(!1)
                    };
                    return tc ? (document.addEventListener("keydown", e), document.body.style.overflow = "hidden") : document.body.style.overflow = "unset", () => {
                        document.removeEventListener("keydown", e), document.body.style.overflow = "unset"
                    }
                }, [tc]);
                let t4 = (0, n.useCallback)(e => {
                    e !== f && b(e)
                }, [f, ec, tI]);
                (0, n.useEffect)(() => {
                    ey.scene && ey.scene.traverse(e => {
                        "Backdrop" === e.name && (e.visible = J)
                    })
                }, [ey.scene, J, f]), (0, n.useEffect)(() => {
                    !tW || tn || (tI ? "true" === localStorage.getItem(`socialShareOfferSeen_${tI.uid}`) : "true" === localStorage.getItem("socialShareOfferSeen_guest")) || setTimeout(() => {
                        td(!0)
                    }, 1500)
                }, [tW, tI, tn]);
                let t8 = e => {
                        H(e), ey.scene && ey.scene.traverse(t => {
                            if (t.isMesh && "Backdrop" === t.name) {
                                let r = new d.EJi({
                                    color: e,
                                    metalness: .2,
                                    roughness: .4,
                                    clearcoat: .6,
                                    clearcoatRoughness: .3,
                                    reflectivity: .5,
                                    envMapIntensity: .6,
                                    emissive: e,
                                    emissiveIntensity: .2
                                });
                                t.material = r, t.material.needsUpdate = !0
                            }
                        })
                    },
                    t6 = e => {
                        X(e), ey.scene && ey.scene.traverse(t => {
                            "Backdrop" === t.name && (t.visible = e)
                        })
                    },
                    t3 = (0, n.useCallback)(e => {
                        if (e && e.clear) {
                            t(null), ed(null), e$(null), eJ(null), eW(!1);
                            return
                        }
                        if (e) {
                            if ("string" == typeof e) i(null), x(0), g(null), e !== eG && (e$(null), eX(e)), eJ(e), ed(e), t(e), e6 || eW(!0);
                            else if (e instanceof File && e.type && e.type.startsWith("image/")) {
                                i(null), x(0), g(null);
                                let r = new FileReader;
                                r.onload = e => {
                                    let r = e.target.result;
                                    r !== eG && (e$(null), eX(r)), eJ(r), ed(r), t(r), e6 || eW(!0)
                                }, r.readAsDataURL(e)
                            }
                        }
                    }, [ez, eG, tI, e6]),
                    t9 = (0, n.useCallback)(e => {
                        if (e && e.clear) {
                            i(null), x(0), g(null);
                            return
                        }
                        e && (0, B.Vh)(e, e => {
                            i(e), x(0), g(null), t(null), ed(null), e$(null), eJ(null), eW(!1)
                        }, e => {
                            alert(e)
                        })
                    }, []),
                    t7 = (0, n.useCallback)(e => {
                        e$({
                            croppedImage: e.croppedImage,
                            position: e.position,
                            scale: e.scale
                        }), t(e.croppedImage), ed(e.croppedImage), eW(!1), eJ(null)
                    }, []),
                    re = (0, n.useCallback)(() => {
                        eW(!1)
                    }, []),
                    rt = (0, n.useCallback)(() => {
                        eJ(eG || e || el || null), eW(!0)
                    }, [eG, e, el]),
                    rr = (0, n.useCallback)(() => {
                        r && eY(!0)
                    }, [r]),
                    ro = (0, n.useCallback)(e => {
                        e.preventDefault(), e.stopPropagation();
                        let t = e.dataTransfer.items;
                        if (t && t[0]) {
                            let e = t[0].type,
                                r = "video/quicktime" === e,
                                o = e.startsWith("video/") && !r;
                            es({
                                isDragging: !0,
                                isValid: e.startsWith("image/") || o,
                                isVideo: o,
                                isMov: r
                            })
                        }
                    }, []),
                    rn = (0, n.useCallback)(e => {
                        e.preventDefault(), e.stopPropagation(), es({
                            isDragging: !1,
                            isValid: !1,
                            isVideo: !1
                        })
                    }, []),
                    ri = (0, n.useCallback)(e => {
                        e.preventDefault(), e.stopPropagation();
                        let r = e.dataTransfer.types || [];
                        if (r.includes("application/x-mockup-uploaded-image")) {
                            let r = e.dataTransfer.getData("application/x-mockup-uploaded-image");
                            r && (i(null), x(0), g(null), r !== eG && e$(null), eX(r), eJ(r), ed(r), t(r), e6 || eW(!0)), es({
                                isDragging: !1,
                                isValid: !1,
                                isVideo: !1
                            });
                            return
                        }
                        if (r.includes("application/x-mockup-uploaded-video")) {
                            let r = e.dataTransfer.getData("application/x-mockup-uploaded-video");
                            r && (i(r), x(0), g(null), t(null), ed(null), e$(null), eJ(null), eW(!1)), es({
                                isDragging: !1,
                                isValid: !1,
                                isVideo: !1
                            });
                            return
                        }
                        let o = e.dataTransfer.files;
                        if (o && o[0] && o[0] instanceof File) {
                            let e = o[0];
                            if ("video/quicktime" === e.type || e.name ?.toLowerCase().endsWith(".mov")) {
                                es({
                                    isDragging: !1,
                                    isValid: !1,
                                    isVideo: !1
                                });
                                return
                            }
                            if (e.type.startsWith("image/")) {
                                i(null), x(0), g(null);
                                let r = new FileReader;
                                r.onload = e => {
                                    let r = e.target.result;
                                    r !== eG && (e$(null), eX(r)), eJ(r), ed(r), t(r), e6 || eW(!0)
                                }, r.readAsDataURL(e)
                            } else e.type.startsWith("video/") && (0, B.Vh)(e, e => {
                                i(e), x(0), g(null), t(null), ed(null), e$(null), eJ(null), eW(!1)
                            }, e => {
                                alert(e)
                            })
                        }
                        es({
                            isDragging: !1,
                            isValid: !1,
                            isVideo: !1
                        })
                    }, [el, e, ez, eG, e6]),
                    ra = (0, n.useCallback)(e => {
                        if (e.target.closest("button") || e.target.closest("[data-duration-display]") || e.target.closest("[data-phone-selector]") || e.target.closest("svg") || e.target.closest("input")) return;
                        e.preventDefault(), e.stopPropagation();
                        let t = document.getElementById("canvasFileInput");
                        t && t.click()
                    }, []),
                    rs = e => {
                        ep(e), e6 ? b((e ? S.om : S.wg)[0]) : e ? b(S.u_[0]) : S.jF.includes(f) || "Animation_32_Empty.glb" === f || b(S.jF[0])
                    },
                    rl = e => {
                        e3(e), e && b((ec ? S.om : S.wg)[0])
                    };
                (0, n.useEffect)(() => {
                    if (_.Z.isAnalyticsEnabled()) {
                        let e = performance.now();
                        _.Z.trackAppLoaded({
                            loadTime: e,
                            userAgent: navigator.userAgent,
                            screenWidth: window.screen.width,
                            screenHeight: window.screen.height
                        })
                    }
                    tI && _.Z.isAnalyticsEnabled() && _.Z.identify(tI.uid, {
                        email: tI.email,
                        displayName: tI.displayName,
                        photoURL: tI.photoURL,
                        emailVerified: tI.emailVerified,
                        credits: tD,
                        isPremium: tR,
                        subscriptionStatus: tP ?.status ?? null,
                        subscriptionPlan: tP ?.priceId ?? null
                    })
                }, [tI, tD, tR, tP]), (0, n.useEffect)(() => {
                    if (!tI || !tR) return;
                    let e = `premium_activated_${tI.uid}`;
                    try {
                        if (window.localStorage.getItem(e)) return;
                        _.Z.trackPremiumActivated({
                            priceId: tP ?.priceId ?? null,
                            subscriptionStatus: tP ?.status ?? null
                        }), window.localStorage.setItem(e, "1")
                    } catch (e) {
                        _.Z.trackPremiumActivated({
                            priceId: tP ?.priceId ?? null,
                            subscriptionStatus: tP ?.status ?? null
                        })
                    }
                }, [tI, tR, tP]);
                let rd = (0, n.useCallback)(e => {
                    let {
                        scene: t,
                        camera: r
                    } = e;
                    ev({
                        scene: t,
                        camera: r
                    }), t && t.traverse(e => {
                        "Backdrop" === e.name && (e.visible = J)
                    })
                }, [J]);
                return (0, o.jsxs)(o.Fragment, {
                    children: [eC && (0, o.jsx)("div", {
                        style: {
                            position: "fixed",
                            inset: 0,
                            zIndex: 99999
                        },
                        children: (0, o.jsx)(eE, {
                            theme: tE
                        })
                    }), (0, o.jsxs)(s.VK, {
                        children: [(0, o.jsx)(eV.Z, {}), (0, o.jsx)(eU.Z, {
                            currentUser: tI,
                            theme: tE
                        }), (0, o.jsx)(e_.c, {}), (0, o.jsx)(eq, {
                            onOpen: () => {
                                _.Z.trackPaywallOpened({
                                    source: "url_param"
                                }), to(!0)
                            },
                            children: (0, o.jsx)(eg, {
                                theme: tE,
                                currentUser: tI,
                                children: (0, o.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        gap: "20px",
                                        padding: "10px",
                                        backgroundColor: tE.background,
                                        minHeight: "100vh",
                                        height: "100vh",
                                        overflow: "hidden",
                                        boxSizing: "border-box",
                                        color: tE.text,
                                        transition: "all 0.3s ease"
                                    },
                                    children: (0, o.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            flex: 1,
                                            minHeight: 0,
                                            overflow: "hidden"
                                        },
                                        children: [(0, o.jsx)("div", {
                                            style: {
                                                flexShrink: 0,
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            },
                                            children: (0, o.jsx)(L, {
                                                isDarkMode: t_,
                                                setIsDarkMode: tM,
                                                handleExport: tV,
                                                "data-topbar": "true",
                                                isExporting: v,
                                                exportProgress: M,
                                                animationDuration: w,
                                                theme: tE,
                                                credits: tA,
                                                onPurchaseClick: () => {
                                                    _.Z.trackPaywallOpened({
                                                        source: "top_bar_credits_pill"
                                                    }), to(!0)
                                                },
                                                queueState: tB,
                                                currentScene: f,
                                                currentUser: tI,
                                                isPremium: tR,
                                                studioMode: tm,
                                                onStudioModeChange: tf,
                                                onStudioExport: () => tv ?.openExport ?.(),
                                                studioExportDisabled: !tv ?.hasExportableClips,
                                                studioExportCreditCost: tv ?.exportCreditCost ?? 0,
                                                studioExportCreditsNeeded: tv ?.exportCreditsNeeded ?? 0,
                                                studioExportActiveCount: tv ?.activeCount ?? 0,
                                                studioExportHasShortVideo: !!tv ?.hasShortVideo,
                                                onStudioSaveProject: tv ?.saveProjectToDisk,
                                                onStudioNewProject: tv ?.newProject,
                                                studioHasUnsavedChanges: !!tv ?.hasUnsavedChanges,
                                                studioHighlightSaveProject: !!tv ?.highlightSaveProject,
                                                saveProjectButtonRef: tv ?.saveProjectButtonRef,
                                                trailingSlot: (0, o.jsx)(eB, {
                                                    theme: tE
                                                })
                                            })
                                        }), (0, o.jsx)(F, {}), tb && (0, o.jsx)(n.Suspense, {
                                            fallback: (0, o.jsx)("div", {
                                                style: {
                                                    flex: 1,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: tE.textSecondary
                                                },
                                                children: "Initializing LUMIO Engine...…"
                                            }),
                                            children: (0, o.jsx)("div", {
                                                style: {
                                                    flex: 1,
                                                    display: tm ? "flex" : "none",
                                                    flexDirection: "column",
                                                    minHeight: 0,
                                                    overflow: "hidden"
                                                },
                                                children: (0, o.jsx)(a, {
                                                    theme: tE,
                                                    children: (0, o.jsx)(eO, {
                                                        theme: tE,
                                                        initialTemplateSlug: tw,
                                                        initialInjectToken: tC,
                                                        onStudioToolbarReady: tj,
                                                        onBuyCredits: () => {
                                                            _.Z.trackPaywallOpened({
                                                                source: "studio_export_underfunded"
                                                            }), to(!0)
                                                        }
                                                    })
                                                })
                                            })
                                        }), (0, o.jsx)("div", {
                                            style: {
                                                display: tm ? "none" : "flex",
                                                flexDirection: "column",
                                                gap: 0,
                                                height: "calc(100vh - 76px)",
                                                position: "relative",
                                                overflow: "hidden",
                                                flex: 1,
                                                minHeight: 0
                                            },
                                            children: (0, o.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    flex: 1,
                                                    gap: 0,
                                                    minHeight: 0,
                                                    overflow: "hidden"
                                                },
                                                children: [(0, o.jsx)(eF, {
                                                    theme: tE,
                                                    isComputerMode: e6,
                                                    onDeviceChange: rl,
                                                    isVerticalFormat: ec,
                                                    onFormatChange: rs,
                                                    horizontalScenes: S.jF,
                                                    verticalScenes: S.u_,
                                                    computerScenes: S.wg,
                                                    verticalComputerScenes: S.om,
                                                    currentScene: f,
                                                    onSceneChange: t4,
                                                    hoveredScene: z,
                                                    onHoverScene: N,
                                                    currentUser: tI,
                                                    isPremium: tR,
                                                    onOpenMoreAnimations: () => eP(!0),
                                                    isDebug: tT
                                                }), (0, o.jsxs)("div", {
                                                    style: {
                                                        flex: 1,
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        minHeight: 0,
                                                        overflow: "hidden"
                                                    },
                                                    children: [(0, o.jsxs)("div", {
                                                        ref: t0,
                                                        style: {
                                                            position: "relative",
                                                            flex: 1,
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            minHeight: 0,
                                                            maxHeight: "100%",
                                                            overflow: "hidden",
                                                            paddingTop: 12,
                                                            paddingBottom: 6
                                                        },
                                                        onDragOver: ro,
                                                        onDragLeave: rn,
                                                        onDrop: e => {
                                                            ri(e), es({
                                                                isDragging: !1,
                                                                isValid: !1,
                                                                isVideo: !1
                                                            })
                                                        },
                                                        children: [(0, o.jsx)("input", {
                                                            type: "file",
                                                            id: "canvasFileInput",
                                                            onChange: e => {
                                                                let r = e.target.files[0];
                                                                if (r) {
                                                                    if (r.type.startsWith("image/")) {
                                                                        i(null), x(0), g(null);
                                                                        let e = new FileReader;
                                                                        e.onload = e => {
                                                                            let r = e.target.result;
                                                                            r !== eG && (e$(null), eX(r)), eJ(r), ed(r), t(r), e6 || eW(!0)
                                                                        }, e.readAsDataURL(r)
                                                                    } else r.type.startsWith("video/") && (0, B.Vh)(r, e => {
                                                                        i(e), x(0), g(null), t(null), ed(null), e$(null), eJ(null), eW(!1)
                                                                    }, e => {
                                                                        alert(e)
                                                                    })
                                                                }
                                                                e.target.value = ""
                                                            },
                                                            style: {
                                                                display: "none"
                                                            },
                                                            accept: "image/*,video/*"
                                                        }), (0, o.jsx)("div", {
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: ec ? "row" : "column",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                gap: ec ? "2rem" : "0",
                                                                width: "100%",
                                                                height: "100%",
                                                                minHeight: 0,
                                                                overflow: "hidden",
                                                                position: "relative"
                                                            },
                                                            ref: tX,
                                                            children: (0, o.jsxs)("div", {
                                                                style: {
                                                                    backgroundColor: tE.surface,
                                                                    borderRadius: "12px",
                                                                    overflow: "hidden",
                                                                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
                                                                    position: "relative",
                                                                    width: tJ.width,
                                                                    height: tJ.height,
                                                                    minWidth: 0,
                                                                    minHeight: 0,
                                                                    boxSizing: "border-box",
                                                                    flexShrink: 0,
                                                                    flexGrow: 0,
                                                                    transition: "box-shadow 0.3s ease",
                                                                    cursor: "pointer"
                                                                },
                                                                onClick: ra,
                                                                children: [(0, o.jsx)(eT, {
                                                                    animationDuration: w,
                                                                    uploadedVideo: r,
                                                                    videoDuration: C,
                                                                    theme: tE
                                                                }), ea.isDragging && !ea.isValid && (0, o.jsx)("div", {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: 0,
                                                                        left: 0,
                                                                        right: 0,
                                                                        bottom: 0,
                                                                        backgroundColor: "rgba(244, 67, 54, 0.06)",
                                                                        border: `2px dashed ${tE.error||"#f44336"}`,
                                                                        borderRadius: "12px",
                                                                        zIndex: 100,
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        pointerEvents: "none"
                                                                    },
                                                                    children: (0, o.jsxs)("div", {
                                                                        style: {
                                                                            backgroundColor: tE.surface,
                                                                            padding: "20px 32px",
                                                                            borderRadius: "12px",
                                                                            color: tE.text,
                                                                            fontSize: "16px",
                                                                            fontWeight: "500",
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "12px",
                                                                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
                                                                            border: `1px solid ${tE.border}`
                                                                        },
                                                                        children: [(0, o.jsx)("span", {
                                                                            style: {
                                                                                fontSize: "24px"
                                                                            },
                                                                            children: "⚠️"
                                                                        }), (0, o.jsx)("span", {
                                                                            children: ea.isMov ? "MOV not supported — use MP4" : "Only image and video files are allowed"
                                                                        })]
                                                                    })
                                                                }), (0, o.jsx)("div", {
                                                                    className: `aspect-ratio-wrapper${ec?" vertical":""}`,
                                                                    ref: A,
                                                                    style: {
                                                                        overflow: "visible",
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        maxWidth: "none",
                                                                        maxHeight: "none",
                                                                        position: "relative"
                                                                    },
                                                                    children: !tm && !tc && (0, o.jsx)(l.Xz, {
                                                                        shadows: !0,
                                                                        dpr: [1, 1.5],
                                                                        gl: {
                                                                            antialias: !0,
                                                                            preserveDrawingBuffer: !0,
                                                                            shadowMap: {
                                                                                type: d._iA,
                                                                                enabled: !0,
                                                                                size: 512,
                                                                                blurSamples: 8,
                                                                                radius: 4
                                                                            }
                                                                        },
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: 0,
                                                                            left: 0,
                                                                            width: "100%",
                                                                            height: "100%",
                                                                            borderRadius: "12px",
                                                                            cursor: "pointer"
                                                                        },
                                                                        camera: {
                                                                            fov: 35,
                                                                            position: [0, 0, 3.5],
                                                                            near: .1,
                                                                            far: 1e3,
                                                                            aspect: ec ? .5625 : 16 / 9
                                                                        },
                                                                        onClick: ra,
                                                                        onCreated: e => {
                                                                            let {
                                                                                gl: t,
                                                                                camera: r,
                                                                                size: o
                                                                            } = e;
                                                                            t.setClearColor(tE.background, 1), t.toneMapping = d.LY2, t.toneMappingExposure = .7;
                                                                            let n = ec ? .5625 : 16 / 9;
                                                                            r.aspect = n, r.updateProjectionMatrix()
                                                                        },
                                                                        children: (0, o.jsxs)(n.Suspense, {
                                                                            fallback: null,
                                                                            children: [(0, o.jsx)(c.Z, {
                                                                                uploadedImage: e,
                                                                                uploadedVideo: r,
                                                                                videoStartTime: p,
                                                                                videoEndTime: h,
                                                                                currentScene: f,
                                                                                isExporting: v,
                                                                                onDurationChange: k,
                                                                                onVideoDurationChange: E,
                                                                                selectedColor: V,
                                                                                lightColor: q,
                                                                                lightIntensity: Q,
                                                                                onActionsUpdate: eo,
                                                                                cropData: ez,
                                                                                selectedPhoneModel: e0,
                                                                                phoneMaterial: e2,
                                                                                showNotch: e4,
                                                                                computerMaterial: te,
                                                                                selectedComputerModel: e9,
                                                                                fileDragActive: ea.isDragging && ea.isValid
                                                                            }), (0, o.jsx)(eS, {
                                                                                onSceneReady: rd
                                                                            })]
                                                                        })
                                                                    }, "main-canvas")
                                                                }), !tc && (0, o.jsx)("button", {
                                                                    onClick: () => tp(!0),
                                                                    style: {
                                                                        position: "absolute",
                                                                        bottom: "12px",
                                                                        right: "12px",
                                                                        width: "40px",
                                                                        height: "40px",
                                                                        borderRadius: "8px",
                                                                        border: "none",
                                                                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                                                                        color: "white",
                                                                        cursor: "pointer",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        fontSize: "16px",
                                                                        transition: "all 0.3s ease",
                                                                        backdropFilter: "blur(8px)",
                                                                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
                                                                        zIndex: 10
                                                                    },
                                                                    onMouseEnter: e => {
                                                                        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.9)", e.target.style.transform = "scale(1.05)", e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.7)"
                                                                    },
                                                                    onMouseLeave: e => {
                                                                        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)", e.target.style.transform = "scale(1)", e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.6)"
                                                                    },
                                                                    children: (0, o.jsx)("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        children: (0, o.jsx)("path", {
                                                                            d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                                                                        })
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    }), (0, o.jsx)("div", {
                                                        style: {
                                                            flexShrink: 0,
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            padding: "20px 0"
                                                        },
                                                        children: (0, o.jsx)(eN, {
                                                            theme: tE,
                                                            isDarkMode: t_,
                                                            canvasRect: t1,
                                                            isComputerMode: e6,
                                                            onDeviceChange: rl,
                                                            onImageUpload: t3,
                                                            onVideoUpload: t9,
                                                            previewImage: el,
                                                            uploadedVideo: r,
                                                            onCropDataChange: e$,
                                                            onOpenCropTool: rt,
                                                            onOpenTrimTool: rr,
                                                            forceUpdateImage: eK,
                                                            selectedPhoneModel: e0,
                                                            selectedComputerModel: e9,
                                                            availableScenes: S.tV,
                                                            currentScene: f,
                                                            computerScenes: S.wg,
                                                            verticalComputerScenes: S.om,
                                                            isPremium: tR,
                                                            currentUser: tI,
                                                            onPhoneModelChange: e1,
                                                            phoneMaterial: e2,
                                                            onPhoneMaterialChange: e5,
                                                            showNotch: e4,
                                                            onShowNotchChange: e8,
                                                            onComputerModelChange: e7,
                                                            computerMaterial: te,
                                                            onComputerMaterialChange: tt,
                                                            selectedColor: V,
                                                            lightColor: q,
                                                            onColorChange: t8,
                                                            onLightColorChange: Z,
                                                            onColorPickerOpen: e => {
                                                                "background" === e ? ex(!0) : "light" === e && em(!0)
                                                            },
                                                            onLightColorPickerOpen: () => em(!0),
                                                            lightIntensity: Q,
                                                            onLightIntensityChange: Y,
                                                            backgroundVisible: J,
                                                            onBackgroundVisibilityChange: t6,
                                                            forceClosePanel: eu || eh,
                                                            deviceColorPickerOpen: ef,
                                                            onDeviceColorPickerOpenChange: eb,
                                                            animationDuration: w,
                                                            videoDuration: C
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        }), t$ && (0, o.jsx)(G, {
                            theme: tE,
                            currentScene: f,
                            selectedColor: V,
                            lightColor: q,
                            lightIntensity: Q,
                            uploadedImage: e,
                            uploadedVideo: r,
                            isVerticalFormat: ec,
                            animationDuration: w,
                            backgroundVisible: J,
                            onBackgroundVisibilityChange: t6,
                            isPremium: tR,
                            currentUser: tI,
                            spendableCredits: tA,
                            onClose: () => tZ(!1),
                            onExport: e => tU("4k" === e.quality ? "4k" : "HD", e.duration, e.transparentBackground, e.transparentFormat, e.exportName)
                        }), eu && (0, o.jsx)(U.Z, {
                            selectedColor: V,
                            onColorChange: t8,
                            onClose: () => ex(!1),
                            theme: tE,
                            type: "background"
                        }), eh && (0, o.jsx)(U.Z, {
                            selectedColor: q,
                            onColorChange: Z,
                            onClose: () => em(!1),
                            theme: tE,
                            type: "light"
                        }), tL && (0, o.jsx)(O, {
                            theme: tE,
                            exportProgress: M,
                            captureProgress: tQ,
                            encodingProgress: tY,
                            exportPhase: tK,
                            onCancel: tH
                        }), !tm && tB.queue.length > 0 && (0, o.jsx)(ee, {
                            queue: tB.queue,
                            onCancelExport: tH,
                            onDownload: (e, t) => {
                                let r;
                                tO(e, t), (r = e.data ?.uploadedVideo, new Promise(e => {
                                    if (!r) {
                                        e(null);
                                        return
                                    }
                                    let t = document.createElement("video");
                                    t.src = r, t.addEventListener("loadedmetadata", () => {
                                        e(t.duration)
                                    }), t.addEventListener("error", () => {
                                        e(null)
                                    }), setTimeout(() => e(null), 2e3)
                                })).then(t => {
                                    tg({
                                        uploadedType: e.data ?.uploadedVideo ? "video" : e.data ?.uploadedImage ? "image" : "none",
                                        videoDuration: t,
                                        animation: e.data ?.sceneName || f,
                                        isPremium: !!e.data ?.sceneName && !(0, S.q8)(e.data.sceneName),
                                        exportDuration: e.exportDuration ? Math.round(e.exportDuration / 1e3) : null
                                    })
                                });
                                let o = tI ? "true" === localStorage.getItem(`socialShareOfferSeen_${tI.uid}`) : "true" === localStorage.getItem("socialShareOfferSeen_guest");
                                tD <= 2 && o && (ts(e), setTimeout(() => {
                                    ti(!0)
                                }, 5e3))
                            },
                            onRemoveFromQueue: tq,
                            theme: tE,
                            isPremium: tR
                        }), tm && tb && tv ?.exportQueue ?.length > 0 && (0, o.jsx)(et, {
                            queue: tv.exportQueue,
                            onCancel: tv.cancelExport,
                            onDownload: tv.downloadExport,
                            onRemove: tv.removeExport,
                            theme: tE
                        }), (0, o.jsx)(eM, {
                            isOpen: eR,
                            onClose: () => eP(!1),
                            currentScene: f,
                            onSelect: t4,
                            onHover: N,
                            theme: tE,
                            isVerticalFormat: ec,
                            onFormatChange: rs,
                            hoveredScene: z,
                            horizontalScenes: S.jF,
                            verticalScenes: S.u_,
                            computerScenes: S.wg,
                            verticalComputerScenes: S.om,
                            isComputerMode: e6,
                            user: tI,
                            isPremium: tR,
                            isDebug: tT
                        }), eQ && r && (0, o.jsx)(eD.default, {
                            videoUrl: r,
                            theme: tE,
                            initialStart: p,
                            initialEnd: h,
                            selectionMode: "free",
                            onClose: () => eY(!1),
                            onSave: e => {
                                let {
                                    videoStartTime: t,
                                    videoEndTime: r
                                } = e;
                                x(t), g(r), eY(!1)
                            }
                        }), eL && (0, o.jsx)(eI.default, {
                            image: eK,
                            onClose: re,
                            onSave: t7,
                            theme: tE,
                            initialPosition: ez ?.position || eZ,
                            initialScale: ez ?.scale || 1,
                            selectedPhoneModel: e0,
                            isComputerMode: e6,
                            selectedComputerModel: e9
                        }), tn && (0, o.jsx)(en, {
                            theme: tE,
                            onClose: () => ti(!1),
                            exportItem: ta,
                            onGetAccess: () => {
                                ti(!1), _.Z.trackPaywallOpened({
                                    source: "post_download_modal"
                                }), to(!0)
                            },
                            isPremium: tR,
                            onSceneChange: e => {
                                let t = S.u_.includes(e) || S.om.includes(e);
                                t !== ec && ep(t), t4(e)
                            }
                        }), tr && (0, o.jsx)(D, {
                            theme: tE,
                            onClose: () => to(!1)
                        }), tl && (0, o.jsx)(ei, {
                            theme: tE,
                            onClose: () => td(!1)
                        }), (0, o.jsx)(eH, {}), !tm && tc && (0, o.jsx)("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                backdropFilter: "blur(15px)",
                                zIndex: 1e4,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "60px"
                            },
                            onClick: () => tp(!1),
                            children: (0, o.jsxs)("div", {
                                style: {
                                    width: "85vw",
                                    height: "85vh",
                                    maxWidth: "85vw",
                                    maxHeight: "85vh",
                                    backgroundColor: tE.surface,
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8)",
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                onClick: e => e.stopPropagation(),
                                children: [(0, o.jsx)("button", {
                                    onClick: () => tp(!1),
                                    style: {
                                        position: "absolute",
                                        top: "16px",
                                        right: "16px",
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "8px",
                                        border: "none",
                                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                                        color: "white",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "16px",
                                        transition: "all 0.3s ease",
                                        backdropFilter: "blur(8px)",
                                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
                                        zIndex: 10
                                    },
                                    onMouseEnter: e => {
                                        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.9)", e.target.style.transform = "scale(1.05)"
                                    },
                                    onMouseLeave: e => {
                                        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)", e.target.style.transform = "scale(1)"
                                    },
                                    children: (0, o.jsxs)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [(0, o.jsx)("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }), (0, o.jsx)("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        })]
                                    })
                                }), (0, o.jsx)("div", {
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            width: ec ? "33.75%" : "100%",
                                            maxWidth: ec ? "540px" : "100%",
                                            aspectRatio: ec ? "9/16" : "16/9",
                                            position: "relative",
                                            backgroundColor: tE.surface,
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6)"
                                        },
                                        children: (0, o.jsx)(l.Xz, {
                                            shadows: !0,
                                            dpr: [1, 1.5],
                                            gl: {
                                                antialias: !0,
                                                preserveDrawingBuffer: !0,
                                                shadowMap: {
                                                    type: d._iA,
                                                    enabled: !0,
                                                    size: 512,
                                                    blurSamples: 8,
                                                    radius: 4
                                                }
                                            },
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "12px"
                                            },
                                            camera: {
                                                fov: 35,
                                                position: [0, 0, 3.5],
                                                near: .1,
                                                far: 1e3,
                                                aspect: ec ? .5625 : 16 / 9
                                            },
                                            onCreated: e => {
                                                let {
                                                    gl: t,
                                                    camera: r,
                                                    size: o
                                                } = e;
                                                t.setClearColor(tE.background, 1), t.toneMapping = d.LY2, t.toneMappingExposure = .7, r.aspect = ec ? .5625 : 16 / 9, r.updateProjectionMatrix()
                                            },
                                            children: (0, o.jsxs)(n.Suspense, {
                                                fallback: null,
                                                children: [(0, o.jsx)(c.Z, {
                                                    uploadedImage: e,
                                                    uploadedVideo: r,
                                                    videoStartTime: p,
                                                    videoEndTime: h,
                                                    currentScene: f,
                                                    isExporting: v,
                                                    onDurationChange: k,
                                                    onVideoDurationChange: E,
                                                    selectedColor: V,
                                                    lightColor: q,
                                                    lightIntensity: Q,
                                                    onActionsUpdate: eo,
                                                    cropData: ez,
                                                    selectedPhoneModel: e0,
                                                    phoneMaterial: e2,
                                                    showNotch: e4,
                                                    computerMaterial: te,
                                                    selectedComputerModel: e9
                                                }), (0, o.jsx)(eS, {
                                                    onSceneReady: rd
                                                })]
                                            })
                                        }, "cinema-canvas")
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        6862: function(e, t, r) {
            "use strict";
            var o = r(5893);

            function n(e) {
                let {
                    onClick: t,
                    theme: r,
                    compact: n = !1
                } = e, i = n ? "24px" : "36px";
                return (0, o.jsx)("div", {
                    style: {
                        width: i,
                        height: i,
                        borderRadius: "50%",
                        position: "relative",
                        overflow: "hidden",
                        border: `${n?"2px":"3px"} solid ${r.surfaceAlt}`,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
                    },
                    onClick: t,
                    children: (0, o.jsx)("div", {
                        style: {
                            position: "absolute",
                            width: "200%",
                            height: "200%",
                            top: "-50%",
                            left: "-50%",
                            background: "radial-gradient(circle at center, white 0%, transparent 30%), conic-gradient(from 90deg, red, yellow, lime, aqua, blue, magenta, red)",
                            transition: "background 0.2s ease"
                        }
                    })
                })
            }
            r(7294), t.Z = function(e) {
                let {
                    selectedColor: t,
                    onColorPickerOpen: r,
                    onColorChange: i,
                    theme: a,
                    label: s,
                    compact: l = !1
                } = e;
                return (0, o.jsx)("div", {
                    style: {
                        position: "relative",
                        height: l ? "auto" : "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: (0, o.jsxs)("div", {
                        style: {
                            backgroundColor: l ? "transparent" : a.surface,
                            borderRadius: l ? "8px" : "20px",
                            padding: l ? "8px 12px" : "12px 20px",
                            display: "flex",
                            alignItems: "center",
                            gap: l ? "8px" : "16px",
                            boxShadow: l ? "none" : "0 4px 20px rgba(0, 0, 0, 0.2)",
                            border: l ? "none" : `2px solid ${a.surfaceAlt}`,
                            transform: l ? "none" : "scale(0.9)"
                        },
                        children: [!l && (0, o.jsxs)("div", {
                            style: {
                                color: a.textSecondary,
                                fontSize: "18px",
                                fontWeight: "600",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                letterSpacing: "0.02em",
                                opacity: .9
                            },
                            children: [(0, o.jsx)("span", {
                                style: {
                                    fontSize: "18px",
                                    color: t,
                                    transition: "color 0.3s ease"
                                },
                                children: "Light" === s ? "\uD83D\uDCA1" : "\uD83C\uDFA8"
                            }), s]
                        }), !l && (0, o.jsx)("div", {
                            style: {
                                width: "1px",
                                height: "24px",
                                backgroundColor: a.surfaceAlt,
                                margin: "0 4px"
                            }
                        }), (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                            },
                            children: [(0, o.jsx)("button", {
                                type: "button",
                                onClick: () => i ?.(t),
                                style: {
                                    width: l ? "24px" : "36px",
                                    height: l ? "24px" : "36px",
                                    borderRadius: "50%",
                                    backgroundColor: t,
                                    border: `${l?"2px":"3px"} solid ${a.surfaceAlt}`,
                                    cursor: "default",
                                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                                    padding: 0
                                },
                                "aria-label": "Current color"
                            }), (0, o.jsx)(n, {
                                onClick: r,
                                theme: a,
                                compact: l
                            })]
                        })]
                    })
                })
            }
        },
        2467: function(e, t, r) {
            "use strict";
            var o = r(5893),
                n = r(7294),
                i = r(3935),
                a = r(5651),
                s = r(788),
                l = r(9607),
                d = r(3734),
                c = r(8354),
                p = r(8259),
                u = r(92);
            t.Z = function(e) {
                let {
                    theme: t,
                    selectedColor: r,
                    onColorChange: x,
                    onColorPreview: h,
                    onClose: g,
                    onBack: m,
                    type: f = "background",
                    embed: b = !1
                } = e, y = "light" === f ? l.UP : "device" === f ? l.IK : l.K5, v = "device" === f ? "Device color" : "light" === f ? "Light color" : "Background color", {
                    pickColor: j,
                    isSupported: w,
                    isPicking: k
                } = (0, d.s)(), {
                    currentUser: C
                } = (0, p.a)(), {
                    savedColors: S
                } = (0, c.M)(), [E, _] = (0, n.useState)(!1), [M, I] = (0, n.useState)(null), [D, A] = (0, n.useState)(r), R = (0, n.useRef)(r), P = (0, n.useRef)(!1), T = (0, n.useRef)(x), z = (0, n.useRef)(h), N = (0, n.useRef)(g);
                (0, n.useEffect)(() => {
                    T.current = x
                }, [x]), (0, n.useEffect)(() => {
                    z.current = h
                }, [h]), (0, n.useEffect)(() => {
                    N.current = g
                }, [g]), (0, n.useEffect)(() => {
                    P.current || (A(r), R.current = r)
                }, [r]);
                let $ = (0, n.useCallback)(e => {
                        R.current = e, A(e), z.current ?.(e), T.current ?.(e)
                    }, []),
                    L = (0, n.useCallback)(e => {
                        R.current = e, A(e), z.current ?.(e)
                    }, []),
                    W = (0, n.useCallback)(() => {
                        P.current && (P.current = !1, T.current ?.(R.current))
                    }, []);
                (0, n.useEffect)(() => (window.addEventListener("pointerup", W), window.addEventListener("pointercancel", W), () => {
                    window.removeEventListener("pointerup", W), window.removeEventListener("pointercancel", W), P.current && (P.current = !1, T.current ?.(R.current))
                }), [W]);
                let F = (0, n.useCallback)(() => {
                        P.current && (P.current = !1), T.current ?.(R.current), N.current ?.()
                    }, []),
                    B = async () => {
                        if (C) try {
                            _(!0), await (0, u.vV)(C.uid, D)
                        } catch (e) {
                            console.error("Error saving color:", e), alert("Failed to save color. Please try again.")
                        } finally {
                            _(!1)
                        }
                    },
                    V = async (e, t) => {
                        if (e.stopPropagation(), C) try {
                            await (0, u.yv)(C.uid, t)
                        } catch (e) {
                            console.error("Error deleting color:", e), alert("Failed to delete color. Please try again.")
                        }
                    },
                    U = S.includes(String(D || "").toUpperCase()),
                    H = "rgba(255, 255, 255, 0.08)",
                    O = b ? 28 : 32,
                    q = b ? {
                        color: t.textSecondary,
                        fontSize: 10,
                        fontWeight: 600,
                        opacity: .95,
                        marginBottom: 6,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        textAlign: "left"
                    } : {
                        color: t.textSecondary,
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: "center"
                    },
                    Z = (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: b ? 10 : 0,
                                marginBottom: b ? 10 : 8,
                                flexDirection: b ? "row" : "column",
                                alignItems: b ? "center" : "stretch"
                            },
                            children: b ? (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("button", {
                                    type: "button",
                                    onClick: m,
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                        padding: "6px 10px",
                                        borderRadius: 8,
                                        border: `1px solid ${H}`,
                                        background: "rgba(255,255,255,0.06)",
                                        color: t.text,
                                        cursor: "pointer",
                                        fontSize: 12
                                    },
                                    "aria-label": "Back",
                                    children: "← Back"
                                }), (0, o.jsx)("span", {
                                    style: {
                                        color: t.text,
                                        fontSize: 12,
                                        fontWeight: 600,
                                        opacity: .9
                                    },
                                    children: v
                                })]
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        marginBottom: 8
                                    },
                                    children: (0, o.jsx)("button", {
                                        type: "button",
                                        onClick: F,
                                        style: {
                                            width: 28,
                                            height: 28,
                                            borderRadius: 8,
                                            border: "1px solid rgba(255,255,255,0.12)",
                                            background: "rgba(255,255,255,0.06)",
                                            color: t.text,
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 18,
                                            lineHeight: 1,
                                            padding: 0
                                        },
                                        "aria-label": "Close",
                                        children: "\xd7"
                                    })
                                }), (0, o.jsx)("div", {
                                    style: {
                                        marginBottom: 16,
                                        color: t.text,
                                        fontSize: 14,
                                        fontWeight: 600
                                    },
                                    children: v
                                })]
                            })
                        }), (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: b ? "stretch" : "center",
                                gap: b ? 10 : 16
                            },
                            children: [(0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: b ? 6 : 8,
                                    width: "100%"
                                },
                                children: [(0, o.jsx)("span", {
                                    style: q,
                                    children: "Quick Colors"
                                }), (0, o.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        gap: b ? 6 : 8,
                                        justifyContent: b ? "flex-start" : "center",
                                        flexWrap: "wrap"
                                    },
                                    children: y.map(e => (0, o.jsx)("button", {
                                        onClick: () => $(e),
                                        style: {
                                            width: O,
                                            height: O,
                                            borderRadius: "50%",
                                            backgroundColor: e,
                                            border: D === e ? `2px solid ${t.primary||"#2196f3"}` : `1px solid ${H}`,
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            transform: D === e ? "scale(1.05)" : "scale(1)",
                                            boxShadow: D === e ? `0 0 8px ${t.primary||"rgba(33, 150, 243, 0.4)"}` : "none"
                                        }
                                    }, e))
                                })]
                            }), C && S.length > 0 && (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: b ? 6 : 8,
                                    width: "100%"
                                },
                                children: [(0, o.jsx)("span", {
                                    style: q,
                                    children: "PBR Color Presets"
                                }), (0, o.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        gap: b ? 6 : 8,
                                        justifyContent: b ? "flex-start" : "center",
                                        flexWrap: "wrap"
                                    },
                                    children: S.map(e => (0, o.jsxs)("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        onMouseEnter: () => I(e),
                                        onMouseLeave: () => I(null),
                                        children: [(0, o.jsx)("button", {
                                            onClick: () => $(e),
                                            style: {
                                                width: O,
                                                height: O,
                                                borderRadius: "50%",
                                                backgroundColor: e,
                                                border: String(D || "").toUpperCase() === e ? `2px solid ${t.primary||"#2196f3"}` : `1px solid ${H}`,
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                                transform: String(D || "").toUpperCase() === e ? "scale(1.05)" : "scale(1)",
                                                boxShadow: String(D || "").toUpperCase() === e ? `0 0 8px ${t.primary||"rgba(33, 150, 243, 0.4)"}` : "none"
                                            }
                                        }), M === e && (0, o.jsx)("button", {
                                            onClick: t => V(t, e),
                                            style: {
                                                position: "absolute",
                                                top: -4,
                                                right: -4,
                                                width: 14,
                                                height: 14,
                                                borderRadius: "50%",
                                                backgroundColor: "#ff4444",
                                                border: "none",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: 0
                                            },
                                            title: "Delete color",
                                            children: (0, o.jsx)(s.ZkW, {
                                                size: 8,
                                                color: "white"
                                            })
                                        })]
                                    }, e))
                                })]
                            }), (0, o.jsx)("div", {
                                onPointerDown: () => {
                                    P.current = !0
                                },
                                style: {
                                    width: b ? 200 : 250,
                                    ...b ? {
                                        alignSelf: "flex-start"
                                    } : {}
                                },
                                children: (0, o.jsx)(a.gW, {
                                    color: D,
                                    onChange: L,
                                    style: {
                                        width: "100%",
                                        height: b ? 140 : 200
                                    }
                                })
                            }), (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: b ? 8 : 12,
                                    padding: b ? "4px 0" : "8px 0",
                                    width: "100%",
                                    justifyContent: b ? "flex-start" : "center"
                                },
                                children: [(0, o.jsx)("div", {
                                    style: {
                                        width: b ? 20 : 24,
                                        height: b ? 20 : 24,
                                        borderRadius: 4,
                                        backgroundColor: D,
                                        border: `1px solid ${H}`,
                                        flexShrink: 0
                                    }
                                }), (0, o.jsx)("input", {
                                    type: "text",
                                    value: D,
                                    onChange: e => $(e.target.value),
                                    style: {
                                        background: "transparent",
                                        border: "none",
                                        color: t.text,
                                        fontSize: b ? 12 : 14,
                                        fontFamily: "monospace",
                                        outline: "none",
                                        width: b ? 64 : 70
                                    }
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        gap: 6,
                                        alignItems: "center"
                                    },
                                    children: [w && (0, o.jsx)("button", {
                                        onClick: () => {
                                            j(e => {
                                                $(e)
                                            }, e => {
                                                console.error("Eye-dropper error:", e)
                                            })
                                        },
                                        disabled: k,
                                        title: "Pick color from screen",
                                        style: {
                                            background: "rgba(255,255,255,0.08)",
                                            border: `1px solid ${H}`,
                                            borderRadius: 6,
                                            padding: b ? 4 : 6,
                                            cursor: k ? "wait" : "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            opacity: k ? .6 : 1
                                        },
                                        children: (0, o.jsx)(s.iM3, {
                                            size: b ? 14 : 18,
                                            color: t.text
                                        })
                                    }), C && (0, o.jsx)("button", {
                                        onClick: B,
                                        disabled: E || U,
                                        title: U ? "Color already saved" : "Save color",
                                        style: {
                                            background: U ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
                                            border: `1px solid ${H}`,
                                            borderRadius: 6,
                                            padding: b ? 4 : 6,
                                            cursor: U ? "not-allowed" : "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            opacity: U ? .5 : 1
                                        },
                                        children: (0, o.jsx)(s.tfk, {
                                            size: b ? 14 : 18,
                                            color: U ? t.textSecondary : t.text
                                        })
                                    })]
                                })]
                            })]
                        })]
                    });
                if (b) return (0, o.jsx)("div", {
                    style: {
                        width: "100%",
                        minHeight: 0,
                        overflowY: "auto",
                        padding: "12px 14px",
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: Z
                });
                let Q = (0, o.jsxs)("div", {
                    style: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1e4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        paddingRight: 24,
                        pointerEvents: "none",
                        background: "transparent"
                    },
                    children: [(0, o.jsx)("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            pointerEvents: "auto"
                        },
                        onClick: F,
                        "aria-hidden": !0
                    }), (0, o.jsx)("div", {
                        style: {
                            position: "relative",
                            width: "auto",
                            minWidth: 280,
                            maxWidth: 320,
                            height: "auto",
                            background: "rgba(22, 22, 24, 0.38)",
                            backdropFilter: "blur(80px) saturate(200%)",
                            WebkitBackdropFilter: "blur(80px) saturate(200%)",
                            border: `1px solid ${H}`,
                            borderRadius: 20,
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255,255,255,0.03) inset",
                            padding: 20,
                            overflowY: "auto",
                            pointerEvents: "auto"
                        },
                        onClick: e => e.stopPropagation(),
                        children: Z
                    })]
                });
                return "undefined" != typeof document && document.body ? i.createPortal(Q, document.body) : Q
            }
        },
        6040: function(e, t, r) {
            "use strict";
            var o = r(5893),
                n = r(7294),
                i = r(9906),
                a = r(3935),
                s = r(9131),
                l = r(4250),
                d = r(5651),
                c = r(3734),
                p = r(8354),
                u = r(8259);
            r(92);
            var x = r(8813),
                h = r(2467),
                g = r(2955);
            let m = `
  .computer-settings {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    width: 200px;
    pointer-events: auto;
  }

  .computer-settings:hover {
    background: rgba(0, 0, 0, 0.4);
    transform: translateY(-1px);
  }

  .settings-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 2px 0;
    min-height: 10px;
  }

  .settings-title {
    color: var(--text);
    font-size: 14px;
    font-weight: 600;
    opacity: 0.8;
    line-height: 1;
    display: flex;
    align-items: center;
  }

  .toggle-icon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .toggle-icon.collapsed {
    transform: rotate(-90deg);
  }

  .settings-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .settings-content.collapsed {
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  .settings-section {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .section-title {
    color: var(--text);
    font-size: 12px;
    font-weight: 500;
    opacity: 0.6;
    margin-bottom: 2px;
  }

  .model-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .model-option {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 13px;
    font-weight: 500;
    color: var(--text);
    opacity: 0.8;
  }

  .model-option:hover {
    background: rgba(255, 255, 255, 0.05);
    opacity: 1;
  }

  .model-option.selected {
    background: rgba(255, 255, 255, 0.1);
    opacity: 1;
    font-weight: 600;
  }

  .material-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .material-option {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 6px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .material-option:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .material-option.selected {
    background: rgba(255, 255, 255, 0.1);
  }

  .color-circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .material-option.selected .color-circle {
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  .material-label {
    color: var(--text);
    font-size: 13px;
    font-weight: 500;
    opacity: 0.8;
  }

  .material-option.selected .material-label {
    opacity: 1;
    font-weight: 600;
  }

  .custom-color-circle {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .custom-color-circle::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: radial-gradient(circle at center, white 0%, transparent 30%), 
                conic-gradient(from 90deg, red, yellow, lime, aqua, blue, magenta, red);
    transition: background 0.2s ease;
  }

  .material-option.selected .custom-color-circle {
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  .color-picker-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    pointer-events: auto;
  }

  .color-picker-content {
    background-color: var(--surface);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border);
    pointer-events: auto;
  }

  .react-colorful {
    width: 250px !important;
    height: 200px !important;
  }

  .react-colorful__saturation {
    border-radius: 8px 8px 0 0 !important;
  }

  .react-colorful__hue {
    height: 24px !important;
    border-radius: 0 0 8px 8px !important;
  }

  .react-colorful__pointer {
    width: 20px !important;
    height: 20px !important;
  }
`;
            t.Z = function(e) {
                let {
                    selectedModel: t,
                    onModelChange: r,
                    onMaterialChange: f,
                    onBodyColorChange: b,
                    onBodyColorPreview: y,
                    theme: v,
                    embedded: j = !1,
                    onColorPickerOpenChange: w,
                    bodyColor: k
                } = e, [C, S] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    w ?.(C)
                }, [C, w]);
                let [E, _] = (0, n.useState)("dark"), [M, I] = (0, n.useState)(() => (0, g.i)(k)), [D, A] = (0, n.useState)(65), R = (0, n.useCallback)((e, t) => {
                    let r = (0, x.nU)(t);
                    return new l.EJi({
                        color: e,
                        ...r
                    })
                }, []), P = (0, n.useCallback)(e => {
                    if (b) {
                        b(e);
                        return
                    }
                    f && f(R(e, D / 100))
                }, [b, f, D, R]), {
                    scheduleCommit: T,
                    flushPending: z
                } = (0, g.l)(k, P);
                (0, n.useEffect)(() => {
                    let e = (0, g.i)(k);
                    I(t => t.toUpperCase() === e.toUpperCase() ? t : e)
                }, [k]);
                let N = () => {
                        w ?.(!0), S(!0)
                    },
                    $ = () => {
                        z(), S(!1), w ?.(!1)
                    },
                    [L, W] = (0, n.useState)(!1),
                    {
                        scene: F
                    } = (0, s.L)((0, i.Cc)("materials/Dark.glb"), void 0, void 0, i.Zn),
                    {
                        scene: B
                    } = (0, s.L)((0, i.Cc)("materials/Bright.glb"), void 0, void 0, i.Zn),
                    {
                        pickColor: V,
                        isSupported: U,
                        isPicking: H
                    } = (0, c.s)(),
                    {
                        currentUser: O
                    } = (0, u.a)(),
                    {
                        savedColors: q
                    } = (0, p.M)(),
                    [Z, Q] = (0, n.useState)(!1),
                    [Y, K] = (0, n.useState)(null),
                    J = e => {
                        _(e), $();
                        let t = D / 100,
                            r = M;
                        "dark" === e && F ? F.traverse(e => {
                            e.isMesh && e.material.color && I(r = "#" + e.material.color.getHexString())
                        }) : "bright" === e && B && B.traverse(e => {
                            e.isMesh && e.material.color && I(r = "#" + e.material.color.getHexString())
                        }), f(R(r, t))
                    },
                    G = e => {
                        I(e), T(e)
                    },
                    X = e => {
                        let t = Math.round(Number(e));
                        A(t), f(R(M, t / 100))
                    };
                q.includes(M.toUpperCase());
                let ee = (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(d.gW, {
                        color: M,
                        onChange: G,
                        style: {
                            width: 250,
                            height: 200
                        }
                    }), (0, o.jsx)("button", {
                        onClick: $,
                        style: {
                            marginTop: 12,
                            width: "100%",
                            padding: "8px",
                            borderRadius: 6,
                            border: `1px solid ${v.surfaceAlt}`,
                            background: v.accent,
                            color: "white",
                            cursor: "pointer",
                            fontSize: 13,
                            fontWeight: 500
                        },
                        children: "Done"
                    })]
                });
                if (j && C) return (0, o.jsx)(h.Z, {
                    theme: v,
                    type: "device",
                    selectedColor: M,
                    onColorPreview: e => {
                        I(e), y ?.(e)
                    },
                    onColorChange: G,
                    onBack: $,
                    embed: !0
                });
                let et = (0, o.jsxs)("div", {
                    style: j ? {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12
                    } : void 0,
                    className: j ? "" : `settings-content ${L?"collapsed":""}`,
                    children: [(0, o.jsxs)("div", {
                        className: "settings-section",
                        style: {
                            paddingTop: 8
                        },
                        children: [(0, o.jsx)("div", {
                            className: "section-title",
                            children: "Device"
                        }), (0, o.jsxs)("div", {
                            className: "model-options",
                            children: [(0, o.jsxs)("div", {
                                className: `model-option ${"MacbookPro"===t?"selected":""}`,
                                onClick: e => {
                                    e.stopPropagation(), r("MacbookPro")
                                },
                                style: {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10
                                },
                                children: [(0, o.jsxs)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    style: {
                                        flexShrink: 0
                                    },
                                    children: [(0, o.jsx)("rect", {
                                        x: "2",
                                        y: "3",
                                        width: "20",
                                        height: "14",
                                        rx: "2",
                                        ry: "2"
                                    }), (0, o.jsx)("line", {
                                        x1: "8",
                                        y1: "21",
                                        x2: "16",
                                        y2: "21"
                                    }), (0, o.jsx)("line", {
                                        x1: "12",
                                        y1: "17",
                                        x2: "12",
                                        y2: "21"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start"
                                    },
                                    children: [(0, o.jsx)("div", {
                                        children: "MacBook Pro"
                                    }), (0, o.jsx)("div", {
                                        style: {
                                            fontSize: "10px",
                                            opacity: .85,
                                            marginTop: 2
                                        },
                                        children: "3024\xd71964 (16:10)"
                                    })]
                                })]
                            }), (0, o.jsxs)("div", {
                                className: `model-option ${"MacbookPro1080"===t?"selected":""}`,
                                onClick: e => {
                                    e.stopPropagation(), r("MacbookPro1080")
                                },
                                style: {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10
                                },
                                children: [(0, o.jsxs)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    style: {
                                        flexShrink: 0
                                    },
                                    children: [(0, o.jsx)("rect", {
                                        x: "2",
                                        y: "3",
                                        width: "20",
                                        height: "14",
                                        rx: "2",
                                        ry: "2"
                                    }), (0, o.jsx)("line", {
                                        x1: "8",
                                        y1: "21",
                                        x2: "16",
                                        y2: "21"
                                    }), (0, o.jsx)("line", {
                                        x1: "12",
                                        y1: "17",
                                        x2: "12",
                                        y2: "21"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start"
                                    },
                                    children: [(0, o.jsx)("div", {
                                        children: "MacBook Pro 1080"
                                    }), (0, o.jsx)("div", {
                                        style: {
                                            fontSize: "10px",
                                            opacity: .85,
                                            marginTop: 2
                                        },
                                        children: "2560\xd71440 (16:9)"
                                    })]
                                })]
                            }), (0, o.jsxs)("div", {
                                className: `model-option ${"ComputerScreenOnly"===t?"selected":""}`,
                                onClick: e => {
                                    e.stopPropagation(), r("ComputerScreenOnly")
                                },
                                style: {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10
                                },
                                children: [(0, o.jsx)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    style: {
                                        flexShrink: 0
                                    },
                                    children: (0, o.jsx)("rect", {
                                        x: "2",
                                        y: "3",
                                        width: "20",
                                        height: "14",
                                        rx: "2",
                                        ry: "2"
                                    })
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start"
                                    },
                                    children: [(0, o.jsx)("div", {
                                        children: "Screen only"
                                    }), (0, o.jsx)("div", {
                                        style: {
                                            fontSize: "10px",
                                            opacity: .85,
                                            marginTop: 2
                                        },
                                        children: "3024\xd71964 (16:10)"
                                    })]
                                })]
                            })]
                        })]
                    }), (0, o.jsxs)("div", {
                        className: "settings-section",
                        children: [(0, o.jsx)("div", {
                            className: "section-title",
                            children: "Color"
                        }), (0, o.jsxs)("div", {
                            className: "material-options",
                            children: [(0, o.jsxs)("div", {
                                className: `material-option ${"dark"===E?"selected":""}`,
                                onClick: e => {
                                    e.stopPropagation(), J("dark")
                                },
                                children: [(0, o.jsx)("div", {
                                    className: "color-circle",
                                    style: {
                                        backgroundColor: "#1D1D1F"
                                    }
                                }), (0, o.jsx)("span", {
                                    className: "material-label",
                                    children: "Obsidian Titanium"
                                })]
                            }), (0, o.jsxs)("div", {
                                className: `material-option ${"bright"===E?"selected":""}`,
                                onClick: e => {
                                    e.stopPropagation(), J("bright")
                                },
                                children: [(0, o.jsx)("div", {
                                    className: "color-circle",
                                    style: {
                                        backgroundColor: "#F5F5F7"
                                    }
                                }), (0, o.jsx)("span", {
                                    className: "material-label",
                                    children: "Natural Titanium"
                                })]
                            }), (0, o.jsxs)("div", {
                                className: `material-option ${"custom"===E?"selected":""}`,
                                onClick: e => {
                                    e.stopPropagation(), _("custom"), C ? $() : N()
                                },
                                title: "Custom color",
                                children: ["custom" === E ? (0, o.jsx)("div", {
                                    className: "color-circle",
                                    style: {
                                        backgroundColor: M
                                    }
                                }) : (0, o.jsx)("div", {
                                    className: "custom-color-circle"
                                }), (0, o.jsx)("span", {
                                    className: "material-label",
                                    children: "Custom"
                                })]
                            })]
                        })]
                    }), (0, o.jsxs)("div", {
                        className: "settings-section",
                        children: [(0, o.jsx)("div", {
                            className: "section-title",
                            children: "Reflectance"
                        }), (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8
                            },
                            children: [(0, o.jsx)("input", {
                                type: "range",
                                min: 0,
                                max: 100,
                                value: D,
                                onChange: e => X(e.target.value),
                                style: {
                                    flex: 1,
                                    accentColor: v.primary || v.text
                                }
                            }), (0, o.jsxs)("span", {
                                style: {
                                    fontSize: "12px",
                                    color: v.textSecondary,
                                    minWidth: 28
                                },
                                children: [D, "%"]
                            })]
                        })]
                    })]
                });
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("style", {
                        children: m
                    }), j ? (0, o.jsx)("div", {
                        onClick: e => e.stopPropagation(),
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 12
                        },
                        children: et
                    }) : (0, o.jsxs)("div", {
                        className: "computer-settings",
                        style: {
                            "--text": v.text,
                            "--surface": v.surface,
                            "--border": v.surfaceAlt
                        },
                        onClick: e => e.stopPropagation(),
                        children: [(0, o.jsxs)("div", {
                            className: "settings-header",
                            onClick: e => {
                                e.stopPropagation(), W(!L)
                            },
                            children: [(0, o.jsx)("div", {
                                className: "settings-title",
                                children: "\uD83D\uDCBB Computer"
                            }), (0, o.jsx)("div", {
                                className: `toggle-icon ${L?"collapsed":""}`,
                                children: "▼"
                            })]
                        }), et]
                    }), C && "undefined" != typeof document && document.body && a.createPortal((0, o.jsxs)("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1e4,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            paddingRight: 24,
                            pointerEvents: "none"
                        },
                        children: [(0, o.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "transparent",
                                pointerEvents: "auto"
                            },
                            onClick: () => S(!1),
                            "aria-hidden": !0
                        }), (0, o.jsxs)("div", {
                            className: "color-picker-content",
                            onClick: e => e.stopPropagation(),
                            style: {
                                position: "relative",
                                width: "auto",
                                minWidth: 280,
                                maxWidth: 320,
                                height: "auto",
                                background: "rgba(22, 22, 24, 0.38)",
                                backdropFilter: "blur(80px) saturate(200%)",
                                WebkitBackdropFilter: "blur(80px) saturate(200%)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                borderRadius: 20,
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255,255,255,0.03) inset",
                                padding: 20,
                                overflowY: "auto",
                                pointerEvents: "auto"
                            },
                            children: [(0, o.jsx)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginBottom: "4px"
                                },
                                children: (0, o.jsx)("button", {
                                    type: "button",
                                    onClick: $,
                                    style: {
                                        width: 28,
                                        height: 28,
                                        borderRadius: 8,
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        background: "rgba(255,255,255,0.06)",
                                        color: v.text,
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "18px",
                                        lineHeight: 1,
                                        padding: 0
                                    },
                                    "aria-label": "Close",
                                    children: "\xd7"
                                })
                            }), ee]
                        })]
                    }), document.body)]
                })
            }
        },
        7448: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(5893),
                n = r(7294),
                i = r(8813);
            let a = `
  .image-crop-slider {
    flex: 1;
    height: 6px;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
  }
  
  .image-crop-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #E8797A;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .image-crop-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #E8797A;
    cursor: pointer;
    border: none;
  }
`;
            t.default = function(e) {
                let {
                    image: t,
                    onClose: r,
                    onSave: s,
                    theme: l,
                    initialPosition: d = {
                        x: 0,
                        y: 0
                    },
                    initialScale: c = 1,
                    selectedPhoneModel: p = "iPhone",
                    isComputerMode: u = !1,
                    selectedComputerModel: x = "MacbookPro"
                } = e, [h, g] = (0, n.useState)(d), [m, f] = (0, n.useState)(c), [b, y] = (0, n.useState)(!1), [v, j] = (0, n.useState)({
                    x: 0,
                    y: 0
                }), [w, k] = (0, n.useState)({
                    x: !1,
                    y: !1,
                    left: !1,
                    right: !1,
                    top: !1,
                    bottom: !1
                }), C = (0, n.useRef)(null), S = (0, n.useRef)(null), E = (0, n.useRef)(null), _ = (0, n.useRef)(!1), M = (0, n.useRef)(!1), I = (0, n.useRef)(0);
                (0, n.useEffect)(() => {
                    _.current = !1, M.current = !1, I.current = Date.now()
                }, []);
                let [D, A] = (0, n.useState)({
                    width: 0,
                    height: 0
                }), R = Math.min(D.width, D.height) * (u ? .02 : "Samsung" === p ? .06 : .12), P = e => {
                    let t = Math.log(.1);
                    return Math.exp(t + e * (Math.log(5) - t))
                };
                (0, n.useEffect)(() => {
                    g(d), f(c)
                }, [t]), (0, n.useEffect)(() => {
                    let e = e => {
                        "=" === e.key || "+" === e.key ? (e.preventDefault(), f(e => Math.max(.1, Math.min(5, e + .1)))) : "-" === e.key && (e.preventDefault(), f(e => Math.max(.1, Math.min(5, e - .1))))
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, []), (0, n.useEffect)(() => {
                    let e = () => {
                        if (C.current) {
                            let e;
                            let t = C.current.clientHeight;
                            if (u) {
                                let t = i.cg[x] || i.cg.MacbookPro;
                                e = t.width / t.height
                            } else e = 9 / 19.5;
                            let r = Math.floor(Math.floor(.9 * t));
                            A({
                                width: Math.floor(r * e),
                                height: r
                            })
                        }
                    };
                    e();
                    let t = setTimeout(e, 100),
                        r = new ResizeObserver(() => {
                            e()
                        });
                    return C.current && r.observe(C.current), () => {
                        clearTimeout(t), r.disconnect()
                    }
                }, [u, x, t]);
                let T = () => {
                        y(!1), k({
                            x: !1,
                            y: !1,
                            left: !1,
                            right: !1,
                            top: !1,
                            bottom: !1
                        })
                    },
                    z = e => {
                        S.current && E.current && f(Math.max(.1, Math.min(5, m + e)))
                    };
                return (0, n.useEffect)(() => {
                    let e = document.createElement("style");
                    return e.textContent = a, document.head.appendChild(e), () => {
                        document.head.removeChild(e)
                    }
                }, []), (0, o.jsxs)("div", {
                    style: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2147483647,
                        pointerEvents: "none"
                    },
                    children: [(0, o.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            zIndex: 0,
                            pointerEvents: "auto"
                        },
                        onPointerDown: e => {
                            e.target === e.currentTarget && (_.current = !0, M.current = !1)
                        },
                        onClick: e => {
                            if (e.target !== e.currentTarget || !_.current || M.current || Date.now() - I.current < 400) {
                                _.current = !1, M.current = !1;
                                return
                            }
                            r(), _.current = !1, M.current = !1
                        }
                    }), (0, o.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1,
                            pointerEvents: "none"
                        },
                        children: (0, o.jsxs)("div", {
                            style: {
                                pointerEvents: "auto",
                                transform: "translateZ(0)",
                                backgroundColor: l.surface,
                                borderRadius: "16px",
                                padding: "24px",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                                border: `1px solid ${l.border}`,
                                width: "min(90vw, 800px)",
                                height: "min(90vh, 600px)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px"
                            },
                            onPointerDownCapture: () => {
                                M.current = !0
                            },
                            onClick: e => e.stopPropagation(),
                            children: [(0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    paddingBottom: "8px",
                                    borderBottom: `1px solid ${l.border}`
                                },
                                children: [(0, o.jsxs)("div", {
                                    children: [(0, o.jsx)("span", {
                                        style: {
                                            color: l.text,
                                            fontSize: "20px",
                                            fontWeight: "600",
                                            letterSpacing: "-0.02em"
                                        },
                                        children: "Position & Scale Image"
                                    }), (0, o.jsx)("div", {
                                        style: {
                                            color: l.textSecondary,
                                            fontSize: "12px",
                                            marginTop: "2px"
                                        },
                                        children: "Drag to move • Scroll to zoom • +/- keys to zoom"
                                    })]
                                }), (0, o.jsx)("button", {
                                    onClick: r,
                                    style: {
                                        background: "none",
                                        border: "none",
                                        color: l.textSecondary,
                                        cursor: "pointer",
                                        padding: "8px",
                                        borderRadius: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.2s ease"
                                    },
                                    children: "✕"
                                })]
                            }), (0, o.jsxs)("div", {
                                ref: C,
                                style: {
                                    flex: 1,
                                    position: "relative",
                                    overflow: "hidden",
                                    backgroundColor: "#1a1a1a",
                                    borderRadius: "12px",
                                    padding: "16px",
                                    border: `1px solid ${l.border}`
                                },
                                children: [(0, o.jsx)("div", {
                                    ref: S,
                                    style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: D ?.width || 0,
                                        height: D ?.height || 0,
                                        border: "2px dashed rgba(255, 255, 255, 0.5)",
                                        pointerEvents: "none",
                                        zIndex: 2,
                                        boxShadow: "0 0 0 1000px rgba(26, 26, 26, 0.95)",
                                        backgroundImage: 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" rx="5.5" ry="5.5" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-dasharray="4 4"/></svg>\')',
                                        backgroundSize: "20px 20px",
                                        borderRadius: `${R}px`
                                    }
                                }), w.x && (0, o.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        left: "50%",
                                        width: "1px",
                                        height: "100%",
                                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                                        transform: "translateX(-50%)",
                                        zIndex: 3
                                    }
                                }), w.y && (0, o.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        left: 0,
                                        top: "50%",
                                        width: "100%",
                                        height: "1px",
                                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                                        transform: "translateY(-50%)",
                                        zIndex: 3
                                    }
                                }), w.left && (0, o.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        left: D ?.width ? `calc(50% - ${D.width/2}px)` : "50%",
                                        width: "1px",
                                        height: "100%",
                                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                                        zIndex: 3
                                    }
                                }), w.right && (0, o.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        left: D ?.width ? `calc(50% + ${D.width/2}px)` : "50%",
                                        width: "1px",
                                        height: "100%",
                                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                                        zIndex: 3
                                    }
                                }), w.top && (0, o.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        left: 0,
                                        top: D ?.height ? `calc(50% - ${D.height/2}px)` : "50%",
                                        width: "100%",
                                        height: "1px",
                                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                                        zIndex: 3
                                    }
                                }), w.bottom && (0, o.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        left: 0,
                                        top: D ?.height ? `calc(50% + ${D.height/2}px)` : "50%",
                                        width: "100%",
                                        height: "1px",
                                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                                        zIndex: 3
                                    }
                                }), (0, o.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: D ?.width || 0,
                                        height: D ?.height || 0,
                                        overflow: "visible"
                                    },
                                    onMouseDown: e => {
                                        e.preventDefault(), y(!0), j({
                                            x: e.clientX - h.x,
                                            y: e.clientY - h.y
                                        })
                                    },
                                    onMouseMove: e => {
                                        if (!b || !S.current || !E.current) return;
                                        let t = e.clientX - v.x,
                                            r = e.clientY - v.y,
                                            o = Math.abs(t),
                                            n = Math.abs(r),
                                            i = D ?.width || 0,
                                            a = D ?.height || 0,
                                            s = E.current.getBoundingClientRect(),
                                            l = Math.abs(t + (i / 2 - s.width / 2)),
                                            d = Math.abs(t - (i / 2 - s.width / 2)),
                                            c = Math.abs(r + (a / 2 - s.height / 2)),
                                            p = Math.abs(r - (a / 2 - s.height / 2));
                                        k({
                                            x: o < 5,
                                            y: n < 5,
                                            left: l < 5,
                                            right: d < 5,
                                            top: c < 5,
                                            bottom: p < 5
                                        });
                                        let u = t,
                                            x = r;
                                        o < 5 && (u = 0), n < 5 && (x = 0), l < 5 && (u = -(i / 2 - s.width / 2)), d < 5 && (u = i / 2 - s.width / 2), c < 5 && (x = -(a / 2 - s.height / 2)), p < 5 && (x = a / 2 - s.height / 2), g({
                                            x: u,
                                            y: x
                                        })
                                    },
                                    onMouseUp: T,
                                    onMouseLeave: T,
                                    onWheel: e => {
                                        e.preventDefault(), z(e.deltaY > 0 ? -.05 : .05)
                                    },
                                    children: (0, o.jsx)("img", {
                                        ref: E,
                                        src: t,
                                        alt: "Crop",
                                        style: {
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: `translate(-50%, -50%) translate(${h.x}px, ${h.y}px) scale(${m})`,
                                            height: "100%",
                                            width: "auto",
                                            cursor: b ? "grabbing" : "grab",
                                            userSelect: "none",
                                            pointerEvents: "auto"
                                        },
                                        draggable: !1
                                    })
                                })]
                            }), (0, o.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                    paddingTop: "8px",
                                    borderTop: `1px solid ${l.border}`
                                },
                                children: [(0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "16px",
                                        padding: "0 8px"
                                    },
                                    children: [(0, o.jsx)("button", {
                                        onClick: () => z(-.1),
                                        style: {
                                            padding: "8px",
                                            borderRadius: "6px",
                                            border: `1px solid ${l.border}`,
                                            backgroundColor: l.surface,
                                            color: l.text,
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "all 0.2s ease"
                                        },
                                        title: "Zoom out (-)",
                                        children: (0, o.jsxs)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [(0, o.jsx)("circle", {
                                                cx: "11",
                                                cy: "11",
                                                r: "8"
                                            }), (0, o.jsx)("path", {
                                                d: "M21 21l-4.35-4.35"
                                            }), (0, o.jsx)("line", {
                                                x1: "8",
                                                y1: "11",
                                                x2: "14",
                                                y2: "11"
                                            })]
                                        })
                                    }), (0, o.jsx)("input", {
                                        type: "range",
                                        min: 0,
                                        max: 1,
                                        step: .001,
                                        value: (e => {
                                            let t = Math.log(.1);
                                            return (Math.log(e) - t) / (Math.log(5) - t)
                                        })(m),
                                        onChange: e => {
                                            f(P(parseFloat(e.target.value)))
                                        },
                                        className: "image-crop-slider",
                                        style: {
                                            background: l.border
                                        }
                                    }), (0, o.jsxs)("span", {
                                        style: {
                                            color: l.textSecondary,
                                            fontSize: "14px",
                                            minWidth: "60px",
                                            textAlign: "right",
                                            fontWeight: "500"
                                        },
                                        children: [Math.round(100 * m), "%"]
                                    }), (0, o.jsx)("button", {
                                        onClick: () => z(.1),
                                        style: {
                                            padding: "8px",
                                            borderRadius: "6px",
                                            border: `1px solid ${l.border}`,
                                            backgroundColor: l.surface,
                                            color: l.text,
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "all 0.2s ease"
                                        },
                                        title: "Zoom in (+)",
                                        children: (0, o.jsxs)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [(0, o.jsx)("circle", {
                                                cx: "11",
                                                cy: "11",
                                                r: "8"
                                            }), (0, o.jsx)("path", {
                                                d: "M21 21l-4.35-4.35"
                                            }), (0, o.jsx)("line", {
                                                x1: "11",
                                                y1: "8",
                                                x2: "11",
                                                y2: "14"
                                            }), (0, o.jsx)("line", {
                                                x1: "8",
                                                y1: "11",
                                                x2: "14",
                                                y2: "11"
                                            })]
                                        })
                                    })]
                                }), (0, o.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        gap: "12px"
                                    },
                                    children: [(0, o.jsxs)("button", {
                                        onClick: () => {
                                            g({
                                                x: 0,
                                                y: 0
                                            }), f(1)
                                        },
                                        style: {
                                            padding: "12px 24px",
                                            borderRadius: "8px",
                                            border: `1px solid ${l.border}`,
                                            backgroundColor: l.surface,
                                            color: l.text,
                                            cursor: "pointer",
                                            fontWeight: "600",
                                            transition: "all 0.2s ease",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px"
                                        },
                                        children: [(0, o.jsxs)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, o.jsx)("path", {
                                                d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
                                            }), (0, o.jsx)("path", {
                                                d: "M21 3v5h-5"
                                            }), (0, o.jsx)("path", {
                                                d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
                                            }), (0, o.jsx)("path", {
                                                d: "M8 16H3v5"
                                            })]
                                        }), "Reset"]
                                    }), (0, o.jsxs)("button", {
                                        onClick: () => {
                                            if (!S.current || !E.current) return;
                                            let e = E.current,
                                                t = e.naturalWidth,
                                                r = e.naturalHeight,
                                                o = t / e.width,
                                                n = r / e.height,
                                                i = (t - D.width * o / m) / 2 - h.x * o / m,
                                                a = (r - D.height * n / m) / 2 - h.y * n / m,
                                                l = D.width * o / m,
                                                d = D.height * n / m,
                                                c = Math.max(1, Math.round(l)),
                                                p = Math.max(1, Math.round(d)),
                                                u = document.createElement("canvas");
                                            u.width = c, u.height = p;
                                            let x = u.getContext("2d");
                                            x.imageSmoothingEnabled = !0, x.imageSmoothingQuality = "high", x.drawImage(e, i, a, l, d, 0, 0, c, p), s({
                                                croppedImage: u.toDataURL("image/png", 1),
                                                position: h,
                                                scale: m
                                            })
                                        },
                                        style: {
                                            padding: "12px 24px",
                                            borderRadius: "8px",
                                            border: "none",
                                            background: "#ffffff",
                                            color: "#111111",
                                            cursor: "pointer",
                                            fontWeight: "600",
                                            transition: "all 0.2s ease",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            boxShadow: "0 2px 8px rgba(255, 107, 107, 0.2)"
                                        },
                                        children: [(0, o.jsxs)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, o.jsx)("path", {
                                                d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                                            }), (0, o.jsx)("polyline", {
                                                points: "17 21 17 13 7 13 7 21"
                                            }), (0, o.jsx)("polyline", {
                                                points: "7 3 7 8 15 8"
                                            })]
                                        }), "Save"]
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        1534: function(e, t, r) {
            "use strict";
            var o = r(5893),
                n = r(7294),
                i = r(9906),
                a = r(3935),
                s = r(9131),
                l = r(4250),
                d = r(5651),
                c = r(788),
                p = r(3734),
                u = r(8354),
                x = r(8259),
                h = r(92),
                g = r(2467),
                m = r(2955);
            let f = `
  .phone-settings {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    width: 200px;
  }

  .phone-settings:hover {
    background: rgba(0, 0, 0, 0.4);
    transform: translateY(-1px);
  }

  .settings-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 2px 0;
    min-height: 10px;
  }

  .settings-title {
    color: var(--text);
    font-size: 14px;
    font-weight: 600;
    opacity: 0.8;
    line-height: 1;
    display: flex;
    align-items: center;
  }

  .toggle-icon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .toggle-icon.collapsed {
    transform: rotate(-90deg);
  }

  .settings-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .settings-content.collapsed {
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  .settings-section {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .section-title {
    color: var(--text);
    font-size: 12px;
    font-weight: 500;
    opacity: 0.6;
    margin-bottom: 2px;
  }

  .model-options {
    display: flex;
    gap: 6px;
  }

  .model-option {
    padding: 4px 8px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  .model-option:hover {
    opacity: 0.9;
    background: rgba(255, 255, 255, 0.05);
  }

  .model-option.selected {
    opacity: 1;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.1);
  }

  .material-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .material-option {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 6px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .material-option:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .material-option.selected {
    background: rgba(255, 255, 255, 0.1);
  }

  .color-circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .material-option.selected .color-circle {
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  .material-label {
    color: var(--text);
    font-size: 13px;
    font-weight: 500;
    opacity: 0.8;
  }

  .material-option.selected .material-label {
    opacity: 1;
    font-weight: 600;
  }

  .custom-color-circle {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .custom-color-circle::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: radial-gradient(circle at center, white 0%, transparent 30%), 
                conic-gradient(from 90deg, red, yellow, lime, aqua, blue, magenta, red);
    transition: background 0.2s ease;
  }

  .material-option.selected .custom-color-circle {
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  .color-picker-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .color-picker-content {
    background-color: var(--surface);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border);
  }

  .react-colorful {
    width: 250px !important;
    height: 200px !important;
  }

  .react-colorful__saturation {
    border-radius: 8px 8px 0 0 !important;
  }

  .react-colorful__hue {
    height: 24px !important;
    border-radius: 0 0 8px 8px !important;
  }

  .react-colorful__pointer {
    width: 20px !important;
    height: 20px !important;
  }

  .checkbox-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 6px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .checkbox-option:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .checkbox-label {
    color: var(--text);
    font-size: 13px;
    font-weight: 500;
    opacity: 0.8;
    flex: 1;
  }

  .custom-checkbox {
    position: relative;
    width: 18px;
    height: 18px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .custom-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .custom-checkbox .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
  }

  .custom-checkbox:hover .checkmark {
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }

  .custom-checkbox input:checked ~ .checkmark {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .custom-checkbox .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 50%;
    top: 50%;
    width: 5px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -60%) rotate(45deg);
    opacity: 0.9;
  }

  .custom-checkbox input:checked ~ .checkmark:after {
    display: block;
  }
`;
            t.Z = function(e) {
                let {
                    selectedModel: t,
                    onModelChange: r,
                    onMaterialChange: b,
                    onBodyColorChange: y,
                    onBodyColorPreview: v,
                    showNotch: j,
                    onShowNotchChange: w,
                    theme: k,
                    embedded: C = !1,
                    onColorPickerOpenChange: S,
                    bodyColor: E
                } = e, [_, M] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    S ?.(_)
                }, [_, S]);
                let [I, D] = (0, n.useState)("dark"), [A, R] = (0, n.useState)(() => (0, m.i)(E)), [P, T] = (0, n.useState)(!1), z = (0, n.useCallback)(e => {
                    if (y) {
                        y(e);
                        return
                    }
                    b && b(new l.EJi({
                        color: e,
                        metalness: .8,
                        roughness: .2,
                        clearcoat: .5,
                        clearcoatRoughness: .3,
                        reflectivity: .5,
                        envMapIntensity: .6
                    }))
                }, [y, b]), {
                    scheduleCommit: N,
                    flushPending: $
                } = (0, m.l)(E, z);
                (0, n.useEffect)(() => {
                    let e = (0, m.i)(E);
                    R(t => t.toUpperCase() === e.toUpperCase() ? t : e)
                }, [E]);
                let L = () => {
                        S ?.(!0), M(!0)
                    },
                    W = () => {
                        $(), M(!1), S ?.(!1)
                    },
                    {
                        scene: F
                    } = (0, s.L)((0, i.Cc)("materials/Dark.glb"), void 0, void 0, i.Zn),
                    {
                        scene: B
                    } = (0, s.L)((0, i.Cc)("materials/Bright.glb"), void 0, void 0, i.Zn),
                    {
                        pickColor: V,
                        isSupported: U,
                        isPicking: H
                    } = (0, p.s)(),
                    {
                        currentUser: O
                    } = (0, x.a)(),
                    {
                        savedColors: q
                    } = (0, u.M)(),
                    [Z, Q] = (0, n.useState)(!1),
                    [Y, K] = (0, n.useState)(null),
                    J = e => {
                        let t;
                        D(e), W(), "dark" === e && F ? F.traverse(e => {
                            e.isMesh && R((t = e.material.clone()).color.getHexString())
                        }) : "bright" === e && B && B.traverse(e => {
                            e.isMesh && R((t = e.material.clone()).color.getHexString())
                        }), t && b(t)
                    },
                    G = e => {
                        R(e), N(e)
                    },
                    X = async () => {
                        if (O) try {
                            Q(!0), await (0, h.vV)(O.uid, A)
                        } catch (e) {
                            console.error("Error saving color:", e), alert("Failed to save color. Please try again.")
                        } finally {
                            Q(!1)
                        }
                    },
                    ee = async (e, t) => {
                        if (e.stopPropagation(), O) try {
                            await (0, h.yv)(O.uid, t)
                        } catch (e) {
                            console.error("Error deleting color:", e), alert("Failed to delete color. Please try again.")
                        }
                    },
                    et = q.includes(A.toUpperCase()),
                    er = (0, o.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "16px"
                        },
                        children: [O && q.length > 0 && (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                width: "100%"
                            },
                            children: [(0, o.jsx)("span", {
                                style: {
                                    color: k.textSecondary,
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    textAlign: "center"
                                },
                                children: "PBR Color Presets"
                            }), (0, o.jsx)("div", {
                                style: {
                                    display: "flex",
                                    gap: "8px",
                                    justifyContent: "center",
                                    flexWrap: "wrap"
                                },
                                children: q.map(e => (0, o.jsxs)("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    onMouseEnter: () => K(e),
                                    onMouseLeave: () => K(null),
                                    children: [(0, o.jsx)("button", {
                                        onClick: () => G(e),
                                        style: {
                                            width: 32,
                                            height: 32,
                                            borderRadius: "50%",
                                            backgroundColor: e,
                                            border: A.toUpperCase() === e ? "3px solid #2196f3" : "2px solid transparent",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            transform: A.toUpperCase() === e ? "scale(1.1)" : "scale(1)",
                                            boxShadow: A.toUpperCase() === e ? "0 0 12px rgba(33, 150, 243, 0.3)" : "0 2px 8px rgba(0, 0, 0, 0.1)"
                                        }
                                    }), Y === e && (0, o.jsx)("button", {
                                        onClick: t => ee(t, e),
                                        style: {
                                            position: "absolute",
                                            top: -4,
                                            right: -4,
                                            width: 16,
                                            height: 16,
                                            borderRadius: "50%",
                                            backgroundColor: "#ff4444",
                                            border: "none",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: 0,
                                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
                                        },
                                        title: "Delete color",
                                        children: (0, o.jsx)(c.ZkW, {
                                            size: 10,
                                            color: "white"
                                        })
                                    })]
                                }, e))
                            })]
                        }), (0, o.jsx)(d.gW, {
                            color: A,
                            onChange: G,
                            style: {
                                width: 250,
                                height: 200
                            }
                        }), (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "8px 0"
                            },
                            children: [(0, o.jsx)("div", {
                                style: {
                                    width: 24,
                                    height: 24,
                                    borderRadius: 4,
                                    backgroundColor: A,
                                    border: `1px solid ${k.border}`
                                }
                            }), (0, o.jsx)("input", {
                                type: "text",
                                value: A,
                                onChange: e => G(e.target.value),
                                style: {
                                    background: "transparent",
                                    border: "none",
                                    color: k.text,
                                    fontSize: 14,
                                    fontFamily: "monospace",
                                    outline: "none",
                                    width: 70
                                }
                            }), U && (0, o.jsx)("button", {
                                onClick: () => {
                                    V(e => {
                                        G(e)
                                    }, e => {
                                        console.error("Eye-dropper error:", e)
                                    })
                                },
                                disabled: H,
                                title: "Pick color from screen",
                                style: {
                                    background: H ? k.border : k.surface,
                                    border: `1px solid ${k.border}`,
                                    borderRadius: 6,
                                    padding: "6px 8px",
                                    cursor: H ? "wait" : "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    opacity: H ? .6 : 1
                                },
                                children: (0, o.jsx)(c.iM3, {
                                    size: 18,
                                    color: k.text
                                })
                            }), O && (0, o.jsx)("button", {
                                onClick: X,
                                disabled: Z || et,
                                title: et ? "Color already saved" : "Save color",
                                style: {
                                    background: et ? k.border : k.surface,
                                    border: `1px solid ${k.border}`,
                                    borderRadius: 6,
                                    padding: "6px 8px",
                                    cursor: et ? "not-allowed" : "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    opacity: et ? .5 : 1
                                },
                                children: (0, o.jsx)(c.tfk, {
                                    size: 18,
                                    color: et ? k.textSecondary : k.text
                                })
                            })]
                        })]
                    });
                if (C && _) return (0, o.jsx)(g.Z, {
                    theme: k,
                    type: "device",
                    selectedColor: A,
                    onColorPreview: e => {
                        R(e), v ?.(e)
                    },
                    onColorChange: G,
                    onBack: W,
                    embed: !0
                });
                let eo = (0, o.jsxs)("div", {
                    className: C ? "" : `settings-content ${P?"collapsed":""}`,
                    style: C ? {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12
                    } : void 0,
                    children: [(0, o.jsxs)("div", {
                        className: "settings-section",
                        children: [(0, o.jsx)("div", {
                            className: "section-title",
                            children: "Device"
                        }), (0, o.jsxs)("div", {
                            className: "model-options",
                            children: [(0, o.jsx)("div", {
                                className: `model-option ${"iPhone"===t?"selected":""}`,
                                onClick: () => r("iPhone"),
                                children: "iPhone"
                            }), (0, o.jsx)("div", {
                                className: `model-option ${"Samsung"===t?"selected":""}`,
                                onClick: () => r("Samsung"),
                                children: "Samsung"
                            }), (0, o.jsx)("div", {
                                className: `model-option ${"Screen"===t?"selected":""}`,
                                onClick: () => r("Screen"),
                                children: "Screen"
                            })]
                        })]
                    }), "Screen" !== t && (0, o.jsxs)("div", {
                        className: "settings-section",
                        children: [(0, o.jsx)("div", {
                            className: "section-title",
                            children: "Color"
                        }), (0, o.jsxs)("div", {
                            className: "material-options",
                            children: [(0, o.jsxs)("div", {
                                className: `material-option ${"dark"===I?"selected":""}`,
                                onClick: () => J("dark"),
                                children: [(0, o.jsx)("div", {
                                    className: "color-circle",
                                    style: {
                                        backgroundColor: "#1D1D1F"
                                    }
                                }), (0, o.jsx)("span", {
                                    className: "material-label",
                                    children: "Obsidian Titanium"
                                })]
                            }), (0, o.jsxs)("div", {
                                className: `material-option ${"bright"===I?"selected":""}`,
                                onClick: () => J("bright"),
                                children: [(0, o.jsx)("div", {
                                    className: "color-circle",
                                    style: {
                                        backgroundColor: "#F5F5F7"
                                    }
                                }), (0, o.jsx)("span", {
                                    className: "material-label",
                                    children: "Natural Titanium"
                                })]
                            }), (0, o.jsxs)("div", {
                                className: `material-option ${"custom"===I?"selected":""}`,
                                onClick: () => {
                                    D("custom"), _ ? W() : L()
                                },
                                title: "Custom color",
                                children: ["custom" === I ? (0, o.jsx)("div", {
                                    className: "color-circle",
                                    style: {
                                        backgroundColor: A
                                    }
                                }) : (0, o.jsx)("div", {
                                    className: "custom-color-circle"
                                }), (0, o.jsx)("span", {
                                    className: "material-label",
                                    children: "Custom"
                                })]
                            })]
                        })]
                    }), "iPhone" === t && w && (0, o.jsx)("div", {
                        className: "settings-section",
                        children: (0, o.jsxs)("div", {
                            className: "checkbox-option",
                            children: [(0, o.jsx)("span", {
                                className: "checkbox-label",
                                children: "Show Notch"
                            }), (0, o.jsxs)("label", {
                                className: "custom-checkbox",
                                children: [(0, o.jsx)("input", {
                                    type: "checkbox",
                                    "data-testid": "prop-toggle-showNotch",
                                    checked: j,
                                    onChange: e => w(e.target.checked)
                                }), (0, o.jsx)("span", {
                                    className: "checkmark"
                                })]
                            })]
                        })
                    })]
                });
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("style", {
                        children: f
                    }), C ? (0, o.jsx)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 12
                        },
                        children: eo
                    }) : (0, o.jsxs)("div", {
                        className: "phone-settings",
                        style: {
                            color: k.text,
                            "--text": k.text,
                            "--surface": k.surface,
                            "--border": k.border
                        },
                        children: [(0, o.jsxs)("div", {
                            className: "settings-header",
                            onClick: () => T(!P),
                            children: [(0, o.jsx)("div", {
                                className: "settings-title",
                                children: "Chassis & PBR Lab"
                            }), (0, o.jsx)("div", {
                                className: `toggle-icon ${P?"collapsed":""}`,
                                children: (0, o.jsx)("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, o.jsx)("path", {
                                        d: "M6 9l6 6 6-6"
                                    })
                                })
                            })]
                        }), eo]
                    }), _ && "undefined" != typeof document && document.body && a.createPortal((0, o.jsxs)("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1e4,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            paddingRight: 24,
                            pointerEvents: "none"
                        },
                        children: [(0, o.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "transparent",
                                pointerEvents: "auto"
                            },
                            onClick: () => M(!1),
                            "aria-hidden": !0
                        }), (0, o.jsxs)("div", {
                            className: "color-picker-content",
                            onClick: e => e.stopPropagation(),
                            style: {
                                position: "relative",
                                width: "auto",
                                minWidth: 280,
                                maxWidth: 320,
                                height: "auto",
                                background: "rgba(22, 22, 24, 0.38)",
                                backdropFilter: "blur(80px) saturate(200%)",
                                WebkitBackdropFilter: "blur(80px) saturate(200%)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                borderRadius: 20,
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255,255,255,0.03) inset",
                                padding: 20,
                                overflowY: "auto",
                                pointerEvents: "auto"
                            },
                            children: [(0, o.jsx)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginBottom: "4px"
                                },
                                children: (0, o.jsx)("button", {
                                    type: "button",
                                    onClick: W,
                                    style: {
                                        width: 28,
                                        height: 28,
                                        borderRadius: 8,
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        background: "rgba(255,255,255,0.06)",
                                        color: k.text,
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "18px",
                                        lineHeight: 1,
                                        padding: 0
                                    },
                                    "aria-label": "Close",
                                    children: "\xd7"
                                })
                            }), er]
                        })]
                    }), document.body)]
                })
            }
        },
        4306: function(e, t, r) {
            "use strict";
            var o = r(5893),
                n = r(7294),
                i = r(8813),
                a = r(92),
                s = r(9520),
                l = r(9265);
            let d = `
  @keyframes checkmarkAppear {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes checkmarkDraw {
    from {
      stroke-dasharray: 20;
      stroke-dashoffset: 20;
    }
    to {
      stroke-dasharray: 20;
      stroke-dashoffset: 0;
    }
  }
`;
            t.Z = function(e) {
                let {
                    scene: t,
                    isSelected: r,
                    onSelect: c,
                    onHover: p,
                    theme: u,
                    isVerticalFormat: x,
                    hoveredScene: h,
                    forceAspectRatio: g = !0,
                    user: m = null,
                    currentScene: f = null,
                    isPremium: b = !0,
                    pickOnly: y = !1,
                    forceAllPremium: v = !1
                } = e, [j, w] = (0, n.useState)(!1), [k, C] = (0, n.useState)(null), S = (0, n.useRef)(null), E = (0, i.gN)(t), _ = E ? (0, i.aR)(t) : null, M = (0, i.Au)(f || t), I = f ? M === t && !(0, i.Hf)(f) : r, D = !!f && (0, i.Hf)(f) && M === t;
                m && (0, a.Ng)(m);
                let A = !!v || (0, i.HW)(t),
                    R = !v && (0, i.q8)(t),
                    P = (e, r) => {
                        e.stopPropagation(), r && _ ? c(_) : c(t)
                    },
                    T = (0, i.id)(t),
                    z = (l.zV(i.Au(t)) ?.defaultDurationInFrames || 0) / 30 || null,
                    N = null != k && !isNaN(k) && k > 0,
                    $ = T ?? z ?? (N ? k : null),
                    L = $ ? 2 * $ : null;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("style", {
                        children: d
                    }), (0, o.jsxs)("button", {
                        "data-testid": `mockup-card-${t}`,
                        onMouseEnter: e => {
                            e.currentTarget.style.transform = "translateY(-1px)", e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.18)", r || (e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"), w(!0), p(t)
                        },
                        onMouseLeave: e => {
                            e.currentTarget.style.transform = "translateY(0)", e.currentTarget.style.boxShadow = r ? "0 2px 10px rgba(0, 0, 0, 0.22)" : "none", e.currentTarget.style.borderColor = r ? "#E8797A" : u.border, w(!1), S.current && (S.current.pause(), S.current.currentTime = 0), p(null)
                        },
                        onClick: e => {
                            e.target.closest(".duration-tags") || e.target.closest(".duration-tag") || c(t)
                        },
                        style: {
                            width: "100%",
                            aspectRatio: g ? x ? "3/4" : "5/3" : "auto",
                            backgroundColor: u.surface,
                            border: r ? "1.5px solid #E8797A" : `1px solid ${u.border}`,
                            borderRadius: "8px",
                            backgroundClip: "padding-box",
                            clipPath: "inset(0 round 8px)",
                            cursor: "pointer",
                            transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease",
                            position: "relative",
                            overflow: "hidden",
                            marginBottom: 0,
                            boxShadow: r ? "0 2px 10px rgba(0, 0, 0, 0.22)" : "none",
                            padding: 0,
                            display: "block"
                        },
                        children: [(0, o.jsx)("video", {
                            ref: S,
                            src: (e => {
                                let t = e.replace(".glb", "");
                                return `/previews/${t}.mp4`
                            })(t),
                            alt: t,
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                                borderRadius: "8px",
                                transition: "transform 0.3s ease",
                                transform: j ? "scale(1.05)" : "scale(1)",
                                willChange: "transform",
                                display: "block",
                                position: "absolute",
                                top: 0,
                                left: 0
                            },
                            autoPlay: j,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            preload: "auto",
                            onLoadedMetadata: () => {
                                S.current && S.current.duration && !isNaN(S.current.duration) && C(S.current.duration)
                            },
                            onLoadedData: () => {
                                S.current && (S.current.pause(), S.current.currentTime = 0)
                            },
                            onMouseEnter: () => {
                                S.current && S.current.play().catch(() => {})
                            },
                            onMouseLeave: () => {
                                S.current && S.current.pause(), S.current && (S.current.currentTime = 0)
                            }
                        }), !y && A && !b && (0, o.jsxs)("div", {
                            style: {
                                position: "absolute",
                                top: "12px",
                                right: "12px",
                                backgroundColor: "rgba(0, 0, 0, 0.75)",
                                backdropFilter: "blur(8px)",
                                color: "#fff",
                                padding: "4px 8px",
                                borderRadius: "12px",
                                fontSize: "9px",
                                fontWeight: "600",
                                textTransform: "uppercase",
                                letterSpacing: "0.8px",
                                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.3)",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                zIndex: 2,
                                fontFamily: "system-ui, -apple-system, sans-serif",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            },
                            children: [(0, o.jsx)("span", {
                                style: {
                                    fontSize: "10px"
                                },
                                children: "\uD83D\uDC8E"
                            }), "PREMIUM"]
                        }), !y && R && !b && (0, o.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: "12px",
                                right: "12px",
                                backgroundColor: "rgba(0, 0, 0, 0.65)",
                                backdropFilter: "blur(8px)",
                                color: u.textSecondary,
                                padding: "4px 8px",
                                borderRadius: "12px",
                                fontSize: "9px",
                                fontWeight: "600",
                                textTransform: "uppercase",
                                letterSpacing: "0.8px",
                                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.3)",
                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                zIndex: 2,
                                fontFamily: "system-ui, -apple-system, sans-serif"
                            },
                            children: "FREE"
                        }), !y && r && A && (0, o.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: "12px",
                                left: "12px",
                                width: "24px",
                                height: "24px",
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                animation: "checkmarkAppear 0.2s ease-out",
                                zIndex: 1
                            },
                            children: (0, o.jsx)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    animation: "checkmarkDraw 0.2s ease-out"
                                },
                                children: (0, o.jsx)("polyline", {
                                    points: "20 6 9 17 4 12"
                                })
                            })
                        }), !y && r && R && (0, o.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: "12px",
                                left: "12px",
                                width: "24px",
                                height: "24px",
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                animation: "checkmarkAppear 0.2s ease-out",
                                zIndex: 1
                            },
                            children: (0, o.jsx)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    animation: "checkmarkDraw 0.2s ease-out"
                                },
                                children: (0, o.jsx)("polyline", {
                                    points: "20 6 9 17 4 12"
                                })
                            })
                        }), !y && (0, o.jsxs)("div", {
                            className: "duration-tags",
                            style: {
                                position: "absolute",
                                bottom: "8px",
                                right: "8px",
                                display: "flex",
                                gap: "6px",
                                zIndex: 3,
                                pointerEvents: "auto",
                                alignItems: "center"
                            },
                            onClick: e => e.stopPropagation(),
                            children: [(0, o.jsx)("span", {
                                role: "button",
                                tabIndex: 0,
                                onClick: e => P(e, !1),
                                onKeyDown: e => {
                                    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), P(e, !1))
                                },
                                className: "duration-tag",
                                style: {
                                    backgroundColor: I ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.5)",
                                    color: I ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.85)",
                                    border: `1px solid ${I?"rgba(255, 255, 255, 0.9)":"rgba(255, 255, 255, 0.3)"}`,
                                    padding: "3px 8px",
                                    borderRadius: "6px",
                                    fontSize: "10px",
                                    fontWeight: "600",
                                    fontFamily: "system-ui, -apple-system, sans-serif",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    backdropFilter: "blur(4px)",
                                    boxShadow: I ? "0 2px 8px rgba(0, 0, 0, 0.3)" : "none",
                                    pointerEvents: "auto",
                                    minWidth: "32px",
                                    minHeight: "18px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                onMouseEnter: e => {
                                    I || (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)", e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.75)", e.currentTarget.style.transform = "scale(1.07)", e.currentTarget.style.color = "#fff")
                                },
                                onMouseLeave: e => {
                                    I || (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)", e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)", e.currentTarget.style.transform = "scale(1)", e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)")
                                },
                                children: $ ? (0, s.LU)($) : "..."
                            }), E && _ && (0, o.jsx)("span", {
                                role: "button",
                                tabIndex: 0,
                                onClick: e => P(e, !0),
                                onKeyDown: e => {
                                    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), P(e, !0))
                                },
                                className: "duration-tag",
                                style: {
                                    backgroundColor: D ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.5)",
                                    color: D ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.85)",
                                    border: `1px solid ${D?"rgba(255, 255, 255, 0.9)":"rgba(255, 255, 255, 0.3)"}`,
                                    padding: "3px 8px",
                                    borderRadius: "6px",
                                    fontSize: "10px",
                                    fontWeight: "600",
                                    fontFamily: "system-ui, -apple-system, sans-serif",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    backdropFilter: "blur(4px)",
                                    boxShadow: D ? "0 2px 8px rgba(0, 0, 0, 0.3)" : "none",
                                    pointerEvents: "auto",
                                    minWidth: "32px",
                                    minHeight: "18px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                onMouseEnter: e => {
                                    D || (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)", e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.75)", e.currentTarget.style.transform = "scale(1.07)", e.currentTarget.style.color = "#fff")
                                },
                                onMouseLeave: e => {
                                    D || (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)", e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)", e.currentTarget.style.transform = "scale(1)", e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)")
                                },
                                children: L ? (0, s.LU)(L) : "..."
                            })]
                        })]
                    })]
                })
            }
        },
        2867: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var o = r(5893),
                n = r(7294),
                i = r(8366),
                a = r(5680),
                s = r.n(a);

            function l(e, t, r) {
                return Math.min(r, Math.max(t, e))
            }

            function d(e) {
                let {
                    videoUrl: t,
                    theme: r,
                    initialStart: a = 0,
                    initialEnd: d = null,
                    selectionMode: c = "free",
                    maxDuration: p = null,
                    onClose: u,
                    onSave: x
                } = e, h = (0, n.useRef)(null), g = (0, n.useRef)(null), m = (0, n.useRef)(null), f = (0, n.useRef)({
                    pointerT: 0,
                    start: 0,
                    end: 0
                }), b = (0, n.useRef)(0), y = (0, n.useRef)(!1), v = (0, n.useRef)(!1), j = (0, n.useRef)(null), w = (0, n.useRef)(!1), k = (0, n.useRef)(0), C = (0, n.useRef)(0), S = (0, n.useRef)(0), E = "capped" === c && null != p && Number.isFinite(Number(p)) && Number(p) > 0, _ = E ? Number(p) : null, [M, I] = (0, n.useState)(0), [D, A] = (0, n.useState)(Math.max(0, Number(a) || 0)), [R, P] = (0, n.useState)(null == d ? null : Math.max(0, Number(d))), [T, z] = (0, n.useState)(!1), [N, $] = (0, n.useState)(!1), [L, W] = (0, n.useState)(!1), [F, B] = (0, n.useState)(0);
                (0, n.useEffect)(() => {
                    b.current = Date.now(), y.current = !1, v.current = !1
                }, []), (0, n.useEffect)(() => {
                    let e = h.current;
                    if (!e || !t) return;
                    let r = () => {
                        let t = Number.isFinite(e.duration) ? e.duration : 0;
                        I(t);
                        let r = e.videoWidth || 0,
                            o = e.videoHeight || 0;
                        if (r > 0 && o > 0 && W(o > r), t <= 0) {
                            z(!1);
                            return
                        }
                        let n = l(Math.max(0, Number(a) || 0), 0, Math.max(0, t - .05)),
                            i = null != d && Number.isFinite(Number(d)) ? l(Number(d), n + .05, t) : t;
                        if (E) {
                            let e = Math.min(_, t);
                            i - n > e && (i = n + e), i > t && (n = Math.max(0, (i = t) - e))
                        }
                        A(n), P(i), B(n);
                        try {
                            e.currentTime = n
                        } catch {}
                        z(!0)
                    };
                    return e.addEventListener("loadedmetadata", r), e.addEventListener("loadeddata", r), e.readyState >= 1 && r(), () => {
                        e.removeEventListener("loadedmetadata", r), e.removeEventListener("loadeddata", r)
                    }
                }, [t, a, d, E, _]);
                let V = null == R ? M : R,
                    U = Math.max(0, V - D);
                k.current = D, C.current = V, S.current = F;
                let H = (0, n.useCallback)(e => {
                        let t = h.current;
                        if (!t || !Number.isFinite(e)) return;
                        let r = l(e, 0, Math.max(0, (M || 0) - .001));
                        if (j.current = r, !w.current) {
                            w.current = !0;
                            try {
                                "function" == typeof t.fastSeek ? t.fastSeek(r) : t.currentTime = r
                            } catch {
                                try {
                                    t.currentTime = r
                                } catch {
                                    w.current = !1
                                }
                            }
                        }
                    }, [M]),
                    O = (0, n.useCallback)(function(e) {
                        let {
                            pause: t = !0
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = h.current;
                        if (!r || !Number.isFinite(e)) return;
                        let o = l(e, 0, Math.max(0, (M || 0) - .001));
                        if (B(o), S.current = o, t) {
                            try {
                                r.pause()
                            } catch {}
                            $(!1)
                        }
                        H(o)
                    }, [M, H]);
                (0, n.useEffect)(() => {
                    let e = h.current;
                    if (!e) return;
                    let t = () => {
                        w.current = !1;
                        let t = j.current;
                        null != t && Math.abs((e.currentTime || 0) - t) > .04 && H(t)
                    };
                    return e.addEventListener("seeked", t), () => e.removeEventListener("seeked", t)
                }, [H]);
                let q = e => M > 0 ? e / M * 100 : 0,
                    Z = (0, n.useCallback)(e => {
                        let t = g.current;
                        if (!t || M <= 0) return 0;
                        let r = t.getBoundingClientRect();
                        return l(e - r.left, 0, r.width) / r.width * M
                    }, [M]);
                return (0, n.useEffect)(() => {
                    let e = e => {
                            let t = m.current;
                            if (!t || M <= 0) return;
                            let r = Z(e.clientX),
                                o = Math.min(.15, M / 4),
                                n = E ? Math.min(_, M) : M,
                                i = k.current,
                                a = C.current;
                            if ("playhead" === t) {
                                O(l(r, i, Math.max(i, a - .001)));
                                return
                            }
                            if ("move" === t) {
                                let e = r - f.current.pointerT,
                                    t = f.current.end - f.current.start,
                                    o = l(f.current.start + e, 0, Math.max(0, M - t)),
                                    n = o + t;
                                A(o), P(n), k.current = o, C.current = n, O(l(f.current.playhead + e, o, Math.max(o, n - .001)));
                                return
                            }
                            if ("start" === t) {
                                let e = l(r, E ? Math.max(0, a - n) : 0, a - o);
                                A(e), k.current = e, O(e)
                            } else if ("end" === t) {
                                let e = E ? Math.min(M, i + n) : M,
                                    t = l(r, i + o, e);
                                P(t), C.current = t, O(Math.min(t, Math.max(0, (M || 0) - .001)))
                            }
                        },
                        t = () => {
                            m.current = null
                        };
                    return window.addEventListener("pointermove", e), window.addEventListener("pointerup", t), () => {
                        window.removeEventListener("pointermove", e), window.removeEventListener("pointerup", t)
                    }
                }, [M, E, _, Z, O]), (0, n.useEffect)(() => {
                    let e = h.current;
                    if (!e) return;
                    let t = () => {
                        if (m.current) return;
                        let t = e.currentTime;
                        if (t >= V - .04) {
                            e.pause(), e.currentTime = D, B(D), $(!1);
                            return
                        }
                        B(t)
                    };
                    return e.addEventListener("timeupdate", t), () => e.removeEventListener("timeupdate", t)
                }, [D, V]), (0, n.useEffect)(() => {
                    if (!m.current && (F < D || F > V)) {
                        let e = l(F, D, Math.max(D, V - .001));
                        B(e);
                        let t = h.current;
                        t && Math.abs((t.currentTime || 0) - e) > .05 && H(e)
                    }
                }, [D, V, F, H]), (0, o.jsx)("div", {
                    className: s().overlay,
                    onPointerDown: e => {
                        e.target === e.currentTarget && (y.current = !0, v.current = !1)
                    },
                    onClick: e => {
                        if (e.target !== e.currentTarget || !y.current || v.current || Date.now() - b.current < 400) {
                            y.current = !1, v.current = !1;
                            return
                        }
                        u ?.(), y.current = !1, v.current = !1
                    },
                    children: (0, o.jsxs)("div", {
                        className: `${s().modal}${L?` ${s().isVertical}`:""}`,
                        role: "dialog",
                        "aria-label": "Trim video",
                        onPointerDownCapture: () => {
                            v.current = !0
                        },
                        onClick: e => e.stopPropagation(),
                        children: [(0, o.jsx)("button", {
                            type: "button",
                            className: s().close,
                            onClick: u,
                            "aria-label": "Close",
                            children: (0, o.jsx)("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.4",
                                strokeLinecap: "round",
                                children: (0, o.jsx)("path", {
                                    d: "M6 6l12 12M18 6L6 18"
                                })
                            })
                        }), (0, o.jsxs)("div", {
                            className: s().body,
                            children: [(0, o.jsx)("div", {
                                className: `${s().previewShell} ${L?s().isVertical:s().isHorizontal}`,
                                children: (0, o.jsx)("video", {
                                    ref: h,
                                    src: t,
                                    muted: !0,
                                    playsInline: !0,
                                    preload: "auto"
                                })
                            }), (0, o.jsxs)("div", {
                                className: s().meta,
                                children: [(0, o.jsxs)("span", {
                                    children: [(0, o.jsx)("strong", {
                                        children: (0, i.C2)(F)
                                    }), (0, o.jsx)("span", {
                                        style: {
                                            opacity: .45
                                        },
                                        children: " \xb7 "
                                    }), (0, o.jsx)("strong", {
                                        children: (0, i.C2)(D)
                                    }), " – ", (0, o.jsx)("strong", {
                                        children: (0, i.C2)(V)
                                    })]
                                }), (0, o.jsxs)("span", {
                                    children: [(0, i.C2)(U), (0, o.jsxs)("span", {
                                        style: {
                                            opacity: .55
                                        },
                                        children: [" / ", (0, i.C2)(M)]
                                    })]
                                })]
                            }), (0, o.jsxs)("div", {
                                className: s().controls,
                                children: [(0, o.jsx)("button", {
                                    type: "button",
                                    className: s().play,
                                    onClick: () => {
                                        let e = h.current;
                                        if (e && T) {
                                            if (!e.paused) {
                                                e.pause(), $(!1);
                                                return
                                            }(e.currentTime < D || e.currentTime >= V - .05) && (e.currentTime = D, B(D)), e.play().then(() => $(!0)).catch(() => $(!1))
                                        }
                                    },
                                    disabled: !T,
                                    "aria-label": N ? "Pause" : "Play selection",
                                    children: N ? (0, o.jsxs)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: [(0, o.jsx)("rect", {
                                            x: "6",
                                            y: "5",
                                            width: "4",
                                            height: "14",
                                            rx: "1"
                                        }), (0, o.jsx)("rect", {
                                            x: "14",
                                            y: "5",
                                            width: "4",
                                            height: "14",
                                            rx: "1"
                                        })]
                                    }) : (0, o.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        style: {
                                            marginLeft: 1
                                        },
                                        children: (0, o.jsx)("path", {
                                            d: "M8 5v14l11-7z"
                                        })
                                    })
                                }), (0, o.jsxs)("div", {
                                    ref: g,
                                    className: s().track,
                                    children: [(0, o.jsx)("div", {
                                        className: s().dim,
                                        style: {
                                            left: 0,
                                            width: `${q(D)}%`
                                        }
                                    }), (0, o.jsx)("div", {
                                        className: s().dim,
                                        style: {
                                            left: `${q(V)}%`,
                                            right: 0
                                        }
                                    }), (0, o.jsx)("div", {
                                        className: s().sel,
                                        onPointerDown: e => {
                                            e.preventDefault(), V - D <= .05 || (m.current = "move", f.current = {
                                                pointerT: Z(e.clientX),
                                                start: D,
                                                end: V,
                                                playhead: F
                                            })
                                        },
                                        style: {
                                            left: `${q(D)}%`,
                                            width: `${Math.max(0,q(V)-q(D))}%`
                                        }
                                    }), (0, o.jsx)("div", {
                                        className: s().handle,
                                        onPointerDown: e => {
                                            e.preventDefault(), e.stopPropagation(), m.current = "start", O(D)
                                        },
                                        style: {
                                            left: `calc(${q(D)}% - 6px)`
                                        }
                                    }), (0, o.jsx)("div", {
                                        className: s().handle,
                                        onPointerDown: e => {
                                            e.preventDefault(), e.stopPropagation(), m.current = "end", O(V)
                                        },
                                        style: {
                                            left: `calc(${q(V)}% - 6px)`
                                        }
                                    }), (0, o.jsx)("div", {
                                        className: s().playhead,
                                        onPointerDown: e => {
                                            e.preventDefault(), e.stopPropagation(), m.current = "playhead", O(l(Z(e.clientX), D, Math.max(D, V - .001)))
                                        },
                                        style: {
                                            left: `${q(F)}%`
                                        },
                                        "aria-label": "Playhead"
                                    })]
                                })]
                            }), (0, o.jsxs)("div", {
                                className: s().actions,
                                children: [(0, o.jsx)("button", {
                                    type: "button",
                                    className: s().btnSecondary,
                                    onClick: () => {
                                        if (E && M > 0) {
                                            let e = Math.min(_, M);
                                            A(0), P(e), O(0);
                                            return
                                        }
                                        A(0), P(M || null), O(0)
                                    },
                                    disabled: !T,
                                    children: "Reset"
                                }), (0, o.jsx)("button", {
                                    type: "button",
                                    className: s().btnPrimary,
                                    onClick: () => {
                                        let e = l(D, 0, Math.max(0, M - .05)),
                                            t = V;
                                        null != t && (t = l(t, e + .05, M));
                                        let r = e <= .001 && (null == t || .05 > Math.abs(t - M));
                                        x ?.({
                                            videoStartTime: r ? 0 : e,
                                            videoEndTime: r ? null : t
                                        })
                                    },
                                    disabled: !T,
                                    children: "Save"
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        4372: function(e, t, r) {
            "use strict";
            r.d(t, {
                TQ: function() {
                    return n
                },
                fF: function() {
                    return o
                },
                k: function() {
                    return i
                },
                zB: function() {
                    return a
                }
            });
            let o = "rgba(255, 255, 255, 0.08)",
                n = {
                    background: "rgba(22, 22, 24, 0.38)",
                    backdropFilter: "blur(80px) saturate(200%)",
                    WebkitBackdropFilter: "blur(80px) saturate(200%)",
                    border: `1px solid ${o}`,
                    borderRadius: 20,
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255,255,255,0.03) inset"
                },
                i = {
                    display: "flex",
                    borderRadius: "8px",
                    padding: "2px",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    border: `1px solid ${o}`
                },
                a = {
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${o}`
                }
        },
        173: function(e, t, r) {
            "use strict";
            r.d(t, {
                S: function() {
                    return a
                },
                i: function() {
                    return s
                }
            });
            var o = r(5893),
                n = r(7294);
            let i = (0, n.createContext)({
                allowAppOverlays: !0,
                onboardingOpen: !1
            });

            function a(e) {
                let {
                    onboardingOpen: t,
                    children: r
                } = e, a = (0, n.useMemo)(() => ({
                    onboardingOpen: !!t,
                    allowAppOverlays: !t
                }), [t]);
                return (0, o.jsx)(i.Provider, {
                    value: a,
                    children: r
                })
            }

            function s() {
                return (0, n.useContext)(i)
            }
        },
        4078: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return l
                }
            });
            var o = r(7294),
                n = r(6147),
                i = r(8259),
                a = r(9171);
            let l = () => ({
                credits: 99999,
                promoTrialCredits: 99999,
                spendableCredits: 99999,
                promoTrialActive: !0,
                promoTrialGrantedAt: null,
                promoTrialVariant: null,
                promoTrialEligible: !1,
                loading: !1,
                error: null
            });
        },
        2955: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return n
                },
                l: function() {
                    return i
                }
            });
            var o = r(7294);

            function n(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#1D1D1F";
                if (!e) return t;
                let r = String(e).trim();
                return r.startsWith("#") ? r : `#${r}`
            }

            function i(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 48,
                    i = (0, o.useRef)(null),
                    a = (0, o.useRef)(n(e)),
                    s = (0, o.useRef)(n(e));
                (0, o.useEffect)(() => {
                    let t = n(e);
                    t.toUpperCase() !== a.current.toUpperCase() && (a.current = t, s.current = t)
                }, [e]);
                let l = (0, o.useCallback)(e => {
                        i.current && (clearTimeout(i.current), i.current = null);
                        let r = n(e);
                        s.current = r, r.toUpperCase() !== a.current.toUpperCase() && (a.current = r, t(r))
                    }, [t]),
                    d = (0, o.useCallback)(e => {
                        let t = n(e);
                        s.current = t, i.current && clearTimeout(i.current), i.current = setTimeout(() => {
                            i.current = null, l(t)
                        }, r)
                    }, [l, r]),
                    c = (0, o.useCallback)(() => {
                        l(s.current)
                    }, [l]);
                return (0, o.useEffect)(() => () => {
                    i.current && clearTimeout(i.current)
                }, []), {
                    scheduleCommit: d,
                    flushPending: c
                }
            }
        },
        3734: function(e, t, r) {
            "use strict";
            r.d(t, {
                s: function() {
                    return n
                }
            });
            var o = r(7294);

            function n() {
                let [e, t] = (0, o.useState)(!1), r = "EyeDropper" in window;
                return {
                    pickColor: (0, o.useCallback)(async (e, o) => {
                        if (!r) {
                            let e = "Eye-dropper is not supported in this browser. Please use Chrome, Edge, or Safari 18+.";
                            o ? o(Error(e)) : alert(e);
                            return
                        }
                        try {
                            t(!0);
                            let r = new window.EyeDropper,
                                o = (await r.open()).sRGBHex;
                            e(o)
                        } catch (e) {
                            "AbortError" !== e.name && o && o(e)
                        } finally {
                            t(!1)
                        }
                    }, [r]),
                    isSupported: r,
                    isPicking: e
                }
            }
        },
        8354: function(e, t, r) {
            "use strict";
            r.d(t, {
                M: function() {
                    return l
                }
            });
            var o = r(7294),
                n = r(6147),
                i = r(8259),
                a = r(9171);
            let s = a.l ? (0, n.ad)(a.l) : null,
                l = () => {
                    let {
                        currentUser: e
                    } = (0, i.a)(), [t, r] = (0, o.useState)([]), [a, l] = (0, o.useState)(!0), [d, c] = (0, o.useState)(null);
                    return (0, o.useEffect)(() => {
                        if (!e) {
                            r([]), l(!1);
                            return
                        }
                        let t = (0, n.JU)(s, "customers", e.uid),
                            o = (0, n.cf)(t, e => {
                                e.exists() ? r(e.data().savedColors || []) : r([]), l(!1), c(null)
                            }, e => {
                                console.error("Error listening to saved colors:", e), c(e.message), l(!1)
                            });
                        return () => o()
                    }, [e]), {
                        savedColors: t,
                        loading: a,
                        error: d
                    }
                }
        },
        7764: function(e, t, r) {
            "use strict";
            r.d(t, {
                FQ: function() {
                    return d
                },
                JV: function() {
                    return c
                },
                dp: function() {
                    return l
                },
                s8: function() {
                    return p
                }
            });
            var o = r(6147),
                n = r(7417),
                i = r(9171),
                a = r(7219);
            let s = i.l ? (0, o.ad)(i.l) : null,
                l = async function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Export";
                    try {
                        let o = (0, n.v0)(i.l).currentUser;
                        if (!o || o.uid !== e) throw Error("User not authenticated");
                        let a = await o.getIdToken(),
                            s = await fetch("/api/credits/deduct", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${a}`
                                },
                                body: JSON.stringify({
                                    amount: t,
                                    description: r
                                })
                            }),
                            l = await s.json().catch(() => ({}));
                        if (!s.ok) throw Error(l ?.error || `Credit deduction failed (${s.status})`)
                    } catch (e) {
                        throw e
                    }
                },
                d = async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
                    try {
                        let t;
                        let r = (0, n.v0)(i.l).currentUser;
                        if (!r) throw Error("User not authenticated");
                        let a = i.l ? (0, o.ad)(i.l) : null;
                        try {
                            let e = (0, o.JU)(a, "customers", r.uid);
                            await (0, o.QT)(e)
                        } catch (e) {
                            throw Error("Cannot access user data")
                        }
                        let s = (0, o.hJ)(a, "customers", r.uid, "creditHistory");
                        try {
                            let r = (0, o.IO)(s, (0, o.ar)("type", "==", "purchase"), (0, o.Xo)("timestamp", "desc"), (0, o.b9)(e));
                            t = await (0, o.PL)(r)
                        } catch (i) {
                            let t = (0, o.IO)(s, (0, o.Xo)("timestamp", "desc"), (0, o.b9)(2 * e)),
                                r = await (0, o.PL)(t),
                                n = [];
                            return r.forEach(e => {
                                let t = e.data();
                                n.push({
                                    id: e.id,
                                    ...t,
                                    timestamp: t.timestamp ?.toDate() || new Date
                                })
                            }), n.filter(e => "purchase" === e.type || !e.type && e.amount > 0).slice(0, e)
                        }
                        let l = [];
                        return t.forEach(e => {
                            let t = e.data();
                            l.push({
                                id: e.id,
                                ...t,
                                timestamp: t.timestamp ?.toDate() || new Date
                            })
                        }), l
                    } catch (e) {
                        throw e
                    }
                },
                c = e => {
                    let t = (0, a.YB)(e);
                    return t ? `${t.name} (${t.credits} credits)` : "Credit Purchase"
                },
                p = async () => {
                    try {
                        let e = (0, n.v0)(i.l).currentUser;
                        if (!e) return !1;
                        let t = (0, o.hJ)(s, "customers", e.uid, "subscriptions"),
                            r = (0, o.IO)(t, (0, o.b9)(1));
                        return !(await (0, o.PL)(r)).empty
                    } catch {
                        return !1
                    }
                }
        },
        9265: function(e, t, r) {
            "use strict";
            r.d(t, {
                xk: function() {
                    return i
                },
                zV: function() {
                    return a
                }
            });
            var o = r(8813);
            let n = {
                "Animation_1_Empty.glb": 188,
                "Animation_2_Empty.glb": 313,
                "Animation_2_Empty_2.glb": 625,
                "Animation_3_Empty.glb": 300,
                "Animation_3_Empty_2.glb": 600,
                "Animation_4_Empty.glb": 188,
                "Animation_5_Empty.glb": 188,
                "Animation_6_Empty.glb": 300,
                "Animation_7_Empty.glb": 240,
                "Animation_8_Empty.glb": 240,
                "Animation_9_Empty.glb": 300,
                "Animation_10_Empty.glb": 300,
                "Animation_11_Empty.glb": 300,
                "Animation_12_Empty.glb": 300,
                "Animation_13_Empty.glb": 240,
                "Animation_14_Empty.glb": 300,
                "Animation_14_Empty_2.glb": 600,
                "Animation_15_Empty.glb": 300,
                "Animation_15_Empty_2.glb": 600,
                "Animation_16_Empty.glb": 600,
                "Animation_17_Empty.glb": 600,
                "Animation_18_Empty.glb": 600,
                "Animation_19_Empty.glb": 360,
                "Animation_20_Empty.glb": 420,
                "Animation_21_Empty.glb": 300,
                "Animation_21_Empty_2.glb": 600,
                "Animation_22_Empty.glb": 300,
                "Animation_22_Empty_2.glb": 600,
                "Animation_23_Empty.glb": 300,
                "Animation_24_Empty.glb": 300,
                "Animation_25_Empty.glb": 300,
                "Animation_25_Empty_2.glb": 600,
                "Animation_27_Empty.glb": 300,
                "Animation_27_Empty_2.glb": 600,
                "Animation_30_Empty.glb": 300,
                "Animation_30_Empty_2.glb": 600,
                "Animation_31_Empty.glb": 300,
                "Animation_31_Empty_2.glb": 600,
                "Vertical_Animation_1_Empty.glb": 188,
                "Vertical_Animation_2_Empty.glb": 188,
                "Vertical_Animation_3_Empty.glb": 240,
                "Vertical_Animation_4_Empty.glb": 240,
                "Vertical_Animation_5_Empty.glb": 240,
                "Vertical_Animation_6_Empty.glb": 240,
                "Vertical_Animation_7_Empty.glb": 240,
                "Vertical_Animation_8_Empty.glb": 300,
                "Vertical_Animation_9_Empty.glb": 300,
                "Vertical_Animation_10_Empty.glb": 300,
                "Vertical_Animation_11_Empty.glb": 301,
                "Vertical_Animation_12_Empty.glb": 300,
                "Vertical_Animation_13_Empty.glb": 300,
                "Vertical_Animation_13_Empty_2.glb": 600,
                "Vertical_Animation_14_Empty.glb": 300,
                "Vertical_Animation_14_Empty_2.glb": 600,
                "Vertical_Animation_15_Empty.glb": 300,
                "Vertical_Animation_15_Empty_2.glb": 600,
                "Vertical_Animation_16_Empty.glb": 300,
                "Vertical_Animation_16_Empty_2.glb": 600,
                "Vertical_Animation_17_Empty.glb": 300,
                "Vertical_Animation_17_Empty_2.glb": 600,
                "Vertical_Animation_18_Empty.glb": 300,
                "Vertical_Animation_18_Empty_2.glb": 600,
                "Vertical_Animation_19_Empty.glb": 300,
                "Vertical_Animation_19_Empty_2.glb": 600,
                "Vertical_Animation_20_Empty.glb": 300,
                "Vertical_Animation_20_Empty_2.glb": 600,
                "Vertical_Animation_21_Empty.glb": 300,
                "Vertical_Animation_21_Empty_2.glb": 600,
                "Vertical_Animation_22_Empty.glb": 300,
                "Vertical_Animation_22_Empty_2.glb": 600,
                "Vertical_Animation_23_Empty.glb": 300,
                "Vertical_Animation_23_Empty_2.glb": 600,
                "Vertical_Animation_24_Empty.glb": 300,
                "Vertical_Animation_24_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_1_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_1_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_2_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_2_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_3_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_3_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_4_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_4_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_5_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_5_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_6_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_7_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_7_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_8_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_8_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_9_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_10_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_10_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_11_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_11_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_12_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_13_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_14_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_15_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_15_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_16_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_16_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_17_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_17_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_18_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_18_Empty_2.glb": 600,
                "ComputerAnimations/Computer_Animation_19_Empty.glb": 300,
                "ComputerAnimations/Computer_Animation_19_Empty_2.glb": 600,
                "ComputerAnimations/Vertical_Computer_Animation_1_Empty.glb": 300,
                "ComputerAnimations/Vertical_Computer_Animation_1_Empty_2.glb": 600,
                "ComputerAnimations/Vertical_Computer_Animation_2_Empty.glb": 300,
                "ComputerAnimations/Vertical_Computer_Animation_2_Empty_2.glb": 600,
                "ComputerAnimations/Vertical_Computer_Animation_3_Empty.glb": 300,
                "ComputerAnimations/Vertical_Computer_Animation_3_Empty_2.glb": 600,
                "ComputerAnimations/Vertical_Computer_Animation_4_Empty.glb": 300,
                "ComputerAnimations/Vertical_Computer_Animation_4_Empty_2.glb": 600,
                "ComputerAnimations/Vertical_Computer_Animation_5_Empty.glb": 300,
                "ComputerAnimations/Vertical_Computer_Animation_5_Empty_2.glb": 600,
                "Vertical_Animation_25_Empty.glb": 300,
                "Vertical_Animation_25_Empty_2.glb": 600,
                "Vertical_Animation_26_Empty.glb": 300,
                "Vertical_Animation_26_Empty_2.glb": 600,
                "Vertical_Animation_27_Empty.glb": 300,
                "Vertical_Animation_27_Empty_2.glb": 600,
                "Animation_23_Empty_2.glb": 600,
                "Animation_24_Empty_2.glb": 600,
                "Animation_32_Empty.glb": 300,
                "Animation_32_Empty_2.glb": 600,
                "Animation_33_Empty.glb": 300,
                "Animation_33_Empty_2.glb": 600,
                "Animation_34_Empty.glb": 300,
                "Animation_34_Empty_2.glb": 600,
                "Animation_35_Empty.glb": 300,
                "Animation_35_Empty_2.glb": 600
            };

            function i() {
                let e, {
                    isVertical: t = !1,
                    isComputer: r = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e = r ? t ? o.om : o.wg : t ? o.u_ : o.jF, (0, o.Kf)(e).map(e => {
                    let o = e.replace(".glb", "").replace("Animation_", "Anim ").replace("Vertical_", "Vertical ").replace("_Empty", "").replace(/_/g, " ");
                    return {
                        id: e,
                        label: o,
                        sceneName: e,
                        previewUrl: null,
                        isVertical: t,
                        isComputer: r,
                        defaultDurationInFrames: n[e] || 600
                    }
                })
            }

            function a(e) {
                let t = n[e];
                return t ? {
                    sceneName: e,
                    defaultDurationInFrames: t
                } : null
            }
        },
        3515: function(e, t, r) {
            "use strict";
            r.d(t, {
                AA: function() {
                    return l
                },
                UN: function() {
                    return u
                },
                V3: function() {
                    return c
                },
                bY: function() {
                    return p
                },
                wp: function() {
                    return a
                },
                zd: function() {
                    return s
                }
            });
            let o = "snapshots",
                n = "current";

            function i() {
                return new Promise((e, t) => {
                    if ("undefined" == typeof indexedDB) {
                        t(Error("IndexedDB unavailable"));
                        return
                    }
                    let r = indexedDB.open("lumio_studio_autosave", 1);
                    r.onupgradeneeded = () => {
                        let e = r.result;
                        e.objectStoreNames.contains(o) || e.createObjectStore(o)
                    }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error)
                })
            }
            async function a(e) {
                let t, {
                    projectName: r,
                    outputAspectRatio: a,
                    clips: s,
                    crashed: l = !1
                } = e;
                try {
                    t = await i(), await new Promise((e, i) => {
                        let d = t.transaction(o, "readwrite");
                        d.objectStore(o).put({
                            projectName: r || "Untitled project",
                            outputAspectRatio: "9:16" === a ? "9:16" : "16:9",
                            clips: s || [],
                            savedAt: Date.now(),
                            crashed: l
                        }, n), d.oncomplete = () => e(), d.onerror = () => i(d.error)
                    })
                } catch {} finally {
                    t ?.close()
                }
            }
            async function s() {
                let e;
                try {
                    e = await i();
                    let t = await new Promise((t, r) => {
                        let i = e.transaction(o, "readonly").objectStore(o).get(n);
                        i.onsuccess = () => t(i.result || null), i.onerror = () => r(i.error)
                    });
                    if (!t) return null;
                    if (Date.now() - t.savedAt > 864e5) return l(), null;
                    return t
                } catch {
                    return null
                } finally {
                    e ?.close()
                }
            }
            async function l() {
                let e;
                try {
                    e = await i(), await new Promise((t, r) => {
                        let i = e.transaction(o, "readwrite");
                        i.objectStore(o).delete(n), i.oncomplete = () => t(), i.onerror = () => r(i.error)
                    })
                } catch {} finally {
                    e ?.close()
                }
            }
            let d = null;

            function c(e) {
                d = e
            }

            function p() {
                if (d) return a({ ...d,
                    crashed: !0
                })
            }

            function u(e) {
                let t = 0;
                return {
                    clips: (e || []).map(e => {
                        let r = e ?.props || {},
                            o = !1,
                            n = { ...r
                            };
                        for (let [e, i] of Object.entries(r)) {
                            if ("string" != typeof i || !i.startsWith("blob:")) continue;
                            let a = r._mediaFileNames ?.[e] || "media file";
                            n[e] = null, n._missingMedia = { ...n._missingMedia || {},
                                [e]: a
                            }, o = !0, t += 1
                        }
                        return o ? { ...e,
                            props: n
                        } : e
                    }),
                    missingCount: t
                }
            }
        },
        564: function(e, t, r) {
            "use strict";
            r.d(t, {
                Lr: function() {
                    return o
                },
                Rj: function() {
                    return n
                },
                n: function() {
                    return i
                }
            });
            let o = "#E8797A",
                n = function(e) {
                    let {
                        disabled: t = !1,
                        needsCredits: r = !1
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return t ? {
                        background: e.surfaceAlt,
                        color: e.textSecondary,
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: "none"
                    } : r ? {
                        background: "rgba(232, 121, 122, 0.12)",
                        color: o,
                        border: `1px solid ${o}`,
                        boxShadow: "none"
                    } : {
                        background: o,
                        color: "#ffffff",
                        border: `1px solid ${o}`,
                        boxShadow: "none"
                    }
                },
                i = {
                    padding: "8px 14px",
                    borderRadius: "8px",
                    border: `1px solid ${o}`,
                    background: o,
                    color: "#ffffff",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 600,
                    boxShadow: "none"
                }
        },
        5057: function(e, t, r) {
            "use strict";
            r.d(t, {
                Qk: function() {
                    return m
                },
                ensurePlaybackVideoUrl: function() {
                    return g
                },
                releaseStudioMainThreadFfmpeg: function() {
                    return a
                },
                trimVideoBlob: function() {
                    return f
                }
            });
            var o = r(8959);
            let n = null,
                i = null;

            function a() {
                s()
            }

            function s() {
                if (n) try {
                    n.terminate()
                } catch {}
                n = null, i = null
            }

            function l(e) {
                return new Promise((t, r) => {
                    let o = new FileReader;
                    o.onload = () => t(o.result), o.onerror = () => r(o.error || Error("read failed")), o.readAsDataURL(e)
                })
            }
            async function d() {
                return n ?.loaded ? n : i || (i = (async () => {
                    let {
                        FFmpeg: e
                    } = await r.e(9658).then(r.bind(r, 9658)), {
                        toBlobURL: t
                    } = await r.e(1187).then(r.bind(r, 1187)), o = new e, i = "/ffmpeg";
                    return await o.load({
                        coreURL: await t(`${i}/ffmpeg-core.js`, "text/javascript"),
                        wasmURL: await t(`${i}/ffmpeg-core.wasm`, "application/wasm")
                    }), n = o, o
                })())
            }

            function c(e, t) {
                let r = (e.type || "").toLowerCase();
                if (r.includes("quicktime")) return "mov";
                if (r.includes("webm")) return "webm";
                if (r.includes("matroska")) return "mkv";
                let o = (t || "").split(".").pop() ?.toLowerCase().replace(/[^a-z0-9]/g, "");
                return "mov" === o || "webm" === o || "mkv" === o ? o : "mp4"
            }
            async function p(e, t) {
                let r, {
                    onProgress: o
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                try {
                    let n;
                    let i = await d(),
                        a = Date.now(),
                        s = `scr_${a}_in.${t}`,
                        l = `scr_${a}_out.mp4`;
                    await i.writeFile(s, new Uint8Array(e)), "function" == typeof o && (r = e => {
                        let {
                            progress: t
                        } = e;
                        o(Math.min(.99, Math.max(0, "number" == typeof t ? t : 0)))
                    }, i.on("progress", r));
                    let c = !1;
                    for (let [e, r] of [
                            [!1, !0],
                            [!1, !1],
                            [!0, !0],
                            [!0, !1]
                        ]) {
                        await i.deleteFile(l).catch(() => {});
                        try {
                            let o = await i.exec(function(e, t, r, o, n) {
                                let i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "mp4",
                                    a = "mov" === i ? ["-f", "mov"] : [],
                                    s = n ? [...a, "-i", e, "-vf", r, "-c:v", "libx264", "-preset", "veryfast", "-crf", "23", "-pix_fmt", "yuv420p", "-movflags", "+faststart"] : [...a, "-i", e, "-vf", r, "-vsync", "cfr", "-r", "30", "-c:v", "libx264", "-preset", "veryfast", "-crf", "23", "-pix_fmt", "yuv420p", "-g", "30", "-movflags", "+faststart"];
                                return o ? s.push("-c:a", "aac", "-b:a", "128k") : s.push("-an"), s.push(t), s
                            }(s, l, "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease,fps=30", e, r, t));
                            if (0 === o) {
                                c = !0;
                                break
                            }
                            n = Error(`ffmpeg exited with code ${o}`)
                        } catch (e) {
                            if (n = e, function(e) {
                                    let t = e instanceof Error ? e.message : String(e || "");
                                    return /memory access out of bounds/i.test(t) || /out of memory|allocation failed/i.test(t)
                                }(e)) break
                        }
                    }
                    if (!c) throw n || Error("ffmpeg transcode failed");
                    let p = await i.readFile(l);
                    return await i.deleteFile(s).catch(() => {}), await i.deleteFile(l).catch(() => {}), new Blob([p], {
                        type: "video/mp4"
                    })
                } finally {
                    if (n && r) try {
                        n.off("progress", r)
                    } catch {}
                    "function" == typeof o && o(1)
                }
            }

            function u(e) {
                let t = "";
                for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                return /hvc1|hev1|hvt1|hevC|hvcC/i.test(t)
            }

            function x(e) {
                let t = new Uint8Array(e);
                return !!(u(t.subarray(0, Math.min(t.length, 1048576))) || t.length > 1048576 && u(t.subarray(Math.max(0, t.length - 1048576))))
            }
            async function h(e, t) {
                let r = await t ?.();
                if (!r) throw Error("Sign in required to export this video in Firefox");
                let o = await new Promise((t, r) => {
                        let o = new FileReader;
                        o.onload = () => t(o.result), o.onerror = () => r(o.error || Error("read failed")), o.readAsDataURL(e)
                    }),
                    n = await fetch("/api/normalize-video", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${r}`
                        },
                        body: JSON.stringify({
                            dataUrl: o
                        })
                    }),
                    i = await n.json().catch(() => ({}));
                if (!n.ok) throw Error(i.error || `Video normalization failed (${n.status})`);
                if (!i.dataUrl) throw Error("Video normalization returned no data");
                if (x(await fetch(i.dataUrl).then(e => e.arrayBuffer()))) throw Error("Server could not convert HEVC video to H.264");
                return {
                    url: i.dataUrl,
                    revoke: null
                }
            }
            async function g(e) {
                let {
                    onProgress: t,
                    getAuthToken: r
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e || !(0, o.PR)()) return {
                    url: e,
                    revoke: null
                };
                let n = await fetch(e).then(e => e.blob()),
                    i = await n.arrayBuffer();
                if (!x(i) && await
                    function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12e3;
                        return new Promise(r => {
                            if (!e) {
                                r(!1);
                                return
                            }
                            let o = document.createElement("video");
                            o.muted = !0, o.playsInline = !0, o.preload = "auto";
                            let n = e => {
                                    clearTimeout(i);
                                    try {
                                        o.pause(), o.removeAttribute("src"), o.load()
                                    } catch {}
                                    r(e)
                                },
                                i = setTimeout(() => n(!1), t);
                            o.addEventListener("error", () => n(!1), {
                                once: !0
                            }), o.addEventListener("loadedmetadata", () => {
                                let e = Number.isFinite(o.duration) && o.duration > 0 ? Math.min(.1, .05 * o.duration) : 0;
                                try {
                                    o.currentTime = e
                                } catch {
                                    n(!1)
                                }
                            }, {
                                once: !0
                            }), o.addEventListener("seeked", () => {
                                n(o.videoWidth > 0 && o.videoHeight > 0)
                            }, {
                                once: !0
                            }), o.src = e
                        })
                    }(e)) return {
                    url: e,
                    revoke: null
                };
                if (n.size <= 44040192) try {
                    "function" == typeof t && t(.05);
                    let e = await p(i, c(n), {
                            onProgress: e => {
                                "function" == typeof t && t(.05 + .9 * e)
                            }
                        }),
                        r = URL.createObjectURL(e);
                    return "function" == typeof t && t(1), {
                        url: r,
                        revoke: r
                    }
                } catch (e) {
                    console.warn("[ensurePlaybackVideoUrl] local ffmpeg transcode failed, falling back to server:", e ?.message || e), s()
                }
                if (!r) throw Error("Sign in required to export this video in Firefox");
                try {
                    "function" == typeof t && t(.1);
                    let e = await h(n, r);
                    return "function" == typeof t && t(1), e
                } catch (e) {
                    throw e
                }
            }
            async function m(e) {
                let {
                    onProgress: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e ?.type ?.startsWith("video/")) return t ?.(1), l(e);
                if (e.size > 44040192) {
                    if ((0, o.PR)()) throw Error("Video is too large to prepare in Firefox (max 42 MB)");
                    return t ?.(1), l(e)
                }
                try {
                    let r = await e.arrayBuffer(),
                        n = await p(r, c(e, e.name), {
                            onProgress: t
                        });
                    if ((0, o.PR)()) return URL.createObjectURL(n);
                    return new Promise((e, t) => {
                        let r = new FileReader;
                        r.onload = () => e(r.result), r.onerror = () => t(r.error || Error("read failed")), r.readAsDataURL(n)
                    })
                } catch (t) {
                    if (console.warn("[compressScreenRecordingForStudio]", t), s(), (0, o.PR)()) throw Error("Could not prepare video for Firefox. Try a shorter clip or H.264 MP4.");
                    return l(e)
                }
            }
            async function f(e, t) {
                let r;
                let o = Date.now(),
                    n = `trim_${o}_in.mp4`,
                    i = `trim_${o}_out.mp4`;
                try {
                    r = await d();
                    let o = await e.arrayBuffer();
                    await r.writeFile(n, new Uint8Array(o));
                    let a = await r.exec(["-i", n, "-t", String(t.toFixed(3)), "-vf", "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease,fps=30", "-c:v", "libx264", "-preset", "veryfast", "-crf", "28", "-pix_fmt", "yuv420p", "-an", "-movflags", "+faststart", i]);
                    if (0 !== a) throw Error(`ffmpeg trim exited with code ${a}`);
                    let s = await r.readFile(i);
                    return new Blob([s.buffer], {
                        type: "video/mp4"
                    })
                } catch (t) {
                    return console.warn("[trimVideoBlob] failed, returning original:", t ?.message || t), e
                } finally {
                    r && (await r.deleteFile(n).catch(() => {}), await r.deleteFile(i).catch(() => {}))
                }
            }
        },
        9520: function(e, t, r) {
            "use strict";
            r.d(t, {
                LU: function() {
                    return i
                },
                Q5: function() {
                    return o
                },
                v3: function() {
                    return n
                }
            });
            let o = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e) return 0;
                    let o = e / 2;
                    return r && t > 0 ? Math.max(o, t) : o
                },
                n = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e) return {
                        type: "none",
                        actualAnimationDuration: 0,
                        videoDuration: 0
                    };
                    let o = e / 2;
                    if (!r || t <= 0) return {
                        type: "animation-only",
                        actualAnimationDuration: o,
                        videoDuration: 0,
                        effectiveDuration: o
                    };
                    let n = Math.max(o, t);
                    return t < o ? {
                        type: "video-shorter",
                        actualAnimationDuration: o,
                        videoDuration: t,
                        effectiveDuration: n,
                        difference: o - t
                    } : t > o ? {
                        type: "video-longer",
                        actualAnimationDuration: o,
                        videoDuration: t,
                        effectiveDuration: n,
                        difference: t - o
                    } : {
                        type: "same-duration",
                        actualAnimationDuration: o,
                        videoDuration: t,
                        effectiveDuration: n
                    }
                },
                i = e => e < 60 ? `${e.toFixed(1)}s` : `${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`
        },
        3601: function(e, t, r) {
            "use strict";
            r.d(t, {
                extractVideoFrames: function() {
                    return s
                }
            });
            var o = r(7438);

            function n(e, t, r, o) {
                if (!(r > 0) || !(o > 0) || !(e > 0) || !(t > 0)) return null;
                let n = Math.min(r / e, o / t, 1);
                return n >= 1 ? null : {
                    width: Math.max(2, Math.round(e * n)),
                    height: Math.max(2, Math.round(t * n))
                }
            }
            async function i(e, t, i, a, s) {
                let l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                    d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                    c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                    {
                        Input: p,
                        BlobSource: u,
                        CanvasSink: x,
                        ALL_FORMATS: h
                    } = await Promise.all([r.e(8760), r.e(3769), r.e(5872)]).then(r.bind(r, 6923)),
                    g = new p({
                        formats: h,
                        source: new u(await fetch(e).then(e => e.blob()))
                    }),
                    m = await g.getPrimaryVideoTrack();
                if (!m) throw Error("No video track");
                if (!await m.canDecode()) throw Error("Video track cannot be decoded");
                let f = await m.computeDuration(),
                    b = null != c && Number.isFinite(Number(c)) ? Math.min(Number(c), f) : f,
                    y = Math.ceil(t * i),
                    v = 1 / t,
                    j = (0, o.Cp)(a, .5),
                    w = [];
                for (let e = 0; e < y; e++) {
                    let r = e * v,
                        n = (0, o.calculateVideoSync)({
                            currentTime: r,
                            videoDuration: Math.max(.001, b - l),
                            animationDuration: j,
                            frameIndex: e,
                            totalVideoFrames: Math.ceil(Math.max(.001, b - l) * t),
                            fps: t
                        }),
                        i = (null != n.seekTime ? n.seekTime : r) + l;
                    w.push(Math.max(0, Math.min(i, b - .001, f - .001)))
                }
                let k = {
                        poolSize: 2
                    },
                    C = d ? n(m.displayWidth, m.displayHeight, d.maxWidth, d.maxHeight) : null;
                C && (k.width = C.width, k.height = C.height, k.fit = "fill");
                let S = new x(m, k),
                    E = [],
                    _ = 0;
                for await (let e of S.canvasesAtTimestamps(w)) {
                    if (null == e) {
                        _++;
                        continue
                    }
                    let t = await createImageBitmap(e.canvas);
                    if (E.push({
                            index: _,
                            imageBitmap: t,
                            time: _ * v,
                            videoTime: e.timestamp,
                            videoDuration: f
                        }), s) {
                        let e = Math.min(99, Math.max(1, Math.round((_ + 1) / y * 100)));
                        s(`Extracting video frames... ${_+1}/${y} (${e}%)`)
                    }
                    _++
                }
                return E.sort((e, t) => e.index - t.index)
            }
            async function a(e, t, r, i, a, s, l, d, c) {
                let p = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
                    u = Math.max(1, Math.min(c, d)),
                    x = Math.ceil(d / u),
                    h = [];
                for (let e = 0; e < u; e++) {
                    let t = e * x,
                        r = Math.min(t + x, d);
                    t < r && h.push({
                        start: t,
                        end: r
                    })
                }
                let g = 0,
                    m = -1,
                    f = () => {
                        let e = Math.min(99, Math.max(1, Math.round(++g / d * 100)));
                        e > m && a && (m = e, a(`Extracting video frames... ${g}/${d} (${e}%)`))
                    };
                return (await Promise.all(h.map(a => {
                    let {
                        start: c,
                        end: u
                    } = a;
                    return function(e, t, r, i, a, s, l, d) {
                        let c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
                            p = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
                            u = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
                        return new Promise((a, d) => {
                            let x = document.createElement("video");
                            x.crossOrigin = "anonymous", x.muted = !0, x.playsInline = !0;
                            let h = [],
                                g = 1 / i,
                                m = t;

                            function f() {
                                if (m >= r) {
                                    a(h);
                                    return
                                }
                                let e = m * g,
                                    t = x.duration,
                                    n = null != u && Number.isFinite(Number(u)) ? Math.min(Number(u), t) : t,
                                    l = Math.max(.001, n - c),
                                    d = ((0, o.calculateVideoSync)({
                                        currentTime: e,
                                        videoDuration: l,
                                        animationDuration: s,
                                        frameIndex: m,
                                        totalVideoFrames: Math.ceil(l * i),
                                        fps: i
                                    }).seekTime ?? e) + c;
                                x.currentTime = Math.max(0, Math.min(d, n - .001, t - .001))
                            }
                            x.addEventListener("loadedmetadata", () => f()), x.addEventListener("seeked", () => {
                                let e = document.createElement("canvas"),
                                    t = e.getContext("2d"),
                                    r = p ? n(x.videoWidth, x.videoHeight, p.maxWidth, p.maxHeight) : null;
                                e.width = r ? r.width : x.videoWidth, e.height = r ? r.height : x.videoHeight, t.drawImage(x, 0, 0, e.width, e.height), e.toBlob(e => {
                                    if (e) {
                                        let t = URL.createObjectURL(e);
                                        h.push({
                                            index: m,
                                            url: t,
                                            time: m * g,
                                            videoTime: x.currentTime,
                                            videoDuration: x.duration
                                        }), m++, l && l(), f()
                                    } else d(Error(`Failed to create video frame blob for frame ${m}`))
                                }, "image/jpeg", .92)
                            }), x.addEventListener("error", () => d(x.error || Error("Video load error"))), x.src = e
                        })
                    }(e, c, u, t, r, i, f, d, s, l, p)
                }))).flat().sort((e, t) => e.index - t.index)
            }
            let s = async function(e, t, r, n) {
                let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                    {
                        videoStartTime: d = 0,
                        maxWidth: c = 0,
                        maxHeight: p = 0,
                        videoEndTime: u = null
                    } = l,
                    x = c > 0 && p > 0 ? {
                        maxWidth: c,
                        maxHeight: p
                    } : null,
                    h = Math.ceil(t * r),
                    g = (0, o.Cp)(n, .5);
                if (h <= 0) return [];
                try {
                    return await i(e, t, r, n, s, d, x, u)
                } catch {}
                try {
                    return await a(e, t, r, g, s, d, x, h, 6, u)
                } catch (o) {
                    return console.warn("[videoFrameExtractor] parallel extraction failed, retrying serially:", o ?.message || o), await a(e, t, r, g, s, d, x, h, 1, u)
                }
            }
        },
        8366: function(e, t, r) {
            "use strict";

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "videoUrl";
                if ("uploadedVideoUrl" === e || "videoUrl" === e) return {
                    startKey: "videoStartTime",
                    endKey: "videoEndTime"
                };
                let t = /^videoUrl(\d+)$/.exec(e);
                if (t) {
                    let e = t[1];
                    return {
                        startKey: `videoStartTime${e}`,
                        endKey: `videoEndTime${e}`
                    }
                }
                return {
                    startKey: `${e}StartTime`,
                    endKey: `${e}EndTime`
                }
            }

            function n() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "videoUrl",
                    {
                        startKey: r,
                        endKey: n
                    } = o(t),
                    i = Math.max(0, Number(e[r]) || 0),
                    a = e[n];
                return {
                    startKey: r,
                    endKey: n,
                    videoStartTime: i,
                    videoEndTime: null == a || "" === a ? null : Math.max(0, Number(a))
                }
            }

            function i(e, t, r) {
                let {
                    startKey: n,
                    endKey: i
                } = o(e);
                return {
                    [n]: Math.max(0, Number(t) || 0),
                    [i]: null == r ? null : Math.max(0, Number(r))
                }
            }

            function a(e, t, r) {
                let o = Math.max(0, Math.floor((e || 0) * r)),
                    n = null != t && Number.isFinite(Number(t)) ? Math.max(o + 1, Math.floor(Number(t) * r)) : void 0;
                return {
                    trimBefore: o,
                    trimAfter: n
                }
            }

            function s(e) {
                let t = Math.max(0, Number(e) || 0),
                    r = Math.floor(t / 60),
                    o = t - 60 * r,
                    n = Math.floor(o);
                return `${r}:${String(n).padStart(2,"0")}.${Math.floor((o-n)*10)}`
            }
            r.d(t, {
                C2: function() {
                    return s
                },
                GQ: function() {
                    return a
                },
                Jx: function() {
                    return i
                },
                PK: function() {
                    return n
                }
            })
        },
        8959: function(e, t, r) {
            "use strict";

            function o() {
                let e = "undefined" != typeof self && self.navigator ?.userAgent || "undefined" != typeof navigator && navigator.userAgent || "";
                return /Firefox|FxiOS/i.test(e)
            }
            r.d(t, {
                PR: function() {
                    return o
                }
            })
        },
        5680: function(e) {
            e.exports = {
                overlay: "VideoTrimModal_overlay__e4fco",
                modal: "VideoTrimModal_modal__q2C0X",
                rise: "VideoTrimModal_rise__TFVUD",
                isVertical: "VideoTrimModal_isVertical__TDlBN",
                close: "VideoTrimModal_close__PbVZe",
                body: "VideoTrimModal_body___ZKIu",
                previewShell: "VideoTrimModal_previewShell__dMTYI",
                isHorizontal: "VideoTrimModal_isHorizontal__Gw3gZ",
                meta: "VideoTrimModal_meta__HBVNW",
                controls: "VideoTrimModal_controls__2utx_",
                play: "VideoTrimModal_play__KFsHk",
                track: "VideoTrimModal_track__EmP5d",
                dim: "VideoTrimModal_dim__ue8Mu",
                sel: "VideoTrimModal_sel__hto7K",
                handle: "VideoTrimModal_handle__ea7vM",
                playhead: "VideoTrimModal_playhead___KK3R",
                actions: "VideoTrimModal_actions__EsZTG",
                btnSecondary: "VideoTrimModal_btnSecondary__EU4f3",
                btnPrimary: "VideoTrimModal_btnPrimary__LvEqc"
            }
        }
    }
]);