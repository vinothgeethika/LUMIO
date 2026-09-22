! function() {
    var e, t, a, r, i, n, o, s, l = {
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
                let r = e => {
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
                    i = e => {
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
                    n = e => {
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
                    o = () => {
                        void 0 !== i._maxPhase1Time && (i._maxPhase1Time = 0)
                    }
            },
            862: function(e, t, a) {
                "use strict";
                let r;
                (f = h || (h = {})).LOAD = "LOAD", f.EXEC = "EXEC", f.FFPROBE = "FFPROBE", f.WRITE_FILE = "WRITE_FILE", f.READ_FILE = "READ_FILE", f.DELETE_FILE = "DELETE_FILE", f.RENAME = "RENAME", f.CREATE_DIR = "CREATE_DIR", f.LIST_DIR = "LIST_DIR", f.DELETE_DIR = "DELETE_DIR", f.ERROR = "ERROR", f.DOWNLOAD = "DOWNLOAD", f.PROGRESS = "PROGRESS", f.LOG = "LOG", f.MOUNT = "MOUNT", f.UNMOUNT = "UNMOUNT";
                let i = (r = 0, () => r++);
                Error("unknown message type");
                let n = Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),
                    o = Error("called FFmpeg.terminate()");
                Error("failed to import ffmpeg-core.js");
                class s {
                    #e = null;
                    #t = {};
                    #a = {};
                    #r = [];
                    #i = [];
                    loaded = !1;
                    #n = () => {
                        this.#e && (this.#e.onmessage = ({
                            data: {
                                id: e,
                                type: t,
                                data: a
                            }
                        }) => {
                            switch (t) {
                                case h.LOAD:
                                    this.loaded = !0, this.#t[e](a);
                                    break;
                                case h.MOUNT:
                                case h.UNMOUNT:
                                case h.EXEC:
                                case h.FFPROBE:
                                case h.WRITE_FILE:
                                case h.READ_FILE:
                                case h.DELETE_FILE:
                                case h.RENAME:
                                case h.CREATE_DIR:
                                case h.LIST_DIR:
                                case h.DELETE_DIR:
                                    this.#t[e](a);
                                    break;
                                case h.LOG:
                                    this.#r.forEach(e => e(a));
                                    break;
                                case h.PROGRESS:
                                    this.#i.forEach(e => e(a));
                                    break;
                                case h.ERROR:
                                    this.#a[e](a)
                            }
                            delete this.#t[e], delete this.#a[e]
                        })
                    };
                    #o = ({
                        type: e,
                        data: t
                    }, a = [], r) => this.#e ? new Promise((n, o) => {
                        let s = i();
                        this.#e && this.#e.postMessage({
                            id: s,
                            type: e,
                            data: t
                        }, a), this.#t[s] = n, this.#a[s] = o, r ?.addEventListener("abort", () => {
                            o(new DOMException(`Message # ${s} was aborted`, "AbortError"))
                        }, {
                            once: !0
                        })
                    }) : Promise.reject(n);
                    on(e, t) {
                        "log" === e ? this.#r.push(t) : "progress" === e && this.#i.push(t)
                    }
                    off(e, t) {
                        "log" === e ? this.#r = this.#r.filter(e => e !== t) : "progress" === e && (this.#i = this.#i.filter(e => e !== t))
                    }
                    load = ({
                        classWorkerURL: e,
                        ...t
                    } = {}, {
                        signal: r
                    } = {}) => (this.#e || (this.#e = e ? new Worker(new URL(e, "file:///vercel/path0/node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js"), {
                        type: "module"
                    }) : new Worker(a.tu(new URL(a.p + a.u(1480), a.b)), {
                        type: void 0
                    }), this.#n()), this.#o({
                        type: h.LOAD,
                        data: t
                    }, void 0, r));
                    exec = (e, t = -1, {
                        signal: a
                    } = {}) => this.#o({
                        type: h.EXEC,
                        data: {
                            args: e,
                            timeout: t
                        }
                    }, void 0, a);
                    ffprobe = (e, t = -1, {
                        signal: a
                    } = {}) => this.#o({
                        type: h.FFPROBE,
                        data: {
                            args: e,
                            timeout: t
                        }
                    }, void 0, a);
                    terminate = () => {
                        for (let e of Object.keys(this.#a)) this.#a[e](o), delete this.#a[e], delete this.#t[e];
                        this.#e && (this.#e.terminate(), this.#e = null, this.loaded = !1)
                    };
                    writeFile = (e, t, {
                        signal: a
                    } = {}) => {
                        let r = [];
                        return t instanceof Uint8Array && r.push(t.buffer), this.#o({
                            type: h.WRITE_FILE,
                            data: {
                                path: e,
                                data: t
                            }
                        }, r, a)
                    };
                    mount = (e, t, a) => this.#o({
                        type: h.MOUNT,
                        data: {
                            fsType: e,
                            options: t,
                            mountPoint: a
                        }
                    }, []);
                    unmount = e => this.#o({
                        type: h.UNMOUNT,
                        data: {
                            mountPoint: e
                        }
                    }, []);
                    readFile = (e, t = "binary", {
                        signal: a
                    } = {}) => this.#o({
                        type: h.READ_FILE,
                        data: {
                            path: e,
                            encoding: t
                        }
                    }, void 0, a);
                    deleteFile = (e, {
                        signal: t
                    } = {}) => this.#o({
                        type: h.DELETE_FILE,
                        data: {
                            path: e
                        }
                    }, void 0, t);
                    rename = (e, t, {
                        signal: a
                    } = {}) => this.#o({
                        type: h.RENAME,
                        data: {
                            oldPath: e,
                            newPath: t
                        }
                    }, void 0, a);
                    createDir = (e, {
                        signal: t
                    } = {}) => this.#o({
                        type: h.CREATE_DIR,
                        data: {
                            path: e
                        }
                    }, void 0, t);
                    listDir = (e, {
                        signal: t
                    } = {}) => this.#o({
                        type: h.LIST_DIR,
                        data: {
                            path: e
                        }
                    }, void 0, t);
                    deleteDir = (e, {
                        signal: t
                    } = {}) => this.#o({
                        type: h.DELETE_DIR,
                        data: {
                            path: e
                        }
                    }, void 0, t)
                }(m = u || (u = {})).MEMFS = "MEMFS", m.NODEFS = "NODEFS", m.NODERAWFS = "NODERAWFS", m.IDBFS = "IDBFS", m.WORKERFS = "WORKERFS", m.PROXYFS = "PROXYFS";
                let l = Error("failed to get response body reader"),
                    c = Error("failed to complete download"),
                    p = async (e, t) => {
                        let a;
                        let r = await fetch(e);
                        try {
                            let i = parseInt(r.headers.get("Content-Length") || "-1"),
                                n = r.body ?.getReader();
                            if (!n) throw l;
                            let o = [],
                                s = 0;
                            for (;;) {
                                let {
                                    done: a,
                                    value: r
                                } = await n.read(), l = r ? r.length : 0;
                                if (a) {
                                    if (-1 != i && i !== s) throw c;
                                    t && t({
                                        url: e,
                                        total: i,
                                        received: s,
                                        delta: l,
                                        done: a
                                    });
                                    break
                                }
                                o.push(r), s += l, t && t({
                                    url: e,
                                    total: i,
                                    received: s,
                                    delta: l,
                                    done: a
                                })
                            }
                            let p = new Uint8Array(s),
                                d = 0;
                            for (let e of o) p.set(e, d), d += e.length;
                            a = p.buffer
                        } catch (i) {
                            console.log("failed to send download progress event: ", i), a = await r.arrayBuffer(), t && t({
                                url: e,
                                total: a.byteLength,
                                received: a.byteLength,
                                delta: 0,
                                done: !0
                            })
                        }
                        return a
                    },
                    d = async (e, t, a = !1, r) => {
                        let i = new Blob([a ? await p(e, r) : await (await fetch(e)).arrayBuffer()], {
                            type: t
                        });
                        return URL.createObjectURL(i)
                    };
                var f, m, h, u, g = a(4250),
                    w = a(7438),
                    y = a(9477);
                async function v(e) {
                    let {
                        width: t,
                        height: r,
                        fps: i,
                        canvas: n
                    } = e, o = await Promise.all([a.e(8760), a.e(6923), a.e(8501)]).then(a.bind(a, 6923));
                    if (!await o.canEncodeVideo("avc", {
                            width: t,
                            height: r
                        })) throw Error("AVC encoding not supported");
                    let {
                        Output: s,
                        BufferTarget: l,
                        Mp4OutputFormat: c,
                        CanvasSource: p,
                        QUALITY_HIGH: d
                    } = o, f = new OffscreenCanvas(16, 16), m = f.getContext("2d");
                    m.fillStyle = "#000", m.fillRect(0, 0, 16, 16);
                    let h = new s({
                            format: new c,
                            target: new l
                        }),
                        u = new p(f, {
                            codec: "avc",
                            bitrate: d
                        });
                    h.addVideoTrack(u, {
                        frameRate: i
                    }), await h.start(), await u.add(0, 1 / i), u.close(), await h.finalize();
                    let g = new s({
                            format: new c,
                            target: new l
                        }),
                        w = new p(n, {
                            codec: "avc",
                            bitrate: d
                        });
                    return g.addVideoTrack(w, {
                        frameRate: i
                    }), await g.start(), {
                        output: g,
                        videoSource: w
                    }
                }
                async function E(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "frames";
                    try {
                        await e.createDir(t)
                    } catch (a) {
                        try {
                            await e.deleteDir(t), await e.createDir(t)
                        } catch (e) {}
                    }
                }
                async function b(e, t) {
                    let a = new OffscreenCanvas(e.width, e.height),
                        r = a.getContext("2d");
                    if (!r) throw Error("2D context unavailable");
                    return r.drawImage(e, 0, 0), a.convertToBlob(t)
                }
                async function F(e, t) {
                    let a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
                    if (function() {
                            let e = "undefined" != typeof self && self.navigator ?.userAgent || "undefined" != typeof navigator && navigator.userAgent || "";
                            return /Firefox|FxiOS/i.test(e)
                        }()) {
                        let a;
                        for (let i = 0; i < r; i++) try {
                            return await b(e, t)
                        } catch (e) {
                            if (a = e, i < r - 1) {
                                await new Promise(e => setTimeout(e, 50 * (i + 1)));
                                continue
                            }
                            throw e
                        }
                        throw a
                    }
                    for (let i = 0; i < r; i++) try {
                        return await e.convertToBlob(t)
                    } catch (n) {
                        if (a = n, function(e) {
                                let t = e && e.message ? e.message : String(e);
                                return /Readback of the source image has failed/i.test(t) || /WebGL/i.test(t) || /context.*lost/i.test(t) || /NS_ERROR/i.test(t)
                            }(n) || i === r - 1) try {
                            return await b(e, t)
                        } catch (e) {
                            if (i >= r - 1) {
                                let t = e ?.message ?? String(e);
                                throw Error(`Canvas readback failed. 2D fallback also failed: ${t}`)
                            }
                        }
                        if (i < r - 1) continue;
                        throw n
                    }
                    throw a
                }
                async function R(e, t) {
                    let a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
                    for (let i = 0; i < r; i++) {
                        try {
                            let r = await fetch(e, t);
                            if (r.ok) return r;
                            a = Error(`HTTP ${r.status}`)
                        } catch (e) {
                            a = e
                        }
                        i < r - 1 && await new Promise(e => setTimeout(e, 200))
                    }
                    throw a
                }
                let x = new Set(["screenMaterial", "computerScreenMaterial", "computerScreenMaterial.002"]);

                function M(e, t) {
                    e && t && e.traverse(e => {
                        e.isMesh && (Array.isArray(e.material) ? e.material : [e.material]).forEach(e => {
                            e && x.has(e.name) && e && (t.colorSpace = g.KI_, t.flipY = !1, e.map = t, e.emissiveMap = t, e.emissive.setRGB(.8, .8, .8), e.emissiveIntensity = .6, e.roughness = .1, e.metalness = 0, e.toneMapped = !0, e.transparent = !0, e.opacity = 1, e.color.setRGB(.9, .9, .9), e.color.convertSRGBToLinear(), "specularIntensity" in e && (e.specularIntensity = .2), "clearcoat" in e && (e.clearcoat = .1), "clearcoatRoughness" in e && (e.clearcoatRoughness = .2), "ior" in e && (e.ior = 1.5), "transmission" in e && (e.transmission = 0), "thickness" in e && (e.thickness = 0), "sheen" in e && (e.sheen = .1), "sheenRoughness" in e && (e.sheenRoughness = .3), e.sheenColor && "function" == typeof e.sheenColor.setRGB && e.sheenColor.setRGB(.8, .8, .8), e.normalScale && "function" == typeof e.normalScale.set && e.normalScale.set(.3, .3), e.needsUpdate = !0)
                        })
                    })
                }
                let O = {
                    phone: {
                        w: 720,
                        h: 1560,
                        pillWidthRatio: .66,
                        cropTopRatio: 0,
                        wallpaperPath: "/placeholder/ScreenPlaceholderWallpaper.png"
                    },
                    desktop: {
                        w: 1600,
                        h: 1e3,
                        pillWidthRatio: .36,
                        cropTopRatio: .055,
                        wallpaperPath: "/placeholder/ScreenPlaceholderWallpaper.png"
                    }
                };
                async function S(e, t) {
                    let a = await t(e);
                    return createImageBitmap(await a.blob())
                }
                async function _() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "phone",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fetch,
                        a = O[e] || O.phone,
                        [r, i] = await Promise.all([S(a.wallpaperPath, t), S("/placeholder/DropPill.png", t).catch(() => null)]),
                        n = new OffscreenCanvas(a.w, a.h),
                        o = n.getContext("2d");
                    if (o.fillStyle = "#cfc6b8", o.fillRect(0, 0, a.w, a.h), ! function(e, t, a, r) {
                            let i, n, o, s, {
                                    cropTopRatio: l = 0
                                } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                                c = Math.floor(t.height * l),
                                p = Math.max(1, t.height - c),
                                d = t.width / p;
                            d > a / r ? (n = r, o = (a - (i = r * d)) / 2, s = 0) : (i = a, o = 0, s = (r - (n = a / d)) / 2), e.drawImage(t, 0, c, t.width, p, o, s, i, n)
                        }(o, r, a.w, a.h, {
                            cropTopRatio: a.cropTopRatio
                        }), i ?.width) {
                        let e = a.w * a.pillWidthRatio,
                            t = i.height / i.width * e;
                        o.drawImage(i, (a.w - e) / 2, (a.h - t) / 2, e, t)
                    }
                    r.close ?.(), i ?.close ?.();
                    let s = await createImageBitmap(n),
                        l = new g.xEZ(s);
                    return l.flipY = !1, l.colorSpace = g.KI_, l.needsUpdate = !0, l
                }
                async function D(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fetch;
                    return _(e ?.getObjectByName("ComputerLocation") ? "desktop" : "phone", t)
                }

                function I() {
                    let e = "undefined" != typeof self && self.navigator ?.userAgent || "undefined" != typeof navigator && navigator.userAgent || "";
                    return /Firefox|FxiOS/i.test(e)
                }

                function k() {
                    let e = "undefined" != typeof self && self.navigator ?.userAgent || "undefined" != typeof navigator && navigator.userAgent || "";
                    return /Safari/i.test(e) && !/Chrome|Chromium|CriOS/i.test(e)
                }
                let T = null,
                    L = null;

                function P(e) {
                    let t = (e || "").toLowerCase();
                    return t.includes("ffmpeg init") || t.includes("failed to load ffmpeg") || t.includes("ffmpeg verification") ? "ffmpeg_init" : t.includes("avc encoding not supported") || t.includes("mediabunny") || t.includes("canencode") ? "mediabunny" : t.includes("frame batch") || t.includes("write frame") || t.includes("converttoblob") ? "frame_capture" : t.includes("no frame files") || t.includes("ffmpeg encoding") || t.includes("output file") || t.includes("read exported video") ? "ffmpeg_encode" : t.includes("invalid dimensions") || t.includes("invalid export data") || t.includes("parse scene") || t.includes("scene data") ? "validation" : t.includes("pre-cach") || t.includes("precach") || t.includes("video frame") ? "precaching" : "export_process"
                }
                async function U() {
                    try {
                        if (!T) {
                            T = new s;
                            let e = "/ffmpeg";
                            try {
                                await T.load({
                                    coreURL: await d(`${e}/ffmpeg-core.js`, "text/javascript"),
                                    wasmURL: await d(`${e}/ffmpeg-core.wasm`, "application/wasm")
                                })
                            } catch (e) {
                                throw console.error("FFmpeg load error:", e), Error("Failed to load FFmpeg: " + e.message)
                            }
                            try {
                                await T.listDir("/")
                            } catch (e) {
                                throw console.error("FFmpeg verification failed:", e), Error("FFmpeg verification failed: " + e.message)
                            }
                        }
                    } catch (e) {
                        throw console.error("FFmpeg initialization error:", e), e
                    }
                }
                self.onmessage = async function(e) {
                    try {
                        let {
                            type: t,
                            data: a
                        } = e.data;
                        switch (t) {
                            case "init":
                                try {
                                    await U(), self.postMessage({
                                        type: "ready"
                                    })
                                } catch (t) {
                                    console.error("FFmpeg initialization failed:", t);
                                    let e = t ?.stack ? String(t.stack).slice(0, 400) : void 0;
                                    self.postMessage({
                                        type: "error",
                                        error: "FFmpeg initialization failed: " + t.message,
                                        phase: "ffmpeg_init",
                                        stack: e
                                    })
                                }
                                break;
                            case "startExport":
                                try {
                                    if (!a || "object" != typeof a) throw Error("Invalid export data received");
                                    await C(a)
                                } catch (n) {
                                    console.error("Export process failed:", n);
                                    let e = n && n.message ? n.message : String(n),
                                        t = P(e),
                                        r = n ?.stack ? String(n.stack).slice(0, 400) : void 0,
                                        i = a && !0 === a.transparentBackground;
                                    self.postMessage({
                                        type: "error",
                                        error: "Export process failed: " + e,
                                        phase: t,
                                        stack: r,
                                        isTransparent: i
                                    })
                                }
                                break;
                            case "frameUploadUrls":
                                if (L) {
                                    let e = L;
                                    L = null, e(a)
                                }
                        }
                    } catch (a) {
                        console.error("Worker error:", a);
                        let e = a && a.message ? a.message : "Unknown error in worker",
                            t = a ?.stack ? String(a.stack).slice(0, 400) : void 0;
                        self.postMessage({
                            type: "error",
                            error: e,
                            phase: P(e),
                            stack: t
                        })
                    }
                };
                let C = async e => {
                    try {
                        let r, i, n, o, s, l, c;
                        if (! function() {
                                try {
                                    let e = new OffscreenCanvas(1, 1);
                                    return !!(e.getContext("webgl2") || e.getContext("webgl"))
                                } catch (e) {
                                    return !1
                                }
                            }()) throw Error("Error creating WebGL context.");
                        if ((0, w.WE)(), T && T.loaded) try {
                            for (let e of (await T.listDir("/")))
                                if (!e.isDir && (e.name.endsWith(".mp4") || e.name.endsWith(".mov"))) try {
                                    await T.deleteFile(`/${e.name}`)
                                } catch (e) {}
                            try {
                                for (let e of (await T.listDir("frames")))
                                    if (!e.isDir) try {
                                        await T.deleteFile(`frames/${e.name}`)
                                    } catch (e) {}
                                await T.deleteDir("frames")
                            } catch (e) {}
                        } catch (e) {}
                        let p = parseInt(e.width),
                            d = parseInt(e.height);
                        if (e.quality, isNaN(p) || p <= 0 || isNaN(d) || d <= 0) throw Error(`Invalid dimensions: ${p}x${d}`);
                        e.uploadedVideo && e.videoFrames;
                        let f = new g.Gql;
                        f.setResourcePath = () => {}, f.parseImages = async function(e) {
                            if (!e) return {};
                            let t = {};
                            for (let a in e) {
                                let e = new OffscreenCanvas(1, 1),
                                    r = e.getContext("2d");
                                r.fillStyle = "white", r.fillRect(0, 0, 1, 1), t[a] = e
                            }
                            return t
                        };
                        try {
                            r = await f.parseAsync(e.scene), i = f.parse(e.camera), r.traverse(e => {
                                e.isMesh && e.material && (Array.isArray(e.material) ? e.material : [e.material]).forEach(e => {
                                    ("screenMaterial" === e.name || "computerScreenMaterial" === e.name || "computerScreenMaterial.002" === e.name) && (e.map && (e.map.dispose(), e.map = null), e.emissiveMap && (e.emissiveMap.dispose(), e.emissiveMap = null))
                                })
                            });
                            let t = r.getObjectByName("ComputerLocation"),
                                a = r.getObjectByName("ScreenRotation");
                            t && (t.children.length, a && a.children.length)
                        } catch (e) {
                            throw Error("Failed to parse scene data: " + e.message)
                        }
                        if (e.textureDataUrls && Object.keys(e.textureDataUrls).length > 0) {
                            let t = [];
                            r.traverse(a => {
                                a.isMesh && a.material && (Array.isArray(a.material) ? a.material : [a.material]).forEach((r, i) => {
                                    if (!("screenMaterial" === r.name || "computerScreenMaterial" === r.name || "computerScreenMaterial.002" === r.name)) {
                                        let n = r.name || "material",
                                            o = `${a.name}_${n}_${i}`,
                                            s = a.name.toLowerCase().includes("keyboard") || n.toLowerCase().includes("keyboard") || "White Plastic.002" === n;
                                        s && (r.metalness = 0, r.roughness = 1, r.clearcoat = 0, r.clearcoatRoughness = 1, r.reflectivity = 0, r.envMapIntensity = 0, r.needsUpdate = !0);
                                        let l = async (e, t) => {
                                                try {
                                                    let a = await fetch(e),
                                                        i = await a.blob(),
                                                        n = await createImageBitmap(i),
                                                        o = new g.xEZ(n);
                                                    return o.flipY = !1, o.colorSpace = g.KI_, o.needsUpdate = !0, r[t] = o, s && (r.metalness = 0, r.roughness = 1, r.clearcoat = 0, r.clearcoatRoughness = 1, r.reflectivity = 0, r.envMapIntensity = 0), r.needsUpdate = !0, !0
                                                } catch (e) {
                                                    return !1
                                                }
                                            },
                                            c = `${o}_map`;
                                        e.textureDataUrls[c] ? t.push(l(e.textureDataUrls[c], "map")) : s && console.error("Keyboard map texture not found in data URLs. Looking for:", c, {
                                            availableKeys: Object.keys(e.textureDataUrls),
                                            objectName: a.name,
                                            materialName: n,
                                            index: i
                                        });
                                        let p = `${o}_bumpMap`;
                                        e.textureDataUrls[p] && t.push(l(e.textureDataUrls[p], "bumpMap"));
                                        let d = `${o}_normalMap`;
                                        e.textureDataUrls[d] && t.push(l(e.textureDataUrls[d], "normalMap"));
                                        let f = `${o}_specularMap`;
                                        e.textureDataUrls[f] && t.push(l(e.textureDataUrls[f], "specularMap"))
                                    }
                                })
                            }), await Promise.all(t)
                        }
                        let m = async () => {
                            let {
                                RGBELoader: e
                            } = await a.e(693).then(a.bind(a, 693));
                            return new Promise((t, a) => {
                                new e().load("/environment/warehouse/empty_warehouse_01_1k.hdr", e => {
                                    e.mapping = g.dSO, r.environment = e, r.background = null, t()
                                }, void 0, e => {
                                    a(e)
                                })
                            })
                        };
                        await m(), e.transparentBackground && r.traverse(e => {
                            "Backdrop" === e.name && (e.visible = !1)
                        });
                        let h = null,
                            u = null,
                            b = null;
                        if (e.videoFrames && e.videoFrames.length > 0) {
                            if (e.transferredVideoBitmaps && e.transferredVideoBitmaps.length > 0) b = e.transferredVideoBitmaps;
                            else {
                                self.postMessage({
                                    type: "progress",
                                    phase: "precaching",
                                    progress: 0,
                                    message: `Pre-caching ${e.videoFrames.length} video frames...`
                                }), b = [];
                                for (let t = 0; t < e.videoFrames.length; t++) {
                                    let a = e.videoFrames[t];
                                    try {
                                        let r = await (await R(a.url)).blob(),
                                            i = await createImageBitmap(r);
                                        if (b.push(i), (t + 1) % 10 == 0 || t === e.videoFrames.length - 1) {
                                            let a = Math.round((t + 1) / e.videoFrames.length * 5);
                                            self.postMessage({
                                                type: "progress",
                                                phase: "precaching",
                                                progress: a,
                                                message: `Pre-caching video frames: ${t+1}/${e.videoFrames.length}`
                                            })
                                        }
                                    } catch (a) {
                                        let e = new OffscreenCanvas(1, 1),
                                            t = e.getContext("2d");
                                        t.fillStyle = "black", t.fillRect(0, 0, 1, 1), b.push(e)
                                    }
                                }
                                self.postMessage({
                                    type: "progress",
                                    phase: "precaching",
                                    progress: 5,
                                    message: `Pre-cached ${b.length} video frames`
                                })
                            }(h = new g.xEZ(b[0])).flipY = !1, h.colorSpace = g.KI_, h.needsUpdate = !0
                        } else if (e.uploadedVideo) try {
                            let t = document.createElement("video");
                            t.src = e.uploadedVideo, t.crossOrigin = "anonymous", t.muted = !0, t.playsInline = !0, t.loop = !1, (u = new g.fO1(t)).flipY = !1, u.colorSpace = g.KI_, u.generateMipmaps = !1, u.minFilter = g.wem, u.magFilter = g.wem, await new Promise((e, a) => {
                                t.addEventListener("loadedmetadata", () => {
                                    e()
                                }), t.addEventListener("error", a)
                            }), h = u
                        } catch (e) {
                            try {
                                h = await D(r, R)
                            } catch (e) {
                                console.error("Failed to load empty-screen placeholder:", e)
                            }
                        } else if (e.uploadedImage) {
                            let t = await createImageBitmap(await (await R(e.uploadedImage)).blob());
                            (h = new g.xEZ(t)).flipY = !1, h.colorSpace = g.KI_, h.needsUpdate = !0
                        }
                        if (h) M(r, h);
                        else if (e.uploadedImage) {
                            let t = await createImageBitmap(await (await R(e.uploadedImage)).blob()),
                                a = new g.xEZ(t);
                            a.flipY = !1, a.colorSpace = g.KI_, a.needsUpdate = !0, M(r, a)
                        } else try {
                            let e = await D(r, R);
                            M(r, e)
                        } catch (e) {
                            console.error("Failed to load empty-screen placeholder:", e)
                        }
                        let x = new g.Xcj(r),
                            O = [];
                        e.animations && e.animations.length > 0 && e.animations.forEach((e, t) => {
                            let a = g.m7l.parse(e),
                                n = a.tracks[0] ?.name.split(".")[0],
                                o = r;
                            n === i.name || "Camera" === n ? o = i : r.traverse(e => {
                                e.name === n && (o = e)
                            }), O.push(a);
                            let s = x.clipAction(a, o);
                            s.reset(), s.play(), s.clampWhenFinished = !1
                        });
                        let S = function(e, t) {
                            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                {
                                    antialias: r = !0,
                                    alpha: i = !0,
                                    preserveDrawingBuffer: n = !0,
                                    precision: o,
                                    powerPreference: s = "high-performance"
                                } = a;
                            for (let a of [{
                                    antialias: r,
                                    alpha: i,
                                    preserveDrawingBuffer: n,
                                    powerPreference: s,
                                    ...o ? {
                                        precision: o
                                    } : {}
                                }, {
                                    antialias: !1,
                                    alpha: i,
                                    preserveDrawingBuffer: n,
                                    powerPreference: "default",
                                    precision: "mediump"
                                }]) {
                                let r;
                                let i = new OffscreenCanvas(e, t);
                                try {
                                    r = new y.WebGLRenderer({
                                        canvas: i,
                                        ...a
                                    })
                                } catch (e) {
                                    continue
                                }
                                if (!r.getContext()) {
                                    r.dispose();
                                    continue
                                }
                                return r.setPixelRatio(1), r.setSize(e, t, !1), r.outputColorSpace = g.KI_, r.toneMapping = g.LY2, r.toneMappingExposure = .7, r.shadowMap.enabled = !0, r.shadowMap.type = g._iA, r
                            }
                            throw Error("Error creating WebGL context.")
                        }(p, d, I() ? {
                            antialias: !1,
                            precision: "highp"
                        } : k() ? {
                            antialias: !1,
                            precision: "highp",
                            powerPreference: "default"
                        } : {
                            precision: "highp"
                        });
                        S.setClearColor(16777215, 0), S.shadowMap.autoUpdate = !0, S.shadowMap.needsUpdate = !0;
                        let _ = e.fps || 30,
                            P = 0;
                        e.animations && e.animations.length > 0 && (e.animations.forEach(e => {
                            e.tracks.forEach(e => {
                                let t = e.times;
                                if (t.length > 0) {
                                    let e = t[t.length - 1];
                                    P = Math.max(P, e)
                                }
                            })
                        }), P += 1 / 30);
                        let C = 0;
                        e.videoFrames && e.videoFrames.length > 0 && (C = e.videoFrames[0].videoDuration || e.videoFrames.length / _);
                        let N = Math.max(P, C, e.duration || 5),
                            A = Math.ceil(_ * N),
                            W = 1 / _,
                            $ = [],
                            j = C <= P ? A - 1 : A,
                            B = [],
                            {
                                calculateVideoSync: G
                            } = await Promise.resolve().then(a.bind(a, 7438)),
                            V = [];
                        for (let t = 0; t < j; t++) {
                            let a = t * W;
                            e.videoFrames && 0 !== e.videoFrames.length ? V.push(G({
                                currentTime: a,
                                videoDuration: C,
                                animationDuration: P,
                                frameIndex: t,
                                totalVideoFrames: e.videoFrames.length,
                                fps: 30
                            })) : V.push({
                                mixerTime: a,
                                videoFrameIndex: 0,
                                phase: "NO_VIDEO",
                                type: "NONE"
                            })
                        }
                        let Y = e.transparentBackground || !1,
                            K = Y ? "png" : "jpg",
                            z = Y && "prores4444" === e.transparentFormat && !!e.exportId,
                            Z = !1;
                        if (z) {
                            var t;
                            let {
                                uploadUrls: a
                            } = await (t = e.exportId, new Promise((e, a) => {
                                L = e, self.postMessage({
                                    type: "requestFrameUploadUrls",
                                    exportId: t,
                                    frameCount: j
                                }), setTimeout(() => {
                                    L === e && (L = null, a(Error("Timed out waiting for frame upload URLs")))
                                }, 3e4)
                            }));
                            if (!Array.isArray(a) || a.length < j) throw Error("Did not receive enough frame upload URLs for this export");
                            e.frameUploadUrls = a, Z = !0
                        }
                        let X = !1,
                            q = null,
                            H = null;
                        if (!Y && !("undefined" != typeof self && self.navigator && (I() || k()))) try {
                            let e = await v({
                                width: p,
                                height: d,
                                fps: _,
                                canvas: S.domElement
                            });
                            q = e.output, H = e.videoSource, X = !0
                        } catch (e) {}
                        if (!X && !Z) {
                            if (T || await U(), !T || !T.loaded) throw Error("FFmpeg not properly initialized");
                            await E(T, "frames")
                        }
                        let J = X ? 95 : 75,
                            Q = X ? 95 : 75;
                        for (let t = 0; t < j; t += 20) {
                            let a = Math.min(t + 20, j),
                                n = 0 + Math.round(a / j * J);
                            Z || self.postMessage({
                                type: "progress",
                                phase: "capturing",
                                current: a,
                                total: j,
                                progress: n,
                                encodingStart: Q
                            });
                            let o = [],
                                s = [];
                            for (let n = t; n < a; n++) {
                                let t = V[n];
                                if (x && x.setTime(t.mixerTime), b && b.length > 0 && h) {
                                    let e = Math.max(0, Math.min(t.videoFrameIndex, b.length - 1));
                                    h.image = b[e], h.needsUpdate = !0, r.traverse(e => {
                                        if (e.isMesh) {
                                            if (Array.isArray(e.material)) e.material.forEach(e => {
                                                ("screenMaterial" === e.name || "computerScreenMaterial" === e.name || "computerScreenMaterial.002" === e.name) && (e.map = h, e.emissiveMap = h, e.needsUpdate = !0)
                                            });
                                            else if (e.material && ("screenMaterial" === e.material.name || "computerScreenMaterial" === e.material.name || "computerScreenMaterial.002" === e.material.name)) {
                                                let t = e.material;
                                                t.map = h, t.emissiveMap = h, t.needsUpdate = !0
                                            }
                                        }
                                    })
                                }
                                if (S.render(r, i), X) await H.add(n * W, W);
                                else if (Z) {
                                    let t = (async () => {
                                        let t = await F(S.domElement, {
                                                type: "image/png"
                                            }),
                                            a = e.frameUploadUrls[n];
                                        await R(a, {
                                            method: "PUT",
                                            body: t,
                                            headers: {
                                                "Content-Type": "image/png"
                                            }
                                        })
                                    })();
                                    s.push(t)
                                } else {
                                    let e = `frames/frame_${n.toString().padStart(6,"0")}.${K}`,
                                        t = (async () => {
                                            let t;
                                            t = Y ? await F(S.domElement, {
                                                type: "image/png"
                                            }) : await F(S.domElement, {
                                                type: "image/jpeg",
                                                quality: .95
                                            });
                                            let a = await t.arrayBuffer();
                                            return {
                                                frameIndex: n,
                                                fileName: e,
                                                data: new Uint8Array(a)
                                            }
                                        })();
                                    s.push(t)
                                }
                            }
                            if (Z) await Promise.all(s), self.postMessage({
                                type: "progress",
                                phase: "capturing",
                                current: a,
                                total: j,
                                progress: n,
                                encodingStart: Q
                            });
                            else if (!X) {
                                let e = await Promise.all(s);
                                for (let t of (o.push(...e), o.sort((e, t) => e.frameIndex - t.frameIndex), o)) B.push({
                                    fileName: t.fileName,
                                    data: t.data
                                }), $.push(t.fileName);
                                if (B.length >= 50 || a === j) try {
                                    await Promise.all(B.map(e => {
                                        let {
                                            fileName: t,
                                            data: a
                                        } = e;
                                        return T.writeFile(t, a)
                                    })), B.length = 0
                                } catch (e) {
                                    throw console.error("Failed to write frame batch:", e), Error(`Failed to write frame batch: ${e.message}`)
                                }
                            }
                            if (b) {
                                let e = new Set;
                                for (let t = a; t < j; t++) e.add(V[t].videoFrameIndex);
                                ! function(e, t) {
                                    if (Array.isArray(e)) {
                                        for (let a = 0; a < e.length; a++)
                                            if (null != e[a] && !t.has(a)) {
                                                let t = e[a];
                                                if (t && "function" == typeof t.close) try {
                                                    t.close()
                                                } catch (e) {}
                                                e[a] = null
                                            }
                                    }
                                }(b, e)
                            }
                        }
                        if (X) {
                            H.close(), await q.finalize();
                            let e = q.target.buffer,
                                t = new Blob([e], {
                                    type: "video/mp4"
                                });
                            S.dispose(), x.stopAllAction(), x.uncacheRoot(r), self.postMessage({
                                type: "progress",
                                phase: "encoding",
                                progress: 100
                            }), self.postMessage({
                                type: "complete",
                                videoBlob: t,
                                mimeType: "video/mp4"
                            });
                            return
                        }
                        if (Z) {
                            S.dispose(), x.stopAllAction(), x.uncacheRoot(r), self.postMessage({
                                type: "framesUploaded",
                                exportId: e.exportId,
                                frameCount: j,
                                width: p,
                                height: d,
                                fps: _
                            });
                            return
                        }
                        let ee = e.transparentFormat || "prores4444";
                        if (e.exportName) {
                            if (!(n = (e => {
                                    if (!e) return "";
                                    let t = e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                                    return (t = (t = t.replace(/\s+/g, "_")).replace(/[<>:"/\\|?*\x00-\x1f]/g, "")).trim()
                                })(e.exportName)) || 0 === n.length) {
                                let t = e.sceneName.replace(".glb", "");
                                n = t.split("/").pop() || t
                            }
                        } else {
                            let t = e.sceneName.replace(".glb", "");
                            n = t.split("/").pop() || t
                        }
                        o = Y ? `/${n}.mov` : `/${n}.mp4`;
                        let et = 75,
                            ea = e => {
                                let {
                                    type: t,
                                    message: a
                                } = e;
                                try {
                                    if ("stderr" !== t && "stdout" !== t) return;
                                    if ("string" == typeof a) {
                                        let e = a.match(/frame=\s*(\d+)/);
                                        if (e) {
                                            let t = parseInt(e[1]),
                                                a = 75 + Math.round(25 * Math.min(.98, t / A));
                                            a > et && (et = a, self.postMessage({
                                                type: "progress",
                                                phase: "encoding",
                                                progress: a,
                                                message: `Encoding Video: ${a}%`
                                            }))
                                        }
                                    }
                                } catch (e) {}
                            };
                        if (T.on("log", ea), Y) switch (ee) {
                            case "prores4444":
                                s = ["-framerate", _.toString(), "-pattern_type", "glob", "-i", "frames/frame_*.png", "-c:v", "prores_ks", "-profile:v", "4", "-pix_fmt", "yuva444p10le", "-preset", "fast", "-stats", "-progress", "-", "-y", o];
                                break;
                            case "cineform":
                                s = ["-framerate", _.toString(), "-pattern_type", "glob", "-i", "frames/frame_*.png", "-c:v", "cfhd", "-quality", "4", "-pix_fmt", "yuva444p10le", "-stats", "-progress", "-", "-y", o];
                                break;
                            default:
                                s = ["-framerate", _.toString(), "-pattern_type", "glob", "-i", "frames/frame_*.png", "-c:v", "prores_ks", "-profile:v", "4", "-pix_fmt", "yuva444p10le", "-preset", "ultrafast", "-threads", "0", "-stats", "-progress", "-", "-y", o]
                        } else s = ["-framerate", _.toString(), "-pattern_type", "glob", "-i", "frames/frame_*.jpg", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "veryfast", "-crf", "20", "-threads", "0", "-movflags", "+faststart", "-stats", "-progress", "-", "-y", o];
                        try {
                            try {
                                let e = (await T.listDir("frames")).filter(e => !e.isDir && e.name.startsWith("frame_"));
                                if (0 === e.length) throw Error("No frame files found in frames directory. Export cannot proceed.")
                            } catch (e) {
                                throw Error("Failed to verify frame files: " + e.message)
                            }
                            await T.exec(s), self.postMessage({
                                type: "progress",
                                phase: "encoding",
                                progress: 100,
                                message: "Encoding Complete"
                            })
                        } catch (e) {
                            throw console.error("FFmpeg encoding error:", e), console.error("FFmpeg args were:", s), T.off("log", ea), Error(`FFmpeg encoding failed: ${e.message||e.toString()}`)
                        } finally {
                            T.off("log", ea)
                        }
                        Y && await new Promise(e => setTimeout(e, 400));
                        try {
                            l = await T.listDir("/");
                            let e = o.startsWith("/") ? o : `/${o}`,
                                t = o.startsWith("/") ? o.slice(1) : o;
                            if (!l.some(a => a.name === e || a.name === t || a.name.endsWith(t))) try {
                                let e = await T.listDir(".");
                                if (!e.some(e => e.name === t || e.name.endsWith(t))) throw Error(`Output file ${o} was not created by FFmpeg. Available files in root: ${JSON.stringify(l.map(e=>e.name))}, current dir: ${JSON.stringify(e.map(e=>e.name))}`)
                            } catch (e) {
                                throw Error(`Output file ${o} was not created by FFmpeg. Available files: ${JSON.stringify(l.map(e=>e.name))}`)
                            }
                        } catch (e) {}
                        let er = o.startsWith("/") ? o : `/${o}`,
                            ei = o.startsWith("/") ? o.slice(1) : o,
                            en = Y ? 5 : 3,
                            eo = Y ? 600 : 400,
                            es = Y ? 1e3 : 500,
                            el = null;
                        try {
                            for (let e = 0; e < en && (!c || 0 === c.length); e++) {
                                e > 0 ? await new Promise(e => setTimeout(e, eo)) : await new Promise(e => setTimeout(e, es));
                                let t = null;
                                try {
                                    let e = await T.listDir("/"),
                                        a = e.find(e => e.name === er || e.name === ei || e.name === o);
                                    if (a) t = a.name;
                                    else {
                                        let a = Y ? ".mov" : ".mp4",
                                            r = n,
                                            i = e.find(e => e.name.endsWith(a) && e.name.includes(r) || e.name.endsWith(a));
                                        i && (t = i.name)
                                    }
                                } catch (e) {}
                                let a = [];
                                t && a.push(t), a.push(er, ei);
                                let r = null;
                                for (let e of a) try {
                                    if ((c = await T.readFile(e)) && c.length > 0) break
                                } catch (e) {
                                    r = e
                                }
                                if (!c || 0 === c.length) {
                                    try {
                                        let e = (await T.listDir("/")).find(e => !e.isDir && (e.name.endsWith(".mp4") || e.name.endsWith(".mov")));
                                        e && (c = await T.readFile(`/${e.name}`))
                                    } catch (e) {
                                        el = el ?? e
                                    }
                                    c && 0 !== c.length || (el = r)
                                }
                            }
                            if (!c || 0 === c.length) {
                                await new Promise(e => setTimeout(e, Y ? 1e3 : 800));
                                try {
                                    let e = await T.listDir("/"),
                                        t = Y ? ".mov" : ".mp4",
                                        a = e.find(a => !a.isDir && a.name.endsWith(t) && (a.name.includes(n) || 1 === e.filter(e => !e.isDir && e.name.endsWith(t)).length));
                                    a && (c = await T.readFile(a.name.startsWith("/") ? a.name : `/${a.name}`))
                                } catch (e) {}
                                let e = el ?.message ?? el ?.toString ?.() ?? "Unknown";
                                if (!c || 0 === c.length) throw Error(`Output file ${o} could not be read. Last error: ${e}`)
                            }
                        } catch (e) {
                            console.error("Failed to read output file:", e);
                            try {
                                let e = await T.listDir("/");
                                console.error("Directory contents at error time:", e.map(e => ({
                                    name: e.name,
                                    isDir: e.isDir,
                                    size: e.size
                                })))
                            } catch (e) {
                                console.error("Could not list directory:", e)
                            }
                            throw Error(`Failed to read exported video file: ${e.message||e.toString()}`)
                        }
                        let ec = Y ? "video/quicktime" : "video/mp4",
                            ep = new Blob([c.buffer], {
                                type: ec
                            });
                        try {
                            await Promise.all($.map(e => T.deleteFile(e).catch(() => {})))
                        } catch (e) {}
                        try {
                            await T.deleteFile(o)
                        } catch (e) {}
                        try {
                            await T.deleteDir("frames")
                        } catch (e) {}
                        S.dispose(), x.stopAllAction(), x.uncacheRoot(r), self.postMessage({
                            type: "complete",
                            videoBlob: ep,
                            mimeType: ec
                        })
                    } catch (e) {
                        throw console.error("Export processing error:", e), e
                    }
                }
            }
        },
        c = {};

    function p(e) {
        var t = c[e];
        if (void 0 !== t) return t.exports;
        var a = c[e] = {
                exports: {}
            },
            r = !0;
        try {
            l[e](a, a.exports, p), r = !1
        } finally {
            r && delete c[e]
        }
        return a.exports
    }
    p.m = l, p.x = function() {
        var e = p.O(void 0, [2934, 3737], function() {
            return p(862)
        });
        return p.O(e)
    }, e = [], p.O = function(t, a, r, i) {
        if (a) {
            i = i || 0;
            for (var n = e.length; n > 0 && e[n - 1][2] > i; n--) e[n] = e[n - 1];
            e[n] = [a, r, i];
            return
        }
        for (var o = 1 / 0, n = 0; n < e.length; n++) {
            for (var a = e[n][0], r = e[n][1], i = e[n][2], s = !0, l = 0; l < a.length; l++) o >= i && Object.keys(p.O).every(function(e) {
                return p.O[e](a[l])
            }) ? a.splice(l--, 1) : (s = !1, i < o && (o = i));
            if (s) {
                e.splice(n--, 1);
                var c = r();
                void 0 !== c && (t = c)
            }
        }
        return t
    }, a = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    } : function(e) {
        return e.__proto__
    }, p.t = function(e, r) {
        if (1 & r && (e = this(e)), 8 & r || "object" == typeof e && e && (4 & r && e.__esModule || 16 & r && "function" == typeof e.then)) return e;
        var i = Object.create(null);
        p.r(i);
        var n = {};
        t = t || [null, a({}), a([]), a(a)];
        for (var o = 2 & r && e;
            "object" == typeof o && !~t.indexOf(o); o = a(o)) Object.getOwnPropertyNames(o).forEach(function(t) {
            n[t] = function() {
                return e[t]
            }
        });
        return n.default = function() {
            return e
        }, p.d(i, n), i
    }, p.d = function(e, t) {
        for (var a in t) p.o(t, a) && !p.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, p.f = {}, p.e = function(e) {
        return Promise.all(Object.keys(p.f).reduce(function(t, a) {
            return p.f[a](e, t), t
        }, []))
    }, p.u = function(e) {
        return "static/chunks/" + (({
            2934: "2d36dd80",
            3737: "fb7d5399"
        })[e] || e) + "." + ({
            693: "01fce2af87f7cea0",
            1480: "338eec4295a03ffb",
            2934: "7d79bbe984ba05cd",
            3737: "ee980910da19a5ed",
            6923: "838e2e9a5184b7ea",
            8501: "ca5155d803111f1b",
            8760: "df167638423e287e"
        })[e] + ".js"
    }, p.miniCssF = function(e) {}, p.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, p.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, p.tt = function() {
        return void 0 === r && (r = {
            createScriptURL: function(e) {
                return e
            }
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (r = trustedTypes.createPolicy("nextjs#bundler", r))), r
    }, p.tu = function(e) {
        return p.tt().createScriptURL(e)
    }, p.p = "/_next/", p.b = self.location + "/../../../", i = {
        862: 1
    }, p.f.i = function(e, t) {
        i[e] || importScripts(p.tu(p.p + p.u(e)))
    }, o = (n = self.webpackChunk_N_E = self.webpackChunk_N_E || []).push.bind(n), n.push = function(e) {
        var t = e[0],
            a = e[1],
            r = e[2];
        for (var n in a) p.o(a, n) && (p.m[n] = a[n]);
        for (r && r(p); t.length;) i[t.pop()] = 1;
        o(e)
    }, s = p.x, p.x = function() {
        return Promise.all([p.e(2934), p.e(3737)]).then(s)
    }, _N_E = p.x()
}();