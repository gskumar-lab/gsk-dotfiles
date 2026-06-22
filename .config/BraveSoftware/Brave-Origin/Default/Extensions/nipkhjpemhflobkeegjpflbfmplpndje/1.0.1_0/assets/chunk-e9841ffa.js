import { c as m, a as S, b as C, d as D, f as b, p as _, e as M, g as F, P as g, _ as p, h as T } from "./chunk-dea52850.js";
var v = F(), a = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), h = (e, r) => (f.set(e, (f.get(e) || /* @__PURE__ */ new Set()).add(r)), () => {
  const n = f.get(e);
  (n == null ? void 0 : n.delete(r)) && (n == null ? void 0 : n.size) === 0 && f.delete(e);
}), x = (e, r) => {
  w.set(e, (w.get(e) || /* @__PURE__ */ new Set()).add(r));
}, l = (e) => ({ withFingerprint: (r) => {
  const n = (o) => ({ and: () => o }), s = { aboutIncomingMessage: (o) => {
    const t = a.get(e);
    return g.toExtensionContext(t.port, { status: "incoming", message: o }), n(s);
  }, aboutSuccessfulDelivery: (o) => {
    const t = a.get(e);
    return g.toExtensionContext(t.port, { status: "delivered", receipt: o }), n(s);
  }, aboutMessageUndeliverability: (o, t) => {
    const i = a.get(e);
    return (i == null ? void 0 : i.fingerprint) === r && g.toExtensionContext(i.port, { status: "undeliverable", resolvedDestination: o, message: t }), n(s);
  }, whenDeliverableTo: (o) => {
    const t = () => {
      const i = a.get(e);
      if ((i == null ? void 0 : i.fingerprint) === r && a.has(o))
        return g.toExtensionContext(i.port, { status: "deliverable", deliverableTo: o }), true;
    };
    if (!t()) {
      const i = h(o, t);
      x(r, i);
    }
    return n(s);
  }, aboutSessionEnded: (o) => {
    const t = a.get(e);
    return (t == null ? void 0 : t.fingerprint) === r && g.toExtensionContext(t.port, { status: "terminated", fingerprint: o }), n(s);
  } };
  return s;
} }), k = m(), I = S("background", (e) => {
  var r;
  if (e.origin.context === "background" && ["content-script", "devtools "].includes(e.destination.context) && !e.destination.tabId)
    throw new TypeError("When sending messages from background page, use @tabId syntax to target specific tab");
  const n = b(p(p({}, e.origin), e.origin.context === "window" && { context: "content-script" })), s = b(T(p(p({}, e.destination), e.destination.context === "window" && { context: "content-script" }), { tabId: e.destination.tabId || e.origin.tabId }));
  e.destination.tabId = null, e.destination.frameId = null;
  const o = () => a.get(s), t = () => a.get(n), i = () => {
    var c;
    l(s).withFingerprint(o().fingerprint).aboutIncomingMessage(e);
    const u = { message: e, to: o().fingerprint, from: { endpointId: n, fingerprint: (c = t()) == null ? void 0 : c.fingerprint } };
    e.messageType === "message" && v.add(u), e.messageType === "reply" && v.remove(e.messageID), t() && l(n).withFingerprint(t().fingerprint).aboutSuccessfulDelivery(u);
  };
  (r = o()) != null && r.port ? i() : e.messageType === "message" && (e.origin.context === "background" ? h(s, i) : t() && l(n).withFingerprint(t().fingerprint).aboutMessageUndeliverability(s, e).and().whenDeliverableTo(s));
}, (e) => {
  const r = b(p(p({}, e.origin), e.origin.context === "window" && { context: "content-script" })), n = a.get(r), s = { message: e, to: k, from: { endpointId: r, fingerprint: n.fingerprint } };
  l(r).withFingerprint(n.fingerprint).aboutSuccessfulDelivery(s);
});
C.runtime.onConnect.addListener((e) => {
  var r;
  const n = D(e.name);
  if (!n)
    return;
  n.endpointName || (n.endpointName = b({ context: "content-script", tabId: e.sender.tab.id, frameId: e.sender.frameId }));
  const { tabId: s, frameId: o } = _(n.endpointName);
  a.set(n.endpointName, { fingerprint: n.fingerprint, port: e }), (r = f.get(n.endpointName)) == null || r.forEach((t) => t()), f.delete(n.endpointName), x(n.fingerprint, () => {
    const t = v.entries().filter((i) => i.to === n.fingerprint);
    v.remove(t), t.forEach((i) => {
      i.from.endpointId === "background" ? I.endTransaction(i.message.transactionId) : l(i.from.endpointId).withFingerprint(i.from.fingerprint).aboutSessionEnded(n.fingerprint);
    });
  }), e.onDisconnect.addListener(() => {
    var t, i;
    ((t = a.get(n.endpointName)) == null ? void 0 : t.fingerprint) === n.fingerprint && a.delete(n.endpointName), (i = w.get(n.fingerprint)) == null || i.forEach((c) => c()), w.delete(n.fingerprint);
  }), e.onMessage.addListener((t) => {
    var i, c;
    if (t.type === "sync") {
      const u = [...a.values()].map((d) => d.fingerprint), E = t.pendingResponses.filter((d) => u.includes(d.to));
      v.add(...E), t.pendingResponses.filter((d) => !u.includes(d.to)).forEach((d) => l(n.endpointName).withFingerprint(n.fingerprint).aboutSessionEnded(d.to)), t.pendingDeliveries.forEach((d) => l(n.endpointName).withFingerprint(n.fingerprint).whenDeliverableTo(d));
      return;
    }
    t.type === "deliver" && ((c = (i = t.message) == null ? void 0 : i.origin) != null && c.context) && (t.message.origin.tabId = s, t.message.origin.frameId = o, I.handleMessage(t.message));
  });
});
var { sendMessage: R, onMessage: y } = I;
M(I);
y("ping", async ({ data: e }) => (console.log("Received data:", e), { data: e, response: "pong" }));
y("openSidePanel", async ({ data: e }) => {
  try {
    return chrome.sidePanel.open({ windowId: e.windowId }), { success: true };
  } catch (r) {
    return console.error("Error opening side panel:", r), { success: false, error: r.message };
  }
});
