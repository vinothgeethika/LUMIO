"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1218], {
        1873: function(t, i, e) {
            e.d(i, {
                gG: function() {
                    return r
                }
            });
            var n = e(5893);
            e(7294);
            let o = {
                fontFamily: "Figtree, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1
            };

            function a(t) {
                let {
                    className: i,
                    style: e,
                    variant: o = "brand"
                } = t, a = "quiet" === o;
                return (0, n.jsx)("span", {
                    className: i,
                    style: {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: a ? void 0 : "20px",
                        boxSizing: "border-box",
                        background: a ? "#1e1e20" : "linear-gradient(135deg, #FF6B6B 0%, #845EC2 100%)",
                        color: a ? "rgba(255, 255, 255, 0.55)" : "#fff",
                        padding: a ? "3px 8px" : "2px 8px 0",
                        borderRadius: a ? 6 : "999px",
                        fontSize: "10px",
                        fontWeight: a ? 600 : 700,
                        letterSpacing: a ? "0.08em" : "0.8px",
                        lineHeight: 1,
                        flexShrink: 0,
                        boxShadow: a ? "none" : "0 2px 8px rgba(255, 107, 107, 0.25)",
                        ...e
                    },
                    children: "BETA"
                })
            }

            function r(t) {
                let {
                    as: i = "span",
                    color: e,
                    logoSize: o = 26,
                    className: r,
                    style: l,
                    logoStyle: _,
                    showBeta: s = !0,
                    betaVariant: p = "brand"
                } = t;
                return (0, n.jsxs)("div", {
                    className: r,
                    style: {
                        display: "inline-flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 12,
                        overflow: "visible",
                        ...l
                    },
                    children: [(0, n.jsx)(m, {
                        as: i,
                        style: {
                            color: e,
                            fontSize: o,
                            display: "block",
                            margin: 0,
                            ..._
                        }
                    }), s ? (0, n.jsx)(a, {
                        variant: p,
                        style: {
                            transform: `translateY(${Math.round(.08*o)}px)`
                        }
                    }) : null]
                })
            }

            function m(t) {
                let {
                    as: i = "span",
                    className: e,
                    style: a,
                    children: r,
                    ...m
                } = t;
                return (0, n.jsx)(i, {
                    className: e,
                    style: { ...o,
                        ...a
                    },
                    ...m,
                    children: r ?? "LUMIO"
                })
            }
        },
        1283: function(t, i, e) {
            e.d(i, {
                Z: function() {
                    return s
                }
            });
            var n = e(5893),
                o = e(7294),
                a = e(5346),
                r = e(92);

            function m(t) {
                return `discordToastSessionCount_${t}`
            }

            function l(t) {
                return `discordToastSessionMarked_${t}`
            }
            var _ = e(3190),
                s = function(t) {
                    let {
                        currentUser: i,
                        theme: e
                    } = t, [s, p] = (0, o.useState)(!1), c = (0, o.useRef)(!1), u = (0, o.useCallback)(() => {
                        i && !c.current && (c.current = !0, (0, r.mM)(i.uid).catch(() => {}))
                    }, [i]);
                    return ((0, o.useEffect)(() => {
                        if (!i) return;
                        let t = !1;
                        return (async () => {
                            try {
                                let e = function(t) {
                                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : globalThis;
                                    if (!t) return 0;
                                    try {
                                        let e = i.sessionStorage,
                                            n = i.localStorage;
                                        if (!e.getItem(l(t))) {
                                            e.setItem(l(t), "1");
                                            let i = Number(n.getItem(m(t)) || 0) + 1;
                                            return n.setItem(m(t), String(i)), i
                                        }
                                        return Number(n.getItem(m(t)) || 0)
                                    } catch {
                                        return 1
                                    }
                                }(i.uid);
                                if (t) return;
                                let n = await (0, r.e4)(i.uid);
                                if (t || !i || !0 === n || !(e >= 2)) return;
                                p(!0), _.Z.track("founder_welcome_shown", {
                                    trigger: "logged_in"
                                })
                            } catch {}
                        })(), () => {
                            t = !0
                        }
                    }, [i]), s && i) ? (0, n.jsx)("div", {
                        className: "discord-toast",
                        children: (0, n.jsxs)("div", {
                            className: "discord-toast-card",
                            style: {
                                backgroundColor: e.surface,
                                border: `1px solid ${e.border}`,
                                color: e.text
                            },
                            children: [(0, n.jsx)("button", {
                                type: "button",
                                className: "discord-toast-close",
                                style: {
                                    color: e.textSecondary
                                },
                                onClick: () => {
                                    u(), p(!1)
                                },
                                "aria-label": "Close",
                                children: "\xd7"
                            }), (0, n.jsxs)("div", {
                                className: "discord-toast-header",
                                children: [(0, n.jsx)("span", {
                                    className: "discord-toast-logo",
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(a.j2d, {})
                                }), (0, n.jsxs)("div", {
                                    className: "discord-toast-copy",
                                    children: [(0, n.jsx)("h3", {
                                        className: "discord-toast-title",
                                        style: {
                                            color: e.text
                                        },
                                        children: "We just started a Discord"
                                    }), (0, n.jsx)("p", {
                                        className: "discord-toast-body",
                                        style: {
                                            color: e.textSecondary
                                        },
                                        children: "Feel free to drop feedback, request features, or suggest templates."
                                    }), (0, n.jsx)("button", {
                                        type: "button",
                                        className: "discord-toast-join",
                                        onClick: () => {
                                            _.Z.track("founder_welcome_discord_clicked"), window.open("https://discord.gg/cSyHzbVbX", "_blank", "noopener,noreferrer"), u(), p(!1)
                                        },
                                        children: "Join"
                                    })]
                                })]
                            })]
                        })
                    }) : null
                }
        },
        7988: function(t, i, e) {
            var n = e(5893),
                o = e(7294),
                a = e(8259),
                r = e(8947);
            i.Z = () => {
                let [t, i] = (0, o.useState)(null), [e, m] = (0, o.useState)(null), {
                    currentUser: l
                } = (0, a.a)(), _ = (0, r._)();
                if ((0, o.useEffect)(() => {
                        let t = new URLSearchParams(window.location.search),
                            e = t.get("payment"),
                            n = t.get("type") || "subscription";
                        if ("success" === e || "cancelled" === e) {
                            i(e), m(n);
                            let t = window.location.pathname;
                            window.history.replaceState({}, document.title, t);
                            let o = setTimeout(() => {
                                i(null)
                            }, 2e3);
                            return () => clearTimeout(o)
                        }
                    }, [_.search]), !t) return null;
                let s = "credits" === e ? {
                        title: "Credits Added!",
                        message: "Your credits have been added to your account"
                    } : {
                        title: "Payment Successful!",
                        message: "You can now start using the app"
                    },
                    p = "credits" === e ? {
                        title: "Credit Purchase Cancelled",
                        message: "No worries! You can buy credits anytime."
                    } : {
                        title: "Payment Cancelled",
                        message: "No worries! You can try again anytime."
                    };
                return (0, n.jsx)("div", {
                    className: `payment-notification ${t}`,
                    children: (0, n.jsxs)("div", {
                        className: "payment-notification-content",
                        children: ["success" === t ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: "payment-icon success",
                                children: "✅"
                            }), (0, n.jsxs)("div", {
                                className: "payment-message",
                                children: [(0, n.jsx)("h3", {
                                    children: s.title
                                }), (0, n.jsx)("p", {
                                    children: s.message
                                })]
                            })]
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: "payment-icon cancelled",
                                children: "❌"
                            }), (0, n.jsxs)("div", {
                                className: "payment-message",
                                children: [(0, n.jsx)("h3", {
                                    children: p.title
                                }), (0, n.jsx)("p", {
                                    children: p.message
                                })]
                            })]
                        }), (0, n.jsx)("button", {
                            className: "payment-close",
                            onClick: () => i(null),
                            children: "\xd7"
                        })]
                    })
                })
            }
        },
        7219: function(t, i, e) {
            e.d(i, {
                T0: function() {
                    return a
                },
                Ww: function() {
                    return m
                },
                YB: function() {
                    return l
                },
                jo: function() {
                    return r
                }
            });
            var n = e(5837);
            let o = n.ZG,
                a = {
                    monthly: {
                        name: "Unlimited Monthly",
                        price: 29,
                        unit: "/mo",
                        note: "Billed monthly",
                        priceId: n.iG
                    },
                    yearly: {
                        name: "Unlimited Yearly",
                        price: 149,
                        monthlyEquivalent: 12.42,
                        unit: "/mo",
                        priceId: n.X_
                    }
                },
                r = {
                    seven: {
                        name: "Credit Pack",
                        credits: 7,
                        price: 9.99,
                        priceId: o,
                        description: "7 exports",
                        popular: !0
                    }
                },
                m = t => {
                    for (let [i, e] of Object.entries(a))
                        if (e.priceId === t) return e.name;
                    return "Unknown Plan"
                },
                l = t => {
                    for (let [i, e] of Object.entries(r))
                        if (e.priceId === t) return e;
                    return null
                }
        },
        8275: function(t, i, e) {
            e.d(i, {
                b: function() {
                    return d
                }
            });
            var n = e(7294),
                o = e(6036),
                a = e(5837),
                r = e(7219);
            let m = (t, i) => new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: i,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).format(t),
                l = m(r.T0.monthly.price, "USD"),
                _ = m(r.T0.yearly.monthlyEquivalent, "USD"),
                s = m(r.T0.yearly.price, "USD"),
                p = m(r.jo.seven.price, "USD"),
                c = m(r.jo.seven.price / r.jo.seven.credits, "USD"),
                u = () => null,
                d = () => {
                    let [t, i] = (0, n.useState)(l), [e, d] = (0, n.useState)(_), [g, y] = (0, n.useState)(s), [A, b] = (0, n.useState)(p), [E, C] = (0, n.useState)(c);
                    return (0, n.useEffect)(() => {
                        let t = !1;
                        return (async () => {
                            try {
                                let e = await (0, o.fG)(),
                                    n = u(),
                                    l = await e.PricePreview({
                                        items: [{
                                            priceId: a.iG,
                                            quantity: 1
                                        }, {
                                            priceId: a.X_,
                                            quantity: 1
                                        }, {
                                            priceId: a.ZG,
                                            quantity: 1
                                        }],
                                        ...n && {
                                            address: {
                                                countryCode: n
                                            }
                                        }
                                    });
                                if (t) return;
                                let _ = l ?.data ?.currencyCode,
                                    s = l ?.data ?.details ?.lineItems || [],
                                    p = s.find(t => t.price ?.id === a.iG),
                                    c = s.find(t => t.price ?.id === a.X_),
                                    g = s.find(t => t.price ?.id === a.ZG);
                                if (p ?.formattedTotals ?.total && i(p.formattedTotals.total), c ?.formattedTotals ?.total && y(c.formattedTotals.total), c ?.totals ?.total && _) {
                                    let t = Number(c.totals.total) / 100 / 12;
                                    d(m(t, _))
                                }
                                if (g ?.formattedTotals ?.total && b(g.formattedTotals.total), g ?.totals ?.total && _) {
                                    let t = Number(g.totals.total) / 100 / r.jo.seven.credits;
                                    C(m(t, _))
                                }
                            } catch (t) {
                                console.error("PricePreview failed, keeping static pricing:", t)
                            }
                        })(), () => {
                            t = !0
                        }
                    }, []), {
                        monthlyPrice: t,
                        yearlyPrice: e,
                        yearlyTotalPrice: g,
                        creditPackPrice: A,
                        creditPackPerCreditPrice: E
                    }
                }
        },
        8947: function(t, i, e) {
            function n() {
                return function(t) {
                    window.location.href = t
                }
            }

            function o() {
                return {
                    pathname: window.location.pathname,
                    search: window.location.search
                }
            }
            e.d(i, {
                _: function() {
                    return o
                },
                h: function() {
                    return n
                }
            })
        },
        5604: function(t, i, e) {
            e.d(i, {
                m: function() {
                    return l
                }
            });
            let l = () => ({
                isPremium: !0,
                subscription: {
                    id: "sub_pro_unlimited",
                    status: "active",
                    plan: "pro",
                    current_billing_period: {
                        ends_at: { seconds: 253402300799 }
                    }
                },
                loading: !1,
                error: null
            })
        },
        4467: function(t, i, e) {
            e.d(i, {
                F: function() {
                    return o
                }
            });
            var n = e(7294);

            function o() {
                let [t, i] = (0, n.useState)(!0);
                return {
                    theme: (0, n.useMemo)(() => ({
                        background: t ? "#0a0a0a" : "#f5f5f5",
                        surface: t ? "#1a1a1a" : "#ffffff",
                        surfaceAlt: t ? "#222222" : "#e8e8e8",
                        text: t ? "#f0f0f0" : "#161616",
                        textSecondary: t ? "#c0c0c0" : "#666",
                        border: t ? "#2a2a2a" : "#e0e0e0"
                    }), [t]),
                    isDarkMode: t,
                    setIsDarkMode: i
                }
            }
        },
        2616: function(t, i, e) {
            e.d(i, {
                I: function() {
                    return a
                }
            });
            var n = e(6036),
                o = e(3977);
            let a = async t => {
                let {
                    currentUser: i,
                    navigate: e,
                    priceId: a,
                    paymentType: r = "subscription",
                    returnUrl: m = null
                } = t;
                if (!i) {
                    e("/auth");
                    return
                }
                try {
                    let t = m;
                    t || (t = window.location.href, "/auth" === window.location.pathname && (t = `${window.location.origin}/app`)), await (0, n.sK)((0, o.Mq)(), a, t, r)
                } catch (t) {
                    alert(t.message || "Failed to start checkout.")
                }
            }
        },
        3190: function(t, i, e) {
            var n = e(4651);
            class o {
                constructor() {
                    this.isInitialized = !1, this.isDevelopment = !1, this.analyticsEnabled = !1
                }
                init() {
                    this.isInitialized || (this.isDevelopment, n.ZP.init("phc_pTG53eZY3zCBtpLgbejC5Kx2E4L1B4sk2UkuFzaWYWY", {
                        api_host: "https://us.posthog.com",
                        disable_session_recording: this.isDevelopment,
                        capture_pageview: !0,
                        capture_pageleave: !0,
                        autocapture: !1,
                        person_profiles: "identified_only"
                    }), this.isInitialized = !0)
                }
                identify(t) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.isInitialized && n.ZP.identify(t, { ...i,
                        platform: "web",
                        userAgent: navigator.userAgent,
                        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                    })
                }
                track(t) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.isInitialized && this.analyticsEnabled && n.ZP.capture(t, { ...i,
                        timestamp: new Date().toISOString()
                    })
                }
                setUserProperties(t) {
                    this.isInitialized && n.ZP.setPersonProperties(t)
                }
                trackExportStarted(t) {
                    this.track("export_started", {
                        scene: t.scene,
                        format: t.isVerticalFormat ? "vertical" : "horizontal",
                        quality: t.quality || "HD",
                        duration: t.duration,
                        hasCustomImage: t.hasCustomImage || !1,
                        deviceType: t.deviceType,
                        color: t.color,
                        ...t
                    })
                }
                trackExportCompleted(t) {
                    this.track("export_completed", {
                        scene: t.scene,
                        format: t.isVerticalFormat ? "vertical" : "horizontal",
                        quality: t.quality || "HD",
                        duration: t.duration,
                        exportTime: t.exportTime,
                        fileSize: t.fileSize,
                        ...t
                    })
                }
                trackExportCancelled(t) {
                    this.track("export_cancelled", {
                        scene: t.scene,
                        format: t.isVerticalFormat ? "vertical" : "horizontal",
                        cancelReason: t.cancelReason || "user_cancelled",
                        progress: t.progress || 0,
                        ...t
                    })
                }
                trackExportDownloaded(t) {
                    this.track("export_downloaded", {
                        scene: t.scene,
                        format: t.isVerticalFormat ? "vertical" : "horizontal",
                        quality: t.quality || "HD",
                        deviceType: t.deviceType,
                        device: t.device,
                        ...t
                    })
                }
                trackExportFeedback(t) {
                    this.track("export_feedback", {
                        rating: t.rating,
                        feedback: t.feedback,
                        dismissed: t.dismissed || !1,
                        uploadedType: t.uploadedType,
                        videoDuration: t.videoDuration,
                        animation: t.animation,
                        isPremium: t.isPremium,
                        exportDuration: t.exportDuration,
                        ...t
                    })
                }
                trackSignup(t) {
                    this.track("signup", {
                        method: t.method,
                        ...t
                    })
                }
                trackSignupError(t) {
                    this.track("signup_error", {
                        method: t.method,
                        errorMessage: t.errorMessage,
                        ...t
                    })
                }
                trackExportError(t) {
                    this.track("export_error", {
                        errorMessage: t.errorMessage,
                        errorPhase: t.errorPhase,
                        errorStack: t.errorStack,
                        scene: t.scene,
                        format: t.format,
                        quality: t.quality,
                        duration: t.duration,
                        hasUploadedVideo: t.hasUploadedVideo ?? !1,
                        progress: t.progress,
                        ...t
                    })
                }
                trackSceneSelected(t) {
                    this.track("scene_selected", {
                        scene: t.scene,
                        previousScene: t.previousScene,
                        format: t.isVerticalFormat ? "vertical" : "horizontal",
                        selectionMethod: t.selectionMethod || "click",
                        ...t
                    })
                }
                trackAnimationDurationChanged(t) {
                    this.track("animation_duration_changed", {
                        duration: t.duration,
                        previousDuration: t.previousDuration,
                        scene: t.scene,
                        ...t
                    })
                }
                trackColorChanged(t) {
                    this.track("color_changed", {
                        color: t.color,
                        previousColor: t.previousColor,
                        colorType: t.colorType,
                        ...t
                    })
                }
                trackDeviceChanged(t) {
                    this.track("device_changed", {
                        device: t.device,
                        previousDevice: t.previousDevice,
                        ...t
                    })
                }
                trackImageUploaded(t) {
                    this.track("image_uploaded", {
                        fileSize: t.fileSize,
                        fileType: t.fileType,
                        imageWidth: t.imageWidth,
                        imageHeight: t.imageHeight,
                        uploadMethod: t.uploadMethod || "drag_drop",
                        ...t
                    })
                }
                trackFormatChanged(t) {
                    this.track("format_changed", {
                        format: t.isVerticalFormat ? "vertical" : "horizontal",
                        previousFormat: t.previousFormat,
                        ...t
                    })
                }
                trackCreditPurchaseInitiated(t) {
                    this.track("credit_purchase_initiated", {
                        package: t.package,
                        price: t.price,
                        credits: t.credits,
                        priceId: t.priceId,
                        ...t
                    })
                }
                trackCreditPurchaseCompleted(t) {
                    this.track("credit_purchase_completed", {
                        package: t.package,
                        price: t.price,
                        credits: t.credits,
                        priceId: t.priceId,
                        paymentMethod: t.paymentMethod,
                        ...t
                    })
                }
                trackSubscriptionStarted(t) {
                    this.track("subscription_started", {
                        planType: t.planType,
                        price: t.price,
                        priceId: t.priceId,
                        ...t
                    })
                }
                trackPaywallOpened() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.track("paywall_opened", {
                        source: t.source || "unknown",
                        ...t
                    })
                }
                trackPremiumActivated() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.track("premium_activated", {
                        planType: t.planType || null,
                        priceId: t.priceId || null,
                        subscriptionStatus: t.subscriptionStatus || null,
                        ...t
                    })
                }
                trackAppLoaded(t) {
                    this.track("app_loaded", {
                        loadTime: t.loadTime,
                        userAgent: navigator.userAgent,
                        screenWidth: window.screen.width,
                        screenHeight: window.screen.height,
                        ...t
                    })
                }
                trackFirstExportAttempt(t) {
                    this.track("first_export_attempt", {
                        timeToFirstExport: t.timeToFirstExport,
                        scene: t.scene,
                        hasCustomImage: t.hasCustomImage,
                        ...t
                    })
                }
                trackUserRegistered(t) {
                    this.track("user_registered", {
                        registrationMethod: t.registrationMethod,
                        referrer: document.referrer,
                        ...t
                    })
                }
                trackStudioEditorOpened(t) {
                    this.track("studio_editor_opened", {
                        source: t.source,
                        aspectRatio: t.aspectRatio,
                        templateSlug: t.templateSlug ?? ""
                    })
                }
                trackStudioCrashRecovered() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.track("studio_crash_recovered", {
                        aspectRatio: t.aspectRatio
                    })
                }
                trackStudioPromoTrialOfferShown() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.track("studio_promo_trial_offer_shown", {
                        initialCredits: t.initialCredits,
                        variant: t.variant ?? "standard"
                    })
                }
                trackStudioPromoTrialCreditsAccepted() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.track("studio_promo_trial_credits_accepted", {
                        granted: t.granted,
                        reason: t.reason ?? "",
                        variant: t.variant ?? "standard",
                        promoTrialCredits: t.promoTrialCredits,
                        spendableCredits: t.spendableCredits
                    })
                }
                trackStudioPromoTrialOfferDismissed() {
                    this.track("studio_promo_trial_offer_dismissed", {})
                }
                trackStudioPromoTrialBonusGranted() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.track("studio_promo_trial_bonus_granted", {
                        granted: t.granted,
                        reason: t.reason ?? "",
                        promoTrialCredits: t.promoTrialCredits,
                        spendableCredits: t.spendableCredits
                    })
                }
                trackStudioExportModalOpened(t) {
                    this.track("studio_export_modal_opened", {
                        clipCount: t.clipCount,
                        aspectRatio: t.aspectRatio,
                        creditCost: t.creditCost,
                        promoMotionTemplates: t.promoMotionTemplates ?? "",
                        promoMockupScenes: t.promoMockupScenes ?? ""
                    })
                }
                trackStudioExportStarted(t) {
                    this.track("studio_export_started", {
                        quality: t.quality,
                        aspectRatio: t.aspectRatio,
                        clipCount: t.clipCount,
                        clipTypes: t.clipTypes,
                        creditCost: t.creditCost,
                        totalDurationSec: t.totalDurationSec,
                        promoMotionTemplates: t.promoMotionTemplates ?? "",
                        promoMockupScenes: t.promoMockupScenes ?? ""
                    })
                }
                trackStudioExportCompleted(t) {
                    this.track("studio_export_completed", {
                        quality: t.quality,
                        aspectRatio: t.aspectRatio,
                        clipCount: t.clipCount,
                        clipTypes: t.clipTypes,
                        creditCost: t.creditCost,
                        durationMs: t.durationMs,
                        totalDurationSec: t.totalDurationSec,
                        promoMotionTemplates: t.promoMotionTemplates ?? "",
                        promoMockupScenes: t.promoMockupScenes ?? ""
                    })
                }
                trackStudioExportFailed(t) {
                    this.track("studio_export_failed", {
                        quality: t.quality,
                        aspectRatio: t.aspectRatio,
                        clipCount: t.clipCount,
                        clipTypes: t.clipTypes,
                        creditCost: t.creditCost,
                        errorMessage: t.errorMessage,
                        errorPhase: t.errorPhase,
                        promoMotionTemplates: t.promoMotionTemplates ?? "",
                        promoMockupScenes: t.promoMockupScenes ?? ""
                    })
                }
                trackStudioExportDownloaded(t) {
                    this.track("studio_export_downloaded", {
                        quality: t.quality,
                        aspectRatio: t.aspectRatio,
                        promoMotionTemplates: t.promoMotionTemplates ?? "",
                        promoMockupScenes: t.promoMockupScenes ?? ""
                    })
                }
                trackStudioExportRated(t) {
                    this.track("studio_export_rated", {
                        rating: t.rating,
                        feedback: t.feedback ?? "",
                        quality: t.quality,
                        aspectRatio: t.aspectRatio,
                        clipCount: t.clipCount,
                        clipTypes: t.clipTypes,
                        creditCost: t.creditCost,
                        totalDurationSec: t.totalDurationSec,
                        promoMotionTemplates: t.promoMotionTemplates ?? "",
                        promoMockupScenes: t.promoMockupScenes ?? ""
                    })
                }
                trackError(t) {
                    this.track("error_occurred", {
                        errorType: t.errorType,
                        errorMessage: t.errorMessage,
                        errorStack: t.errorStack,
                        page: window.location.pathname,
                        ...t
                    })
                }
                trackFeatureUsed(t) {
                    this.track("feature_used", {
                        feature: t.feature,
                        ...t
                    })
                }
                enableAnalytics() {
                    this.analyticsEnabled = !0, this.isInitialized || this.init()
                }
                disableAnalytics() {
                    this.analyticsEnabled = !1, this.isInitialized && n.ZP.reset && n.ZP.reset()
                }
                isAnalyticsEnabled() {
                    return this.analyticsEnabled
                }
                checkConsent() {
                    try {
                        let t = localStorage.getItem("cookieConsent");
                        if (t) {
                            let i = JSON.parse(t);
                            return i.analytics ? this.enableAnalytics() : this.disableAnalytics(), i.analytics
                        }
                    } catch (t) {
                        console.error("Error checking cookie consent:", t)
                    }
                    return !1
                }
            }
            let a = new o;
            i.Z = a
        },
        8813: function(t, i, e) {
            e.d(i, {
                Au: function() {
                    return c
                },
                GZ: function() {
                    return o
                },
                HW: function() {
                    return f
                },
                Hf: function() {
                    return d
                },
                IB: function() {
                    return S
                },
                Kf: function() {
                    return g
                },
                P1: function() {
                    return k
                },
                aR: function() {
                    return p
                },
                cg: function() {
                    return n
                },
                gN: function() {
                    return s
                },
                id: function() {
                    return u
                },
                jF: function() {
                    return r
                },
                nU: function() {
                    return a
                },
                om: function() {
                    return A
                },
                q8: function() {
                    return h
                },
                tV: function() {
                    return b
                },
                u_: function() {
                    return m
                },
                v8: function() {
                    return C
                },
                wD: function() {
                    return v
                },
                wg: function() {
                    return y
                },
                xz: function() {
                    return E
                }
            });
            let n = {
                    MacbookPro1080: {
                        width: 2560,
                        height: 1440
                    },
                    MacbookPro: {
                        width: 3024,
                        height: 1964
                    },
                    ComputerScreenOnly: {
                        width: 3024,
                        height: 1964
                    }
                },
                o = {
                    metalness: .65,
                    roughness: .35,
                    clearcoat: .33,
                    clearcoatRoughness: .55,
                    reflectivity: .4,
                    envMapIntensity: .45
                },
                a = t => ({
                    metalness: .3 + t * (o.metalness - .3),
                    roughness: .7 + t * (o.roughness - .7),
                    clearcoat: 0 + t * (o.clearcoat - 0),
                    clearcoatRoughness: 1 + t * (o.clearcoatRoughness - 1),
                    reflectivity: .1 + t * (o.reflectivity - .1),
                    envMapIntensity: .1 + t * (o.envMapIntensity - .1)
                }),
                r = ["Animation_32_Empty.glb", "Animation_32_Empty_2.glb", "Animation_9_Empty.glb", "Animation_12_Empty.glb", "Animation_1_Empty.glb", "Animation_22_Empty.glb", "Animation_22_Empty_2.glb", "Animation_4_Empty.glb", "Animation_33_Empty.glb", "Animation_33_Empty_2.glb", "Animation_7_Empty.glb", "Animation_19_Empty.glb", "Animation_34_Empty.glb", "Animation_34_Empty_2.glb", "Animation_18_Empty.glb", "Animation_2_Empty.glb", "Animation_2_Empty_2.glb", "Animation_35_Empty.glb", "Animation_35_Empty_2.glb", "Animation_20_Empty.glb", "Animation_11_Empty.glb", "Animation_5_Empty.glb", "Animation_6_Empty.glb", "Animation_13_Empty.glb", "Animation_10_Empty.glb", "Animation_15_Empty.glb", "Animation_15_Empty_2.glb", "Animation_14_Empty.glb", "Animation_14_Empty_2.glb", "Animation_16_Empty.glb", "Animation_3_Empty.glb", "Animation_3_Empty_2.glb", "Animation_8_Empty.glb", "Animation_17_Empty.glb", "Animation_21_Empty.glb", "Animation_21_Empty_2.glb", "Animation_23_Empty.glb", "Animation_23_Empty_2.glb", "Animation_24_Empty.glb", "Animation_24_Empty_2.glb", "Animation_25_Empty.glb", "Animation_25_Empty_2.glb", "Animation_27_Empty.glb", "Animation_27_Empty_2.glb", "Animation_30_Empty.glb", "Animation_30_Empty_2.glb", "Animation_31_Empty.glb", "Animation_31_Empty_2.glb"],
                m = ["Vertical_Animation_1_Empty.glb", "Vertical_Animation_7_Empty.glb", "Vertical_Animation_2_Empty.glb", "Vertical_Animation_26_Empty.glb", "Vertical_Animation_26_Empty_2.glb", "Vertical_Animation_17_Empty.glb", "Vertical_Animation_17_Empty_2.glb", "Vertical_Animation_20_Empty.glb", "Vertical_Animation_20_Empty_2.glb", "Vertical_Animation_8_Empty.glb", "Vertical_Animation_6_Empty.glb", "Vertical_Animation_15_Empty.glb", "Vertical_Animation_15_Empty_2.glb", "Vertical_Animation_5_Empty.glb", "Vertical_Animation_25_Empty.glb", "Vertical_Animation_25_Empty_2.glb", "Vertical_Animation_19_Empty.glb", "Vertical_Animation_19_Empty_2.glb", "Vertical_Animation_11_Empty.glb", "Vertical_Animation_3_Empty.glb", "Vertical_Animation_13_Empty.glb", "Vertical_Animation_13_Empty_2.glb", "Vertical_Animation_24_Empty.glb", "Vertical_Animation_24_Empty_2.glb", "Vertical_Animation_21_Empty.glb", "Vertical_Animation_21_Empty_2.glb", "Vertical_Animation_18_Empty.glb", "Vertical_Animation_18_Empty_2.glb", "Vertical_Animation_16_Empty.glb", "Vertical_Animation_16_Empty_2.glb", "Vertical_Animation_12_Empty.glb", "Vertical_Animation_9_Empty.glb", "Vertical_Animation_10_Empty.glb", "Vertical_Animation_4_Empty.glb", "Vertical_Animation_14_Empty.glb", "Vertical_Animation_14_Empty_2.glb", "Vertical_Animation_22_Empty.glb", "Vertical_Animation_22_Empty_2.glb", "Vertical_Animation_23_Empty.glb", "Vertical_Animation_23_Empty_2.glb", "Vertical_Animation_27_Empty.glb", "Vertical_Animation_27_Empty_2.glb"],
                l = ["Animation_2_Empty.glb", "Animation_3_Empty.glb", "Animation_14_Empty.glb", "Animation_15_Empty.glb", "Animation_21_Empty.glb", "Animation_22_Empty.glb", "Animation_25_Empty.glb", "Animation_27_Empty.glb", "Animation_30_Empty.glb", "Animation_31_Empty.glb", "Vertical_Animation_13_Empty.glb", "Vertical_Animation_14_Empty.glb", "Vertical_Animation_15_Empty.glb", "Vertical_Animation_16_Empty.glb", "Vertical_Animation_17_Empty.glb", "Vertical_Animation_18_Empty.glb", "Vertical_Animation_19_Empty.glb", "Vertical_Animation_20_Empty.glb", "Vertical_Animation_21_Empty.glb", "Vertical_Animation_22_Empty.glb", "Vertical_Animation_23_Empty.glb", "Vertical_Animation_24_Empty.glb", "ComputerAnimations/Computer_Animation_1_Empty.glb", "ComputerAnimations/Computer_Animation_2_Empty.glb", "ComputerAnimations/Computer_Animation_3_Empty.glb", "ComputerAnimations/Computer_Animation_4_Empty.glb", "ComputerAnimations/Computer_Animation_5_Empty.glb", "ComputerAnimations/Computer_Animation_7_Empty.glb", "ComputerAnimations/Computer_Animation_8_Empty.glb", "ComputerAnimations/Computer_Animation_10_Empty.glb", "ComputerAnimations/Computer_Animation_11_Empty.glb", "ComputerAnimations/Computer_Animation_15_Empty.glb", "ComputerAnimations/Computer_Animation_16_Empty.glb", "ComputerAnimations/Computer_Animation_17_Empty.glb", "ComputerAnimations/Computer_Animation_18_Empty.glb", "ComputerAnimations/Computer_Animation_19_Empty.glb", "ComputerAnimations/Vertical_Computer_Animation_1_Empty.glb", "ComputerAnimations/Vertical_Computer_Animation_2_Empty.glb", "ComputerAnimations/Vertical_Computer_Animation_3_Empty.glb", "ComputerAnimations/Vertical_Computer_Animation_4_Empty.glb", "ComputerAnimations/Vertical_Computer_Animation_5_Empty.glb", "Vertical_Animation_25_Empty.glb", "Vertical_Animation_26_Empty.glb", "Vertical_Animation_27_Empty.glb", "Animation_23_Empty.glb", "Animation_24_Empty.glb", "Animation_32_Empty.glb", "Animation_33_Empty.glb", "Animation_34_Empty.glb", "Animation_35_Empty.glb"],
                _ = {
                    "Animation_2_Empty.glb": 10,
                    "Animation_3_Empty.glb": 10,
                    "Animation_14_Empty.glb": 10,
                    "Animation_15_Empty.glb": 10,
                    "Animation_25_Empty.glb": 10,
                    "Animation_27_Empty.glb": 10,
                    "Animation_30_Empty.glb": 10,
                    "Animation_31_Empty.glb": 10,
                    "Vertical_Animation_27_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_1_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_2_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_3_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_4_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_5_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_7_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_8_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_9_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_10_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_11_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_12_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_13_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_14_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_15_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_16_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_17_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_18_Empty.glb": 10,
                    "ComputerAnimations/Computer_Animation_19_Empty.glb": 10,
                    "ComputerAnimations/Vertical_Computer_Animation_1_Empty.glb": 10,
                    "ComputerAnimations/Vertical_Computer_Animation_2_Empty.glb": 10,
                    "ComputerAnimations/Vertical_Computer_Animation_3_Empty.glb": 10,
                    "ComputerAnimations/Vertical_Computer_Animation_4_Empty.glb": 10,
                    "ComputerAnimations/Vertical_Computer_Animation_5_Empty.glb": 10
                },
                s = t => l.includes(t),
                p = t => s(t) ? t.replace(/\.glb$/, "_2.glb") : null,
                c = t => t.endsWith("_2.glb") ? t.replace(/_2\.glb$/, ".glb") : t,
                u = t => _[c(t)] || null,
                d = t => t.endsWith("_2.glb") && s(c(t)),
                g = t => t.filter(t => !d(t)),
                y = ["ComputerAnimations/Computer_Animation_1_Empty.glb", "ComputerAnimations/Computer_Animation_1_Empty_2.glb", "ComputerAnimations/Computer_Animation_8_Empty.glb", "ComputerAnimations/Computer_Animation_8_Empty_2.glb", "ComputerAnimations/Computer_Animation_10_Empty.glb", "ComputerAnimations/Computer_Animation_10_Empty_2.glb", "ComputerAnimations/Computer_Animation_2_Empty.glb", "ComputerAnimations/Computer_Animation_2_Empty_2.glb", "ComputerAnimations/Computer_Animation_5_Empty.glb", "ComputerAnimations/Computer_Animation_5_Empty_2.glb", "ComputerAnimations/Computer_Animation_7_Empty.glb", "ComputerAnimations/Computer_Animation_7_Empty_2.glb", "ComputerAnimations/Computer_Animation_19_Empty.glb", "ComputerAnimations/Computer_Animation_19_Empty_2.glb", "ComputerAnimations/Computer_Animation_6_Empty.glb", "ComputerAnimations/Computer_Animation_9_Empty.glb", "ComputerAnimations/Computer_Animation_18_Empty.glb", "ComputerAnimations/Computer_Animation_18_Empty_2.glb", "ComputerAnimations/Computer_Animation_17_Empty.glb", "ComputerAnimations/Computer_Animation_17_Empty_2.glb", "ComputerAnimations/Computer_Animation_14_Empty.glb", "ComputerAnimations/Computer_Animation_4_Empty.glb", "ComputerAnimations/Computer_Animation_4_Empty_2.glb", "ComputerAnimations/Computer_Animation_11_Empty.glb", "ComputerAnimations/Computer_Animation_11_Empty_2.glb", "ComputerAnimations/Computer_Animation_3_Empty.glb", "ComputerAnimations/Computer_Animation_3_Empty_2.glb", "ComputerAnimations/Computer_Animation_12_Empty.glb", "ComputerAnimations/Computer_Animation_15_Empty.glb", "ComputerAnimations/Computer_Animation_15_Empty_2.glb", "ComputerAnimations/Computer_Animation_16_Empty.glb", "ComputerAnimations/Computer_Animation_16_Empty_2.glb", "ComputerAnimations/Computer_Animation_13_Empty.glb"],
                A = ["ComputerAnimations/Vertical_Computer_Animation_1_Empty.glb", "ComputerAnimations/Vertical_Computer_Animation_1_Empty_2.glb", "ComputerAnimations/Vertical_Computer_Animation_2_Empty.glb", "ComputerAnimations/Vertical_Computer_Animation_2_Empty_2.glb", "ComputerAnimations/Vertical_Computer_Animation_3_Empty.glb", "ComputerAnimations/Vertical_Computer_Animation_3_Empty_2.glb", "ComputerAnimations/Vertical_Computer_Animation_4_Empty.glb", "ComputerAnimations/Vertical_Computer_Animation_4_Empty_2.glb", "ComputerAnimations/Vertical_Computer_Animation_5_Empty.glb", "ComputerAnimations/Vertical_Computer_Animation_5_Empty_2.glb"],
                b = [...r, ...m];
            [...b, ...y, ...A];
            let E = ["Animation_32_Empty.glb", "Animation_1_Empty.glb", "Animation_7_Empty.glb", "Vertical_Animation_1_Empty.glb", "Vertical_Animation_5_Empty.glb", "Vertical_Animation_17_Empty.glb", "Vertical_Animation_21_Empty.glb", "ComputerAnimations/Computer_Animation_1_Empty.glb", "ComputerAnimations/Computer_Animation_5_Empty.glb", "ComputerAnimations/Computer_Animation_14_Empty.glb", "ComputerAnimations/Vertical_Computer_Animation_1_Empty.glb"],
                C = b.filter(t => !E.includes(t)),
                h = t => {
                    let i = c(t);
                    return E.includes(i)
                },
                f = t => {
                    let i = c(t);
                    return !E.includes(i) && (!!i.startsWith("ComputerAnimations/") || C.includes(i))
                },
                k = () => g(r).length + g(y).length,
                v = () => g(m).length + g(A).length,
                S = () => C.filter(t => !t.endsWith("_2.glb")).length
        }
    }
]);