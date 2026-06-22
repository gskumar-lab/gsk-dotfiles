var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { i as mo, c as rv, P as Fi, b as lv, j as ov, g as sv, a as iv, e as av } from "./chunk-dea52850.js";
let XC, VC, R, o5, Td, p;
let __tla = (async () => {
  var _a2, _b2;
  function uv(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const l in r)
          if (l !== "default" && !(l in e)) {
            const o = Object.getOwnPropertyDescriptor(r, l);
            o && Object.defineProperty(e, l, o.get ? o : {
              enumerable: true,
              get: () => r[l]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
      return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
      r(l);
    new MutationObserver((l) => {
      for (const o of l)
        if (o.type === "childList")
          for (const s of o.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(l) {
      const o = {};
      return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function r(l) {
      if (l.ep)
        return;
      l.ep = true;
      const o = n(l);
      fetch(l.href, o);
    }
  })();
  var Mp = {
    exports: {}
  }, ti = {}, Ap = {
    exports: {}
  }, Q = {};
  var ho = Symbol.for("react.element"), cv = Symbol.for("react.portal"), dv = Symbol.for("react.fragment"), fv = Symbol.for("react.strict_mode"), pv = Symbol.for("react.profiler"), mv = Symbol.for("react.provider"), hv = Symbol.for("react.context"), gv = Symbol.for("react.forward_ref"), vv = Symbol.for("react.suspense"), yv = Symbol.for("react.memo"), xv = Symbol.for("react.lazy"), Nd = Symbol.iterator;
  function wv(e) {
    return e === null || typeof e != "object" ? null : (e = Nd && e[Nd] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Fp = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _p = Object.assign, Dp = {};
  function nl(e, t, n) {
    this.props = e, this.context = t, this.refs = Dp, this.updater = n || Fp;
  }
  nl.prototype.isReactComponent = {};
  nl.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  nl.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Up() {
  }
  Up.prototype = nl.prototype;
  function Vu(e, t, n) {
    this.props = e, this.context = t, this.refs = Dp, this.updater = n || Fp;
  }
  var Zu = Vu.prototype = new Up();
  Zu.constructor = Vu;
  _p(Zu, nl.prototype);
  Zu.isPureReactComponent = true;
  var kd = Array.isArray, zp = Object.prototype.hasOwnProperty, Yu = {
    current: null
  }, Bp = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Hp(e, t, n) {
    var r, l = {}, o = null, s = null;
    if (t != null)
      for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
        zp.call(t, r) && !Bp.hasOwnProperty(r) && (l[r] = t[r]);
    var i = arguments.length - 2;
    if (i === 1)
      l.children = n;
    else if (1 < i) {
      for (var a = Array(i), u = 0; u < i; u++)
        a[u] = arguments[u + 2];
      l.children = a;
    }
    if (e && e.defaultProps)
      for (r in i = e.defaultProps, i)
        l[r] === void 0 && (l[r] = i[r]);
    return {
      $$typeof: ho,
      type: e,
      key: o,
      ref: s,
      props: l,
      _owner: Yu.current
    };
  }
  function bv(e, t) {
    return {
      $$typeof: ho,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function Ku(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ho;
  }
  function Ev(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Rd = /\/+/g;
  function _i(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ev("" + e.key) : t.toString(36);
  }
  function ns(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = false;
    if (e === null)
      s = true;
    else
      switch (o) {
        case "string":
        case "number":
          s = true;
          break;
        case "object":
          switch (e.$$typeof) {
            case ho:
            case cv:
              s = true;
          }
      }
    if (s)
      return s = e, l = l(s), e = r === "" ? "." + _i(s, 0) : r, kd(l) ? (n = "", e != null && (n = e.replace(Rd, "$&/") + "/"), ns(l, t, n, "", function(u) {
        return u;
      })) : l != null && (Ku(l) && (l = bv(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(Rd, "$&/") + "/") + e)), t.push(l)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", kd(e))
      for (var i = 0; i < e.length; i++) {
        o = e[i];
        var a = r + _i(o, i);
        s += ns(o, t, n, a, l);
      }
    else if (a = wv(e), typeof a == "function")
      for (e = a.call(e), i = 0; !(o = e.next()).done; )
        o = o.value, a = r + _i(o, i++), s += ns(o, t, n, a, l);
    else if (o === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s;
  }
  function Po(e, t, n) {
    if (e == null)
      return e;
    var r = [], l = 0;
    return ns(e, r, "", "", function(o) {
      return t.call(n, o, l++);
    }), r;
  }
  function Sv(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1)
      return e._result.default;
    throw e._result;
  }
  var Be = {
    current: null
  }, rs = {
    transition: null
  }, Cv = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: rs,
    ReactCurrentOwner: Yu
  };
  function Wp() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  Q.Children = {
    map: Po,
    forEach: function(e, t, n) {
      Po(e, function() {
        t.apply(this, arguments);
      }, n);
    },
    count: function(e) {
      var t = 0;
      return Po(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return Po(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!Ku(e))
        throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  Q.Component = nl;
  Q.Fragment = dv;
  Q.Profiler = pv;
  Q.PureComponent = Vu;
  Q.StrictMode = fv;
  Q.Suspense = vv;
  Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cv;
  Q.act = Wp;
  Q.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = _p({}, e.props), l = e.key, o = e.ref, s = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, s = Yu.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
        var i = e.type.defaultProps;
      for (a in t)
        zp.call(t, a) && !Bp.hasOwnProperty(a) && (r[a] = t[a] === void 0 && i !== void 0 ? i[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1)
      r.children = n;
    else if (1 < a) {
      i = Array(a);
      for (var u = 0; u < a; u++)
        i[u] = arguments[u + 2];
      r.children = i;
    }
    return {
      $$typeof: ho,
      type: e.type,
      key: l,
      ref: o,
      props: r,
      _owner: s
    };
  };
  Q.createContext = function(e) {
    return e = {
      $$typeof: hv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, e.Provider = {
      $$typeof: mv,
      _context: e
    }, e.Consumer = e;
  };
  Q.createElement = Hp;
  Q.createFactory = function(e) {
    var t = Hp.bind(null, e);
    return t.type = e, t;
  };
  Q.createRef = function() {
    return {
      current: null
    };
  };
  Q.forwardRef = function(e) {
    return {
      $$typeof: gv,
      render: e
    };
  };
  Q.isValidElement = Ku;
  Q.lazy = function(e) {
    return {
      $$typeof: xv,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: Sv
    };
  };
  Q.memo = function(e, t) {
    return {
      $$typeof: yv,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  Q.startTransition = function(e) {
    var t = rs.transition;
    rs.transition = {};
    try {
      e();
    } finally {
      rs.transition = t;
    }
  };
  Q.unstable_act = Wp;
  Q.useCallback = function(e, t) {
    return Be.current.useCallback(e, t);
  };
  Q.useContext = function(e) {
    return Be.current.useContext(e);
  };
  Q.useDebugValue = function() {
  };
  Q.useDeferredValue = function(e) {
    return Be.current.useDeferredValue(e);
  };
  Q.useEffect = function(e, t) {
    return Be.current.useEffect(e, t);
  };
  Q.useId = function() {
    return Be.current.useId();
  };
  Q.useImperativeHandle = function(e, t, n) {
    return Be.current.useImperativeHandle(e, t, n);
  };
  Q.useInsertionEffect = function(e, t) {
    return Be.current.useInsertionEffect(e, t);
  };
  Q.useLayoutEffect = function(e, t) {
    return Be.current.useLayoutEffect(e, t);
  };
  Q.useMemo = function(e, t) {
    return Be.current.useMemo(e, t);
  };
  Q.useReducer = function(e, t, n) {
    return Be.current.useReducer(e, t, n);
  };
  Q.useRef = function(e) {
    return Be.current.useRef(e);
  };
  Q.useState = function(e) {
    return Be.current.useState(e);
  };
  Q.useSyncExternalStore = function(e, t, n) {
    return Be.current.useSyncExternalStore(e, t, n);
  };
  Q.useTransition = function() {
    return Be.current.useTransition();
  };
  Q.version = "18.3.1";
  Ap.exports = Q;
  var c = Ap.exports;
  let xs;
  R = mo(c);
  xs = uv({
    __proto__: null,
    default: R
  }, [
    c
  ]);
  var Nv = c, kv = Symbol.for("react.element"), Rv = Symbol.for("react.fragment"), Tv = Object.prototype.hasOwnProperty, $v = Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jv = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Vp(e, t, n) {
    var r, l = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t)
      Tv.call(t, r) && !jv.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
      for (r in t = e.defaultProps, t)
        l[r] === void 0 && (l[r] = t[r]);
    return {
      $$typeof: kv,
      type: e,
      key: o,
      ref: s,
      props: l,
      _owner: $v.current
    };
  }
  ti.Fragment = Rv;
  ti.jsx = Vp;
  ti.jsxs = Vp;
  Mp.exports = ti;
  let Zp, lt, Yp, Kp;
  p = Mp.exports;
  Td = {};
  Zp = {
    exports: {}
  };
  lt = {};
  Yp = {
    exports: {}
  };
  Kp = {};
  (function(e) {
    function t(j, C) {
      var L = j.length;
      j.push(C);
      e:
        for (; 0 < L; ) {
          var V = L - 1 >>> 1, D = j[V];
          if (0 < l(D, C))
            j[V] = C, j[L] = D, L = V;
          else
            break e;
        }
    }
    function n(j) {
      return j.length === 0 ? null : j[0];
    }
    function r(j) {
      if (j.length === 0)
        return null;
      var C = j[0], L = j.pop();
      if (L !== C) {
        j[0] = L;
        e:
          for (var V = 0, D = j.length, _ = D >>> 1; V < _; ) {
            var K = 2 * (V + 1) - 1, G = j[K], Ne = K + 1, X = j[Ne];
            if (0 > l(G, L))
              Ne < D && 0 > l(X, G) ? (j[V] = X, j[Ne] = L, V = Ne) : (j[V] = G, j[K] = L, V = K);
            else if (Ne < D && 0 > l(X, L))
              j[V] = X, j[Ne] = L, V = Ne;
            else
              break e;
          }
      }
      return C;
    }
    function l(j, C) {
      var L = j.sortIndex - C.sortIndex;
      return L !== 0 ? L : j.id - C.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      e.unstable_now = function() {
        return o.now();
      };
    } else {
      var s = Date, i = s.now();
      e.unstable_now = function() {
        return s.now() - i;
      };
    }
    var a = [], u = [], d = 1, m = null, v = 3, f = false, x = false, w = false, b = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(j) {
      for (var C = n(u); C !== null; ) {
        if (C.callback === null)
          r(u);
        else if (C.startTime <= j)
          r(u), C.sortIndex = C.expirationTime, t(a, C);
        else
          break;
        C = n(u);
      }
    }
    function E(j) {
      if (w = false, y(j), !x)
        if (n(a) !== null)
          x = true, F(S);
        else {
          var C = n(u);
          C !== null && H(E, C.startTime - j);
        }
    }
    function S(j, C) {
      x = false, w && (w = false, h(k), k = -1), f = true;
      var L = v;
      try {
        for (y(C), m = n(a); m !== null && (!(m.expirationTime > C) || j && !I()); ) {
          var V = m.callback;
          if (typeof V == "function") {
            m.callback = null, v = m.priorityLevel;
            var D = V(m.expirationTime <= C);
            C = e.unstable_now(), typeof D == "function" ? m.callback = D : m === n(a) && r(a), y(C);
          } else
            r(a);
          m = n(a);
        }
        if (m !== null)
          var _ = true;
        else {
          var K = n(u);
          K !== null && H(E, K.startTime - C), _ = false;
        }
        return _;
      } finally {
        m = null, v = L, f = false;
      }
    }
    var N = false, T = null, k = -1, M = 5, $ = -1;
    function I() {
      return !(e.unstable_now() - $ < M);
    }
    function Z() {
      if (T !== null) {
        var j = e.unstable_now();
        $ = j;
        var C = true;
        try {
          C = T(true, j);
        } finally {
          C ? B() : (N = false, T = null);
        }
      } else
        N = false;
    }
    var B;
    if (typeof g == "function")
      B = function() {
        g(Z);
      };
    else if (typeof MessageChannel < "u") {
      var P = new MessageChannel(), A = P.port2;
      P.port1.onmessage = Z, B = function() {
        A.postMessage(null);
      };
    } else
      B = function() {
        b(Z, 0);
      };
    function F(j) {
      T = j, N || (N = true, B());
    }
    function H(j, C) {
      k = b(function() {
        j(e.unstable_now());
      }, C);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, e.unstable_continueExecution = function() {
      x || f || (x = true, F(S));
    }, e.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < j ? Math.floor(1e3 / j) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(a);
    }, e.unstable_next = function(j) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var C = 3;
          break;
        default:
          C = v;
      }
      var L = v;
      v = C;
      try {
        return j();
      } finally {
        v = L;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(j, C) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var L = v;
      v = j;
      try {
        return C();
      } finally {
        v = L;
      }
    }, e.unstable_scheduleCallback = function(j, C, L) {
      var V = e.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? V + L : V) : L = V, j) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return D = L + D, j = {
        id: d++,
        callback: C,
        priorityLevel: j,
        startTime: L,
        expirationTime: D,
        sortIndex: -1
      }, L > V ? (j.sortIndex = L, t(u, j), n(a) === null && j === n(u) && (w ? (h(k), k = -1) : w = true, H(E, L - V))) : (j.sortIndex = D, t(a, j), x || f || (x = true, F(S))), j;
    }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(j) {
      var C = v;
      return function() {
        var L = v;
        v = C;
        try {
          return j.apply(this, arguments);
        } finally {
          v = L;
        }
      };
    };
  })(Kp);
  Yp.exports = Kp;
  var Lv = Yp.exports;
  var Pv = c, nt = Lv;
  function O(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Gp = /* @__PURE__ */ new Set(), Wl = {};
  function dr(e, t) {
    Zr(e, t), Zr(e + "Capture", t);
  }
  function Zr(e, t) {
    for (Wl[e] = t, e = 0; e < t.length; e++)
      Gp.add(t[e]);
  }
  var en = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ra = Object.prototype.hasOwnProperty, Ov = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $d = {}, jd = {};
  function Iv(e) {
    return Ra.call(jd, e) ? true : Ra.call($d, e) ? false : Ov.test(e) ? jd[e] = true : ($d[e] = true, false);
  }
  function Mv(e, t, n, r) {
    if (n !== null && n.type === 0)
      return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function Av(e, t, n, r) {
    if (t === null || typeof t > "u" || Mv(e, t, n, r))
      return true;
    if (r)
      return false;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === false;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return false;
  }
  function He(e, t, n, r, l, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
  }
  var Le = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Le[e] = new He(e, 0, false, e, null, false, false);
  });
  [
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "className",
      "class"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ]
  ].forEach(function(e) {
    var t = e[0];
    Le[t] = new He(t, 1, false, e[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(e) {
    Le[e] = new He(e, 2, false, e.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(e) {
    Le[e] = new He(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Le[e] = new He(e, 3, false, e.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(e) {
    Le[e] = new He(e, 3, true, e, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(e) {
    Le[e] = new He(e, 4, false, e, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(e) {
    Le[e] = new He(e, 6, false, e, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(e) {
    Le[e] = new He(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var Gu = /[\-:]([a-z])/g;
  function Qu(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Gu, Qu);
    Le[t] = new He(t, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Gu, Qu);
    Le[t] = new He(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(e) {
    var t = e.replace(Gu, Qu);
    Le[t] = new He(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(e) {
    Le[e] = new He(e, 1, false, e.toLowerCase(), null, false, false);
  });
  Le.xlinkHref = new He("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(e) {
    Le[e] = new He(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function Xu(e, t, n, r) {
    var l = Le.hasOwnProperty(t) ? Le[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Av(t, n, l, r) && (n = null), r || l === null ? Iv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var on = Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oo = Symbol.for("react.element"), Er = Symbol.for("react.portal"), Sr = Symbol.for("react.fragment"), qu = Symbol.for("react.strict_mode"), Ta = Symbol.for("react.profiler"), Qp = Symbol.for("react.provider"), Xp = Symbol.for("react.context"), Ju = Symbol.for("react.forward_ref"), $a = Symbol.for("react.suspense"), ja = Symbol.for("react.suspense_list"), ec = Symbol.for("react.memo"), dn = Symbol.for("react.lazy"), qp = Symbol.for("react.offscreen"), Ld = Symbol.iterator;
  function pl(e) {
    return e === null || typeof e != "object" ? null : (e = Ld && e[Ld] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var he = Object.assign, Di;
  function Nl(e) {
    if (Di === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Di = t && t[1] || "";
      }
    return `
` + Di + e;
  }
  var Ui = false;
  function zi(e, t) {
    if (!e || Ui)
      return "";
    Ui = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (var l = u.stack.split(`
`), o = r.stack.split(`
`), s = l.length - 1, i = o.length - 1; 1 <= s && 0 <= i && l[s] !== o[i]; )
          i--;
        for (; 1 <= s && 0 <= i; s--, i--)
          if (l[s] !== o[i]) {
            if (s !== 1 || i !== 1)
              do
                if (s--, i--, 0 > i || l[s] !== o[i]) {
                  var a = `
` + l[s].replace(" at new ", " at ");
                  return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
                }
              while (1 <= s && 0 <= i);
            break;
          }
      }
    } finally {
      Ui = false, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Nl(e) : "";
  }
  function Fv(e) {
    switch (e.tag) {
      case 5:
        return Nl(e.type);
      case 16:
        return Nl("Lazy");
      case 13:
        return Nl("Suspense");
      case 19:
        return Nl("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = zi(e.type, false), e;
      case 11:
        return e = zi(e.type.render, false), e;
      case 1:
        return e = zi(e.type, true), e;
      default:
        return "";
    }
  }
  function La(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Sr:
        return "Fragment";
      case Er:
        return "Portal";
      case Ta:
        return "Profiler";
      case qu:
        return "StrictMode";
      case $a:
        return "Suspense";
      case ja:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xp:
          return (e.displayName || "Context") + ".Consumer";
        case Qp:
          return (e._context.displayName || "Context") + ".Provider";
        case Ju:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ec:
          return t = e.displayName || null, t !== null ? t : La(e.type) || "Memo";
        case dn:
          t = e._payload, e = e._init;
          try {
            return La(e(t));
          } catch {
          }
      }
    return null;
  }
  function _v(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return La(t);
      case 8:
        return t === qu ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
    }
    return null;
  }
  function $n(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Jp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Dv(e) {
    var t = Jp(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, {
        configurable: true,
        get: function() {
          return l.call(this);
        },
        set: function(s) {
          r = "" + s, o.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(s) {
          r = "" + s;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Io(e) {
    e._valueTracker || (e._valueTracker = Dv(e));
  }
  function e0(e) {
    if (!e)
      return false;
    var t = e._valueTracker;
    if (!t)
      return true;
    var n = t.getValue(), r = "";
    return e && (r = Jp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
  }
  function ws(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Pa(e, t) {
    var n = t.checked;
    return he({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
    });
  }
  function Pd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = $n(t.value != null ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function t0(e, t) {
    t = t.checked, t != null && Xu(e, "checked", t, false);
  }
  function Oa(e, t) {
    t0(e, t);
    var n = $n(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ia(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ia(e, t.type, $n(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Od(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ia(e, t, n) {
    (t !== "number" || ws(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var kl = Array.isArray;
  function Ar(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = true;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
    } else {
      for (n = "" + $n(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = true, r && (e[l].defaultSelected = true);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Ma(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(O(91));
    return he({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
    });
  }
  function Id(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
          throw Error(O(92));
        if (kl(n)) {
          if (1 < n.length)
            throw Error(O(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = {
      initialValue: $n(n)
    };
  }
  function n0(e, t) {
    var n = $n(t.value), r = $n(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Md(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function r0(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Aa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? r0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Mo, l0 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (Mo = Mo || document.createElement("div"), Mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Mo.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function Vl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ol = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, Uv = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(Ol).forEach(function(e) {
    Uv.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Ol[t] = Ol[e];
    });
  });
  function o0(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ol.hasOwnProperty(e) && Ol[e] ? ("" + t).trim() : t + "px";
  }
  function s0(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, l = o0(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
      }
  }
  var zv = he({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function Fa(e, t) {
    if (t) {
      if (zv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(O(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw Error(O(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
          throw Error(O(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(O(62));
    }
  }
  function _a(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Da = null;
  function tc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ua = null, Fr = null, _r = null;
  function Ad(e) {
    if (e = yo(e)) {
      if (typeof Ua != "function")
        throw Error(O(280));
      var t = e.stateNode;
      t && (t = si(t), Ua(e.stateNode, e.type, t));
    }
  }
  function i0(e) {
    Fr ? _r ? _r.push(e) : _r = [
      e
    ] : Fr = e;
  }
  function a0() {
    if (Fr) {
      var e = Fr, t = _r;
      if (_r = Fr = null, Ad(e), t)
        for (e = 0; e < t.length; e++)
          Ad(t[e]);
    }
  }
  function u0(e, t) {
    return e(t);
  }
  function c0() {
  }
  var Bi = false;
  function d0(e, t, n) {
    if (Bi)
      return e(t, n);
    Bi = true;
    try {
      return u0(e, t, n);
    } finally {
      Bi = false, (Fr !== null || _r !== null) && (c0(), a0());
    }
  }
  function Zl(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = si(n);
    if (r === null)
      return null;
    n = r[t];
    e:
      switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = false;
      }
    if (e)
      return null;
    if (n && typeof n != "function")
      throw Error(O(231, t, typeof n));
    return n;
  }
  var za = false;
  if (en)
    try {
      var ml = {};
      Object.defineProperty(ml, "passive", {
        get: function() {
          za = true;
        }
      }), window.addEventListener("test", ml, ml), window.removeEventListener("test", ml, ml);
    } catch {
      za = false;
    }
  function Bv(e, t, n, r, l, o, s, i, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (d) {
      this.onError(d);
    }
  }
  var Il = false, bs = null, Es = false, Ba = null, Hv = {
    onError: function(e) {
      Il = true, bs = e;
    }
  };
  function Wv(e, t, n, r, l, o, s, i, a) {
    Il = false, bs = null, Bv.apply(Hv, arguments);
  }
  function Vv(e, t, n, r, l, o, s, i, a) {
    if (Wv.apply(this, arguments), Il) {
      if (Il) {
        var u = bs;
        Il = false, bs = null;
      } else
        throw Error(O(198));
      Es || (Es = true, Ba = u);
    }
  }
  function fr(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function f0(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Fd(e) {
    if (fr(e) !== e)
      throw Error(O(188));
  }
  function Zv(e) {
    var t = e.alternate;
    if (!t) {
      if (t = fr(e), t === null)
        throw Error(O(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null)
        break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n)
            return Fd(l), e;
          if (o === r)
            return Fd(l), t;
          o = o.sibling;
        }
        throw Error(O(188));
      }
      if (n.return !== r.return)
        n = l, r = o;
      else {
        for (var s = false, i = l.child; i; ) {
          if (i === n) {
            s = true, n = l, r = o;
            break;
          }
          if (i === r) {
            s = true, r = l, n = o;
            break;
          }
          i = i.sibling;
        }
        if (!s) {
          for (i = o.child; i; ) {
            if (i === n) {
              s = true, n = o, r = l;
              break;
            }
            if (i === r) {
              s = true, r = o, n = l;
              break;
            }
            i = i.sibling;
          }
          if (!s)
            throw Error(O(189));
        }
      }
      if (n.alternate !== r)
        throw Error(O(190));
    }
    if (n.tag !== 3)
      throw Error(O(188));
    return n.stateNode.current === n ? e : t;
  }
  function p0(e) {
    return e = Zv(e), e !== null ? m0(e) : null;
  }
  function m0(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = m0(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var h0 = nt.unstable_scheduleCallback, _d = nt.unstable_cancelCallback, Yv = nt.unstable_shouldYield, Kv = nt.unstable_requestPaint, xe = nt.unstable_now, Gv = nt.unstable_getCurrentPriorityLevel, nc = nt.unstable_ImmediatePriority, g0 = nt.unstable_UserBlockingPriority, Ss = nt.unstable_NormalPriority, Qv = nt.unstable_LowPriority, v0 = nt.unstable_IdlePriority, ni = null, zt = null;
  function Xv(e) {
    if (zt && typeof zt.onCommitFiberRoot == "function")
      try {
        zt.onCommitFiberRoot(ni, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var Lt = Math.clz32 ? Math.clz32 : e1, qv = Math.log, Jv = Math.LN2;
  function e1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (qv(e) / Jv | 0) | 0;
  }
  var Ao = 64, Fo = 4194304;
  function Rl(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Cs(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var i = s & ~l;
      i !== 0 ? r = Rl(i) : (o &= s, o !== 0 && (r = Rl(o)));
    } else
      s = n & ~l, s !== 0 ? r = Rl(s) : o !== 0 && (r = Rl(o));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - Lt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function t1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function n1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - Lt(o), i = 1 << s, a = l[s];
      a === -1 ? (!(i & n) || i & r) && (l[s] = t1(i, t)) : a <= t && (e.expiredLanes |= i), o &= ~i;
    }
  }
  function Ha(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function y0() {
    var e = Ao;
    return Ao <<= 1, !(Ao & 4194240) && (Ao = 64), e;
  }
  function Hi(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function go(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Lt(t), e[t] = n;
  }
  function r1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Lt(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function rc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Lt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var te = 0;
  function x0(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var w0, lc, b0, E0, S0, Wa = false, _o = [], wn = null, bn = null, En = null, Yl = /* @__PURE__ */ new Map(), Kl = /* @__PURE__ */ new Map(), pn = [], l1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Dd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        wn = null;
        break;
      case "dragenter":
      case "dragleave":
        bn = null;
        break;
      case "mouseover":
      case "mouseout":
        En = null;
        break;
      case "pointerover":
      case "pointerout":
        Yl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Kl.delete(t.pointerId);
    }
  }
  function hl(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [
        l
      ]
    }, t !== null && (t = yo(t), t !== null && lc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function o1(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return wn = hl(wn, e, t, n, r, l), true;
      case "dragenter":
        return bn = hl(bn, e, t, n, r, l), true;
      case "mouseover":
        return En = hl(En, e, t, n, r, l), true;
      case "pointerover":
        var o = l.pointerId;
        return Yl.set(o, hl(Yl.get(o) || null, e, t, n, r, l)), true;
      case "gotpointercapture":
        return o = l.pointerId, Kl.set(o, hl(Kl.get(o) || null, e, t, n, r, l)), true;
    }
    return false;
  }
  function C0(e) {
    var t = Vn(e.target);
    if (t !== null) {
      var n = fr(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = f0(n), t !== null) {
            e.blockedOn = t, S0(e.priority, function() {
              b0(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ls(e) {
    if (e.blockedOn !== null)
      return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Da = r, n.target.dispatchEvent(r), Da = null;
      } else
        return t = yo(n), t !== null && lc(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function Ud(e, t, n) {
    ls(e) && n.delete(t);
  }
  function s1() {
    Wa = false, wn !== null && ls(wn) && (wn = null), bn !== null && ls(bn) && (bn = null), En !== null && ls(En) && (En = null), Yl.forEach(Ud), Kl.forEach(Ud);
  }
  function gl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Wa || (Wa = true, nt.unstable_scheduleCallback(nt.unstable_NormalPriority, s1)));
  }
  function Gl(e) {
    function t(l) {
      return gl(l, e);
    }
    if (0 < _o.length) {
      gl(_o[0], e);
      for (var n = 1; n < _o.length; n++) {
        var r = _o[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (wn !== null && gl(wn, e), bn !== null && gl(bn, e), En !== null && gl(En, e), Yl.forEach(t), Kl.forEach(t), n = 0; n < pn.length; n++)
      r = pn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < pn.length && (n = pn[0], n.blockedOn === null); )
      C0(n), n.blockedOn === null && pn.shift();
  }
  var Dr = on.ReactCurrentBatchConfig, Ns = true;
  function i1(e, t, n, r) {
    var l = te, o = Dr.transition;
    Dr.transition = null;
    try {
      te = 1, oc(e, t, n, r);
    } finally {
      te = l, Dr.transition = o;
    }
  }
  function a1(e, t, n, r) {
    var l = te, o = Dr.transition;
    Dr.transition = null;
    try {
      te = 4, oc(e, t, n, r);
    } finally {
      te = l, Dr.transition = o;
    }
  }
  function oc(e, t, n, r) {
    if (Ns) {
      var l = Va(e, t, n, r);
      if (l === null)
        Ji(e, t, r, ks, n), Dd(e, r);
      else if (o1(l, e, t, n, r))
        r.stopPropagation();
      else if (Dd(e, r), t & 4 && -1 < l1.indexOf(e)) {
        for (; l !== null; ) {
          var o = yo(l);
          if (o !== null && w0(o), o = Va(e, t, n, r), o === null && Ji(e, t, r, ks, n), o === l)
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else
        Ji(e, t, r, null, n);
    }
  }
  var ks = null;
  function Va(e, t, n, r) {
    if (ks = null, e = tc(r), e = Vn(e), e !== null)
      if (t = fr(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = f0(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return ks = e, null;
  }
  function N0(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Gv()) {
          case nc:
            return 1;
          case g0:
            return 4;
          case Ss:
          case Qv:
            return 16;
          case v0:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gn = null, sc = null, os = null;
  function k0() {
    if (os)
      return os;
    var e, t = sc, n = t.length, r, l = "value" in gn ? gn.value : gn.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
      ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === l[o - r]; r++)
      ;
    return os = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ss(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Do() {
    return true;
  }
  function zd() {
    return false;
  }
  function ot(e) {
    function t(n, r, l, o, s) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var i in e)
        e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(o) : o[i]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? Do : zd, this.isPropagationStopped = zd, this;
    }
    return he(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Do);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Do);
      },
      persist: function() {
      },
      isPersistent: Do
    }), t;
  }
  var rl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ic = ot(rl), vo = he({}, rl, {
    view: 0,
    detail: 0
  }), u1 = ot(vo), Wi, Vi, vl, ri = he({}, vo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ac,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== vl && (vl && e.type === "mousemove" ? (Wi = e.screenX - vl.screenX, Vi = e.screenY - vl.screenY) : Vi = Wi = 0, vl = e), Wi);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Vi;
    }
  }), Bd = ot(ri), c1 = he({}, ri, {
    dataTransfer: 0
  }), d1 = ot(c1), f1 = he({}, vo, {
    relatedTarget: 0
  }), Zi = ot(f1), p1 = he({}, rl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), m1 = ot(p1), h1 = he({}, rl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), g1 = ot(h1), v1 = he({}, rl, {
    data: 0
  }), Hd = ot(v1), y1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, x1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, w1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function b1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = w1[e]) ? !!t[e] : false;
  }
  function ac() {
    return b1;
  }
  var E1 = he({}, vo, {
    key: function(e) {
      if (e.key) {
        var t = y1[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      return e.type === "keypress" ? (e = ss(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? x1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ac,
    charCode: function(e) {
      return e.type === "keypress" ? ss(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), S1 = ot(E1), C1 = he({}, ri, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Wd = ot(C1), N1 = he({}, vo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ac
  }), k1 = ot(N1), R1 = he({}, rl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), T1 = ot(R1), $1 = he({}, ri, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), j1 = ot($1), L1 = [
    9,
    13,
    27,
    32
  ], uc = en && "CompositionEvent" in window, Ml = null;
  en && "documentMode" in document && (Ml = document.documentMode);
  var P1 = en && "TextEvent" in window && !Ml, R0 = en && (!uc || Ml && 8 < Ml && 11 >= Ml), Vd = String.fromCharCode(32), Zd = false;
  function T0(e, t) {
    switch (e) {
      case "keyup":
        return L1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function $0(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Cr = false;
  function O1(e, t) {
    switch (e) {
      case "compositionend":
        return $0(t);
      case "keypress":
        return t.which !== 32 ? null : (Zd = true, Vd);
      case "textInput":
        return e = t.data, e === Vd && Zd ? null : e;
      default:
        return null;
    }
  }
  function I1(e, t) {
    if (Cr)
      return e === "compositionend" || !uc && T0(e, t) ? (e = k0(), os = sc = gn = null, Cr = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return R0 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var M1 = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function Yd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!M1[e.type] : t === "textarea";
  }
  function j0(e, t, n, r) {
    i0(r), t = Rs(t, "onChange"), 0 < t.length && (n = new ic("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
    }));
  }
  var Al = null, Ql = null;
  function A1(e) {
    z0(e, 0);
  }
  function li(e) {
    var t = Rr(e);
    if (e0(t))
      return e;
  }
  function F1(e, t) {
    if (e === "change")
      return t;
  }
  var L0 = false;
  if (en) {
    var Yi;
    if (en) {
      var Ki = "oninput" in document;
      if (!Ki) {
        var Kd = document.createElement("div");
        Kd.setAttribute("oninput", "return;"), Ki = typeof Kd.oninput == "function";
      }
      Yi = Ki;
    } else
      Yi = false;
    L0 = Yi && (!document.documentMode || 9 < document.documentMode);
  }
  function Gd() {
    Al && (Al.detachEvent("onpropertychange", P0), Ql = Al = null);
  }
  function P0(e) {
    if (e.propertyName === "value" && li(Ql)) {
      var t = [];
      j0(t, Ql, e, tc(e)), d0(A1, t);
    }
  }
  function _1(e, t, n) {
    e === "focusin" ? (Gd(), Al = t, Ql = n, Al.attachEvent("onpropertychange", P0)) : e === "focusout" && Gd();
  }
  function D1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return li(Ql);
  }
  function U1(e, t) {
    if (e === "click")
      return li(t);
  }
  function z1(e, t) {
    if (e === "input" || e === "change")
      return li(t);
  }
  function B1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : B1;
  function Xl(e, t) {
    if (Ot(e, t))
      return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return false;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return false;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!Ra.call(t, l) || !Ot(e[l], t[l]))
        return false;
    }
    return true;
  }
  function Qd(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Xd(e, t) {
    var n = Qd(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
          return {
            node: n,
            offset: t - e
          };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Qd(n);
    }
  }
  function O0(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? O0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function I0() {
    for (var e = window, t = ws(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = ws(e.document);
    }
    return t;
  }
  function cc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function H1(e) {
    var t = I0(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && O0(n.ownerDocument.documentElement, n)) {
      if (r !== null && cc(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Xd(n, o);
          var s = Xd(n, r);
          l && s && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; )
        e.nodeType === 1 && t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop
        });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var W1 = en && "documentMode" in document && 11 >= document.documentMode, Nr = null, Za = null, Fl = null, Ya = false;
  function qd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ya || Nr == null || Nr !== ws(r) || (r = Nr, "selectionStart" in r && cc(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Fl && Xl(Fl, r) || (Fl = r, r = Rs(Za, "onSelect"), 0 < r.length && (t = new ic("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
    }), t.target = Nr)));
  }
  function Uo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var kr = {
    animationend: Uo("Animation", "AnimationEnd"),
    animationiteration: Uo("Animation", "AnimationIteration"),
    animationstart: Uo("Animation", "AnimationStart"),
    transitionend: Uo("Transition", "TransitionEnd")
  }, Gi = {}, M0 = {};
  en && (M0 = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
  function oi(e) {
    if (Gi[e])
      return Gi[e];
    if (!kr[e])
      return e;
    var t = kr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in M0)
        return Gi[e] = t[n];
    return e;
  }
  var A0 = oi("animationend"), F0 = oi("animationiteration"), _0 = oi("animationstart"), D0 = oi("transitionend"), U0 = /* @__PURE__ */ new Map(), Jd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function In(e, t) {
    U0.set(e, t), dr(t, [
      e
    ]);
  }
  for (var Qi = 0; Qi < Jd.length; Qi++) {
    var Xi = Jd[Qi], V1 = Xi.toLowerCase(), Z1 = Xi[0].toUpperCase() + Xi.slice(1);
    In(V1, "on" + Z1);
  }
  In(A0, "onAnimationEnd");
  In(F0, "onAnimationIteration");
  In(_0, "onAnimationStart");
  In("dblclick", "onDoubleClick");
  In("focusin", "onFocus");
  In("focusout", "onBlur");
  In(D0, "onTransitionEnd");
  Zr("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  Zr("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  Zr("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  Zr("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  dr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  dr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  dr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  dr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  dr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  dr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Tl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Y1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tl));
  function ef(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Vv(r, t, void 0, e), e.currentTarget = null;
  }
  function z0(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var i = r[s], a = i.instance, u = i.currentTarget;
            if (i = i.listener, a !== o && l.isPropagationStopped())
              break e;
            ef(l, i, u), o = a;
          }
        else
          for (s = 0; s < r.length; s++) {
            if (i = r[s], a = i.instance, u = i.currentTarget, i = i.listener, a !== o && l.isPropagationStopped())
              break e;
            ef(l, i, u), o = a;
          }
      }
    }
    if (Es)
      throw e = Ba, Es = false, Ba = null, e;
  }
  function ae(e, t) {
    var n = t[qa];
    n === void 0 && (n = t[qa] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (B0(t, e, 2, false), n.add(r));
  }
  function qi(e, t, n) {
    var r = 0;
    t && (r |= 4), B0(n, e, r, t);
  }
  var zo = "_reactListening" + Math.random().toString(36).slice(2);
  function ql(e) {
    if (!e[zo]) {
      e[zo] = true, Gp.forEach(function(n) {
        n !== "selectionchange" && (Y1.has(n) || qi(n, false, e), qi(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zo] || (t[zo] = true, qi("selectionchange", false, t));
    }
  }
  function B0(e, t, n, r) {
    switch (N0(t)) {
      case 1:
        var l = i1;
        break;
      case 4:
        l = a1;
        break;
      default:
        l = oc;
    }
    n = l.bind(null, t, n, e), l = void 0, !za || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, {
      capture: true,
      passive: l
    }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, false);
  }
  function Ji(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var i = r.stateNode.containerInfo;
            if (i === l || i.nodeType === 8 && i.parentNode === l)
              break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var a = s.tag;
                if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l))
                  return;
                s = s.return;
              }
            for (; i !== null; ) {
              if (s = Vn(i), s === null)
                return;
              if (a = s.tag, a === 5 || a === 6) {
                r = o = s;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
    d0(function() {
      var u = o, d = tc(n), m = [];
      e: {
        var v = U0.get(e);
        if (v !== void 0) {
          var f = ic, x = e;
          switch (e) {
            case "keypress":
              if (ss(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              f = S1;
              break;
            case "focusin":
              x = "focus", f = Zi;
              break;
            case "focusout":
              x = "blur", f = Zi;
              break;
            case "beforeblur":
            case "afterblur":
              f = Zi;
              break;
            case "click":
              if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              f = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              f = d1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              f = k1;
              break;
            case A0:
            case F0:
            case _0:
              f = m1;
              break;
            case D0:
              f = T1;
              break;
            case "scroll":
              f = u1;
              break;
            case "wheel":
              f = j1;
              break;
            case "copy":
            case "cut":
            case "paste":
              f = g1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              f = Wd;
          }
          var w = (t & 4) !== 0, b = !w && e === "scroll", h = w ? v !== null ? v + "Capture" : null : v;
          w = [];
          for (var g = u, y; g !== null; ) {
            y = g;
            var E = y.stateNode;
            if (y.tag === 5 && E !== null && (y = E, h !== null && (E = Zl(g, h), E != null && w.push(Jl(g, E, y)))), b)
              break;
            g = g.return;
          }
          0 < w.length && (v = new f(v, x, null, n, d), m.push({
            event: v,
            listeners: w
          }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", v && n !== Da && (x = n.relatedTarget || n.fromElement) && (Vn(x) || x[tn]))
            break e;
          if ((f || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, f ? (x = n.relatedTarget || n.toElement, f = u, x = x ? Vn(x) : null, x !== null && (b = fr(x), x !== b || x.tag !== 5 && x.tag !== 6) && (x = null)) : (f = null, x = u), f !== x)) {
            if (w = Bd, E = "onMouseLeave", h = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (w = Wd, E = "onPointerLeave", h = "onPointerEnter", g = "pointer"), b = f == null ? v : Rr(f), y = x == null ? v : Rr(x), v = new w(E, g + "leave", f, n, d), v.target = b, v.relatedTarget = y, E = null, Vn(d) === u && (w = new w(h, g + "enter", x, n, d), w.target = y, w.relatedTarget = b, E = w), b = E, f && x)
              t: {
                for (w = f, h = x, g = 0, y = w; y; y = xr(y))
                  g++;
                for (y = 0, E = h; E; E = xr(E))
                  y++;
                for (; 0 < g - y; )
                  w = xr(w), g--;
                for (; 0 < y - g; )
                  h = xr(h), y--;
                for (; g--; ) {
                  if (w === h || h !== null && w === h.alternate)
                    break t;
                  w = xr(w), h = xr(h);
                }
                w = null;
              }
            else
              w = null;
            f !== null && tf(m, v, f, w, false), x !== null && b !== null && tf(m, b, x, w, true);
          }
        }
        e: {
          if (v = u ? Rr(u) : window, f = v.nodeName && v.nodeName.toLowerCase(), f === "select" || f === "input" && v.type === "file")
            var S = F1;
          else if (Yd(v))
            if (L0)
              S = z1;
            else {
              S = D1;
              var N = _1;
            }
          else
            (f = v.nodeName) && f.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (S = U1);
          if (S && (S = S(e, u))) {
            j0(m, S, n, d);
            break e;
          }
          N && N(e, v, u), e === "focusout" && (N = v._wrapperState) && N.controlled && v.type === "number" && Ia(v, "number", v.value);
        }
        switch (N = u ? Rr(u) : window, e) {
          case "focusin":
            (Yd(N) || N.contentEditable === "true") && (Nr = N, Za = u, Fl = null);
            break;
          case "focusout":
            Fl = Za = Nr = null;
            break;
          case "mousedown":
            Ya = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ya = false, qd(m, n, d);
            break;
          case "selectionchange":
            if (W1)
              break;
          case "keydown":
          case "keyup":
            qd(m, n, d);
        }
        var T;
        if (uc)
          e: {
            switch (e) {
              case "compositionstart":
                var k = "onCompositionStart";
                break e;
              case "compositionend":
                k = "onCompositionEnd";
                break e;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break e;
            }
            k = void 0;
          }
        else
          Cr ? T0(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
        k && (R0 && n.locale !== "ko" && (Cr || k !== "onCompositionStart" ? k === "onCompositionEnd" && Cr && (T = k0()) : (gn = d, sc = "value" in gn ? gn.value : gn.textContent, Cr = true)), N = Rs(u, k), 0 < N.length && (k = new Hd(k, e, null, n, d), m.push({
          event: k,
          listeners: N
        }), T ? k.data = T : (T = $0(n), T !== null && (k.data = T)))), (T = P1 ? O1(e, n) : I1(e, n)) && (u = Rs(u, "onBeforeInput"), 0 < u.length && (d = new Hd("onBeforeInput", "beforeinput", null, n, d), m.push({
          event: d,
          listeners: u
        }), d.data = T));
      }
      z0(m, t);
    });
  }
  function Jl(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Rs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Zl(e, n), o != null && r.unshift(Jl(e, o, l)), o = Zl(e, t), o != null && r.push(Jl(e, o, l))), e = e.return;
    }
    return r;
  }
  function xr(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function tf(e, t, n, r, l) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var i = n, a = i.alternate, u = i.stateNode;
      if (a !== null && a === r)
        break;
      i.tag === 5 && u !== null && (i = u, l ? (a = Zl(n, o), a != null && s.unshift(Jl(n, a, i))) : l || (a = Zl(n, o), a != null && s.push(Jl(n, a, i)))), n = n.return;
    }
    s.length !== 0 && e.push({
      event: t,
      listeners: s
    });
  }
  var K1 = /\r\n?/g, G1 = /\u0000|\uFFFD/g;
  function nf(e) {
    return (typeof e == "string" ? e : "" + e).replace(K1, `
`).replace(G1, "");
  }
  function Bo(e, t, n) {
    if (t = nf(t), nf(e) !== t && n)
      throw Error(O(425));
  }
  function Ts() {
  }
  var Ka = null, Ga = null;
  function Qa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xa = typeof setTimeout == "function" ? setTimeout : void 0, Q1 = typeof clearTimeout == "function" ? clearTimeout : void 0, rf = typeof Promise == "function" ? Promise : void 0, X1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof rf < "u" ? function(e) {
    return rf.resolve(null).then(e).catch(q1);
  } : Xa;
  function q1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ea(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (r === 0) {
            e.removeChild(l), Gl(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Gl(t);
  }
  function Sn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
        break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
          break;
        if (t === "/$")
          return null;
      }
    }
    return e;
  }
  function lf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0)
            return e;
          t--;
        } else
          n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ll = Math.random().toString(36).slice(2), Dt = "__reactFiber$" + ll, eo = "__reactProps$" + ll, tn = "__reactContainer$" + ll, qa = "__reactEvents$" + ll, J1 = "__reactListeners$" + ll, ey = "__reactHandles$" + ll;
  function Vn(e) {
    var t = e[Dt];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[tn] || n[Dt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = lf(e); e !== null; ) {
            if (n = e[Dt])
              return n;
            e = lf(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function yo(e) {
    return e = e[Dt] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Rr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(O(33));
  }
  function si(e) {
    return e[eo] || null;
  }
  var Ja = [], Tr = -1;
  function Mn(e) {
    return {
      current: e
    };
  }
  function ue(e) {
    0 > Tr || (e.current = Ja[Tr], Ja[Tr] = null, Tr--);
  }
  function ie(e, t) {
    Tr++, Ja[Tr] = e.current, e.current = t;
  }
  var jn = {}, Fe = Mn(jn), Ye = Mn(false), rr = jn;
  function Yr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return jn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n)
      l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ke(e) {
    return e = e.childContextTypes, e != null;
  }
  function $s() {
    ue(Ye), ue(Fe);
  }
  function of(e, t, n) {
    if (Fe.current !== jn)
      throw Error(O(168));
    ie(Fe, t), ie(Ye, n);
  }
  function H0(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var l in r)
      if (!(l in t))
        throw Error(O(108, _v(e) || "Unknown", l));
    return he({}, n, r);
  }
  function js(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jn, rr = Fe.current, ie(Fe, e), ie(Ye, Ye.current), true;
  }
  function sf(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(O(169));
    n ? (e = H0(e, t, rr), r.__reactInternalMemoizedMergedChildContext = e, ue(Ye), ue(Fe), ie(Fe, e)) : ue(Ye), ie(Ye, n);
  }
  var Gt = null, ii = false, ta = false;
  function W0(e) {
    Gt === null ? Gt = [
      e
    ] : Gt.push(e);
  }
  function ty(e) {
    ii = true, W0(e);
  }
  function An() {
    if (!ta && Gt !== null) {
      ta = true;
      var e = 0, t = te;
      try {
        var n = Gt;
        for (te = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(true);
          while (r !== null);
        }
        Gt = null, ii = false;
      } catch (l) {
        throw Gt !== null && (Gt = Gt.slice(e + 1)), h0(nc, An), l;
      } finally {
        te = t, ta = false;
      }
    }
    return null;
  }
  var $r = [], jr = 0, Ls = null, Ps = 0, ft = [], pt = 0, lr = null, Qt = 1, Xt = "";
  function zn(e, t) {
    $r[jr++] = Ps, $r[jr++] = Ls, Ls = e, Ps = t;
  }
  function V0(e, t, n) {
    ft[pt++] = Qt, ft[pt++] = Xt, ft[pt++] = lr, lr = e;
    var r = Qt;
    e = Xt;
    var l = 32 - Lt(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Lt(t) + l;
    if (30 < o) {
      var s = l - l % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, Qt = 1 << 32 - Lt(t) + l | n << l | r, Xt = o + e;
    } else
      Qt = 1 << o | n << l | r, Xt = e;
  }
  function dc(e) {
    e.return !== null && (zn(e, 1), V0(e, 1, 0));
  }
  function fc(e) {
    for (; e === Ls; )
      Ls = $r[--jr], $r[jr] = null, Ps = $r[--jr], $r[jr] = null;
    for (; e === lr; )
      lr = ft[--pt], ft[pt] = null, Xt = ft[--pt], ft[pt] = null, Qt = ft[--pt], ft[pt] = null;
  }
  var et = null, Je = null, fe = false, Rt = null;
  function Z0(e, t) {
    var n = ht(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
      n
    ], e.flags |= 16) : t.push(n);
  }
  function af(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, et = e, Je = Sn(t.firstChild), true) : false;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, et = e, Je = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = lr !== null ? {
          id: Qt,
          overflow: Xt
        } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = ht(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, et = e, Je = null, true) : false;
      default:
        return false;
    }
  }
  function eu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function tu(e) {
    if (fe) {
      var t = Je;
      if (t) {
        var n = t;
        if (!af(e, t)) {
          if (eu(e))
            throw Error(O(418));
          t = Sn(n.nextSibling);
          var r = et;
          t && af(e, t) ? Z0(r, n) : (e.flags = e.flags & -4097 | 2, fe = false, et = e);
        }
      } else {
        if (eu(e))
          throw Error(O(418));
        e.flags = e.flags & -4097 | 2, fe = false, et = e;
      }
    }
  }
  function uf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    et = e;
  }
  function Ho(e) {
    if (e !== et)
      return false;
    if (!fe)
      return uf(e), fe = true, false;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Qa(e.type, e.memoizedProps)), t && (t = Je)) {
      if (eu(e))
        throw Y0(), Error(O(418));
      for (; t; )
        Z0(e, t), t = Sn(t.nextSibling);
    }
    if (uf(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(O(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Je = Sn(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Je = null;
      }
    } else
      Je = et ? Sn(e.stateNode.nextSibling) : null;
    return true;
  }
  function Y0() {
    for (var e = Je; e; )
      e = Sn(e.nextSibling);
  }
  function Kr() {
    Je = et = null, fe = false;
  }
  function pc(e) {
    Rt === null ? Rt = [
      e
    ] : Rt.push(e);
  }
  var ny = on.ReactCurrentBatchConfig;
  function yl(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1)
            throw Error(O(309));
          var r = n.stateNode;
        }
        if (!r)
          throw Error(O(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
          var i = l.refs;
          s === null ? delete i[o] : i[o] = s;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string")
        throw Error(O(284));
      if (!n._owner)
        throw Error(O(290, e));
    }
    return e;
  }
  function Wo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function cf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function K0(e) {
    function t(h, g) {
      if (e) {
        var y = h.deletions;
        y === null ? (h.deletions = [
          g
        ], h.flags |= 16) : y.push(g);
      }
    }
    function n(h, g) {
      if (!e)
        return null;
      for (; g !== null; )
        t(h, g), g = g.sibling;
      return null;
    }
    function r(h, g) {
      for (h = /* @__PURE__ */ new Map(); g !== null; )
        g.key !== null ? h.set(g.key, g) : h.set(g.index, g), g = g.sibling;
      return h;
    }
    function l(h, g) {
      return h = Rn(h, g), h.index = 0, h.sibling = null, h;
    }
    function o(h, g, y) {
      return h.index = y, e ? (y = h.alternate, y !== null ? (y = y.index, y < g ? (h.flags |= 2, g) : y) : (h.flags |= 2, g)) : (h.flags |= 1048576, g);
    }
    function s(h) {
      return e && h.alternate === null && (h.flags |= 2), h;
    }
    function i(h, g, y, E) {
      return g === null || g.tag !== 6 ? (g = aa(y, h.mode, E), g.return = h, g) : (g = l(g, y), g.return = h, g);
    }
    function a(h, g, y, E) {
      var S = y.type;
      return S === Sr ? d(h, g, y.props.children, E, y.key) : g !== null && (g.elementType === S || typeof S == "object" && S !== null && S.$$typeof === dn && cf(S) === g.type) ? (E = l(g, y.props), E.ref = yl(h, g, y), E.return = h, E) : (E = ps(y.type, y.key, y.props, null, h.mode, E), E.ref = yl(h, g, y), E.return = h, E);
    }
    function u(h, g, y, E) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== y.containerInfo || g.stateNode.implementation !== y.implementation ? (g = ua(y, h.mode, E), g.return = h, g) : (g = l(g, y.children || []), g.return = h, g);
    }
    function d(h, g, y, E, S) {
      return g === null || g.tag !== 7 ? (g = Jn(y, h.mode, E, S), g.return = h, g) : (g = l(g, y), g.return = h, g);
    }
    function m(h, g, y) {
      if (typeof g == "string" && g !== "" || typeof g == "number")
        return g = aa("" + g, h.mode, y), g.return = h, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Oo:
            return y = ps(g.type, g.key, g.props, null, h.mode, y), y.ref = yl(h, null, g), y.return = h, y;
          case Er:
            return g = ua(g, h.mode, y), g.return = h, g;
          case dn:
            var E = g._init;
            return m(h, E(g._payload), y);
        }
        if (kl(g) || pl(g))
          return g = Jn(g, h.mode, y, null), g.return = h, g;
        Wo(h, g);
      }
      return null;
    }
    function v(h, g, y, E) {
      var S = g !== null ? g.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number")
        return S !== null ? null : i(h, g, "" + y, E);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Oo:
            return y.key === S ? a(h, g, y, E) : null;
          case Er:
            return y.key === S ? u(h, g, y, E) : null;
          case dn:
            return S = y._init, v(h, g, S(y._payload), E);
        }
        if (kl(y) || pl(y))
          return S !== null ? null : d(h, g, y, E, null);
        Wo(h, y);
      }
      return null;
    }
    function f(h, g, y, E, S) {
      if (typeof E == "string" && E !== "" || typeof E == "number")
        return h = h.get(y) || null, i(g, h, "" + E, S);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Oo:
            return h = h.get(E.key === null ? y : E.key) || null, a(g, h, E, S);
          case Er:
            return h = h.get(E.key === null ? y : E.key) || null, u(g, h, E, S);
          case dn:
            var N = E._init;
            return f(h, g, y, N(E._payload), S);
        }
        if (kl(E) || pl(E))
          return h = h.get(y) || null, d(g, h, E, S, null);
        Wo(g, E);
      }
      return null;
    }
    function x(h, g, y, E) {
      for (var S = null, N = null, T = g, k = g = 0, M = null; T !== null && k < y.length; k++) {
        T.index > k ? (M = T, T = null) : M = T.sibling;
        var $ = v(h, T, y[k], E);
        if ($ === null) {
          T === null && (T = M);
          break;
        }
        e && T && $.alternate === null && t(h, T), g = o($, g, k), N === null ? S = $ : N.sibling = $, N = $, T = M;
      }
      if (k === y.length)
        return n(h, T), fe && zn(h, k), S;
      if (T === null) {
        for (; k < y.length; k++)
          T = m(h, y[k], E), T !== null && (g = o(T, g, k), N === null ? S = T : N.sibling = T, N = T);
        return fe && zn(h, k), S;
      }
      for (T = r(h, T); k < y.length; k++)
        M = f(T, h, k, y[k], E), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? k : M.key), g = o(M, g, k), N === null ? S = M : N.sibling = M, N = M);
      return e && T.forEach(function(I) {
        return t(h, I);
      }), fe && zn(h, k), S;
    }
    function w(h, g, y, E) {
      var S = pl(y);
      if (typeof S != "function")
        throw Error(O(150));
      if (y = S.call(y), y == null)
        throw Error(O(151));
      for (var N = S = null, T = g, k = g = 0, M = null, $ = y.next(); T !== null && !$.done; k++, $ = y.next()) {
        T.index > k ? (M = T, T = null) : M = T.sibling;
        var I = v(h, T, $.value, E);
        if (I === null) {
          T === null && (T = M);
          break;
        }
        e && T && I.alternate === null && t(h, T), g = o(I, g, k), N === null ? S = I : N.sibling = I, N = I, T = M;
      }
      if ($.done)
        return n(h, T), fe && zn(h, k), S;
      if (T === null) {
        for (; !$.done; k++, $ = y.next())
          $ = m(h, $.value, E), $ !== null && (g = o($, g, k), N === null ? S = $ : N.sibling = $, N = $);
        return fe && zn(h, k), S;
      }
      for (T = r(h, T); !$.done; k++, $ = y.next())
        $ = f(T, h, k, $.value, E), $ !== null && (e && $.alternate !== null && T.delete($.key === null ? k : $.key), g = o($, g, k), N === null ? S = $ : N.sibling = $, N = $);
      return e && T.forEach(function(Z) {
        return t(h, Z);
      }), fe && zn(h, k), S;
    }
    function b(h, g, y, E) {
      if (typeof y == "object" && y !== null && y.type === Sr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Oo:
            e: {
              for (var S = y.key, N = g; N !== null; ) {
                if (N.key === S) {
                  if (S = y.type, S === Sr) {
                    if (N.tag === 7) {
                      n(h, N.sibling), g = l(N, y.props.children), g.return = h, h = g;
                      break e;
                    }
                  } else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === dn && cf(S) === N.type) {
                    n(h, N.sibling), g = l(N, y.props), g.ref = yl(h, N, y), g.return = h, h = g;
                    break e;
                  }
                  n(h, N);
                  break;
                } else
                  t(h, N);
                N = N.sibling;
              }
              y.type === Sr ? (g = Jn(y.props.children, h.mode, E, y.key), g.return = h, h = g) : (E = ps(y.type, y.key, y.props, null, h.mode, E), E.ref = yl(h, g, y), E.return = h, h = E);
            }
            return s(h);
          case Er:
            e: {
              for (N = y.key; g !== null; ) {
                if (g.key === N)
                  if (g.tag === 4 && g.stateNode.containerInfo === y.containerInfo && g.stateNode.implementation === y.implementation) {
                    n(h, g.sibling), g = l(g, y.children || []), g.return = h, h = g;
                    break e;
                  } else {
                    n(h, g);
                    break;
                  }
                else
                  t(h, g);
                g = g.sibling;
              }
              g = ua(y, h.mode, E), g.return = h, h = g;
            }
            return s(h);
          case dn:
            return N = y._init, b(h, g, N(y._payload), E);
        }
        if (kl(y))
          return x(h, g, y, E);
        if (pl(y))
          return w(h, g, y, E);
        Wo(h, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, g !== null && g.tag === 6 ? (n(h, g.sibling), g = l(g, y), g.return = h, h = g) : (n(h, g), g = aa(y, h.mode, E), g.return = h, h = g), s(h)) : n(h, g);
    }
    return b;
  }
  var Gr = K0(true), G0 = K0(false), Os = Mn(null), Is = null, Lr = null, mc = null;
  function hc() {
    mc = Lr = Is = null;
  }
  function gc(e) {
    var t = Os.current;
    ue(Os), e._currentValue = t;
  }
  function nu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function Ur(e, t) {
    Is = e, mc = Lr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ze = true), e.firstContext = null);
  }
  function vt(e) {
    var t = e._currentValue;
    if (mc !== e)
      if (e = {
        context: e,
        memoizedValue: t,
        next: null
      }, Lr === null) {
        if (Is === null)
          throw Error(O(308));
        Lr = e, Is.dependencies = {
          lanes: 0,
          firstContext: e
        };
      } else
        Lr = Lr.next = e;
    return t;
  }
  var Zn = null;
  function vc(e) {
    Zn === null ? Zn = [
      e
    ] : Zn.push(e);
  }
  function Q0(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, vc(t)) : (n.next = l.next, l.next = n), t.interleaved = n, nn(e, r);
  }
  function nn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var fn = false;
  function yc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function X0(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    });
  }
  function qt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Cn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, q & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, nn(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, vc(r)) : (t.next = l.next, l.next = t), r.interleaved = t, nn(e, n);
  }
  function is(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rc(e, n);
    }
  }
  function df(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null
          };
          o === null ? l = o = s : o = o.next = s, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else
        l = o = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Ms(e, t, n, r) {
    var l = e.updateQueue;
    fn = false;
    var o = l.firstBaseUpdate, s = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var a = i, u = a.next;
      a.next = null, s === null ? o = u : s.next = u, s = a;
      var d = e.alternate;
      d !== null && (d = d.updateQueue, i = d.lastBaseUpdate, i !== s && (i === null ? d.firstBaseUpdate = u : i.next = u, d.lastBaseUpdate = a));
    }
    if (o !== null) {
      var m = l.baseState;
      s = 0, d = u = a = null, i = o;
      do {
        var v = i.lane, f = i.eventTime;
        if ((r & v) === v) {
          d !== null && (d = d.next = {
            eventTime: f,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var x = e, w = i;
            switch (v = t, f = n, w.tag) {
              case 1:
                if (x = w.payload, typeof x == "function") {
                  m = x.call(f, m, v);
                  break e;
                }
                m = x;
                break e;
              case 3:
                x.flags = x.flags & -65537 | 128;
              case 0:
                if (x = w.payload, v = typeof x == "function" ? x.call(f, m, v) : x, v == null)
                  break e;
                m = he({}, m, v);
                break e;
              case 2:
                fn = true;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [
            i
          ] : v.push(i));
        } else
          f = {
            eventTime: f,
            lane: v,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, d === null ? (u = d = f, a = m) : d = d.next = f, s |= v;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null)
            break;
          v = i, i = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
        }
      } while (1);
      if (d === null && (a = m), l.baseState = a, l.firstBaseUpdate = u, l.lastBaseUpdate = d, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          s |= l.lane, l = l.next;
        while (l !== t);
      } else
        o === null && (l.shared.lanes = 0);
      sr |= s, e.lanes = s, e.memoizedState = m;
    }
  }
  function ff(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
        var r = e[t], l = r.callback;
        if (l !== null) {
          if (r.callback = null, r = n, typeof l != "function")
            throw Error(O(191, l));
          l.call(r);
        }
      }
  }
  var xo = {}, Bt = Mn(xo), to = Mn(xo), no = Mn(xo);
  function Yn(e) {
    if (e === xo)
      throw Error(O(174));
    return e;
  }
  function xc(e, t) {
    switch (ie(no, t), ie(to, e), ie(Bt, xo), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Aa(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Aa(t, e);
    }
    ue(Bt), ie(Bt, t);
  }
  function Qr() {
    ue(Bt), ue(to), ue(no);
  }
  function q0(e) {
    Yn(no.current);
    var t = Yn(Bt.current), n = Aa(t, e.type);
    t !== n && (ie(to, e), ie(Bt, n));
  }
  function wc(e) {
    to.current === e && (ue(Bt), ue(to));
  }
  var pe = Mn(0);
  function As(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var na = [];
  function bc() {
    for (var e = 0; e < na.length; e++)
      na[e]._workInProgressVersionPrimary = null;
    na.length = 0;
  }
  var as = on.ReactCurrentDispatcher, ra = on.ReactCurrentBatchConfig, or = 0, me = null, Se = null, ke = null, Fs = false, _l = false, ro = 0, ry = 0;
  function Pe() {
    throw Error(O(321));
  }
  function Ec(e, t) {
    if (t === null)
      return false;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ot(e[n], t[n]))
        return false;
    return true;
  }
  function Sc(e, t, n, r, l, o) {
    if (or = o, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, as.current = e === null || e.memoizedState === null ? iy : ay, e = n(r, l), _l) {
      o = 0;
      do {
        if (_l = false, ro = 0, 25 <= o)
          throw Error(O(301));
        o += 1, ke = Se = null, t.updateQueue = null, as.current = uy, e = n(r, l);
      } while (_l);
    }
    if (as.current = _s, t = Se !== null && Se.next !== null, or = 0, ke = Se = me = null, Fs = false, t)
      throw Error(O(300));
    return e;
  }
  function Cc() {
    var e = ro !== 0;
    return ro = 0, e;
  }
  function _t() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ke === null ? me.memoizedState = ke = e : ke = ke.next = e, ke;
  }
  function yt() {
    if (Se === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = Se.next;
    var t = ke === null ? me.memoizedState : ke.next;
    if (t !== null)
      ke = t, Se = e;
    else {
      if (e === null)
        throw Error(O(310));
      Se = e, e = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null
      }, ke === null ? me.memoizedState = ke = e : ke = ke.next = e;
    }
    return ke;
  }
  function lo(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function la(e) {
    var t = yt(), n = t.queue;
    if (n === null)
      throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = Se, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var s = l.next;
        l.next = o.next, o.next = s;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var i = s = null, a = null, u = o;
      do {
        var d = u.lane;
        if ((or & d) === d)
          a !== null && (a = a.next = {
            lane: 0,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
        else {
          var m = {
            lane: d,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          };
          a === null ? (i = a = m, s = r) : a = a.next = m, me.lanes |= d, sr |= d;
        }
        u = u.next;
      } while (u !== null && u !== o);
      a === null ? s = r : a.next = i, Ot(r, t.memoizedState) || (Ze = true), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, me.lanes |= o, sr |= o, l = l.next;
      while (l !== e);
    } else
      l === null && (n.lanes = 0);
    return [
      t.memoizedState,
      n.dispatch
    ];
  }
  function oa(e) {
    var t = yt(), n = t.queue;
    if (n === null)
      throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = l = l.next;
      do
        o = e(o, s.action), s = s.next;
      while (s !== l);
      Ot(o, t.memoizedState) || (Ze = true), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [
      o,
      r
    ];
  }
  function J0() {
  }
  function em(e, t) {
    var n = me, r = yt(), l = t(), o = !Ot(r.memoizedState, l);
    if (o && (r.memoizedState = l, Ze = true), r = r.queue, Nc(rm.bind(null, n, r, e), [
      e
    ]), r.getSnapshot !== t || o || ke !== null && ke.memoizedState.tag & 1) {
      if (n.flags |= 2048, oo(9, nm.bind(null, n, r, l, t), void 0, null), Re === null)
        throw Error(O(349));
      or & 30 || tm(n, t, l);
    }
    return l;
  }
  function tm(e, t, n) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: n
    }, t = me.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, me.updateQueue = t, t.stores = [
      e
    ]) : (n = t.stores, n === null ? t.stores = [
      e
    ] : n.push(e));
  }
  function nm(e, t, n, r) {
    t.value = n, t.getSnapshot = r, lm(t) && om(e);
  }
  function rm(e, t, n) {
    return n(function() {
      lm(t) && om(e);
    });
  }
  function lm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ot(e, n);
    } catch {
      return true;
    }
  }
  function om(e) {
    var t = nn(e, 1);
    t !== null && Pt(t, e, 1, -1);
  }
  function pf(e) {
    var t = _t();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lo,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = sy.bind(null, me, e), [
      t.memoizedState,
      e
    ];
  }
  function oo(e, t, n, r) {
    return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
    }, t = me.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function sm() {
    return yt().memoizedState;
  }
  function us(e, t, n, r) {
    var l = _t();
    me.flags |= e, l.memoizedState = oo(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ai(e, t, n, r) {
    var l = yt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Se !== null) {
      var s = Se.memoizedState;
      if (o = s.destroy, r !== null && Ec(r, s.deps)) {
        l.memoizedState = oo(t, n, o, r);
        return;
      }
    }
    me.flags |= e, l.memoizedState = oo(1 | t, n, o, r);
  }
  function mf(e, t) {
    return us(8390656, 8, e, t);
  }
  function Nc(e, t) {
    return ai(2048, 8, e, t);
  }
  function im(e, t) {
    return ai(4, 2, e, t);
  }
  function am(e, t) {
    return ai(4, 4, e, t);
  }
  function um(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function cm(e, t, n) {
    return n = n != null ? n.concat([
      e
    ]) : null, ai(4, 4, um.bind(null, t, e), n);
  }
  function kc() {
  }
  function dm(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ec(t, r[1]) ? r[0] : (n.memoizedState = [
      e,
      t
    ], e);
  }
  function fm(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ec(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
      e,
      t
    ], e);
  }
  function pm(e, t, n) {
    return or & 21 ? (Ot(n, t) || (n = y0(), me.lanes |= n, sr |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, Ze = true), e.memoizedState = n);
  }
  function ly(e, t) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4, e(true);
    var r = ra.transition;
    ra.transition = {};
    try {
      e(false), t();
    } finally {
      te = n, ra.transition = r;
    }
  }
  function mm() {
    return yt().memoizedState;
  }
  function oy(e, t, n) {
    var r = kn(e);
    if (n = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, hm(e))
      gm(t, n);
    else if (n = Q0(e, t, n, r), n !== null) {
      var l = ze();
      Pt(n, e, r, l), vm(n, t, r);
    }
  }
  function sy(e, t, n) {
    var r = kn(e), l = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (hm(e))
      gm(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
        try {
          var s = t.lastRenderedState, i = o(s, n);
          if (l.hasEagerState = true, l.eagerState = i, Ot(i, s)) {
            var a = t.interleaved;
            a === null ? (l.next = l, vc(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
            return;
          }
        } catch {
        } finally {
        }
      n = Q0(e, t, l, r), n !== null && (l = ze(), Pt(n, e, r, l), vm(n, t, r));
    }
  }
  function hm(e) {
    var t = e.alternate;
    return e === me || t !== null && t === me;
  }
  function gm(e, t) {
    _l = Fs = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function vm(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rc(e, n);
    }
  }
  var _s = {
    readContext: vt,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: false
  }, iy = {
    readContext: vt,
    useCallback: function(e, t) {
      return _t().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: vt,
    useEffect: mf,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([
        e
      ]) : null, us(4194308, 4, um.bind(null, t, e), n);
    },
    useLayoutEffect: function(e, t) {
      return us(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      return us(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = _t();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
        e,
        t
      ], e;
    },
    useReducer: function(e, t, n) {
      var r = _t();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = oy.bind(null, me, e), [
        r.memoizedState,
        e
      ];
    },
    useRef: function(e) {
      var t = _t();
      return e = {
        current: e
      }, t.memoizedState = e;
    },
    useState: pf,
    useDebugValue: kc,
    useDeferredValue: function(e) {
      return _t().memoizedState = e;
    },
    useTransition: function() {
      var e = pf(false), t = e[0];
      return e = ly.bind(null, e[1]), _t().memoizedState = e, [
        t,
        e
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(e, t, n) {
      var r = me, l = _t();
      if (fe) {
        if (n === void 0)
          throw Error(O(407));
        n = n();
      } else {
        if (n = t(), Re === null)
          throw Error(O(349));
        or & 30 || tm(r, t, n);
      }
      l.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return l.queue = o, mf(rm.bind(null, r, o, e), [
        e
      ]), r.flags |= 2048, oo(9, nm.bind(null, r, o, n, t), void 0, null), n;
    },
    useId: function() {
      var e = _t(), t = Re.identifierPrefix;
      if (fe) {
        var n = Xt, r = Qt;
        n = (r & ~(1 << 32 - Lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ro++, 0 < n && (t += "H" + n.toString(32)), t += ":";
      } else
        n = ry++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, ay = {
    readContext: vt,
    useCallback: dm,
    useContext: vt,
    useEffect: Nc,
    useImperativeHandle: cm,
    useInsertionEffect: im,
    useLayoutEffect: am,
    useMemo: fm,
    useReducer: la,
    useRef: sm,
    useState: function() {
      return la(lo);
    },
    useDebugValue: kc,
    useDeferredValue: function(e) {
      var t = yt();
      return pm(t, Se.memoizedState, e);
    },
    useTransition: function() {
      var e = la(lo)[0], t = yt().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: J0,
    useSyncExternalStore: em,
    useId: mm,
    unstable_isNewReconciler: false
  }, uy = {
    readContext: vt,
    useCallback: dm,
    useContext: vt,
    useEffect: Nc,
    useImperativeHandle: cm,
    useInsertionEffect: im,
    useLayoutEffect: am,
    useMemo: fm,
    useReducer: oa,
    useRef: sm,
    useState: function() {
      return oa(lo);
    },
    useDebugValue: kc,
    useDeferredValue: function(e) {
      var t = yt();
      return Se === null ? t.memoizedState = e : pm(t, Se.memoizedState, e);
    },
    useTransition: function() {
      var e = oa(lo)[0], t = yt().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: J0,
    useSyncExternalStore: em,
    useId: mm,
    unstable_isNewReconciler: false
  };
  function Nt(e, t) {
    if (e && e.defaultProps) {
      t = he({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ru(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ui = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? fr(e) === e : false;
    },
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = ze(), l = kn(e), o = qt(r, l);
      o.payload = t, n != null && (o.callback = n), t = Cn(e, o, l), t !== null && (Pt(t, e, l, r), is(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = ze(), l = kn(e), o = qt(r, l);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Cn(e, o, l), t !== null && (Pt(t, e, l, r), is(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = ze(), r = kn(e), l = qt(n, r);
      l.tag = 2, t != null && (l.callback = t), t = Cn(e, l, r), t !== null && (Pt(t, e, r, n), is(t, e, r));
    }
  };
  function hf(e, t, n, r, l, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Xl(n, r) || !Xl(l, o) : true;
  }
  function ym(e, t, n) {
    var r = false, l = jn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = vt(o) : (l = Ke(t) ? rr : Fe.current, r = t.contextTypes, o = (r = r != null) ? Yr(e, l) : jn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ui, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function gf(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ui.enqueueReplaceState(t, t.state, null);
  }
  function lu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, yc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = vt(o) : (o = Ke(t) ? rr : Fe.current, l.context = Yr(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ru(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ui.enqueueReplaceState(l, l.state, null), Ms(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Xr(e, t) {
    try {
      var n = "", r = t;
      do
        n += Fv(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return {
      value: e,
      source: t,
      stack: l,
      digest: null
    };
  }
  function sa(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function ou(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var cy = typeof WeakMap == "function" ? WeakMap : Map;
  function xm(e, t, n) {
    n = qt(-1, n), n.tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function() {
      Us || (Us = true, hu = r), ou(e, t);
    }, n;
  }
  function wm(e, t, n) {
    n = qt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        ou(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      ou(e, t), typeof r != "function" && (Nn === null ? Nn = /* @__PURE__ */ new Set([
        this
      ]) : Nn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: s !== null ? s : ""
      });
    }), n;
  }
  function vf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new cy();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else
      l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Cy.bind(null, e, t, n), t.then(e, e));
  }
  function yf(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function xf(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qt(-1, 1), t.tag = 2, Cn(n, t, 1))), n.lanes |= 1), e);
  }
  var dy = on.ReactCurrentOwner, Ze = false;
  function _e(e, t, n, r) {
    t.child = e === null ? G0(t, null, n, r) : Gr(t, e.child, n, r);
  }
  function wf(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Ur(t, l), r = Sc(e, t, n, r, o, l), n = Cc(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rn(e, t, l)) : (fe && n && dc(t), t.flags |= 1, _e(e, t, r, l), t.child);
  }
  function bf(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Ic(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, bm(e, t, o, r, l)) : (e = ps(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Xl, n(s, r) && e.ref === t.ref)
        return rn(e, t, l);
    }
    return t.flags |= 1, e = Rn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function bm(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Xl(o, r) && e.ref === t.ref)
        if (Ze = false, t.pendingProps = r = o, (e.lanes & l) !== 0)
          e.flags & 131072 && (Ze = true);
        else
          return t.lanes = e.lanes, rn(e, t, l);
    }
    return su(e, t, n, r, l);
  }
  function Em(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, ie(Or, qe), qe |= n;
      else {
        if (!(n & 1073741824))
          return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }, t.updateQueue = null, ie(Or, qe), qe |= e, null;
        t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, r = o !== null ? o.baseLanes : n, ie(Or, qe), qe |= r;
      }
    else
      o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ie(Or, qe), qe |= r;
    return _e(e, t, l, n), t.child;
  }
  function Sm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function su(e, t, n, r, l) {
    var o = Ke(n) ? rr : Fe.current;
    return o = Yr(t, o), Ur(t, l), n = Sc(e, t, n, r, o, l), r = Cc(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rn(e, t, l)) : (fe && r && dc(t), t.flags |= 1, _e(e, t, n, l), t.child);
  }
  function Ef(e, t, n, r, l) {
    if (Ke(n)) {
      var o = true;
      js(t);
    } else
      o = false;
    if (Ur(t, l), t.stateNode === null)
      cs(e, t), ym(t, n, r), lu(t, n, r, l), r = true;
    else if (e === null) {
      var s = t.stateNode, i = t.memoizedProps;
      s.props = i;
      var a = s.context, u = n.contextType;
      typeof u == "object" && u !== null ? u = vt(u) : (u = Ke(n) ? rr : Fe.current, u = Yr(t, u));
      var d = n.getDerivedStateFromProps, m = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== r || a !== u) && gf(t, s, r, u), fn = false;
      var v = t.memoizedState;
      s.state = v, Ms(t, r, s, l), a = t.memoizedState, i !== r || v !== a || Ye.current || fn ? (typeof d == "function" && (ru(t, n, d, r), a = t.memoizedState), (i = fn || hf(t, n, i, r, v, a, u)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = i) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = false);
    } else {
      s = t.stateNode, X0(e, t), i = t.memoizedProps, u = t.type === t.elementType ? i : Nt(t.type, i), s.props = u, m = t.pendingProps, v = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = vt(a) : (a = Ke(n) ? rr : Fe.current, a = Yr(t, a));
      var f = n.getDerivedStateFromProps;
      (d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== m || v !== a) && gf(t, s, r, a), fn = false, v = t.memoizedState, s.state = v, Ms(t, r, s, l);
      var x = t.memoizedState;
      i !== m || v !== x || Ye.current || fn ? (typeof f == "function" && (ru(t, n, f, r), x = t.memoizedState), (u = fn || hf(t, n, u, r, v, x, a) || false) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = false);
    }
    return iu(e, t, n, r, o, l);
  }
  function iu(e, t, n, r, l, o) {
    Sm(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
      return l && sf(t, n, false), rn(e, t, o);
    r = t.stateNode, dy.current = t;
    var i = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Gr(t, e.child, null, o), t.child = Gr(t, null, i, o)) : _e(e, t, i, o), t.memoizedState = r.state, l && sf(t, n, true), t.child;
  }
  function Cm(e) {
    var t = e.stateNode;
    t.pendingContext ? of(e, t.pendingContext, t.pendingContext !== t.context) : t.context && of(e, t.context, false), xc(e, t.containerInfo);
  }
  function Sf(e, t, n, r, l) {
    return Kr(), pc(l), t.flags |= 256, _e(e, t, n, r), t.child;
  }
  var au = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function uu(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    };
  }
  function Nm(e, t, n) {
    var r = t.pendingProps, l = pe.current, o = false, s = (t.flags & 128) !== 0, i;
    if ((i = s) || (i = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), i ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ie(pe, l & 1), e === null)
      return tu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
        mode: "hidden",
        children: s
      }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = fi(s, r, 0, null), e = Jn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = uu(n), t.memoizedState = au, e) : Rc(t, s));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null))
      return fy(e, t, s, r, i, l, n);
    if (o) {
      o = r.fallback, s = t.mode, l = e.child, i = l.sibling;
      var a = {
        mode: "hidden",
        children: r.children
      };
      return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Rn(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = Rn(i, o) : (o = Jn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? uu(n) : {
        baseLanes: s.baseLanes | n,
        cachePool: null,
        transitions: s.transitions
      }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = au, r;
    }
    return o = e.child, e = o.sibling, r = Rn(o, {
      mode: "visible",
      children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
      e
    ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Rc(e, t) {
    return t = fi({
      mode: "visible",
      children: t
    }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Vo(e, t, n, r) {
    return r !== null && pc(r), Gr(t, e.child, null, n), e = Rc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function fy(e, t, n, r, l, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = sa(Error(O(422))), Vo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = fi({
        mode: "visible",
        children: r.children
      }, l, 0, null), o = Jn(o, l, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Gr(t, e.child, null, s), t.child.memoizedState = uu(s), t.memoizedState = au, o);
    if (!(t.mode & 1))
      return Vo(e, t, s, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r)
        var i = r.dgst;
      return r = i, o = Error(O(419)), r = sa(o, r, void 0), Vo(e, t, s, r);
    }
    if (i = (s & e.childLanes) !== 0, Ze || i) {
      if (r = Re, r !== null) {
        switch (s & -s) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, nn(e, l), Pt(r, e, l, -1));
      }
      return Oc(), r = sa(Error(O(421))), Vo(e, t, s, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ny.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Je = Sn(l.nextSibling), et = t, fe = true, Rt = null, e !== null && (ft[pt++] = Qt, ft[pt++] = Xt, ft[pt++] = lr, Qt = e.id, Xt = e.overflow, lr = t), t = Rc(t, r.children), t.flags |= 4096, t);
  }
  function Cf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), nu(e.return, t, n);
  }
  function ia(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function km(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (_e(e, t, r.children, n), r = pe.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Cf(e, n, t);
            else if (e.tag === 19)
              Cf(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (ie(pe, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            e = n.alternate, e !== null && As(e) === null && (l = n), n = n.sibling;
          n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ia(t, false, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && As(e) === null) {
              t.child = l;
              break;
            }
            e = l.sibling, l.sibling = n, n = l, l = e;
          }
          ia(t, true, n, null, o);
          break;
        case "together":
          ia(t, false, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function cs(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function rn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), sr |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(O(153));
    if (t.child !== null) {
      for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Rn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function py(e, t, n) {
    switch (t.tag) {
      case 3:
        Cm(t), Kr();
        break;
      case 5:
        q0(t);
        break;
      case 1:
        Ke(t.type) && js(t);
        break;
      case 4:
        xc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        ie(Os, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ie(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Nm(e, t, n) : (ie(pe, pe.current & 1), e = rn(e, t, n), e !== null ? e.sibling : null);
        ie(pe, pe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return km(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ie(pe, pe.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Em(e, t, n);
    }
    return rn(e, t, n);
  }
  var Rm, cu, Tm, $m;
  Rm = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t)
          return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  };
  cu = function() {
  };
  Tm = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, Yn(Bt.current);
      var o = null;
      switch (n) {
        case "input":
          l = Pa(e, l), r = Pa(e, r), o = [];
          break;
        case "select":
          l = he({}, l, {
            value: void 0
          }), r = he({}, r, {
            value: void 0
          }), o = [];
          break;
        case "textarea":
          l = Ma(e, l), r = Ma(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ts);
      }
      Fa(n, r);
      var s;
      n = null;
      for (u in l)
        if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
          if (u === "style") {
            var i = l[u];
            for (s in i)
              i.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
          } else
            u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Wl.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
      for (u in r) {
        var a = r[u];
        if (i = l == null ? void 0 : l[u], r.hasOwnProperty(u) && a !== i && (a != null || i != null))
          if (u === "style")
            if (i) {
              for (s in i)
                !i.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
              for (s in a)
                a.hasOwnProperty(s) && i[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
            } else
              n || (o || (o = []), o.push(u, n)), n = a;
          else
            u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, i = i ? i.__html : void 0, a != null && i !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Wl.hasOwnProperty(u) ? (a != null && u === "onScroll" && ae("scroll", e), o || i === a || (o = [])) : (o = o || []).push(u, a));
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  $m = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function xl(e, t) {
    if (!fe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function my(e, t, n) {
    var r = t.pendingProps;
    switch (fc(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Oe(t), null;
      case 1:
        return Ke(t.type) && $s(), Oe(t), null;
      case 3:
        return r = t.stateNode, Qr(), ue(Ye), ue(Fe), bc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ho(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Rt !== null && (yu(Rt), Rt = null))), cu(e, t), Oe(t), null;
      case 5:
        wc(t);
        var l = Yn(no.current);
        if (n = t.type, e !== null && t.stateNode != null)
          Tm(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(O(166));
            return Oe(t), null;
          }
          if (e = Yn(Bt.current), Ho(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Dt] = t, r[eo] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ae("cancel", r), ae("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tl.length; l++)
                  ae(Tl[l], r);
                break;
              case "source":
                ae("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ae("error", r), ae("load", r);
                break;
              case "details":
                ae("toggle", r);
                break;
              case "input":
                Pd(r, o), ae("invalid", r);
                break;
              case "select":
                r._wrapperState = {
                  wasMultiple: !!o.multiple
                }, ae("invalid", r);
                break;
              case "textarea":
                Id(r, o), ae("invalid", r);
            }
            Fa(n, o), l = null;
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var i = o[s];
                s === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== true && Bo(r.textContent, i, e), l = [
                  "children",
                  i
                ]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== true && Bo(r.textContent, i, e), l = [
                  "children",
                  "" + i
                ]) : Wl.hasOwnProperty(s) && i != null && s === "onScroll" && ae("scroll", r);
              }
            switch (n) {
              case "input":
                Io(r), Od(r, o, true);
                break;
              case "textarea":
                Io(r), Md(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Ts);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = r0(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
              is: r.is
            }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = true : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Dt] = t, e[eo] = r, Rm(e, t, false, false), t.stateNode = e;
            e: {
              switch (s = _a(n, r), n) {
                case "dialog":
                  ae("cancel", e), ae("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ae("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Tl.length; l++)
                    ae(Tl[l], e);
                  l = r;
                  break;
                case "source":
                  ae("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ae("error", e), ae("load", e), l = r;
                  break;
                case "details":
                  ae("toggle", e), l = r;
                  break;
                case "input":
                  Pd(e, r), l = Pa(e, r), ae("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = {
                    wasMultiple: !!r.multiple
                  }, l = he({}, r, {
                    value: void 0
                  }), ae("invalid", e);
                  break;
                case "textarea":
                  Id(e, r), l = Ma(e, r), ae("invalid", e);
                  break;
                default:
                  l = r;
              }
              Fa(n, l), i = l;
              for (o in i)
                if (i.hasOwnProperty(o)) {
                  var a = i[o];
                  o === "style" ? s0(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && l0(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Vl(e, a) : typeof a == "number" && Vl(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Wl.hasOwnProperty(o) ? a != null && o === "onScroll" && ae("scroll", e) : a != null && Xu(e, o, a, s));
                }
              switch (n) {
                case "input":
                  Io(e), Od(e, r, false);
                  break;
                case "textarea":
                  Io(e), Md(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + $n(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Ar(e, !!r.multiple, o, false) : r.defaultValue != null && Ar(e, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ts);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = true;
                  break e;
                default:
                  r = false;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Oe(t), null;
      case 6:
        if (e && t.stateNode != null)
          $m(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(O(166));
          if (n = Yn(no.current), Yn(Bt.current), Ho(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Dt] = t, (o = r.nodeValue !== n) && (e = et, e !== null))
              switch (e.tag) {
                case 3:
                  Bo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== true && Bo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Dt] = t, t.stateNode = r;
        }
        return Oe(t), null;
      case 13:
        if (ue(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (fe && Je !== null && t.mode & 1 && !(t.flags & 128))
            Y0(), Kr(), t.flags |= 98560, o = false;
          else if (o = Ho(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o)
                throw Error(O(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                throw Error(O(317));
              o[Dt] = t;
            } else
              Kr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Oe(t), o = false;
          } else
            Rt !== null && (yu(Rt), Rt = null), o = true;
          if (!o)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? Ce === 0 && (Ce = 3) : Oc())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
      case 4:
        return Qr(), cu(e, t), e === null && ql(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return gc(t.type._context), Oe(t), null;
      case 17:
        return Ke(t.type) && $s(), Oe(t), null;
      case 19:
        if (ue(pe), o = t.memoizedState, o === null)
          return Oe(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
          if (r)
            xl(o, false);
          else {
            if (Ce !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (s = As(e), s !== null) {
                  for (t.flags |= 128, xl(o, false), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                      lanes: e.lanes,
                      firstContext: e.firstContext
                    }), n = n.sibling;
                  return ie(pe, pe.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && xe() > qr && (t.flags |= 128, r = true, xl(o, false), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = As(s), e !== null) {
              if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xl(o, true), o.tail === null && o.tailMode === "hidden" && !s.alternate && !fe)
                return Oe(t), null;
            } else
              2 * xe() - o.renderingStartTime > qr && n !== 1073741824 && (t.flags |= 128, r = true, xl(o, false), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = xe(), t.sibling = null, n = pe.current, ie(pe, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
      case 22:
      case 23:
        return Pc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? qe & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(O(156, t.tag));
  }
  function hy(e, t) {
    switch (fc(t), t.tag) {
      case 1:
        return Ke(t.type) && $s(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Qr(), ue(Ye), ue(Fe), bc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return wc(t), null;
      case 13:
        if (ue(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(O(340));
          Kr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ue(pe), null;
      case 4:
        return Qr(), null;
      case 10:
        return gc(t.type._context), null;
      case 22:
      case 23:
        return Pc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Zo = false, Ie = false, gy = typeof WeakSet == "function" ? WeakSet : Set, U = null;
  function Pr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ge(e, t, r);
        }
      else
        n.current = null;
  }
  function du(e, t, n) {
    try {
      n();
    } catch (r) {
      ge(e, t, r);
    }
  }
  var Nf = false;
  function vy(e, t) {
    if (Ka = Ns, e = I0(), cc(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset, o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0, i = -1, a = -1, u = 0, d = 0, m = e, v = null;
            t:
              for (; ; ) {
                for (var f; m !== n || l !== 0 && m.nodeType !== 3 || (i = s + l), m !== o || r !== 0 && m.nodeType !== 3 || (a = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (f = m.firstChild) !== null; )
                  v = m, m = f;
                for (; ; ) {
                  if (m === e)
                    break t;
                  if (v === n && ++u === l && (i = s), v === o && ++d === r && (a = s), (f = m.nextSibling) !== null)
                    break;
                  m = v, v = m.parentNode;
                }
                m = f;
              }
            n = i === -1 || a === -1 ? null : {
              start: i,
              end: a
            };
          } else
            n = null;
        }
      n = n || {
        start: 0,
        end: 0
      };
    } else
      n = null;
    for (Ga = {
      focusedElem: e,
      selectionRange: n
    }, Ns = false, U = t; U !== null; )
      if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, U = e;
      else
        for (; U !== null; ) {
          t = U;
          try {
            var x = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (x !== null) {
                    var w = x.memoizedProps, b = x.memoizedState, h = t.stateNode, g = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Nt(t.type, w), b);
                    h.__reactInternalSnapshotBeforeUpdate = g;
                  }
                  break;
                case 3:
                  var y = t.stateNode.containerInfo;
                  y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(O(163));
              }
          } catch (E) {
            ge(t, t.return, E);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, U = e;
            break;
          }
          U = t.return;
        }
    return x = Nf, Nf = false, x;
  }
  function Dl(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && du(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ci(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function fu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function jm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, jm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Dt], delete t[eo], delete t[qa], delete t[J1], delete t[ey])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Lm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function kf(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Lm(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function pu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ts));
    else if (r !== 4 && (e = e.child, e !== null))
      for (pu(e, t, n), e = e.sibling; e !== null; )
        pu(e, t, n), e = e.sibling;
  }
  function mu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (mu(e, t, n), e = e.sibling; e !== null; )
        mu(e, t, n), e = e.sibling;
  }
  var Te = null, kt = false;
  function cn(e, t, n) {
    for (n = n.child; n !== null; )
      Pm(e, t, n), n = n.sibling;
  }
  function Pm(e, t, n) {
    if (zt && typeof zt.onCommitFiberUnmount == "function")
      try {
        zt.onCommitFiberUnmount(ni, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        Ie || Pr(n, t);
      case 6:
        var r = Te, l = kt;
        Te = null, cn(e, t, n), Te = r, kt = l, Te !== null && (kt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
        break;
      case 18:
        Te !== null && (kt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? ea(e.parentNode, n) : e.nodeType === 1 && ea(e, n), Gl(e)) : ea(Te, n.stateNode));
        break;
      case 4:
        r = Te, l = kt, Te = n.stateNode.containerInfo, kt = true, cn(e, t, n), Te = r, kt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, s = o.destroy;
            o = o.tag, s !== void 0 && (o & 2 || o & 4) && du(n, t, s), l = l.next;
          } while (l !== r);
        }
        cn(e, t, n);
        break;
      case 1:
        if (!Ie && (Pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (i) {
            ge(n, t, i);
          }
        cn(e, t, n);
        break;
      case 21:
        cn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, cn(e, t, n), Ie = r) : cn(e, t, n);
        break;
      default:
        cn(e, t, n);
    }
  }
  function Rf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new gy()), t.forEach(function(r) {
        var l = ky.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function St(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e, s = t, i = s;
          e:
            for (; i !== null; ) {
              switch (i.tag) {
                case 5:
                  Te = i.stateNode, kt = false;
                  break e;
                case 3:
                  Te = i.stateNode.containerInfo, kt = true;
                  break e;
                case 4:
                  Te = i.stateNode.containerInfo, kt = true;
                  break e;
              }
              i = i.return;
            }
          if (Te === null)
            throw Error(O(160));
          Pm(o, s, l), Te = null, kt = false;
          var a = l.alternate;
          a !== null && (a.return = null), l.return = null;
        } catch (u) {
          ge(l, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Om(t, e), t = t.sibling;
  }
  function Om(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (St(t, e), At(e), r & 4) {
          try {
            Dl(3, e, e.return), ci(3, e);
          } catch (w) {
            ge(e, e.return, w);
          }
          try {
            Dl(5, e, e.return);
          } catch (w) {
            ge(e, e.return, w);
          }
        }
        break;
      case 1:
        St(t, e), At(e), r & 512 && n !== null && Pr(n, n.return);
        break;
      case 5:
        if (St(t, e), At(e), r & 512 && n !== null && Pr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Vl(l, "");
          } catch (w) {
            ge(e, e.return, w);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, i = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null)
            try {
              i === "input" && o.type === "radio" && o.name != null && t0(l, o), _a(i, s);
              var u = _a(i, o);
              for (s = 0; s < a.length; s += 2) {
                var d = a[s], m = a[s + 1];
                d === "style" ? s0(l, m) : d === "dangerouslySetInnerHTML" ? l0(l, m) : d === "children" ? Vl(l, m) : Xu(l, d, m, u);
              }
              switch (i) {
                case "input":
                  Oa(l, o);
                  break;
                case "textarea":
                  n0(l, o);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var f = o.value;
                  f != null ? Ar(l, !!o.multiple, f, false) : v !== !!o.multiple && (o.defaultValue != null ? Ar(l, !!o.multiple, o.defaultValue, true) : Ar(l, !!o.multiple, o.multiple ? [] : "", false));
              }
              l[eo] = o;
            } catch (w) {
              ge(e, e.return, w);
            }
        }
        break;
      case 6:
        if (St(t, e), At(e), r & 4) {
          if (e.stateNode === null)
            throw Error(O(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (w) {
            ge(e, e.return, w);
          }
        }
        break;
      case 3:
        if (St(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Gl(t.containerInfo);
          } catch (w) {
            ge(e, e.return, w);
          }
        break;
      case 4:
        St(t, e), At(e);
        break;
      case 13:
        St(t, e), At(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (jc = xe())), r & 4 && Rf(e);
        break;
      case 22:
        if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (u = Ie) || d, St(t, e), Ie = u) : St(t, e), At(e), r & 8192) {
          if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
            for (U = e, d = e.child; d !== null; ) {
              for (m = U = d; U !== null; ) {
                switch (v = U, f = v.child, v.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Dl(4, v, v.return);
                    break;
                  case 1:
                    Pr(v, v.return);
                    var x = v.stateNode;
                    if (typeof x.componentWillUnmount == "function") {
                      r = v, n = v.return;
                      try {
                        t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                      } catch (w) {
                        ge(r, n, w);
                      }
                    }
                    break;
                  case 5:
                    Pr(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      $f(m);
                      continue;
                    }
                }
                f !== null ? (f.return = v, U = f) : $f(m);
              }
              d = d.sibling;
            }
          e:
            for (d = null, m = e; ; ) {
              if (m.tag === 5) {
                if (d === null) {
                  d = m;
                  try {
                    l = m.stateNode, u ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = m.stateNode, a = m.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, i.style.display = o0("display", s));
                  } catch (w) {
                    ge(e, e.return, w);
                  }
                }
              } else if (m.tag === 6) {
                if (d === null)
                  try {
                    m.stateNode.nodeValue = u ? "" : m.memoizedProps;
                  } catch (w) {
                    ge(e, e.return, w);
                  }
              } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === e)
                break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === e)
                  break e;
                d === m && (d = null), m = m.return;
              }
              d === m && (d = null), m.sibling.return = m.return, m = m.sibling;
            }
        }
        break;
      case 19:
        St(t, e), At(e), r & 4 && Rf(e);
        break;
      case 21:
        break;
      default:
        St(t, e), At(e);
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Lm(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(O(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Vl(l, ""), r.flags &= -33);
            var o = kf(e);
            mu(e, o, l);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, i = kf(e);
            pu(e, i, s);
            break;
          default:
            throw Error(O(161));
        }
      } catch (a) {
        ge(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function yy(e, t, n) {
    U = e, Im(e);
  }
  function Im(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null; ) {
      var l = U, o = l.child;
      if (l.tag === 22 && r) {
        var s = l.memoizedState !== null || Zo;
        if (!s) {
          var i = l.alternate, a = i !== null && i.memoizedState !== null || Ie;
          i = Zo;
          var u = Ie;
          if (Zo = s, (Ie = a) && !u)
            for (U = l; U !== null; )
              s = U, a = s.child, s.tag === 22 && s.memoizedState !== null ? jf(l) : a !== null ? (a.return = s, U = a) : jf(l);
          for (; o !== null; )
            U = o, Im(o), o = o.sibling;
          U = l, Zo = i, Ie = u;
        }
        Tf(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? (o.return = l, U = o) : Tf(e);
    }
  }
  function Tf(e) {
    for (; U !== null; ) {
      var t = U;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ie || ci(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ie)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var l = t.elementType === t.type ? n.memoizedProps : Nt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && ff(t, o, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (n = null, t.child !== null)
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ff(t, s, n);
                }
                break;
              case 5:
                var i = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = i;
                  var a = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      a.autoFocus && n.focus();
                      break;
                    case "img":
                      a.src && (n.src = a.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate;
                  if (u !== null) {
                    var d = u.memoizedState;
                    if (d !== null) {
                      var m = d.dehydrated;
                      m !== null && Gl(m);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(O(163));
            }
          Ie || t.flags & 512 && fu(t);
        } catch (v) {
          ge(t, t.return, v);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, U = n;
        break;
      }
      U = t.return;
    }
  }
  function $f(e) {
    for (; U !== null; ) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, U = n;
        break;
      }
      U = t.return;
    }
  }
  function jf(e) {
    for (; U !== null; ) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ci(4, t);
            } catch (a) {
              ge(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                ge(t, l, a);
              }
            }
            var o = t.return;
            try {
              fu(t);
            } catch (a) {
              ge(t, o, a);
            }
            break;
          case 5:
            var s = t.return;
            try {
              fu(t);
            } catch (a) {
              ge(t, s, a);
            }
        }
      } catch (a) {
        ge(t, t.return, a);
      }
      if (t === e) {
        U = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, U = i;
        break;
      }
      U = t.return;
    }
  }
  var xy = Math.ceil, Ds = on.ReactCurrentDispatcher, Tc = on.ReactCurrentOwner, gt = on.ReactCurrentBatchConfig, q = 0, Re = null, we = null, je = 0, qe = 0, Or = Mn(0), Ce = 0, so = null, sr = 0, di = 0, $c = 0, Ul = null, Ve = null, jc = 0, qr = 1 / 0, Kt = null, Us = false, hu = null, Nn = null, Yo = false, vn = null, zs = 0, zl = 0, gu = null, ds = -1, fs = 0;
  function ze() {
    return q & 6 ? xe() : ds !== -1 ? ds : ds = xe();
  }
  function kn(e) {
    return e.mode & 1 ? q & 2 && je !== 0 ? je & -je : ny.transition !== null ? (fs === 0 && (fs = y0()), fs) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : N0(e.type)), e) : 1;
  }
  function Pt(e, t, n, r) {
    if (50 < zl)
      throw zl = 0, gu = null, Error(O(185));
    go(e, n, r), (!(q & 2) || e !== Re) && (e === Re && (!(q & 2) && (di |= n), Ce === 4 && mn(e, je)), Ge(e, r), n === 1 && q === 0 && !(t.mode & 1) && (qr = xe() + 500, ii && An()));
  }
  function Ge(e, t) {
    var n = e.callbackNode;
    n1(e, t);
    var r = Cs(e, e === Re ? je : 0);
    if (r === 0)
      n !== null && _d(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && _d(n), t === 1)
        e.tag === 0 ? ty(Lf.bind(null, e)) : W0(Lf.bind(null, e)), X1(function() {
          !(q & 6) && An();
        }), n = null;
      else {
        switch (x0(r)) {
          case 1:
            n = nc;
            break;
          case 4:
            n = g0;
            break;
          case 16:
            n = Ss;
            break;
          case 536870912:
            n = v0;
            break;
          default:
            n = Ss;
        }
        n = Bm(n, Mm.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Mm(e, t) {
    if (ds = -1, fs = 0, q & 6)
      throw Error(O(327));
    var n = e.callbackNode;
    if (zr() && e.callbackNode !== n)
      return null;
    var r = Cs(e, e === Re ? je : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = Bs(e, r);
    else {
      t = r;
      var l = q;
      q |= 2;
      var o = Fm();
      (Re !== e || je !== t) && (Kt = null, qr = xe() + 500, qn(e, t));
      do
        try {
          Ey();
          break;
        } catch (i) {
          Am(e, i);
        }
      while (1);
      hc(), Ds.current = o, q = l, we !== null ? t = 0 : (Re = null, je = 0, t = Ce);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ha(e), l !== 0 && (r = l, t = vu(e, l))), t === 1)
        throw n = so, qn(e, 0), mn(e, r), Ge(e, xe()), n;
      if (t === 6)
        mn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !wy(l) && (t = Bs(e, r), t === 2 && (o = Ha(e), o !== 0 && (r = o, t = vu(e, o))), t === 1))
          throw n = so, qn(e, 0), mn(e, r), Ge(e, xe()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(O(345));
          case 2:
            Bn(e, Ve, Kt);
            break;
          case 3:
            if (mn(e, r), (r & 130023424) === r && (t = jc + 500 - xe(), 10 < t)) {
              if (Cs(e, 0) !== 0)
                break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                ze(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Xa(Bn.bind(null, e, Ve, Kt), t);
              break;
            }
            Bn(e, Ve, Kt);
            break;
          case 4:
            if (mn(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var s = 31 - Lt(r);
              o = 1 << s, s = t[s], s > l && (l = s), r &= ~o;
            }
            if (r = l, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xy(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Xa(Bn.bind(null, e, Ve, Kt), r);
              break;
            }
            Bn(e, Ve, Kt);
            break;
          case 5:
            Bn(e, Ve, Kt);
            break;
          default:
            throw Error(O(329));
        }
      }
    }
    return Ge(e, xe()), e.callbackNode === n ? Mm.bind(null, e) : null;
  }
  function vu(e, t) {
    var n = Ul;
    return e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256), e = Bs(e, t), e !== 2 && (t = Ve, Ve = n, t !== null && yu(t)), e;
  }
  function yu(e) {
    Ve === null ? Ve = e : Ve.push.apply(Ve, e);
  }
  function wy(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r], o = l.getSnapshot;
            l = l.value;
            try {
              if (!Ot(o(), l))
                return false;
            } catch {
              return false;
            }
          }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e)
          break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function mn(e, t) {
    for (t &= ~$c, t &= ~di, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Lt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Lf(e) {
    if (q & 6)
      throw Error(O(327));
    zr();
    var t = Cs(e, 0);
    if (!(t & 1))
      return Ge(e, xe()), null;
    var n = Bs(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ha(e);
      r !== 0 && (t = r, n = vu(e, r));
    }
    if (n === 1)
      throw n = so, qn(e, 0), mn(e, t), Ge(e, xe()), n;
    if (n === 6)
      throw Error(O(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bn(e, Ve, Kt), Ge(e, xe()), null;
  }
  function Lc(e, t) {
    var n = q;
    q |= 1;
    try {
      return e(t);
    } finally {
      q = n, q === 0 && (qr = xe() + 500, ii && An());
    }
  }
  function ir(e) {
    vn !== null && vn.tag === 0 && !(q & 6) && zr();
    var t = q;
    q |= 1;
    var n = gt.transition, r = te;
    try {
      if (gt.transition = null, te = 1, e)
        return e();
    } finally {
      te = r, gt.transition = n, q = t, !(q & 6) && An();
    }
  }
  function Pc() {
    qe = Or.current, ue(Or);
  }
  function qn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Q1(n)), we !== null)
      for (n = we.return; n !== null; ) {
        var r = n;
        switch (fc(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && $s();
            break;
          case 3:
            Qr(), ue(Ye), ue(Fe), bc();
            break;
          case 5:
            wc(r);
            break;
          case 4:
            Qr();
            break;
          case 13:
            ue(pe);
            break;
          case 19:
            ue(pe);
            break;
          case 10:
            gc(r.type._context);
            break;
          case 22:
          case 23:
            Pc();
        }
        n = n.return;
      }
    if (Re = e, we = e = Rn(e.current, null), je = qe = t, Ce = 0, so = null, $c = di = sr = 0, Ve = Ul = null, Zn !== null) {
      for (t = 0; t < Zn.length; t++)
        if (n = Zn[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var l = r.next, o = n.pending;
          if (o !== null) {
            var s = o.next;
            o.next = l, r.next = s;
          }
          n.pending = r;
        }
      Zn = null;
    }
    return e;
  }
  function Am(e, t) {
    do {
      var n = we;
      try {
        if (hc(), as.current = _s, Fs) {
          for (var r = me.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Fs = false;
        }
        if (or = 0, ke = Se = me = null, _l = false, ro = 0, Tc.current = null, n === null || n.return === null) {
          Ce = 1, so = t, we = null;
          break;
        }
        e: {
          var o = e, s = n.return, i = n, a = t;
          if (t = je, i.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var u = a, d = i, m = d.tag;
            if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
              var v = d.alternate;
              v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null);
            }
            var f = yf(s);
            if (f !== null) {
              f.flags &= -257, xf(f, s, i, o, t), f.mode & 1 && vf(o, u, t), t = f, a = u;
              var x = t.updateQueue;
              if (x === null) {
                var w = /* @__PURE__ */ new Set();
                w.add(a), t.updateQueue = w;
              } else
                x.add(a);
              break e;
            } else {
              if (!(t & 1)) {
                vf(o, u, t), Oc();
                break e;
              }
              a = Error(O(426));
            }
          } else if (fe && i.mode & 1) {
            var b = yf(s);
            if (b !== null) {
              !(b.flags & 65536) && (b.flags |= 256), xf(b, s, i, o, t), pc(Xr(a, i));
              break e;
            }
          }
          o = a = Xr(a, i), Ce !== 4 && (Ce = 2), Ul === null ? Ul = [
            o
          ] : Ul.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var h = xm(o, a, t);
                df(o, h);
                break e;
              case 1:
                i = a;
                var g = o.type, y = o.stateNode;
                if (!(o.flags & 128) && (typeof g.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Nn === null || !Nn.has(y)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var E = wm(o, i, t);
                  df(o, E);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Dm(n);
      } catch (S) {
        t = S, we === n && n !== null && (we = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Fm() {
    var e = Ds.current;
    return Ds.current = _s, e === null ? _s : e;
  }
  function Oc() {
    (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4), Re === null || !(sr & 268435455) && !(di & 268435455) || mn(Re, je);
  }
  function Bs(e, t) {
    var n = q;
    q |= 2;
    var r = Fm();
    (Re !== e || je !== t) && (Kt = null, qn(e, t));
    do
      try {
        by();
        break;
      } catch (l) {
        Am(e, l);
      }
    while (1);
    if (hc(), q = n, Ds.current = r, we !== null)
      throw Error(O(261));
    return Re = null, je = 0, Ce;
  }
  function by() {
    for (; we !== null; )
      _m(we);
  }
  function Ey() {
    for (; we !== null && !Yv(); )
      _m(we);
  }
  function _m(e) {
    var t = zm(e.alternate, e, qe);
    e.memoizedProps = e.pendingProps, t === null ? Dm(e) : we = t, Tc.current = null;
  }
  function Dm(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = hy(n, t), n !== null) {
          n.flags &= 32767, we = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ce = 6, we = null;
          return;
        }
      } else if (n = my(n, t, qe), n !== null) {
        we = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    Ce === 0 && (Ce = 5);
  }
  function Bn(e, t, n) {
    var r = te, l = gt.transition;
    try {
      gt.transition = null, te = 1, Sy(e, t, n, r);
    } finally {
      gt.transition = l, te = r;
    }
    return null;
  }
  function Sy(e, t, n, r) {
    do
      zr();
    while (vn !== null);
    if (q & 6)
      throw Error(O(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(O(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (r1(e, o), e === Re && (we = Re = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Yo || (Yo = true, Bm(Ss, function() {
      return zr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = gt.transition, gt.transition = null;
      var s = te;
      te = 1;
      var i = q;
      q |= 4, Tc.current = null, vy(e, n), Om(n, e), H1(Ga), Ns = !!Ka, Ga = Ka = null, e.current = n, yy(n), Kv(), q = i, te = s, gt.transition = o;
    } else
      e.current = n;
    if (Yo && (Yo = false, vn = e, zs = l), o = e.pendingLanes, o === 0 && (Nn = null), Xv(n.stateNode), Ge(e, xe()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        l = t[n], r(l.value, {
          componentStack: l.stack,
          digest: l.digest
        });
    if (Us)
      throw Us = false, e = hu, hu = null, e;
    return zs & 1 && e.tag !== 0 && zr(), o = e.pendingLanes, o & 1 ? e === gu ? zl++ : (zl = 0, gu = e) : zl = 0, An(), null;
  }
  function zr() {
    if (vn !== null) {
      var e = x0(zs), t = gt.transition, n = te;
      try {
        if (gt.transition = null, te = 16 > e ? 16 : e, vn === null)
          var r = false;
        else {
          if (e = vn, vn = null, zs = 0, q & 6)
            throw Error(O(331));
          var l = q;
          for (q |= 4, U = e.current; U !== null; ) {
            var o = U, s = o.child;
            if (U.flags & 16) {
              var i = o.deletions;
              if (i !== null) {
                for (var a = 0; a < i.length; a++) {
                  var u = i[a];
                  for (U = u; U !== null; ) {
                    var d = U;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Dl(8, d, o);
                    }
                    var m = d.child;
                    if (m !== null)
                      m.return = d, U = m;
                    else
                      for (; U !== null; ) {
                        d = U;
                        var v = d.sibling, f = d.return;
                        if (jm(d), d === u) {
                          U = null;
                          break;
                        }
                        if (v !== null) {
                          v.return = f, U = v;
                          break;
                        }
                        U = f;
                      }
                  }
                }
                var x = o.alternate;
                if (x !== null) {
                  var w = x.child;
                  if (w !== null) {
                    x.child = null;
                    do {
                      var b = w.sibling;
                      w.sibling = null, w = b;
                    } while (w !== null);
                  }
                }
                U = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null)
              s.return = o, U = s;
            else
              e:
                for (; U !== null; ) {
                  if (o = U, o.flags & 2048)
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Dl(9, o, o.return);
                    }
                  var h = o.sibling;
                  if (h !== null) {
                    h.return = o.return, U = h;
                    break e;
                  }
                  U = o.return;
                }
          }
          var g = e.current;
          for (U = g; U !== null; ) {
            s = U;
            var y = s.child;
            if (s.subtreeFlags & 2064 && y !== null)
              y.return = s, U = y;
            else
              e:
                for (s = g; U !== null; ) {
                  if (i = U, i.flags & 2048)
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ci(9, i);
                      }
                    } catch (S) {
                      ge(i, i.return, S);
                    }
                  if (i === s) {
                    U = null;
                    break e;
                  }
                  var E = i.sibling;
                  if (E !== null) {
                    E.return = i.return, U = E;
                    break e;
                  }
                  U = i.return;
                }
          }
          if (q = l, An(), zt && typeof zt.onPostCommitFiberRoot == "function")
            try {
              zt.onPostCommitFiberRoot(ni, e);
            } catch {
            }
          r = true;
        }
        return r;
      } finally {
        te = n, gt.transition = t;
      }
    }
    return false;
  }
  function Pf(e, t, n) {
    t = Xr(n, t), t = xm(e, t, 1), e = Cn(e, t, 1), t = ze(), e !== null && (go(e, 1, t), Ge(e, t));
  }
  function ge(e, t, n) {
    if (e.tag === 3)
      Pf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Pf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nn === null || !Nn.has(r))) {
            e = Xr(n, e), e = wm(t, e, 1), t = Cn(t, e, 1), e = ze(), t !== null && (go(t, 1, e), Ge(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ze(), e.pingedLanes |= e.suspendedLanes & n, Re === e && (je & n) === n && (Ce === 4 || Ce === 3 && (je & 130023424) === je && 500 > xe() - jc ? qn(e, 0) : $c |= n), Ge(e, t);
  }
  function Um(e, t) {
    t === 0 && (e.mode & 1 ? (t = Fo, Fo <<= 1, !(Fo & 130023424) && (Fo = 4194304)) : t = 1);
    var n = ze();
    e = nn(e, t), e !== null && (go(e, t, n), Ge(e, n));
  }
  function Ny(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Um(e, n);
  }
  function ky(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(O(314));
    }
    r !== null && r.delete(t), Um(e, n);
  }
  var zm;
  zm = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ye.current)
        Ze = true;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return Ze = false, py(e, t, n);
        Ze = !!(e.flags & 131072);
      }
    else
      Ze = false, fe && t.flags & 1048576 && V0(t, Ps, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        cs(e, t), e = t.pendingProps;
        var l = Yr(t, Fe.current);
        Ur(t, n), l = Sc(null, t, r, e, l, n);
        var o = Cc();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (o = true, js(t)) : o = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, yc(t), l.updater = ui, t.stateNode = l, l._reactInternals = t, lu(t, r, e, n), t = iu(null, t, r, true, o, n)) : (t.tag = 0, fe && o && dc(t), _e(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (cs(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ty(r), e = Nt(r, e), l) {
            case 0:
              t = su(null, t, r, e, n);
              break e;
            case 1:
              t = Ef(null, t, r, e, n);
              break e;
            case 11:
              t = wf(null, t, r, e, n);
              break e;
            case 14:
              t = bf(null, t, r, Nt(r.type, e), n);
              break e;
          }
          throw Error(O(306, r, ""));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), su(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), Ef(e, t, r, l, n);
      case 3:
        e: {
          if (Cm(t), e === null)
            throw Error(O(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, X0(e, t), Ms(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated)
            if (o = {
              element: r,
              isDehydrated: false,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions
            }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
              l = Xr(Error(O(423)), t), t = Sf(e, t, r, n, l);
              break e;
            } else if (r !== l) {
              l = Xr(Error(O(424)), t), t = Sf(e, t, r, n, l);
              break e;
            } else
              for (Je = Sn(t.stateNode.containerInfo.firstChild), et = t, fe = true, Rt = null, n = G0(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Kr(), r === l) {
              t = rn(e, t, n);
              break e;
            }
            _e(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return q0(t), e === null && tu(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = l.children, Qa(r, l) ? s = null : o !== null && Qa(r, o) && (t.flags |= 32), Sm(e, t), _e(e, t, s, n), t.child;
      case 6:
        return e === null && tu(t), null;
      case 13:
        return Nm(e, t, n);
      case 4:
        return xc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Gr(t, null, r, n) : _e(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), wf(e, t, r, l, n);
      case 7:
        return _e(e, t, t.pendingProps, n), t.child;
      case 8:
        return _e(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return _e(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, s = l.value, ie(Os, r._currentValue), r._currentValue = s, o !== null)
            if (Ot(o.value, s)) {
              if (o.children === l.children && !Ye.current) {
                t = rn(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var i = o.dependencies;
                if (i !== null) {
                  s = o.child;
                  for (var a = i.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (o.tag === 1) {
                        a = qt(-1, n & -n), a.tag = 2;
                        var u = o.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var d = u.pending;
                          d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                        }
                      }
                      o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), nu(o.return, n, t), i.lanes |= n;
                      break;
                    }
                    a = a.next;
                  }
                } else if (o.tag === 10)
                  s = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (s = o.return, s === null)
                    throw Error(O(341));
                  s.lanes |= n, i = s.alternate, i !== null && (i.lanes |= n), nu(s, n, t), s = o.sibling;
                } else
                  s = o.child;
                if (s !== null)
                  s.return = o;
                else
                  for (s = o; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (o = s.sibling, o !== null) {
                      o.return = s.return, s = o;
                      break;
                    }
                    s = s.return;
                  }
                o = s;
              }
          _e(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Ur(t, n), l = vt(l), r = r(l), t.flags |= 1, _e(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = Nt(r, t.pendingProps), l = Nt(r.type, l), bf(e, t, r, l, n);
      case 15:
        return bm(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), cs(e, t), t.tag = 1, Ke(r) ? (e = true, js(t)) : e = false, Ur(t, n), ym(t, r, l), lu(t, r, l, n), iu(null, t, r, true, e, n);
      case 19:
        return km(e, t, n);
      case 22:
        return Em(e, t, n);
    }
    throw Error(O(156, t.tag));
  };
  function Bm(e, t) {
    return h0(e, t);
  }
  function Ry(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ht(e, t, n, r) {
    return new Ry(e, t, n, r);
  }
  function Ic(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ty(e) {
    if (typeof e == "function")
      return Ic(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ju)
        return 11;
      if (e === ec)
        return 14;
    }
    return 2;
  }
  function Rn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ht(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ps(e, t, n, r, l, o) {
    var s = 2;
    if (r = e, typeof e == "function")
      Ic(e) && (s = 1);
    else if (typeof e == "string")
      s = 5;
    else
      e:
        switch (e) {
          case Sr:
            return Jn(n.children, l, o, t);
          case qu:
            s = 8, l |= 8;
            break;
          case Ta:
            return e = ht(12, n, t, l | 2), e.elementType = Ta, e.lanes = o, e;
          case $a:
            return e = ht(13, n, t, l), e.elementType = $a, e.lanes = o, e;
          case ja:
            return e = ht(19, n, t, l), e.elementType = ja, e.lanes = o, e;
          case qp:
            return fi(n, l, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Qp:
                  s = 10;
                  break e;
                case Xp:
                  s = 9;
                  break e;
                case Ju:
                  s = 11;
                  break e;
                case ec:
                  s = 14;
                  break e;
                case dn:
                  s = 16, r = null;
                  break e;
              }
            throw Error(O(130, e == null ? e : typeof e, ""));
        }
    return t = ht(s, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Jn(e, t, n, r) {
    return e = ht(7, e, r, t), e.lanes = n, e;
  }
  function fi(e, t, n, r) {
    return e = ht(22, e, r, t), e.elementType = qp, e.lanes = n, e.stateNode = {
      isHidden: false
    }, e;
  }
  function aa(e, t, n) {
    return e = ht(6, e, null, t), e.lanes = n, e;
  }
  function ua(e, t, n) {
    return t = ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  function $y(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hi(0), this.expirationTimes = Hi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Mc(e, t, n, r, l, o, s, i, a) {
    return e = new $y(e, t, n, i, a), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = ht(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, yc(o), e;
  }
  function jy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Er,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  function Hm(e) {
    if (!e)
      return jn;
    e = e._reactInternals;
    e: {
      if (fr(e) !== e || e.tag !== 1)
        throw Error(O(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ke(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(O(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ke(n))
        return H0(e, n, t);
    }
    return t;
  }
  function Wm(e, t, n, r, l, o, s, i, a) {
    return e = Mc(n, r, true, e, l, o, s, i, a), e.context = Hm(null), n = e.current, r = ze(), l = kn(n), o = qt(r, l), o.callback = t ?? null, Cn(n, o, l), e.current.lanes = l, go(e, l, r), Ge(e, r), e;
  }
  function pi(e, t, n, r) {
    var l = t.current, o = ze(), s = kn(l);
    return n = Hm(n), t.context === null ? t.context = n : t.pendingContext = n, t = qt(o, s), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Cn(l, t, s), e !== null && (Pt(e, l, s, o), is(e, l, s)), s;
  }
  function Hs(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Of(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ac(e, t) {
    Of(e, t), (e = e.alternate) && Of(e, t);
  }
  function Ly() {
    return null;
  }
  var Vm = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Fc(e) {
    this._internalRoot = e;
  }
  mi.prototype.render = Fc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(O(409));
    pi(e, t, null, null);
  };
  mi.prototype.unmount = Fc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ir(function() {
        pi(null, e, null, null);
      }), t[tn] = null;
    }
  };
  function mi(e) {
    this._internalRoot = e;
  }
  mi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = E0();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++)
        ;
      pn.splice(n, 0, e), n === 0 && C0(e);
    }
  };
  function _c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function hi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function If() {
  }
  function Py(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var u = Hs(s);
          o.call(u);
        };
      }
      var s = Wm(t, r, e, 0, null, false, false, "", If);
      return e._reactRootContainer = s, e[tn] = s.current, ql(e.nodeType === 8 ? e.parentNode : e), ir(), s;
    }
    for (; l = e.lastChild; )
      e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Hs(a);
        i.call(u);
      };
    }
    var a = Mc(e, 0, false, null, null, false, false, "", If);
    return e._reactRootContainer = a, e[tn] = a.current, ql(e.nodeType === 8 ? e.parentNode : e), ir(function() {
      pi(t, a, n, r);
    }), a;
  }
  function gi(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var a = Hs(s);
          i.call(a);
        };
      }
      pi(t, s, e, l);
    } else
      s = Py(n, t, e, l, r);
    return Hs(s);
  }
  w0 = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Rl(t.pendingLanes);
          n !== 0 && (rc(t, n | 1), Ge(t, xe()), !(q & 6) && (qr = xe() + 500, An()));
        }
        break;
      case 13:
        ir(function() {
          var r = nn(e, 1);
          if (r !== null) {
            var l = ze();
            Pt(r, e, 1, l);
          }
        }), Ac(e, 1);
    }
  };
  lc = function(e) {
    if (e.tag === 13) {
      var t = nn(e, 134217728);
      if (t !== null) {
        var n = ze();
        Pt(t, e, 134217728, n);
      }
      Ac(e, 134217728);
    }
  };
  b0 = function(e) {
    if (e.tag === 13) {
      var t = kn(e), n = nn(e, t);
      if (n !== null) {
        var r = ze();
        Pt(n, e, t, r);
      }
      Ac(e, t);
    }
  };
  E0 = function() {
    return te;
  };
  S0 = function(e, t) {
    var n = te;
    try {
      return te = e, t();
    } finally {
      te = n;
    }
  };
  Ua = function(e, t, n) {
    switch (t) {
      case "input":
        if (Oa(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = si(r);
              if (!l)
                throw Error(O(90));
              e0(r), Oa(r, l);
            }
          }
        }
        break;
      case "textarea":
        n0(e, n);
        break;
      case "select":
        t = n.value, t != null && Ar(e, !!n.multiple, t, false);
    }
  };
  u0 = Lc;
  c0 = ir;
  var Oy = {
    usingClientEntryPoint: false,
    Events: [
      yo,
      Rr,
      si,
      i0,
      a0,
      Lc
    ]
  }, wl = {
    findFiberByHostInstance: Vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, Iy = {
    bundleType: wl.bundleType,
    version: wl.version,
    rendererPackageName: wl.rendererPackageName,
    rendererConfig: wl.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: on.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = p0(e), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wl.findFiberByHostInstance || Ly,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ko.isDisabled && Ko.supportsFiber)
      try {
        ni = Ko.inject(Iy), zt = Ko;
      } catch {
      }
  }
  lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy;
  lt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_c(t))
      throw Error(O(200));
    return jy(e, t, null, n);
  };
  lt.createRoot = function(e, t) {
    if (!_c(e))
      throw Error(O(299));
    var n = false, r = "", l = Vm;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Mc(e, 1, false, null, null, n, false, r, l), e[tn] = t.current, ql(e.nodeType === 8 ? e.parentNode : e), new Fc(t);
  };
  lt.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
    return e = p0(t), e = e === null ? null : e.stateNode, e;
  };
  lt.flushSync = function(e) {
    return ir(e);
  };
  lt.hydrate = function(e, t, n) {
    if (!hi(t))
      throw Error(O(200));
    return gi(null, e, t, true, n);
  };
  lt.hydrateRoot = function(e, t, n) {
    if (!_c(e))
      throw Error(O(405));
    var r = n != null && n.hydratedSources || null, l = false, o = "", s = Vm;
    if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Wm(t, null, e, 1, n ?? null, l, false, o, s), e[tn] = t.current, ql(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
          n,
          l
        ] : t.mutableSourceEagerHydrationData.push(n, l);
    return new mi(t);
  };
  lt.render = function(e, t, n) {
    if (!hi(t))
      throw Error(O(200));
    return gi(null, e, t, false, n);
  };
  lt.unmountComponentAtNode = function(e) {
    if (!hi(e))
      throw Error(O(40));
    return e._reactRootContainer ? (ir(function() {
      gi(null, null, e, false, function() {
        e._reactRootContainer = null, e[tn] = null;
      });
    }), true) : false;
  };
  lt.unstable_batchedUpdates = Lc;
  lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!hi(n))
      throw Error(O(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(O(38));
    return gi(e, t, n, false, r);
  };
  lt.version = "18.3.1-next-f1338f8080-20240426";
  function Zm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zm);
      } catch (e) {
        console.error(e);
      }
  }
  Zm(), Zp.exports = lt;
  var Vt = Zp.exports;
  const My = mo(Vt);
  var Mf = Vt;
  Td.createRoot = Mf.createRoot, Td.hydrateRoot = Mf.hydrateRoot;
  function io() {
    return io = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, io.apply(this, arguments);
  }
  var yn;
  (function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
  })(yn || (yn = {}));
  const Af = "popstate";
  function Ay(e) {
    e === void 0 && (e = {});
    function t(l, o) {
      let { pathname: s = "/", search: i = "", hash: a = "" } = pr(l.location.hash.substr(1));
      return !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s), xu("", {
        pathname: s,
        search: i,
        hash: a
      }, o.state && o.state.usr || null, o.state && o.state.key || "default");
    }
    function n(l, o) {
      let s = l.document.querySelector("base"), i = "";
      if (s && s.getAttribute("href")) {
        let a = l.location.href, u = a.indexOf("#");
        i = u === -1 ? a : a.slice(0, u);
      }
      return i + "#" + (typeof o == "string" ? o : Ym(o));
    }
    function r(l, o) {
      Dc(l.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(o) + ")");
    }
    return _y(t, n, r, e);
  }
  function be(e, t) {
    if (e === false || e === null || typeof e > "u")
      throw new Error(t);
  }
  function Dc(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {
      }
    }
  }
  function Fy() {
    return Math.random().toString(36).substr(2, 8);
  }
  function Ff(e, t) {
    return {
      usr: e.state,
      key: e.key,
      idx: t
    };
  }
  function xu(e, t, n, r) {
    return n === void 0 && (n = null), io({
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: ""
    }, typeof t == "string" ? pr(t) : t, {
      state: n,
      key: t && t.key || r || Fy()
    });
  }
  function Ym(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
  }
  function pr(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
      let r = e.indexOf("?");
      r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
    }
    return t;
  }
  function _y(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: l = document.defaultView, v5Compat: o = false } = r, s = l.history, i = yn.Pop, a = null, u = d();
    u == null && (u = 0, s.replaceState(io({}, s.state, {
      idx: u
    }), ""));
    function d() {
      return (s.state || {
        idx: null
      }).idx;
    }
    function m() {
      i = yn.Pop;
      let b = d(), h = b == null ? null : b - u;
      u = b, a && a({
        action: i,
        location: w.location,
        delta: h
      });
    }
    function v(b, h) {
      i = yn.Push;
      let g = xu(w.location, b, h);
      n && n(g, b), u = d() + 1;
      let y = Ff(g, u), E = w.createHref(g);
      try {
        s.pushState(y, "", E);
      } catch (S) {
        if (S instanceof DOMException && S.name === "DataCloneError")
          throw S;
        l.location.assign(E);
      }
      o && a && a({
        action: i,
        location: w.location,
        delta: 1
      });
    }
    function f(b, h) {
      i = yn.Replace;
      let g = xu(w.location, b, h);
      n && n(g, b), u = d();
      let y = Ff(g, u), E = w.createHref(g);
      s.replaceState(y, "", E), o && a && a({
        action: i,
        location: w.location,
        delta: 0
      });
    }
    function x(b) {
      let h = l.location.origin !== "null" ? l.location.origin : l.location.href, g = typeof b == "string" ? b : Ym(b);
      return g = g.replace(/ $/, "%20"), be(h, "No window.location.(origin|href) available to create URL for href: " + g), new URL(g, h);
    }
    let w = {
      get action() {
        return i;
      },
      get location() {
        return e(l, s);
      },
      listen(b) {
        if (a)
          throw new Error("A history only accepts one active listener");
        return l.addEventListener(Af, m), a = b, () => {
          l.removeEventListener(Af, m), a = null;
        };
      },
      createHref(b) {
        return t(l, b);
      },
      createURL: x,
      encodeLocation(b) {
        let h = x(b);
        return {
          pathname: h.pathname,
          search: h.search,
          hash: h.hash
        };
      },
      push: v,
      replace: f,
      go(b) {
        return s.go(b);
      }
    };
    return w;
  }
  var _f;
  (function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
  })(_f || (_f = {}));
  function Dy(e, t, n) {
    return n === void 0 && (n = "/"), Uy(e, t, n, false);
  }
  function Uy(e, t, n, r) {
    let l = typeof t == "string" ? pr(t) : t, o = Qm(l.pathname || "/", n);
    if (o == null)
      return null;
    let s = Km(e);
    zy(s);
    let i = null;
    for (let a = 0; i == null && a < s.length; ++a) {
      let u = qy(o);
      i = Qy(s[a], u, r);
    }
    return i;
  }
  function Km(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let l = (o, s, i) => {
      let a = {
        relativePath: i === void 0 ? o.path || "" : i,
        caseSensitive: o.caseSensitive === true,
        childrenIndex: s,
        route: o
      };
      a.relativePath.startsWith("/") && (be(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
      let u = er([
        r,
        a.relativePath
      ]), d = n.concat(a);
      o.children && o.children.length > 0 && (be(o.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Km(o.children, t, d, u)), !(o.path == null && !o.index) && t.push({
        path: u,
        score: Ky(u, o.index),
        routesMeta: d
      });
    };
    return e.forEach((o, s) => {
      var i;
      if (o.path === "" || !((i = o.path) != null && i.includes("?")))
        l(o, s);
      else
        for (let a of Gm(o.path))
          l(o, s, a);
    }), t;
  }
  function Gm(e) {
    let t = e.split("/");
    if (t.length === 0)
      return [];
    let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0)
      return l ? [
        o,
        ""
      ] : [
        o
      ];
    let s = Gm(r.join("/")), i = [];
    return i.push(...s.map((a) => a === "" ? o : [
      o,
      a
    ].join("/"))), l && i.push(...s), i.map((a) => e.startsWith("/") && a === "" ? "/" : a);
  }
  function zy(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Gy(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
  }
  const By = /^:[\w-]+$/, Hy = 3, Wy = 2, Vy = 1, Zy = 10, Yy = -2, Df = (e) => e === "*";
  function Ky(e, t) {
    let n = e.split("/"), r = n.length;
    return n.some(Df) && (r += Yy), t && (r += Wy), n.filter((l) => !Df(l)).reduce((l, o) => l + (By.test(o) ? Hy : o === "" ? Vy : Zy), r);
  }
  function Gy(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0;
  }
  function Qy(e, t, n) {
    n === void 0 && (n = false);
    let { routesMeta: r } = e, l = {}, o = "/", s = [];
    for (let i = 0; i < r.length; ++i) {
      let a = r[i], u = i === r.length - 1, d = o === "/" ? t : t.slice(o.length) || "/", m = Uf({
        path: a.relativePath,
        caseSensitive: a.caseSensitive,
        end: u
      }, d), v = a.route;
      if (!m && u && n && !r[r.length - 1].route.index && (m = Uf({
        path: a.relativePath,
        caseSensitive: a.caseSensitive,
        end: false
      }, d)), !m)
        return null;
      Object.assign(l, m.params), s.push({
        params: l,
        pathname: er([
          o,
          m.pathname
        ]),
        pathnameBase: nx(er([
          o,
          m.pathnameBase
        ])),
        route: v
      }), m.pathnameBase !== "/" && (o = er([
        o,
        m.pathnameBase
      ]));
    }
    return s;
  }
  function Uf(e, t) {
    typeof e == "string" && (e = {
      path: e,
      caseSensitive: false,
      end: true
    });
    let [n, r] = Xy(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l)
      return null;
    let o = l[0], s = o.replace(/(.)\/+$/, "$1"), i = l.slice(1);
    return {
      params: r.reduce((u, d, m) => {
        let { paramName: v, isOptional: f } = d;
        if (v === "*") {
          let w = i[m] || "";
          s = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
        }
        const x = i[m];
        return f && !x ? u[v] = void 0 : u[v] = (x || "").replace(/%2F/g, "/"), u;
      }, {}),
      pathname: o,
      pathnameBase: s,
      pattern: e
    };
  }
  function Xy(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = true), Dc(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, i, a) => (r.push({
      paramName: i,
      isOptional: a != null
    }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
      paramName: "*"
    }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [
      new RegExp(l, t ? void 0 : "i"),
      r
    ];
  }
  function qy(e) {
    try {
      return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
    } catch (t) {
      return Dc(false, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
    }
  }
  function Qm(e, t) {
    if (t === "/")
      return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
      return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  function Jy(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: l = "" } = typeof e == "string" ? pr(e) : e;
    return {
      pathname: n ? n.startsWith("/") ? n : ex(n, t) : t,
      search: rx(r),
      hash: lx(l)
    };
  }
  function ex(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }), n.length > 1 ? n.join("/") : "/";
  }
  function ca(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
  }
  function tx(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
  }
  function Xm(e, t) {
    let n = tx(e);
    return t ? n.map((r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
  }
  function qm(e, t, n, r) {
    r === void 0 && (r = false);
    let l;
    typeof e == "string" ? l = pr(e) : (l = io({}, e), be(!l.pathname || !l.pathname.includes("?"), ca("?", "pathname", "search", l)), be(!l.pathname || !l.pathname.includes("#"), ca("#", "pathname", "hash", l)), be(!l.search || !l.search.includes("#"), ca("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "", s = o ? "/" : l.pathname, i;
    if (s == null)
      i = n;
    else {
      let m = t.length - 1;
      if (!r && s.startsWith("..")) {
        let v = s.split("/");
        for (; v[0] === ".."; )
          v.shift(), m -= 1;
        l.pathname = v.join("/");
      }
      i = m >= 0 ? t[m] : "/";
    }
    let a = Jy(l, i), u = s && s !== "/" && s.endsWith("/"), d = (o || s === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
  }
  const er = (e) => e.join("/").replace(/\/\/+/g, "/"), nx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), rx = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, lx = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
  function ox(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
  }
  const Jm = [
    "post",
    "put",
    "patch",
    "delete"
  ];
  new Set(Jm);
  const sx = [
    "get",
    ...Jm
  ];
  new Set(sx);
  function ao() {
    return ao = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, ao.apply(this, arguments);
  }
  const Uc = c.createContext(null), ix = c.createContext(null), wo = c.createContext(null), vi = c.createContext(null), mr = c.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  }), eh = c.createContext(null);
  function bo() {
    return c.useContext(vi) != null;
  }
  function yi() {
    return bo() || be(false), c.useContext(vi).location;
  }
  function th(e) {
    c.useContext(wo).static || c.useLayoutEffect(e);
  }
  function ax() {
    let { isDataRoute: e } = c.useContext(mr);
    return e ? bx() : ux();
  }
  function ux() {
    bo() || be(false);
    let e = c.useContext(Uc), { basename: t, future: n, navigator: r } = c.useContext(wo), { matches: l } = c.useContext(mr), { pathname: o } = yi(), s = JSON.stringify(Xm(l, n.v7_relativeSplatPath)), i = c.useRef(false);
    return th(() => {
      i.current = true;
    }), c.useCallback(function(u, d) {
      if (d === void 0 && (d = {}), !i.current)
        return;
      if (typeof u == "number") {
        r.go(u);
        return;
      }
      let m = qm(u, JSON.parse(s), o, d.relative === "path");
      e == null && t !== "/" && (m.pathname = m.pathname === "/" ? t : er([
        t,
        m.pathname
      ])), (d.replace ? r.replace : r.push)(m, d.state, d);
    }, [
      t,
      r,
      s,
      o,
      e
    ]);
  }
  function cx(e, t) {
    return dx(e, t);
  }
  function dx(e, t, n, r) {
    bo() || be(false);
    let { navigator: l, static: o } = c.useContext(wo), { matches: s } = c.useContext(mr), i = s[s.length - 1], a = i ? i.params : {};
    i && i.pathname;
    let u = i ? i.pathnameBase : "/";
    i && i.route;
    let d = yi(), m;
    if (t) {
      var v;
      let h = typeof t == "string" ? pr(t) : t;
      u === "/" || (v = h.pathname) != null && v.startsWith(u) || be(false), m = h;
    } else
      m = d;
    let f = m.pathname || "/", x = f;
    if (u !== "/") {
      let h = u.replace(/^\//, "").split("/");
      x = "/" + f.replace(/^\//, "").split("/").slice(h.length).join("/");
    }
    let w = !o && n && n.matches && n.matches.length > 0 ? n.matches : Dy(e, {
      pathname: x
    }), b = gx(w && w.map((h) => Object.assign({}, h, {
      params: Object.assign({}, a, h.params),
      pathname: er([
        u,
        l.encodeLocation ? l.encodeLocation(h.pathname).pathname : h.pathname
      ]),
      pathnameBase: h.pathnameBase === "/" ? u : er([
        u,
        l.encodeLocation ? l.encodeLocation(h.pathnameBase).pathname : h.pathnameBase
      ])
    })), s, n, r);
    return t && b ? c.createElement(vi.Provider, {
      value: {
        location: ao({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, m),
        navigationType: yn.Pop
      }
    }, b) : b;
  }
  function fx() {
    let e = wx(), t = ox(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, l = {
      padding: "0.5rem",
      backgroundColor: "rgba(200,200,200, 0.5)"
    }, o = null;
    return c.createElement(c.Fragment, null, c.createElement("h2", null, "Unexpected Application Error!"), c.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, t), n ? c.createElement("pre", {
      style: l
    }, n) : null, o);
  }
  const px = c.createElement(fx, null);
  class mx extends c.Component {
    constructor(t) {
      super(t), this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error
      };
    }
    static getDerivedStateFromError(t) {
      return {
        error: t
      };
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
        error: t.error,
        location: t.location,
        revalidation: t.revalidation
      } : {
        error: t.error !== void 0 ? t.error : n.error,
        location: n.location,
        revalidation: t.revalidation || n.revalidation
      };
    }
    componentDidCatch(t, n) {
      console.error("React Router caught the following error during render", t, n);
    }
    render() {
      return this.state.error !== void 0 ? c.createElement(mr.Provider, {
        value: this.props.routeContext
      }, c.createElement(eh.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  }
  function hx(e) {
    let { routeContext: t, match: n, children: r } = e, l = c.useContext(Uc);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), c.createElement(mr.Provider, {
      value: t
    }, r);
  }
  function gx(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
      var o;
      if (!n)
        return null;
      if (n.errors)
        e = n.matches;
      else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
        e = n.matches;
      else
        return null;
    }
    let s = e, i = (l = n) == null ? void 0 : l.errors;
    if (i != null) {
      let d = s.findIndex((m) => m.route.id && (i == null ? void 0 : i[m.route.id]) !== void 0);
      d >= 0 || be(false), s = s.slice(0, Math.min(s.length, d + 1));
    }
    let a = false, u = -1;
    if (n && r && r.v7_partialHydration)
      for (let d = 0; d < s.length; d++) {
        let m = s[d];
        if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (u = d), m.route.id) {
          let { loaderData: v, errors: f } = n, x = m.route.loader && v[m.route.id] === void 0 && (!f || f[m.route.id] === void 0);
          if (m.route.lazy || x) {
            a = true, u >= 0 ? s = s.slice(0, u + 1) : s = [
              s[0]
            ];
            break;
          }
        }
      }
    return s.reduceRight((d, m, v) => {
      let f, x = false, w = null, b = null;
      n && (f = i && m.route.id ? i[m.route.id] : void 0, w = m.route.errorElement || px, a && (u < 0 && v === 0 ? (Ex("route-fallback", false), x = true, b = null) : u === v && (x = true, b = m.route.hydrateFallbackElement || null)));
      let h = t.concat(s.slice(0, v + 1)), g = () => {
        let y;
        return f ? y = w : x ? y = b : m.route.Component ? y = c.createElement(m.route.Component, null) : m.route.element ? y = m.route.element : y = d, c.createElement(hx, {
          match: m,
          routeContext: {
            outlet: d,
            matches: h,
            isDataRoute: n != null
          },
          children: y
        });
      };
      return n && (m.route.ErrorBoundary || m.route.errorElement || v === 0) ? c.createElement(mx, {
        location: n.location,
        revalidation: n.revalidation,
        component: w,
        error: f,
        children: g(),
        routeContext: {
          outlet: null,
          matches: h,
          isDataRoute: true
        }
      }) : g();
    }, null);
  }
  var nh = function(e) {
    return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
  }(nh || {}), Ws = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
  }(Ws || {});
  function vx(e) {
    let t = c.useContext(Uc);
    return t || be(false), t;
  }
  function yx(e) {
    let t = c.useContext(ix);
    return t || be(false), t;
  }
  function xx(e) {
    let t = c.useContext(mr);
    return t || be(false), t;
  }
  function rh(e) {
    let t = xx(), n = t.matches[t.matches.length - 1];
    return n.route.id || be(false), n.route.id;
  }
  function wx() {
    var e;
    let t = c.useContext(eh), n = yx(Ws.UseRouteError), r = rh(Ws.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
  }
  function bx() {
    let { router: e } = vx(nh.UseNavigateStable), t = rh(Ws.UseNavigateStable), n = c.useRef(false);
    return th(() => {
      n.current = true;
    }), c.useCallback(function(l, o) {
      o === void 0 && (o = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, ao({
        fromRouteId: t
      }, o)));
    }, [
      e,
      t
    ]);
  }
  const zf = {};
  function Ex(e, t, n) {
    !t && !zf[e] && (zf[e] = true);
  }
  function Sx(e, t) {
    e == null ? void 0 : e.v7_startTransition, (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && (!t || t.v7_relativeSplatPath), t && (t.v7_fetcherPersist, t.v7_normalizeFormMethod, t.v7_partialHydration, t.v7_skipActionErrorRevalidation);
  }
  function Cx(e) {
    let { to: t, replace: n, state: r, relative: l } = e;
    bo() || be(false);
    let { future: o, static: s } = c.useContext(wo), { matches: i } = c.useContext(mr), { pathname: a } = yi(), u = ax(), d = qm(t, Xm(i, o.v7_relativeSplatPath), a, l === "path"), m = JSON.stringify(d);
    return c.useEffect(() => u(JSON.parse(m), {
      replace: n,
      state: r,
      relative: l
    }), [
      u,
      m,
      l,
      n,
      r
    ]), null;
  }
  function wu(e) {
    be(false);
  }
  function Nx(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: l = yn.Pop, navigator: o, static: s = false, future: i } = e;
    bo() && be(false);
    let a = t.replace(/^\/*/, "/"), u = c.useMemo(() => ({
      basename: a,
      navigator: o,
      static: s,
      future: ao({
        v7_relativeSplatPath: false
      }, i)
    }), [
      a,
      i,
      o,
      s
    ]);
    typeof r == "string" && (r = pr(r));
    let { pathname: d = "/", search: m = "", hash: v = "", state: f = null, key: x = "default" } = r, w = c.useMemo(() => {
      let b = Qm(d, a);
      return b == null ? null : {
        location: {
          pathname: b,
          search: m,
          hash: v,
          state: f,
          key: x
        },
        navigationType: l
      };
    }, [
      a,
      d,
      m,
      v,
      f,
      x,
      l
    ]);
    return w == null ? null : c.createElement(wo.Provider, {
      value: u
    }, c.createElement(vi.Provider, {
      children: n,
      value: w
    }));
  }
  function kx(e) {
    let { children: t, location: n } = e;
    return cx(bu(t), n);
  }
  new Promise(() => {
  });
  function bu(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return c.Children.forEach(e, (r, l) => {
      if (!c.isValidElement(r))
        return;
      let o = [
        ...t,
        l
      ];
      if (r.type === c.Fragment) {
        n.push.apply(n, bu(r.props.children, o));
        return;
      }
      r.type !== wu && be(false), !r.props.index || !r.props.children || be(false);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy
      };
      r.props.children && (s.children = bu(r.props.children, o)), n.push(s);
    }), n;
  }
  const Rx = "6";
  try {
    window.__reactRouterVersion = Rx;
  } catch {
  }
  const Tx = "startTransition", Bf = xs[Tx];
  VC = function(e) {
    let { basename: t, children: n, future: r, window: l } = e, o = c.useRef();
    o.current == null && (o.current = Ay({
      window: l,
      v5Compat: true
    }));
    let s = o.current, [i, a] = c.useState({
      action: s.action,
      location: s.location
    }), { v7_startTransition: u } = r || {}, d = c.useCallback((m) => {
      u && Bf ? Bf(() => a(m)) : a(m);
    }, [
      a,
      u
    ]);
    return c.useLayoutEffect(() => s.listen(d), [
      s,
      d
    ]), c.useEffect(() => Sx(r), [
      r
    ]), c.createElement(Nx, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: s,
      future: r
    });
  };
  var Hf;
  (function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
  })(Hf || (Hf = {}));
  var Wf;
  (function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
  })(Wf || (Wf = {}));
  function $x(e) {
    this.state = {
      ...this.state,
      ...e
    }, this.listeners.forEach((t) => {
      t(this.state);
    });
  }
  function jx(e) {
    const t = e.useState()[1];
    return e.useEffect(() => (this.listeners.push(t), () => {
      this.listeners = this.listeners.filter((n) => n !== t);
    }), []), [
      this.state,
      this.actions
    ];
  }
  function lh(e, t) {
    const n = {};
    return Object.keys(t).forEach((r) => {
      typeof t[r] == "function" && (n[r] = t[r].bind(null, e)), typeof t[r] == "object" && (n[r] = lh(e, t[r]));
    }), n;
  }
  const Lx = (e, t, n) => {
    const r = {
      state: t,
      listeners: []
    };
    return r.setState = $x.bind(r), r.actions = lh(r, n), jx.bind(r, e);
  }, Px = (e) => new Promise((t, n) => {
    try {
      chrome.storage.local.get([
        e
      ], function(r) {
        t(r[e]);
      });
    } catch (r) {
      n(r);
    }
  }), Ox = (e, t) => new Promise((n, r) => {
    try {
      chrome.storage.local.set({
        [e]: t
      }, function() {
        n();
      });
    } catch (l) {
      r(l);
    }
  }), Ix = (e) => new Promise((t, n) => {
    try {
      chrome.storage.local.remove([
        e
      ], function() {
        t();
      });
    } catch (r) {
      n(r);
    }
  }), Mx = (e) => new Promise((t, n) => {
    try {
      chrome.storage.local.get(e, function(r) {
        t(r);
      });
    } catch (r) {
      n(r);
    }
  }), ln = {
    get: Px,
    set: Ox,
    remove: Ix,
    getKeys: Mx
  }, Vf = "Bulk URL Opener & Tab Manager \u2728", zc = "BULK_URL_OPENER_TAB_MANAGER", Eu = `${zc}_POWER_BUTTON`, Bc = `${zc}_LICENSE_CODE`, Hc = `${zc}_ME`, Ax = {
    licenseCode: await ln.get(Bc),
    me: await ln.get(Hc)
  }, Fx = (e) => e.state.auth.licenseCode && e.state.auth.me, _x = async (e) => {
    await e.setState({
      auth: {
        licenseCode: null,
        me: null
      }
    }), await ln.remove(Bc), await ln.remove(Hc);
  }, Dx = async (e, t) => {
    await e.setState({
      auth: {
        ...e.state.auth,
        licenseCode: t
      }
    }), await ln.set(Bc, t);
  }, Ux = async (e, t) => {
    await e.setState({
      auth: {
        ...e.state.auth,
        me: t
      }
    }), await ln.set(Hc, t);
  }, zx = await ln.get(Eu) == null ? true : await ln.get(Eu), Bx = async (e) => {
    await e.setState({
      powerButton: !e.state.powerButton
    }), await ln.set(Eu, e.state.powerButton);
  }, Wc = "bulk_url_opener_lists", Xe = {
    batchSize: 1,
    delaySeconds: 1,
    openInNewWindow: false,
    removeOpenedUrls: false,
    urlLimit: 0,
    handleNonUrls: false,
    randomOrder: false,
    reverseOrder: false,
    openInSingleTab: false,
    waitForTabLoad: false,
    closeTabAfterLoad: false,
    closeTabDelay: 2
  }, Hx = {
    savedLists: [],
    currentUrls: "",
    currentSettings: {
      ...Xe
    },
    isLoading: false,
    error: null
  }, Wx = (e) => {
    try {
      const t = JSON.parse(localStorage.getItem(Wc)) || [];
      return e.setState({
        urlLists: {
          ...e.state.urlLists,
          savedLists: t
        }
      }), t;
    } catch (t) {
      return console.error("Error loading saved URL lists:", t), [];
    }
  }, Vx = (e, t, n) => {
    if (!t)
      return;
    const { savedLists: r, currentUrls: l } = e.state.urlLists, o = n || e.state.urlLists.currentSettings, s = {
      id: Date.now(),
      name: t,
      urls: l,
      settings: o
    }, i = [
      ...r,
      s
    ];
    return localStorage.setItem(Wc, JSON.stringify(i)), e.setState({
      urlLists: {
        ...e.state.urlLists,
        savedLists: i
      }
    }), s;
  }, Zx = (e, t) => {
    const { savedLists: n } = e.state.urlLists, r = n.filter((l) => l.id !== t);
    localStorage.setItem(Wc, JSON.stringify(r)), e.setState({
      urlLists: {
        ...e.state.urlLists,
        savedLists: r
      }
    });
  }, Yx = (e, t) => {
    const { savedLists: n } = e.state.urlLists, r = n.find((l) => l.id === t);
    if (r) {
      const l = {
        ...e.state.urlLists,
        currentUrls: r.urls
      };
      r.settings && (l.currentSettings = r.settings), e.setState({
        urlLists: l
      });
    }
  }, Kx = (e, t) => {
    e.setState({
      urlLists: {
        ...e.state.urlLists,
        currentUrls: t
      }
    });
  }, Gx = (e, t) => {
    e.setState({
      urlLists: {
        ...e.state.urlLists,
        currentSettings: {
          ...e.state.urlLists.currentSettings,
          ...t
        }
      }
    });
  }, Qx = (e) => {
    e.setState({
      urlLists: {
        ...e.state.urlLists,
        currentSettings: {
          ...Xe
        }
      }
    });
  }, Xx = {
    isIncognito: false
  }, oh = (e, t) => {
    e.setState({
      incognito: {
        ...e.state.incognito,
        isIncognito: t
      }
    });
  }, qx = (e) => {
    chrome.extension && "inIncognitoContext" in chrome.extension && oh(e, chrome.extension.inIncognitoContext);
  }, Jx = {
    powerButton: zx,
    auth: Ax,
    urlLists: Hx,
    incognito: Xx
  }, ew = {
    setLicenseCode: Dx,
    setMe: Ux,
    logout: _x,
    isAuthenticated: Fx,
    togglePowerButton: Bx,
    loadSavedLists: Wx,
    saveUrlList: Vx,
    deleteUrlList: Zx,
    loadUrlList: Yx,
    setCurrentUrls: Kx,
    updateCurrentSettings: Gx,
    resetSettings: Qx,
    setIncognitoStatus: oh,
    detectIncognitoMode: qx
  }, ol = Lx(R, Jx, ew);
  function tw({ children: e }) {
    const [t, n] = ol(), r = yi();
    return n.isAuthenticated() ? e : p.jsx(Cx, {
      to: "/login",
      state: {
        from: r
      },
      replace: true
    });
  }
  var nw = (e) => {
    switch (e) {
      case "success":
        return ow;
      case "info":
        return iw;
      case "warning":
        return sw;
      case "error":
        return aw;
      default:
        return null;
    }
  }, rw = Array(12).fill(0), lw = ({ visible: e, className: t }) => R.createElement("div", {
    className: [
      "sonner-loading-wrapper",
      t
    ].filter(Boolean).join(" "),
    "data-visible": e
  }, R.createElement("div", {
    className: "sonner-spinner"
  }, rw.map((n, r) => R.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
  })))), ow = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, R.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })), sw = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, R.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })), iw = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })), aw = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })), uw = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, R.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), R.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })), cw = () => {
    let [e, t] = R.useState(document.hidden);
    return R.useEffect(() => {
      let n = () => {
        t(document.hidden);
      };
      return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
    }, []), e;
  }, Su = 1, dw = class {
    constructor() {
      this.subscribe = (t) => (this.subscribers.push(t), () => {
        let n = this.subscribers.indexOf(t);
        this.subscribers.splice(n, 1);
      }), this.publish = (t) => {
        this.subscribers.forEach((n) => n(t));
      }, this.addToast = (t) => {
        this.publish(t), this.toasts = [
          ...this.toasts,
          t
        ];
      }, this.create = (t) => {
        var n;
        let { message: r, ...l } = t, o = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : Su++, s = this.toasts.find((a) => a.id === o), i = t.dismissible === void 0 ? true : t.dismissible;
        return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), s ? this.toasts = this.toasts.map((a) => a.id === o ? (this.publish({
          ...a,
          ...t,
          id: o,
          title: r
        }), {
          ...a,
          ...t,
          id: o,
          dismissible: i,
          title: r
        }) : a) : this.addToast({
          title: r,
          ...l,
          dismissible: i,
          id: o
        }), o;
      }, this.dismiss = (t) => (this.dismissedToasts.add(t), t || this.toasts.forEach((n) => {
        this.subscribers.forEach((r) => r({
          id: n.id,
          dismiss: true
        }));
      }), this.subscribers.forEach((n) => n({
        id: t,
        dismiss: true
      })), t), this.message = (t, n) => this.create({
        ...n,
        message: t
      }), this.error = (t, n) => this.create({
        ...n,
        message: t,
        type: "error"
      }), this.success = (t, n) => this.create({
        ...n,
        type: "success",
        message: t
      }), this.info = (t, n) => this.create({
        ...n,
        type: "info",
        message: t
      }), this.warning = (t, n) => this.create({
        ...n,
        type: "warning",
        message: t
      }), this.loading = (t, n) => this.create({
        ...n,
        type: "loading",
        message: t
      }), this.promise = (t, n) => {
        if (!n)
          return;
        let r;
        n.loading !== void 0 && (r = this.create({
          ...n,
          promise: t,
          type: "loading",
          message: n.loading,
          description: typeof n.description != "function" ? n.description : void 0
        }));
        let l = t instanceof Promise ? t : t(), o = r !== void 0, s, i = l.then(async (u) => {
          if (s = [
            "resolve",
            u
          ], R.isValidElement(u))
            o = false, this.create({
              id: r,
              type: "default",
              message: u
            });
          else if (pw(u) && !u.ok) {
            o = false;
            let d = typeof n.error == "function" ? await n.error(`HTTP error! status: ${u.status}`) : n.error, m = typeof n.description == "function" ? await n.description(`HTTP error! status: ${u.status}`) : n.description;
            this.create({
              id: r,
              type: "error",
              message: d,
              description: m
            });
          } else if (n.success !== void 0) {
            o = false;
            let d = typeof n.success == "function" ? await n.success(u) : n.success, m = typeof n.description == "function" ? await n.description(u) : n.description;
            this.create({
              id: r,
              type: "success",
              message: d,
              description: m
            });
          }
        }).catch(async (u) => {
          if (s = [
            "reject",
            u
          ], n.error !== void 0) {
            o = false;
            let d = typeof n.error == "function" ? await n.error(u) : n.error, m = typeof n.description == "function" ? await n.description(u) : n.description;
            this.create({
              id: r,
              type: "error",
              message: d,
              description: m
            });
          }
        }).finally(() => {
          var u;
          o && (this.dismiss(r), r = void 0), (u = n.finally) == null || u.call(n);
        }), a = () => new Promise((u, d) => i.then(() => s[0] === "reject" ? d(s[1]) : u(s[1])).catch(d));
        return typeof r != "string" && typeof r != "number" ? {
          unwrap: a
        } : Object.assign(r, {
          unwrap: a
        });
      }, this.custom = (t, n) => {
        let r = (n == null ? void 0 : n.id) || Su++;
        return this.create({
          jsx: t(r),
          id: r,
          ...n
        }), r;
      }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
    }
  }, We = new dw(), fw = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Su++;
    return We.addToast({
      title: e,
      ...t,
      id: n
    }), n;
  }, pw = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", mw = fw, hw = () => We.toasts, gw = () => We.getActiveToasts(), z = Object.assign(mw, {
    success: We.success,
    info: We.info,
    warning: We.warning,
    error: We.error,
    custom: We.custom,
    message: We.message,
    promise: We.promise,
    dismiss: We.dismiss,
    loading: We.loading
  }, {
    getHistory: hw,
    getToasts: gw
  });
  function vw(e, { insertAt: t } = {}) {
    if (!e || typeof document > "u")
      return;
    let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
    r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
  }
  vw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  function Go(e) {
    return e.label !== void 0;
  }
  var yw = 3, xw = "32px", ww = "16px", Zf = 4e3, bw = 356, Ew = 14, Sw = 20, Cw = 200;
  function Ct(...e) {
    return e.filter(Boolean).join(" ");
  }
  function Nw(e) {
    let [t, n] = e.split("-"), r = [];
    return t && r.push(t), n && r.push(n), r;
  }
  var kw = (e) => {
    var t, n, r, l, o, s, i, a, u, d, m;
    let { invert: v, toast: f, unstyled: x, interacting: w, setHeights: b, visibleToasts: h, heights: g, index: y, toasts: E, expanded: S, removeToast: N, defaultRichColors: T, closeButton: k, style: M, cancelButtonStyle: $, actionButtonStyle: I, className: Z = "", descriptionClassName: B = "", duration: P, position: A, gap: F, loadingIcon: H, expandByDefault: j, classNames: C, icons: L, closeButtonAriaLabel: V = "Close toast", pauseWhenPageIsHidden: D } = e, [_, K] = R.useState(null), [G, Ne] = R.useState(null), [X, st] = R.useState(false), [Qe, hr] = R.useState(false), [it, cl] = R.useState(false), [jo, Pi] = R.useState(false), [Oi, dl] = R.useState(false), [Ii, ee] = R.useState(0), [se, Mt] = R.useState(0), fl = R.useRef(f.duration || P || Zf), wd = R.useRef(null), Dn = R.useRef(null), Kg = y === 0, Gg = y + 1 <= h, at = f.type, gr = f.dismissible !== false, Qg = f.className || "", Xg = f.descriptionClassName || "", Lo = R.useMemo(() => g.findIndex((Y) => Y.toastId === f.id) || 0, [
      g,
      f.id
    ]), qg = R.useMemo(() => {
      var Y;
      return (Y = f.closeButton) != null ? Y : k;
    }, [
      f.closeButton,
      k
    ]), bd = R.useMemo(() => f.duration || P || Zf, [
      f.duration,
      P
    ]), Mi = R.useRef(0), vr = R.useRef(0), Ed = R.useRef(0), yr = R.useRef(null), [Jg, ev] = A.split("-"), Sd = R.useMemo(() => g.reduce((Y, ne, de) => de >= Lo ? Y : Y + ne.height, 0), [
      g,
      Lo
    ]), Cd = cw(), tv = f.invert || v, Ai = at === "loading";
    vr.current = R.useMemo(() => Lo * F + Sd, [
      Lo,
      Sd
    ]), R.useEffect(() => {
      fl.current = bd;
    }, [
      bd
    ]), R.useEffect(() => {
      st(true);
    }, []), R.useEffect(() => {
      let Y = Dn.current;
      if (Y) {
        let ne = Y.getBoundingClientRect().height;
        return Mt(ne), b((de) => [
          {
            toastId: f.id,
            height: ne,
            position: f.position
          },
          ...de
        ]), () => b((de) => de.filter((wt) => wt.toastId !== f.id));
      }
    }, [
      b,
      f.id
    ]), R.useLayoutEffect(() => {
      if (!X)
        return;
      let Y = Dn.current, ne = Y.style.height;
      Y.style.height = "auto";
      let de = Y.getBoundingClientRect().height;
      Y.style.height = ne, Mt(de), b((wt) => wt.find((bt) => bt.toastId === f.id) ? wt.map((bt) => bt.toastId === f.id ? {
        ...bt,
        height: de
      } : bt) : [
        {
          toastId: f.id,
          height: de,
          position: f.position
        },
        ...wt
      ]);
    }, [
      X,
      f.title,
      f.description,
      b,
      f.id
    ]);
    let sn = R.useCallback(() => {
      hr(true), ee(vr.current), b((Y) => Y.filter((ne) => ne.toastId !== f.id)), setTimeout(() => {
        N(f);
      }, Cw);
    }, [
      f,
      N,
      b,
      vr
    ]);
    R.useEffect(() => {
      if (f.promise && at === "loading" || f.duration === 1 / 0 || f.type === "loading")
        return;
      let Y;
      return S || w || D && Cd ? (() => {
        if (Ed.current < Mi.current) {
          let ne = (/* @__PURE__ */ new Date()).getTime() - Mi.current;
          fl.current = fl.current - ne;
        }
        Ed.current = (/* @__PURE__ */ new Date()).getTime();
      })() : fl.current !== 1 / 0 && (Mi.current = (/* @__PURE__ */ new Date()).getTime(), Y = setTimeout(() => {
        var ne;
        (ne = f.onAutoClose) == null || ne.call(f, f), sn();
      }, fl.current)), () => clearTimeout(Y);
    }, [
      S,
      w,
      f,
      at,
      D,
      Cd,
      sn
    ]), R.useEffect(() => {
      f.delete && sn();
    }, [
      sn,
      f.delete
    ]);
    function nv() {
      var Y, ne, de;
      return L != null && L.loading ? R.createElement("div", {
        className: Ct(C == null ? void 0 : C.loader, (Y = f == null ? void 0 : f.classNames) == null ? void 0 : Y.loader, "sonner-loader"),
        "data-visible": at === "loading"
      }, L.loading) : H ? R.createElement("div", {
        className: Ct(C == null ? void 0 : C.loader, (ne = f == null ? void 0 : f.classNames) == null ? void 0 : ne.loader, "sonner-loader"),
        "data-visible": at === "loading"
      }, H) : R.createElement(lw, {
        className: Ct(C == null ? void 0 : C.loader, (de = f == null ? void 0 : f.classNames) == null ? void 0 : de.loader),
        visible: at === "loading"
      });
    }
    return R.createElement("li", {
      tabIndex: 0,
      ref: Dn,
      className: Ct(Z, Qg, C == null ? void 0 : C.toast, (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast, C == null ? void 0 : C.default, C == null ? void 0 : C[at], (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[at]),
      "data-sonner-toast": "",
      "data-rich-colors": (r = f.richColors) != null ? r : T,
      "data-styled": !(f.jsx || f.unstyled || x),
      "data-mounted": X,
      "data-promise": !!f.promise,
      "data-swiped": Oi,
      "data-removed": Qe,
      "data-visible": Gg,
      "data-y-position": Jg,
      "data-x-position": ev,
      "data-index": y,
      "data-front": Kg,
      "data-swiping": it,
      "data-dismissible": gr,
      "data-type": at,
      "data-invert": tv,
      "data-swipe-out": jo,
      "data-swipe-direction": G,
      "data-expanded": !!(S || j && X),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": E.length - y,
        "--offset": `${Qe ? Ii : vr.current}px`,
        "--initial-height": j ? "auto" : `${se}px`,
        ...M,
        ...f.style
      },
      onDragEnd: () => {
        cl(false), K(null), yr.current = null;
      },
      onPointerDown: (Y) => {
        Ai || !gr || (wd.current = /* @__PURE__ */ new Date(), ee(vr.current), Y.target.setPointerCapture(Y.pointerId), Y.target.tagName !== "BUTTON" && (cl(true), yr.current = {
          x: Y.clientX,
          y: Y.clientY
        }));
      },
      onPointerUp: () => {
        var Y, ne, de, wt;
        if (jo || !gr)
          return;
        yr.current = null;
        let bt = Number(((Y = Dn.current) == null ? void 0 : Y.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), an = Number(((ne = Dn.current) == null ? void 0 : ne.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Un = (/* @__PURE__ */ new Date()).getTime() - ((de = wd.current) == null ? void 0 : de.getTime()), Et = _ === "x" ? bt : an, un = Math.abs(Et) / Un;
        if (Math.abs(Et) >= Sw || un > 0.11) {
          ee(vr.current), (wt = f.onDismiss) == null || wt.call(f, f), Ne(_ === "x" ? bt > 0 ? "right" : "left" : an > 0 ? "down" : "up"), sn(), Pi(true), dl(false);
          return;
        }
        cl(false), K(null);
      },
      onPointerMove: (Y) => {
        var ne, de, wt, bt;
        if (!yr.current || !gr || ((ne = window.getSelection()) == null ? void 0 : ne.toString().length) > 0)
          return;
        let an = Y.clientY - yr.current.y, Un = Y.clientX - yr.current.x, Et = (de = e.swipeDirections) != null ? de : Nw(A);
        !_ && (Math.abs(Un) > 1 || Math.abs(an) > 1) && K(Math.abs(Un) > Math.abs(an) ? "x" : "y");
        let un = {
          x: 0,
          y: 0
        };
        _ === "y" ? (Et.includes("top") || Et.includes("bottom")) && (Et.includes("top") && an < 0 || Et.includes("bottom") && an > 0) && (un.y = an) : _ === "x" && (Et.includes("left") || Et.includes("right")) && (Et.includes("left") && Un < 0 || Et.includes("right") && Un > 0) && (un.x = Un), (Math.abs(un.x) > 0 || Math.abs(un.y) > 0) && dl(true), (wt = Dn.current) == null || wt.style.setProperty("--swipe-amount-x", `${un.x}px`), (bt = Dn.current) == null || bt.style.setProperty("--swipe-amount-y", `${un.y}px`);
      }
    }, qg && !f.jsx ? R.createElement("button", {
      "aria-label": V,
      "data-disabled": Ai,
      "data-close-button": true,
      onClick: Ai || !gr ? () => {
      } : () => {
        var Y;
        sn(), (Y = f.onDismiss) == null || Y.call(f, f);
      },
      className: Ct(C == null ? void 0 : C.closeButton, (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.closeButton)
    }, (o = L == null ? void 0 : L.close) != null ? o : uw) : null, f.jsx || c.isValidElement(f.title) ? f.jsx ? f.jsx : typeof f.title == "function" ? f.title() : f.title : R.createElement(R.Fragment, null, at || f.icon || f.promise ? R.createElement("div", {
      "data-icon": "",
      className: Ct(C == null ? void 0 : C.icon, (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.icon)
    }, f.promise || f.type === "loading" && !f.icon ? f.icon || nv() : null, f.type !== "loading" ? f.icon || (L == null ? void 0 : L[at]) || nw(at) : null) : null, R.createElement("div", {
      "data-content": "",
      className: Ct(C == null ? void 0 : C.content, (i = f == null ? void 0 : f.classNames) == null ? void 0 : i.content)
    }, R.createElement("div", {
      "data-title": "",
      className: Ct(C == null ? void 0 : C.title, (a = f == null ? void 0 : f.classNames) == null ? void 0 : a.title)
    }, typeof f.title == "function" ? f.title() : f.title), f.description ? R.createElement("div", {
      "data-description": "",
      className: Ct(B, Xg, C == null ? void 0 : C.description, (u = f == null ? void 0 : f.classNames) == null ? void 0 : u.description)
    }, typeof f.description == "function" ? f.description() : f.description) : null), c.isValidElement(f.cancel) ? f.cancel : f.cancel && Go(f.cancel) ? R.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: f.cancelButtonStyle || $,
      onClick: (Y) => {
        var ne, de;
        Go(f.cancel) && gr && ((de = (ne = f.cancel).onClick) == null || de.call(ne, Y), sn());
      },
      className: Ct(C == null ? void 0 : C.cancelButton, (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.cancelButton)
    }, f.cancel.label) : null, c.isValidElement(f.action) ? f.action : f.action && Go(f.action) ? R.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: f.actionButtonStyle || I,
      onClick: (Y) => {
        var ne, de;
        Go(f.action) && ((de = (ne = f.action).onClick) == null || de.call(ne, Y), !Y.defaultPrevented && sn());
      },
      className: Ct(C == null ? void 0 : C.actionButton, (m = f == null ? void 0 : f.classNames) == null ? void 0 : m.actionButton)
    }, f.action.label) : null));
  };
  function Yf() {
    if (typeof window > "u" || typeof document > "u")
      return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
  }
  function Rw(e, t) {
    let n = {};
    return [
      e,
      t
    ].forEach((r, l) => {
      let o = l === 1, s = o ? "--mobile-offset" : "--offset", i = o ? ww : xw;
      function a(u) {
        [
          "top",
          "right",
          "bottom",
          "left"
        ].forEach((d) => {
          n[`${s}-${d}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((u) => {
        r[u] === void 0 ? n[`${s}-${u}`] = i : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u];
      }) : a(i);
    }), n;
  }
  var Tw = c.forwardRef(function(e, t) {
    let { invert: n, position: r = "bottom-right", hotkey: l = [
      "altKey",
      "KeyT"
    ], expand: o, closeButton: s, className: i, offset: a, mobileOffset: u, theme: d = "light", richColors: m, duration: v, style: f, visibleToasts: x = yw, toastOptions: w, dir: b = Yf(), gap: h = Ew, loadingIcon: g, icons: y, containerAriaLabel: E = "Notifications", pauseWhenPageIsHidden: S } = e, [N, T] = R.useState([]), k = R.useMemo(() => Array.from(new Set([
      r
    ].concat(N.filter((D) => D.position).map((D) => D.position)))), [
      N,
      r
    ]), [M, $] = R.useState([]), [I, Z] = R.useState(false), [B, P] = R.useState(false), [A, F] = R.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), H = R.useRef(null), j = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""), C = R.useRef(null), L = R.useRef(false), V = R.useCallback((D) => {
      T((_) => {
        var K;
        return (K = _.find((G) => G.id === D.id)) != null && K.delete || We.dismiss(D.id), _.filter(({ id: G }) => G !== D.id);
      });
    }, []);
    return R.useEffect(() => We.subscribe((D) => {
      if (D.dismiss) {
        T((_) => _.map((K) => K.id === D.id ? {
          ...K,
          delete: true
        } : K));
        return;
      }
      setTimeout(() => {
        My.flushSync(() => {
          T((_) => {
            let K = _.findIndex((G) => G.id === D.id);
            return K !== -1 ? [
              ..._.slice(0, K),
              {
                ..._[K],
                ...D
              },
              ..._.slice(K + 1)
            ] : [
              D,
              ..._
            ];
          });
        });
      });
    }), []), R.useEffect(() => {
      if (d !== "system") {
        F(d);
        return;
      }
      if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light")), typeof window > "u")
        return;
      let D = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        D.addEventListener("change", ({ matches: _ }) => {
          F(_ ? "dark" : "light");
        });
      } catch {
        D.addListener(({ matches: K }) => {
          try {
            F(K ? "dark" : "light");
          } catch (G) {
            console.error(G);
          }
        });
      }
    }, [
      d
    ]), R.useEffect(() => {
      N.length <= 1 && Z(false);
    }, [
      N
    ]), R.useEffect(() => {
      let D = (_) => {
        var K, G;
        l.every((Ne) => _[Ne] || _.code === Ne) && (Z(true), (K = H.current) == null || K.focus()), _.code === "Escape" && (document.activeElement === H.current || (G = H.current) != null && G.contains(document.activeElement)) && Z(false);
      };
      return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
    }, [
      l
    ]), R.useEffect(() => {
      if (H.current)
        return () => {
          C.current && (C.current.focus({
            preventScroll: true
          }), C.current = null, L.current = false);
        };
    }, [
      H.current
    ]), R.createElement("section", {
      ref: t,
      "aria-label": `${E} ${j}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, k.map((D, _) => {
      var K;
      let [G, Ne] = D.split("-");
      return N.length ? R.createElement("ol", {
        key: D,
        dir: b === "auto" ? Yf() : b,
        tabIndex: -1,
        ref: H,
        className: i,
        "data-sonner-toaster": true,
        "data-theme": A,
        "data-y-position": G,
        "data-lifted": I && N.length > 1 && !o,
        "data-x-position": Ne,
        style: {
          "--front-toast-height": `${((K = M[0]) == null ? void 0 : K.height) || 0}px`,
          "--width": `${bw}px`,
          "--gap": `${h}px`,
          ...f,
          ...Rw(a, u)
        },
        onBlur: (X) => {
          L.current && !X.currentTarget.contains(X.relatedTarget) && (L.current = false, C.current && (C.current.focus({
            preventScroll: true
          }), C.current = null));
        },
        onFocus: (X) => {
          X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || L.current || (L.current = true, C.current = X.relatedTarget);
        },
        onMouseEnter: () => Z(true),
        onMouseMove: () => Z(true),
        onMouseLeave: () => {
          B || Z(false);
        },
        onDragEnd: () => Z(false),
        onPointerDown: (X) => {
          X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || P(true);
        },
        onPointerUp: () => P(false)
      }, N.filter((X) => !X.position && _ === 0 || X.position === D).map((X, st) => {
        var Qe, hr;
        return R.createElement(kw, {
          key: X.id,
          icons: y,
          index: st,
          toast: X,
          defaultRichColors: m,
          duration: (Qe = w == null ? void 0 : w.duration) != null ? Qe : v,
          className: w == null ? void 0 : w.className,
          descriptionClassName: w == null ? void 0 : w.descriptionClassName,
          invert: n,
          visibleToasts: x,
          closeButton: (hr = w == null ? void 0 : w.closeButton) != null ? hr : s,
          interacting: B,
          position: D,
          style: w == null ? void 0 : w.style,
          unstyled: w == null ? void 0 : w.unstyled,
          classNames: w == null ? void 0 : w.classNames,
          cancelButtonStyle: w == null ? void 0 : w.cancelButtonStyle,
          actionButtonStyle: w == null ? void 0 : w.actionButtonStyle,
          removeToast: V,
          toasts: N.filter((it) => it.position == X.position),
          heights: M.filter((it) => it.position == X.position),
          setHeights: $,
          expandByDefault: o,
          gap: h,
          loadingIcon: g,
          expanded: I,
          pauseWhenPageIsHidden: S,
          swipeDirections: e.swipeDirections
        });
      })) : null;
    }));
  });
  function $w({ words: e = [
    "Made",
    "Built",
    "Created",
    "Hacked",
    "Developed",
    "Coded"
  ] }) {
    const [t, n] = c.useState(""), [r, l] = c.useState(-1), [o, s] = c.useState(false), i = c.useRef(null), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", u = () => a[Math.floor(Math.random() * a.length)], d = () => {
      if (e.length <= 1)
        return 0;
      let f;
      do
        f = Math.floor(Math.random() * e.length);
      while (f === r);
      return f;
    }, m = async (f) => {
      for (let b = 0; b <= 20; b++)
        n(f.split("").map((h, g) => b === 20 || Math.random() < b / 20 ? f[g] || " " : u()).join("")), await new Promise((h) => setTimeout(h, 50));
    }, v = async () => {
      if (o)
        return;
      s(true);
      const f = d();
      for (n(e[f]), l(f); ; ) {
        await new Promise((w) => setTimeout(w, 1e3));
        const x = d();
        await m(e[x]), l(x);
      }
    };
    return c.useEffect(() => (v(), () => {
      s(false);
    }), []), p.jsx("span", {
      ref: i,
      children: t
    });
  }
  function jw() {
    const [e, t] = ol(), { isIncognito: n } = e.incognito;
    return c.useEffect(() => {
      t.detectIncognitoMode();
    }, [
      t
    ]), n ? p.jsx("div", {
      className: "w-full px-3 py-1.5",
      children: p.jsxs("div", {
        className: "flex items-center justify-between bg-gray-900/95 text-white rounded-md px-2.5 py-2",
        children: [
          p.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              p.jsx("svg", {
                className: "w-3.5 h-3.5 text-purple-400",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: p.jsx("path", {
                  fillRule: "evenodd",
                  d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
                  clipRule: "evenodd"
                })
              }),
              p.jsx("h3", {
                className: "text-xs font-medium",
                children: "Incognito Mode"
              })
            ]
          }),
          p.jsxs("span", {
            className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-900/40 text-purple-200",
            children: [
              p.jsx("span", {
                className: "w-1.5 h-1.5 mr-1.5 rounded-full bg-purple-400"
              }),
              "Active"
            ]
          })
        ]
      })
    }) : null;
  }
  const wr = [
    {
      url: "https://webextension.net",
      name: "WebExtension.net",
      description: "Chrome Extension Analytics"
    },
    {
      url: "https://www.gsctool.com",
      name: "GSCTool.com",
      description: "Bulk URL Removal Tool"
    },
    {
      url: "https://heyetsy.com",
      name: "HeyEtsy.com",
      description: "Etsy Analytics Tools for Sellers"
    },
    {
      url: "https://www.sortpin.com",
      name: "SortPin.com",
      description: "Pinterest sort extension"
    },
    {
      url: "https://chromewebstore.google.com/detail/clipboard-history-copy-pa/ipdbhhkchfhihbaongpicbkahpaiacnj",
      name: "Clipboard History",
      description: "Save and search your clipboard history"
    },
    {
      url: "https://chromewebstore.google.com/detail/google-ads-transparency-d/jfampojohgpjdmmmadhmljlnelgdaegb",
      name: "Ads Transparency",
      description: "Export Google Ads Transparency data"
    },
    {
      url: "https://chromewebstore.google.com/detail/etsy-email-extractor-down/emdncenjjchepknbfjmgddgpkkaffplm",
      name: "Etsy Email Extractor",
      description: "Extract Etsy order emails in CSV format"
    }
  ];
  function Lw() {
    const [t, n] = c.useState(0), [r, l] = c.useState(wr[0]), [o, s] = c.useState(5);
    if (c.useEffect(() => {
      const d = Math.floor(Math.random() * wr.length);
      n(d), l(wr[d]), s(5);
      const m = setInterval(() => {
        n((v) => {
          const f = (v + 1) % wr.length;
          return l(wr[f]), s(5), f;
        });
      }, 5 * 1e3);
      return () => clearInterval(m);
    }, []), c.useEffect(() => {
      const d = setInterval(() => {
        s((m) => m > 0 ? m - 1 : 0);
      }, 1e3);
      return () => clearInterval(d);
    }, []), !r)
      return null;
    const a = `https://www.google.com/s2/favicons?domain=${r.url.replace(/^https?:\/\//, "").split("/")[0]}&sz=64`, u = (d) => {
      const m = d.includes("?") ? "&" : "?";
      return `${d}${m}utm_source=bulk_url_opener&utm_medium=sidepanel&utm_campaign=rotation_ads`;
    };
    return p.jsx("div", {
      className: "w-full px-3 py-1.5",
      children: p.jsxs("div", {
        className: "w-full",
        children: [
          p.jsxs("div", {
            className: "flex items-center justify-between mb-1",
            children: [
              p.jsx("span", {
                className: "text-xs text-slate-400 font-medium",
                children: "Sponsored"
              }),
              p.jsxs("div", {
                className: "flex items-center gap-1",
                children: [
                  p.jsxs("span", {
                    className: "text-xs text-slate-400",
                    children: [
                      t + 1,
                      "/",
                      wr.length
                    ]
                  }),
                  p.jsxs("span", {
                    className: "text-xs bg-slate-100 text-slate-500 px-1 rounded-sm",
                    children: [
                      o,
                      "s"
                    ]
                  })
                ]
              })
            ]
          }),
          p.jsxs("a", {
            href: u(r.url),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 p-2 rounded-md bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 w-full hover:bg-gradient-to-r hover:from-slate-100 hover:to-blue-100",
            children: [
              p.jsx("div", {
                className: "flex-shrink-0 bg-white p-1 rounded-md border border-slate-200 w-10 h-10 flex items-center justify-center",
                children: p.jsx("img", {
                  src: a,
                  alt: `${r.name} icon`,
                  className: "w-8"
                })
              }),
              p.jsxs("div", {
                className: "flex flex-col flex-1 min-w-0",
                children: [
                  p.jsx("span", {
                    className: "text-xs font-semibold text-slate-800 truncate",
                    children: r.name
                  }),
                  p.jsx("span", {
                    className: "text-xs text-slate-500 truncate",
                    children: r.description
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  const Pw = chrome.runtime ? chrome.runtime.getManifest() : {
    version: "N/A"
  }, Ow = Pw.version;
  function Vc({ children: e }) {
    return ol(), p.jsxs("div", {
      className: "flex flex-col h-full bg-slate-50 text-slate-800",
      children: [
        p.jsx("header", {
          className: "bg-white text-slate-800 overflow-hidden shadow-sm",
          children: p.jsx("div", {
            className: "px-3 py-2",
            children: p.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                p.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    p.jsx("img", {
                      src: chrome.runtime.getURL("img/logo-196.png"),
                      className: "w-8 h-8 rounded-md border border-slate-200 shadow-sm bg-slate-50",
                      alt: Vf
                    }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("h1", {
                          className: "text-sm font-semibold text-slate-900",
                          children: Vf
                        }),
                        p.jsxs("p", {
                          className: "text-slate-600 font-light",
                          children: [
                            "v",
                            Ow ?? "1.0.0"
                          ]
                        })
                      ]
                    })
                  ]
                }),
                p.jsx("div", {
                  children: p.jsxs("a", {
                    href: "https://x.com/_trungpv",
                    target: "_blank",
                    className: "text-xs text-slate-900 hover:text-slate-800 flex items-center space-x-1",
                    children: [
                      p.jsx("span", {
                        children: "By"
                      }),
                      p.jsx("span", {
                        className: "font-semibold bg-slate-100 px-1.5 py-0.5 rounded-full",
                        children: "_trungpv"
                      })
                    ]
                  })
                })
              ]
            })
          })
        }),
        p.jsx(Lw, {}),
        p.jsx(jw, {}),
        p.jsx("main", {
          className: "flex-grow px-3 py-3 overflow-y-auto",
          children: e
        }),
        p.jsxs("footer", {
          className: "px-3 py-2 bg-slate-50 border-t border-slate-200 flex items-center justify-center gap-2",
          children: [
            p.jsxs("p", {
              className: "text-slate-500",
              children: [
                "\xA9 ",
                (/* @__PURE__ */ new Date()).getFullYear(),
                " "
              ]
            }),
            p.jsxs("a", {
              href: "https://x.com/_trungpv",
              target: "_blank",
              className: "text-slate-500 flex items-center space-x-1",
              children: [
                p.jsx($w, {}),
                p.jsx("span", {
                  children: "by"
                }),
                p.jsx("span", {
                  className: "font-semibold bg-slate-100 px-1.5 py-0.5 rounded-full",
                  children: "_trungpv"
                })
              ]
            })
          ]
        }),
        p.jsx(Tw, {})
      ]
    });
  }
  var Iw = typeof Element < "u", Mw = typeof Map == "function", Aw = typeof Set == "function", Fw = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function ms(e, t) {
    if (e === t)
      return true;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor)
        return false;
      var n, r, l;
      if (Array.isArray(e)) {
        if (n = e.length, n != t.length)
          return false;
        for (r = n; r-- !== 0; )
          if (!ms(e[r], t[r]))
            return false;
        return true;
      }
      var o;
      if (Mw && e instanceof Map && t instanceof Map) {
        if (e.size !== t.size)
          return false;
        for (o = e.entries(); !(r = o.next()).done; )
          if (!t.has(r.value[0]))
            return false;
        for (o = e.entries(); !(r = o.next()).done; )
          if (!ms(r.value[1], t.get(r.value[0])))
            return false;
        return true;
      }
      if (Aw && e instanceof Set && t instanceof Set) {
        if (e.size !== t.size)
          return false;
        for (o = e.entries(); !(r = o.next()).done; )
          if (!t.has(r.value[0]))
            return false;
        return true;
      }
      if (Fw && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
        if (n = e.length, n != t.length)
          return false;
        for (r = n; r-- !== 0; )
          if (e[r] !== t[r])
            return false;
        return true;
      }
      if (e.constructor === RegExp)
        return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
        return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
        return e.toString() === t.toString();
      if (l = Object.keys(e), n = l.length, n !== Object.keys(t).length)
        return false;
      for (r = n; r-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, l[r]))
          return false;
      if (Iw && e instanceof Element)
        return false;
      for (r = n; r-- !== 0; )
        if (!((l[r] === "_owner" || l[r] === "__v" || l[r] === "__o") && e.$$typeof) && !ms(e[l[r]], t[l[r]]))
          return false;
      return true;
    }
    return e !== e && t !== t;
  }
  var _w = function(t, n) {
    try {
      return ms(t, n);
    } catch (r) {
      if ((r.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw r;
    }
  };
  const Dw = mo(_w);
  var Uw = function(e, t, n, r, l, o, s, i) {
    if (!e) {
      var a;
      if (t === void 0)
        a = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var u = [
          n,
          r,
          l,
          o,
          s,
          i
        ], d = 0;
        a = new Error(t.replace(/%s/g, function() {
          return u[d++];
        })), a.name = "Invariant Violation";
      }
      throw a.framesToPop = 1, a;
    }
  }, zw = Uw;
  const Kf = mo(zw);
  var Bw = function(t, n, r, l) {
    var o = r ? r.call(l, t, n) : void 0;
    if (o !== void 0)
      return !!o;
    if (t === n)
      return true;
    if (typeof t != "object" || !t || typeof n != "object" || !n)
      return false;
    var s = Object.keys(t), i = Object.keys(n);
    if (s.length !== i.length)
      return false;
    for (var a = Object.prototype.hasOwnProperty.bind(n), u = 0; u < s.length; u++) {
      var d = s[u];
      if (!a(d))
        return false;
      var m = t[d], v = n[d];
      if (o = r ? r.call(l, m, v, d) : void 0, o === false || o === void 0 && m !== v)
        return false;
    }
    return true;
  };
  const Hw = mo(Bw);
  let sh, da, Gf, Zc, Ww, Tt, Br, Hr, Vw, Zw, fa, Yw, Kw, bl, Gw, Qw, ih, Xw, pa, Qf, qw, Cu, ah, Jw, e5, uh, t5, hs, dt, n5, r5, Nu, Qo, ch, ku, l5, dh, br, Ru, s5, Xf, El, i5, a5, qf, Yc;
  sh = ((e) => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(sh || {});
  da = {
    link: {
      rel: [
        "amphtml",
        "canonical",
        "alternate"
      ]
    },
    script: {
      type: [
        "application/ld+json"
      ]
    },
    meta: {
      charset: "",
      name: [
        "generator",
        "robots",
        "description"
      ],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site"
      ]
    }
  };
  Gf = Object.values(sh);
  Zc = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
  };
  Ww = Object.entries(Zc).reduce((e, [t, n]) => (e[n] = t, e), {});
  Tt = "data-rh";
  Br = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
  };
  Hr = (e, t) => {
    for (let n = e.length - 1; n >= 0; n -= 1) {
      const r = e[n];
      if (Object.prototype.hasOwnProperty.call(r, t))
        return r[t];
    }
    return null;
  };
  Vw = (e) => {
    let t = Hr(e, "title");
    const n = Hr(e, Br.TITLE_TEMPLATE);
    if (Array.isArray(t) && (t = t.join("")), n && t)
      return n.replace(/%s/g, () => t);
    const r = Hr(e, Br.DEFAULT_TITLE);
    return t || r || void 0;
  };
  Zw = (e) => Hr(e, Br.ON_CHANGE_CLIENT_STATE) || (() => {
  });
  fa = (e, t) => t.filter((n) => typeof n[e] < "u").map((n) => n[e]).reduce((n, r) => ({
    ...n,
    ...r
  }), {});
  Yw = (e, t) => t.filter((n) => typeof n.base < "u").map((n) => n.base).reverse().reduce((n, r) => {
    if (!n.length) {
      const l = Object.keys(r);
      for (let o = 0; o < l.length; o += 1) {
        const i = l[o].toLowerCase();
        if (e.indexOf(i) !== -1 && r[i])
          return n.concat(r);
      }
    }
    return n;
  }, []);
  Kw = (e) => console && typeof console.warn == "function" && console.warn(e);
  bl = (e, t, n) => {
    const r = {};
    return n.filter((l) => Array.isArray(l[e]) ? true : (typeof l[e] < "u" && Kw(`Helmet: ${e} should be of type "Array". Instead found type "${typeof l[e]}"`), false)).map((l) => l[e]).reverse().reduce((l, o) => {
      const s = {};
      o.filter((a) => {
        let u;
        const d = Object.keys(a);
        for (let v = 0; v < d.length; v += 1) {
          const f = d[v], x = f.toLowerCase();
          t.indexOf(x) !== -1 && !(u === "rel" && a[u].toLowerCase() === "canonical") && !(x === "rel" && a[x].toLowerCase() === "stylesheet") && (u = x), t.indexOf(f) !== -1 && (f === "innerHTML" || f === "cssText" || f === "itemprop") && (u = f);
        }
        if (!u || !a[u])
          return false;
        const m = a[u].toLowerCase();
        return r[u] || (r[u] = {}), s[u] || (s[u] = {}), r[u][m] ? false : (s[u][m] = true, true);
      }).reverse().forEach((a) => l.push(a));
      const i = Object.keys(s);
      for (let a = 0; a < i.length; a += 1) {
        const u = i[a], d = {
          ...r[u],
          ...s[u]
        };
        r[u] = d;
      }
      return l;
    }, []).reverse();
  };
  Gw = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let n = 0; n < e.length; n += 1)
        if (e[n][t])
          return true;
    }
    return false;
  };
  Qw = (e) => ({
    baseTag: Yw([
      "href"
    ], e),
    bodyAttributes: fa("bodyAttributes", e),
    defer: Hr(e, Br.DEFER),
    encode: Hr(e, Br.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: fa("htmlAttributes", e),
    linkTags: bl("link", [
      "rel",
      "href"
    ], e),
    metaTags: bl("meta", [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
    ], e),
    noscriptTags: bl("noscript", [
      "innerHTML"
    ], e),
    onChangeClientState: Zw(e),
    scriptTags: bl("script", [
      "src",
      "innerHTML"
    ], e),
    styleTags: bl("style", [
      "cssText"
    ], e),
    title: Vw(e),
    titleAttributes: fa("titleAttributes", e),
    prioritizeSeoTags: Gw(e, Br.PRIORITIZE_SEO_TAGS)
  });
  ih = (e) => Array.isArray(e) ? e.join("") : e;
  Xw = (e, t) => {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1)
      if (t[n[r]] && t[n[r]].includes(e[n[r]]))
        return true;
    return false;
  };
  pa = (e, t) => Array.isArray(e) ? e.reduce((n, r) => (Xw(r, t) ? n.priority.push(r) : n.default.push(r), n), {
    priority: [],
    default: []
  }) : {
    default: e,
    priority: []
  };
  Qf = (e, t) => ({
    ...e,
    [t]: void 0
  });
  qw = [
    "noscript",
    "script",
    "style"
  ];
  Cu = (e, t = true) => t === false ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  ah = (e) => Object.keys(e).reduce((t, n) => {
    const r = typeof e[n] < "u" ? `${n}="${e[n]}"` : `${n}`;
    return t ? `${t} ${r}` : r;
  }, "");
  Jw = (e, t, n, r) => {
    const l = ah(n), o = ih(t);
    return l ? `<${e} ${Tt}="true" ${l}>${Cu(o, r)}</${e}>` : `<${e} ${Tt}="true">${Cu(o, r)}</${e}>`;
  };
  e5 = (e, t, n = true) => t.reduce((r, l) => {
    const o = l, s = Object.keys(o).filter((u) => !(u === "innerHTML" || u === "cssText")).reduce((u, d) => {
      const m = typeof o[d] > "u" ? d : `${d}="${Cu(o[d], n)}"`;
      return u ? `${u} ${m}` : m;
    }, ""), i = o.innerHTML || o.cssText || "", a = qw.indexOf(e) === -1;
    return `${r}<${e} ${Tt}="true" ${s}${a ? "/>" : `>${i}</${e}>`}`;
  }, "");
  uh = (e, t = {}) => Object.keys(e).reduce((n, r) => {
    const l = Zc[r];
    return n[l || r] = e[r], n;
  }, t);
  t5 = (e, t, n) => {
    const r = {
      key: t,
      [Tt]: true
    }, l = uh(n, r);
    return [
      R.createElement("title", l, t)
    ];
  };
  hs = (e, t) => t.map((n, r) => {
    const l = {
      key: r,
      [Tt]: true
    };
    return Object.keys(n).forEach((o) => {
      const i = Zc[o] || o;
      if (i === "innerHTML" || i === "cssText") {
        const a = n.innerHTML || n.cssText;
        l.dangerouslySetInnerHTML = {
          __html: a
        };
      } else
        l[i] = n[o];
    }), R.createElement(e, l);
  });
  dt = (e, t, n = true) => {
    switch (e) {
      case "title":
        return {
          toComponent: () => t5(e, t.title, t.titleAttributes),
          toString: () => Jw(e, t.title, t.titleAttributes, n)
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return {
          toComponent: () => uh(t),
          toString: () => ah(t)
        };
      default:
        return {
          toComponent: () => hs(e, t),
          toString: () => e5(e, t, n)
        };
    }
  };
  n5 = ({ metaTags: e, linkTags: t, scriptTags: n, encode: r }) => {
    const l = pa(e, da.meta), o = pa(t, da.link), s = pa(n, da.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...hs("meta", l.priority),
          ...hs("link", o.priority),
          ...hs("script", s.priority)
        ],
        toString: () => `${dt("meta", l.priority, r)} ${dt("link", o.priority, r)} ${dt("script", s.priority, r)}`
      },
      metaTags: l.default,
      linkTags: o.default,
      scriptTags: s.default
    };
  };
  r5 = (e) => {
    const { baseTag: t, bodyAttributes: n, encode: r = true, htmlAttributes: l, noscriptTags: o, styleTags: s, title: i = "", titleAttributes: a, prioritizeSeoTags: u } = e;
    let { linkTags: d, metaTags: m, scriptTags: v } = e, f = {
      toComponent: () => {
      },
      toString: () => ""
    };
    return u && ({ priorityMethods: f, linkTags: d, metaTags: m, scriptTags: v } = n5(e)), {
      priority: f,
      base: dt("base", t, r),
      bodyAttributes: dt("bodyAttributes", n, r),
      htmlAttributes: dt("htmlAttributes", l, r),
      link: dt("link", d, r),
      meta: dt("meta", m, r),
      noscript: dt("noscript", o, r),
      script: dt("script", v, r),
      style: dt("style", s, r),
      title: dt("title", {
        title: i,
        titleAttributes: a
      }, r)
    };
  };
  Nu = r5;
  Qo = [];
  ch = !!(typeof window < "u" && window.document && window.document.createElement);
  ku = class {
    constructor(e, t) {
      __publicField(this, "instances", []);
      __publicField(this, "canUseDOM", ch);
      __publicField(this, "context");
      __publicField(this, "value", {
        setHelmet: (e) => {
          this.context.helmet = e;
        },
        helmetInstances: {
          get: () => this.canUseDOM ? Qo : this.instances,
          add: (e) => {
            (this.canUseDOM ? Qo : this.instances).push(e);
          },
          remove: (e) => {
            const t = (this.canUseDOM ? Qo : this.instances).indexOf(e);
            (this.canUseDOM ? Qo : this.instances).splice(t, 1);
          }
        }
      });
      this.context = e, this.canUseDOM = t || false, t || (e.helmet = Nu({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      }));
    }
  };
  l5 = {};
  dh = R.createContext(l5);
  o5 = (_a2 = class extends c.Component {
    constructor(t) {
      super(t);
      __publicField(this, "helmetData");
      this.helmetData = new ku(this.props.context || {}, _a2.canUseDOM);
    }
    render() {
      return R.createElement(dh.Provider, {
        value: this.helmetData.value
      }, this.props.children);
    }
  }, __publicField(_a2, "canUseDOM", ch), _a2);
  br = (e, t) => {
    const n = document.head || document.querySelector("head"), r = n.querySelectorAll(`${e}[${Tt}]`), l = [].slice.call(r), o = [];
    let s;
    return t && t.length && t.forEach((i) => {
      const a = document.createElement(e);
      for (const u in i)
        if (Object.prototype.hasOwnProperty.call(i, u))
          if (u === "innerHTML")
            a.innerHTML = i.innerHTML;
          else if (u === "cssText")
            a.styleSheet ? a.styleSheet.cssText = i.cssText : a.appendChild(document.createTextNode(i.cssText));
          else {
            const d = u, m = typeof i[d] > "u" ? "" : i[d];
            a.setAttribute(u, m);
          }
      a.setAttribute(Tt, "true"), l.some((u, d) => (s = d, a.isEqualNode(u))) ? l.splice(s, 1) : o.push(a);
    }), l.forEach((i) => {
      var _a3;
      return (_a3 = i.parentNode) == null ? void 0 : _a3.removeChild(i);
    }), o.forEach((i) => n.appendChild(i)), {
      oldTags: l,
      newTags: o
    };
  };
  Ru = (e, t) => {
    const n = document.getElementsByTagName(e)[0];
    if (!n)
      return;
    const r = n.getAttribute(Tt), l = r ? r.split(",") : [], o = [
      ...l
    ], s = Object.keys(t);
    for (const i of s) {
      const a = t[i] || "";
      n.getAttribute(i) !== a && n.setAttribute(i, a), l.indexOf(i) === -1 && l.push(i);
      const u = o.indexOf(i);
      u !== -1 && o.splice(u, 1);
    }
    for (let i = o.length - 1; i >= 0; i -= 1)
      n.removeAttribute(o[i]);
    l.length === o.length ? n.removeAttribute(Tt) : n.getAttribute(Tt) !== s.join(",") && n.setAttribute(Tt, s.join(","));
  };
  s5 = (e, t) => {
    typeof e < "u" && document.title !== e && (document.title = ih(e)), Ru("title", t);
  };
  Xf = (e, t) => {
    const { baseTag: n, bodyAttributes: r, htmlAttributes: l, linkTags: o, metaTags: s, noscriptTags: i, onChangeClientState: a, scriptTags: u, styleTags: d, title: m, titleAttributes: v } = e;
    Ru("body", r), Ru("html", l), s5(m, v);
    const f = {
      baseTag: br("base", n),
      linkTags: br("link", o),
      metaTags: br("meta", s),
      noscriptTags: br("noscript", i),
      scriptTags: br("script", u),
      styleTags: br("style", d)
    }, x = {}, w = {};
    Object.keys(f).forEach((b) => {
      const { newTags: h, oldTags: g } = f[b];
      h.length && (x[b] = h), g.length && (w[b] = f[b].oldTags);
    }), t && t(), a(e, x, w);
  };
  El = null;
  i5 = (e) => {
    El && cancelAnimationFrame(El), e.defer ? El = requestAnimationFrame(() => {
      Xf(e, () => {
        El = null;
      });
    }) : (Xf(e), El = null);
  };
  a5 = i5;
  qf = class extends c.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "rendered", false);
    }
    shouldComponentUpdate(e) {
      return !Hw(e, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: e } = this.props.context;
      e.remove(this), this.emitChange();
    }
    emitChange() {
      const { helmetInstances: e, setHelmet: t } = this.props.context;
      let n = null;
      const r = Qw(e.get().map((l) => {
        const o = {
          ...l.props
        };
        return delete o.context, o;
      }));
      o5.canUseDOM ? a5(r) : Nu && (n = Nu(r)), t(n);
    }
    init() {
      if (this.rendered)
        return;
      this.rendered = true;
      const { helmetInstances: e } = this.props.context;
      e.add(this), this.emitChange();
    }
    render() {
      return this.init(), null;
    }
  };
  Yc = (_b2 = class extends c.Component {
    shouldComponentUpdate(e) {
      return !Dw(Qf(this.props, "helmetData"), Qf(e, "helmetData"));
    }
    mapNestedChildrenToProps(e, t) {
      if (!t)
        return null;
      switch (e.type) {
        case "script":
        case "noscript":
          return {
            innerHTML: t
          };
        case "style":
          return {
            cssText: t
          };
        default:
          throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`);
      }
    }
    flattenArrayTypeChildren(e, t, n, r) {
      return {
        ...t,
        [e.type]: [
          ...t[e.type] || [],
          {
            ...n,
            ...this.mapNestedChildrenToProps(e, r)
          }
        ]
      };
    }
    mapObjectTypeChildren(e, t, n, r) {
      switch (e.type) {
        case "title":
          return {
            ...t,
            [e.type]: r,
            titleAttributes: {
              ...n
            }
          };
        case "body":
          return {
            ...t,
            bodyAttributes: {
              ...n
            }
          };
        case "html":
          return {
            ...t,
            htmlAttributes: {
              ...n
            }
          };
        default:
          return {
            ...t,
            [e.type]: {
              ...n
            }
          };
      }
    }
    mapArrayTypeChildrenToProps(e, t) {
      let n = {
        ...t
      };
      return Object.keys(e).forEach((r) => {
        n = {
          ...n,
          [r]: e[r]
        };
      }), n;
    }
    warnOnInvalidChildren(e, t) {
      return Kf(Gf.some((n) => e.type === n), typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${Gf.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`), Kf(!t || typeof t == "string" || Array.isArray(t) && !t.some((n) => typeof n != "string"), `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`), true;
    }
    mapChildrenToProps(e, t) {
      let n = {};
      return R.Children.forEach(e, (r) => {
        if (!r || !r.props)
          return;
        const { children: l, ...o } = r.props, s = Object.keys(o).reduce((a, u) => (a[Ww[u] || u] = o[u], a), {});
        let { type: i } = r;
        switch (typeof i == "symbol" ? i = i.toString() : this.warnOnInvalidChildren(r, l), i) {
          case "Symbol(react.fragment)":
            t = this.mapChildrenToProps(l, t);
            break;
          case "link":
          case "meta":
          case "noscript":
          case "script":
          case "style":
            n = this.flattenArrayTypeChildren(r, n, s, l);
            break;
          default:
            t = this.mapObjectTypeChildren(r, t, s, l);
            break;
        }
      }), this.mapArrayTypeChildrenToProps(n, t);
    }
    render() {
      const { children: e, ...t } = this.props;
      let n = {
        ...t
      }, { helmetData: r } = t;
      if (e && (n = this.mapChildrenToProps(e, n)), r && !(r instanceof ku)) {
        const l = r;
        r = new ku(l.context, true), delete n.helmetData;
      }
      return r ? R.createElement(qf, {
        ...n,
        context: r.value
      }) : R.createElement(dh.Consumer, null, (l) => R.createElement(qf, {
        ...n,
        context: l
      }));
    }
  }, __publicField(_b2, "defaultProps", {
    defer: true,
    encodeSpecialCharacters: true,
    prioritizeSeoTags: false
  }), _b2);
  const gs = (e) => {
    try {
      return new URL(e.trim()), true;
    } catch {
      return false;
    }
  }, u5 = (e, t = false) => {
    if (!e || typeof e != "string")
      return [];
    const n = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,63}\b([-a-zA-Z0-9()'@:%_\+.~#?!&//=]*)/gi, r = /[()]|\.$/g;
    return (e.match(n) || []).map((o) => {
      let s = o.replace(r, "");
      return t ? s.toLowerCase() : s;
    }).filter((o, s, i) => i.indexOf(o) === s);
  }, c5 = (e) => `https://www.google.com/search?q=${encodeURIComponent(e.trim())}`, vs = (e, t = {}) => {
    if (!e)
      return [];
    const { handleNonUrls: n = false, randomOrder: r = false, reverseOrder: l = false, urlLimit: o = 0 } = t;
    let s = e.split(`
`).map((i) => i.trim()).filter((i) => i.length > 0);
    return s = s.map((i) => {
      let a = i;
      return gs(a) ? (!i.startsWith("http://") && !i.startsWith("https://") && (a = "https://" + i), a) : n ? c5(i) : null;
    }).filter((i) => i !== null), s = [
      ...new Set(s)
    ], r && (s = s.sort(() => Math.random() - 0.5)), l && (s = s.reverse()), o > 0 && s.length > o && (s = s.slice(0, o)), s;
  }, ma = async (e, t = {}, n = {}, r = () => {
  }) => {
    if (!e || e.length === 0)
      return [];
    const { batchSize: l = 1, delaySeconds: o = 1, openInNewWindow: s = false, removeOpenedUrls: i = false, openInSingleTab: a = false, waitForTabLoad: u = false, closeTabAfterLoad: d = false, closeTabDelay: m = 2 } = t;
    if (a)
      return d5(e, o, n, r, u, d, m);
    const v = [];
    for (let b = 0; b < e.length; b += l)
      v.push(e.slice(b, b + l));
    const f = [], x = e.length, w = [];
    for (let b = 0; b < v.length && !n.stopRequested; b++) {
      n.isPaused && await new Promise((y) => {
        n.resumeCallback = y;
      });
      const h = v[b];
      let g = null;
      if (s && h.length > 0) {
        g = await chrome.windows.create({
          url: h[0],
          focused: true
        }), f.push(h[0]);
        const y = await chrome.tabs.query({
          windowId: g.id
        });
        if (y.length > 0) {
          const E = y[0].id;
          w.push(E), d && m > 0 && (async () => (u && await Ir(E).catch(() => {
          }), setTimeout(() => {
            chrome.tabs.get(E, (N) => {
              N && !chrome.runtime.lastError && chrome.tabs.remove(E).catch((T) => {
                console.error("Error closing first tab:", T);
              });
            });
          }, m * 1e3)))();
        }
        for (let E = 1; E < h.length && !n.stopRequested; E++) {
          n.isPaused && await new Promise((N) => {
            n.resumeCallback = N;
          });
          const S = await chrome.tabs.create({
            url: h[E],
            windowId: g.id,
            active: false
          });
          f.push(h[E]), w.push(S.id), d && m > 0 && (async () => (u && await Ir(S.id).catch(() => {
          }), setTimeout(() => {
            chrome.tabs.get(S.id, (T) => {
              T && !chrome.runtime.lastError && (s ? chrome.tabs.query({
                windowId: g.id
              }, (k) => {
                k.length > 1 && chrome.tabs.remove(S.id).catch((M) => {
                  console.error("Error closing tab in window:", M);
                });
              }) : chrome.tabs.remove(S.id).catch((k) => {
                console.error("Error closing tab:", k);
              }));
            });
          }, m * 1e3)))(), r({
            processed: f.length,
            total: x,
            url: h[E],
            batchNumber: b + 1,
            totalBatches: v.length
          });
        }
        r({
          processed: f.length,
          total: x,
          url: h[0],
          batchNumber: b + 1,
          totalBatches: v.length
        });
      } else
        for (const y of h) {
          if (n.stopRequested)
            break;
          n.isPaused && await new Promise((S) => {
            n.resumeCallback = S;
          });
          const E = await chrome.tabs.create({
            url: y,
            active: false
          });
          f.push(y), w.push(E.id), d && m > 0 && (async () => (u && await Ir(E.id).catch(() => {
          }), setTimeout(() => {
            chrome.tabs.get(E.id, (N) => {
              N && !chrome.runtime.lastError && chrome.tabs.remove(E.id).catch((T) => {
                console.error("Error closing tab:", T);
              });
            });
          }, m * 1e3)))(), r({
            processed: f.length,
            total: x,
            url: y,
            batchNumber: b + 1,
            totalBatches: v.length
          });
        }
      u && await Promise.all(w.map((y) => Ir(y))), w.length = 0, b < v.length - 1 && o > 0 && !n.stopRequested && (n.isPaused && await new Promise((y) => {
        n.resumeCallback = y;
      }), await new Promise((y) => setTimeout(y, o * 1e3)));
    }
    return f;
  }, d5 = async (e, t = 1, n = {}, r = () => {
  }, l = true, o = false, s = 2) => {
    if (!e || e.length === 0)
      return [];
    const i = [], a = e.length, u = await chrome.tabs.create({
      url: e[0],
      active: true
    });
    i.push(e[0]), r({
      processed: i.length,
      total: a,
      url: e[0],
      batchNumber: 1,
      totalBatches: 1
    });
    for (let d = 1; d < e.length && !n.stopRequested; d++)
      n.isPaused && await new Promise((m) => {
        n.resumeCallback = m;
      }), t > 0 && await new Promise((m) => setTimeout(m, t * 1e3)), l && await Ir(u.id), await chrome.tabs.update(u.id, {
        url: e[d]
      }), i.push(e[d]), r({
        processed: i.length,
        total: a,
        url: e[d],
        batchNumber: 1,
        totalBatches: 1
      });
    return o && s > 0 && (l && await Ir(u.id).catch(() => {
    }), console.log(`Setting up auto-close timer for single tab mode: ${s} seconds`), setTimeout(() => {
      chrome.tabs.get(u.id, (d) => {
        d && !chrome.runtime.lastError ? (console.log(`Closing single tab with ID: ${u.id}`), chrome.tabs.remove(u.id).catch((m) => {
          console.error("Error closing single tab:", m);
        })) : console.warn(`Tab ${u.id} not found or already closed`);
      });
    }, s * 1e3)), i;
  }, Ir = (e) => new Promise((t) => {
    const n = () => {
      chrome.tabs.get(e, (r) => {
        if (!r) {
          t();
          return;
        }
        r.status === "complete" ? t() : setTimeout(n, 100);
      });
    };
    n();
  }), ha = (e, t) => {
    if (!e || !t || t.length === 0)
      return e;
    const n = new Set(t);
    return e.split(`
`).filter((r) => {
      const l = r.trim();
      if (!l)
        return true;
      const o = !l.startsWith("http://") && !l.startsWith("https://") ? "https://" + l : l;
      return !n.has(o);
    }).join(`
`);
  };
  function f5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      d: "M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
    }));
  }
  const p5 = c.forwardRef(f5), ph = p5;
  function m5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      d: "M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z"
    }), c.createElement("path", {
      fillRule: "evenodd",
      d: "M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5ZM7 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z",
      clipRule: "evenodd"
    }));
  }
  const h5 = c.forwardRef(m5), g5 = h5;
  function v5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      d: "M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"
    }), c.createElement("path", {
      d: "M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"
    }));
  }
  const y5 = c.forwardRef(v5), x5 = y5;
  function w5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z",
      clipRule: "evenodd"
    }));
  }
  const b5 = c.forwardRef(w5), E5 = b5;
  function S5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M10 4.5c1.215 0 2.417.055 3.604.162a.68.68 0 0 1 .615.597c.124 1.038.208 2.088.25 3.15l-1.689-1.69a.75.75 0 0 0-1.06 1.061l2.999 3a.75.75 0 0 0 1.06 0l3.001-3a.75.75 0 1 0-1.06-1.06l-1.748 1.747a41.31 41.31 0 0 0-.264-3.386 2.18 2.18 0 0 0-1.97-1.913 41.512 41.512 0 0 0-7.477 0 2.18 2.18 0 0 0-1.969 1.913 41.16 41.16 0 0 0-.16 1.61.75.75 0 1 0 1.495.12c.041-.52.093-1.038.154-1.552a.68.68 0 0 1 .615-.597A40.012 40.012 0 0 1 10 4.5ZM5.281 9.22a.75.75 0 0 0-1.06 0l-3.001 3a.75.75 0 1 0 1.06 1.06l1.748-1.747c.042 1.141.13 2.27.264 3.386a2.18 2.18 0 0 0 1.97 1.913 41.533 41.533 0 0 0 7.477 0 2.18 2.18 0 0 0 1.969-1.913c.064-.534.117-1.071.16-1.61a.75.75 0 1 0-1.495-.12c-.041.52-.093 1.037-.154 1.552a.68.68 0 0 1-.615.597 40.013 40.013 0 0 1-7.208 0 .68.68 0 0 1-.615-.597 39.785 39.785 0 0 1-.25-3.15l1.689 1.69a.75.75 0 0 0 1.06-1.061l-2.999-3Z",
      clipRule: "evenodd"
    }));
  }
  const C5 = c.forwardRef(S5), Tu = C5;
  function N5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z",
      clipRule: "evenodd"
    }));
  }
  const k5 = c.forwardRef(N5), Kc = k5;
  function R5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z",
      clipRule: "evenodd"
    }));
  }
  const T5 = c.forwardRef(R5), $5 = T5;
  function j5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M12.207 2.232a.75.75 0 0 0 .025 1.06l4.146 3.958H6.375a5.375 5.375 0 0 0 0 10.75H9.25a.75.75 0 0 0 0-1.5H6.375a3.875 3.875 0 0 1 0-7.75h10.003l-4.146 3.957a.75.75 0 0 0 1.036 1.085l5.5-5.25a.75.75 0 0 0 0-1.085l-5.5-5.25a.75.75 0 0 0-1.06.025Z",
      clipRule: "evenodd"
    }));
  }
  const L5 = c.forwardRef(j5), P5 = L5;
  function O5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M17.768 7.793a.75.75 0 0 1-1.06-.025L12.75 3.622v10.003a5.375 5.375 0 0 1-10.75 0V10.75a.75.75 0 0 1 1.5 0v2.875a3.875 3.875 0 0 0 7.75 0V3.622L7.293 7.768a.75.75 0 0 1-1.086-1.036l5.25-5.5a.75.75 0 0 1 1.085 0l5.25 5.5a.75.75 0 0 1-.024 1.06Z",
      clipRule: "evenodd"
    }));
  }
  const I5 = c.forwardRef(O5), mh = I5;
  function M5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M13.2 2.24a.75.75 0 0 0 .04 1.06l2.1 1.95H6.75a.75.75 0 0 0 0 1.5h8.59l-2.1 1.95a.75.75 0 1 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 0 0-1.06.04Zm-6.4 8a.75.75 0 0 0-1.06-.04l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 1 0 1.02-1.1l-2.1-1.95h8.59a.75.75 0 0 0 0-1.5H4.66l2.1-1.95a.75.75 0 0 0 .04-1.06Z",
      clipRule: "evenodd"
    }));
  }
  const A5 = c.forwardRef(M5), Jf = A5;
  function F5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z",
      clipRule: "evenodd"
    }));
  }
  const _5 = c.forwardRef(F5), Gc = _5;
  function D5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
      clipRule: "evenodd"
    }));
  }
  const U5 = c.forwardRef(D5), Qc = U5;
  function z5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      clipRule: "evenodd"
    }));
  }
  const B5 = c.forwardRef(z5), hh = B5;
  function H5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
      clipRule: "evenodd"
    }));
  }
  const W5 = c.forwardRef(H5), V5 = W5;
  function Z5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M15.988 3.012A2.25 2.25 0 0 1 18 5.25v6.5A2.25 2.25 0 0 1 15.75 14H13.5v-3.379a3 3 0 0 0-.879-2.121l-3.12-3.121a3 3 0 0 0-1.402-.791 2.252 2.252 0 0 1 1.913-1.576A2.25 2.25 0 0 1 12.25 1h1.5a2.25 2.25 0 0 1 2.238 2.012ZM11.5 3.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v.25h-3v-.25Z",
      clipRule: "evenodd"
    }), c.createElement("path", {
      d: "M3.5 6A1.5 1.5 0 0 0 2 7.5v9A1.5 1.5 0 0 0 3.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L8.44 6.439A1.5 1.5 0 0 0 7.378 6H3.5Z"
    }));
  }
  const Y5 = c.forwardRef(Z5), K5 = Y5;
  function G5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z",
      clipRule: "evenodd"
    }));
  }
  const Q5 = c.forwardRef(G5), tr = Q5;
  function X5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
      clipRule: "evenodd"
    }));
  }
  const q5 = c.forwardRef(X5), Vs = q5;
  function J5({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      clipRule: "evenodd"
    }));
  }
  const e2 = c.forwardRef(J5), t2 = e2;
  function n2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z",
      clipRule: "evenodd"
    }));
  }
  const r2 = c.forwardRef(n2), l2 = r2;
  function o2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
      clipRule: "evenodd"
    }));
  }
  const s2 = c.forwardRef(o2), i2 = s2;
  function a2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      d: "M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"
    }), c.createElement("path", {
      d: "M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"
    }));
  }
  const u2 = c.forwardRef(a2), $u = u2;
  function c2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z",
      clipRule: "evenodd"
    }));
  }
  const d2 = c.forwardRef(c2), ju = d2;
  function f2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z",
      clipRule: "evenodd"
    }));
  }
  const p2 = c.forwardRef(f2), ep = p2;
  function m2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "m5.965 4.904 9.131 9.131a6.5 6.5 0 0 0-9.131-9.131Zm8.07 10.192L4.904 5.965a6.5 6.5 0 0 0 9.131 9.131ZM4.343 4.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 4.343 4.343Z",
      clipRule: "evenodd"
    }));
  }
  const h2 = c.forwardRef(m2), g2 = h2;
  function v2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      d: "M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z"
    }));
  }
  const y2 = c.forwardRef(v2), x2 = y2;
  function w2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      d: "M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"
    }));
  }
  const b2 = c.forwardRef(w2), tp = b2;
  function E2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
    }));
  }
  const S2 = c.forwardRef(E2), Lu = S2;
  function C2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      clipRule: "evenodd"
    }));
  }
  const N2 = c.forwardRef(C2), Sl = N2;
  function k2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      d: "M5.25 3A2.25 2.25 0 0 0 3 5.25v9.5A2.25 2.25 0 0 0 5.25 17h9.5A2.25 2.25 0 0 0 17 14.75v-9.5A2.25 2.25 0 0 0 14.75 3h-9.5Z"
    }));
  }
  const R2 = c.forwardRef(k2), T2 = R2;
  function $2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      clipRule: "evenodd"
    }));
  }
  const j2 = c.forwardRef($2), L2 = j2;
  function P2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z",
      clipRule: "evenodd"
    }));
  }
  const O2 = c.forwardRef(P2), gh = O2;
  function I2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      d: "M14 17h2.75A2.25 2.25 0 0 0 19 14.75v-9.5A2.25 2.25 0 0 0 16.75 3H14v14ZM12.5 3h-5v14h5V3ZM3.25 3H6v14H3.25A2.25 2.25 0 0 1 1 14.75v-9.5A2.25 2.25 0 0 1 3.25 3Z"
    }));
  }
  const M2 = c.forwardRef(I2), Zs = M2;
  function A2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM3.5 8v7.75c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75V8h-13ZM5 4.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75H5ZM7.25 5A.75.75 0 0 1 8 4.25h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V5ZM11 4.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75H11Z",
      clipRule: "evenodd"
    }));
  }
  const F2 = c.forwardRef(A2), Ys = F2;
  function _2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z",
      clipRule: "evenodd"
    }));
  }
  const D2 = c.forwardRef(_2), Pu = D2;
  function U2({ title: e, titleId: t, ...n }, r) {
    return c.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon",
      ref: r,
      "aria-labelledby": t
    }, n), e ? c.createElement("title", {
      id: t
    }, e) : null, c.createElement("path", {
      d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
    }));
  }
  const z2 = c.forwardRef(U2), vh = z2, yh = typeof document < "u" ? R.useLayoutEffect : () => {
  };
  function B2(e) {
    const t = c.useRef(null);
    return yh(() => {
      t.current = e;
    }, [
      e
    ]), c.useCallback((...n) => {
      const r = t.current;
      return r == null ? void 0 : r(...n);
    }, []);
  }
  const Fn = (e) => {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
  }, Kn = (e) => e && "window" in e && e.window === e ? e : Fn(e).defaultView || window;
  function H2(e) {
    return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
  }
  function W2(e) {
    return H2(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
  }
  let V2 = false;
  function Xc() {
    return V2;
  }
  function xh(e, t) {
    if (!Xc())
      return t && e ? e.contains(t) : false;
    if (!e || !t)
      return false;
    let n = t;
    for (; n !== null; ) {
      if (n === e)
        return true;
      n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : W2(n) ? n = n.host : n = n.parentNode;
    }
    return false;
  }
  const Ou = (e = document) => {
    var t;
    if (!Xc())
      return e.activeElement;
    let n = e.activeElement;
    for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); )
      n = n.shadowRoot.activeElement;
    return n;
  };
  function wh(e) {
    return Xc() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
  }
  function Z2(e) {
    var t;
    return typeof window > "u" || window.navigator == null ? false : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
  }
  function Y2(e) {
    var t;
    return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : false;
  }
  function bh(e) {
    let t = null;
    return () => (t == null && (t = e()), t);
  }
  const K2 = bh(function() {
    return Y2(/^Mac/i);
  }), G2 = bh(function() {
    return Z2(/Android/i);
  });
  function Eh() {
    let e = c.useRef(/* @__PURE__ */ new Map()), t = c.useCallback((l, o, s, i) => {
      let a = (i == null ? void 0 : i.once) ? (...u) => {
        e.current.delete(s), s(...u);
      } : s;
      e.current.set(s, {
        type: o,
        eventTarget: l,
        fn: a,
        options: i
      }), l.addEventListener(o, a, i);
    }, []), n = c.useCallback((l, o, s, i) => {
      var a;
      let u = ((a = e.current.get(s)) === null || a === void 0 ? void 0 : a.fn) || s;
      l.removeEventListener(o, u, i), e.current.delete(s);
    }, []), r = c.useCallback(() => {
      e.current.forEach((l, o) => {
        n(l.eventTarget, l.type, o, l.options);
      });
    }, [
      n
    ]);
    return c.useEffect(() => r, [
      r
    ]), {
      addGlobalListener: t,
      removeGlobalListener: n,
      removeAllGlobalListeners: r
    };
  }
  function Q2(e) {
    return e.mozInputSource === 0 && e.isTrusted ? true : G2() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
  }
  function Sh(e) {
    let t = e;
    return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
    }, t;
  }
  function X2(e, t) {
    Object.defineProperty(e, "target", {
      value: t
    }), Object.defineProperty(e, "currentTarget", {
      value: t
    });
  }
  function Ch(e) {
    let t = c.useRef({
      isFocused: false,
      observer: null
    });
    yh(() => {
      const r = t.current;
      return () => {
        r.observer && (r.observer.disconnect(), r.observer = null);
      };
    }, []);
    let n = B2((r) => {
      e == null ? void 0 : e(r);
    });
    return c.useCallback((r) => {
      if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
        t.current.isFocused = true;
        let l = r.target, o = (s) => {
          if (t.current.isFocused = false, l.disabled) {
            let i = Sh(s);
            n(i);
          }
          t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
        };
        l.addEventListener("focusout", o, {
          once: true
        }), t.current.observer = new MutationObserver(() => {
          if (t.current.isFocused && l.disabled) {
            var s;
            (s = t.current.observer) === null || s === void 0 || s.disconnect();
            let i = l === document.activeElement ? null : document.activeElement;
            l.dispatchEvent(new FocusEvent("blur", {
              relatedTarget: i
            })), l.dispatchEvent(new FocusEvent("focusout", {
              bubbles: true,
              relatedTarget: i
            }));
          }
        }), t.current.observer.observe(l, {
          attributes: true,
          attributeFilter: [
            "disabled"
          ]
        });
      }
    }, [
      n
    ]);
  }
  let q2 = false, Eo = null, Iu = /* @__PURE__ */ new Set(), Bl = /* @__PURE__ */ new Map(), ar = false, Mu = false;
  const J2 = {
    Tab: true,
    Escape: true
  };
  function qc(e, t) {
    for (let n of Iu)
      n(e, t);
  }
  function eb(e) {
    return !(e.metaKey || !K2() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
  }
  function Ks(e) {
    ar = true, eb(e) && (Eo = "keyboard", qc("keyboard", e));
  }
  function Wr(e) {
    Eo = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (ar = true, qc("pointer", e));
  }
  function Nh(e) {
    Q2(e) && (ar = true, Eo = "virtual");
  }
  function kh(e) {
    e.target === window || e.target === document || q2 || !e.isTrusted || (!ar && !Mu && (Eo = "virtual", qc("virtual", e)), ar = false, Mu = false);
  }
  function Rh() {
    ar = false, Mu = true;
  }
  function Au(e) {
    if (typeof window > "u" || Bl.get(Kn(e)))
      return;
    const t = Kn(e), n = Fn(e);
    let r = t.HTMLElement.prototype.focus;
    t.HTMLElement.prototype.focus = function() {
      ar = true, r.apply(this, arguments);
    }, n.addEventListener("keydown", Ks, true), n.addEventListener("keyup", Ks, true), n.addEventListener("click", Nh, true), t.addEventListener("focus", kh, true), t.addEventListener("blur", Rh, false), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", Wr, true), n.addEventListener("pointermove", Wr, true), n.addEventListener("pointerup", Wr, true)), t.addEventListener("beforeunload", () => {
      Th(e);
    }, {
      once: true
    }), Bl.set(t, {
      focus: r
    });
  }
  const Th = (e, t) => {
    const n = Kn(e), r = Fn(e);
    t && r.removeEventListener("DOMContentLoaded", t), Bl.has(n) && (n.HTMLElement.prototype.focus = Bl.get(n).focus, r.removeEventListener("keydown", Ks, true), r.removeEventListener("keyup", Ks, true), r.removeEventListener("click", Nh, true), n.removeEventListener("focus", kh, true), n.removeEventListener("blur", Rh, false), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", Wr, true), r.removeEventListener("pointermove", Wr, true), r.removeEventListener("pointerup", Wr, true)), Bl.delete(n));
  };
  function tb(e) {
    const t = Fn(e);
    let n;
    return t.readyState !== "loading" ? Au(e) : (n = () => {
      Au(e);
    }, t.addEventListener("DOMContentLoaded", n)), () => Th(e, n);
  }
  typeof document < "u" && tb();
  function $h() {
    return Eo !== "pointer";
  }
  const nb = /* @__PURE__ */ new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
  ]);
  function rb(e, t, n) {
    let r = Fn(n == null ? void 0 : n.target);
    const l = typeof window < "u" ? Kn(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, o = typeof window < "u" ? Kn(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? Kn(n == null ? void 0 : n.target).HTMLElement : HTMLElement, i = typeof window < "u" ? Kn(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
    return e = e || r.activeElement instanceof l && !nb.has(r.activeElement.type) || r.activeElement instanceof o || r.activeElement instanceof s && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof i && !J2[n.key]);
  }
  function lb(e, t, n) {
    Au(), c.useEffect(() => {
      let r = (l, o) => {
        rb(!!(n == null ? void 0 : n.isTextInput), l, o) && e($h());
      };
      return Iu.add(r), () => {
        Iu.delete(r);
      };
    }, t);
  }
  function ob(e) {
    let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: l } = e;
    const o = c.useCallback((a) => {
      if (a.target === a.currentTarget)
        return r && r(a), l && l(false), true;
    }, [
      r,
      l
    ]), s = Ch(o), i = c.useCallback((a) => {
      const u = Fn(a.target), d = u ? Ou(u) : Ou();
      a.target === a.currentTarget && d === wh(a.nativeEvent) && (n && n(a), l && l(true), s(a));
    }, [
      l,
      n,
      s
    ]);
    return {
      focusProps: {
        onFocus: !t && (n || l || r) ? i : void 0,
        onBlur: !t && (r || l) ? o : void 0
      }
    };
  }
  function sb(e) {
    let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: l } = e, o = c.useRef({
      isFocusWithin: false
    }), { addGlobalListener: s, removeAllGlobalListeners: i } = Eh(), a = c.useCallback((m) => {
      m.currentTarget.contains(m.target) && o.current.isFocusWithin && !m.currentTarget.contains(m.relatedTarget) && (o.current.isFocusWithin = false, i(), n && n(m), l && l(false));
    }, [
      n,
      l,
      o,
      i
    ]), u = Ch(a), d = c.useCallback((m) => {
      if (!m.currentTarget.contains(m.target))
        return;
      const v = Fn(m.target), f = Ou(v);
      if (!o.current.isFocusWithin && f === wh(m.nativeEvent)) {
        r && r(m), l && l(true), o.current.isFocusWithin = true, u(m);
        let x = m.currentTarget;
        s(v, "focus", (w) => {
          if (o.current.isFocusWithin && !xh(x, w.target)) {
            let b = new v.defaultView.FocusEvent("blur", {
              relatedTarget: w.target
            });
            X2(b, x);
            let h = Sh(b);
            a(h);
          }
        }, {
          capture: true
        });
      }
    }, [
      r,
      l,
      u,
      s,
      a
    ]);
    return t ? {
      focusWithinProps: {
        onFocus: void 0,
        onBlur: void 0
      }
    } : {
      focusWithinProps: {
        onFocus: d,
        onBlur: a
      }
    };
  }
  let Fu = false, ga = 0;
  function ib() {
    Fu = true, setTimeout(() => {
      Fu = false;
    }, 50);
  }
  function np(e) {
    e.pointerType === "touch" && ib();
  }
  function ab() {
    if (!(typeof document > "u"))
      return typeof PointerEvent < "u" && document.addEventListener("pointerup", np), ga++, () => {
        ga--, !(ga > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", np);
      };
  }
  function jh(e) {
    let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: l } = e, [o, s] = c.useState(false), i = c.useRef({
      isHovered: false,
      ignoreEmulatedMouseEvents: false,
      pointerType: "",
      target: null
    }).current;
    c.useEffect(ab, []);
    let { addGlobalListener: a, removeAllGlobalListeners: u } = Eh(), { hoverProps: d, triggerHoverEnd: m } = c.useMemo(() => {
      let v = (w, b) => {
        if (i.pointerType = b, l || b === "touch" || i.isHovered || !w.currentTarget.contains(w.target))
          return;
        i.isHovered = true;
        let h = w.currentTarget;
        i.target = h, a(Fn(w.target), "pointerover", (g) => {
          i.isHovered && i.target && !xh(i.target, g.target) && f(g, g.pointerType);
        }, {
          capture: true
        }), t && t({
          type: "hoverstart",
          target: h,
          pointerType: b
        }), n && n(true), s(true);
      }, f = (w, b) => {
        let h = i.target;
        i.pointerType = "", i.target = null, !(b === "touch" || !i.isHovered || !h) && (i.isHovered = false, u(), r && r({
          type: "hoverend",
          target: h,
          pointerType: b
        }), n && n(false), s(false));
      }, x = {};
      return typeof PointerEvent < "u" && (x.onPointerEnter = (w) => {
        Fu && w.pointerType === "mouse" || v(w, w.pointerType);
      }, x.onPointerLeave = (w) => {
        !l && w.currentTarget.contains(w.target) && f(w, w.pointerType);
      }), {
        hoverProps: x,
        triggerHoverEnd: f
      };
    }, [
      t,
      n,
      r,
      l,
      i,
      a,
      u
    ]);
    return c.useEffect(() => {
      l && m({
        currentTarget: i.target
      }, i.pointerType);
    }, [
      l
    ]), {
      hoverProps: d,
      isHovered: o
    };
  }
  function Jc(e = {}) {
    let { autoFocus: t = false, isTextInput: n, within: r } = e, l = c.useRef({
      isFocused: false,
      isFocusVisible: t || $h()
    }), [o, s] = c.useState(false), [i, a] = c.useState(() => l.current.isFocused && l.current.isFocusVisible), u = c.useCallback(() => a(l.current.isFocused && l.current.isFocusVisible), []), d = c.useCallback((f) => {
      l.current.isFocused = f, s(f), u();
    }, [
      u
    ]);
    lb((f) => {
      l.current.isFocusVisible = f, u();
    }, [], {
      isTextInput: n
    });
    let { focusProps: m } = ob({
      isDisabled: r,
      onFocusChange: d
    }), { focusWithinProps: v } = sb({
      isDisabled: !r,
      onFocusWithinChange: d
    });
    return {
      isFocused: o,
      isFocusVisible: i,
      focusProps: r ? v : m
    };
  }
  var ub = Object.defineProperty, cb = (e, t, n) => t in e ? ub(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, va = (e, t, n) => (cb(e, typeof t != "symbol" ? t + "" : t, n), n);
  let db = class {
    constructor() {
      va(this, "current", this.detect()), va(this, "handoffState", "pending"), va(this, "currentId", 0);
    }
    set(t) {
      this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  }, nr = new db();
  function _n(e) {
    var t, n;
    return nr.isServer ? null : e ? "ownerDocument" in e ? e.ownerDocument : "current" in e ? (n = (t = e.current) == null ? void 0 : t.ownerDocument) != null ? n : document : null : document;
  }
  function So(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
      throw t;
    }));
  }
  function xt() {
    let e = [], t = {
      addEventListener(n, r, l, o) {
        return n.addEventListener(r, l, o), t.add(() => n.removeEventListener(r, l, o));
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = {
          current: true
        };
        return So(() => {
          r.current && n[0]();
        }), t.add(() => {
          r.current = false;
        });
      },
      style(n, r, l) {
        let o = n.style.getPropertyValue(r);
        return Object.assign(n.style, {
          [r]: l
        }), this.add(() => {
          Object.assign(n.style, {
            [r]: o
          });
        });
      },
      group(n) {
        let r = xt();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return e.includes(n) || e.push(n), () => {
          let r = e.indexOf(n);
          if (r >= 0)
            for (let l of e.splice(r, 1))
              l();
        };
      },
      dispose() {
        for (let n of e.splice(0))
          n();
      }
    };
    return t;
  }
  function sl() {
    let [e] = c.useState(xt);
    return c.useEffect(() => () => e.dispose(), [
      e
    ]), e;
  }
  let J = (e, t) => {
    nr.isServer ? c.useEffect(e, t) : c.useLayoutEffect(e, t);
  };
  function $t(e) {
    let t = c.useRef(e);
    return J(() => {
      t.current = e;
    }, [
      e
    ]), t;
  }
  let W = function(e) {
    let t = $t(e);
    return R.useCallback((...n) => t.current(...n), [
      t
    ]);
  };
  function fb(e) {
    let t = e.width / 2, n = e.height / 2;
    return {
      top: e.clientY - n,
      right: e.clientX + t,
      bottom: e.clientY + n,
      left: e.clientX - t
    };
  }
  function pb(e, t) {
    return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
  }
  function Lh({ disabled: e = false } = {}) {
    let t = c.useRef(null), [n, r] = c.useState(false), l = sl(), o = W(() => {
      t.current = null, r(false), l.dispose();
    }), s = W((i) => {
      if (l.dispose(), t.current === null) {
        t.current = i.currentTarget, r(true);
        {
          let a = _n(i.currentTarget);
          l.addEventListener(a, "pointerup", o, false), l.addEventListener(a, "pointermove", (u) => {
            if (t.current) {
              let d = fb(u);
              r(pb(d, t.current.getBoundingClientRect()));
            }
          }, false), l.addEventListener(a, "pointercancel", o, false);
        }
      }
    });
    return {
      pressed: n,
      pressProps: e ? {} : {
        onPointerDown: s,
        onPointerUp: o,
        onClick: o
      }
    };
  }
  let mb = c.createContext(void 0);
  function Ph() {
    return c.useContext(mb);
  }
  function _u(...e) {
    return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
  }
  function Ae(e, t, ...n) {
    if (e in t) {
      let l = t[e];
      return typeof l == "function" ? l(...n) : l;
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ae), r;
  }
  var Ln = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ln || {}), xn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(xn || {});
  function ce() {
    let e = gb();
    return c.useCallback((t) => hb({
      mergeRefs: e,
      ...t
    }), [
      e
    ]);
  }
  function hb({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: l, visible: o = true, name: s, mergeRefs: i }) {
    i = i ?? vb;
    let a = Oh(t, e);
    if (o)
      return Xo(a, n, r, s, i);
    let u = l ?? 0;
    if (u & 2) {
      let { static: d = false, ...m } = a;
      if (d)
        return Xo(m, n, r, s, i);
    }
    if (u & 1) {
      let { unmount: d = true, ...m } = a;
      return Ae(d ? 0 : 1, {
        0() {
          return null;
        },
        1() {
          return Xo({
            ...m,
            hidden: true,
            style: {
              display: "none"
            }
          }, n, r, s, i);
        }
      });
    }
    return Xo(a, n, r, s, i);
  }
  function Xo(e, t = {}, n, r, l) {
    let { as: o = n, children: s, refName: i = "ref", ...a } = ya(e, [
      "unmount",
      "static"
    ]), u = e.ref !== void 0 ? {
      [i]: e.ref
    } : {}, d = typeof s == "function" ? s(t) : s;
    "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
    let m = {};
    if (t) {
      let v = false, f = [];
      for (let [x, w] of Object.entries(t))
        typeof w == "boolean" && (v = true), w === true && f.push(x.replace(/([A-Z])/g, (b) => `-${b.toLowerCase()}`));
      if (v) {
        m["data-headlessui-state"] = f.join(" ");
        for (let x of f)
          m[`data-${x}`] = "";
      }
    }
    if (o === c.Fragment && (Object.keys(Hn(a)).length > 0 || Object.keys(Hn(m)).length > 0))
      if (!c.isValidElement(d) || Array.isArray(d) && d.length > 1) {
        if (Object.keys(Hn(a)).length > 0)
          throw new Error([
            'Passing props on "Fragment"!',
            "",
            `The current component <${r} /> is rendering a "Fragment".`,
            "However we need to passthrough the following props:",
            Object.keys(Hn(a)).concat(Object.keys(Hn(m))).map((v) => `  - ${v}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
              "Render a single element as the child so that we can forward the props onto that element."
            ].map((v) => `  - ${v}`).join(`
`)
          ].join(`
`));
      } else {
        let v = d.props, f = v == null ? void 0 : v.className, x = typeof f == "function" ? (...h) => _u(f(...h), a.className) : _u(f, a.className), w = x ? {
          className: x
        } : {}, b = Oh(d.props, Hn(ya(a, [
          "ref"
        ])));
        for (let h in m)
          h in b && delete m[h];
        return c.cloneElement(d, Object.assign({}, b, m, u, {
          ref: l(yb(d), u.ref)
        }, w));
      }
    return c.createElement(o, Object.assign({}, ya(a, [
      "ref"
    ]), o !== c.Fragment && u, o !== c.Fragment && m), d);
  }
  function gb() {
    let e = c.useRef([]), t = c.useCallback((n) => {
      for (let r of e.current)
        r != null && (typeof r == "function" ? r(n) : r.current = n);
    }, []);
    return (...n) => {
      if (!n.every((r) => r == null))
        return e.current = n, t;
    };
  }
  function vb(...e) {
    return e.every((t) => t == null) ? void 0 : (t) => {
      for (let n of e)
        n != null && (typeof n == "function" ? n(t) : n.current = t);
    };
  }
  function Oh(...e) {
    if (e.length === 0)
      return {};
    if (e.length === 1)
      return e[0];
    let t = {}, n = {};
    for (let r of e)
      for (let l in r)
        l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
    if (t.disabled || t["aria-disabled"])
      for (let r in n)
        /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [
          (l) => {
            var o;
            return (o = l == null ? void 0 : l.preventDefault) == null ? void 0 : o.call(l);
          }
        ]);
    for (let r in n)
      Object.assign(t, {
        [r](l, ...o) {
          let s = n[r];
          for (let i of s) {
            if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented)
              return;
            i(l, ...o);
          }
        }
      });
    return t;
  }
  function xi(...e) {
    if (e.length === 0)
      return {};
    if (e.length === 1)
      return e[0];
    let t = {}, n = {};
    for (let r of e)
      for (let l in r)
        l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
    for (let r in n)
      Object.assign(t, {
        [r](...l) {
          let o = n[r];
          for (let s of o)
            s == null ? void 0 : s(...l);
        }
      });
    return t;
  }
  function oe(e) {
    var t;
    return Object.assign(c.forwardRef(e), {
      displayName: (t = e.displayName) != null ? t : e.name
    });
  }
  function Hn(e) {
    let t = Object.assign({}, e);
    for (let n in t)
      t[n] === void 0 && delete t[n];
    return t;
  }
  function ya(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t)
      r in n && delete n[r];
    return n;
  }
  function yb(e) {
    return R.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
  }
  let xb = "span";
  var uo = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(uo || {});
  function wb(e, t) {
    var n;
    let { features: r = 1, ...l } = e, o = {
      ref: t,
      "aria-hidden": (r & 2) === 2 ? true : (n = l["aria-hidden"]) != null ? n : void 0,
      hidden: (r & 4) === 4 ? true : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...(r & 4) === 4 && (r & 2) !== 2 && {
          display: "none"
        }
      }
    };
    return ce()({
      ourProps: o,
      theirProps: l,
      slot: {},
      defaultTag: xb,
      name: "Hidden"
    });
  }
  let co = oe(wb), bb = c.createContext(void 0);
  function Eb() {
    return c.useContext(bb);
  }
  function ed(e) {
    return typeof e != "object" || e === null ? false : "nodeType" in e;
  }
  function Jt(e) {
    return ed(e) && "tagName" in e;
  }
  function rt(e) {
    return Jt(e) && "accessKey" in e;
  }
  function Ut(e) {
    return Jt(e) && "tabIndex" in e;
  }
  function Sb(e) {
    return Jt(e) && "style" in e;
  }
  function Cb(e) {
    return rt(e) && e.nodeName === "IFRAME";
  }
  function Ih(e) {
    return rt(e) && e.nodeName === "INPUT";
  }
  function rp(e) {
    return rt(e) && e.nodeName === "LABEL";
  }
  function Nb(e) {
    return rt(e) && e.nodeName === "FIELDSET";
  }
  function Mh(e) {
    return rt(e) && e.nodeName === "LEGEND";
  }
  function kb(e) {
    return Jt(e) ? e.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : false;
  }
  function Rb(e) {
    let t = e.parentElement, n = null;
    for (; t && !Nb(t); )
      Mh(t) && (n = t), t = t.parentElement;
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && Tb(n) ? false : r;
  }
  function Tb(e) {
    if (!e)
      return false;
    let t = e.previousElementSibling;
    for (; t !== null; ) {
      if (Mh(t))
        return false;
      t = t.previousElementSibling;
    }
    return true;
  }
  let Ah = Symbol();
  function $b(e, t = true) {
    return Object.assign(e, {
      [Ah]: t
    });
  }
  function Ee(...e) {
    let t = c.useRef(e);
    c.useEffect(() => {
      t.current = e;
    }, [
      e
    ]);
    let n = W((r) => {
      for (let l of t.current)
        l != null && (typeof l == "function" ? l(r) : l.current = r);
    });
    return e.every((r) => r == null || (r == null ? void 0 : r[Ah])) ? void 0 : n;
  }
  let td = c.createContext(null);
  td.displayName = "DescriptionContext";
  function Fh() {
    let e = c.useContext(td);
    if (e === null) {
      let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(t, Fh), t;
    }
    return e;
  }
  function _h() {
    let [e, t] = c.useState([]);
    return [
      e.length > 0 ? e.join(" ") : void 0,
      c.useMemo(() => function(n) {
        let r = W((o) => (t((s) => [
          ...s,
          o
        ]), () => t((s) => {
          let i = s.slice(), a = i.indexOf(o);
          return a !== -1 && i.splice(a, 1), i;
        }))), l = c.useMemo(() => ({
          register: r,
          slot: n.slot,
          name: n.name,
          props: n.props,
          value: n.value
        }), [
          r,
          n.slot,
          n.name,
          n.props,
          n.value
        ]);
        return R.createElement(td.Provider, {
          value: l
        }, n.children);
      }, [
        t
      ])
    ];
  }
  let jb = "p";
  function Lb(e, t) {
    let n = c.useId(), r = Ph(), { id: l = `headlessui-description-${n}`, ...o } = e, s = Fh(), i = Ee(t);
    J(() => s.register(l), [
      l,
      s.register
    ]);
    let a = r || false, u = c.useMemo(() => ({
      ...s.slot,
      disabled: a
    }), [
      s.slot,
      a
    ]), d = {
      ref: i,
      ...s.props,
      id: l
    };
    return ce()({
      ourProps: d,
      theirProps: o,
      slot: u,
      defaultTag: jb,
      name: s.name || "Description"
    });
  }
  let Pb = oe(Lb), Ob = Object.assign(Pb, {});
  var le = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(le || {});
  let wi = c.createContext(null);
  wi.displayName = "LabelContext";
  function nd() {
    let e = c.useContext(wi);
    if (e === null) {
      let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(t, nd), t;
    }
    return e;
  }
  function Ib(e) {
    var t, n, r;
    let l = (n = (t = c.useContext(wi)) == null ? void 0 : t.value) != null ? n : void 0;
    return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [
      l,
      ...e
    ].filter(Boolean).join(" ") : l;
  }
  function Dh({ inherit: e = false } = {}) {
    let t = Ib(), [n, r] = c.useState([]), l = e ? [
      t,
      ...n
    ].filter(Boolean) : n;
    return [
      l.length > 0 ? l.join(" ") : void 0,
      c.useMemo(() => function(o) {
        let s = W((a) => (r((u) => [
          ...u,
          a
        ]), () => r((u) => {
          let d = u.slice(), m = d.indexOf(a);
          return m !== -1 && d.splice(m, 1), d;
        }))), i = c.useMemo(() => ({
          register: s,
          slot: o.slot,
          name: o.name,
          props: o.props,
          value: o.value
        }), [
          s,
          o.slot,
          o.name,
          o.props,
          o.value
        ]);
        return R.createElement(wi.Provider, {
          value: i
        }, o.children);
      }, [
        r
      ])
    ];
  }
  let Mb = "label";
  function Ab(e, t) {
    var n;
    let r = c.useId(), l = nd(), o = Eb(), s = Ph(), { id: i = `headlessui-label-${r}`, htmlFor: a = o ?? ((n = l.props) == null ? void 0 : n.htmlFor), passive: u = false, ...d } = e, m = Ee(t);
    J(() => l.register(i), [
      i,
      l.register
    ]);
    let v = W((b) => {
      let h = b.currentTarget;
      if (!(b.target !== b.currentTarget && kb(b.target)) && (rp(h) && b.preventDefault(), l.props && "onClick" in l.props && typeof l.props.onClick == "function" && l.props.onClick(b), rp(h))) {
        let g = document.getElementById(h.htmlFor);
        if (g) {
          let y = g.getAttribute("disabled");
          if (y === "true" || y === "")
            return;
          let E = g.getAttribute("aria-disabled");
          if (E === "true" || E === "")
            return;
          (Ih(g) && (g.type === "file" || g.type === "radio" || g.type === "checkbox") || g.role === "radio" || g.role === "checkbox" || g.role === "switch") && g.click(), g.focus({
            preventScroll: true
          });
        }
      }
    }), f = s || false, x = c.useMemo(() => ({
      ...l.slot,
      disabled: f
    }), [
      l.slot,
      f
    ]), w = {
      ref: m,
      ...l.props,
      id: i,
      htmlFor: a,
      onClick: v
    };
    return u && ("onClick" in w && (delete w.htmlFor, delete w.onClick), "onClick" in d && delete d.onClick), ce()({
      ourProps: w,
      theirProps: d,
      slot: x,
      defaultTag: a ? Mb : "div",
      name: l.name || "Label"
    });
  }
  let Fb = oe(Ab);
  Object.assign(Fb, {});
  let _b = c.createContext(() => {
  });
  function Db({ value: e, children: t }) {
    return R.createElement(_b.Provider, {
      value: e
    }, t);
  }
  function Ub(e) {
    if (e === null)
      return {
        width: 0,
        height: 0
      };
    let { width: t, height: n } = e.getBoundingClientRect();
    return {
      width: t,
      height: n
    };
  }
  function zb(e, t = false) {
    let [n, r] = c.useReducer(() => ({}), {}), l = c.useMemo(() => Ub(e), [
      e,
      n
    ]);
    return J(() => {
      if (!e)
        return;
      let o = new ResizeObserver(r);
      return o.observe(e), () => {
        o.disconnect();
      };
    }, [
      e
    ]), t ? {
      width: `${l.width}px`,
      height: `${l.height}px`
    } : l;
  }
  let Uh = class extends Map {
    constructor(t) {
      super(), this.factory = t;
    }
    get(t) {
      let n = super.get(t);
      return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
    }
  };
  var Bb = Object.defineProperty, Hb = (e, t, n) => t in e ? Bb(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, Wb = (e, t, n) => (Hb(e, typeof t != "symbol" ? t + "" : t, n), n), zh = (e, t, n) => {
    if (!t.has(e))
      throw TypeError("Cannot " + n);
  }, ut = (e, t, n) => (zh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), xa = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  }, lp = (e, t, n, r) => (zh(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ft, $l, jl;
  let Bh = class {
    constructor(t) {
      xa(this, Ft, {}), xa(this, $l, new Uh(() => /* @__PURE__ */ new Set())), xa(this, jl, /* @__PURE__ */ new Set()), Wb(this, "disposables", xt()), lp(this, Ft, t);
    }
    dispose() {
      this.disposables.dispose();
    }
    get state() {
      return ut(this, Ft);
    }
    subscribe(t, n) {
      let r = {
        selector: t,
        callback: n,
        current: t(ut(this, Ft))
      };
      return ut(this, jl).add(r), this.disposables.add(() => {
        ut(this, jl).delete(r);
      });
    }
    on(t, n) {
      return ut(this, $l).get(t).add(n), this.disposables.add(() => {
        ut(this, $l).get(t).delete(n);
      });
    }
    send(t) {
      let n = this.reduce(ut(this, Ft), t);
      if (n !== ut(this, Ft)) {
        lp(this, Ft, n);
        for (let r of ut(this, jl)) {
          let l = r.selector(ut(this, Ft));
          Hh(r.current, l) || (r.current = l, r.callback(l));
        }
        for (let r of ut(this, $l).get(t.type))
          r(ut(this, Ft), t);
      }
    }
  };
  Ft = /* @__PURE__ */ new WeakMap(), $l = /* @__PURE__ */ new WeakMap(), jl = /* @__PURE__ */ new WeakMap();
  function Hh(e, t) {
    return Object.is(e, t) ? true : typeof e != "object" || e === null || typeof t != "object" || t === null ? false : Array.isArray(e) && Array.isArray(t) ? e.length !== t.length ? false : wa(e[Symbol.iterator](), t[Symbol.iterator]()) : e instanceof Map && t instanceof Map || e instanceof Set && t instanceof Set ? e.size !== t.size ? false : wa(e.entries(), t.entries()) : op(e) && op(t) ? wa(Object.entries(e)[Symbol.iterator](), Object.entries(t)[Symbol.iterator]()) : false;
  }
  function wa(e, t) {
    do {
      let n = e.next(), r = t.next();
      if (n.done && r.done)
        return true;
      if (n.done || r.done || !Object.is(n.value, r.value))
        return false;
    } while (true);
  }
  function op(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
      return false;
    let t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null;
  }
  function sp(e) {
    let [t, n] = e(), r = xt();
    return (...l) => {
      t(...l), r.dispose(), r.microTask(n);
    };
  }
  var Vb = Object.defineProperty, Zb = (e, t, n) => t in e ? Vb(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, ip = (e, t, n) => (Zb(e, typeof t != "symbol" ? t + "" : t, n), n), Wh = ((e) => (e[e.Push = 0] = "Push", e[e.Pop = 1] = "Pop", e))(Wh || {});
  let Yb = {
    0(e, t) {
      let n = t.id, r = e.stack, l = e.stack.indexOf(n);
      if (l !== -1) {
        let o = e.stack.slice();
        return o.splice(l, 1), o.push(n), r = o, {
          ...e,
          stack: r
        };
      }
      return {
        ...e,
        stack: [
          ...e.stack,
          n
        ]
      };
    },
    1(e, t) {
      let n = t.id, r = e.stack.indexOf(n);
      if (r === -1)
        return e;
      let l = e.stack.slice();
      return l.splice(r, 1), {
        ...e,
        stack: l
      };
    }
  }, Kb = class Vh extends Bh {
    constructor() {
      super(...arguments), ip(this, "actions", {
        push: (t) => this.send({
          type: 0,
          id: t
        }),
        pop: (t) => this.send({
          type: 1,
          id: t
        })
      }), ip(this, "selectors", {
        isTop: (t, n) => t.stack[t.stack.length - 1] === n,
        inStack: (t, n) => t.stack.includes(n)
      });
    }
    static new() {
      return new Vh({
        stack: []
      });
    }
    reduce(t, n) {
      return Ae(n.type, Yb, t, n);
    }
  };
  const bi = new Uh(() => Kb.new());
  var Zh = {
    exports: {}
  }, Yh = {};
  var Co = c;
  function Gb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Qb = typeof Object.is == "function" ? Object.is : Gb, Xb = Co.useSyncExternalStore, qb = Co.useRef, Jb = Co.useEffect, eE = Co.useMemo, tE = Co.useDebugValue;
  Yh.useSyncExternalStoreWithSelector = function(e, t, n, r, l) {
    var o = qb(null);
    if (o.current === null) {
      var s = {
        hasValue: false,
        value: null
      };
      o.current = s;
    } else
      s = o.current;
    o = eE(function() {
      function a(f) {
        if (!u) {
          if (u = true, d = f, f = r(f), l !== void 0 && s.hasValue) {
            var x = s.value;
            if (l(x, f))
              return m = x;
          }
          return m = f;
        }
        if (x = m, Qb(d, f))
          return x;
        var w = r(f);
        return l !== void 0 && l(x, w) ? (d = f, x) : (d = f, m = w);
      }
      var u = false, d, m, v = n === void 0 ? null : n;
      return [
        function() {
          return a(t());
        },
        v === null ? void 0 : function() {
          return a(v());
        }
      ];
    }, [
      t,
      n,
      r,
      l
    ]);
    var i = Xb(e, o[0], o[1]);
    return Jb(function() {
      s.hasValue = true, s.value = i;
    }, [
      i
    ]), tE(i), i;
  };
  Zh.exports = Yh;
  var nE = Zh.exports;
  function jt(e, t, n = Hh) {
    return nE.useSyncExternalStoreWithSelector(W((r) => e.subscribe(rE, r)), W(() => e.state), W(() => e.state), W(t), n);
  }
  function rE(e) {
    return e;
  }
  function No(e, t) {
    let n = c.useId(), r = bi.get(t), [l, o] = jt(r, c.useCallback((s) => [
      r.selectors.isTop(s, n),
      r.selectors.inStack(s, n)
    ], [
      r,
      n
    ]));
    return J(() => {
      if (e)
        return r.actions.push(n), () => r.actions.pop(n);
    }, [
      r,
      e,
      n
    ]), e ? o ? l : true : false;
  }
  let Du = /* @__PURE__ */ new Map(), Hl = /* @__PURE__ */ new Map();
  function ap(e) {
    var t;
    let n = (t = Hl.get(e)) != null ? t : 0;
    return Hl.set(e, n + 1), n !== 0 ? () => up(e) : (Du.set(e, {
      "aria-hidden": e.getAttribute("aria-hidden"),
      inert: e.inert
    }), e.setAttribute("aria-hidden", "true"), e.inert = true, () => up(e));
  }
  function up(e) {
    var t;
    let n = (t = Hl.get(e)) != null ? t : 1;
    if (n === 1 ? Hl.delete(e) : Hl.set(e, n - 1), n !== 1)
      return;
    let r = Du.get(e);
    r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Du.delete(e));
  }
  function Kh(e, { allowed: t, disallowed: n } = {}) {
    let r = No(e, "inert-others");
    J(() => {
      var l, o;
      if (!r)
        return;
      let s = xt();
      for (let a of (l = n == null ? void 0 : n()) != null ? l : [])
        a && s.add(ap(a));
      let i = (o = t == null ? void 0 : t()) != null ? o : [];
      for (let a of i) {
        if (!a)
          continue;
        let u = _n(a);
        if (!u)
          continue;
        let d = a.parentElement;
        for (; d && d !== u.body; ) {
          for (let m of d.children)
            i.some((v) => m.contains(v)) || s.add(ap(m));
          d = d.parentElement;
        }
      }
      return s.dispose;
    }, [
      r,
      t,
      n
    ]);
  }
  function Gh(e, t, n) {
    let r = $t((l) => {
      let o = l.getBoundingClientRect();
      o.x === 0 && o.y === 0 && o.width === 0 && o.height === 0 && n();
    });
    c.useEffect(() => {
      if (!e)
        return;
      let l = t === null ? null : rt(t) ? t : t.current;
      if (!l)
        return;
      let o = xt();
      if (typeof ResizeObserver < "u") {
        let s = new ResizeObserver(() => r.current(l));
        s.observe(l), o.add(() => s.disconnect());
      }
      if (typeof IntersectionObserver < "u") {
        let s = new IntersectionObserver(() => r.current(l));
        s.observe(l), o.add(() => s.disconnect());
      }
      return () => o.dispose();
    }, [
      t,
      r,
      e
    ]);
  }
  let Gs = [
    "[contentEditable=true]",
    "[tabindex]",
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])"
  ].map((e) => `${e}:not([tabindex='-1'])`).join(","), lE = [
    "[data-autofocus]"
  ].map((e) => `${e}:not([tabindex='-1'])`).join(",");
  var ve = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(ve || {}), Gn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Gn || {}), oE = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(oE || {});
  function Qh(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Gs)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
  }
  function sE(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(lE)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
  }
  var rd = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(rd || {});
  function ld(e, t = 0) {
    var n;
    return e === ((n = _n(e)) == null ? void 0 : n.body) ? false : Ae(t, {
      0() {
        return e.matches(Gs);
      },
      1() {
        let r = e;
        for (; r !== null; ) {
          if (r.matches(Gs))
            return true;
          r = r.parentElement;
        }
        return false;
      }
    });
  }
  function Xh(e) {
    let t = _n(e);
    xt().nextFrame(() => {
      t && Ut(t.activeElement) && !ld(t.activeElement, 0) && Ht(e);
    });
  }
  var iE = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(iE || {});
  typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true), document.addEventListener("click", (e) => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true));
  function Ht(e) {
    e == null ? void 0 : e.focus({
      preventScroll: true
    });
  }
  let aE = [
    "textarea",
    "input"
  ].join(",");
  function uE(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, aE)) != null ? n : false;
  }
  function Qn(e, t = (n) => n) {
    return e.slice().sort((n, r) => {
      let l = t(n), o = t(r);
      if (l === null || o === null)
        return 0;
      let s = l.compareDocumentPosition(o);
      return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    });
  }
  function cE(e, t) {
    return mt(Qh(), t, {
      relativeTo: e
    });
  }
  function mt(e, t, { sorted: n = true, relativeTo: r = null, skipElements: l = [] } = {}) {
    let o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? n ? Qn(e) : e : t & 64 ? sE(e) : Qh(e);
    l.length > 0 && s.length > 1 && (s = s.filter((f) => !l.some((x) => x != null && "current" in x ? (x == null ? void 0 : x.current) === f : x === f))), r = r ?? o.activeElement;
    let i = (() => {
      if (t & 5)
        return 1;
      if (t & 10)
        return -1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), a = (() => {
      if (t & 1)
        return 0;
      if (t & 2)
        return Math.max(0, s.indexOf(r)) - 1;
      if (t & 4)
        return Math.max(0, s.indexOf(r)) + 1;
      if (t & 8)
        return s.length - 1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), u = t & 32 ? {
      preventScroll: true
    } : {}, d = 0, m = s.length, v;
    do {
      if (d >= m || d + m <= 0)
        return 0;
      let f = a + d;
      if (t & 16)
        f = (f + m) % m;
      else {
        if (f < 0)
          return 3;
        if (f >= m)
          return 1;
      }
      v = s[f], v == null ? void 0 : v.focus(u), d += i;
    } while (v !== o.activeElement);
    return t & 6 && uE(v) && v.select(), 2;
  }
  function qh() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
  }
  function dE() {
    return /Android/gi.test(window.navigator.userAgent);
  }
  function cp() {
    return qh() || dE();
  }
  function Mr(e, t, n, r) {
    let l = $t(n);
    c.useEffect(() => {
      if (!e)
        return;
      function o(s) {
        l.current(s);
      }
      return document.addEventListener(t, o, r), () => document.removeEventListener(t, o, r);
    }, [
      e,
      t,
      r
    ]);
  }
  function Jh(e, t, n, r) {
    let l = $t(n);
    c.useEffect(() => {
      if (!e)
        return;
      function o(s) {
        l.current(s);
      }
      return window.addEventListener(t, o, r), () => window.removeEventListener(t, o, r);
    }, [
      e,
      t,
      r
    ]);
  }
  const dp = 30;
  function eg(e, t, n) {
    let r = $t(n), l = c.useCallback(function(i, a) {
      if (i.defaultPrevented)
        return;
      let u = a(i);
      if (u === null || !u.getRootNode().contains(u) || !u.isConnected)
        return;
      let d = function m(v) {
        return typeof v == "function" ? m(v()) : Array.isArray(v) || v instanceof Set ? v : [
          v
        ];
      }(t);
      for (let m of d)
        if (m !== null && (m.contains(u) || i.composed && i.composedPath().includes(m)))
          return;
      return !ld(u, rd.Loose) && u.tabIndex !== -1 && i.preventDefault(), r.current(i, u);
    }, [
      r,
      t
    ]), o = c.useRef(null);
    Mr(e, "pointerdown", (i) => {
      var a, u;
      cp() || (o.current = ((u = (a = i.composedPath) == null ? void 0 : a.call(i)) == null ? void 0 : u[0]) || i.target);
    }, true), Mr(e, "pointerup", (i) => {
      if (cp() || !o.current)
        return;
      let a = o.current;
      return o.current = null, l(i, () => a);
    }, true);
    let s = c.useRef({
      x: 0,
      y: 0
    });
    Mr(e, "touchstart", (i) => {
      s.current.x = i.touches[0].clientX, s.current.y = i.touches[0].clientY;
    }, true), Mr(e, "touchend", (i) => {
      let a = {
        x: i.changedTouches[0].clientX,
        y: i.changedTouches[0].clientY
      };
      if (!(Math.abs(a.x - s.current.x) >= dp || Math.abs(a.y - s.current.y) >= dp))
        return l(i, () => Ut(i.target) ? i.target : null);
    }, true), Jh(e, "blur", (i) => l(i, () => Cb(window.document.activeElement) ? window.document.activeElement : null), true);
  }
  function Jr(...e) {
    return c.useMemo(() => _n(...e), [
      ...e
    ]);
  }
  var fE = ((e) => (e[e.Ignore = 0] = "Ignore", e[e.Select = 1] = "Select", e[e.Close = 2] = "Close", e))(fE || {});
  const qo = {
    Ignore: {
      kind: 0
    },
    Select: (e) => ({
      kind: 1,
      target: e
    }),
    Close: {
      kind: 2
    }
  }, pE = 200;
  function mE(e, { trigger: t, action: n, close: r, select: l }) {
    let o = c.useRef(null);
    Mr(e && t !== null, "pointerdown", (s) => {
      ed(s == null ? void 0 : s.target) && t != null && t.contains(s.target) && (o.current = /* @__PURE__ */ new Date());
    }), Mr(e && t !== null, "pointerup", (s) => {
      if (o.current === null || !Ut(s.target))
        return;
      let i = n(s), a = (/* @__PURE__ */ new Date()).getTime() - o.current.getTime();
      switch (o.current = null, i.kind) {
        case 0:
          return;
        case 1: {
          a > pE && (l(i.target), r());
          break;
        }
        case 2: {
          r();
          break;
        }
      }
    }, {
      capture: true
    });
  }
  function tg(e, t, n, r) {
    let l = $t(n);
    c.useEffect(() => {
      e = e ?? window;
      function o(s) {
        l.current(s);
      }
      return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
    }, [
      e,
      t,
      r
    ]);
  }
  function ng(e, t) {
    return c.useMemo(() => {
      var n;
      if (e.type)
        return e.type;
      let r = (n = e.as) != null ? n : "button";
      if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type"))
        return "button";
    }, [
      e.type,
      e.as,
      t
    ]);
  }
  function hE(e) {
    return c.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot);
  }
  function gE(e, t) {
    let n = e(), r = /* @__PURE__ */ new Set();
    return {
      getSnapshot() {
        return n;
      },
      subscribe(l) {
        return r.add(l), () => r.delete(l);
      },
      dispatch(l, ...o) {
        let s = t[l].call(n, ...o);
        s && (n = s, r.forEach((i) => i()));
      }
    };
  }
  function vE() {
    let e;
    return {
      before({ doc: t }) {
        var n;
        let r = t.documentElement, l = (n = t.defaultView) != null ? n : window;
        e = Math.max(0, l.innerWidth - r.clientWidth);
      },
      after({ doc: t, d: n }) {
        let r = t.documentElement, l = Math.max(0, r.clientWidth - r.offsetWidth), o = Math.max(0, e - l);
        n.style(r, "paddingRight", `${o}px`);
      }
    };
  }
  function yE() {
    return qh() ? {
      before({ doc: e, d: t, meta: n }) {
        function r(l) {
          return n.containers.flatMap((o) => o()).some((o) => o.contains(l));
        }
        t.microTask(() => {
          var l;
          if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
            let i = xt();
            i.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => i.dispose()));
          }
          let o = (l = window.scrollY) != null ? l : window.pageYOffset, s = null;
          t.addEventListener(e, "click", (i) => {
            if (Ut(i.target))
              try {
                let a = i.target.closest("a");
                if (!a)
                  return;
                let { hash: u } = new URL(a.href), d = e.querySelector(u);
                Ut(d) && !r(d) && (s = d);
              } catch {
              }
          }, true), t.addEventListener(e, "touchstart", (i) => {
            if (Ut(i.target) && Sb(i.target))
              if (r(i.target)) {
                let a = i.target;
                for (; a.parentElement && r(a.parentElement); )
                  a = a.parentElement;
                t.style(a, "overscrollBehavior", "contain");
              } else
                t.style(i.target, "touchAction", "none");
          }), t.addEventListener(e, "touchmove", (i) => {
            if (Ut(i.target)) {
              if (Ih(i.target))
                return;
              if (r(i.target)) {
                let a = i.target;
                for (; a.parentElement && a.dataset.headlessuiPortal !== "" && !(a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth); )
                  a = a.parentElement;
                a.dataset.headlessuiPortal === "" && i.preventDefault();
              } else
                i.preventDefault();
            }
          }, {
            passive: false
          }), t.add(() => {
            var i;
            let a = (i = window.scrollY) != null ? i : window.pageYOffset;
            o !== a && window.scrollTo(0, o), s && s.isConnected && (s.scrollIntoView({
              block: "nearest"
            }), s = null);
          });
        });
      }
    } : {};
  }
  function xE() {
    return {
      before({ doc: e, d: t }) {
        t.style(e.documentElement, "overflow", "hidden");
      }
    };
  }
  function wE(e) {
    let t = {};
    for (let n of e)
      Object.assign(t, n(t));
    return t;
  }
  let Xn = gE(() => /* @__PURE__ */ new Map(), {
    PUSH(e, t) {
      var n;
      let r = (n = this.get(e)) != null ? n : {
        doc: e,
        count: 0,
        d: xt(),
        meta: /* @__PURE__ */ new Set()
      };
      return r.count++, r.meta.add(t), this.set(e, r), this;
    },
    POP(e, t) {
      let n = this.get(e);
      return n && (n.count--, n.meta.delete(t)), this;
    },
    SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
      let r = {
        doc: e,
        d: t,
        meta: wE(n)
      }, l = [
        yE(),
        vE(),
        xE()
      ];
      l.forEach(({ before: o }) => o == null ? void 0 : o(r)), l.forEach(({ after: o }) => o == null ? void 0 : o(r));
    },
    SCROLL_ALLOW({ d: e }) {
      e.dispose();
    },
    TEARDOWN({ doc: e }) {
      this.delete(e);
    }
  });
  Xn.subscribe(() => {
    let e = Xn.getSnapshot(), t = /* @__PURE__ */ new Map();
    for (let [n] of e)
      t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
      let r = t.get(n.doc) === "hidden", l = n.count !== 0;
      (l && !r || !l && r) && Xn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Xn.dispatch("TEARDOWN", n);
    }
  });
  function bE(e, t, n = () => ({
    containers: []
  })) {
    let r = hE(Xn), l = t ? r.get(t) : void 0, o = l ? l.count > 0 : false;
    return J(() => {
      if (!(!t || !e))
        return Xn.dispatch("PUSH", t, n), () => Xn.dispatch("POP", t, n);
    }, [
      e,
      t
    ]), o;
  }
  function rg(e, t, n = () => [
    document.body
  ]) {
    let r = No(e, "scroll-lock");
    bE(r, t, (l) => {
      var o;
      return {
        containers: [
          ...(o = l.containers) != null ? o : [],
          n
        ]
      };
    });
  }
  function fp(e) {
    return [
      e.screenX,
      e.screenY
    ];
  }
  function EE() {
    let e = c.useRef([
      -1,
      -1
    ]);
    return {
      wasMoved(t) {
        let n = fp(t);
        return e.current[0] === n[0] && e.current[1] === n[1] ? false : (e.current = n, true);
      },
      update(t) {
        e.current = fp(t);
      }
    };
  }
  function SE(e = 0) {
    let [t, n] = c.useState(e), r = c.useCallback((a) => n(a), [
      t
    ]), l = c.useCallback((a) => n((u) => u | a), [
      t
    ]), o = c.useCallback((a) => (t & a) === a, [
      t
    ]), s = c.useCallback((a) => n((u) => u & ~a), [
      n
    ]), i = c.useCallback((a) => n((u) => u ^ a), [
      n
    ]);
    return {
      flags: t,
      setFlag: r,
      addFlag: l,
      hasFlag: o,
      removeFlag: s,
      toggleFlag: i
    };
  }
  var pp, mp;
  typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((pp = process == null ? void 0 : process.env) == null ? void 0 : pp.NODE_ENV) === "test" && typeof ((mp = Element == null ? void 0 : Element.prototype) == null ? void 0 : mp.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
    return console.warn([
      "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.",
      "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.",
      "",
      "Example usage:",
      "```js",
      "import { mockAnimationsApi } from 'jsdom-testing-mocks'",
      "mockAnimationsApi()",
      "```"
    ].join(`
`)), [];
  });
  var CE = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(CE || {});
  function lg(e) {
    let t = {};
    for (let n in e)
      e[n] === true && (t[`data-${n}`] = "");
    return t;
  }
  function og(e, t, n, r) {
    let [l, o] = c.useState(n), { hasFlag: s, addFlag: i, removeFlag: a } = SE(e && l ? 3 : 0), u = c.useRef(false), d = c.useRef(false), m = sl();
    return J(() => {
      var v;
      if (e) {
        if (n && o(true), !t) {
          n && i(3);
          return;
        }
        return (v = r == null ? void 0 : r.start) == null || v.call(r, n), NE(t, {
          inFlight: u,
          prepare() {
            d.current ? d.current = false : d.current = u.current, u.current = true, !d.current && (n ? (i(3), a(4)) : (i(4), a(2)));
          },
          run() {
            d.current ? n ? (a(3), i(4)) : (a(4), i(3)) : n ? a(1) : i(1);
          },
          done() {
            var f;
            d.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (u.current = false, a(7), n || o(false), (f = r == null ? void 0 : r.end) == null || f.call(r, n));
          }
        });
      }
    }, [
      e,
      n,
      t,
      m
    ]), e ? [
      l,
      {
        closed: s(1),
        enter: s(2),
        leave: s(4),
        transition: s(2) || s(4)
      }
    ] : [
      n,
      {
        closed: void 0,
        enter: void 0,
        leave: void 0,
        transition: void 0
      }
    ];
  }
  function NE(e, { prepare: t, run: n, done: r, inFlight: l }) {
    let o = xt();
    return RE(e, {
      prepare: t,
      inFlight: l
    }), o.nextFrame(() => {
      n(), o.requestAnimationFrame(() => {
        o.add(kE(e, r));
      });
    }), o.dispose;
  }
  function kE(e, t) {
    var n, r;
    let l = xt();
    if (!e)
      return l.dispose;
    let o = false;
    l.add(() => {
      o = true;
    });
    let s = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((i) => i instanceof CSSTransition)) != null ? r : [];
    return s.length === 0 ? (t(), l.dispose) : (Promise.allSettled(s.map((i) => i.finished)).then(() => {
      o || t();
    }), l.dispose);
  }
  function RE(e, { inFlight: t, prepare: n }) {
    if (t != null && t.current) {
      n();
      return;
    }
    let r = e.style.transition;
    e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
  }
  function TE(e, { container: t, accept: n, walk: r }) {
    let l = c.useRef(n), o = c.useRef(r);
    c.useEffect(() => {
      l.current = n, o.current = r;
    }, [
      n,
      r
    ]), J(() => {
      if (!t || !e)
        return;
      let s = _n(t);
      if (!s)
        return;
      let i = l.current, a = o.current, u = Object.assign((m) => i(m), {
        acceptNode: i
      }), d = s.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, false);
      for (; d.nextNode(); )
        a(d.currentNode);
    }, [
      t,
      e,
      l,
      o
    ]);
  }
  function od(e, t) {
    let n = c.useRef([]), r = W(e);
    c.useEffect(() => {
      let l = [
        ...n.current
      ];
      for (let [o, s] of t.entries())
        if (n.current[o] !== s) {
          let i = r(t, l);
          return n.current = t, i;
        }
    }, [
      r,
      ...t
    ]);
  }
  function Ei() {
    return typeof window < "u";
  }
  function il(e) {
    return sg(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function tt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function Yt(e) {
    var t;
    return (t = (sg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
  }
  function sg(e) {
    return Ei() ? e instanceof Node || e instanceof tt(e).Node : false;
  }
  function De(e) {
    return Ei() ? e instanceof Element || e instanceof tt(e).Element : false;
  }
  function Zt(e) {
    return Ei() ? e instanceof HTMLElement || e instanceof tt(e).HTMLElement : false;
  }
  function hp(e) {
    return !Ei() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
  }
  function ko(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: l } = It(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && ![
      "inline",
      "contents"
    ].includes(l);
  }
  function $E(e) {
    return [
      "table",
      "td",
      "th"
    ].includes(il(e));
  }
  function Si(e) {
    return [
      ":popover-open",
      ":modal"
    ].some((t) => {
      try {
        return e.matches(t);
      } catch {
        return false;
      }
    });
  }
  function sd(e) {
    const t = id(), n = De(e) ? It(e) : e;
    return [
      "transform",
      "translate",
      "scale",
      "rotate",
      "perspective"
    ].some((r) => n[r] ? n[r] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || [
      "transform",
      "translate",
      "scale",
      "rotate",
      "perspective",
      "filter"
    ].some((r) => (n.willChange || "").includes(r)) || [
      "paint",
      "layout",
      "strict",
      "content"
    ].some((r) => (n.contain || "").includes(r));
  }
  function jE(e) {
    let t = Pn(e);
    for (; Zt(t) && !el(t); ) {
      if (sd(t))
        return t;
      if (Si(t))
        return null;
      t = Pn(t);
    }
    return null;
  }
  function id() {
    return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function el(e) {
    return [
      "html",
      "body",
      "#document"
    ].includes(il(e));
  }
  function It(e) {
    return tt(e).getComputedStyle(e);
  }
  function Ci(e) {
    return De(e) ? {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    } : {
      scrollLeft: e.scrollX,
      scrollTop: e.scrollY
    };
  }
  function Pn(e) {
    if (il(e) === "html")
      return e;
    const t = e.assignedSlot || e.parentNode || hp(e) && e.host || Yt(e);
    return hp(t) ? t.host : t;
  }
  function ig(e) {
    const t = Pn(e);
    return el(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Zt(t) && ko(t) ? t : ig(t);
  }
  function fo(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = true);
    const l = ig(e), o = l === ((r = e.ownerDocument) == null ? void 0 : r.body), s = tt(l);
    if (o) {
      const i = Uu(s);
      return t.concat(s, s.visualViewport || [], ko(l) ? l : [], i && n ? fo(i) : []);
    }
    return t.concat(l, fo(l, [], n));
  }
  function Uu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
  function LE() {
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? e.brands.map((t) => {
      let { brand: n, version: r } = t;
      return n + "/" + r;
    }).join(" ") : navigator.userAgent;
  }
  const ur = Math.min, Me = Math.max, po = Math.round, Jo = Math.floor, Wt = (e) => ({
    x: e,
    y: e
  }), PE = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  }, OE = {
    start: "end",
    end: "start"
  };
  function gp(e, t, n) {
    return Me(e, ur(t, n));
  }
  function al(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function On(e) {
    return e.split("-")[0];
  }
  function Ro(e) {
    return e.split("-")[1];
  }
  function ag(e) {
    return e === "x" ? "y" : "x";
  }
  function ug(e) {
    return e === "y" ? "height" : "width";
  }
  function Tn(e) {
    return [
      "top",
      "bottom"
    ].includes(On(e)) ? "y" : "x";
  }
  function cg(e) {
    return ag(Tn(e));
  }
  function IE(e, t, n) {
    n === void 0 && (n = false);
    const r = Ro(e), l = cg(e), o = ug(l);
    let s = l === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = Qs(s)), [
      s,
      Qs(s)
    ];
  }
  function ME(e) {
    const t = Qs(e);
    return [
      zu(e),
      t,
      zu(t)
    ];
  }
  function zu(e) {
    return e.replace(/start|end/g, (t) => OE[t]);
  }
  function AE(e, t, n) {
    const r = [
      "left",
      "right"
    ], l = [
      "right",
      "left"
    ], o = [
      "top",
      "bottom"
    ], s = [
      "bottom",
      "top"
    ];
    switch (e) {
      case "top":
      case "bottom":
        return n ? t ? l : r : t ? r : l;
      case "left":
      case "right":
        return t ? o : s;
      default:
        return [];
    }
  }
  function FE(e, t, n, r) {
    const l = Ro(e);
    let o = AE(On(e), n === "start", r);
    return l && (o = o.map((s) => s + "-" + l), t && (o = o.concat(o.map(zu)))), o;
  }
  function Qs(e) {
    return e.replace(/left|right|bottom|top/g, (t) => PE[t]);
  }
  function _E(e) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...e
    };
  }
  function DE(e) {
    return typeof e != "number" ? _E(e) : {
      top: e,
      right: e,
      bottom: e,
      left: e
    };
  }
  function Xs(e) {
    const { x: t, y: n, width: r, height: l } = e;
    return {
      width: r,
      height: l,
      top: n,
      left: t,
      right: t + r,
      bottom: n + l,
      x: t,
      y: n
    };
  }
  function vp(e, t, n) {
    let { reference: r, floating: l } = e;
    const o = Tn(t), s = cg(t), i = ug(s), a = On(t), u = o === "y", d = r.x + r.width / 2 - l.width / 2, m = r.y + r.height / 2 - l.height / 2, v = r[i] / 2 - l[i] / 2;
    let f;
    switch (a) {
      case "top":
        f = {
          x: d,
          y: r.y - l.height
        };
        break;
      case "bottom":
        f = {
          x: d,
          y: r.y + r.height
        };
        break;
      case "right":
        f = {
          x: r.x + r.width,
          y: m
        };
        break;
      case "left":
        f = {
          x: r.x - l.width,
          y: m
        };
        break;
      default:
        f = {
          x: r.x,
          y: r.y
        };
    }
    switch (Ro(t)) {
      case "start":
        f[s] -= v * (n && u ? -1 : 1);
        break;
      case "end":
        f[s] += v * (n && u ? -1 : 1);
        break;
    }
    return f;
  }
  const UE = async (e, t, n) => {
    const { placement: r = "bottom", strategy: l = "absolute", middleware: o = [], platform: s } = n, i = o.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
      reference: e,
      floating: t,
      strategy: l
    }), { x: d, y: m } = vp(u, r, a), v = r, f = {}, x = 0;
    for (let w = 0; w < i.length; w++) {
      const { name: b, fn: h } = i[w], { x: g, y, data: E, reset: S } = await h({
        x: d,
        y: m,
        initialPlacement: r,
        placement: v,
        strategy: l,
        middlewareData: f,
        rects: u,
        platform: s,
        elements: {
          reference: e,
          floating: t
        }
      });
      d = g ?? d, m = y ?? m, f = {
        ...f,
        [b]: {
          ...f[b],
          ...E
        }
      }, S && x <= 50 && (x++, typeof S == "object" && (S.placement && (v = S.placement), S.rects && (u = S.rects === true ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: l
      }) : S.rects), { x: d, y: m } = vp(u, v, a)), w = -1);
    }
    return {
      x: d,
      y: m,
      placement: v,
      strategy: l,
      middlewareData: f
    };
  };
  async function Ni(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: l, platform: o, rects: s, elements: i, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: m = "floating", altBoundary: v = false, padding: f = 0 } = al(t, e), x = DE(f), b = i[v ? m === "floating" ? "reference" : "floating" : m], h = Xs(await o.getClippingRect({
      element: (n = await (o.isElement == null ? void 0 : o.isElement(b))) == null || n ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
      boundary: u,
      rootBoundary: d,
      strategy: a
    })), g = m === "floating" ? {
      x: r,
      y: l,
      width: s.floating.width,
      height: s.floating.height
    } : s.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), E = await (o.isElement == null ? void 0 : o.isElement(y)) ? await (o.getScale == null ? void 0 : o.getScale(y)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, S = Xs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: i,
      rect: g,
      offsetParent: y,
      strategy: a
    }) : g);
    return {
      top: (h.top - S.top + x.top) / E.y,
      bottom: (S.bottom - h.bottom + x.bottom) / E.y,
      left: (h.left - S.left + x.left) / E.x,
      right: (S.right - h.right + x.right) / E.x
    };
  }
  const zE = function(e) {
    return e === void 0 && (e = {}), {
      name: "flip",
      options: e,
      async fn(t) {
        var n, r;
        const { placement: l, middlewareData: o, rects: s, initialPlacement: i, platform: a, elements: u } = t, { mainAxis: d = true, crossAxis: m = true, fallbackPlacements: v, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: x = "none", flipAlignment: w = true, ...b } = al(e, t);
        if ((n = o.arrow) != null && n.alignmentOffset)
          return {};
        const h = On(l), g = Tn(i), y = On(i) === i, E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), S = v || (y || !w ? [
          Qs(i)
        ] : ME(i)), N = x !== "none";
        !v && N && S.push(...FE(i, w, x, E));
        const T = [
          i,
          ...S
        ], k = await Ni(t, b), M = [];
        let $ = ((r = o.flip) == null ? void 0 : r.overflows) || [];
        if (d && M.push(k[h]), m) {
          const A = IE(l, s, E);
          M.push(k[A[0]], k[A[1]]);
        }
        if ($ = [
          ...$,
          {
            placement: l,
            overflows: M
          }
        ], !M.every((A) => A <= 0)) {
          var I, Z;
          const A = (((I = o.flip) == null ? void 0 : I.index) || 0) + 1, F = T[A];
          if (F) {
            var B;
            const j = m === "alignment" ? g !== Tn(F) : false, C = ((B = $[0]) == null ? void 0 : B.overflows[0]) > 0;
            if (!j || C)
              return {
                data: {
                  index: A,
                  overflows: $
                },
                reset: {
                  placement: F
                }
              };
          }
          let H = (Z = $.filter((j) => j.overflows[0] <= 0).sort((j, C) => j.overflows[1] - C.overflows[1])[0]) == null ? void 0 : Z.placement;
          if (!H)
            switch (f) {
              case "bestFit": {
                var P;
                const j = (P = $.filter((C) => {
                  if (N) {
                    const L = Tn(C.placement);
                    return L === g || L === "y";
                  }
                  return true;
                }).map((C) => [
                  C.placement,
                  C.overflows.filter((L) => L > 0).reduce((L, V) => L + V, 0)
                ]).sort((C, L) => C[1] - L[1])[0]) == null ? void 0 : P[0];
                j && (H = j);
                break;
              }
              case "initialPlacement":
                H = i;
                break;
            }
          if (l !== H)
            return {
              reset: {
                placement: H
              }
            };
        }
        return {};
      }
    };
  };
  async function BE(e, t) {
    const { placement: n, platform: r, elements: l } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(l.floating)), s = On(n), i = Ro(n), a = Tn(n) === "y", u = [
      "left",
      "top"
    ].includes(s) ? -1 : 1, d = o && a ? -1 : 1, m = al(t, e);
    let { mainAxis: v, crossAxis: f, alignmentAxis: x } = typeof m == "number" ? {
      mainAxis: m,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: m.mainAxis || 0,
      crossAxis: m.crossAxis || 0,
      alignmentAxis: m.alignmentAxis
    };
    return i && typeof x == "number" && (f = i === "end" ? x * -1 : x), a ? {
      x: f * d,
      y: v * u
    } : {
      x: v * u,
      y: f * d
    };
  }
  const HE = function(e) {
    return e === void 0 && (e = 0), {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        const { x: l, y: o, placement: s, middlewareData: i } = t, a = await BE(t, e);
        return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
          x: l + a.x,
          y: o + a.y,
          data: {
            ...a,
            placement: s
          }
        };
      }
    };
  }, WE = function(e) {
    return e === void 0 && (e = {}), {
      name: "shift",
      options: e,
      async fn(t) {
        const { x: n, y: r, placement: l } = t, { mainAxis: o = true, crossAxis: s = false, limiter: i = {
          fn: (b) => {
            let { x: h, y: g } = b;
            return {
              x: h,
              y: g
            };
          }
        }, ...a } = al(e, t), u = {
          x: n,
          y: r
        }, d = await Ni(t, a), m = Tn(On(l)), v = ag(m);
        let f = u[v], x = u[m];
        if (o) {
          const b = v === "y" ? "top" : "left", h = v === "y" ? "bottom" : "right", g = f + d[b], y = f - d[h];
          f = gp(g, f, y);
        }
        if (s) {
          const b = m === "y" ? "top" : "left", h = m === "y" ? "bottom" : "right", g = x + d[b], y = x - d[h];
          x = gp(g, x, y);
        }
        const w = i.fn({
          ...t,
          [v]: f,
          [m]: x
        });
        return {
          ...w,
          data: {
            x: w.x - n,
            y: w.y - r,
            enabled: {
              [v]: o,
              [m]: s
            }
          }
        };
      }
    };
  }, VE = function(e) {
    return e === void 0 && (e = {}), {
      name: "size",
      options: e,
      async fn(t) {
        var n, r;
        const { placement: l, rects: o, platform: s, elements: i } = t, { apply: a = () => {
        }, ...u } = al(e, t), d = await Ni(t, u), m = On(l), v = Ro(l), f = Tn(l) === "y", { width: x, height: w } = o.floating;
        let b, h;
        m === "top" || m === "bottom" ? (b = m, h = v === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (h = m, b = v === "end" ? "top" : "bottom");
        const g = w - d.top - d.bottom, y = x - d.left - d.right, E = ur(w - d[b], g), S = ur(x - d[h], y), N = !t.middlewareData.shift;
        let T = E, k = S;
        if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = y), (r = t.middlewareData.shift) != null && r.enabled.y && (T = g), N && !v) {
          const $ = Me(d.left, 0), I = Me(d.right, 0), Z = Me(d.top, 0), B = Me(d.bottom, 0);
          f ? k = x - 2 * ($ !== 0 || I !== 0 ? $ + I : Me(d.left, d.right)) : T = w - 2 * (Z !== 0 || B !== 0 ? Z + B : Me(d.top, d.bottom));
        }
        await a({
          ...t,
          availableWidth: k,
          availableHeight: T
        });
        const M = await s.getDimensions(i.floating);
        return x !== M.width || w !== M.height ? {
          reset: {
            rects: true
          }
        } : {};
      }
    };
  };
  function dg(e) {
    const t = It(e);
    let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
    const l = Zt(e), o = l ? e.offsetWidth : n, s = l ? e.offsetHeight : r, i = po(n) !== o || po(r) !== s;
    return i && (n = o, r = s), {
      width: n,
      height: r,
      $: i
    };
  }
  function ad(e) {
    return De(e) ? e : e.contextElement;
  }
  function Vr(e) {
    const t = ad(e);
    if (!Zt(t))
      return Wt(1);
    const n = t.getBoundingClientRect(), { width: r, height: l, $: o } = dg(t);
    let s = (o ? po(n.width) : n.width) / r, i = (o ? po(n.height) : n.height) / l;
    return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
      x: s,
      y: i
    };
  }
  const ZE = Wt(0);
  function fg(e) {
    const t = tt(e);
    return !id() || !t.visualViewport ? ZE : {
      x: t.visualViewport.offsetLeft,
      y: t.visualViewport.offsetTop
    };
  }
  function YE(e, t, n) {
    return t === void 0 && (t = false), !n || t && n !== tt(e) ? false : t;
  }
  function cr(e, t, n, r) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    const l = e.getBoundingClientRect(), o = ad(e);
    let s = Wt(1);
    t && (r ? De(r) && (s = Vr(r)) : s = Vr(e));
    const i = YE(o, n, r) ? fg(o) : Wt(0);
    let a = (l.left + i.x) / s.x, u = (l.top + i.y) / s.y, d = l.width / s.x, m = l.height / s.y;
    if (o) {
      const v = tt(o), f = r && De(r) ? tt(r) : r;
      let x = v, w = Uu(x);
      for (; w && r && f !== x; ) {
        const b = Vr(w), h = w.getBoundingClientRect(), g = It(w), y = h.left + (w.clientLeft + parseFloat(g.paddingLeft)) * b.x, E = h.top + (w.clientTop + parseFloat(g.paddingTop)) * b.y;
        a *= b.x, u *= b.y, d *= b.x, m *= b.y, a += y, u += E, x = tt(w), w = Uu(x);
      }
    }
    return Xs({
      width: d,
      height: m,
      x: a,
      y: u
    });
  }
  function ud(e, t) {
    const n = Ci(e).scrollLeft;
    return t ? t.left + n : cr(Yt(e)).left + n;
  }
  function pg(e, t, n) {
    n === void 0 && (n = false);
    const r = e.getBoundingClientRect(), l = r.left + t.scrollLeft - (n ? 0 : ud(e, r)), o = r.top + t.scrollTop;
    return {
      x: l,
      y: o
    };
  }
  function KE(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: l } = e;
    const o = l === "fixed", s = Yt(r), i = t ? Si(t.floating) : false;
    if (r === s || i && o)
      return n;
    let a = {
      scrollLeft: 0,
      scrollTop: 0
    }, u = Wt(1);
    const d = Wt(0), m = Zt(r);
    if ((m || !m && !o) && ((il(r) !== "body" || ko(s)) && (a = Ci(r)), Zt(r))) {
      const f = cr(r);
      u = Vr(r), d.x = f.x + r.clientLeft, d.y = f.y + r.clientTop;
    }
    const v = s && !m && !o ? pg(s, a, true) : Wt(0);
    return {
      width: n.width * u.x,
      height: n.height * u.y,
      x: n.x * u.x - a.scrollLeft * u.x + d.x + v.x,
      y: n.y * u.y - a.scrollTop * u.y + d.y + v.y
    };
  }
  function GE(e) {
    return Array.from(e.getClientRects());
  }
  function QE(e) {
    const t = Yt(e), n = Ci(e), r = e.ownerDocument.body, l = Me(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = Me(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + ud(e);
    const i = -n.scrollTop;
    return It(r).direction === "rtl" && (s += Me(t.clientWidth, r.clientWidth) - l), {
      width: l,
      height: o,
      x: s,
      y: i
    };
  }
  function XE(e, t) {
    const n = tt(e), r = Yt(e), l = n.visualViewport;
    let o = r.clientWidth, s = r.clientHeight, i = 0, a = 0;
    if (l) {
      o = l.width, s = l.height;
      const u = id();
      (!u || u && t === "fixed") && (i = l.offsetLeft, a = l.offsetTop);
    }
    return {
      width: o,
      height: s,
      x: i,
      y: a
    };
  }
  function qE(e, t) {
    const n = cr(e, true, t === "fixed"), r = n.top + e.clientTop, l = n.left + e.clientLeft, o = Zt(e) ? Vr(e) : Wt(1), s = e.clientWidth * o.x, i = e.clientHeight * o.y, a = l * o.x, u = r * o.y;
    return {
      width: s,
      height: i,
      x: a,
      y: u
    };
  }
  function yp(e, t, n) {
    let r;
    if (t === "viewport")
      r = XE(e, n);
    else if (t === "document")
      r = QE(Yt(e));
    else if (De(t))
      r = qE(t, n);
    else {
      const l = fg(e);
      r = {
        x: t.x - l.x,
        y: t.y - l.y,
        width: t.width,
        height: t.height
      };
    }
    return Xs(r);
  }
  function mg(e, t) {
    const n = Pn(e);
    return n === t || !De(n) || el(n) ? false : It(n).position === "fixed" || mg(n, t);
  }
  function JE(e, t) {
    const n = t.get(e);
    if (n)
      return n;
    let r = fo(e, [], false).filter((i) => De(i) && il(i) !== "body"), l = null;
    const o = It(e).position === "fixed";
    let s = o ? Pn(e) : e;
    for (; De(s) && !el(s); ) {
      const i = It(s), a = sd(s);
      !a && i.position === "fixed" && (l = null), (o ? !a && !l : !a && i.position === "static" && !!l && [
        "absolute",
        "fixed"
      ].includes(l.position) || ko(s) && !a && mg(e, s)) ? r = r.filter((d) => d !== s) : l = i, s = Pn(s);
    }
    return t.set(e, r), r;
  }
  function eS(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: l } = e;
    const s = [
      ...n === "clippingAncestors" ? Si(t) ? [] : JE(t, this._c) : [].concat(n),
      r
    ], i = s[0], a = s.reduce((u, d) => {
      const m = yp(t, d, l);
      return u.top = Me(m.top, u.top), u.right = ur(m.right, u.right), u.bottom = ur(m.bottom, u.bottom), u.left = Me(m.left, u.left), u;
    }, yp(t, i, l));
    return {
      width: a.right - a.left,
      height: a.bottom - a.top,
      x: a.left,
      y: a.top
    };
  }
  function tS(e) {
    const { width: t, height: n } = dg(e);
    return {
      width: t,
      height: n
    };
  }
  function nS(e, t, n) {
    const r = Zt(t), l = Yt(t), o = n === "fixed", s = cr(e, true, o, t);
    let i = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const a = Wt(0);
    function u() {
      a.x = ud(l);
    }
    if (r || !r && !o)
      if ((il(t) !== "body" || ko(l)) && (i = Ci(t)), r) {
        const f = cr(t, true, o, t);
        a.x = f.x + t.clientLeft, a.y = f.y + t.clientTop;
      } else
        l && u();
    o && !r && l && u();
    const d = l && !r && !o ? pg(l, i) : Wt(0), m = s.left + i.scrollLeft - a.x - d.x, v = s.top + i.scrollTop - a.y - d.y;
    return {
      x: m,
      y: v,
      width: s.width,
      height: s.height
    };
  }
  function ba(e) {
    return It(e).position === "static";
  }
  function xp(e, t) {
    if (!Zt(e) || It(e).position === "fixed")
      return null;
    if (t)
      return t(e);
    let n = e.offsetParent;
    return Yt(e) === n && (n = n.ownerDocument.body), n;
  }
  function hg(e, t) {
    const n = tt(e);
    if (Si(e))
      return n;
    if (!Zt(e)) {
      let l = Pn(e);
      for (; l && !el(l); ) {
        if (De(l) && !ba(l))
          return l;
        l = Pn(l);
      }
      return n;
    }
    let r = xp(e, t);
    for (; r && $E(r) && ba(r); )
      r = xp(r, t);
    return r && el(r) && ba(r) && !sd(r) ? n : r || jE(e) || n;
  }
  const rS = async function(e) {
    const t = this.getOffsetParent || hg, n = this.getDimensions, r = await n(e.floating);
    return {
      reference: nS(e.reference, await t(e.floating), e.strategy),
      floating: {
        x: 0,
        y: 0,
        width: r.width,
        height: r.height
      }
    };
  };
  function lS(e) {
    return It(e).direction === "rtl";
  }
  const oS = {
    convertOffsetParentRelativeRectToViewportRelativeRect: KE,
    getDocumentElement: Yt,
    getClippingRect: eS,
    getOffsetParent: hg,
    getElementRects: rS,
    getClientRects: GE,
    getDimensions: tS,
    getScale: Vr,
    isElement: De,
    isRTL: lS
  };
  function gg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
  }
  function sS(e, t) {
    let n = null, r;
    const l = Yt(e);
    function o() {
      var i;
      clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
    }
    function s(i, a) {
      i === void 0 && (i = false), a === void 0 && (a = 1), o();
      const u = e.getBoundingClientRect(), { left: d, top: m, width: v, height: f } = u;
      if (i || t(), !v || !f)
        return;
      const x = Jo(m), w = Jo(l.clientWidth - (d + v)), b = Jo(l.clientHeight - (m + f)), h = Jo(d), y = {
        rootMargin: -x + "px " + -w + "px " + -b + "px " + -h + "px",
        threshold: Me(0, ur(1, a)) || 1
      };
      let E = true;
      function S(N) {
        const T = N[0].intersectionRatio;
        if (T !== a) {
          if (!E)
            return s();
          T ? s(false, T) : r = setTimeout(() => {
            s(false, 1e-7);
          }, 1e3);
        }
        T === 1 && !gg(u, e.getBoundingClientRect()) && s(), E = false;
      }
      try {
        n = new IntersectionObserver(S, {
          ...y,
          root: l.ownerDocument
        });
      } catch {
        n = new IntersectionObserver(S, y);
      }
      n.observe(e);
    }
    return s(true), o;
  }
  function iS(e, t, n, r) {
    r === void 0 && (r = {});
    const { ancestorScroll: l = true, ancestorResize: o = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: i = typeof IntersectionObserver == "function", animationFrame: a = false } = r, u = ad(e), d = l || o ? [
      ...u ? fo(u) : [],
      ...fo(t)
    ] : [];
    d.forEach((h) => {
      l && h.addEventListener("scroll", n, {
        passive: true
      }), o && h.addEventListener("resize", n);
    });
    const m = u && i ? sS(u, n) : null;
    let v = -1, f = null;
    s && (f = new ResizeObserver((h) => {
      let [g] = h;
      g && g.target === u && f && (f.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
        var y;
        (y = f) == null || y.observe(t);
      })), n();
    }), u && !a && f.observe(u), f.observe(t));
    let x, w = a ? cr(e) : null;
    a && b();
    function b() {
      const h = cr(e);
      w && !gg(w, h) && n(), w = h, x = requestAnimationFrame(b);
    }
    return n(), () => {
      var h;
      d.forEach((g) => {
        l && g.removeEventListener("scroll", n), o && g.removeEventListener("resize", n);
      }), m == null ? void 0 : m(), (h = f) == null || h.disconnect(), f = null, a && cancelAnimationFrame(x);
    };
  }
  const Ea = Ni, aS = HE, uS = WE, cS = zE, dS = VE, fS = (e, t, n) => {
    const r = /* @__PURE__ */ new Map(), l = {
      platform: oS,
      ...n
    }, o = {
      ...l.platform,
      _c: r
    };
    return UE(e, t, {
      ...l,
      platform: o
    });
  };
  var ys = typeof document < "u" ? c.useLayoutEffect : c.useEffect;
  function qs(e, t) {
    if (e === t)
      return true;
    if (typeof e != typeof t)
      return false;
    if (typeof e == "function" && e.toString() === t.toString())
      return true;
    let n, r, l;
    if (e && t && typeof e == "object") {
      if (Array.isArray(e)) {
        if (n = e.length, n !== t.length)
          return false;
        for (r = n; r-- !== 0; )
          if (!qs(e[r], t[r]))
            return false;
        return true;
      }
      if (l = Object.keys(e), n = l.length, n !== Object.keys(t).length)
        return false;
      for (r = n; r-- !== 0; )
        if (!{}.hasOwnProperty.call(t, l[r]))
          return false;
      for (r = n; r-- !== 0; ) {
        const o = l[r];
        if (!(o === "_owner" && e.$$typeof) && !qs(e[o], t[o]))
          return false;
      }
      return true;
    }
    return e !== e && t !== t;
  }
  function vg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function wp(e, t) {
    const n = vg(e);
    return Math.round(t * n) / n;
  }
  function Sa(e) {
    const t = c.useRef(e);
    return ys(() => {
      t.current = e;
    }), t;
  }
  function pS(e) {
    e === void 0 && (e = {});
    const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: l, elements: { reference: o, floating: s } = {}, transform: i = true, whileElementsMounted: a, open: u } = e, [d, m] = c.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: false
    }), [v, f] = c.useState(r);
    qs(v, r) || f(r);
    const [x, w] = c.useState(null), [b, h] = c.useState(null), g = c.useCallback((j) => {
      j !== N.current && (N.current = j, w(j));
    }, []), y = c.useCallback((j) => {
      j !== T.current && (T.current = j, h(j));
    }, []), E = o || x, S = s || b, N = c.useRef(null), T = c.useRef(null), k = c.useRef(d), M = a != null, $ = Sa(a), I = Sa(l), Z = Sa(u), B = c.useCallback(() => {
      if (!N.current || !T.current)
        return;
      const j = {
        placement: t,
        strategy: n,
        middleware: v
      };
      I.current && (j.platform = I.current), fS(N.current, T.current, j).then((C) => {
        const L = {
          ...C,
          isPositioned: Z.current !== false
        };
        P.current && !qs(k.current, L) && (k.current = L, Vt.flushSync(() => {
          m(L);
        }));
      });
    }, [
      v,
      t,
      n,
      I,
      Z
    ]);
    ys(() => {
      u === false && k.current.isPositioned && (k.current.isPositioned = false, m((j) => ({
        ...j,
        isPositioned: false
      })));
    }, [
      u
    ]);
    const P = c.useRef(false);
    ys(() => (P.current = true, () => {
      P.current = false;
    }), []), ys(() => {
      if (E && (N.current = E), S && (T.current = S), E && S) {
        if ($.current)
          return $.current(E, S, B);
        B();
      }
    }, [
      E,
      S,
      B,
      $,
      M
    ]);
    const A = c.useMemo(() => ({
      reference: N,
      floating: T,
      setReference: g,
      setFloating: y
    }), [
      g,
      y
    ]), F = c.useMemo(() => ({
      reference: E,
      floating: S
    }), [
      E,
      S
    ]), H = c.useMemo(() => {
      const j = {
        position: n,
        left: 0,
        top: 0
      };
      if (!F.floating)
        return j;
      const C = wp(F.floating, d.x), L = wp(F.floating, d.y);
      return i ? {
        ...j,
        transform: "translate(" + C + "px, " + L + "px)",
        ...vg(F.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: n,
        left: C,
        top: L
      };
    }, [
      n,
      i,
      F.floating,
      d.x,
      d.y
    ]);
    return c.useMemo(() => ({
      ...d,
      update: B,
      refs: A,
      elements: F,
      floatingStyles: H
    }), [
      d,
      B,
      A,
      F,
      H
    ]);
  }
  const yg = (e, t) => ({
    ...aS(e),
    options: [
      e,
      t
    ]
  }), mS = (e, t) => ({
    ...uS(e),
    options: [
      e,
      t
    ]
  }), hS = (e, t) => ({
    ...cS(e),
    options: [
      e,
      t
    ]
  }), gS = (e, t) => ({
    ...dS(e),
    options: [
      e,
      t
    ]
  }), xg = {
    ...xs
  }, vS = xg.useInsertionEffect, yS = vS || ((e) => e());
  function wg(e) {
    const t = c.useRef(() => {
    });
    return yS(() => {
      t.current = e;
    }), c.useCallback(function() {
      for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
        r[l] = arguments[l];
      return t.current == null ? void 0 : t.current(...r);
    }, []);
  }
  var Bu = typeof document < "u" ? c.useLayoutEffect : c.useEffect;
  let bp = false, xS = 0;
  const Ep = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + xS++;
  function wS() {
    const [e, t] = c.useState(() => bp ? Ep() : void 0);
    return Bu(() => {
      e == null && t(Ep());
    }, []), c.useEffect(() => {
      bp = true;
    }, []), e;
  }
  const bS = xg.useId, ES = bS || wS;
  function SS() {
    const e = /* @__PURE__ */ new Map();
    return {
      emit(t, n) {
        var r;
        (r = e.get(t)) == null || r.forEach((l) => l(n));
      },
      on(t, n) {
        e.set(t, [
          ...e.get(t) || [],
          n
        ]);
      },
      off(t, n) {
        var r;
        e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((l) => l !== n)) || []);
      }
    };
  }
  const CS = c.createContext(null), NS = c.createContext(null), kS = () => {
    var e;
    return ((e = c.useContext(CS)) == null ? void 0 : e.id) || null;
  }, RS = () => c.useContext(NS), TS = "data-floating-ui-focusable";
  function $S(e) {
    const { open: t = false, onOpenChange: n, elements: r } = e, l = ES(), o = c.useRef({}), [s] = c.useState(() => SS()), i = kS() != null, [a, u] = c.useState(r.reference), d = wg((f, x, w) => {
      o.current.openEvent = f ? x : void 0, s.emit("openchange", {
        open: f,
        event: x,
        reason: w,
        nested: i
      }), n == null ? void 0 : n(f, x, w);
    }), m = c.useMemo(() => ({
      setPositionReference: u
    }), []), v = c.useMemo(() => ({
      reference: a || r.reference || null,
      floating: r.floating || null,
      domReference: r.reference
    }), [
      a,
      r.reference,
      r.floating
    ]);
    return c.useMemo(() => ({
      dataRef: o,
      open: t,
      onOpenChange: d,
      elements: v,
      events: s,
      floatingId: l,
      refs: m
    }), [
      t,
      d,
      v,
      s,
      l,
      m
    ]);
  }
  function jS(e) {
    e === void 0 && (e = {});
    const { nodeId: t } = e, n = $S({
      ...e,
      elements: {
        reference: null,
        floating: null,
        ...e.elements
      }
    }), r = e.rootContext || n, l = r.elements, [o, s] = c.useState(null), [i, a] = c.useState(null), d = (l == null ? void 0 : l.domReference) || o, m = c.useRef(null), v = RS();
    Bu(() => {
      d && (m.current = d);
    }, [
      d
    ]);
    const f = pS({
      ...e,
      elements: {
        ...l,
        ...i && {
          reference: i
        }
      }
    }), x = c.useCallback((y) => {
      const E = De(y) ? {
        getBoundingClientRect: () => y.getBoundingClientRect(),
        contextElement: y
      } : y;
      a(E), f.refs.setReference(E);
    }, [
      f.refs
    ]), w = c.useCallback((y) => {
      (De(y) || y === null) && (m.current = y, s(y)), (De(f.refs.reference.current) || f.refs.reference.current === null || y !== null && !De(y)) && f.refs.setReference(y);
    }, [
      f.refs
    ]), b = c.useMemo(() => ({
      ...f.refs,
      setReference: w,
      setPositionReference: x,
      domReference: m
    }), [
      f.refs,
      w,
      x
    ]), h = c.useMemo(() => ({
      ...f.elements,
      domReference: d
    }), [
      f.elements,
      d
    ]), g = c.useMemo(() => ({
      ...f,
      ...r,
      refs: b,
      elements: h,
      nodeId: t
    }), [
      f,
      b,
      h,
      t,
      r
    ]);
    return Bu(() => {
      r.dataRef.current.floatingContext = g;
      const y = v == null ? void 0 : v.nodesRef.current.find((E) => E.id === t);
      y && (y.context = g);
    }), c.useMemo(() => ({
      ...f,
      context: g,
      refs: b,
      elements: h
    }), [
      f,
      b,
      h,
      g
    ]);
  }
  const Sp = "active", Cp = "selected";
  function Ca(e, t, n) {
    const r = /* @__PURE__ */ new Map(), l = n === "item";
    let o = e;
    if (l && e) {
      const { [Sp]: s, [Cp]: i, ...a } = e;
      o = a;
    }
    return {
      ...n === "floating" && {
        tabIndex: -1,
        [TS]: ""
      },
      ...o,
      ...t.map((s) => {
        const i = s ? s[n] : null;
        return typeof i == "function" ? e ? i(e) : null : i;
      }).concat(e).reduce((s, i) => (i && Object.entries(i).forEach((a) => {
        let [u, d] = a;
        if (!(l && [
          Sp,
          Cp
        ].includes(u)))
          if (u.indexOf("on") === 0) {
            if (r.has(u) || r.set(u, []), typeof d == "function") {
              var m;
              (m = r.get(u)) == null || m.push(d), s[u] = function() {
                for (var v, f = arguments.length, x = new Array(f), w = 0; w < f; w++)
                  x[w] = arguments[w];
                return (v = r.get(u)) == null ? void 0 : v.map((b) => b(...x)).find((b) => b !== void 0);
              };
            }
          } else
            s[u] = d;
      }), s), {})
    };
  }
  function LS(e) {
    e === void 0 && (e = []);
    const t = e.map((i) => i == null ? void 0 : i.reference), n = e.map((i) => i == null ? void 0 : i.floating), r = e.map((i) => i == null ? void 0 : i.item), l = c.useCallback((i) => Ca(i, e, "reference"), t), o = c.useCallback((i) => Ca(i, e, "floating"), n), s = c.useCallback((i) => Ca(i, e, "item"), r);
    return c.useMemo(() => ({
      getReferenceProps: l,
      getFloatingProps: o,
      getItemProps: s
    }), [
      l,
      o,
      s
    ]);
  }
  function Np(e, t) {
    return {
      ...e,
      rects: {
        ...e.rects,
        floating: {
          ...e.rects.floating,
          height: t
        }
      }
    };
  }
  const PS = (e) => ({
    name: "inner",
    options: e,
    async fn(t) {
      const { listRef: n, overflowRef: r, onFallbackChange: l, offset: o = 0, index: s = 0, minItemsVisible: i = 4, referenceOverflowThreshold: a = 0, scrollRef: u, ...d } = al(e, t), { rects: m, elements: { floating: v } } = t, f = n.current[s], x = (u == null ? void 0 : u.current) || v, w = v.clientTop || x.clientTop, b = v.clientTop !== 0, h = x.clientTop !== 0, g = v === x;
      if (!f)
        return {};
      const y = {
        ...t,
        ...await yg(-f.offsetTop - v.clientTop - m.reference.height / 2 - f.offsetHeight / 2 - o).fn(t)
      }, E = await Ea(Np(y, x.scrollHeight + w + v.clientTop), d), S = await Ea(y, {
        ...d,
        elementContext: "reference"
      }), N = Me(0, E.top), T = y.y + N, $ = (x.scrollHeight > x.clientHeight ? (I) => I : po)(Me(0, x.scrollHeight + (b && g || h ? w * 2 : 0) - N - Me(0, E.bottom)));
      if (x.style.maxHeight = $ + "px", x.scrollTop = N, l) {
        const I = x.offsetHeight < f.offsetHeight * ur(i, n.current.length) - 1 || S.top >= -a || S.bottom >= -a;
        Vt.flushSync(() => l(I));
      }
      return r && (r.current = await Ea(Np({
        ...y,
        y: T
      }, x.offsetHeight + w + v.clientTop), d)), {
        y: T
      };
    }
  });
  function OS(e, t) {
    const { open: n, elements: r } = e, { enabled: l = true, overflowRef: o, scrollRef: s, onChange: i } = t, a = wg(i), u = c.useRef(false), d = c.useRef(null), m = c.useRef(null);
    c.useEffect(() => {
      if (!l)
        return;
      function f(w) {
        if (w.ctrlKey || !x || o.current == null)
          return;
        const b = w.deltaY, h = o.current.top >= -0.5, g = o.current.bottom >= -0.5, y = x.scrollHeight - x.clientHeight, E = b < 0 ? -1 : 1, S = b < 0 ? "max" : "min";
        x.scrollHeight <= x.clientHeight || (!h && b > 0 || !g && b < 0 ? (w.preventDefault(), Vt.flushSync(() => {
          a((N) => N + Math[S](b, y * E));
        })) : /firefox/i.test(LE()) && (x.scrollTop += b));
      }
      const x = (s == null ? void 0 : s.current) || r.floating;
      if (n && x)
        return x.addEventListener("wheel", f), requestAnimationFrame(() => {
          d.current = x.scrollTop, o.current != null && (m.current = {
            ...o.current
          });
        }), () => {
          d.current = null, m.current = null, x.removeEventListener("wheel", f);
        };
    }, [
      l,
      n,
      r.floating,
      o,
      s,
      a
    ]);
    const v = c.useMemo(() => ({
      onKeyDown() {
        u.current = true;
      },
      onWheel() {
        u.current = false;
      },
      onPointerMove() {
        u.current = false;
      },
      onScroll() {
        const f = (s == null ? void 0 : s.current) || r.floating;
        if (!(!o.current || !f || !u.current)) {
          if (d.current !== null) {
            const x = f.scrollTop - d.current;
            (o.current.bottom < -0.5 && x < -1 || o.current.top < -0.5 && x > 1) && Vt.flushSync(() => a((w) => w + x));
          }
          requestAnimationFrame(() => {
            d.current = f.scrollTop;
          });
        }
      }
    }), [
      r.floating,
      a,
      o,
      s
    ]);
    return c.useMemo(() => l ? {
      floating: v
    } : {}, [
      l,
      v
    ]);
  }
  let ul = c.createContext({
    styles: void 0,
    setReference: () => {
    },
    setFloating: () => {
    },
    getReferenceProps: () => ({}),
    getFloatingProps: () => ({}),
    slot: {}
  });
  ul.displayName = "FloatingContext";
  let cd = c.createContext(null);
  cd.displayName = "PlacementContext";
  function IS(e) {
    return c.useMemo(() => e ? typeof e == "string" ? {
      to: e
    } : e : null, [
      e
    ]);
  }
  function MS() {
    return c.useContext(ul).setReference;
  }
  function AS() {
    return c.useContext(ul).getReferenceProps;
  }
  function FS() {
    let { getFloatingProps: e, slot: t } = c.useContext(ul);
    return c.useCallback((...n) => Object.assign({}, e(...n), {
      "data-anchor": t.anchor
    }), [
      e,
      t
    ]);
  }
  function _S(e = null) {
    e === false && (e = null), typeof e == "string" && (e = {
      to: e
    });
    let t = c.useContext(cd), n = c.useMemo(() => e, [
      JSON.stringify(e, (l, o) => {
        var s;
        return (s = o == null ? void 0 : o.outerHTML) != null ? s : o;
      })
    ]);
    J(() => {
      t == null ? void 0 : t(n ?? null);
    }, [
      t,
      n
    ]);
    let r = c.useContext(ul);
    return c.useMemo(() => [
      r.setFloating,
      e ? r.styles : {}
    ], [
      r.setFloating,
      e,
      r.styles
    ]);
  }
  let kp = 4;
  function DS({ children: e, enabled: t = true }) {
    let [n, r] = c.useState(null), [l, o] = c.useState(0), s = c.useRef(null), [i, a] = c.useState(null);
    US(i);
    let u = t && n !== null && i !== null, { to: d = "bottom", gap: m = 0, offset: v = 0, padding: f = 0, inner: x } = zS(n, i), [w, b = "center"] = d.split(" ");
    J(() => {
      u && o(0);
    }, [
      u
    ]);
    let { refs: h, floatingStyles: g, context: y } = jS({
      open: u,
      placement: w === "selection" ? b === "center" ? "bottom" : `bottom-${b}` : b === "center" ? `${w}` : `${w}-${b}`,
      strategy: "absolute",
      transform: false,
      middleware: [
        yg({
          mainAxis: w === "selection" ? 0 : m,
          crossAxis: v
        }),
        mS({
          padding: f
        }),
        w !== "selection" && hS({
          padding: f
        }),
        w === "selection" && x ? PS({
          ...x,
          padding: f,
          overflowRef: s,
          offset: l,
          minItemsVisible: kp,
          referenceOverflowThreshold: f,
          onFallbackChange(I) {
            var Z, B;
            if (!I)
              return;
            let P = y.elements.floating;
            if (!P)
              return;
            let A = parseFloat(getComputedStyle(P).scrollPaddingBottom) || 0, F = Math.min(kp, P.childElementCount), H = 0, j = 0;
            for (let C of (B = (Z = y.elements.floating) == null ? void 0 : Z.childNodes) != null ? B : [])
              if (rt(C)) {
                let L = C.offsetTop, V = L + C.clientHeight + A, D = P.scrollTop, _ = D + P.clientHeight;
                if (L >= D && V <= _)
                  F--;
                else {
                  j = Math.max(0, Math.min(V, _) - Math.max(L, D)), H = C.clientHeight;
                  break;
                }
              }
            F >= 1 && o((C) => {
              let L = H * F - j + A;
              return C >= L ? C : L;
            });
          }
        }) : null,
        gS({
          padding: f,
          apply({ availableWidth: I, availableHeight: Z, elements: B }) {
            Object.assign(B.floating.style, {
              overflow: "auto",
              maxWidth: `${I}px`,
              maxHeight: `min(var(--anchor-max-height, 100vh), ${Z}px)`
            });
          }
        })
      ].filter(Boolean),
      whileElementsMounted: iS
    }), [E = w, S = b] = y.placement.split("-");
    w === "selection" && (E = "selection");
    let N = c.useMemo(() => ({
      anchor: [
        E,
        S
      ].filter(Boolean).join(" ")
    }), [
      E,
      S
    ]), T = OS(y, {
      overflowRef: s,
      onChange: o
    }), { getReferenceProps: k, getFloatingProps: M } = LS([
      T
    ]), $ = W((I) => {
      a(I), h.setFloating(I);
    });
    return c.createElement(cd.Provider, {
      value: r
    }, c.createElement(ul.Provider, {
      value: {
        setFloating: $,
        setReference: h.setReference,
        styles: g,
        getReferenceProps: k,
        getFloatingProps: M,
        slot: N
      }
    }, e));
  }
  function US(e) {
    J(() => {
      if (!e)
        return;
      let t = new MutationObserver(() => {
        let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
        if (isNaN(r))
          return;
        let l = parseInt(n);
        isNaN(l) || r !== l && (e.style.maxHeight = `${Math.ceil(r)}px`);
      });
      return t.observe(e, {
        attributes: true,
        attributeFilter: [
          "style"
        ]
      }), () => {
        t.disconnect();
      };
    }, [
      e
    ]);
  }
  function zS(e, t) {
    var n, r, l;
    let o = Na((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), s = Na((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), i = Na((l = e == null ? void 0 : e.padding) != null ? l : "var(--anchor-padding, 0)", t);
    return {
      ...e,
      gap: o,
      offset: s,
      padding: i
    };
  }
  function Na(e, t, n = void 0) {
    let r = sl(), l = W((a, u) => {
      if (a == null)
        return [
          n,
          null
        ];
      if (typeof a == "number")
        return [
          a,
          null
        ];
      if (typeof a == "string") {
        if (!u)
          return [
            n,
            null
          ];
        let d = Rp(a, u);
        return [
          d,
          (m) => {
            let v = bg(a);
            {
              let f = v.map((x) => window.getComputedStyle(u).getPropertyValue(x));
              r.requestAnimationFrame(function x() {
                r.nextFrame(x);
                let w = false;
                for (let [h, g] of v.entries()) {
                  let y = window.getComputedStyle(u).getPropertyValue(g);
                  if (f[h] !== y) {
                    f[h] = y, w = true;
                    break;
                  }
                }
                if (!w)
                  return;
                let b = Rp(a, u);
                d !== b && (m(b), d = b);
              });
            }
            return r.dispose;
          }
        ];
      }
      return [
        n,
        null
      ];
    }), o = c.useMemo(() => l(e, t)[0], [
      e,
      t
    ]), [s = o, i] = c.useState();
    return J(() => {
      let [a, u] = l(e, t);
      if (i(a), !!u)
        return u(i);
    }, [
      e,
      t
    ]), s;
  }
  function bg(e) {
    let t = /var\((.*)\)/.exec(e);
    if (t) {
      let n = t[1].indexOf(",");
      if (n === -1)
        return [
          t[1]
        ];
      let r = t[1].slice(0, n).trim(), l = t[1].slice(n + 1).trim();
      return l ? [
        r,
        ...bg(l)
      ] : [
        r
      ];
    }
    return [];
  }
  function Rp(e, t) {
    let n = document.createElement("div");
    t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
    let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
    return t.removeChild(n), r;
  }
  let ki = c.createContext(null);
  ki.displayName = "OpenClosedContext";
  var Ue = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ue || {});
  function To() {
    return c.useContext(ki);
  }
  function Eg({ value: e, children: t }) {
    return R.createElement(ki.Provider, {
      value: e
    }, t);
  }
  function BS({ children: e }) {
    return R.createElement(ki.Provider, {
      value: null
    }, e);
  }
  function HS(e) {
    function t() {
      document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
  }
  let hn = [];
  HS(() => {
    function e(t) {
      if (!Ut(t.target) || t.target === document.body || hn[0] === t.target)
        return;
      let n = t.target;
      n = n.closest(Gs), hn.unshift(n ?? t.target), hn = hn.filter((r) => r != null && r.isConnected), hn.splice(10);
    }
    window.addEventListener("click", e, {
      capture: true
    }), window.addEventListener("mousedown", e, {
      capture: true
    }), window.addEventListener("focus", e, {
      capture: true
    }), document.body.addEventListener("click", e, {
      capture: true
    }), document.body.addEventListener("mousedown", e, {
      capture: true
    }), document.body.addEventListener("focus", e, {
      capture: true
    });
  });
  function WS(e) {
    throw new Error("Unexpected object: " + e);
  }
  var ye = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ye || {});
  function es(e, t) {
    let n = t.resolveItems();
    if (n.length <= 0)
      return null;
    let r = t.resolveActiveIndex(), l = r ?? -1;
    switch (e.focus) {
      case 0: {
        for (let o = 0; o < n.length; ++o)
          if (!t.resolveDisabled(n[o], o, n))
            return o;
        return r;
      }
      case 1: {
        l === -1 && (l = n.length);
        for (let o = l - 1; o >= 0; --o)
          if (!t.resolveDisabled(n[o], o, n))
            return o;
        return r;
      }
      case 2: {
        for (let o = l + 1; o < n.length; ++o)
          if (!t.resolveDisabled(n[o], o, n))
            return o;
        return r;
      }
      case 3: {
        for (let o = n.length - 1; o >= 0; --o)
          if (!t.resolveDisabled(n[o], o, n))
            return o;
        return r;
      }
      case 4: {
        for (let o = 0; o < n.length; ++o)
          if (t.resolveId(n[o], o, n) === e.id)
            return o;
        return r;
      }
      case 5:
        return null;
      default:
        WS(e);
    }
  }
  function dd(e) {
    let t = W(e), n = c.useRef(false);
    c.useEffect(() => (n.current = false, () => {
      n.current = true, So(() => {
        n.current && t();
      });
    }), [
      t
    ]);
  }
  function VS() {
    let e = typeof document > "u";
    return "useSyncExternalStore" in xs ? ((t) => t.useSyncExternalStore)(xs)(() => () => {
    }, () => false, () => !e) : false;
  }
  function $o() {
    let e = VS(), [t, n] = c.useState(nr.isHandoffComplete);
    return t && nr.isHandoffComplete === false && n(false), c.useEffect(() => {
      t !== true && n(true);
    }, [
      t
    ]), c.useEffect(() => nr.handoff(), []), e ? false : t;
  }
  let Sg = c.createContext(false);
  function ZS() {
    return c.useContext(Sg);
  }
  function Tp(e) {
    return R.createElement(Sg.Provider, {
      value: e.force
    }, e.children);
  }
  function YS(e) {
    let t = ZS(), n = c.useContext(Ng), [r, l] = c.useState(() => {
      var o;
      if (!t && n !== null)
        return (o = n.current) != null ? o : null;
      if (nr.isServer)
        return null;
      let s = e == null ? void 0 : e.getElementById("headlessui-portal-root");
      if (s)
        return s;
      if (e === null)
        return null;
      let i = e.createElement("div");
      return i.setAttribute("id", "headlessui-portal-root"), e.body.appendChild(i);
    });
    return c.useEffect(() => {
      r !== null && (e != null && e.body.contains(r) || e == null || e.body.appendChild(r));
    }, [
      r,
      e
    ]), c.useEffect(() => {
      t || n !== null && l(n.current);
    }, [
      n,
      l,
      t
    ]), r;
  }
  let Cg = c.Fragment, KS = oe(function(e, t) {
    let { ownerDocument: n = null, ...r } = e, l = c.useRef(null), o = Ee($b((f) => {
      l.current = f;
    }), t), s = Jr(l), i = n ?? s, a = YS(i), [u] = c.useState(() => {
      var f;
      return nr.isServer ? null : (f = i == null ? void 0 : i.createElement("div")) != null ? f : null;
    }), d = c.useContext(Hu), m = $o();
    J(() => {
      !a || !u || a.contains(u) || (u.setAttribute("data-headlessui-portal", ""), a.appendChild(u));
    }, [
      a,
      u
    ]), J(() => {
      if (u && d)
        return d.register(u);
    }, [
      d,
      u
    ]), dd(() => {
      var f;
      !a || !u || (ed(u) && a.contains(u) && a.removeChild(u), a.childNodes.length <= 0 && ((f = a.parentElement) == null || f.removeChild(a)));
    });
    let v = ce();
    return m ? !a || !u ? null : Vt.createPortal(v({
      ourProps: {
        ref: o
      },
      theirProps: r,
      slot: {},
      defaultTag: Cg,
      name: "Portal"
    }), u) : null;
  });
  function GS(e, t) {
    let n = Ee(t), { enabled: r = true, ownerDocument: l, ...o } = e, s = ce();
    return r ? R.createElement(KS, {
      ...o,
      ownerDocument: l,
      ref: n
    }) : s({
      ourProps: {
        ref: n
      },
      theirProps: o,
      slot: {},
      defaultTag: Cg,
      name: "Portal"
    });
  }
  let QS = c.Fragment, Ng = c.createContext(null);
  function XS(e, t) {
    let { target: n, ...r } = e, l = {
      ref: Ee(t)
    }, o = ce();
    return R.createElement(Ng.Provider, {
      value: n
    }, o({
      ourProps: l,
      theirProps: r,
      defaultTag: QS,
      name: "Popover.Group"
    }));
  }
  let Hu = c.createContext(null);
  function qS() {
    let e = c.useContext(Hu), t = c.useRef([]), n = W((o) => (t.current.push(o), e && e.register(o), () => r(o))), r = W((o) => {
      let s = t.current.indexOf(o);
      s !== -1 && t.current.splice(s, 1), e && e.unregister(o);
    }), l = c.useMemo(() => ({
      register: n,
      unregister: r,
      portals: t
    }), [
      n,
      r,
      t
    ]);
    return [
      t,
      c.useMemo(() => function({ children: o }) {
        return R.createElement(Hu.Provider, {
          value: l
        }, o);
      }, [
        l
      ])
    ];
  }
  let JS = oe(GS), kg = oe(XS), Rg = Object.assign(JS, {
    Group: kg
  });
  function e3(e, t = typeof document < "u" ? document.defaultView : null, n) {
    let r = No(e, "escape");
    tg(t, "keydown", (l) => {
      r && (l.defaultPrevented || l.key === le.Escape && n(l));
    });
  }
  function t3() {
    var e;
    let [t] = c.useState(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = c.useState((e = t == null ? void 0 : t.matches) != null ? e : false);
    return J(() => {
      if (!t)
        return;
      function l(o) {
        r(o.matches);
      }
      return t.addEventListener("change", l), () => t.removeEventListener("change", l);
    }, [
      t
    ]), n;
  }
  function n3({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
    let r = Jr(n), l = W(() => {
      var o, s;
      let i = [];
      for (let a of e)
        a !== null && (Jt(a) ? i.push(a) : "current" in a && Jt(a.current) && i.push(a.current));
      if (t != null && t.current)
        for (let a of t.current)
          i.push(a);
      for (let a of (o = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? o : [])
        a !== document.body && a !== document.head && Jt(a) && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((s = n == null ? void 0 : n.getRootNode()) == null ? void 0 : s.host)) || i.some((u) => a.contains(u)) || i.push(a));
      return i;
    });
    return {
      resolveContainers: l,
      contains: W((o) => l().some((s) => s.contains(o)))
    };
  }
  let Tg = c.createContext(null);
  function $p({ children: e, node: t }) {
    let [n, r] = c.useState(null), l = $g(t ?? n);
    return R.createElement(Tg.Provider, {
      value: l
    }, e, l === null && R.createElement(co, {
      features: uo.Hidden,
      ref: (o) => {
        var s, i;
        if (o) {
          for (let a of (i = (s = _n(o)) == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? i : [])
            if (a !== document.body && a !== document.head && Jt(a) && a != null && a.contains(o)) {
              r(a);
              break;
            }
        }
      }
    }));
  }
  function $g(e = null) {
    var t;
    return (t = c.useContext(Tg)) != null ? t : e;
  }
  function Ri() {
    let e = c.useRef(false);
    return J(() => (e.current = true, () => {
      e.current = false;
    }), []), e;
  }
  var Ll = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ll || {});
  function r3() {
    let e = c.useRef(0);
    return Jh(true, "keydown", (t) => {
      t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
    }, true), e;
  }
  function jg(e) {
    if (!e)
      return /* @__PURE__ */ new Set();
    if (typeof e == "function")
      return new Set(e());
    let t = /* @__PURE__ */ new Set();
    for (let n of e.current)
      Jt(n.current) && t.add(n.current);
    return t;
  }
  let l3 = "div";
  var Wn = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(Wn || {});
  function o3(e, t) {
    let n = c.useRef(null), r = Ee(n, t), { initialFocus: l, initialFocusFallback: o, containers: s, features: i = 15, ...a } = e;
    $o() || (i = 0);
    let u = Jr(n);
    u3(i, {
      ownerDocument: u
    });
    let d = c3(i, {
      ownerDocument: u,
      container: n,
      initialFocus: l,
      initialFocusFallback: o
    });
    d3(i, {
      ownerDocument: u,
      container: n,
      containers: s,
      previousActiveElement: d
    });
    let m = r3(), v = W((g) => {
      if (!rt(n.current))
        return;
      let y = n.current;
      ((E) => E())(() => {
        Ae(m.current, {
          [Ll.Forwards]: () => {
            mt(y, ve.First, {
              skipElements: [
                g.relatedTarget,
                o
              ]
            });
          },
          [Ll.Backwards]: () => {
            mt(y, ve.Last, {
              skipElements: [
                g.relatedTarget,
                o
              ]
            });
          }
        });
      });
    }), f = No(!!(i & 2), "focus-trap#tab-lock"), x = sl(), w = c.useRef(false), b = {
      ref: r,
      onKeyDown(g) {
        g.key == "Tab" && (w.current = true, x.requestAnimationFrame(() => {
          w.current = false;
        }));
      },
      onBlur(g) {
        if (!(i & 4))
          return;
        let y = jg(s);
        rt(n.current) && y.add(n.current);
        let E = g.relatedTarget;
        Ut(E) && E.dataset.headlessuiFocusGuard !== "true" && (Lg(y, E) || (w.current ? mt(n.current, Ae(m.current, {
          [Ll.Forwards]: () => ve.Next,
          [Ll.Backwards]: () => ve.Previous
        }) | ve.WrapAround, {
          relativeTo: g.target
        }) : Ut(g.target) && Ht(g.target)));
      }
    }, h = ce();
    return R.createElement(R.Fragment, null, f && R.createElement(co, {
      as: "button",
      type: "button",
      "data-headlessui-focus-guard": true,
      onFocus: v,
      features: uo.Focusable
    }), h({
      ourProps: b,
      theirProps: a,
      defaultTag: l3,
      name: "FocusTrap"
    }), f && R.createElement(co, {
      as: "button",
      type: "button",
      "data-headlessui-focus-guard": true,
      onFocus: v,
      features: uo.Focusable
    }));
  }
  let s3 = oe(o3), i3 = Object.assign(s3, {
    features: Wn
  });
  function a3(e = true) {
    let t = c.useRef(hn.slice());
    return od(([n], [r]) => {
      r === true && n === false && So(() => {
        t.current.splice(0);
      }), r === false && n === true && (t.current = hn.slice());
    }, [
      e,
      hn,
      t
    ]), W(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
    });
  }
  function u3(e, { ownerDocument: t }) {
    let n = !!(e & 8), r = a3(n);
    od(() => {
      n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && Ht(r());
    }, [
      n
    ]), dd(() => {
      n && Ht(r());
    });
  }
  function c3(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: l }) {
    let o = c.useRef(null), s = No(!!(e & 1), "focus-trap#initial-focus"), i = Ri();
    return od(() => {
      if (e === 0)
        return;
      if (!s) {
        l != null && l.current && Ht(l.current);
        return;
      }
      let a = n.current;
      a && So(() => {
        if (!i.current)
          return;
        let u = t == null ? void 0 : t.activeElement;
        if (r != null && r.current) {
          if ((r == null ? void 0 : r.current) === u) {
            o.current = u;
            return;
          }
        } else if (a.contains(u)) {
          o.current = u;
          return;
        }
        if (r != null && r.current)
          Ht(r.current);
        else {
          if (e & 16) {
            if (mt(a, ve.First | ve.AutoFocus) !== Gn.Error)
              return;
          } else if (mt(a, ve.First) !== Gn.Error)
            return;
          if (l != null && l.current && (Ht(l.current), (t == null ? void 0 : t.activeElement) === l.current))
            return;
          console.warn("There are no focusable elements inside the <FocusTrap />");
        }
        o.current = t == null ? void 0 : t.activeElement;
      });
    }, [
      l,
      s,
      e
    ]), o;
  }
  function d3(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: l }) {
    let o = Ri(), s = !!(e & 4);
    tg(t == null ? void 0 : t.defaultView, "focus", (i) => {
      if (!s || !o.current)
        return;
      let a = jg(r);
      rt(n.current) && a.add(n.current);
      let u = l.current;
      if (!u)
        return;
      let d = i.target;
      rt(d) ? Lg(a, d) ? (l.current = d, Ht(d)) : (i.preventDefault(), i.stopPropagation(), Ht(u)) : Ht(l.current);
    }, true);
  }
  function Lg(e, t) {
    for (let n of e)
      if (n.contains(t))
        return true;
    return false;
  }
  function Pg(e) {
    var t;
    return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : Ig) !== c.Fragment || R.Children.count(e.children) === 1;
  }
  let Ti = c.createContext(null);
  Ti.displayName = "TransitionContext";
  var f3 = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(f3 || {});
  function p3() {
    let e = c.useContext(Ti);
    if (e === null)
      throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e;
  }
  function m3() {
    let e = c.useContext($i);
    if (e === null)
      throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e;
  }
  let $i = c.createContext(null);
  $i.displayName = "NestingContext";
  function ji(e) {
    return "children" in e ? ji(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
  }
  function Og(e, t) {
    let n = $t(e), r = c.useRef([]), l = Ri(), o = sl(), s = W((f, x = xn.Hidden) => {
      let w = r.current.findIndex(({ el: b }) => b === f);
      w !== -1 && (Ae(x, {
        [xn.Unmount]() {
          r.current.splice(w, 1);
        },
        [xn.Hidden]() {
          r.current[w].state = "hidden";
        }
      }), o.microTask(() => {
        var b;
        !ji(r) && l.current && ((b = n.current) == null || b.call(n));
      }));
    }), i = W((f) => {
      let x = r.current.find(({ el: w }) => w === f);
      return x ? x.state !== "visible" && (x.state = "visible") : r.current.push({
        el: f,
        state: "visible"
      }), () => s(f, xn.Unmount);
    }), a = c.useRef([]), u = c.useRef(Promise.resolve()), d = c.useRef({
      enter: [],
      leave: []
    }), m = W((f, x, w) => {
      a.current.splice(0), t && (t.chains.current[x] = t.chains.current[x].filter(([b]) => b !== f)), t == null ? void 0 : t.chains.current[x].push([
        f,
        new Promise((b) => {
          a.current.push(b);
        })
      ]), t == null ? void 0 : t.chains.current[x].push([
        f,
        new Promise((b) => {
          Promise.all(d.current[x].map(([h, g]) => g)).then(() => b());
        })
      ]), x === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => w(x)) : w(x);
    }), v = W((f, x, w) => {
      Promise.all(d.current[x].splice(0).map(([b, h]) => h)).then(() => {
        var b;
        (b = a.current.shift()) == null || b();
      }).then(() => w(x));
    });
    return c.useMemo(() => ({
      children: r,
      register: i,
      unregister: s,
      onStart: m,
      onStop: v,
      wait: u,
      chains: d
    }), [
      i,
      s,
      r,
      m,
      v,
      d,
      u
    ]);
  }
  let Ig = c.Fragment, Mg = Ln.RenderStrategy;
  function h3(e, t) {
    var n, r;
    let { transition: l = true, beforeEnter: o, afterEnter: s, beforeLeave: i, afterLeave: a, enter: u, enterFrom: d, enterTo: m, entered: v, leave: f, leaveFrom: x, leaveTo: w, ...b } = e, [h, g] = c.useState(null), y = c.useRef(null), E = Pg(e), S = Ee(...E ? [
      y,
      t,
      g
    ] : t === null ? [] : [
      t
    ]), N = (n = b.unmount) == null || n ? xn.Unmount : xn.Hidden, { show: T, appear: k, initial: M } = p3(), [$, I] = c.useState(T ? "visible" : "hidden"), Z = m3(), { register: B, unregister: P } = Z;
    J(() => B(y), [
      B,
      y
    ]), J(() => {
      if (N === xn.Hidden && y.current) {
        if (T && $ !== "visible") {
          I("visible");
          return;
        }
        return Ae($, {
          hidden: () => P(y),
          visible: () => B(y)
        });
      }
    }, [
      $,
      y,
      B,
      P,
      T,
      N
    ]);
    let A = $o();
    J(() => {
      if (E && A && $ === "visible" && y.current === null)
        throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
    }, [
      y,
      $,
      A,
      E
    ]);
    let F = M && !k, H = k && T && M, j = c.useRef(false), C = Og(() => {
      j.current || (I("hidden"), P(y));
    }, Z), L = W((X) => {
      j.current = true;
      let st = X ? "enter" : "leave";
      C.onStart(y, st, (Qe) => {
        Qe === "enter" ? o == null ? void 0 : o() : Qe === "leave" && (i == null ? void 0 : i());
      });
    }), V = W((X) => {
      let st = X ? "enter" : "leave";
      j.current = false, C.onStop(y, st, (Qe) => {
        Qe === "enter" ? s == null ? void 0 : s() : Qe === "leave" && (a == null ? void 0 : a());
      }), st === "leave" && !ji(C) && (I("hidden"), P(y));
    });
    c.useEffect(() => {
      E && l || (L(T), V(T));
    }, [
      T,
      E,
      l
    ]);
    let D = (() => !(!l || !E || !A || F))(), [, _] = og(D, h, T, {
      start: L,
      end: V
    }), K = Hn({
      ref: S,
      className: ((r = _u(b.className, H && u, H && d, _.enter && u, _.enter && _.closed && d, _.enter && !_.closed && m, _.leave && f, _.leave && !_.closed && x, _.leave && _.closed && w, !_.transition && T && v)) == null ? void 0 : r.trim()) || void 0,
      ...lg(_)
    }), G = 0;
    $ === "visible" && (G |= Ue.Open), $ === "hidden" && (G |= Ue.Closed), T && $ === "hidden" && (G |= Ue.Opening), !T && $ === "visible" && (G |= Ue.Closing);
    let Ne = ce();
    return R.createElement($i.Provider, {
      value: C
    }, R.createElement(Eg, {
      value: G
    }, Ne({
      ourProps: K,
      theirProps: b,
      defaultTag: Ig,
      features: Mg,
      visible: $ === "visible",
      name: "Transition.Child"
    })));
  }
  function g3(e, t) {
    let { show: n, appear: r = false, unmount: l = true, ...o } = e, s = c.useRef(null), i = Pg(e), a = Ee(...i ? [
      s,
      t
    ] : t === null ? [] : [
      t
    ]);
    $o();
    let u = To();
    if (n === void 0 && u !== null && (n = (u & Ue.Open) === Ue.Open), n === void 0)
      throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [d, m] = c.useState(n ? "visible" : "hidden"), v = Og(() => {
      n || m("hidden");
    }), [f, x] = c.useState(true), w = c.useRef([
      n
    ]);
    J(() => {
      f !== false && w.current[w.current.length - 1] !== n && (w.current.push(n), x(false));
    }, [
      w,
      n
    ]);
    let b = c.useMemo(() => ({
      show: n,
      appear: r,
      initial: f
    }), [
      n,
      r,
      f
    ]);
    J(() => {
      n ? m("visible") : !ji(v) && s.current !== null && m("hidden");
    }, [
      n,
      v
    ]);
    let h = {
      unmount: l
    }, g = W(() => {
      var S;
      f && x(false), (S = e.beforeEnter) == null || S.call(e);
    }), y = W(() => {
      var S;
      f && x(false), (S = e.beforeLeave) == null || S.call(e);
    }), E = ce();
    return R.createElement($i.Provider, {
      value: v
    }, R.createElement(Ti.Provider, {
      value: b
    }, E({
      ourProps: {
        ...h,
        as: c.Fragment,
        children: R.createElement(Ag, {
          ref: a,
          ...h,
          ...o,
          beforeEnter: g,
          beforeLeave: y
        })
      },
      theirProps: {},
      defaultTag: c.Fragment,
      features: Mg,
      visible: d === "visible",
      name: "Transition"
    })));
  }
  function v3(e, t) {
    let n = c.useContext(Ti) !== null, r = To() !== null;
    return R.createElement(R.Fragment, null, !n && r ? R.createElement(Wu, {
      ref: t,
      ...e
    }) : R.createElement(Ag, {
      ref: t,
      ...e
    }));
  }
  let Wu = oe(g3), Ag = oe(h3), fd = oe(v3), Fg = Object.assign(Wu, {
    Child: fd,
    Root: Wu
  });
  var y3 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(y3 || {}), x3 = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(x3 || {});
  let w3 = {
    0(e, t) {
      return e.titleId === t.id ? e : {
        ...e,
        titleId: t.id
      };
    }
  }, pd = c.createContext(null);
  pd.displayName = "DialogContext";
  function Li(e) {
    let t = c.useContext(pd);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, Li), n;
    }
    return t;
  }
  function b3(e, t) {
    return Ae(t.type, w3, e, t);
  }
  let jp = oe(function(e, t) {
    let n = c.useId(), { id: r = `headlessui-dialog-${n}`, open: l, onClose: o, initialFocus: s, role: i = "dialog", autoFocus: a = true, __demoMode: u = false, unmount: d = false, ...m } = e, v = c.useRef(false);
    i = function() {
      return i === "dialog" || i === "alertdialog" ? i : (v.current || (v.current = true, console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
    }();
    let f = To();
    l === void 0 && f !== null && (l = (f & Ue.Open) === Ue.Open);
    let x = c.useRef(null), w = Ee(x, t), b = Jr(x), h = l ? 0 : 1, [g, y] = c.useReducer(b3, {
      titleId: null,
      descriptionId: null,
      panelRef: c.createRef()
    }), E = W(() => o(false)), S = W((_) => y({
      type: 0,
      id: _
    })), N = $o() ? h === 0 : false, [T, k] = qS(), M = {
      get current() {
        var _;
        return (_ = g.panelRef.current) != null ? _ : x.current;
      }
    }, $ = $g(), { resolveContainers: I } = n3({
      mainTreeNode: $,
      portals: T,
      defaultContainers: [
        M
      ]
    }), Z = f !== null ? (f & Ue.Closing) === Ue.Closing : false;
    Kh(u || Z ? false : N, {
      allowed: W(() => {
        var _, K;
        return [
          (K = (_ = x.current) == null ? void 0 : _.closest("[data-headlessui-portal]")) != null ? K : null
        ];
      }),
      disallowed: W(() => {
        var _;
        return [
          (_ = $ == null ? void 0 : $.closest("body > *:not(#headlessui-portal-root)")) != null ? _ : null
        ];
      })
    });
    let B = bi.get(null);
    J(() => {
      if (N)
        return B.actions.push(r), () => B.actions.pop(r);
    }, [
      B,
      r,
      N
    ]);
    let P = jt(B, c.useCallback((_) => B.selectors.isTop(_, r), [
      B,
      r
    ]));
    eg(P, I, (_) => {
      _.preventDefault(), E();
    }), e3(P, b == null ? void 0 : b.defaultView, (_) => {
      _.preventDefault(), _.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), E();
    }), rg(u || Z ? false : N, b, I), Gh(N, x, E);
    let [A, F] = _h(), H = c.useMemo(() => [
      {
        dialogState: h,
        close: E,
        setTitleId: S,
        unmount: d
      },
      g
    ], [
      h,
      g,
      E,
      S,
      d
    ]), j = c.useMemo(() => ({
      open: h === 0
    }), [
      h
    ]), C = {
      ref: w,
      id: r,
      role: i,
      tabIndex: -1,
      "aria-modal": u ? void 0 : h === 0 ? true : void 0,
      "aria-labelledby": g.titleId,
      "aria-describedby": A,
      unmount: d
    }, L = !t3(), V = Wn.None;
    N && !u && (V |= Wn.RestoreFocus, V |= Wn.TabLock, a && (V |= Wn.AutoFocus), L && (V |= Wn.InitialFocus));
    let D = ce();
    return R.createElement(BS, null, R.createElement(Tp, {
      force: true
    }, R.createElement(Rg, null, R.createElement(pd.Provider, {
      value: H
    }, R.createElement(kg, {
      target: x
    }, R.createElement(Tp, {
      force: false
    }, R.createElement(F, {
      slot: j
    }, R.createElement(k, null, R.createElement(i3, {
      initialFocus: s,
      initialFocusFallback: x,
      containers: I,
      features: V
    }, R.createElement(Db, {
      value: E
    }, D({
      ourProps: C,
      theirProps: m,
      slot: j,
      defaultTag: E3,
      features: S3,
      visible: h === 0,
      name: "Dialog"
    })))))))))));
  }), E3 = "div", S3 = Ln.RenderStrategy | Ln.Static;
  function C3(e, t) {
    let { transition: n = false, open: r, ...l } = e, o = To(), s = e.hasOwnProperty("open") || o !== null, i = e.hasOwnProperty("onClose");
    if (!s && !i)
      throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!s)
      throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!i)
      throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (!o && typeof e.open != "boolean")
      throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
    if (typeof e.onClose != "function")
      throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
    return (r !== void 0 || n) && !l.static ? R.createElement($p, null, R.createElement(Fg, {
      show: r,
      transition: n,
      unmount: l.unmount
    }, R.createElement(jp, {
      ref: t,
      ...l
    }))) : R.createElement($p, null, R.createElement(jp, {
      ref: t,
      open: r,
      ...l
    }));
  }
  let N3 = "div";
  function k3(e, t) {
    let n = c.useId(), { id: r = `headlessui-dialog-panel-${n}`, transition: l = false, ...o } = e, [{ dialogState: s, unmount: i }, a] = Li("Dialog.Panel"), u = Ee(t, a.panelRef), d = c.useMemo(() => ({
      open: s === 0
    }), [
      s
    ]), m = W((b) => {
      b.stopPropagation();
    }), v = {
      ref: u,
      id: r,
      onClick: m
    }, f = l ? fd : c.Fragment, x = l ? {
      unmount: i
    } : {}, w = ce();
    return R.createElement(f, {
      ...x
    }, w({
      ourProps: v,
      theirProps: o,
      slot: d,
      defaultTag: N3,
      name: "Dialog.Panel"
    }));
  }
  let R3 = "div";
  function T3(e, t) {
    let { transition: n = false, ...r } = e, [{ dialogState: l, unmount: o }] = Li("Dialog.Backdrop"), s = c.useMemo(() => ({
      open: l === 0
    }), [
      l
    ]), i = {
      ref: t,
      "aria-hidden": true
    }, a = n ? fd : c.Fragment, u = n ? {
      unmount: o
    } : {}, d = ce();
    return R.createElement(a, {
      ...u
    }, d({
      ourProps: i,
      theirProps: r,
      slot: s,
      defaultTag: R3,
      name: "Dialog.Backdrop"
    }));
  }
  let $3 = "h2";
  function j3(e, t) {
    let n = c.useId(), { id: r = `headlessui-dialog-title-${n}`, ...l } = e, [{ dialogState: o, setTitleId: s }] = Li("Dialog.Title"), i = Ee(t);
    c.useEffect(() => (s(r), () => s(null)), [
      r,
      s
    ]);
    let a = c.useMemo(() => ({
      open: o === 0
    }), [
      o
    ]), u = {
      ref: i,
      id: r
    };
    return ce()({
      ourProps: u,
      theirProps: l,
      slot: a,
      defaultTag: $3,
      name: "Dialog.Title"
    });
  }
  let L3 = oe(C3), _g = oe(k3), P3 = oe(T3), Dg = oe(j3), O3 = Object.assign(L3, {
    Panel: _g,
    Title: Dg,
    Description: Ob
  });
  function I3(e, t) {
    let n = c.useRef({
      left: 0,
      top: 0
    });
    if (J(() => {
      if (!t)
        return;
      let l = t.getBoundingClientRect();
      l && (n.current = l);
    }, [
      e,
      t
    ]), t == null || !e || t === document.activeElement)
      return false;
    let r = t.getBoundingClientRect();
    return r.top !== n.current.top || r.left !== n.current.left;
  }
  let Lp = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
  function Pp(e) {
    var t, n;
    let r = (t = e.innerText) != null ? t : "", l = e.cloneNode(true);
    if (!rt(l))
      return r;
    let o = false;
    for (let i of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
      i.remove(), o = true;
    let s = o ? (n = l.innerText) != null ? n : "" : r;
    return Lp.test(s) && (s = s.replace(Lp, "")), s;
  }
  function M3(e) {
    let t = e.getAttribute("aria-label");
    if (typeof t == "string")
      return t.trim();
    let n = e.getAttribute("aria-labelledby");
    if (n) {
      let r = n.split(" ").map((l) => {
        let o = document.getElementById(l);
        if (o) {
          let s = o.getAttribute("aria-label");
          return typeof s == "string" ? s.trim() : Pp(o).trim();
        }
        return null;
      }).filter(Boolean);
      if (r.length > 0)
        return r.join(", ");
    }
    return Pp(e).trim();
  }
  function A3(e) {
    let t = c.useRef(""), n = c.useRef("");
    return W(() => {
      let r = e.current;
      if (!r)
        return "";
      let l = r.innerText;
      if (t.current === l)
        return n.current;
      let o = M3(r).trim().toLowerCase();
      return t.current = l, n.current = o, o;
    });
  }
  var F3 = Object.defineProperty, _3 = (e, t, n) => t in e ? F3(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, Op = (e, t, n) => (_3(e, typeof t != "symbol" ? t + "" : t, n), n), $e = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($e || {}), Js = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Js || {}), re = ((e) => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItems = 5] = "RegisterItems", e[e.UnregisterItems = 6] = "UnregisterItems", e[e.SetButtonElement = 7] = "SetButtonElement", e[e.SetItemsElement = 8] = "SetItemsElement", e[e.SortItems = 9] = "SortItems", e))(re || {});
  function Ip(e, t = (n) => n) {
    let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, r = Qn(t(e.items.slice()), (o) => o.dataRef.current.domRef.current), l = n ? r.indexOf(n) : null;
    return l === -1 && (l = null), {
      items: r,
      activeItemIndex: l
    };
  }
  let D3 = {
    1(e) {
      return e.menuState === 1 ? e : {
        ...e,
        activeItemIndex: null,
        pendingFocus: {
          focus: ye.Nothing
        },
        menuState: 1
      };
    },
    0(e, t) {
      return e.menuState === 0 ? e : {
        ...e,
        __demoMode: false,
        pendingFocus: t.focus,
        menuState: 0
      };
    },
    2: (e, t) => {
      var n, r, l, o, s;
      if (e.menuState === 1)
        return e;
      let i = {
        ...e,
        searchQuery: "",
        activationTrigger: (n = t.trigger) != null ? n : 1,
        __demoMode: false
      };
      if (t.focus === ye.Nothing)
        return {
          ...i,
          activeItemIndex: null
        };
      if (t.focus === ye.Specific)
        return {
          ...i,
          activeItemIndex: e.items.findIndex((d) => d.id === t.id)
        };
      if (t.focus === ye.Previous) {
        let d = e.activeItemIndex;
        if (d !== null) {
          let m = e.items[d].dataRef.current.domRef, v = es(t, {
            resolveItems: () => e.items,
            resolveActiveIndex: () => e.activeItemIndex,
            resolveId: (f) => f.id,
            resolveDisabled: (f) => f.dataRef.current.disabled
          });
          if (v !== null) {
            let f = e.items[v].dataRef.current.domRef;
            if (((r = m.current) == null ? void 0 : r.previousElementSibling) === f.current || ((l = f.current) == null ? void 0 : l.previousElementSibling) === null)
              return {
                ...i,
                activeItemIndex: v
              };
          }
        }
      } else if (t.focus === ye.Next) {
        let d = e.activeItemIndex;
        if (d !== null) {
          let m = e.items[d].dataRef.current.domRef, v = es(t, {
            resolveItems: () => e.items,
            resolveActiveIndex: () => e.activeItemIndex,
            resolveId: (f) => f.id,
            resolveDisabled: (f) => f.dataRef.current.disabled
          });
          if (v !== null) {
            let f = e.items[v].dataRef.current.domRef;
            if (((o = m.current) == null ? void 0 : o.nextElementSibling) === f.current || ((s = f.current) == null ? void 0 : s.nextElementSibling) === null)
              return {
                ...i,
                activeItemIndex: v
              };
          }
        }
      }
      let a = Ip(e), u = es(t, {
        resolveItems: () => a.items,
        resolveActiveIndex: () => a.activeItemIndex,
        resolveId: (d) => d.id,
        resolveDisabled: (d) => d.dataRef.current.disabled
      });
      return {
        ...i,
        ...a,
        activeItemIndex: u
      };
    },
    3: (e, t) => {
      let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), l = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((s) => {
        var i;
        return ((i = s.dataRef.current.textValue) == null ? void 0 : i.startsWith(r)) && !s.dataRef.current.disabled;
      }), o = l ? e.items.indexOf(l) : -1;
      return o === -1 || o === e.activeItemIndex ? {
        ...e,
        searchQuery: r
      } : {
        ...e,
        searchQuery: r,
        activeItemIndex: o,
        activationTrigger: 1
      };
    },
    4(e) {
      return e.searchQuery === "" ? e : {
        ...e,
        searchQuery: "",
        searchActiveItemIndex: null
      };
    },
    5: (e, t) => {
      let n = e.items.concat(t.items.map((l) => l)), r = e.activeItemIndex;
      return e.pendingFocus.focus !== ye.Nothing && (r = es(e.pendingFocus, {
        resolveItems: () => n,
        resolveActiveIndex: () => e.activeItemIndex,
        resolveId: (l) => l.id,
        resolveDisabled: (l) => l.dataRef.current.disabled
      })), {
        ...e,
        items: n,
        activeItemIndex: r,
        pendingFocus: {
          focus: ye.Nothing
        },
        pendingShouldSort: true
      };
    },
    6: (e, t) => {
      let n = e.items, r = [], l = new Set(t.items);
      for (let [o, s] of n.entries())
        if (l.has(s.id) && (r.push(o), l.delete(s.id), l.size === 0))
          break;
      if (r.length > 0) {
        n = n.slice();
        for (let o of r.reverse())
          n.splice(o, 1);
      }
      return {
        ...e,
        items: n,
        activationTrigger: 1
      };
    },
    7: (e, t) => e.buttonElement === t.element ? e : {
      ...e,
      buttonElement: t.element
    },
    8: (e, t) => e.itemsElement === t.element ? e : {
      ...e,
      itemsElement: t.element
    },
    9: (e) => e.pendingShouldSort ? {
      ...e,
      ...Ip(e),
      pendingShouldSort: false
    } : e
  };
  class md extends Bh {
    constructor(t) {
      super(t), Op(this, "actions", {
        registerItem: sp(() => {
          let n = [], r = /* @__PURE__ */ new Set();
          return [
            (l, o) => {
              r.has(o) || (r.add(o), n.push({
                id: l,
                dataRef: o
              }));
            },
            () => (r.clear(), this.send({
              type: 5,
              items: n.splice(0)
            }))
          ];
        }),
        unregisterItem: sp(() => {
          let n = [];
          return [
            (r) => n.push(r),
            () => this.send({
              type: 6,
              items: n.splice(0)
            })
          ];
        })
      }), Op(this, "selectors", {
        activeDescendantId(n) {
          var r;
          let l = n.activeItemIndex, o = n.items;
          return l === null || (r = o[l]) == null ? void 0 : r.id;
        },
        isActive(n, r) {
          var l;
          let o = n.activeItemIndex, s = n.items;
          return o !== null ? ((l = s[o]) == null ? void 0 : l.id) === r : false;
        },
        shouldScrollIntoView(n, r) {
          return n.__demoMode || n.menuState !== 0 || n.activationTrigger === 0 ? false : this.isActive(n, r);
        }
      }), this.on(5, () => {
        this.disposables.requestAnimationFrame(() => {
          this.send({
            type: 9
          });
        });
      });
      {
        let n = this.state.id, r = bi.get(null);
        this.disposables.add(r.on(Wh.Push, (l) => {
          !r.selectors.isTop(l, n) && this.state.menuState === 0 && this.send({
            type: 1
          });
        })), this.on(0, () => r.actions.push(n)), this.on(1, () => r.actions.pop(n));
      }
    }
    static new({ id: t, __demoMode: n = false }) {
      return new md({
        id: t,
        __demoMode: n,
        menuState: n ? 0 : 1,
        buttonElement: null,
        itemsElement: null,
        items: [],
        searchQuery: "",
        activeItemIndex: null,
        activationTrigger: 1,
        pendingShouldSort: false,
        pendingFocus: {
          focus: ye.Nothing
        }
      });
    }
    reduce(t, n) {
      return Ae(n.type, D3, t, n);
    }
  }
  const Ug = c.createContext(null);
  function hd(e) {
    let t = c.useContext(Ug);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, zg), n;
    }
    return t;
  }
  function zg({ id: e, __demoMode: t = false }) {
    let n = c.useMemo(() => md.new({
      id: e,
      __demoMode: t
    }), []);
    return dd(() => n.dispose()), n;
  }
  let U3 = c.Fragment;
  function z3(e, t) {
    let n = c.useId(), { __demoMode: r = false, ...l } = e, o = zg({
      id: n,
      __demoMode: r
    }), [s, i, a] = jt(o, (b) => [
      b.menuState,
      b.itemsElement,
      b.buttonElement
    ]), u = Ee(t), d = bi.get(null), m = jt(d, c.useCallback((b) => d.selectors.isTop(b, n), [
      d,
      n
    ]));
    eg(m, [
      a,
      i
    ], (b, h) => {
      var g;
      o.send({
        type: re.CloseMenu
      }), ld(h, rd.Loose) || (b.preventDefault(), (g = o.state.buttonElement) == null || g.focus());
    });
    let v = W(() => {
      o.send({
        type: re.CloseMenu
      });
    }), f = c.useMemo(() => ({
      open: s === $e.Open,
      close: v
    }), [
      s,
      v
    ]), x = {
      ref: u
    }, w = ce();
    return R.createElement(DS, null, R.createElement(Ug.Provider, {
      value: o
    }, R.createElement(Eg, {
      value: Ae(s, {
        [$e.Open]: Ue.Open,
        [$e.Closed]: Ue.Closed
      })
    }, w({
      ourProps: x,
      theirProps: l,
      slot: f,
      defaultTag: U3,
      name: "Menu"
    }))));
  }
  let B3 = "button";
  function H3(e, t) {
    let n = hd("Menu.Button"), r = c.useId(), { id: l = `headlessui-menu-button-${r}`, disabled: o = false, autoFocus: s = false, ...i } = e, a = c.useRef(null), u = AS(), d = Ee(t, a, MS(), W(($) => n.send({
      type: re.SetButtonElement,
      element: $
    }))), m = W(($) => {
      switch ($.key) {
        case le.Space:
        case le.Enter:
        case le.ArrowDown:
          $.preventDefault(), $.stopPropagation(), n.send({
            type: re.OpenMenu,
            focus: {
              focus: ye.First
            }
          });
          break;
        case le.ArrowUp:
          $.preventDefault(), $.stopPropagation(), n.send({
            type: re.OpenMenu,
            focus: {
              focus: ye.Last
            }
          });
          break;
      }
    }), v = W(($) => {
      switch ($.key) {
        case le.Space:
          $.preventDefault();
          break;
      }
    }), [f, x, w] = jt(n, ($) => [
      $.menuState,
      $.buttonElement,
      $.itemsElement
    ]), b = f === $e.Open;
    mE(b, {
      trigger: x,
      action: c.useCallback(($) => {
        if (x != null && x.contains($.target))
          return qo.Ignore;
        let I = $.target.closest('[role="menuitem"]:not([data-disabled])');
        return rt(I) ? qo.Select(I) : w != null && w.contains($.target) ? qo.Ignore : qo.Close;
      }, [
        x,
        w
      ]),
      close: c.useCallback(() => n.send({
        type: re.CloseMenu
      }), []),
      select: c.useCallback(($) => $.click(), [])
    });
    let h = W(($) => {
      var I;
      if ($.button === 0) {
        if (Rb($.currentTarget))
          return $.preventDefault();
        o || (f === $e.Open ? (Vt.flushSync(() => n.send({
          type: re.CloseMenu
        })), (I = a.current) == null || I.focus({
          preventScroll: true
        })) : ($.preventDefault(), n.send({
          type: re.OpenMenu,
          focus: {
            focus: ye.Nothing
          },
          trigger: Js.Pointer
        })));
      }
    }), { isFocusVisible: g, focusProps: y } = Jc({
      autoFocus: s
    }), { isHovered: E, hoverProps: S } = jh({
      isDisabled: o
    }), { pressed: N, pressProps: T } = Lh({
      disabled: o
    }), k = c.useMemo(() => ({
      open: f === $e.Open,
      active: N || f === $e.Open,
      disabled: o,
      hover: E,
      focus: g,
      autofocus: s
    }), [
      f,
      E,
      g,
      N,
      o,
      s
    ]), M = xi(u(), {
      ref: d,
      id: l,
      type: ng(e, a.current),
      "aria-haspopup": "menu",
      "aria-controls": w == null ? void 0 : w.id,
      "aria-expanded": f === $e.Open,
      disabled: o || void 0,
      autoFocus: s,
      onKeyDown: m,
      onKeyUp: v,
      onPointerDown: h
    }, y, S, T);
    return ce()({
      ourProps: M,
      theirProps: i,
      slot: k,
      defaultTag: B3,
      name: "Menu.Button"
    });
  }
  let W3 = "div", V3 = Ln.RenderStrategy | Ln.Static;
  function Z3(e, t) {
    let n = c.useId(), { id: r = `headlessui-menu-items-${n}`, anchor: l, portal: o = false, modal: s = true, transition: i = false, ...a } = e, u = IS(l), d = hd("Menu.Items"), [m, v] = _S(u), f = FS(), [x, w] = c.useState(null), b = Ee(t, u ? m : null, W((C) => d.send({
      type: re.SetItemsElement,
      element: C
    })), w), [h, g] = jt(d, (C) => [
      C.menuState,
      C.buttonElement
    ]), y = Jr(g), E = Jr(x);
    u && (o = true);
    let S = To(), [N, T] = og(i, x, S !== null ? (S & Ue.Open) === Ue.Open : h === $e.Open);
    Gh(N, g, () => {
      d.send({
        type: re.CloseMenu
      });
    });
    let k = jt(d, (C) => C.__demoMode), M = k ? false : s && h === $e.Open;
    rg(M, E);
    let $ = k ? false : s && h === $e.Open;
    Kh($, {
      allowed: c.useCallback(() => [
        g,
        x
      ], [
        g,
        x
      ])
    });
    let I = h !== $e.Open, Z = I3(I, g) ? false : N;
    c.useEffect(() => {
      let C = x;
      C && h === $e.Open && C !== (E == null ? void 0 : E.activeElement) && C.focus({
        preventScroll: true
      });
    }, [
      h,
      x,
      E
    ]), TE(h === $e.Open, {
      container: x,
      accept(C) {
        return C.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : C.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
      },
      walk(C) {
        C.setAttribute("role", "none");
      }
    });
    let B = sl(), P = W((C) => {
      var L, V, D;
      switch (B.dispose(), C.key) {
        case le.Space:
          if (d.state.searchQuery !== "")
            return C.preventDefault(), C.stopPropagation(), d.send({
              type: re.Search,
              value: C.key
            });
        case le.Enter:
          if (C.preventDefault(), C.stopPropagation(), d.state.activeItemIndex !== null) {
            let { dataRef: _ } = d.state.items[d.state.activeItemIndex];
            (V = (L = _.current) == null ? void 0 : L.domRef.current) == null || V.click();
          }
          d.send({
            type: re.CloseMenu
          }), Xh(d.state.buttonElement);
          break;
        case le.ArrowDown:
          return C.preventDefault(), C.stopPropagation(), d.send({
            type: re.GoToItem,
            focus: ye.Next
          });
        case le.ArrowUp:
          return C.preventDefault(), C.stopPropagation(), d.send({
            type: re.GoToItem,
            focus: ye.Previous
          });
        case le.Home:
        case le.PageUp:
          return C.preventDefault(), C.stopPropagation(), d.send({
            type: re.GoToItem,
            focus: ye.First
          });
        case le.End:
        case le.PageDown:
          return C.preventDefault(), C.stopPropagation(), d.send({
            type: re.GoToItem,
            focus: ye.Last
          });
        case le.Escape:
          C.preventDefault(), C.stopPropagation(), Vt.flushSync(() => d.send({
            type: re.CloseMenu
          })), (D = d.state.buttonElement) == null || D.focus({
            preventScroll: true
          });
          break;
        case le.Tab:
          C.preventDefault(), C.stopPropagation(), Vt.flushSync(() => d.send({
            type: re.CloseMenu
          })), cE(d.state.buttonElement, C.shiftKey ? ve.Previous : ve.Next);
          break;
        default:
          C.key.length === 1 && (d.send({
            type: re.Search,
            value: C.key
          }), B.setTimeout(() => d.send({
            type: re.ClearSearch
          }), 350));
          break;
      }
    }), A = W((C) => {
      switch (C.key) {
        case le.Space:
          C.preventDefault();
          break;
      }
    }), F = c.useMemo(() => ({
      open: h === $e.Open
    }), [
      h
    ]), H = xi(u ? f() : {}, {
      "aria-activedescendant": jt(d, d.selectors.activeDescendantId),
      "aria-labelledby": jt(d, (C) => {
        var L;
        return (L = C.buttonElement) == null ? void 0 : L.id;
      }),
      id: r,
      onKeyDown: P,
      onKeyUp: A,
      role: "menu",
      tabIndex: h === $e.Open ? 0 : void 0,
      ref: b,
      style: {
        ...a.style,
        ...v,
        "--button-width": zb(g, true).width
      },
      ...lg(T)
    }), j = ce();
    return R.createElement(Rg, {
      enabled: o ? e.static || N : false,
      ownerDocument: y
    }, j({
      ourProps: H,
      theirProps: a,
      slot: F,
      defaultTag: W3,
      features: V3,
      visible: Z,
      name: "Menu.Items"
    }));
  }
  let Y3 = c.Fragment;
  function K3(e, t) {
    let n = c.useId(), { id: r = `headlessui-menu-item-${n}`, disabled: l = false, ...o } = e, s = hd("Menu.Item"), i = jt(s, (I) => s.selectors.isActive(I, r)), a = c.useRef(null), u = Ee(t, a), d = jt(s, (I) => s.selectors.shouldScrollIntoView(I, r));
    J(() => {
      if (d)
        return xt().requestAnimationFrame(() => {
          var I, Z;
          (Z = (I = a.current) == null ? void 0 : I.scrollIntoView) == null || Z.call(I, {
            block: "nearest"
          });
        });
    }, [
      d,
      a
    ]);
    let m = A3(a), v = c.useRef({
      disabled: l,
      domRef: a,
      get textValue() {
        return m();
      }
    });
    J(() => {
      v.current.disabled = l;
    }, [
      v,
      l
    ]), J(() => (s.actions.registerItem(r, v), () => s.actions.unregisterItem(r)), [
      v,
      r
    ]);
    let f = W(() => {
      s.send({
        type: re.CloseMenu
      });
    }), x = W((I) => {
      if (l)
        return I.preventDefault();
      s.send({
        type: re.CloseMenu
      }), Xh(s.state.buttonElement);
    }), w = W(() => {
      if (l)
        return s.send({
          type: re.GoToItem,
          focus: ye.Nothing
        });
      s.send({
        type: re.GoToItem,
        focus: ye.Specific,
        id: r
      });
    }), b = EE(), h = W((I) => {
      b.update(I), !l && (i || s.send({
        type: re.GoToItem,
        focus: ye.Specific,
        id: r,
        trigger: Js.Pointer
      }));
    }), g = W((I) => {
      b.wasMoved(I) && (l || i || s.send({
        type: re.GoToItem,
        focus: ye.Specific,
        id: r,
        trigger: Js.Pointer
      }));
    }), y = W((I) => {
      b.wasMoved(I) && (l || i && s.send({
        type: re.GoToItem,
        focus: ye.Nothing
      }));
    }), [E, S] = Dh(), [N, T] = _h(), k = c.useMemo(() => ({
      active: i,
      focus: i,
      disabled: l,
      close: f
    }), [
      i,
      l,
      f
    ]), M = {
      id: r,
      ref: u,
      role: "menuitem",
      tabIndex: l === true ? void 0 : -1,
      "aria-disabled": l === true ? true : void 0,
      "aria-labelledby": E,
      "aria-describedby": N,
      disabled: void 0,
      onClick: x,
      onFocus: w,
      onPointerEnter: h,
      onMouseEnter: h,
      onPointerMove: g,
      onMouseMove: g,
      onPointerLeave: y,
      onMouseLeave: y
    }, $ = ce();
    return R.createElement(S, null, R.createElement(T, null, $({
      ourProps: M,
      theirProps: o,
      slot: k,
      defaultTag: Y3,
      name: "Menu.Item"
    })));
  }
  let G3 = "div";
  function Q3(e, t) {
    let [n, r] = Dh(), l = e, o = {
      ref: t,
      "aria-labelledby": n,
      role: "group"
    }, s = ce();
    return R.createElement(r, null, s({
      ourProps: o,
      theirProps: l,
      slot: {},
      defaultTag: G3,
      name: "Menu.Section"
    }));
  }
  let X3 = "header";
  function q3(e, t) {
    let n = c.useId(), { id: r = `headlessui-menu-heading-${n}`, ...l } = e, o = nd();
    J(() => o.register(r), [
      r,
      o.register
    ]);
    let s = {
      id: r,
      ref: t,
      role: "presentation",
      ...o.props
    };
    return ce()({
      ourProps: s,
      theirProps: l,
      slot: {},
      defaultTag: X3,
      name: "Menu.Heading"
    });
  }
  let J3 = "div";
  function eC(e, t) {
    let n = e, r = {
      ref: t,
      role: "separator"
    };
    return ce()({
      ourProps: r,
      theirProps: n,
      slot: {},
      defaultTag: J3,
      name: "Menu.Separator"
    });
  }
  let tC = oe(z3), nC = oe(H3), rC = oe(Z3), lC = oe(K3), oC = oe(Q3), sC = oe(q3), iC = oe(eC), Cl = Object.assign(tC, {
    Button: nC,
    Items: rC,
    Item: lC,
    Section: oC,
    Heading: sC,
    Separator: iC
  });
  function aC({ onFocus: e }) {
    let [t, n] = c.useState(true), r = Ri();
    return t ? R.createElement(co, {
      as: "button",
      type: "button",
      features: uo.Focusable,
      onFocus: (l) => {
        l.preventDefault();
        let o, s = 50;
        function i() {
          if (s-- <= 0) {
            o && cancelAnimationFrame(o);
            return;
          }
          if (e()) {
            if (cancelAnimationFrame(o), !r.current)
              return;
            n(false);
            return;
          }
          o = requestAnimationFrame(i);
        }
        o = requestAnimationFrame(i);
      }
    }) : null;
  }
  const Bg = c.createContext(null);
  function uC() {
    return {
      groups: /* @__PURE__ */ new Map(),
      get(e, t) {
        var n;
        let r = this.groups.get(e);
        r || (r = /* @__PURE__ */ new Map(), this.groups.set(e, r));
        let l = (n = r.get(t)) != null ? n : 0;
        r.set(t, l + 1);
        let o = Array.from(r.keys()).indexOf(t);
        function s() {
          let i = r.get(t);
          i > 1 ? r.set(t, i - 1) : r.delete(t);
        }
        return [
          o,
          s
        ];
      }
    };
  }
  function cC({ children: e }) {
    let t = c.useRef(uC());
    return c.createElement(Bg.Provider, {
      value: t
    }, e);
  }
  function Hg(e) {
    let t = c.useContext(Bg);
    if (!t)
      throw new Error("You must wrap your component in a <StableCollection>");
    let n = c.useId(), [r, l] = t.current.get(e, n);
    return c.useEffect(() => l, []), r;
  }
  var dC = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(dC || {}), fC = ((e) => (e[e.Less = -1] = "Less", e[e.Equal = 0] = "Equal", e[e.Greater = 1] = "Greater", e))(fC || {}), pC = ((e) => (e[e.SetSelectedIndex = 0] = "SetSelectedIndex", e[e.RegisterTab = 1] = "RegisterTab", e[e.UnregisterTab = 2] = "UnregisterTab", e[e.RegisterPanel = 3] = "RegisterPanel", e[e.UnregisterPanel = 4] = "UnregisterPanel", e))(pC || {});
  let mC = {
    0(e, t) {
      var n;
      let r = Qn(e.tabs, (d) => d.current), l = Qn(e.panels, (d) => d.current), o = r.filter((d) => {
        var m;
        return !((m = d.current) != null && m.hasAttribute("disabled"));
      }), s = {
        ...e,
        tabs: r,
        panels: l
      };
      if (t.index < 0 || t.index > r.length - 1) {
        let d = Ae(Math.sign(t.index - e.selectedIndex), {
          [-1]: () => 1,
          0: () => Ae(Math.sign(t.index), {
            [-1]: () => 0,
            0: () => 0,
            1: () => 1
          }),
          1: () => 0
        });
        if (o.length === 0)
          return s;
        let m = Ae(d, {
          0: () => r.indexOf(o[0]),
          1: () => r.indexOf(o[o.length - 1])
        });
        return {
          ...s,
          selectedIndex: m === -1 ? e.selectedIndex : m
        };
      }
      let i = r.slice(0, t.index), a = [
        ...r.slice(t.index),
        ...i
      ].find((d) => o.includes(d));
      if (!a)
        return s;
      let u = (n = r.indexOf(a)) != null ? n : e.selectedIndex;
      return u === -1 && (u = e.selectedIndex), {
        ...s,
        selectedIndex: u
      };
    },
    1(e, t) {
      if (e.tabs.includes(t.tab))
        return e;
      let n = e.tabs[e.selectedIndex], r = Qn([
        ...e.tabs,
        t.tab
      ], (o) => o.current), l = e.selectedIndex;
      return e.info.current.isControlled || (l = r.indexOf(n), l === -1 && (l = e.selectedIndex)), {
        ...e,
        tabs: r,
        selectedIndex: l
      };
    },
    2(e, t) {
      return {
        ...e,
        tabs: e.tabs.filter((n) => n !== t.tab)
      };
    },
    3(e, t) {
      return e.panels.includes(t.panel) ? e : {
        ...e,
        panels: Qn([
          ...e.panels,
          t.panel
        ], (n) => n.current)
      };
    },
    4(e, t) {
      return {
        ...e,
        panels: e.panels.filter((n) => n !== t.panel)
      };
    }
  }, gd = c.createContext(null);
  gd.displayName = "TabsDataContext";
  function tl(e) {
    let t = c.useContext(gd);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, tl), n;
    }
    return t;
  }
  let vd = c.createContext(null);
  vd.displayName = "TabsActionsContext";
  function yd(e) {
    let t = c.useContext(vd);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, yd), n;
    }
    return t;
  }
  function hC(e, t) {
    return Ae(t.type, mC, e, t);
  }
  let gC = "div";
  function vC(e, t) {
    let { defaultIndex: n = 0, vertical: r = false, manual: l = false, onChange: o, selectedIndex: s = null, ...i } = e;
    const a = r ? "vertical" : "horizontal", u = l ? "manual" : "auto";
    let d = s !== null, m = $t({
      isControlled: d
    }), v = Ee(t), [f, x] = c.useReducer(hC, {
      info: m,
      selectedIndex: s ?? n,
      tabs: [],
      panels: []
    }), w = c.useMemo(() => ({
      selectedIndex: f.selectedIndex
    }), [
      f.selectedIndex
    ]), b = $t(o || (() => {
    })), h = $t(f.tabs), g = c.useMemo(() => ({
      orientation: a,
      activation: u,
      ...f
    }), [
      a,
      u,
      f
    ]), y = W(($) => (x({
      type: 1,
      tab: $
    }), () => x({
      type: 2,
      tab: $
    }))), E = W(($) => (x({
      type: 3,
      panel: $
    }), () => x({
      type: 4,
      panel: $
    }))), S = W(($) => {
      N.current !== $ && b.current($), d || x({
        type: 0,
        index: $
      });
    }), N = $t(d ? e.selectedIndex : f.selectedIndex), T = c.useMemo(() => ({
      registerTab: y,
      registerPanel: E,
      change: S
    }), []);
    J(() => {
      x({
        type: 0,
        index: s ?? n
      });
    }, [
      s
    ]), J(() => {
      if (N.current === void 0 || f.tabs.length <= 0)
        return;
      let $ = Qn(f.tabs, (I) => I.current);
      $.some((I, Z) => f.tabs[Z] !== I) && S($.indexOf(f.tabs[N.current]));
    });
    let k = {
      ref: v
    }, M = ce();
    return R.createElement(cC, null, R.createElement(vd.Provider, {
      value: T
    }, R.createElement(gd.Provider, {
      value: g
    }, g.tabs.length <= 0 && R.createElement(aC, {
      onFocus: () => {
        var $, I;
        for (let Z of h.current)
          if ((($ = Z.current) == null ? void 0 : $.tabIndex) === 0)
            return (I = Z.current) == null || I.focus(), true;
        return false;
      }
    }), M({
      ourProps: k,
      theirProps: i,
      slot: w,
      defaultTag: gC,
      name: "Tabs"
    }))));
  }
  let yC = "div";
  function xC(e, t) {
    let { orientation: n, selectedIndex: r } = tl("Tab.List"), l = Ee(t), o = c.useMemo(() => ({
      selectedIndex: r
    }), [
      r
    ]), s = e, i = {
      ref: l,
      role: "tablist",
      "aria-orientation": n
    };
    return ce()({
      ourProps: i,
      theirProps: s,
      slot: o,
      defaultTag: yC,
      name: "Tabs.List"
    });
  }
  let wC = "button";
  function bC(e, t) {
    var n, r;
    let l = c.useId(), { id: o = `headlessui-tabs-tab-${l}`, disabled: s = false, autoFocus: i = false, ...a } = e, { orientation: u, activation: d, selectedIndex: m, tabs: v, panels: f } = tl("Tab"), x = yd("Tab"), w = tl("Tab"), [b, h] = c.useState(null), g = c.useRef(null), y = Ee(g, t, h);
    J(() => x.registerTab(g), [
      x,
      g
    ]);
    let E = Hg("tabs"), S = v.indexOf(g);
    S === -1 && (S = E);
    let N = S === m, T = W((L) => {
      var V;
      let D = L();
      if (D === Gn.Success && d === "auto") {
        let _ = (V = _n(g)) == null ? void 0 : V.activeElement, K = w.tabs.findIndex((G) => G.current === _);
        K !== -1 && x.change(K);
      }
      return D;
    }), k = W((L) => {
      let V = v.map((D) => D.current).filter(Boolean);
      if (L.key === le.Space || L.key === le.Enter) {
        L.preventDefault(), L.stopPropagation(), x.change(S);
        return;
      }
      switch (L.key) {
        case le.Home:
        case le.PageUp:
          return L.preventDefault(), L.stopPropagation(), T(() => mt(V, ve.First));
        case le.End:
        case le.PageDown:
          return L.preventDefault(), L.stopPropagation(), T(() => mt(V, ve.Last));
      }
      if (T(() => Ae(u, {
        vertical() {
          return L.key === le.ArrowUp ? mt(V, ve.Previous | ve.WrapAround) : L.key === le.ArrowDown ? mt(V, ve.Next | ve.WrapAround) : Gn.Error;
        },
        horizontal() {
          return L.key === le.ArrowLeft ? mt(V, ve.Previous | ve.WrapAround) : L.key === le.ArrowRight ? mt(V, ve.Next | ve.WrapAround) : Gn.Error;
        }
      })) === Gn.Success)
        return L.preventDefault();
    }), M = c.useRef(false), $ = W(() => {
      var L;
      M.current || (M.current = true, (L = g.current) == null || L.focus({
        preventScroll: true
      }), x.change(S), So(() => {
        M.current = false;
      }));
    }), I = W((L) => {
      L.preventDefault();
    }), { isFocusVisible: Z, focusProps: B } = Jc({
      autoFocus: i
    }), { isHovered: P, hoverProps: A } = jh({
      isDisabled: s
    }), { pressed: F, pressProps: H } = Lh({
      disabled: s
    }), j = c.useMemo(() => ({
      selected: N,
      hover: P,
      active: F,
      focus: Z,
      autofocus: i,
      disabled: s
    }), [
      N,
      P,
      Z,
      F,
      i,
      s
    ]), C = xi({
      ref: y,
      onKeyDown: k,
      onMouseDown: I,
      onClick: $,
      id: o,
      role: "tab",
      type: ng(e, b),
      "aria-controls": (r = (n = f[S]) == null ? void 0 : n.current) == null ? void 0 : r.id,
      "aria-selected": N,
      tabIndex: N ? 0 : -1,
      disabled: s || void 0,
      autoFocus: i
    }, B, A, H);
    return ce()({
      ourProps: C,
      theirProps: a,
      slot: j,
      defaultTag: wC,
      name: "Tabs.Tab"
    });
  }
  let EC = "div";
  function SC(e, t) {
    let { selectedIndex: n } = tl("Tab.Panels"), r = Ee(t), l = c.useMemo(() => ({
      selectedIndex: n
    }), [
      n
    ]), o = e, s = {
      ref: r
    };
    return ce()({
      ourProps: s,
      theirProps: o,
      slot: l,
      defaultTag: EC,
      name: "Tabs.Panels"
    });
  }
  let CC = "div", NC = Ln.RenderStrategy | Ln.Static;
  function kC(e, t) {
    var n, r, l, o;
    let s = c.useId(), { id: i = `headlessui-tabs-panel-${s}`, tabIndex: a = 0, ...u } = e, { selectedIndex: d, tabs: m, panels: v } = tl("Tab.Panel"), f = yd("Tab.Panel"), x = c.useRef(null), w = Ee(x, t);
    J(() => f.registerPanel(x), [
      f,
      x
    ]);
    let b = Hg("panels"), h = v.indexOf(x);
    h === -1 && (h = b);
    let g = h === d, { isFocusVisible: y, focusProps: E } = Jc(), S = c.useMemo(() => ({
      selected: g,
      focus: y
    }), [
      g,
      y
    ]), N = xi({
      ref: w,
      id: i,
      role: "tabpanel",
      "aria-labelledby": (r = (n = m[h]) == null ? void 0 : n.current) == null ? void 0 : r.id,
      tabIndex: g ? a : -1
    }, E), T = ce();
    return !g && ((l = u.unmount) == null || l) && !((o = u.static) != null && o) ? R.createElement(co, {
      "aria-hidden": "true",
      ...N
    }) : T({
      ourProps: N,
      theirProps: u,
      slot: S,
      defaultTag: CC,
      features: NC,
      visible: g,
      name: "Tabs.Panel"
    });
  }
  let RC = oe(bC), TC = oe(vC), $C = oe(xC), jC = oe(SC), LC = oe(kC), Pl = Object.assign(RC, {
    Group: TC,
    List: $C,
    Panels: jC,
    Panel: LC
  });
  const ct = (...e) => e.filter(Boolean).join(" ");
  function Wg({ tabs: e, children: t, onChange: n, defaultIndex: r = 0, selectedIndex: l, showIndicator: o = false, changedTabs: s = [], variant: i = "default", className: a = "", panelsClassName: u = "mt-2", autoFocus: d = false, manual: m = false, vertical: v = false, fullWidth: f = false }) {
    const x = c.useRef(false);
    c.useEffect(() => (x.current = true, () => {
      x.current = false;
    }), []);
    const w = () => {
      const h = ct("flex", f && !v && "w-full", v ? "flex-col" : "items-center");
      switch (i) {
        case "pill":
          return ct(h, v ? "space-y-1" : "space-x-1", "p-0.5 rounded-lg", a);
        case "underline":
          return ct(h, v ? "space-y-1" : "space-x-2", "border-b border-slate-200", a);
        case "compact":
          return ct(h, v ? "space-y-0.5" : "space-x-0.5", "rounded-md bg-slate-50 p-0.5 shadow-inner", a);
        default:
          return ct(h, v ? "space-y-1" : "space-x-1", "rounded-md bg-slate-100 p-0.5", a);
      }
    }, b = (h) => {
      const g = ct("relative flex items-center text-xs outline-none transition-all duration-150 ease-in-out", v && "justify-start w-full", f && !v && "flex-1 justify-center");
      switch (i) {
        case "pill":
          return ct(g, "px-3 py-1 rounded-full", h ? "bg-blue-500 text-white font-medium shadow-sm" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900");
        case "underline":
          return ct(g, "px-2 py-1.5 border-b-2", h ? "border-blue-500 text-blue-700 font-medium" : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300");
        case "compact":
          return ct(g, "px-2 py-0.5 rounded-md", h ? "bg-white text-slate-800 shadow-sm font-medium" : "text-slate-600 hover:bg-slate-100 hover:text-slate-700");
        default:
          return ct(g, "px-2 py-0.5 rounded-md", h ? "bg-blue-500 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-50", "ring-offset-2 ring-blue-400 focus-visible:ring-2");
      }
    };
    return p.jsxs(Pl.Group, {
      defaultIndex: r,
      selectedIndex: l,
      onChange: n,
      manual: m,
      vertical: v,
      children: [
        p.jsx(Pl.List, {
          className: w(),
          children: e.map((h, g) => p.jsx(Pl, {
            as: c.Fragment,
            children: ({ selected: y }) => p.jsxs("button", {
              className: b(y),
              "data-selected": y,
              autoFocus: d && y,
              "aria-label": h.ariaLabel || h.label,
              title: h.tooltip || h.label,
              children: [
                h.icon && p.jsx("span", {
                  className: ct("flex-shrink-0", v ? "mr-2" : "mr-1", "transform transition-transform duration-150", y && "scale-110"),
                  children: h.icon
                }),
                p.jsx("span", {
                  className: ct(v ? "text-left" : "", "transition-all duration-200"),
                  children: h.label
                }),
                o && s.includes(h.id) && p.jsx("span", {
                  className: "absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                })
              ]
            })
          }, h.id))
        }),
        p.jsx(Pl.Panels, {
          className: u,
          children: t
        })
      ]
    });
  }
  function ei({ children: e, title: t, icon: n, className: r = "", bgColor: l = "bg-slate-50", shadow: o = false, noPadding: s = false, bordered: i = false }) {
    return p.jsx(Pl.Panel, {
      className: `rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 ${r}`,
      unmount: false,
      children: ({ selected: a }) => p.jsxs("div", {
        className: `
            rounded-md ${l}
            ${s ? "" : "p-2"}
            ${o ? "shadow-sm" : ""}
            ${i ? "border border-slate-200" : ""}
            transform transition-opacity duration-200 ease-in-out
            ${a ? "opacity-100" : "opacity-0"}
          `,
        children: [
          (t || n) && p.jsxs("h4", {
            className: "text-xs font-medium text-slate-900 mb-1.5 flex items-center",
            children: [
              n && p.jsx("span", {
                className: "mr-1.5 text-slate-500",
                children: n
              }),
              t
            ]
          }),
          p.jsx("div", {
            className: "text-xs",
            children: e
          })
        ]
      })
    });
  }
  function PC({ openInNewWindow: e, setOpenInNewWindow: t, openInSingleTab: n, setOpenInSingleTab: r, removeOpenedUrls: l, setRemoveOpenedUrls: o, urlLimit: s, setUrlLimit: i, handleNonUrls: a, setHandleNonUrls: u, randomOrder: d, setRandomOrder: m, reverseOrder: v, setReverseOrder: f, waitForTabLoad: x, setWaitForTabLoad: w, closeTabAfterLoad: b, setCloseTabAfterLoad: h, closeTabDelay: g, setCloseTabDelay: y }) {
    const E = (N) => {
      N && t(false), r(N);
    }, S = (N) => {
      N && r(false), t(N);
    };
    return p.jsxs("div", {
      className: "flex flex-col space-y-4",
      children: [
        p.jsxs("div", {
          className: "p-2 border border-slate-200 rounded-md space-y-2",
          children: [
            p.jsxs("h4", {
              className: "text-xs font-medium text-slate-600 flex items-center",
              children: [
                p.jsx(ju, {
                  className: "w-3 h-3 mr-1 text-blue-500"
                }),
                "URL Processing"
              ]
            }),
            p.jsxs("div", {
              className: "grid grid-cols-1 gap-1.5",
              children: [
                p.jsxs("div", {
                  className: "flex items-center group",
                  children: [
                    p.jsx("input", {
                      id: "handleNonUrls",
                      type: "checkbox",
                      checked: a,
                      onChange: () => u(!a),
                      className: "h-3 w-3 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                    }),
                    p.jsxs("label", {
                      htmlFor: "handleNonUrls",
                      className: "ml-1.5 text-xs text-slate-700 flex items-center",
                      children: [
                        p.jsx(ju, {
                          className: "w-3 h-3 mr-1 text-slate-500"
                        }),
                        "Convert non-URLs to search queries",
                        p.jsxs("div", {
                          className: "relative ml-1 group",
                          children: [
                            p.jsx(Sl, {
                              className: "w-2.5 h-2.5 text-slate-400 cursor-help"
                            }),
                            p.jsx("div", {
                              className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-48 p-1 bg-slate-800 text-white text-[10px] rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 z-10",
                              children: "Text without http(s):// will be converted to Google search queries"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                p.jsxs("div", {
                  className: "flex items-center group",
                  children: [
                    p.jsx("input", {
                      id: "randomOrder",
                      type: "checkbox",
                      checked: d,
                      onChange: () => m(!d),
                      className: "h-3 w-3 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                    }),
                    p.jsxs("label", {
                      htmlFor: "randomOrder",
                      className: "ml-1.5 text-xs text-slate-700 flex items-center",
                      children: [
                        p.jsx(Gc, {
                          className: "w-3 h-3 mr-1 text-slate-500"
                        }),
                        "Open URLs in random order"
                      ]
                    })
                  ]
                }),
                p.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    p.jsx("input", {
                      id: "reverseOrder",
                      type: "checkbox",
                      checked: v,
                      onChange: () => f(!v),
                      className: "h-3 w-3 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                    }),
                    p.jsxs("label", {
                      htmlFor: "reverseOrder",
                      className: "ml-1.5 text-xs text-slate-700 flex items-center",
                      children: [
                        p.jsx(mh, {
                          className: "w-3 h-3 mr-1 text-slate-500"
                        }),
                        "Open URLs in reverse order"
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        p.jsxs("div", {
          className: "p-2 border border-slate-200 rounded-md space-y-2",
          children: [
            p.jsxs("h4", {
              className: "text-xs font-medium text-slate-600 flex items-center",
              children: [
                p.jsx(Ys, {
                  className: "w-3 h-3 mr-1 text-blue-500"
                }),
                "Opening Options"
              ]
            }),
            p.jsxs("div", {
              className: "grid grid-cols-1 gap-1.5",
              children: [
                p.jsxs("div", {
                  className: "flex items-center group",
                  children: [
                    p.jsx("input", {
                      id: "openInSingleTab",
                      type: "checkbox",
                      checked: n,
                      onChange: (N) => E(N.target.checked),
                      className: "h-3 w-3 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                    }),
                    p.jsxs("label", {
                      htmlFor: "openInSingleTab",
                      className: "ml-1.5 text-xs text-slate-700 flex items-center",
                      children: [
                        p.jsx(Tu, {
                          className: "w-3 h-3 mr-1 text-slate-500"
                        }),
                        "Open all URLs in a single tab",
                        p.jsxs("div", {
                          className: "relative ml-1 group",
                          children: [
                            p.jsx(Sl, {
                              className: "w-2.5 h-2.5 text-slate-400 cursor-help"
                            }),
                            p.jsx("div", {
                              className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-48 p-1 bg-slate-800 text-white text-[10px] rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 z-10",
                              children: "Each URL will replace the previous one in the same tab"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                p.jsxs("div", {
                  className: "flex items-center group",
                  children: [
                    p.jsx("input", {
                      id: "openInNewWindow",
                      type: "checkbox",
                      checked: e,
                      onChange: (N) => S(N.target.checked),
                      className: "h-3 w-3 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                    }),
                    p.jsxs("label", {
                      htmlFor: "openInNewWindow",
                      className: "ml-1.5 text-xs text-slate-700 flex items-center",
                      children: [
                        p.jsx(Ys, {
                          className: "w-3 h-3 mr-1 text-slate-500"
                        }),
                        "Open each batch in new window",
                        p.jsxs("div", {
                          className: "relative ml-1 group",
                          children: [
                            p.jsx(Sl, {
                              className: "w-2.5 h-2.5 text-slate-400 cursor-help"
                            }),
                            p.jsx("div", {
                              className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-48 p-1 bg-slate-800 text-white text-[10px] rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 z-10",
                              children: "Each batch of URLs will open in a separate window"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                p.jsxs("div", {
                  className: "flex items-center group",
                  children: [
                    p.jsx("input", {
                      id: "waitForTabLoad",
                      type: "checkbox",
                      checked: x,
                      onChange: () => w(!x),
                      className: "h-3 w-3 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                    }),
                    p.jsxs("label", {
                      htmlFor: "waitForTabLoad",
                      className: "ml-1.5 text-xs text-slate-700 flex items-center",
                      children: [
                        p.jsx(tr, {
                          className: "w-3 h-3 mr-1 text-slate-500"
                        }),
                        "Wait for tab to load before opening next URL",
                        p.jsxs("div", {
                          className: "relative ml-1 group",
                          children: [
                            p.jsx(Sl, {
                              className: "w-2.5 h-2.5 text-slate-400 cursor-help"
                            }),
                            p.jsx("div", {
                              className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-48 p-1 bg-slate-800 text-white text-[10px] rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 z-10",
                              children: "More reliable but slower URL opening"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                p.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    p.jsx("input", {
                      id: "removeOpenedUrls",
                      type: "checkbox",
                      checked: l,
                      onChange: () => o(!l),
                      className: "h-3 w-3 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                    }),
                    p.jsxs("label", {
                      htmlFor: "removeOpenedUrls",
                      className: "ml-1.5 text-xs text-slate-700 flex items-center",
                      children: [
                        p.jsx(Pu, {
                          className: "w-3 h-3 mr-1 text-slate-500"
                        }),
                        "Remove opened URLs from input"
                      ]
                    })
                  ]
                }),
                p.jsxs("div", {
                  className: "flex items-center group",
                  children: [
                    p.jsx("input", {
                      id: "closeTabAfterLoad",
                      type: "checkbox",
                      checked: b,
                      onChange: () => h(!b),
                      className: "h-3 w-3 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                    }),
                    p.jsxs("label", {
                      htmlFor: "closeTabAfterLoad",
                      className: "ml-1.5 text-xs text-slate-700 flex items-center",
                      children: [
                        p.jsx(tr, {
                          className: "w-3 h-3 mr-1 text-slate-500"
                        }),
                        "Auto-close tabs after viewing",
                        p.jsxs("div", {
                          className: "relative ml-1 group",
                          children: [
                            p.jsx(Sl, {
                              className: "w-2.5 h-2.5 text-slate-400 cursor-help"
                            }),
                            p.jsx("div", {
                              className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-56 p-1 bg-slate-800 text-white text-[10px] rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 z-10",
                              children: "Automatically close each tab after specified delay"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                b && p.jsx("div", {
                  className: "ml-6 mt-1 bg-slate-50 rounded-md p-1.5 border border-slate-200",
                  children: p.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      p.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          p.jsx(tr, {
                            className: "w-2.5 h-2.5 text-blue-500 mr-1"
                          }),
                          p.jsx("label", {
                            htmlFor: "closeTabDelay",
                            className: "text-xs text-slate-700",
                            children: "Close tabs after:"
                          })
                        ]
                      }),
                      p.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          p.jsx("input", {
                            id: "closeTabDelay",
                            type: "range",
                            min: "1",
                            max: "20",
                            value: g,
                            onChange: (N) => y(parseInt(N.target.value) || 2),
                            className: "w-20 h-1.5 mx-2 bg-slate-200 rounded-md appearance-none cursor-pointer accent-blue-500"
                          }),
                          p.jsxs("div", {
                            className: "flex items-center w-14",
                            children: [
                              p.jsx("input", {
                                type: "number",
                                min: "1",
                                max: "30",
                                value: g,
                                onChange: (N) => y(parseInt(N.target.value) || 2),
                                className: "w-12 px-1 py-0.5 text-xs border border-slate-300 rounded text-center"
                              }),
                              p.jsx("span", {
                                className: "ml-1 text-xs text-slate-500",
                                children: "s"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        p.jsxs("div", {
          className: "p-2 border border-slate-200 rounded-md space-y-2",
          children: [
            p.jsxs("h4", {
              className: "text-xs font-medium text-slate-600 flex items-center",
              children: [
                p.jsx(Pu, {
                  className: "w-3 h-3 mr-1 text-blue-500"
                }),
                "URL Limit"
              ]
            }),
            p.jsxs("div", {
              className: "flex items-center",
              children: [
                p.jsx("div", {
                  className: "flex flex-1 items-center",
                  children: p.jsx("input", {
                    type: "range",
                    min: "0",
                    max: "50",
                    value: s,
                    onChange: (N) => i(parseInt(N.target.value)),
                    className: "w-full h-1.5 bg-slate-200 rounded-md appearance-none cursor-pointer accent-blue-500 hover:bg-slate-300"
                  })
                }),
                p.jsxs("div", {
                  className: "flex ml-2 items-center",
                  children: [
                    p.jsx("input", {
                      type: "number",
                      min: "0",
                      max: "100",
                      value: s,
                      onChange: (N) => i(parseInt(N.target.value)),
                      className: "w-12 px-1 py-0.5 text-xs border border-slate-300 rounded"
                    }),
                    p.jsx("span", {
                      className: "ml-1 text-xs text-slate-500",
                      children: s === 0 ? "No limit" : "URLs"
                    })
                  ]
                })
              ]
            }),
            p.jsx("p", {
              className: "text-xs text-slate-500",
              children: s === 0 ? "Open all URLs in the list" : `Only open the first ${s} URL${s === 1 ? "" : "s"}`
            })
          ]
        })
      ]
    });
  }
  const ka = 20, ts = 100;
  function Vg({ batchSize: e, setBatchSize: t, delaySeconds: n, setDelaySeconds: r }) {
    const l = () => t(Math.max(1, e - 1)), o = () => t(Math.min(ka, e + 1)), s = () => r(Math.max(0, n - 1)), i = () => r(Math.min(ts, n + 1));
    return p.jsxs("div", {
      className: "space-y-4",
      children: [
        p.jsxs("div", {
          className: "space-y-1",
          children: [
            p.jsxs("div", {
              className: "flex justify-between items-center mb-1",
              children: [
                p.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    p.jsx(Zs, {
                      className: "w-3 h-3 mr-1 text-blue-500"
                    }),
                    p.jsx("label", {
                      className: "text-xs font-medium text-slate-700",
                      children: "URLs per batch"
                    })
                  ]
                }),
                p.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    p.jsx("button", {
                      onClick: l,
                      className: "w-5 h-5 flex items-center justify-center bg-slate-100 rounded hover:bg-slate-200 text-slate-600",
                      title: "Decrease batch size",
                      children: p.jsx(ep, {
                        className: "w-3 h-3"
                      })
                    }),
                    p.jsx("span", {
                      className: "text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium w-6 text-center",
                      children: e
                    }),
                    p.jsx("button", {
                      onClick: o,
                      className: "w-5 h-5 flex items-center justify-center bg-slate-100 rounded hover:bg-slate-200 text-slate-600",
                      title: "Increase batch size",
                      children: p.jsx(Lu, {
                        className: "w-3 h-3"
                      })
                    })
                  ]
                })
              ]
            }),
            p.jsxs("div", {
              className: "relative",
              children: [
                p.jsx("input", {
                  type: "range",
                  min: "1",
                  max: ka,
                  value: e,
                  onChange: (a) => t(parseInt(a.target.value) || 1),
                  className: "w-full h-1.5 bg-slate-200 rounded-md appearance-none cursor-pointer accent-blue-500 hover:bg-slate-300",
                  title: `Batch size: ${e}`
                }),
                p.jsxs("div", {
                  className: "flex justify-between mt-1",
                  children: [
                    p.jsx("span", {
                      className: "text-[10px] text-slate-500",
                      children: "1"
                    }),
                    p.jsx("span", {
                      className: "text-[10px] text-slate-500",
                      children: ka
                    })
                  ]
                })
              ]
            }),
            p.jsx("p", {
              className: "text-[10px] text-slate-500 mt-0.5",
              children: "Number of URLs to open in each batch"
            })
          ]
        }),
        p.jsxs("div", {
          className: "space-y-1",
          children: [
            p.jsxs("div", {
              className: "flex justify-between items-center mb-1",
              children: [
                p.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    p.jsx(tr, {
                      className: "w-3 h-3 mr-1 text-blue-500"
                    }),
                    p.jsx("label", {
                      className: "text-xs font-medium text-slate-700",
                      children: "Delay (seconds)"
                    })
                  ]
                }),
                p.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    p.jsx("button", {
                      onClick: s,
                      className: "w-5 h-5 flex items-center justify-center bg-slate-100 rounded hover:bg-slate-200 text-slate-600",
                      title: "Decrease delay",
                      children: p.jsx(ep, {
                        className: "w-3 h-3"
                      })
                    }),
                    p.jsx("span", {
                      className: "text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium min-w-6 text-center",
                      children: n
                    }),
                    p.jsx("button", {
                      onClick: i,
                      className: "w-5 h-5 flex items-center justify-center bg-slate-100 rounded hover:bg-slate-200 text-slate-600",
                      title: "Increase delay",
                      children: p.jsx(Lu, {
                        className: "w-3 h-3"
                      })
                    })
                  ]
                })
              ]
            }),
            p.jsxs("div", {
              className: "relative",
              children: [
                p.jsx("input", {
                  type: "range",
                  min: "0",
                  max: ts,
                  step: "1",
                  value: Math.min(ts, n),
                  onChange: (a) => r(parseFloat(a.target.value) || 0),
                  className: "w-full h-1.5 bg-slate-200 rounded-md appearance-none cursor-pointer accent-blue-500 hover:bg-slate-300",
                  title: `Delay: ${n} seconds`
                }),
                p.jsxs("div", {
                  className: "flex justify-between mt-1",
                  children: [
                    p.jsx("span", {
                      className: "text-[10px] text-slate-500",
                      children: "0s"
                    }),
                    p.jsxs("span", {
                      className: "text-[10px] text-slate-500",
                      children: [
                        ts,
                        "s"
                      ]
                    })
                  ]
                })
              ]
            }),
            p.jsx("p", {
              className: "text-[10px] text-slate-500 mt-0.5",
              children: "Wait time between opening each batch"
            })
          ]
        }),
        p.jsx("div", {
          className: "rounded-md bg-blue-50 p-1.5 mt-2",
          children: p.jsxs("p", {
            className: "text-[10px] text-blue-700",
            children: [
              p.jsx("strong", {
                children: "Pro tip:"
              }),
              " Use a smaller batch size and longer delay to avoid triggering browser security restrictions."
            ]
          })
        })
      ]
    });
  }
  function OC({ batchSize: e, setBatchSize: t, delaySeconds: n, setDelaySeconds: r, openInNewWindow: l, setOpenInNewWindow: o, openInSingleTab: s, setOpenInSingleTab: i, removeOpenedUrls: a, setRemoveOpenedUrls: u, urlLimit: d, setUrlLimit: m, handleNonUrls: v, setHandleNonUrls: f, randomOrder: x, setRandomOrder: w, reverseOrder: b, setReverseOrder: h, waitForTabLoad: g, setWaitForTabLoad: y, closeTabAfterLoad: E, setCloseTabAfterLoad: S, closeTabDelay: N, setCloseTabDelay: T, onResetSettings: k }) {
    const M = [
      {
        id: "url",
        label: "URL Options",
        icon: p.jsx($u, {
          className: "w-3.5 h-3.5"
        }),
        title: "URL Options",
        tooltip: "URL processing and advanced options"
      },
      {
        id: "batch",
        label: "Batch Settings",
        icon: p.jsx(Zs, {
          className: "w-3.5 h-3.5"
        }),
        title: "Batch Settings",
        tooltip: "Configure batch size and delay between batches"
      }
    ];
    return p.jsxs("div", {
      className: "flex flex-col",
      children: [
        p.jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [
            p.jsxs("h3", {
              className: "text-xs font-medium text-slate-900 flex items-center",
              children: [
                p.jsx(ph, {
                  className: "w-3 h-3 mr-1 text-slate-500"
                }),
                "URL Opening Settings"
              ]
            }),
            p.jsxs("button", {
              onClick: k,
              className: "px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center transition-colors",
              children: [
                p.jsx(Kc, {
                  className: "w-2.5 h-2.5 mr-0.5"
                }),
                "Reset Defaults"
              ]
            })
          ]
        }),
        p.jsxs(Wg, {
          tabs: M,
          variant: "pill",
          className: "justify-center",
          autoFocus: true,
          fullWidth: true,
          children: [
            p.jsx(ei, {
              title: M[0].title,
              icon: M[0].icon,
              bgColor: "bg-white",
              shadow: true,
              bordered: true,
              children: p.jsx(PC, {
                openInNewWindow: l,
                setOpenInNewWindow: o,
                openInSingleTab: s,
                setOpenInSingleTab: i,
                removeOpenedUrls: a,
                setRemoveOpenedUrls: u,
                urlLimit: d,
                setUrlLimit: m,
                handleNonUrls: v,
                setHandleNonUrls: f,
                randomOrder: x,
                setRandomOrder: w,
                reverseOrder: b,
                setReverseOrder: h,
                waitForTabLoad: g,
                setWaitForTabLoad: y,
                closeTabAfterLoad: E,
                setCloseTabAfterLoad: S,
                closeTabDelay: N,
                setCloseTabDelay: T
              })
            }),
            p.jsx(ei, {
              title: M[1].title,
              icon: M[1].icon,
              bgColor: "bg-white",
              shadow: true,
              bordered: true,
              children: p.jsx(Vg, {
                batchSize: e,
                setBatchSize: t,
                delaySeconds: n,
                setDelaySeconds: r
              })
            })
          ]
        })
      ]
    });
  }
  const Zg = ({ isOpen: e, onClose: t, onConfirm: n, title: r, message: l, confirmText: o = "Confirm", cancelText: s = "Cancel", confirmButtonClass: i = "bg-red-500 hover:bg-red-600" }) => p.jsxs(O3, {
    open: e,
    onClose: t,
    className: "relative z-50",
    children: [
      p.jsx(P3, {
        className: "fixed inset-0 bg-black/30"
      }),
      p.jsx("div", {
        className: "fixed inset-0 flex w-screen items-center justify-center p-2",
        children: p.jsxs(_g, {
          className: "w-full max-w-xs rounded bg-white p-3 shadow-lg",
          children: [
            p.jsx(Dg, {
              className: "text-xs font-medium",
              children: r
            }),
            p.jsx("div", {
              className: "mt-2",
              children: p.jsx("p", {
                className: "text-xs text-gray-500",
                children: l
              })
            }),
            p.jsxs("div", {
              className: "mt-3 flex justify-end space-x-2",
              children: [
                p.jsx("button", {
                  type: "button",
                  className: "rounded bg-gray-200 px-2 py-1 text-xs hover:bg-gray-300 focus:outline-none",
                  onClick: t,
                  children: s
                }),
                p.jsx("button", {
                  type: "button",
                  className: `rounded px-2 py-1 text-xs text-white focus:outline-none ${i}`,
                  onClick: () => {
                    n(), t();
                  },
                  children: o
                })
              ]
            })
          ]
        })
      })
    ]
  }), IC = ({ value: e, onChange: t, placeholder: n }) => {
    const [r, l] = c.useState(false), [o, s] = c.useState([]), [i, a] = c.useState(-1), [u, d] = c.useState(false);
    c.useEffect(() => {
      e && o.length === 0 && (s([
        e
      ]), a(0));
    }, [
      e,
      o
    ]);
    const m = (P) => {
      if (o.length === 0 || P !== o[i]) {
        const F = [
          ...o.length === 0 ? [] : o.slice(0, i + 1),
          P
        ];
        s(F), a(F.length - 1);
      }
      t(P);
    }, v = () => {
      if (i > 0) {
        const P = i - 1;
        a(P), t(o[P]), z.info("Undo successful");
      } else
        z.error("Nothing to undo");
    }, f = () => {
      if (i < o.length - 1) {
        const P = i + 1;
        a(P), t(o[P]), z.info("Redo successful");
      } else
        z.error("Nothing to redo");
    }, x = () => {
      d(true);
    }, w = () => {
      m(""), z.success("URLs cleared");
    }, b = () => {
      if (!e.trim()) {
        z.error("No URLs to copy");
        return;
      }
      navigator.clipboard.writeText(e).then(() => z.success("Copied to clipboard")).catch((P) => z.error("Failed to copy"));
    }, h = () => {
      if (!e.trim()) {
        z.error("No text to extract URLs from");
        return;
      }
      try {
        const P = u5(e);
        if (P.length === 0) {
          z.error("No URLs found in text");
          return;
        }
        const A = P.join(`
`);
        m(A), z.success(`Extracted ${P.length} URLs`);
      } catch (P) {
        console.error("Error extracting URLs:", P), z.error("Failed to extract URLs");
      }
    }, g = async () => {
      try {
        const P = await chrome.tabs.query({
          currentWindow: true
        });
        if (P.length === 0) {
          z.error("No open tabs found");
          return;
        }
        const A = P.map((F) => F.url).join(`
`);
        m(A), z.success(`Retrieved ${P.length} URLs from open tabs`);
      } catch (P) {
        console.error("Failed to get open tabs: ", P), z.error("Failed to get URLs from open tabs");
      }
    }, y = () => {
      if (!e.trim()) {
        z.error("No URLs to sort");
        return;
      }
      const P = e.split(`
`).filter((F) => F.trim());
      if (P.length < 2) {
        z.error("Need at least 2 URLs to sort");
        return;
      }
      const A = [
        ...P
      ].sort();
      m(A.join(`
`)), z.success(`Sorted ${A.length} URLs alphabetically`);
    }, E = () => {
      if (!e.trim()) {
        z.error("No URLs to process");
        return;
      }
      const P = e.split(`
`).filter((F) => F.trim()), A = [
        ...new Set(P)
      ];
      if (A.length === P.length) {
        z.info("No duplicate URLs found");
        return;
      }
      m(A.join(`
`)), z.success(`Removed ${P.length - A.length} duplicate URLs`);
    }, S = () => {
      if (!e.trim()) {
        z.error("No URLs to reverse");
        return;
      }
      const P = e.split(`
`).filter((F) => F.trim());
      if (P.length < 2) {
        z.error("Need at least 2 URLs to reverse order");
        return;
      }
      const A = [
        ...P
      ].reverse();
      m(A.join(`
`)), z.success(`Reversed order of ${A.length} URLs`);
    }, N = () => {
      if (!e.trim()) {
        z.error("No URLs to randomize");
        return;
      }
      const P = e.split(`
`).filter((F) => F.trim());
      if (P.length < 2) {
        z.error("Need at least 2 URLs to randomize");
        return;
      }
      const A = [
        ...P
      ].sort(() => Math.random() - 0.5);
      m(A.join(`
`)), z.success(`Randomized order of ${A.length} URLs`);
    }, T = () => {
      if (!e.trim()) {
        z.error("No URLs to validate");
        return;
      }
      const P = e.split(`
`).filter((F) => F.trim()), A = P.filter((F) => {
        const H = F.trim();
        return !H.startsWith("http://") && !H.startsWith("https://") ? gs("https://" + H) : gs(H);
      });
      if (A.length === P.length) {
        z.info("No invalid URLs found");
        return;
      }
      m(A.join(`
`)), z.success(`Removed ${P.length - A.length} invalid URLs`);
    }, k = () => {
      if (!e.trim()) {
        z.error("No URLs to process");
        return;
      }
      const A = e.split(`
`).filter((F) => F.trim()).map((F) => {
        const H = F.trim();
        return !H.startsWith("http://") && !H.startsWith("https://") ? "https://" + H : H;
      });
      m(A.join(`
`)), z.success("Added https:// prefix where needed");
    }, M = () => {
      if (!e.trim()) {
        z.error("No content to process");
        return;
      }
      const P = e.split(`
`), A = P.filter((F) => F.trim().length > 0);
      if (A.length === P.length) {
        z.info("No empty lines found");
        return;
      }
      m(A.join(`
`)), z.success(`Removed ${P.length - A.length} empty lines`);
    }, $ = () => {
      if (!e.trim()) {
        z.error("No content to process");
        return;
      }
      const A = e.split(`
`).filter((F) => F.trim()).map((F) => {
        const H = F.trim();
        return gs(H) || H.startsWith("http://") || H.startsWith("https://") ? H : `https://www.google.com/search?q=${encodeURIComponent(H)}`;
      });
      m(A.join(`
`)), z.success("Converted non-URLs to search queries");
    }, I = [
      {
        icon: p.jsx($5, {
          className: "w-3 h-3"
        }),
        label: "Undo",
        action: v,
        class: "bg-blue-50 hover:bg-blue-100 text-blue-700",
        title: "Undo last action"
      },
      {
        icon: p.jsx(P5, {
          className: "w-3 h-3"
        }),
        label: "Redo",
        action: f,
        class: "bg-blue-50 hover:bg-blue-100 text-blue-700",
        title: "Redo last undone action"
      },
      {
        icon: p.jsx(K5, {
          className: "w-3 h-3"
        }),
        label: "Copy",
        action: b,
        class: "bg-slate-100 hover:bg-slate-200 text-slate-700",
        title: "Copy URLs to clipboard"
      },
      {
        icon: p.jsx(Kc, {
          className: "w-3 h-3"
        }),
        label: "Open Tabs",
        action: g,
        class: "bg-blue-50 hover:bg-blue-100 text-blue-700",
        title: "Get URLs from open tabs"
      },
      {
        icon: p.jsx(ju, {
          className: "w-3 h-3"
        }),
        label: "Extract URLs",
        action: h,
        class: "bg-slate-100 hover:bg-slate-200 text-slate-700",
        title: "Extract URLs from text"
      },
      {
        icon: p.jsx(vh, {
          className: "w-3 h-3"
        }),
        label: "Clear",
        action: x,
        class: "bg-slate-100 hover:bg-slate-200 text-slate-700",
        title: "Clear all URLs"
      }
    ], Z = [
      {
        icon: p.jsx(g2, {
          className: "w-2.5 h-2.5"
        }),
        label: "Duplicate",
        action: E,
        title: "Remove duplicate URLs"
      },
      {
        icon: p.jsx(Qc, {
          className: "w-2.5 h-2.5"
        }),
        label: "Validate",
        action: T,
        title: "Remove invalid URLs"
      },
      {
        icon: p.jsx(l2, {
          className: "w-2.5 h-2.5"
        }),
        label: "Add https://",
        action: k,
        title: "Add https:// prefix where missing"
      },
      {
        icon: p.jsx(gh, {
          className: "w-2.5 h-2.5"
        }),
        label: "Clean",
        action: M,
        title: "Remove empty lines"
      },
      {
        icon: p.jsx(Jf, {
          className: "w-2.5 h-2.5"
        }),
        label: "To Search",
        action: $,
        title: "Convert non-URLs to Google search queries"
      }
    ], B = [
      {
        icon: p.jsx(Gc, {
          className: "w-2.5 h-2.5"
        }),
        label: "Sort",
        action: y,
        title: "Sort URLs alphabetically"
      },
      {
        icon: p.jsx(mh, {
          className: "w-2.5 h-2.5"
        }),
        label: "Reverse",
        action: S,
        title: "Reverse URL order"
      },
      {
        icon: p.jsx(Jf, {
          className: "w-2.5 h-2.5"
        }),
        label: "Random",
        action: N,
        title: "Randomize URL order"
      }
    ];
    return p.jsxs("div", {
      className: "flex flex-col gap-3",
      children: [
        p.jsx("textarea", {
          value: e,
          onChange: (P) => m(P.target.value),
          placeholder: n,
          className: "w-full text-xs leading-tight bg-white border border-slate-200 rounded-md shadow-sm px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-y min-h-[120px]"
        }),
        p.jsxs("div", {
          className: "w-full",
          children: [
            p.jsxs("div", {
              className: "flex items-center justify-between gap-1 mb-1",
              children: [
                p.jsx("div", {
                  className: "flex items-center flex-wrap gap-0.5",
                  children: I.map((P, A) => p.jsxs("button", {
                    onClick: P.action,
                    className: `flex items-center justify-center text-xs px-1.5 py-0.5 ${P.class} rounded`,
                    title: P.title,
                    children: [
                      P.icon,
                      p.jsx("span", {
                        className: "ml-0.5",
                        children: P.label
                      })
                    ]
                  }, A))
                }),
                p.jsxs("button", {
                  onClick: () => l(!r),
                  className: "flex items-center justify-center text-xs px-1.5 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded",
                  title: "Show more tools",
                  children: [
                    p.jsx(ph, {
                      className: "w-3 h-3"
                    }),
                    p.jsx("span", {
                      className: "ml-0.5",
                      children: "Tools"
                    }),
                    p.jsx(hh, {
                      className: `w-2.5 h-2.5 ml-0.5 transition-transform ${r ? "rotate-180" : ""}`
                    })
                  ]
                })
              ]
            }),
            r && p.jsxs("div", {
              className: "grid grid-cols-2 gap-x-1 gap-y-1 pt-1 border-t border-slate-100",
              children: [
                p.jsxs("div", {
                  className: "space-y-0.5",
                  children: [
                    p.jsx("p", {
                      className: "text-slate-500 font-medium uppercase tracking-wide mb-0.5",
                      children: "Clean & Format"
                    }),
                    p.jsx("div", {
                      className: "flex flex-wrap gap-0.5",
                      children: Z.map((P, A) => p.jsxs("button", {
                        onClick: P.action,
                        className: "flex items-center justify-center px-1.5 py-0.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded",
                        title: P.title,
                        children: [
                          P.icon,
                          p.jsx("span", {
                            className: "ml-0.5",
                            children: P.label
                          })
                        ]
                      }, A))
                    })
                  ]
                }),
                p.jsxs("div", {
                  className: "space-y-0.5",
                  children: [
                    p.jsx("p", {
                      className: "text-slate-500 font-medium uppercase tracking-wide mb-0.5",
                      children: "Sort & Order"
                    }),
                    p.jsx("div", {
                      className: "flex flex-wrap gap-0.5",
                      children: B.map((P, A) => p.jsxs("button", {
                        onClick: P.action,
                        className: "flex items-center justify-center px-1.5 py-0.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded",
                        title: P.title,
                        children: [
                          P.icon,
                          p.jsx("span", {
                            className: "ml-0.5",
                            children: P.label
                          })
                        ]
                      }, A))
                    })
                  ]
                })
              ]
            })
          ]
        }),
        p.jsx(Zg, {
          isOpen: u,
          onClose: () => d(false),
          onConfirm: w,
          title: "Clear URLs",
          message: "Are you sure you want to clear all URLs? This action cannot be undone.",
          confirmText: "Clear",
          cancelText: "Cancel",
          confirmButtonClass: "bg-red-500 hover:bg-red-600"
        })
      ]
    });
  };
  function MC({ savedLists: e, onLoad: t, onDelete: n, onSave: r, currentUrls: l, currentSettings: o }) {
    const [s, i] = c.useState(""), [a, u] = c.useState(false), [d, m] = c.useState(null), [v, f] = c.useState(""), x = c.useRef(null), [w, b] = c.useState({
      isOpen: false,
      title: "",
      message: "",
      onConfirm: () => {
      },
      type: ""
    }), h = e.filter((k) => k.name.toLowerCase().includes(v.toLowerCase()));
    c.useEffect(() => {
      a && x.current && x.current.focus();
    }, [
      a
    ]);
    const g = () => {
      if (!s.trim()) {
        z.error("Please enter a list name");
        return;
      }
      if (!l.trim()) {
        z.error("No URLs to save");
        return;
      }
      if (e.some((k) => k.name.toLowerCase() === s.trim().toLowerCase())) {
        z.error("A list with this name already exists");
        return;
      }
      r(s.trim()), i(""), u(false), z.success("URL list saved with settings");
    }, y = (k) => {
      m(d === k ? null : k);
    }, E = (k) => {
      k.key === "Enter" ? g() : k.key === "Escape" && (u(false), i(""));
    }, S = (k) => {
      b({
        isOpen: true,
        title: "Load List",
        message: `Load "${k.name}" with ${k.settings ? "URLs and settings" : "URLs only"}? Current content will be replaced.`,
        onConfirm: () => {
          t(k.id), z.success(`Loaded list: ${k.name}`);
        },
        type: "load"
      });
    }, N = (k) => {
      b({
        isOpen: true,
        title: "Delete List",
        message: `Are you sure you want to delete "${k.name}"? This cannot be undone.`,
        onConfirm: () => {
          n(k.id), z.success("List deleted");
        },
        type: "delete"
      });
    }, T = () => {
      b({
        ...w,
        isOpen: false
      });
    };
    return p.jsxs("div", {
      className: "bg-white rounded-md shadow-sm border border-slate-200 p-2 w-full",
      children: [
        p.jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [
            p.jsxs("h3", {
              className: "text-xs font-medium text-slate-900 flex items-center",
              children: [
                p.jsx(g5, {
                  className: "w-3 h-3 mr-1 text-slate-500"
                }),
                "Saved Lists"
              ]
            }),
            !a && p.jsxs("button", {
              onClick: () => u(true),
              className: "text-xs bg-blue-500 text-white px-2 py-0.5 rounded-md hover:bg-blue-600 flex items-center",
              title: "Create a new URL list",
              children: [
                p.jsx(Lu, {
                  className: "w-3 h-3 mr-0.5"
                }),
                "New"
              ]
            })
          ]
        }),
        a && p.jsxs("div", {
          className: "mb-2 bg-blue-50 p-1.5 rounded-md border border-blue-100",
          children: [
            p.jsx("input", {
              type: "text",
              value: s,
              onChange: (k) => i(k.target.value),
              onKeyDown: E,
              placeholder: "Enter list name",
              className: "w-full h-6 px-1.5 py-0.5 text-xs border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 mb-1",
              ref: x,
              maxLength: 50
            }),
            p.jsxs("div", {
              className: "flex space-x-1 justify-end mt-1",
              children: [
                p.jsxs("button", {
                  onClick: () => {
                    u(false), i("");
                  },
                  className: "text-xs bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded-md hover:bg-slate-300 flex items-center",
                  children: [
                    p.jsx(vh, {
                      className: "w-3 h-3 mr-0.5"
                    }),
                    "Cancel"
                  ]
                }),
                p.jsxs("button", {
                  onClick: g,
                  className: "text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-md hover:bg-green-600 flex items-center",
                  disabled: !s.trim() || !l.trim(),
                  children: [
                    p.jsx(Qc, {
                      className: "w-3 h-3 mr-0.5"
                    }),
                    "Save"
                  ]
                })
              ]
            })
          ]
        }),
        !a && e.length > 0 && p.jsx("div", {
          className: "mb-2",
          children: p.jsx("input", {
            type: "text",
            value: v,
            onChange: (k) => f(k.target.value),
            placeholder: "Search lists...",
            className: "w-full h-6 px-1.5 py-0.5 text-xs border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          })
        }),
        e.length === 0 ? p.jsxs("div", {
          className: "text-xs text-slate-500 italic p-2 bg-slate-50 rounded-md flex items-center justify-center",
          children: [
            p.jsx(i2, {
              className: "w-3 h-3 mr-1"
            }),
            "No saved lists yet"
          ]
        }) : h.length === 0 ? p.jsxs("div", {
          className: "text-xs text-slate-500 italic p-2 bg-slate-50 rounded-md flex items-center justify-center",
          children: [
            p.jsx(t2, {
              className: "w-3 h-3 mr-1"
            }),
            "No matching lists found"
          ]
        }) : p.jsx("div", {
          className: "space-y-1.5 max-h-[200px] overflow-y-auto pr-0.5 scrollbar-thin",
          children: h.map((k) => p.jsxs("div", {
            className: "text-xs bg-slate-50 rounded-md relative hover:bg-slate-100 transition-colors overflow-hidden border border-slate-100",
            children: [
              p.jsxs("div", {
                className: "p-1.5 flex items-center justify-between cursor-pointer group",
                onClick: () => y(k.id),
                children: [
                  p.jsxs("div", {
                    className: "flex items-center max-w-[60%]",
                    children: [
                      p.jsx(L2, {
                        className: "w-2.5 h-2.5 text-slate-400 mr-1 flex-shrink-0"
                      }),
                      p.jsx("span", {
                        className: "font-medium truncate text-slate-700",
                        children: k.name
                      }),
                      k.settings && p.jsx("span", {
                        className: "ml-1 text-blue-600 flex-shrink-0",
                        title: "Has saved settings",
                        children: p.jsx(Vs, {
                          className: "w-2.5 h-2.5"
                        })
                      }),
                      p.jsxs("span", {
                        className: "text-slate-400 ml-1 truncate flex-shrink-0",
                        children: [
                          k.urls.split(`
`).filter((M) => M.trim()).length,
                          " URLs"
                        ]
                      })
                    ]
                  }),
                  p.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      p.jsxs("div", {
                        className: "flex space-x-1 mr-1 opacity-80 group-hover:opacity-100",
                        children: [
                          p.jsxs("button", {
                            onClick: (M) => {
                              M.stopPropagation(), S(k);
                            },
                            className: "bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded hover:bg-blue-200 flex items-center",
                            title: k.settings ? "Load URLs and settings" : "Load URLs only",
                            children: [
                              p.jsx(x5, {
                                className: "w-2 h-2 mr-0.5"
                              }),
                              "Load"
                            ]
                          }),
                          p.jsxs("button", {
                            onClick: (M) => {
                              M.stopPropagation(), N(k);
                            },
                            className: "bg-red-100 text-red-700 px-1.5 py-0.5 rounded hover:bg-red-200 flex items-center",
                            children: [
                              p.jsx(gh, {
                                className: "w-2 h-2 mr-0.5"
                              }),
                              "Delete"
                            ]
                          })
                        ]
                      }),
                      p.jsx(V5, {
                        className: `w-3 h-3 text-slate-400 transition-transform duration-200 ${d === k.id ? "rotate-90" : ""}`
                      })
                    ]
                  })
                ]
              }),
              d === k.id && k.settings && p.jsxs("div", {
                className: "border-t border-slate-200 p-1.5 bg-white",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center mb-1 text-slate-500",
                    children: [
                      p.jsx(Vs, {
                        className: "w-2.5 h-2.5 mr-0.5"
                      }),
                      p.jsx("span", {
                        className: "text-xs font-medium",
                        children: "Settings"
                      })
                    ]
                  }),
                  p.jsxs("div", {
                    className: "grid grid-cols-2 gap-x-2 gap-y-0.5 text-slate-700",
                    children: [
                      p.jsxs("div", {
                        className: "flex items-center justify-between py-0.5 px-1 rounded hover:bg-slate-50",
                        children: [
                          p.jsx("span", {
                            className: "text-slate-600",
                            children: "Batch size:"
                          }),
                          p.jsx("span", {
                            className: "font-medium bg-blue-50 px-1 rounded",
                            children: k.settings.batchSize
                          })
                        ]
                      }),
                      p.jsxs("div", {
                        className: "flex items-center justify-between py-0.5 px-1 rounded hover:bg-slate-50",
                        children: [
                          p.jsx("span", {
                            className: "text-slate-600",
                            children: "Delay:"
                          }),
                          p.jsxs("span", {
                            className: "font-medium bg-blue-50 px-1 rounded",
                            children: [
                              k.settings.delaySeconds,
                              "s"
                            ]
                          })
                        ]
                      }),
                      k.settings.openInNewWindow && p.jsxs("div", {
                        className: "flex items-center justify-between py-0.5 px-1 rounded hover:bg-slate-50",
                        children: [
                          p.jsx("span", {
                            className: "text-slate-600",
                            children: "New window:"
                          }),
                          p.jsx("span", {
                            className: "font-medium bg-green-50 text-green-700 px-1 rounded",
                            children: "On"
                          })
                        ]
                      }),
                      k.settings.removeOpenedUrls && p.jsxs("div", {
                        className: "flex items-center justify-between py-0.5 px-1 rounded hover:bg-slate-50",
                        children: [
                          p.jsx("span", {
                            className: "text-slate-600",
                            children: "Remove opened:"
                          }),
                          p.jsx("span", {
                            className: "font-medium bg-green-50 text-green-700 px-1 rounded",
                            children: "On"
                          })
                        ]
                      }),
                      k.settings.randomOrder && p.jsxs("div", {
                        className: "flex items-center justify-between py-0.5 px-1 rounded hover:bg-slate-50",
                        children: [
                          p.jsx("span", {
                            className: "text-slate-600",
                            children: "Random order:"
                          }),
                          p.jsx("span", {
                            className: "font-medium bg-green-50 text-green-700 px-1 rounded",
                            children: "On"
                          })
                        ]
                      }),
                      k.settings.reverseOrder && p.jsxs("div", {
                        className: "flex items-center justify-between py-0.5 px-1 rounded hover:bg-slate-50",
                        children: [
                          p.jsx("span", {
                            className: "text-slate-600",
                            children: "Reverse order:"
                          }),
                          p.jsx("span", {
                            className: "font-medium bg-green-50 text-green-700 px-1 rounded",
                            children: "On"
                          })
                        ]
                      }),
                      k.settings.openInSingleTab && p.jsxs("div", {
                        className: "flex items-center justify-between py-0.5 px-1 rounded hover:bg-slate-50",
                        children: [
                          p.jsx("span", {
                            className: "text-slate-600",
                            children: "Single tab:"
                          }),
                          p.jsx("span", {
                            className: "font-medium bg-green-50 text-green-700 px-1 rounded",
                            children: "On"
                          })
                        ]
                      }),
                      k.settings.waitForTabLoad && p.jsxs("div", {
                        className: "flex items-center justify-between py-0.5 px-1 rounded hover:bg-slate-50",
                        children: [
                          p.jsx("span", {
                            className: "text-slate-600",
                            children: "Wait for load:"
                          }),
                          p.jsx("span", {
                            className: "font-medium bg-green-50 text-green-700 px-1 rounded",
                            children: "On"
                          })
                        ]
                      }),
                      k.settings.handleNonUrls && p.jsxs("div", {
                        className: "flex items-center justify-between py-0.5 px-1 rounded hover:bg-slate-50",
                        children: [
                          p.jsx("span", {
                            className: "text-slate-600",
                            children: "Handle non-URLs:"
                          }),
                          p.jsx("span", {
                            className: "font-medium bg-green-50 text-green-700 px-1 rounded",
                            children: "On"
                          })
                        ]
                      }),
                      k.settings.urlLimit > 0 && p.jsxs("div", {
                        className: "flex items-center justify-between py-0.5 px-1 rounded hover:bg-slate-50",
                        children: [
                          p.jsx("span", {
                            className: "text-slate-600",
                            children: "URL limit:"
                          }),
                          p.jsx("span", {
                            className: "font-medium bg-blue-50 px-1 rounded",
                            children: k.settings.urlLimit
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }, k.id))
        }),
        p.jsx(Zg, {
          isOpen: w.isOpen,
          onClose: T,
          onConfirm: w.onConfirm,
          title: w.title,
          message: w.message,
          confirmText: w.type === "load" ? "Load" : "Delete",
          cancelText: "Cancel",
          confirmButtonClass: w.type === "load" ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"
        })
      ]
    });
  }
  function AC({ urlInput: e }) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2;
    const [t, n] = ol(), r = vs(e, {
      handleNonUrls: ((_b3 = (_a3 = t == null ? void 0 : t.urlLists) == null ? void 0 : _a3.currentSettings) == null ? void 0 : _b3.handleNonUrls) || false,
      randomOrder: ((_d2 = (_c2 = t == null ? void 0 : t.urlLists) == null ? void 0 : _c2.currentSettings) == null ? void 0 : _d2.randomOrder) || false,
      reverseOrder: ((_f2 = (_e2 = t == null ? void 0 : t.urlLists) == null ? void 0 : _e2.currentSettings) == null ? void 0 : _f2.reverseOrder) || false,
      urlLimit: ((_h2 = (_g2 = t == null ? void 0 : t.urlLists) == null ? void 0 : _g2.currentSettings) == null ? void 0 : _h2.urlLimit) || 0
    });
    return e.split(`
`).filter((l) => l.trim().length > 0).length, p.jsx("div", {
      className: "flex flex-wrap gap-1",
      children: p.jsxs("div", {
        className: "bg-slate-100 rounded px-1.5 py-0.5 text-xs flex items-center",
        children: [
          p.jsx(Qc, {
            className: "w-3 h-3 mr-0.5 text-green-500"
          }),
          p.jsx("span", {
            className: "font-medium text-slate-700",
            children: r.length
          }),
          p.jsx("span", {
            className: "text-slate-600 ml-1",
            children: "valid"
          })
        ]
      })
    });
  }
  var FC = (e = "") => {
    const t = rv();
    let n, r = [];
    const l = sv(), o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = (u, d) => {
      switch (u.status) {
        case "undeliverable":
          r.some((m) => m.message.messageID === u.message.messageID) || (r = [
            ...r,
            {
              message: u.message,
              resolvedDestination: u.resolvedDestination
            }
          ]);
          return;
        case "deliverable":
          r = r.reduce((m, v) => v.resolvedDestination === u.deliverableTo ? (Fi.toBackground(d, {
            type: "deliver",
            message: v.message
          }), m) : [
            ...m,
            v
          ], []);
          return;
        case "delivered":
          u.receipt.message.messageType === "message" && l.add(u.receipt);
          return;
        case "incoming":
          u.message.messageType === "reply" && l.remove(u.message.messageID), o.forEach((m) => m(u.message, d));
          return;
        case "terminated": {
          const m = l.entries().filter((v) => u.fingerprint === v.to);
          l.remove(m), m.forEach(({ message: v }) => s.forEach((f) => f(v)));
        }
      }
    }, a = () => {
      n = lv.runtime.connect({
        name: ov({
          endpointName: e,
          fingerprint: t
        })
      }), n.onMessage.addListener(i), n.onDisconnect.addListener(a), Fi.toBackground(n, {
        type: "sync",
        pendingResponses: l.entries(),
        pendingDeliveries: [
          ...new Set(r.map(({ resolvedDestination: u }) => u))
        ]
      });
    };
    return a(), {
      onFailure(u) {
        s.add(u);
      },
      onMessage(u) {
        o.add(u);
      },
      postMessage(u) {
        Fi.toBackground(n, {
          type: "deliver",
          message: u
        });
      }
    };
  }, Yg = FC("popup"), xd = iv("popup", (e) => Yg.postMessage(e));
  Yg.onMessage(xd.handleMessage);
  var { sendMessage: _C, onMessage: QC } = xd;
  av(xd);
  const DC = () => {
    const [e, t] = c.useState(false), n = async () => {
      if (!e)
        try {
          t(true);
          let [r] = await chrome.tabs.query({
            active: true,
            currentWindow: true
          });
          await _C("openSidePanel", {
            windowId: r.windowId
          }, "background"), z.success("Ready to assist you!", {
            duration: 2e3
          }), window.close();
        } catch {
          t(false), z.error("Unable to start the app");
        }
    };
    return p.jsxs("div", {
      className: "flex gap-2 items-center",
      children: [
        p.jsxs("button", {
          onClick: n,
          disabled: e,
          className: `w-full flex items-center justify-between px-4 py-2.5
                         bg-white hover:bg-slate-50
                         text-slate-800 text-xs font-medium
                         rounded-lg
                         border border-slate-200
                         shadow-sm
                         focus:outline-none focus:ring-1 focus:ring-blue-500
                         disabled:opacity-60 disabled:pointer-events-none`,
          "aria-label": "Open Sidebar",
          children: [
            p.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e ? p.jsxs("svg", {
                  className: "h-3.5 w-3.5 text-slate-500 animate-spin",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    p.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4"
                    }),
                    p.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })
                  ]
                }) : p.jsx("svg", {
                  className: "w-3.5 h-3.5 text-blue-500",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 2,
                  stroke: "currentColor",
                  children: p.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
                  })
                }),
                p.jsx("span", {
                  children: e ? "Opening..." : "Open Sidebar"
                })
              ]
            }),
            p.jsx("svg", {
              className: "w-3.5 h-3.5 text-slate-400",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              children: p.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.25 4.5l7.5 7.5-7.5 7.5"
              })
            })
          ]
        }),
        p.jsxs("a", {
          href: chrome.runtime.getURL("sidepanel.html"),
          target: "_blank",
          rel: "noopener noreferrer",
          className: `w-full flex items-center justify-between px-4 py-2.5
                         bg-white hover:bg-slate-50
                         text-slate-800 text-xs font-medium
                         rounded-lg
                         border border-slate-200
                         shadow-sm
                         focus:outline-none focus:ring-1 focus:ring-blue-500
                         no-underline`,
          "aria-label": "Open New Tab",
          children: [
            p.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                p.jsx("svg", {
                  className: "w-3.5 h-3.5 text-green-500",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 2,
                  stroke: "currentColor",
                  children: p.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 4.5v15m7.5-7.5h-15"
                  })
                }),
                p.jsx("span", {
                  children: "Open in New Tab"
                })
              ]
            }),
            p.jsx("svg", {
              className: "w-3.5 h-3.5 text-slate-400",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              children: p.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.25 4.5l7.5 7.5-7.5 7.5"
              })
            })
          ]
        })
      ]
    });
  };
  function UC() {
    const e = window.location.pathname.includes("sidepanel.html"), [t, n] = ol(), [r, l] = c.useState(""), { savedLists: o, currentSettings: s } = t.urlLists, [i, a] = c.useState(s.batchSize), [u, d] = c.useState(s.delaySeconds), [m, v] = c.useState(s.openInNewWindow), [f, x] = c.useState(s.openInSingleTab), [w, b] = c.useState(s.removeOpenedUrls), [h, g] = c.useState(s.urlLimit), [y, E] = c.useState(s.handleNonUrls), [S, N] = c.useState(s.randomOrder), [T, k] = c.useState(s.reverseOrder), [M, $] = c.useState(s.waitForTabLoad), [I, Z] = c.useState(s.closeTabAfterLoad || false), [B, P] = c.useState(s.closeTabDelay || 2), [A, F] = c.useState(false), [H, j] = c.useState(false), [C, L] = c.useState({
      processed: 0,
      total: 0,
      url: "",
      batchNumber: 0,
      totalBatches: 0
    }), [V, D] = c.useState(0), [_, K] = c.useState(false), G = R.useRef({
      stopRequested: false,
      isPaused: false,
      resumeCallback: null
    }), Ne = [
      {
        id: "input",
        label: "URLs",
        icon: p.jsx($u, {
          className: "w-3 h-3"
        }),
        tooltip: "Enter and manage URL lists",
        ariaLabel: "URL input tab"
      },
      {
        id: "settings",
        label: "Settings",
        icon: p.jsx(Vs, {
          className: "w-3 h-3"
        }),
        tooltip: "Configure URL opener settings",
        ariaLabel: "Settings tab"
      }
    ];
    c.useEffect(() => {
      a(s.batchSize), d(s.delaySeconds), v(s.openInNewWindow), x(s.openInSingleTab), b(s.removeOpenedUrls), g(s.urlLimit), E(s.handleNonUrls), N(s.randomOrder), k(s.reverseOrder), $(s.waitForTabLoad), Z(s.closeTabAfterLoad || false), P(s.closeTabDelay || 2), X();
    }, [
      s
    ]), c.useEffect(() => {
      n.updateCurrentSettings({
        batchSize: i,
        delaySeconds: u,
        openInNewWindow: m,
        openInSingleTab: f,
        removeOpenedUrls: w,
        urlLimit: h,
        handleNonUrls: y,
        randomOrder: S,
        reverseOrder: T,
        waitForTabLoad: M,
        closeTabAfterLoad: I,
        closeTabDelay: B
      }), X();
    }, [
      i,
      u,
      m,
      f,
      w,
      h,
      y,
      S,
      T,
      M,
      I,
      B
    ]);
    const X = () => {
      const ee = i !== Xe.batchSize || u !== Xe.delaySeconds || m !== Xe.openInNewWindow || f !== Xe.openInSingleTab || w !== Xe.removeOpenedUrls || h !== Xe.urlLimit || y !== Xe.handleNonUrls || S !== Xe.randomOrder || T !== Xe.reverseOrder || M !== Xe.waitForTabLoad || I !== false || B !== Xe.closeTabDelay;
      K(ee);
    };
    c.useEffect(() => {
      n.loadSavedLists(), X();
    }, []);
    const st = (ee) => {
      L(ee);
    }, Qe = () => {
      H && G.current.resumeCallback ? (G.current.isPaused = false, G.current.resumeCallback(), j(false)) : (G.current.isPaused = true, j(true));
    }, hr = () => {
      G.current.stopRequested = true, H && G.current.resumeCallback && G.current.resumeCallback(), z.info("Stopping URL opening...");
    }, it = () => {
      G.current = {
        stopRequested: false,
        isPaused: false,
        resumeCallback: null
      }, j(false), L({
        processed: 0,
        total: 0,
        url: "",
        batchNumber: 0,
        totalBatches: 0
      });
    }, cl = async () => {
      if (!r.trim()) {
        z.error("Please enter URLs first");
        return;
      }
      const ee = vs(r, {
        handleNonUrls: y,
        randomOrder: S,
        reverseOrder: T,
        urlLimit: h > 0 ? h : 0
      });
      if (ee.length === 0) {
        z.error("No valid URLs to open");
        return;
      }
      it(), F(true);
      try {
        const se = await ma(ee, {
          batchSize: i,
          delaySeconds: u,
          openInNewWindow: m,
          openInSingleTab: f,
          waitForTabLoad: M,
          closeTabAfterLoad: I,
          closeTabDelay: B
        }, G.current, st);
        if (G.current.stopRequested ? z.info(`Opened ${se.length} URLs before stopping`) : z.success(`Opened ${se.length} URLs successfully`), w) {
          const Mt = ha(r, se);
          l(Mt);
        }
      } catch (se) {
        console.error("Error opening URLs:", se), z.error("Failed to open URLs");
      } finally {
        F(false), it();
      }
    }, jo = async () => {
      if (!r.trim()) {
        z.error("Please enter URLs first");
        return;
      }
      const ee = vs(r, {
        handleNonUrls: y,
        randomOrder: S,
        reverseOrder: T,
        urlLimit: h > 0 ? h : 0
      });
      if (ee.length === 0) {
        z.error("No valid URLs to open");
        return;
      }
      it(), F(true);
      try {
        const se = await ma(ee, {
          batchSize: i,
          delaySeconds: u,
          openInNewWindow: false,
          openInSingleTab: true,
          waitForTabLoad: M,
          closeTabAfterLoad: I,
          closeTabDelay: B
        }, G.current, st);
        if (G.current.stopRequested ? z.info(`Opened ${se.length} URLs in a single tab before stopping`) : z.success(`Opened ${se.length} URLs in a single tab`), w) {
          const Mt = ha(r, se);
          l(Mt);
        }
      } catch (se) {
        console.error("Error opening URLs:", se), z.error("Failed to open URLs");
      } finally {
        F(false), it();
      }
    }, Pi = async () => {
      if (!r.trim()) {
        z.error("Please enter URLs first");
        return;
      }
      const ee = vs(r, {
        handleNonUrls: y,
        randomOrder: S,
        reverseOrder: T,
        urlLimit: h > 0 ? h : 0
      });
      if (ee.length === 0) {
        z.error("No valid URLs to open");
        return;
      }
      it(), F(true);
      try {
        const se = await ma(ee, {
          batchSize: i,
          delaySeconds: u,
          openInNewWindow: true,
          openInSingleTab: false,
          waitForTabLoad: M,
          closeTabAfterLoad: I,
          closeTabDelay: B
        }, G.current, st);
        if (G.current.stopRequested ? z.info(`Opened ${se.length} URLs in a new window before stopping`) : z.success(`Opened ${se.length} URLs in a new window`), w) {
          const Mt = ha(r, se);
          l(Mt);
        }
      } catch (se) {
        console.error("Error opening URLs:", se), z.error("Failed to open URLs");
      } finally {
        F(false), it();
      }
    }, Oi = () => {
      n.resetSettings(), z.success("Settings reset to defaults");
    }, dl = ({ children: ee, title: se }) => p.jsxs("div", {
      className: "group relative inline-block",
      children: [
        ee,
        p.jsxs("div", {
          className: "absolute bottom-full left-1/2 mb-1 hidden -translate-x-1/2 transform rounded bg-slate-800 px-2 py-1 text-xs text-white group-hover:block",
          children: [
            se,
            p.jsx("div", {
              className: "absolute top-full left-1/2 -ml-1 h-0 w-0 -translate-x-1/2 transform border-4 border-transparent border-t-slate-800"
            })
          ]
        })
      ]
    }), Ii = () => {
      if (!A)
        return null;
      const ee = C.total > 0 ? Math.round(C.processed / C.total * 100) : 0, se = H ? "Paused" : "Opening";
      return p.jsxs("div", {
        className: "mt-2 border border-slate-200 rounded-md p-1.5 bg-slate-50",
        children: [
          p.jsxs("div", {
            className: "flex justify-between items-center mb-1",
            children: [
              p.jsxs("div", {
                className: "flex items-center",
                children: [
                  p.jsxs("span", {
                    className: `text-xs font-medium ${H ? "text-amber-500" : "text-blue-500"}`,
                    children: [
                      se,
                      " URLs"
                    ]
                  }),
                  p.jsxs("span", {
                    className: "ml-1 text-xs text-slate-500",
                    children: [
                      "(",
                      C.processed,
                      "/",
                      C.total,
                      ")"
                    ]
                  })
                ]
              }),
              p.jsxs("div", {
                className: "flex space-x-1",
                children: [
                  p.jsx(dl, {
                    title: H ? "Resume" : "Pause",
                    children: p.jsx("button", {
                      onClick: Qe,
                      className: `p-1 rounded hover:bg-slate-200 ${H ? "bg-slate-100" : ""}`,
                      children: H ? p.jsx(tp, {
                        className: "w-3 h-3 text-blue-500"
                      }) : p.jsx(x2, {
                        className: "w-3 h-3 text-amber-500"
                      })
                    })
                  }),
                  p.jsx(dl, {
                    title: "Stop",
                    children: p.jsx("button", {
                      onClick: hr,
                      className: "p-1 rounded hover:bg-slate-200",
                      children: p.jsx(T2, {
                        className: "w-3 h-3 text-red-500"
                      })
                    })
                  })
                ]
              })
            ]
          }),
          p.jsx("div", {
            className: "w-full bg-slate-200 rounded-full h-1.5",
            children: p.jsx("div", {
              className: `h-1.5 rounded-full transition-all duration-300 ${H ? "bg-amber-500" : "bg-blue-500"}`,
              style: {
                width: `${ee}%`
              }
            })
          }),
          C.url && p.jsxs("div", {
            className: "mt-1 text-xs text-slate-500 truncate",
            children: [
              p.jsx("span", {
                className: "font-medium",
                children: "Current:"
              }),
              " ",
              C.url
            ]
          }),
          C.batchNumber > 0 && p.jsxs("div", {
            className: "text-xs text-slate-500",
            children: [
              p.jsx("span", {
                className: "font-medium",
                children: "Batch:"
              }),
              " ",
              C.batchNumber,
              "/",
              C.totalBatches,
              I && p.jsxs("span", {
                className: "ml-2 text-xs text-blue-500 flex items-center inline-flex",
                children: [
                  p.jsx(tr, {
                    className: "w-2.5 h-2.5 mr-0.5"
                  }),
                  "Auto-close: ",
                  B,
                  "s"
                ]
              })
            ]
          })
        ]
      });
    };
    return p.jsxs(Vc, {
      children: [
        p.jsx(Yc, {
          titleTemplate: "%s",
          children: p.jsx("title", {
            children: "Bulk URL Opener & Tab Manager \u2728"
          })
        }),
        p.jsxs("div", {
          className: "flex flex-col space-y-2 max-w-full",
          children: [
            !e && p.jsx(DC, {}),
            p.jsxs("div", {
              className: "flex flex-col",
              children: [
                p.jsx("h2", {
                  className: "font-semibold text-base text-slate-900",
                  children: "Bulk URL Opener"
                }),
                p.jsx("p", {
                  className: "text-slate-500 text-xs",
                  children: "Open multiple URLs efficiently and close them after a delay"
                })
              ]
            }),
            p.jsx("div", {
              className: "bg-white rounded-md shadow-sm border border-slate-200 p-1.5",
              children: p.jsx("div", {
                className: "flex flex-col gap-3",
                children: p.jsx("div", {
                  className: "w-auto",
                  children: p.jsxs(Wg, {
                    tabs: Ne,
                    selectedIndex: V,
                    onChange: D,
                    showIndicator: true,
                    changedTabs: _ ? [
                      "settings"
                    ] : [],
                    variant: "underline",
                    children: [
                      p.jsx(ei, {
                        bgColor: "bg-transparent",
                        noPadding: true,
                        children: p.jsxs("div", {
                          className: "flex flex-col space-y-2",
                          children: [
                            p.jsxs("div", {
                              className: "bg-white rounded-md shadow-sm border border-slate-200 p-2",
                              children: [
                                p.jsxs("div", {
                                  className: "flex items-center justify-between mb-1.5",
                                  children: [
                                    p.jsxs("h3", {
                                      className: "text-xs font-medium text-slate-900 flex items-center",
                                      children: [
                                        p.jsx($u, {
                                          className: "w-3 h-3 mr-1 text-slate-500"
                                        }),
                                        "Enter URLs"
                                      ]
                                    }),
                                    p.jsx(AC, {
                                      urlInput: r
                                    })
                                  ]
                                }),
                                p.jsx(IC, {
                                  value: r,
                                  onChange: l,
                                  placeholder: `Enter URLs (one per line)
Example:
https://google.com
https://github.com
facebook.com`
                                }),
                                p.jsx(Ii, {}),
                                p.jsxs("div", {
                                  className: "mt-2 flex items-center justify-between",
                                  children: [
                                    p.jsxs("div", {
                                      className: "flex flex-wrap gap-1",
                                      children: [
                                        p.jsxs("div", {
                                          className: "bg-slate-100 rounded px-1 py-0.5 flex items-center",
                                          title: "Batch Size",
                                          children: [
                                            p.jsx(Zs, {
                                              className: "w-2.5 h-2.5 mr-0.5 text-blue-500"
                                            }),
                                            p.jsx("span", {
                                              children: i
                                            })
                                          ]
                                        }),
                                        p.jsxs("div", {
                                          className: "bg-slate-100 rounded px-1 py-0.5 flex items-center",
                                          title: "Delay",
                                          children: [
                                            p.jsx(tr, {
                                              className: "w-2.5 h-2.5 mr-0.5 text-blue-500"
                                            }),
                                            p.jsxs("span", {
                                              children: [
                                                u,
                                                "s"
                                              ]
                                            })
                                          ]
                                        }),
                                        h > 0 && p.jsxs("div", {
                                          className: "bg-slate-100 rounded px-1 py-0.5 flex items-center",
                                          title: "URL Limit",
                                          children: [
                                            p.jsx(Pu, {
                                              className: "w-2.5 h-2.5 mr-0.5 text-blue-500"
                                            }),
                                            p.jsx("span", {
                                              children: h
                                            })
                                          ]
                                        }),
                                        m && p.jsxs("div", {
                                          className: "bg-slate-100 rounded px-1 py-0.5 flex items-center",
                                          title: "New Window",
                                          children: [
                                            p.jsx(Ys, {
                                              className: "w-2.5 h-2.5 mr-0.5 text-blue-500"
                                            }),
                                            p.jsx("span", {
                                              children: "Window"
                                            })
                                          ]
                                        }),
                                        f && p.jsxs("div", {
                                          className: "bg-slate-100 rounded px-1 py-0.5 flex items-center",
                                          title: "Single Tab",
                                          children: [
                                            p.jsx(Tu, {
                                              className: "w-2.5 h-2.5 mr-0.5 text-blue-500"
                                            }),
                                            p.jsx("span", {
                                              children: "Single Tab"
                                            })
                                          ]
                                        }),
                                        S && p.jsxs("div", {
                                          className: "bg-slate-100 rounded px-1 py-0.5 flex items-center",
                                          title: "Random Order",
                                          children: [
                                            p.jsx(Gc, {
                                              className: "w-2.5 h-2.5 mr-0.5 text-blue-500"
                                            }),
                                            p.jsx("span", {
                                              children: "Random"
                                            })
                                          ]
                                        }),
                                        T && p.jsxs("div", {
                                          className: "bg-slate-100 rounded px-1 py-0.5 flex items-center",
                                          title: "Reverse Order",
                                          children: [
                                            p.jsx(Kc, {
                                              className: "w-2.5 h-2.5 mr-0.5 text-blue-500"
                                            }),
                                            p.jsx("span", {
                                              children: "Reverse"
                                            })
                                          ]
                                        }),
                                        I && p.jsxs("div", {
                                          className: "bg-slate-100 rounded px-1 py-0.5 flex items-center",
                                          title: `Auto-close tabs after ${B}s`,
                                          children: [
                                            p.jsx(tr, {
                                              className: "w-2.5 h-2.5 mr-0.5 text-blue-500"
                                            }),
                                            p.jsxs("span", {
                                              children: [
                                                "Auto-close ",
                                                B,
                                                "s"
                                              ]
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    p.jsxs("div", {
                                      className: "flex items-center space-x-1",
                                      children: [
                                        p.jsxs("button", {
                                          onClick: () => D(1),
                                          className: "px-1 py-0.5 rounded bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center transition-colors",
                                          children: [
                                            p.jsx(Vs, {
                                              className: "w-2.5 h-2.5 mr-0.5"
                                            }),
                                            "Edit"
                                          ]
                                        }),
                                        p.jsxs(Cl, {
                                          as: "div",
                                          className: "relative inline-block text-left",
                                          children: [
                                            p.jsxs("div", {
                                              className: "flex",
                                              children: [
                                                p.jsxs("button", {
                                                  onClick: cl,
                                                  disabled: A || !r.trim(),
                                                  className: `px-2 py-0.5 text-xs font-medium rounded-l-md shadow-sm flex items-center transition-colors ${A || !r.trim() ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`,
                                                  children: [
                                                    p.jsx(tp, {
                                                      className: "w-3 h-3 mr-1"
                                                    }),
                                                    A ? "Opening..." : "Open"
                                                  ]
                                                }),
                                                p.jsx(Cl.Button, {
                                                  disabled: A || !r.trim(),
                                                  className: `px-1 py-0.5 text-xs font-medium rounded-r-md border-l border-blue-400 shadow-sm flex items-center transition-colors ${A || !r.trim() ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`,
                                                  children: p.jsx(hh, {
                                                    className: "w-3 h-3"
                                                  })
                                                })
                                              ]
                                            }),
                                            p.jsx(Fg, {
                                              as: c.Fragment,
                                              enter: "transition ease-out duration-100",
                                              enterFrom: "transform opacity-0 scale-95",
                                              enterTo: "transform opacity-100 scale-100",
                                              leave: "transition ease-in duration-75",
                                              leaveFrom: "transform opacity-100 scale-100",
                                              leaveTo: "transform opacity-0 scale-95",
                                              children: p.jsx(Cl.Items, {
                                                className: "absolute right-0 z-10 mt-1 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                children: p.jsxs("div", {
                                                  className: "py-1",
                                                  children: [
                                                    p.jsx(Cl.Item, {
                                                      children: ({ active: ee }) => p.jsxs("button", {
                                                        onClick: jo,
                                                        className: `${ee ? "bg-slate-100" : ""} flex w-full items-center px-2 py-1 text-xs text-slate-700`,
                                                        children: [
                                                          p.jsx(Tu, {
                                                            className: "mr-2 h-3 w-3 text-indigo-500"
                                                          }),
                                                          "Open in single tab"
                                                        ]
                                                      })
                                                    }),
                                                    p.jsx(Cl.Item, {
                                                      children: ({ active: ee }) => p.jsxs("button", {
                                                        onClick: Pi,
                                                        className: `${ee ? "bg-slate-100" : ""} flex w-full items-center px-2 py-1 text-xs text-slate-700`,
                                                        children: [
                                                          p.jsx(Ys, {
                                                            className: "mr-2 h-3 w-3 text-emerald-500"
                                                          }),
                                                          "Open in new window"
                                                        ]
                                                      })
                                                    })
                                                  ]
                                                })
                                              })
                                            })
                                          ]
                                        })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            }),
                            p.jsxs("div", {
                              className: "bg-white rounded-md shadow-sm border border-slate-200 p-2 mt-2",
                              children: [
                                p.jsxs("h3", {
                                  className: "text-xs font-medium text-slate-900 flex items-center mb-1.5",
                                  children: [
                                    p.jsx(Zs, {
                                      className: "w-3 h-3 mr-1 text-slate-500"
                                    }),
                                    "Batch Settings"
                                  ]
                                }),
                                p.jsx(Vg, {
                                  batchSize: i,
                                  setBatchSize: a,
                                  delaySeconds: u,
                                  setDelaySeconds: d
                                })
                              ]
                            }),
                            p.jsx(MC, {
                              savedLists: o,
                              currentUrls: r,
                              currentSettings: {
                                batchSize: i,
                                delaySeconds: u,
                                openInNewWindow: m,
                                openInSingleTab: f,
                                removeOpenedUrls: w,
                                urlLimit: h,
                                handleNonUrls: y,
                                randomOrder: S,
                                reverseOrder: T,
                                closeTabAfterLoad: I,
                                closeTabDelay: B
                              },
                              onSave: (ee) => {
                                n.setCurrentUrls(r), n.saveUrlList(ee, {
                                  batchSize: i,
                                  delaySeconds: u,
                                  openInNewWindow: m,
                                  openInSingleTab: f,
                                  removeOpenedUrls: w,
                                  urlLimit: h,
                                  handleNonUrls: y,
                                  randomOrder: S,
                                  reverseOrder: T,
                                  closeTabAfterLoad: I,
                                  closeTabDelay: B
                                });
                              },
                              onLoad: (ee) => {
                                n.loadUrlList(ee);
                                const se = o.find((Mt) => Mt.id === ee);
                                se && l(se.urls);
                              },
                              onDelete: (ee) => n.deleteUrlList(ee)
                            })
                          ]
                        })
                      }),
                      p.jsx(ei, {
                        bgColor: "bg-transparent",
                        noPadding: true,
                        children: p.jsxs("div", {
                          className: "bg-white rounded-md shadow-sm border border-slate-200 p-2",
                          children: [
                            p.jsx(OC, {
                              batchSize: i,
                              setBatchSize: a,
                              delaySeconds: u,
                              setDelaySeconds: d,
                              openInNewWindow: m,
                              setOpenInNewWindow: v,
                              openInSingleTab: f,
                              setOpenInSingleTab: x,
                              removeOpenedUrls: w,
                              setRemoveOpenedUrls: b,
                              urlLimit: h,
                              setUrlLimit: g,
                              handleNonUrls: y,
                              setHandleNonUrls: E,
                              randomOrder: S,
                              setRandomOrder: N,
                              reverseOrder: T,
                              setReverseOrder: k,
                              waitForTabLoad: M,
                              setWaitForTabLoad: $,
                              closeTabAfterLoad: I,
                              setCloseTabAfterLoad: Z,
                              closeTabDelay: B,
                              setCloseTabDelay: P,
                              onResetSettings: Oi
                            }),
                            p.jsx("div", {
                              className: "mt-3 flex justify-end",
                              children: p.jsxs("button", {
                                onClick: () => D(0),
                                className: "px-2 py-0.5 text-xs font-medium rounded-md shadow-sm bg-blue-500 text-white hover:bg-blue-600 flex items-center transition-colors",
                                children: [
                                  p.jsx(E5, {
                                    className: "w-3 h-3 mr-1"
                                  }),
                                  "Back to URLs"
                                ]
                              })
                            })
                          ]
                        })
                      })
                    ]
                  })
                })
              })
            })
          ]
        })
      ]
    });
  }
  function zC() {
    return p.jsxs(Vc, {
      children: [
        p.jsx(Yc, {
          titleTemplate: "%s",
          children: p.jsx("title", {
            children: "Login with Your License"
          })
        }),
        p.jsxs("div", {
          className: "flex flex-col items-center justify-center h-screen",
          children: [
            p.jsx("h1", {
              className: "text-4xl font-bold mb-4",
              children: "Coming Soon"
            }),
            p.jsx("p", {
              className: "text-xl text-gray-600",
              children: "We're working hard to bring you an amazing login experience."
            }),
            p.jsx("p", {
              className: "text-lg text-gray-500 mt-2",
              children: "Stay tuned for updates!"
            })
          ]
        })
      ]
    });
  }
  function BC() {
    return ol(), p.jsxs(Vc, {
      children: [
        p.jsx(Yc, {
          titleTemplate: "%s",
          children: p.jsx("title", {
            children: "Profile"
          })
        }),
        p.jsxs("div", {
          className: "flex flex-col items-center justify-center h-screen",
          children: [
            p.jsx("h1", {
              className: "text-4xl font-bold mb-4",
              children: "Profile"
            }),
            p.jsx("p", {
              className: "text-xl text-gray-600",
              children: "Manage your account and settings."
            })
          ]
        })
      ]
    });
  }
  const HC = [
    {
      path: "/login",
      isPublicRoute: true,
      component: zC
    },
    {
      path: "/profile",
      isPublicRoute: false,
      component: BC
    },
    {
      path: "/",
      isPublicRoute: true,
      component: UC
    }
  ];
  XC = function() {
    return p.jsx(kx, {
      children: HC.map((e) => {
        const t = e.component;
        return e.isPublicRoute ? p.jsx(wu, {
          path: e.path,
          element: p.jsx(t, {})
        }, e.path) : p.jsx(wu, {
          path: e.path,
          element: p.jsx(tw, {
            children: p.jsx(t, {})
          })
        }, e.path);
      })
    });
  };
})();
export {
  XC as A,
  VC as H,
  R,
  __tla,
  o5 as a,
  Td as c,
  p as j
};
