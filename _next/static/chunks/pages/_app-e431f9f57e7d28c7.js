(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
            [2888], {
                1683: function(e, t, n) {
                    "use strict";
                    n.d(t, {
                        BH: function() {
                            return E
                        },
                        LL: function() {
                            return B
                        },
                        ZR: function() {
                            return F
                        },
                        tV: function() {
                            return c
                        },
                        L: function() {
                            return h
                        },
                        Sg: function() {
                            return T
                        },
                        ne: function() {
                            return G
                        },
                        vZ: function() {
                            return function e(t, n) {
                                if (t === n) return !0;
                                let r = Object.keys(t),
                                    i = Object.keys(n);
                                for (let s of r) {
                                    if (!i.includes(s)) return !1;
                                    let r = t[s],
                                        o = n[s];
                                    if (q(r) && q(o)) {
                                        if (!e(r, o)) return !1
                                    } else if (r !== o) return !1
                                }
                                for (let e of i)
                                    if (!r.includes(e)) return !1;
                                return !0
                            }
                        },
                        pd: function() {
                            return K
                        },
                        aH: function() {
                            return w
                        },
                        q4: function() {
                            return y
                        },
                        P0: function() {
                            return v
                        },
                        Pz: function() {
                            return _
                        },
                        Rd: function() {
                            return d
                        },
                        m9: function() {
                            return X
                        },
                        z$: function() {
                            return k
                        },
                        ru: function() {
                            return P
                        },
                        Xx: function() {
                            return b
                        },
                        L_: function() {
                            return O
                        },
                        xb: function() {
                            return $
                        },
                        w1: function() {
                            return L
                        },
                        hl: function() {
                            return U
                        },
                        uI: function() {
                            return R
                        },
                        b$: function() {
                            return D
                        },
                        G6: function() {
                            return x
                        },
                        WO: function() {
                            return M
                        },
                        Uo: function() {
                            return I
                        },
                        xO: function() {
                            return z
                        },
                        zd: function() {
                            return H
                        },
                        dp: function() {
                            return A
                        },
                        eu: function() {
                            return V
                        }
                    });
                    let r = () => void 0;
                    var i = n(4155);
                    let s = function(e) {
                            let t = [],
                                n = 0;
                            for (let r = 0; r < e.length; r++) {
                                let i = e.charCodeAt(r);
                                i < 128 ? t[n++] = i : (i < 2048 ? t[n++] = i >> 6 | 192 : ((64512 & i) == 55296 && r + 1 < e.length && (64512 & e.charCodeAt(r + 1)) == 56320 ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128) : t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128), t[n++] = 63 & i | 128)
                            }
                            return t
                        },
                        o = function(e) {
                            let t = [],
                                n = 0,
                                r = 0;
                            for (; n < e.length;) {
                                let i = e[n++];
                                if (i < 128) t[r++] = String.fromCharCode(i);
                                else if (i > 191 && i < 224) {
                                    let s = e[n++];
                                    t[r++] = String.fromCharCode((31 & i) << 6 | 63 & s)
                                } else if (i > 239 && i < 365) {
                                    let s = ((7 & i) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                                    t[r++] = String.fromCharCode(55296 + (s >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & s))
                                } else {
                                    let s = e[n++],
                                        o = e[n++];
                                    t[r++] = String.fromCharCode((15 & i) << 12 | (63 & s) << 6 | 63 & o)
                                }
                            }
                            return t.join("")
                        },
                        a = {
                            byteToCharMap_: null,
                            charToByteMap_: null,
                            byteToCharMapWebSafe_: null,
                            charToByteMapWebSafe_: null,
                            ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                            get ENCODED_VALS() {
                                return this.ENCODED_VALS_BASE + "+/="
                            },
                            get ENCODED_VALS_WEBSAFE() {
                                return this.ENCODED_VALS_BASE + "-_."
                            },
                            HAS_NATIVE_SUPPORT: "function" == typeof atob,
                            encodeByteArray(e, t) {
                                if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                                this.init_();
                                let n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                                    r = [];
                                for (let t = 0; t < e.length; t += 3) {
                                    let i = e[t],
                                        s = t + 1 < e.length,
                                        o = s ? e[t + 1] : 0,
                                        a = t + 2 < e.length,
                                        l = a ? e[t + 2] : 0,
                                        u = i >> 2,
                                        h = (3 & i) << 4 | o >> 4,
                                        c = (15 & o) << 2 | l >> 6,
                                        d = 63 & l;
                                    a || (d = 64, s || (c = 64)), r.push(n[u], n[h], n[c], n[d])
                                }
                                return r.join("")
                            },
                            encodeString(e, t) {
                                return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(s(e), t)
                            },
                            decodeString(e, t) {
                                return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : o(this.decodeStringToByteArray(e, t))
                            },
                            decodeStringToByteArray(e, t) {
                                this.init_();
                                let n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                                    r = [];
                                for (let t = 0; t < e.length;) {
                                    let i = n[e.charAt(t++)],
                                        s = t < e.length ? n[e.charAt(t)] : 0,
                                        o = ++t < e.length ? n[e.charAt(t)] : 64,
                                        a = ++t < e.length ? n[e.charAt(t)] : 64;
                                    if (++t, null == i || null == s || null == o || null == a) throw new l;
                                    let u = i << 2 | s >> 4;
                                    if (r.push(u), 64 !== o) {
                                        let e = s << 4 & 240 | o >> 2;
                                        if (r.push(e), 64 !== a) {
                                            let e = o << 6 & 192 | a;
                                            r.push(e)
                                        }
                                    }
                                }
                                return r
                            },
                            init_() {
                                if (!this.byteToCharMap_) {
                                    this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                                    for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                                }
                            }
                        };
                    class l extends Error {
                        constructor() {
                            super(...arguments), this.name = "DecodeBase64StringError"
                        }
                    }
                    let u = function(e) {
                            let t = s(e);
                            return a.encodeByteArray(t, !0)
                        },
                        h = function(e) {
                            return u(e).replace(/\./g, "")
                        },
                        c = function(e) {
                            try {
                                return a.decodeString(e, !0)
                            } catch (e) {
                                console.error("base64Decode failed: ", e)
                            }
                            return null
                        };

                    function d() {
                        if ("undefined" != typeof self) return self;
                        if ("undefined" != typeof window) return window;
                        if (void 0 !== n.g) return n.g;
                        throw Error("Unable to locate global object.")
                    }
                    let f = () => d().__FIREBASE_DEFAULTS__,
                        p = () => {
                            if (void 0 === i || void 0 === i.env) return;
                            let e = i.env.__FIREBASE_DEFAULTS__;
                            if (e) return JSON.parse(e)
                        },
                        g = () => {
                            let e;
                            if ("undefined" == typeof document) return;
                            try {
                                e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                            } catch (e) {
                                return
                            }
                            let t = e && c(e[1]);
                            return t && JSON.parse(t)
                        },
                        m = () => {
                            try {
                                return r() || f() || p() || g()
                            } catch (e) {
                                console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
                                return
                            }
                        },
                        y = e => {
                            var t, n;
                            return null === (n = null === (t = m()) || void 0 === t ? void 0 : t.emulatorHosts) || void 0 === n ? void 0 : n[e]
                        },
                        v = e => {
                            let t = y(e);
                            if (!t) return;
                            let n = t.lastIndexOf(":");
                            if (n <= 0 || n + 1 === t.length) throw Error(`Invalid host ${t} with no separate hostname and port!`);
                            let r = parseInt(t.substring(n + 1), 10);
                            return "[" === t[0] ? [t.substring(1, n - 1), r] : [t.substring(0, n), r]
                        },
                        w = () => {
                            var e;
                            return null === (e = m()) || void 0 === e ? void 0 : e.config
                        },
                        _ = e => {
                            var t;
                            return null === (t = m()) || void 0 === t ? void 0 : t[`_${e}`]
                        };
                    class E {
                        constructor() {
                            this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, t) => {
                                this.resolve = e, this.reject = t
                            })
                        }
                        wrapCallback(e) {
                            return (t, n) => {
                                t ? this.reject(t) : this.resolve(n), "function" == typeof e && (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, n))
                            }
                        }
                    }

                    function b(e) {
                        return e.endsWith(".cloudworkstations.dev")
                    }
                    async function I(e) {
                        return (await fetch(e, {
                            credentials: "include"
                        })).ok
                    }

                    function T(e, t) {
                        if (e.uid) throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
                        let n = t || "demo-project",
                            r = e.iat || 0,
                            i = e.sub || e.user_id;
                        if (!i) throw Error("mockUserToken must contain 'sub' or 'user_id' field!");
                        let s = Object.assign({
                            iss: `https://securetoken.google.com/${n}`,
                            aud: n,
                            iat: r,
                            exp: r + 3600,
                            auth_time: r,
                            sub: i,
                            user_id: i,
                            firebase: {
                                sign_in_provider: "custom",
                                identities: {}
                            }
                        }, e);
                        return [h(JSON.stringify({
                            alg: "none",
                            type: "JWT"
                        })), h(JSON.stringify(s)), ""].join(".")
                    }
                    let C = {},
                        S = !1;

                    function A(e, t) {
                        if ("undefined" == typeof window || "undefined" == typeof document || !b(window.location.host) || C[e] === t || C[e] || S) return;

                        function n(e) {
                            return `__firebase__banner__${e}`
                        }
                        C[e] = t;
                        let r = "__firebase__banner",
                            i = function() {
                                let e = {
                                    prod: [],
                                    emulator: []
                                };
                                for (let t of Object.keys(C)) C[t] ? e.emulator.push(t) : e.prod.push(t);
                                return e
                            }().prod.length > 0;

                        function s() {
                            let e, t;
                            let s = (e = document.getElementById(r), t = !1, e || ((e = document.createElement("div")).setAttribute("id", r), t = !0), {
                                    created: t,
                                    element: e
                                }),
                                o = n("text"),
                                a = document.getElementById(o) || document.createElement("span"),
                                l = n("learnmore"),
                                u = document.getElementById(l) || document.createElement("a"),
                                h = n("preprendIcon"),
                                c = document.getElementById(h) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            if (s.created) {
                                let e = s.element;
                                e.style.display = "flex", e.style.background = "#7faaf0", e.style.position = "fixed", e.style.bottom = "5px", e.style.left = "5px", e.style.padding = ".5em", e.style.borderRadius = "5px", e.style.alignItems = "center", u.setAttribute("id", l), u.innerText = "Learn more", u.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend", u.setAttribute("target", "__blank"), u.style.paddingLeft = "5px", u.style.textDecoration = "underline";
                                let t = function() {
                                    let e = document.createElement("span");
                                    return e.style.cursor = "pointer", e.style.marginLeft = "16px", e.style.fontSize = "24px", e.innerHTML = " &times;", e.onclick = () => {
                                        S = !0,
                                            function() {
                                                let e = document.getElementById(r);
                                                e && e.remove()
                                            }()
                                    }, e
                                }();
                                c.setAttribute("width", "24"), c.setAttribute("id", h), c.setAttribute("height", "24"), c.setAttribute("viewBox", "0 0 24 24"), c.setAttribute("fill", "none"), c.style.marginLeft = "-6px", e.append(c, a, u, t), document.body.appendChild(e)
                            }
                            i ? (a.innerText = "Preview backend disconnected.", c.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`) : (c.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`, a.innerText = "Preview backend running in this workspace."), a.setAttribute("id", o)
                        }
                        "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", s) : s()
                    }

                    function k() {
                        return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
                    }

                    function R() {
                        return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())
                    }

                    function N() {
                        var e;
                        let t = null === (e = m()) || void 0 === e ? void 0 : e.forceEnvironment;
                        if ("node" === t) return !0;
                        if ("browser" === t) return !1;
                        try {
                            return "[object process]" === Object.prototype.toString.call(n.g.process)
                        } catch (e) {
                            return !1
                        }
                    }

                    function O() {
                        return "undefined" != typeof navigator && "Cloudflare-Workers" === navigator.userAgent
                    }

                    function P() {
                        let e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
                        return "object" == typeof e && void 0 !== e.id
                    }

                    function D() {
                        return "object" == typeof navigator && "ReactNative" === navigator.product
                    }

                    function L() {
                        let e = k();
                        return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
                    }

                    function x() {
                        return !N() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
                    }

                    function M() {
                        return !N() && !!navigator.userAgent && (navigator.userAgent.includes("Safari") || navigator.userAgent.includes("WebKit")) && !navigator.userAgent.includes("Chrome")
                    }

                    function U() {
                        try {
                            return "object" == typeof indexedDB
                        } catch (e) {
                            return !1
                        }
                    }

                    function V() {
                        return new Promise((e, t) => {
                            try {
                                let n = !0,
                                    r = "validate-browser-context-for-indexeddb-analytics-module",
                                    i = self.indexedDB.open(r);
                                i.onsuccess = () => {
                                    i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
                                }, i.onupgradeneeded = () => {
                                    n = !1
                                }, i.onerror = () => {
                                    var e;
                                    t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
                                }
                            } catch (e) {
                                t(e)
                            }
                        })
                    }
                    class F extends Error {
                        constructor(e, t, n) {
                            super(t), this.code = e, this.customData = n, this.name = "FirebaseError", Object.setPrototypeOf(this, F.prototype), Error.captureStackTrace && Error.captureStackTrace(this, B.prototype.create)
                        }
                    }
                    class B {
                        constructor(e, t, n) {
                            this.service = e, this.serviceName = t, this.errors = n
                        }
                        create(e, ...t) {
                            let n = t[0] || {},
                                r = `${this.service}/${e}`,
                                i = this.errors[e],
                                s = i ? i.replace(j, (e, t) => {
                                    let r = n[t];
                                    return null != r ? String(r) : `<${t}?>`
                                }) : "Error",
                                o = `${this.serviceName}: ${s} (${r}).`;
                            return new F(r, o, n)
                        }
                    }
                    let j = /\{\$([^}]+)}/g;

                    function $(e) {
                        for (let t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                        return !0
                    }

                    function q(e) {
                        return null !== e && "object" == typeof e
                    }

                    function z(e) {
                        let t = [];
                        for (let [n, r] of Object.entries(e)) Array.isArray(r) ? r.forEach(e => {
                            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
                        }) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
                        return t.length ? "&" + t.join("&") : ""
                    }

                    function H(e) {
                        let t = {};
                        return e.replace(/^\?/, "").split("&").forEach(e => {
                            if (e) {
                                let [n, r] = e.split("=");
                                t[decodeURIComponent(n)] = decodeURIComponent(r)
                            }
                        }), t
                    }

                    function K(e) {
                        let t = e.indexOf("?");
                        if (!t) return "";
                        let n = e.indexOf("#", t);
                        return e.substring(t, n > 0 ? n : void 0)
                    }

                    function G(e, t) {
                        let n = new W(e, t);
                        return n.subscribe.bind(n)
                    }
                    class W {
                        constructor(e, t) {
                            this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
                                e(this)
                            }).catch(e => {
                                this.error(e)
                            })
                        }
                        next(e) {
                            this.forEachObserver(t => {
                                t.next(e)
                            })
                        }
                        error(e) {
                            this.forEachObserver(t => {
                                t.error(e)
                            }), this.close(e)
                        }
                        complete() {
                            this.forEachObserver(e => {
                                e.complete()
                            }), this.close()
                        }
                        subscribe(e, t, n) {
                            let r;
                            if (void 0 === e && void 0 === t && void 0 === n) throw Error("Missing Observer.");
                            void 0 === (r = ! function(e, t) {
                                if ("object" != typeof e || null === e) return !1;
                                for (let n of t)
                                    if (n in e && "function" == typeof e[n]) return !0;
                                return !1
                            }(e, ["next", "error", "complete"]) ? {
                                next: e,
                                error: t,
                                complete: n
                            } : e).next && (r.next = Q), void 0 === r.error && (r.error = Q), void 0 === r.complete && (r.complete = Q);
                            let i = this.unsubscribeOne.bind(this, this.observers.length);
                            return this.finalized && this.task.then(() => {
                                try {
                                    this.finalError ? r.error(this.finalError) : r.complete()
                                } catch (e) {}
                            }), this.observers.push(r), i
                        }
                        unsubscribeOne(e) {
                            void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                        }
                        forEachObserver(e) {
                            if (!this.finalized)
                                for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e)
                        }
                        sendOne(e, t) {
                            this.task.then(() => {
                                if (void 0 !== this.observers && void 0 !== this.observers[e]) try {
                                    t(this.observers[e])
                                } catch (e) {
                                    "undefined" != typeof console && console.error && console.error(e)
                                }
                            })
                        }
                        close(e) {
                            this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(() => {
                                this.observers = void 0, this.onNoObservers = void 0
                            }))
                        }
                    }

                    function Q() {}

                    function X(e) {
                        return e && e._delegate ? e._delegate : e
                    }
                },
                9742: function(e, t) {
                    "use strict";
                    t.byteLength = function(e) {
                        var t = l(e),
                            n = t[0],
                            r = t[1];
                        return (n + r) * 3 / 4 - r
                    }, t.toByteArray = function(e) {
                        var t, n, s = l(e),
                            o = s[0],
                            a = s[1],
                            u = new i((o + a) * 3 / 4 - a),
                            h = 0,
                            c = a > 0 ? o - 4 : o;
                        for (n = 0; n < c; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], u[h++] = t >> 16 & 255, u[h++] = t >> 8 & 255, u[h++] = 255 & t;
                        return 2 === a && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, u[h++] = 255 & t), 1 === a && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, u[h++] = t >> 8 & 255, u[h++] = 255 & t), u
                    }, t.fromByteArray = function(e) {
                        for (var t, r = e.length, i = r % 3, s = [], o = 0, a = r - i; o < a; o += 16383) s.push(function(e, t, r) {
                            for (var i, s = [], o = t; o < r; o += 3) s.push(n[(i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2])) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
                            return s.join("")
                        }(e, o, o + 16383 > a ? a : o + 16383));
                        return 1 === i ? s.push(n[(t = e[r - 1]) >> 2] + n[t << 4 & 63] + "==") : 2 === i && s.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="), s.join("")
                    };
                    for (var n = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = s.length; o < a; ++o) n[o] = s[o], r[s.charCodeAt(o)] = o;

                    function l(e) {
                        var t = e.length;
                        if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                        var n = e.indexOf("="); - 1 === n && (n = t);
                        var r = n === t ? 0 : 4 - n % 4;
                        return [n, r]
                    }
                    r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
                },
                8764: function(e, t, n) {
                    "use strict";
                    let r = n(9742),
                        i = n(645),
                        s = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                    function o(e) {
                        if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
                        let t = new Uint8Array(e);
                        return Object.setPrototypeOf(t, a.prototype), t
                    }

                    function a(e, t, n) {
                        if ("number" == typeof e) {
                            if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                            return h(e)
                        }
                        return l(e, t, n)
                    }

                    function l(e, t, n) {
                        if ("string" == typeof e) return function(e, t) {
                            if (("string" != typeof t || "" === t) && (t = "utf8"), !a.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
                            let n = 0 | p(e, t),
                                r = o(n),
                                i = r.write(e, t);
                            return i !== n && (r = r.slice(0, i)), r
                        }(e, t);
                        if (ArrayBuffer.isView(e)) return function(e) {
                            if (U(e, Uint8Array)) {
                                let t = new Uint8Array(e);
                                return d(t.buffer, t.byteOffset, t.byteLength)
                            }
                            return c(e)
                        }(e);
                        if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                        if (U(e, ArrayBuffer) || e && U(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (U(e, SharedArrayBuffer) || e && U(e.buffer, SharedArrayBuffer))) return d(e, t, n);
                        if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                        let r = e.valueOf && e.valueOf();
                        if (null != r && r !== e) return a.from(r, t, n);
                        let i = function(e) {
                            var t;
                            if (a.isBuffer(e)) {
                                let t = 0 | f(e.length),
                                    n = o(t);
                                return 0 === n.length || e.copy(n, 0, 0, t), n
                            }
                            return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? o(0) : c(e) : "Buffer" === e.type && Array.isArray(e.data) ? c(e.data) : void 0
                        }(e);
                        if (i) return i;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return a.from(e[Symbol.toPrimitive]("string"), t, n);
                        throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                    }

                    function u(e) {
                        if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                        if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
                    }

                    function h(e) {
                        return u(e), o(e < 0 ? 0 : 0 | f(e))
                    }

                    function c(e) {
                        let t = e.length < 0 ? 0 : 0 | f(e.length),
                            n = o(t);
                        for (let r = 0; r < t; r += 1) n[r] = 255 & e[r];
                        return n
                    }

                    function d(e, t, n) {
                        let r;
                        if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                        if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
                        return Object.setPrototypeOf(r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), a.prototype), r
                    }

                    function f(e) {
                        if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                        return 0 | e
                    }

                    function p(e, t) {
                        if (a.isBuffer(e)) return e.length;
                        if (ArrayBuffer.isView(e) || U(e, ArrayBuffer)) return e.byteLength;
                        if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                        let n = e.length,
                            r = arguments.length > 2 && !0 === arguments[2];
                        if (!r && 0 === n) return 0;
                        let i = !1;
                        for (;;) switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return n;
                            case "utf8":
                            case "utf-8":
                                return L(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * n;
                            case "hex":
                                return n >>> 1;
                            case "base64":
                                return x(e).length;
                            default:
                                if (i) return r ? -1 : L(e).length;
                                t = ("" + t).toLowerCase(), i = !0
                        }
                    }

                    function g(e, t, n) {
                        let i = !1;
                        if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0))) return "";
                        for (e || (e = "utf8");;) switch (e) {
                            case "hex":
                                return function(e, t, n) {
                                    let r = e.length;
                                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                                    let i = "";
                                    for (let r = t; r < n; ++r) i += V[e[r]];
                                    return i
                                }(this, t, n);
                            case "utf8":
                            case "utf-8":
                                return w(this, t, n);
                            case "ascii":
                                return function(e, t, n) {
                                    let r = "";
                                    n = Math.min(e.length, n);
                                    for (let i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                                    return r
                                }(this, t, n);
                            case "latin1":
                            case "binary":
                                return function(e, t, n) {
                                    let r = "";
                                    n = Math.min(e.length, n);
                                    for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                                    return r
                                }(this, t, n);
                            case "base64":
                                var s, o;
                                return s = t, o = n, 0 === s && o === this.length ? r.fromByteArray(this) : r.fromByteArray(this.slice(s, o));
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return function(e, t, n) {
                                    let r = e.slice(t, n),
                                        i = "";
                                    for (let e = 0; e < r.length - 1; e += 2) i += String.fromCharCode(r[e] + 256 * r[e + 1]);
                                    return i
                                }(this, t, n);
                            default:
                                if (i) throw TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(), i = !0
                        }
                    }

                    function m(e, t, n) {
                        let r = e[t];
                        e[t] = e[n], e[n] = r
                    }

                    function y(e, t, n, r, i) {
                        var s;
                        if (0 === e.length) return -1;
                        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), (s = n = +n) != s && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                            if (i) return -1;
                            n = e.length - 1
                        } else if (n < 0) {
                            if (!i) return -1;
                            n = 0
                        }
                        if ("string" == typeof t && (t = a.from(t, r)), a.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, n, r, i);
                        if ("number" == typeof t) return (t &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, r, i);
                        throw TypeError("val must be string, number or Buffer")
                    }

                    function v(e, t, n, r, i) {
                        let s, o = 1,
                            a = e.length,
                            l = t.length;
                        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                            if (e.length < 2 || t.length < 2) return -1;
                            o = 2, a /= 2, l /= 2, n /= 2
                        }

                        function u(e, t) {
                            return 1 === o ? e[t] : e.readUInt16BE(t * o)
                        }
                        if (i) {
                            let r = -1;
                            for (s = n; s < a; s++)
                                if (u(e, s) === u(t, -1 === r ? 0 : s - r)) {
                                    if (-1 === r && (r = s), s - r + 1 === l) return r * o
                                } else -1 !== r && (s -= s - r), r = -1
                        } else
                            for (n + l > a && (n = a - l), s = n; s >= 0; s--) {
                                let n = !0;
                                for (let r = 0; r < l; r++)
                                    if (u(e, s + r) !== u(t, r)) {
                                        n = !1;
                                        break
                                    }
                                if (n) return s
                            }
                        return -1
                    }

                    function w(e, t, n) {
                        n = Math.min(e.length, n);
                        let r = [],
                            i = t;
                        for (; i < n;) {
                            let t = e[i],
                                s = null,
                                o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                            if (i + o <= n) {
                                let n, r, a, l;
                                switch (o) {
                                    case 1:
                                        t < 128 && (s = t);
                                        break;
                                    case 2:
                                        (192 & (n = e[i + 1])) == 128 && (l = (31 & t) << 6 | 63 & n) > 127 && (s = l);
                                        break;
                                    case 3:
                                        n = e[i + 1], r = e[i + 2], (192 & n) == 128 && (192 & r) == 128 && (l = (15 & t) << 12 | (63 & n) << 6 | 63 & r) > 2047 && (l < 55296 || l > 57343) && (s = l);
                                        break;
                                    case 4:
                                        n = e[i + 1], r = e[i + 2], a = e[i + 3], (192 & n) == 128 && (192 & r) == 128 && (192 & a) == 128 && (l = (15 & t) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & a) > 65535 && l < 1114112 && (s = l)
                                }
                            }
                            null === s ? (s = 65533, o = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), i += o
                        }
                        return function(e) {
                            let t = e.length;
                            if (t <= 4096) return String.fromCharCode.apply(String, e);
                            let n = "",
                                r = 0;
                            for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
                            return n
                        }(r)
                    }

                    function _(e, t, n) {
                        if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                        if (e + t > n) throw RangeError("Trying to access beyond buffer length")
                    }

                    function E(e, t, n, r, i, s) {
                        if (!a.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                        if (t > i || t < s) throw RangeError('"value" argument is out of bounds');
                        if (n + r > e.length) throw RangeError("Index out of range")
                    }

                    function b(e, t, n, r, i) {
                        N(t, r, i, e, n, 7);
                        let s = Number(t & BigInt(4294967295));
                        e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s;
                        let o = Number(t >> BigInt(32) & BigInt(4294967295));
                        return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n
                    }

                    function I(e, t, n, r, i) {
                        N(t, r, i, e, n, 7);
                        let s = Number(t & BigInt(4294967295));
                        e[n + 7] = s, s >>= 8, e[n + 6] = s, s >>= 8, e[n + 5] = s, s >>= 8, e[n + 4] = s;
                        let o = Number(t >> BigInt(32) & BigInt(4294967295));
                        return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8
                    }

                    function T(e, t, n, r, i, s) {
                        if (n + r > e.length || n < 0) throw RangeError("Index out of range")
                    }

                    function C(e, t, n, r, s) {
                        return t = +t, n >>>= 0, s || T(e, t, n, 4, 34028234663852886e22, -34028234663852886e22), i.write(e, t, n, r, 23, 4), n + 4
                    }

                    function S(e, t, n, r, s) {
                        return t = +t, n >>>= 0, s || T(e, t, n, 8, 17976931348623157e292, -17976931348623157e292), i.write(e, t, n, r, 52, 8), n + 8
                    }
                    t.lW = a, t.h2 = 50, a.TYPED_ARRAY_SUPPORT = function() {
                        try {
                            let e = new Uint8Array(1),
                                t = {
                                    foo: function() {
                                        return 42
                                    }
                                };
                            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                        } catch (e) {
                            return !1
                        }
                    }(), a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
                        enumerable: !0,
                        get: function() {
                            if (a.isBuffer(this)) return this.buffer
                        }
                    }), Object.defineProperty(a.prototype, "offset", {
                        enumerable: !0,
                        get: function() {
                            if (a.isBuffer(this)) return this.byteOffset
                        }
                    }), a.poolSize = 8192, a.from = function(e, t, n) {
                        return l(e, t, n)
                    }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(e, t, n) {
                        return (u(e), e <= 0) ? o(e) : void 0 !== t ? "string" == typeof n ? o(e).fill(t, n) : o(e).fill(t) : o(e)
                    }, a.allocUnsafe = function(e) {
                        return h(e)
                    }, a.allocUnsafeSlow = function(e) {
                        return h(e)
                    }, a.isBuffer = function(e) {
                        return null != e && !0 === e._isBuffer && e !== a.prototype
                    }, a.compare = function(e, t) {
                        if (U(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), U(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(e) || !a.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (e === t) return 0;
                        let n = e.length,
                            r = t.length;
                        for (let i = 0, s = Math.min(n, r); i < s; ++i)
                            if (e[i] !== t[i]) {
                                n = e[i], r = t[i];
                                break
                            }
                        return n < r ? -1 : r < n ? 1 : 0
                    }, a.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, a.concat = function(e, t) {
                        let n;
                        if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length) return a.alloc(0);
                        if (void 0 === t)
                            for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
                        let r = a.allocUnsafe(t),
                            i = 0;
                        for (n = 0; n < e.length; ++n) {
                            let t = e[n];
                            if (U(t, Uint8Array)) i + t.length > r.length ? (a.isBuffer(t) || (t = a.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
                            else if (a.isBuffer(t)) t.copy(r, i);
                            else throw TypeError('"list" argument must be an Array of Buffers');
                            i += t.length
                        }
                        return r
                    }, a.byteLength = p, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                        let e = this.length;
                        if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                        for (let t = 0; t < e; t += 2) m(this, t, t + 1);
                        return this
                    }, a.prototype.swap32 = function() {
                        let e = this.length;
                        if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                        for (let t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
                        return this
                    }, a.prototype.swap64 = function() {
                        let e = this.length;
                        if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                        for (let t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
                        return this
                    }, a.prototype.toString = function() {
                        let e = this.length;
                        return 0 === e ? "" : 0 == arguments.length ? w(this, 0, e) : g.apply(this, arguments)
                    }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(e) {
                        if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                        return this === e || 0 === a.compare(this, e)
                    }, a.prototype.inspect = function() {
                        let e = "",
                            n = t.h2;
                        return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
                    }, s && (a.prototype[s] = a.prototype.inspect), a.prototype.compare = function(e, t, n, r, i) {
                        if (U(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                        if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw RangeError("out of range index");
                        if (r >= i && t >= n) return 0;
                        if (r >= i) return -1;
                        if (t >= n) return 1;
                        if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
                        let s = i - r,
                            o = n - t,
                            l = Math.min(s, o),
                            u = this.slice(r, i),
                            h = e.slice(t, n);
                        for (let e = 0; e < l; ++e)
                            if (u[e] !== h[e]) {
                                s = u[e], o = h[e];
                                break
                            }
                        return s < o ? -1 : o < s ? 1 : 0
                    }, a.prototype.includes = function(e, t, n) {
                        return -1 !== this.indexOf(e, t, n)
                    }, a.prototype.indexOf = function(e, t, n) {
                        return y(this, e, t, n, !0)
                    }, a.prototype.lastIndexOf = function(e, t, n) {
                        return y(this, e, t, n, !1)
                    }, a.prototype.write = function(e, t, n, r) {
                        var i, s, o, a, l, u, h, c;
                        if (void 0 === t) r = "utf8", n = this.length, t = 0;
                        else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                        else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
                        else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        let d = this.length - t;
                        if ((void 0 === n || n > d) && (n = d), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                        r || (r = "utf8");
                        let f = !1;
                        for (;;) switch (r) {
                            case "hex":
                                return function(e, t, n, r) {
                                    let i;
                                    n = Number(n) || 0;
                                    let s = e.length - n;
                                    r ? (r = Number(r)) > s && (r = s) : r = s;
                                    let o = t.length;
                                    for (r > o / 2 && (r = o / 2), i = 0; i < r; ++i) {
                                        let r = parseInt(t.substr(2 * i, 2), 16);
                                        if (r != r) break;
                                        e[n + i] = r
                                    }
                                    return i
                                }(this, e, t, n);
                            case "utf8":
                            case "utf-8":
                                return i = t, s = n, M(L(e, this.length - i), this, i, s);
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return o = t, a = n, M(function(e) {
                                    let t = [];
                                    for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                                    return t
                                }(e), this, o, a);
                            case "base64":
                                return l = t, u = n, M(x(e), this, l, u);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return h = t, c = n, M(function(e, t) {
                                    let n, r;
                                    let i = [];
                                    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) r = (n = e.charCodeAt(s)) >> 8, i.push(n % 256), i.push(r);
                                    return i
                                }(e, this.length - h), this, h, c);
                            default:
                                if (f) throw TypeError("Unknown encoding: " + r);
                                r = ("" + r).toLowerCase(), f = !0
                        }
                    }, a.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    }, a.prototype.slice = function(e, t) {
                        let n = this.length;
                        e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                        let r = this.subarray(e, t);
                        return Object.setPrototypeOf(r, a.prototype), r
                    }, a.prototype.readUintLE = a.prototype.readUIntLE = function(e, t, n) {
                        e >>>= 0, t >>>= 0, n || _(e, t, this.length);
                        let r = this[e],
                            i = 1,
                            s = 0;
                        for (; ++s < t && (i *= 256);) r += this[e + s] * i;
                        return r
                    }, a.prototype.readUintBE = a.prototype.readUIntBE = function(e, t, n) {
                        e >>>= 0, t >>>= 0, n || _(e, t, this.length);
                        let r = this[e + --t],
                            i = 1;
                        for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
                        return r
                    }, a.prototype.readUint8 = a.prototype.readUInt8 = function(e, t) {
                        return e >>>= 0, t || _(e, 1, this.length), this[e]
                    }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(e, t) {
                        return e >>>= 0, t || _(e, 2, this.length), this[e] | this[e + 1] << 8
                    }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(e, t) {
                        return e >>>= 0, t || _(e, 2, this.length), this[e] << 8 | this[e + 1]
                    }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(e, t) {
                        return e >>>= 0, t || _(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(e, t) {
                        return e >>>= 0, t || _(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    }, a.prototype.readBigUInt64LE = F(function(e) {
                        O(e >>>= 0, "offset");
                        let t = this[e],
                            n = this[e + 7];
                        (void 0 === t || void 0 === n) && P(e, this.length - 8);
                        let r = t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e],
                            i = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * n;
                        return BigInt(r) + (BigInt(i) << BigInt(32))
                    }), a.prototype.readBigUInt64BE = F(function(e) {
                        O(e >>>= 0, "offset");
                        let t = this[e],
                            n = this[e + 7];
                        (void 0 === t || void 0 === n) && P(e, this.length - 8);
                        let r = 16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
                            i = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + n;
                        return (BigInt(r) << BigInt(32)) + BigInt(i)
                    }), a.prototype.readIntLE = function(e, t, n) {
                        e >>>= 0, t >>>= 0, n || _(e, t, this.length);
                        let r = this[e],
                            i = 1,
                            s = 0;
                        for (; ++s < t && (i *= 256);) r += this[e + s] * i;
                        return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
                    }, a.prototype.readIntBE = function(e, t, n) {
                        e >>>= 0, t >>>= 0, n || _(e, t, this.length);
                        let r = t,
                            i = 1,
                            s = this[e + --r];
                        for (; r > 0 && (i *= 256);) s += this[e + --r] * i;
                        return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s
                    }, a.prototype.readInt8 = function(e, t) {
                        return (e >>>= 0, t || _(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
                    }, a.prototype.readInt16LE = function(e, t) {
                        e >>>= 0, t || _(e, 2, this.length);
                        let n = this[e] | this[e + 1] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }, a.prototype.readInt16BE = function(e, t) {
                        e >>>= 0, t || _(e, 2, this.length);
                        let n = this[e + 1] | this[e] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }, a.prototype.readInt32LE = function(e, t) {
                        return e >>>= 0, t || _(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    }, a.prototype.readInt32BE = function(e, t) {
                        return e >>>= 0, t || _(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    }, a.prototype.readBigInt64LE = F(function(e) {
                        O(e >>>= 0, "offset");
                        let t = this[e],
                            n = this[e + 7];
                        return (void 0 === t || void 0 === n) && P(e, this.length - 8), (BigInt(this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24)) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e])
                    }), a.prototype.readBigInt64BE = F(function(e) {
                        O(e >>>= 0, "offset");
                        let t = this[e],
                            n = this[e + 7];
                        return (void 0 === t || void 0 === n) && P(e, this.length - 8), (BigInt((t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) << BigInt(32)) + BigInt(16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + n)
                    }), a.prototype.readFloatLE = function(e, t) {
                        return e >>>= 0, t || _(e, 4, this.length), i.read(this, e, !0, 23, 4)
                    }, a.prototype.readFloatBE = function(e, t) {
                        return e >>>= 0, t || _(e, 4, this.length), i.read(this, e, !1, 23, 4)
                    }, a.prototype.readDoubleLE = function(e, t) {
                        return e >>>= 0, t || _(e, 8, this.length), i.read(this, e, !0, 52, 8)
                    }, a.prototype.readDoubleBE = function(e, t) {
                        return e >>>= 0, t || _(e, 8, this.length), i.read(this, e, !1, 52, 8)
                    }, a.prototype.writeUintLE = a.prototype.writeUIntLE = function(e, t, n, r) {
                        if (e = +e, t >>>= 0, n >>>= 0, !r) {
                            let r = Math.pow(2, 8 * n) - 1;
                            E(this, e, t, n, r, 0)
                        }
                        let i = 1,
                            s = 0;
                        for (this[t] = 255 & e; ++s < n && (i *= 256);) this[t + s] = e / i & 255;
                        return t + n
                    }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(e, t, n, r) {
                        if (e = +e, t >>>= 0, n >>>= 0, !r) {
                            let r = Math.pow(2, 8 * n) - 1;
                            E(this, e, t, n, r, 0)
                        }
                        let i = n - 1,
                            s = 1;
                        for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) this[t + i] = e / s & 255;
                        return t + n
                    }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(e, t, n) {
                        return e = +e, t >>>= 0, n || E(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                    }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || E(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                    }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || E(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                    }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || E(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                    }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || E(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                    }, a.prototype.writeBigUInt64LE = F(function(e, t = 0) {
                        return b(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                    }), a.prototype.writeBigUInt64BE = F(function(e, t = 0) {
                        return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                    }), a.prototype.writeIntLE = function(e, t, n, r) {
                        if (e = +e, t >>>= 0, !r) {
                            let r = Math.pow(2, 8 * n - 1);
                            E(this, e, t, n, r - 1, -r)
                        }
                        let i = 0,
                            s = 1,
                            o = 0;
                        for (this[t] = 255 & e; ++i < n && (s *= 256);) e < 0 && 0 === o && 0 !== this[t + i - 1] && (o = 1), this[t + i] = (e / s >> 0) - o & 255;
                        return t + n
                    }, a.prototype.writeIntBE = function(e, t, n, r) {
                        if (e = +e, t >>>= 0, !r) {
                            let r = Math.pow(2, 8 * n - 1);
                            E(this, e, t, n, r - 1, -r)
                        }
                        let i = n - 1,
                            s = 1,
                            o = 0;
                        for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === o && 0 !== this[t + i + 1] && (o = 1), this[t + i] = (e / s >> 0) - o & 255;
                        return t + n
                    }, a.prototype.writeInt8 = function(e, t, n) {
                        return e = +e, t >>>= 0, n || E(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                    }, a.prototype.writeInt16LE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || E(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                    }, a.prototype.writeInt16BE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || E(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                    }, a.prototype.writeInt32LE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || E(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                    }, a.prototype.writeInt32BE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || E(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                    }, a.prototype.writeBigInt64LE = F(function(e, t = 0) {
                        return b(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                    }), a.prototype.writeBigInt64BE = F(function(e, t = 0) {
                        return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                    }), a.prototype.writeFloatLE = function(e, t, n) {
                        return C(this, e, t, !0, n)
                    }, a.prototype.writeFloatBE = function(e, t, n) {
                        return C(this, e, t, !1, n)
                    }, a.prototype.writeDoubleLE = function(e, t, n) {
                        return S(this, e, t, !0, n)
                    }, a.prototype.writeDoubleBE = function(e, t, n) {
                        return S(this, e, t, !1, n)
                    }, a.prototype.copy = function(e, t, n, r) {
                        if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer");
                        if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n || 0 === e.length || 0 === this.length) return 0;
                        if (t < 0) throw RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length) throw RangeError("Index out of range");
                        if (r < 0) throw RangeError("sourceEnd out of bounds");
                        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                        let i = r - n;
                        return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i
                    }, a.prototype.fill = function(e, t, n, r) {
                        let i;
                        if ("string" == typeof e) {
                            if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw TypeError("encoding must be a string");
                            if ("string" == typeof r && !a.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
                            if (1 === e.length) {
                                let t = e.charCodeAt(0);
                                ("utf8" === r && t < 128 || "latin1" === r) && (e = t)
                            }
                        } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                        if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
                        if (n <= t) return this;
                        if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                            for (i = t; i < n; ++i) this[i] = e;
                        else {
                            let s = a.isBuffer(e) ? e : a.from(e, r),
                                o = s.length;
                            if (0 === o) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                            for (i = 0; i < n - t; ++i) this[i + t] = s[i % o]
                        }
                        return this
                    };
                    let A = {};

                    function k(e, t, n) {
                        A[e] = class extends n {
                            constructor() {
                                super(), Object.defineProperty(this, "message", {
                                    value: t.apply(this, arguments),
                                    writable: !0,
                                    configurable: !0
                                }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                            }
                            get code() {
                                return e
                            }
                            set code(e) {
                                Object.defineProperty(this, "code", {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: e,
                                    writable: !0
                                })
                            }
                            toString() {
                                return `${this.name} [${e}]: ${this.message}`
                            }
                        }
                    }

                    function R(e) {
                        let t = "",
                            n = e.length,
                            r = "-" === e[0] ? 1 : 0;
                        for (; n >= r + 4; n -= 3) t = `_${e.slice(n-3,n)}${t}`;
                        return `${e.slice(0,n)}${t}`
                    }

                    function N(e, t, n, r, i, s) {
                        if (e > n || e < t) {
                            let r;
                            let i = "bigint" == typeof t ? "n" : "";
                            throw r = s > 3 ? 0 === t || t === BigInt(0) ? `>= 0${i} and < 2${i} ** ${(s+1)*8}${i}` : `>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}` : `>= ${t}${i} and <= ${n}${i}`, new A.ERR_OUT_OF_RANGE("value", r, e)
                        }
                        O(i, "offset"), (void 0 === r[i] || void 0 === r[i + s]) && P(i, r.length - (s + 1))
                    }

                    function O(e, t) {
                        if ("number" != typeof e) throw new A.ERR_INVALID_ARG_TYPE(t, "number", e)
                    }

                    function P(e, t, n) {
                        if (Math.floor(e) !== e) throw O(e, n), new A.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
                        if (t < 0) throw new A.ERR_BUFFER_OUT_OF_BOUNDS;
                        throw new A.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${t}`, e)
                    }
                    k("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
                        return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
                    }, RangeError), k("ERR_INVALID_ARG_TYPE", function(e, t) {
                        return `The "${e}" argument must be of type number. Received type ${typeof t}`
                    }, TypeError), k("ERR_OUT_OF_RANGE", function(e, t, n) {
                        let r = `The value of "${e}" is out of range.`,
                            i = n;
                        return Number.isInteger(n) && Math.abs(n) > 4294967296 ? i = R(String(n)) : "bigint" == typeof n && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = R(i)), i += "n"), r += ` It must be ${t}. Received ${i}`
                    }, RangeError);
                    let D = /[^+/0-9A-Za-z-_]/g;

                    function L(e, t) {
                        let n;
                        t = t || 1 / 0;
                        let r = e.length,
                            i = null,
                            s = [];
                        for (let o = 0; o < r; ++o) {
                            if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
                                if (!i) {
                                    if (n > 56319 || o + 1 === r) {
                                        (t -= 3) > -1 && s.push(239, 191, 189);
                                        continue
                                    }
                                    i = n;
                                    continue
                                }
                                if (n < 56320) {
                                    (t -= 3) > -1 && s.push(239, 191, 189), i = n;
                                    continue
                                }
                                n = (i - 55296 << 10 | n - 56320) + 65536
                            } else i && (t -= 3) > -1 && s.push(239, 191, 189);
                            if (i = null, n < 128) {
                                if ((t -= 1) < 0) break;
                                s.push(n)
                            } else if (n < 2048) {
                                if ((t -= 2) < 0) break;
                                s.push(n >> 6 | 192, 63 & n | 128)
                            } else if (n < 65536) {
                                if ((t -= 3) < 0) break;
                                s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                            } else if (n < 1114112) {
                                if ((t -= 4) < 0) break;
                                s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                            } else throw Error("Invalid code point")
                        }
                        return s
                    }

                    function x(e) {
                        return r.toByteArray(function(e) {
                            if ((e = (e = e.split("=")[0]).trim().replace(D, "")).length < 2) return "";
                            for (; e.length % 4 != 0;) e += "=";
                            return e
                        }(e))
                    }

                    function M(e, t, n, r) {
                        let i;
                        for (i = 0; i < r && !(i + n >= t.length) && !(i >= e.length); ++i) t[i + n] = e[i];
                        return i
                    }

                    function U(e, t) {
                        return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                    }
                    let V = function() {
                        let e = "0123456789abcdef",
                            t = Array(256);
                        for (let n = 0; n < 16; ++n) {
                            let r = 16 * n;
                            for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i]
                        }
                        return t
                    }();

                    function F(e) {
                        return "undefined" == typeof BigInt ? B : e
                    }

                    function B() {
                        throw Error("BigInt not supported")
                    }
                },
                645: function(e, t) {
                    t.read = function(e, t, n, r, i) {
                        var s, o, a = 8 * i - r - 1,
                            l = (1 << a) - 1,
                            u = l >> 1,
                            h = -7,
                            c = n ? i - 1 : 0,
                            d = n ? -1 : 1,
                            f = e[t + c];
                        for (c += d, s = f & (1 << -h) - 1, f >>= -h, h += a; h > 0; s = 256 * s + e[t + c], c += d, h -= 8);
                        for (o = s & (1 << -h) - 1, s >>= -h, h += r; h > 0; o = 256 * o + e[t + c], c += d, h -= 8);
                        if (0 === s) s = 1 - u;
                        else {
                            if (s === l) return o ? NaN : 1 / 0 * (f ? -1 : 1);
                            o += Math.pow(2, r), s -= u
                        }
                        return (f ? -1 : 1) * o * Math.pow(2, s - r)
                    }, t.write = function(e, t, n, r, i, s) {
                        var o, a, l, u = 8 * s - i - 1,
                            h = (1 << u) - 1,
                            c = h >> 1,
                            d = 23 === i ? 5960464477539062e-23 : 0,
                            f = r ? 0 : s - 1,
                            p = r ? 1 : -1,
                            g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                        for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = h) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), o + c >= 1 ? t += d / l : t += d * Math.pow(2, 1 - c), t * l >= 2 && (o++, l /= 2), o + c >= h ? (a = 0, o = h) : o + c >= 1 ? (a = (t * l - 1) * Math.pow(2, i), o += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + f] = 255 & a, f += p, a /= 256, i -= 8);
                        for (o = o << i | a, u += i; u > 0; e[n + f] = 255 & o, f += p, o /= 256, u -= 8);
                        e[n + f - p] |= 128 * g
                    }
                },
                1143: function(e) {
                    "use strict";
                    e.exports = function(e, t, n, r, i, s, o, a) {
                        if (!e) {
                            var l;
                            if (void 0 === t) l = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                            else {
                                var u = [n, r, i, s, o, a],
                                    h = 0;
                                (l = Error(t.replace(/%s/g, function() {
                                    return u[h++]
                                }))).name = "Invariant Violation"
                            }
                            throw l.framesToPop = 1, l
                        }
                    }
                },
                1118: function(e, t, n) {
                    (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                        return n(7282)
                    }])
                },
                7282: function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, {
                        default: function() {
                            return J
                        }
                    });
                    var r, i = n(5893),
                        s = n(8259),
                        o = n(7294),
                        a = (n(9590), n(1143), n(6774)),
                        l = ((r = l || {}).BASE = "base", r.BODY = "body", r.HEAD = "head", r.HTML = "html", r.LINK = "link", r.META = "meta", r.NOSCRIPT = "noscript", r.SCRIPT = "script", r.STYLE = "style", r.TITLE = "title", r.FRAGMENT = "Symbol(react.fragment)", r),
                        u = {
                            rel: ["amphtml", "canonical", "alternate"]
                        },
                        h = {
                            type: ["application/ld+json"]
                        },
                        c = {
                            charset: "",
                            name: ["generator", "robots", "description"],
                            property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
                        },
                        d = (Object.values(l), {
                            accesskey: "accessKey",
                            charset: "charSet",
                            class: "className",
                            contenteditable: "contentEditable",
                            contextmenu: "contextMenu",
                            "http-equiv": "httpEquiv",
                            itemprop: "itemProp",
                            tabindex: "tabIndex"
                        }),
                        f = (Object.entries(d).reduce((e, [t, n]) => (e[n] = t, e), {}), "data-rh"),
                        p = (e, t) => {
                            for (let n = e.length - 1; n >= 0; n -= 1) {
                                let r = e[n];
                                if (Object.prototype.hasOwnProperty.call(r, t)) return r[t]
                            }
                            return null
                        },
                        g = e => {
                            let t = p(e, "title"),
                                n = p(e, "titleTemplate");
                            if (Array.isArray(t) && (t = t.join("")), n && t) return n.replace(/%s/g, () => t);
                            let r = p(e, "defaultTitle");
                            return t || r || void 0
                        },
                        m = e => p(e, "onChangeClientState") || (() => {}),
                        y = (e, t) => t.filter(t => void 0 !== t[e]).map(t => t[e]).reduce((e, t) => ({ ...e,
                            ...t
                        }), {}),
                        v = (e, t) => t.filter(e => void 0 !== e.base).map(e => e.base).reverse().reduce((t, n) => {
                            if (!t.length) {
                                let r = Object.keys(n);
                                for (let i = 0; i < r.length; i += 1) {
                                    let s = r[i].toLowerCase();
                                    if (-1 !== e.indexOf(s) && n[s]) return t.concat(n)
                                }
                            }
                            return t
                        }, []),
                        w = e => console && "function" == typeof console.warn && console.warn(e),
                        _ = (e, t, n) => {
                            let r = {};
                            return n.filter(t => !!Array.isArray(t[e]) || (void 0 !== t[e] && w(`Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`), !1)).map(t => t[e]).reverse().reduce((e, n) => {
                                let i = {};
                                n.filter(e => {
                                    let n;
                                    let s = Object.keys(e);
                                    for (let r = 0; r < s.length; r += 1) {
                                        let i = s[r],
                                            o = i.toLowerCase(); - 1 === t.indexOf(o) || "rel" === n && "canonical" === e[n].toLowerCase() || "rel" === o && "stylesheet" === e[o].toLowerCase() || (n = o), -1 !== t.indexOf(i) && ("innerHTML" === i || "cssText" === i || "itemprop" === i) && (n = i)
                                    }
                                    if (!n || !e[n]) return !1;
                                    let o = e[n].toLowerCase();
                                    return r[n] || (r[n] = {}), i[n] || (i[n] = {}), !r[n][o] && (i[n][o] = !0, !0)
                                }).reverse().forEach(t => e.push(t));
                                let s = Object.keys(i);
                                for (let e = 0; e < s.length; e += 1) {
                                    let t = s[e],
                                        n = { ...r[t],
                                            ...i[t]
                                        };
                                    r[t] = n
                                }
                                return e
                            }, []).reverse()
                        },
                        E = (e, t) => {
                            if (Array.isArray(e) && e.length) {
                                for (let n = 0; n < e.length; n += 1)
                                    if (e[n][t]) return !0
                            }
                            return !1
                        },
                        b = e => Array.isArray(e) ? e.join("") : e,
                        I = (e, t) => {
                            let n = Object.keys(e);
                            for (let r = 0; r < n.length; r += 1)
                                if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
                            return !1
                        },
                        T = (e, t) => Array.isArray(e) ? e.reduce((e, n) => (I(n, t) ? e.priority.push(n) : e.default.push(n), e), {
                            priority: [],
                            default: []
                        }) : {
                            default: e,
                            priority: []
                        },
                        C = ["noscript", "script", "style"],
                        S = (e, t = !0) => !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"),
                        A = e => Object.keys(e).reduce((t, n) => {
                            let r = void 0 !== e[n] ? `${n}="${e[n]}"` : `${n}`;
                            return t ? `${t} ${r}` : r
                        }, ""),
                        k = (e, t, n, r) => {
                            let i = A(n),
                                s = b(t);
                            return i ? `<${e} ${f}="true" ${i}>${S(s,r)}</${e}>` : `<${e} ${f}="true">${S(s,r)}</${e}>`
                        },
                        R = (e, t, n = !0) => t.reduce((t, r) => {
                            let i = Object.keys(r).filter(e => !("innerHTML" === e || "cssText" === e)).reduce((e, t) => {
                                    let i = void 0 === r[t] ? t : `${t}="${S(r[t],n)}"`;
                                    return e ? `${e} ${i}` : i
                                }, ""),
                                s = r.innerHTML || r.cssText || "",
                                o = -1 === C.indexOf(e);
                            return `${t}<${e} ${f}="true" ${i}${o?"/>":`>${s}</${e}>`}`
                        }, ""),
                        N = (e, t = {}) => Object.keys(e).reduce((t, n) => (t[d[n] || n] = e[n], t), t),
                        O = (e, t, n) => {
                            let r = N(n, {
                                key: t,
                                [f]: !0
                            });
                            return [o.createElement("title", r, t)]
                        },
                        P = (e, t) => t.map((t, n) => {
                            let r = {
                                key: n,
                                [f]: !0
                            };
                            return Object.keys(t).forEach(e => {
                                let n = d[e] || e;
                                if ("innerHTML" === n || "cssText" === n) {
                                    let e = t.innerHTML || t.cssText;
                                    r.dangerouslySetInnerHTML = {
                                        __html: e
                                    }
                                } else r[n] = t[e]
                            }), o.createElement(e, r)
                        }),
                        D = (e, t, n = !0) => {
                            switch (e) {
                                case "title":
                                    return {
                                        toComponent: () => O(e, t.title, t.titleAttributes),
                                        toString: () => k(e, t.title, t.titleAttributes, n)
                                    };
                                case "bodyAttributes":
                                case "htmlAttributes":
                                    return {
                                        toComponent: () => N(t),
                                        toString: () => A(t)
                                    };
                                default:
                                    return {
                                        toComponent: () => P(e, t),
                                        toString: () => R(e, t, n)
                                    }
                            }
                        },
                        L = ({
                            metaTags: e,
                            linkTags: t,
                            scriptTags: n,
                            encode: r
                        }) => {
                            let i = T(e, c),
                                s = T(t, u),
                                o = T(n, h);
                            return {
                                priorityMethods: {
                                    toComponent: () => [...P("meta", i.priority), ...P("link", s.priority), ...P("script", o.priority)],
                                    toString: () => `${D("meta",i.priority,r)} ${D("link",s.priority,r)} ${D("script",o.priority,r)}`
                                },
                                metaTags: i.default,
                                linkTags: s.default,
                                scriptTags: o.default
                            }
                        },
                        x = e => {
                            let {
                                baseTag: t,
                                bodyAttributes: n,
                                encode: r = !0,
                                htmlAttributes: i,
                                noscriptTags: s,
                                styleTags: o,
                                title: a = "",
                                titleAttributes: l,
                                prioritizeSeoTags: u
                            } = e, {
                                linkTags: h,
                                metaTags: c,
                                scriptTags: d
                            } = e, f = {
                                toComponent: () => {},
                                toString: () => ""
                            };
                            return u && ({
                                priorityMethods: f,
                                linkTags: h,
                                metaTags: c,
                                scriptTags: d
                            } = L(e)), {
                                priority: f,
                                base: D("base", t, r),
                                bodyAttributes: D("bodyAttributes", n, r),
                                htmlAttributes: D("htmlAttributes", i, r),
                                link: D("link", h, r),
                                meta: D("meta", c, r),
                                noscript: D("noscript", s, r),
                                script: D("script", d, r),
                                style: D("style", o, r),
                                title: D("title", {
                                    title: a,
                                    titleAttributes: l
                                }, r)
                            }
                        },
                        M = [],
                        U = !!("undefined" != typeof window && window.document && window.document.createElement),
                        V = class {
                            instances = [];
                            canUseDOM = U;
                            context;
                            value = {
                                setHelmet: e => {
                                    this.context.helmet = e
                                },
                                helmetInstances: {
                                    get: () => this.canUseDOM ? M : this.instances,
                                    add: e => {
                                        (this.canUseDOM ? M : this.instances).push(e)
                                    },
                                    remove: e => {
                                        let t = (this.canUseDOM ? M : this.instances).indexOf(e);
                                        (this.canUseDOM ? M : this.instances).splice(t, 1)
                                    }
                                }
                            };
                            constructor(e, t) {
                                this.context = e, this.canUseDOM = t || !1, t || (e.helmet = x({
                                    baseTag: [],
                                    bodyAttributes: {},
                                    encodeSpecialCharacters: !0,
                                    htmlAttributes: {},
                                    linkTags: [],
                                    metaTags: [],
                                    noscriptTags: [],
                                    scriptTags: [],
                                    styleTags: [],
                                    title: "",
                                    titleAttributes: {}
                                }))
                            }
                        },
                        F = o.createContext({}),
                        B = class e extends o.Component {
                            static canUseDOM = U;
                            helmetData;
                            constructor(t) {
                                super(t), this.helmetData = new V(this.props.context || {}, e.canUseDOM)
                            }
                            render() {
                                return o.createElement(F.Provider, {
                                    value: this.helmetData.value
                                }, this.props.children)
                            }
                        },
                        j = (e, t) => {
                            let n;
                            let r = document.head || document.querySelector("head"),
                                i = r.querySelectorAll(`${e}[${f}]`),
                                s = [].slice.call(i),
                                o = [];
                            return t && t.length && t.forEach(t => {
                                let r = document.createElement(e);
                                for (let e in t)
                                    if (Object.prototype.hasOwnProperty.call(t, e)) {
                                        if ("innerHTML" === e) r.innerHTML = t.innerHTML;
                                        else if ("cssText" === e) r.styleSheet ? r.styleSheet.cssText = t.cssText : r.appendChild(document.createTextNode(t.cssText));
                                        else {
                                            let n = void 0 === t[e] ? "" : t[e];
                                            r.setAttribute(e, n)
                                        }
                                    }
                                r.setAttribute(f, "true"), s.some((e, t) => (n = t, r.isEqualNode(e))) ? s.splice(n, 1) : o.push(r)
                            }), s.forEach(e => e.parentNode ?.removeChild(e)), o.forEach(e => r.appendChild(e)), {
                                oldTags: s,
                                newTags: o
                            }
                        },
                        $ = (e, t) => {
                            let n = document.getElementsByTagName(e)[0];
                            if (!n) return;
                            let r = n.getAttribute(f),
                                i = r ? r.split(",") : [],
                                s = [...i],
                                o = Object.keys(t);
                            for (let e of o) {
                                let r = t[e] || "";
                                n.getAttribute(e) !== r && n.setAttribute(e, r), -1 === i.indexOf(e) && i.push(e);
                                let o = s.indexOf(e); - 1 !== o && s.splice(o, 1)
                            }
                            for (let e = s.length - 1; e >= 0; e -= 1) n.removeAttribute(s[e]);
                            i.length === s.length ? n.removeAttribute(f) : n.getAttribute(f) !== o.join(",") && n.setAttribute(f, o.join(","))
                        },
                        q = (e, t) => {
                            void 0 !== e && document.title !== e && (document.title = b(e)), $("title", t)
                        },
                        z = (e, t) => {
                            let {
                                baseTag: n,
                                bodyAttributes: r,
                                htmlAttributes: i,
                                linkTags: s,
                                metaTags: o,
                                noscriptTags: a,
                                onChangeClientState: l,
                                scriptTags: u,
                                styleTags: h,
                                title: c,
                                titleAttributes: d
                            } = e;
                            $("body", r), $("html", i), q(c, d);
                            let f = {
                                    baseTag: j("base", n),
                                    linkTags: j("link", s),
                                    metaTags: j("meta", o),
                                    noscriptTags: j("noscript", a),
                                    scriptTags: j("script", u),
                                    styleTags: j("style", h)
                                },
                                p = {},
                                g = {};
                            Object.keys(f).forEach(e => {
                                let {
                                    newTags: t,
                                    oldTags: n
                                } = f[e];
                                t.length && (p[e] = t), n.length && (g[e] = f[e].oldTags)
                            }), t && t(), l(e, p, g)
                        },
                        H = null;
                    o.Component, o.Component;
                    var K = n(1519),
                        G = n(6147),
                        W = n(9171);
                    let Q = e => {
                        let [t, n] = (0, o.useState)(null);
                        return (0, o.useEffect)(() => {
                            if (!e || !W.db) {
                                n(null);
                                return
                            }
                            let t = (0, G.JU)(W.db, "customers", e),
                                r = (0, G.cf)(t, e => {
                                    n(e.data() ?.paddleCustomerId || null)
                                });
                            return () => r()
                        }, [e]), t
                    };
                    var X = n(6036);

                    function Y() {
                        let {
                            currentUser: e
                        } = (0, s.a)(), t = Q(e ?.uid);
                        return (0, o.useEffect)(() => {
                            e && t ? (0, X.fG)(t).catch(() => {}) : e || (0, X.wo)()
                        }, [e, t]), null
                    }

                    function J(e) {
                        let {
                            Component: t,
                            pageProps: n
                        } = e;
                        return (0, i.jsx)(B, {
                            children: (0, i.jsxs)(s.H, {
                                children: [(0, i.jsx)(t, { ...n
                                }), (0, i.jsx)(Y, {}), (0, i.jsx)(K.c, {})]
                            })
                        })
                    }
                    n(2434), n(6526), n(2154), n(7544), n(4841), n(6204), n(6730), n(1368), n(3076), n(3242), n(1325), n(1743), n(9420), n(7037), n(9584), n(4912), n(6242), n(6971), n(7293), n(7993)
                },
                5837: function(e, t, n) {
                    "use strict";
                    n.d(t, {
                        X_: function() {
                            return s
                        },
                        ZG: function() {
                            return o
                        },
                        iG: function() {
                            return i
                        },
                        zd: function() {
                            return r
                        }
                    });
                    let r = {
                            isTestMode: !1,
                            clientToken: "live_3708d593c06ad5aa2a519c1e9ea",
                            customerPortalUrl: n(4155).env.REACT_APP_PADDLE_CUSTOMER_PORTAL_URL || "https://customer-portal.paddle.com/cpl_01kd3dce26p5y0xtac9tdcv8ka"
                        },
                        i = "pri_01kz1jjz567j42j4wsb10fzm9e",
                        s = "pri_01kz9fvnwgtkkbax4z7rekskje",
                        o = "pri_01kf1g413f2jcggf8wje5g4kq9"
                },
                8259: function(e, t, n) {
                    "use strict";
                    n.d(t, {
                        H: function() {
                            return d
                        },
                        a: function() {
                            return c
                        }
                    });
                    var r = n(5893),
                        i = n(7294),
                        s = n(7417),
                        o = n(9171),
                        a = n(92),
                        l = n(1271),
                        u = n(9906);
                    let h = (0, i.createContext)();

                    function c() {
                        return (0, i.useContext)(h)
                    }

                    function d(e) {
                        let {
                            children: t
                        } = e, [n, c] = (0, i.useState)(null), [d, f] = (0, i.useState)(!0), [p, g] = (0, i.useState)(!(0, u.x1)()), m = o.l ? (0, s.v0)(o.l) : null;
                        async function y(e, t) {
                            let n = await (0, s.Xb)(m, e, t);
                            try {
                                await (0, s.w$)(n.user)
                            } catch (e) {}
                            try {
                                await (0, a.JN)(n.user.uid)
                            } catch (e) {}
                            return n
                        }
                        async function v() {
                            let e = await (0, s.rh)(m, new s.hJ);
                            try {
                                await (0, a.JN)(e.user.uid)
                            } catch (e) {}
                            return e
                        }
                        async function w() {
                            if (n && !n.emailVerified) try {
                                return await (0, s.w$)(n), {
                                    success: !0,
                                    message: "Verification email sent successfully!"
                                }
                            } catch (e) {
                                return {
                                    success: !1,
                                    message: (0, l.T)(e)
                                }
                            }
                            return {
                                success: !1,
                                message: "No user found or email already verified"
                            }
                        }
                        async function _() {
                            if (n) try {
                                return await (0, s.H5)(n), n
                            } catch (e) {
                                throw e
                            }
                            return null
                        }
                        return (0, i.useEffect)(() => {
                            if (!m) {
                                f(!1);
                                return
                            }
                            return (0, s.Aj)(m, e => {
                                c(e), f(!1), e && (0, u.x1)() ? (g(!1), e.getIdToken().then(e => {
                                    fetch("/api/auth/glb-cookie", {
                                        method: "POST",
                                        headers: {
                                            Authorization: `Bearer ${e}`
                                        }
                                    }).catch(e => {
                                        console.error("Failed to mint GLB access cookies:", e)
                                    }).finally(() => {
                                        g(!0)
                                    })
                                })) : g(!(0, u.x1)())
                            })
                        }, [m]), (0, r.jsx)(h.Provider, {
                            value: {
                                currentUser: n || { uid: "local_user", email: "pro@promogen.app", displayName: "Pro User", emailVerified: !0, getIdToken: async function() { return "mock_token"; } },
                                loading: !1,
                                glbCookieReady: !0,
                                signup: y,
                                login: function(e, t) {
                                    return (0, s.e5)(m, e, t)
                                },
                                signInWithGoogle: v,
                                logout: function() {
                                    return (0, s.w7)(m)
                                },
                                resetPassword: function(e) {
                                    return (0, s.LS)(m, e)
                                },
                                resendEmailVerification: w,
                                refreshUser: _
                            },
                            children: t
                        })
                    }
                },
                9171: function(e, t, n) {
                    "use strict";
                    n.d(t, {
                        l: function() {
                            return k
                        },
                        db: function() {
                            return R
                        }
                    });
                    var r, i, s, o, a = n(3977),
                        l = n(6147),
                        u = n(5816),
                        h = n(1683),
                        c = n(8463);
                    let d = "firebasestorage.googleapis.com";
                    class f extends h.ZR {
                        constructor(e, t, n = 0) {
                            super(p(e), `Firebase Storage: ${t} (${p(e)})`), this.status_ = n, this.customData = {
                                serverResponse: null
                            }, this._baseMessage = this.message, Object.setPrototypeOf(this, f.prototype)
                        }
                        get status() {
                            return this.status_
                        }
                        set status(e) {
                            this.status_ = e
                        }
                        _codeEquals(e) {
                            return p(e) === this.code
                        }
                        get serverResponse() {
                            return this.customData.serverResponse
                        }
                        set serverResponse(e) {
                            this.customData.serverResponse = e, this.customData.serverResponse ? this.message = `${this._baseMessage}
${this.customData.serverResponse}` : this.message = this._baseMessage
                        }
                    }

                    function p(e) {
                        return "storage/" + e
                    }

                    function g(e) {
                        return new f(s.INVALID_ARGUMENT, e)
                    }

                    function m() {
                        return new f(s.APP_DELETED, "The Firebase app was deleted.")
                    }(r = s || (s = {})).UNKNOWN = "unknown", r.OBJECT_NOT_FOUND = "object-not-found", r.BUCKET_NOT_FOUND = "bucket-not-found", r.PROJECT_NOT_FOUND = "project-not-found", r.QUOTA_EXCEEDED = "quota-exceeded", r.UNAUTHENTICATED = "unauthenticated", r.UNAUTHORIZED = "unauthorized", r.UNAUTHORIZED_APP = "unauthorized-app", r.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded", r.INVALID_CHECKSUM = "invalid-checksum", r.CANCELED = "canceled", r.INVALID_EVENT_NAME = "invalid-event-name", r.INVALID_URL = "invalid-url", r.INVALID_DEFAULT_BUCKET = "invalid-default-bucket", r.NO_DEFAULT_BUCKET = "no-default-bucket", r.CANNOT_SLICE_BLOB = "cannot-slice-blob", r.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size", r.NO_DOWNLOAD_URL = "no-download-url", r.INVALID_ARGUMENT = "invalid-argument", r.INVALID_ARGUMENT_COUNT = "invalid-argument-count", r.APP_DELETED = "app-deleted", r.INVALID_ROOT_OPERATION = "invalid-root-operation", r.INVALID_FORMAT = "invalid-format", r.INTERNAL_ERROR = "internal-error", r.UNSUPPORTED_ENVIRONMENT = "unsupported-environment";
                    class y {
                        constructor(e, t) {
                            this.bucket = e, this.path_ = t
                        }
                        get path() {
                            return this.path_
                        }
                        get isRoot() {
                            return 0 === this.path.length
                        }
                        fullServerUrl() {
                            let e = encodeURIComponent;
                            return "/b/" + e(this.bucket) + "/o/" + e(this.path)
                        }
                        bucketOnlyServerUrl() {
                            return "/b/" + encodeURIComponent(this.bucket) + "/o"
                        }
                        static makeFromBucketSpec(e, t) {
                            let n;
                            try {
                                n = y.makeFromUrl(e, t)
                            } catch (t) {
                                return new y(e, "")
                            }
                            if ("" === n.path) return n;
                            throw new f(s.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + e + "'.")
                        }
                        static makeFromUrl(e, t) {
                            let n = null,
                                r = "([A-Za-z0-9.\\-_]+)",
                                i = RegExp("^gs://" + r + "(/(.*))?$", "i");

                            function o(e) {
                                e.path_ = decodeURIComponent(e.path)
                            }
                            let a = t.replace(/[.]/g, "\\."),
                                l = [{
                                    regex: i,
                                    indices: {
                                        bucket: 1,
                                        path: 3
                                    },
                                    postModify: function(e) {
                                        "/" === e.path.charAt(e.path.length - 1) && (e.path_ = e.path_.slice(0, -1))
                                    }
                                }, {
                                    regex: RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`, "i"),
                                    indices: {
                                        bucket: 1,
                                        path: 3
                                    },
                                    postModify: o
                                }, {
                                    regex: RegExp(`^https?://${t===d?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`, "i"),
                                    indices: {
                                        bucket: 1,
                                        path: 2
                                    },
                                    postModify: o
                                }];
                            for (let t = 0; t < l.length; t++) {
                                let r = l[t],
                                    i = r.regex.exec(e);
                                if (i) {
                                    let e = i[r.indices.bucket],
                                        t = i[r.indices.path];
                                    t || (t = ""), n = new y(e, t), r.postModify(n);
                                    break
                                }
                            }
                            if (null == n) throw new f(s.INVALID_URL, "Invalid URL '" + e + "'.");
                            return n
                        }
                    }
                    class v {
                        constructor(e) {
                            this.promise_ = Promise.reject(e)
                        }
                        getPromise() {
                            return this.promise_
                        }
                        cancel(e = !1) {}
                    }

                    function w(e, t, n, r) {
                        if (r < t) throw g(`Invalid value for '${e}'. Expected ${t} or greater.`);
                        if (r > n) throw g(`Invalid value for '${e}'. Expected ${n} or less.`)
                    }(i = o || (o = {}))[i.NO_ERROR = 0] = "NO_ERROR", i[i.NETWORK_ERROR = 1] = "NETWORK_ERROR", i[i.ABORT = 2] = "ABORT";
                    class _ {
                        constructor(e, t, n, r, i, s, o, a, l, u, h, c = !0, d = !1) {
                            this.url_ = e, this.method_ = t, this.headers_ = n, this.body_ = r, this.successCodes_ = i, this.additionalRetryCodes_ = s, this.callback_ = o, this.errorCallback_ = a, this.timeout_ = l, this.progressCallback_ = u, this.connectionFactory_ = h, this.retry = c, this.isUsingEmulator = d, this.pendingConnection_ = null, this.backoffId_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.promise_ = new Promise((e, t) => {
                                this.resolve_ = e, this.reject_ = t, this.start_()
                            })
                        }
                        start_() {
                            let e = (e, t) => {
                                let n = this.resolve_,
                                    r = this.reject_,
                                    i = t.connection;
                                if (t.wasSuccessCode) try {
                                    let e = this.callback_(i, i.getResponse());
                                    void 0 !== e ? n(e) : n()
                                } catch (e) {
                                    r(e)
                                } else if (null !== i) {
                                    let e = new f(s.UNKNOWN, "An unknown error occurred, please check the error payload for server response.");
                                    e.serverResponse = i.getErrorText(), r(this.errorCallback_ ? this.errorCallback_(i, e) : e)
                                } else r(t.canceled ? this.appDelete_ ? m() : new f(s.CANCELED, "User canceled the upload/download.") : new f(s.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again."))
                            };
                            this.canceled_ ? e(!1, new E(!1, null, !0)) : this.backoffId_ = function(e, t, n) {
                                let r = 1,
                                    i = null,
                                    s = null,
                                    o = !1,
                                    a = 0,
                                    l = !1;

                                function u(...e) {
                                    l || (l = !0, t.apply(null, e))
                                }

                                function h(t) {
                                    i = setTimeout(() => {
                                        i = null, e(d, 2 === a)
                                    }, t)
                                }

                                function c() {
                                    s && clearTimeout(s)
                                }

                                function d(e, ...t) {
                                    let n;
                                    if (l) {
                                        c();
                                        return
                                    }
                                    if (e || 2 === a || o) {
                                        c(), u.call(null, e, ...t);
                                        return
                                    }
                                    r < 64 && (r *= 2), 1 === a ? (a = 2, n = 0) : n = (r + Math.random()) * 1e3, h(n)
                                }
                                let f = !1;

                                function p(e) {
                                    !f && (f = !0, c(), !l && (null !== i ? (e || (a = 2), clearTimeout(i), h(0)) : e || (a = 1)))
                                }
                                return h(0), s = setTimeout(() => {
                                    o = !0, p(!0)
                                }, n), p
                            }((e, t) => {
                                if (t) {
                                    e(!1, new E(!1, null, !0));
                                    return
                                }
                                let n = this.connectionFactory_();
                                this.pendingConnection_ = n;
                                let r = e => {
                                    let t = e.loaded,
                                        n = e.lengthComputable ? e.total : -1;
                                    null !== this.progressCallback_ && this.progressCallback_(t, n)
                                };
                                null !== this.progressCallback_ && n.addUploadProgressListener(r), n.send(this.url_, this.method_, this.isUsingEmulator, this.body_, this.headers_).then(() => {
                                    null !== this.progressCallback_ && n.removeUploadProgressListener(r), this.pendingConnection_ = null;
                                    let t = n.getErrorCode() === o.NO_ERROR,
                                        i = n.getStatus();
                                    if (!t || function(e, t) {
                                            let n = e >= 500 && e < 600,
                                                r = -1 !== [408, 429].indexOf(e),
                                                i = -1 !== t.indexOf(e);
                                            return n || r || i
                                        }(i, this.additionalRetryCodes_) && this.retry) {
                                        e(!1, new E(!1, null, n.getErrorCode() === o.ABORT));
                                        return
                                    }
                                    e(!0, new E(-1 !== this.successCodes_.indexOf(i), n))
                                })
                            }, e, this.timeout_)
                        }
                        getPromise() {
                            return this.promise_
                        }
                        cancel(e) {
                            this.canceled_ = !0, this.appDelete_ = e || !1, null !== this.backoffId_ && (0, this.backoffId_)(!1), null !== this.pendingConnection_ && this.pendingConnection_.abort()
                        }
                    }
                    class E {
                        constructor(e, t, n) {
                            this.wasSuccessCode = e, this.connection = t, this.canceled = !!n
                        }
                    }
                    class b {
                        constructor(e, t) {
                            this._service = e, t instanceof y ? this._location = t : this._location = y.makeFromUrl(t, e.host)
                        }
                        toString() {
                            return "gs://" + this._location.bucket + "/" + this._location.path
                        }
                        _newRef(e, t) {
                            return new b(e, t)
                        }
                        get root() {
                            let e = new y(this._location.bucket, "");
                            return this._newRef(this._service, e)
                        }
                        get bucket() {
                            return this._location.bucket
                        }
                        get fullPath() {
                            return this._location.path
                        }
                        get name() {
                            return function(e) {
                                let t = e.lastIndexOf("/", e.length - 2);
                                return -1 === t ? e : e.slice(t + 1)
                            }(this._location.path)
                        }
                        get storage() {
                            return this._service
                        }
                        get parent() {
                            let e = function(e) {
                                if (0 === e.length) return null;
                                let t = e.lastIndexOf("/");
                                return -1 === t ? "" : e.slice(0, t)
                            }(this._location.path);
                            if (null === e) return null;
                            let t = new y(this._location.bucket, e);
                            return new b(this._service, t)
                        }
                        _throwIfRoot(e) {
                            if ("" === this._location.path) throw new f(s.INVALID_ROOT_OPERATION, "The operation '" + e + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")
                        }
                    }

                    function I(e, t) {
                        let n = null == t ? void 0 : t.storageBucket;
                        return null == n ? null : y.makeFromBucketSpec(n, e)
                    }
                    class T {
                        constructor(e, t, n, r, i, s = !1) {
                            this.app = e, this._authProvider = t, this._appCheckProvider = n, this._url = r, this._firebaseVersion = i, this._isUsingEmulator = s, this._bucket = null, this._host = d, this._protocol = "https", this._appId = null, this._deleted = !1, this._maxOperationRetryTime = 12e4, this._maxUploadRetryTime = 6e5, this._requests = new Set, null != r ? this._bucket = y.makeFromBucketSpec(r, this._host) : this._bucket = I(this._host, this.app.options)
                        }
                        get host() {
                            return this._host
                        }
                        set host(e) {
                            this._host = e, null != this._url ? this._bucket = y.makeFromBucketSpec(this._url, e) : this._bucket = I(e, this.app.options)
                        }
                        get maxUploadRetryTime() {
                            return this._maxUploadRetryTime
                        }
                        set maxUploadRetryTime(e) {
                            w("time", 0, Number.POSITIVE_INFINITY, e), this._maxUploadRetryTime = e
                        }
                        get maxOperationRetryTime() {
                            return this._maxOperationRetryTime
                        }
                        set maxOperationRetryTime(e) {
                            w("time", 0, Number.POSITIVE_INFINITY, e), this._maxOperationRetryTime = e
                        }
                        async _getAuthToken() {
                            if (this._overrideAuthToken) return this._overrideAuthToken;
                            let e = this._authProvider.getImmediate({
                                optional: !0
                            });
                            if (e) {
                                let t = await e.getToken();
                                if (null !== t) return t.accessToken
                            }
                            return null
                        }
                        async _getAppCheckToken() {
                            if ((0, u.rh)(this.app) && this.app.settings.appCheckToken) return this.app.settings.appCheckToken;
                            let e = this._appCheckProvider.getImmediate({
                                optional: !0
                            });
                            return e ? (await e.getToken()).token : null
                        }
                        _delete() {
                            return this._deleted || (this._deleted = !0, this._requests.forEach(e => e.cancel()), this._requests.clear()), Promise.resolve()
                        }
                        _makeStorageReference(e) {
                            return new b(this, e)
                        }
                        _makeRequest(e, t, n, r, i = !0) {
                            if (this._deleted) return new v(m()); {
                                let s = function(e, t, n, r, i, s, o = !0, a = !1) {
                                    let l = function(e) {
                                            let t = encodeURIComponent,
                                                n = "?";
                                            for (let r in e) e.hasOwnProperty(r) && (n = n + (t(r) + "=") + t(e[r]) + "&");
                                            return n.slice(0, -1)
                                        }(e.urlParams),
                                        u = e.url + l,
                                        h = Object.assign({}, e.headers);
                                    return t && (h["X-Firebase-GMPID"] = t), null !== n && n.length > 0 && (h.Authorization = "Firebase " + n), h["X-Firebase-Storage-Version"] = "webjs/" + (null != s ? s : "AppManager"), null !== r && (h["X-Firebase-AppCheck"] = r), new _(u, e.method, h, e.body, e.successCodes, e.additionalRetryCodes, e.handler, e.errorHandler, e.timeout, e.progressCallback, i, o, a)
                                }(e, this._appId, n, r, t, this._firebaseVersion, i, this._isUsingEmulator);
                                return this._requests.add(s), s.getPromise().then(() => this._requests.delete(s), () => this._requests.delete(s)), s
                            }
                        }
                        async makeRequestWithTokens(e, t) {
                            let [n, r] = await Promise.all([this._getAuthToken(), this._getAppCheckToken()]);
                            return this._makeRequest(e, t, n, r).getPromise()
                        }
                    }
                    let C = "@firebase/storage",
                        S = "0.13.13",
                        A = "storage";
                    (0, u.Xd)(new c.wA(A, function(e, {
                        instanceIdentifier: t
                    }) {
                        return new T(e.getProvider("app").getImmediate(), e.getProvider("auth-internal"), e.getProvider("app-check-internal"), t, u.Jn)
                    }, "PUBLIC").setMultipleInstances(!0)), (0, u.KN)(C, S, ""), (0, u.KN)(C, S, "esm2017");
                    let k = null,
                        R = (k = (0, a.C6)().length ? (0, a.C6)()[0] : (0, a.ZF)({
                            apiKey: "AIzaSyBWfQanxUMo1Hq6yGwQrb5ABRktB_hv4DA",
                            authDomain: "promogen-6a08a.firebaseapp.com",
                            projectId: "promogen-6a08a",
                            storageBucket: "promogen-6a08a.firebasestorage.app",
                            messagingSenderId: "765094714182",
                            appId: "1:765094714182:web:4865ca20bd9bf4ec332347"
                        })) ? (0, l.ad)(k) : null;
                    k && function(e = (0, u.Mq)(), t) {
                        e = (0, h.m9)(e);
                        let n = (0, u.qX)(e, A).getImmediate({
                                identifier: void 0
                            }),
                            r = (0, h.P0)("storage");
                        r && function(e, t, n, r = {}) {
                            ! function(e, t, n, r = {}) {
                                e.host = `${t}:${n}`;
                                let i = (0, h.Xx)(t);
                                i && ((0, h.Uo)(`https://${e.host}/b`), (0, h.dp)("Storage", !0)), e._isUsingEmulator = !0, e._protocol = i ? "https" : "http";
                                let {
                                    mockUserToken: s
                                } = r;
                                s && (e._overrideAuthToken = "string" == typeof s ? s : (0, h.Sg)(s, e.app.options.projectId))
                            }(e, t, n, r)
                        }(n, ...r)
                    }(k)
                },
                6036: function(e, t, n) {
                    "use strict";
                    n.d(t, {
                        LQ: function() {
                            return u
                        },
                        fG: function() {
                            return a
                        },
                        sK: function() {
                            return h
                        },
                        wo: function() {
                            return l
                        }
                    });
                    var r = n(5837),
                        i = n(7417);
                    let s = !1,
                        o = null,
                        a = async function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            if (!r.zd.clientToken) throw Error("Paddle client token is not configured. Please set REACT_APP_PADDLE_CLIENT_TOKEN in your .env file.");
                            let t = 0,
                                n = document.querySelector('script[src*="paddle.js"]');
                            for (n || console.error("Paddle.js script tag not found in HTML. Check if script is loading in index.html"); void 0 === window.Paddle && t < 50;) await new Promise(e => setTimeout(e, 100)), t++;
                            if (void 0 === window.Paddle) throw console.error("Paddle.js not found after", 50, "retries"), console.error("Script tag exists:", !!n), console.error("window.Paddle:", typeof window.Paddle), console.error("Check browser console for COEP or CORS errors"), Error("Paddle.js script failed to load. This may be a COEP (Cross-Origin Embedder Policy) issue. Check browser console for blocked requests.");
                            if (!s || e && e !== o) {
                                let t = {
                                    token: r.zd.clientToken
                                };
                                e && (t.pwCustomer = {
                                    id: e
                                }), window.Paddle.Initialize(t), s = !0, e && (o = e)
                            }
                            if (!window.Paddle || !window.Paddle.Checkout) throw console.error("Paddle.Checkout is not available", window.Paddle), Error("Paddle Checkout is not available. Please check your Paddle configuration.");
                            return window.Paddle
                        },
                        l = () => {
                            o && window.Paddle && (window.Paddle.Initialize({
                                token: r.zd.clientToken
                            }), o = null)
                        },
                        u = async function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "subscription",
                                o = (0, i.v0)(e).currentUser;
                            if (!o) throw Error("User is not authenticated");
                            let l = t || r.iG;
                            if (!l) throw Error("Paddle price ID is required. Please check your configuration.");
                            let u = n || window.location.href;
                            n && n === window.location.origin && (u = window.location.href);
                            let h = new URL(u);
                            h.search = "";
                            let c = h.toString(),
                                d = `${c}?payment=success&type=${s}`;
                            try {
                                (await a()).Checkout.open({
                                    items: [{
                                        priceId: l,
                                        quantity: 1
                                    }],
                                    customer: {
                                        email: o.email
                                    },
                                    customData: {
                                        user_id: o.uid,
                                        payment_type: s,
                                        ..."credits" === s && l === r.ZG ? {
                                            credits: "7"
                                        } : {}
                                    },
                                    settings: {
                                        successUrl: d,
                                        displayMode: "overlay",
                                        theme: "light"
                                    },
                                    successCallback: e => {},
                                    closeCallback: () => {}
                                })
                            } catch (e) {
                                throw console.error("Paddle checkout error:", e), console.error("Error details:", {
                                    message: e ?.message,
                                    stack: e ?.stack,
                                    response: e ?.response
                                }), Error(e ?.message || "Failed to open Paddle checkout.")
                            }
                        },
                        h = u
                },
                92: function(e, t, n) {
                    "use strict";
                    n.d(t, {
                        JN: function() {
                            return l
                        },
                        Ng: function() {
                            return u
                        },
                        Od: function() {
                            return p
                        },
                        YP: function() {
                            return d
                        },
                        e4: function() {
                            return g
                        },
                        mM: function() {
                            return m
                        },
                        vV: function() {
                            return h
                        },
                        yO: function() {
                            return f
                        },
                        yv: function() {
                            return c
                        }
                    });
                    var r = n(6147),
                        i = n(7417),
                        s = n(9171);
                    let o = s.l ? (0, r.ad)(s.l) : null,
                        a = s.l ? (0, i.v0)(s.l) : null,
                        l = async function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            try {
                                let n = a.currentUser;
                                if (!n) throw Error("User not authenticated");
                                if (n.uid !== e) throw Error("User ID mismatch");
                                let i = (0, r.JU)(o, "customers", e);
                                (await (0, r.QT)(i)).exists() || await (0, r.pl)(i, {
                                    credits: t,
                                    userType: "free",
                                    email: n.email,
                                    createdAt: new Date,
                                    updatedAt: new Date
                                })
                            } catch (e) {
                                throw e
                            }
                        },
                        u = e => "premium",
                        h = async function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20;
                            try {
                                let i = a.currentUser;
                                if (!i || i.uid !== e) throw Error("User not authenticated");
                                let s = t.toUpperCase();
                                if (!/^#[0-9A-F]{6}$/i.test(s)) throw Error("Invalid color format");
                                let l = (0, r.JU)(o, "customers", e),
                                    u = await (0, r.QT)(l);
                                if (!u.exists()) throw Error("User document does not exist");
                                let h = u.data().savedColors || [];
                                if (h.includes(s)) return;
                                let c = [...h];
                                c.length >= n && (c = c.slice(1)), c.push(s), await (0, r.r7)(l, {
                                    savedColors: c,
                                    updatedAt: new Date
                                })
                            } catch (e) {
                                throw e
                            }
                        },
                        c = async (e, t) => {
                            try {
                                let n = a.currentUser;
                                if (!n || n.uid !== e) throw Error("User not authenticated");
                                let i = t.toUpperCase(),
                                    s = (0, r.JU)(o, "customers", e);
                                await (0, r.r7)(s, {
                                    savedColors: (0, r.Ab)(i),
                                    updatedAt: new Date
                                })
                            } catch (e) {
                                throw e
                            }
                        },
                        d = async e => {
                            try {
                                let t = (0, r.JU)(o, "customers", e),
                                    n = await (0, r.QT)(t);
                                if (n.exists()) return !!n.data().onboardingCompleted;
                                return !1
                            } catch (e) {
                                throw e
                            }
                        },
                        f = async function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            try {
                                let i = a.currentUser;
                                if (!i || i.uid !== e) throw Error("User not authenticated");
                                let s = (0, r.JU)(o, "customers", e),
                                    l = {
                                        onboardingCompleted: !0,
                                        onboardingSkipped: n,
                                        updatedAt: new Date
                                    };
                                !n && t && (l.onboardingContext = t.context || null, l.onboardingUseCase = t.useCase || null, l.onboardingSource = Array.isArray(t.source) ? t.source : t.source ? [t.source] : null, l.onboardingComment = t.comment || null, l.onboardingPreferredDevice = t.preferredDevice || null, l.onboardingCompletedAt = new Date), await (0, r.pl)(s, l, {
                                    merge: !0
                                })
                            } catch (e) {
                                throw e
                            }
                        },
                        p = async e => {
                            try {
                                let t = (0, r.JU)(o, "customers", e),
                                    n = await (0, r.QT)(t);
                                if (!n.exists()) return null;
                                return n.data().onboardingPreferredDevice || null
                            } catch (e) {
                                throw e
                            }
                        },
                        g = async e => {
                            try {
                                let t = (0, r.JU)(o, "customers", e),
                                    n = await (0, r.QT)(t);
                                if (n.exists()) return !!n.data().discordToastSeen;
                                return !1
                            } catch (e) {
                                throw e
                            }
                        },
                        m = async e => {
                            try {
                                let t = (0, r.JU)(o, "customers", e);
                                await (0, r.pl)(t, {
                                    discordToastSeen: !0,
                                    discordToastSeenAt: new Date
                                }, {
                                    merge: !0
                                })
                            } catch (e) {
                                throw e
                            }
                        }
                },
                1271: function(e, t, n) {
                    "use strict";
                    n.d(t, {
                        T: function() {
                            return i
                        }
                    });
                    let r = {
                        "auth/too-many-requests": "Too many attempts. Please wait a few minutes and try again.",
                        "auth/email-already-in-use": "This email is already in use. Try signing in or use a different email.",
                        "auth/invalid-email": "Please enter a valid email address.",
                        "auth/weak-password": "Please choose a stronger password (at least 6 characters).",
                        "auth/user-not-found": "No account found with this email. Check the address or sign up.",
                        "auth/wrong-password": 'Incorrect password. Try again or use "Forgot password?".',
                        "auth/invalid-credential": "Incorrect email or password. Please try again.",
                        "auth/network-request-failed": "Network error. Check your connection and try again.",
                        "auth/operation-not-allowed": "This sign-in method is not enabled. Please contact support.",
                        "auth/user-disabled": "This account has been disabled. Please contact support.",
                        "auth/requires-recent-login": "Please sign in again to complete this action.",
                        "auth/expired-action-code": "This link has expired. Please request a new one.",
                        "auth/invalid-action-code": "This link is invalid or has already been used.",
                        "auth/popup-closed-by-user": "Sign-in was cancelled.",
                        "auth/cancelled-popup-request": "Sign-in was cancelled.",
                        "auth/account-exists-with-different-credential": "An account already exists with this email using a password. Please sign in with your password.",
                        "auth/popup-blocked": "Sign-in popup was blocked. Please allow popups and try again."
                    };

                    function i(e) {
                        if (!e) return "Something went wrong. Please try again.";
                        let t = e.code;
                        if (t && r[t]) return r[t];
                        let n = "string" == typeof e.message ? e.message.trim() : "";
                        return !n || n.startsWith("Firebase:") || /^\[.*\]\s*$/.test(n) ? "Something went wrong. Please try again." : n
                    }
                },
                9906: function(e, t, n) {
                    "use strict";

                    function r() {
                        let e = "assets.promogen.app";
                        if (!e || "undefined" == typeof self || !self.location) return !1;
                        let t = e.split("."),
                            n = t.length > 1 ? t.slice(1).join(".") : e,
                            {
                                hostname: r
                            } = self.location;
                        return r === n || r.endsWith(`.${n}`)
                    }

                    function i(e) {
                        let {
                            forceLocal: t = !1
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = String(e || "").replace(/^\/+/, ""), i = "assets.promogen.app";
                        if (n.startsWith("Vertical_Animation_")) n = `animations/vertical/${n}`;
                        else if (n.startsWith("Animation_")) n = `animations/horizontal/${n}`;
                        else if (n.startsWith("ComputerAnimations/")) n = `animations/computer/${n.replace("ComputerAnimations/", "")}`;
                        return !t && i && r() ? `https://${i}/${n}` : `/${n}`
                    }

                    function s(e) {
                        e.setWithCredentials(!0)
                    }
                    n.d(t, {
                        Cc: function() {
                            return i
                        },
                        Zn: function() {
                            return s
                        },
                        x1: function() {
                            return r
                        }
                    })
                },
                6526: function() {},
                1743: function() {},
                6730: function() {},
                1325: function() {},
                1368: function() {},
                3242: function() {},
                3076: function() {},
                6204: function() {},
                9420: function() {},
                7037: function() {},
                4912: function() {},
                2154: function() {},
                7544: function() {},
                4841: function() {},
                6242: function() {},
                9584: function() {},
                6971: function() {},
                7293: function() {},
                7993: function() {},
                2434: function() {},
                4155: function(e) {
                    var t, n, r, i = e.exports = {};

                    function s() {
                        throw Error("setTimeout has not been defined")
                    }

                    function o() {
                        throw Error("clearTimeout has not been defined")
                    }

                    function a(e) {
                        if (t === setTimeout) return setTimeout(e, 0);
                        if ((t === s || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (n) {
                            try {
                                return t.call(null, e, 0)
                            } catch (n) {
                                return t.call(this, e, 0)
                            }
                        }
                    }! function() {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : s
                        } catch (e) {
                            t = s
                        }
                        try {
                            n = "function" == typeof clearTimeout ? clearTimeout : o
                        } catch (e) {
                            n = o
                        }
                    }();
                    var l = [],
                        u = !1,
                        h = -1;

                    function c() {
                        u && r && (u = !1, r.length ? l = r.concat(l) : h = -1, l.length && d())
                    }

                    function d() {
                        if (!u) {
                            var e = a(c);
                            u = !0;
                            for (var t = l.length; t;) {
                                for (r = l, l = []; ++h < t;) r && r[h].run();
                                h = -1, t = l.length
                            }
                            r = null, u = !1,
                                function(e) {
                                    if (n === clearTimeout) return clearTimeout(e);
                                    if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                    try {
                                        n(e)
                                    } catch (t) {
                                        try {
                                            return n.call(null, e)
                                        } catch (t) {
                                            return n.call(this, e)
                                        }
                                    }
                                }(e)
                        }
                    }

                    function f(e, t) {
                        this.fun = e, this.array = t
                    }

                    function p() {}
                    i.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        l.push(new f(e, t)), 1 !== l.length || u || a(d)
                    }, f.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(e) {
                        return []
                    }, i.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }, i.cwd = function() {
                        return "/"
                    }, i.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }, i.umask = function() {
                        return 0
                    }
                },
                9590: function(e) {
                    var t = "undefined" != typeof Element,
                        n = "function" == typeof Map,
                        r = "function" == typeof Set,
                        i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
                    e.exports = function(e, s) {
                        try {
                            return function e(s, o) {
                                if (s === o) return !0;
                                if (s && o && "object" == typeof s && "object" == typeof o) {
                                    var a, l, u, h;
                                    if (s.constructor !== o.constructor) return !1;
                                    if (Array.isArray(s)) {
                                        if ((a = s.length) != o.length) return !1;
                                        for (l = a; 0 != l--;)
                                            if (!e(s[l], o[l])) return !1;
                                        return !0
                                    }
                                    if (n && s instanceof Map && o instanceof Map) {
                                        if (s.size !== o.size) return !1;
                                        for (h = s.entries(); !(l = h.next()).done;)
                                            if (!o.has(l.value[0])) return !1;
                                        for (h = s.entries(); !(l = h.next()).done;)
                                            if (!e(l.value[1], o.get(l.value[0]))) return !1;
                                        return !0
                                    }
                                    if (r && s instanceof Set && o instanceof Set) {
                                        if (s.size !== o.size) return !1;
                                        for (h = s.entries(); !(l = h.next()).done;)
                                            if (!o.has(l.value[0])) return !1;
                                        return !0
                                    }
                                    if (i && ArrayBuffer.isView(s) && ArrayBuffer.isView(o)) {
                                        if ((a = s.length) != o.length) return !1;
                                        for (l = a; 0 != l--;)
                                            if (s[l] !== o[l]) return !1;
                                        return !0
                                    }
                                    if (s.constructor === RegExp) return s.source === o.source && s.flags === o.flags;
                                    if (s.valueOf !== Object.prototype.valueOf && "function" == typeof s.valueOf && "function" == typeof o.valueOf) return s.valueOf() === o.valueOf();
                                    if (s.toString !== Object.prototype.toString && "function" == typeof s.toString && "function" == typeof o.toString) return s.toString() === o.toString();
                                    if ((a = (u = Object.keys(s)).length) !== Object.keys(o).length) return !1;
                                    for (l = a; 0 != l--;)
                                        if (!Object.prototype.hasOwnProperty.call(o, u[l])) return !1;
                                    if (t && s instanceof Element) return !1;
                                    for (l = a; 0 != l--;)
                                        if (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l] || !s.$$typeof) && !e(s[u[l]], o[u[l]])) return !1;
                                    return !0
                                }
                                return s != s && o != o
                            }(e, s)
                        } catch (e) {
                            if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                            throw e
                        }
                    }
                },
                6774: function(e) {
                    e.exports = function(e, t, n, r) {
                        var i = n ? n.call(r, e, t) : void 0;
                        if (void 0 !== i) return !!i;
                        if (e === t) return !0;
                        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                        var s = Object.keys(e),
                            o = Object.keys(t);
                        if (s.length !== o.length) return !1;
                        for (var a = Object.prototype.hasOwnProperty.bind(t), l = 0; l < s.length; l++) {
                            var u = s[l];
                            if (!a(u)) return !1;
                            var h = e[u],
                                c = t[u];
                            if (!1 === (i = n ? n.call(r, h, c, u) : void 0) || void 0 === i && h !== c) return !1
                        }
                        return !0
                    }
                },
                5816: function(e, t, n) {
                    "use strict";
                    let r, i, s;
                    n.d(t, {
                        Jn: function() {
                            return U
                        },
                        qX: function() {
                            return D
                        },
                        rh: function() {
                            return L
                        },
                        Xd: function() {
                            return P
                        },
                        Mq: function() {
                            return F
                        },
                        C6: function() {
                            return B
                        },
                        ZF: function() {
                            return V
                        },
                        KN: function() {
                            return j
                        }
                    });
                    var o = n(8463),
                        a = n(3333),
                        l = n(1683);
                    let u = (e, t) => t.some(t => e instanceof t),
                        h = new WeakMap,
                        c = new WeakMap,
                        d = new WeakMap,
                        f = new WeakMap,
                        p = new WeakMap,
                        g = {
                            get(e, t, n) {
                                if (e instanceof IDBTransaction) {
                                    if ("done" === t) return c.get(e);
                                    if ("objectStoreNames" === t) return e.objectStoreNames || d.get(e);
                                    if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                                }
                                return m(e[t])
                            },
                            set: (e, t, n) => (e[t] = n, !0),
                            has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
                        };

                    function m(e) {
                        var t;
                        if (e instanceof IDBRequest) return function(e) {
                            let t = new Promise((t, n) => {
                                let r = () => {
                                        e.removeEventListener("success", i), e.removeEventListener("error", s)
                                    },
                                    i = () => {
                                        t(m(e.result)), r()
                                    },
                                    s = () => {
                                        n(e.error), r()
                                    };
                                e.addEventListener("success", i), e.addEventListener("error", s)
                            });
                            return t.then(t => {
                                t instanceof IDBCursor && h.set(t, e)
                            }).catch(() => {}), p.set(t, e), t
                        }(e);
                        if (f.has(e)) return f.get(e);
                        let n = "function" == typeof(t = e) ? t !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
                            return t.apply(y(this), e), m(h.get(this))
                        } : function(...e) {
                            return m(t.apply(y(this), e))
                        } : function(e, ...n) {
                            let r = t.call(y(this), e, ...n);
                            return d.set(r, e.sort ? e.sort() : [e]), m(r)
                        } : (t instanceof IDBTransaction && function(e) {
                            if (c.has(e)) return;
                            let t = new Promise((t, n) => {
                                let r = () => {
                                        e.removeEventListener("complete", i), e.removeEventListener("error", s), e.removeEventListener("abort", s)
                                    },
                                    i = () => {
                                        t(), r()
                                    },
                                    s = () => {
                                        n(e.error || new DOMException("AbortError", "AbortError")), r()
                                    };
                                e.addEventListener("complete", i), e.addEventListener("error", s), e.addEventListener("abort", s)
                            });
                            c.set(e, t)
                        }(t), u(t, r || (r = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(t, g) : t;
                        return n !== e && (f.set(e, n), p.set(n, e)), n
                    }
                    let y = e => p.get(e),
                        v = ["get", "getKey", "getAll", "getAllKeys", "count"],
                        w = ["put", "add", "delete", "clear"],
                        _ = new Map;

                    function E(e, t) {
                        if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
                        if (_.get(t)) return _.get(t);
                        let n = t.replace(/FromIndex$/, ""),
                            r = t !== n,
                            i = w.includes(n);
                        if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || v.includes(n))) return;
                        let s = async function(e, ...t) {
                            let s = this.transaction(e, i ? "readwrite" : "readonly"),
                                o = s.store;
                            return r && (o = o.index(t.shift())), (await Promise.all([o[n](...t), i && s.done]))[0]
                        };
                        return _.set(t, s), s
                    }
                    g = { ...s = g,
                        get: (e, t, n) => E(e, t) || s.get(e, t, n),
                        has: (e, t) => !!E(e, t) || s.has(e, t)
                    };
                    class b {
                        constructor(e) {
                            this.container = e
                        }
                        getPlatformInfoString() {
                            return this.container.getProviders().map(e => {
                                if (! function(e) {
                                        let t = e.getComponent();
                                        return (null == t ? void 0 : t.type) === "VERSION"
                                    }(e)) return null; {
                                    let t = e.getImmediate();
                                    return `${t.library}/${t.version}`
                                }
                            }).filter(e => e).join(" ")
                        }
                    }
                    let I = "@firebase/app",
                        T = "0.13.1",
                        C = new a.Yd("@firebase/app"),
                        S = "[DEFAULT]",
                        A = {
                            [I]: "fire-core",
                            "@firebase/app-compat": "fire-core-compat",
                            "@firebase/analytics": "fire-analytics",
                            "@firebase/analytics-compat": "fire-analytics-compat",
                            "@firebase/app-check": "fire-app-check",
                            "@firebase/app-check-compat": "fire-app-check-compat",
                            "@firebase/auth": "fire-auth",
                            "@firebase/auth-compat": "fire-auth-compat",
                            "@firebase/database": "fire-rtdb",
                            "@firebase/data-connect": "fire-data-connect",
                            "@firebase/database-compat": "fire-rtdb-compat",
                            "@firebase/functions": "fire-fn",
                            "@firebase/functions-compat": "fire-fn-compat",
                            "@firebase/installations": "fire-iid",
                            "@firebase/installations-compat": "fire-iid-compat",
                            "@firebase/messaging": "fire-fcm",
                            "@firebase/messaging-compat": "fire-fcm-compat",
                            "@firebase/performance": "fire-perf",
                            "@firebase/performance-compat": "fire-perf-compat",
                            "@firebase/remote-config": "fire-rc",
                            "@firebase/remote-config-compat": "fire-rc-compat",
                            "@firebase/storage": "fire-gcs",
                            "@firebase/storage-compat": "fire-gcs-compat",
                            "@firebase/firestore": "fire-fst",
                            "@firebase/firestore-compat": "fire-fst-compat",
                            "@firebase/ai": "fire-vertex",
                            "fire-js": "fire-js",
                            firebase: "fire-js-all"
                        },
                        k = new Map,
                        R = new Map,
                        N = new Map;

                    function O(e, t) {
                        try {
                            e.container.addComponent(t)
                        } catch (n) {
                            C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
                        }
                    }

                    function P(e) {
                        let t = e.name;
                        if (N.has(t)) return C.debug(`There were multiple attempts to register component ${t}.`), !1;
                        for (let n of (N.set(t, e), k.values())) O(n, e);
                        for (let t of R.values()) O(t, e);
                        return !0
                    }

                    function D(e, t) {
                        let n = e.container.getProvider("heartbeat").getImmediate({
                            optional: !0
                        });
                        return n && n.triggerHeartbeat(), e.container.getProvider(t)
                    }

                    function L(e) {
                        return null != e && void 0 !== e.settings
                    }
                    let x = new l.LL("app", "Firebase", {
                        "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
                        "bad-app-name": "Illegal App name: '{$appName}'",
                        "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
                        "app-deleted": "Firebase App named '{$appName}' already deleted",
                        "server-app-deleted": "Firebase Server App has been deleted",
                        "no-options": "Need to provide options, when not being deployed to hosting via source.",
                        "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
                        "invalid-log-argument": "First argument to `onLog` must be null or a function.",
                        "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
                        "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
                        "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
                        "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
                        "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
                        "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
                    });
                    class M {
                        constructor(e, t, n) {
                            this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new o.wA("app", () => this, "PUBLIC"))
                        }
                        get automaticDataCollectionEnabled() {
                            return this.checkDestroyed(), this._automaticDataCollectionEnabled
                        }
                        set automaticDataCollectionEnabled(e) {
                            this.checkDestroyed(), this._automaticDataCollectionEnabled = e
                        }
                        get name() {
                            return this.checkDestroyed(), this._name
                        }
                        get options() {
                            return this.checkDestroyed(), this._options
                        }
                        get config() {
                            return this.checkDestroyed(), this._config
                        }
                        get container() {
                            return this._container
                        }
                        get isDeleted() {
                            return this._isDeleted
                        }
                        set isDeleted(e) {
                            this._isDeleted = e
                        }
                        checkDestroyed() {
                            if (this.isDeleted) throw x.create("app-deleted", {
                                appName: this._name
                            })
                        }
                    }
                    let U = "11.9.0";

                    function V(e, t = {}) {
                        let n = e;
                        "object" != typeof t && (t = {
                            name: t
                        });
                        let r = Object.assign({
                                name: S,
                                automaticDataCollectionEnabled: !0
                            }, t),
                            i = r.name;
                        if ("string" != typeof i || !i) throw x.create("bad-app-name", {
                            appName: String(i)
                        });
                        if (n || (n = (0, l.aH)()), !n) throw x.create("no-options");
                        let s = k.get(i);
                        if (s) {
                            if ((0, l.vZ)(n, s.options) && (0, l.vZ)(r, s.config)) return s;
                            throw x.create("duplicate-app", {
                                appName: i
                            })
                        }
                        let a = new o.H0(i);
                        for (let e of N.values()) a.addComponent(e);
                        let u = new M(n, r, a);
                        return k.set(i, u), u
                    }

                    function F(e = S) {
                        let t = k.get(e);
                        if (!t && e === S && (0, l.aH)()) return V();
                        if (!t) throw x.create("no-app", {
                            appName: e
                        });
                        return t
                    }

                    function B() {
                        return Array.from(k.values())
                    }

                    function j(e, t, n) {
                        var r;
                        let i = null !== (r = A[e]) && void 0 !== r ? r : e;
                        n && (i += `-${n}`);
                        let s = i.match(/\s|\//),
                            a = t.match(/\s|\//);
                        if (s || a) {
                            let e = [`Unable to register library "${i}" with version "${t}":`];
                            s && e.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && a && e.push("and"), a && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), C.warn(e.join(" "));
                            return
                        }
                        P(new o.wA(`${i}-version`, () => ({
                            library: i,
                            version: t
                        }), "VERSION"))
                    }
                    let $ = "firebase-heartbeat-store",
                        q = null;

                    function z() {
                        return q || (q = (function(e, t, {
                            blocked: n,
                            upgrade: r,
                            blocking: i,
                            terminated: s
                        } = {}) {
                            let o = indexedDB.open(e, 1),
                                a = m(o);
                            return r && o.addEventListener("upgradeneeded", e => {
                                r(m(o.result), e.oldVersion, e.newVersion, m(o.transaction), e)
                            }), n && o.addEventListener("blocked", e => n(e.oldVersion, e.newVersion, e)), a.then(e => {
                                s && e.addEventListener("close", () => s()), i && e.addEventListener("versionchange", e => i(e.oldVersion, e.newVersion, e))
                            }).catch(() => {}), a
                        })("firebase-heartbeat-database", 0, {
                            upgrade: (e, t) => {
                                if (0 === t) try {
                                    e.createObjectStore($)
                                } catch (e) {
                                    console.warn(e)
                                }
                            }
                        }).catch(e => {
                            throw x.create("idb-open", {
                                originalErrorMessage: e.message
                            })
                        })), q
                    }
                    async function H(e) {
                        try {
                            let t = (await z()).transaction($),
                                n = await t.objectStore($).get(G(e));
                            return await t.done, n
                        } catch (e) {
                            if (e instanceof l.ZR) C.warn(e.message);
                            else {
                                let t = x.create("idb-get", {
                                    originalErrorMessage: null == e ? void 0 : e.message
                                });
                                C.warn(t.message)
                            }
                        }
                    }
                    async function K(e, t) {
                        try {
                            let n = (await z()).transaction($, "readwrite"),
                                r = n.objectStore($);
                            await r.put(t, G(e)), await n.done
                        } catch (e) {
                            if (e instanceof l.ZR) C.warn(e.message);
                            else {
                                let t = x.create("idb-set", {
                                    originalErrorMessage: null == e ? void 0 : e.message
                                });
                                C.warn(t.message)
                            }
                        }
                    }

                    function G(e) {
                        return `${e.name}!${e.options.appId}`
                    }
                    class W {
                        constructor(e) {
                            this.container = e, this._heartbeatsCache = null;
                            let t = this.container.getProvider("app").getImmediate();
                            this._storage = new X(t), this._heartbeatsCachePromise = this._storage.read().then(e => (this._heartbeatsCache = e, e))
                        }
                        async triggerHeartbeat() {
                            var e, t;
                            try {
                                let n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
                                    r = Q();
                                if ((null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, (null === (t = this._heartbeatsCache) || void 0 === t ? void 0 : t.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some(e => e.date === r)) return;
                                if (this._heartbeatsCache.heartbeats.push({
                                        date: r,
                                        agent: n
                                    }), this._heartbeatsCache.heartbeats.length > 30) {
                                    let e = function(e) {
                                        if (0 === e.length) return -1;
                                        let t = 0,
                                            n = e[0].date;
                                        for (let r = 1; r < e.length; r++) e[r].date < n && (n = e[r].date, t = r);
                                        return t
                                    }(this._heartbeatsCache.heartbeats);
                                    this._heartbeatsCache.heartbeats.splice(e, 1)
                                }
                                return this._storage.overwrite(this._heartbeatsCache)
                            } catch (e) {
                                C.warn(e)
                            }
                        }
                        async getHeartbeatsHeader() {
                            var e;
                            try {
                                if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) == null || 0 === this._heartbeatsCache.heartbeats.length) return "";
                                let t = Q(),
                                    {
                                        heartbeatsToSend: n,
                                        unsentEntries: r
                                    } = function(e, t = 1024) {
                                        let n = [],
                                            r = e.slice();
                                        for (let i of e) {
                                            let e = n.find(e => e.agent === i.agent);
                                            if (e) {
                                                if (e.dates.push(i.date), Y(n) > t) {
                                                    e.dates.pop();
                                                    break
                                                }
                                            } else if (n.push({
                                                    agent: i.agent,
                                                    dates: [i.date]
                                                }), Y(n) > t) {
                                                n.pop();
                                                break
                                            }
                                            r = r.slice(1)
                                        }
                                        return {
                                            heartbeatsToSend: n,
                                            unsentEntries: r
                                        }
                                    }(this._heartbeatsCache.heartbeats),
                                    i = (0, l.L)(JSON.stringify({
                                        version: 2,
                                        heartbeats: n
                                    }));
                                return this._heartbeatsCache.lastSentHeartbeatDate = t, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i
                            } catch (e) {
                                return C.warn(e), ""
                            }
                        }
                    }

                    function Q() {
                        return new Date().toISOString().substring(0, 10)
                    }
                    class X {
                        constructor(e) {
                            this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
                        }
                        async runIndexedDBEnvironmentCheck() {
                            return !!(0, l.hl)() && (0, l.eu)().then(() => !0).catch(() => !1)
                        }
                        async read() {
                            if (!await this._canUseIndexedDBPromise) return {
                                heartbeats: []
                            }; {
                                let e = await H(this.app);
                                return (null == e ? void 0 : e.heartbeats) ? e : {
                                    heartbeats: []
                                }
                            }
                        }
                        async overwrite(e) {
                            var t;
                            if (await this._canUseIndexedDBPromise) {
                                let n = await this.read();
                                return K(this.app, {
                                    lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                                    heartbeats: e.heartbeats
                                })
                            }
                        }
                        async add(e) {
                            var t;
                            if (await this._canUseIndexedDBPromise) {
                                let n = await this.read();
                                return K(this.app, {
                                    lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                                    heartbeats: [...n.heartbeats, ...e.heartbeats]
                                })
                            }
                        }
                    }

                    function Y(e) {
                        return (0, l.L)(JSON.stringify({
                            version: 2,
                            heartbeats: e
                        })).length
                    }
                    P(new o.wA("platform-logger", e => new b(e), "PRIVATE")), P(new o.wA("heartbeat", e => new W(e), "PRIVATE")), j(I, T, ""), j(I, T, "esm2017"), j("fire-js", "")
                },
                8463: function(e, t, n) {
                    "use strict";
                    n.d(t, {
                        H0: function() {
                            return a
                        },
                        wA: function() {
                            return i
                        }
                    });
                    var r = n(1683);
                    class i {
                        constructor(e, t, n) {
                            this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
                        }
                        setInstantiationMode(e) {
                            return this.instantiationMode = e, this
                        }
                        setMultipleInstances(e) {
                            return this.multipleInstances = e, this
                        }
                        setServiceProps(e) {
                            return this.serviceProps = e, this
                        }
                        setInstanceCreatedCallback(e) {
                            return this.onInstanceCreated = e, this
                        }
                    }
                    let s = "[DEFAULT]";
                    class o {
                        constructor(e, t) {
                            this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
                        }
                        get(e) {
                            let t = this.normalizeInstanceIdentifier(e);
                            if (!this.instancesDeferred.has(t)) {
                                let e = new r.BH;
                                if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                                    let n = this.getOrInitializeService({
                                        instanceIdentifier: t
                                    });
                                    n && e.resolve(n)
                                } catch (e) {}
                            }
                            return this.instancesDeferred.get(t).promise
                        }
                        getImmediate(e) {
                            var t;
                            let n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
                                r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
                            if (this.isInitialized(n) || this.shouldAutoInitialize()) try {
                                return this.getOrInitializeService({
                                    instanceIdentifier: n
                                })
                            } catch (e) {
                                if (r) return null;
                                throw e
                            } else {
                                if (r) return null;
                                throw Error(`Service ${this.name} is not available`)
                            }
                        }
                        getComponent() {
                            return this.component
                        }
                        setComponent(e) {
                            if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
                            if (this.component) throw Error(`Component for ${this.name} has already been provided`);
                            if (this.component = e, this.shouldAutoInitialize()) {
                                if ("EAGER" === e.instantiationMode) try {
                                    this.getOrInitializeService({
                                        instanceIdentifier: s
                                    })
                                } catch (e) {}
                                for (let [e, t] of this.instancesDeferred.entries()) {
                                    let n = this.normalizeInstanceIdentifier(e);
                                    try {
                                        let e = this.getOrInitializeService({
                                            instanceIdentifier: n
                                        });
                                        t.resolve(e)
                                    } catch (e) {}
                                }
                            }
                        }
                        clearInstance(e = s) {
                            this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
                        }
                        async delete() {
                            let e = Array.from(this.instances.values());
                            await Promise.all([...e.filter(e => "INTERNAL" in e).map(e => e.INTERNAL.delete()), ...e.filter(e => "_delete" in e).map(e => e._delete())])
                        }
                        isComponentSet() {
                            return null != this.component
                        }
                        isInitialized(e = s) {
                            return this.instances.has(e)
                        }
                        getOptions(e = s) {
                            return this.instancesOptions.get(e) || {}
                        }
                        initialize(e = {}) {
                            let {
                                options: t = {}
                            } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                            if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
                            if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
                            let r = this.getOrInitializeService({
                                instanceIdentifier: n,
                                options: t
                            });
                            for (let [e, t] of this.instancesDeferred.entries()) n === this.normalizeInstanceIdentifier(e) && t.resolve(r);
                            return r
                        }
                        onInit(e, t) {
                            var n;
                            let r = this.normalizeInstanceIdentifier(t),
                                i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
                            i.add(e), this.onInitCallbacks.set(r, i);
                            let s = this.instances.get(r);
                            return s && e(s, r), () => {
                                i.delete(e)
                            }
                        }
                        invokeOnInitCallbacks(e, t) {
                            let n = this.onInitCallbacks.get(t);
                            if (n)
                                for (let r of n) try {
                                    r(e, t)
                                } catch (e) {}
                        }
                        getOrInitializeService({
                            instanceIdentifier: e,
                            options: t = {}
                        }) {
                            let n = this.instances.get(e);
                            if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                                    instanceIdentifier: e === s ? void 0 : e,
                                    options: t
                                }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
                                this.component.onInstanceCreated(this.container, e, n)
                            } catch (e) {}
                            return n || null
                        }
                        normalizeInstanceIdentifier(e = s) {
                            return this.component ? this.component.multipleInstances ? e : s : e
                        }
                        shouldAutoInitialize() {
                            return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                        }
                    }
                    class a {
                        constructor(e) {
                            this.name = e, this.providers = new Map
                        }
                        addComponent(e) {
                            let t = this.getProvider(e.name);
                            if (t.isComponentSet()) throw Error(`Component ${e.name} has already been registered with ${this.name}`);
                            t.setComponent(e)
                        }
                        addOrOverwriteComponent(e) {
                            this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
                        }
                        getProvider(e) {
                            if (this.providers.has(e)) return this.providers.get(e);
                            let t = new o(e, this);
                            return this.providers.set(e, t), t
                        }
                        getProviders() {
                            return Array.from(this.providers.values())
                        }
                    }
                },
                3333: function(e, t, n) {
                    "use strict";
                    var r, i;
                    n.d(t, {
                        Yd: function() {
                            return h
                        },
                        in: function() {
                            return r
                        }
                    });
                    let s = [];
                    (i = r || (r = {}))[i.DEBUG = 0] = "DEBUG", i[i.VERBOSE = 1] = "VERBOSE", i[i.INFO = 2] = "INFO", i[i.WARN = 3] = "WARN", i[i.ERROR = 4] = "ERROR", i[i.SILENT = 5] = "SILENT";
                    let o = {
                            debug: r.DEBUG,
                            verbose: r.VERBOSE,
                            info: r.INFO,
                            warn: r.WARN,
                            error: r.ERROR,
                            silent: r.SILENT
                        },
                        a = r.INFO,
                        l = {
                            [r.DEBUG]: "log",
                            [r.VERBOSE]: "log",
                            [r.INFO]: "info",
                            [r.WARN]: "warn",
                            [r.ERROR]: "error"
                        },
                        u = (e, t, ...n) => {
                            if (t < e.logLevel) return;
                            let r = new Date().toISOString(),
                                i = l[t];
                            if (i) console[i](`[${r}]  ${e.name}:`, ...n);
                            else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)
                        };
                    class h {
                        constructor(e) {
                            this.name = e, this._logLevel = a, this._logHandler = u, this._userLogHandler = null, s.push(this)
                        }
                        get logLevel() {
                            return this._logLevel
                        }
                        set logLevel(e) {
                            if (!(e in r)) throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                            this._logLevel = e
                        }
                        setLogLevel(e) {
                            this._logLevel = "string" == typeof e ? o[e] : e
                        }
                        get logHandler() {
                            return this._logHandler
                        }
                        set logHandler(e) {
                            if ("function" != typeof e) throw TypeError("Value assigned to `logHandler` must be a function");
                            this._logHandler = e
                        }
                        get userLogHandler() {
                            return this._userLogHandler
                        }
                        set userLogHandler(e) {
                            this._userLogHandler = e
                        }
                        debug(...e) {
                            this._userLogHandler && this._userLogHandler(this, r.DEBUG, ...e), this._logHandler(this, r.DEBUG, ...e)
                        }
                        log(...e) {
                            this._userLogHandler && this._userLogHandler(this, r.VERBOSE, ...e), this._logHandler(this, r.VERBOSE, ...e)
                        }
                        info(...e) {
                            this._userLogHandler && this._userLogHandler(this, r.INFO, ...e), this._logHandler(this, r.INFO, ...e)
                        }
                        warn(...e) {
                            this._userLogHandler && this._userLogHandler(this, r.WARN, ...e), this._logHandler(this, r.WARN, ...e)
                        }
                        error(...e) {
                            this._userLogHandler && this._userLogHandler(this, r.ERROR, ...e), this._logHandler(this, r.ERROR, ...e)
                        }
                    }
                },
                1519: function(e, t, n) {
                    "use strict";
                    n.d(t, {
                        c: function() {
                            return u
                        }
                    });
                    var r = n(7294),
                        i = n(4155),
                        s = () => {
                            window.va || (window.va = function(...e) {
                                (window.vaq = window.vaq || []).push(e)
                            })
                        };

                    function o() {
                        return "undefined" != typeof window
                    }

                    function a() {
                        return "production"
                    }

                    function l() {
                        return "development" === ((o() ? window.vam : a()) || "production")
                    }

                    function u(e) {
                        return (0, r.useEffect)(() => {
                            var t;
                            e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend))
                        }, [e.beforeSend]), (0, r.useEffect)(() => {
                            ! function(e = {
                                debug: !0
                            }) {
                                var t;
                                if (!o()) return;
                                (function(e = "auto") {
                                    if ("auto" === e) {
                                        window.vam = a();
                                        return
                                    }
                                    window.vam = e
                                })(e.mode), s(), e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
                                let n = e.scriptSrc ? e.scriptSrc : l() ? "https://va.vercel-scripts.com/v1/script.debug.js" : e.basePath ? `${e.basePath}/insights/script.js` : "/_vercel/insights/script.js";
                                if (document.head.querySelector(`script[src*="${n}"]`)) return;
                                let r = document.createElement("script");
                                r.src = n, r.defer = !0, r.dataset.sdkn = "@vercel/analytics" + (e.framework ? `/${e.framework}` : ""), r.dataset.sdkv = "1.5.0", e.disableAutoTrack && (r.dataset.disableAutoTrack = "1"), e.endpoint ? r.dataset.endpoint = e.endpoint : e.basePath && (r.dataset.endpoint = `${e.basePath}/insights`), e.dsn && (r.dataset.dsn = e.dsn), r.onerror = () => {
                                    let e = l() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                                    console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)
                                }, l() && !1 === e.debug && (r.dataset.debug = "false"), document.head.appendChild(r)
                            }({
                                framework: e.framework || "react",
                                basePath: e.basePath ?? function() {
                                    if (void 0 !== i && void 0 !== i.env) return i.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
                                }(),
                                ...void 0 !== e.route && {
                                    disableAutoTrack: !0
                                },
                                ...e
                            })
                        }, []), (0, r.useEffect)(() => {
                            e.route && e.path && function({
                                route: e,
                                path: t
                            }) {
                                var n;
                                null == (n = window.va) || n.call(window, "pageview", {
                                    route: e,
                                    path: t
                                })
                            }({
                                route: e.route,
                                path: e.path
                            })
                        }, [e.route, e.path]), null
                    }
                },
                3977: function(e, t, n) {
                    "use strict";
                    n.d(t, {
                        C6: function() {
                            return r.C6
                        },
                        Mq: function() {
                            return r.Mq
                        },
                        ZF: function() {
                            return r.ZF
                        }
                    });
                    var r = n(5816);
                    (0, r.KN)("firebase", "11.9.1", "app")
                },
                7417: function(e, t, n) {
                        "use strict";
                        n.d(t, {
                            hJ: function() {
                                return e4
                            },
                            Xb: function() {
                                return tl
                            },
                            v0: function() {
                                return nC
                            },
                            Aj: function() {
                                return tc
                            },
                            H5: function() {
                                return Q
                            },
                            w$: function() {
                                return th
                            },
                            LS: function() {
                                return ta
                            },
                            e5: function() {
                                return tu
                            },
                            rh: function() {
                                return tQ
                            },
                            w7: function() {
                                return td
                            }
                        });
                        var r, i = n(5816),
                            s = n(1683),
                            o = n(3333);

                        function a(e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                            return n
                        }
                        "function" == typeof SuppressedError && SuppressedError;
                        var l = n(8463);

                        function u() {
                            return {
                                "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
                            }
                        }
                        let h = new s.LL("auth", "Firebase", u()),
                            c = new o.Yd("@firebase/auth");

                        function d(e, ...t) {
                            c.logLevel <= o.in.ERROR && c.error(`Auth (${i.Jn}): ${e}`, ...t)
                        }

                        function f(e, ...t) {
                            throw y(e, ...t)
                        }

                        function p(e, ...t) {
                            return y(e, ...t)
                        }

                        function g(e, t, n) {
                            let r = Object.assign(Object.assign({}, u()), {
                                [t]: n
                            });
                            return new s.LL("auth", "Firebase", r).create(t, {
                                appName: e.name
                            })
                        }

                        function m(e) {
                            return g(e, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp")
                        }

                        function y(e, ...t) {
                            if ("string" != typeof e) {
                                let n = t[0],
                                    r = [...t.slice(1)];
                                return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r)
                            }
                            return h.create(e, ...t)
                        }

                        function v(e, t, ...n) {
                            if (!e) throw y(t, ...n)
                        }

                        function w(e) {
                            let t = "INTERNAL ASSERTION FAILED: " + e;
                            throw d(t), Error(t)
                        }

                        function _() {
                            var e;
                            return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.href) || ""
                        }

                        function E() {
                            var e;
                            return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.protocol) || null
                        }
                        class b {
                            constructor(e, t) {
                                var n;
                                this.shortDelay = e, this.longDelay = t, n = "Short delay should be less than long delay!", t > e || w(n), this.isMobile = (0, s.uI)() || (0, s.b$)()
                            }
                            get() {
                                return !("undefined" != typeof navigator && navigator && "onLine" in navigator && "boolean" == typeof navigator.onLine && ("http:" === E() || "https:" === E() || (0, s.ru)() || "connection" in navigator)) || navigator.onLine ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
                            }
                        }

                        function I(e, t) {
                            var n, r;
                            n = e.emulator, r = "Emulator should always be set here", n || w(r);
                            let {
                                url: i
                            } = e.emulator;
                            return t ? `${i}${t.startsWith("/")?t.slice(1):t}` : i
                        }
                        class T {
                            static initialize(e, t, n) {
                                this.fetchImpl = e, t && (this.headersImpl = t), n && (this.responseImpl = n)
                            }
                            static fetch() {
                                return this.fetchImpl ? this.fetchImpl : "undefined" != typeof self && "fetch" in self ? self.fetch : "undefined" != typeof globalThis && globalThis.fetch ? globalThis.fetch : "undefined" != typeof fetch ? fetch : void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                            static headers() {
                                return this.headersImpl ? this.headersImpl : "undefined" != typeof self && "Headers" in self ? self.Headers : "undefined" != typeof globalThis && globalThis.Headers ? globalThis.Headers : "undefined" != typeof Headers ? Headers : void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                            static response() {
                                return this.responseImpl ? this.responseImpl : "undefined" != typeof self && "Response" in self ? self.Response : "undefined" != typeof globalThis && globalThis.Response ? globalThis.Response : "undefined" != typeof Response ? Response : void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                        }
                        let C = {
                                CREDENTIAL_MISMATCH: "custom-token-mismatch",
                                MISSING_CUSTOM_TOKEN: "internal-error",
                                INVALID_IDENTIFIER: "invalid-email",
                                MISSING_CONTINUE_URI: "internal-error",
                                INVALID_PASSWORD: "wrong-password",
                                MISSING_PASSWORD: "missing-password",
                                INVALID_LOGIN_CREDENTIALS: "invalid-credential",
                                EMAIL_EXISTS: "email-already-in-use",
                                PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                                INVALID_IDP_RESPONSE: "invalid-credential",
                                INVALID_PENDING_TOKEN: "invalid-credential",
                                FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                                MISSING_REQ_TYPE: "internal-error",
                                EMAIL_NOT_FOUND: "user-not-found",
                                RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                                EXPIRED_OOB_CODE: "expired-action-code",
                                INVALID_OOB_CODE: "invalid-action-code",
                                MISSING_OOB_CODE: "internal-error",
                                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                                INVALID_ID_TOKEN: "invalid-user-token",
                                TOKEN_EXPIRED: "user-token-expired",
                                USER_NOT_FOUND: "user-token-expired",
                                TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                                PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
                                INVALID_CODE: "invalid-verification-code",
                                INVALID_SESSION_INFO: "invalid-verification-id",
                                INVALID_TEMPORARY_PROOF: "invalid-credential",
                                MISSING_SESSION_INFO: "missing-verification-id",
                                SESSION_EXPIRED: "code-expired",
                                MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                                UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                                INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                                ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                                INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                                MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                                MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                                MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                                SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                                SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
                                BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
                                RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
                                MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
                                INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
                                INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
                                MISSING_CLIENT_TYPE: "missing-client-type",
                                MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
                                INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
                                INVALID_REQ_TYPE: "invalid-req-type"
                            },
                            S = ["/v1/accounts:signInWithCustomToken", "/v1/accounts:signInWithEmailLink", "/v1/accounts:signInWithIdp", "/v1/accounts:signInWithPassword", "/v1/accounts:signInWithPhoneNumber", "/v1/token"],
                            A = new b(3e4, 6e4);

                        function k(e, t) {
                            return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
                                tenantId: e.tenantId
                            }) : t
                        }
                        async function R(e, t, n, r, i = {}) {
                            return N(e, i, async () => {
                                let i = {},
                                    o = {};
                                r && ("GET" === t ? o = r : i = {
                                    body: JSON.stringify(r)
                                });
                                let a = (0, s.xO)(Object.assign({
                                        key: e.config.apiKey
                                    }, o)).slice(1),
                                    l = await e._getAdditionalHeaders();
                                l["Content-Type"] = "application/json", e.languageCode && (l["X-Firebase-Locale"] = e.languageCode);
                                let u = Object.assign({
                                    method: t,
                                    headers: l
                                }, i);
                                return (0, s.L_)() || (u.referrerPolicy = "no-referrer"), e.emulatorConfig && (0, s.Xx)(e.emulatorConfig.host) && (u.credentials = "include"), T.fetch()(await P(e, e.config.apiHost, n, a), u)
                            })
                        }
                        async function N(e, t, n) {
                            e._canInitEmulator = !1;
                            let r = Object.assign(Object.assign({}, C), t);
                            try {
                                let t = new D(e),
                                    i = await Promise.race([n(), t.promise]);
                                t.clearNetworkTimeout();
                                let s = await i.json();
                                if ("needConfirmation" in s) throw L(e, "account-exists-with-different-credential", s);
                                if (i.ok && !("errorMessage" in s)) return s; {
                                    let [t, n] = (i.ok ? s.errorMessage : s.error.message).split(" : ");
                                    if ("FEDERATED_USER_ID_ALREADY_LINKED" === t) throw L(e, "credential-already-in-use", s);
                                    if ("EMAIL_EXISTS" === t) throw L(e, "email-already-in-use", s);
                                    if ("USER_DISABLED" === t) throw L(e, "user-disabled", s);
                                    let o = r[t] || t.toLowerCase().replace(/[_\s]+/g, "-");
                                    if (n) throw g(e, o, n);
                                    f(e, o)
                                }
                            } catch (t) {
                                if (t instanceof s.ZR) throw t;
                                f(e, "network-request-failed", {
                                    message: String(t)
                                })
                            }
                        }
                        async function O(e, t, n, r, i = {}) {
                            let s = await R(e, t, n, r, i);
                            return "mfaPendingCredential" in s && f(e, "multi-factor-auth-required", {
                                _serverResponse: s
                            }), s
                        }
                        async function P(e, t, n, r) {
                            let i = `${t}${n}?${r}`,
                                s = e.config.emulator ? I(e.config, i) : `${e.config.apiScheme}://${i}`;
                            return S.includes(n) && (await e._persistenceManagerAvailable, "COOKIE" === e._getPersistenceType()) ? e._getPersistence()._getFinalTarget(s).toString() : s
                        }
                        class D {
                            clearNetworkTimeout() {
                                clearTimeout(this.timer)
                            }
                            constructor(e) {
                                this.auth = e, this.timer = null, this.promise = new Promise((e, t) => {
                                    this.timer = setTimeout(() => t(p(this.auth, "network-request-failed")), A.get())
                                })
                            }
                        }

                        function L(e, t, n) {
                            let r = {
                                appName: e.name
                            };
                            n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
                            let i = p(e, t, r);
                            return i.customData._tokenResponse = n, i
                        }

                        function x(e) {
                            return void 0 !== e && void 0 !== e.enterprise
                        }
                        class M {
                            constructor(e) {
                                if (this.siteKey = "", this.recaptchaEnforcementState = [], void 0 === e.recaptchaKey) throw Error("recaptchaKey undefined");
                                this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState
                            }
                            getProviderEnforcementState(e) {
                                if (!this.recaptchaEnforcementState || 0 === this.recaptchaEnforcementState.length) return null;
                                for (let t of this.recaptchaEnforcementState)
                                    if (t.provider && t.provider === e) return function(e) {
                                        switch (e) {
                                            case "ENFORCE":
                                                return "ENFORCE";
                                            case "AUDIT":
                                                return "AUDIT";
                                            case "OFF":
                                                return "OFF";
                                            default:
                                                return "ENFORCEMENT_STATE_UNSPECIFIED"
                                        }
                                    }(t.enforcementState);
                                return null
                            }
                            isProviderEnabled(e) {
                                return "ENFORCE" === this.getProviderEnforcementState(e) || "AUDIT" === this.getProviderEnforcementState(e)
                            }
                            isAnyProviderEnabled() {
                                return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER")
                            }
                        }
                        async function U(e, t) {
                            return R(e, "GET", "/v2/recaptchaConfig", k(e, t))
                        }
                        async function V(e, t) {
                            return R(e, "POST", "/v1/accounts:delete", t)
                        }
                        async function F(e, t) {
                            return R(e, "POST", "/v1/accounts:lookup", t)
                        }

                        function B(e) {
                            if (e) try {
                                let t = new Date(Number(e));
                                if (!isNaN(t.getTime())) return t.toUTCString()
                            } catch (e) {}
                        }
                        async function j(e, t = !1) {
                            let n = (0, s.m9)(e),
                                r = await n.getIdToken(t),
                                i = q(r);
                            v(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
                            let o = "object" == typeof i.firebase ? i.firebase : void 0,
                                a = null == o ? void 0 : o.sign_in_provider;
                            return {
                                claims: i,
                                token: r,
                                authTime: B($(i.auth_time)),
                                issuedAtTime: B($(i.iat)),
                                expirationTime: B($(i.exp)),
                                signInProvider: a || null,
                                signInSecondFactor: (null == o ? void 0 : o.sign_in_second_factor) || null
                            }
                        }

                        function $(e) {
                            return 1e3 * Number(e)
                        }

                        function q(e) {
                            let [t, n, r] = e.split(".");
                            if (void 0 === t || void 0 === n || void 0 === r) return d("JWT malformed, contained fewer than 3 sections"), null;
                            try {
                                let e = (0, s.tV)(n);
                                if (!e) return d("Failed to decode base64 JWT payload"), null;
                                return JSON.parse(e)
                            } catch (e) {
                                return d("Caught error parsing JWT payload as JSON", null == e ? void 0 : e.toString()), null
                            }
                        }

                        function z(e) {
                            let t = q(e);
                            return v(t, "internal-error"), v(void 0 !== t.exp, "internal-error"), v(void 0 !== t.iat, "internal-error"), Number(t.exp) - Number(t.iat)
                        }
                        async function H(e, t, n = !1) {
                            if (n) return t;
                            try {
                                return await t
                            } catch (t) {
                                throw t instanceof s.ZR && function({
                                    code: e
                                }) {
                                    return "auth/user-disabled" === e || "auth/user-token-expired" === e
                                }(t) && e.auth.currentUser === e && await e.auth.signOut(), t
                            }
                        }
                        class K {
                            constructor(e) {
                                this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
                            }
                            _start() {
                                this.isRunning || (this.isRunning = !0, this.schedule())
                            }
                            _stop() {
                                this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
                            }
                            getInterval(e) {
                                var t;
                                if (!e) return this.errorBackoff = 3e4, Math.max(0, (null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0) - Date.now() - 3e5); {
                                    let e = this.errorBackoff;
                                    return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), e
                                }
                            }
                            schedule(e = !1) {
                                if (!this.isRunning) return;
                                let t = this.getInterval(e);
                                this.timerId = setTimeout(async () => {
                                    await this.iteration()
                                }, t)
                            }
                            async iteration() {
                                try {
                                    await this.user.getIdToken(!0)
                                } catch (e) {
                                    (null == e ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(!0);
                                    return
                                }
                                this.schedule()
                            }
                        }
                        class G {
                            constructor(e, t) {
                                this.createdAt = e, this.lastLoginAt = t, this._initializeTime()
                            }
                            _initializeTime() {
                                this.lastSignInTime = B(this.lastLoginAt), this.creationTime = B(this.createdAt)
                            }
                            _copy(e) {
                                this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
                            }
                            toJSON() {
                                return {
                                    createdAt: this.createdAt,
                                    lastLoginAt: this.lastLoginAt
                                }
                            }
                        }
                        async function W(e) {
                            var t;
                            let n = e.auth,
                                r = await e.getIdToken(),
                                i = await H(e, F(n, {
                                    idToken: r
                                }));
                            v(null == i ? void 0 : i.users.length, n, "internal-error");
                            let s = i.users[0];
                            e._notifyReloadListener(s);
                            let o = (null === (t = s.providerUserInfo) || void 0 === t ? void 0 : t.length) ? X(s.providerUserInfo) : [],
                                a = [...e.providerData.filter(e => !o.some(t => t.providerId === e.providerId)), ...o],
                                l = e.isAnonymous,
                                u = !(e.email && s.passwordHash) && !(null == a ? void 0 : a.length);
                            Object.assign(e, {
                                uid: s.localId,
                                displayName: s.displayName || null,
                                photoURL: s.photoUrl || null,
                                email: s.email || null,
                                emailVerified: s.emailVerified || !1,
                                phoneNumber: s.phoneNumber || null,
                                tenantId: s.tenantId || null,
                                providerData: a,
                                metadata: new G(s.createdAt, s.lastLoginAt),
                                isAnonymous: !!l && u
                            })
                        }
                        async function Q(e) {
                            let t = (0, s.m9)(e);
                            await W(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t)
                        }

                        function X(e) {
                            return e.map(e => {
                                var {
                                    providerId: t
                                } = e, n = a(e, ["providerId"]);
                                return {
                                    providerId: t,
                                    uid: n.rawId || "",
                                    displayName: n.displayName || null,
                                    email: n.email || null,
                                    phoneNumber: n.phoneNumber || null,
                                    photoURL: n.photoUrl || null
                                }
                            })
                        }
                        async function Y(e, t) {
                            let n = await N(e, {}, async () => {
                                let n = (0, s.xO)({
                                        grant_type: "refresh_token",
                                        refresh_token: t
                                    }).slice(1),
                                    {
                                        tokenApiHost: r,
                                        apiKey: i
                                    } = e.config,
                                    o = await P(e, r, "/v1/token", `key=${i}`),
                                    a = await e._getAdditionalHeaders();
                                a["Content-Type"] = "application/x-www-form-urlencoded";
                                let l = {
                                    method: "POST",
                                    headers: a,
                                    body: n
                                };
                                return e.emulatorConfig && (0, s.Xx)(e.emulatorConfig.host) && (l.credentials = "include"), T.fetch()(o, l)
                            });
                            return {
                                accessToken: n.access_token,
                                expiresIn: n.expires_in,
                                refreshToken: n.refresh_token
                            }
                        }
                        async function J(e, t) {
                            return R(e, "POST", "/v2/accounts:revokeToken", k(e, t))
                        }
                        class Z {
                            constructor() {
                                this.refreshToken = null, this.accessToken = null, this.expirationTime = null
                            }
                            get isExpired() {
                                return !this.expirationTime || Date.now() > this.expirationTime - 3e4
                            }
                            updateFromServerResponse(e) {
                                v(e.idToken, "internal-error"), v(void 0 !== e.idToken, "internal-error"), v(void 0 !== e.refreshToken, "internal-error");
                                let t = "expiresIn" in e && void 0 !== e.expiresIn ? Number(e.expiresIn) : z(e.idToken);
                                this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
                            }
                            updateFromIdToken(e) {
                                v(0 !== e.length, "internal-error");
                                let t = z(e);
                                this.updateTokensAndExpiration(e, null, t)
                            }
                            async getToken(e, t = !1) {
                                return t || !this.accessToken || this.isExpired ? (v(this.refreshToken, e, "user-token-expired"), this.refreshToken) ? (await this.refresh(e, this.refreshToken), this.accessToken) : null : this.accessToken
                            }
                            clearRefreshToken() {
                                this.refreshToken = null
                            }
                            async refresh(e, t) {
                                let {
                                    accessToken: n,
                                    refreshToken: r,
                                    expiresIn: i
                                } = await Y(e, t);
                                this.updateTokensAndExpiration(n, r, Number(i))
                            }
                            updateTokensAndExpiration(e, t, n) {
                                this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + 1e3 * n
                            }
                            static fromJSON(e, t) {
                                let {
                                    refreshToken: n,
                                    accessToken: r,
                                    expirationTime: i
                                } = t, s = new Z;
                                return n && (v("string" == typeof n, "internal-error", {
                                    appName: e
                                }), s.refreshToken = n), r && (v("string" == typeof r, "internal-error", {
                                    appName: e
                                }), s.accessToken = r), i && (v("number" == typeof i, "internal-error", {
                                    appName: e
                                }), s.expirationTime = i), s
                            }
                            toJSON() {
                                return {
                                    refreshToken: this.refreshToken,
                                    accessToken: this.accessToken,
                                    expirationTime: this.expirationTime
                                }
                            }
                            _assign(e) {
                                this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
                            }
                            _clone() {
                                return Object.assign(new Z, this.toJSON())
                            }
                            _performRefresh() {
                                return w("not implemented")
                            }
                        }

                        function ee(e, t) {
                            v("string" == typeof e || void 0 === e, "internal-error", {
                                appName: t
                            })
                        }
                        class et {
                            constructor(e) {
                                var {
                                    uid: t,
                                    auth: n,
                                    stsTokenManager: r
                                } = e, i = a(e, ["uid", "auth", "stsTokenManager"]);
                                this.providerId = "firebase", this.proactiveRefresh = new K(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = n, this.stsTokenManager = r, this.accessToken = r.accessToken, this.displayName = i.displayName || null, this.email = i.email || null, this.emailVerified = i.emailVerified || !1, this.phoneNumber = i.phoneNumber || null, this.photoURL = i.photoURL || null, this.isAnonymous = i.isAnonymous || !1, this.tenantId = i.tenantId || null, this.providerData = i.providerData ? [...i.providerData] : [], this.metadata = new G(i.createdAt || void 0, i.lastLoginAt || void 0)
                            }
                            async getIdToken(e) {
                                let t = await H(this, this.stsTokenManager.getToken(this.auth, e));
                                return v(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t
                            }
                            getIdTokenResult(e) {
                                return j(this, e)
                            }
                            reload() {
                                return Q(this)
                            }
                            _assign(e) {
                                this !== e && (v(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map(e => Object.assign({}, e)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
                            }
                            _clone(e) {
                                let t = new et(Object.assign(Object.assign({}, this), {
                                    auth: e,
                                    stsTokenManager: this.stsTokenManager._clone()
                                }));
                                return t.metadata._copy(this.metadata), t
                            }
                            _onReload(e) {
                                v(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
                            }
                            _notifyReloadListener(e) {
                                this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
                            }
                            _startProactiveRefresh() {
                                this.proactiveRefresh._start()
                            }
                            _stopProactiveRefresh() {
                                this.proactiveRefresh._stop()
                            }
                            async _updateTokensIfNecessary(e, t = !1) {
                                let n = !1;
                                e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), t && await W(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this)
                            }
                            async delete() {
                                if ((0, i.rh)(this.auth.app)) return Promise.reject(m(this.auth));
                                let e = await this.getIdToken();
                                return await H(this, V(this.auth, {
                                    idToken: e
                                })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
                            }
                            toJSON() {
                                return Object.assign(Object.assign({
                                    uid: this.uid,
                                    email: this.email || void 0,
                                    emailVerified: this.emailVerified,
                                    displayName: this.displayName || void 0,
                                    isAnonymous: this.isAnonymous,
                                    photoURL: this.photoURL || void 0,
                                    phoneNumber: this.phoneNumber || void 0,
                                    tenantId: this.tenantId || void 0,
                                    providerData: this.providerData.map(e => Object.assign({}, e)),
                                    stsTokenManager: this.stsTokenManager.toJSON(),
                                    _redirectEventId: this._redirectEventId
                                }, this.metadata.toJSON()), {
                                    apiKey: this.auth.config.apiKey,
                                    appName: this.auth.name
                                })
                            }
                            get refreshToken() {
                                return this.stsTokenManager.refreshToken || ""
                            }
                            static _fromJSON(e, t) {
                                var n, r, i, s, o, a, l, u;
                                let h = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
                                    c = null !== (r = t.email) && void 0 !== r ? r : void 0,
                                    d = null !== (i = t.phoneNumber) && void 0 !== i ? i : void 0,
                                    f = null !== (s = t.photoURL) && void 0 !== s ? s : void 0,
                                    p = null !== (o = t.tenantId) && void 0 !== o ? o : void 0,
                                    g = null !== (a = t._redirectEventId) && void 0 !== a ? a : void 0,
                                    m = null !== (l = t.createdAt) && void 0 !== l ? l : void 0,
                                    y = null !== (u = t.lastLoginAt) && void 0 !== u ? u : void 0,
                                    {
                                        uid: w,
                                        emailVerified: _,
                                        isAnonymous: E,
                                        providerData: b,
                                        stsTokenManager: I
                                    } = t;
                                v(w && I, e, "internal-error");
                                let T = Z.fromJSON(this.name, I);
                                v("string" == typeof w, e, "internal-error"), ee(h, e.name), ee(c, e.name), v("boolean" == typeof _, e, "internal-error"), v("boolean" == typeof E, e, "internal-error"), ee(d, e.name), ee(f, e.name), ee(p, e.name), ee(g, e.name), ee(m, e.name), ee(y, e.name);
                                let C = new et({
                                    uid: w,
                                    auth: e,
                                    email: c,
                                    emailVerified: _,
                                    displayName: h,
                                    isAnonymous: E,
                                    photoURL: f,
                                    phoneNumber: d,
                                    tenantId: p,
                                    stsTokenManager: T,
                                    createdAt: m,
                                    lastLoginAt: y
                                });
                                return b && Array.isArray(b) && (C.providerData = b.map(e => Object.assign({}, e))), g && (C._redirectEventId = g), C
                            }
                            static async _fromIdTokenResponse(e, t, n = !1) {
                                let r = new Z;
                                r.updateFromServerResponse(t);
                                let i = new et({
                                    uid: t.localId,
                                    auth: e,
                                    stsTokenManager: r,
                                    isAnonymous: n
                                });
                                return await W(i), i
                            }
                            static async _fromGetAccountInfoResponse(e, t, n) {
                                let r = t.users[0];
                                v(void 0 !== r.localId, "internal-error");
                                let i = void 0 !== r.providerUserInfo ? X(r.providerUserInfo) : [],
                                    s = !(r.email && r.passwordHash) && !(null == i ? void 0 : i.length),
                                    o = new Z;
                                o.updateFromIdToken(n);
                                let a = new et({
                                    uid: r.localId,
                                    auth: e,
                                    stsTokenManager: o,
                                    isAnonymous: s
                                });
                                return Object.assign(a, {
                                    uid: r.localId,
                                    displayName: r.displayName || null,
                                    photoURL: r.photoUrl || null,
                                    email: r.email || null,
                                    emailVerified: r.emailVerified || !1,
                                    phoneNumber: r.phoneNumber || null,
                                    tenantId: r.tenantId || null,
                                    providerData: i,
                                    metadata: new G(r.createdAt, r.lastLoginAt),
                                    isAnonymous: !(r.email && r.passwordHash) && !(null == i ? void 0 : i.length)
                                }), a
                            }
                        }
                        let en = new Map;

                        function er(e) {
                            var t, n;
                            t = "Expected a class definition", e instanceof Function || w(t);
                            let r = en.get(e);
                            return r ? (n = "Instance stored in cache mismatched with class", r instanceof e || w(n)) : (r = new e, en.set(e, r)), r
                        }
                        class ei {
                            constructor() {
                                this.type = "NONE", this.storage = {}
                            }
                            async _isAvailable() {
                                return !0
                            }
                            async _set(e, t) {
                                this.storage[e] = t
                            }
                            async _get(e) {
                                let t = this.storage[e];
                                return void 0 === t ? null : t
                            }
                            async _remove(e) {
                                delete this.storage[e]
                            }
                            _addListener(e, t) {}
                            _removeListener(e, t) {}
                        }

                        function es(e, t, n) {
                            return `firebase:${e}:${t}:${n}`
                        }
                        ei.type = "NONE";
                        class eo {
                            constructor(e, t, n) {
                                this.persistence = e, this.auth = t, this.userKey = n;
                                let {
                                    config: r,
                                    name: i
                                } = this.auth;
                                this.fullUserKey = es(this.userKey, r.apiKey, i), this.fullPersistenceKey = es("persistence", r.apiKey, i), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
                            }
                            setCurrentUser(e) {
                                return this.persistence._set(this.fullUserKey, e.toJSON())
                            }
                            async getCurrentUser() {
                                let e = await this.persistence._get(this.fullUserKey);
                                if (!e) return null;
                                if ("string" == typeof e) {
                                    let t = await F(this.auth, {
                                        idToken: e
                                    }).catch(() => void 0);
                                    return t ? et._fromGetAccountInfoResponse(this.auth, t, e) : null
                                }
                                return et._fromJSON(this.auth, e)
                            }
                            removeCurrentUser() {
                                return this.persistence._remove(this.fullUserKey)
                            }
                            savePersistenceForRedirect() {
                                return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
                            }
                            async setPersistence(e) {
                                if (this.persistence === e) return;
                                let t = await this.getCurrentUser();
                                if (await this.removeCurrentUser(), this.persistence = e, t) return this.setCurrentUser(t)
                            }
                            delete() {
                                this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
                            }
                            static async create(e, t, n = "authUser") {
                                if (!t.length) return new eo(er(ei), e, n);
                                let r = (await Promise.all(t.map(async e => {
                                        if (await e._isAvailable()) return e
                                    }))).filter(e => e),
                                    i = r[0] || er(ei),
                                    s = es(n, e.config.apiKey, e.name),
                                    o = null;
                                for (let n of t) try {
                                    let t = await n._get(s);
                                    if (t) {
                                        let r;
                                        if ("string" == typeof t) {
                                            let n = await F(e, {
                                                idToken: t
                                            }).catch(() => void 0);
                                            if (!n) break;
                                            r = await et._fromGetAccountInfoResponse(e, n, t)
                                        } else r = et._fromJSON(e, t);
                                        n !== i && (o = r), i = n;
                                        break
                                    }
                                } catch (e) {}
                                let a = r.filter(e => e._shouldAllowMigration);
                                return i._shouldAllowMigration && a.length && (i = a[0], o && await i._set(s, o.toJSON()), await Promise.all(t.map(async e => {
                                    if (e !== i) try {
                                        await e._remove(s)
                                    } catch (e) {}
                                }))), new eo(i, e, n)
                            }
                        }

                        function ea(e) {
                            let t = e.toLowerCase();
                            if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
                            if (ec(t)) return "IEMobile";
                            if (t.includes("msie") || t.includes("trident/")) return "IE"; {
                                if (t.includes("edge/")) return "Edge";
                                if (el(t)) return "Firefox";
                                if (t.includes("silk/")) return "Silk";
                                if (ef(t)) return "Blackberry";
                                if (ep(t)) return "Webos";
                                if (eu(t)) return "Safari";
                                if ((t.includes("chrome/") || eh(t)) && !t.includes("edge/")) return "Chrome";
                                if (ed(t)) return "Android";
                                let n = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
                                if ((null == n ? void 0 : n.length) === 2) return n[1]
                            }
                            return "Other"
                        }

                        function el(e = (0, s.z$)()) {
                            return /firefox\//i.test(e)
                        }

                        function eu(e = (0, s.z$)()) {
                            let t = e.toLowerCase();
                            return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
                        }

                        function eh(e = (0, s.z$)()) {
                            return /crios\//i.test(e)
                        }

                        function ec(e = (0, s.z$)()) {
                            return /iemobile/i.test(e)
                        }

                        function ed(e = (0, s.z$)()) {
                            return /android/i.test(e)
                        }

                        function ef(e = (0, s.z$)()) {
                            return /blackberry/i.test(e)
                        }

                        function ep(e = (0, s.z$)()) {
                            return /webos/i.test(e)
                        }

                        function eg(e = (0, s.z$)()) {
                            return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e)
                        }

                        function em(e = (0, s.z$)()) {
                            return eg(e) || ed(e) || ep(e) || ef(e) || /windows phone/i.test(e) || ec(e)
                        }

                        function ey(e, t = []) {
                            let n;
                            switch (e) {
                                case "Browser":
                                    n = ea((0, s.z$)());
                                    break;
                                case "Worker":
                                    n = `${ea((0,s.z$)())}-${e}`;
                                    break;
                                default:
                                    n = e
                            }
                            let r = t.length ? t.join(",") : "FirebaseCore-web";
                            return `${n}/JsCore/${i.Jn}/${r}`
                        }
                        class ev {
                            constructor(e) {
                                this.auth = e, this.queue = []
                            }
                            pushCallback(e, t) {
                                let n = t => new Promise((n, r) => {
                                    try {
                                        let r = e(t);
                                        n(r)
                                    } catch (e) {
                                        r(e)
                                    }
                                });
                                n.onAbort = t, this.queue.push(n);
                                let r = this.queue.length - 1;
                                return () => {
                                    this.queue[r] = () => Promise.resolve()
                                }
                            }
                            async runMiddleware(e) {
                                if (this.auth.currentUser === e) return;
                                let t = [];
                                try {
                                    for (let n of this.queue) await n(e), n.onAbort && t.push(n.onAbort)
                                } catch (e) {
                                    for (let e of (t.reverse(), t)) try {
                                        e()
                                    } catch (e) {}
                                    throw this.auth._errorFactory.create("login-blocked", {
                                        originalMessage: null == e ? void 0 : e.message
                                    })
                                }
                            }
                        }
                        async function ew(e, t = {}) {
                            return R(e, "GET", "/v2/passwordPolicy", k(e, t))
                        }
                        class e_ {
                            constructor(e) {
                                var t, n, r, i;
                                let s = e.customStrengthOptions;
                                this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = null !== (t = s.minPasswordLength) && void 0 !== t ? t : 6, s.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength), void 0 !== s.containsLowercaseCharacter && (this.customStrengthOptions.containsLowercaseLetter = s.containsLowercaseCharacter), void 0 !== s.containsUppercaseCharacter && (this.customStrengthOptions.containsUppercaseLetter = s.containsUppercaseCharacter), void 0 !== s.containsNumericCharacter && (this.customStrengthOptions.containsNumericCharacter = s.containsNumericCharacter), void 0 !== s.containsNonAlphanumericCharacter && (this.customStrengthOptions.containsNonAlphanumericCharacter = s.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = null !== (r = null === (n = e.allowedNonAlphanumericCharacters) || void 0 === n ? void 0 : n.join("")) && void 0 !== r ? r : "", this.forceUpgradeOnSignin = null !== (i = e.forceUpgradeOnSignin) && void 0 !== i && i, this.schemaVersion = e.schemaVersion
                            }
                            validatePassword(e) {
                                var t, n, r, i, s, o;
                                let a = {
                                    isValid: !0,
                                    passwordPolicy: this
                                };
                                return this.validatePasswordLengthOptions(e, a), this.validatePasswordCharacterOptions(e, a), a.isValid && (a.isValid = null === (t = a.meetsMinPasswordLength) || void 0 === t || t), a.isValid && (a.isValid = null === (n = a.meetsMaxPasswordLength) || void 0 === n || n), a.isValid && (a.isValid = null === (r = a.containsLowercaseLetter) || void 0 === r || r), a.isValid && (a.isValid = null === (i = a.containsUppercaseLetter) || void 0 === i || i), a.isValid && (a.isValid = null === (s = a.containsNumericCharacter) || void 0 === s || s), a.isValid && (a.isValid = null === (o = a.containsNonAlphanumericCharacter) || void 0 === o || o), a
                            }
                            validatePasswordLengthOptions(e, t) {
                                let n = this.customStrengthOptions.minPasswordLength,
                                    r = this.customStrengthOptions.maxPasswordLength;
                                n && (t.meetsMinPasswordLength = e.length >= n), r && (t.meetsMaxPasswordLength = e.length <= r)
                            }
                            validatePasswordCharacterOptions(e, t) {
                                let n;
                                this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
                                for (let r = 0; r < e.length; r++) n = e.charAt(r), this.updatePasswordCharacterOptionsStatuses(t, n >= "a" && n <= "z", n >= "A" && n <= "Z", n >= "0" && n <= "9", this.allowedNonAlphanumericCharacters.includes(n))
                            }
                            updatePasswordCharacterOptionsStatuses(e, t, n, r, i) {
                                this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = r)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = i))
                            }
                        }
                        class eE {
                            constructor(e, t, n, r) {
                                this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = n, this.config = r, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new eI(this), this.idTokenSubscription = new eI(this), this.beforeStateQueue = new ev(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = h, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
                                    appVerificationDisabledForTesting: !1
                                }, this.frameworks = [], this.name = e.name, this.clientVersion = r.sdkClientVersion, this._persistenceManagerAvailable = new Promise(e => this._resolvePersistenceManagerAvailable = e)
                            }
                            _initializeWithPersistence(e, t) {
                                return t && (this._popupRedirectResolver = er(t)), this._initializationPromise = this.queue(async () => {
                                    var n, r, i;
                                    if (!this._deleted && (this.persistenceManager = await eo.create(this, e), null === (n = this._resolvePersistenceManagerAvailable) || void 0 === n || n.call(this), !this._deleted)) {
                                        if (null === (r = this._popupRedirectResolver) || void 0 === r ? void 0 : r._shouldInitProactively) try {
                                            await this._popupRedirectResolver._initialize(this)
                                        } catch (e) {}
                                        await this.initializeCurrentUser(t), this.lastNotifiedUid = (null === (i = this.currentUser) || void 0 === i ? void 0 : i.uid) || null, this._deleted || (this._isInitialized = !0)
                                    }
                                }), this._initializationPromise
                            }
                            async _onStorageEvent() {
                                if (this._deleted) return;
                                let e = await this.assertedPersistence.getCurrentUser();
                                if (this.currentUser || e) {
                                    if (this.currentUser && e && this.currentUser.uid === e.uid) {
                                        this._currentUser._assign(e), await this.currentUser.getIdToken();
                                        return
                                    }
                                    await this._updateCurrentUser(e, !0)
                                }
                            }
                            async initializeCurrentUserFromIdToken(e) {
                                try {
                                    let t = await F(this, {
                                            idToken: e
                                        }),
                                        n = await et._fromGetAccountInfoResponse(this, t, e);
                                    await this.directlySetCurrentUser(n)
                                } catch (e) {
                                    console.warn("FirebaseServerApp could not login user with provided authIdToken: ", e), await this.directlySetCurrentUser(null)
                                }
                            }
                            async initializeCurrentUser(e) {
                                var t;
                                if ((0, i.rh)(this.app)) {
                                    let e = this.app.settings.authIdToken;
                                    return e ? new Promise(t => {
                                        setTimeout(() => this.initializeCurrentUserFromIdToken(e).then(t, t))
                                    }) : this.directlySetCurrentUser(null)
                                }
                                let n = await this.assertedPersistence.getCurrentUser(),
                                    r = n,
                                    s = !1;
                                if (e && this.config.authDomain) {
                                    await this.getOrInitRedirectPersistenceManager();
                                    let n = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId,
                                        i = null == r ? void 0 : r._redirectEventId,
                                        o = await this.tryRedirectSignIn(e);
                                    (!n || n === i) && (null == o ? void 0 : o.user) && (r = o.user, s = !0)
                                }
                                if (!r) return this.directlySetCurrentUser(null);
                                if (!r._redirectEventId) {
                                    if (s) try {
                                        await this.beforeStateQueue.runMiddleware(r)
                                    } catch (e) {
                                        r = n, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e))
                                    }
                                    return r ? this.reloadAndSetCurrentUserOrClear(r) : this.directlySetCurrentUser(null)
                                }
                                return (v(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === r._redirectEventId) ? this.directlySetCurrentUser(r) : this.reloadAndSetCurrentUserOrClear(r)
                            }
                            async tryRedirectSignIn(e) {
                                let t = null;
                                try {
                                    t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
                                } catch (e) {
                                    await this._setRedirectUser(null)
                                }
                                return t
                            }
                            async reloadAndSetCurrentUserOrClear(e) {
                                try {
                                    await W(e)
                                } catch (e) {
                                    if ((null == e ? void 0 : e.code) !== "auth/network-request-failed") return this.directlySetCurrentUser(null)
                                }
                                return this.directlySetCurrentUser(e)
                            }
                            useDeviceLanguage() {
                                this.languageCode = function() {
                                    if ("undefined" == typeof navigator) return null;
                                    let e = navigator;
                                    return e.languages && e.languages[0] || e.language || null
                                }()
                            }
                            async _delete() {
                                this._deleted = !0
                            }
                            async updateCurrentUser(e) {
                                if ((0, i.rh)(this.app)) return Promise.reject(m(this));
                                let t = e ? (0, s.m9)(e) : null;
                                return t && v(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this))
                            }
                            async _updateCurrentUser(e, t = !1) {
                                if (!this._deleted) return e && v(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
                                    await this.directlySetCurrentUser(e), this.notifyAuthListeners()
                                })
                            }
                            async signOut() {
                                return (0, i.rh)(this.app) ? Promise.reject(m(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0))
                            }
                            setPersistence(e) {
                                return (0, i.rh)(this.app) ? Promise.reject(m(this)) : this.queue(async () => {
                                    await this.assertedPersistence.setPersistence(er(e))
                                })
                            }
                            _getRecaptchaConfig() {
                                return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
                            }
                            async validatePassword(e) {
                                this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
                                let t = this._getPasswordPolicyInternal();
                                return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e)
                            }
                            _getPasswordPolicyInternal() {
                                return null === this.tenantId ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
                            }
                            async _updatePasswordPolicy() {
                                let e = new e_(await ew(this));
                                null === this.tenantId ? this._projectPasswordPolicy = e : this._tenantPasswordPolicies[this.tenantId] = e
                            }
                            _getPersistenceType() {
                                return this.assertedPersistence.persistence.type
                            }
                            _getPersistence() {
                                return this.assertedPersistence.persistence
                            }
                            _updateErrorMap(e) {
                                this._errorFactory = new s.LL("auth", "Firebase", e())
                            }
                            onAuthStateChanged(e, t, n) {
                                return this.registerStateListener(this.authStateSubscription, e, t, n)
                            }
                            beforeAuthStateChanged(e, t) {
                                return this.beforeStateQueue.pushCallback(e, t)
                            }
                            onIdTokenChanged(e, t, n) {
                                return this.registerStateListener(this.idTokenSubscription, e, t, n)
                            }
                            authStateReady() {
                                return new Promise((e, t) => {
                                    if (this.currentUser) e();
                                    else {
                                        let n = this.onAuthStateChanged(() => {
                                            n(), e()
                                        }, t)
                                    }
                                })
                            }
                            async revokeAccessToken(e) {
                                if (this.currentUser) {
                                    let t = {
                                        providerId: "apple.com",
                                        tokenType: "ACCESS_TOKEN",
                                        token: e,
                                        idToken: await this.currentUser.getIdToken()
                                    };
                                    null != this.tenantId && (t.tenantId = this.tenantId), await J(this, t)
                                }
                            }
                            toJSON() {
                                var e;
                                return {
                                    apiKey: this.config.apiKey,
                                    authDomain: this.config.authDomain,
                                    appName: this.name,
                                    currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON()
                                }
                            }
                            async _setRedirectUser(e, t) {
                                let n = await this.getOrInitRedirectPersistenceManager(t);
                                return null === e ? n.removeCurrentUser() : n.setCurrentUser(e)
                            }
                            async getOrInitRedirectPersistenceManager(e) {
                                if (!this.redirectPersistenceManager) {
                                    let t = e && er(e) || this._popupRedirectResolver;
                                    v(t, this, "argument-error"), this.redirectPersistenceManager = await eo.create(this, [er(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
                                }
                                return this.redirectPersistenceManager
                            }
                            async _redirectUserForId(e) {
                                var t, n;
                                return (this._isInitialized && await this.queue(async () => {}), (null === (t = this._currentUser) || void 0 === t ? void 0 : t._redirectEventId) === e) ? this._currentUser : (null === (n = this.redirectUser) || void 0 === n ? void 0 : n._redirectEventId) === e ? this.redirectUser : null
                            }
                            async _persistUserIfCurrent(e) {
                                if (e === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(e))
                            }
                            _notifyListenersIfCurrent(e) {
                                e === this.currentUser && this.notifyAuthListeners()
                            }
                            _key() {
                                return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
                            }
                            _startProactiveRefresh() {
                                this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
                            }
                            _stopProactiveRefresh() {
                                this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
                            }
                            get _currentUser() {
                                return this.currentUser
                            }
                            notifyAuthListeners() {
                                var e, t;
                                if (!this._isInitialized) return;
                                this.idTokenSubscription.next(this.currentUser);
                                let n = null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) && void 0 !== t ? t : null;
                                this.lastNotifiedUid !== n && (this.lastNotifiedUid = n, this.authStateSubscription.next(this.currentUser))
                            }
                            registerStateListener(e, t, n, r) {
                                if (this._deleted) return () => {};
                                let i = "function" == typeof t ? t : t.next.bind(t),
                                    s = !1,
                                    o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
                                if (v(o, this, "internal-error"), o.then(() => {
                                        s || i(this.currentUser)
                                    }), "function" == typeof t) {
                                    let i = e.addObserver(t, n, r);
                                    return () => {
                                        s = !0, i()
                                    }
                                } {
                                    let n = e.addObserver(t);
                                    return () => {
                                        s = !0, n()
                                    }
                                }
                            }
                            async directlySetCurrentUser(e) {
                                this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
                            }
                            queue(e) {
                                return this.operations = this.operations.then(e, e), this.operations
                            }
                            get assertedPersistence() {
                                return v(this.persistenceManager, this, "internal-error"), this.persistenceManager
                            }
                            _logFramework(e) {
                                !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = ey(this.config.clientPlatform, this._getFrameworks()))
                            }
                            _getFrameworks() {
                                return this.frameworks
                            }
                            async _getAdditionalHeaders() {
                                var e;
                                let t = {
                                    "X-Client-Version": this.clientVersion
                                };
                                this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
                                let n = await (null === (e = this.heartbeatServiceProvider.getImmediate({
                                    optional: !0
                                })) || void 0 === e ? void 0 : e.getHeartbeatsHeader());
                                n && (t["X-Firebase-Client"] = n);
                                let r = await this._getAppCheckToken();
                                return r && (t["X-Firebase-AppCheck"] = r), t
                            }
                            async _getAppCheckToken() {
                                var e;
                                if ((0, i.rh)(this.app) && this.app.settings.appCheckToken) return this.app.settings.appCheckToken;
                                let t = await (null === (e = this.appCheckServiceProvider.getImmediate({
                                    optional: !0
                                })) || void 0 === e ? void 0 : e.getToken());
                                return (null == t ? void 0 : t.error) && function(e, ...t) {
                                    c.logLevel <= o.in.WARN && c.warn(`Auth (${i.Jn}): ${e}`, ...t)
                                }(`Error while retrieving App Check token: ${t.error}`), null == t ? void 0 : t.token
                            }
                        }

                        function eb(e) {
                            return (0, s.m9)(e)
                        }
                        class eI {
                            constructor(e) {
                                this.auth = e, this.observer = null, this.addObserver = (0, s.ne)(e => this.observer = e)
                            }
                            get next() {
                                return v(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
                            }
                        }
                        let eT = {
                            async loadJS() {
                                throw Error("Unable to load external scripts")
                            },
                            recaptchaV2Script: "",
                            recaptchaEnterpriseScript: "",
                            gapiScript: ""
                        };

                        function eC(e) {
                            return `__${e}${Math.floor(1e6*Math.random())}`
                        }
                        class eS {
                            constructor() {
                                this.enterprise = new eA
                            }
                            ready(e) {
                                e()
                            }
                            execute(e, t) {
                                return Promise.resolve("token")
                            }
                            render(e, t) {
                                return ""
                            }
                        }
                        class eA {
                            ready(e) {
                                e()
                            }
                            execute(e, t) {
                                return Promise.resolve("token")
                            }
                            render(e, t) {
                                return ""
                            }
                        }
                        let ek = "NO_RECAPTCHA";
                        class eR {
                            constructor(e) {
                                this.type = "recaptcha-enterprise", this.auth = eb(e)
                            }
                            async verify(e = "verify", t = !1) {
                                async function n(e) {
                                    if (!t) {
                                        if (null == e.tenantId && null != e._agentRecaptchaConfig) return e._agentRecaptchaConfig.siteKey;
                                        if (null != e.tenantId && void 0 !== e._tenantRecaptchaConfigs[e.tenantId]) return e._tenantRecaptchaConfigs[e.tenantId].siteKey
                                    }
                                    return new Promise(async (t, n) => {
                                        U(e, {
                                            clientType: "CLIENT_TYPE_WEB",
                                            version: "RECAPTCHA_ENTERPRISE"
                                        }).then(r => {
                                            if (void 0 === r.recaptchaKey) n(Error("recaptcha Enterprise site key undefined"));
                                            else {
                                                let n = new M(r);
                                                return null == e.tenantId ? e._agentRecaptchaConfig = n : e._tenantRecaptchaConfigs[e.tenantId] = n, t(n.siteKey)
                                            }
                                        }).catch(e => {
                                            n(e)
                                        })
                                    })
                                }

                                function r(t, n, r) {
                                    let i = window.grecaptcha;
                                    x(i) ? i.enterprise.ready(() => {
                                        i.enterprise.execute(t, {
                                            action: e
                                        }).then(e => {
                                            n(e)
                                        }).catch(() => {
                                            n(ek)
                                        })
                                    }) : r(Error("No reCAPTCHA enterprise script loaded."))
                                }
                                return this.auth.settings.appVerificationDisabledForTesting ? new eS().execute("siteKey", {
                                    action: "verify"
                                }) : new Promise((e, i) => {
                                    n(this.auth).then(n => {
                                        if (!t && x(window.grecaptcha)) r(n, e, i);
                                        else {
                                            var s;
                                            if ("undefined" == typeof window) {
                                                i(Error("RecaptchaVerifier is only supported in browser"));
                                                return
                                            }
                                            let t = eT.recaptchaEnterpriseScript;
                                            0 !== t.length && (t += n), (s = t, eT.loadJS(s)).then(() => {
                                                r(n, e, i)
                                            }).catch(e => {
                                                i(e)
                                            })
                                        }
                                    }).catch(e => {
                                        i(e)
                                    })
                                })
                            }
                        }
                        async function eN(e, t, n, r = !1, i = !1) {
                            let s;
                            let o = new eR(e);
                            if (i) s = ek;
                            else try {
                                s = await o.verify(n)
                            } catch (e) {
                                s = await o.verify(n, !0)
                            }
                            let a = Object.assign({}, t);
                            if ("mfaSmsEnrollment" === n || "mfaSmsSignIn" === n) {
                                if ("phoneEnrollmentInfo" in a) {
                                    let e = a.phoneEnrollmentInfo.phoneNumber,
                                        t = a.phoneEnrollmentInfo.recaptchaToken;
                                    Object.assign(a, {
                                        phoneEnrollmentInfo: {
                                            phoneNumber: e,
                                            recaptchaToken: t,
                                            captchaResponse: s,
                                            clientType: "CLIENT_TYPE_WEB",
                                            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
                                        }
                                    })
                                } else if ("phoneSignInInfo" in a) {
                                    let e = a.phoneSignInInfo.recaptchaToken;
                                    Object.assign(a, {
                                        phoneSignInInfo: {
                                            recaptchaToken: e,
                                            captchaResponse: s,
                                            clientType: "CLIENT_TYPE_WEB",
                                            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
                                        }
                                    })
                                }
                                return a
                            }
                            return r ? Object.assign(a, {
                                captchaResp: s
                            }) : Object.assign(a, {
                                captchaResponse: s
                            }), Object.assign(a, {
                                clientType: "CLIENT_TYPE_WEB"
                            }), Object.assign(a, {
                                recaptchaVersion: "RECAPTCHA_ENTERPRISE"
                            }), a
                        }
                        async function eO(e, t, n, r, i) {
                            var s, o;
                            if ("EMAIL_PASSWORD_PROVIDER" === i) {
                                if (null === (s = e._getRecaptchaConfig()) || void 0 === s || !s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) return r(e, t).catch(async i => {
                                    if ("auth/missing-recaptcha-token" !== i.code) return Promise.reject(i); {
                                        console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
                                        let i = await eN(e, t, n, "getOobCode" === n);
                                        return r(e, i)
                                    }
                                }); {
                                    let i = await eN(e, t, n, "getOobCode" === n);
                                    return r(e, i)
                                }
                            }
                            if ("PHONE_PROVIDER" !== i) return Promise.reject(i + " provider is not supported.");
                            if (null === (o = e._getRecaptchaConfig()) || void 0 === o ? void 0 : o.isProviderEnabled("PHONE_PROVIDER")) {
                                let i = await eN(e, t, n);
                                return r(e, i).catch(async i => {
                                    var s;
                                    if ((null === (s = e._getRecaptchaConfig()) || void 0 === s ? void 0 : s.getProviderEnforcementState("PHONE_PROVIDER")) === "AUDIT" && ("auth/missing-recaptcha-token" === i.code || "auth/invalid-app-credential" === i.code)) {
                                        console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);
                                        let i = await eN(e, t, n, !1, !0);
                                        return r(e, i)
                                    }
                                    return Promise.reject(i)
                                })
                            } {
                                let i = await eN(e, t, n, !1, !0);
                                return r(e, i)
                            }
                        }
                        async function eP(e) {
                            let t = eb(e),
                                n = new M(await U(t, {
                                    clientType: "CLIENT_TYPE_WEB",
                                    version: "RECAPTCHA_ENTERPRISE"
                                }));
                            null == t.tenantId ? t._agentRecaptchaConfig = n : t._tenantRecaptchaConfigs[t.tenantId] = n, n.isAnyProviderEnabled() && new eR(t).verify()
                        }

                        function eD(e) {
                            let t = e.indexOf(":");
                            return t < 0 ? "" : e.substr(0, t + 1)
                        }

                        function eL(e) {
                            if (!e) return null;
                            let t = Number(e);
                            return isNaN(t) ? null : t
                        }
                        class ex {
                            constructor(e, t) {
                                this.providerId = e, this.signInMethod = t
                            }
                            toJSON() {
                                return w("not implemented")
                            }
                            _getIdTokenResponse(e) {
                                return w("not implemented")
                            }
                            _linkToIdToken(e, t) {
                                return w("not implemented")
                            }
                            _getReauthenticationResolver(e) {
                                return w("not implemented")
                            }
                        }
                        async function eM(e, t) {
                            return R(e, "POST", "/v1/accounts:signUp", t)
                        }
                        async function eU(e, t) {
                            return O(e, "POST", "/v1/accounts:signInWithPassword", k(e, t))
                        }
                        async function eV(e, t) {
                            return R(e, "POST", "/v1/accounts:sendOobCode", k(e, t))
                        }
                        async function eF(e, t) {
                            return eV(e, t)
                        }
                        async function eB(e, t) {
                            return eV(e, t)
                        }
                        async function ej(e, t) {
                            return O(e, "POST", "/v1/accounts:signInWithEmailLink", k(e, t))
                        }
                        async function e$(e, t) {
                            return O(e, "POST", "/v1/accounts:signInWithEmailLink", k(e, t))
                        }
                        class eq extends ex {
                            constructor(e, t, n, r = null) {
                                super("password", n), this._email = e, this._password = t, this._tenantId = r
                            }
                            static _fromEmailAndPassword(e, t) {
                                return new eq(e, t, "password")
                            }
                            static _fromEmailAndCode(e, t, n = null) {
                                return new eq(e, t, "emailLink", n)
                            }
                            toJSON() {
                                return {
                                    email: this._email,
                                    password: this._password,
                                    signInMethod: this.signInMethod,
                                    tenantId: this._tenantId
                                }
                            }
                            static fromJSON(e) {
                                let t = "string" == typeof e ? JSON.parse(e) : e;
                                if ((null == t ? void 0 : t.email) && (null == t ? void 0 : t.password)) {
                                    if ("password" === t.signInMethod) return this._fromEmailAndPassword(t.email, t.password);
                                    if ("emailLink" === t.signInMethod) return this._fromEmailAndCode(t.email, t.password, t.tenantId)
                                }
                                return null
                            }
                            async _getIdTokenResponse(e) {
                                switch (this.signInMethod) {
                                    case "password":
                                        return eO(e, {
                                            returnSecureToken: !0,
                                            email: this._email,
                                            password: this._password,
                                            clientType: "CLIENT_TYPE_WEB"
                                        }, "signInWithPassword", eU, "EMAIL_PASSWORD_PROVIDER");
                                    case "emailLink":
                                        return ej(e, {
                                            email: this._email,
                                            oobCode: this._password
                                        });
                                    default:
                                        f(e, "internal-error")
                                }
                            }
                            async _linkToIdToken(e, t) {
                                switch (this.signInMethod) {
                                    case "password":
                                        return eO(e, {
                                            idToken: t,
                                            returnSecureToken: !0,
                                            email: this._email,
                                            password: this._password,
                                            clientType: "CLIENT_TYPE_WEB"
                                        }, "signUpPassword", eM, "EMAIL_PASSWORD_PROVIDER");
                                    case "emailLink":
                                        return e$(e, {
                                            idToken: t,
                                            email: this._email,
                                            oobCode: this._password
                                        });
                                    default:
                                        f(e, "internal-error")
                                }
                            }
                            _getReauthenticationResolver(e) {
                                return this._getIdTokenResponse(e)
                            }
                        }
                        async function ez(e, t) {
                            return O(e, "POST", "/v1/accounts:signInWithIdp", k(e, t))
                        }
                        class eH extends ex {
                            constructor() {
                                super(...arguments), this.pendingToken = null
                            }
                            static _fromParams(e) {
                                let t = new eH(e.providerId, e.signInMethod);
                                return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : f("argument-error"), t
                            }
                            toJSON() {
                                return {
                                    idToken: this.idToken,
                                    accessToken: this.accessToken,
                                    secret: this.secret,
                                    nonce: this.nonce,
                                    pendingToken: this.pendingToken,
                                    providerId: this.providerId,
                                    signInMethod: this.signInMethod
                                }
                            }
                            static fromJSON(e) {
                                let t = "string" == typeof e ? JSON.parse(e) : e,
                                    {
                                        providerId: n,
                                        signInMethod: r
                                    } = t,
                                    i = a(t, ["providerId", "signInMethod"]);
                                if (!n || !r) return null;
                                let s = new eH(n, r);
                                return s.idToken = i.idToken || void 0, s.accessToken = i.accessToken || void 0, s.secret = i.secret, s.nonce = i.nonce, s.pendingToken = i.pendingToken || null, s
                            }
                            _getIdTokenResponse(e) {
                                return ez(e, this.buildRequest())
                            }
                            _linkToIdToken(e, t) {
                                let n = this.buildRequest();
                                return n.idToken = t, ez(e, n)
                            }
                            _getReauthenticationResolver(e) {
                                let t = this.buildRequest();
                                return t.autoCreate = !1, ez(e, t)
                            }
                            buildRequest() {
                                let e = {
                                    requestUri: "http://localhost",
                                    returnSecureToken: !0
                                };
                                if (this.pendingToken) e.pendingToken = this.pendingToken;
                                else {
                                    let t = {};
                                    this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = (0, s.xO)(t)
                                }
                                return e
                            }
                        }
                        async function eK(e, t) {
                            return R(e, "POST", "/v1/accounts:sendVerificationCode", k(e, t))
                        }
                        async function eG(e, t) {
                            return O(e, "POST", "/v1/accounts:signInWithPhoneNumber", k(e, t))
                        }
                        async function eW(e, t) {
                            let n = await O(e, "POST", "/v1/accounts:signInWithPhoneNumber", k(e, t));
                            if (n.temporaryProof) throw L(e, "account-exists-with-different-credential", n);
                            return n
                        }
                        let eQ = {
                            USER_NOT_FOUND: "user-not-found"
                        };
                        async function eX(e, t) {
                            return O(e, "POST", "/v1/accounts:signInWithPhoneNumber", k(e, Object.assign(Object.assign({}, t), {
                                operation: "REAUTH"
                            })), eQ)
                        }
                        class eY extends ex {
                            constructor(e) {
                                super("phone", "phone"), this.params = e
                            }
                            static _fromVerification(e, t) {
                                return new eY({
                                    verificationId: e,
                                    verificationCode: t
                                })
                            }
                            static _fromTokenResponse(e, t) {
                                return new eY({
                                    phoneNumber: e,
                                    temporaryProof: t
                                })
                            }
                            _getIdTokenResponse(e) {
                                return eG(e, this._makeVerificationRequest())
                            }
                            _linkToIdToken(e, t) {
                                return eW(e, Object.assign({
                                    idToken: t
                                }, this._makeVerificationRequest()))
                            }
                            _getReauthenticationResolver(e) {
                                return eX(e, this._makeVerificationRequest())
                            }
                            _makeVerificationRequest() {
                                let {
                                    temporaryProof: e,
                                    phoneNumber: t,
                                    verificationId: n,
                                    verificationCode: r
                                } = this.params;
                                return e && t ? {
                                    temporaryProof: e,
                                    phoneNumber: t
                                } : {
                                    sessionInfo: n,
                                    code: r
                                }
                            }
                            toJSON() {
                                let e = {
                                    providerId: this.providerId
                                };
                                return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode), this.params.verificationId && (e.verificationId = this.params.verificationId), e
                            }
                            static fromJSON(e) {
                                "string" == typeof e && (e = JSON.parse(e));
                                let {
                                    verificationId: t,
                                    verificationCode: n,
                                    phoneNumber: r,
                                    temporaryProof: i
                                } = e;
                                return n || t || r || i ? new eY({
                                    verificationId: t,
                                    verificationCode: n,
                                    phoneNumber: r,
                                    temporaryProof: i
                                }) : null
                            }
                        }
                        class eJ {
                            constructor(e) {
                                var t, n, r, i, o, a;
                                let l = (0, s.zd)((0, s.pd)(e)),
                                    u = null !== (t = l.apiKey) && void 0 !== t ? t : null,
                                    h = null !== (n = l.oobCode) && void 0 !== n ? n : null,
                                    c = function(e) {
                                        switch (e) {
                                            case "recoverEmail":
                                                return "RECOVER_EMAIL";
                                            case "resetPassword":
                                                return "PASSWORD_RESET";
                                            case "signIn":
                                                return "EMAIL_SIGNIN";
                                            case "verifyEmail":
                                                return "VERIFY_EMAIL";
                                            case "verifyAndChangeEmail":
                                                return "VERIFY_AND_CHANGE_EMAIL";
                                            case "revertSecondFactorAddition":
                                                return "REVERT_SECOND_FACTOR_ADDITION";
                                            default:
                                                return null
                                        }
                                    }(null !== (r = l.mode) && void 0 !== r ? r : null);
                                v(u && h && c, "argument-error"), this.apiKey = u, this.operation = c, this.code = h, this.continueUrl = null !== (i = l.continueUrl) && void 0 !== i ? i : null, this.languageCode = null !== (o = l.lang) && void 0 !== o ? o : null, this.tenantId = null !== (a = l.tenantId) && void 0 !== a ? a : null
                            }
                            static parseLink(e) {
                                let t = function(e) {
                                    let t = (0, s.zd)((0, s.pd)(e)).link,
                                        n = t ? (0, s.zd)((0, s.pd)(t)).deep_link_id : null,
                                        r = (0, s.zd)((0, s.pd)(e)).deep_link_id;
                                    return (r ? (0, s.zd)((0, s.pd)(r)).link : null) || r || n || t || e
                                }(e);
                                try {
                                    return new eJ(t)
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        class eZ {
                            constructor() {
                                this.providerId = eZ.PROVIDER_ID
                            }
                            static credential(e, t) {
                                return eq._fromEmailAndPassword(e, t)
                            }
                            static credentialWithLink(e, t) {
                                let n = eJ.parseLink(t);
                                return v(n, "argument-error"), eq._fromEmailAndCode(e, n.code, n.tenantId)
                            }
                        }
                        eZ.PROVIDER_ID = "password", eZ.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", eZ.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
                        class e0 {
                            constructor(e) {
                                this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
                            }
                            setDefaultLanguage(e) {
                                this.defaultLanguageCode = e
                            }
                            setCustomParameters(e) {
                                return this.customParameters = e, this
                            }
                            getCustomParameters() {
                                return this.customParameters
                            }
                        }
                        class e1 extends e0 {
                            constructor() {
                                super(...arguments), this.scopes = []
                            }
                            addScope(e) {
                                return this.scopes.includes(e) || this.scopes.push(e), this
                            }
                            getScopes() {
                                return [...this.scopes]
                            }
                        }
                        class e2 extends e1 {
                            constructor() {
                                super("facebook.com")
                            }
                            static credential(e) {
                                return eH._fromParams({
                                    providerId: e2.PROVIDER_ID,
                                    signInMethod: e2.FACEBOOK_SIGN_IN_METHOD,
                                    accessToken: e
                                })
                            }
                            static credentialFromResult(e) {
                                return e2.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return e2.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
                                try {
                                    return e2.credential(e.oauthAccessToken)
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        e2.FACEBOOK_SIGN_IN_METHOD = "facebook.com", e2.PROVIDER_ID = "facebook.com";
                        class e4 extends e1 {
                            constructor() {
                                super("google.com"), this.addScope("profile")
                            }
                            static credential(e, t) {
                                return eH._fromParams({
                                    providerId: e4.PROVIDER_ID,
                                    signInMethod: e4.GOOGLE_SIGN_IN_METHOD,
                                    idToken: e,
                                    accessToken: t
                                })
                            }
                            static credentialFromResult(e) {
                                return e4.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return e4.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e) return null;
                                let {
                                    oauthIdToken: t,
                                    oauthAccessToken: n
                                } = e;
                                if (!t && !n) return null;
                                try {
                                    return e4.credential(t, n)
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        e4.GOOGLE_SIGN_IN_METHOD = "google.com", e4.PROVIDER_ID = "google.com";
                        class e6 extends e1 {
                            constructor() {
                                super("github.com")
                            }
                            static credential(e) {
                                return eH._fromParams({
                                    providerId: e6.PROVIDER_ID,
                                    signInMethod: e6.GITHUB_SIGN_IN_METHOD,
                                    accessToken: e
                                })
                            }
                            static credentialFromResult(e) {
                                return e6.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return e6.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
                                try {
                                    return e6.credential(e.oauthAccessToken)
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        e6.GITHUB_SIGN_IN_METHOD = "github.com", e6.PROVIDER_ID = "github.com";
                        class e9 extends e1 {
                            constructor() {
                                super("twitter.com")
                            }
                            static credential(e, t) {
                                return eH._fromParams({
                                    providerId: e9.PROVIDER_ID,
                                    signInMethod: e9.TWITTER_SIGN_IN_METHOD,
                                    oauthToken: e,
                                    oauthTokenSecret: t
                                })
                            }
                            static credentialFromResult(e) {
                                return e9.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return e9.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e) return null;
                                let {
                                    oauthAccessToken: t,
                                    oauthTokenSecret: n
                                } = e;
                                if (!t || !n) return null;
                                try {
                                    return e9.credential(t, n)
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        async function e5(e, t) {
                            return O(e, "POST", "/v1/accounts:signUp", k(e, t))
                        }
                        e9.TWITTER_SIGN_IN_METHOD = "twitter.com", e9.PROVIDER_ID = "twitter.com";
                        class e3 {
                            constructor(e) {
                                this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType
                            }
                            static async _fromIdTokenResponse(e, t, n, r = !1) {
                                return new e3({
                                    user: await et._fromIdTokenResponse(e, n, r),
                                    providerId: e7(n),
                                    _tokenResponse: n,
                                    operationType: t
                                })
                            }
                            static async _forOperation(e, t, n) {
                                return await e._updateTokensIfNecessary(n, !0), new e3({
                                    user: e,
                                    providerId: e7(n),
                                    _tokenResponse: n,
                                    operationType: t
                                })
                            }
                        }

                        function e7(e) {
                            return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
                        }
                        class e8 extends s.ZR {
                            constructor(e, t, n, r) {
                                var i;
                                super(t.code, t.message), this.operationType = n, this.user = r, Object.setPrototypeOf(this, e8.prototype), this.customData = {
                                    appName: e.name,
                                    tenantId: null !== (i = e.tenantId) && void 0 !== i ? i : void 0,
                                    _serverResponse: t.customData._serverResponse,
                                    operationType: n
                                }
                            }
                            static _fromErrorAndOperation(e, t, n, r) {
                                return new e8(e, t, n, r)
                            }
                        }

                        function te(e, t, n, r) {
                            return ("reauthenticate" === t ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch(n => {
                                if ("auth/multi-factor-auth-required" === n.code) throw e8._fromErrorAndOperation(e, n, t, r);
                                throw n
                            })
                        }
                        async function tt(e, t, n = !1) {
                            let r = await H(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
                            return e3._forOperation(e, "link", r)
                        }
                        async function tn(e, t, n = !1) {
                            let {
                                auth: r
                            } = e;
                            if ((0, i.rh)(r.app)) return Promise.reject(m(r));
                            let s = "reauthenticate";
                            try {
                                let i = await H(e, te(r, s, t, e), n);
                                v(i.idToken, r, "internal-error");
                                let o = q(i.idToken);
                                v(o, r, "internal-error");
                                let {
                                    sub: a
                                } = o;
                                return v(e.uid === a, r, "user-mismatch"), e3._forOperation(e, s, i)
                            } catch (e) {
                                throw (null == e ? void 0 : e.code) === "auth/user-not-found" && f(r, "user-mismatch"), e
                            }
                        }
                        async function tr(e, t, n = !1) {
                            if ((0, i.rh)(e.app)) return Promise.reject(m(e));
                            let r = "signIn",
                                s = await te(e, r, t),
                                o = await e3._fromIdTokenResponse(e, r, s);
                            return n || await e._updateCurrentUser(o.user), o
                        }
                        async function ti(e, t) {
                            return tr(eb(e), t)
                        }

                        function ts(e, t, n) {
                            var r;
                            v((null === (r = n.url) || void 0 === r ? void 0 : r.length) > 0, e, "invalid-continue-uri"), v(void 0 === n.dynamicLinkDomain || n.dynamicLinkDomain.length > 0, e, "invalid-dynamic-link-domain"), v(void 0 === n.linkDomain || n.linkDomain.length > 0, e, "invalid-hosting-link-domain"), t.continueUrl = n.url, t.dynamicLinkDomain = n.dynamicLinkDomain, t.linkDomain = n.linkDomain, t.canHandleCodeInApp = n.handleCodeInApp, n.iOS && (v(n.iOS.bundleId.length > 0, e, "missing-ios-bundle-id"), t.iOSBundleId = n.iOS.bundleId), n.android && (v(n.android.packageName.length > 0, e, "missing-android-pkg-name"), t.androidInstallApp = n.android.installApp, t.androidMinimumVersionCode = n.android.minimumVersion, t.androidPackageName = n.android.packageName)
                        }
                        async function to(e) {
                            let t = eb(e);
                            t._getPasswordPolicyInternal() && await t._updatePasswordPolicy()
                        }
                        async function ta(e, t, n) {
                            let r = eb(e),
                                i = {
                                    requestType: "PASSWORD_RESET",
                                    email: t,
                                    clientType: "CLIENT_TYPE_WEB"
                                };
                            n && ts(r, i, n), await eO(r, i, "getOobCode", eB, "EMAIL_PASSWORD_PROVIDER")
                        }
                        async function tl(e, t, n) {
                            if ((0, i.rh)(e.app)) return Promise.reject(m(e));
                            let r = eb(e),
                                s = eO(r, {
                                    returnSecureToken: !0,
                                    email: t,
                                    password: n,
                                    clientType: "CLIENT_TYPE_WEB"
                                }, "signUpPassword", e5, "EMAIL_PASSWORD_PROVIDER"),
                                o = await s.catch(t => {
                                    throw "auth/password-does-not-meet-requirements" === t.code && to(e), t
                                }),
                                a = await e3._fromIdTokenResponse(r, "signIn", o);
                            return await r._updateCurrentUser(a.user), a
                        }

                        function tu(e, t, n) {
                            return (0, i.rh)(e.app) ? Promise.reject(m(e)) : ti((0, s.m9)(e), eZ.credential(t, n)).catch(async t => {
                                throw "auth/password-does-not-meet-requirements" === t.code && to(e), t
                            })
                        }
                        async function th(e, t) {
                            let n = (0, s.m9)(e),
                                r = {
                                    requestType: "VERIFY_EMAIL",
                                    idToken: await e.getIdToken()
                                };
                            t && ts(n.auth, r, t);
                            let {
                                email: i
                            } = await eF(n.auth, r);
                            i !== e.email && await e.reload()
                        }

                        function tc(e, t, n, r) {
                            return (0, s.m9)(e).onAuthStateChanged(t, n, r)
                        }

                        function td(e) {
                            return (0, s.m9)(e).signOut()
                        }

                        function tf(e, t) {
                            return R(e, "POST", "/v2/accounts/mfaEnrollment:start", k(e, t))
                        }
                        new WeakMap;
                        let tp = "__sak";
                        class tg {
                            constructor(e, t) {
                                this.storageRetriever = e, this.type = t
                            }
                            _isAvailable() {
                                try {
                                    if (!this.storage) return Promise.resolve(!1);
                                    return this.storage.setItem(tp, "1"), this.storage.removeItem(tp), Promise.resolve(!0)
                                } catch (e) {
                                    return Promise.resolve(!1)
                                }
                            }
                            _set(e, t) {
                                return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve()
                            }
                            _get(e) {
                                let t = this.storage.getItem(e);
                                return Promise.resolve(t ? JSON.parse(t) : null)
                            }
                            _remove(e) {
                                return this.storage.removeItem(e), Promise.resolve()
                            }
                            get storage() {
                                return this.storageRetriever()
                            }
                        }
                        class tm extends tg {
                            constructor() {
                                super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = em(), this._shouldAllowMigration = !0
                            }
                            forAllChangedKeys(e) {
                                for (let t of Object.keys(this.listeners)) {
                                    let n = this.storage.getItem(t),
                                        r = this.localCache[t];
                                    n !== r && e(t, r, n)
                                }
                            }
                            onStorageEvent(e, t = !1) {
                                if (!e.key) {
                                    this.forAllChangedKeys((e, t, n) => {
                                        this.notifyListeners(e, n)
                                    });
                                    return
                                }
                                let n = e.key;
                                t ? this.detachListener() : this.stopPolling();
                                let r = () => {
                                        let e = this.storage.getItem(n);
                                        (t || this.localCache[n] !== e) && this.notifyListeners(n, e)
                                    },
                                    i = this.storage.getItem(n);
                                (0, s.w1)() && 10 === document.documentMode && i !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, 10) : r()
                            }
                            notifyListeners(e, t) {
                                this.localCache[e] = t;
                                let n = this.listeners[e];
                                if (n)
                                    for (let e of Array.from(n)) e(t ? JSON.parse(t) : t)
                            }
                            startPolling() {
                                this.stopPolling(), this.pollTimer = setInterval(() => {
                                    this.forAllChangedKeys((e, t, n) => {
                                        this.onStorageEvent(new StorageEvent("storage", {
                                            key: e,
                                            oldValue: t,
                                            newValue: n
                                        }), !0)
                                    })
                                }, 1e3)
                            }
                            stopPolling() {
                                this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
                            }
                            attachListener() {
                                window.addEventListener("storage", this.boundEventHandler)
                            }
                            detachListener() {
                                window.removeEventListener("storage", this.boundEventHandler)
                            }
                            _addListener(e, t) {
                                0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t)
                            }
                            _removeListener(e, t) {
                                this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
                            }
                            async _set(e, t) {
                                await super._set(e, t), this.localCache[e] = JSON.stringify(t)
                            }
                            async _get(e) {
                                let t = await super._get(e);
                                return this.localCache[e] = JSON.stringify(t), t
                            }
                            async _remove(e) {
                                await super._remove(e), delete this.localCache[e]
                            }
                        }

                        function ty(e) {
                            var t, n;
                            let r = e.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"),
                                i = RegExp(`${r}=([^;]+)`);
                            return null !== (n = null === (t = document.cookie.match(i)) || void 0 === t ? void 0 : t[1]) && void 0 !== n ? n : null
                        }

                        function tv(e) {
                            let t = "http:" === window.location.protocol;
                            return `${t?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`
                        }
                        tm.type = "LOCAL";
                        class tw {
                            constructor() {
                                this.type = "COOKIE", this.listenerUnsubscribes = new Map
                            }
                            _getFinalTarget(e) {
                                let t = new URL(`${window.location.origin}/__cookies__`);
                                return t.searchParams.set("finalTarget", e), t
                            }
                            async _isAvailable() {
                                var e;
                                return !!("boolean" != typeof isSecureContext || isSecureContext) && "undefined" != typeof navigator && "undefined" != typeof document && (null === (e = navigator.cookieEnabled) || void 0 === e || e)
                            }
                            async _set(e, t) {}
                            async _get(e) {
                                if (!this._isAvailable()) return null;
                                let t = tv(e);
                                if (window.cookieStore) {
                                    let e = await window.cookieStore.get(t);
                                    return null == e ? void 0 : e.value
                                }
                                return ty(t)
                            }
                            async _remove(e) {
                                if (!this._isAvailable() || !await this._get(e)) return;
                                let t = tv(e);
                                document.cookie = `${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`, await fetch("/__cookies__", {
                                    method: "DELETE"
                                }).catch(() => void 0)
                            }
                            _addListener(e, t) {
                                if (!this._isAvailable()) return;
                                let n = tv(e);
                                if (window.cookieStore) {
                                    let e = e => {
                                        let r = e.changed.find(e => e.name === n);
                                        r && t(r.value), e.deleted.find(e => e.name === n) && t(null)
                                    };
                                    return this.listenerUnsubscribes.set(t, () => window.cookieStore.removeEventListener("change", e)), window.cookieStore.addEventListener("change", e)
                                }
                                let r = ty(n),
                                    i = setInterval(() => {
                                        let e = ty(n);
                                        e !== r && (t(e), r = e)
                                    }, 1e3);
                                this.listenerUnsubscribes.set(t, () => clearInterval(i))
                            }
                            _removeListener(e, t) {
                                let n = this.listenerUnsubscribes.get(t);
                                n && (n(), this.listenerUnsubscribes.delete(t))
                            }
                        }
                        tw.type = "COOKIE";
                        class t_ extends tg {
                            constructor() {
                                super(() => window.sessionStorage, "SESSION")
                            }
                            _addListener(e, t) {}
                            _removeListener(e, t) {}
                        }
                        t_.type = "SESSION";
                        class tE {
                            constructor(e) {
                                this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
                            }
                            static _getInstance(e) {
                                let t = this.receivers.find(t => t.isListeningto(e));
                                if (t) return t;
                                let n = new tE(e);
                                return this.receivers.push(n), n
                            }
                            isListeningto(e) {
                                return this.eventTarget === e
                            }
                            async handleEvent(e) {
                                let {
                                    eventId: t,
                                    eventType: n,
                                    data: r
                                } = e.data, i = this.handlersMap[n];
                                if (!(null == i ? void 0 : i.size)) return;
                                e.ports[0].postMessage({
                                    status: "ack",
                                    eventId: t,
                                    eventType: n
                                });
                                let s = Array.from(i).map(async t => t(e.origin, r)),
                                    o = await Promise.all(s.map(async e => {
                                        try {
                                            let t = await e;
                                            return {
                                                fulfilled: !0,
                                                value: t
                                            }
                                        } catch (e) {
                                            return {
                                                fulfilled: !1,
                                                reason: e
                                            }
                                        }
                                    }));
                                e.ports[0].postMessage({
                                    status: "done",
                                    eventId: t,
                                    eventType: n,
                                    response: o
                                })
                            }
                            _subscribe(e, t) {
                                0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(t)
                            }
                            _unsubscribe(e, t) {
                                this.handlersMap[e] && t && this.handlersMap[e].delete(t), t && 0 !== this.handlersMap[e].size || delete this.handlersMap[e], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
                            }
                        }

                        function tb(e = "", t = 10) {
                            let n = "";
                            for (let e = 0; e < t; e++) n += Math.floor(10 * Math.random());
                            return e + n
                        }
                        tE.receivers = [];
                        class tI {
                            constructor(e) {
                                this.target = e, this.handlers = new Set
                            }
                            removeMessageHandler(e) {
                                e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e)
                            }
                            async _send(e, t, n = 50) {
                                let r, i;
                                let s = "undefined" != typeof MessageChannel ? new MessageChannel : null;
                                if (!s) throw Error("connection_unavailable");
                                return new Promise((o, a) => {
                                    let l = tb("", 20);
                                    s.port1.start();
                                    let u = setTimeout(() => {
                                        a(Error("unsupported_event"))
                                    }, n);
                                    i = {
                                        messageChannel: s,
                                        onMessage(e) {
                                            if (e.data.eventId === l) switch (e.data.status) {
                                                case "ack":
                                                    clearTimeout(u), r = setTimeout(() => {
                                                        a(Error("timeout"))
                                                    }, 3e3);
                                                    break;
                                                case "done":
                                                    clearTimeout(r), o(e.data.response);
                                                    break;
                                                default:
                                                    clearTimeout(u), clearTimeout(r), a(Error("invalid_response"))
                                            }
                                        }
                                    }, this.handlers.add(i), s.port1.addEventListener("message", i.onMessage), this.target.postMessage({
                                        eventType: e,
                                        eventId: l,
                                        data: t
                                    }, [s.port2])
                                }).finally(() => {
                                    i && this.removeMessageHandler(i)
                                })
                            }
                        }

                        function tT() {
                            return window
                        }

                        function tC() {
                            return void 0 !== tT().WorkerGlobalScope && "function" == typeof tT().importScripts
                        }
                        async function tS() {
                            if (!(null == navigator ? void 0 : navigator.serviceWorker)) return null;
                            try {
                                return (await navigator.serviceWorker.ready).active
                            } catch (e) {
                                return null
                            }
                        }
                        let tA = "firebaseLocalStorageDb",
                            tk = "firebaseLocalStorage",
                            tR = "fbase_key";
                        class tN {
                            constructor(e) {
                                this.request = e
                            }
                            toPromise() {
                                return new Promise((e, t) => {
                                    this.request.addEventListener("success", () => {
                                        e(this.request.result)
                                    }), this.request.addEventListener("error", () => {
                                        t(this.request.error)
                                    })
                                })
                            }
                        }

                        function tO(e, t) {
                            return e.transaction([tk], t ? "readwrite" : "readonly").objectStore(tk)
                        }

                        function tP() {
                            let e = indexedDB.open(tA, 1);
                            return new Promise((t, n) => {
                                e.addEventListener("error", () => {
                                    n(e.error)
                                }), e.addEventListener("upgradeneeded", () => {
                                    let t = e.result;
                                    try {
                                        t.createObjectStore(tk, {
                                            keyPath: tR
                                        })
                                    } catch (e) {
                                        n(e)
                                    }
                                }), e.addEventListener("success", async () => {
                                    let n = e.result;
                                    n.objectStoreNames.contains(tk) ? t(n) : (n.close(), await new tN(indexedDB.deleteDatabase(tA)).toPromise(), t(await tP()))
                                })
                            })
                        }
                        async function tD(e, t, n) {
                            return new tN(tO(e, !0).put({
                                [tR]: t,
                                value: n
                            })).toPromise()
                        }
                        async function tL(e, t) {
                            let n = tO(e, !1).get(t),
                                r = await new tN(n).toPromise();
                            return void 0 === r ? null : r.value
                        }

                        function tx(e, t) {
                            return new tN(tO(e, !0).delete(t)).toPromise()
                        }
                        class tM {
                            constructor() {
                                this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {})
                            }
                            async _openDb() {
                                return this.db || (this.db = await tP()), this.db
                            }
                            async _withRetries(e) {
                                let t = 0;
                                for (;;) try {
                                    let t = await this._openDb();
                                    return await e(t)
                                } catch (e) {
                                    if (t++ > 3) throw e;
                                    this.db && (this.db.close(), this.db = void 0)
                                }
                            }
                            async initializeServiceWorkerMessaging() {
                                return tC() ? this.initializeReceiver() : this.initializeSender()
                            }
                            async initializeReceiver() {
                                this.receiver = tE._getInstance(tC() ? self : null), this.receiver._subscribe("keyChanged", async (e, t) => ({
                                    keyProcessed: (await this._poll()).includes(t.key)
                                })), this.receiver._subscribe("ping", async (e, t) => ["keyChanged"])
                            }
                            async initializeSender() {
                                var e, t;
                                if (this.activeServiceWorker = await tS(), !this.activeServiceWorker) return;
                                this.sender = new tI(this.activeServiceWorker);
                                let n = await this.sender._send("ping", {}, 800);
                                n && (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) && (null === (t = n[0]) || void 0 === t ? void 0 : t.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
                            }
                            async notifyServiceWorker(e) {
                                var t;
                                if (this.sender && this.activeServiceWorker && ((null === (t = null == navigator ? void 0 : navigator.serviceWorker) || void 0 === t ? void 0 : t.controller) || null) === this.activeServiceWorker) try {
                                    await this.sender._send("keyChanged", {
                                        key: e
                                    }, this.serviceWorkerReceiverAvailable ? 800 : 50)
                                } catch (e) {}
                            }
                            async _isAvailable() {
                                try {
                                    if (!indexedDB) return !1;
                                    let e = await tP();
                                    return await tD(e, tp, "1"), await tx(e, tp), !0
                                } catch (e) {}
                                return !1
                            }
                            async _withPendingWrite(e) {
                                this.pendingWrites++;
                                try {
                                    await e()
                                } finally {
                                    this.pendingWrites--
                                }
                            }
                            async _set(e, t) {
                                return this._withPendingWrite(async () => (await this._withRetries(n => tD(n, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)))
                            }
                            async _get(e) {
                                let t = await this._withRetries(t => tL(t, e));
                                return this.localCache[e] = t, t
                            }
                            async _remove(e) {
                                return this._withPendingWrite(async () => (await this._withRetries(t => tx(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)))
                            }
                            async _poll() {
                                let e = await this._withRetries(e => new tN(tO(e, !1).getAll()).toPromise());
                                if (!e || 0 !== this.pendingWrites) return [];
                                let t = [],
                                    n = new Set;
                                if (0 !== e.length)
                                    for (let {
                                            fbase_key: r,
                                            value: i
                                        } of e) n.add(r), JSON.stringify(this.localCache[r]) !== JSON.stringify(i) && (this.notifyListeners(r, i), t.push(r));
                                for (let e of Object.keys(this.localCache)) this.localCache[e] && !n.has(e) && (this.notifyListeners(e, null), t.push(e));
                                return t
                            }
                            notifyListeners(e, t) {
                                this.localCache[e] = t;
                                let n = this.listeners[e];
                                if (n)
                                    for (let e of Array.from(n)) e(t)
                            }
                            startPolling() {
                                this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), 800)
                            }
                            stopPolling() {
                                this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
                            }
                            _addListener(e, t) {
                                0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(t)
                            }
                            _removeListener(e, t) {
                                this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && this.stopPolling()
                            }
                        }

                        function tU(e, t) {
                            return R(e, "POST", "/v2/accounts/mfaSignIn:start", k(e, t))
                        }
                        tM.type = "LOCAL", eC("rcb"), new b(3e4, 6e4);
                        let tV = "recaptcha";
                        async function tF(e, t, n) {
                            var r;
                            if (!e._getRecaptchaConfig()) try {
                                await eP(e)
                            } catch (e) {
                                console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")
                            }
                            try {
                                let i;
                                if (i = "string" == typeof t ? {
                                        phoneNumber: t
                                    } : t, "session" in i) {
                                    let t = i.session;
                                    if ("phoneNumber" in i) {
                                        v("enroll" === t.type, e, "internal-error");
                                        let r = {
                                                idToken: t.credential,
                                                phoneEnrollmentInfo: {
                                                    phoneNumber: i.phoneNumber,
                                                    clientType: "CLIENT_TYPE_WEB"
                                                }
                                            },
                                            s = async (e, t) => {
                                                if (t.phoneEnrollmentInfo.captchaResponse === ek) {
                                                    v((null == n ? void 0 : n.type) === tV, e, "argument-error");
                                                    let r = await tB(e, t, n);
                                                    return tf(e, r)
                                                }
                                                return tf(e, t)
                                            },
                                            o = eO(e, r, "mfaSmsEnrollment", s, "PHONE_PROVIDER");
                                        return (await o.catch(e => Promise.reject(e))).phoneSessionInfo.sessionInfo
                                    } {
                                        v("signin" === t.type, e, "internal-error");
                                        let s = (null === (r = i.multiFactorHint) || void 0 === r ? void 0 : r.uid) || i.multiFactorUid;
                                        v(s, e, "missing-multi-factor-info");
                                        let o = {
                                                mfaPendingCredential: t.credential,
                                                mfaEnrollmentId: s,
                                                phoneSignInInfo: {
                                                    clientType: "CLIENT_TYPE_WEB"
                                                }
                                            },
                                            a = async (e, t) => {
                                                if (t.phoneSignInInfo.captchaResponse === ek) {
                                                    v((null == n ? void 0 : n.type) === tV, e, "argument-error");
                                                    let r = await tB(e, t, n);
                                                    return tU(e, r)
                                                }
                                                return tU(e, t)
                                            },
                                            l = eO(e, o, "mfaSmsSignIn", a, "PHONE_PROVIDER");
                                        return (await l.catch(e => Promise.reject(e))).phoneResponseInfo.sessionInfo
                                    }
                                } {
                                    let t = {
                                            phoneNumber: i.phoneNumber,
                                            clientType: "CLIENT_TYPE_WEB"
                                        },
                                        r = async (e, t) => {
                                            if (t.captchaResponse === ek) {
                                                v((null == n ? void 0 : n.type) === tV, e, "argument-error");
                                                let r = await tB(e, t, n);
                                                return eK(e, r)
                                            }
                                            return eK(e, t)
                                        },
                                        s = eO(e, t, "sendVerificationCode", r, "PHONE_PROVIDER");
                                    return (await s.catch(e => Promise.reject(e))).sessionInfo
                                }
                            } finally {
                                null == n || n._reset()
                            }
                        }
                        async function tB(e, t, n) {
                            v(n.type === tV, e, "argument-error");
                            let r = await n.verify();
                            v("string" == typeof r, e, "argument-error");
                            let i = Object.assign({}, t);
                            if ("phoneEnrollmentInfo" in i) {
                                let e = i.phoneEnrollmentInfo.phoneNumber,
                                    t = i.phoneEnrollmentInfo.captchaResponse,
                                    n = i.phoneEnrollmentInfo.clientType,
                                    s = i.phoneEnrollmentInfo.recaptchaVersion;
                                return Object.assign(i, {
                                    phoneEnrollmentInfo: {
                                        phoneNumber: e,
                                        recaptchaToken: r,
                                        captchaResponse: t,
                                        clientType: n,
                                        recaptchaVersion: s
                                    }
                                }), i
                            }
                            if (!("phoneSignInInfo" in i)) return Object.assign(i, {
                                recaptchaToken: r
                            }), i; {
                                let e = i.phoneSignInInfo.captchaResponse,
                                    t = i.phoneSignInInfo.clientType,
                                    n = i.phoneSignInInfo.recaptchaVersion;
                                return Object.assign(i, {
                                    phoneSignInInfo: {
                                        recaptchaToken: r,
                                        captchaResponse: e,
                                        clientType: t,
                                        recaptchaVersion: n
                                    }
                                }), i
                            }
                        }
                        class tj {
                            constructor(e) {
                                this.providerId = tj.PROVIDER_ID, this.auth = eb(e)
                            }
                            verifyPhoneNumber(e, t) {
                                return tF(this.auth, e, (0, s.m9)(t))
                            }
                            static credential(e, t) {
                                return eY._fromVerification(e, t)
                            }
                            static credentialFromResult(e) {
                                return tj.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return tj.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e) return null;
                                let {
                                    phoneNumber: t,
                                    temporaryProof: n
                                } = e;
                                return t && n ? eY._fromTokenResponse(t, n) : null
                            }
                        }

                        function t$(e, t) {
                            return t ? er(t) : (v(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver)
                        }
                        tj.PROVIDER_ID = "phone", tj.PHONE_SIGN_IN_METHOD = "phone";
                        class tq extends ex {
                            constructor(e) {
                                super("custom", "custom"), this.params = e
                            }
                            _getIdTokenResponse(e) {
                                return ez(e, this._buildIdpRequest())
                            }
                            _linkToIdToken(e, t) {
                                return ez(e, this._buildIdpRequest(t))
                            }
                            _getReauthenticationResolver(e) {
                                return ez(e, this._buildIdpRequest())
                            }
                            _buildIdpRequest(e) {
                                let t = {
                                    requestUri: this.params.requestUri,
                                    sessionId: this.params.sessionId,
                                    postBody: this.params.postBody,
                                    tenantId: this.params.tenantId,
                                    pendingToken: this.params.pendingToken,
                                    returnSecureToken: !0,
                                    returnIdpCredential: !0
                                };
                                return e && (t.idToken = e), t
                            }
                        }

                        function tz(e) {
                            return tr(e.auth, new tq(e), e.bypassAuthState)
                        }

                        function tH(e) {
                            let {
                                auth: t,
                                user: n
                            } = e;
                            return v(n, t, "internal-error"), tn(n, new tq(e), e.bypassAuthState)
                        }
                        async function tK(e) {
                            let {
                                auth: t,
                                user: n
                            } = e;
                            return v(n, t, "internal-error"), tt(n, new tq(e), e.bypassAuthState)
                        }
                        class tG {
                            constructor(e, t, n, r, i = !1) {
                                this.auth = e, this.resolver = n, this.user = r, this.bypassAuthState = i, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t]
                            }
                            execute() {
                                return new Promise(async (e, t) => {
                                    this.pendingPromise = {
                                        resolve: e,
                                        reject: t
                                    };
                                    try {
                                        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
                                    } catch (e) {
                                        this.reject(e)
                                    }
                                })
                            }
                            async onAuthEvent(e) {
                                let {
                                    urlResponse: t,
                                    sessionId: n,
                                    postBody: r,
                                    tenantId: i,
                                    error: s,
                                    type: o
                                } = e;
                                if (s) {
                                    this.reject(s);
                                    return
                                }
                                let a = {
                                    auth: this.auth,
                                    requestUri: t,
                                    sessionId: n,
                                    tenantId: i || void 0,
                                    postBody: r || void 0,
                                    user: this.user,
                                    bypassAuthState: this.bypassAuthState
                                };
                                try {
                                    this.resolve(await this.getIdpTask(o)(a))
                                } catch (e) {
                                    this.reject(e)
                                }
                            }
                            onError(e) {
                                this.reject(e)
                            }
                            getIdpTask(e) {
                                switch (e) {
                                    case "signInViaPopup":
                                    case "signInViaRedirect":
                                        return tz;
                                    case "linkViaPopup":
                                    case "linkViaRedirect":
                                        return tK;
                                    case "reauthViaPopup":
                                    case "reauthViaRedirect":
                                        return tH;
                                    default:
                                        f(this.auth, "internal-error")
                                }
                            }
                            resolve(e) {
                                var t, n;
                                t = this.pendingPromise, n = "Pending promise was never set", t || w(n), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
                            }
                            reject(e) {
                                var t, n;
                                t = this.pendingPromise, n = "Pending promise was never set", t || w(n), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
                            }
                            unregisterAndCleanUp() {
                                this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
                            }
                        }
                        let tW = new b(2e3, 1e4);
                        async function tQ(e, t, n) {
                            if ((0, i.rh)(e.app)) return Promise.reject(p(e, "operation-not-supported-in-this-environment"));
                            let r = eb(e);
                            ! function(e, t, n) {
                                if (!(t instanceof n)) throw n.name !== t.constructor.name && f(e, "argument-error"), g(e, "argument-error", `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
                            }(e, t, e0);
                            let s = t$(r, n);
                            return new tX(r, "signInViaPopup", t, s).executeNotNull()
                        }
                        class tX extends tG {
                            constructor(e, t, n, r, i) {
                                super(e, t, r, i), this.provider = n, this.authWindow = null, this.pollId = null, tX.currentPopupAction && tX.currentPopupAction.cancel(), tX.currentPopupAction = this
                            }
                            async executeNotNull() {
                                let e = await this.execute();
                                return v(e, this.auth, "internal-error"), e
                            }
                            async onExecution() {
                                var e, t;
                                e = 1 === this.filter.length, t = "Popup operations only handle one event", e || w(t);
                                let n = tb();
                                this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], n), this.authWindow.associatedEvent = n, this.resolver._originValidation(this.auth).catch(e => {
                                    this.reject(e)
                                }), this.resolver._isIframeWebStorageSupported(this.auth, e => {
                                    e || this.reject(p(this.auth, "web-storage-unsupported"))
                                }), this.pollUserCancellation()
                            }
                            get eventId() {
                                var e;
                                return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null
                            }
                            cancel() {
                                this.reject(p(this.auth, "cancelled-popup-request"))
                            }
                            cleanUp() {
                                this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, tX.currentPopupAction = null
                            }
                            pollUserCancellation() {
                                let e = () => {
                                    var t, n;
                                    if (null === (n = null === (t = this.authWindow) || void 0 === t ? void 0 : t.window) || void 0 === n ? void 0 : n.closed) {
                                        this.pollId = window.setTimeout(() => {
                                            this.pollId = null, this.reject(p(this.auth, "popup-closed-by-user"))
                                        }, 8e3);
                                        return
                                    }
                                    this.pollId = window.setTimeout(e, tW.get())
                                };
                                e()
                            }
                        }
                        tX.currentPopupAction = null;
                        let tY = new Map;
                        class tJ extends tG {
                            constructor(e, t, n = !1) {
                                super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, n), this.eventId = null
                            }
                            async execute() {
                                let e = tY.get(this.auth._key());
                                if (!e) {
                                    try {
                                        let t = await tZ(this.resolver, this.auth) ? await super.execute() : null;
                                        e = () => Promise.resolve(t)
                                    } catch (t) {
                                        e = () => Promise.reject(t)
                                    }
                                    tY.set(this.auth._key(), e)
                                }
                                return this.bypassAuthState || tY.set(this.auth._key(), () => Promise.resolve(null)), e()
                            }
                            async onAuthEvent(e) {
                                if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
                                if ("unknown" === e.type) {
                                    this.resolve(null);
                                    return
                                }
                                if (e.eventId) {
                                    let t = await this.auth._redirectUserForId(e.eventId);
                                    if (t) return this.user = t, super.onAuthEvent(e);
                                    this.resolve(null)
                                }
                            }
                            async onExecution() {}
                            cleanUp() {}
                        }
                        async function tZ(e, t) {
                            let n = es("pendingRedirect", t.config.apiKey, t.name),
                                r = er(e._redirectPersistence);
                            if (!await r._isAvailable()) return !1;
                            let i = await r._get(n) === "true";
                            return await r._remove(n), i
                        }

                        function t0(e, t) {
                            tY.set(e._key(), t)
                        }
                        async function t1(e, t, n = !1) {
                            if ((0, i.rh)(e.app)) return Promise.reject(m(e));
                            let r = eb(e),
                                s = t$(r, t),
                                o = new tJ(r, s, n),
                                a = await o.execute();
                            return a && !n && (delete a.user._redirectEventId, await r._persistUserIfCurrent(a.user), await r._setRedirectUser(null, t)), a
                        }
                        class t2 {
                            constructor(e) {
                                this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
                            }
                            registerConsumer(e) {
                                this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
                            }
                            unregisterConsumer(e) {
                                this.consumers.delete(e)
                            }
                            onEvent(e) {
                                if (this.hasEventBeenHandled(e)) return !1;
                                let t = !1;
                                return this.consumers.forEach(n => {
                                    this.isEventForConsumer(e, n) && (t = !0, this.sendToConsumer(e, n), this.saveEventToCache(e))
                                }), this.hasHandledPotentialRedirect || ! function(e) {
                                    switch (e.type) {
                                        case "signInViaRedirect":
                                        case "linkViaRedirect":
                                        case "reauthViaRedirect":
                                            return !0;
                                        case "unknown":
                                            return t6(e);
                                        default:
                                            return !1
                                    }
                                }(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t
                            }
                            sendToConsumer(e, t) {
                                var n;
                                if (e.error && !t6(e)) {
                                    let r = (null === (n = e.error.code) || void 0 === n ? void 0 : n.split("auth/")[1]) || "internal-error";
                                    t.onError(p(this.auth, r))
                                } else t.onAuthEvent(e)
                            }
                            isEventForConsumer(e, t) {
                                let n = null === t.eventId || !!e.eventId && e.eventId === t.eventId;
                                return t.filter.includes(e.type) && n
                            }
                            hasEventBeenHandled(e) {
                                return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(t4(e))
                            }
                            saveEventToCache(e) {
                                this.cachedEventUids.add(t4(e)), this.lastProcessedEventTime = Date.now()
                            }
                        }

                        function t4(e) {
                            return [e.type, e.eventId, e.sessionId, e.tenantId].filter(e => e).join("-")
                        }

                        function t6({
                            type: e,
                            error: t
                        }) {
                            return "unknown" === e && (null == t ? void 0 : t.code) === "auth/no-auth-event"
                        }
                        async function t9(e, t = {}) {
                            return R(e, "GET", "/v1/projects", t)
                        }
                        let t5 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                            t3 = /^https?/;
                        async function t7(e) {
                            if (e.config.emulator) return;
                            let {
                                authorizedDomains: t
                            } = await t9(e);
                            for (let e of t) try {
                                if (function(e) {
                                        let t = _(),
                                            {
                                                protocol: n,
                                                hostname: r
                                            } = new URL(t);
                                        if (e.startsWith("chrome-extension://")) {
                                            let i = new URL(e);
                                            return "" === i.hostname && "" === r ? "chrome-extension:" === n && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : "chrome-extension:" === n && i.hostname === r
                                        }
                                        if (!t3.test(n)) return !1;
                                        if (t5.test(e)) return r === e;
                                        let i = e.replace(/\./g, "\\.");
                                        return RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r)
                                    }(e)) return
                            } catch (e) {}
                            f(e, "unauthorized-domain")
                        }
                        let t8 = new b(3e4, 6e4);

                        function ne() {
                            let e = tT().___jsl;
                            if (null == e ? void 0 : e.H) {
                                for (let t of Object.keys(e.H))
                                    if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP)
                                        for (let t = 0; t < e.CP.length; t++) e.CP[t] = null
                            }
                        }
                        let nt = null,
                            nn = new b(5e3, 15e3),
                            nr = {
                                style: {
                                    position: "absolute",
                                    top: "-100px",
                                    width: "1px",
                                    height: "1px"
                                },
                                "aria-hidden": "true",
                                tabindex: "-1"
                            },
                            ni = new Map([
                                ["identitytoolkit.googleapis.com", "p"],
                                ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
                                ["test-identitytoolkit.sandbox.googleapis.com", "t"]
                            ]);
                        async function ns(e) {
                            let t = await (nt = nt || new Promise((t, n) => {
                                    var r, i, s, o;

                                    function a() {
                                        ne(), gapi.load("gapi.iframes", {
                                            callback: () => {
                                                t(gapi.iframes.getContext())
                                            },
                                            ontimeout: () => {
                                                ne(), n(p(e, "network-request-failed"))
                                            },
                                            timeout: t8.get()
                                        })
                                    }
                                    if (null === (i = null === (r = tT().gapi) || void 0 === r ? void 0 : r.iframes) || void 0 === i ? void 0 : i.Iframe) t(gapi.iframes.getContext());
                                    else if (null === (s = tT().gapi) || void 0 === s ? void 0 : s.load) a();
                                    else {
                                        let t = eC("iframefcb");
                                        return tT()[t] = () => {
                                            gapi.load ? a() : n(p(e, "network-request-failed"))
                                        }, (o = `${eT.gapiScript}?onload=${t}`, eT.loadJS(o)).catch(e => n(e))
                                    }
                                }).catch(e => {
                                    throw nt = null, e
                                })),
                                n = tT().gapi;
                            return v(n, e, "internal-error"), t.open({
                                where: document.body,
                                url: function(e) {
                                    let t = e.config;
                                    v(t.authDomain, e, "auth-domain-config-required");
                                    let n = t.emulator ? I(t, "emulator/auth/iframe") : `https://${e.config.authDomain}/__/auth/iframe`,
                                        r = {
                                            apiKey: t.apiKey,
                                            appName: e.name,
                                            v: i.Jn
                                        },
                                        o = ni.get(e.config.apiHost);
                                    o && (r.eid = o);
                                    let a = e._getFrameworks();
                                    return a.length && (r.fw = a.join(",")), `${n}?${(0,s.xO)(r).slice(1)}`
                                }(e),
                                messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                                attributes: nr,
                                dontclear: !0
                            }, t => new Promise(async (n, r) => {
                                await t.restyle({
                                    setHideOnLeave: !1
                                });
                                let i = p(e, "network-request-failed"),
                                    s = tT().setTimeout(() => {
                                        r(i)
                                    }, nn.get());

                                function o() {
                                    tT().clearTimeout(s), n(t)
                                }
                                t.ping(o).then(o, () => {
                                    r(i)
                                })
                            }))
                        }
                        let no = {
                            location: "yes",
                            resizable: "yes",
                            statusbar: "yes",
                            toolbar: "no"
                        };
                        class na {
                            constructor(e) {
                                this.window = e, this.associatedEvent = null
                            }
                            close() {
                                if (this.window) try {
                                    this.window.close()
                                } catch (e) {}
                            }
                        }
                        let nl = encodeURIComponent("fac");
                        async function nu(e, t, n, r, o, a) {
                            v(e.config.authDomain, e, "auth-domain-config-required"), v(e.config.apiKey, e, "invalid-api-key");
                            let l = {
                                apiKey: e.config.apiKey,
                                appName: e.name,
                                authType: n,
                                redirectUrl: r,
                                v: i.Jn,
                                eventId: o
                            };
                            if (t instanceof e0)
                                for (let [n, r] of (t.setDefaultLanguage(e.languageCode), l.providerId = t.providerId || "", (0, s.xb)(t.getCustomParameters()) || (l.customParameters = JSON.stringify(t.getCustomParameters())), Object.entries(a || {}))) l[n] = r;
                            if (t instanceof e1) {
                                let e = t.getScopes().filter(e => "" !== e);
                                e.length > 0 && (l.scopes = e.join(","))
                            }
                            for (let t of (e.tenantId && (l.tid = e.tenantId), Object.keys(l))) void 0 === l[t] && delete l[t];
                            let u = await e._getAppCheckToken(),
                                h = u ? `#${nl}=${encodeURIComponent(u)}` : "";
                            return `${function({config:e}){return e.emulator?I(e,"emulator/auth/handler"):`
                            https: //${e.authDomain}/__/auth/handler`}(e)}?${(0,s.xO)(l).slice(1)}${h}`}let nh="webStorageSupport";class nc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t_,this._completeRedirectFn=t1,this._overrideRedirectResult=t0}async _openPopup(e,t,n,r){var i,o,a;o=null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,a="_initialize() not called before _openPopup()",o||w(a);let l=await nu(e,t,n,_(),r);return function(e,t,n,r=500,i=600){let o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),l="",u=Object.assign(Object.assign({},no),{width:r.toString(),height:i.toString(),top:o,left:a}),h=(0,s.z$)().toLowerCase();n&&(l=eh(h)?"_blank":n),el(h)&&(t=t||"http://localhost",u.scrollbars="yes");let c=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,s.z$)()){var t;return eg(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==l)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",l),new na(null);let d=window.open(t||"",l,c);v(d,e,"popup-blocked");try{d.focus()}catch(e){}return new na(d)}(e,l,tb())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=await nu(e,t,n,_(),r),tT().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){var n;let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(n="If manager is not set, promise should be",r||w(n),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await ns(e),n=new t2(e);return t.register("authEvent",t=>(v(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nh,{type:nh},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[nh];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=t7(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return em()||eu()||eg()}}class nd{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class nf extends nd{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new nf(e)}_finalizeEnroll(e,t,n){return R(e,"POST","/v2/accounts/mfaEnrollment:finalize",k(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:finalize",k(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class np{constructor(){}static assertion(e){return nf._fromCredential(e)}}np.FACTOR_ID="phone";class ng{static assertionForEnrollment(e,t){return nm._fromSecret(e,t)}static assertionForSignIn(e,t){return nm._fromEnrollmentId(e,t)}static async generateSecret(e){var t,n;v(void 0!==(null===(t=e.user)||void 0===t?void 0:t.auth),"internal-error");let r=await R(n=e.user.auth,"POST","/v2/accounts/mfaEnrollment:start",k(n,{idToken:e.credential,totpEnrollmentInfo:{}}));return ny._fromStartTotpMfaEnrollmentResponse(r,e.user.auth)}}ng.FACTOR_ID="totp";class nm extends nd{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new nm(t,void 0,e)}static _fromEnrollmentId(e,t){return new nm(t,e)}async _finalizeEnroll(e,t,n){return v(void 0!==this.secret,e,"argument-error"),R(e,"POST","/v2/accounts/mfaEnrollment:finalize",k(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let n={verificationCode:this.otp};return R(e,"POST","/v2/accounts/mfaSignIn:finalize",k(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n}))}}class ny{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new ny(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(nv(e)||nv(t))&&(r=!0),r&&(nv(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),nv(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function nv(e){return void 0===e||(null==e?void 0:e.length)===0}var nw="@firebase/auth",n_="1.10.7";class nE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let nb=(0,s.Pz)("authIdTokenMaxAge")||300,nI=null,nT=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nb)return;let i=null==n?void 0:n.token;nI!==i&&(nI=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nC(e=(0,i.Mq)()){let t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let n=function(e,t){let n=(0,i.qX)(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if((0,s.vZ)(r,null!=t?t:{}))return e;f(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:nc,persistence:[tM,tm,t_]}),r=(0,s.Pz)("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(r,location.origin);if(location.origin===e.origin){var o,a;let t=nT(e.toString());o=()=>t(n.currentUser),(0,s.m9)(n).beforeAuthStateChanged(t,o),a=e=>t(e),(0,s.m9)(n).onIdTokenChanged(a,void 0,void 0)}}let l=(0,s.q4)("auth");return l&&function(e,t,n){let r=eb(e);v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");let i=eD(t),{host:o,port:a}=function(e){let t=eD(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let e=i[1];return{host:e,port:eL(r.substr(e.length+1))}}{let[e,t]=r.split(":");return{host:e,port:eL(t)}}}(t),l=null===a?"":`:${a}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!r._canInitEmulator){v(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),v((0,s.vZ)(u,r.config.emulator)&&(0,s.vZ)(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,(0,s.Xx)(o)?((0,s.Uo)(`${i}//${o}${l}`),(0,s.dp)("Auth",!0)):function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${l}`),n}eT={loadJS:e=>new Promise((t,n)=>{var r,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=p("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},r="Browser",(0,i.Xd)(new l.wA("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});let l=new eE(n,i,s,{apiKey:o,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ey(r)});return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),(0,i.Xd)(new l.wA("auth-internal",e=>new nE(eb(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(nw,n_,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(r)),(0,i.KN)(nw,n_,"esm2017")},6147:function(e,t,n){"use strict";n.d(t,{Ab:function(){return of},hJ:function(){return sg},JU:function(){return sm},QT:function(){return os},PL:function(){return oa},ad:function(){return sb},b9:function(){return s5},cf:function(){return oh},Xo:function(){return s6},IO:function(){return sZ},pl:function(){return ol},r7:function(){return ou},ar:function(){return s1}});var r,i,s,o,a,l,u,h,c,d,f,p,g,m,y=n(5816),v=n(8463),w=n(3333),_=n(1683),E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=s+(i^(t=n+(o<<7&4294967295|o>>>25))&(n^i))+r[1]+3905402710&4294967295,o=i+(n^(s=t+(o<<12&4294967295|o>>>20))&(t^n))+r[2]+606105819&4294967295,o=n+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+r[3]+3250441966&4294967295,o=t+(s^(n=i+(o<<22&4294967295|o>>>10))&(i^s))+r[4]+4118548399&4294967295,o=s+(i^(t=n+(o<<7&4294967295|o>>>25))&(n^i))+r[5]+1200080426&4294967295,o=i+(n^(s=t+(o<<12&4294967295|o>>>20))&(t^n))+r[6]+2821735955&4294967295,o=n+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+r[7]+4249261313&4294967295,o=t+(s^(n=i+(o<<22&4294967295|o>>>10))&(i^s))+r[8]+1770035416&4294967295,o=s+(i^(t=n+(o<<7&4294967295|o>>>25))&(n^i))+r[9]+2336552879&4294967295,o=i+(n^(s=t+(o<<12&4294967295|o>>>20))&(t^n))+r[10]+4294925233&4294967295,o=n+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+r[11]+2304563134&4294967295,o=t+(s^(n=i+(o<<22&4294967295|o>>>10))&(i^s))+r[12]+1804603682&4294967295,o=s+(i^(t=n+(o<<7&4294967295|o>>>25))&(n^i))+r[13]+4254626195&4294967295,o=i+(n^(s=t+(o<<12&4294967295|o>>>20))&(t^n))+r[14]+2792965006&4294967295,o=n+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,o=t+((n=i+(o<<20&4294967295|o>>>12))^i^s)+r[5]+4294588738&4294967295,o=s+((t=n+(o<<4&4294967295|o>>>28))^n^i)+r[8]+2272392833&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^n)+r[11]+1839030562&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^t)+r[14]+4259657740&4294967295,o=t+((n=i+(o<<23&4294967295|o>>>9))^i^s)+r[1]+2763975236&4294967295,o=s+((t=n+(o<<4&4294967295|o>>>28))^n^i)+r[4]+1272893353&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^n)+r[7]+4139469664&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^t)+r[10]+3200236656&4294967295,o=t+((n=i+(o<<23&4294967295|o>>>9))^i^s)+r[13]+681279174&4294967295,o=s+((t=n+(o<<4&4294967295|o>>>28))^n^i)+r[0]+3936430074&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^n)+r[3]+3572445317&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^t)+r[6]+76029189&4294967295,o=t+((n=i+(o<<23&4294967295|o>>>9))^i^s)+r[9]+3654602809&4294967295,o=s+((t=n+(o<<4&4294967295|o>>>28))^n^i)+r[12]+3873151461&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^n)+r[15]+530742520&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function n(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(e,n){void 0===n&&(n=e.length);for(var r=n-this.blockSize,i=this.B,s=this.h,o=0;o<n;){if(0==s)for(;o<=r;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<n;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,i),s=0;break}}else for(;o<n;)if(i[s++]=e[o++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=n},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var s,o={};function a(e){var t;return -128<=e&&128>e?(t=function(e){return new n([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(o,e)?o[e]:o[e]=t(e)):new n([0|e],0>e?-1:0)}function l(e){if(isNaN(e)||!isFinite(e))return u;if(0>e)return p(l(-e));for(var t=[],r=1,i=0;e>=r;i++)t[i]=e/r|0,r*=4294967296;return new n(t,0)}var u=a(0),h=a(1),c=a(16777216);function d(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function f(e){return -1==e.h}function p(e){for(var t=e.g.length,r=[],i=0;i<t;i++)r[i]=~e.g[i];return new n(r,~e.h).add(h)}function g(e,t){return e.add(p(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function v(e,t){if(d(t))throw Error("division by zero");if(d(e))return new y(u,u);if(f(e))return t=v(p(e),t),new y(p(t.g),p(t.h));if(f(t))return t=v(e,p(t)),new y(p(t.g),t.h);if(30<e.g.length){if(f(e)||f(t))throw Error("slowDivide_ only works with positive integers.");for(var n=h,r=t;0>=r.l(e);)n=w(n),r=w(r);var i=_(n,1),s=_(r,1);for(r=_(r,2),n=_(n,2);!d(r);){var o=s.add(r);0>=o.l(e)&&(i=i.add(n),s=o),r=_(r,1),n=_(n,1)}return t=g(e,i.j(t)),new y(i,t)}for(i=u;0<=e.l(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,r-48),o=(s=l(n)).j(t);f(o)||0<o.l(e);)n-=r,o=(s=l(n)).j(t);d(s)&&(s=h),i=i.add(s),e=g(e,o)}return new y(i,e)}function w(e){for(var t=e.g.length+1,r=[],i=0;i<t;i++)r[i]=e.i(i)<<1|e.i(i-1)>>>31;return new n(r,e.h)}function _(e,t){var r=t>>5;t%=32;for(var i=e.g.length-r,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+r)>>>t|e.i(o+r+1)<<32-t:e.i(o+r);return new n(s,e.h)}(s=n.prototype).m=function(){if(f(this))return-p(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},s.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(d(this))return"0";if(f(this))return"-"+p(this).toString(e);for(var t=l(Math.pow(e,6)),n=this,r="";;){var i=v(n,t).g,s=((0<(n=g(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(d(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},s.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},s.l=function(e){return f(e=g(this,e))?-1:d(e)?0:1},s.abs=function(){return f(this)?p(this):this},s.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,r[s]=a<<16|o}return new n(r,-2147483648&r[r.length-1]?-1:0)},s.j=function(e){if(d(this)||d(e))return u;if(f(this))return f(e)?p(this).j(p(e)):p(p(this).j(e));if(f(e))return p(this.j(p(e)));if(0>this.l(c)&&0>e.l(c))return l(this.m()*e.m());for(var t=this.g.length+e.g.length,r=[],i=0;i<2*t;i++)r[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var o=this.i(i)>>>16,a=65535&this.i(i),h=e.i(s)>>>16,g=65535&e.i(s);r[2*i+2*s]+=a*g,m(r,2*i+2*s),r[2*i+2*s+1]+=o*g,m(r,2*i+2*s+1),r[2*i+2*s+1]+=a*h,m(r,2*i+2*s+1),r[2*i+2*s+2]+=o*h,m(r,2*i+2*s+2)}for(i=0;i<t;i++)r[i]=r[2*i+1]<<16|r[2*i];for(i=t;i<2*t;i++)r[i]=0;return new n(r,0)},s.A=function(e){return v(this,e).h},s.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)&e.i(i);return new n(r,this.h&e.h)},s.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)|e.i(i);return new n(r,this.h|e.h)},s.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)^e.i(i);return new n(r,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,i=b.Md5=e,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.A,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=l,n.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return p(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=l(Math.pow(n,8)),i=u,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=l(Math.pow(n,o)),i=i.j(o).add(l(a))):i=(i=i.j(r)).add(l(a))}return i},r=b.Integer=n}).apply(void 0!==E?E:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},T={};(function(){var e,t,n,r="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof I&&I];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var n=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in n))break e;n=n[o]}(t=t(s=n[e=e[e.length-1]]))!=s&&null!=t&&r(n,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,n,r,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),n=0,r=!1,(i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var f=f||{},p=this||self;function g(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function y(e,t,n){return e.call.apply(e.bind,arguments)}function v(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return(w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v).apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function b(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(g(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}class S{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function A(e){return/^[\s\xa0]*$/.test(e)}function k(){var e=p.navigator;return e&&(e=e.userAgent)?e:""}function R(e){return R[" "](e),e}R[" "]=function(){};var N=-1!=k().indexOf("Gecko")&&!(-1!=k().toLowerCase().indexOf("webkit")&&-1==k().indexOf("Edge"))&&!(-1!=k().indexOf("Trident")||-1!=k().indexOf("MSIE"))&&-1==k().indexOf("Edge");function O(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function P(e){let t={};for(let n in e)t[n]=e[n];return t}let D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<D.length;t++)n=D[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}class x{constructor(){this.h=this.g=null}add(e,t){let n=M.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var M=new S(()=>new U,e=>e.reset());class U{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let V,F=!1,B=new x,j=()=>{let e=p.Promise.resolve(void 0);V=()=>{e.then($)}};var $=()=>{let e;for(var t;e=null,B.g&&(e=B.g,B.g=B.g.next,B.g||(B.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){p.setTimeout(()=>{throw e},0)}(e)}M.j(t),100>M.h&&(M.h++,t.next=M.g,M.g=t)}F=!1};function q(){this.s=this.s,this.C=this.C}function z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},z.prototype.h=function(){this.defaultPrevented=!0};var H=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};p.addEventListener("test",e,t),p.removeEventListener("test",e,t)}catch(e){}return e}();function K(e,t){if(z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(N){e:{try{R(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:G[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&K.aa.h.call(this)}}E(K,z);var G={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),Q=0;function X(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Q,this.da=this.fa=!1}function Y(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function J(e){this.src=e,this.g={},this.h=0}function Z(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Y(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ee(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}J.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ee(e,t,r,i);return -1<o?(t=e[o],n||(t.fa=!1)):((t=new X(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var et="closure_lm_"+(1e6*Math.random()|0),en={};function er(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=m(i)?!!i.capture:!!i,a=ea(e);if(a||(e[et]=a=new J(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function e(t){return eo.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)H||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(es(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ei(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[W])Z(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(es(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ea(t))?(Z(n,e),0==n.h&&(n.src=null,t[et]=null)):Y(e)}}}function es(e){return e in en?en[e]:en[e]="on"+e}function eo(e,t){if(e.da)e=!0;else{t=new K(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&ei(e),e=n.call(r,t)}return e}function ea(e){return(e=e[et])instanceof J?e:null}var el="__closure_events_fn_"+(1e9*Math.random()>>>0);function eu(e){return"function"==typeof e?e:(e[el]||(e[el]=function(t){return e.handleEvent(t)}),e[el])}function eh(){q.call(this),this.i=new J(this),this.M=this,this.F=null}function ec(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new z(t,e);else if(t instanceof z)t.target=t.target||e;else{var i=t;L(t=new z(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ed(o,r,!0,t)&&i}if(i=ed(o=t.g=e,r,!0,t)&&i,i=ed(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ed(o=t.g=n[s],r,!1,t)&&i}function ed(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&Z(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}function ef(e,t,n){if("function"==typeof e)n&&(e=w(e,n));else if(e&&"function"==typeof e.handleEvent)e=w(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:p.setTimeout(e,t||0)}E(eh,q),eh.prototype[W]=!0,eh.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else(i=m(i)?!!i.capture:!!i,r=eu(r),t&&t[W])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=ee(o=t.g[n],r,i,s))&&(Y(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=ea(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ee(n,r,i,s)),(r=-1<t?n[t]:null)&&ei(r))}(this,e,t,n,r)},eh.prototype.N=function(){if(eh.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Y(n[r]);delete t.g[e],t.h--}}this.F=null},eh.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},eh.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class ep extends q{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=ef(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eg(e){q.call(this),this.h=e,this.g={}}E(eg,q);var em=[];function ey(e){O(e.g,function(e,t){this.g.hasOwnProperty(t)&&ei(e)},e),e.g={}}eg.prototype.N=function(){eg.aa.N.call(this),ey(this)},eg.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ev=p.JSON.stringify,ew=p.JSON.parse,e_=class{stringify(e){return p.JSON.stringify(e,void 0)}parse(e){return p.JSON.parse(e,void 0)}};function eE(){}function eb(e){return e.h||(e.h=e.i())}function eI(){}eE.prototype.h=null;var eT={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eC(){z.call(this,"d")}function eS(){z.call(this,"c")}E(eC,z),E(eS,z);var eA={},ek=null;function eR(){return ek=ek||new eh}function eN(e){z.call(this,eA.La,e)}function eO(e){let t=eR();ec(t,new eN(t))}function eP(e,t){z.call(this,eA.STAT_EVENT,e),this.stat=t}function eD(e){let t=eR();ec(t,new eP(t,e))}function eL(e,t){z.call(this,eA.Ma,e),this.size=t}function ex(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){e()},t)}function eM(){this.g=!0}function eU(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return ev(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}eA.La="serverreachability",E(eN,z),eA.STAT_EVENT="statevent",E(eP,z),eA.Ma="timingevent",E(eL,z),eM.prototype.xa=function(){this.g=!1},eM.prototype.info=function(){};var eV={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eF={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eB(){}function ej(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new eg(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new e$}function e$(){this.i=null,this.g="",this.h=!1}E(eB,eE),eB.prototype.g=function(){return new XMLHttpRequest},eB.prototype.i=function(){return{}},t=new eB;var eq={},ez={};function eH(e,t,n){e.L=1,e.v=to(tt(t)),e.m=n,e.P=!0,eK(e,null)}function eK(e,t){e.F=Date.now(),eW(e),e.A=tt(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),tw(n.i,"t",r),e.C=0,n=e.j.J,e.h=new e$,e.g=t9(e.j,n?t:null,!e.m),0<e.O&&(e.M=new ep(w(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(em[0]=i.toString()),i=em);for(var s=0;s<i.length;s++){var o=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=eu(r),t&&t[W]?t.L(n,r,m(i)?!!i.capture:!!i,s):er(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=eu(r),t&&t[W]?t.K(n,r,m(i)?!!i.capture:!!i,s):er(t,n,r,!1,i,s)}(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?P(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),eO(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&"type"==c[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eG(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function eW(e){e.S=Date.now()+e.I,eQ(e,e.I)}function eQ(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ex(w(e.ba,e),t)}function eX(e){e.B&&(p.clearTimeout(e.B),e.B=null)}function eY(e){0==e.j.G||e.J||t0(e.j,e)}function eJ(e){eX(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ey(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eZ(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||e6(n.h,e))){if(!e.K&&e6(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)tZ(n),tq(n);else break e}tX(n),eD(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=ex(w(n.Za,n),6e3));if(1>=e4(n.h)&&n.ca){try{n.ca()}catch(e){}n.ca=void 0}}else t2(n,11)}else if((e.K||n.g==e)&&tZ(n),!A(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(n.T=a[0],a=a[1],2==n.G){if("c"==a[0]){n.K=a[1],n.ia=a[2];let t=a[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));let i=a[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e9(s,s.h),s.h=null))}if(r.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,ts(r.I,r.D,e))}}if(n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),(r=n).qa=t6(r,r.J?r.ia:null,r.W),e.K){e5(r.h,e);var o=r.L;o&&(e.I=o),e.B&&(eX(e),eW(e)),r.g=e}else tQ(r);0<n.i.length&&tH(n)}else"stop"!=a[0]&&"close"!=a[0]||t2(n,7)}else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?t2(n,7):t$(n):"noop"!=a[0]&&n.l&&n.l.ta(a),n.v=0)}}eO(4)}catch(e){}}ej.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tV(e)?t.j():this.Y(e)},ej.prototype.Y=function(e){try{if(e==this.g)e:{let c=tV(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>c)&&(3!=c||this.g&&(this.h.h||this.g.oa()||tF(this.g)))){this.J||4!=c||7==t||(8==t||0>=d?eO(3):eO(2)),eX(this);var n=this.g.Z();this.X=n;t:if(eG(this)){var r=tF(this.g);e="";var i=r.length,s=4==tV(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eJ(this),eY(this);var o="";break t}this.h.i=new p.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,c,n),this.o){if(this.T&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(a)){var u=a;break t}}u=null}if(n=u)eU(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eZ(this,n);else{this.o=!1,this.s=3,eD(12),eJ(this),eY(this);break e}}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;)if((e=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?ez:isNaN(n=Number(t.substring(n,r)))?eq:(r+=1)+n>t.length?ez:(t=t.slice(r,r+n),e.C=r+n,t)}(this,o))==ez){4==c&&(this.s=4,eD(14),n=!1),eU(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eq){this.s=4,eD(15),eU(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}else eU(this.i,this.l,e,null),eZ(this,e);if(eG(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=o.length||this.h.h||(this.s=1,eD(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),tY(h),h.M=!0,eD(11))}}else eU(this.i,this.l,o,"[Invalid Chunked Response]"),eJ(this),eY(this)}else eU(this.i,this.l,o,null),eZ(this,o);4==c&&eJ(this),this.o&&!this.J&&(4==c?t0(this.j,this):(this.o=!1,eW(this)))}else(function(e){let t={};e=(e.g&&2<=tV(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(A(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,eD(12)):(this.s=0,eD(13)),eJ(this),eY(this)}}}catch(e){}finally{}},ej.prototype.cancel=function(){this.J=!0,eJ(this)},ej.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(eO(),eD(17)),eJ(this),this.s=2,eY(this)):eQ(this,this.S-e)};var e0=class{constructor(e,t){this.g=e,this.map=t}};function e1(e){this.l=e||10,e=p.PerformanceNavigationTiming?0<(e=p.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function e2(e){return!!e.h||!!e.g&&e.g.size>=e.j}function e4(e){return e.h?1:e.g?e.g.size:0}function e6(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e9(e,t){e.g?e.g.add(t):e.h=t}function e5(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e3(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return b(e.i)}function e7(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(g(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(g(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(g(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}e1.prototype.cancel=function(){if(this.i=e3(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e8=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function te(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof te){this.h=e.h,tn(this,e.j),this.o=e.o,this.g=e.g,tr(this,e.s),this.l=e.l;var t=e.i,n=new tg;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ti(this,n),this.m=e.m}else e&&(t=String(e).match(e8))?(this.h=!1,tn(this,t[1]||"",!0),this.o=ta(t[2]||""),this.g=ta(t[3]||"",!0),tr(this,t[4]),this.l=ta(t[5]||"",!0),ti(this,t[6]||"",!0),this.m=ta(t[7]||"")):(this.h=!1,this.i=new tg(null,this.h))}function tt(e){return new te(e)}function tn(e,t,n){e.j=n?ta(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tr(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function ti(e,t,n){var r,i;t instanceof tg?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tm(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(ty(this,t),tw(this,n,e))},r)),r.j=i):(n||(t=tl(t,tf)),e.i=new tg(t,e.h))}function ts(e,t,n){e.i.set(t,n)}function to(e){return ts(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ta(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tl(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tu(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}te.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tl(t,th,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(tl(t,th,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tl(n,"/"==n.charAt(0)?td:tc,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",tl(n,tp)),e.join("")};var th=/[#\/\?@]/g,tc=/[#\?:]/g,td=/[#\?]/g,tf=/[#\?@]/g,tp=/#/g;function tg(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tm(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function ty(e,t){tm(e),t=t_(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tv(e,t){return tm(e),t=t_(e,t),e.g.has(t)}function tw(e,t,n){ty(e,t),0<n.length&&(e.i=null,e.g.set(t_(e,t),b(n)),e.h+=n.length)}function t_(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tE(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(e){}}function tb(){this.g=new e_}function tI(e){this.l=e.Ub||null,this.j=e.eb||!1}function tT(e,t){eh.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tC(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tS(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tA(e)}function tA(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tk(e){let t="";return O(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function tR(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tk(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ts(e,t,n))}function tN(e){eh.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(n=tg.prototype).add=function(e,t){tm(this),this.i=null,e=t_(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},n.forEach=function(e,t){tm(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},n.na=function(){tm(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},n.V=function(e){tm(this);let t=[];if("string"==typeof e)tv(this,e)&&(t=t.concat(this.g.get(t_(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},n.set=function(e,t){return tm(this),this.i=null,tv(this,e=t_(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},E(tI,eE),tI.prototype.g=function(){return new tT(this.l,this.j)},tI.prototype.i=(e={},function(){return e}),E(tT,eh),(n=tT.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tA(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||p).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tS(this)),this.readyState=0},n.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tA(this)),this.g&&(this.readyState=3,tA(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==p.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tC(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},n.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tS(this):tA(this),3==this.readyState&&tC(this)}},n.Ra=function(e){this.g&&(this.response=this.responseText=e,tS(this))},n.Qa=function(e){this.g&&(this.response=e,tS(this))},n.ga=function(){this.g&&tS(this)},n.setRequestHeader=function(e,t){this.u.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tT.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),E(tN,eh);var tO=/^https?$/i,tP=["POST","PUT"];function tD(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tL(e),tM(e)}function tL(e){e.A||(e.A=!0,ec(e,"complete"),ec(e,"error"))}function tx(e){if(e.h&&void 0!==f&&(!e.v[1]||4!=tV(e)||2!=e.Z())){if(e.u&&4==tV(e))ef(e.Ea,0,e);else if(ec(e,"readystatechange"),4==tV(e)){e.h=!1;try{let o=e.Z();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===o){var i=String(e.D).match(e8)[1]||null;!i&&p.self&&p.self.location&&(i=p.self.location.protocol.slice(0,-1)),n=!tO.test(i?i.toLowerCase():"")}t=n}if(t)ec(e,"complete"),ec(e,"success");else{e.m=6;try{var s=2<tV(e)?e.g.statusText:""}catch(e){s=""}e.l=s+" ["+e.Z()+"]",tL(e)}}finally{tM(e)}}}}function tM(e,t){if(e.g){tU(e);let n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ec(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function tU(e){e.I&&(p.clearTimeout(e.I),e.I=null)}function tV(e){return e.g?e.g.readyState:0}function tF(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tB(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tj(e){this.Aa=0,this.i=[],this.j=new eM,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tB("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tB("baseRetryDelayMs",5e3,e),this.cb=tB("retryDelaySeedMs",1e4,e),this.Wa=tB("forwardChannelMaxRetries",2,e),this.wa=tB("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new e1(e&&e.concurrentRequestLimit),this.Da=new tb,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function t$(e){if(tz(e),3==e.G){var t=e.U++,n=tt(e.I);if(ts(n,"SID",e.K),ts(n,"RID",t),ts(n,"TYPE","terminate"),tG(e,n),(t=new ej(e,e.j,t)).L=2,t.v=to(tt(n)),n=!1,p.navigator&&p.navigator.sendBeacon)try{n=p.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&p.Image&&((new Image).src=t.v,n=!0),n||(t.g=t9(t.j,null),t.g.ea(t.v)),t.F=Date.now(),eW(t)}t4(e)}function tq(e){e.g&&(tY(e),e.g.cancel(),e.g=null)}function tz(e){tq(e),e.u&&(p.clearTimeout(e.u),e.u=null),tZ(e),e.h.cancel(),e.s&&("number"==typeof e.s&&p.clearTimeout(e.s),e.s=null)}function tH(e){if(!e2(e.h)&&!e.s){e.s=!0;var t=e.Ga;V||j(),F||(V(),F=!0),B.add(t,e),e.B=0}}function tK(e,t){var n;n=t?t.l:e.U++;let r=tt(e.I);ts(r,"SID",e.K),ts(r,"RID",n),ts(r,"AID",e.T),tG(e,r),e.m&&e.o&&tR(r,e.m,e.o),n=new ej(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tW(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e9(e.h,n),eH(n,r,t)}function tG(e,t){e.H&&O(e.H,function(e,n){ts(t,n,e)}),e.l&&e7({},function(e,n){ts(t,n,e)})}function tW(e,t,n){n=Math.min(e.i.length,n);var r=e.l?w(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g,a=i[o].map;if(0>(n-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{e7(e,function(e,n){let i=e;m(e)&&(i=ev(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tQ(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;V||j(),F||(V(),F=!0),B.add(t,e),e.v=0}}function tX(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=ex(w(e.Fa,e),t1(e,e.v)),e.v++,!0)}function tY(e){null!=e.A&&(p.clearTimeout(e.A),e.A=null)}function tJ(e){e.g=new ej(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=tt(e.qa);ts(t,"RID","rpc"),ts(t,"SID",e.K),ts(t,"AID",e.T),ts(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ts(t,"TO",e.ja),ts(t,"TYPE","xmlhttp"),tG(e,t),e.m&&e.o&&tR(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=to(tt(t)),n.m=null,n.P=!0,eK(n,e)}function tZ(e){null!=e.C&&(p.clearTimeout(e.C),e.C=null)}function t0(e,t){var n=null;if(e.g==t){tZ(e),tY(e),e.g=null;var r=2}else{if(!e6(e.h,t))return;n=t.D,e5(e.h,t),r=1}if(0!=e.G){if(t.o){if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;ec(r=eR(),new eL(r,n)),tH(e)}else tQ(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==r&&(i=t,!(e4(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=ex(w(e.Ga,e,i),t1(e,e.B)),e.B++,!0)))||2==r&&tX(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),s){case 1:t2(e,5);break;case 4:t2(e,10);break;case 3:t2(e,6);break;default:t2(e,2)}}}function t1(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function t2(e,t){if(e.j.info("Error code "+t),2==t){var n=w(e.fb,e),r=e.Xa;let t=!r;r=new te(r||"//www.google.com/images/cleardot.gif"),p.location&&"http"==p.location.protocol||tn(r,"https"),to(r),t?function(e,t){let n=new eM;if(p.Image){let r=new Image;r.onload=_(tE,n,"TestLoadImage: loaded",!0,t,r),r.onerror=_(tE,n,"TestLoadImage: error",!1,t,r),r.onabort=_(tE,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=_(tE,n,"TestLoadImage: timeout",!1,t,r),p.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){let n=new eM,r=new AbortController,i=setTimeout(()=>{r.abort(),tE(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(i),e.ok?tE(n,"TestPingServer: ok",!0,t):tE(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tE(n,"TestPingServer: error",!1,t)})}(r.toString(),n)}else eD(2);e.G=0,e.l&&e.l.sa(t),t4(e),tz(e)}function t4(e){if(e.G=0,e.ka=[],e.l){let t=e3(e.h);(0!=t.length||0!=e.i.length)&&(C(e.ka,t),C(e.ka,e.i),e.h.i.length=0,b(e.i),e.i.length=0),e.l.ra()}}function t6(e,t,n){var r=n instanceof te?tt(n):new te(n);if(""!=r.g)t&&(r.g=t+"."+r.g),tr(r,r.s);else{var i=p.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new te(null);r&&tn(s,r),t&&(s.g=t),i&&tr(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.ya,n&&t&&ts(r,n,t),ts(r,"VER",e.la),tG(e,r),r}function t9(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tN(e.Ca&&!e.pa?new tI({eb:n}):e.pa)).Ha(e.J),t}function t5(){}function t3(){}function t7(e,t){eh.call(this),this.g=new tj(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!A(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!A(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nt(this)}function t8(e){eC.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ne(){eS.call(this),this.status=1}function nt(e){this.g=e}(n=tN.prototype).Ha=function(e){this.J=e},n.ea=function(e,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);n=n?n.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?eb(this.o):eb(t),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(n,String(e),!0),this.B=!1}catch(e){tD(this,e);return}if(e=r||"",r=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)r.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())r.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,o]of(i=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),s=p.FormData&&e instanceof p.FormData,!(0<=Array.prototype.indexOf.call(tP,n,void 0))||i||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(t,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tU(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tD(this,e)}},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ec(this,"complete"),ec(this,"abort"),tM(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tM(this,!0)),tN.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tx(this):this.bb())},n.bb=function(){tx(this)},n.isActive=function(){return!!this.g},n.Z=function(){try{return 2<tV(this)?this.g.status:-1}catch(e){return -1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ew(t)}},n.Ba=function(){return this.m},n.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(n=tj.prototype).la=8,n.G=1,n.connect=function(e,t,n,r){eD(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=t6(this,null,this.W),tH(this)},n.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new ej(this,this.j,e),s=this.o;if(this.S&&(s?L(s=P(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tW(this,i,t),ts(n=tt(this.I),"RID",e),ts(n,"CVER",22),this.D&&ts(n,"X-HTTP-Session-Id",this.D),tG(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(tk(s)))+"&"+t:this.m&&tR(n,this.m,s)),e9(this.h,i),this.Ua&&ts(n,"TYPE","init"),this.P?(ts(n,"$req",t),ts(n,"SID","null"),i.T=!0,eH(i,n,null)):eH(i,n,t),this.G=2}}else 3==this.G&&(e?tK(this,e):0==this.i.length||e2(this.h)||tK(this))}},n.Fa=function(){if(this.u=null,tJ(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=ex(w(this.ab,this),e)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eD(10),tq(this),tJ(this))},n.Za=function(){null!=this.C&&(this.C=null,tq(this),tX(this),eD(19))},n.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eD(2)):(this.j.info("Failed to ping google.com"),eD(1))},n.isActive=function(){return!!this.l&&this.l.isActive(this)},(n=t5.prototype).ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){},t3.prototype.g=function(e,t){return new t7(e,t)},E(t7,eh),t7.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t7.prototype.close=function(){t$(this.g)},t7.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ev(e),e=n);t.i.push(new e0(t.Ya++,e)),3==t.G&&tH(t)},t7.prototype.N=function(){this.g.l=null,delete this.j,t$(this.g),delete this.g,t7.aa.N.call(this)},E(t8,eC),E(ne,eS),E(nt,t5),nt.prototype.ua=function(){ec(this.g,"a")},nt.prototype.ta=function(e){ec(this.g,new t8(e))},nt.prototype.sa=function(e){ec(this.g,new ne)},nt.prototype.ra=function(){ec(this.g,"b")},t3.prototype.createWebChannel=t3.prototype.g,t7.prototype.send=t7.prototype.o,t7.prototype.open=t7.prototype.m,t7.prototype.close=t7.prototype.close,d=T.createWebChannelTransport=function(){return new t3},c=T.getStatEventTarget=function(){return eR()},h=T.Event=eA,u=T.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eV.NO_ERROR=0,eV.TIMEOUT=8,eV.HTTP_ERROR=6,l=T.ErrorCode=eV,eF.COMPLETE="complete",a=T.EventType=eF,eI.EventType=eT,eT.OPEN="a",eT.CLOSE="b",eT.ERROR="c",eT.MESSAGE="d",eh.prototype.listen=eh.prototype.K,o=T.WebChannel=eI,T.FetchXmlHttpFactory=tI,tN.prototype.listenOnce=tN.prototype.L,tN.prototype.getLastError=tN.prototype.Ka,tN.prototype.getLastErrorCode=tN.prototype.Ba,tN.prototype.getStatus=tN.prototype.Z,tN.prototype.getResponseJson=tN.prototype.Oa,tN.prototype.getResponseText=tN.prototype.oa,tN.prototype.send=tN.prototype.ea,tN.prototype.setWithCredentials=tN.prototype.Ha,s=T.XhrIo=tN}).apply(void 0!==I?I:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),n(4155);var C=n(8764).lW;let S="@firebase/firestore",A="4.7.17";class k{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}k.UNAUTHENTICATED=new k(null),k.GOOGLE_CREDENTIALS=new k("google-credentials-uid"),k.FIRST_PARTY=new k("first-party-uid"),k.MOCK_USER=new k("mock-user");let R="11.9.0",N=new w.Yd("@firebase/firestore");function O(){return N.logLevel}function P(e,...t){if(N.logLevel<=w.in.DEBUG){let n=t.map(x);N.debug(`Firestore (${R}): ${e}`,...n)}}function D(e,...t){if(N.logLevel<=w.in.ERROR){let n=t.map(x);N.error(`Firestore (${R}): ${e}`,...n)}}function L(e,...t){if(N.logLevel<=w.in.WARN){let n=t.map(x);N.warn(`Firestore (${R}): ${e}`,...n)}}function x(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}function M(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,U(e,r,n)}function U(e,t,n){let r=`FIRESTORE (${R}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw D(r),Error(r)}function V(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||U(t,i,r)}let F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends _.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}class j{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}class ${constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class q{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(k.UNAUTHENTICATED))}shutdown(){}}class z{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class H{constructor(e){this.t=e,this.currentUser=k.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){V(void 0===this.o,42304);let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new j;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new j,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new j)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(V("string"==typeof t.accessToken,31837,{l:t}),new $(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return V(null===e||"string"==typeof e,2055,{h:e}),new k(e)}}class K{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=k.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class G{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new K(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(k.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class W{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Q{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,y.rh)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){V(void 0===this.o,3512);let n=e=>{null!=e.error&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.m;return this.m=e.token,P("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?r(e):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new W(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(V("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new W(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function X(){return new TextEncoder}class Y{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let n=function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function J(e,t){return e<t?-1:e>t?1:0}function Z(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=e.codePointAt(n),i=t.codePointAt(n);if(r!==i){if(r<128&&i<128)return J(r,i);{let s=X(),o=function(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return J(e[n],t[n]);return J(e.length,t.length)}(s.encode(ee(e,n)),s.encode(ee(t,n)));return 0!==o?o:J(r,i)}}n+=r>65535?2:1}return J(e.length,t.length)}function ee(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function et(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}class en{static now(){return en.fromMillis(Date.now())}static fromDate(e){return en.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new en(t,Math.floor((e-1e3*t)*1e6))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new B(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new B(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}class er{static fromTimestamp(e){return new er(e)}static min(){return new er(new en(0,0))}static max(){return new er(new en(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}let ei="__name__";class es{constructor(e,t,n){void 0===t?t=0:t>e.length&&M(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===es.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof es?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=es.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return J(e.length,t.length)}static compareSegments(e,t){let n=es.isNumericId(e),r=es.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?es.extractNumericId(e).compare(es.extractNumericId(t)):Z(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return r.fromString(e.substring(4,e.length-2))}}class eo extends es{construct(e,t,n){return new eo(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new B(F.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new eo(t)}static emptyPath(){return new eo([])}}let ea=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class el extends es{construct(e,t,n){return new el(e,t,n)}static isValidIdentifier(e){return ea.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),el.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===ei}static keyField(){return new el([ei])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new B(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new B(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new B(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new B(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new el(t)}static emptyPath(){return new el([])}}class eu{constructor(e){this.path=e}static fromPath(e){return new eu(eo.fromString(e))}static fromName(e){return new eu(eo.fromString(e).popFirst(5))}static empty(){return new eu(eo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===eo.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return eo.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new eu(new eo(e.slice()))}}class eh{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}eh.UNKNOWN_ID=-1;class ec{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ec(er.min(),eu.empty(),-1)}static max(){return new ec(er.max(),eu.empty(),-1)}}class ed{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}async function ef(e){if(e.code!==F.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;P("LocalStore","Unexpectedly lost primary lease")}class ep{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ep((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ep?t:ep.resolve(t)}catch(e){return ep.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ep.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ep.reject(t)}static resolve(e){return new ep((t,n)=>{t(e)})}static reject(e){return new ep((t,n)=>{n(e)})}static waitFor(e){return new ep((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=ep.resolve(!1);for(let n of e)t=t.next(e=>e?ep.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new ep((n,r)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new ep((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function eg(e){return"IndexedDbTransactionError"===e.name}class em{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ue(e),this.ce=e=>t.writeSequenceNumber(e))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ce&&this.ce(e),e}}function ey(e){return 0===e&&1/e==-1/0}function ev(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ew(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function e_(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}em.le=-1;class eE{constructor(e,t){this.comparator=e,this.root=t||eI.EMPTY}insert(e,t){return new eE(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eI.BLACK,null,null))}remove(e){return new eE(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eI.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eb(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eb(this.root,e,this.comparator,!1)}getReverseIterator(){return new eb(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eb(this.root,e,this.comparator,!0)}}class eb{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eI{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:eI.RED,this.left=null!=r?r:eI.EMPTY,this.right=null!=i?i:eI.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new eI(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eI.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eI.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eI.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eI.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}eI.EMPTY=null,eI.RED=!0,eI.BLACK=!1,eI.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new eI(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};class eT{constructor(e){this.comparator=e,this.data=new eE(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eC(this.data.getIterator())}getIteratorFrom(e){return new eC(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eT)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eT(this.comparator);return t.data=e,t}}class eC{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}class eS{constructor(e){this.fields=e,e.sort(el.comparator)}static empty(){return new eS([])}unionWith(e){let t=new eT(el.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eS(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return et(this.fields,e.fields,(e,t)=>e.isEqual(t))}}class eA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}class ek{constructor(e){this.binaryString=e}static fromBase64String(e){return new ek(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eA("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new ek(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ek.EMPTY_BYTE_STRING=new ek("");let eR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eN(e){if(V(!!e,39018),"string"==typeof e){let t=0,n=eR.exec(e);if(V(!!n,46558,{timestamp:e}),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:eO(e.seconds),nanos:eO(e.nanos)}}function eO(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eP(e){return"string"==typeof e?ek.fromBase64String(e):ek.fromUint8Array(e)}let eD="server_timestamp",eL="__type__",ex="__previous_value__",eM="__local_write_time__";function eU(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[eL])||void 0===n?void 0:n.stringValue)===eD}function eV(e){let t=e.mapValue.fields[ex];return eU(t)?eV(t):t}function eF(e){let t=eN(e.mapValue.fields[eM].timestampValue);return new en(t.seconds,t.nanos)}class eB{constructor(e,t,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l,this.isUsingEmulator=u}}let ej="(default)";class e${constructor(e,t){this.projectId=e,this.database=t||ej}static empty(){return new e$("","")}get isDefaultDatabase(){return this.database===ej}isEqual(e){return e instanceof e$&&e.projectId===this.projectId&&e.database===this.database}}let eq="__type__",ez="__max__",eH={mapValue:{fields:{__type__:{stringValue:ez}}}},eK="__vector__",eG="value";function eW(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eU(e)?4:e8(e)?9007199254740991:e3(e)?10:11:M(28295,{value:e})}function eQ(e,t){if(e===t)return!0;let n=eW(e);if(n!==eW(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eF(e).isEqual(eF(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eN(e.timestampValue),r=eN(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eP(e.bytesValue).isEqual(eP(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eO(e.geoPointValue.latitude)===eO(t.geoPointValue.latitude)&&eO(e.geoPointValue.longitude)===eO(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eO(e.integerValue)===eO(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=eO(e.doubleValue),r=eO(t.doubleValue);return n===r?ey(n)===ey(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return et(e.arrayValue.values||[],t.arrayValue.values||[],eQ);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ev(n)!==ev(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eQ(n[e],r[e])))return!1;return!0}(e,t);default:return M(52216,{left:e})}}function eX(e,t){return void 0!==(e.values||[]).find(e=>eQ(e,t))}function eY(e,t){if(e===t)return 0;let n=eW(e),r=eW(t);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=eO(e.integerValue||e.doubleValue),r=eO(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eJ(e.timestampValue,t.timestampValue);case 4:return eJ(eF(e),eF(t));case 5:return Z(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eP(e),r=eP(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=J(n[e],r[e]);if(0!==t)return t}return J(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=J(eO(e.latitude),eO(t.latitude));return 0!==n?n:J(eO(e.longitude),eO(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return eZ(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;let o=e.fields||{},a=t.fields||{},l=null===(n=o[eG])||void 0===n?void 0:n.arrayValue,u=null===(r=a[eG])||void 0===r?void 0:r.arrayValue,h=J((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:eZ(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===eH.mapValue&&t===eH.mapValue)return 0;if(e===eH.mapValue)return 1;if(t===eH.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=Z(r[e],s[e]);if(0!==t)return t;let o=eY(n[r[e]],i[s[e]]);if(0!==o)return o}return J(r.length,s.length)}(e.mapValue,t.mapValue);default:throw M(23264,{Pe:n})}}function eJ(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return J(e,t);let n=eN(e),r=eN(t),i=J(n.seconds,r.seconds);return 0!==i?i:J(n.nanos,r.nanos)}function eZ(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=eY(n[e],r[e]);if(t)return t}return J(n.length,r.length)}function e0(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eN(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eP(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,eu.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=e0(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${e0(e.fields[i])}`;return n+"}"}(e.mapValue):M(61005,{value:e})}function e1(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function e2(e){return!!e&&"integerValue"in e}function e4(e){return!!e&&"arrayValue"in e}function e6(e){return!!e&&"nullValue"in e}function e9(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function e5(e){return!!e&&"mapValue"in e}function e3(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[eq])||void 0===n?void 0:n.stringValue)===eK}function e7(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ew(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=e7(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=e7(e.arrayValue.values[n]);return t}return Object.assign({},e)}function e8(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===ez}class te{constructor(e){this.value=e}static empty(){return new te({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!e5(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=e7(t)}setAll(e){let t=el.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=e7(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());e5(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eQ(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];e5(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(ew(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new te(e7(this.value))}}class tt{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new tt(e,0,er.min(),er.min(),er.min(),te.empty(),0)}static newFoundDocument(e,t,n,r){return new tt(e,1,t,er.min(),n,r,0)}static newNoDocument(e,t){return new tt(e,2,t,er.min(),er.min(),te.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,er.min(),er.min(),te.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(er.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=te.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=er.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class tn{constructor(e,t){this.position=e,this.inclusive=t}}function tr(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(r=s.field.isKeyField()?eu.comparator(eu.fromName(o.referenceValue),n.key):eY(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ti(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eQ(e.position[n],t.position[n]))return!1;return!0}class ts{constructor(e,t="asc"){this.field=e,this.dir=t}}class to{}class ta extends to{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tc(e,t,n):"array-contains"===t?new tg(e,n):"in"===t?new tm(e,n):"not-in"===t?new ty(e,n):"array-contains-any"===t?new tv(e,n):new ta(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new td(e,n):new tf(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(eY(t,this.value)):null!==t&&eW(this.value)===eW(t)&&this.matchesComparison(eY(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tl extends to{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new tl(e,t)}matches(e){return tu(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Te||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function tu(e){return"and"===e.op}function th(e){for(let t of e.filters)if(t instanceof tl)return!1;return!0}class tc extends ta{constructor(e,t,n){super(e,t,n),this.key=eu.fromName(n.referenceValue)}matches(e){let t=eu.comparator(e.key,this.key);return this.matchesComparison(t)}}class td extends ta{constructor(e,t){super(e,"in",t),this.keys=tp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tf extends ta{constructor(e,t){super(e,"not-in",t),this.keys=tp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tp(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>eu.fromName(e.referenceValue))}class tg extends ta{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return e4(t)&&eX(t.arrayValue,this.value)}}class tm extends ta{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eX(this.value.arrayValue,t)}}class ty extends ta{constructor(e,t){super(e,"not-in",t)}matches(e){if(eX(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!eX(this.value.arrayValue,t)}}class tv extends ta{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!e4(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eX(this.value.arrayValue,e))}}class tw{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Ie=null}}function t_(e,t=null,n=[],r=[],i=null,s=null,o=null){return new tw(e,t,n,r,i,s,o)}function tE(e){if(null===e.Ie){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof ta)return t.field.canonicalString()+t.op.toString()+e0(t.value);if(th(t)&&tu(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>e0(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>e0(e)).join(",")),e.Ie=t}return e.Ie}function tb(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof ta?n instanceof ta&&t.op===n.op&&t.field.isEqual(n.field)&&eQ(t.value,n.value):t instanceof tl?n instanceof tl&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void M(19439)}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ti(e.startAt,t.startAt)&&ti(e.endAt,t.endAt)}function tI(e){return eu.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class tT{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function tC(e){return new tT(e)}function tS(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tA(e){return null!==e.collectionGroup}function tk(e){if(null===e.Ee){let t;e.Ee=[];let n=new Set;for(let t of e.explicitOrderBy)e.Ee.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new eT(el.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.Ee.push(new ts(t,r))}),n.has(el.keyField().canonicalString())||e.Ee.push(new ts(el.keyField(),r))}return e.Ee}function tR(e){return e.de||(e.de=function(e,t){if("F"===e.limitType)return t_(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new ts(e.field,t)});let n=e.endAt?new tn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new tn(e.startAt.position,e.startAt.inclusive):null;return t_(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,tk(e))),e.de}function tN(e,t){let n=e.filters.concat([t]);return new tT(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function tO(e,t,n){return new tT(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tP(e,t){return tb(tR(e),tR(t))&&e.limitType===t.limitType}function tD(e){return`${tE(tR(e))}|lt:${e.limitType}`}function tL(e){var t;let n;return`Query(target=${n=(t=tR(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof ta?`${t.field.canonicalString()} ${t.op} ${e0(t.value)}`:t instanceof tl?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>e0(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>e0(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tx(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):eu.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of tk(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=tr(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tk(e),t))&&(!e.endAt||!!function(e,t,n){let r=tr(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tk(e),t))}function tM(e){return(t,n)=>{let r=!1;for(let i of tk(e)){let e=function(e,t,n){let r=e.field.isKeyField()?eu.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eY(r,i):M(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return M(19790,{direction:e.dir})}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}class tU{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ew(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return e_(this.inner)}size(){return this.innerSize}}let tV=new eE(eu.comparator),tF=new eE(eu.comparator);function tB(...e){let t=tF;for(let n of e)t=t.insert(n.key,n);return t}function tj(e){let t=tF;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function t$(){return new tU(e=>e.toString(),(e,t)=>e.isEqual(t))}let tq=new eE(eu.comparator),tz=new eT(eu.comparator);function tH(...e){let t=tz;for(let n of e)t=t.add(n);return t}let tK=new eT(J);function tG(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ey(t)?"-0":t}}function tW(e){return{integerValue:""+e}}class tQ{constructor(){this._=void 0}}function tX(e,t){return e instanceof t2?e2(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tY extends tQ{}class tJ extends tQ{constructor(e){super(),this.elements=e}}function tZ(e,t){let n=t6(t);for(let t of e.elements)n.some(e=>eQ(e,t))||n.push(t);return{arrayValue:{values:n}}}class t0 extends tQ{constructor(e){super(),this.elements=e}}function t1(e,t){let n=t6(t);for(let t of e.elements)n=n.filter(e=>!eQ(e,t));return{arrayValue:{values:n}}}class t2 extends tQ{constructor(e,t){super(),this.serializer=e,this.Re=t}}function t4(e){return eO(e.integerValue||e.doubleValue)}function t6(e){return e4(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class t9{constructor(e,t){this.field=e,this.transform=t}}class t5{constructor(e,t){this.version=e,this.transformResults=t}}class t3{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new t3}static exists(e){return new t3(void 0,e)}static updateTime(e){return new t3(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function t7(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class t8{}function ne(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nl(e.key,t3.none()):new nr(e.key,e.data,t3.none());{let n=e.data,r=te.empty(),i=new eT(el.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new ni(e.key,r,new eS(i.toArray()),t3.none())}}function nt(e,t,n,r){return e instanceof nr?function(e,t,n,r){if(!t7(e.precondition,t))return n;let i=e.value.clone(),s=na(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ni?function(e,t,n,r){if(!t7(e.precondition,t))return n;let i=na(e.fieldTransforms,r,t),s=t.data;return(s.setAll(ns(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):t7(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function nn(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&et(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tJ&&r instanceof tJ||n instanceof t0&&r instanceof t0?et(n.elements,r.elements,eQ):n instanceof t2&&r instanceof t2?eQ(n.Re,r.Re):n instanceof tY&&r instanceof tY)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nr extends t8{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ni extends t8{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ns(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function no(e,t,n){let r=new Map;V(e.length===n.length,32656,{Ve:n.length,me:e.length});for(let s=0;s<n.length;s++){var i;let o=e[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,(i=n[s],a instanceof tJ?tZ(a,l):a instanceof t0?t1(a,l):i))}return r}function na(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tY?function(e,t){let n={fields:{[eL]:{stringValue:eD},[eM]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eU(t)&&(t=eV(t)),t&&(n.fields[ex]=t),{mapValue:n}}(t,s):e instanceof tJ?tZ(e,s):e instanceof t0?t1(e,s):function(e,t){let n=tX(e,t),r=t4(n)+t4(e.Re);return e2(n)&&e2(e.Re)?tW(r):tG(e.serializer,r)}(e,s))}return r}class nl extends t8{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nu extends t8{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class nh{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof nr?function(e,t,n){let r=e.value.clone(),i=no(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof ni?function(e,t,n){if(!t7(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=no(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ns(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=nt(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=nt(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=t$();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields),a=ne(s,o=t.has(r.key)?null:o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(er.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tH())}isEqual(e){return this.batchId===e.batchId&&et(this.mutations,e.mutations,(e,t)=>nn(e,t))&&et(this.baseMutations,e.baseMutations,(e,t)=>nn(e,t))}}class nc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){V(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let r=tq,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nc(e,t,n,r)}}class nd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
                                largestBatchId: ${
                                    this.largestBatchId
                                },
                                mutation: ${
                                    this.mutation.toString()
                                }
                        }
                        `}}class nf{constructor(e,t){this.count=e,this.unchangedNames=t}}function np(e){if(void 0===e)return D("GRPC error has no .code"),F.UNKNOWN;switch(e){case f.OK:return F.OK;case f.CANCELLED:return F.CANCELLED;case f.UNKNOWN:return F.UNKNOWN;case f.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case f.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case f.INTERNAL:return F.INTERNAL;case f.UNAVAILABLE:return F.UNAVAILABLE;case f.UNAUTHENTICATED:return F.UNAUTHENTICATED;case f.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case f.NOT_FOUND:return F.NOT_FOUND;case f.ALREADY_EXISTS:return F.ALREADY_EXISTS;case f.PERMISSION_DENIED:return F.PERMISSION_DENIED;case f.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case f.ABORTED:return F.ABORTED;case f.OUT_OF_RANGE:return F.OUT_OF_RANGE;case f.UNIMPLEMENTED:return F.UNIMPLEMENTED;case f.DATA_LOSS:return F.DATA_LOSS;default:return M(39323,{code:e})}}(p=f||(f={}))[p.OK=0]="OK",p[p.CANCELLED=1]="CANCELLED",p[p.UNKNOWN=2]="UNKNOWN",p[p.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",p[p.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",p[p.NOT_FOUND=5]="NOT_FOUND",p[p.ALREADY_EXISTS=6]="ALREADY_EXISTS",p[p.PERMISSION_DENIED=7]="PERMISSION_DENIED",p[p.UNAUTHENTICATED=16]="UNAUTHENTICATED",p[p.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",p[p.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",p[p.ABORTED=10]="ABORTED",p[p.OUT_OF_RANGE=11]="OUT_OF_RANGE",p[p.UNIMPLEMENTED=12]="UNIMPLEMENTED",p[p.INTERNAL=13]="INTERNAL",p[p.UNAVAILABLE=14]="UNAVAILABLE",p[p.DATA_LOSS=15]="DATA_LOSS";let ng=new r([4294967295,4294967295],0);function nm(e){let t=X().encode(e),n=new i;return n.update(t),new Uint8Array(n.digest())}function ny(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class nv{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nw(`
                        Invalid padding: ${
                            t
                        }
                        `);if(n<0||e.length>0&&0===this.hashCount)throw new nw(`
                        Invalid hash count: ${
                            n
                        }
                        `);if(0===e.length&&0!==t)throw new nw(`
                        Invalid padding when bitmap length is 0: ${
                            t
                        }
                        `);this.pe=8*e.length-t,this.ye=r.fromNumber(this.pe)}we(e,t,n){let i=e.add(t.multiply(r.fromNumber(n)));return 1===i.compare(ng)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.pe)return!1;let[t,n]=ny(nm(e));for(let e=0;e<this.hashCount;e++){let r=this.we(t,n,e);if(!this.be(r))return!1}return!0}static create(e,t,n){let r=new nv(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.pe)return;let[t,n]=ny(nm(e));for(let e=0;e<this.hashCount;e++){let r=this.we(t,n,e);this.Se(r)}}Se(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class nw extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}class n_{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nE.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new n_(er.min(),r,new eE(J),tV,tH())}}class nE{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nE(n,t,tH(),tH(),tH())}}class nb{constructor(e,t,n,r){this.De=e,this.removedTargetIds=t,this.key=n,this.ve=r}}class nI{constructor(e,t){this.targetId=e,this.Ce=t}}class nT{constructor(e,t,n=ek.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class nC{constructor(){this.Fe=0,this.Me=nk(),this.xe=ek.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return 0!==this.Fe}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=tH(),t=tH(),n=tH();return this.Me.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:M(38017,{changeType:i})}}),new nE(this.xe,this.Oe,e,t,n)}Qe(){this.Ne=!1,this.Me=nk()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,V(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class nS{constructor(e){this.ze=e,this.je=new Map,this.He=tV,this.Je=nA(),this.Ye=nA(),this.Ze=new eE(J)}Xe(e){for(let t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(let t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{let n=this.rt(t);switch(e.state){case 0:this.it(t)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(t);break;case 3:this.it(t)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),n.ke(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((e,n)=>{this.it(n)&&t(n)})}ot(e){let t=e.targetId,n=e.Ce.count,r=this._t(t);if(r){let i=r.target;if(tI(i)){if(0===n){let e=new eu(i.path);this.tt(t,e,tt.newNoDocument(e,er.min()))}else V(1===n,20013,{expectedCount:n})}else{let r=this.ut(t);if(r!==n){let n=this.ct(e),i=n?this.lt(n,e,r):1;0!==i&&(this.st(t),this.Ze=this.Ze.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}ct(e){let t,n;let r=e.Ce.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=r;try{t=eP(i).toUint8Array()}catch(e){if(e instanceof eA)return L("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new nv(t,s,o)}catch(e){return L(e instanceof nw?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.pe?null:n}lt(e,t,n){return t.Ce.count===n-this.Tt(e,t.targetId)?0:2}Tt(e,t){let n=this.ze.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.ze.Pt(),s=`
                        projects / ${
                            i.projectId
                        }
                        /databases/${
                            i.database
                        }
                        /documents/${
                            n.path.canonicalString()
                        }
                        `;e.mightContain(s)||(this.tt(t,n,null),r++)}),r}It(e){let t=new Map;this.je.forEach((n,r)=>{let i=this._t(r);if(i){if(n.current&&tI(i.target)){let t=new eu(i.target.path);this.Et(t).has(r)||this.dt(r,t)||this.tt(r,t,tt.newNoDocument(t,e))}n.Le&&(t.set(r,n.qe()),n.Qe())}});let n=tH();this.Ye.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this._t(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.He.forEach((t,n)=>n.setReadTime(e));let r=new n_(e,t,this.Ze,this.He,n);return this.He=tV,this.Je=nA(),this.Ye=nA(),this.Ze=new eE(J),r}et(e,t){if(!this.it(e))return;let n=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,n),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,n){if(!this.it(e))return;let r=this.rt(e);this.dt(e,t)?r.$e(t,1):r.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),n&&(this.He=this.He.insert(t,n))}removeTarget(e){this.je.delete(e)}ut(e){let t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new nC,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new eT(J),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new eT(J),this.Je=this.Je.insert(e,t)),t}it(e){let t=null!==this._t(e);return t||P("WatchChangeAggregator","Detected inactive target",e),t}_t(e){let t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new nC),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function nA(){return new eE(eu.comparator)}function nk(){return new eE(eu.comparator)}let nR={asc:"ASCENDING",desc:"DESCENDING"},nN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nO={and:"AND",or:"OR"};class nP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nD(e,t){return e.useProto3Json||null==t?t:{value:t}}function nL(e,t){return e.useProto3Json?`
                        ${
                            new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")
                        }.${
                            ("000000000" + t.nanoseconds).slice(-9)
                        }
                        Z `:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nx(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nM(e){return V(!!e,49232),er.fromTimestamp(function(e){let t=eN(e);return new en(t.seconds,t.nanos)}(e))}function nU(e,t){return nV(e,t).canonicalString()}function nV(e,t){let n=new eo(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function nF(e){let t=eo.fromString(e);return V(nW(t),10190,{key:t.toString()}),t}function nB(e,t){return nU(e.databaseId,t.path)}function nj(e,t){let n=nF(t);if(n.get(1)!==e.databaseId.projectId)throw new B(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new B(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new eu(nz(n))}function n$(e,t){return nU(e.databaseId,t)}function nq(e){return new eo(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nz(e){return V(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function nH(e,t,n){return{name:nB(e,t),fields:n.value.mapValue.fields}}function nK(e){return{fieldPath:e.canonicalString()}}function nG(e){return el.fromServerFormat(e.fieldPath)}function nW(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}class nQ{constructor(e,t,n,r,i=er.min(),s=er.min(),o=ek.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new nQ(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nQ(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nQ(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nQ(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}class nX{constructor(e){this.wt=e}}class nY{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(eO(e.integerValue));else if("doubleValue"in e){let n=eO(e.doubleValue);isNaN(n)?this.Mt(t,13):(this.Mt(t,15),ey(n)?t.xt(0):t.xt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Mt(t,20),"string"==typeof n&&(n=eN(n)),t.Ot(`
                        ${
                            n.seconds || ""
                        }
                        `),t.xt(n.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(eP(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Mt(t,45),t.xt(n.latitude||0),t.xt(n.longitude||0)}else"mapValue"in e?e8(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):e3(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):M(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){let n=e.fields||{};for(let e of(this.Mt(t,55),Object.keys(n)))this.Nt(e,t),this.Ct(n[e],t)}qt(e,t){var n,r;let i=e.fields||{};this.Mt(t,53);let s=(null===(r=null===(n=i[eG].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Mt(t,15),t.xt(eO(s)),this.Nt(eG,t),this.Ct(i[eG],t)}$t(e,t){let n=e.values||[];for(let e of(this.Mt(t,50),n))this.Ct(e,t)}kt(e,t){this.Mt(t,37),eu.fromName(e).path.forEach(e=>{this.Mt(t,60),this.Kt(e,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}nY.Wt=new nY;class nJ{constructor(){this.Cn=new nZ}addToCollectionParentIndex(e,t){return this.Cn.add(t),ep.resolve()}getCollectionParents(e,t){return ep.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ep.resolve()}deleteFieldIndex(e,t){return ep.resolve()}deleteAllFieldIndexes(e){return ep.resolve()}createTargetIndexes(e,t){return ep.resolve()}getDocumentsMatchingTarget(e,t){return ep.resolve(null)}getIndexType(e,t){return ep.resolve(0)}getFieldIndexes(e,t){return ep.resolve([])}getNextCollectionGroupToUpdate(e){return ep.resolve(null)}getMinOffset(e,t){return ep.resolve(ec.min())}getMinOffsetFromCollectionGroup(e,t){return ep.resolve(ec.min())}updateCollectionGroup(e,t,n){return ep.resolve()}updateIndexEntries(e,t){return ep.resolve()}}class nZ{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new eT(eo.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new eT(eo.comparator)).toArray()}}new Uint8Array(0);let n0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class n1{static withCacheSize(e){return new n1(e,n1.DEFAULT_COLLECTION_PERCENTILE,n1.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}n1.DEFAULT_COLLECTION_PERCENTILE=10,n1.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,n1.DEFAULT=new n1(41943040,n1.DEFAULT_COLLECTION_PERCENTILE,n1.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),n1.DISABLED=new n1(-1,0,0);class n2{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new n2(0)}static lr(){return new n2(-1)}}let n4="LruGarbageCollector";function n6([e,t],[n,r]){let i=J(e,n);return 0===i?J(t,r):i}class n9{constructor(e){this.Er=e,this.buffer=new eT(n6),this.dr=0}Ar(){return++this.dr}Rr(e){let t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>n6(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class n5{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Vr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return null!==this.Vr}mr(e){P(n4,`
                        Garbage collection scheduled in ${
                            e
                        }
                        ms `),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){eg(e)?P(n4,"Ignoring IndexedDB error during garbage collection: ",e):await ef(e)}await this.mr(3e5)})}}class n3{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ep.resolve(em.le);let n=new n9(t);return this.gr.forEachTarget(e,e=>n.Rr(e.sequenceNumber)).next(()=>this.gr.yr(e,e=>n.Rr(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.gr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector","Garbage collection skipped; disabled"),ep.resolve(n0)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`
                        Garbage collection skipped;
                        Cache size ${
                            n
                        }
                        is lower than threshold ${
                            this.params.cacheSizeCollectionThreshold
                        }
                        `),n0):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let n,r,i,s,o,a,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`
                        Capping sequence numbers to collect down to the maximum of ${
                            this.params.maximumSequenceNumbersToCollect
                        }
                        from ${
                            t
                        }
                        `),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),O()<=w.in.DEBUG&&P("LruGarbageCollector",`
                        LRU Garbage Collection
                        Counted targets in ${
                            s - u
                        }
                        ms
                        Determined least recently used ${
                            r
                        } in `+(o-s)+"ms\n"+`
                        Removed ${
                            i
                        }
                        targets in `+(a-o)+"ms\n"+`
                        Removed ${
                            e
                        }
                        documents in `+(l-a)+"ms\n"+`
                        Total Duration: ${
                            l - u
                        }
                        ms `),ep.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}class n7{constructor(){this.changes=new tU(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?ep.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}class n8{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}class re{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&nt(n.mutation,e,eS.empty(),en.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tH()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tH()){let r=t$();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tB();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=t$();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tH()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=tV,s=t$(),o=t$();return t.forEach((e,t)=>{let o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof ni)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),nt(o.mutation,t,o.mutation.getFieldMask(),en.now())):s.set(t.key,eS.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new n8(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){let n=t$(),r=new eE((e,t)=>e-t),i=tH();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=n.get(e)||eS.empty();o=i.applyToLocalView(s,o),n.set(e,o);let a=(r.get(i.batchId)||tH()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{let s=[],o=r.getReverseIterator();for(;o.hasNext();){let r=o.getNext(),a=r.key,l=r.value,u=t$();l.forEach(e=>{if(!i.has(e)){let r=ne(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return ep.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return eu.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):ep.resolve(t$()),o=-1,a=i;return s.next(t=>ep.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?ep.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,tH())).next(e=>({batchId:o,changes:tj(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new eu(t)).next(e=>{let t=tB();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=tB();return this.indexManager.getCollectionParents(e,i).next(o=>ep.forEach(o,o=>{let a=new tT(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,tt.newInvalidDocument(r)))});let n=tB();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&nt(s.mutation,r,eS.empty(),en.now()),tx(t,r)&&(n=n.insert(e,r))}),n})}}class rt{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return ep.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,{id:t.id,version:t.version,createTime:nM(t.createTime)}),ep.resolve()}getNamedQuery(e,t){return ep.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=nF(e);return 4===t.length?eo.emptyPath():nz(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){V(1===s,65062);let e=i.from[0];e.allDescendants?o=e.collectionId:r=r.child(e.collectionId)}let a=[];i.where&&(a=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nG(e.unaryFilter.field);return ta.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nG(e.unaryFilter.field);return ta.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nG(e.unaryFilter.field);return ta.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nG(e.unaryFilter.field);return ta.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(t):void 0!==t.fieldFilter?ta.create(nG(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?tl.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(t.compositeFilter.op)):M(30097,{filter:t})}(e);return n instanceof tl&&th(t=n)&&tu(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new ts(nG(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new tn(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new tn(e.values||[],t)}(i.endAt)),new tT(r,o,l,a,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tO(t,t.limit,"L"):t}(t.bundledQuery),readTime:nM(t.readTime)}),ep.resolve()}}class rn{constructor(){this.overlays=new eE(eu.comparator),this.Qr=new Map}getOverlay(e,t){return ep.resolve(this.overlays.get(t))}getOverlays(e,t){let n=t$();return ep.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),ep.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Qr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Qr.delete(n)),ep.resolve()}getOverlaysForCollection(e,t,n){let r=t$(),i=t.length+1,s=new eu(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ep.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new eE((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=t$(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=t$(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return ep.resolve(o)}St(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Qr.get(r.largestBatchId).delete(n.key);this.Qr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nd(t,n));let i=this.Qr.get(t);void 0===i&&(i=tH(),this.Qr.set(t,i)),this.Qr.set(t,i.add(n.key))}}class rr{constructor(){this.sessionToken=ek.EMPTY_BYTE_STRING}getSessionToken(e){return ep.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ep.resolve()}}class ri{constructor(){this.$r=new eT(rs.Ur),this.Kr=new eT(rs.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){let n=new rs(e,t);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.zr(new rs(e,t))}jr(e,t){e.forEach(e=>this.removeReference(e,t))}Hr(e){let t=new eu(new eo([])),n=new rs(t,e),r=new rs(t,e+1),i=[];return this.Kr.forEachInRange([n,r],e=>{this.zr(e),i.push(e.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){let t=new eu(new eo([])),n=new rs(t,e),r=new rs(t,e+1),i=tH();return this.Kr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new rs(e,0),n=this.$r.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class rs{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return eu.comparator(e.key,t.key)||J(e.Zr,t.Zr)}static Wr(e,t){return J(e.Zr,t.Zr)||eu.comparator(e.key,t.key)}}class ro{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new eT(rs.Ur)}checkEmpty(e){return ep.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nh(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Xr=this.Xr.add(new rs(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ep.resolve(s)}lookupMutationBatch(e,t){return ep.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ti(t+1),r=n<0?0:n;return ep.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ep.resolve(0===this.mutationQueue.length?-1:this.nr-1)}getAllMutationBatches(e){return ep.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new rs(t,0),r=new rs(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([n,r],e=>{let t=this.ei(e.Zr);i.push(t)}),ep.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eT(J);return t.forEach(e=>{let t=new rs(e,0),r=new rs(e,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([t,r],e=>{n=n.add(e.Zr)})}),ep.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;eu.isDocumentKey(i)||(i=i.child(""));let s=new rs(new eu(i),0),o=new eT(J);return this.Xr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Zr)),!0)},s),ep.resolve(this.ni(o))}ni(e){let t=[];return e.forEach(e=>{let n=this.ei(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){V(0===this.ri(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Xr;return ep.forEach(t.mutations,r=>{let i=new rs(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Xr=n})}sr(e){}containsKey(e,t){let n=new rs(t,0),r=this.Xr.firstAfterOrEqual(n);return ep.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ep.resolve()}ri(e,t){return this.ti(e)}ti(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ei(e){let t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}class ra{constructor(e){this.ii=e,this.docs=new eE(eu.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ii(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return ep.resolve(n?n.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let n=tV;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tt.newInvalidDocument(e))}),ep.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=tV,s=t.path,o=new eu(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=eu.comparator(e.documentKey,t.documentKey))?n:J(e.largestBatchId,t.largestBatchId)}(new ec(o.readTime,o.key,-1),n)||(r.has(o.key)||tx(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return ep.resolve(i)}getAllFromCollectionGroup(e,t,n,r){M(9500)}si(e,t){return ep.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rl(this)}getSize(e){return ep.resolve(this.size)}}class rl extends n7{constructor(e){super(),this.Br=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Br.addEntry(e,r)):this.Br.removeEntry(n)}),ep.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}class ru{constructor(e){this.persistence=e,this.oi=new tU(e=>tE(e),tb),this.lastRemoteSnapshotVersion=er.min(),this.highestTargetId=0,this._i=0,this.ai=new ri,this.targetCount=0,this.ui=n2.cr()}forEachTarget(e,t){return this.oi.forEach((e,n)=>t(n)),ep.resolve()}getLastRemoteSnapshotVersion(e){return ep.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ep.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),ep.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this._i&&(this._i=t),ep.resolve()}Tr(e){this.oi.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.ui=new n2(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,ep.resolve()}updateTargetData(e,t){return this.Tr(t),ep.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,ep.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.oi.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.oi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),ep.waitFor(i).next(()=>r)}getTargetCount(e){return ep.resolve(this.targetCount)}getTargetData(e,t){let n=this.oi.get(t)||null;return ep.resolve(n)}addMatchingKeys(e,t,n){return this.ai.Gr(t,n),ep.resolve()}removeMatchingKeys(e,t,n){this.ai.jr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),ep.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),ep.resolve()}getMatchingKeysForTargetId(e,t){let n=this.ai.Yr(t);return ep.resolve(n)}containsKey(e,t){return ep.resolve(this.ai.containsKey(t))}}class rh{constructor(e,t){this.ci={},this.overlays={},this.li=new em(0),this.hi=!1,this.hi=!0,this.Pi=new rr,this.referenceDelegate=e(this),this.Ti=new ru(this),this.indexManager=new nJ,this.remoteDocumentCache=new ra(e=>this.referenceDelegate.Ii(e)),this.serializer=new nX(t),this.Ei=new rt(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rn,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ci[e.toKey()];return n||(n=new ro(t,this.referenceDelegate),this.ci[e.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,n){P("MemoryPersistence","Starting transaction:",e);let r=new rc(this.li.next());return this.referenceDelegate.di(),n(r).next(e=>this.referenceDelegate.Ai(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ri(e,t){return ep.or(Object.values(this.ci).map(n=>()=>n.containsKey(e,t)))}}class rc extends ed{constructor(e){super(),this.currentSequenceNumber=e}}class rd{constructor(e){this.persistence=e,this.Vi=new ri,this.mi=null}static fi(e){return new rd(e)}get gi(){if(this.mi)return this.mi;throw M(60996)}addReference(e,t,n){return this.Vi.addReference(n,t),this.gi.delete(n.toString()),ep.resolve()}removeReference(e,t,n){return this.Vi.removeReference(n,t),this.gi.add(n.toString()),ep.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),ep.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(e=>this.gi.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.gi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ep.forEach(this.gi,n=>{let r=eu.fromPath(n);return this.pi(e,r).next(e=>{e||t.removeEntry(r,er.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(e=>{e?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return ep.or([()=>ep.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class rf{constructor(e,t){this.persistence=e,this.yi=new tU(e=>(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new n3(this,t)}static fi(e,t){return new rf(e,t)}di(){}Ai(e){return ep.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){let t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}br(e){let t=0;return this.yr(e,e=>{t++}).next(()=>t)}yr(e,t){return ep.forEach(this.yi,(n,r)=>this.Dr(e,n,r).next(e=>e?ep.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.si(e,r=>this.Dr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,er.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),ep.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),ep.resolve()}removeReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),ep.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),ep.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(eW(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=eV(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return eP(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,ew(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw M(13486,{value:t})}}(e.data.value)),t}Dr(e,t,n){return ep.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.yi.get(t);return ep.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}class rp{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.ds=n,this.As=r}static Rs(e,t){let n=tH(),r=tH();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new rp(e,t.fromCache,n,r)}}class rg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}class rm{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=(0,_.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,_.z$)())>0?6:4}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.ws(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.bs(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new rg;return this.Ss(e,t,n).next(r=>{if(i.result=r,this.fs)return this.Ds(e,t,n,r.size)})}).next(()=>i.result)}Ds(e,t,n,r){return n.documentReadCount<this.gs?(O()<=w.in.DEBUG&&P("QueryEngine","SDK will not create cache indexes for query:",tL(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),ep.resolve()):(O()<=w.in.DEBUG&&P("QueryEngine","Query:",tL(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ps*r?(O()<=w.in.DEBUG&&P("QueryEngine","The SDK decides to create cache indexes for query:",tL(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tR(t))):ep.resolve())}ws(e,t){if(tS(t))return ep.resolve(null);let n=tR(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=tR(t=tO(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=tH(...r);return this.ys.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.vs(t,r);return this.Cs(t,s,i,n.readTime)?this.ws(e,tO(t,null,"F")):this.Fs(e,s,t,n)}))})))}bs(e,t,n,r){return tS(t)||r.isEqual(er.min())?ep.resolve(null):this.ys.getDocuments(e,n).next(i=>{let s=this.vs(t,i);return this.Cs(t,s,n,r)?ep.resolve(null):(O()<=w.in.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tL(t)),this.Fs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new ec(er.fromTimestamp(1e9===r?new en(n+1,0):new en(n,r)),eu.empty(),-1)}(r,0)).next(e=>e))})}vs(e,t){let n=new eT(tM(e));return t.forEach((t,r)=>{tx(e,r)&&(n=n.add(r))}),n}Cs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,n){return O()<=w.in.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",tL(t)),this.ys.getDocumentsMatchingQuery(e,t,ec.min(),n)}Fs(e,t,n,r){return this.ys.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}let ry="LocalStore";class rv{constructor(e,t,n,r){this.persistence=e,this.Ms=t,this.serializer=r,this.xs=new eE(J),this.Os=new tU(e=>tE(e),tb),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(n)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new re(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}async function rw(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Ls(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],o=tH();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(n,o).next(e=>({ks:e,removedBatchIds:i,addedBatchIds:s}))})})}function r_(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}async function rE(e,t,n){let r=e.xs.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!eg(e))throw e;P(ry,`
                        Failed to update sequence numbers
                        for target ${
                            t
                        }: ${
                            e
                        }
                        `)}e.xs=e.xs.remove(t),e.Os.delete(r.target)}function rb(e,t,n){let r=er.min(),i=tH();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.Os.get(n);return void 0!==r?ep.resolve(e.xs.get(r)):e.Ti.getTargetData(t,n)})(e,s,tR(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Ti.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ms.getDocumentsMatchingQuery(s,t,n?r:er.min(),n?i:tH())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Ns.get(r)||er.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Ns.set(r,s),{documents:n,$s:i}}))}class rI{constructor(){this.activeTargetIds=tK}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class rT{constructor(){this.xo=new rI,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,n){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new rI,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}class rC{No(e){}shutdown(){}}let rS="ConnectivityMonitor";class rA{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){for(let e of(P(rS,"Network connectivity changed: AVAILABLE"),this.Qo))e(0)}qo(){for(let e of(P(rS,"Network connectivity changed: UNAVAILABLE"),this.Qo))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}let rk=null;function rR(){return null===rk?rk=268435456+Math.round(2147483648*Math.random()):rk++,"0x"+rk.toString(16)}let rN="RestConnection",rO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`
                        projects / ${
                            n
                        }
                        /databases/${
                            r
                        }
                        `,this.Go=this.databaseId.database===ej?`
                        project_id = ${
                            n
                        }
                        `:`
                        project_id = ${
                            n
                        } & database_id = ${
                            r
                        }
                        `}zo(e,t,n,r,i){let s=rR(),o=this.jo(e,t.toUriEncodedString());P(rN,`
                        Sending RPC '${e}'
                        ${
                            s
                        }: `,o,n);let a={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(a,r,i);let{host:l}=new URL(o),u=(0,_.Xx)(l);return this.Jo(e,o,a,n,u).then(t=>(P(rN,`
                        Received RPC '${e}'
                        ${
                            s
                        }: `,t),t),t=>{throw L(rN,`
                        RPC '${e}'
                        ${
                            s
                        }
                        failed with error: `,t,"url: ",o,"request:",n),t})}Yo(e,t,n,r,i,s){return this.zo(e,t,n,r,i)}Ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+R,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}jo(e,t){let n=rO[e];return`
                        ${
                            this.Ko
                        }
                        /v1/${
                            t
                        }: ${
                            n
                        }
                        `}terminate(){}}class rD{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}let rL="WebChannelConnection";class rx extends rP{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){let o=rR();return new Promise((i,u)=>{let h=new s;h.setWithCredentials(!0),h.listenOnce(a.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case l.NO_ERROR:let t=h.getResponseJson();P(rL,`
                        XHR
                        for RPC '${e}'
                        ${
                            o
                        }
                        received: `,JSON.stringify(t)),i(t);break;case l.TIMEOUT:P(rL,`
                        RPC '${e}'
                        ${
                            o
                        }
                        timed out `),u(new B(F.DEADLINE_EXCEEDED,"Request time out"));break;case l.HTTP_ERROR:let n=h.getStatus();if(P(rL,`
                        RPC '${e}'
                        ${
                            o
                        }
                        failed with status: `,n,"response text:",h.getResponseText()),n>0){let e=h.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(t)>=0?t:F.UNKNOWN}(t.status);u(new B(e,t.message))}else u(new B(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new B(F.UNAVAILABLE,"Connection failed."));break;default:M(9055,{h_:e,streamId:o,P_:h.getLastErrorCode(),T_:h.getLastError()})}}finally{P(rL,`
                        RPC '${e}'
                        ${
                            o
                        }
                        completed.
                        `)}});let c=JSON.stringify(r);P(rL,`
                        RPC '${e}'
                        ${
                            o
                        }
                        sending request: `,r),h.send(t,"POST",c,n,15)})}I_(e,t,n){let r=rR(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=d(),a=c(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`
                        projects / ${
                            this.databaseId.projectId
                        }
                        /databases/${
                            this.databaseId.database
                        }
                        `},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;void 0!==p&&(l.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let g=i.join("");P(rL,`
                        Creating RPC '${e}'
                        stream ${
                            r
                        }: ${
                            g
                        }
                        `,l);let m=s.createWebChannel(g,l);this.E_(m);let y=!1,v=!1,w=new rD({Zo:t=>{v?P(rL,`
                        Not sending because RPC '${e}'
                        stream ${
                            r
                        }
                        is closed: `,t):(y||(P(rL,`
                        Opening RPC '${e}'
                        stream ${
                            r
                        }
                        transport.
                        `),m.open(),y=!0),P(rL,`
                        RPC '${e}'
                        stream ${
                            r
                        }
                        sending: `,t),m.send(t))},Xo:()=>m.close()}),_=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return _(m,o.EventType.OPEN,()=>{v||(P(rL,`
                        RPC '${e}'
                        stream ${
                            r
                        }
                        transport opened.
                        `),w.__())}),_(m,o.EventType.CLOSE,()=>{v||(v=!0,P(rL,`
                        RPC '${e}'
                        stream ${
                            r
                        }
                        transport closed `),w.u_(),this.d_(m))}),_(m,o.EventType.ERROR,t=>{v||(v=!0,L(rL,`
                        RPC '${e}'
                        stream ${
                            r
                        }
                        transport errored.Name: `,t.name,"Message:",t.message),w.u_(new B(F.UNAVAILABLE,"The operation could not be completed")))}),_(m,o.EventType.MESSAGE,t=>{var n;if(!v){let i=t.data[0];V(!!i,16349);let s=(null==i?void 0:i.error)||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){P(rL,`
                        RPC '${e}'
                        stream ${
                            r
                        }
                        received error: `,s);let t=s.status,n=function(e){let t=f[e];if(void 0!==t)return np(t)}(t),i=s.message;void 0===n&&(n=F.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),v=!0,w.u_(new B(n,i)),m.close()}else P(rL,`
                        RPC '${e}'
                        stream ${
                            r
                        }
                        received: `,i),w.c_(i)}}),_(a,h.STAT_EVENT,t=>{t.stat===u.PROXY?P(rL,`
                        RPC '${e}'
                        stream ${
                            r
                        }
                        detected buffering proxy `):t.stat===u.NOPROXY&&P(rL,`
                        RPC '${e}'
                        stream ${
                            r
                        }
                        detected no buffering proxy `)}),setTimeout(()=>{w.a_()},0),w}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function rM(){return"undefined"!=typeof document?document:null}function rU(e){return new nP(e,!0)}class rV{constructor(e,t,n=1e3,r=1.5,i=6e4){this.xi=e,this.timerId=t,this.A_=n,this.R_=r,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();let t=Math.floor(this.m_+this.w_()),n=Math.max(0,Date.now()-this.g_),r=Math.max(0,t-n);r>0&&P("ExponentialBackoff",`
                        Backing off
                        for ${
                            r
                        }
                        ms(base delay: ${
                                this.m_
                            }
                            ms, delay with jitter: ${
                                t
                            }
                            ms, last attempt: ${
                                n
                            }
                            ms ago)
                        `),this.f_=this.xi.enqueueAfterDelay(this.timerId,r,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){null!==this.f_&&(this.f_.skipDelay(),this.f_=null)}cancel(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}let rF="PersistentStream";class rB{constructor(e,t,n,r,i,s,o,a){this.xi=e,this.S_=n,this.D_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new rV(e,t)}O_(){return 1===this.state||5===this.state||this.N_()}N_(){return 2===this.state||3===this.state}start(){this.M_=0,4!==this.state?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&null===this.C_&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,4!==e?this.x_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(D(t.toString()),D("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===F.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;let e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.v_===t&&this.z_(e,n)},t=>{e(()=>{let e=new B(F.UNKNOWN,"Fetching auth token failed: "+t.message);return this.j_(e)})})}z_(e,t){let n=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{n(()=>this.listener.e_())}),this.stream.n_(()=>{n(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(e=>{n(()=>this.j_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.M_?this.J_(e):this.onNext(e))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return P(rF,`
                        close with error: ${
                            e
                        }
                        `),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(P(rF,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rj extends rB{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:M(39313,{state:r}),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(V(void 0===i||"string"==typeof i,58123),ek.fromBase64String(i||"")):(V(void 0===i||i instanceof C||i instanceof Uint8Array,16193),ek.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new nT(s,o,a,l&&new B(void 0===l.code?F.UNKNOWN:np(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nj(e,r.document.name),s=nM(r.document.updateTime),o=r.document.createTime?nM(r.document.createTime):er.min(),a=new te({mapValue:{fields:r.document.fields}}),l=tt.newFoundDocument(i,s,o,a);n=new nb(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nj(e,r.document),s=r.readTime?nM(r.readTime):er.min(),o=tt.newNoDocument(i,s);n=new nb([],r.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nj(e,r.document);n=new nb([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return M(11601,{Vt:t});{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nf(r,i);n=new nI(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return er.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?er.min():t.readTime?nM(t.readTime):er.min()}(e);return this.listener.Y_(t,n)}Z_(e){let t={};t.database=nq(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tI(r)?{documents:{documents:[n$(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=n$(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof ta?function(e){if("=="===e.op){if(e9(e.value))return{unaryFilter:{field:nK(e.field),op:"IS_NAN"}};if(e6(e.value))return{unaryFilter:{field:nK(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(e9(e.value))return{unaryFilter:{field:nK(e.field),op:"IS_NOT_NAN"}};if(e6(e.value))return{unaryFilter:{field:nK(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nK(e.field),op:nN[e.op],value:e.value}}}(t):t instanceof tl?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:nO[t.op],filters:n}}}(t):M(54877,{filter:t})}(tl.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:nK(e.field),direction:nR[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=nD(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{gt:s,parent:i}}(e,r).gt}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nx(e,t.resumeToken);let r=nD(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(er.min())>0){n.readTime=nL(e,t.snapshotVersion.toTimestamp());let r=nD(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Q_(t)}X_(e){let t={};t.database=nq(this.serializer),t.removeTarget=e,this.Q_(t)}}class r$ extends rB{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return V(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,V(!e.writeResults||0===e.writeResults.length,55816),this.listener.na()}onNext(e){var t,n;V(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(V(void 0!==n,14353),t.map(e=>{let t;return(t=e.updateTime?nM(e.updateTime):nM(n)).isEqual(er.min())&&(t=nM(n)),new t5(t,e.transformResults||[])})):[]),i=nM(e.commitTime);return this.listener.ra(i,r)}ia(){let e={};e.database=nq(this.serializer),this.Q_(e)}ta(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof nr)r={update:nH(e,t.key,t.value)};else if(t instanceof nl)r={delete:nB(e,t.key)};else if(t instanceof ni)r={update:nH(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nu))return M(16599,{ft:t.type});r={verify:nB(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tY)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tJ)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof t0)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof t2)return{fieldPath:t.field.canonicalString(),increment:n.Re};throw M(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nL(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:M(27497)),r})(this.serializer,e))};this.Q_(t)}}class rq{}class rz extends rq{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.sa=!1}oa(){if(this.sa)throw new B(F.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,n,r){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.zo(e,nV(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new B(F.UNKNOWN,e.toString())})}Yo(e,t,n,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Yo(e,nV(t,n),r,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new B(F.UNKNOWN,e.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class rH{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){0===this._a&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){"Online"===this.state?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`
                        Connection failed 1 times.Most recent error: ${
                            e.toString()
                        }
                        `),this.la("Offline")))}set(e){this.Ta(),this._a=0,"Online"===e&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){let t=`
                        Could not reach Cloud Firestore backend.${
                            e
                        }
                        This typically indicates that your device does not have a healthy Internet connection at the moment.The client will operate in offline mode until it is able to successfully connect to the backend.
                        `;this.ua?(D(t),this.ua=!1):P("OnlineStateTracker",t)}Ta(){null!==this.aa&&(this.aa.cancel(),this.aa=null)}}let rK="RemoteStore";class rG{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(e=>{n.enqueueAndForget(async()=>{r2(this)&&(P(rK,"Restarting streams for network reachability change."),await async function(e){e.da.add(4),await rQ(e),e.Va.set("Unknown"),e.da.delete(4),await rW(e)}(this))})}),this.Va=new rH(n,r)}}async function rW(e){if(r2(e))for(let t of e.Aa)await t(!0)}async function rQ(e){for(let t of e.Aa)await t(!1)}function rX(e,t){e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),r1(e)?r0(e):iu(e).N_()&&rJ(e,t))}function rY(e,t){let n=iu(e);e.Ea.delete(t),n.N_()&&rZ(e,t),0===e.Ea.size&&(n.N_()?n.k_():r2(e)&&e.Va.set("Unknown"))}function rJ(e,t){if(e.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(er.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}iu(e).Z_(t)}function rZ(e,t){e.ma.Ke(t),iu(e).X_(t)}function r0(e){e.ma=new nS({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>e.Ea.get(t)||null,Pt:()=>e.datastore.serializer.databaseId}),iu(e).start(),e.Va.ca()}function r1(e){return r2(e)&&!iu(e).O_()&&e.Ea.size>0}function r2(e){return 0===e.da.size}async function r4(e){e.Va.set("Online")}async function r6(e){e.Ea.forEach((t,n)=>{rJ(e,t)})}async function r9(e,t){e.ma=void 0,r1(e)?(e.Va.Pa(t),r0(e)):e.Va.set("Unknown")}async function r5(e,t,n){if(e.Va.set("Online"),t instanceof nT&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.Ea.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ea.delete(r),e.ma.removeTarget(r))}(e,t)}catch(n){P(rK,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await r3(e,n)}else if(t instanceof nb?e.ma.Xe(t):t instanceof nI?e.ma.ot(t):e.ma.nt(t),!n.isEqual(er.min()))try{let t=await r_(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.ma.It(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.Ea.get(r);i&&e.Ea.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.Ea.get(t);if(!r)return;e.Ea.set(t,r.withResumeToken(ek.EMPTY_BYTE_STRING,r.snapshotVersion)),rZ(e,t);let i=new nQ(r.target,t,n,r.sequenceNumber);rJ(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){P(rK,"Failed to raise snapshot:",t),await r3(e,t)}}async function r3(e,t,n){if(!eg(t))throw t;e.da.add(1),await rQ(e),e.Va.set("Offline"),n||(n=()=>r_(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{P(rK,"Retrying IndexedDB access"),await n(),e.da.delete(1),await rW(e)})}function r7(e,t){return t().catch(n=>r3(e,n,t))}async function r8(e){let t=ih(e),n=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:-1;for(;r2(e)&&e.Ia.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.Ia.length&&t.k_();break}n=r.batchId,function(e,t){e.Ia.push(t);let n=ih(e);n.N_()&&n.ea&&n.ta(t.mutations)}(e,r)}catch(t){await r3(e,t)}ie(e)&&it(e)}function ie(e){return r2(e)&&!ih(e).O_()&&e.Ia.length>0}function it(e){ih(e).start()}async function ir(e){ih(e).ia()}async function ii(e){let t=ih(e);for(let n of e.Ia)t.ta(n.mutations)}async function is(e,t,n){let r=e.Ia.shift(),i=nc.from(r,t,n);await r7(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await r8(e)}async function io(e,t){t&&ih(e).ea&&await async function(e,t){var n;if(function(e){switch(e){case F.OK:return M(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return M(15467,{code:e})}}(n=t.code)&&n!==F.ABORTED){let n=e.Ia.shift();ih(e).L_(),await r7(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await r8(e)}}(e,t),ie(e)&&it(e)}async function ia(e,t){e.asyncQueue.verifyOperationInProgress(),P(rK,"RemoteStore received new credentials");let n=r2(e);e.da.add(3),await rQ(e),n&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await rW(e)}async function il(e,t){t?(e.da.delete(2),await rW(e)):t||(e.da.add(2),await rQ(e),e.Va.set("Unknown"))}function iu(e){var t,n,r;return e.fa||(e.fa=(t=e.datastore,n=e.asyncQueue,r={e_:r4.bind(null,e),n_:r6.bind(null,e),i_:r9.bind(null,e),Y_:r5.bind(null,e)},t.oa(),new rj(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Aa.push(async t=>{t?(e.fa.L_(),r1(e)?r0(e):e.Va.set("Unknown")):(await e.fa.stop(),e.ma=void 0)})),e.fa}function ih(e){var t,n,r;return e.ga||(e.ga=(t=e.datastore,n=e.asyncQueue,r={e_:()=>Promise.resolve(),n_:ir.bind(null,e),i_:io.bind(null,e),na:ii.bind(null,e),ra:is.bind(null,e)},t.oa(),new r$(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Aa.push(async t=>{t?(e.ga.L_(),await r8(e)):(await e.ga.stop(),e.Ia.length>0&&(P(rK,`
                        Stopping write stream with ${
                            e.Ia.length
                        }
                        pending writes `),e.Ia=[]))})),e.ga}class ic{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new j,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new ic(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new B(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function id(e,t){if(D("AsyncQueue",`
                        ${
                            t
                        }: ${
                            e
                        }
                        `),eg(e))return new B(F.UNAVAILABLE,`
                        ${
                            t
                        }: ${
                            e
                        }
                        `);throw e}class ip{static emptySet(e){return new ip(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||eu.comparator(t.key,n.key):(e,t)=>eu.comparator(e.key,t.key),this.keyedMap=tB(),this.sortedSet=new eE(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ip)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new ip;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}class ig{constructor(){this.pa=new eE(eu.comparator)}track(e){let t=e.doc.key,n=this.pa.get(t);n?0!==e.type&&3===n.type?this.pa=this.pa.insert(t,e):3===e.type&&1!==n.type?this.pa=this.pa.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.pa=this.pa.remove(t):1===e.type&&2===n.type?this.pa=this.pa.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):M(63341,{Vt:e,ya:n}):this.pa=this.pa.insert(t,e)}wa(){let e=[];return this.pa.inorderTraversal((t,n)=>{e.push(n)}),e}}class im{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new im(e,t,ip.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tP(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}class iy{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class iv{constructor(){this.queries=iw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=iw(),n.forEach((e,n)=>{for(let e of n.Sa)e.onError(t)})}(this,new B(F.ABORTED,"Firestore shutting down"))}}function iw(){return new tU(e=>tD(e),tP)}async function i_(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.Da()&&t.va()&&(n=2):(i=new iy,n=t.va()?0:1);try{switch(n){case 0:i.ba=await e.onListen(r,!0);break;case 1:i.ba=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=id(n,`
                        Initialization of query '${tL(t.query)}'
                        failed `);return void t.onError(e)}e.queries.set(r,i),i.Sa.push(t),t.Fa(e.onlineState),i.ba&&t.Ma(i.ba)&&iT(e)}async function iE(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.Sa.indexOf(t);e>=0&&(i.Sa.splice(e,1),0===i.Sa.length?r=t.va()?0:1:!i.Da()&&t.va()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function ib(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.Sa)e.Ma(r)&&(n=!0);i.ba=r}}n&&iT(e)}function iI(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.Sa)e.onError(n);e.queries.delete(t)}function iT(e){e.Ca.forEach(e=>{e.next()})}(m=g||(g={})).xa="default",m.Cache="cache";class iC{constructor(e,t,n){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=n||{}}Ma(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new im(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){return!(e.fromCache&&this.va())||(!this.options.Qa||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}La(e){if(e.docChanges.length>0)return!0;let t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}qa(e){e=im.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==g.Cache}}class iS{constructor(e){this.key=e}}class iA{constructor(e){this.key=e}}class ik{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=tH(),this.mutatedKeys=tH(),this.Za=tM(e),this.Xa=new ip(this.Za)}get eu(){return this.Ha}tu(e,t){let n=t?t.nu:new ig,r=t?t.Xa:this.Xa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1,a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=tx(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.ru(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Za(h,a)>0||l&&0>this.Za(h,l))&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Xa:s,nu:n,Cs:o,mutatedKeys:i}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;let s=e.nu.wa();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:e})}};return n(e)-n(t)})(e.type,t.type)||this.Za(e.doc,t.doc)),this.iu(n),r=null!=r&&r;let o=t&&!r?this.su():[],a=0===this.Ya.size&&this.current&&!r?1:0,l=a!==this.Ja;return(this.Ja=a,0!==s.length||l)?{snapshot:new im(this.query,e.Xa,i,s,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),ou:o}:{ou:o}}Fa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new ig,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=e.current)}su(){if(!this.current)return[];let e=this.Ya;this.Ya=tH(),this.Xa.forEach(e=>{this._u(e.key)&&(this.Ya=this.Ya.add(e.key))});let t=[];return e.forEach(e=>{this.Ya.has(e)||t.push(new iA(e))}),this.Ya.forEach(n=>{e.has(n)||t.push(new iS(n))}),t}au(e){this.Ha=e.$s,this.Ya=tH();let t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return im.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,0===this.Ja,this.hasCachedResults)}}let iR="SyncEngine";class iN{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class iO{constructor(e){this.key=e,this.cu=!1}}class iP{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.lu={},this.hu=new tU(e=>tD(e),tP),this.Pu=new Map,this.Tu=new Set,this.Iu=new eE(eu.comparator),this.Eu=new Map,this.du=new ri,this.Au={},this.Ru=new Map,this.Vu=n2.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return!0===this.mu}}async function iD(e,t,n=!0){let r;let i=i0(e),s=i.hu.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.uu()):r=await ix(i,t,n,!0),r}async function iL(e,t){let n=i0(e);await ix(n,t,!0,!1)}async function ix(e,t,n,r){var i,s;let o;let a=await (i=e.localStore,s=tR(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Ti.getTargetData(e,s).next(n=>n?(t=n,ep.resolve(t)):i.Ti.allocateTargetId(e).next(n=>(t=new nQ(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Ti.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.xs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.xs=i.xs.insert(e.targetId,e),i.Os.set(s,e.targetId)),e})),l=a.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);return r&&(o=await iM(e,t,l,"current"===u,a.resumeToken)),e.isPrimaryClient&&n&&rX(e.remoteStore,a),o}async function iM(e,t,n,r,i){e.fu=(t,n,r)=>(async function(e,t,n,r){let i=t.view.tu(n);i.Cs&&(i=await rb(e.localStore,t.query,!1).then(({documents:e})=>t.view.tu(e,i)));let s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return iQ(e,t.targetId,a.ou),a.snapshot})(e,t,n,r);let s=await rb(e.localStore,t,!0),o=new ik(t,s.$s),a=o.tu(s.documents),l=nE.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);iQ(e,n,u.ou);let h=new iN(t,n,o);return e.hu.set(t,h),e.Pu.has(n)?e.Pu.get(n).push(t):e.Pu.set(n,[t]),u.snapshot}async function iU(e,t,n){let r=e.hu.get(t),i=e.Pu.get(r.targetId);if(i.length>1)return e.Pu.set(r.targetId,i.filter(e=>!tP(e,t))),void e.hu.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await rE(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&rY(e.remoteStore,r.targetId),iG(e,r.targetId)}).catch(ef)):(iG(e,r.targetId),await rE(e.localStore,r.targetId,!0))}async function iV(e,t){let n=e.hu.get(t),r=e.Pu.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),rY(e.remoteStore,n.targetId))}async function iF(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=iq.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iz.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=en.now(),s=t.reduce((e,t)=>e.add(t.key),tH());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=tV,l=tH();return e.Bs.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=tX(r.transform,e||null);null!=i&&(null===n&&(n=te.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new ni(e.key,t,function e(t){let n=[];return ew(t.fields,(t,r)=>{let i=new el([t]);if(e5(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new eS(n)}(t.value.mapValue),t3.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:tj(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Au[i.currentUser.toKey()])||(e=new eE(J)),e=e.insert(r,n),i.Au[i.currentUser.toKey()]=e,await iY(i,s.changes),await r8(i.remoteStore)}catch(t){let e=id(t,"Failed to persist write");n.reject(e)}}async function iB(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let o,a;let l=e.Bs.newChangeBuffer({trackRemovals:!0});r=e.xs;let u=[];t.targetChanges.forEach((s,o)=>{var a;let l=r.get(o);if(!l)return;u.push(e.Ti.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Ti.addMatchingKeys(i,s.addedDocuments,o)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?h=h.withResumeToken(ek.EMPTY_BYTE_STRING,er.min()).withLastLimboFreeSnapshotVersion(er.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(o,h),a=h,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Ti.updateTargetData(i,h))});let h=tV,c=tH();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,o=tH(),a=tH(),s.forEach(e=>o=o.add(e)),l.getEntries(i,o).next(e=>{let t=tV;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(n)),r.isNoDocument()&&r.version.isEqual(er.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):P(ry,"Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{qs:t,Qs:a}})).next(e=>{h=e.qs,c=e.Qs})),!n.isEqual(er.min())){let t=e.Ti.getLastRemoteSnapshotVersion(i).next(t=>e.Ti.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return ep.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.xs=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Eu.get(n);r&&(V(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.cu=!0:t.modifiedDocuments.size>0?V(r.cu,14607):t.removedDocuments.size>0&&(V(r.cu,42227),r.cu=!1))}),await iY(e,n,t)}catch(e){await ef(e)}}function ij(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.hu.forEach((e,n)=>{let r=n.view.Fa(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.Sa)e.Fa(t)&&(n=!0)}),n&&iT(r),i.length&&e.lu.Y_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function i$(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Eu.get(t),i=r&&r.key;if(i){let n=new eE(eu.comparator);n=n.insert(i,tt.newNoDocument(i,er.min()));let r=tH().add(i),s=new n_(er.min(),new Map,new eE(J),n,r);await iB(e,s),e.Iu=e.Iu.remove(i),e.Eu.delete(t),iX(e)}else await rE(e.localStore,t,!1).then(()=>iG(e,t,n)).catch(ef)}async function iq(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),o=ep.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);V(null!==s,48541),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tH();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});iK(e,r,null),iH(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await iY(e,i)}catch(e){await ef(e)}}async function iz(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(V(null!==t,37113),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});iK(e,t,n),iH(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await iY(e,i)}catch(e){await ef(e)}}function iH(e,t){(e.Ru.get(t)||[]).forEach(e=>{e.resolve()}),e.Ru.delete(t)}function iK(e,t,n){let r=e.Au[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Au[e.currentUser.toKey()]=r}}function iG(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Pu.get(t)))e.hu.delete(r),n&&e.lu.gu(r,n);e.Pu.delete(t),e.isPrimaryClient&&e.du.Hr(t).forEach(t=>{e.du.containsKey(t)||iW(e,t)})}function iW(e,t){e.Tu.delete(t.path.canonicalString());let n=e.Iu.get(t);null!==n&&(rY(e.remoteStore,n),e.Iu=e.Iu.remove(t),e.Eu.delete(n),iX(e))}function iQ(e,t,n){for(let r of n)r instanceof iS?(e.du.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.Iu.get(n)||e.Tu.has(r)||(P(iR,"New document in limbo: "+n),e.Tu.add(r),iX(e))}(e,r)):r instanceof iA?(P(iR,"Document no longer in limbo: "+r.key),e.du.removeReference(r.key,t),e.du.containsKey(r.key)||iW(e,r.key)):M(19791,{pu:r})}function iX(e){for(;e.Tu.size>0&&e.Iu.size<e.maxConcurrentLimboResolutions;){let t=e.Tu.values().next().value;e.Tu.delete(t);let n=new eu(eo.fromString(t)),r=e.Vu.next();e.Eu.set(r,new iO(n)),e.Iu=e.Iu.insert(n,r),rX(e.remoteStore,new nQ(tR(tC(n.path)),r,"TargetPurposeLimboResolution",em.le))}}async function iY(e,t,n){let r=[],i=[],s=[];e.hu.isEmpty()||(e.hu.forEach((o,a)=>{s.push(e.fu(a,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(a.targetId,r?"current":"not-current")}if(t){r.push(t);let e=rp.Rs(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.lu.Y_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>ep.forEach(t,t=>ep.forEach(t.ds,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>ep.forEach(t.As,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!eg(e))throw e;P(ry,"Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.xs.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.xs=e.xs.insert(t,i)}}}(e.localStore,i))}async function iJ(e,t){var n;if(!e.currentUser.isEqual(t)){P(iR,"User change. New user:",t.toKey());let r=await rw(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ru.forEach(e=>{e.forEach(e=>{e.reject(new B(F.CANCELLED,n))})}),e.Ru.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await iY(e,r.ks)}}function iZ(e,t){let n=e.Eu.get(t);if(n&&n.cu)return tH().add(n.key);{let n=tH(),r=e.Pu.get(t);if(!r)return n;for(let t of r){let r=e.hu.get(t);n=n.unionWith(r.view.eu)}return n}}function i0(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=iB.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iZ.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=i$.bind(null,e),e.lu.Y_=ib.bind(null,e.eventManager),e.lu.gu=iI.bind(null,e.eventManager),e}class i1{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rU(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){var t;return t=this.persistence,new rv(t,new rm,e.initialUser,this.serializer)}Su(e){return new rh(rd.fi,this.serializer)}bu(e){return new rT}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}i1.provider={build:()=>new i1};class i2 extends i1{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){return V(this.persistence.referenceDelegate instanceof rf,46915),new n5(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Su(e){let t=void 0!==this.cacheSizeBytes?n1.withCacheSize(this.cacheSizeBytes):n1.DEFAULT;return new rh(e=>rf.fi(e,t),this.serializer)}}class i4{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ij(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=iJ.bind(null,this.syncEngine),await il(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new iv}createDatastore(e){let t=rU(e.databaseInfo.databaseId),n=new rx(e.databaseInfo);return new rz(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new rG(t,this.datastore,e.asyncQueue,e=>ij(this.syncEngine,e,0),rA.C()?new rA:new rC)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){let a=new iP(e,t,n,r,i,s);return o&&(a.mu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){P(rK,"RemoteStore shutting down."),e.da.add(5),await rQ(e),e.Ra.shutdown(),e.Va.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}i4.provider={build:()=>new i4};class i6{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):D("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}let i9="FirestoreClient";class i5{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=k.UNAUTHENTICATED,this.clientId=Y.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{P(i9,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(P(i9,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new j;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=id(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function i3(e,t){e.asyncQueue.verifyOperationInProgress(),P(i9,"Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await rw(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function i7(e,t){e.asyncQueue.verifyOperationInProgress();let n=await i8(e);P(i9,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>ia(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ia(t.remoteStore,n)),e._onlineComponents=t}async function i8(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){P(i9,"Using user provided OfflineComponentProvider");try{await i3(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;L("Error using user provided cache. Falling back to memory cache: "+t),await i3(e,new i1)}}else P(i9,"Using default OfflineComponentProvider"),await i3(e,new i2(void 0))}return e._offlineComponents}async function se(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(P(i9,"Using user provided OnlineComponentProvider"),await i7(e,e._uninitializedComponentsProvider._online)):(P(i9,"Using default OnlineComponentProvider"),await i7(e,new i4))),e._onlineComponents}async function st(e){let t=await se(e),n=t.eventManager;return n.onListen=iD.bind(null,t.syncEngine),n.onUnlisten=iU.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=iL.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=iV.bind(null,t.syncEngine),n}function sn(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}let sr=new Map;function si(e,t,n){if(!n)throw new B(F.INVALID_ARGUMENT,`
                        Function ${
                            e
                        }() cannot be called with an empty ${
                            t
                        }.
                        `)}function ss(e){if(!eu.isDocumentKey(e))throw new B(F.INVALID_ARGUMENT,`
                        Invalid document reference.Document references must have an even number of segments, but ${
                            e
                        }
                        has ${
                            e.length
                        }.
                        `)}function so(e){if(eu.isDocumentKey(e))throw new B(F.INVALID_ARGUMENT,`
                        Invalid collection reference.Collection references must have an odd number of segments, but ${
                            e
                        }
                        has ${
                            e.length
                        }.
                        `)}function sa(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`
                        ${
                            e.substring(0, 20)
                        }...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`
                        a custom ${
                            n
                        }
                        object `:"an object"}}return"function"==typeof e?"a function":M(12329,{type:typeof e})}function sl(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new B(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=sa(e);throw new B(F.INVALID_ARGUMENT,`
                        Expected type '${t.name}', but it was: ${
                            n
                        }
                        `)}}return e}let su="firestore.googleapis.com";class sh{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new B(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=su,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new B(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new B(F.INVALID_ARGUMENT,`
                        ${
                            e
                        }
                        and ${
                            n
                        }
                        cannot be used together.
                        `)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sn(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new B(F.INVALID_ARGUMENT,`
                        invalid long polling timeout: ${
                            e.timeoutSeconds
                        }(must not be NaN)
                        `);if(e.timeoutSeconds<5)throw new B(F.INVALID_ARGUMENT,`
                        invalid long polling timeout: ${
                            e.timeoutSeconds
                        }(minimum allowed value is 5)
                        `);if(e.timeoutSeconds>30)throw new B(F.INVALID_ARGUMENT,`
                        invalid long polling timeout: ${
                            e.timeoutSeconds
                        }(maximum allowed value is 30)
                        `)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new B(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sh(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new q;switch(e.type){case"firstParty":return new G(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new B(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=sr.get(e);t&&(P("ComponentProvider","Removing Datastore"),sr.delete(e),t.terminate())}(this),Promise.resolve()}}class sd{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new sd(this.firestore,e,this._query)}}class sf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sf(this.firestore,e,this._key)}}class sp extends sd{constructor(e,t,n){super(e,t,tC(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new sf(this.firestore,null,new eu(e))}withConverter(e){return new sp(this.firestore,e,this._path)}}function sg(e,t,...n){if(e=(0,_.m9)(e),si("collection","path",t),e instanceof sc){let r=eo.fromString(t,...n);return so(r),new sp(e,null,r)}{if(!(e instanceof sf||e instanceof sp))throw new B(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(eo.fromString(t,...n));return so(r),new sp(e.firestore,null,r)}}function sm(e,t,...n){if(e=(0,_.m9)(e),1==arguments.length&&(t=Y.newId()),si("doc","path",t),e instanceof sc){let r=eo.fromString(t,...n);return ss(r),new sf(e,null,new eu(r))}{if(!(e instanceof sf||e instanceof sp))throw new B(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(eo.fromString(t,...n));return ss(r),new sf(e.firestore,e instanceof sp?e.converter:null,new eu(r))}}let sy="AsyncQueue";class sv{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new rV(this,"async_queue_retry"),this.rc=()=>{let e=rM();e&&P(sy,"Visibility state changed to "+e.visibilityState),this.x_.b_()},this.sc=e;let t=rM();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;let t=rM();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});let t=new j;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(0!==this.Ju.length){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!eg(e))throw e;P(sy,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){let t=this.sc.then(()=>(this.ec=!0,e().catch(e=>{throw this.Xu=e,this.ec=!1,D("INTERNAL UNHANDLED ERROR: ",sw(e)),e}).then(e=>(this.ec=!1,e))));return this.sc=t,t}enqueueAfterDelay(e,t,n){this.oc(),this.nc.indexOf(e)>-1&&(t=0);let r=ic.createAndSchedule(this,e,t,n,e=>this.uc(e));return this.Zu.push(r),r}oc(){this.Xu&&M(47125,{cc:sw(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(let t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{for(let t of(this.Zu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Zu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){let t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function sw(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}function s_(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class sE extends sc{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sv,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new sv(e),this._firestoreClient=void 0,await e}}}function sb(e,t){let n="object"==typeof e?e:(0,y.Mq)(),r=(0,y.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||ej});if(!r._initialized){let e=(0,_.P0)("firestore");e&&function(e,t,n,r={}){var i;e=sl(e,sc);let s=(0,_.Xx)(t),o=e._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:e._getEmulatorOptions()}),l=`
                        ${
                            t
                        }: ${
                            n
                        }
                        `;s&&((0,_.Uo)(`
                        https: //${l}`),(0,_.dp)("Firestore",!0)),o.host!==su&&o.host!==l&&L("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let u=Object.assign(Object.assign({},o),{host:l,ssl:s,emulatorOptions:r});if(!(0,_.vZ)(u,a)&&(e._setSettings(u),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=k.MOCK_USER;else{t=(0,_.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new B(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new k(s)}e._authCredentials=new z(new $(t,n))}}(r,...e)}return r}function sI(e){if(e._terminated)throw new B(F.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,i;let s=e._freezeSettings(),o=(i=e._databaseId,new eB(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,sn(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator));e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new i5(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}class sT{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sT(ek.fromBase64String(e))}catch(e){throw new B(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sT(ek.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}class sC{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new B(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new el(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}class sS{constructor(e){this._methodName=e}}class sA{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}class sk{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}let sR=/^__.*__$/;class sN{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ni(e,this.data,this.fieldMask,t,this.fieldTransforms):new nr(e,this.data,t,this.fieldTransforms)}}class sO{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ni(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sP(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ic:e})}}class sD{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new sD(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.dc({path:n,Rc:!1});return r.Vc(e),r}mc(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.dc({path:n,Rc:!1});return r.Ec(),r}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return sH(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(0===e.length)throw this.gc("Document fields must not be empty");if(sP(this.Ic)&&sR.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class sL{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||rU(e)}bc(e,t,n,r=!1){return new sD({Ic:e,methodName:t,wc:n,path:el.emptyPath(),Rc:!1,yc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sx(e){let t=e._freezeSettings(),n=rU(e._databaseId);return new sL(e._databaseId,!!t.ignoreUndefinedProperties,n)}class sM extends sS{_toFieldTransform(e){if(2!==e.Ic)throw 1===e.Ic?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sM}}class sU extends sS{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){let t=new sD({Ic:3,wc:e.settings.wc,methodName:this._methodName,Rc:!0},e.databaseId,e.serializer,e.ignoreUndefinedProperties),n=new t0(this.Sc.map(e=>sV(e,t)));return new t9(e.path,n)}isEqual(e){return e instanceof sU&&(0,_.vZ)(this.Sc,e.Sc)}}function sV(e,t){if(sB(e=(0,_.m9)(e)))return sj("Unsupported field value:",t,e),sF(e,t);if(e instanceof sS)return function(e,t){if(!sP(t.Ic))throw t.gc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gc(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Rc&&4!==t.Ic)throw t.gc("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=sV(i,t.fc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i;if(null===(e=(0,_.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!ey(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tW(r):tG(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=en.fromDate(e);return{timestampValue:nL(t.serializer,n)}}if(e instanceof en){let n=new en(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nL(t.serializer,n)}}if(e instanceof sA)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sT)return{bytesValue:nx(t.serializer,e._byteString)};if(e instanceof sf){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.gc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:nU(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof sk)return{mapValue:{fields:{[eq]:{stringValue:eK},[eG]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.gc("VectorValues must only contain numeric values.");return tG(t.serializer,e)})}}}}};throw t.gc(`Unsupported field value: ${sa(e)}`)}(e,t)}function sF(e,t){let n={};return e_(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ew(e,(e,r)=>{let i=sV(r,t.Ac(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function sB(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof en||e instanceof sA||e instanceof sT||e instanceof sf||e instanceof sS||e instanceof sk)}function sj(e,t,n){if(!sB(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=sa(n);throw"an object"===r?t.gc(e+" a custom object"):t.gc(e+" "+r)}}function s$(e,t,n){if((t=(0,_.m9)(t))instanceof sC)return t._internalPath;if("string"==typeof t)return sz(e,t);throw sH("Field path arguments must be of type string or ",e,!1,void 0,n)}let sq=RegExp("[~\\*/\\[\\]]");function sz(e,t,n){if(t.search(sq)>=0)throw sH(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sC(...t.split("."))._internalPath}catch(r){throw sH(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sH(e,t,n,r,i){let s=r&&!r.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(F.INVALID_ARGUMENT,a+e+l)}function sK(e,t){return e.some(e=>e.isEqual(t))}class sG{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new sf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sW(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sQ("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sW extends sG{data(){return super.data()}}function sQ(e,t){return"string"==typeof t?sz(e,t):t instanceof sC?t._internalPath:t._delegate._internalPath}function sX(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new B(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sY{}class sJ extends sY{}function sZ(e,t,...n){let r=[];for(let i of(t instanceof sY&&r.push(t),function(e){let t=e.filter(e=>e instanceof s2).length,n=e.filter(e=>e instanceof s0).length;if(t>1||t>0&&n>0)throw new B(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class s0 extends sJ{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new s0(e,t,n)}_apply(e){let t=this._parse(e);return s8(e._query,t),new sd(e.firestore,e.converter,tN(e._query,t))}_parse(e){let t=sx(e.firestore);return function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new B(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){s7(o,s);let t=[];for(let n of o)t.push(s3(r,e,n));a={arrayValue:{values:t}}}else a=s3(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||s7(o,s),a=function(e,t,n,r=!1){return sV(n,e.bc(r?4:3,t))}(n,t,o,"in"===s||"not-in"===s);return ta.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function s1(e,t,n){let r=sQ("where",e);return s0._create(r,t,n)}class s2 extends sY{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new s2(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:tl.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())s8(n,e),n=tN(n,e)}(e._query,t),new sd(e.firestore,e.converter,tN(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class s4 extends sJ{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new s4(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new B(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new B(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ts(t,n)}(e._query,this._field,this._direction);return new sd(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new tT(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function s6(e,t="asc"){let n=sQ("orderBy",e);return s4._create(n,t)}class s9 extends sJ{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new s9(e,t,n)}_apply(e){return new sd(e.firestore,e.converter,tO(e._query,this._limit,this._limitType))}}function s5(e){return function(e,t){if(t<=0)throw new B(F.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}("limit",e),s9._create("limit",e,"F")}function s3(e,t,n){if("string"==typeof(n=(0,_.m9)(n))){if(""===n)throw new B(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tA(t)&&-1!==n.indexOf("/"))throw new B(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(eo.fromString(n));if(!eu.isDocumentKey(r))throw new B(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return e1(e,new eu(r))}if(n instanceof sf)return e1(e,n._key);throw new B(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sa(n)}.`)}function s7(e,t){if(!Array.isArray(e)||0===e.length)throw new B(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function s8(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new B(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new B(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class oe{convertValue(e,t="none"){switch(eW(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eO(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eP(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return ew(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;return new sk(null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[eG].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>eO(e.doubleValue)))}convertGeoPoint(e){return new sA(eO(e.latitude),eO(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=eV(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eF(e));default:return null}}convertTimestamp(e){let t=eN(e);return new en(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=eo.fromString(e);V(nW(n),9688,{name:e});let r=new e$(n.get(1),n.get(3)),i=new eu(n.popFirst(5));return r.isEqual(t)||D(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class ot{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class on extends sG{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(sQ("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class or extends on{data(e={}){return super.data(e)}}class oi{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ot(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new or(this._firestore,this._userDataWriter,n.key,n,new ot(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new or(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ot(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new or(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ot(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:e})}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function os(e){e=sl(e,sf);let t=sl(e.firestore,sE);return(function(e,t,n={}){let r=new j;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new i6({next:a=>{s.xu(),t.enqueueAndForget(()=>iE(e,o));let l=a.docs.has(n);!l&&a.fromCache?i.reject(new B(F.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&r&&"server"===r.source?i.reject(new B(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new iC(tC(n.path),s,{includeMetadataChanges:!0,Qa:!0});return i_(e,o)})(await st(e),e.asyncQueue,t,n,r)),r.promise})(sI(t),e._key).then(n=>od(t,e,n))}class oo extends oe{constructor(e){super(),this.firestore=e}convertBytes(e){return new sT(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new sf(this.firestore,null,t)}}function oa(e){e=sl(e,sd);let t=sl(e.firestore,sE),n=sI(t),r=new oo(t);return sX(e._query),(function(e,t,n={}){let r=new j;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new i6({next:n=>{s.xu(),t.enqueueAndForget(()=>iE(e,o)),n.fromCache&&"server"===r.source?i.reject(new B(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new iC(n,s,{includeMetadataChanges:!0,Qa:!0});return i_(e,o)})(await st(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new oi(t,r,e,n))}function ol(e,t,n){var r;e=sl(e,sf);let i=sl(e.firestore,sE),s=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return oc(i,[(function(e,t,n,r,i,s={}){let o,a;let l=e.bc(s.merge||s.mergeFields?2:0,t,n,i);sj("Data must be an object, but it was:",l,r);let u=sF(r,l);if(s.merge)o=new eS(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=s$(t,r,n);if(!l.contains(i))throw new B(F.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);sK(e,i)||e.push(i)}o=new eS(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new sN(new te(u),o,a)})(sx(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,t3.none())])}function ou(e,t,n,...r){e=sl(e,sf);let i=sl(e.firestore,sE),s=sx(i);return oc(i,[("string"==typeof(t=(0,_.m9)(t))||t instanceof sC?function(e,t,n,r,i,s){let o=e.bc(1,t,n),a=[s$(t,r,n)],l=[i];if(s.length%2!=0)throw new B(F.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(s$(t,s[e])),l.push(s[e+1]);let u=[],h=te.empty();for(let e=a.length-1;e>=0;--e)if(!sK(u,a[e])){let t=a[e],n=l[e];n=(0,_.m9)(n);let r=o.mc(t);if(n instanceof sM)u.push(t);else{let e=sV(n,r);null!=e&&(u.push(t),h.set(t,e))}}return new sO(h,new eS(u),o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.bc(1,t,n);sj("Data must be an object, but it was:",i,r);let s=[],o=te.empty();return ew(r,(e,r)=>{let a=sz(t,e,n);r=(0,_.m9)(r);let l=i.mc(a);if(r instanceof sM)s.push(a);else{let e=sV(r,l);null!=e&&(s.push(a),o.set(a,e))}}),new sO(o,new eS(s),i.fieldTransforms)}(s,"updateDoc",e._key,t)).toMutation(e._key,t3.exists(!0))])}function oh(e,...t){var n,r,i;let s,o,a;e=(0,_.m9)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||s_(t[u])||(l=t[u],u++);let h={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(s_(t[u])){let e=t[u];t[u]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[u+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof sf)o=sl(e.firestore,sE),a=tC(e._key.path),s={next:n=>{t[u]&&t[u](od(o,e,n))},error:t[u+1],complete:t[u+2]};else{let n=sl(e,sd);o=sl(n.firestore,sE),a=n._query;let r=new oo(o);s={next:e=>{t[u]&&t[u](new oi(o,r,n,e))},error:t[u+1],complete:t[u+2]},sX(e._query)}return function(e,t,n,r){let i=new i6(r),s=new iC(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>i_(await st(e),s)),()=>{i.xu(),e.asyncQueue.enqueueAndForget(async()=>iE(await st(e),s))}}(sI(o),a,h,s)}function oc(e,t){return function(e,t){let n=new j;return e.asyncQueue.enqueueAndForget(async()=>iF(await se(e).then(e=>e.syncEngine),t,n)),n.promise}(sI(e),t)}function od(e,t,n){let r=n.docs.get(t._key),i=new oo(e);return new on(e,i,t._key,r,new ot(n.hasPendingWrites,n.fromCache),t.converter)}function of(...e){return new sU("arrayRemove",e)}new WeakMap,function(e=!0){R=y.Jn,(0,y.Xd)(new v.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new sE(new H(t.getProvider("auth-internal")),new Q(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new B(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new e$(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,y.KN)(S,A,void 0),(0,y.KN)(S,A,"esm2017")}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],function(){return t(1118),t(3079)}),_N_E=e.O()}]);