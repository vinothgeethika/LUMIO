"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6859], {
        9599: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return h
                }
            });
            var a = r(5893),
                n = r(7294),
                i = r(5319),
                o = r(9131),
                s = r(7979),
                l = r(4250),
                c = r(3857),
                m = r(7438),
                u = r(8813),
                d = r(4947),
                p = r(9906),
                h = function(e) {
                    let {
                        uploadedImage: t,
                        uploadedVideo: r,
                        videoStartTime: h = 0,
                        videoEndTime: f = null,
                        currentScene: y,
                        isExporting: v,
                        onDurationChange: g,
                        onVideoDurationChange: b,
                        selectedColor: M,
                        lightColor: E,
                        lightIntensity: S = 100,
                        onActionsUpdate: w,
                        cropData: A,
                        selectedPhoneModel: R = "iPhone",
                        phoneMaterial: L = null,
                        showNotch: T = !0,
                        computerMaterial: F = null,
                        selectedComputerModel: O = "MacbookPro",
                        isPreview: P = !1,
                        fileDragActive: x = !1,
                        publicDemo: C = !1
                    } = e, k = (0, n.useRef)(null), D = (0, n.useRef)(null), I = (0, n.useRef)(null), N = (0, n.useRef)(null), j = (0, n.useRef)(null), B = (0, n.useRef)(null), _ = (0, n.useRef)([]), V = (0, n.useRef)(0), W = (0, n.useRef)(0), z = (0, n.useRef)(0), U = (0, n.useRef)(!1), K = (0, n.useRef)(!1), Y = (0, n.useRef)({
                        isVideoReady: !1,
                        videoDuration: 0,
                        animationDuration: 0,
                        startTime: 0,
                        phase: "waiting",
                        lastLogTime: 0,
                        maxAnimationTime: 0
                    }), {
                        scene: $,
                        animations: Z
                    } = (0, o.L)((0, p.Cc)(y, {
                        forceLocal: C
                    }), void 0, void 0, p.Zn), {
                        scene: G
                    } = (0, o.L)((0, p.Cc)("phones/iPhone.glb", {
                        forceLocal: C
                    }), void 0, void 0, p.Zn), {
                        scene: H
                    } = (0, o.L)((0, p.Cc)("phones/Samsung.glb", {
                        forceLocal: C
                    }), void 0, void 0, p.Zn), {
                        scene: J
                    } = (0, o.L)((0, p.Cc)("phones/OnlyScreen.glb", {
                        forceLocal: C
                    }), void 0, void 0, p.Zn), {
                        scene: q
                    } = (0, o.L)((0, p.Cc)("computers/MacbookPro.glb", {
                        forceLocal: C
                    }), void 0, void 0, p.Zn), {
                        scene: Q
                    } = (0, o.L)((0, p.Cc)("computers/MacbookPro1080.glb", {
                        forceLocal: C
                    }), void 0, void 0, p.Zn), {
                        scene: X
                    } = (0, o.L)((0, p.Cc)("computers/ComputerScreenOnly.glb", {
                        forceLocal: C
                    }), void 0, void 0, p.Zn), ee = (0, n.useMemo)(() => {
                        let e = y.split(".")[0];
                        return $.userData.name = e, $
                    }, [$, y]);
                    (0, n.useEffect)(() => {
                        let e;
                        let t = ee.getObjectByName("PhoneLocation");
                        if (!t) return;
                        for (e = "iPhone" === R ? G.clone() : "Samsung" === R ? H.clone() : "Screen" === R ? J.clone() : G.clone(); t.children.length > 0;) t.remove(t.children[0]);
                        t.add(e), e.position.set(0, 0, 0), e.rotation.set(0, Math.PI, 0);
                        let r = 1 / t.scale.y;
                        e.scale.set(r, r, r), t.visible = !0, e.visible = !0;
                        let a = L || new l.EJi({
                            color: 1907999,
                            metalness: .8,
                            roughness: .2,
                            clearcoat: .5,
                            clearcoatRoughness: .3,
                            reflectivity: .5,
                            envMapIntensity: .6
                        });
                        e.traverse(e => {
                            if (e.isMesh) {
                                if (e.visible = !0, e.castShadow = !0, e.receiveShadow = !0, /^body_[1-6]$/.test(e.name) && (e.material = a.clone(), e.material.needsUpdate = !0), /^side_[1-7]$/.test(e.name)) {
                                    let t = a.clone();
                                    t.color.multiplyScalar(.7), e.material = t, e.material.needsUpdate = !0
                                }
                                "iPhone" === R && "Notch" === e.name && (e.visible = T), /^notch$/i.test(e.name) && e.material && "iPhone" === R && (e.material.polygonOffset = !0, e.material.polygonOffsetFactor = -8, e.material.polygonOffsetUnits = -8, e.material.needsUpdate = !0)
                            }
                            "iPhone" === R && "Notch" === e.name && (e.visible = T)
                        })
                    }, [ee, G, H, J, R, L, T, t, r]), (0, n.useEffect)(() => {
                        if ("iPhone" === R && ee) {
                            let e = ee.getObjectByName("PhoneLocation");
                            if (e && e.children.length > 0) {
                                let t = e.children[0];
                                t.traverse(e => {
                                    ("Notch" === e.name || "notch" === e.name) && (e.visible = T)
                                });
                                let r = t.getObjectByName("iPhone");
                                r && r.traverse(e => {
                                    ("Notch" === e.name || "notch" === e.name) && (e.visible = T)
                                })
                            }
                        }
                    }, [T, R, ee]), (0, n.useEffect)(() => {
                        let e;
                        let t = ee.getObjectByName("ComputerLocation");
                        if (!t || !(e = "MacbookPro1080" === O ? Q : "ComputerScreenOnly" === O ? X : q)) return;
                        let r = e.clone(),
                            a = "ComputerScreenOnly" !== O ? r.getObjectByName("Macbook Pro") || r.children.find(e => e.name.includes("Macbook")) : null,
                            n = r.getObjectByName("Screen") || r.children.find(e => e.name.includes("Screen")) || ("ComputerScreenOnly" === O ? r : null),
                            i = ee.getObjectByName("ScreenRotation");
                        for (; t.children.length > 0;) t.remove(t.children[0]);
                        if (a) {
                            t.add(a), a.position.set(0, 0, 0), a.rotation.set(0, 0, 0);
                            let e = 1 / t.scale.y;
                            a.scale.set(e, e, e);
                            let r = F || new l.EJi({
                                color: 1907999,
                                ...u.GZ
                            });
                            a.traverse(e => {
                                if (e.isMesh) {
                                    if (e.visible = !0, e.castShadow = !0, e.receiveShadow = !0, /^body_[1-9]\d*$/.test(e.name)) e.material = r.clone(), e.material.needsUpdate = !0;
                                    else if (/^side_[1-9]\d*$/.test(e.name)) {
                                        let t = r.clone();
                                        t.color.multiplyScalar(.7), e.material = t, e.material.needsUpdate = !0
                                    } else if (e.material) {
                                        let t = Array.isArray(e.material) ? e.material : [e.material];
                                        t.forEach(e => {
                                            ("White Plastic.002" === e.name || e.name ?.includes("White Plastic")) && (e.metalness = 0, e.roughness = 1, e.clearcoat = 0, e.clearcoatRoughness = 1, e.reflectivity = 0, e.envMapIntensity = 0, e.needsUpdate = !0)
                                        }), Array.isArray(e.material) || 1 !== t.length || (e.material = t[0])
                                    }
                                }
                            })
                        }
                        if (n && i) {
                            for (; i.children.length > 0;) i.remove(i.children[0]);
                            i.add(n), n.position.set(0, 0, 0), n.rotation.set(0, 0, 0);
                            let e = 0 !== t.scale.y ? 1 / t.scale.y : 1,
                                r = e;
                            0 !== i.scale.y && Math.abs(i.scale.y - t.scale.y) > .001 && (r = 1 / i.scale.y * e), n.scale.set(r, r, r);
                            let a = F || new l.EJi({
                                color: 1907999,
                                ...u.GZ
                            });
                            n.traverse(e => {
                                if (e.isMesh && (e.visible = !0, e.castShadow = !0, e.receiveShadow = !0, "ComputerScreenOnly" === O)) {
                                    if (/^body_[1-9]\d*$/.test(e.name)) e.material = a.clone(), e.material.needsUpdate = !0;
                                    else if (/^side_[1-9]\d*$/.test(e.name)) {
                                        let t = a.clone();
                                        t.color.multiplyScalar(.7), e.material = t, e.material.needsUpdate = !0
                                    }
                                }
                            })
                        }
                        t.visible = !0, i && (i.visible = !0)
                    }, [ee, q, Q, X, F, O, t, r]), (0, n.useEffect)(() => {
                        let e = ee.getObjectByName("PhoneLocation");
                        e && (e.visible = !0);
                        let t = ee.getObjectByName("ComputerLocation");
                        t && (t.visible = !0)
                    }, [y, ee]);
                    let {
                        actions: et,
                        mixer: er,
                        duration: ea
                    } = function(e, t, r, a) {
                        let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 100,
                            s = (0, n.useMemo)(() => {
                                if (!e || !t.userData.name) return [];
                                let r = t.userData.name;
                                return e.map(e => {
                                    let t = e.clone();
                                    return t.name = `${r}_${e.name}`, t
                                })
                            }, [e, t.userData.name]),
                            {
                                actions: m,
                                mixer: u
                            } = (0, c.v)(s, t),
                            [d, p] = (0, n.useState)(0);
                        return (0, n.useEffect)(() => {
                            u && (u.stopAllAction(), u.removeEventListener("loop"), u.removeEventListener("finished"), u.setTime(0))
                        }, [t.userData.name, u]), (0, n.useEffect)(() => {
                            t && (t.traverse(e => {
                                e.isMesh && function(e, t) {
                                    if (e.castShadow = !0, e.receiveShadow = !0, "Backdrop" === e.name) {
                                        let r = e.material;
                                        if (r && !Array.isArray(r) && r.color && r.isMeshLambertMaterial) r.color.set(t);
                                        else {
                                            let a = new l.YBo({
                                                color: t
                                            });
                                            e.material = a, Array.isArray(r) ? r.forEach(e => e ?.dispose ?.()) : r ?.dispose ?.()
                                        }
                                        e.receiveShadow = !0, e.castShadow = !1
                                    }
                                }(e, r)
                            }), function(e, t) {
                                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                                    a = 300 * r / 100;
                                e.traverse(e => {
                                    e.isPointLight && (e.color = new l.Ilk(t), e.intensity = a, e.needsUpdate = !0), e.isSpotLight && (e.color = new l.Ilk(t), e.intensity = a, e.needsUpdate = !0)
                                })
                            }(t, a, o))
                        }, [t, r, a, o]), (0, n.useEffect)(() => {
                            let r;
                            if (!e || 0 === e.length || !t.userData.name) return;
                            u && (u.stopAllAction(), Object.values(m).forEach(e => {
                                e && (e.reset(), e.play())
                            }), u.update(0), u.stopAllAction()), t.traverse(e => {
                                e.isLight && function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#55504b",
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                                        a = 300 * r / 100;
                                    e.isPointLight && (e.intensity = a, e.castShadow = !1, e.shadow.mapSize.width = 2048, e.shadow.mapSize.height = 2048, e.shadow.radius = 10, e.shadow.bias = -.0001, e.color = new l.Ilk(t), e.distance = 1e3, e.decay = 2), e.isSpotLight && (e.intensity = a, e.castShadow = !0, e.shadow.mapSize.width = 2048, e.shadow.mapSize.height = 2048, e.shadow.radius = 30, e.shadow.blurSamples = 8, e.shadow.bias = -.0001, e.shadow.normalBias = .04, e.color = new l.Ilk(t), e.distance = 1e3, e.decay = 2, e.angle = Math.PI / 6, e.penumbra = .5)
                                }(e, a, o)
                            });
                            let n = t.userData.name,
                                s = t.getObjectByName("Camera");
                            if (s) {
                                let e = s.position.clone(),
                                    t = s.rotation.clone(),
                                    r = Object.entries(m).find(e => {
                                        let [t] = e;
                                        return t.startsWith(`${n}_CameraAction`)
                                    }) ?.[1];
                                r && (r.reset(), r.setLoop(l.YKA), r.setEffectiveTimeScale(.5), r.clampWhenFinished = !1, r.play(), i || u.addEventListener("loop", () => {
                                    s.position.lerp(e, .1), s.rotation.x = l.M8C.lerp(s.rotation.x, t.x, .1), s.rotation.y = l.M8C.lerp(s.rotation.y, t.y, .1), s.rotation.z = l.M8C.lerp(s.rotation.z, t.z, .1)
                                }))
                            }
                            t.getObjectByName("iPhone") && function(e, t, r) {
                                let a = Object.entries(t).find(e => {
                                    let [t] = e;
                                    return t.startsWith(`${r}_EmptyAction`)
                                }) ?.[1];
                                a && a.reset().play()
                            }(0, m, n), t.getObjectByName("ScreenRotation") && function(e, t, r) {
                                let a = Object.entries(t).find(e => {
                                    let [t] = e;
                                    return t.includes("ScreenRotation") || t.includes("Screen")
                                }) ?.[1];
                                a && (a.reset(), a.setLoop(l.YKA), a.setEffectiveTimeScale(.5), a.clampWhenFinished = !1, a.play())
                            }(0, m, 0);
                            let c = 0;
                            return e && e.length > 0 && (c = e[0].duration), 0 === c && (r = 0, e.forEach(e => {
                                e.tracks.forEach(e => {
                                    let t = e.times;
                                    if (t.length > 0) {
                                        let e = t[t.length - 1];
                                        r = Math.max(r, e)
                                    }
                                })
                            }), c = r + 1 / 30), p(2 * c), Object.entries(m).forEach(e => {
                                let [t, r] = e;
                                r && !t.includes("CameraAction") && (r.reset(), r.play(), r.setLoop(l.YKA), r.setEffectiveTimeScale(.5), r.clampWhenFinished = !1)
                            }), () => {
                                u && (u.stopAllAction(), u.removeEventListener("loop"), u.removeEventListener("finished"), u.setTime(0))
                            }
                        }, [e, t, m, u, i]), {
                            actions: m,
                            mixer: u,
                            duration: d
                        }
                    }(Z, ee, M, E, P, S), en = (0, i.D)(e => e.set), ei = (0, n.useRef)();
                    (0, n.useEffect)(() => {}, [ea]);
                    let eo = (0, n.useRef)(0);
                    (0, i.F)((e, t) => {
                        if (er && !Y.current ?.isAnimationFrozen && er.update(t), D.current && k.current && k.current.readyState >= 2 && (D.current.needsUpdate = !0), er && r && ea > 0) {
                            let e = k.current,
                                t = Y.current;
                            if (!e || !t.isVideoReady || !ea || ea <= 0) return;
                            let r = er.time,
                                a = r - t.startTime,
                                n = ea / 2,
                                i = t.videoDuration,
                                o = a;
                            i > n && a >= n && (o = n), i <= n && (o = Math.min(.5 * a, n));
                            let s = t.phase;
                            o < Math.min(i, n) ? s = "both_playing" : i <= n && o >= i ? s = "video_ended" : i > n && o >= n && (s = "animation_ended"), s !== t.phase && (t.lastLogTime = r), t.phase = s, i <= n ? es(e, er, o, i, n, t) : el(e, er, o, i, n, t, a)
                        }
                    });
                    let es = (e, t, r, a, n, i) => {
                            if (Math.floor(r) !== Math.floor(i.lastLogTime || 0) && (i.lastLogTime = r), r < a) e.paused && (e.playbackRate = .5, e.play().catch(console.error));
                            else if (r < n) {
                                if (!i.isVideoFrozen) {
                                    e.paused || e.pause();
                                    let t = (i.softStart || 0) + a - .01;
                                    Math.abs(e.currentTime - t) > .1 && (e.currentTime = t), i.isVideoFrozen = !0
                                }
                            } else t.setTime(0), i.startTime = t.time, i.isAnimationFrozen = !1, i.isVideoFrozen = !1, et && Object.values(et).forEach(e => {
                                e && (e.setLoop(l.YKA), e.clampWhenFinished = !1, e.reset(), e.play())
                            }), e.playbackRate = .5, e.currentTime = i.softStart || 0, e.play().catch(e => {
                                console.error("Error restarting video:", e)
                            })
                        },
                        el = (e, t, r, a, n, i, o) => {
                            let s = i.softStart || 0,
                                c = null != i.softEnd ? i.softEnd : s + a,
                                m = e.currentTime;
                            if (.5 * o < n) {
                                e.paused && (e.playbackRate = 1, e.play().catch(console.error)), e.currentTime >= c - .05 && (e.pause(), e.currentTime = c - .01);
                                let t = .5 * o;
                                t > i.maxAnimationTime && (i.maxAnimationTime = t)
                            } else m >= c - .1 ? (t.setTime(0), i.startTime = t.time, i.maxAnimationTime = 0, i.isAnimationFrozen = !1, i.isVideoFrozen = !1, et && Object.values(et).forEach(e => {
                                e && (e.setLoop(l.jAl, 1), e.clampWhenFinished = !0, e.reset(), e.play())
                            }), e.playbackRate = 1, e.currentTime = s, e.play().catch(e => {
                                console.error("Error restarting video:", e)
                            })) : (e.paused && e.play().catch(console.error), e.currentTime >= c - .05 && (e.pause(), e.currentTime = c - .01), i.isAnimationFrozen || (t.setTime(i.maxAnimationTime - .01), i.isAnimationFrozen = !0))
                        },
                        ec = (0, n.useMemo)(() => {
                            ee.visible = !0;
                            let e = ee.getObjectByName("Camera");
                            if (e) {
                                let t = e.position.clone(),
                                    r = e.rotation.clone();
                                P ? (en({
                                    camera: e
                                }), e.position.copy(t), e.rotation.copy(r)) : en({
                                    camera: e
                                })
                            }
                            return ee
                        }, [y, ee, en, P]);
                    (0, n.useEffect)(() => () => {
                        er && (er.stopAllAction(), er.removeEventListener("loop"), er.removeEventListener("finished"), er.setTime(0)), ec.visible = !1
                    }, [ec, er]), (0, n.useEffect)(() => {
                        ea && (g(ea), Y.current && (Y.current.animationDuration = ea))
                    }, [ea, g]), (0, n.useEffect)(() => {
                        t ? ((0, m.WE)(), Y.current = {
                            isVideoReady: !1,
                            videoDuration: 0,
                            animationDuration: 0,
                            startTime: 0,
                            phase: "waiting",
                            lastLogTime: 0,
                            maxAnimationTime: 0
                        }, et && Object.values(et).forEach(e => {
                            e && (e.setLoop(l.YKA, 1 / 0), e.clampWhenFinished = !1, e.reset().play())
                        }), k.current = null, D.current = null, new l.dpR().load(t, e => {
                            e.flipY = !1, e.colorSpace = l.KI_;
                            let t = e;
                            if (A) {
                                if (A.croppedImage) {
                                    let e = new l.dpR().load(A.croppedImage);
                                    e.flipY = !1, e.colorSpace = l.KI_, t = e
                                } else {
                                    let {
                                        position: t,
                                        scale: r
                                    } = A;
                                    e.center.set(.5, .5), e.offset.set(t.x, t.y), e.repeat.set(r, r)
                                }
                            }
                            I.current = t, eu(t), requestAnimationFrame(() => {
                                I.current === t && ee && eu(t)
                            })
                        }, void 0, e => console.error("Error loading texture:", e))) : I.current = null
                    }, [t, A, ee, O, R]), (0, n.useEffect)(() => {
                        if (r) {
                            I.current = null, Y.current = {
                                isVideoReady: !1,
                                videoDuration: 0,
                                animationDuration: ea || 0,
                                startTime: 0,
                                shouldRestart: !1,
                                isAnimationFrozen: !1,
                                isVideoFrozen: !1
                            };
                            let e = document.createElement("video");
                            e.src = r, e.crossOrigin = "anonymous", e.muted = !0, e.playsInline = !0, e.preload = "auto", e.loop = !1;
                            let t = () => {
                                    if (Y.current.isVideoReady || e.readyState < 2) return;
                                    if (!Number.isFinite(e.duration) || e.duration <= 0) {
                                        e.addEventListener("loadedmetadata", t, {
                                            once: !0
                                        });
                                        return
                                    }
                                    if (!Y.current.videoDuration) {
                                        let t = Math.max(0, Number(h) || 0),
                                            r = null != f && Number.isFinite(Number(f)) ? Math.min(Number(f), e.duration) : e.duration;
                                        Y.current.softStart = t, Y.current.softEnd = r, Y.current.videoDuration = Math.max(.001, r - t), Y.current.animationDuration = ea || 0
                                    }
                                    let r = Y.current.softStart || 0,
                                        a = Y.current.videoDuration || e.duration || 0,
                                        n = (Y.current.animationDuration || ea || 0) / 2;
                                    er && (er.setTime(0), Y.current.startTime = 0, Y.current.isAnimationFrozen = !1, Y.current.isVideoFrozen = !1, eo.current = 0), et && Object.values(et).forEach(e => {
                                        e && (e.setLoop(l.jAl, 1), e.clampWhenFinished = !0, e.reset().play())
                                    }), Y.current.isVideoReady = !0, Y.current.startTime = er ? er.time : 0, Y.current.phase = "both_playing", e.playbackRate = a <= n ? .5 : 1;
                                    try {
                                        e.currentTime = r
                                    } catch {}
                                    e.play().catch(e => {
                                        console.error("Error starting synchronized playback:", e)
                                    })
                                },
                                a = () => {
                                    eu(n), t()
                                };
                            k.current = e;
                            let n = new l.fO1(e);
                            return n.flipY = !1, n.colorSpace = l.KI_, n.generateMipmaps = !1, n.minFilter = l.wem, n.magFilter = l.wem, D.current = n, e.readyState >= 2 ? a() : e.addEventListener("loadeddata", a, {
                                once: !0
                            }), e.addEventListener("loadedmetadata", () => {
                                let t = Math.max(0, Number(h) || 0),
                                    r = null != f && Number.isFinite(Number(f)) ? Math.min(Number(f), e.duration) : e.duration;
                                Y.current.softStart = t, Y.current.softEnd = r, Y.current.videoDuration = Math.max(.001, r - t), Y.current.animationDuration = ea || 0, b && b(e.duration)
                            }), e.addEventListener("canplay", t, {
                                once: !0
                            }), e.addEventListener("error", t => {
                                console.error("\uD83C\uDFA5 Video error:", t), console.error("\uD83C\uDFA5 Video error details:", {
                                    error: t,
                                    networkState: e.networkState,
                                    readyState: e.readyState,
                                    errorCode: e.error ? e.error.code : "no error code",
                                    errorMessage: e.error ? e.error.message : "no error message",
                                    src: e.src
                                }), Y.current.isVideoReady = !1
                            }), e.load(), () => {
                                e.pause(), e.removeAttribute("src"), e.load(), Y.current.isVideoReady = !1
                            }
                        }
                    }, [t, r, h, f, ee, A, R, O]), (0, n.useEffect)(() => {
                        r && D.current && ee && eu(D.current)
                    }, [y, r, ee, O, R]), (0, n.useEffect)(() => {
                        t && !r && I.current && ee && eu(I.current)
                    }, [y, t, r, ee, O, R]), (0, n.useEffect)(() => {
                        ee && !N.current && ed()
                    }, [ee]), (0, n.useEffect)(() => {
                        if (t || r || !ee) {
                            j.current && (j.current.dispose(), j.current = null), K.current || (V.current = 0, W.current = 0, z.current = 0);
                            return
                        }
                        let e = ee.getObjectByName("ComputerLocation"),
                            a = ee.getObjectByName("PhoneLocation");
                        if (!e && !a) return;
                        j.current && (j.current.dispose(), j.current = null);
                        let n = (0, d.AT)({
                            layout: e ? "desktop" : "phone"
                        });
                        return j.current = n, K.current && (n.setDropActive(!0), z.current = 1), eu(n.texture), () => {
                            j.current === n && (n.dispose(), j.current = null)
                        }
                    }, [t, r, ee, O, R, y]);
                    let {
                        gl: em
                    } = (0, i.D)();
                    (0, n.useEffect)(() => {
                        let e = em ?.domElement;
                        if (!e) return;
                        let t = () => {
                                z.current = K.current || U.current ? 1 : 0
                            },
                            r = () => {
                                U.current = !0, t()
                            },
                            a = () => {
                                U.current = !1, t()
                            };
                        return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", a), () => {
                            e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", a)
                        }
                    }, [em]), (0, n.useEffect)(() => {
                        let e = K.current;
                        K.current = !!x, z.current = x || U.current ? 1 : 0, j.current && j.current.setDropActive(!!x);
                        let a = !!(t || r),
                            n = ee ?.getObjectByName("PhoneLocation"),
                            i = ee ?.getObjectByName("ComputerLocation"),
                            o = !!(n || i),
                            s = () => {
                                _.current.forEach(e => {
                                    e.parent && e.parent.remove(e), e.material && (e.material.map && B.current ?.texture !== e.material.map && e.material.map.dispose(), e.material.dispose())
                                }), _.current = [], B.current && (B.current.dispose(), B.current = null)
                            };
                        if (x && !e) {
                            if (V.current = 0, W.current = 0, j.current && j.current.setHover(0), a && o && ee && !B.current) {
                                let e = (0, d.VO)({
                                    layout: i ? "desktop" : "phone"
                                });
                                B.current = e, e.setHover(0);
                                let t = (0, d.DE)(ee);
                                _.current = t.map(t => {
                                    let r = new l.vBJ({
                                            map: e.texture,
                                            transparent: !0,
                                            depthWrite: !1,
                                            toneMapped: !1,
                                            polygonOffset: !0,
                                            polygonOffsetFactor: -4,
                                            polygonOffsetUnits: -4
                                        }),
                                        a = new l.Kj0(t.geometry, r);
                                    return a.name = "MediaDropOverlay", a.renderOrder = 999, a.frustumCulled = !1, t.add(a), a
                                })
                            } else B.current && B.current.setHover(0)
                        }!x && e && s(), !x || a && o || s()
                    }, [x, t, r, ee]), (0, i.F)((e, a) => {
                        let n = j.current,
                            i = B.current,
                            o = n || i;
                        if (!o || n && (t || r) || i && !K.current) return;
                        let s = Math.min(a, 1 / 30),
                            l = z.current,
                            c = V.current,
                            m = W.current,
                            u = (l - c) * 220 - 18 * m,
                            d = m + u * s,
                            p = c + d * s;
                        8e-4 > Math.abs(d) && 8e-4 > Math.abs(l - p) ? (p = l, W.current = 0) : W.current = d, V.current = p, o.setHover(p)
                    });
                    let eu = e => {
                            ee.traverse(t => {
                                if (t.isMesh) {
                                    if (Array.isArray(t.material)) {
                                        let r = t.material.find(e => "screenMaterial" === e.name || "computerScreenMaterial" === e.name || "computerScreenMaterial.002" === e.name);
                                        r && ep(r, e)
                                    } else t.material && ("screenMaterial" === t.material.name || "computerScreenMaterial" === t.material.name || "computerScreenMaterial.002" === t.material.name) && ep(t.material, e)
                                }
                            })
                        },
                        ed = () => {
                            N.current || ee.traverse(e => {
                                if (e.isMesh) {
                                    if (Array.isArray(e.material)) {
                                        let t = e.material.find(e => "screenMaterial" === e.name || "computerScreenMaterial.002" === e.name);
                                        t && (N.current = {
                                            map: t.map,
                                            emissiveMap: t.emissiveMap,
                                            emissive: t.emissive.clone(),
                                            emissiveIntensity: t.emissiveIntensity,
                                            color: t.color.clone(),
                                            roughness: t.roughness,
                                            metalness: t.metalness,
                                            transparent: t.transparent,
                                            opacity: t.opacity,
                                            specularIntensity: t.specularIntensity,
                                            clearcoat: t.clearcoat,
                                            clearcoatRoughness: t.clearcoatRoughness,
                                            ior: t.ior,
                                            transmission: t.transmission,
                                            thickness: t.thickness,
                                            sheen: t.sheen,
                                            sheenRoughness: t.sheenRoughness,
                                            sheenColor: t.sheenColor.clone(),
                                            contrast: t.contrast,
                                            saturation: t.saturation,
                                            normalScale: t.normalScale.clone()
                                        })
                                    } else e.material && "screenMaterial" === e.material.name && (N.current = {
                                        map: e.material.map,
                                        emissiveMap: e.material.emissiveMap,
                                        emissive: e.material.emissive.clone(),
                                        emissiveIntensity: e.material.emissiveIntensity,
                                        color: e.material.color.clone(),
                                        roughness: e.material.roughness,
                                        metalness: e.material.metalness,
                                        transparent: e.material.transparent,
                                        opacity: e.material.opacity,
                                        specularIntensity: e.material.specularIntensity,
                                        clearcoat: e.material.clearcoat,
                                        clearcoatRoughness: e.material.clearcoatRoughness,
                                        ior: e.material.ior,
                                        transmission: e.material.transmission,
                                        thickness: e.material.thickness,
                                        sheen: e.material.sheen,
                                        sheenRoughness: e.material.sheenRoughness,
                                        sheenColor: e.material.sheenColor.clone(),
                                        contrast: e.material.contrast,
                                        saturation: e.material.saturation,
                                        normalScale: e.material.normalScale.clone()
                                    })
                                }
                            })
                        };
                    (0, n.useEffect)(() => {
                        er && et && (v ? (er.stopAllAction(), er.setTime(0), er.timeScale = 0, Object.values(et).forEach(e => {
                            e.reset(), e.play(), e.setLoop(l.jAl), e.clampWhenFinished = !0
                        })) : (er.timeScale = 1, Object.values(et).forEach(e => {
                            e.reset(), e.play(), e.setLoop(l.YKA), P && e.setEffectiveTimeScale(.5)
                        })))
                    }, [v, et, er, P]), (0, n.useEffect)(() => {
                        et && w(et)
                    }, [et, w]), (0, n.useEffect)(() => {
                        $.children.find(e => "PerspectiveCamera" === e.type)
                    }, [$]), (0, n.useEffect)(() => {
                        let e = [];
                        $.traverse(t => {
                            t.isMesh && e.push({
                                name: t.name,
                                type: t.type,
                                visible: t.visible,
                                position: t.position.toArray(),
                                scale: t.scale.toArray(),
                                material: t.material ? {
                                    type: t.material.type,
                                    transparent: t.material.transparent,
                                    opacity: t.material.opacity,
                                    visible: t.material.visible,
                                    color: t.material.color ? t.material.color.getHexString() : null
                                } : null,
                                geometry: t.geometry ? {
                                    type: t.geometry.type,
                                    parameters: t.geometry.parameters
                                } : null
                            })
                        })
                    }, [$, Z]);
                    let ep = (e, t) => {
                        t.colorSpace = l.KI_;
                        let r = t.isVideoTexture;
                        t.minFilter = l.wem, t.magFilter = l.wem, t.anisotropy = r ? 1 : 16, t.generateMipmaps = !r, e.map = t, e.emissiveMap = t, e.emissive.setRGB(.8, .8, .8), e.emissiveIntensity = .6, e.roughness = .1, e.metalness = 0, e.toneMapped = !0, e.transparent = !0, e.opacity = 1, e.color.setRGB(.9, .9, .9), e.color.convertSRGBToLinear(), e.specularIntensity = .2, "iPhone" === R ? (e.clearcoat = 0, e.sheen = 0, e.envMapIntensity = 0) : (e.clearcoat = .1, e.sheen = .1, e.polygonOffset = !1), e.clearcoatRoughness = .2, e.ior = 1.5, e.transmission = 0, e.thickness = 0, e.sheenRoughness = .3, e.sheenColor.setRGB(.8, .8, .8), e.contrast = 1.2, e.saturation = 1.2, e.normalScale.set(.3, .3), e.needsUpdate = !0
                    };
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("primitive", {
                            ref: ei,
                            object: ec
                        }), (0, a.jsx)(s.qA, {
                            preset: "warehouse",
                            background: !1,
                            blur: .8,
                            intensity: .5,
                            resolution: 256
                        })]
                    })
                }
        },
        9607: function(e, t, r) {
            r.d(t, {
                IK: function() {
                    return i
                },
                K5: function() {
                    return a
                },
                UP: function() {
                    return n
                }
            });
            let a = ["#efece7", "#5B5959", "#B0AFAF"],
                n = ["#55504b", "#BC851F", "#4B7AB3", "#8B4513"],
                i = ["#1D1D1F", "#F5F5F7", "#5B5959", "#B0AFAF", "#2C2C2E", "#E5E5EA"]
        },
        4947: function(e, t, r) {
            r.d(t, {
                AT: function() {
                    return l
                },
                DE: function() {
                    return u
                },
                VO: function() {
                    return c
                }
            });
            var a = r(4250);
            let n = {
                phone: {
                    w: 720,
                    h: 1560,
                    pillWidthRatio: .66,
                    cropTopRatio: 0
                },
                desktop: {
                    w: 1600,
                    h: 1e3,
                    pillWidthRatio: .36,
                    cropTopRatio: .055
                }
            };

            function i(e) {
                let t = new Image;
                t.crossOrigin = "anonymous";
                let r = new Promise(e => {
                    t.onload = () => e(!0), t.onerror = () => e(!1)
                });
                return t.src = e, {
                    img: t,
                    ready: r
                }
            }

            function o(e, t, r, a) {
                if (!t ?.naturalWidth) return;
                let n = a.w * a.pillWidthRatio * (1 + .09 * r),
                    i = t.naturalHeight / t.naturalWidth * n;
                e.drawImage(t, (a.w - n) / 2, (a.h - i) / 2, n, i)
            }

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "phone";
                return n[e] || n.phone
            }

            function l() {
                let {
                    layout: e = "phone",
                    wallpaperUrl: t = "/placeholder/ScreenPlaceholderWallpaper.png",
                    pillUrl: r = "/placeholder/DropPill.png",
                    dropPillUrl: n = "/placeholder/DropToPlacePill.png"
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = s(e), c = document.createElement("canvas");
                c.width = l.w, c.height = l.h;
                let m = c.getContext("2d"),
                    u = i(t),
                    d = i(r),
                    p = i(n),
                    h = 0,
                    f = !1,
                    y = !1,
                    v = !1,
                    g = !1,
                    b = !1,
                    M = new a.ROQ(c);
                M.flipY = !1, M.colorSpace = a.KI_, M.minFilter = a.wem, M.magFilter = a.wem, M.generateMipmaps = !1;
                let E = () => {
                    if (b) return;
                    m.clearRect(0, 0, l.w, l.h),
                        function(e, t, r, a) {
                            let {
                                dropActive: n = !1
                            } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, i = Math.max(0, Math.min(1, t)) * (n ? 3.2 : 2.2);
                            i > .05 ? (e.save(), e.filter = `blur(${i.toFixed(2)}px)`, a(), e.restore()) : a();
                            let o = .1 * Math.max(0, Math.min(1, t));
                            o > .001 && (e.fillStyle = `rgba(0, 0, 0, ${o})`, e.fillRect(0, 0, r.w, r.h))
                        }(m, h, l, () => {
                            y && u.img.naturalWidth ? function(e, t, r, a) {
                                let n, i, o, s, {
                                        cropTopRatio: l = 0
                                    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                                    c = Math.floor(t.height * l),
                                    m = Math.max(1, t.height - c),
                                    u = t.width / m;
                                u > r / a ? (i = a, o = (r - (n = a * u)) / 2, s = 0) : (n = r, o = 0, s = (a - (i = r / u)) / 2), e.drawImage(t, 0, c, t.width, m, o, s, n, i)
                            }(m, u.img, l.w, l.h, {
                                cropTopRatio: l.cropTopRatio
                            }) : (m.fillStyle = "#cfc6b8", m.fillRect(0, 0, l.w, l.h))
                        }, {
                            dropActive: f
                        });
                    let e = f ? p.img : d.img;
                    (f ? g : v) && o(m, e, h, l), M.needsUpdate = !0
                };
                return u.ready.then(e => {
                    y = e, E()
                }), d.ready.then(e => {
                    v = e, E()
                }), p.ready.then(e => {
                    g = e, E()
                }), E(), {
                    texture: M,
                    layout: "desktop" === e ? "desktop" : "phone",
                    setHover(e) {
                        let t = Math.max(-.05, Math.min(1.35, e));
                        return !(5e-4 > Math.abs(t - h)) && (h = t, E(), !0)
                    },
                    setDropActive(e) {
                        let t = !!e;
                        return t !== f && (f = t, E(), !0)
                    },
                    dispose() {
                        b = !0, M.dispose()
                    }
                }
            }

            function c() {
                let {
                    layout: e = "phone",
                    dropPillUrl: t = "/placeholder/DropToPlacePill.png"
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = s(e), n = document.createElement("canvas");
                n.width = r.w, n.height = r.h;
                let l = n.getContext("2d"),
                    c = i(t),
                    m = 0,
                    u = !1,
                    d = !1,
                    p = new a.ROQ(n);
                p.flipY = !1, p.colorSpace = a.KI_, p.minFilter = a.wem, p.magFilter = a.wem, p.generateMipmaps = !1;
                let h = () => {
                    if (d) return;
                    l.clearRect(0, 0, r.w, r.h);
                    let e = .1 * Math.max(0, Math.min(1, m));
                    e > .001 && (l.fillStyle = `rgba(0, 0, 0, ${e})`, l.fillRect(0, 0, r.w, r.h)), u && o(l, c.img, m, r), p.needsUpdate = !0
                };
                return c.ready.then(e => {
                    u = e, h()
                }), h(), {
                    texture: p,
                    layout: "desktop" === e ? "desktop" : "phone",
                    setHover(e) {
                        let t = Math.max(-.05, Math.min(1.35, e));
                        return !(5e-4 > Math.abs(t - m)) && (m = t, h(), !0)
                    },
                    dispose() {
                        d = !0, p.dispose()
                    }
                }
            }
            let m = new Set(["screenMaterial", "computerScreenMaterial", "computerScreenMaterial.002"]);

            function u(e) {
                let t = [];
                return e && e.traverse(e => {
                    e.isMesh && e.material && (Array.isArray(e.material) ? e.material : [e.material]).some(e => e && m.has(e.name)) && t.push(e)
                }), t
            }
        },
        7438: function(e, t, r) {
            r.d(t, {
                Cp: function() {
                    return a
                },
                WE: function() {
                    return s
                },
                calculateVideoSync: function() {
                    return n
                }
            });
            let a = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
                    return e / t
                },
                n = e => {
                    let {
                        currentTime: t,
                        videoDuration: r,
                        animationDuration: a,
                        frameIndex: n,
                        totalVideoFrames: s,
                        fps: l = 30
                    } = e;
                    return r > a ? i({
                        currentTime: t,
                        videoDuration: r,
                        animationDuration: a,
                        frameIndex: n,
                        totalVideoFrames: s,
                        fps: l
                    }) : o({
                        currentTime: t,
                        videoDuration: r,
                        animationDuration: a,
                        frameIndex: n,
                        totalVideoFrames: s,
                        fps: l
                    })
                },
                i = e => {
                    let t, r, {
                            currentTime: a,
                            videoDuration: n,
                            animationDuration: o,
                            frameIndex: s,
                            totalVideoFrames: l,
                            fps: c = 30
                        } = e,
                        m = Math.floor(o * c);
                    return void 0 === i._maxPhase1Time && (i._maxPhase1Time = 0), s < m - 1 ? (t = a, a > i._maxPhase1Time && (i._maxPhase1Time = a), r = "PLAYING") : (t = i._maxPhase1Time - .01, r = "FROZEN"), {
                        mixerTime: t,
                        videoFrameIndex: s % l,
                        phase: r,
                        type: "LONG",
                        animationEndFrame: m,
                        seekTime: a % n
                    }
                },
                o = e => {
                    let t, r, a, {
                        currentTime: n,
                        videoDuration: i,
                        animationDuration: o,
                        frameIndex: s,
                        totalVideoFrames: l,
                        fps: c = 30
                    } = e;
                    if (n < i) t = n, r = s, a = "PLAYING";
                    else if (n < o) t = i - .01, r = Math.floor((i - .01) * c), a = "FROZEN";
                    else {
                        let e = n % o;
                        e < i ? (t = e, r = Math.floor(e * c), a = "RESTARTED") : (t = i - .01, r = Math.floor((i - .01) * c), a = "FROZEN_CYCLE")
                    }
                    return {
                        mixerTime: n,
                        videoFrameIndex: Math.min(r, l - 1),
                        phase: a,
                        type: "SHORT",
                        seekTime: Math.max(0, Math.min(t, i - .01))
                    }
                },
                s = () => {
                    void 0 !== i._maxPhase1Time && (i._maxPhase1Time = 0)
                }
        },
        8311: function(e, t, r) {
            r.d(t, {
                Vh: function() {
                    return i
                },
                pt: function() {
                    return a
                }
            });
            let a = e => ["video/mp4", "video/webm", "video/ogg", "video/x-msvideo", "video/x-matroska", "video/quicktime"].includes(e.type) ? e.size > 104857600 ? {
                    isValid: !1,
                    error: "Video file is too large. Please use a file smaller than 100MB."
                } : {
                    isValid: !0
                } : {
                    isValid: !1,
                    error: "Please upload a supported video format (MP4, WebM, OGG, AVI, MKV, or MOV). For best compatibility, we recommend MP4 format."
                },
                n = e => new Promise((t, r) => {
                    let a = new FileReader;
                    a.onload = e => t(e.target.result), a.onerror = () => r(Error("Failed to read video file")), a.readAsDataURL(e)
                }),
                i = async (e, t, r) => {
                    if (e) {
                        if (e instanceof File && e.type && e.type.startsWith("video/")) {
                            let i = a(e);
                            if (!i.isValid) {
                                r ? r(i.error) : alert(i.error);
                                return
                            }
                            try {
                                let r = await n(e);
                                t(r)
                            } catch (t) {
                                let e = "Failed to process video file";
                                r ? r(e) : alert(e)
                            }
                        } else {
                            let e = "Invalid file type or not a file";
                            r ? r(e) : alert(e)
                        }
                    }
                }
        }
    }
]);