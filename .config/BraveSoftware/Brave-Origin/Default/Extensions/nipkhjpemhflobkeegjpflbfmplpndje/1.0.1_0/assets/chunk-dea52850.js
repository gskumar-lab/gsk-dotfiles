var ee = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function q(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var B = { exports: {} };
const re = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const r = crypto.getRandomValues(new Uint8Array(1))[0];
  return (r >= e ? r % e : r).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), J = (e = 7, r = false) => Array.from({ length: e }, re(r ? 16 : 36)).join("");
B.exports = J;
B.exports.default = J;
var se = B.exports;
const j = q(se);
var ue = () => `uid::${j(7)}`, V = (e, r = ["endpointName", "fingerprint"]) => typeof e == "object" && e !== null && r.every((t) => t in e), de = (e) => {
  if (!V(e))
    throw new TypeError("Invalid connection args");
  return JSON.stringify(e);
}, fe = (e) => {
  try {
    const r = JSON.parse(e);
    return V(r) ? r : null;
  } catch {
    return null;
  }
}, pe = () => {
  let e = [];
  return { add: (...r) => {
    e = [...e, ...r];
  }, remove: (r) => {
    e = typeof r == "string" ? e.filter((t) => t.message.transactionId !== r) : e.filter((t) => !r.includes(t));
  }, entries: () => e };
}, xe = class {
  static toBackground(e, r) {
    return e.postMessage(r);
  }
  static toExtensionContext(e, r) {
    return e.postMessage(r);
  }
}, ne = Object.defineProperty, te = Object.defineProperties, oe = Object.getOwnPropertyDescriptors, W = Object.getOwnPropertySymbols, ae = Object.prototype.hasOwnProperty, ie = Object.prototype.propertyIsEnumerable, U = (e, r, t) => r in e ? ne(e, r, { enumerable: true, configurable: true, writable: true, value: t }) : e[r] = t, z = (e, r) => {
  for (var t in r || (r = {}))
    ae.call(r, t) && U(e, t, r[t]);
  if (W)
    for (var t of W(r))
      ie.call(r, t) && U(e, t, r[t]);
  return e;
}, G = (e, r) => te(e, oe(r)), ge = /^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/, Z = (e) => {
  const [, r, t, u] = e.match(ge) || [];
  return { context: r, tabId: +t, frameId: u ? +u : void 0 };
}, be = ({ context: e, tabId: r, frameId: t }) => ["background", "popup", "options"].includes(e) ? e : `${e}@${r}${t ? `.${t}` : ""}`;
const me = [{ property: "name", enumerable: false }, { property: "message", enumerable: false }, { property: "stack", enumerable: false }, { property: "code", enumerable: true }], F = Symbol(".toJSON was called"), le = (e) => {
  e[F] = true;
  const r = e.toJSON();
  return delete e[F], r;
}, H = ({ from: e, seen: r, to_: t, forceEnumerable: u, maxDepth: p, depth: b }) => {
  const i = t || (Array.isArray(e) ? [] : {});
  if (r.push(e), b >= p)
    return i;
  if (typeof e.toJSON == "function" && e[F] !== true)
    return le(e);
  for (const [o, m] of Object.entries(e)) {
    if (typeof Buffer == "function" && Buffer.isBuffer(m)) {
      i[o] = "[object Buffer]";
      continue;
    }
    if (m !== null && typeof m == "object" && typeof m.pipe == "function") {
      i[o] = "[object Stream]";
      continue;
    }
    if (typeof m != "function") {
      if (!m || typeof m != "object") {
        i[o] = m;
        continue;
      }
      if (!r.includes(e[o])) {
        b++, i[o] = H({ from: e[o], seen: [...r], forceEnumerable: u, maxDepth: p, depth: b });
        continue;
      }
      i[o] = "[Circular]";
    }
  }
  for (const { property: o, enumerable: m } of me)
    typeof e[o] == "string" && Object.defineProperty(i, o, { value: e[o], enumerable: u ? true : m, configurable: true, writable: true });
  return i;
};
function ce(e, r = {}) {
  const { maxDepth: t = Number.POSITIVE_INFINITY } = r;
  return typeof e == "object" && e !== null ? H({ from: e, seen: [], forceEnumerable: true, maxDepth: t, depth: 0 }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}
let K = () => ({ events: {}, emit(e, ...r) {
  (this.events[e] || []).forEach((t) => t(...r));
}, on(e, r) {
  return (this.events[e] = this.events[e] || []).push(r), () => this.events[e] = (this.events[e] || []).filter((t) => t !== r);
} });
var he = (e, r, t) => {
  const u = j(), p = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), i = (o) => {
    if (o.destination.context === e && !o.destination.frameId && !o.destination.tabId) {
      t == null ? void 0 : t(o);
      const { transactionId: m, messageID: x, messageType: h } = o, v = () => {
        const f = p.get(m);
        if (f) {
          const { err: c, data: k } = o;
          if (c) {
            const y = c, N = self[y.name], M = new (typeof N == "function" ? N : Error)(y.message);
            for (const I in y)
              M[I] = y[I];
            f.reject(M);
          } else
            f.resolve(k);
          p.delete(m);
        }
      }, C = async () => {
        let f, c, k = false;
        try {
          const y = b.get(x);
          if (typeof y == "function")
            f = await y({ sender: o.origin, id: x, data: o.data, timestamp: o.timestamp });
          else
            throw k = true, new Error(`[webext-bridge] No handler registered in '${e}' to accept messages with id '${x}'`);
        } catch (y) {
          c = y;
        } finally {
          if (c && (o.err = ce(c)), i(G(z({}, o), { messageType: "reply", data: f, origin: { context: e, tabId: null }, destination: o.origin, hops: [] })), c && !k)
            throw f;
        }
      };
      switch (h) {
        case "reply":
          return v();
        case "message":
          return C();
      }
    }
    return o.hops.push(`${e}::${u}`), r(o);
  };
  return { handleMessage: i, endTransaction: (o) => {
    const m = p.get(o);
    m == null ? void 0 : m.reject("Transaction was ended before it could complete"), p.delete(o);
  }, sendMessage: (o, m, x = "background") => {
    const h = typeof x == "string" ? Z(x) : x, v = "Bridge#sendMessage ->";
    if (!h.context)
      throw new TypeError(`${v} Destination must be any one of known destinations`);
    return new Promise((C, f) => {
      const c = { messageID: o, data: m, destination: h, messageType: "message", transactionId: j(), origin: { context: e, tabId: null }, hops: [], timestamp: Date.now() };
      p.set(c.transactionId, { resolve: C, reject: f });
      try {
        i(c);
      } catch (k) {
        p.delete(c.transactionId), f(k);
      }
    });
  }, onMessage: (o, m) => (b.set(o, m), () => b.delete(o)) };
}, P = class {
  constructor(e, r) {
    this.endpointRuntime = e, this.streamInfo = r, this.emitter = K(), this.isClosed = false, this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = true, this.emitter.emit("closed", true), this.emitter.events = {});
    }, P.initDone || (e.onMessage("__crx_bridge_stream_transfer__", (t) => {
      const { streamId: u, streamTransfer: p, action: b } = t.data, i = P.openStreams.get(u);
      i && !i.isClosed && (b === "transfer" && i.emitter.emit("message", p), b === "close" && (P.openStreams.delete(u), i.handleStreamClose()));
    }), P.initDone = true), P.openStreams.set(this.streamInfo.streamId, this);
  }
  get info() {
    return this.streamInfo;
  }
  send(e) {
    if (this.isClosed)
      throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
    this.endpointRuntime.sendMessage("__crx_bridge_stream_transfer__", { streamId: this.streamInfo.streamId, streamTransfer: e, action: "transfer" }, this.streamInfo.endpoint);
  }
  close(e) {
    e && this.send(e), this.handleStreamClose(), this.endpointRuntime.sendMessage("__crx_bridge_stream_transfer__", { streamId: this.streamInfo.streamId, streamTransfer: null, action: "close" }, this.streamInfo.endpoint);
  }
  onMessage(e) {
    return this.getDisposable("message", e);
  }
  onClose(e) {
    return this.getDisposable("closed", e);
  }
  getDisposable(e, r) {
    const t = this.emitter.on(e, r);
    return Object.assign(t, { dispose: t, close: t });
  }
}, $ = P;
$.initDone = false;
$.openStreams = /* @__PURE__ */ new Map();
var ye = (e) => {
  const r = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), u = K();
  e.onMessage("__crx_bridge_stream_open__", (i) => new Promise((o) => {
    const { sender: m, data: x } = i, { channel: h } = x;
    let v = false, C = () => {
    };
    const f = () => {
      const c = t.get(h);
      typeof c == "function" ? (c(new $(e, G(z({}, x), { endpoint: m }))), v && C(), o(true)) : v || (v = true, C = u.on("did-change-stream-callbacks", f));
    };
    f();
  }));
  async function p(i, o) {
    if (r.has(i))
      throw new Error("webext-bridge: A Stream is already open at this channel");
    const m = typeof o == "string" ? Z(o) : o, x = { streamId: j(), channel: i, endpoint: m }, h = new $(e, x);
    return h.onClose(() => r.delete(i)), await e.sendMessage("__crx_bridge_stream_open__", x, m), r.set(i, h), h;
  }
  function b(i, o) {
    if (t.has(i))
      throw new Error("webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication");
    t.set(i, o), u.emit("did-change-stream-callbacks");
  }
  return { openStream: p, onOpenStreamChannel: b };
}, Y = { exports: {} };
(function(e, r) {
  (function(t, u) {
    u(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ee, function(t) {
    if (typeof globalThis != "object" || typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
      throw new Error("This script should only be loaded in a browser extension.");
    if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
      const u = "The message port closed before a response was received.", p = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", b = (i) => {
        const o = { alarms: { clear: { minArgs: 0, maxArgs: 1 }, clearAll: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 } }, bookmarks: { create: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, getChildren: { minArgs: 1, maxArgs: 1 }, getRecent: { minArgs: 1, maxArgs: 1 }, getSubTree: { minArgs: 1, maxArgs: 1 }, getTree: { minArgs: 0, maxArgs: 0 }, move: { minArgs: 2, maxArgs: 2 }, remove: { minArgs: 1, maxArgs: 1 }, removeTree: { minArgs: 1, maxArgs: 1 }, search: { minArgs: 1, maxArgs: 1 }, update: { minArgs: 2, maxArgs: 2 } }, browserAction: { disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: true }, enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: true }, getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 }, getBadgeText: { minArgs: 1, maxArgs: 1 }, getPopup: { minArgs: 1, maxArgs: 1 }, getTitle: { minArgs: 1, maxArgs: 1 }, openPopup: { minArgs: 0, maxArgs: 0 }, setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, setIcon: { minArgs: 1, maxArgs: 1 }, setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true } }, browsingData: { remove: { minArgs: 2, maxArgs: 2 }, removeCache: { minArgs: 1, maxArgs: 1 }, removeCookies: { minArgs: 1, maxArgs: 1 }, removeDownloads: { minArgs: 1, maxArgs: 1 }, removeFormData: { minArgs: 1, maxArgs: 1 }, removeHistory: { minArgs: 1, maxArgs: 1 }, removeLocalStorage: { minArgs: 1, maxArgs: 1 }, removePasswords: { minArgs: 1, maxArgs: 1 }, removePluginData: { minArgs: 1, maxArgs: 1 }, settings: { minArgs: 0, maxArgs: 0 } }, commands: { getAll: { minArgs: 0, maxArgs: 0 } }, contextMenus: { remove: { minArgs: 1, maxArgs: 1 }, removeAll: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } }, cookies: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 1, maxArgs: 1 }, getAllCookieStores: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } }, devtools: { inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: false } }, panels: { create: { minArgs: 3, maxArgs: 3, singleCallbackArg: true }, elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } } } }, downloads: { cancel: { minArgs: 1, maxArgs: 1 }, download: { minArgs: 1, maxArgs: 1 }, erase: { minArgs: 1, maxArgs: 1 }, getFileIcon: { minArgs: 1, maxArgs: 2 }, open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, pause: { minArgs: 1, maxArgs: 1 }, removeFile: { minArgs: 1, maxArgs: 1 }, resume: { minArgs: 1, maxArgs: 1 }, search: { minArgs: 1, maxArgs: 1 }, show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true } }, extension: { isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 }, isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 } }, history: { addUrl: { minArgs: 1, maxArgs: 1 }, deleteAll: { minArgs: 0, maxArgs: 0 }, deleteRange: { minArgs: 1, maxArgs: 1 }, deleteUrl: { minArgs: 1, maxArgs: 1 }, getVisits: { minArgs: 1, maxArgs: 1 }, search: { minArgs: 1, maxArgs: 1 } }, i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } }, identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } }, idle: { queryState: { minArgs: 1, maxArgs: 1 } }, management: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, getSelf: { minArgs: 0, maxArgs: 0 }, setEnabled: { minArgs: 2, maxArgs: 2 }, uninstallSelf: { minArgs: 0, maxArgs: 1 } }, notifications: { clear: { minArgs: 1, maxArgs: 1 }, create: { minArgs: 1, maxArgs: 2 }, getAll: { minArgs: 0, maxArgs: 0 }, getPermissionLevel: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } }, pageAction: { getPopup: { minArgs: 1, maxArgs: 1 }, getTitle: { minArgs: 1, maxArgs: 1 }, hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, setIcon: { minArgs: 1, maxArgs: 1 }, setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true } }, permissions: { contains: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, request: { minArgs: 1, maxArgs: 1 } }, runtime: { getBackgroundPage: { minArgs: 0, maxArgs: 0 }, getPlatformInfo: { minArgs: 0, maxArgs: 0 }, openOptionsPage: { minArgs: 0, maxArgs: 0 }, requestUpdateCheck: { minArgs: 0, maxArgs: 0 }, sendMessage: { minArgs: 1, maxArgs: 3 }, sendNativeMessage: { minArgs: 2, maxArgs: 2 }, setUninstallURL: { minArgs: 1, maxArgs: 1 } }, sessions: { getDevices: { minArgs: 0, maxArgs: 1 }, getRecentlyClosed: { minArgs: 0, maxArgs: 1 }, restore: { minArgs: 0, maxArgs: 1 } }, storage: { local: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } }, managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } }, sync: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } } }, tabs: { captureVisibleTab: { minArgs: 0, maxArgs: 2 }, create: { minArgs: 1, maxArgs: 1 }, detectLanguage: { minArgs: 0, maxArgs: 1 }, discard: { minArgs: 0, maxArgs: 1 }, duplicate: { minArgs: 1, maxArgs: 1 }, executeScript: { minArgs: 1, maxArgs: 2 }, get: { minArgs: 1, maxArgs: 1 }, getCurrent: { minArgs: 0, maxArgs: 0 }, getZoom: { minArgs: 0, maxArgs: 1 }, getZoomSettings: { minArgs: 0, maxArgs: 1 }, goBack: { minArgs: 0, maxArgs: 1 }, goForward: { minArgs: 0, maxArgs: 1 }, highlight: { minArgs: 1, maxArgs: 1 }, insertCSS: { minArgs: 1, maxArgs: 2 }, move: { minArgs: 2, maxArgs: 2 }, query: { minArgs: 1, maxArgs: 1 }, reload: { minArgs: 0, maxArgs: 2 }, remove: { minArgs: 1, maxArgs: 1 }, removeCSS: { minArgs: 1, maxArgs: 2 }, sendMessage: { minArgs: 2, maxArgs: 3 }, setZoom: { minArgs: 1, maxArgs: 2 }, setZoomSettings: { minArgs: 1, maxArgs: 2 }, update: { minArgs: 1, maxArgs: 2 } }, topSites: { get: { minArgs: 0, maxArgs: 0 } }, webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } }, webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } }, windows: { create: { minArgs: 0, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 2 }, getAll: { minArgs: 0, maxArgs: 1 }, getCurrent: { minArgs: 0, maxArgs: 1 }, getLastFocused: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, update: { minArgs: 2, maxArgs: 2 } } };
        if (Object.keys(o).length === 0)
          throw new Error("api-metadata.json has not been included in browser-polyfill");
        class m extends WeakMap {
          constructor(n, g = void 0) {
            super(g), this.createItem = n;
          }
          get(n) {
            return this.has(n) || this.set(n, this.createItem(n)), super.get(n);
          }
        }
        const x = (s) => s && typeof s == "object" && typeof s.then == "function", h = (s, n) => (...g) => {
          i.runtime.lastError ? s.reject(new Error(i.runtime.lastError.message)) : n.singleCallbackArg || g.length <= 1 && n.singleCallbackArg !== false ? s.resolve(g[0]) : s.resolve(g);
        }, v = (s) => s == 1 ? "argument" : "arguments", C = (s, n) => function(l, ...d) {
          if (d.length < n.minArgs)
            throw new Error(`Expected at least ${n.minArgs} ${v(n.minArgs)} for ${s}(), got ${d.length}`);
          if (d.length > n.maxArgs)
            throw new Error(`Expected at most ${n.maxArgs} ${v(n.maxArgs)} for ${s}(), got ${d.length}`);
          return new Promise((w, _) => {
            if (n.fallbackToNoCallback)
              try {
                l[s](...d, h({ resolve: w, reject: _ }, n));
              } catch (a) {
                console.warn(`${s} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, a), l[s](...d), n.fallbackToNoCallback = false, n.noCallback = true, w();
              }
            else
              n.noCallback ? (l[s](...d), w()) : l[s](...d, h({ resolve: w, reject: _ }, n));
          });
        }, f = (s, n, g) => new Proxy(n, { apply(l, d, w) {
          return g.call(d, s, ...w);
        } });
        let c = Function.call.bind(Object.prototype.hasOwnProperty);
        const k = (s, n = {}, g = {}) => {
          let l = /* @__PURE__ */ Object.create(null), d = { has(_, a) {
            return a in s || a in l;
          }, get(_, a, E) {
            if (a in l)
              return l[a];
            if (!(a in s))
              return;
            let A = s[a];
            if (typeof A == "function")
              if (typeof n[a] == "function")
                A = f(s, s[a], n[a]);
              else if (c(g, a)) {
                let T = C(a, g[a]);
                A = f(s, s[a], T);
              } else
                A = A.bind(s);
            else if (typeof A == "object" && A !== null && (c(n, a) || c(g, a)))
              A = k(A, n[a], g[a]);
            else if (c(g, "*"))
              A = k(A, n[a], g["*"]);
            else
              return Object.defineProperty(l, a, { configurable: true, enumerable: true, get() {
                return s[a];
              }, set(T) {
                s[a] = T;
              } }), A;
            return l[a] = A, A;
          }, set(_, a, E, A) {
            return a in l ? l[a] = E : s[a] = E, true;
          }, defineProperty(_, a, E) {
            return Reflect.defineProperty(l, a, E);
          }, deleteProperty(_, a) {
            return Reflect.deleteProperty(l, a);
          } }, w = Object.create(s);
          return new Proxy(w, d);
        }, y = (s) => ({ addListener(n, g, ...l) {
          n.addListener(s.get(g), ...l);
        }, hasListener(n, g) {
          return n.hasListener(s.get(g));
        }, removeListener(n, g) {
          n.removeListener(s.get(g));
        } }), N = new m((s) => typeof s != "function" ? s : function(g) {
          const l = k(g, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
          s(l);
        });
        let M = false;
        const I = new m((s) => typeof s != "function" ? s : function(g, l, d) {
          let w = false, _, a = new Promise((O) => {
            _ = function(S) {
              M || (console.warn(p, new Error().stack), M = true), w = true, O(S);
            };
          }), E;
          try {
            E = s(g, l, _);
          } catch (O) {
            E = Promise.reject(O);
          }
          const A = E !== true && x(E);
          if (E !== true && !A && !w)
            return false;
          const T = (O) => {
            O.then((S) => {
              d(S);
            }, (S) => {
              let D;
              S && (S instanceof Error || typeof S.message == "string") ? D = S.message : D = "An unexpected error occurred", d({ __mozWebExtensionPolyfillReject__: true, message: D });
            }).catch((S) => {
              console.error("Failed to send onMessage rejected reply", S);
            });
          };
          return T(A ? E : a), true;
        }), Q = ({ reject: s, resolve: n }, g) => {
          i.runtime.lastError ? i.runtime.lastError.message === u ? n() : s(new Error(i.runtime.lastError.message)) : g && g.__mozWebExtensionPolyfillReject__ ? s(new Error(g.message)) : n(g);
        }, L = (s, n, g, ...l) => {
          if (l.length < n.minArgs)
            throw new Error(`Expected at least ${n.minArgs} ${v(n.minArgs)} for ${s}(), got ${l.length}`);
          if (l.length > n.maxArgs)
            throw new Error(`Expected at most ${n.maxArgs} ${v(n.maxArgs)} for ${s}(), got ${l.length}`);
          return new Promise((d, w) => {
            const _ = Q.bind(null, { resolve: d, reject: w });
            l.push(_), g.sendMessage(...l);
          });
        }, X = { devtools: { network: { onRequestFinished: y(N) } }, runtime: { onMessage: y(I), onMessageExternal: y(I), sendMessage: L.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) }, tabs: { sendMessage: L.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) } }, R = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
        return o.privacy = { network: { "*": R }, services: { "*": R }, websites: { "*": R } }, k(i, X, o);
      };
      t.exports = b(chrome);
    } else
      t.exports = globalThis.browser;
  });
})(Y);
var Ae = Y.exports;
const we = q(Ae);
export {
  xe as P,
  z as _,
  he as a,
  we as b,
  ue as c,
  fe as d,
  ye as e,
  be as f,
  pe as g,
  G as h,
  q as i,
  de as j,
  Z as p
};
