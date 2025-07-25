(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === "childList")
        for (const f of c.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(l) {
    const c = {};
    return (
      l.integrity && (c.integrity = l.integrity),
      l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = s(l);
    fetch(l.href, c);
  }
})();
function P0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qc = { exports: {} },
  Xs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qy;
function JT() {
  if (Qy) return Xs;
  Qy = 1;
  var e = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function s(r, l, c) {
    var f = null;
    if (
      (c !== void 0 && (f = "" + c),
      l.key !== void 0 && (f = "" + l.key),
      "key" in l)
    ) {
      c = {};
      for (var d in l) d !== "key" && (c[d] = l[d]);
    } else c = l;
    return (
      (l = c.ref),
      { $$typeof: e, type: r, key: f, ref: l !== void 0 ? l : null, props: c }
    );
  }
  return (Xs.Fragment = i), (Xs.jsx = s), (Xs.jsxs = s), Xs;
}
var Zy;
function WT() {
  return Zy || ((Zy = 1), (Qc.exports = JT())), Qc.exports;
}
var T = WT(),
  Zc = { exports: {} },
  ft = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $y;
function IT() {
  if ($y) return ft;
  $y = 1;
  var e = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function x(_) {
    return _ === null || typeof _ != "object"
      ? null
      : ((_ = (b && _[b]) || _["@@iterator"]),
        typeof _ == "function" ? _ : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    M = {};
  function R(_, X, I) {
    (this.props = _),
      (this.context = X),
      (this.refs = M),
      (this.updater = I || O);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (_, X) {
      if (typeof _ != "object" && typeof _ != "function" && _ != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, _, X, "setState");
    }),
    (R.prototype.forceUpdate = function (_) {
      this.updater.enqueueForceUpdate(this, _, "forceUpdate");
    });
  function C() {}
  C.prototype = R.prototype;
  function B(_, X, I) {
    (this.props = _),
      (this.context = X),
      (this.refs = M),
      (this.updater = I || O);
  }
  var N = (B.prototype = new C());
  (N.constructor = B), A(N, R.prototype), (N.isPureReactComponent = !0);
  var G = Array.isArray,
    k = { H: null, A: null, T: null, S: null, V: null },
    J = Object.prototype.hasOwnProperty;
  function Z(_, X, I, $, it, xt) {
    return (
      (I = xt.ref),
      { $$typeof: e, type: _, key: X, ref: I !== void 0 ? I : null, props: xt }
    );
  }
  function Q(_, X) {
    return Z(_.type, X, void 0, void 0, void 0, _.props);
  }
  function K(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === e;
  }
  function W(_) {
    var X = { "=": "=0", ":": "=2" };
    return (
      "$" +
      _.replace(/[=:]/g, function (I) {
        return X[I];
      })
    );
  }
  var ct = /\/+/g;
  function dt(_, X) {
    return typeof _ == "object" && _ !== null && _.key != null
      ? W("" + _.key)
      : X.toString(36);
  }
  function oe() {}
  function de(_) {
    switch (_.status) {
      case "fulfilled":
        return _.value;
      case "rejected":
        throw _.reason;
      default:
        switch (
          (typeof _.status == "string"
            ? _.then(oe, oe)
            : ((_.status = "pending"),
              _.then(
                function (X) {
                  _.status === "pending" &&
                    ((_.status = "fulfilled"), (_.value = X));
                },
                function (X) {
                  _.status === "pending" &&
                    ((_.status = "rejected"), (_.reason = X));
                }
              )),
          _.status)
        ) {
          case "fulfilled":
            return _.value;
          case "rejected":
            throw _.reason;
        }
    }
    throw _;
  }
  function Ht(_, X, I, $, it) {
    var xt = typeof _;
    (xt === "undefined" || xt === "boolean") && (_ = null);
    var lt = !1;
    if (_ === null) lt = !0;
    else
      switch (xt) {
        case "bigint":
        case "string":
        case "number":
          lt = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case e:
            case i:
              lt = !0;
              break;
            case y:
              return (lt = _._init), Ht(lt(_._payload), X, I, $, it);
          }
      }
    if (lt)
      return (
        (it = it(_)),
        (lt = $ === "" ? "." + dt(_, 0) : $),
        G(it)
          ? ((I = ""),
            lt != null && (I = lt.replace(ct, "$&/") + "/"),
            Ht(it, X, I, "", function (kn) {
              return kn;
            }))
          : it != null &&
            (K(it) &&
              (it = Q(
                it,
                I +
                  (it.key == null || (_ && _.key === it.key)
                    ? ""
                    : ("" + it.key).replace(ct, "$&/") + "/") +
                  lt
              )),
            X.push(it)),
        1
      );
    lt = 0;
    var we = $ === "" ? "." : $ + ":";
    if (G(_))
      for (var jt = 0; jt < _.length; jt++)
        ($ = _[jt]), (xt = we + dt($, jt)), (lt += Ht($, X, I, xt, it));
    else if (((jt = x(_)), typeof jt == "function"))
      for (_ = jt.call(_), jt = 0; !($ = _.next()).done; )
        ($ = $.value), (xt = we + dt($, jt++)), (lt += Ht($, X, I, xt, it));
    else if (xt === "object") {
      if (typeof _.then == "function") return Ht(de(_), X, I, $, it);
      throw (
        ((X = String(_)),
        Error(
          "Objects are not valid as a React child (found: " +
            (X === "[object Object]"
              ? "object with keys {" + Object.keys(_).join(", ") + "}"
              : X) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return lt;
  }
  function H(_, X, I) {
    if (_ == null) return _;
    var $ = [],
      it = 0;
    return (
      Ht(_, $, "", "", function (xt) {
        return X.call(I, xt, it++);
      }),
      $
    );
  }
  function F(_) {
    if (_._status === -1) {
      var X = _._result;
      (X = X()),
        X.then(
          function (I) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 1), (_._result = I));
          },
          function (I) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 2), (_._result = I));
          }
        ),
        _._status === -1 && ((_._status = 0), (_._result = X));
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var tt =
    typeof reportError == "function"
      ? reportError
      : function (_) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var X = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof _ == "object" &&
                _ !== null &&
                typeof _.message == "string"
                  ? String(_.message)
                  : String(_),
              error: _,
            });
            if (!window.dispatchEvent(X)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", _);
            return;
          }
          console.error(_);
        };
  function St() {}
  return (
    (ft.Children = {
      map: H,
      forEach: function (_, X, I) {
        H(
          _,
          function () {
            X.apply(this, arguments);
          },
          I
        );
      },
      count: function (_) {
        var X = 0;
        return (
          H(_, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (_) {
        return (
          H(_, function (X) {
            return X;
          }) || []
        );
      },
      only: function (_) {
        if (!K(_))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return _;
      },
    }),
    (ft.Component = R),
    (ft.Fragment = s),
    (ft.Profiler = l),
    (ft.PureComponent = B),
    (ft.StrictMode = r),
    (ft.Suspense = p),
    (ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (ft.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (_) {
        return k.H.useMemoCache(_);
      },
    }),
    (ft.cache = function (_) {
      return function () {
        return _.apply(null, arguments);
      };
    }),
    (ft.cloneElement = function (_, X, I) {
      if (_ == null)
        throw Error(
          "The argument must be a React element, but you passed " + _ + "."
        );
      var $ = A({}, _.props),
        it = _.key,
        xt = void 0;
      if (X != null)
        for (lt in (X.ref !== void 0 && (xt = void 0),
        X.key !== void 0 && (it = "" + X.key),
        X))
          !J.call(X, lt) ||
            lt === "key" ||
            lt === "__self" ||
            lt === "__source" ||
            (lt === "ref" && X.ref === void 0) ||
            ($[lt] = X[lt]);
      var lt = arguments.length - 2;
      if (lt === 1) $.children = I;
      else if (1 < lt) {
        for (var we = Array(lt), jt = 0; jt < lt; jt++)
          we[jt] = arguments[jt + 2];
        $.children = we;
      }
      return Z(_.type, it, void 0, void 0, xt, $);
    }),
    (ft.createContext = function (_) {
      return (
        (_ = {
          $$typeof: f,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (_.Provider = _),
        (_.Consumer = { $$typeof: c, _context: _ }),
        _
      );
    }),
    (ft.createElement = function (_, X, I) {
      var $,
        it = {},
        xt = null;
      if (X != null)
        for ($ in (X.key !== void 0 && (xt = "" + X.key), X))
          J.call(X, $) &&
            $ !== "key" &&
            $ !== "__self" &&
            $ !== "__source" &&
            (it[$] = X[$]);
      var lt = arguments.length - 2;
      if (lt === 1) it.children = I;
      else if (1 < lt) {
        for (var we = Array(lt), jt = 0; jt < lt; jt++)
          we[jt] = arguments[jt + 2];
        it.children = we;
      }
      if (_ && _.defaultProps)
        for ($ in ((lt = _.defaultProps), lt))
          it[$] === void 0 && (it[$] = lt[$]);
      return Z(_, xt, void 0, void 0, null, it);
    }),
    (ft.createRef = function () {
      return { current: null };
    }),
    (ft.forwardRef = function (_) {
      return { $$typeof: d, render: _ };
    }),
    (ft.isValidElement = K),
    (ft.lazy = function (_) {
      return { $$typeof: y, _payload: { _status: -1, _result: _ }, _init: F };
    }),
    (ft.memo = function (_, X) {
      return { $$typeof: m, type: _, compare: X === void 0 ? null : X };
    }),
    (ft.startTransition = function (_) {
      var X = k.T,
        I = {};
      k.T = I;
      try {
        var $ = _(),
          it = k.S;
        it !== null && it(I, $),
          typeof $ == "object" &&
            $ !== null &&
            typeof $.then == "function" &&
            $.then(St, tt);
      } catch (xt) {
        tt(xt);
      } finally {
        k.T = X;
      }
    }),
    (ft.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    (ft.use = function (_) {
      return k.H.use(_);
    }),
    (ft.useActionState = function (_, X, I) {
      return k.H.useActionState(_, X, I);
    }),
    (ft.useCallback = function (_, X) {
      return k.H.useCallback(_, X);
    }),
    (ft.useContext = function (_) {
      return k.H.useContext(_);
    }),
    (ft.useDebugValue = function () {}),
    (ft.useDeferredValue = function (_, X) {
      return k.H.useDeferredValue(_, X);
    }),
    (ft.useEffect = function (_, X, I) {
      var $ = k.H;
      if (typeof I == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return $.useEffect(_, X);
    }),
    (ft.useId = function () {
      return k.H.useId();
    }),
    (ft.useImperativeHandle = function (_, X, I) {
      return k.H.useImperativeHandle(_, X, I);
    }),
    (ft.useInsertionEffect = function (_, X) {
      return k.H.useInsertionEffect(_, X);
    }),
    (ft.useLayoutEffect = function (_, X) {
      return k.H.useLayoutEffect(_, X);
    }),
    (ft.useMemo = function (_, X) {
      return k.H.useMemo(_, X);
    }),
    (ft.useOptimistic = function (_, X) {
      return k.H.useOptimistic(_, X);
    }),
    (ft.useReducer = function (_, X, I) {
      return k.H.useReducer(_, X, I);
    }),
    (ft.useRef = function (_) {
      return k.H.useRef(_);
    }),
    (ft.useState = function (_) {
      return k.H.useState(_);
    }),
    (ft.useSyncExternalStore = function (_, X, I) {
      return k.H.useSyncExternalStore(_, X, I);
    }),
    (ft.useTransition = function () {
      return k.H.useTransition();
    }),
    (ft.version = "19.1.0"),
    ft
  );
}
var Jy;
function lh() {
  return Jy || ((Jy = 1), (Zc.exports = IT())), Zc.exports;
}
var E = lh();
const Nt = P0(E);
var $c = { exports: {} },
  Ks = {},
  Jc = { exports: {} },
  Wc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wy;
function tS() {
  return (
    Wy ||
      ((Wy = 1),
      (function (e) {
        function i(H, F) {
          var tt = H.length;
          H.push(F);
          t: for (; 0 < tt; ) {
            var St = (tt - 1) >>> 1,
              _ = H[St];
            if (0 < l(_, F)) (H[St] = F), (H[tt] = _), (tt = St);
            else break t;
          }
        }
        function s(H) {
          return H.length === 0 ? null : H[0];
        }
        function r(H) {
          if (H.length === 0) return null;
          var F = H[0],
            tt = H.pop();
          if (tt !== F) {
            H[0] = tt;
            t: for (var St = 0, _ = H.length, X = _ >>> 1; St < X; ) {
              var I = 2 * (St + 1) - 1,
                $ = H[I],
                it = I + 1,
                xt = H[it];
              if (0 > l($, tt))
                it < _ && 0 > l(xt, $)
                  ? ((H[St] = xt), (H[it] = tt), (St = it))
                  : ((H[St] = $), (H[I] = tt), (St = I));
              else if (it < _ && 0 > l(xt, tt))
                (H[St] = xt), (H[it] = tt), (St = it);
              else break t;
            }
          }
          return F;
        }
        function l(H, F) {
          var tt = H.sortIndex - F.sortIndex;
          return tt !== 0 ? tt : H.id - F.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          e.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            d = f.now();
          e.unstable_now = function () {
            return f.now() - d;
          };
        }
        var p = [],
          m = [],
          y = 1,
          b = null,
          x = 3,
          O = !1,
          A = !1,
          M = !1,
          R = !1,
          C = typeof setTimeout == "function" ? setTimeout : null,
          B = typeof clearTimeout == "function" ? clearTimeout : null,
          N = typeof setImmediate < "u" ? setImmediate : null;
        function G(H) {
          for (var F = s(m); F !== null; ) {
            if (F.callback === null) r(m);
            else if (F.startTime <= H)
              r(m), (F.sortIndex = F.expirationTime), i(p, F);
            else break;
            F = s(m);
          }
        }
        function k(H) {
          if (((M = !1), G(H), !A))
            if (s(p) !== null) (A = !0), J || ((J = !0), dt());
            else {
              var F = s(m);
              F !== null && Ht(k, F.startTime - H);
            }
        }
        var J = !1,
          Z = -1,
          Q = 5,
          K = -1;
        function W() {
          return R ? !0 : !(e.unstable_now() - K < Q);
        }
        function ct() {
          if (((R = !1), J)) {
            var H = e.unstable_now();
            K = H;
            var F = !0;
            try {
              t: {
                (A = !1), M && ((M = !1), B(Z), (Z = -1)), (O = !0);
                var tt = x;
                try {
                  e: {
                    for (
                      G(H), b = s(p);
                      b !== null && !(b.expirationTime > H && W());

                    ) {
                      var St = b.callback;
                      if (typeof St == "function") {
                        (b.callback = null), (x = b.priorityLevel);
                        var _ = St(b.expirationTime <= H);
                        if (((H = e.unstable_now()), typeof _ == "function")) {
                          (b.callback = _), G(H), (F = !0);
                          break e;
                        }
                        b === s(p) && r(p), G(H);
                      } else r(p);
                      b = s(p);
                    }
                    if (b !== null) F = !0;
                    else {
                      var X = s(m);
                      X !== null && Ht(k, X.startTime - H), (F = !1);
                    }
                  }
                  break t;
                } finally {
                  (b = null), (x = tt), (O = !1);
                }
                F = void 0;
              }
            } finally {
              F ? dt() : (J = !1);
            }
          }
        }
        var dt;
        if (typeof N == "function")
          dt = function () {
            N(ct);
          };
        else if (typeof MessageChannel < "u") {
          var oe = new MessageChannel(),
            de = oe.port2;
          (oe.port1.onmessage = ct),
            (dt = function () {
              de.postMessage(null);
            });
        } else
          dt = function () {
            C(ct, 0);
          };
        function Ht(H, F) {
          Z = C(function () {
            H(e.unstable_now());
          }, F);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (e.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Q = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (e.unstable_next = function (H) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var F = 3;
                break;
              default:
                F = x;
            }
            var tt = x;
            x = F;
            try {
              return H();
            } finally {
              x = tt;
            }
          }),
          (e.unstable_requestPaint = function () {
            R = !0;
          }),
          (e.unstable_runWithPriority = function (H, F) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var tt = x;
            x = H;
            try {
              return F();
            } finally {
              x = tt;
            }
          }),
          (e.unstable_scheduleCallback = function (H, F, tt) {
            var St = e.unstable_now();
            switch (
              (typeof tt == "object" && tt !== null
                ? ((tt = tt.delay),
                  (tt = typeof tt == "number" && 0 < tt ? St + tt : St))
                : (tt = St),
              H)
            ) {
              case 1:
                var _ = -1;
                break;
              case 2:
                _ = 250;
                break;
              case 5:
                _ = 1073741823;
                break;
              case 4:
                _ = 1e4;
                break;
              default:
                _ = 5e3;
            }
            return (
              (_ = tt + _),
              (H = {
                id: y++,
                callback: F,
                priorityLevel: H,
                startTime: tt,
                expirationTime: _,
                sortIndex: -1,
              }),
              tt > St
                ? ((H.sortIndex = tt),
                  i(m, H),
                  s(p) === null &&
                    H === s(m) &&
                    (M ? (B(Z), (Z = -1)) : (M = !0), Ht(k, tt - St)))
                : ((H.sortIndex = _),
                  i(p, H),
                  A || O || ((A = !0), J || ((J = !0), dt()))),
              H
            );
          }),
          (e.unstable_shouldYield = W),
          (e.unstable_wrapCallback = function (H) {
            var F = x;
            return function () {
              var tt = x;
              x = F;
              try {
                return H.apply(this, arguments);
              } finally {
                x = tt;
              }
            };
          });
      })(Wc)),
    Wc
  );
}
var Iy;
function eS() {
  return Iy || ((Iy = 1), (Jc.exports = tS())), Jc.exports;
}
var Ic = { exports: {} },
  ce = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tg;
function nS() {
  if (tg) return ce;
  tg = 1;
  var e = lh();
  function i(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(i(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function c(p, m, y) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: m,
      implementation: y,
    };
  }
  var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (ce.createPortal = function (p, m) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(i(299));
      return c(p, m, null, y);
    }),
    (ce.flushSync = function (p) {
      var m = f.T,
        y = r.p;
      try {
        if (((f.T = null), (r.p = 2), p)) return p();
      } finally {
        (f.T = m), (r.p = y), r.d.f();
      }
    }),
    (ce.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        r.d.C(p, m));
    }),
    (ce.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p);
    }),
    (ce.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var y = m.as,
          b = d(y, m.crossOrigin),
          x = typeof m.integrity == "string" ? m.integrity : void 0,
          O = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        y === "style"
          ? r.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: O,
            })
          : y === "script" &&
            r.d.X(p, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: O,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (ce.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var y = d(m.as, m.crossOrigin);
            r.d.M(p, {
              crossOrigin: y,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && r.d.M(p);
    }),
    (ce.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var y = m.as,
          b = d(y, m.crossOrigin);
        r.d.L(p, y, {
          crossOrigin: b,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (ce.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var y = d(m.as, m.crossOrigin);
          r.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else r.d.m(p);
    }),
    (ce.requestFormReset = function (p) {
      r.d.r(p);
    }),
    (ce.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (ce.useFormState = function (p, m, y) {
      return f.H.useFormState(p, m, y);
    }),
    (ce.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (ce.version = "19.1.0"),
    ce
  );
}
var eg;
function iS() {
  if (eg) return Ic.exports;
  eg = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (i) {
        console.error(i);
      }
  }
  return e(), (Ic.exports = nS()), Ic.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ng;
function aS() {
  if (ng) return Ks;
  ng = 1;
  var e = eS(),
    i = lh(),
    s = iS();
  function r(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function c(t) {
    var n = t,
      a = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do (n = t), (n.flags & 4098) !== 0 && (a = n.return), (t = n.return);
      while (t);
    }
    return n.tag === 3 ? a : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function d(t) {
    if (c(t) !== t) throw Error(r(188));
  }
  function p(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = c(t)), n === null)) throw Error(r(188));
      return n !== t ? null : t;
    }
    for (var a = t, o = n; ; ) {
      var u = a.return;
      if (u === null) break;
      var h = u.alternate;
      if (h === null) {
        if (((o = u.return), o !== null)) {
          a = o;
          continue;
        }
        break;
      }
      if (u.child === h.child) {
        for (h = u.child; h; ) {
          if (h === a) return d(u), t;
          if (h === o) return d(u), n;
          h = h.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== o.return) (a = u), (o = h);
      else {
        for (var g = !1, v = u.child; v; ) {
          if (v === a) {
            (g = !0), (a = u), (o = h);
            break;
          }
          if (v === o) {
            (g = !0), (o = u), (a = h);
            break;
          }
          v = v.sibling;
        }
        if (!g) {
          for (v = h.child; v; ) {
            if (v === a) {
              (g = !0), (a = h), (o = u);
              break;
            }
            if (v === o) {
              (g = !0), (o = h), (a = u);
              break;
            }
            v = v.sibling;
          }
          if (!g) throw Error(r(189));
        }
      }
      if (a.alternate !== o) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : n;
  }
  function m(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((n = m(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var y = Object.assign,
    b = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    A = Symbol.for("react.fragment"),
    M = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    C = Symbol.for("react.provider"),
    B = Symbol.for("react.consumer"),
    N = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    J = Symbol.for("react.suspense_list"),
    Z = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    K = Symbol.for("react.activity"),
    W = Symbol.for("react.memo_cache_sentinel"),
    ct = Symbol.iterator;
  function dt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ct && t[ct]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var oe = Symbol.for("react.client.reference");
  function de(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === oe ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case A:
        return "Fragment";
      case R:
        return "Profiler";
      case M:
        return "StrictMode";
      case k:
        return "Suspense";
      case J:
        return "SuspenseList";
      case K:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case O:
          return "Portal";
        case N:
          return (t.displayName || "Context") + ".Provider";
        case B:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Z:
          return (
            (n = t.displayName || null), n !== null ? n : de(t.type) || "Memo"
          );
        case Q:
          (n = t._payload), (t = t._init);
          try {
            return de(t(n));
          } catch {}
      }
    return null;
  }
  var Ht = Array.isArray,
    H = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    tt = { pending: !1, data: null, method: null, action: null },
    St = [],
    _ = -1;
  function X(t) {
    return { current: t };
  }
  function I(t) {
    0 > _ || ((t.current = St[_]), (St[_] = null), _--);
  }
  function $(t, n) {
    _++, (St[_] = t.current), (t.current = n);
  }
  var it = X(null),
    xt = X(null),
    lt = X(null),
    we = X(null);
  function jt(t, n) {
    switch (($(lt, n), $(xt, t), $(it, null), n.nodeType)) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? Sy(t) : 0;
        break;
      default:
        if (((t = n.tagName), (n = n.namespaceURI)))
          (n = Sy(n)), (t = Ey(n, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    I(it), $(it, t);
  }
  function kn() {
    I(it), I(xt), I(lt);
  }
  function jl(t) {
    t.memoizedState !== null && $(we, t);
    var n = it.current,
      a = Ey(n, t.type);
    n !== a && ($(xt, t), $(it, a));
  }
  function Rr(t) {
    xt.current === t && (I(it), I(xt)),
      we.current === t && (I(we), (Hs._currentValue = tt));
  }
  var Ll = Object.prototype.hasOwnProperty,
    Bl = e.unstable_scheduleCallback,
    Ul = e.unstable_cancelCallback,
    Ox = e.unstable_shouldYield,
    Dx = e.unstable_requestPaint,
    rn = e.unstable_now,
    Mx = e.unstable_getCurrentPriorityLevel,
    nd = e.unstable_ImmediatePriority,
    id = e.unstable_UserBlockingPriority,
    Cr = e.unstable_NormalPriority,
    Nx = e.unstable_LowPriority,
    ad = e.unstable_IdlePriority,
    jx = e.log,
    Lx = e.unstable_setDisableYieldValue,
    Qa = null,
    Ae = null;
  function Hn(t) {
    if (
      (typeof jx == "function" && Lx(t),
      Ae && typeof Ae.setStrictMode == "function")
    )
      try {
        Ae.setStrictMode(Qa, t);
      } catch {}
  }
  var Re = Math.clz32 ? Math.clz32 : Vx,
    Bx = Math.log,
    Ux = Math.LN2;
  function Vx(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Bx(t) / Ux) | 0)) | 0;
  }
  var Or = 256,
    Dr = 4194304;
  function yi(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Mr(t, n, a) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var u = 0,
      h = t.suspendedLanes,
      g = t.pingedLanes;
    t = t.warmLanes;
    var v = o & 134217727;
    return (
      v !== 0
        ? ((o = v & ~h),
          o !== 0
            ? (u = yi(o))
            : ((g &= v),
              g !== 0
                ? (u = yi(g))
                : a || ((a = v & ~t), a !== 0 && (u = yi(a)))))
        : ((v = o & ~h),
          v !== 0
            ? (u = yi(v))
            : g !== 0
            ? (u = yi(g))
            : a || ((a = o & ~t), a !== 0 && (u = yi(a)))),
      u === 0
        ? 0
        : n !== 0 &&
          n !== u &&
          (n & h) === 0 &&
          ((h = u & -u),
          (a = n & -n),
          h >= a || (h === 32 && (a & 4194048) !== 0))
        ? n
        : u
    );
  }
  function Za(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function zx(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function sd() {
    var t = Or;
    return (Or <<= 1), (Or & 4194048) === 0 && (Or = 256), t;
  }
  function rd() {
    var t = Dr;
    return (Dr <<= 1), (Dr & 62914560) === 0 && (Dr = 4194304), t;
  }
  function Vl(t) {
    for (var n = [], a = 0; 31 > a; a++) n.push(t);
    return n;
  }
  function $a(t, n) {
    (t.pendingLanes |= n),
      n !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function kx(t, n, a, o, u, h) {
    var g = t.pendingLanes;
    (t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0);
    var v = t.entanglements,
      S = t.expirationTimes,
      L = t.hiddenUpdates;
    for (a = g & ~a; 0 < a; ) {
      var q = 31 - Re(a),
        Y = 1 << q;
      (v[q] = 0), (S[q] = -1);
      var U = L[q];
      if (U !== null)
        for (L[q] = null, q = 0; q < U.length; q++) {
          var V = U[q];
          V !== null && (V.lane &= -536870913);
        }
      a &= ~Y;
    }
    o !== 0 && od(t, o, 0),
      h !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= h & ~(g & ~n));
  }
  function od(t, n, a) {
    (t.pendingLanes |= n), (t.suspendedLanes &= ~n);
    var o = 31 - Re(n);
    (t.entangledLanes |= n),
      (t.entanglements[o] = t.entanglements[o] | 1073741824 | (a & 4194090));
  }
  function ld(t, n) {
    var a = (t.entangledLanes |= n);
    for (t = t.entanglements; a; ) {
      var o = 31 - Re(a),
        u = 1 << o;
      (u & n) | (t[o] & n) && (t[o] |= n), (a &= ~u);
    }
  }
  function zl(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function kl(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ud() {
    var t = F.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Py(t.type));
  }
  function Hx(t, n) {
    var a = F.p;
    try {
      return (F.p = t), n();
    } finally {
      F.p = a;
    }
  }
  var qn = Math.random().toString(36).slice(2),
    le = "__reactFiber$" + qn,
    ge = "__reactProps$" + qn,
    Xi = "__reactContainer$" + qn,
    Hl = "__reactEvents$" + qn,
    qx = "__reactListeners$" + qn,
    Px = "__reactHandles$" + qn,
    cd = "__reactResources$" + qn,
    Ja = "__reactMarker$" + qn;
  function ql(t) {
    delete t[le], delete t[ge], delete t[Hl], delete t[qx], delete t[Px];
  }
  function Ki(t) {
    var n = t[le];
    if (n) return n;
    for (var a = t.parentNode; a; ) {
      if ((n = a[Xi] || a[le])) {
        if (
          ((a = n.alternate),
          n.child !== null || (a !== null && a.child !== null))
        )
          for (t = Ry(t); t !== null; ) {
            if ((a = t[le])) return a;
            t = Ry(t);
          }
        return n;
      }
      (t = a), (a = t.parentNode);
    }
    return null;
  }
  function Fi(t) {
    if ((t = t[le] || t[Xi])) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return t;
    }
    return null;
  }
  function Wa(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Qi(t) {
    var n = t[cd];
    return (
      n ||
        (n = t[cd] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function It(t) {
    t[Ja] = !0;
  }
  var fd = new Set(),
    hd = {};
  function gi(t, n) {
    Zi(t, n), Zi(t + "Capture", n);
  }
  function Zi(t, n) {
    for (hd[t] = n, t = 0; t < n.length; t++) fd.add(n[t]);
  }
  var Yx = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    dd = {},
    md = {};
  function Gx(t) {
    return Ll.call(md, t)
      ? !0
      : Ll.call(dd, t)
      ? !1
      : Yx.test(t)
      ? (md[t] = !0)
      : ((dd[t] = !0), !1);
  }
  function Nr(t, n, a) {
    if (Gx(n))
      if (a === null) t.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + a);
      }
  }
  function jr(t, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + a);
    }
  }
  function bn(t, n, a, o) {
    if (o === null) t.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(n, a, "" + o);
    }
  }
  var Pl, pd;
  function $i(t) {
    if (Pl === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        (Pl = (n && n[1]) || ""),
          (pd =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Pl +
      t +
      pd
    );
  }
  var Yl = !1;
  function Gl(t, n) {
    if (!t || Yl) return "";
    Yl = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var Y = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Y.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Y, []);
                } catch (V) {
                  var U = V;
                }
                Reflect.construct(t, [], Y);
              } else {
                try {
                  Y.call();
                } catch (V) {
                  U = V;
                }
                t.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                U = V;
              }
              (Y = t()) &&
                typeof Y.catch == "function" &&
                Y.catch(function () {});
            }
          } catch (V) {
            if (V && U && typeof V.stack == "string") return [V.stack, U.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var h = o.DetermineComponentFrameRoot(),
        g = h[0],
        v = h[1];
      if (g && v) {
        var S = g.split(`
`),
          L = v.split(`
`);
        for (
          u = o = 0;
          o < S.length && !S[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; u < L.length && !L[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (o === S.length || u === L.length)
          for (
            o = S.length - 1, u = L.length - 1;
            1 <= o && 0 <= u && S[o] !== L[u];

          )
            u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (S[o] !== L[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || S[o] !== L[u])) {
                  var q =
                    `
` + S[o].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      q.includes("<anonymous>") &&
                      (q = q.replace("<anonymous>", t.displayName)),
                    q
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      (Yl = !1), (Error.prepareStackTrace = a);
    }
    return (a = t ? t.displayName || t.name : "") ? $i(a) : "";
  }
  function Xx(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return $i(t.type);
      case 16:
        return $i("Lazy");
      case 13:
        return $i("Suspense");
      case 19:
        return $i("SuspenseList");
      case 0:
      case 15:
        return Gl(t.type, !1);
      case 11:
        return Gl(t.type.render, !1);
      case 1:
        return Gl(t.type, !0);
      case 31:
        return $i("Activity");
      default:
        return "";
    }
  }
  function yd(t) {
    try {
      var n = "";
      do (n += Xx(t)), (t = t.return);
      while (t);
      return n;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function Be(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function gd(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Kx(t) {
    var n = gd(t) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
      o = "" + t[n];
    if (
      !t.hasOwnProperty(n) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        h = a.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (g) {
            (o = "" + g), h.call(this, g);
          },
        }),
        Object.defineProperty(t, n, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (g) {
            o = "" + g;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[n];
          },
        }
      );
    }
  }
  function Lr(t) {
    t._valueTracker || (t._valueTracker = Kx(t));
  }
  function vd(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      o = "";
    return (
      t && (o = gd(t) ? (t.checked ? "true" : "false") : t.value),
      (t = o),
      t !== a ? (n.setValue(t), !0) : !1
    );
  }
  function Br(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Fx = /[\n"\\]/g;
  function Ue(t) {
    return t.replace(Fx, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function Xl(t, n, a, o, u, h, g, v) {
    (t.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.type = g)
        : t.removeAttribute("type"),
      n != null
        ? g === "number"
          ? ((n === 0 && t.value === "") || t.value != n) &&
            (t.value = "" + Be(n))
          : t.value !== "" + Be(n) && (t.value = "" + Be(n))
        : (g !== "submit" && g !== "reset") || t.removeAttribute("value"),
      n != null
        ? Kl(t, g, Be(n))
        : a != null
        ? Kl(t, g, Be(a))
        : o != null && t.removeAttribute("value"),
      u == null && h != null && (t.defaultChecked = !!h),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + Be(v))
        : t.removeAttribute("name");
  }
  function bd(t, n, a, o, u, h, g, v) {
    if (
      (h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (t.type = h),
      n != null || a != null)
    ) {
      if (!((h !== "submit" && h !== "reset") || n != null)) return;
      (a = a != null ? "" + Be(a) : ""),
        (n = n != null ? "" + Be(n) : a),
        v || n === t.value || (t.value = n),
        (t.defaultValue = n);
    }
    (o = o ?? u),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (t.checked = v ? t.checked : !!o),
      (t.defaultChecked = !!o),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (t.name = g);
  }
  function Kl(t, n, a) {
    (n === "number" && Br(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function Ji(t, n, a, o) {
    if (((t = t.options), n)) {
      n = {};
      for (var u = 0; u < a.length; u++) n["$" + a[u]] = !0;
      for (a = 0; a < t.length; a++)
        (u = n.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== u && (t[a].selected = u),
          u && o && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + Be(a), n = null, u = 0; u < t.length; u++) {
        if (t[u].value === a) {
          (t[u].selected = !0), o && (t[u].defaultSelected = !0);
          return;
        }
        n !== null || t[u].disabled || (n = t[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function xd(t, n, a) {
    if (
      n != null &&
      ((n = "" + Be(n)), n !== t.value && (t.value = n), a == null)
    ) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = a != null ? "" + Be(a) : "";
  }
  function Td(t, n, a, o) {
    if (n == null) {
      if (o != null) {
        if (a != null) throw Error(r(92));
        if (Ht(o)) {
          if (1 < o.length) throw Error(r(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), (n = a);
    }
    (a = Be(n)),
      (t.defaultValue = a),
      (o = t.textContent),
      o === a && o !== "" && o !== null && (t.value = o);
  }
  function Wi(t, n) {
    if (n) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var Qx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Sd(t, n, a) {
    var o = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? o
        ? t.setProperty(n, "")
        : n === "float"
        ? (t.cssFloat = "")
        : (t[n] = "")
      : o
      ? t.setProperty(n, a)
      : typeof a != "number" || a === 0 || Qx.has(n)
      ? n === "float"
        ? (t.cssFloat = a)
        : (t[n] = ("" + a).trim())
      : (t[n] = a + "px");
  }
  function Ed(t, n, a) {
    if (n != null && typeof n != "object") throw Error(r(62));
    if (((t = t.style), a != null)) {
      for (var o in a)
        !a.hasOwnProperty(o) ||
          (n != null && n.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? t.setProperty(o, "")
            : o === "float"
            ? (t.cssFloat = "")
            : (t[o] = ""));
      for (var u in n)
        (o = n[u]), n.hasOwnProperty(u) && a[u] !== o && Sd(t, u, o);
    } else for (var h in n) n.hasOwnProperty(h) && Sd(t, h, n[h]);
  }
  function Fl(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zx = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    $x =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ur(t) {
    return $x.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Ql = null;
  function Zl(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ii = null,
    ta = null;
  function _d(t) {
    var n = Fi(t);
    if (n && (t = n.stateNode)) {
      var a = t[ge] || null;
      t: switch (((t = n.stateNode), n.type)) {
        case "input":
          if (
            (Xl(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (n = a.name),
            a.type === "radio" && n != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Ue("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < a.length;
              n++
            ) {
              var o = a[n];
              if (o !== t && o.form === t.form) {
                var u = o[ge] || null;
                if (!u) throw Error(r(90));
                Xl(
                  o,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (n = 0; n < a.length; n++)
              (o = a[n]), o.form === t.form && vd(o);
          }
          break t;
        case "textarea":
          xd(t, a.value, a.defaultValue);
          break t;
        case "select":
          (n = a.value), n != null && Ji(t, !!a.multiple, n, !1);
      }
    }
  }
  var $l = !1;
  function wd(t, n, a) {
    if ($l) return t(n, a);
    $l = !0;
    try {
      var o = t(n);
      return o;
    } finally {
      if (
        (($l = !1),
        (Ii !== null || ta !== null) &&
          (So(), Ii && ((n = Ii), (t = ta), (ta = Ii = null), _d(n), t)))
      )
        for (n = 0; n < t.length; n++) _d(t[n]);
    }
  }
  function Ia(t, n) {
    var a = t.stateNode;
    if (a === null) return null;
    var o = a[ge] || null;
    if (o === null) return null;
    a = o[n];
    t: switch (n) {
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
        (o = !o.disabled) ||
          ((t = t.type),
          (o = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !o);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(r(231, n, typeof a));
    return a;
  }
  var xn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Jl = !1;
  if (xn)
    try {
      var ts = {};
      Object.defineProperty(ts, "passive", {
        get: function () {
          Jl = !0;
        },
      }),
        window.addEventListener("test", ts, ts),
        window.removeEventListener("test", ts, ts);
    } catch {
      Jl = !1;
    }
  var Pn = null,
    Wl = null,
    Vr = null;
  function Ad() {
    if (Vr) return Vr;
    var t,
      n = Wl,
      a = n.length,
      o,
      u = "value" in Pn ? Pn.value : Pn.textContent,
      h = u.length;
    for (t = 0; t < a && n[t] === u[t]; t++);
    var g = a - t;
    for (o = 1; o <= g && n[a - o] === u[h - o]; o++);
    return (Vr = u.slice(t, 1 < o ? 1 - o : void 0));
  }
  function zr(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function kr() {
    return !0;
  }
  function Rd() {
    return !1;
  }
  function ve(t) {
    function n(a, o, u, h, g) {
      (this._reactName = a),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = h),
        (this.target = g),
        (this.currentTarget = null);
      for (var v in t)
        t.hasOwnProperty(v) && ((a = t[v]), (this[v] = a ? a(h) : h[v]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? kr
          : Rd),
        (this.isPropagationStopped = Rd),
        this
      );
    }
    return (
      y(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = kr));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = kr));
        },
        persist: function () {},
        isPersistent: kr,
      }),
      n
    );
  }
  var vi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hr = ve(vi),
    es = y({}, vi, { view: 0, detail: 0 }),
    Jx = ve(es),
    Il,
    tu,
    ns,
    qr = y({}, es, {
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
      getModifierState: nu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== ns &&
              (ns && t.type === "mousemove"
                ? ((Il = t.screenX - ns.screenX), (tu = t.screenY - ns.screenY))
                : (tu = Il = 0),
              (ns = t)),
            Il);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : tu;
      },
    }),
    Cd = ve(qr),
    Wx = y({}, qr, { dataTransfer: 0 }),
    Ix = ve(Wx),
    t1 = y({}, es, { relatedTarget: 0 }),
    eu = ve(t1),
    e1 = y({}, vi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    n1 = ve(e1),
    i1 = y({}, vi, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    a1 = ve(i1),
    s1 = y({}, vi, { data: 0 }),
    Od = ve(s1),
    r1 = {
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
      MozPrintableKey: "Unidentified",
    },
    o1 = {
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
      224: "Meta",
    },
    l1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function u1(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = l1[t])
      ? !!n[t]
      : !1;
  }
  function nu() {
    return u1;
  }
  var c1 = y({}, es, {
      key: function (t) {
        if (t.key) {
          var n = r1[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = zr(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? o1[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: nu,
      charCode: function (t) {
        return t.type === "keypress" ? zr(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? zr(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    f1 = ve(c1),
    h1 = y({}, qr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Dd = ve(h1),
    d1 = y({}, es, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nu,
    }),
    m1 = ve(d1),
    p1 = y({}, vi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    y1 = ve(p1),
    g1 = y({}, qr, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    v1 = ve(g1),
    b1 = y({}, vi, { newState: 0, oldState: 0 }),
    x1 = ve(b1),
    T1 = [9, 13, 27, 32],
    iu = xn && "CompositionEvent" in window,
    is = null;
  xn && "documentMode" in document && (is = document.documentMode);
  var S1 = xn && "TextEvent" in window && !is,
    Md = xn && (!iu || (is && 8 < is && 11 >= is)),
    Nd = " ",
    jd = !1;
  function Ld(t, n) {
    switch (t) {
      case "keyup":
        return T1.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bd(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ea = !1;
  function E1(t, n) {
    switch (t) {
      case "compositionend":
        return Bd(n);
      case "keypress":
        return n.which !== 32 ? null : ((jd = !0), Nd);
      case "textInput":
        return (t = n.data), t === Nd && jd ? null : t;
      default:
        return null;
    }
  }
  function _1(t, n) {
    if (ea)
      return t === "compositionend" || (!iu && Ld(t, n))
        ? ((t = Ad()), (Vr = Wl = Pn = null), (ea = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Md && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var w1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ud(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!w1[t.type] : n === "textarea";
  }
  function Vd(t, n, a, o) {
    Ii ? (ta ? ta.push(o) : (ta = [o])) : (Ii = o),
      (n = Co(n, "onChange")),
      0 < n.length &&
        ((a = new Hr("onChange", "change", null, a, o)),
        t.push({ event: a, listeners: n }));
  }
  var as = null,
    ss = null;
  function A1(t) {
    gy(t, 0);
  }
  function Pr(t) {
    var n = Wa(t);
    if (vd(n)) return t;
  }
  function zd(t, n) {
    if (t === "change") return n;
  }
  var kd = !1;
  if (xn) {
    var au;
    if (xn) {
      var su = "oninput" in document;
      if (!su) {
        var Hd = document.createElement("div");
        Hd.setAttribute("oninput", "return;"),
          (su = typeof Hd.oninput == "function");
      }
      au = su;
    } else au = !1;
    kd = au && (!document.documentMode || 9 < document.documentMode);
  }
  function qd() {
    as && (as.detachEvent("onpropertychange", Pd), (ss = as = null));
  }
  function Pd(t) {
    if (t.propertyName === "value" && Pr(ss)) {
      var n = [];
      Vd(n, ss, t, Zl(t)), wd(A1, n);
    }
  }
  function R1(t, n, a) {
    t === "focusin"
      ? (qd(), (as = n), (ss = a), as.attachEvent("onpropertychange", Pd))
      : t === "focusout" && qd();
  }
  function C1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Pr(ss);
  }
  function O1(t, n) {
    if (t === "click") return Pr(n);
  }
  function D1(t, n) {
    if (t === "input" || t === "change") return Pr(n);
  }
  function M1(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var Ce = typeof Object.is == "function" ? Object.is : M1;
  function rs(t, n) {
    if (Ce(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var a = Object.keys(t),
      o = Object.keys(n);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var u = a[o];
      if (!Ll.call(n, u) || !Ce(t[u], n[u])) return !1;
    }
    return !0;
  }
  function Yd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Gd(t, n) {
    var a = Yd(t);
    t = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (((o = t + a.textContent.length), t <= n && o >= n))
          return { node: a, offset: n - t };
        t = o;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Yd(a);
    }
  }
  function Xd(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? Xd(t, n.parentNode)
        : "contains" in t
        ? t.contains(n)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function Kd(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = Br(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = n.contentWindow;
      else break;
      n = Br(t.document);
    }
    return n;
  }
  function ru(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var N1 = xn && "documentMode" in document && 11 >= document.documentMode,
    na = null,
    ou = null,
    os = null,
    lu = !1;
  function Fd(t, n, a) {
    var o =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    lu ||
      na == null ||
      na !== Br(o) ||
      ((o = na),
      "selectionStart" in o && ru(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (os && rs(os, o)) ||
        ((os = o),
        (o = Co(ou, "onSelect")),
        0 < o.length &&
          ((n = new Hr("onSelect", "select", null, n, a)),
          t.push({ event: n, listeners: o }),
          (n.target = na))));
  }
  function bi(t, n) {
    var a = {};
    return (
      (a[t.toLowerCase()] = n.toLowerCase()),
      (a["Webkit" + t] = "webkit" + n),
      (a["Moz" + t] = "moz" + n),
      a
    );
  }
  var ia = {
      animationend: bi("Animation", "AnimationEnd"),
      animationiteration: bi("Animation", "AnimationIteration"),
      animationstart: bi("Animation", "AnimationStart"),
      transitionrun: bi("Transition", "TransitionRun"),
      transitionstart: bi("Transition", "TransitionStart"),
      transitioncancel: bi("Transition", "TransitionCancel"),
      transitionend: bi("Transition", "TransitionEnd"),
    },
    uu = {},
    Qd = {};
  xn &&
    ((Qd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ia.animationend.animation,
      delete ia.animationiteration.animation,
      delete ia.animationstart.animation),
    "TransitionEvent" in window || delete ia.transitionend.transition);
  function xi(t) {
    if (uu[t]) return uu[t];
    if (!ia[t]) return t;
    var n = ia[t],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in Qd) return (uu[t] = n[a]);
    return t;
  }
  var Zd = xi("animationend"),
    $d = xi("animationiteration"),
    Jd = xi("animationstart"),
    j1 = xi("transitionrun"),
    L1 = xi("transitionstart"),
    B1 = xi("transitioncancel"),
    Wd = xi("transitionend"),
    Id = new Map(),
    cu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  cu.push("scrollEnd");
  function Ze(t, n) {
    Id.set(t, n), gi(n, [t]);
  }
  var tm = new WeakMap();
  function Ve(t, n) {
    if (typeof t == "object" && t !== null) {
      var a = tm.get(t);
      return a !== void 0
        ? a
        : ((n = { value: t, source: n, stack: yd(n) }), tm.set(t, n), n);
    }
    return { value: t, source: n, stack: yd(n) };
  }
  var ze = [],
    aa = 0,
    fu = 0;
  function Yr() {
    for (var t = aa, n = (fu = aa = 0); n < t; ) {
      var a = ze[n];
      ze[n++] = null;
      var o = ze[n];
      ze[n++] = null;
      var u = ze[n];
      ze[n++] = null;
      var h = ze[n];
      if (((ze[n++] = null), o !== null && u !== null)) {
        var g = o.pending;
        g === null ? (u.next = u) : ((u.next = g.next), (g.next = u)),
          (o.pending = u);
      }
      h !== 0 && em(a, u, h);
    }
  }
  function Gr(t, n, a, o) {
    (ze[aa++] = t),
      (ze[aa++] = n),
      (ze[aa++] = a),
      (ze[aa++] = o),
      (fu |= o),
      (t.lanes |= o),
      (t = t.alternate),
      t !== null && (t.lanes |= o);
  }
  function hu(t, n, a, o) {
    return Gr(t, n, a, o), Xr(t);
  }
  function sa(t, n) {
    return Gr(t, null, null, n), Xr(t);
  }
  function em(t, n, a) {
    t.lanes |= a;
    var o = t.alternate;
    o !== null && (o.lanes |= a);
    for (var u = !1, h = t.return; h !== null; )
      (h.childLanes |= a),
        (o = h.alternate),
        o !== null && (o.childLanes |= a),
        h.tag === 22 &&
          ((t = h.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = h),
        (h = h.return);
    return t.tag === 3
      ? ((h = t.stateNode),
        u &&
          n !== null &&
          ((u = 31 - Re(a)),
          (t = h.hiddenUpdates),
          (o = t[u]),
          o === null ? (t[u] = [n]) : o.push(n),
          (n.lane = a | 536870912)),
        h)
      : null;
  }
  function Xr(t) {
    if (50 < Ns) throw ((Ns = 0), (vc = null), Error(r(185)));
    for (var n = t.return; n !== null; ) (t = n), (n = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var ra = {};
  function U1(t, n, a, o) {
    (this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Oe(t, n, a, o) {
    return new U1(t, n, a, o);
  }
  function du(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Tn(t, n) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = Oe(t.tag, n, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = n),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (a.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function nm(t, n) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (n = a.dependencies),
          (t.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function Kr(t, n, a, o, u, h) {
    var g = 0;
    if (((o = t), typeof t == "function")) du(t) && (g = 1);
    else if (typeof t == "string")
      g = zT(t, a, it.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case K:
          return (t = Oe(31, a, n, u)), (t.elementType = K), (t.lanes = h), t;
        case A:
          return Ti(a.children, u, h, n);
        case M:
          (g = 8), (u |= 24);
          break;
        case R:
          return (
            (t = Oe(12, a, n, u | 2)), (t.elementType = R), (t.lanes = h), t
          );
        case k:
          return (t = Oe(13, a, n, u)), (t.elementType = k), (t.lanes = h), t;
        case J:
          return (t = Oe(19, a, n, u)), (t.elementType = J), (t.lanes = h), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case C:
              case N:
                g = 10;
                break t;
              case B:
                g = 9;
                break t;
              case G:
                g = 11;
                break t;
              case Z:
                g = 14;
                break t;
              case Q:
                (g = 16), (o = null);
                break t;
            }
          (g = 29),
            (a = Error(r(130, t === null ? "null" : typeof t, ""))),
            (o = null);
      }
    return (
      (n = Oe(g, a, n, u)), (n.elementType = t), (n.type = o), (n.lanes = h), n
    );
  }
  function Ti(t, n, a, o) {
    return (t = Oe(7, t, o, n)), (t.lanes = a), t;
  }
  function mu(t, n, a) {
    return (t = Oe(6, t, null, n)), (t.lanes = a), t;
  }
  function pu(t, n, a) {
    return (
      (n = Oe(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  var oa = [],
    la = 0,
    Fr = null,
    Qr = 0,
    ke = [],
    He = 0,
    Si = null,
    Sn = 1,
    En = "";
  function Ei(t, n) {
    (oa[la++] = Qr), (oa[la++] = Fr), (Fr = t), (Qr = n);
  }
  function im(t, n, a) {
    (ke[He++] = Sn), (ke[He++] = En), (ke[He++] = Si), (Si = t);
    var o = Sn;
    t = En;
    var u = 32 - Re(o) - 1;
    (o &= ~(1 << u)), (a += 1);
    var h = 32 - Re(n) + u;
    if (30 < h) {
      var g = u - (u % 5);
      (h = (o & ((1 << g) - 1)).toString(32)),
        (o >>= g),
        (u -= g),
        (Sn = (1 << (32 - Re(n) + u)) | (a << u) | o),
        (En = h + t);
    } else (Sn = (1 << h) | (a << u) | o), (En = t);
  }
  function yu(t) {
    t.return !== null && (Ei(t, 1), im(t, 1, 0));
  }
  function gu(t) {
    for (; t === Fr; )
      (Fr = oa[--la]), (oa[la] = null), (Qr = oa[--la]), (oa[la] = null);
    for (; t === Si; )
      (Si = ke[--He]),
        (ke[He] = null),
        (En = ke[--He]),
        (ke[He] = null),
        (Sn = ke[--He]),
        (ke[He] = null);
  }
  var me = null,
    qt = null,
    Et = !1,
    _i = null,
    on = !1,
    vu = Error(r(519));
  function wi(t) {
    var n = Error(r(418, ""));
    throw (cs(Ve(n, t)), vu);
  }
  function am(t) {
    var n = t.stateNode,
      a = t.type,
      o = t.memoizedProps;
    switch (((n[le] = t), (n[ge] = o), a)) {
      case "dialog":
        gt("cancel", n), gt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        gt("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ls.length; a++) gt(Ls[a], n);
        break;
      case "source":
        gt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        gt("error", n), gt("load", n);
        break;
      case "details":
        gt("toggle", n);
        break;
      case "input":
        gt("invalid", n),
          bd(
            n,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0
          ),
          Lr(n);
        break;
      case "select":
        gt("invalid", n);
        break;
      case "textarea":
        gt("invalid", n), Td(n, o.value, o.defaultValue, o.children), Lr(n);
    }
    (a = o.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      n.textContent === "" + a ||
      o.suppressHydrationWarning === !0 ||
      Ty(n.textContent, a)
        ? (o.popover != null && (gt("beforetoggle", n), gt("toggle", n)),
          o.onScroll != null && gt("scroll", n),
          o.onScrollEnd != null && gt("scrollend", n),
          o.onClick != null && (n.onclick = Oo),
          (n = !0))
        : (n = !1),
      n || wi(t);
  }
  function sm(t) {
    for (me = t.return; me; )
      switch (me.tag) {
        case 5:
        case 13:
          on = !1;
          return;
        case 27:
        case 3:
          on = !0;
          return;
        default:
          me = me.return;
      }
  }
  function ls(t) {
    if (t !== me) return !1;
    if (!Et) return sm(t), (Et = !0), !1;
    var n = t.tag,
      a;
    if (
      ((a = n !== 3 && n !== 27) &&
        ((a = n === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || Lc(t.type, t.memoizedProps))),
        (a = !a)),
      a && qt && wi(t),
      sm(t),
      n === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8)
            if (((a = t.data), a === "/$")) {
              if (n === 0) {
                qt = Je(t.nextSibling);
                break t;
              }
              n--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || n++;
          t = t.nextSibling;
        }
        qt = null;
      }
    } else
      n === 27
        ? ((n = qt), ai(t.type) ? ((t = zc), (zc = null), (qt = t)) : (qt = n))
        : (qt = me ? Je(t.stateNode.nextSibling) : null);
    return !0;
  }
  function us() {
    (qt = me = null), (Et = !1);
  }
  function rm() {
    var t = _i;
    return (
      t !== null &&
        (Te === null ? (Te = t) : Te.push.apply(Te, t), (_i = null)),
      t
    );
  }
  function cs(t) {
    _i === null ? (_i = [t]) : _i.push(t);
  }
  var bu = X(null),
    Ai = null,
    _n = null;
  function Yn(t, n, a) {
    $(bu, n._currentValue), (n._currentValue = a);
  }
  function wn(t) {
    (t._currentValue = bu.current), I(bu);
  }
  function xu(t, n, a) {
    for (; t !== null; ) {
      var o = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), o !== null && (o.childLanes |= n))
          : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function Tu(t, n, a, o) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var h = u.dependencies;
      if (h !== null) {
        var g = u.child;
        h = h.firstContext;
        t: for (; h !== null; ) {
          var v = h;
          h = u;
          for (var S = 0; S < n.length; S++)
            if (v.context === n[S]) {
              (h.lanes |= a),
                (v = h.alternate),
                v !== null && (v.lanes |= a),
                xu(h.return, a, t),
                o || (g = null);
              break t;
            }
          h = v.next;
        }
      } else if (u.tag === 18) {
        if (((g = u.return), g === null)) throw Error(r(341));
        (g.lanes |= a),
          (h = g.alternate),
          h !== null && (h.lanes |= a),
          xu(g, a, t),
          (g = null);
      } else g = u.child;
      if (g !== null) g.return = u;
      else
        for (g = u; g !== null; ) {
          if (g === t) {
            g = null;
            break;
          }
          if (((u = g.sibling), u !== null)) {
            (u.return = g.return), (g = u);
            break;
          }
          g = g.return;
        }
      u = g;
    }
  }
  function fs(t, n, a, o) {
    t = null;
    for (var u = n, h = !1; u !== null; ) {
      if (!h) {
        if ((u.flags & 524288) !== 0) h = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var g = u.alternate;
        if (g === null) throw Error(r(387));
        if (((g = g.memoizedProps), g !== null)) {
          var v = u.type;
          Ce(u.pendingProps.value, g.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (u === we.current) {
        if (((g = u.alternate), g === null)) throw Error(r(387));
        g.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Hs) : (t = [Hs]));
      }
      u = u.return;
    }
    t !== null && Tu(n, t, a, o), (n.flags |= 262144);
  }
  function Zr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ce(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ri(t) {
    (Ai = t),
      (_n = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function ue(t) {
    return om(Ai, t);
  }
  function $r(t, n) {
    return Ai === null && Ri(t), om(t, n);
  }
  function om(t, n) {
    var a = n._currentValue;
    if (((n = { context: n, memoizedValue: a, next: null }), _n === null)) {
      if (t === null) throw Error(r(308));
      (_n = n),
        (t.dependencies = { lanes: 0, firstContext: n }),
        (t.flags |= 524288);
    } else _n = _n.next = n;
    return a;
  }
  var V1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (a, o) {
                  t.push(o);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                t.forEach(function (a) {
                  return a();
                });
            };
          },
    z1 = e.unstable_scheduleCallback,
    k1 = e.unstable_NormalPriority,
    Jt = {
      $$typeof: N,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Su() {
    return { controller: new V1(), data: new Map(), refCount: 0 };
  }
  function hs(t) {
    t.refCount--,
      t.refCount === 0 &&
        z1(k1, function () {
          t.controller.abort();
        });
  }
  var ds = null,
    Eu = 0,
    ua = 0,
    ca = null;
  function H1(t, n) {
    if (ds === null) {
      var a = (ds = []);
      (Eu = 0),
        (ua = wc()),
        (ca = {
          status: "pending",
          value: void 0,
          then: function (o) {
            a.push(o);
          },
        });
    }
    return Eu++, n.then(lm, lm), n;
  }
  function lm() {
    if (--Eu === 0 && ds !== null) {
      ca !== null && (ca.status = "fulfilled");
      var t = ds;
      (ds = null), (ua = 0), (ca = null);
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function q1(t, n) {
    var a = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      t.then(
        function () {
          (o.status = "fulfilled"), (o.value = n);
          for (var u = 0; u < a.length; u++) (0, a[u])(n);
        },
        function (u) {
          for (o.status = "rejected", o.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        }
      ),
      o
    );
  }
  var um = H.S;
  H.S = function (t, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      H1(t, n),
      um !== null && um(t, n);
  };
  var Ci = X(null);
  function _u() {
    var t = Ci.current;
    return t !== null ? t : Mt.pooledCache;
  }
  function Jr(t, n) {
    n === null ? $(Ci, Ci.current) : $(Ci, n.pool);
  }
  function cm() {
    var t = _u();
    return t === null ? null : { parent: Jt._currentValue, pool: t };
  }
  var ms = Error(r(460)),
    fm = Error(r(474)),
    Wr = Error(r(542)),
    wu = { then: function () {} };
  function hm(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Ir() {}
  function dm(t, n, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(n) : a !== n && (n.then(Ir, Ir), (n = a)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((t = n.reason), pm(t), t);
      default:
        if (typeof n.status == "string") n.then(Ir, Ir);
        else {
          if (((t = Mt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = n),
            (t.status = "pending"),
            t.then(
              function (o) {
                if (n.status === "pending") {
                  var u = n;
                  (u.status = "fulfilled"), (u.value = o);
                }
              },
              function (o) {
                if (n.status === "pending") {
                  var u = n;
                  (u.status = "rejected"), (u.reason = o);
                }
              }
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((t = n.reason), pm(t), t);
        }
        throw ((ps = n), ms);
    }
  }
  var ps = null;
  function mm() {
    if (ps === null) throw Error(r(459));
    var t = ps;
    return (ps = null), t;
  }
  function pm(t) {
    if (t === ms || t === Wr) throw Error(r(483));
  }
  var Gn = !1;
  function Au(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ru(t, n) {
    (t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Xn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Kn(t, n, a) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (_t & 2) !== 0)) {
      var u = o.pending;
      return (
        u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
        (o.pending = n),
        (n = Xr(t)),
        em(t, null, a),
        n
      );
    }
    return Gr(t, o, n, a), Xr(t);
  }
  function ys(t, n, a) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194048) !== 0))
    ) {
      var o = n.lanes;
      (o &= t.pendingLanes), (a |= o), (n.lanes = a), ld(t, a);
    }
  }
  function Cu(t, n) {
    var a = t.updateQueue,
      o = t.alternate;
    if (o !== null && ((o = o.updateQueue), a === o)) {
      var u = null,
        h = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var g = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          h === null ? (u = h = g) : (h = h.next = g), (a = a.next);
        } while (a !== null);
        h === null ? (u = h = n) : (h = h.next = n);
      } else u = h = n;
      (a = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: h,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (t.updateQueue = a);
      return;
    }
    (t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = n) : (t.next = n),
      (a.lastBaseUpdate = n);
  }
  var Ou = !1;
  function gs() {
    if (Ou) {
      var t = ca;
      if (t !== null) throw t;
    }
  }
  function vs(t, n, a, o) {
    Ou = !1;
    var u = t.updateQueue;
    Gn = !1;
    var h = u.firstBaseUpdate,
      g = u.lastBaseUpdate,
      v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var S = v,
        L = S.next;
      (S.next = null), g === null ? (h = L) : (g.next = L), (g = S);
      var q = t.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (v = q.lastBaseUpdate),
        v !== g &&
          (v === null ? (q.firstBaseUpdate = L) : (v.next = L),
          (q.lastBaseUpdate = S)));
    }
    if (h !== null) {
      var Y = u.baseState;
      (g = 0), (q = L = S = null), (v = h);
      do {
        var U = v.lane & -536870913,
          V = U !== v.lane;
        if (V ? (bt & U) === U : (o & U) === U) {
          U !== 0 && U === ua && (Ou = !0),
            q !== null &&
              (q = q.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var rt = t,
              at = v;
            U = n;
            var Ct = a;
            switch (at.tag) {
              case 1:
                if (((rt = at.payload), typeof rt == "function")) {
                  Y = rt.call(Ct, Y, U);
                  break t;
                }
                Y = rt;
                break t;
              case 3:
                rt.flags = (rt.flags & -65537) | 128;
              case 0:
                if (
                  ((rt = at.payload),
                  (U = typeof rt == "function" ? rt.call(Ct, Y, U) : rt),
                  U == null)
                )
                  break t;
                Y = y({}, Y, U);
                break t;
              case 2:
                Gn = !0;
            }
          }
          (U = v.callback),
            U !== null &&
              ((t.flags |= 64),
              V && (t.flags |= 8192),
              (V = u.callbacks),
              V === null ? (u.callbacks = [U]) : V.push(U));
        } else
          (V = {
            lane: U,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            q === null ? ((L = q = V), (S = Y)) : (q = q.next = V),
            (g |= U);
        if (((v = v.next), v === null)) {
          if (((v = u.shared.pending), v === null)) break;
          (V = v),
            (v = V.next),
            (V.next = null),
            (u.lastBaseUpdate = V),
            (u.shared.pending = null);
        }
      } while (!0);
      q === null && (S = Y),
        (u.baseState = S),
        (u.firstBaseUpdate = L),
        (u.lastBaseUpdate = q),
        h === null && (u.shared.lanes = 0),
        (ti |= g),
        (t.lanes = g),
        (t.memoizedState = Y);
    }
  }
  function ym(t, n) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(n);
  }
  function gm(t, n) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) ym(a[t], n);
  }
  var fa = X(null),
    to = X(0);
  function vm(t, n) {
    (t = Nn), $(to, t), $(fa, n), (Nn = t | n.baseLanes);
  }
  function Du() {
    $(to, Nn), $(fa, fa.current);
  }
  function Mu() {
    (Nn = to.current), I(fa), I(to);
  }
  var Fn = 0,
    mt = null,
    At = null,
    Ft = null,
    eo = !1,
    ha = !1,
    Oi = !1,
    no = 0,
    bs = 0,
    da = null,
    P1 = 0;
  function Gt() {
    throw Error(r(321));
  }
  function Nu(t, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < t.length; a++)
      if (!Ce(t[a], n[a])) return !1;
    return !0;
  }
  function ju(t, n, a, o, u, h) {
    return (
      (Fn = h),
      (mt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (H.H = t === null || t.memoizedState === null ? ep : np),
      (Oi = !1),
      (h = a(o, u)),
      (Oi = !1),
      ha && (h = xm(n, a, o, u)),
      bm(t),
      h
    );
  }
  function bm(t) {
    H.H = lo;
    var n = At !== null && At.next !== null;
    if (((Fn = 0), (Ft = At = mt = null), (eo = !1), (bs = 0), (da = null), n))
      throw Error(r(300));
    t === null ||
      te ||
      ((t = t.dependencies), t !== null && Zr(t) && (te = !0));
  }
  function xm(t, n, a, o) {
    mt = t;
    var u = 0;
    do {
      if ((ha && (da = null), (bs = 0), (ha = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (Ft = At = null), t.updateQueue != null)) {
        var h = t.updateQueue;
        (h.lastEffect = null),
          (h.events = null),
          (h.stores = null),
          h.memoCache != null && (h.memoCache.index = 0);
      }
      (H.H = Z1), (h = n(a, o));
    } while (ha);
    return h;
  }
  function Y1() {
    var t = H.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == "function" ? xs(n) : n),
      (t = t.useState()[0]),
      (At !== null ? At.memoizedState : null) !== t && (mt.flags |= 1024),
      n
    );
  }
  function Lu() {
    var t = no !== 0;
    return (no = 0), t;
  }
  function Bu(t, n, a) {
    (n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~a);
  }
  function Uu(t) {
    if (eo) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), (t = t.next);
      }
      eo = !1;
    }
    (Fn = 0), (Ft = At = mt = null), (ha = !1), (bs = no = 0), (da = null);
  }
  function be() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ft === null ? (mt.memoizedState = Ft = t) : (Ft = Ft.next = t), Ft;
  }
  function Qt() {
    if (At === null) {
      var t = mt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = At.next;
    var n = Ft === null ? mt.memoizedState : Ft.next;
    if (n !== null) (Ft = n), (At = t);
    else {
      if (t === null)
        throw mt.alternate === null ? Error(r(467)) : Error(r(310));
      (At = t),
        (t = {
          memoizedState: At.memoizedState,
          baseState: At.baseState,
          baseQueue: At.baseQueue,
          queue: At.queue,
          next: null,
        }),
        Ft === null ? (mt.memoizedState = Ft = t) : (Ft = Ft.next = t);
    }
    return Ft;
  }
  function Vu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function xs(t) {
    var n = bs;
    return (
      (bs += 1),
      da === null && (da = []),
      (t = dm(da, t, n)),
      (n = mt),
      (Ft === null ? n.memoizedState : Ft.next) === null &&
        ((n = n.alternate),
        (H.H = n === null || n.memoizedState === null ? ep : np)),
      t
    );
  }
  function io(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return xs(t);
      if (t.$$typeof === N) return ue(t);
    }
    throw Error(r(438, String(t)));
  }
  function zu(t) {
    var n = null,
      a = mt.updateQueue;
    if ((a !== null && (n = a.memoCache), n == null)) {
      var o = mt.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (n = {
              data: o.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      a === null && ((a = Vu()), (mt.updateQueue = a)),
      (a.memoCache = n),
      (a = n.data[n.index]),
      a === void 0)
    )
      for (a = n.data[n.index] = Array(t), o = 0; o < t; o++) a[o] = W;
    return n.index++, a;
  }
  function An(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function ao(t) {
    var n = Qt();
    return ku(n, At, t);
  }
  function ku(t, n, a) {
    var o = t.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = a;
    var u = t.baseQueue,
      h = o.pending;
    if (h !== null) {
      if (u !== null) {
        var g = u.next;
        (u.next = h.next), (h.next = g);
      }
      (n.baseQueue = u = h), (o.pending = null);
    }
    if (((h = t.baseState), u === null)) t.memoizedState = h;
    else {
      n = u.next;
      var v = (g = null),
        S = null,
        L = n,
        q = !1;
      do {
        var Y = L.lane & -536870913;
        if (Y !== L.lane ? (bt & Y) === Y : (Fn & Y) === Y) {
          var U = L.revertLane;
          if (U === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              Y === ua && (q = !0);
          else if ((Fn & U) === U) {
            (L = L.next), U === ua && (q = !0);
            continue;
          } else
            (Y = {
              lane: 0,
              revertLane: L.revertLane,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            }),
              S === null ? ((v = S = Y), (g = h)) : (S = S.next = Y),
              (mt.lanes |= U),
              (ti |= U);
          (Y = L.action),
            Oi && a(h, Y),
            (h = L.hasEagerState ? L.eagerState : a(h, Y));
        } else
          (U = {
            lane: Y,
            revertLane: L.revertLane,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          }),
            S === null ? ((v = S = U), (g = h)) : (S = S.next = U),
            (mt.lanes |= Y),
            (ti |= Y);
        L = L.next;
      } while (L !== null && L !== n);
      if (
        (S === null ? (g = h) : (S.next = v),
        !Ce(h, t.memoizedState) && ((te = !0), q && ((a = ca), a !== null)))
      )
        throw a;
      (t.memoizedState = h),
        (t.baseState = g),
        (t.baseQueue = S),
        (o.lastRenderedState = h);
    }
    return u === null && (o.lanes = 0), [t.memoizedState, o.dispatch];
  }
  function Hu(t) {
    var n = Qt(),
      a = n.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var o = a.dispatch,
      u = a.pending,
      h = n.memoizedState;
    if (u !== null) {
      a.pending = null;
      var g = (u = u.next);
      do (h = t(h, g.action)), (g = g.next);
      while (g !== u);
      Ce(h, n.memoizedState) || (te = !0),
        (n.memoizedState = h),
        n.baseQueue === null && (n.baseState = h),
        (a.lastRenderedState = h);
    }
    return [h, o];
  }
  function Tm(t, n, a) {
    var o = mt,
      u = Qt(),
      h = Et;
    if (h) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = n();
    var g = !Ce((At || u).memoizedState, a);
    g && ((u.memoizedState = a), (te = !0)), (u = u.queue);
    var v = _m.bind(null, o, u, t);
    if (
      (Ts(2048, 8, v, [t]),
      u.getSnapshot !== n || g || (Ft !== null && Ft.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        ma(9, so(), Em.bind(null, o, u, a, n), null),
        Mt === null)
      )
        throw Error(r(349));
      h || (Fn & 124) !== 0 || Sm(o, n, a);
    }
    return a;
  }
  function Sm(t, n, a) {
    (t.flags |= 16384),
      (t = { getSnapshot: n, value: a }),
      (n = mt.updateQueue),
      n === null
        ? ((n = Vu()), (mt.updateQueue = n), (n.stores = [t]))
        : ((a = n.stores), a === null ? (n.stores = [t]) : a.push(t));
  }
  function Em(t, n, a, o) {
    (n.value = a), (n.getSnapshot = o), wm(n) && Am(t);
  }
  function _m(t, n, a) {
    return a(function () {
      wm(n) && Am(t);
    });
  }
  function wm(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var a = n();
      return !Ce(t, a);
    } catch {
      return !0;
    }
  }
  function Am(t) {
    var n = sa(t, 2);
    n !== null && Le(n, t, 2);
  }
  function qu(t) {
    var n = be();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), Oi)) {
        Hn(!0);
        try {
          a();
        } finally {
          Hn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: t,
      }),
      n
    );
  }
  function Rm(t, n, a, o) {
    return (t.baseState = a), ku(t, At, typeof o == "function" ? o : An);
  }
  function G1(t, n, a, o, u) {
    if (oo(t)) throw Error(r(485));
    if (((t = n.action), t !== null)) {
      var h = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          h.listeners.push(g);
        },
      };
      H.T !== null ? a(!0) : (h.isTransition = !1),
        o(h),
        (a = n.pending),
        a === null
          ? ((h.next = n.pending = h), Cm(n, h))
          : ((h.next = a.next), (n.pending = a.next = h));
    }
  }
  function Cm(t, n) {
    var a = n.action,
      o = n.payload,
      u = t.state;
    if (n.isTransition) {
      var h = H.T,
        g = {};
      H.T = g;
      try {
        var v = a(u, o),
          S = H.S;
        S !== null && S(g, v), Om(t, n, v);
      } catch (L) {
        Pu(t, n, L);
      } finally {
        H.T = h;
      }
    } else
      try {
        (h = a(u, o)), Om(t, n, h);
      } catch (L) {
        Pu(t, n, L);
      }
  }
  function Om(t, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (o) {
            Dm(t, n, o);
          },
          function (o) {
            return Pu(t, n, o);
          }
        )
      : Dm(t, n, a);
  }
  function Dm(t, n, a) {
    (n.status = "fulfilled"),
      (n.value = a),
      Mm(n),
      (t.state = a),
      (n = t.pending),
      n !== null &&
        ((a = n.next),
        a === n ? (t.pending = null) : ((a = a.next), (n.next = a), Cm(t, a)));
  }
  function Pu(t, n, a) {
    var o = t.pending;
    if (((t.pending = null), o !== null)) {
      o = o.next;
      do (n.status = "rejected"), (n.reason = a), Mm(n), (n = n.next);
      while (n !== o);
    }
    t.action = null;
  }
  function Mm(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function Nm(t, n) {
    return n;
  }
  function jm(t, n) {
    if (Et) {
      var a = Mt.formState;
      if (a !== null) {
        t: {
          var o = mt;
          if (Et) {
            if (qt) {
              e: {
                for (var u = qt, h = on; u.nodeType !== 8; ) {
                  if (!h) {
                    u = null;
                    break e;
                  }
                  if (((u = Je(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (h = u.data), (u = h === "F!" || h === "F" ? u : null);
              }
              if (u) {
                (qt = Je(u.nextSibling)), (o = u.data === "F!");
                break t;
              }
            }
            wi(o);
          }
          o = !1;
        }
        o && (n = a[0]);
      }
    }
    return (
      (a = be()),
      (a.memoizedState = a.baseState = n),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nm,
        lastRenderedState: n,
      }),
      (a.queue = o),
      (a = Wm.bind(null, mt, o)),
      (o.dispatch = a),
      (o = qu(!1)),
      (h = Fu.bind(null, mt, !1, o.queue)),
      (o = be()),
      (u = { state: n, dispatch: null, action: t, pending: null }),
      (o.queue = u),
      (a = G1.bind(null, mt, u, h, a)),
      (u.dispatch = a),
      (o.memoizedState = t),
      [n, a, !1]
    );
  }
  function Lm(t) {
    var n = Qt();
    return Bm(n, At, t);
  }
  function Bm(t, n, a) {
    if (
      ((n = ku(t, n, Nm)[0]),
      (t = ao(An)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var o = xs(n);
      } catch (g) {
        throw g === ms ? Wr : g;
      }
    else o = n;
    n = Qt();
    var u = n.queue,
      h = u.dispatch;
    return (
      a !== n.memoizedState &&
        ((mt.flags |= 2048), ma(9, so(), X1.bind(null, u, a), null)),
      [o, h, t]
    );
  }
  function X1(t, n) {
    t.action = n;
  }
  function Um(t) {
    var n = Qt(),
      a = At;
    if (a !== null) return Bm(n, a, t);
    Qt(), (n = n.memoizedState), (a = Qt());
    var o = a.queue.dispatch;
    return (a.memoizedState = t), [n, o, !1];
  }
  function ma(t, n, a, o) {
    return (
      (t = { tag: t, create: a, deps: o, inst: n, next: null }),
      (n = mt.updateQueue),
      n === null && ((n = Vu()), (mt.updateQueue = n)),
      (a = n.lastEffect),
      a === null
        ? (n.lastEffect = t.next = t)
        : ((o = a.next), (a.next = t), (t.next = o), (n.lastEffect = t)),
      t
    );
  }
  function so() {
    return { destroy: void 0, resource: void 0 };
  }
  function Vm() {
    return Qt().memoizedState;
  }
  function ro(t, n, a, o) {
    var u = be();
    (o = o === void 0 ? null : o),
      (mt.flags |= t),
      (u.memoizedState = ma(1 | n, so(), a, o));
  }
  function Ts(t, n, a, o) {
    var u = Qt();
    o = o === void 0 ? null : o;
    var h = u.memoizedState.inst;
    At !== null && o !== null && Nu(o, At.memoizedState.deps)
      ? (u.memoizedState = ma(n, h, a, o))
      : ((mt.flags |= t), (u.memoizedState = ma(1 | n, h, a, o)));
  }
  function zm(t, n) {
    ro(8390656, 8, t, n);
  }
  function km(t, n) {
    Ts(2048, 8, t, n);
  }
  function Hm(t, n) {
    return Ts(4, 2, t, n);
  }
  function qm(t, n) {
    return Ts(4, 4, t, n);
  }
  function Pm(t, n) {
    if (typeof n == "function") {
      t = t();
      var a = n(t);
      return function () {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function Ym(t, n, a) {
    (a = a != null ? a.concat([t]) : null), Ts(4, 4, Pm.bind(null, n, t), a);
  }
  function Yu() {}
  function Gm(t, n) {
    var a = Qt();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    return n !== null && Nu(n, o[1]) ? o[0] : ((a.memoizedState = [t, n]), t);
  }
  function Xm(t, n) {
    var a = Qt();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    if (n !== null && Nu(n, o[1])) return o[0];
    if (((o = t()), Oi)) {
      Hn(!0);
      try {
        t();
      } finally {
        Hn(!1);
      }
    }
    return (a.memoizedState = [o, n]), o;
  }
  function Gu(t, n, a) {
    return a === void 0 || (Fn & 1073741824) !== 0
      ? (t.memoizedState = n)
      : ((t.memoizedState = a), (t = Qp()), (mt.lanes |= t), (ti |= t), a);
  }
  function Km(t, n, a, o) {
    return Ce(a, n)
      ? a
      : fa.current !== null
      ? ((t = Gu(t, a, o)), Ce(t, n) || (te = !0), t)
      : (Fn & 42) === 0
      ? ((te = !0), (t.memoizedState = a))
      : ((t = Qp()), (mt.lanes |= t), (ti |= t), n);
  }
  function Fm(t, n, a, o, u) {
    var h = F.p;
    F.p = h !== 0 && 8 > h ? h : 8;
    var g = H.T,
      v = {};
    (H.T = v), Fu(t, !1, n, a);
    try {
      var S = u(),
        L = H.S;
      if (
        (L !== null && L(v, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var q = q1(S, o);
        Ss(t, n, q, je(t));
      } else Ss(t, n, o, je(t));
    } catch (Y) {
      Ss(t, n, { then: function () {}, status: "rejected", reason: Y }, je());
    } finally {
      (F.p = h), (H.T = g);
    }
  }
  function K1() {}
  function Xu(t, n, a, o) {
    if (t.tag !== 5) throw Error(r(476));
    var u = Qm(t).queue;
    Fm(
      t,
      u,
      n,
      tt,
      a === null
        ? K1
        : function () {
            return Zm(t), a(o);
          }
    );
  }
  function Qm(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: tt,
      baseState: tt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: tt,
      },
      next: null,
    };
    var a = {};
    return (
      (n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: An,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function Zm(t) {
    var n = Qm(t).next.queue;
    Ss(t, n, {}, je());
  }
  function Ku() {
    return ue(Hs);
  }
  function $m() {
    return Qt().memoizedState;
  }
  function Jm() {
    return Qt().memoizedState;
  }
  function F1(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = je();
          t = Xn(a);
          var o = Kn(n, t, a);
          o !== null && (Le(o, n, a), ys(o, n, a)),
            (n = { cache: Su() }),
            (t.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function Q1(t, n, a) {
    var o = je();
    (a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      oo(t)
        ? Im(n, a)
        : ((a = hu(t, n, a, o)), a !== null && (Le(a, t, o), tp(a, n, o)));
  }
  function Wm(t, n, a) {
    var o = je();
    Ss(t, n, a, o);
  }
  function Ss(t, n, a, o) {
    var u = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (oo(t)) Im(n, u);
    else {
      var h = t.alternate;
      if (
        t.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = n.lastRenderedReducer), h !== null)
      )
        try {
          var g = n.lastRenderedState,
            v = h(g, a);
          if (((u.hasEagerState = !0), (u.eagerState = v), Ce(v, g)))
            return Gr(t, n, u, 0), Mt === null && Yr(), !1;
        } catch {
        } finally {
        }
      if (((a = hu(t, n, u, o)), a !== null))
        return Le(a, t, o), tp(a, n, o), !0;
    }
    return !1;
  }
  function Fu(t, n, a, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: wc(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      oo(t))
    ) {
      if (n) throw Error(r(479));
    } else (n = hu(t, a, o, 2)), n !== null && Le(n, t, 2);
  }
  function oo(t) {
    var n = t.alternate;
    return t === mt || (n !== null && n === mt);
  }
  function Im(t, n) {
    ha = eo = !0;
    var a = t.pending;
    a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (t.pending = n);
  }
  function tp(t, n, a) {
    if ((a & 4194048) !== 0) {
      var o = n.lanes;
      (o &= t.pendingLanes), (a |= o), (n.lanes = a), ld(t, a);
    }
  }
  var lo = {
      readContext: ue,
      use: io,
      useCallback: Gt,
      useContext: Gt,
      useEffect: Gt,
      useImperativeHandle: Gt,
      useLayoutEffect: Gt,
      useInsertionEffect: Gt,
      useMemo: Gt,
      useReducer: Gt,
      useRef: Gt,
      useState: Gt,
      useDebugValue: Gt,
      useDeferredValue: Gt,
      useTransition: Gt,
      useSyncExternalStore: Gt,
      useId: Gt,
      useHostTransitionStatus: Gt,
      useFormState: Gt,
      useActionState: Gt,
      useOptimistic: Gt,
      useMemoCache: Gt,
      useCacheRefresh: Gt,
    },
    ep = {
      readContext: ue,
      use: io,
      useCallback: function (t, n) {
        return (be().memoizedState = [t, n === void 0 ? null : n]), t;
      },
      useContext: ue,
      useEffect: zm,
      useImperativeHandle: function (t, n, a) {
        (a = a != null ? a.concat([t]) : null),
          ro(4194308, 4, Pm.bind(null, n, t), a);
      },
      useLayoutEffect: function (t, n) {
        return ro(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        ro(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var a = be();
        n = n === void 0 ? null : n;
        var o = t();
        if (Oi) {
          Hn(!0);
          try {
            t();
          } finally {
            Hn(!1);
          }
        }
        return (a.memoizedState = [o, n]), o;
      },
      useReducer: function (t, n, a) {
        var o = be();
        if (a !== void 0) {
          var u = a(n);
          if (Oi) {
            Hn(!0);
            try {
              a(n);
            } finally {
              Hn(!1);
            }
          }
        } else u = n;
        return (
          (o.memoizedState = o.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (o.queue = t),
          (t = t.dispatch = Q1.bind(null, mt, t)),
          [o.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = be();
        return (t = { current: t }), (n.memoizedState = t);
      },
      useState: function (t) {
        t = qu(t);
        var n = t.queue,
          a = Wm.bind(null, mt, n);
        return (n.dispatch = a), [t.memoizedState, a];
      },
      useDebugValue: Yu,
      useDeferredValue: function (t, n) {
        var a = be();
        return Gu(a, t, n);
      },
      useTransition: function () {
        var t = qu(!1);
        return (
          (t = Fm.bind(null, mt, t.queue, !0, !1)),
          (be().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, n, a) {
        var o = mt,
          u = be();
        if (Et) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = n()), Mt === null)) throw Error(r(349));
          (bt & 124) !== 0 || Sm(o, n, a);
        }
        u.memoizedState = a;
        var h = { value: a, getSnapshot: n };
        return (
          (u.queue = h),
          zm(_m.bind(null, o, h, t), [t]),
          (o.flags |= 2048),
          ma(9, so(), Em.bind(null, o, h, a, n), null),
          a
        );
      },
      useId: function () {
        var t = be(),
          n = Mt.identifierPrefix;
        if (Et) {
          var a = En,
            o = Sn;
          (a = (o & ~(1 << (32 - Re(o) - 1))).toString(32) + a),
            (n = "«" + n + "R" + a),
            (a = no++),
            0 < a && (n += "H" + a.toString(32)),
            (n += "»");
        } else (a = P1++), (n = "«" + n + "r" + a.toString(32) + "»");
        return (t.memoizedState = n);
      },
      useHostTransitionStatus: Ku,
      useFormState: jm,
      useActionState: jm,
      useOptimistic: function (t) {
        var n = be();
        n.memoizedState = n.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = a),
          (n = Fu.bind(null, mt, !0, a)),
          (a.dispatch = n),
          [t, n]
        );
      },
      useMemoCache: zu,
      useCacheRefresh: function () {
        return (be().memoizedState = F1.bind(null, mt));
      },
    },
    np = {
      readContext: ue,
      use: io,
      useCallback: Gm,
      useContext: ue,
      useEffect: km,
      useImperativeHandle: Ym,
      useInsertionEffect: Hm,
      useLayoutEffect: qm,
      useMemo: Xm,
      useReducer: ao,
      useRef: Vm,
      useState: function () {
        return ao(An);
      },
      useDebugValue: Yu,
      useDeferredValue: function (t, n) {
        var a = Qt();
        return Km(a, At.memoizedState, t, n);
      },
      useTransition: function () {
        var t = ao(An)[0],
          n = Qt().memoizedState;
        return [typeof t == "boolean" ? t : xs(t), n];
      },
      useSyncExternalStore: Tm,
      useId: $m,
      useHostTransitionStatus: Ku,
      useFormState: Lm,
      useActionState: Lm,
      useOptimistic: function (t, n) {
        var a = Qt();
        return Rm(a, At, t, n);
      },
      useMemoCache: zu,
      useCacheRefresh: Jm,
    },
    Z1 = {
      readContext: ue,
      use: io,
      useCallback: Gm,
      useContext: ue,
      useEffect: km,
      useImperativeHandle: Ym,
      useInsertionEffect: Hm,
      useLayoutEffect: qm,
      useMemo: Xm,
      useReducer: Hu,
      useRef: Vm,
      useState: function () {
        return Hu(An);
      },
      useDebugValue: Yu,
      useDeferredValue: function (t, n) {
        var a = Qt();
        return At === null ? Gu(a, t, n) : Km(a, At.memoizedState, t, n);
      },
      useTransition: function () {
        var t = Hu(An)[0],
          n = Qt().memoizedState;
        return [typeof t == "boolean" ? t : xs(t), n];
      },
      useSyncExternalStore: Tm,
      useId: $m,
      useHostTransitionStatus: Ku,
      useFormState: Um,
      useActionState: Um,
      useOptimistic: function (t, n) {
        var a = Qt();
        return At !== null
          ? Rm(a, At, t, n)
          : ((a.baseState = t), [t, a.queue.dispatch]);
      },
      useMemoCache: zu,
      useCacheRefresh: Jm,
    },
    pa = null,
    Es = 0;
  function uo(t) {
    var n = Es;
    return (Es += 1), pa === null && (pa = []), dm(pa, t, n);
  }
  function _s(t, n) {
    (n = n.props.ref), (t.ref = n !== void 0 ? n : null);
  }
  function co(t, n) {
    throw n.$$typeof === b
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : t
          )
        ));
  }
  function ip(t) {
    var n = t._init;
    return n(t._payload);
  }
  function ap(t) {
    function n(D, w) {
      if (t) {
        var j = D.deletions;
        j === null ? ((D.deletions = [w]), (D.flags |= 16)) : j.push(w);
      }
    }
    function a(D, w) {
      if (!t) return null;
      for (; w !== null; ) n(D, w), (w = w.sibling);
      return null;
    }
    function o(D) {
      for (var w = new Map(); D !== null; )
        D.key !== null ? w.set(D.key, D) : w.set(D.index, D), (D = D.sibling);
      return w;
    }
    function u(D, w) {
      return (D = Tn(D, w)), (D.index = 0), (D.sibling = null), D;
    }
    function h(D, w, j) {
      return (
        (D.index = j),
        t
          ? ((j = D.alternate),
            j !== null
              ? ((j = j.index), j < w ? ((D.flags |= 67108866), w) : j)
              : ((D.flags |= 67108866), w))
          : ((D.flags |= 1048576), w)
      );
    }
    function g(D) {
      return t && D.alternate === null && (D.flags |= 67108866), D;
    }
    function v(D, w, j, P) {
      return w === null || w.tag !== 6
        ? ((w = mu(j, D.mode, P)), (w.return = D), w)
        : ((w = u(w, j)), (w.return = D), w);
    }
    function S(D, w, j, P) {
      var et = j.type;
      return et === A
        ? q(D, w, j.props.children, P, j.key)
        : w !== null &&
          (w.elementType === et ||
            (typeof et == "object" &&
              et !== null &&
              et.$$typeof === Q &&
              ip(et) === w.type))
        ? ((w = u(w, j.props)), _s(w, j), (w.return = D), w)
        : ((w = Kr(j.type, j.key, j.props, null, D.mode, P)),
          _s(w, j),
          (w.return = D),
          w);
    }
    function L(D, w, j, P) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== j.containerInfo ||
        w.stateNode.implementation !== j.implementation
        ? ((w = pu(j, D.mode, P)), (w.return = D), w)
        : ((w = u(w, j.children || [])), (w.return = D), w);
    }
    function q(D, w, j, P, et) {
      return w === null || w.tag !== 7
        ? ((w = Ti(j, D.mode, P, et)), (w.return = D), w)
        : ((w = u(w, j)), (w.return = D), w);
    }
    function Y(D, w, j) {
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return (w = mu("" + w, D.mode, j)), (w.return = D), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case x:
            return (
              (j = Kr(w.type, w.key, w.props, null, D.mode, j)),
              _s(j, w),
              (j.return = D),
              j
            );
          case O:
            return (w = pu(w, D.mode, j)), (w.return = D), w;
          case Q:
            var P = w._init;
            return (w = P(w._payload)), Y(D, w, j);
        }
        if (Ht(w) || dt(w))
          return (w = Ti(w, D.mode, j, null)), (w.return = D), w;
        if (typeof w.then == "function") return Y(D, uo(w), j);
        if (w.$$typeof === N) return Y(D, $r(D, w), j);
        co(D, w);
      }
      return null;
    }
    function U(D, w, j, P) {
      var et = w !== null ? w.key : null;
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return et !== null ? null : v(D, w, "" + j, P);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case x:
            return j.key === et ? S(D, w, j, P) : null;
          case O:
            return j.key === et ? L(D, w, j, P) : null;
          case Q:
            return (et = j._init), (j = et(j._payload)), U(D, w, j, P);
        }
        if (Ht(j) || dt(j)) return et !== null ? null : q(D, w, j, P, null);
        if (typeof j.then == "function") return U(D, w, uo(j), P);
        if (j.$$typeof === N) return U(D, w, $r(D, j), P);
        co(D, j);
      }
      return null;
    }
    function V(D, w, j, P, et) {
      if (
        (typeof P == "string" && P !== "") ||
        typeof P == "number" ||
        typeof P == "bigint"
      )
        return (D = D.get(j) || null), v(w, D, "" + P, et);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case x:
            return (
              (D = D.get(P.key === null ? j : P.key) || null), S(w, D, P, et)
            );
          case O:
            return (
              (D = D.get(P.key === null ? j : P.key) || null), L(w, D, P, et)
            );
          case Q:
            var pt = P._init;
            return (P = pt(P._payload)), V(D, w, j, P, et);
        }
        if (Ht(P) || dt(P)) return (D = D.get(j) || null), q(w, D, P, et, null);
        if (typeof P.then == "function") return V(D, w, j, uo(P), et);
        if (P.$$typeof === N) return V(D, w, j, $r(w, P), et);
        co(w, P);
      }
      return null;
    }
    function rt(D, w, j, P) {
      for (
        var et = null, pt = null, nt = w, st = (w = 0), ne = null;
        nt !== null && st < j.length;
        st++
      ) {
        nt.index > st ? ((ne = nt), (nt = null)) : (ne = nt.sibling);
        var Tt = U(D, nt, j[st], P);
        if (Tt === null) {
          nt === null && (nt = ne);
          break;
        }
        t && nt && Tt.alternate === null && n(D, nt),
          (w = h(Tt, w, st)),
          pt === null ? (et = Tt) : (pt.sibling = Tt),
          (pt = Tt),
          (nt = ne);
      }
      if (st === j.length) return a(D, nt), Et && Ei(D, st), et;
      if (nt === null) {
        for (; st < j.length; st++)
          (nt = Y(D, j[st], P)),
            nt !== null &&
              ((w = h(nt, w, st)),
              pt === null ? (et = nt) : (pt.sibling = nt),
              (pt = nt));
        return Et && Ei(D, st), et;
      }
      for (nt = o(nt); st < j.length; st++)
        (ne = V(nt, D, st, j[st], P)),
          ne !== null &&
            (t &&
              ne.alternate !== null &&
              nt.delete(ne.key === null ? st : ne.key),
            (w = h(ne, w, st)),
            pt === null ? (et = ne) : (pt.sibling = ne),
            (pt = ne));
      return (
        t &&
          nt.forEach(function (ui) {
            return n(D, ui);
          }),
        Et && Ei(D, st),
        et
      );
    }
    function at(D, w, j, P) {
      if (j == null) throw Error(r(151));
      for (
        var et = null,
          pt = null,
          nt = w,
          st = (w = 0),
          ne = null,
          Tt = j.next();
        nt !== null && !Tt.done;
        st++, Tt = j.next()
      ) {
        nt.index > st ? ((ne = nt), (nt = null)) : (ne = nt.sibling);
        var ui = U(D, nt, Tt.value, P);
        if (ui === null) {
          nt === null && (nt = ne);
          break;
        }
        t && nt && ui.alternate === null && n(D, nt),
          (w = h(ui, w, st)),
          pt === null ? (et = ui) : (pt.sibling = ui),
          (pt = ui),
          (nt = ne);
      }
      if (Tt.done) return a(D, nt), Et && Ei(D, st), et;
      if (nt === null) {
        for (; !Tt.done; st++, Tt = j.next())
          (Tt = Y(D, Tt.value, P)),
            Tt !== null &&
              ((w = h(Tt, w, st)),
              pt === null ? (et = Tt) : (pt.sibling = Tt),
              (pt = Tt));
        return Et && Ei(D, st), et;
      }
      for (nt = o(nt); !Tt.done; st++, Tt = j.next())
        (Tt = V(nt, D, st, Tt.value, P)),
          Tt !== null &&
            (t &&
              Tt.alternate !== null &&
              nt.delete(Tt.key === null ? st : Tt.key),
            (w = h(Tt, w, st)),
            pt === null ? (et = Tt) : (pt.sibling = Tt),
            (pt = Tt));
      return (
        t &&
          nt.forEach(function ($T) {
            return n(D, $T);
          }),
        Et && Ei(D, st),
        et
      );
    }
    function Ct(D, w, j, P) {
      if (
        (typeof j == "object" &&
          j !== null &&
          j.type === A &&
          j.key === null &&
          (j = j.props.children),
        typeof j == "object" && j !== null)
      ) {
        switch (j.$$typeof) {
          case x:
            t: {
              for (var et = j.key; w !== null; ) {
                if (w.key === et) {
                  if (((et = j.type), et === A)) {
                    if (w.tag === 7) {
                      a(D, w.sibling),
                        (P = u(w, j.props.children)),
                        (P.return = D),
                        (D = P);
                      break t;
                    }
                  } else if (
                    w.elementType === et ||
                    (typeof et == "object" &&
                      et !== null &&
                      et.$$typeof === Q &&
                      ip(et) === w.type)
                  ) {
                    a(D, w.sibling),
                      (P = u(w, j.props)),
                      _s(P, j),
                      (P.return = D),
                      (D = P);
                    break t;
                  }
                  a(D, w);
                  break;
                } else n(D, w);
                w = w.sibling;
              }
              j.type === A
                ? ((P = Ti(j.props.children, D.mode, P, j.key)),
                  (P.return = D),
                  (D = P))
                : ((P = Kr(j.type, j.key, j.props, null, D.mode, P)),
                  _s(P, j),
                  (P.return = D),
                  (D = P));
            }
            return g(D);
          case O:
            t: {
              for (et = j.key; w !== null; ) {
                if (w.key === et)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === j.containerInfo &&
                    w.stateNode.implementation === j.implementation
                  ) {
                    a(D, w.sibling),
                      (P = u(w, j.children || [])),
                      (P.return = D),
                      (D = P);
                    break t;
                  } else {
                    a(D, w);
                    break;
                  }
                else n(D, w);
                w = w.sibling;
              }
              (P = pu(j, D.mode, P)), (P.return = D), (D = P);
            }
            return g(D);
          case Q:
            return (et = j._init), (j = et(j._payload)), Ct(D, w, j, P);
        }
        if (Ht(j)) return rt(D, w, j, P);
        if (dt(j)) {
          if (((et = dt(j)), typeof et != "function")) throw Error(r(150));
          return (j = et.call(j)), at(D, w, j, P);
        }
        if (typeof j.then == "function") return Ct(D, w, uo(j), P);
        if (j.$$typeof === N) return Ct(D, w, $r(D, j), P);
        co(D, j);
      }
      return (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
        ? ((j = "" + j),
          w !== null && w.tag === 6
            ? (a(D, w.sibling), (P = u(w, j)), (P.return = D), (D = P))
            : (a(D, w), (P = mu(j, D.mode, P)), (P.return = D), (D = P)),
          g(D))
        : a(D, w);
    }
    return function (D, w, j, P) {
      try {
        Es = 0;
        var et = Ct(D, w, j, P);
        return (pa = null), et;
      } catch (nt) {
        if (nt === ms || nt === Wr) throw nt;
        var pt = Oe(29, nt, null, D.mode);
        return (pt.lanes = P), (pt.return = D), pt;
      } finally {
      }
    };
  }
  var ya = ap(!0),
    sp = ap(!1),
    qe = X(null),
    ln = null;
  function Qn(t) {
    var n = t.alternate;
    $(Wt, Wt.current & 1),
      $(qe, t),
      ln === null &&
        (n === null || fa.current !== null || n.memoizedState !== null) &&
        (ln = t);
  }
  function rp(t) {
    if (t.tag === 22) {
      if (($(Wt, Wt.current), $(qe, t), ln === null)) {
        var n = t.alternate;
        n !== null && n.memoizedState !== null && (ln = t);
      }
    } else Zn();
  }
  function Zn() {
    $(Wt, Wt.current), $(qe, qe.current);
  }
  function Rn(t) {
    I(qe), ln === t && (ln = null), I(Wt);
  }
  var Wt = X(0);
  function fo(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Vc(a))
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  function Qu(t, n, a, o) {
    (n = t.memoizedState),
      (a = a(o, n)),
      (a = a == null ? n : y({}, n, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var Zu = {
    enqueueSetState: function (t, n, a) {
      t = t._reactInternals;
      var o = je(),
        u = Xn(o);
      (u.payload = n),
        a != null && (u.callback = a),
        (n = Kn(t, u, o)),
        n !== null && (Le(n, t, o), ys(n, t, o));
    },
    enqueueReplaceState: function (t, n, a) {
      t = t._reactInternals;
      var o = je(),
        u = Xn(o);
      (u.tag = 1),
        (u.payload = n),
        a != null && (u.callback = a),
        (n = Kn(t, u, o)),
        n !== null && (Le(n, t, o), ys(n, t, o));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var a = je(),
        o = Xn(a);
      (o.tag = 2),
        n != null && (o.callback = n),
        (n = Kn(t, o, a)),
        n !== null && (Le(n, t, a), ys(n, t, a));
    },
  };
  function op(t, n, a, o, u, h, g) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(o, h, g)
        : n.prototype && n.prototype.isPureReactComponent
        ? !rs(a, o) || !rs(u, h)
        : !0
    );
  }
  function lp(t, n, a, o) {
    (t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(a, o),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(a, o),
      n.state !== t && Zu.enqueueReplaceState(n, n.state, null);
  }
  function Di(t, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var o in n) o !== "ref" && (a[o] = n[o]);
    }
    if ((t = t.defaultProps)) {
      a === n && (a = y({}, a));
      for (var u in t) a[u] === void 0 && (a[u] = t[u]);
    }
    return a;
  }
  var ho =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function up(t) {
    ho(t);
  }
  function cp(t) {
    console.error(t);
  }
  function fp(t) {
    ho(t);
  }
  function mo(t, n) {
    try {
      var a = t.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function hp(t, n, a) {
    try {
      var o = t.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function $u(t, n, a) {
    return (
      (a = Xn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        mo(t, n);
      }),
      a
    );
  }
  function dp(t) {
    return (t = Xn(t)), (t.tag = 3), t;
  }
  function mp(t, n, a, o) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var h = o.value;
      (t.payload = function () {
        return u(h);
      }),
        (t.callback = function () {
          hp(n, a, o);
        });
    }
    var g = a.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (t.callback = function () {
        hp(n, a, o),
          typeof u != "function" &&
            (ei === null ? (ei = new Set([this])) : ei.add(this));
        var v = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function $1(t, n, a, o, u) {
    if (
      ((a.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((n = a.alternate),
        n !== null && fs(n, a, u, !0),
        (a = qe.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              ln === null ? xc() : a.alternate === null && Pt === 0 && (Pt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              o === wu
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null ? (a.updateQueue = new Set([o])) : n.add(o),
                  Sc(t, o, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              o === wu
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (a.updateQueue = n))
                    : ((a = n.retryQueue),
                      a === null ? (n.retryQueue = new Set([o])) : a.add(o)),
                  Sc(t, o, u)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return Sc(t, o, u), xc(), !1;
    }
    if (Et)
      return (
        (n = qe.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = u),
            o !== vu && ((t = Error(r(422), { cause: o })), cs(Ve(t, a))))
          : (o !== vu && ((n = Error(r(423), { cause: o })), cs(Ve(n, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (o = Ve(o, a)),
            (u = $u(t.stateNode, o, u)),
            Cu(t, u),
            Pt !== 4 && (Pt = 2)),
        !1
      );
    var h = Error(r(520), { cause: o });
    if (
      ((h = Ve(h, a)),
      Ms === null ? (Ms = [h]) : Ms.push(h),
      Pt !== 4 && (Pt = 2),
      n === null)
    )
      return !0;
    (o = Ve(o, a)), (a = n);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = u & -u),
            (a.lanes |= t),
            (t = $u(a.stateNode, o, t)),
            Cu(a, t),
            !1
          );
        case 1:
          if (
            ((n = a.type),
            (h = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (h !== null &&
                  typeof h.componentDidCatch == "function" &&
                  (ei === null || !ei.has(h)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = dp(u)),
              mp(u, t, a, o),
              Cu(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var pp = Error(r(461)),
    te = !1;
  function ie(t, n, a, o) {
    n.child = t === null ? sp(n, null, a, o) : ya(n, t.child, a, o);
  }
  function yp(t, n, a, o, u) {
    a = a.render;
    var h = n.ref;
    if ("ref" in o) {
      var g = {};
      for (var v in o) v !== "ref" && (g[v] = o[v]);
    } else g = o;
    return (
      Ri(n),
      (o = ju(t, n, a, g, h, u)),
      (v = Lu()),
      t !== null && !te
        ? (Bu(t, n, u), Cn(t, n, u))
        : (Et && v && yu(n), (n.flags |= 1), ie(t, n, o, u), n.child)
    );
  }
  function gp(t, n, a, o, u) {
    if (t === null) {
      var h = a.type;
      return typeof h == "function" &&
        !du(h) &&
        h.defaultProps === void 0 &&
        a.compare === null
        ? ((n.tag = 15), (n.type = h), vp(t, n, h, o, u))
        : ((t = Kr(a.type, null, o, n, n.mode, u)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((h = t.child), !ac(t, u))) {
      var g = h.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : rs), a(g, o) && t.ref === n.ref)
      )
        return Cn(t, n, u);
    }
    return (
      (n.flags |= 1),
      (t = Tn(h, o)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function vp(t, n, a, o, u) {
    if (t !== null) {
      var h = t.memoizedProps;
      if (rs(h, o) && t.ref === n.ref)
        if (((te = !1), (n.pendingProps = o = h), ac(t, u)))
          (t.flags & 131072) !== 0 && (te = !0);
        else return (n.lanes = t.lanes), Cn(t, n, u);
    }
    return Ju(t, n, a, o, u);
  }
  function bp(t, n, a) {
    var o = n.pendingProps,
      u = o.children,
      h = t !== null ? t.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (((o = h !== null ? h.baseLanes | a : a), t !== null)) {
          for (u = n.child = t.child, h = 0; u !== null; )
            (h = h | u.lanes | u.childLanes), (u = u.sibling);
          n.childLanes = h & ~o;
        } else (n.childLanes = 0), (n.child = null);
        return xp(t, n, o, a);
      }
      if ((a & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Jr(n, h !== null ? h.cachePool : null),
          h !== null ? vm(n, h) : Du(),
          rp(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          xp(t, n, h !== null ? h.baseLanes | a : a, a)
        );
    } else
      h !== null
        ? (Jr(n, h.cachePool), vm(n, h), Zn(), (n.memoizedState = null))
        : (t !== null && Jr(n, null), Du(), Zn());
    return ie(t, n, u, a), n.child;
  }
  function xp(t, n, a, o) {
    var u = _u();
    return (
      (u = u === null ? null : { parent: Jt._currentValue, pool: u }),
      (n.memoizedState = { baseLanes: a, cachePool: u }),
      t !== null && Jr(n, null),
      Du(),
      rp(n),
      t !== null && fs(t, n, o, !0),
      null
    );
  }
  function po(t, n) {
    var a = n.ref;
    if (a === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (t === null || t.ref !== a) && (n.flags |= 4194816);
    }
  }
  function Ju(t, n, a, o, u) {
    return (
      Ri(n),
      (a = ju(t, n, a, o, void 0, u)),
      (o = Lu()),
      t !== null && !te
        ? (Bu(t, n, u), Cn(t, n, u))
        : (Et && o && yu(n), (n.flags |= 1), ie(t, n, a, u), n.child)
    );
  }
  function Tp(t, n, a, o, u, h) {
    return (
      Ri(n),
      (n.updateQueue = null),
      (a = xm(n, o, a, u)),
      bm(t),
      (o = Lu()),
      t !== null && !te
        ? (Bu(t, n, h), Cn(t, n, h))
        : (Et && o && yu(n), (n.flags |= 1), ie(t, n, a, h), n.child)
    );
  }
  function Sp(t, n, a, o, u) {
    if ((Ri(n), n.stateNode === null)) {
      var h = ra,
        g = a.contextType;
      typeof g == "object" && g !== null && (h = ue(g)),
        (h = new a(o, h)),
        (n.memoizedState =
          h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = Zu),
        (n.stateNode = h),
        (h._reactInternals = n),
        (h = n.stateNode),
        (h.props = o),
        (h.state = n.memoizedState),
        (h.refs = {}),
        Au(n),
        (g = a.contextType),
        (h.context = typeof g == "object" && g !== null ? ue(g) : ra),
        (h.state = n.memoizedState),
        (g = a.getDerivedStateFromProps),
        typeof g == "function" && (Qu(n, a, g, o), (h.state = n.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function" ||
          (typeof h.UNSAFE_componentWillMount != "function" &&
            typeof h.componentWillMount != "function") ||
          ((g = h.state),
          typeof h.componentWillMount == "function" && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == "function" &&
            h.UNSAFE_componentWillMount(),
          g !== h.state && Zu.enqueueReplaceState(h, h.state, null),
          vs(n, o, h, u),
          gs(),
          (h.state = n.memoizedState)),
        typeof h.componentDidMount == "function" && (n.flags |= 4194308),
        (o = !0);
    } else if (t === null) {
      h = n.stateNode;
      var v = n.memoizedProps,
        S = Di(a, v);
      h.props = S;
      var L = h.context,
        q = a.contextType;
      (g = ra), typeof q == "object" && q !== null && (g = ue(q));
      var Y = a.getDerivedStateFromProps;
      (q =
        typeof Y == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function"),
        (v = n.pendingProps !== v),
        q ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((v || L !== g) && lp(n, h, o, g)),
        (Gn = !1);
      var U = n.memoizedState;
      (h.state = U),
        vs(n, o, h, u),
        gs(),
        (L = n.memoizedState),
        v || U !== L || Gn
          ? (typeof Y == "function" && (Qu(n, a, Y, o), (L = n.memoizedState)),
            (S = Gn || op(n, a, S, o, U, L, g))
              ? (q ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = o),
                (n.memoizedState = L)),
            (h.props = o),
            (h.state = L),
            (h.context = g),
            (o = S))
          : (typeof h.componentDidMount == "function" && (n.flags |= 4194308),
            (o = !1));
    } else {
      (h = n.stateNode),
        Ru(t, n),
        (g = n.memoizedProps),
        (q = Di(a, g)),
        (h.props = q),
        (Y = n.pendingProps),
        (U = h.context),
        (L = a.contextType),
        (S = ra),
        typeof L == "object" && L !== null && (S = ue(L)),
        (v = a.getDerivedStateFromProps),
        (L =
          typeof v == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function") ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((g !== Y || U !== S) && lp(n, h, o, S)),
        (Gn = !1),
        (U = n.memoizedState),
        (h.state = U),
        vs(n, o, h, u),
        gs();
      var V = n.memoizedState;
      g !== Y ||
      U !== V ||
      Gn ||
      (t !== null && t.dependencies !== null && Zr(t.dependencies))
        ? (typeof v == "function" && (Qu(n, a, v, o), (V = n.memoizedState)),
          (q =
            Gn ||
            op(n, a, q, o, U, V, S) ||
            (t !== null && t.dependencies !== null && Zr(t.dependencies)))
            ? (L ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(o, V, S),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, V, S)),
              typeof h.componentDidUpdate == "function" && (n.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (g === t.memoizedProps && U === t.memoizedState) ||
                (n.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (g === t.memoizedProps && U === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = o),
              (n.memoizedState = V)),
          (h.props = o),
          (h.state = V),
          (h.context = S),
          (o = q))
        : (typeof h.componentDidUpdate != "function" ||
            (g === t.memoizedProps && U === t.memoizedState) ||
            (n.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (g === t.memoizedProps && U === t.memoizedState) ||
            (n.flags |= 1024),
          (o = !1));
    }
    return (
      (h = o),
      po(t, n),
      (o = (n.flags & 128) !== 0),
      h || o
        ? ((h = n.stateNode),
          (a =
            o && typeof a.getDerivedStateFromError != "function"
              ? null
              : h.render()),
          (n.flags |= 1),
          t !== null && o
            ? ((n.child = ya(n, t.child, null, u)),
              (n.child = ya(n, null, a, u)))
            : ie(t, n, a, u),
          (n.memoizedState = h.state),
          (t = n.child))
        : (t = Cn(t, n, u)),
      t
    );
  }
  function Ep(t, n, a, o) {
    return us(), (n.flags |= 256), ie(t, n, a, o), n.child;
  }
  var Wu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Iu(t) {
    return { baseLanes: t, cachePool: cm() };
  }
  function tc(t, n, a) {
    return (t = t !== null ? t.childLanes & ~a : 0), n && (t |= Pe), t;
  }
  function _p(t, n, a) {
    var o = n.pendingProps,
      u = !1,
      h = (n.flags & 128) !== 0,
      g;
    if (
      ((g = h) ||
        (g =
          t !== null && t.memoizedState === null ? !1 : (Wt.current & 2) !== 0),
      g && ((u = !0), (n.flags &= -129)),
      (g = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (Et) {
        if ((u ? Qn(n) : Zn(), Et)) {
          var v = qt,
            S;
          if ((S = v)) {
            t: {
              for (S = v, v = on; S.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (((S = Je(S.nextSibling)), S === null)) {
                  v = null;
                  break t;
                }
              }
              v = S;
            }
            v !== null
              ? ((n.memoizedState = {
                  dehydrated: v,
                  treeContext: Si !== null ? { id: Sn, overflow: En } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = Oe(18, null, null, 0)),
                (S.stateNode = v),
                (S.return = n),
                (n.child = S),
                (me = n),
                (qt = null),
                (S = !0))
              : (S = !1);
          }
          S || wi(n);
        }
        if (
          ((v = n.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return Vc(v) ? (n.lanes = 32) : (n.lanes = 536870912), null;
        Rn(n);
      }
      return (
        (v = o.children),
        (o = o.fallback),
        u
          ? (Zn(),
            (u = n.mode),
            (v = yo({ mode: "hidden", children: v }, u)),
            (o = Ti(o, u, a, null)),
            (v.return = n),
            (o.return = n),
            (v.sibling = o),
            (n.child = v),
            (u = n.child),
            (u.memoizedState = Iu(a)),
            (u.childLanes = tc(t, g, a)),
            (n.memoizedState = Wu),
            o)
          : (Qn(n), ec(n, v))
      );
    }
    if (
      ((S = t.memoizedState), S !== null && ((v = S.dehydrated), v !== null))
    ) {
      if (h)
        n.flags & 256
          ? (Qn(n), (n.flags &= -257), (n = nc(t, n, a)))
          : n.memoizedState !== null
          ? (Zn(), (n.child = t.child), (n.flags |= 128), (n = null))
          : (Zn(),
            (u = o.fallback),
            (v = n.mode),
            (o = yo({ mode: "visible", children: o.children }, v)),
            (u = Ti(u, v, a, null)),
            (u.flags |= 2),
            (o.return = n),
            (u.return = n),
            (o.sibling = u),
            (n.child = o),
            ya(n, t.child, null, a),
            (o = n.child),
            (o.memoizedState = Iu(a)),
            (o.childLanes = tc(t, g, a)),
            (n.memoizedState = Wu),
            (n = u));
      else if ((Qn(n), Vc(v))) {
        if (((g = v.nextSibling && v.nextSibling.dataset), g)) var L = g.dgst;
        (g = L),
          (o = Error(r(419))),
          (o.stack = ""),
          (o.digest = g),
          cs({ value: o, source: null, stack: null }),
          (n = nc(t, n, a));
      } else if (
        (te || fs(t, n, a, !1), (g = (a & t.childLanes) !== 0), te || g)
      ) {
        if (
          ((g = Mt),
          g !== null &&
            ((o = a & -a),
            (o = (o & 42) !== 0 ? 1 : zl(o)),
            (o = (o & (g.suspendedLanes | a)) !== 0 ? 0 : o),
            o !== 0 && o !== S.retryLane))
        )
          throw ((S.retryLane = o), sa(t, o), Le(g, t, o), pp);
        v.data === "$?" || xc(), (n = nc(t, n, a));
      } else
        v.data === "$?"
          ? ((n.flags |= 192), (n.child = t.child), (n = null))
          : ((t = S.treeContext),
            (qt = Je(v.nextSibling)),
            (me = n),
            (Et = !0),
            (_i = null),
            (on = !1),
            t !== null &&
              ((ke[He++] = Sn),
              (ke[He++] = En),
              (ke[He++] = Si),
              (Sn = t.id),
              (En = t.overflow),
              (Si = n)),
            (n = ec(n, o.children)),
            (n.flags |= 4096));
      return n;
    }
    return u
      ? (Zn(),
        (u = o.fallback),
        (v = n.mode),
        (S = t.child),
        (L = S.sibling),
        (o = Tn(S, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = S.subtreeFlags & 65011712),
        L !== null ? (u = Tn(L, u)) : ((u = Ti(u, v, a, null)), (u.flags |= 2)),
        (u.return = n),
        (o.return = n),
        (o.sibling = u),
        (n.child = o),
        (o = u),
        (u = n.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = Iu(a))
          : ((S = v.cachePool),
            S !== null
              ? ((L = Jt._currentValue),
                (S = S.parent !== L ? { parent: L, pool: L } : S))
              : (S = cm()),
            (v = { baseLanes: v.baseLanes | a, cachePool: S })),
        (u.memoizedState = v),
        (u.childLanes = tc(t, g, a)),
        (n.memoizedState = Wu),
        o)
      : (Qn(n),
        (a = t.child),
        (t = a.sibling),
        (a = Tn(a, { mode: "visible", children: o.children })),
        (a.return = n),
        (a.sibling = null),
        t !== null &&
          ((g = n.deletions),
          g === null ? ((n.deletions = [t]), (n.flags |= 16)) : g.push(t)),
        (n.child = a),
        (n.memoizedState = null),
        a);
  }
  function ec(t, n) {
    return (
      (n = yo({ mode: "visible", children: n }, t.mode)),
      (n.return = t),
      (t.child = n)
    );
  }
  function yo(t, n) {
    return (
      (t = Oe(22, t, null, n)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function nc(t, n, a) {
    return (
      ya(n, t.child, null, a),
      (t = ec(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function wp(t, n, a) {
    t.lanes |= n;
    var o = t.alternate;
    o !== null && (o.lanes |= n), xu(t.return, n, a);
  }
  function ic(t, n, a, o, u) {
    var h = t.memoizedState;
    h === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: a,
          tailMode: u,
        })
      : ((h.isBackwards = n),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = o),
        (h.tail = a),
        (h.tailMode = u));
  }
  function Ap(t, n, a) {
    var o = n.pendingProps,
      u = o.revealOrder,
      h = o.tail;
    if ((ie(t, n, o.children, a), (o = Wt.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (n.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && wp(t, a, n);
          else if (t.tag === 19) wp(t, a, n);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === n) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      o &= 1;
    }
    switch (($(Wt, o), u)) {
      case "forwards":
        for (a = n.child, u = null; a !== null; )
          (t = a.alternate),
            t !== null && fo(t) === null && (u = a),
            (a = a.sibling);
        (a = u),
          a === null
            ? ((u = n.child), (n.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          ic(n, !1, u, a, h);
        break;
      case "backwards":
        for (a = null, u = n.child, n.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && fo(t) === null)) {
            n.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = a), (a = u), (u = t);
        }
        ic(n, !0, a, null, h);
        break;
      case "together":
        ic(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Cn(t, n, a) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (ti |= n.lanes),
      (a & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((fs(t, n, a, !1), (a & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(r(153));
    if (n.child !== null) {
      for (
        t = n.child, a = Tn(t, t.pendingProps), n.child = a, a.return = n;
        t.sibling !== null;

      )
        (t = t.sibling),
          (a = a.sibling = Tn(t, t.pendingProps)),
          (a.return = n);
      a.sibling = null;
    }
    return n.child;
  }
  function ac(t, n) {
    return (t.lanes & n) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Zr(t)));
  }
  function J1(t, n, a) {
    switch (n.tag) {
      case 3:
        jt(n, n.stateNode.containerInfo),
          Yn(n, Jt, t.memoizedState.cache),
          us();
        break;
      case 27:
      case 5:
        jl(n);
        break;
      case 4:
        jt(n, n.stateNode.containerInfo);
        break;
      case 10:
        Yn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (Qn(n), (n.flags |= 128), null)
            : (a & n.child.childLanes) !== 0
            ? _p(t, n, a)
            : (Qn(n), (t = Cn(t, n, a)), t !== null ? t.sibling : null);
        Qn(n);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((o = (a & n.childLanes) !== 0),
          o || (fs(t, n, a, !1), (o = (a & n.childLanes) !== 0)),
          u)
        ) {
          if (o) return Ap(t, n, a);
          n.flags |= 128;
        }
        if (
          ((u = n.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          $(Wt, Wt.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), bp(t, n, a);
      case 24:
        Yn(n, Jt, t.memoizedState.cache);
    }
    return Cn(t, n, a);
  }
  function Rp(t, n, a) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) te = !0;
      else {
        if (!ac(t, a) && (n.flags & 128) === 0) return (te = !1), J1(t, n, a);
        te = (t.flags & 131072) !== 0;
      }
    else (te = !1), Et && (n.flags & 1048576) !== 0 && im(n, Qr, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          t = n.pendingProps;
          var o = n.elementType,
            u = o._init;
          if (((o = u(o._payload)), (n.type = o), typeof o == "function"))
            du(o)
              ? ((t = Di(o, t)), (n.tag = 1), (n = Sp(null, n, o, t, a)))
              : ((n.tag = 0), (n = Ju(null, n, o, t, a)));
          else {
            if (o != null) {
              if (((u = o.$$typeof), u === G)) {
                (n.tag = 11), (n = yp(null, n, o, t, a));
                break t;
              } else if (u === Z) {
                (n.tag = 14), (n = gp(null, n, o, t, a));
                break t;
              }
            }
            throw ((n = de(o) || o), Error(r(306, n, "")));
          }
        }
        return n;
      case 0:
        return Ju(t, n, n.type, n.pendingProps, a);
      case 1:
        return (o = n.type), (u = Di(o, n.pendingProps)), Sp(t, n, o, u, a);
      case 3:
        t: {
          if ((jt(n, n.stateNode.containerInfo), t === null))
            throw Error(r(387));
          o = n.pendingProps;
          var h = n.memoizedState;
          (u = h.element), Ru(t, n), vs(n, o, null, a);
          var g = n.memoizedState;
          if (
            ((o = g.cache),
            Yn(n, Jt, o),
            o !== h.cache && Tu(n, [Jt], a, !0),
            gs(),
            (o = g.element),
            h.isDehydrated)
          )
            if (
              ((h = { element: o, isDehydrated: !1, cache: g.cache }),
              (n.updateQueue.baseState = h),
              (n.memoizedState = h),
              n.flags & 256)
            ) {
              n = Ep(t, n, o, a);
              break t;
            } else if (o !== u) {
              (u = Ve(Error(r(424)), n)), cs(u), (n = Ep(t, n, o, a));
              break t;
            } else {
              switch (((t = n.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                qt = Je(t.firstChild),
                  me = n,
                  Et = !0,
                  _i = null,
                  on = !0,
                  a = sp(n, null, o, a),
                  n.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((us(), o === u)) {
              n = Cn(t, n, a);
              break t;
            }
            ie(t, n, o, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          po(t, n),
          t === null
            ? (a = My(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = a)
              : Et ||
                ((a = n.type),
                (t = n.pendingProps),
                (o = Do(lt.current).createElement(a)),
                (o[le] = n),
                (o[ge] = t),
                se(o, a, t),
                It(o),
                (n.stateNode = o))
            : (n.memoizedState = My(
                n.type,
                t.memoizedProps,
                n.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          jl(n),
          t === null &&
            Et &&
            ((o = n.stateNode = Cy(n.type, n.pendingProps, lt.current)),
            (me = n),
            (on = !0),
            (u = qt),
            ai(n.type) ? ((zc = u), (qt = Je(o.firstChild))) : (qt = u)),
          ie(t, n, n.pendingProps.children, a),
          po(t, n),
          t === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          t === null &&
            Et &&
            ((u = o = qt) &&
              ((o = wT(o, n.type, n.pendingProps, on)),
              o !== null
                ? ((n.stateNode = o),
                  (me = n),
                  (qt = Je(o.firstChild)),
                  (on = !1),
                  (u = !0))
                : (u = !1)),
            u || wi(n)),
          jl(n),
          (u = n.type),
          (h = n.pendingProps),
          (g = t !== null ? t.memoizedProps : null),
          (o = h.children),
          Lc(u, h) ? (o = null) : g !== null && Lc(u, g) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((u = ju(t, n, Y1, null, null, a)), (Hs._currentValue = u)),
          po(t, n),
          ie(t, n, o, a),
          n.child
        );
      case 6:
        return (
          t === null &&
            Et &&
            ((t = a = qt) &&
              ((a = AT(a, n.pendingProps, on)),
              a !== null
                ? ((n.stateNode = a), (me = n), (qt = null), (t = !0))
                : (t = !1)),
            t || wi(n)),
          null
        );
      case 13:
        return _p(t, n, a);
      case 4:
        return (
          jt(n, n.stateNode.containerInfo),
          (o = n.pendingProps),
          t === null ? (n.child = ya(n, null, o, a)) : ie(t, n, o, a),
          n.child
        );
      case 11:
        return yp(t, n, n.type, n.pendingProps, a);
      case 7:
        return ie(t, n, n.pendingProps, a), n.child;
      case 8:
        return ie(t, n, n.pendingProps.children, a), n.child;
      case 12:
        return ie(t, n, n.pendingProps.children, a), n.child;
      case 10:
        return (
          (o = n.pendingProps),
          Yn(n, n.type, o.value),
          ie(t, n, o.children, a),
          n.child
        );
      case 9:
        return (
          (u = n.type._context),
          (o = n.pendingProps.children),
          Ri(n),
          (u = ue(u)),
          (o = o(u)),
          (n.flags |= 1),
          ie(t, n, o, a),
          n.child
        );
      case 14:
        return gp(t, n, n.type, n.pendingProps, a);
      case 15:
        return vp(t, n, n.type, n.pendingProps, a);
      case 19:
        return Ap(t, n, a);
      case 31:
        return (
          (o = n.pendingProps),
          (a = n.mode),
          (o = { mode: o.mode, children: o.children }),
          t === null
            ? ((a = yo(o, a)),
              (a.ref = n.ref),
              (n.child = a),
              (a.return = n),
              (n = a))
            : ((a = Tn(t.child, o)),
              (a.ref = n.ref),
              (n.child = a),
              (a.return = n),
              (n = a)),
          n
        );
      case 22:
        return bp(t, n, a);
      case 24:
        return (
          Ri(n),
          (o = ue(Jt)),
          t === null
            ? ((u = _u()),
              u === null &&
                ((u = Mt),
                (h = Su()),
                (u.pooledCache = h),
                h.refCount++,
                h !== null && (u.pooledCacheLanes |= a),
                (u = h)),
              (n.memoizedState = { parent: o, cache: u }),
              Au(n),
              Yn(n, Jt, u))
            : ((t.lanes & a) !== 0 && (Ru(t, n), vs(n, null, null, a), gs()),
              (u = t.memoizedState),
              (h = n.memoizedState),
              u.parent !== o
                ? ((u = { parent: o, cache: o }),
                  (n.memoizedState = u),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = u),
                  Yn(n, Jt, o))
                : ((o = h.cache),
                  Yn(n, Jt, o),
                  o !== u.cache && Tu(n, [Jt], a, !0))),
          ie(t, n, n.pendingProps.children, a),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(r(156, n.tag));
  }
  function On(t) {
    t.flags |= 4;
  }
  function Cp(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Uy(n))) {
      if (
        ((n = qe.current),
        n !== null &&
          ((bt & 4194048) === bt
            ? ln !== null
            : ((bt & 62914560) !== bt && (bt & 536870912) === 0) || n !== ln))
      )
        throw ((ps = wu), fm);
      t.flags |= 8192;
    }
  }
  function go(t, n) {
    n !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((n = t.tag !== 22 ? rd() : 536870912), (t.lanes |= n), (xa |= n));
  }
  function ws(t, n) {
    if (!Et)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), (a = a.sibling);
          o === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function zt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      o = 0;
    if (n)
      for (var u = t.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 65011712),
          (o |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= o), (t.childLanes = a), n;
  }
  function W1(t, n, a) {
    var o = n.pendingProps;
    switch ((gu(n), n.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return zt(n), null;
      case 1:
        return zt(n), null;
      case 3:
        return (
          (a = n.stateNode),
          (o = null),
          t !== null && (o = t.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          wn(Jt),
          kn(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (ls(n)
              ? On(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), rm())),
          zt(n),
          null
        );
      case 26:
        return (
          (a = n.memoizedState),
          t === null
            ? (On(n),
              a !== null ? (zt(n), Cp(n, a)) : (zt(n), (n.flags &= -16777217)))
            : a
            ? a !== t.memoizedState
              ? (On(n), zt(n), Cp(n, a))
              : (zt(n), (n.flags &= -16777217))
            : (t.memoizedProps !== o && On(n), zt(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        Rr(n), (a = lt.current);
        var u = n.type;
        if (t !== null && n.stateNode != null) t.memoizedProps !== o && On(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(r(166));
            return zt(n), null;
          }
          (t = it.current),
            ls(n) ? am(n) : ((t = Cy(u, o, a)), (n.stateNode = t), On(n));
        }
        return zt(n), null;
      case 5:
        if ((Rr(n), (a = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== o && On(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(r(166));
            return zt(n), null;
          }
          if (((t = it.current), ls(n))) am(n);
          else {
            switch (((u = Do(lt.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof o.is == "string"
                        ? u.createElement("select", { is: o.is })
                        : u.createElement("select")),
                      o.multiple
                        ? (t.multiple = !0)
                        : o.size && (t.size = o.size);
                    break;
                  default:
                    t =
                      typeof o.is == "string"
                        ? u.createElement(a, { is: o.is })
                        : u.createElement(a);
                }
            }
            (t[le] = n), (t[ge] = o);
            t: for (u = n.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === n) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === n) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            n.stateNode = t;
            t: switch ((se(t, a, o), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!o.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && On(n);
          }
        }
        return zt(n), (n.flags &= -16777217), null;
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== o && On(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(r(166));
          if (((t = lt.current), ls(n))) {
            if (
              ((t = n.stateNode),
              (a = n.memoizedProps),
              (o = null),
              (u = me),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  o = u.memoizedProps;
              }
            (t[le] = n),
              (t = !!(
                t.nodeValue === a ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Ty(t.nodeValue, a)
              )),
              t || wi(n);
          } else (t = Do(t).createTextNode(o)), (t[le] = n), (n.stateNode = t);
        }
        return zt(n), null;
      case 13:
        if (
          ((o = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = ls(n)), o !== null && o.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[le] = n;
            } else
              us(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            zt(n), (u = !1);
          } else
            (u = rm()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return n.flags & 256 ? (Rn(n), n) : (Rn(n), null);
        }
        if ((Rn(n), (n.flags & 128) !== 0)) return (n.lanes = a), n;
        if (
          ((a = o !== null), (t = t !== null && t.memoizedState !== null), a)
        ) {
          (o = n.child),
            (u = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (u = o.alternate.memoizedState.cachePool.pool);
          var h = null;
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (h = o.memoizedState.cachePool.pool),
            h !== u && (o.flags |= 2048);
        }
        return (
          a !== t && a && (n.child.flags |= 8192),
          go(n, n.updateQueue),
          zt(n),
          null
        );
      case 4:
        return kn(), t === null && Oc(n.stateNode.containerInfo), zt(n), null;
      case 10:
        return wn(n.type), zt(n), null;
      case 19:
        if ((I(Wt), (u = n.memoizedState), u === null)) return zt(n), null;
        if (((o = (n.flags & 128) !== 0), (h = u.rendering), h === null))
          if (o) ws(u, !1);
          else {
            if (Pt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((h = fo(t)), h !== null)) {
                  for (
                    n.flags |= 128,
                      ws(u, !1),
                      t = h.updateQueue,
                      n.updateQueue = t,
                      go(n, t),
                      n.subtreeFlags = 0,
                      t = a,
                      a = n.child;
                    a !== null;

                  )
                    nm(a, t), (a = a.sibling);
                  return $(Wt, (Wt.current & 1) | 2), n.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              rn() > xo &&
              ((n.flags |= 128), (o = !0), ws(u, !1), (n.lanes = 4194304));
          }
        else {
          if (!o)
            if (((t = fo(h)), t !== null)) {
              if (
                ((n.flags |= 128),
                (o = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                go(n, t),
                ws(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !h.alternate &&
                  !Et)
              )
                return zt(n), null;
            } else
              2 * rn() - u.renderingStartTime > xo &&
                a !== 536870912 &&
                ((n.flags |= 128), (o = !0), ws(u, !1), (n.lanes = 4194304));
          u.isBackwards
            ? ((h.sibling = n.child), (n.child = h))
            : ((t = u.last),
              t !== null ? (t.sibling = h) : (n.child = h),
              (u.last = h));
        }
        return u.tail !== null
          ? ((n = u.tail),
            (u.rendering = n),
            (u.tail = n.sibling),
            (u.renderingStartTime = rn()),
            (n.sibling = null),
            (t = Wt.current),
            $(Wt, o ? (t & 1) | 2 : t & 1),
            n)
          : (zt(n), null);
      case 22:
      case 23:
        return (
          Rn(n),
          Mu(),
          (o = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== o && (n.flags |= 8192)
            : o && (n.flags |= 8192),
          o
            ? (a & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (zt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : zt(n),
          (a = n.updateQueue),
          a !== null && go(n, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (o = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          o !== a && (n.flags |= 2048),
          t !== null && I(Ci),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          wn(Jt),
          zt(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, n.tag));
  }
  function I1(t, n) {
    switch ((gu(n), n.tag)) {
      case 1:
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          wn(Jt),
          kn(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((n.flags = (t & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Rr(n), null;
      case 13:
        if (
          (Rn(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(r(340));
          us();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return I(Wt), null;
      case 4:
        return kn(), null;
      case 10:
        return wn(n.type), null;
      case 22:
      case 23:
        return (
          Rn(n),
          Mu(),
          t !== null && I(Ci),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return wn(Jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Op(t, n) {
    switch ((gu(n), n.tag)) {
      case 3:
        wn(Jt), kn();
        break;
      case 26:
      case 27:
      case 5:
        Rr(n);
        break;
      case 4:
        kn();
        break;
      case 13:
        Rn(n);
        break;
      case 19:
        I(Wt);
        break;
      case 10:
        wn(n.type);
        break;
      case 22:
      case 23:
        Rn(n), Mu(), t !== null && I(Ci);
        break;
      case 24:
        wn(Jt);
    }
  }
  function As(t, n) {
    try {
      var a = n.updateQueue,
        o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            o = void 0;
            var h = a.create,
              g = a.inst;
            (o = h()), (g.destroy = o);
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (v) {
      Dt(n, n.return, v);
    }
  }
  function $n(t, n, a) {
    try {
      var o = n.updateQueue,
        u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var h = u.next;
        o = h;
        do {
          if ((o.tag & t) === t) {
            var g = o.inst,
              v = g.destroy;
            if (v !== void 0) {
              (g.destroy = void 0), (u = n);
              var S = a,
                L = v;
              try {
                L();
              } catch (q) {
                Dt(u, S, q);
              }
            }
          }
          o = o.next;
        } while (o !== h);
      }
    } catch (q) {
      Dt(n, n.return, q);
    }
  }
  function Dp(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var a = t.stateNode;
      try {
        gm(n, a);
      } catch (o) {
        Dt(t, t.return, o);
      }
    }
  }
  function Mp(t, n, a) {
    (a.props = Di(t.type, t.memoizedProps)), (a.state = t.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (o) {
      Dt(t, n, o);
    }
  }
  function Rs(t, n) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var o = t.stateNode;
            break;
          case 30:
            o = t.stateNode;
            break;
          default:
            o = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(o)) : (a.current = o);
      }
    } catch (u) {
      Dt(t, n, u);
    }
  }
  function un(t, n) {
    var a = t.ref,
      o = t.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (u) {
          Dt(t, n, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          Dt(t, n, u);
        }
      else a.current = null;
  }
  function Np(t) {
    var n = t.type,
      a = t.memoizedProps,
      o = t.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break t;
        case "img":
          a.src ? (o.src = a.src) : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (u) {
      Dt(t, t.return, u);
    }
  }
  function sc(t, n, a) {
    try {
      var o = t.stateNode;
      xT(o, t.type, a, n), (o[ge] = n);
    } catch (u) {
      Dt(t, t.return, u);
    }
  }
  function jp(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ai(t.type)) ||
      t.tag === 4
    );
  }
  function rc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || jp(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && ai(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function oc(t, n, a) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode),
        n
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(t, n)
          : ((n =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            n.appendChild(t),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = Oo));
    else if (
      o !== 4 &&
      (o === 27 && ai(t.type) && ((a = t.stateNode), (n = null)),
      (t = t.child),
      t !== null)
    )
      for (oc(t, n, a), t = t.sibling; t !== null; )
        oc(t, n, a), (t = t.sibling);
  }
  function vo(t, n, a) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode), n ? a.insertBefore(t, n) : a.appendChild(t);
    else if (
      o !== 4 &&
      (o === 27 && ai(t.type) && (a = t.stateNode), (t = t.child), t !== null)
    )
      for (vo(t, n, a), t = t.sibling; t !== null; )
        vo(t, n, a), (t = t.sibling);
  }
  function Lp(t) {
    var n = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var o = t.type, u = n.attributes; u.length; )
        n.removeAttributeNode(u[0]);
      se(n, o, a), (n[le] = t), (n[ge] = a);
    } catch (h) {
      Dt(t, t.return, h);
    }
  }
  var Dn = !1,
    Xt = !1,
    lc = !1,
    Bp = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function tT(t, n) {
    if (((t = t.containerInfo), (Nc = Uo), (t = Kd(t)), ru(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var u = o.anchorOffset,
              h = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, h.nodeType;
            } catch {
              a = null;
              break t;
            }
            var g = 0,
              v = -1,
              S = -1,
              L = 0,
              q = 0,
              Y = t,
              U = null;
            e: for (;;) {
              for (
                var V;
                Y !== a || (u !== 0 && Y.nodeType !== 3) || (v = g + u),
                  Y !== h || (o !== 0 && Y.nodeType !== 3) || (S = g + o),
                  Y.nodeType === 3 && (g += Y.nodeValue.length),
                  (V = Y.firstChild) !== null;

              )
                (U = Y), (Y = V);
              for (;;) {
                if (Y === t) break e;
                if (
                  (U === a && ++L === u && (v = g),
                  U === h && ++q === o && (S = g),
                  (V = Y.nextSibling) !== null)
                )
                  break;
                (Y = U), (U = Y.parentNode);
              }
              Y = V;
            }
            a = v === -1 || S === -1 ? null : { start: v, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      jc = { focusedElem: t, selectionRange: a }, Uo = !1, ee = n;
      ee !== null;

    )
      if (
        ((n = ee), (t = n.child), (n.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = n), (ee = t);
      else
        for (; ee !== null; ) {
          switch (((n = ee), (h = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && h !== null) {
                (t = void 0),
                  (a = n),
                  (u = h.memoizedProps),
                  (h = h.memoizedState),
                  (o = a.stateNode);
                try {
                  var rt = Di(a.type, u, a.elementType === a.type);
                  (t = o.getSnapshotBeforeUpdate(rt, h)),
                    (o.__reactInternalSnapshotBeforeUpdate = t);
                } catch (at) {
                  Dt(a, a.return, at);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = n.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  Uc(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Uc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (ee = t);
            break;
          }
          ee = n.return;
        }
  }
  function Up(t, n, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Jn(t, a), o & 4 && As(5, a);
        break;
      case 1:
        if ((Jn(t, a), o & 4))
          if (((t = a.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (g) {
              Dt(a, a.return, g);
            }
          else {
            var u = Di(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(u, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              Dt(a, a.return, g);
            }
          }
        o & 64 && Dp(a), o & 512 && Rs(a, a.return);
        break;
      case 3:
        if ((Jn(t, a), o & 64 && ((t = a.updateQueue), t !== null))) {
          if (((n = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                n = a.child.stateNode;
                break;
              case 1:
                n = a.child.stateNode;
            }
          try {
            gm(t, n);
          } catch (g) {
            Dt(a, a.return, g);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Lp(a);
      case 26:
      case 5:
        Jn(t, a), n === null && o & 4 && Np(a), o & 512 && Rs(a, a.return);
        break;
      case 12:
        Jn(t, a);
        break;
      case 13:
        Jn(t, a),
          o & 4 && kp(t, a),
          o & 64 &&
            ((t = a.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((a = uT.bind(null, a)), RT(t, a))));
        break;
      case 22:
        if (((o = a.memoizedState !== null || Dn), !o)) {
          (n = (n !== null && n.memoizedState !== null) || Xt), (u = Dn);
          var h = Xt;
          (Dn = o),
            (Xt = n) && !h ? Wn(t, a, (a.subtreeFlags & 8772) !== 0) : Jn(t, a),
            (Dn = u),
            (Xt = h);
        }
        break;
      case 30:
        break;
      default:
        Jn(t, a);
    }
  }
  function Vp(t) {
    var n = t.alternate;
    n !== null && ((t.alternate = null), Vp(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && ql(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Lt = null,
    xe = !1;
  function Mn(t, n, a) {
    for (a = a.child; a !== null; ) zp(t, n, a), (a = a.sibling);
  }
  function zp(t, n, a) {
    if (Ae && typeof Ae.onCommitFiberUnmount == "function")
      try {
        Ae.onCommitFiberUnmount(Qa, a);
      } catch {}
    switch (a.tag) {
      case 26:
        Xt || un(a, n),
          Mn(t, n, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        Xt || un(a, n);
        var o = Lt,
          u = xe;
        ai(a.type) && ((Lt = a.stateNode), (xe = !1)),
          Mn(t, n, a),
          Us(a.stateNode),
          (Lt = o),
          (xe = u);
        break;
      case 5:
        Xt || un(a, n);
      case 6:
        if (
          ((o = Lt),
          (u = xe),
          (Lt = null),
          Mn(t, n, a),
          (Lt = o),
          (xe = u),
          Lt !== null)
        )
          if (xe)
            try {
              (Lt.nodeType === 9
                ? Lt.body
                : Lt.nodeName === "HTML"
                ? Lt.ownerDocument.body
                : Lt
              ).removeChild(a.stateNode);
            } catch (h) {
              Dt(a, n, h);
            }
          else
            try {
              Lt.removeChild(a.stateNode);
            } catch (h) {
              Dt(a, n, h);
            }
        break;
      case 18:
        Lt !== null &&
          (xe
            ? ((t = Lt),
              Ay(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                a.stateNode
              ),
              Gs(t))
            : Ay(Lt, a.stateNode));
        break;
      case 4:
        (o = Lt),
          (u = xe),
          (Lt = a.stateNode.containerInfo),
          (xe = !0),
          Mn(t, n, a),
          (Lt = o),
          (xe = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Xt || $n(2, a, n), Xt || $n(4, a, n), Mn(t, n, a);
        break;
      case 1:
        Xt ||
          (un(a, n),
          (o = a.stateNode),
          typeof o.componentWillUnmount == "function" && Mp(a, n, o)),
          Mn(t, n, a);
        break;
      case 21:
        Mn(t, n, a);
        break;
      case 22:
        (Xt = (o = Xt) || a.memoizedState !== null), Mn(t, n, a), (Xt = o);
        break;
      default:
        Mn(t, n, a);
    }
  }
  function kp(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Gs(t);
      } catch (a) {
        Dt(n, n.return, a);
      }
  }
  function eT(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new Bp()), n;
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new Bp()),
          n
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function uc(t, n) {
    var a = eT(t);
    n.forEach(function (o) {
      var u = cT.bind(null, t, o);
      a.has(o) || (a.add(o), o.then(u, u));
    });
  }
  function De(t, n) {
    var a = n.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var u = a[o],
          h = t,
          g = n,
          v = g;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (ai(v.type)) {
                (Lt = v.stateNode), (xe = !1);
                break t;
              }
              break;
            case 5:
              (Lt = v.stateNode), (xe = !1);
              break t;
            case 3:
            case 4:
              (Lt = v.stateNode.containerInfo), (xe = !0);
              break t;
          }
          v = v.return;
        }
        if (Lt === null) throw Error(r(160));
        zp(h, g, u),
          (Lt = null),
          (xe = !1),
          (h = u.alternate),
          h !== null && (h.return = null),
          (u.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) Hp(n, t), (n = n.sibling);
  }
  var $e = null;
  function Hp(t, n) {
    var a = t.alternate,
      o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        De(n, t),
          Me(t),
          o & 4 && ($n(3, t, t.return), As(3, t), $n(5, t, t.return));
        break;
      case 1:
        De(n, t),
          Me(t),
          o & 512 && (Xt || a === null || un(a, a.return)),
          o & 64 &&
            Dn &&
            ((t = t.updateQueue),
            t !== null &&
              ((o = t.callbacks),
              o !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? o : a.concat(o)))));
        break;
      case 26:
        var u = $e;
        if (
          (De(n, t),
          Me(t),
          o & 512 && (Xt || a === null || un(a, a.return)),
          o & 4)
        ) {
          var h = a !== null ? a.memoizedState : null;
          if (((o = t.memoizedState), a === null))
            if (o === null)
              if (t.stateNode === null) {
                t: {
                  (o = t.type),
                    (a = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  e: switch (o) {
                    case "title":
                      (h = u.getElementsByTagName("title")[0]),
                        (!h ||
                          h[Ja] ||
                          h[le] ||
                          h.namespaceURI === "http://www.w3.org/2000/svg" ||
                          h.hasAttribute("itemprop")) &&
                          ((h = u.createElement(o)),
                          u.head.insertBefore(
                            h,
                            u.querySelector("head > title")
                          )),
                        se(h, o, a),
                        (h[le] = t),
                        It(h),
                        (o = h);
                      break t;
                    case "link":
                      var g = Ly("link", "href", u).get(o + (a.href || ""));
                      if (g) {
                        for (var v = 0; v < g.length; v++)
                          if (
                            ((h = g[v]),
                            h.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              h.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              h.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              h.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            g.splice(v, 1);
                            break e;
                          }
                      }
                      (h = u.createElement(o)),
                        se(h, o, a),
                        u.head.appendChild(h);
                      break;
                    case "meta":
                      if (
                        (g = Ly("meta", "content", u).get(
                          o + (a.content || "")
                        ))
                      ) {
                        for (v = 0; v < g.length; v++)
                          if (
                            ((h = g[v]),
                            h.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              h.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              h.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              h.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              h.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            g.splice(v, 1);
                            break e;
                          }
                      }
                      (h = u.createElement(o)),
                        se(h, o, a),
                        u.head.appendChild(h);
                      break;
                    default:
                      throw Error(r(468, o));
                  }
                  (h[le] = t), It(h), (o = h);
                }
                t.stateNode = o;
              } else By(u, t.type, t.stateNode);
            else t.stateNode = jy(u, o, t.memoizedProps);
          else
            h !== o
              ? (h === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : h.count--,
                o === null
                  ? By(u, t.type, t.stateNode)
                  : jy(u, o, t.memoizedProps))
              : o === null &&
                t.stateNode !== null &&
                sc(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        De(n, t),
          Me(t),
          o & 512 && (Xt || a === null || un(a, a.return)),
          a !== null && o & 4 && sc(t, t.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (De(n, t),
          Me(t),
          o & 512 && (Xt || a === null || un(a, a.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            Wi(u, "");
          } catch (V) {
            Dt(t, t.return, V);
          }
        }
        o & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), sc(t, u, a !== null ? a.memoizedProps : u)),
          o & 1024 && (lc = !0);
        break;
      case 6:
        if ((De(n, t), Me(t), o & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (o = t.memoizedProps), (a = t.stateNode);
          try {
            a.nodeValue = o;
          } catch (V) {
            Dt(t, t.return, V);
          }
        }
        break;
      case 3:
        if (
          ((jo = null),
          (u = $e),
          ($e = Mo(n.containerInfo)),
          De(n, t),
          ($e = u),
          Me(t),
          o & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Gs(n.containerInfo);
          } catch (V) {
            Dt(t, t.return, V);
          }
        lc && ((lc = !1), qp(t));
        break;
      case 4:
        (o = $e),
          ($e = Mo(t.stateNode.containerInfo)),
          De(n, t),
          Me(t),
          ($e = o);
        break;
      case 12:
        De(n, t), Me(t);
        break;
      case 13:
        De(n, t),
          Me(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (pc = rn()),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), uc(t, o)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var S = a !== null && a.memoizedState !== null,
          L = Dn,
          q = Xt;
        if (
          ((Dn = L || u),
          (Xt = q || S),
          De(n, t),
          (Xt = q),
          (Dn = L),
          Me(t),
          o & 8192)
        )
          t: for (
            n = t.stateNode,
              n._visibility = u ? n._visibility & -2 : n._visibility | 1,
              u && (a === null || S || Dn || Xt || Mi(t)),
              a = null,
              n = t;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                S = a = n;
                try {
                  if (((h = S.stateNode), u))
                    (g = h.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none");
                  else {
                    v = S.stateNode;
                    var Y = S.memoizedProps.style,
                      U =
                        Y != null && Y.hasOwnProperty("display")
                          ? Y.display
                          : null;
                    v.style.display =
                      U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (V) {
                  Dt(S, S.return, V);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                S = n;
                try {
                  S.stateNode.nodeValue = u ? "" : S.memoizedProps;
                } catch (V) {
                  Dt(S, S.return, V);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === t) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break t;
              a === n && (a = null), (n = n.return);
            }
            a === n && (a = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        o & 4 &&
          ((o = t.updateQueue),
          o !== null &&
            ((a = o.retryQueue),
            a !== null && ((o.retryQueue = null), uc(t, a))));
        break;
      case 19:
        De(n, t),
          Me(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), uc(t, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        De(n, t), Me(t);
    }
  }
  function Me(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var a, o = t.return; o !== null; ) {
          if (jp(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              h = rc(t);
            vo(t, h, u);
            break;
          case 5:
            var g = a.stateNode;
            a.flags & 32 && (Wi(g, ""), (a.flags &= -33));
            var v = rc(t);
            vo(t, v, g);
            break;
          case 3:
          case 4:
            var S = a.stateNode.containerInfo,
              L = rc(t);
            oc(t, L, S);
            break;
          default:
            throw Error(r(161));
        }
      } catch (q) {
        Dt(t, t.return, q);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function qp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        qp(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Jn(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) Up(t, n.alternate, n), (n = n.sibling);
  }
  function Mi(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $n(4, n, n.return), Mi(n);
          break;
        case 1:
          un(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && Mp(n, n.return, a),
            Mi(n);
          break;
        case 27:
          Us(n.stateNode);
        case 26:
        case 5:
          un(n, n.return), Mi(n);
          break;
        case 22:
          n.memoizedState === null && Mi(n);
          break;
        case 30:
          Mi(n);
          break;
        default:
          Mi(n);
      }
      t = t.sibling;
    }
  }
  function Wn(t, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate,
        u = t,
        h = n,
        g = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Wn(u, h, a), As(4, h);
          break;
        case 1:
          if (
            (Wn(u, h, a),
            (o = h),
            (u = o.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (L) {
              Dt(o, o.return, L);
            }
          if (((o = h), (u = o.updateQueue), u !== null)) {
            var v = o.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++)
                  ym(S[u], v);
            } catch (L) {
              Dt(o, o.return, L);
            }
          }
          a && g & 64 && Dp(h), Rs(h, h.return);
          break;
        case 27:
          Lp(h);
        case 26:
        case 5:
          Wn(u, h, a), a && o === null && g & 4 && Np(h), Rs(h, h.return);
          break;
        case 12:
          Wn(u, h, a);
          break;
        case 13:
          Wn(u, h, a), a && g & 4 && kp(u, h);
          break;
        case 22:
          h.memoizedState === null && Wn(u, h, a), Rs(h, h.return);
          break;
        case 30:
          break;
        default:
          Wn(u, h, a);
      }
      n = n.sibling;
    }
  }
  function cc(t, n) {
    var a = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && hs(a));
  }
  function fc(t, n) {
    (t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && hs(t));
  }
  function cn(t, n, a, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) Pp(t, n, a, o), (n = n.sibling);
  }
  function Pp(t, n, a, o) {
    var u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        cn(t, n, a, o), u & 2048 && As(9, n);
        break;
      case 1:
        cn(t, n, a, o);
        break;
      case 3:
        cn(t, n, a, o),
          u & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && hs(t)));
        break;
      case 12:
        if (u & 2048) {
          cn(t, n, a, o), (t = n.stateNode);
          try {
            var h = n.memoizedProps,
              g = h.id,
              v = h.onPostCommit;
            typeof v == "function" &&
              v(
                g,
                n.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (S) {
            Dt(n, n.return, S);
          }
        } else cn(t, n, a, o);
        break;
      case 13:
        cn(t, n, a, o);
        break;
      case 23:
        break;
      case 22:
        (h = n.stateNode),
          (g = n.alternate),
          n.memoizedState !== null
            ? h._visibility & 2
              ? cn(t, n, a, o)
              : Cs(t, n)
            : h._visibility & 2
            ? cn(t, n, a, o)
            : ((h._visibility |= 2),
              ga(t, n, a, o, (n.subtreeFlags & 10256) !== 0)),
          u & 2048 && cc(g, n);
        break;
      case 24:
        cn(t, n, a, o), u & 2048 && fc(n.alternate, n);
        break;
      default:
        cn(t, n, a, o);
    }
  }
  function ga(t, n, a, o, u) {
    for (u = u && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var h = t,
        g = n,
        v = a,
        S = o,
        L = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          ga(h, g, v, S, u), As(8, g);
          break;
        case 23:
          break;
        case 22:
          var q = g.stateNode;
          g.memoizedState !== null
            ? q._visibility & 2
              ? ga(h, g, v, S, u)
              : Cs(h, g)
            : ((q._visibility |= 2), ga(h, g, v, S, u)),
            u && L & 2048 && cc(g.alternate, g);
          break;
        case 24:
          ga(h, g, v, S, u), u && L & 2048 && fc(g.alternate, g);
          break;
        default:
          ga(h, g, v, S, u);
      }
      n = n.sibling;
    }
  }
  function Cs(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = t,
          o = n,
          u = o.flags;
        switch (o.tag) {
          case 22:
            Cs(a, o), u & 2048 && cc(o.alternate, o);
            break;
          case 24:
            Cs(a, o), u & 2048 && fc(o.alternate, o);
            break;
          default:
            Cs(a, o);
        }
        n = n.sibling;
      }
  }
  var Os = 8192;
  function va(t) {
    if (t.subtreeFlags & Os)
      for (t = t.child; t !== null; ) Yp(t), (t = t.sibling);
  }
  function Yp(t) {
    switch (t.tag) {
      case 26:
        va(t),
          t.flags & Os &&
            t.memoizedState !== null &&
            HT($e, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        va(t);
        break;
      case 3:
      case 4:
        var n = $e;
        ($e = Mo(t.stateNode.containerInfo)), va(t), ($e = n);
        break;
      case 22:
        t.memoizedState === null &&
          ((n = t.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Os), (Os = 16777216), va(t), (Os = n))
            : va(t));
        break;
      default:
        va(t);
    }
  }
  function Gp(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do (n = t.sibling), (t.sibling = null), (t = n);
      while (t !== null);
    }
  }
  function Ds(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          (ee = o), Kp(o, t);
        }
      Gp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Xp(t), (t = t.sibling);
  }
  function Xp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ds(t), t.flags & 2048 && $n(9, t, t.return);
        break;
      case 3:
        Ds(t);
        break;
      case 12:
        Ds(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null &&
        n._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -3), bo(t))
          : Ds(t);
        break;
      default:
        Ds(t);
    }
  }
  function bo(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          (ee = o), Kp(o, t);
        }
      Gp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          $n(8, n, n.return), bo(n);
          break;
        case 22:
          (a = n.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), bo(n));
          break;
        default:
          bo(n);
      }
      t = t.sibling;
    }
  }
  function Kp(t, n) {
    for (; ee !== null; ) {
      var a = ee;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          $n(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          hs(a.memoizedState.cache);
      }
      if (((o = a.child), o !== null)) (o.return = a), (ee = o);
      else
        t: for (a = t; ee !== null; ) {
          o = ee;
          var u = o.sibling,
            h = o.return;
          if ((Vp(o), o === a)) {
            ee = null;
            break t;
          }
          if (u !== null) {
            (u.return = h), (ee = u);
            break t;
          }
          ee = h;
        }
    }
  }
  var nT = {
      getCacheForType: function (t) {
        var n = ue(Jt),
          a = n.data.get(t);
        return a === void 0 && ((a = t()), n.data.set(t, a)), a;
      },
    },
    iT = typeof WeakMap == "function" ? WeakMap : Map,
    _t = 0,
    Mt = null,
    yt = null,
    bt = 0,
    wt = 0,
    Ne = null,
    In = !1,
    ba = !1,
    hc = !1,
    Nn = 0,
    Pt = 0,
    ti = 0,
    Ni = 0,
    dc = 0,
    Pe = 0,
    xa = 0,
    Ms = null,
    Te = null,
    mc = !1,
    pc = 0,
    xo = 1 / 0,
    To = null,
    ei = null,
    ae = 0,
    ni = null,
    Ta = null,
    Sa = 0,
    yc = 0,
    gc = null,
    Fp = null,
    Ns = 0,
    vc = null;
  function je() {
    if ((_t & 2) !== 0 && bt !== 0) return bt & -bt;
    if (H.T !== null) {
      var t = ua;
      return t !== 0 ? t : wc();
    }
    return ud();
  }
  function Qp() {
    Pe === 0 && (Pe = (bt & 536870912) === 0 || Et ? sd() : 536870912);
    var t = qe.current;
    return t !== null && (t.flags |= 32), Pe;
  }
  function Le(t, n, a) {
    ((t === Mt && (wt === 2 || wt === 9)) || t.cancelPendingCommit !== null) &&
      (Ea(t, 0), ii(t, bt, Pe, !1)),
      $a(t, a),
      ((_t & 2) === 0 || t !== Mt) &&
        (t === Mt &&
          ((_t & 2) === 0 && (Ni |= a), Pt === 4 && ii(t, bt, Pe, !1)),
        fn(t));
  }
  function Zp(t, n, a) {
    if ((_t & 6) !== 0) throw Error(r(327));
    var o = (!a && (n & 124) === 0 && (n & t.expiredLanes) === 0) || Za(t, n),
      u = o ? rT(t, n) : Tc(t, n, !0),
      h = o;
    do {
      if (u === 0) {
        ba && !o && ii(t, n, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), h && !aT(a))) {
          (u = Tc(t, n, !1)), (h = !1);
          continue;
        }
        if (u === 2) {
          if (((h = n), t.errorRecoveryDisabledLanes & h)) var g = 0;
          else
            (g = t.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            n = g;
            t: {
              var v = t;
              u = Ms;
              var S = v.current.memoizedState.isDehydrated;
              if ((S && (Ea(v, g).flags |= 256), (g = Tc(v, g, !1)), g !== 2)) {
                if (hc && !S) {
                  (v.errorRecoveryDisabledLanes |= h), (Ni |= h), (u = 4);
                  break t;
                }
                (h = Te),
                  (Te = u),
                  h !== null && (Te === null ? (Te = h) : Te.push.apply(Te, h));
              }
              u = g;
            }
            if (((h = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ea(t, 0), ii(t, n, 0, !0);
          break;
        }
        t: {
          switch (((o = t), (h = u), h)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              ii(o, n, Pe, !In);
              break t;
            case 2:
              Te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((n & 62914560) === n && ((u = pc + 300 - rn()), 10 < u)) {
            if ((ii(o, n, Pe, !In), Mr(o, 0, !0) !== 0)) break t;
            o.timeoutHandle = _y(
              $p.bind(null, o, a, Te, To, mc, n, Pe, Ni, xa, In, h, 2, -0, 0),
              u
            );
            break t;
          }
          $p(o, a, Te, To, mc, n, Pe, Ni, xa, In, h, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    fn(t);
  }
  function $p(t, n, a, o, u, h, g, v, S, L, q, Y, U, V) {
    if (
      ((t.timeoutHandle = -1),
      (Y = n.subtreeFlags),
      (Y & 8192 || (Y & 16785408) === 16785408) &&
        ((ks = { stylesheets: null, count: 0, unsuspend: kT }),
        Yp(n),
        (Y = qT()),
        Y !== null))
    ) {
      (t.cancelPendingCommit = Y(
        iy.bind(null, t, n, h, a, o, u, g, v, S, q, 1, U, V)
      )),
        ii(t, h, g, !L);
      return;
    }
    iy(t, n, h, a, o, u, g, v, S);
  }
  function aT(t) {
    for (var n = t; ; ) {
      var a = n.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        n.flags & 16384 &&
        ((a = n.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var o = 0; o < a.length; o++) {
          var u = a[o],
            h = u.getSnapshot;
          u = u.value;
          try {
            if (!Ce(h(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null))
        (a.return = n), (n = a);
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function ii(t, n, a, o) {
    (n &= ~dc),
      (n &= ~Ni),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      o && (t.warmLanes |= n),
      (o = t.expirationTimes);
    for (var u = n; 0 < u; ) {
      var h = 31 - Re(u),
        g = 1 << h;
      (o[h] = -1), (u &= ~g);
    }
    a !== 0 && od(t, a, n);
  }
  function So() {
    return (_t & 6) === 0 ? (js(0), !1) : !0;
  }
  function bc() {
    if (yt !== null) {
      if (wt === 0) var t = yt.return;
      else (t = yt), (_n = Ai = null), Uu(t), (pa = null), (Es = 0), (t = yt);
      for (; t !== null; ) Op(t.alternate, t), (t = t.return);
      yt = null;
    }
  }
  function Ea(t, n) {
    var a = t.timeoutHandle;
    a !== -1 && ((t.timeoutHandle = -1), ST(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      bc(),
      (Mt = t),
      (yt = a = Tn(t.current, null)),
      (bt = n),
      (wt = 0),
      (Ne = null),
      (In = !1),
      (ba = Za(t, n)),
      (hc = !1),
      (xa = Pe = dc = Ni = ti = Pt = 0),
      (Te = Ms = null),
      (mc = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements, o &= n; 0 < o; ) {
        var u = 31 - Re(o),
          h = 1 << u;
        (n |= t[u]), (o &= ~h);
      }
    return (Nn = n), Yr(), a;
  }
  function Jp(t, n) {
    (mt = null),
      (H.H = lo),
      n === ms || n === Wr
        ? ((n = mm()), (wt = 3))
        : n === fm
        ? ((n = mm()), (wt = 4))
        : (wt =
            n === pp
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (Ne = n),
      yt === null && ((Pt = 1), mo(t, Ve(n, t.current)));
  }
  function Wp() {
    var t = H.H;
    return (H.H = lo), t === null ? lo : t;
  }
  function Ip() {
    var t = H.A;
    return (H.A = nT), t;
  }
  function xc() {
    (Pt = 4),
      In || ((bt & 4194048) !== bt && qe.current !== null) || (ba = !0),
      ((ti & 134217727) === 0 && (Ni & 134217727) === 0) ||
        Mt === null ||
        ii(Mt, bt, Pe, !1);
  }
  function Tc(t, n, a) {
    var o = _t;
    _t |= 2;
    var u = Wp(),
      h = Ip();
    (Mt !== t || bt !== n) && ((To = null), Ea(t, n)), (n = !1);
    var g = Pt;
    t: do
      try {
        if (wt !== 0 && yt !== null) {
          var v = yt,
            S = Ne;
          switch (wt) {
            case 8:
              bc(), (g = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              qe.current === null && (n = !0);
              var L = wt;
              if (((wt = 0), (Ne = null), _a(t, v, S, L), a && ba)) {
                g = 0;
                break t;
              }
              break;
            default:
              (L = wt), (wt = 0), (Ne = null), _a(t, v, S, L);
          }
        }
        sT(), (g = Pt);
        break;
      } catch (q) {
        Jp(t, q);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (_n = Ai = null),
      (_t = o),
      (H.H = u),
      (H.A = h),
      yt === null && ((Mt = null), (bt = 0), Yr()),
      g
    );
  }
  function sT() {
    for (; yt !== null; ) ty(yt);
  }
  function rT(t, n) {
    var a = _t;
    _t |= 2;
    var o = Wp(),
      u = Ip();
    Mt !== t || bt !== n
      ? ((To = null), (xo = rn() + 500), Ea(t, n))
      : (ba = Za(t, n));
    t: do
      try {
        if (wt !== 0 && yt !== null) {
          n = yt;
          var h = Ne;
          e: switch (wt) {
            case 1:
              (wt = 0), (Ne = null), _a(t, n, h, 1);
              break;
            case 2:
            case 9:
              if (hm(h)) {
                (wt = 0), (Ne = null), ey(n);
                break;
              }
              (n = function () {
                (wt !== 2 && wt !== 9) || Mt !== t || (wt = 7), fn(t);
              }),
                h.then(n, n);
              break t;
            case 3:
              wt = 7;
              break t;
            case 4:
              wt = 5;
              break t;
            case 7:
              hm(h)
                ? ((wt = 0), (Ne = null), ey(n))
                : ((wt = 0), (Ne = null), _a(t, n, h, 7));
              break;
            case 5:
              var g = null;
              switch (yt.tag) {
                case 26:
                  g = yt.memoizedState;
                case 5:
                case 27:
                  var v = yt;
                  if (!g || Uy(g)) {
                    (wt = 0), (Ne = null);
                    var S = v.sibling;
                    if (S !== null) yt = S;
                    else {
                      var L = v.return;
                      L !== null ? ((yt = L), Eo(L)) : (yt = null);
                    }
                    break e;
                  }
              }
              (wt = 0), (Ne = null), _a(t, n, h, 5);
              break;
            case 6:
              (wt = 0), (Ne = null), _a(t, n, h, 6);
              break;
            case 8:
              bc(), (Pt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        oT();
        break;
      } catch (q) {
        Jp(t, q);
      }
    while (!0);
    return (
      (_n = Ai = null),
      (H.H = o),
      (H.A = u),
      (_t = a),
      yt !== null ? 0 : ((Mt = null), (bt = 0), Yr(), Pt)
    );
  }
  function oT() {
    for (; yt !== null && !Ox(); ) ty(yt);
  }
  function ty(t) {
    var n = Rp(t.alternate, t, Nn);
    (t.memoizedProps = t.pendingProps), n === null ? Eo(t) : (yt = n);
  }
  function ey(t) {
    var n = t,
      a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Tp(a, n, n.pendingProps, n.type, void 0, bt);
        break;
      case 11:
        n = Tp(a, n, n.pendingProps, n.type.render, n.ref, bt);
        break;
      case 5:
        Uu(n);
      default:
        Op(a, n), (n = yt = nm(n, Nn)), (n = Rp(a, n, Nn));
    }
    (t.memoizedProps = t.pendingProps), n === null ? Eo(t) : (yt = n);
  }
  function _a(t, n, a, o) {
    (_n = Ai = null), Uu(n), (pa = null), (Es = 0);
    var u = n.return;
    try {
      if ($1(t, u, n, a, bt)) {
        (Pt = 1), mo(t, Ve(a, t.current)), (yt = null);
        return;
      }
    } catch (h) {
      if (u !== null) throw ((yt = u), h);
      (Pt = 1), mo(t, Ve(a, t.current)), (yt = null);
      return;
    }
    n.flags & 32768
      ? (Et || o === 1
          ? (t = !0)
          : ba || (bt & 536870912) !== 0
          ? (t = !1)
          : ((In = t = !0),
            (o === 2 || o === 9 || o === 3 || o === 6) &&
              ((o = qe.current),
              o !== null && o.tag === 13 && (o.flags |= 16384))),
        ny(n, t))
      : Eo(n);
  }
  function Eo(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        ny(n, In);
        return;
      }
      t = n.return;
      var a = W1(n.alternate, n, Nn);
      if (a !== null) {
        yt = a;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        yt = n;
        return;
      }
      yt = n = t;
    } while (n !== null);
    Pt === 0 && (Pt = 5);
  }
  function ny(t, n) {
    do {
      var a = I1(t.alternate, t);
      if (a !== null) {
        (a.flags &= 32767), (yt = a);
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        yt = t;
        return;
      }
      yt = t = a;
    } while (t !== null);
    (Pt = 6), (yt = null);
  }
  function iy(t, n, a, o, u, h, g, v, S) {
    t.cancelPendingCommit = null;
    do _o();
    while (ae !== 0);
    if ((_t & 6) !== 0) throw Error(r(327));
    if (n !== null) {
      if (n === t.current) throw Error(r(177));
      if (
        ((h = n.lanes | n.childLanes),
        (h |= fu),
        kx(t, a, h, g, v, S),
        t === Mt && ((yt = Mt = null), (bt = 0)),
        (Ta = n),
        (ni = t),
        (Sa = a),
        (yc = h),
        (gc = u),
        (Fp = o),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            fT(Cr, function () {
              return ly(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (o = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || o)
      ) {
        (o = H.T), (H.T = null), (u = F.p), (F.p = 2), (g = _t), (_t |= 4);
        try {
          tT(t, n, a);
        } finally {
          (_t = g), (F.p = u), (H.T = o);
        }
      }
      (ae = 1), ay(), sy(), ry();
    }
  }
  function ay() {
    if (ae === 1) {
      ae = 0;
      var t = ni,
        n = Ta,
        a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        (a = H.T), (H.T = null);
        var o = F.p;
        F.p = 2;
        var u = _t;
        _t |= 4;
        try {
          Hp(n, t);
          var h = jc,
            g = Kd(t.containerInfo),
            v = h.focusedElem,
            S = h.selectionRange;
          if (
            g !== v &&
            v &&
            v.ownerDocument &&
            Xd(v.ownerDocument.documentElement, v)
          ) {
            if (S !== null && ru(v)) {
              var L = S.start,
                q = S.end;
              if ((q === void 0 && (q = L), "selectionStart" in v))
                (v.selectionStart = L),
                  (v.selectionEnd = Math.min(q, v.value.length));
              else {
                var Y = v.ownerDocument || document,
                  U = (Y && Y.defaultView) || window;
                if (U.getSelection) {
                  var V = U.getSelection(),
                    rt = v.textContent.length,
                    at = Math.min(S.start, rt),
                    Ct = S.end === void 0 ? at : Math.min(S.end, rt);
                  !V.extend && at > Ct && ((g = Ct), (Ct = at), (at = g));
                  var D = Gd(v, at),
                    w = Gd(v, Ct);
                  if (
                    D &&
                    w &&
                    (V.rangeCount !== 1 ||
                      V.anchorNode !== D.node ||
                      V.anchorOffset !== D.offset ||
                      V.focusNode !== w.node ||
                      V.focusOffset !== w.offset)
                  ) {
                    var j = Y.createRange();
                    j.setStart(D.node, D.offset),
                      V.removeAllRanges(),
                      at > Ct
                        ? (V.addRange(j), V.extend(w.node, w.offset))
                        : (j.setEnd(w.node, w.offset), V.addRange(j));
                  }
                }
              }
            }
            for (Y = [], V = v; (V = V.parentNode); )
              V.nodeType === 1 &&
                Y.push({ element: V, left: V.scrollLeft, top: V.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < Y.length;
              v++
            ) {
              var P = Y[v];
              (P.element.scrollLeft = P.left), (P.element.scrollTop = P.top);
            }
          }
          (Uo = !!Nc), (jc = Nc = null);
        } finally {
          (_t = u), (F.p = o), (H.T = a);
        }
      }
      (t.current = n), (ae = 2);
    }
  }
  function sy() {
    if (ae === 2) {
      ae = 0;
      var t = ni,
        n = Ta,
        a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        (a = H.T), (H.T = null);
        var o = F.p;
        F.p = 2;
        var u = _t;
        _t |= 4;
        try {
          Up(t, n.alternate, n);
        } finally {
          (_t = u), (F.p = o), (H.T = a);
        }
      }
      ae = 3;
    }
  }
  function ry() {
    if (ae === 4 || ae === 3) {
      (ae = 0), Dx();
      var t = ni,
        n = Ta,
        a = Sa,
        o = Fp;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (ae = 5)
        : ((ae = 0), (Ta = ni = null), oy(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (ei = null),
        kl(a),
        (n = n.stateNode),
        Ae && typeof Ae.onCommitFiberRoot == "function")
      )
        try {
          Ae.onCommitFiberRoot(Qa, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        (n = H.T), (u = F.p), (F.p = 2), (H.T = null);
        try {
          for (var h = t.onRecoverableError, g = 0; g < o.length; g++) {
            var v = o[g];
            h(v.value, { componentStack: v.stack });
          }
        } finally {
          (H.T = n), (F.p = u);
        }
      }
      (Sa & 3) !== 0 && _o(),
        fn(t),
        (u = t.pendingLanes),
        (a & 4194090) !== 0 && (u & 42) !== 0
          ? t === vc
            ? Ns++
            : ((Ns = 0), (vc = t))
          : (Ns = 0),
        js(0);
    }
  }
  function oy(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), hs(n)));
  }
  function _o(t) {
    return ay(), sy(), ry(), ly();
  }
  function ly() {
    if (ae !== 5) return !1;
    var t = ni,
      n = yc;
    yc = 0;
    var a = kl(Sa),
      o = H.T,
      u = F.p;
    try {
      (F.p = 32 > a ? 32 : a), (H.T = null), (a = gc), (gc = null);
      var h = ni,
        g = Sa;
      if (((ae = 0), (Ta = ni = null), (Sa = 0), (_t & 6) !== 0))
        throw Error(r(331));
      var v = _t;
      if (
        ((_t |= 4),
        Xp(h.current),
        Pp(h, h.current, g, a),
        (_t = v),
        js(0, !1),
        Ae && typeof Ae.onPostCommitFiberRoot == "function")
      )
        try {
          Ae.onPostCommitFiberRoot(Qa, h);
        } catch {}
      return !0;
    } finally {
      (F.p = u), (H.T = o), oy(t, n);
    }
  }
  function uy(t, n, a) {
    (n = Ve(a, n)),
      (n = $u(t.stateNode, n, 2)),
      (t = Kn(t, n, 2)),
      t !== null && ($a(t, 2), fn(t));
  }
  function Dt(t, n, a) {
    if (t.tag === 3) uy(t, t, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          uy(n, t, a);
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (ei === null || !ei.has(o)))
          ) {
            (t = Ve(a, t)),
              (a = dp(2)),
              (o = Kn(n, a, 2)),
              o !== null && (mp(a, o, n, t), $a(o, 2), fn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Sc(t, n, a) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new iT();
      var u = new Set();
      o.set(n, u);
    } else (u = o.get(n)), u === void 0 && ((u = new Set()), o.set(n, u));
    u.has(a) ||
      ((hc = !0), u.add(a), (t = lT.bind(null, t, n, a)), n.then(t, t));
  }
  function lT(t, n, a) {
    var o = t.pingCache;
    o !== null && o.delete(n),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      Mt === t &&
        (bt & a) === a &&
        (Pt === 4 || (Pt === 3 && (bt & 62914560) === bt && 300 > rn() - pc)
          ? (_t & 2) === 0 && Ea(t, 0)
          : (dc |= a),
        xa === bt && (xa = 0)),
      fn(t);
  }
  function cy(t, n) {
    n === 0 && (n = rd()), (t = sa(t, n)), t !== null && ($a(t, n), fn(t));
  }
  function uT(t) {
    var n = t.memoizedState,
      a = 0;
    n !== null && (a = n.retryLane), cy(t, a);
  }
  function cT(t, n) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var o = t.stateNode,
          u = t.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    o !== null && o.delete(n), cy(t, a);
  }
  function fT(t, n) {
    return Bl(t, n);
  }
  var wo = null,
    wa = null,
    Ec = !1,
    Ao = !1,
    _c = !1,
    ji = 0;
  function fn(t) {
    t !== wa &&
      t.next === null &&
      (wa === null ? (wo = wa = t) : (wa = wa.next = t)),
      (Ao = !0),
      Ec || ((Ec = !0), dT());
  }
  function js(t, n) {
    if (!_c && Ao) {
      _c = !0;
      do
        for (var a = !1, o = wo; o !== null; ) {
          if (t !== 0) {
            var u = o.pendingLanes;
            if (u === 0) var h = 0;
            else {
              var g = o.suspendedLanes,
                v = o.pingedLanes;
              (h = (1 << (31 - Re(42 | t) + 1)) - 1),
                (h &= u & ~(g & ~v)),
                (h = h & 201326741 ? (h & 201326741) | 1 : h ? h | 2 : 0);
            }
            h !== 0 && ((a = !0), my(o, h));
          } else
            (h = bt),
              (h = Mr(
                o,
                o === Mt ? h : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1
              )),
              (h & 3) === 0 || Za(o, h) || ((a = !0), my(o, h));
          o = o.next;
        }
      while (a);
      _c = !1;
    }
  }
  function hT() {
    fy();
  }
  function fy() {
    Ao = Ec = !1;
    var t = 0;
    ji !== 0 && (TT() && (t = ji), (ji = 0));
    for (var n = rn(), a = null, o = wo; o !== null; ) {
      var u = o.next,
        h = hy(o, n);
      h === 0
        ? ((o.next = null),
          a === null ? (wo = u) : (a.next = u),
          u === null && (wa = a))
        : ((a = o), (t !== 0 || (h & 3) !== 0) && (Ao = !0)),
        (o = u);
    }
    js(t);
  }
  function hy(t, n) {
    for (
      var a = t.suspendedLanes,
        o = t.pingedLanes,
        u = t.expirationTimes,
        h = t.pendingLanes & -62914561;
      0 < h;

    ) {
      var g = 31 - Re(h),
        v = 1 << g,
        S = u[g];
      S === -1
        ? ((v & a) === 0 || (v & o) !== 0) && (u[g] = zx(v, n))
        : S <= n && (t.expiredLanes |= v),
        (h &= ~v);
    }
    if (
      ((n = Mt),
      (a = bt),
      (a = Mr(
        t,
        t === n ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (o = t.callbackNode),
      a === 0 ||
        (t === n && (wt === 2 || wt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && Ul(o),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Za(t, a)) {
      if (((n = a & -a), n === t.callbackPriority)) return n;
      switch ((o !== null && Ul(o), kl(a))) {
        case 2:
        case 8:
          a = id;
          break;
        case 32:
          a = Cr;
          break;
        case 268435456:
          a = ad;
          break;
        default:
          a = Cr;
      }
      return (
        (o = dy.bind(null, t)),
        (a = Bl(a, o)),
        (t.callbackPriority = n),
        (t.callbackNode = a),
        n
      );
    }
    return (
      o !== null && o !== null && Ul(o),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function dy(t, n) {
    if (ae !== 0 && ae !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var a = t.callbackNode;
    if (_o() && t.callbackNode !== a) return null;
    var o = bt;
    return (
      (o = Mr(
        t,
        t === Mt ? o : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      o === 0
        ? null
        : (Zp(t, o, n),
          hy(t, rn()),
          t.callbackNode != null && t.callbackNode === a
            ? dy.bind(null, t)
            : null)
    );
  }
  function my(t, n) {
    if (_o()) return null;
    Zp(t, n, !0);
  }
  function dT() {
    ET(function () {
      (_t & 6) !== 0 ? Bl(nd, hT) : fy();
    });
  }
  function wc() {
    return ji === 0 && (ji = sd()), ji;
  }
  function py(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Ur("" + t);
  }
  function yy(t, n) {
    var a = n.ownerDocument.createElement("input");
    return (
      (a.name = n.name),
      (a.value = n.value),
      t.id && a.setAttribute("form", t.id),
      n.parentNode.insertBefore(a, n),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function mT(t, n, a, o, u) {
    if (n === "submit" && a && a.stateNode === u) {
      var h = py((u[ge] || null).action),
        g = o.submitter;
      g &&
        ((n = (n = g[ge] || null)
          ? py(n.formAction)
          : g.getAttribute("formAction")),
        n !== null && ((h = n), (g = null)));
      var v = new Hr("action", "action", null, o, u);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (ji !== 0) {
                  var S = g ? yy(u, g) : new FormData(u);
                  Xu(
                    a,
                    { pending: !0, data: S, method: u.method, action: h },
                    null,
                    S
                  );
                }
              } else
                typeof h == "function" &&
                  (v.preventDefault(),
                  (S = g ? yy(u, g) : new FormData(u)),
                  Xu(
                    a,
                    { pending: !0, data: S, method: u.method, action: h },
                    h,
                    S
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Ac = 0; Ac < cu.length; Ac++) {
    var Rc = cu[Ac],
      pT = Rc.toLowerCase(),
      yT = Rc[0].toUpperCase() + Rc.slice(1);
    Ze(pT, "on" + yT);
  }
  Ze(Zd, "onAnimationEnd"),
    Ze($d, "onAnimationIteration"),
    Ze(Jd, "onAnimationStart"),
    Ze("dblclick", "onDoubleClick"),
    Ze("focusin", "onFocus"),
    Ze("focusout", "onBlur"),
    Ze(j1, "onTransitionRun"),
    Ze(L1, "onTransitionStart"),
    Ze(B1, "onTransitionCancel"),
    Ze(Wd, "onTransitionEnd"),
    Zi("onMouseEnter", ["mouseout", "mouseover"]),
    Zi("onMouseLeave", ["mouseout", "mouseover"]),
    Zi("onPointerEnter", ["pointerout", "pointerover"]),
    Zi("onPointerLeave", ["pointerout", "pointerover"]),
    gi(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    gi(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    gi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    gi(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    gi(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    gi(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ls =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    gT = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ls)
    );
  function gy(t, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var o = t[a],
        u = o.event;
      o = o.listeners;
      t: {
        var h = void 0;
        if (n)
          for (var g = o.length - 1; 0 <= g; g--) {
            var v = o[g],
              S = v.instance,
              L = v.currentTarget;
            if (((v = v.listener), S !== h && u.isPropagationStopped()))
              break t;
            (h = v), (u.currentTarget = L);
            try {
              h(u);
            } catch (q) {
              ho(q);
            }
            (u.currentTarget = null), (h = S);
          }
        else
          for (g = 0; g < o.length; g++) {
            if (
              ((v = o[g]),
              (S = v.instance),
              (L = v.currentTarget),
              (v = v.listener),
              S !== h && u.isPropagationStopped())
            )
              break t;
            (h = v), (u.currentTarget = L);
            try {
              h(u);
            } catch (q) {
              ho(q);
            }
            (u.currentTarget = null), (h = S);
          }
      }
    }
  }
  function gt(t, n) {
    var a = n[Hl];
    a === void 0 && (a = n[Hl] = new Set());
    var o = t + "__bubble";
    a.has(o) || (vy(n, t, 2, !1), a.add(o));
  }
  function Cc(t, n, a) {
    var o = 0;
    n && (o |= 4), vy(a, t, o, n);
  }
  var Ro = "_reactListening" + Math.random().toString(36).slice(2);
  function Oc(t) {
    if (!t[Ro]) {
      (t[Ro] = !0),
        fd.forEach(function (a) {
          a !== "selectionchange" && (gT.has(a) || Cc(a, !1, t), Cc(a, !0, t));
        });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[Ro] || ((n[Ro] = !0), Cc("selectionchange", !1, n));
    }
  }
  function vy(t, n, a, o) {
    switch (Py(n)) {
      case 2:
        var u = GT;
        break;
      case 8:
        u = XT;
        break;
      default:
        u = Yc;
    }
    (a = u.bind(null, n, a, t)),
      (u = void 0),
      !Jl ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (u = !0),
      o
        ? u !== void 0
          ? t.addEventListener(n, a, { capture: !0, passive: u })
          : t.addEventListener(n, a, !0)
        : u !== void 0
        ? t.addEventListener(n, a, { passive: u })
        : t.addEventListener(n, a, !1);
  }
  function Dc(t, n, a, o, u) {
    var h = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      t: for (;;) {
        if (o === null) return;
        var g = o.tag;
        if (g === 3 || g === 4) {
          var v = o.stateNode.containerInfo;
          if (v === u) break;
          if (g === 4)
            for (g = o.return; g !== null; ) {
              var S = g.tag;
              if ((S === 3 || S === 4) && g.stateNode.containerInfo === u)
                return;
              g = g.return;
            }
          for (; v !== null; ) {
            if (((g = Ki(v)), g === null)) return;
            if (((S = g.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              o = h = g;
              continue t;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    wd(function () {
      var L = h,
        q = Zl(a),
        Y = [];
      t: {
        var U = Id.get(t);
        if (U !== void 0) {
          var V = Hr,
            rt = t;
          switch (t) {
            case "keypress":
              if (zr(a) === 0) break t;
            case "keydown":
            case "keyup":
              V = f1;
              break;
            case "focusin":
              (rt = "focus"), (V = eu);
              break;
            case "focusout":
              (rt = "blur"), (V = eu);
              break;
            case "beforeblur":
            case "afterblur":
              V = eu;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Cd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Ix;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = m1;
              break;
            case Zd:
            case $d:
            case Jd:
              V = n1;
              break;
            case Wd:
              V = y1;
              break;
            case "scroll":
            case "scrollend":
              V = Jx;
              break;
            case "wheel":
              V = v1;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = a1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Dd;
              break;
            case "toggle":
            case "beforetoggle":
              V = x1;
          }
          var at = (n & 4) !== 0,
            Ct = !at && (t === "scroll" || t === "scrollend"),
            D = at ? (U !== null ? U + "Capture" : null) : U;
          at = [];
          for (var w = L, j; w !== null; ) {
            var P = w;
            if (
              ((j = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                j === null ||
                D === null ||
                ((P = Ia(w, D)), P != null && at.push(Bs(w, P, j))),
              Ct)
            )
              break;
            w = w.return;
          }
          0 < at.length &&
            ((U = new V(U, rt, null, a, q)),
            Y.push({ event: U, listeners: at }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((U = t === "mouseover" || t === "pointerover"),
            (V = t === "mouseout" || t === "pointerout"),
            U &&
              a !== Ql &&
              (rt = a.relatedTarget || a.fromElement) &&
              (Ki(rt) || rt[Xi]))
          )
            break t;
          if (
            (V || U) &&
            ((U =
              q.window === q
                ? q
                : (U = q.ownerDocument)
                ? U.defaultView || U.parentWindow
                : window),
            V
              ? ((rt = a.relatedTarget || a.toElement),
                (V = L),
                (rt = rt ? Ki(rt) : null),
                rt !== null &&
                  ((Ct = c(rt)),
                  (at = rt.tag),
                  rt !== Ct || (at !== 5 && at !== 27 && at !== 6)) &&
                  (rt = null))
              : ((V = null), (rt = L)),
            V !== rt)
          ) {
            if (
              ((at = Cd),
              (P = "onMouseLeave"),
              (D = "onMouseEnter"),
              (w = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((at = Dd),
                (P = "onPointerLeave"),
                (D = "onPointerEnter"),
                (w = "pointer")),
              (Ct = V == null ? U : Wa(V)),
              (j = rt == null ? U : Wa(rt)),
              (U = new at(P, w + "leave", V, a, q)),
              (U.target = Ct),
              (U.relatedTarget = j),
              (P = null),
              Ki(q) === L &&
                ((at = new at(D, w + "enter", rt, a, q)),
                (at.target = j),
                (at.relatedTarget = Ct),
                (P = at)),
              (Ct = P),
              V && rt)
            )
              e: {
                for (at = V, D = rt, w = 0, j = at; j; j = Aa(j)) w++;
                for (j = 0, P = D; P; P = Aa(P)) j++;
                for (; 0 < w - j; ) (at = Aa(at)), w--;
                for (; 0 < j - w; ) (D = Aa(D)), j--;
                for (; w--; ) {
                  if (at === D || (D !== null && at === D.alternate)) break e;
                  (at = Aa(at)), (D = Aa(D));
                }
                at = null;
              }
            else at = null;
            V !== null && by(Y, U, V, at, !1),
              rt !== null && Ct !== null && by(Y, Ct, rt, at, !0);
          }
        }
        t: {
          if (
            ((U = L ? Wa(L) : window),
            (V = U.nodeName && U.nodeName.toLowerCase()),
            V === "select" || (V === "input" && U.type === "file"))
          )
            var et = zd;
          else if (Ud(U))
            if (kd) et = D1;
            else {
              et = C1;
              var pt = R1;
            }
          else
            (V = U.nodeName),
              !V ||
              V.toLowerCase() !== "input" ||
              (U.type !== "checkbox" && U.type !== "radio")
                ? L && Fl(L.elementType) && (et = zd)
                : (et = O1);
          if (et && (et = et(t, L))) {
            Vd(Y, et, a, q);
            break t;
          }
          pt && pt(t, U, L),
            t === "focusout" &&
              L &&
              U.type === "number" &&
              L.memoizedProps.value != null &&
              Kl(U, "number", U.value);
        }
        switch (((pt = L ? Wa(L) : window), t)) {
          case "focusin":
            (Ud(pt) || pt.contentEditable === "true") &&
              ((na = pt), (ou = L), (os = null));
            break;
          case "focusout":
            os = ou = na = null;
            break;
          case "mousedown":
            lu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (lu = !1), Fd(Y, a, q);
            break;
          case "selectionchange":
            if (N1) break;
          case "keydown":
          case "keyup":
            Fd(Y, a, q);
        }
        var nt;
        if (iu)
          t: {
            switch (t) {
              case "compositionstart":
                var st = "onCompositionStart";
                break t;
              case "compositionend":
                st = "onCompositionEnd";
                break t;
              case "compositionupdate":
                st = "onCompositionUpdate";
                break t;
            }
            st = void 0;
          }
        else
          ea
            ? Ld(t, a) && (st = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (st = "onCompositionStart");
        st &&
          (Md &&
            a.locale !== "ko" &&
            (ea || st !== "onCompositionStart"
              ? st === "onCompositionEnd" && ea && (nt = Ad())
              : ((Pn = q),
                (Wl = "value" in Pn ? Pn.value : Pn.textContent),
                (ea = !0))),
          (pt = Co(L, st)),
          0 < pt.length &&
            ((st = new Od(st, t, null, a, q)),
            Y.push({ event: st, listeners: pt }),
            nt
              ? (st.data = nt)
              : ((nt = Bd(a)), nt !== null && (st.data = nt)))),
          (nt = S1 ? E1(t, a) : _1(t, a)) &&
            ((st = Co(L, "onBeforeInput")),
            0 < st.length &&
              ((pt = new Od("onBeforeInput", "beforeinput", null, a, q)),
              Y.push({ event: pt, listeners: st }),
              (pt.data = nt))),
          mT(Y, t, L, a, q);
      }
      gy(Y, n);
    });
  }
  function Bs(t, n, a) {
    return { instance: t, listener: n, currentTarget: a };
  }
  function Co(t, n) {
    for (var a = n + "Capture", o = []; t !== null; ) {
      var u = t,
        h = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          h === null ||
          ((u = Ia(t, a)),
          u != null && o.unshift(Bs(t, u, h)),
          (u = Ia(t, n)),
          u != null && o.push(Bs(t, u, h))),
        t.tag === 3)
      )
        return o;
      t = t.return;
    }
    return [];
  }
  function Aa(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function by(t, n, a, o, u) {
    for (var h = n._reactName, g = []; a !== null && a !== o; ) {
      var v = a,
        S = v.alternate,
        L = v.stateNode;
      if (((v = v.tag), S !== null && S === o)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        L === null ||
        ((S = L),
        u
          ? ((L = Ia(a, h)), L != null && g.unshift(Bs(a, L, S)))
          : u || ((L = Ia(a, h)), L != null && g.push(Bs(a, L, S)))),
        (a = a.return);
    }
    g.length !== 0 && t.push({ event: n, listeners: g });
  }
  var vT = /\r\n?/g,
    bT = /\u0000|\uFFFD/g;
  function xy(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        vT,
        `
`
      )
      .replace(bT, "");
  }
  function Ty(t, n) {
    return (n = xy(n)), xy(t) === n;
  }
  function Oo() {}
  function Rt(t, n, a, o, u, h) {
    switch (a) {
      case "children":
        typeof o == "string"
          ? n === "body" || (n === "textarea" && o === "") || Wi(t, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            n !== "body" &&
            Wi(t, "" + o);
        break;
      case "className":
        jr(t, "class", o);
        break;
      case "tabIndex":
        jr(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        jr(t, a, o);
        break;
      case "style":
        Ed(t, o, h);
        break;
      case "data":
        if (n !== "object") {
          jr(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        (o = Ur("" + o)), t.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof h == "function" &&
            (a === "formAction"
              ? (n !== "input" && Rt(t, n, "name", u.name, u, null),
                Rt(t, n, "formEncType", u.formEncType, u, null),
                Rt(t, n, "formMethod", u.formMethod, u, null),
                Rt(t, n, "formTarget", u.formTarget, u, null))
              : (Rt(t, n, "encType", u.encType, u, null),
                Rt(t, n, "method", u.method, u, null),
                Rt(t, n, "target", u.target, u, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(a);
          break;
        }
        (o = Ur("" + o)), t.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (t.onclick = Oo);
        break;
      case "onScroll":
        o != null && gt("scroll", t);
        break;
      case "onScrollEnd":
        o != null && gt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
          if (((a = o.__html), a != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (a = Ur("" + o)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(a, "" + o)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0
          ? t.setAttribute(a, "")
          : o !== !1 &&
            o != null &&
            typeof o != "function" &&
            typeof o != "symbol"
          ? t.setAttribute(a, o)
          : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? t.setAttribute(a, o)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? t.removeAttribute(a)
          : t.setAttribute(a, o);
        break;
      case "popover":
        gt("beforetoggle", t), gt("toggle", t), Nr(t, "popover", o);
        break;
      case "xlinkActuate":
        bn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        bn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        bn(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        bn(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        bn(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        bn(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        bn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        bn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        bn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        Nr(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Zx.get(a) || a), Nr(t, a, o));
    }
  }
  function Mc(t, n, a, o, u, h) {
    switch (a) {
      case "style":
        Ed(t, o, h);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
          if (((a = o.__html), a != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? Wi(t, o)
          : (typeof o == "number" || typeof o == "bigint") && Wi(t, "" + o);
        break;
      case "onScroll":
        o != null && gt("scroll", t);
        break;
      case "onScrollEnd":
        o != null && gt("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = Oo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!hd.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (n = a.slice(2, u ? a.length - 7 : void 0)),
              (h = t[ge] || null),
              (h = h != null ? h[a] : null),
              typeof h == "function" && t.removeEventListener(n, h, u),
              typeof o == "function")
            ) {
              typeof h != "function" &&
                h !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(n, o, u);
              break t;
            }
            a in t
              ? (t[a] = o)
              : o === !0
              ? t.setAttribute(a, "")
              : Nr(t, a, o);
          }
    }
  }
  function se(t, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        gt("error", t), gt("load", t);
        var o = !1,
          u = !1,
          h;
        for (h in a)
          if (a.hasOwnProperty(h)) {
            var g = a[h];
            if (g != null)
              switch (h) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, n));
                default:
                  Rt(t, n, h, g, a, null);
              }
          }
        u && Rt(t, n, "srcSet", a.srcSet, a, null),
          o && Rt(t, n, "src", a.src, a, null);
        return;
      case "input":
        gt("invalid", t);
        var v = (h = g = u = null),
          S = null,
          L = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var q = a[o];
            if (q != null)
              switch (o) {
                case "name":
                  u = q;
                  break;
                case "type":
                  g = q;
                  break;
                case "checked":
                  S = q;
                  break;
                case "defaultChecked":
                  L = q;
                  break;
                case "value":
                  h = q;
                  break;
                case "defaultValue":
                  v = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null) throw Error(r(137, n));
                  break;
                default:
                  Rt(t, n, o, q, a, null);
              }
          }
        bd(t, h, v, S, L, g, u, !1), Lr(t);
        return;
      case "select":
        gt("invalid", t), (o = g = h = null);
        for (u in a)
          if (a.hasOwnProperty(u) && ((v = a[u]), v != null))
            switch (u) {
              case "value":
                h = v;
                break;
              case "defaultValue":
                g = v;
                break;
              case "multiple":
                o = v;
              default:
                Rt(t, n, u, v, a, null);
            }
        (n = h),
          (a = g),
          (t.multiple = !!o),
          n != null ? Ji(t, !!o, n, !1) : a != null && Ji(t, !!o, a, !0);
        return;
      case "textarea":
        gt("invalid", t), (h = u = o = null);
        for (g in a)
          if (a.hasOwnProperty(g) && ((v = a[g]), v != null))
            switch (g) {
              case "value":
                o = v;
                break;
              case "defaultValue":
                u = v;
                break;
              case "children":
                h = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(r(91));
                break;
              default:
                Rt(t, n, g, v, a, null);
            }
        Td(t, o, u, h), Lr(t);
        return;
      case "option":
        for (S in a)
          if (a.hasOwnProperty(S) && ((o = a[S]), o != null))
            switch (S) {
              case "selected":
                t.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Rt(t, n, S, o, a, null);
            }
        return;
      case "dialog":
        gt("beforetoggle", t), gt("toggle", t), gt("cancel", t), gt("close", t);
        break;
      case "iframe":
      case "object":
        gt("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ls.length; o++) gt(Ls[o], t);
        break;
      case "image":
        gt("error", t), gt("load", t);
        break;
      case "details":
        gt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        gt("error", t), gt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (L in a)
          if (a.hasOwnProperty(L) && ((o = a[L]), o != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, n));
              default:
                Rt(t, n, L, o, a, null);
            }
        return;
      default:
        if (Fl(n)) {
          for (q in a)
            a.hasOwnProperty(q) &&
              ((o = a[q]), o !== void 0 && Mc(t, n, q, o, a, void 0));
          return;
        }
    }
    for (v in a)
      a.hasOwnProperty(v) && ((o = a[v]), o != null && Rt(t, n, v, o, a, null));
  }
  function xT(t, n, a, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          h = null,
          g = null,
          v = null,
          S = null,
          L = null,
          q = null;
        for (V in a) {
          var Y = a[V];
          if (a.hasOwnProperty(V) && Y != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = Y;
              default:
                o.hasOwnProperty(V) || Rt(t, n, V, null, o, Y);
            }
        }
        for (var U in o) {
          var V = o[U];
          if (((Y = a[U]), o.hasOwnProperty(U) && (V != null || Y != null)))
            switch (U) {
              case "type":
                h = V;
                break;
              case "name":
                u = V;
                break;
              case "checked":
                L = V;
                break;
              case "defaultChecked":
                q = V;
                break;
              case "value":
                g = V;
                break;
              case "defaultValue":
                v = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(r(137, n));
                break;
              default:
                V !== Y && Rt(t, n, U, V, o, Y);
            }
        }
        Xl(t, g, v, S, L, q, h, u);
        return;
      case "select":
        V = g = v = U = null;
        for (h in a)
          if (((S = a[h]), a.hasOwnProperty(h) && S != null))
            switch (h) {
              case "value":
                break;
              case "multiple":
                V = S;
              default:
                o.hasOwnProperty(h) || Rt(t, n, h, null, o, S);
            }
        for (u in o)
          if (
            ((h = o[u]),
            (S = a[u]),
            o.hasOwnProperty(u) && (h != null || S != null))
          )
            switch (u) {
              case "value":
                U = h;
                break;
              case "defaultValue":
                v = h;
                break;
              case "multiple":
                g = h;
              default:
                h !== S && Rt(t, n, u, h, o, S);
            }
        (n = v),
          (a = g),
          (o = V),
          U != null
            ? Ji(t, !!a, U, !1)
            : !!o != !!a &&
              (n != null ? Ji(t, !!a, n, !0) : Ji(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        V = U = null;
        for (v in a)
          if (
            ((u = a[v]),
            a.hasOwnProperty(v) && u != null && !o.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Rt(t, n, v, null, o, u);
            }
        for (g in o)
          if (
            ((u = o[g]),
            (h = a[g]),
            o.hasOwnProperty(g) && (u != null || h != null))
          )
            switch (g) {
              case "value":
                U = u;
                break;
              case "defaultValue":
                V = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== h && Rt(t, n, g, u, o, h);
            }
        xd(t, U, V);
        return;
      case "option":
        for (var rt in a)
          if (
            ((U = a[rt]),
            a.hasOwnProperty(rt) && U != null && !o.hasOwnProperty(rt))
          )
            switch (rt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Rt(t, n, rt, null, o, U);
            }
        for (S in o)
          if (
            ((U = o[S]),
            (V = a[S]),
            o.hasOwnProperty(S) && U !== V && (U != null || V != null))
          )
            switch (S) {
              case "selected":
                t.selected =
                  U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                Rt(t, n, S, U, o, V);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var at in a)
          (U = a[at]),
            a.hasOwnProperty(at) &&
              U != null &&
              !o.hasOwnProperty(at) &&
              Rt(t, n, at, null, o, U);
        for (L in o)
          if (
            ((U = o[L]),
            (V = a[L]),
            o.hasOwnProperty(L) && U !== V && (U != null || V != null))
          )
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(r(137, n));
                break;
              default:
                Rt(t, n, L, U, o, V);
            }
        return;
      default:
        if (Fl(n)) {
          for (var Ct in a)
            (U = a[Ct]),
              a.hasOwnProperty(Ct) &&
                U !== void 0 &&
                !o.hasOwnProperty(Ct) &&
                Mc(t, n, Ct, void 0, o, U);
          for (q in o)
            (U = o[q]),
              (V = a[q]),
              !o.hasOwnProperty(q) ||
                U === V ||
                (U === void 0 && V === void 0) ||
                Mc(t, n, q, U, o, V);
          return;
        }
    }
    for (var D in a)
      (U = a[D]),
        a.hasOwnProperty(D) &&
          U != null &&
          !o.hasOwnProperty(D) &&
          Rt(t, n, D, null, o, U);
    for (Y in o)
      (U = o[Y]),
        (V = a[Y]),
        !o.hasOwnProperty(Y) ||
          U === V ||
          (U == null && V == null) ||
          Rt(t, n, Y, U, o, V);
  }
  var Nc = null,
    jc = null;
  function Do(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Sy(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ey(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function Lc(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Bc = null;
  function TT() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Bc
        ? !1
        : ((Bc = t), !0)
      : ((Bc = null), !1);
  }
  var _y = typeof setTimeout == "function" ? setTimeout : void 0,
    ST = typeof clearTimeout == "function" ? clearTimeout : void 0,
    wy = typeof Promise == "function" ? Promise : void 0,
    ET =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof wy < "u"
        ? function (t) {
            return wy.resolve(null).then(t).catch(_T);
          }
        : _y;
  function _T(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ai(t) {
    return t === "head";
  }
  function Ay(t, n) {
    var a = n,
      o = 0,
      u = 0;
    do {
      var h = a.nextSibling;
      if ((t.removeChild(a), h && h.nodeType === 8))
        if (((a = h.data), a === "/$")) {
          if (0 < o && 8 > o) {
            a = o;
            var g = t.ownerDocument;
            if ((a & 1 && Us(g.documentElement), a & 2 && Us(g.body), a & 4))
              for (a = g.head, Us(a), g = a.firstChild; g; ) {
                var v = g.nextSibling,
                  S = g.nodeName;
                g[Ja] ||
                  S === "SCRIPT" ||
                  S === "STYLE" ||
                  (S === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(g),
                  (g = v);
              }
          }
          if (u === 0) {
            t.removeChild(h), Gs(n);
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? u++
            : (o = a.charCodeAt(0) - 48);
      else o = 0;
      a = h;
    } while (a);
    Gs(n);
  }
  function Uc(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (((n = n.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Uc(a), ql(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function wT(t, n, a, o) {
    for (; t.nodeType === 1; ) {
      var u = a;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (o) {
        if (!t[Ja])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((h = t.getAttribute("rel")),
                h === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                h !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((h = t.getAttribute("src")),
                (h !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  h &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var h = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === h) return t;
      } else return t;
      if (((t = Je(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function AT(t, n, a) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = Je(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Vc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function RT(t, n) {
    var a = t.ownerDocument;
    if (t.data !== "$?" || a.readyState === "complete") n();
    else {
      var o = function () {
        n(), a.removeEventListener("DOMContentLoaded", o);
      };
      a.addEventListener("DOMContentLoaded", o), (t._reactRetry = o);
    }
  }
  function Je(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return t;
  }
  var zc = null;
  function Ry(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return t;
          n--;
        } else a === "/$" && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Cy(t, n, a) {
    switch (((n = Do(a)), t)) {
      case "html":
        if (((t = n.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = n.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = n.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Us(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    ql(t);
  }
  var Ye = new Map(),
    Oy = new Set();
  function Mo(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var jn = F.d;
  F.d = { f: CT, r: OT, D: DT, C: MT, L: NT, m: jT, X: BT, S: LT, M: UT };
  function CT() {
    var t = jn.f(),
      n = So();
    return t || n;
  }
  function OT(t) {
    var n = Fi(t);
    n !== null && n.tag === 5 && n.type === "form" ? Zm(n) : jn.r(t);
  }
  var Ra = typeof document > "u" ? null : document;
  function Dy(t, n, a) {
    var o = Ra;
    if (o && typeof n == "string" && n) {
      var u = Ue(n);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        Oy.has(u) ||
          (Oy.add(u),
          (t = { rel: t, crossOrigin: a, href: n }),
          o.querySelector(u) === null &&
            ((n = o.createElement("link")),
            se(n, "link", t),
            It(n),
            o.head.appendChild(n)));
    }
  }
  function DT(t) {
    jn.D(t), Dy("dns-prefetch", t, null);
  }
  function MT(t, n) {
    jn.C(t, n), Dy("preconnect", t, n);
  }
  function NT(t, n, a) {
    jn.L(t, n, a);
    var o = Ra;
    if (o && t && n) {
      var u = 'link[rel="preload"][as="' + Ue(n) + '"]';
      n === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + Ue(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + Ue(a.imageSizes) + '"]'))
        : (u += '[href="' + Ue(t) + '"]');
      var h = u;
      switch (n) {
        case "style":
          h = Ca(t);
          break;
        case "script":
          h = Oa(t);
      }
      Ye.has(h) ||
        ((t = y(
          {
            rel: "preload",
            href: n === "image" && a && a.imageSrcSet ? void 0 : t,
            as: n,
          },
          a
        )),
        Ye.set(h, t),
        o.querySelector(u) !== null ||
          (n === "style" && o.querySelector(Vs(h))) ||
          (n === "script" && o.querySelector(zs(h))) ||
          ((n = o.createElement("link")),
          se(n, "link", t),
          It(n),
          o.head.appendChild(n)));
    }
  }
  function jT(t, n) {
    jn.m(t, n);
    var a = Ra;
    if (a && t) {
      var o = n && typeof n.as == "string" ? n.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Ue(o) + '"][href="' + Ue(t) + '"]',
        h = u;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          h = Oa(t);
      }
      if (
        !Ye.has(h) &&
        ((t = y({ rel: "modulepreload", href: t }, n)),
        Ye.set(h, t),
        a.querySelector(u) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(zs(h))) return;
        }
        (o = a.createElement("link")),
          se(o, "link", t),
          It(o),
          a.head.appendChild(o);
      }
    }
  }
  function LT(t, n, a) {
    jn.S(t, n, a);
    var o = Ra;
    if (o && t) {
      var u = Qi(o).hoistableStyles,
        h = Ca(t);
      n = n || "default";
      var g = u.get(h);
      if (!g) {
        var v = { loading: 0, preload: null };
        if ((g = o.querySelector(Vs(h)))) v.loading = 5;
        else {
          (t = y({ rel: "stylesheet", href: t, "data-precedence": n }, a)),
            (a = Ye.get(h)) && kc(t, a);
          var S = (g = o.createElement("link"));
          It(S),
            se(S, "link", t),
            (S._p = new Promise(function (L, q) {
              (S.onload = L), (S.onerror = q);
            })),
            S.addEventListener("load", function () {
              v.loading |= 1;
            }),
            S.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            No(g, n, o);
        }
        (g = { type: "stylesheet", instance: g, count: 1, state: v }),
          u.set(h, g);
      }
    }
  }
  function BT(t, n) {
    jn.X(t, n);
    var a = Ra;
    if (a && t) {
      var o = Qi(a).hoistableScripts,
        u = Oa(t),
        h = o.get(u);
      h ||
        ((h = a.querySelector(zs(u))),
        h ||
          ((t = y({ src: t, async: !0 }, n)),
          (n = Ye.get(u)) && Hc(t, n),
          (h = a.createElement("script")),
          It(h),
          se(h, "link", t),
          a.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        o.set(u, h));
    }
  }
  function UT(t, n) {
    jn.M(t, n);
    var a = Ra;
    if (a && t) {
      var o = Qi(a).hoistableScripts,
        u = Oa(t),
        h = o.get(u);
      h ||
        ((h = a.querySelector(zs(u))),
        h ||
          ((t = y({ src: t, async: !0, type: "module" }, n)),
          (n = Ye.get(u)) && Hc(t, n),
          (h = a.createElement("script")),
          It(h),
          se(h, "link", t),
          a.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        o.set(u, h));
    }
  }
  function My(t, n, a, o) {
    var u = (u = lt.current) ? Mo(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((n = Ca(a.href)),
            (a = Qi(u).hoistableStyles),
            (o = a.get(n)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              a.set(n, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = Ca(a.href);
          var h = Qi(u).hoistableStyles,
            g = h.get(t);
          if (
            (g ||
              ((u = u.ownerDocument || u),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              h.set(t, g),
              (h = u.querySelector(Vs(t))) &&
                !h._p &&
                ((g.instance = h), (g.state.loading = 5)),
              Ye.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Ye.set(t, a),
                h || VT(u, t, a, g.state))),
            n && o === null)
          )
            throw Error(r(528, ""));
          return g;
        }
        if (n && o !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (n = a.async),
          (a = a.src),
          typeof a == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = Oa(a)),
              (a = Qi(u).hoistableScripts),
              (o = a.get(n)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(n, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Ca(t) {
    return 'href="' + Ue(t) + '"';
  }
  function Vs(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Ny(t) {
    return y({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function VT(t, n, a, o) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (o.loading = 1)
      : ((n = t.createElement("link")),
        (o.preload = n),
        n.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        se(n, "link", a),
        It(n),
        t.head.appendChild(n));
  }
  function Oa(t) {
    return '[src="' + Ue(t) + '"]';
  }
  function zs(t) {
    return "script[async]" + t;
  }
  function jy(t, n, a) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var o = t.querySelector('style[data-href~="' + Ue(a.href) + '"]');
          if (o) return (n.instance = o), It(o), o;
          var u = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (t.ownerDocument || t).createElement("style")),
            It(o),
            se(o, "style", u),
            No(o, a.precedence, t),
            (n.instance = o)
          );
        case "stylesheet":
          u = Ca(a.href);
          var h = t.querySelector(Vs(u));
          if (h) return (n.state.loading |= 4), (n.instance = h), It(h), h;
          (o = Ny(a)),
            (u = Ye.get(u)) && kc(o, u),
            (h = (t.ownerDocument || t).createElement("link")),
            It(h);
          var g = h;
          return (
            (g._p = new Promise(function (v, S) {
              (g.onload = v), (g.onerror = S);
            })),
            se(h, "link", o),
            (n.state.loading |= 4),
            No(h, a.precedence, t),
            (n.instance = h)
          );
        case "script":
          return (
            (h = Oa(a.src)),
            (u = t.querySelector(zs(h)))
              ? ((n.instance = u), It(u), u)
              : ((o = a),
                (u = Ye.get(h)) && ((o = y({}, a)), Hc(o, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                It(u),
                se(u, "link", o),
                t.head.appendChild(u),
                (n.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((o = n.instance), (n.state.loading |= 4), No(o, a.precedence, t));
    return n.instance;
  }
  function No(t, n, a) {
    for (
      var o = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = o.length ? o[o.length - 1] : null,
        h = u,
        g = 0;
      g < o.length;
      g++
    ) {
      var v = o[g];
      if (v.dataset.precedence === n) h = v;
      else if (h !== u) break;
    }
    h
      ? h.parentNode.insertBefore(t, h.nextSibling)
      : ((n = a.nodeType === 9 ? a.head : a), n.insertBefore(t, n.firstChild));
  }
  function kc(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title);
  }
  function Hc(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity);
  }
  var jo = null;
  function Ly(t, n, a) {
    if (jo === null) {
      var o = new Map(),
        u = (jo = new Map());
      u.set(a, o);
    } else (u = jo), (o = u.get(a)), o || ((o = new Map()), u.set(a, o));
    if (o.has(t)) return o;
    for (
      o.set(t, null), a = a.getElementsByTagName(t), u = 0;
      u < a.length;
      u++
    ) {
      var h = a[u];
      if (
        !(
          h[Ja] ||
          h[le] ||
          (t === "link" && h.getAttribute("rel") === "stylesheet")
        ) &&
        h.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = h.getAttribute(n) || "";
        g = t + g;
        var v = o.get(g);
        v ? v.push(h) : o.set(g, [h]);
      }
    }
    return o;
  }
  function By(t, n, a) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        n === "title" ? t.querySelector("head > title") : null
      );
  }
  function zT(t, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (t = n.disabled), typeof n.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Uy(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var ks = null;
  function kT() {}
  function HT(t, n, a) {
    if (ks === null) throw Error(r(475));
    var o = ks;
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var u = Ca(a.href),
          h = t.querySelector(Vs(u));
        if (h) {
          (t = h._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (o.count++, (o = Lo.bind(o)), t.then(o, o)),
            (n.state.loading |= 4),
            (n.instance = h),
            It(h);
          return;
        }
        (h = t.ownerDocument || t),
          (a = Ny(a)),
          (u = Ye.get(u)) && kc(a, u),
          (h = h.createElement("link")),
          It(h);
        var g = h;
        (g._p = new Promise(function (v, S) {
          (g.onload = v), (g.onerror = S);
        })),
          se(h, "link", a),
          (n.instance = h);
      }
      o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (o.count++,
          (n = Lo.bind(o)),
          t.addEventListener("load", n),
          t.addEventListener("error", n));
    }
  }
  function qT() {
    if (ks === null) throw Error(r(475));
    var t = ks;
    return (
      t.stylesheets && t.count === 0 && qc(t, t.stylesheets),
      0 < t.count
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && qc(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                (t.unsuspend = null), o();
              }
            }, 6e4);
            return (
              (t.unsuspend = n),
              function () {
                (t.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Lo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) qc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Bo = null;
  function qc(t, n) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Bo = new Map()),
        n.forEach(PT, t),
        (Bo = null),
        Lo.call(t));
  }
  function PT(t, n) {
    if (!(n.state.loading & 4)) {
      var a = Bo.get(t);
      if (a) var o = a.get(null);
      else {
        (a = new Map()), Bo.set(t, a);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            h = 0;
          h < u.length;
          h++
        ) {
          var g = u[h];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (a.set(g.dataset.precedence, g), (o = g));
        }
        o && a.set(null, o);
      }
      (u = n.instance),
        (g = u.getAttribute("data-precedence")),
        (h = a.get(g) || o),
        h === o && a.set(null, u),
        a.set(g, u),
        this.count++,
        (o = Lo.bind(this)),
        u.addEventListener("load", o),
        u.addEventListener("error", o),
        h
          ? h.parentNode.insertBefore(u, h.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var Hs = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: tt,
    _currentValue2: tt,
    _threadCount: 0,
  };
  function YT(t, n, a, o, u, h, g, v) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Vl(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Vl(0)),
      (this.hiddenUpdates = Vl(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = u),
      (this.onCaughtError = h),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function Vy(t, n, a, o, u, h, g, v, S, L, q, Y) {
    return (
      (t = new YT(t, n, a, g, v, S, L, Y)),
      (n = 1),
      h === !0 && (n |= 24),
      (h = Oe(3, null, null, n)),
      (t.current = h),
      (h.stateNode = t),
      (n = Su()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (h.memoizedState = { element: o, isDehydrated: a, cache: n }),
      Au(h),
      t
    );
  }
  function zy(t) {
    return t ? ((t = ra), t) : ra;
  }
  function ky(t, n, a, o, u, h) {
    (u = zy(u)),
      o.context === null ? (o.context = u) : (o.pendingContext = u),
      (o = Xn(n)),
      (o.payload = { element: a }),
      (h = h === void 0 ? null : h),
      h !== null && (o.callback = h),
      (a = Kn(t, o, n)),
      a !== null && (Le(a, t, n), ys(a, t, n));
  }
  function Hy(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Pc(t, n) {
    Hy(t, n), (t = t.alternate) && Hy(t, n);
  }
  function qy(t) {
    if (t.tag === 13) {
      var n = sa(t, 67108864);
      n !== null && Le(n, t, 67108864), Pc(t, 67108864);
    }
  }
  var Uo = !0;
  function GT(t, n, a, o) {
    var u = H.T;
    H.T = null;
    var h = F.p;
    try {
      (F.p = 2), Yc(t, n, a, o);
    } finally {
      (F.p = h), (H.T = u);
    }
  }
  function XT(t, n, a, o) {
    var u = H.T;
    H.T = null;
    var h = F.p;
    try {
      (F.p = 8), Yc(t, n, a, o);
    } finally {
      (F.p = h), (H.T = u);
    }
  }
  function Yc(t, n, a, o) {
    if (Uo) {
      var u = Gc(o);
      if (u === null) Dc(t, n, o, Vo, a), Yy(t, o);
      else if (FT(u, t, n, a, o)) o.stopPropagation();
      else if ((Yy(t, o), n & 4 && -1 < KT.indexOf(t))) {
        for (; u !== null; ) {
          var h = Fi(u);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var g = yi(h.pendingLanes);
                  if (g !== 0) {
                    var v = h;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; g; ) {
                      var S = 1 << (31 - Re(g));
                      (v.entanglements[1] |= S), (g &= ~S);
                    }
                    fn(h), (_t & 6) === 0 && ((xo = rn() + 500), js(0));
                  }
                }
                break;
              case 13:
                (v = sa(h, 2)), v !== null && Le(v, h, 2), So(), Pc(h, 2);
            }
          if (((h = Gc(o)), h === null && Dc(t, n, o, Vo, a), h === u)) break;
          u = h;
        }
        u !== null && o.stopPropagation();
      } else Dc(t, n, o, null, a);
    }
  }
  function Gc(t) {
    return (t = Zl(t)), Xc(t);
  }
  var Vo = null;
  function Xc(t) {
    if (((Vo = null), (t = Ki(t)), t !== null)) {
      var n = c(t);
      if (n === null) t = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (((t = f(n)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return (Vo = t), null;
  }
  function Py(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Mx()) {
          case nd:
            return 2;
          case id:
            return 8;
          case Cr:
          case Nx:
            return 32;
          case ad:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Kc = !1,
    si = null,
    ri = null,
    oi = null,
    qs = new Map(),
    Ps = new Map(),
    li = [],
    KT =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Yy(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        si = null;
        break;
      case "dragenter":
      case "dragleave":
        ri = null;
        break;
      case "mouseover":
      case "mouseout":
        oi = null;
        break;
      case "pointerover":
      case "pointerout":
        qs.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ps.delete(n.pointerId);
    }
  }
  function Ys(t, n, a, o, u, h) {
    return t === null || t.nativeEvent !== h
      ? ((t = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: o,
          nativeEvent: h,
          targetContainers: [u],
        }),
        n !== null && ((n = Fi(n)), n !== null && qy(n)),
        t)
      : ((t.eventSystemFlags |= o),
        (n = t.targetContainers),
        u !== null && n.indexOf(u) === -1 && n.push(u),
        t);
  }
  function FT(t, n, a, o, u) {
    switch (n) {
      case "focusin":
        return (si = Ys(si, t, n, a, o, u)), !0;
      case "dragenter":
        return (ri = Ys(ri, t, n, a, o, u)), !0;
      case "mouseover":
        return (oi = Ys(oi, t, n, a, o, u)), !0;
      case "pointerover":
        var h = u.pointerId;
        return qs.set(h, Ys(qs.get(h) || null, t, n, a, o, u)), !0;
      case "gotpointercapture":
        return (
          (h = u.pointerId), Ps.set(h, Ys(Ps.get(h) || null, t, n, a, o, u)), !0
        );
    }
    return !1;
  }
  function Gy(t) {
    var n = Ki(t.target);
    if (n !== null) {
      var a = c(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = f(a)), n !== null)) {
            (t.blockedOn = n),
              Hx(t.priority, function () {
                if (a.tag === 13) {
                  var o = je();
                  o = zl(o);
                  var u = sa(a, o);
                  u !== null && Le(u, a, o), Pc(a, o);
                }
              });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function zo(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var a = Gc(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var o = new a.constructor(a.type, a);
        (Ql = o), a.target.dispatchEvent(o), (Ql = null);
      } else return (n = Fi(a)), n !== null && qy(n), (t.blockedOn = a), !1;
      n.shift();
    }
    return !0;
  }
  function Xy(t, n, a) {
    zo(t) && a.delete(n);
  }
  function QT() {
    (Kc = !1),
      si !== null && zo(si) && (si = null),
      ri !== null && zo(ri) && (ri = null),
      oi !== null && zo(oi) && (oi = null),
      qs.forEach(Xy),
      Ps.forEach(Xy);
  }
  function ko(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      Kc ||
        ((Kc = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, QT)));
  }
  var Ho = null;
  function Ky(t) {
    Ho !== t &&
      ((Ho = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Ho === t && (Ho = null);
        for (var n = 0; n < t.length; n += 3) {
          var a = t[n],
            o = t[n + 1],
            u = t[n + 2];
          if (typeof o != "function") {
            if (Xc(o || a) === null) continue;
            break;
          }
          var h = Fi(a);
          h !== null &&
            (t.splice(n, 3),
            (n -= 3),
            Xu(h, { pending: !0, data: u, method: a.method, action: o }, o, u));
        }
      }));
  }
  function Gs(t) {
    function n(S) {
      return ko(S, t);
    }
    si !== null && ko(si, t),
      ri !== null && ko(ri, t),
      oi !== null && ko(oi, t),
      qs.forEach(n),
      Ps.forEach(n);
    for (var a = 0; a < li.length; a++) {
      var o = li[a];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < li.length && ((a = li[0]), a.blockedOn === null); )
      Gy(a), a.blockedOn === null && li.shift();
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (o = 0; o < a.length; o += 3) {
        var u = a[o],
          h = a[o + 1],
          g = u[ge] || null;
        if (typeof h == "function") g || Ky(a);
        else if (g) {
          var v = null;
          if (h && h.hasAttribute("formAction")) {
            if (((u = h), (g = h[ge] || null))) v = g.formAction;
            else if (Xc(u) !== null) continue;
          } else v = g.action;
          typeof v == "function" ? (a[o + 1] = v) : (a.splice(o, 3), (o -= 3)),
            Ky(a);
        }
      }
  }
  function Fc(t) {
    this._internalRoot = t;
  }
  (qo.prototype.render = Fc.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(r(409));
      var a = n.current,
        o = je();
      ky(a, o, t, n, null, null);
    }),
    (qo.prototype.unmount = Fc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          ky(t.current, 2, null, t, null, null), So(), (n[Xi] = null);
        }
      });
  function qo(t) {
    this._internalRoot = t;
  }
  qo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = ud();
      t = { blockedOn: null, target: t, priority: n };
      for (var a = 0; a < li.length && n !== 0 && n < li[a].priority; a++);
      li.splice(a, 0, t), a === 0 && Gy(t);
    }
  };
  var Fy = i.version;
  if (Fy !== "19.1.0") throw Error(r(527, Fy, "19.1.0"));
  F.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = p(n)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var ZT = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Po.isDisabled && Po.supportsFiber)
      try {
        (Qa = Po.inject(ZT)), (Ae = Po);
      } catch {}
  }
  return (
    (Ks.createRoot = function (t, n) {
      if (!l(t)) throw Error(r(299));
      var a = !1,
        o = "",
        u = up,
        h = cp,
        g = fp,
        v = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (h = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (v = n.unstable_transitionCallbacks)),
        (n = Vy(t, 1, !1, null, null, a, o, u, h, g, v, null)),
        (t[Xi] = n.current),
        Oc(t),
        new Fc(n)
      );
    }),
    (Ks.hydrateRoot = function (t, n, a) {
      if (!l(t)) throw Error(r(299));
      var o = !1,
        u = "",
        h = up,
        g = cp,
        v = fp,
        S = null,
        L = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (o = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (h = a.onUncaughtError),
          a.onCaughtError !== void 0 && (g = a.onCaughtError),
          a.onRecoverableError !== void 0 && (v = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (S = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (L = a.formState)),
        (n = Vy(t, 1, !0, n, a ?? null, o, u, h, g, v, S, L)),
        (n.context = zy(null)),
        (a = n.current),
        (o = je()),
        (o = zl(o)),
        (u = Xn(o)),
        (u.callback = null),
        Kn(a, u, o),
        (a = o),
        (n.current.lanes = a),
        $a(n, a),
        fn(n),
        (t[Xi] = n.current),
        Oc(t),
        new qo(n)
      );
    }),
    (Ks.version = "19.1.0"),
    Ks
  );
}
var ig;
function sS() {
  if (ig) return $c.exports;
  ig = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (i) {
        console.error(i);
      }
  }
  return e(), ($c.exports = aS()), $c.exports;
}
var rS = sS();
const oS = P0(rS);
/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var ag = "popstate";
function lS(e = {}) {
  function i(r, l) {
    let { pathname: c, search: f, hash: d } = r.location;
    return _f(
      "",
      { pathname: c, search: f, hash: d },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function s(r, l) {
    return typeof l == "string" ? l : sr(l);
  }
  return cS(i, s, null, e);
}
function Vt(e, i) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(i);
}
function nn(e, i) {
  if (!e) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function uS() {
  return Math.random().toString(36).substring(2, 10);
}
function sg(e, i) {
  return { usr: e.state, key: e.key, idx: i };
}
function _f(e, i, s = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? ka(i) : i),
    state: s,
    key: (i && i.key) || r || uS(),
  };
}
function sr({ pathname: e = "/", search: i = "", hash: s = "" }) {
  return (
    i && i !== "?" && (e += i.charAt(0) === "?" ? i : "?" + i),
    s && s !== "#" && (e += s.charAt(0) === "#" ? s : "#" + s),
    e
  );
}
function ka(e) {
  let i = {};
  if (e) {
    let s = e.indexOf("#");
    s >= 0 && ((i.hash = e.substring(s)), (e = e.substring(0, s)));
    let r = e.indexOf("?");
    r >= 0 && ((i.search = e.substring(r)), (e = e.substring(0, r))),
      e && (i.pathname = e);
  }
  return i;
}
function cS(e, i, s, r = {}) {
  let { window: l = document.defaultView, v5Compat: c = !1 } = r,
    f = l.history,
    d = "POP",
    p = null,
    m = y();
  m == null && ((m = 0), f.replaceState({ ...f.state, idx: m }, ""));
  function y() {
    return (f.state || { idx: null }).idx;
  }
  function b() {
    d = "POP";
    let R = y(),
      C = R == null ? null : R - m;
    (m = R), p && p({ action: d, location: M.location, delta: C });
  }
  function x(R, C) {
    d = "PUSH";
    let B = _f(M.location, R, C);
    m = y() + 1;
    let N = sg(B, m),
      G = M.createHref(B);
    try {
      f.pushState(N, "", G);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(G);
    }
    c && p && p({ action: d, location: M.location, delta: 1 });
  }
  function O(R, C) {
    d = "REPLACE";
    let B = _f(M.location, R, C);
    m = y();
    let N = sg(B, m),
      G = M.createHref(B);
    f.replaceState(N, "", G),
      c && p && p({ action: d, location: M.location, delta: 0 });
  }
  function A(R) {
    return fS(R);
  }
  let M = {
    get action() {
      return d;
    },
    get location() {
      return e(l, f);
    },
    listen(R) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ag, b),
        (p = R),
        () => {
          l.removeEventListener(ag, b), (p = null);
        }
      );
    },
    createHref(R) {
      return i(l, R);
    },
    createURL: A,
    encodeLocation(R) {
      let C = A(R);
      return { pathname: C.pathname, search: C.search, hash: C.hash };
    },
    push: x,
    replace: O,
    go(R) {
      return f.go(R);
    },
  };
  return M;
}
function fS(e, i = !1) {
  let s = "http://localhost";
  typeof window < "u" &&
    (s =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Vt(s, "No window.location.(origin|href) available to create URL");
  let r = typeof e == "string" ? e : sr(e);
  return (
    (r = r.replace(/ $/, "%20")),
    !i && r.startsWith("//") && (r = s + r),
    new URL(r, s)
  );
}
function Y0(e, i, s = "/") {
  return hS(e, i, s, !1);
}
function hS(e, i, s, r) {
  let l = typeof i == "string" ? ka(i) : i,
    c = Bn(l.pathname || "/", s);
  if (c == null) return null;
  let f = G0(e);
  dS(f);
  let d = null;
  for (let p = 0; d == null && p < f.length; ++p) {
    let m = _S(c);
    d = SS(f[p], m, r);
  }
  return d;
}
function G0(e, i = [], s = [], r = "") {
  let l = (c, f, d) => {
    let p = {
      relativePath: d === void 0 ? c.path || "" : d,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: f,
      route: c,
    };
    p.relativePath.startsWith("/") &&
      (Vt(
        p.relativePath.startsWith(r),
        `Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (p.relativePath = p.relativePath.slice(r.length)));
    let m = Ln([r, p.relativePath]),
      y = s.concat(p);
    c.children &&
      c.children.length > 0 &&
      (Vt(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      G0(c.children, i, y, m)),
      !(c.path == null && !c.index) &&
        i.push({ path: m, score: xS(m, c.index), routesMeta: y });
  };
  return (
    e.forEach((c, f) => {
      if (c.path === "" || !c.path?.includes("?")) l(c, f);
      else for (let d of X0(c.path)) l(c, f, d);
    }),
    i
  );
}
function X0(e) {
  let i = e.split("/");
  if (i.length === 0) return [];
  let [s, ...r] = i,
    l = s.endsWith("?"),
    c = s.replace(/\?$/, "");
  if (r.length === 0) return l ? [c, ""] : [c];
  let f = X0(r.join("/")),
    d = [];
  return (
    d.push(...f.map((p) => (p === "" ? c : [c, p].join("/")))),
    l && d.push(...f),
    d.map((p) => (e.startsWith("/") && p === "" ? "/" : p))
  );
}
function dS(e) {
  e.sort((i, s) =>
    i.score !== s.score
      ? s.score - i.score
      : TS(
          i.routesMeta.map((r) => r.childrenIndex),
          s.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var mS = /^:[\w-]+$/,
  pS = 3,
  yS = 2,
  gS = 1,
  vS = 10,
  bS = -2,
  rg = (e) => e === "*";
function xS(e, i) {
  let s = e.split("/"),
    r = s.length;
  return (
    s.some(rg) && (r += bS),
    i && (r += yS),
    s
      .filter((l) => !rg(l))
      .reduce((l, c) => l + (mS.test(c) ? pS : c === "" ? gS : vS), r)
  );
}
function TS(e, i) {
  return e.length === i.length && e.slice(0, -1).every((r, l) => r === i[l])
    ? e[e.length - 1] - i[i.length - 1]
    : 0;
}
function SS(e, i, s = !1) {
  let { routesMeta: r } = e,
    l = {},
    c = "/",
    f = [];
  for (let d = 0; d < r.length; ++d) {
    let p = r[d],
      m = d === r.length - 1,
      y = c === "/" ? i : i.slice(c.length) || "/",
      b = ul(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: m },
        y
      ),
      x = p.route;
    if (
      (!b &&
        m &&
        s &&
        !r[r.length - 1].route.index &&
        (b = ul(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          y
        )),
      !b)
    )
      return null;
    Object.assign(l, b.params),
      f.push({
        params: l,
        pathname: Ln([c, b.pathname]),
        pathnameBase: CS(Ln([c, b.pathnameBase])),
        route: x,
      }),
      b.pathnameBase !== "/" && (c = Ln([c, b.pathnameBase]));
  }
  return f;
}
function ul(e, i) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [s, r] = ES(e.path, e.caseSensitive, e.end),
    l = i.match(s);
  if (!l) return null;
  let c = l[0],
    f = c.replace(/(.)\/+$/, "$1"),
    d = l.slice(1);
  return {
    params: r.reduce((m, { paramName: y, isOptional: b }, x) => {
      if (y === "*") {
        let A = d[x] || "";
        f = c.slice(0, c.length - A.length).replace(/(.)\/+$/, "$1");
      }
      const O = d[x];
      return (
        b && !O ? (m[y] = void 0) : (m[y] = (O || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: c,
    pathnameBase: f,
    pattern: e,
  };
}
function ES(e, i = !1, s = !0) {
  nn(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, d, p) => (
            r.push({ paramName: d, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, i ? void 0 : "i"), r]
  );
}
function _S(e) {
  try {
    return e
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      nn(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
      ),
      e
    );
  }
}
function Bn(e, i) {
  if (i === "/") return e;
  if (!e.toLowerCase().startsWith(i.toLowerCase())) return null;
  let s = i.endsWith("/") ? i.length - 1 : i.length,
    r = e.charAt(s);
  return r && r !== "/" ? null : e.slice(s) || "/";
}
function wS(e, i = "/") {
  let {
    pathname: s,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? ka(e) : e;
  return {
    pathname: s ? (s.startsWith("/") ? s : AS(s, i)) : i,
    search: OS(r),
    hash: DS(l),
  };
}
function AS(e, i) {
  let s = i.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? s.length > 1 && s.pop() : l !== "." && s.push(l);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function tf(e, i, s, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function RS(e) {
  return e.filter(
    (i, s) => s === 0 || (i.route.path && i.route.path.length > 0)
  );
}
function uh(e) {
  let i = RS(e);
  return i.map((s, r) => (r === i.length - 1 ? s.pathname : s.pathnameBase));
}
function ch(e, i, s, r = !1) {
  let l;
  typeof e == "string"
    ? (l = ka(e))
    : ((l = { ...e }),
      Vt(
        !l.pathname || !l.pathname.includes("?"),
        tf("?", "pathname", "search", l)
      ),
      Vt(
        !l.pathname || !l.pathname.includes("#"),
        tf("#", "pathname", "hash", l)
      ),
      Vt(!l.search || !l.search.includes("#"), tf("#", "search", "hash", l)));
  let c = e === "" || l.pathname === "",
    f = c ? "/" : l.pathname,
    d;
  if (f == null) d = s;
  else {
    let b = i.length - 1;
    if (!r && f.startsWith("..")) {
      let x = f.split("/");
      for (; x[0] === ".."; ) x.shift(), (b -= 1);
      l.pathname = x.join("/");
    }
    d = b >= 0 ? i[b] : "/";
  }
  let p = wS(l, d),
    m = f && f !== "/" && f.endsWith("/"),
    y = (c || f === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (m || y) && (p.pathname += "/"), p;
}
var Ln = (e) => e.join("/").replace(/\/\/+/g, "/"),
  CS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  OS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  DS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function MS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var K0 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(K0);
var NS = ["GET", ...K0];
new Set(NS);
var Ha = E.createContext(null);
Ha.displayName = "DataRouter";
var gl = E.createContext(null);
gl.displayName = "DataRouterState";
E.createContext(!1);
var F0 = E.createContext({ isTransitioning: !1 });
F0.displayName = "ViewTransition";
var jS = E.createContext(new Map());
jS.displayName = "Fetchers";
var LS = E.createContext(null);
LS.displayName = "Await";
var an = E.createContext(null);
an.displayName = "Navigation";
var pr = E.createContext(null);
pr.displayName = "Location";
var gn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 });
gn.displayName = "Route";
var fh = E.createContext(null);
fh.displayName = "RouteError";
function BS(e, { relative: i } = {}) {
  Vt(
    qa(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: r } = E.useContext(an),
    { hash: l, pathname: c, search: f } = yr(e, { relative: i }),
    d = c;
  return (
    s !== "/" && (d = c === "/" ? s : Ln([s, c])),
    r.createHref({ pathname: d, search: f, hash: l })
  );
}
function qa() {
  return E.useContext(pr) != null;
}
function mi() {
  return (
    Vt(
      qa(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    E.useContext(pr).location
  );
}
var Q0 =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Z0(e) {
  E.useContext(an).static || E.useLayoutEffect(e);
}
function vn() {
  let { isDataRoute: e } = E.useContext(gn);
  return e ? QS() : US();
}
function US() {
  Vt(
    qa(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = E.useContext(Ha),
    { basename: i, navigator: s } = E.useContext(an),
    { matches: r } = E.useContext(gn),
    { pathname: l } = mi(),
    c = JSON.stringify(uh(r)),
    f = E.useRef(!1);
  return (
    Z0(() => {
      f.current = !0;
    }),
    E.useCallback(
      (p, m = {}) => {
        if ((nn(f.current, Q0), !f.current)) return;
        if (typeof p == "number") {
          s.go(p);
          return;
        }
        let y = ch(p, JSON.parse(c), l, m.relative === "path");
        e == null &&
          i !== "/" &&
          (y.pathname = y.pathname === "/" ? i : Ln([i, y.pathname])),
          (m.replace ? s.replace : s.push)(y, m.state, m);
      },
      [i, s, c, l, e]
    )
  );
}
E.createContext(null);
function yr(e, { relative: i } = {}) {
  let { matches: s } = E.useContext(gn),
    { pathname: r } = mi(),
    l = JSON.stringify(uh(s));
  return E.useMemo(() => ch(e, JSON.parse(l), r, i === "path"), [e, l, r, i]);
}
function VS(e, i) {
  return $0(e, i);
}
function $0(e, i, s, r) {
  Vt(
    qa(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = E.useContext(an),
    { matches: c } = E.useContext(gn),
    f = c[c.length - 1],
    d = f ? f.params : {},
    p = f ? f.pathname : "/",
    m = f ? f.pathnameBase : "/",
    y = f && f.route;
  {
    let C = (y && y.path) || "";
    J0(
      p,
      !y || C.endsWith("*") || C.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${
        C === "/" ? "*" : `${C}/*`
      }">.`
    );
  }
  let b = mi(),
    x;
  if (i) {
    let C = typeof i == "string" ? ka(i) : i;
    Vt(
      m === "/" || C.pathname?.startsWith(m),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${C.pathname}" was given in the \`location\` prop.`
    ),
      (x = C);
  } else x = b;
  let O = x.pathname || "/",
    A = O;
  if (m !== "/") {
    let C = m.replace(/^\//, "").split("/");
    A = "/" + O.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let M = Y0(e, { pathname: A });
  nn(
    y || M != null,
    `No routes matched location "${x.pathname}${x.search}${x.hash}" `
  ),
    nn(
      M == null ||
        M[M.length - 1].route.element !== void 0 ||
        M[M.length - 1].route.Component !== void 0 ||
        M[M.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let R = PS(
    M &&
      M.map((C) =>
        Object.assign({}, C, {
          params: Object.assign({}, d, C.params),
          pathname: Ln([
            m,
            l.encodeLocation
              ? l.encodeLocation(C.pathname).pathname
              : C.pathname,
          ]),
          pathnameBase:
            C.pathnameBase === "/"
              ? m
              : Ln([
                  m,
                  l.encodeLocation
                    ? l.encodeLocation(C.pathnameBase).pathname
                    : C.pathnameBase,
                ]),
        })
      ),
    c,
    s,
    r
  );
  return i && R
    ? E.createElement(
        pr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...x,
            },
            navigationType: "POP",
          },
        },
        R
      )
    : R;
}
function zS() {
  let e = FS(),
    i = MS(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    s = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    l = { padding: "0.5rem", backgroundColor: r },
    c = { padding: "2px 4px", backgroundColor: r },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (f = E.createElement(
      E.Fragment,
      null,
      E.createElement("p", null, "💿 Hey developer 👋"),
      E.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        E.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        E.createElement("code", { style: c }, "errorElement"),
        " prop on your route."
      )
    )),
    E.createElement(
      E.Fragment,
      null,
      E.createElement("h2", null, "Unexpected Application Error!"),
      E.createElement("h3", { style: { fontStyle: "italic" } }, i),
      s ? E.createElement("pre", { style: l }, s) : null,
      f
    )
  );
}
var kS = E.createElement(zS, null),
  HS = class extends E.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, i) {
      return i.location !== e.location ||
        (i.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : i.error,
            location: i.location,
            revalidation: e.revalidation || i.revalidation,
          };
    }
    componentDidCatch(e, i) {
      console.error(
        "React Router caught the following error during render",
        e,
        i
      );
    }
    render() {
      return this.state.error !== void 0
        ? E.createElement(
            gn.Provider,
            { value: this.props.routeContext },
            E.createElement(fh.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function qS({ routeContext: e, match: i, children: s }) {
  let r = E.useContext(Ha);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = i.route.id),
    E.createElement(gn.Provider, { value: e }, s)
  );
}
function PS(e, i = [], s = null, r = null) {
  if (e == null) {
    if (!s) return null;
    if (s.errors) e = s.matches;
    else if (i.length === 0 && !s.initialized && s.matches.length > 0)
      e = s.matches;
    else return null;
  }
  let l = e,
    c = s?.errors;
  if (c != null) {
    let p = l.findIndex((m) => m.route.id && c?.[m.route.id] !== void 0);
    Vt(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ),
      (l = l.slice(0, Math.min(l.length, p + 1)));
  }
  let f = !1,
    d = -1;
  if (s)
    for (let p = 0; p < l.length; p++) {
      let m = l[p];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = p),
        m.route.id)
      ) {
        let { loaderData: y, errors: b } = s,
          x =
            m.route.loader &&
            !y.hasOwnProperty(m.route.id) &&
            (!b || b[m.route.id] === void 0);
        if (m.route.lazy || x) {
          (f = !0), d >= 0 ? (l = l.slice(0, d + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((p, m, y) => {
    let b,
      x = !1,
      O = null,
      A = null;
    s &&
      ((b = c && m.route.id ? c[m.route.id] : void 0),
      (O = m.route.errorElement || kS),
      f &&
        (d < 0 && y === 0
          ? (J0(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (x = !0),
            (A = null))
          : d === y &&
            ((x = !0), (A = m.route.hydrateFallbackElement || null))));
    let M = i.concat(l.slice(0, y + 1)),
      R = () => {
        let C;
        return (
          b
            ? (C = O)
            : x
            ? (C = A)
            : m.route.Component
            ? (C = E.createElement(m.route.Component, null))
            : m.route.element
            ? (C = m.route.element)
            : (C = p),
          E.createElement(qS, {
            match: m,
            routeContext: { outlet: p, matches: M, isDataRoute: s != null },
            children: C,
          })
        );
      };
    return s && (m.route.ErrorBoundary || m.route.errorElement || y === 0)
      ? E.createElement(HS, {
          location: s.location,
          revalidation: s.revalidation,
          component: O,
          error: b,
          children: R(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
        })
      : R();
  }, null);
}
function hh(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function YS(e) {
  let i = E.useContext(Ha);
  return Vt(i, hh(e)), i;
}
function GS(e) {
  let i = E.useContext(gl);
  return Vt(i, hh(e)), i;
}
function XS(e) {
  let i = E.useContext(gn);
  return Vt(i, hh(e)), i;
}
function dh(e) {
  let i = XS(e),
    s = i.matches[i.matches.length - 1];
  return (
    Vt(
      s.route.id,
      `${e} can only be used on routes that contain a unique "id"`
    ),
    s.route.id
  );
}
function KS() {
  return dh("useRouteId");
}
function FS() {
  let e = E.useContext(fh),
    i = GS("useRouteError"),
    s = dh("useRouteError");
  return e !== void 0 ? e : i.errors?.[s];
}
function QS() {
  let { router: e } = YS("useNavigate"),
    i = dh("useNavigate"),
    s = E.useRef(!1);
  return (
    Z0(() => {
      s.current = !0;
    }),
    E.useCallback(
      async (l, c = {}) => {
        nn(s.current, Q0),
          s.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : await e.navigate(l, { fromRouteId: i, ...c }));
      },
      [e, i]
    )
  );
}
var og = {};
function J0(e, i, s) {
  !i && !og[e] && ((og[e] = !0), nn(!1, s));
}
E.memo(ZS);
function ZS({ routes: e, future: i, state: s }) {
  return $0(e, void 0, s, i);
}
function W0({ to: e, replace: i, state: s, relative: r }) {
  Vt(
    qa(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: l } = E.useContext(an);
  nn(
    !l,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: c } = E.useContext(gn),
    { pathname: f } = mi(),
    d = vn(),
    p = ch(e, uh(c), f, r === "path"),
    m = JSON.stringify(p);
  return (
    E.useEffect(() => {
      d(JSON.parse(m), { replace: i, state: s, relative: r });
    }, [d, m, r, i, s]),
    null
  );
}
function We(e) {
  Vt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function $S({
  basename: e = "/",
  children: i = null,
  location: s,
  navigationType: r = "POP",
  navigator: l,
  static: c = !1,
}) {
  Vt(
    !qa(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let f = e.replace(/^\/*/, "/"),
    d = E.useMemo(
      () => ({ basename: f, navigator: l, static: c, future: {} }),
      [f, l, c]
    );
  typeof s == "string" && (s = ka(s));
  let {
      pathname: p = "/",
      search: m = "",
      hash: y = "",
      state: b = null,
      key: x = "default",
    } = s,
    O = E.useMemo(() => {
      let A = Bn(p, f);
      return A == null
        ? null
        : {
            location: { pathname: A, search: m, hash: y, state: b, key: x },
            navigationType: r,
          };
    }, [f, p, m, y, b, x, r]);
  return (
    nn(
      O != null,
      `<Router basename="${f}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    O == null
      ? null
      : E.createElement(
          an.Provider,
          { value: d },
          E.createElement(pr.Provider, { children: i, value: O })
        )
  );
}
function JS({ children: e, location: i }) {
  return VS(wf(e), i);
}
function wf(e, i = []) {
  let s = [];
  return (
    E.Children.forEach(e, (r, l) => {
      if (!E.isValidElement(r)) return;
      let c = [...i, l];
      if (r.type === E.Fragment) {
        s.push.apply(s, wf(r.props.children, c));
        return;
      }
      Vt(
        r.type === We,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Vt(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let f = {
        id: r.props.id || c.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (f.children = wf(r.props.children, c)), s.push(f);
    }),
    s
  );
}
var Zo = "get",
  $o = "application/x-www-form-urlencoded";
function vl(e) {
  return e != null && typeof e.tagName == "string";
}
function WS(e) {
  return vl(e) && e.tagName.toLowerCase() === "button";
}
function IS(e) {
  return vl(e) && e.tagName.toLowerCase() === "form";
}
function tE(e) {
  return vl(e) && e.tagName.toLowerCase() === "input";
}
function eE(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function nE(e, i) {
  return e.button === 0 && (!i || i === "_self") && !eE(e);
}
var Yo = null;
function iE() {
  if (Yo === null)
    try {
      new FormData(document.createElement("form"), 0), (Yo = !1);
    } catch {
      Yo = !0;
    }
  return Yo;
}
var aE = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ef(e) {
  return e != null && !aE.has(e)
    ? (nn(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$o}"`
      ),
      null)
    : e;
}
function sE(e, i) {
  let s, r, l, c, f;
  if (IS(e)) {
    let d = e.getAttribute("action");
    (r = d ? Bn(d, i) : null),
      (s = e.getAttribute("method") || Zo),
      (l = ef(e.getAttribute("enctype")) || $o),
      (c = new FormData(e));
  } else if (WS(e) || (tE(e) && (e.type === "submit" || e.type === "image"))) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = e.getAttribute("formaction") || d.getAttribute("action");
    if (
      ((r = p ? Bn(p, i) : null),
      (s = e.getAttribute("formmethod") || d.getAttribute("method") || Zo),
      (l =
        ef(e.getAttribute("formenctype")) ||
        ef(d.getAttribute("enctype")) ||
        $o),
      (c = new FormData(d, e)),
      !iE())
    ) {
      let { name: m, type: y, value: b } = e;
      if (y === "image") {
        let x = m ? `${m}.` : "";
        c.append(`${x}x`, "0"), c.append(`${x}y`, "0");
      } else m && c.append(m, b);
    }
  } else {
    if (vl(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (s = Zo), (r = null), (l = $o), (f = e);
  }
  return (
    c && l === "text/plain" && ((f = c), (c = void 0)),
    { action: r, method: s.toLowerCase(), encType: l, formData: c, body: f }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function mh(e, i) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(i);
}
function rE(e, i, s) {
  let r =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    r.pathname === "/"
      ? (r.pathname = `_root.${s}`)
      : i && Bn(r.pathname, i) === "/"
      ? (r.pathname = `${i.replace(/\/$/, "")}/_root.${s}`)
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.${s}`),
    r
  );
}
async function oE(e, i) {
  if (e.id in i) return i[e.id];
  try {
    let s = await import(e.module);
    return (i[e.id] = s), s;
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function lE(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function uE(e, i, s) {
  let r = await Promise.all(
    e.map(async (l) => {
      let c = i.routes[l.route.id];
      if (c) {
        let f = await oE(c, s);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return dE(
    r
      .flat(1)
      .filter(lE)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" }
      )
  );
}
function lg(e, i, s, r, l, c) {
  let f = (p, m) => (s[m] ? p.route.id !== s[m].route.id : !0),
    d = (p, m) =>
      s[m].pathname !== p.pathname ||
      (s[m].route.path?.endsWith("*") && s[m].params["*"] !== p.params["*"]);
  return c === "assets"
    ? i.filter((p, m) => f(p, m) || d(p, m))
    : c === "data"
    ? i.filter((p, m) => {
        let y = r.routes[p.route.id];
        if (!y || !y.hasLoader) return !1;
        if (f(p, m) || d(p, m)) return !0;
        if (p.route.shouldRevalidate) {
          let b = p.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams: s[0]?.params || {},
            nextUrl: new URL(e, window.origin),
            nextParams: p.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof b == "boolean") return b;
        }
        return !0;
      })
    : [];
}
function cE(e, i, { includeHydrateFallback: s } = {}) {
  return fE(
    e
      .map((r) => {
        let l = i.routes[r.route.id];
        if (!l) return [];
        let c = [l.module];
        return (
          l.clientActionModule && (c = c.concat(l.clientActionModule)),
          l.clientLoaderModule && (c = c.concat(l.clientLoaderModule)),
          s &&
            l.hydrateFallbackModule &&
            (c = c.concat(l.hydrateFallbackModule)),
          l.imports && (c = c.concat(l.imports)),
          c
        );
      })
      .flat(1)
  );
}
function fE(e) {
  return [...new Set(e)];
}
function hE(e) {
  let i = {},
    s = Object.keys(e).sort();
  for (let r of s) i[r] = e[r];
  return i;
}
function dE(e, i) {
  let s = new Set();
  return (
    new Set(i),
    e.reduce((r, l) => {
      let c = JSON.stringify(hE(l));
      return s.has(c) || (s.add(c), r.push({ key: c, link: l })), r;
    }, [])
  );
}
function I0() {
  let e = E.useContext(Ha);
  return (
    mh(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function mE() {
  let e = E.useContext(gl);
  return (
    mh(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var ph = E.createContext(void 0);
ph.displayName = "FrameworkContext";
function tv() {
  let e = E.useContext(ph);
  return (
    mh(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function pE(e, i) {
  let s = E.useContext(ph),
    [r, l] = E.useState(!1),
    [c, f] = E.useState(!1),
    {
      onFocus: d,
      onBlur: p,
      onMouseEnter: m,
      onMouseLeave: y,
      onTouchStart: b,
    } = i,
    x = E.useRef(null);
  E.useEffect(() => {
    if ((e === "render" && f(!0), e === "viewport")) {
      let M = (C) => {
          C.forEach((B) => {
            f(B.isIntersecting);
          });
        },
        R = new IntersectionObserver(M, { threshold: 0.5 });
      return (
        x.current && R.observe(x.current),
        () => {
          R.disconnect();
        }
      );
    }
  }, [e]),
    E.useEffect(() => {
      if (r) {
        let M = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(M);
        };
      }
    }, [r]);
  let O = () => {
      l(!0);
    },
    A = () => {
      l(!1), f(!1);
    };
  return s
    ? e !== "intent"
      ? [c, x, {}]
      : [
          c,
          x,
          {
            onFocus: Fs(d, O),
            onBlur: Fs(p, A),
            onMouseEnter: Fs(m, O),
            onMouseLeave: Fs(y, A),
            onTouchStart: Fs(b, O),
          },
        ]
    : [!1, x, {}];
}
function Fs(e, i) {
  return (s) => {
    e && e(s), s.defaultPrevented || i(s);
  };
}
function yE({ page: e, ...i }) {
  let { router: s } = I0(),
    r = E.useMemo(() => Y0(s.routes, e, s.basename), [s.routes, e, s.basename]);
  return r ? E.createElement(vE, { page: e, matches: r, ...i }) : null;
}
function gE(e) {
  let { manifest: i, routeModules: s } = tv(),
    [r, l] = E.useState([]);
  return (
    E.useEffect(() => {
      let c = !1;
      return (
        uE(e, i, s).then((f) => {
          c || l(f);
        }),
        () => {
          c = !0;
        }
      );
    }, [e, i, s]),
    r
  );
}
function vE({ page: e, matches: i, ...s }) {
  let r = mi(),
    { manifest: l, routeModules: c } = tv(),
    { basename: f } = I0(),
    { loaderData: d, matches: p } = mE(),
    m = E.useMemo(() => lg(e, i, p, l, r, "data"), [e, i, p, l, r]),
    y = E.useMemo(() => lg(e, i, p, l, r, "assets"), [e, i, p, l, r]),
    b = E.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let A = new Set(),
        M = !1;
      if (
        (i.forEach((C) => {
          let B = l.routes[C.route.id];
          !B ||
            !B.hasLoader ||
            ((!m.some((N) => N.route.id === C.route.id) &&
              C.route.id in d &&
              c[C.route.id]?.shouldRevalidate) ||
            B.hasClientLoader
              ? (M = !0)
              : A.add(C.route.id));
        }),
        A.size === 0)
      )
        return [];
      let R = rE(e, f, "data");
      return (
        M &&
          A.size > 0 &&
          R.searchParams.set(
            "_routes",
            i
              .filter((C) => A.has(C.route.id))
              .map((C) => C.route.id)
              .join(",")
          ),
        [R.pathname + R.search]
      );
    }, [f, d, r, l, m, i, e, c]),
    x = E.useMemo(() => cE(y, l), [y, l]),
    O = gE(y);
  return E.createElement(
    E.Fragment,
    null,
    b.map((A) =>
      E.createElement("link", {
        key: A,
        rel: "prefetch",
        as: "fetch",
        href: A,
        ...s,
      })
    ),
    x.map((A) =>
      E.createElement("link", { key: A, rel: "modulepreload", href: A, ...s })
    ),
    O.map(({ key: A, link: M }) => E.createElement("link", { key: A, ...M }))
  );
}
function bE(...e) {
  return (i) => {
    e.forEach((s) => {
      typeof s == "function" ? s(i) : s != null && (s.current = i);
    });
  };
}
var ev =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  ev && (window.__reactRouterVersion = "7.7.0");
} catch {}
function xE({ basename: e, children: i, window: s }) {
  let r = E.useRef();
  r.current == null && (r.current = lS({ window: s, v5Compat: !0 }));
  let l = r.current,
    [c, f] = E.useState({ action: l.action, location: l.location }),
    d = E.useCallback(
      (p) => {
        E.startTransition(() => f(p));
      },
      [f]
    );
  return (
    E.useLayoutEffect(() => l.listen(d), [l, d]),
    E.createElement($S, {
      basename: e,
      children: i,
      location: c.location,
      navigationType: c.action,
      navigator: l,
    })
  );
}
var nv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Bt = E.forwardRef(function (
    {
      onClick: i,
      discover: s = "render",
      prefetch: r = "none",
      relative: l,
      reloadDocument: c,
      replace: f,
      state: d,
      target: p,
      to: m,
      preventScrollReset: y,
      viewTransition: b,
      ...x
    },
    O
  ) {
    let { basename: A } = E.useContext(an),
      M = typeof m == "string" && nv.test(m),
      R,
      C = !1;
    if (typeof m == "string" && M && ((R = m), ev))
      try {
        let K = new URL(window.location.href),
          W = m.startsWith("//") ? new URL(K.protocol + m) : new URL(m),
          ct = Bn(W.pathname, A);
        W.origin === K.origin && ct != null
          ? (m = ct + W.search + W.hash)
          : (C = !0);
      } catch {
        nn(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let B = BS(m, { relative: l }),
      [N, G, k] = pE(r, x),
      J = _E(m, {
        replace: f,
        state: d,
        target: p,
        preventScrollReset: y,
        relative: l,
        viewTransition: b,
      });
    function Z(K) {
      i && i(K), K.defaultPrevented || J(K);
    }
    let Q = E.createElement("a", {
      ...x,
      ...k,
      href: R || B,
      onClick: C || c ? i : Z,
      ref: bE(O, G),
      target: p,
      "data-discover": !M && s === "render" ? "true" : void 0,
    });
    return N && !M
      ? E.createElement(E.Fragment, null, Q, E.createElement(yE, { page: B }))
      : Q;
  });
Bt.displayName = "Link";
var TE = E.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: s = !1,
    className: r = "",
    end: l = !1,
    style: c,
    to: f,
    viewTransition: d,
    children: p,
    ...m
  },
  y
) {
  let b = yr(f, { relative: m.relative }),
    x = mi(),
    O = E.useContext(gl),
    { navigator: A, basename: M } = E.useContext(an),
    R = O != null && OE(b) && d === !0,
    C = A.encodeLocation ? A.encodeLocation(b).pathname : b.pathname,
    B = x.pathname,
    N =
      O && O.navigation && O.navigation.location
        ? O.navigation.location.pathname
        : null;
  s ||
    ((B = B.toLowerCase()),
    (N = N ? N.toLowerCase() : null),
    (C = C.toLowerCase())),
    N && M && (N = Bn(N, M) || N);
  const G = C !== "/" && C.endsWith("/") ? C.length - 1 : C.length;
  let k = B === C || (!l && B.startsWith(C) && B.charAt(G) === "/"),
    J =
      N != null &&
      (N === C || (!l && N.startsWith(C) && N.charAt(C.length) === "/")),
    Z = { isActive: k, isPending: J, isTransitioning: R },
    Q = k ? i : void 0,
    K;
  typeof r == "function"
    ? (K = r(Z))
    : (K = [
        r,
        k ? "active" : null,
        J ? "pending" : null,
        R ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let W = typeof c == "function" ? c(Z) : c;
  return E.createElement(
    Bt,
    {
      ...m,
      "aria-current": Q,
      className: K,
      ref: y,
      style: W,
      to: f,
      viewTransition: d,
    },
    typeof p == "function" ? p(Z) : p
  );
});
TE.displayName = "NavLink";
var SE = E.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: i,
      navigate: s,
      reloadDocument: r,
      replace: l,
      state: c,
      method: f = Zo,
      action: d,
      onSubmit: p,
      relative: m,
      preventScrollReset: y,
      viewTransition: b,
      ...x
    },
    O
  ) => {
    let A = RE(),
      M = CE(d, { relative: m }),
      R = f.toLowerCase() === "get" ? "get" : "post",
      C = typeof d == "string" && nv.test(d),
      B = (N) => {
        if ((p && p(N), N.defaultPrevented)) return;
        N.preventDefault();
        let G = N.nativeEvent.submitter,
          k = G?.getAttribute("formmethod") || f;
        A(G || N.currentTarget, {
          fetcherKey: i,
          method: k,
          navigate: s,
          replace: l,
          state: c,
          relative: m,
          preventScrollReset: y,
          viewTransition: b,
        });
      };
    return E.createElement("form", {
      ref: O,
      method: R,
      action: M,
      onSubmit: r ? p : B,
      ...x,
      "data-discover": !C && e === "render" ? "true" : void 0,
    });
  }
);
SE.displayName = "Form";
function EE(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function iv(e) {
  let i = E.useContext(Ha);
  return Vt(i, EE(e)), i;
}
function _E(
  e,
  {
    target: i,
    replace: s,
    state: r,
    preventScrollReset: l,
    relative: c,
    viewTransition: f,
  } = {}
) {
  let d = vn(),
    p = mi(),
    m = yr(e, { relative: c });
  return E.useCallback(
    (y) => {
      if (nE(y, i)) {
        y.preventDefault();
        let b = s !== void 0 ? s : sr(p) === sr(m);
        d(e, {
          replace: b,
          state: r,
          preventScrollReset: l,
          relative: c,
          viewTransition: f,
        });
      }
    },
    [p, d, m, s, r, i, e, l, c, f]
  );
}
var wE = 0,
  AE = () => `__${String(++wE)}__`;
function RE() {
  let { router: e } = iv("useSubmit"),
    { basename: i } = E.useContext(an),
    s = KS();
  return E.useCallback(
    async (r, l = {}) => {
      let { action: c, method: f, encType: d, formData: p, body: m } = sE(r, i);
      if (l.navigate === !1) {
        let y = l.fetcherKey || AE();
        await e.fetch(y, s, l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: p,
          body: m,
          formMethod: l.method || f,
          formEncType: l.encType || d,
          flushSync: l.flushSync,
        });
      } else
        await e.navigate(l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: p,
          body: m,
          formMethod: l.method || f,
          formEncType: l.encType || d,
          replace: l.replace,
          state: l.state,
          fromRouteId: s,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [e, i, s]
  );
}
function CE(e, { relative: i } = {}) {
  let { basename: s } = E.useContext(an),
    r = E.useContext(gn);
  Vt(r, "useFormAction must be used inside a RouteContext");
  let [l] = r.matches.slice(-1),
    c = { ...yr(e || ".", { relative: i }) },
    f = mi();
  if (e == null) {
    c.search = f.search;
    let d = new URLSearchParams(c.search),
      p = d.getAll("index");
    if (p.some((y) => y === "")) {
      d.delete("index"),
        p.filter((b) => b).forEach((b) => d.append("index", b));
      let y = d.toString();
      c.search = y ? `?${y}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      l.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (c.pathname = c.pathname === "/" ? s : Ln([s, c.pathname])),
    sr(c)
  );
}
function OE(e, i = {}) {
  let s = E.useContext(F0);
  Vt(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = iv("useViewTransitionState"),
    l = yr(e, { relative: i.relative });
  if (!s.isTransitioning) return !1;
  let c = Bn(s.currentLocation.pathname, r) || s.currentLocation.pathname,
    f = Bn(s.nextLocation.pathname, r) || s.nextLocation.pathname;
  return ul(l.pathname, f) != null || ul(l.pathname, c) != null;
}
function av(e) {
  var i,
    s,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (i = 0; i < l; i++)
        e[i] && (s = av(e[i])) && (r && (r += " "), (r += s));
    } else for (s in e) e[s] && (r && (r += " "), (r += s));
  return r;
}
function ki() {
  for (var e, i, s = 0, r = "", l = arguments.length; s < l; s++)
    (e = arguments[s]) && (i = av(e)) && (r && (r += " "), (r += i));
  return r;
}
function DE(e) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0],
    s = document.createElement("style");
  (s.type = "text/css"),
    i.firstChild ? i.insertBefore(s, i.firstChild) : i.appendChild(s),
    s.styleSheet
      ? (s.styleSheet.cssText = e)
      : s.appendChild(document.createTextNode(e));
}
DE(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var gr = (e) => typeof e == "number" && !isNaN(e),
  Yi = (e) => typeof e == "string",
  Un = (e) => typeof e == "function",
  ME = (e) => Yi(e) || gr(e),
  Af = (e) => (Yi(e) || Un(e) ? e : null),
  NE = (e, i) => (e === !1 || (gr(e) && e > 0) ? e : i),
  Rf = (e) => E.isValidElement(e) || Yi(e) || Un(e) || gr(e);
function jE(e, i, s = 300) {
  let { scrollHeight: r, style: l } = e;
  requestAnimationFrame(() => {
    (l.minHeight = "initial"),
      (l.height = r + "px"),
      (l.transition = `all ${s}ms`),
      requestAnimationFrame(() => {
        (l.height = "0"), (l.padding = "0"), (l.margin = "0"), setTimeout(i, s);
      });
  });
}
function LE({
  enter: e,
  exit: i,
  appendPosition: s = !1,
  collapse: r = !0,
  collapseDuration: l = 300,
}) {
  return function ({
    children: c,
    position: f,
    preventExitTransition: d,
    done: p,
    nodeRef: m,
    isIn: y,
    playToast: b,
  }) {
    let x = s ? `${e}--${f}` : e,
      O = s ? `${i}--${f}` : i,
      A = E.useRef(0);
    return (
      E.useLayoutEffect(() => {
        let M = m.current,
          R = x.split(" "),
          C = (B) => {
            B.target === m.current &&
              (b(),
              M.removeEventListener("animationend", C),
              M.removeEventListener("animationcancel", C),
              A.current === 0 &&
                B.type !== "animationcancel" &&
                M.classList.remove(...R));
          };
        M.classList.add(...R),
          M.addEventListener("animationend", C),
          M.addEventListener("animationcancel", C);
      }, []),
      E.useEffect(() => {
        let M = m.current,
          R = () => {
            M.removeEventListener("animationend", R), r ? jE(M, p, l) : p();
          };
        y ||
          (d
            ? R()
            : ((A.current = 1),
              (M.className += ` ${O}`),
              M.addEventListener("animationend", R)));
      }, [y]),
      Nt.createElement(Nt.Fragment, null, c)
    );
  };
}
function ug(e, i) {
  return {
    content: sv(e.content, e.props),
    containerId: e.props.containerId,
    id: e.props.toastId,
    theme: e.props.theme,
    type: e.props.type,
    data: e.props.data || {},
    isLoading: e.props.isLoading,
    icon: e.props.icon,
    reason: e.removalReason,
    status: i,
  };
}
function sv(e, i, s = !1) {
  return E.isValidElement(e) && !Yi(e.type)
    ? E.cloneElement(e, {
        closeToast: i.closeToast,
        toastProps: i,
        data: i.data,
        isPaused: s,
      })
    : Un(e)
    ? e({ closeToast: i.closeToast, toastProps: i, data: i.data, isPaused: s })
    : e;
}
function BE({ closeToast: e, theme: i, ariaLabel: s = "close" }) {
  return Nt.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${i}`,
      type: "button",
      onClick: (r) => {
        r.stopPropagation(), e(!0);
      },
      "aria-label": s,
    },
    Nt.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      Nt.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function UE({
  delay: e,
  isRunning: i,
  closeToast: s,
  type: r = "default",
  hide: l,
  className: c,
  controlledProgress: f,
  progress: d,
  rtl: p,
  isIn: m,
  theme: y,
}) {
  let b = l || (f && d === 0),
    x = {
      animationDuration: `${e}ms`,
      animationPlayState: i ? "running" : "paused",
    };
  f && (x.transform = `scaleX(${d})`);
  let O = ki(
      "Toastify__progress-bar",
      f
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${y}`,
      `Toastify__progress-bar--${r}`,
      { "Toastify__progress-bar--rtl": p }
    ),
    A = Un(c) ? c({ rtl: p, type: r, defaultClassName: O }) : ki(O, c),
    M = {
      [f && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        f && d < 1
          ? null
          : () => {
              m && s();
            },
    };
  return Nt.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": b },
    Nt.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${y} Toastify__progress-bar--${r}`,
    }),
    Nt.createElement("div", {
      role: "progressbar",
      "aria-hidden": b ? "true" : "false",
      "aria-label": "notification timer",
      className: A,
      style: x,
      ...M,
    })
  );
}
var VE = 1,
  rv = () => `${VE++}`;
function zE(e, i, s) {
  let r = 1,
    l = 0,
    c = [],
    f = [],
    d = i,
    p = new Map(),
    m = new Set(),
    y = (B) => (m.add(B), () => m.delete(B)),
    b = () => {
      (f = Array.from(p.values())), m.forEach((B) => B());
    },
    x = ({ containerId: B, toastId: N, updateId: G }) => {
      let k = B ? B !== e : e !== 1,
        J = p.has(N) && G == null;
      return k || J;
    },
    O = (B, N) => {
      p.forEach((G) => {
        var k;
        (N == null || N === G.props.toastId) &&
          ((k = G.toggle) == null || k.call(G, B));
      });
    },
    A = (B) => {
      var N, G;
      (G = (N = B.props) == null ? void 0 : N.onClose) == null ||
        G.call(N, B.removalReason),
        (B.isActive = !1);
    },
    M = (B) => {
      if (B == null) p.forEach(A);
      else {
        let N = p.get(B);
        N && A(N);
      }
      b();
    },
    R = () => {
      (l -= c.length), (c = []);
    },
    C = (B) => {
      var N, G;
      let { toastId: k, updateId: J } = B.props,
        Z = J == null;
      B.staleId && p.delete(B.staleId),
        (B.isActive = !0),
        p.set(k, B),
        b(),
        s(ug(B, Z ? "added" : "updated")),
        Z && ((G = (N = B.props).onOpen) == null || G.call(N));
    };
  return {
    id: e,
    props: d,
    observe: y,
    toggle: O,
    removeToast: M,
    toasts: p,
    clearQueue: R,
    buildToast: (B, N) => {
      if (x(N)) return;
      let { toastId: G, updateId: k, data: J, staleId: Z, delay: Q } = N,
        K = k == null;
      K && l++;
      let W = {
        ...d,
        style: d.toastStyle,
        key: r++,
        ...Object.fromEntries(
          Object.entries(N).filter(([dt, oe]) => oe != null)
        ),
        toastId: G,
        updateId: k,
        data: J,
        isIn: !1,
        className: Af(N.className || d.toastClassName),
        progressClassName: Af(N.progressClassName || d.progressClassName),
        autoClose: N.isLoading ? !1 : NE(N.autoClose, d.autoClose),
        closeToast(dt) {
          (p.get(G).removalReason = dt), M(G);
        },
        deleteToast() {
          let dt = p.get(G);
          if (dt != null) {
            if (
              (s(ug(dt, "removed")),
              p.delete(G),
              l--,
              l < 0 && (l = 0),
              c.length > 0)
            ) {
              C(c.shift());
              return;
            }
            b();
          }
        },
      };
      (W.closeButton = d.closeButton),
        N.closeButton === !1 || Rf(N.closeButton)
          ? (W.closeButton = N.closeButton)
          : N.closeButton === !0 &&
            (W.closeButton = Rf(d.closeButton) ? d.closeButton : !0);
      let ct = { content: B, props: W, staleId: Z };
      d.limit && d.limit > 0 && l > d.limit && K
        ? c.push(ct)
        : gr(Q)
        ? setTimeout(() => {
            C(ct);
          }, Q)
        : C(ct);
    },
    setProps(B) {
      d = B;
    },
    setToggle: (B, N) => {
      let G = p.get(B);
      G && (G.toggle = N);
    },
    isToastActive: (B) => {
      var N;
      return (N = p.get(B)) == null ? void 0 : N.isActive;
    },
    getSnapshot: () => f,
  };
}
var pe = new Map(),
  rr = [],
  Cf = new Set(),
  kE = (e) => Cf.forEach((i) => i(e)),
  ov = () => pe.size > 0;
function HE() {
  rr.forEach((e) => uv(e.content, e.options)), (rr = []);
}
var qE = (e, { containerId: i }) => {
  var s;
  return (s = pe.get(i || 1)) == null ? void 0 : s.toasts.get(e);
};
function lv(e, i) {
  var s;
  if (i) return !!((s = pe.get(i)) != null && s.isToastActive(e));
  let r = !1;
  return (
    pe.forEach((l) => {
      l.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function PE(e) {
  if (!ov()) {
    rr = rr.filter((i) => e != null && i.options.toastId !== e);
    return;
  }
  if (e == null || ME(e))
    pe.forEach((i) => {
      i.removeToast(e);
    });
  else if (e && ("containerId" in e || "id" in e)) {
    let i = pe.get(e.containerId);
    i
      ? i.removeToast(e.id)
      : pe.forEach((s) => {
          s.removeToast(e.id);
        });
  }
}
var YE = (e = {}) => {
  pe.forEach((i) => {
    i.props.limit &&
      (!e.containerId || i.id === e.containerId) &&
      i.clearQueue();
  });
};
function uv(e, i) {
  Rf(e) &&
    (ov() || rr.push({ content: e, options: i }),
    pe.forEach((s) => {
      s.buildToast(e, i);
    }));
}
function GE(e) {
  var i;
  (i = pe.get(e.containerId || 1)) == null || i.setToggle(e.id, e.fn);
}
function cv(e, i) {
  pe.forEach((s) => {
    (i == null || !(i != null && i.containerId) || i?.containerId === s.id) &&
      s.toggle(e, i?.id);
  });
}
function XE(e) {
  let i = e.containerId || 1;
  return {
    subscribe(s) {
      let r = zE(i, e, kE);
      pe.set(i, r);
      let l = r.observe(s);
      return (
        HE(),
        () => {
          l(), pe.delete(i);
        }
      );
    },
    setProps(s) {
      var r;
      (r = pe.get(i)) == null || r.setProps(s);
    },
    getSnapshot() {
      var s;
      return (s = pe.get(i)) == null ? void 0 : s.getSnapshot();
    },
  };
}
function KE(e) {
  return (
    Cf.add(e),
    () => {
      Cf.delete(e);
    }
  );
}
function FE(e) {
  return e && (Yi(e.toastId) || gr(e.toastId)) ? e.toastId : rv();
}
function vr(e, i) {
  return uv(e, i), i.toastId;
}
function bl(e, i) {
  return { ...i, type: (i && i.type) || e, toastId: FE(i) };
}
function xl(e) {
  return (i, s) => vr(i, bl(e, s));
}
function ht(e, i) {
  return vr(e, bl("default", i));
}
ht.loading = (e, i) =>
  vr(
    e,
    bl("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...i,
    })
  );
function QE(e, { pending: i, error: s, success: r }, l) {
  let c;
  i && (c = Yi(i) ? ht.loading(i, l) : ht.loading(i.render, { ...l, ...i }));
  let f = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    d = (m, y, b) => {
      if (y == null) {
        ht.dismiss(c);
        return;
      }
      let x = { type: m, ...f, ...l, data: b },
        O = Yi(y) ? { render: y } : y;
      return c ? ht.update(c, { ...x, ...O }) : ht(O.render, { ...x, ...O }), b;
    },
    p = Un(e) ? e() : e;
  return p.then((m) => d("success", r, m)).catch((m) => d("error", s, m)), p;
}
ht.promise = QE;
ht.success = xl("success");
ht.info = xl("info");
ht.error = xl("error");
ht.warning = xl("warning");
ht.warn = ht.warning;
ht.dark = (e, i) => vr(e, bl("default", { theme: "dark", ...i }));
function ZE(e) {
  PE(e);
}
ht.dismiss = ZE;
ht.clearWaitingQueue = YE;
ht.isActive = lv;
ht.update = (e, i = {}) => {
  let s = qE(e, i);
  if (s) {
    let { props: r, content: l } = s,
      c = { delay: 100, ...r, ...i, toastId: i.toastId || e, updateId: rv() };
    c.toastId !== e && (c.staleId = e);
    let f = c.render || l;
    delete c.render, vr(f, c);
  }
};
ht.done = (e) => {
  ht.update(e, { progress: 1 });
};
ht.onChange = KE;
ht.play = (e) => cv(!0, e);
ht.pause = (e) => cv(!1, e);
function $E(e) {
  var i;
  let { subscribe: s, getSnapshot: r, setProps: l } = E.useRef(XE(e)).current;
  l(e);
  let c = (i = E.useSyncExternalStore(s, r, r)) == null ? void 0 : i.slice();
  function f(d) {
    if (!c) return [];
    let p = new Map();
    return (
      e.newestOnTop && c.reverse(),
      c.forEach((m) => {
        let { position: y } = m.props;
        p.has(y) || p.set(y, []), p.get(y).push(m);
      }),
      Array.from(p, (m) => d(m[0], m[1]))
    );
  }
  return { getToastToRender: f, isToastActive: lv, count: c?.length };
}
function JE(e) {
  let [i, s] = E.useState(!1),
    [r, l] = E.useState(!1),
    c = E.useRef(null),
    f = E.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: d,
      pauseOnHover: p,
      closeToast: m,
      onClick: y,
      closeOnClick: b,
    } = e;
  GE({ id: e.toastId, containerId: e.containerId, fn: s }),
    E.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          x(),
          () => {
            O();
          }
        );
    }, [e.pauseOnFocusLoss]);
  function x() {
    document.hasFocus() || C(),
      window.addEventListener("focus", R),
      window.addEventListener("blur", C);
  }
  function O() {
    window.removeEventListener("focus", R),
      window.removeEventListener("blur", C);
  }
  function A(Z) {
    if (e.draggable === !0 || e.draggable === Z.pointerType) {
      B();
      let Q = c.current;
      (f.canCloseOnClick = !0),
        (f.canDrag = !0),
        (Q.style.transition = "none"),
        e.draggableDirection === "x"
          ? ((f.start = Z.clientX),
            (f.removalDistance = Q.offsetWidth * (e.draggablePercent / 100)))
          : ((f.start = Z.clientY),
            (f.removalDistance =
              (Q.offsetHeight *
                (e.draggablePercent === 80
                  ? e.draggablePercent * 1.5
                  : e.draggablePercent)) /
              100));
    }
  }
  function M(Z) {
    let {
      top: Q,
      bottom: K,
      left: W,
      right: ct,
    } = c.current.getBoundingClientRect();
    Z.nativeEvent.type !== "touchend" &&
    e.pauseOnHover &&
    Z.clientX >= W &&
    Z.clientX <= ct &&
    Z.clientY >= Q &&
    Z.clientY <= K
      ? C()
      : R();
  }
  function R() {
    s(!0);
  }
  function C() {
    s(!1);
  }
  function B() {
    (f.didMove = !1),
      document.addEventListener("pointermove", G),
      document.addEventListener("pointerup", k);
  }
  function N() {
    document.removeEventListener("pointermove", G),
      document.removeEventListener("pointerup", k);
  }
  function G(Z) {
    let Q = c.current;
    if (f.canDrag && Q) {
      (f.didMove = !0),
        i && C(),
        e.draggableDirection === "x"
          ? (f.delta = Z.clientX - f.start)
          : (f.delta = Z.clientY - f.start),
        f.start !== Z.clientX && (f.canCloseOnClick = !1);
      let K =
        e.draggableDirection === "x"
          ? `${f.delta}px, var(--y)`
          : `0, calc(${f.delta}px + var(--y))`;
      (Q.style.transform = `translate3d(${K},0)`),
        (Q.style.opacity = `${1 - Math.abs(f.delta / f.removalDistance)}`);
    }
  }
  function k() {
    N();
    let Z = c.current;
    if (f.canDrag && f.didMove && Z) {
      if (((f.canDrag = !1), Math.abs(f.delta) > f.removalDistance)) {
        l(!0), e.closeToast(!0), e.collapseAll();
        return;
      }
      (Z.style.transition = "transform 0.2s, opacity 0.2s"),
        Z.style.removeProperty("transform"),
        Z.style.removeProperty("opacity");
    }
  }
  let J = { onPointerDown: A, onPointerUp: M };
  return (
    d && p && ((J.onMouseEnter = C), e.stacked || (J.onMouseLeave = R)),
    b &&
      (J.onClick = (Z) => {
        y && y(Z), f.canCloseOnClick && m(!0);
      }),
    {
      playToast: R,
      pauseToast: C,
      isRunning: i,
      preventExitTransition: r,
      toastRef: c,
      eventHandlers: J,
    }
  );
}
var WE = typeof window < "u" ? E.useLayoutEffect : E.useEffect,
  Tl = ({ theme: e, type: i, isLoading: s, ...r }) =>
    Nt.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        e === "colored" ? "currentColor" : `var(--toastify-icon-color-${i})`,
      ...r,
    });
function IE(e) {
  return Nt.createElement(
    Tl,
    { ...e },
    Nt.createElement("path", {
      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
    })
  );
}
function t_(e) {
  return Nt.createElement(
    Tl,
    { ...e },
    Nt.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
    })
  );
}
function e_(e) {
  return Nt.createElement(
    Tl,
    { ...e },
    Nt.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
    })
  );
}
function n_(e) {
  return Nt.createElement(
    Tl,
    { ...e },
    Nt.createElement("path", {
      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
    })
  );
}
function i_() {
  return Nt.createElement("div", { className: "Toastify__spinner" });
}
var Of = { info: t_, warning: IE, success: e_, error: n_, spinner: i_ },
  a_ = (e) => e in Of;
function s_({ theme: e, type: i, isLoading: s, icon: r }) {
  let l = null,
    c = { theme: e, type: i };
  return (
    r === !1 ||
      (Un(r)
        ? (l = r({ ...c, isLoading: s }))
        : E.isValidElement(r)
        ? (l = E.cloneElement(r, c))
        : s
        ? (l = Of.spinner())
        : a_(i) && (l = Of[i](c))),
    l
  );
}
var r_ = (e) => {
    let {
        isRunning: i,
        preventExitTransition: s,
        toastRef: r,
        eventHandlers: l,
        playToast: c,
      } = JE(e),
      {
        closeButton: f,
        children: d,
        autoClose: p,
        onClick: m,
        type: y,
        hideProgressBar: b,
        closeToast: x,
        transition: O,
        position: A,
        className: M,
        style: R,
        progressClassName: C,
        updateId: B,
        role: N,
        progress: G,
        rtl: k,
        toastId: J,
        deleteToast: Z,
        isIn: Q,
        isLoading: K,
        closeOnClick: W,
        theme: ct,
        ariaLabel: dt,
      } = e,
      oe = ki(
        "Toastify__toast",
        `Toastify__toast-theme--${ct}`,
        `Toastify__toast--${y}`,
        { "Toastify__toast--rtl": k },
        { "Toastify__toast--close-on-click": W }
      ),
      de = Un(M)
        ? M({ rtl: k, position: A, type: y, defaultClassName: oe })
        : ki(oe, M),
      Ht = s_(e),
      H = !!G || !p,
      F = { closeToast: x, type: y, theme: ct },
      tt = null;
    return (
      f === !1 ||
        (Un(f)
          ? (tt = f(F))
          : E.isValidElement(f)
          ? (tt = E.cloneElement(f, F))
          : (tt = BE(F))),
      Nt.createElement(
        O,
        {
          isIn: Q,
          done: Z,
          position: A,
          preventExitTransition: s,
          nodeRef: r,
          playToast: c,
        },
        Nt.createElement(
          "div",
          {
            id: J,
            tabIndex: 0,
            onClick: m,
            "data-in": Q,
            className: de,
            ...l,
            style: R,
            ref: r,
            ...(Q && { role: N, "aria-label": dt }),
          },
          Ht != null &&
            Nt.createElement(
              "div",
              {
                className: ki("Toastify__toast-icon", {
                  "Toastify--animate-icon Toastify__zoom-enter": !K,
                }),
              },
              Ht
            ),
          sv(d, e, !i),
          tt,
          !e.customProgressBar &&
            Nt.createElement(UE, {
              ...(B && !H ? { key: `p-${B}` } : {}),
              rtl: k,
              theme: ct,
              delay: p,
              isRunning: i,
              isIn: Q,
              closeToast: x,
              hide: b,
              type: y,
              className: C,
              controlledProgress: H,
              progress: G || 0,
            })
        )
      )
    );
  },
  o_ = (e, i = !1) => ({
    enter: `Toastify--animate Toastify__${e}-enter`,
    exit: `Toastify--animate Toastify__${e}-exit`,
    appendPosition: i,
  }),
  l_ = LE(o_("bounce", !0)),
  u_ = {
    position: "top-right",
    transition: l_,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
    "aria-label": "Notifications Alt+T",
    hotKeys: (e) => e.altKey && e.code === "KeyT",
  };
function fv(e) {
  let i = { ...u_, ...e },
    s = e.stacked,
    [r, l] = E.useState(!0),
    c = E.useRef(null),
    { getToastToRender: f, isToastActive: d, count: p } = $E(i),
    { className: m, style: y, rtl: b, containerId: x, hotKeys: O } = i;
  function A(R) {
    let C = ki("Toastify__toast-container", `Toastify__toast-container--${R}`, {
      "Toastify__toast-container--rtl": b,
    });
    return Un(m)
      ? m({ position: R, rtl: b, defaultClassName: C })
      : ki(C, Af(m));
  }
  function M() {
    s && (l(!0), ht.play());
  }
  return (
    WE(() => {
      var R;
      if (s) {
        let C = c.current.querySelectorAll('[data-in="true"]'),
          B = 12,
          N = (R = i.position) == null ? void 0 : R.includes("top"),
          G = 0,
          k = 0;
        Array.from(C)
          .reverse()
          .forEach((J, Z) => {
            let Q = J;
            Q.classList.add("Toastify__toast--stacked"),
              Z > 0 && (Q.dataset.collapsed = `${r}`),
              Q.dataset.pos || (Q.dataset.pos = N ? "top" : "bot");
            let K = G * (r ? 0.2 : 1) + (r ? 0 : B * Z);
            Q.style.setProperty("--y", `${N ? K : K * -1}px`),
              Q.style.setProperty("--g", `${B}`),
              Q.style.setProperty("--s", `${1 - (r ? k : 0)}`),
              (G += Q.offsetHeight),
              (k += 0.025);
          });
      }
    }, [r, p, s]),
    E.useEffect(() => {
      function R(C) {
        var B;
        let N = c.current;
        O(C) &&
          ((B = N.querySelector('[tabIndex="0"]')) == null || B.focus(),
          l(!1),
          ht.pause()),
          C.key === "Escape" &&
            (document.activeElement === N ||
              (N != null && N.contains(document.activeElement))) &&
            (l(!0), ht.play());
      }
      return (
        document.addEventListener("keydown", R),
        () => {
          document.removeEventListener("keydown", R);
        }
      );
    }, [O]),
    Nt.createElement(
      "section",
      {
        ref: c,
        className: "Toastify",
        id: x,
        onMouseEnter: () => {
          s && (l(!1), ht.pause());
        },
        onMouseLeave: M,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": i["aria-label"],
      },
      f((R, C) => {
        let B = C.length ? { ...y } : { ...y, pointerEvents: "none" };
        return Nt.createElement(
          "div",
          {
            tabIndex: -1,
            className: A(R),
            "data-stacked": s,
            style: B,
            key: `c-${R}`,
          },
          C.map(({ content: N, props: G }) =>
            Nt.createElement(
              r_,
              {
                ...G,
                stacked: s,
                collapseAll: M,
                isIn: d(G.toastId, G.containerId),
                key: `t-${G.key}`,
              },
              N
            )
          )
        );
      })
    )
  );
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  f_ = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, r) =>
      r ? r.toUpperCase() : s.toLowerCase()
    ),
  cg = (e) => {
    const i = f_(e);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  hv = (...e) =>
    e
      .filter((i, s, r) => !!i && i.trim() !== "" && r.indexOf(i) === s)
      .join(" ")
      .trim(),
  h_ = (e) => {
    for (const i in e)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var d_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m_ = E.forwardRef(
  (
    {
      color: e = "currentColor",
      size: i = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: r,
      className: l = "",
      children: c,
      iconNode: f,
      ...d
    },
    p
  ) =>
    E.createElement(
      "svg",
      {
        ref: p,
        ...d_,
        width: i,
        height: i,
        stroke: e,
        strokeWidth: r ? (Number(s) * 24) / Number(i) : s,
        className: hv("lucide", l),
        ...(!c && !h_(d) && { "aria-hidden": "true" }),
        ...d,
      },
      [
        ...f.map(([m, y]) => E.createElement(m, y)),
        ...(Array.isArray(c) ? c : [c]),
      ]
    )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dv = (e, i) => {
  const s = E.forwardRef(({ className: r, ...l }, c) =>
    E.createElement(m_, {
      ref: c,
      iconNode: i,
      className: hv(`lucide-${c_(cg(e))}`, `lucide-${e}`, r),
      ...l,
    })
  );
  return (s.displayName = cg(e)), s;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p_ = [
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 18h16", key: "19g7jn" }],
    ["path", { d: "M4 6h16", key: "1o0s65" }],
  ],
  y_ = dv("menu", p_);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g_ = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  fg = dv("x", g_),
  mv = E.createContext({});
function v_(e) {
  const i = E.useRef(null);
  return i.current === null && (i.current = e()), i.current;
}
const yh = typeof window < "u",
  b_ = yh ? E.useLayoutEffect : E.useEffect,
  gh = E.createContext(null);
function vh(e, i) {
  e.indexOf(i) === -1 && e.push(i);
}
function bh(e, i) {
  const s = e.indexOf(i);
  s > -1 && e.splice(s, 1);
}
const Vn = (e, i, s) => (s > i ? i : s < e ? e : s);
let xh = () => {};
const zn = {},
  pv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function yv(e) {
  return typeof e == "object" && e !== null;
}
const gv = (e) => /^0[^.\s]+$/u.test(e);
function Th(e) {
  let i;
  return () => (i === void 0 && (i = e()), i);
}
const Qe = (e) => e,
  x_ = (e, i) => (s) => i(e(s)),
  br = (...e) => e.reduce(x_),
  or = (e, i, s) => {
    const r = i - e;
    return r === 0 ? 1 : (s - e) / r;
  };
class Sh {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return vh(this.subscriptions, i), () => bh(this.subscriptions, i);
  }
  notify(i, s, r) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1) this.subscriptions[0](i, s, r);
      else
        for (let c = 0; c < l; c++) {
          const f = this.subscriptions[c];
          f && f(i, s, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const dn = (e) => e * 1e3,
  mn = (e) => e / 1e3;
function vv(e, i) {
  return i ? e * (1e3 / i) : 0;
}
const bv = (e, i, s) =>
    (((1 - 3 * s + 3 * i) * e + (3 * s - 6 * i)) * e + 3 * i) * e,
  T_ = 1e-7,
  S_ = 12;
function E_(e, i, s, r, l) {
  let c,
    f,
    d = 0;
  do (f = i + (s - i) / 2), (c = bv(f, r, l) - e), c > 0 ? (s = f) : (i = f);
  while (Math.abs(c) > T_ && ++d < S_);
  return f;
}
function xr(e, i, s, r) {
  if (e === i && s === r) return Qe;
  const l = (c) => E_(c, 0, 1, e, s);
  return (c) => (c === 0 || c === 1 ? c : bv(l(c), i, r));
}
const xv = (e) => (i) => i <= 0.5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2,
  Tv = (e) => (i) => 1 - e(1 - i),
  Sv = xr(0.33, 1.53, 0.69, 0.99),
  Eh = Tv(Sv),
  Ev = xv(Eh),
  _v = (e) =>
    (e *= 2) < 1 ? 0.5 * Eh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  _h = (e) => 1 - Math.sin(Math.acos(e)),
  wv = Tv(_h),
  Av = xv(_h),
  __ = xr(0.42, 0, 1, 1),
  w_ = xr(0, 0, 0.58, 1),
  Rv = xr(0.42, 0, 0.58, 1),
  A_ = (e) => Array.isArray(e) && typeof e[0] != "number",
  Cv = (e) => Array.isArray(e) && typeof e[0] == "number",
  R_ = {
    linear: Qe,
    easeIn: __,
    easeInOut: Rv,
    easeOut: w_,
    circIn: _h,
    circInOut: Av,
    circOut: wv,
    backIn: Eh,
    backInOut: Ev,
    backOut: Sv,
    anticipate: _v,
  },
  C_ = (e) => typeof e == "string",
  hg = (e) => {
    if (Cv(e)) {
      xh(e.length === 4);
      const [i, s, r, l] = e;
      return xr(i, s, r, l);
    } else if (C_(e)) return R_[e];
    return e;
  },
  Go = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function O_(e, i) {
  let s = new Set(),
    r = new Set(),
    l = !1,
    c = !1;
  const f = new WeakSet();
  let d = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(y) {
    f.has(y) && (m.schedule(y), e()), y(d);
  }
  const m = {
    schedule: (y, b = !1, x = !1) => {
      const A = x && l ? s : r;
      return b && f.add(y), A.has(y) || A.add(y), y;
    },
    cancel: (y) => {
      r.delete(y), f.delete(y);
    },
    process: (y) => {
      if (((d = y), l)) {
        c = !0;
        return;
      }
      (l = !0),
        ([s, r] = [r, s]),
        s.forEach(p),
        s.clear(),
        (l = !1),
        c && ((c = !1), m.process(y));
    },
  };
  return m;
}
const D_ = 40;
function Ov(e, i) {
  let s = !1,
    r = !0;
  const l = { delta: 0, timestamp: 0, isProcessing: !1 },
    c = () => (s = !0),
    f = Go.reduce((N, G) => ((N[G] = O_(c)), N), {}),
    {
      setup: d,
      read: p,
      resolveKeyframes: m,
      preUpdate: y,
      update: b,
      preRender: x,
      render: O,
      postRender: A,
    } = f,
    M = () => {
      const N = zn.useManualTiming ? l.timestamp : performance.now();
      (s = !1),
        zn.useManualTiming ||
          (l.delta = r ? 1e3 / 60 : Math.max(Math.min(N - l.timestamp, D_), 1)),
        (l.timestamp = N),
        (l.isProcessing = !0),
        d.process(l),
        p.process(l),
        m.process(l),
        y.process(l),
        b.process(l),
        x.process(l),
        O.process(l),
        A.process(l),
        (l.isProcessing = !1),
        s && i && ((r = !1), e(M));
    },
    R = () => {
      (s = !0), (r = !0), l.isProcessing || e(M);
    };
  return {
    schedule: Go.reduce((N, G) => {
      const k = f[G];
      return (N[G] = (J, Z = !1, Q = !1) => (s || R(), k.schedule(J, Z, Q))), N;
    }, {}),
    cancel: (N) => {
      for (let G = 0; G < Go.length; G++) f[Go[G]].cancel(N);
    },
    state: l,
    steps: f,
  };
}
const {
  schedule: Ut,
  cancel: hi,
  state: re,
  steps: nf,
} = Ov(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Qe, !0);
let Jo;
function M_() {
  Jo = void 0;
}
const Se = {
    now: () => (
      Jo === void 0 &&
        Se.set(
          re.isProcessing || zn.useManualTiming
            ? re.timestamp
            : performance.now()
        ),
      Jo
    ),
    set: (e) => {
      (Jo = e), queueMicrotask(M_);
    },
  },
  Dv = (e) => (i) => typeof i == "string" && i.startsWith(e),
  wh = Dv("--"),
  N_ = Dv("var(--"),
  Ah = (e) => (N_(e) ? j_.test(e.split("/*")[0].trim()) : !1),
  j_ =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Pa = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  lr = { ...Pa, transform: (e) => Vn(0, 1, e) },
  Xo = { ...Pa, default: 1 },
  tr = (e) => Math.round(e * 1e5) / 1e5,
  Rh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function L_(e) {
  return e == null;
}
const B_ =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ch = (e, i) => (s) =>
    !!(
      (typeof s == "string" && B_.test(s) && s.startsWith(e)) ||
      (i && !L_(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  Mv = (e, i, s) => (r) => {
    if (typeof r != "string") return r;
    const [l, c, f, d] = r.match(Rh);
    return {
      [e]: parseFloat(l),
      [i]: parseFloat(c),
      [s]: parseFloat(f),
      alpha: d !== void 0 ? parseFloat(d) : 1,
    };
  },
  U_ = (e) => Vn(0, 255, e),
  af = { ...Pa, transform: (e) => Math.round(U_(e)) },
  Ui = {
    test: Ch("rgb", "red"),
    parse: Mv("red", "green", "blue"),
    transform: ({ red: e, green: i, blue: s, alpha: r = 1 }) =>
      "rgba(" +
      af.transform(e) +
      ", " +
      af.transform(i) +
      ", " +
      af.transform(s) +
      ", " +
      tr(lr.transform(r)) +
      ")",
  };
function V_(e) {
  let i = "",
    s = "",
    r = "",
    l = "";
  return (
    e.length > 5
      ? ((i = e.substring(1, 3)),
        (s = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (l = e.substring(7, 9)))
      : ((i = e.substring(1, 2)),
        (s = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (l = e.substring(4, 5)),
        (i += i),
        (s += s),
        (r += r),
        (l += l)),
    {
      red: parseInt(i, 16),
      green: parseInt(s, 16),
      blue: parseInt(r, 16),
      alpha: l ? parseInt(l, 16) / 255 : 1,
    }
  );
}
const Df = { test: Ch("#"), parse: V_, transform: Ui.transform },
  Tr = (e) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(e) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${e}`,
  }),
  ci = Tr("deg"),
  pn = Tr("%"),
  ot = Tr("px"),
  z_ = Tr("vh"),
  k_ = Tr("vw"),
  dg = {
    ...pn,
    parse: (e) => pn.parse(e) / 100,
    transform: (e) => pn.transform(e * 100),
  },
  Ma = {
    test: Ch("hsl", "hue"),
    parse: Mv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: i, lightness: s, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      pn.transform(tr(i)) +
      ", " +
      pn.transform(tr(s)) +
      ", " +
      tr(lr.transform(r)) +
      ")",
  },
  Zt = {
    test: (e) => Ui.test(e) || Df.test(e) || Ma.test(e),
    parse: (e) =>
      Ui.test(e) ? Ui.parse(e) : Ma.test(e) ? Ma.parse(e) : Df.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? Ui.transform(e)
        : Ma.transform(e),
    getAnimatableNone: (e) => {
      const i = Zt.parse(e);
      return (i.alpha = 0), Zt.transform(i);
    },
  },
  H_ =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function q_(e) {
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (e.match(Rh)?.length || 0) + (e.match(H_)?.length || 0) > 0
  );
}
const Nv = "number",
  jv = "color",
  P_ = "var",
  Y_ = "var(",
  mg = "${}",
  G_ =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ur(e) {
  const i = e.toString(),
    s = [],
    r = { color: [], number: [], var: [] },
    l = [];
  let c = 0;
  const d = i
    .replace(
      G_,
      (p) => (
        Zt.test(p)
          ? (r.color.push(c), l.push(jv), s.push(Zt.parse(p)))
          : p.startsWith(Y_)
          ? (r.var.push(c), l.push(P_), s.push(p))
          : (r.number.push(c), l.push(Nv), s.push(parseFloat(p))),
        ++c,
        mg
      )
    )
    .split(mg);
  return { values: s, split: d, indexes: r, types: l };
}
function Lv(e) {
  return ur(e).values;
}
function Bv(e) {
  const { split: i, types: s } = ur(e),
    r = i.length;
  return (l) => {
    let c = "";
    for (let f = 0; f < r; f++)
      if (((c += i[f]), l[f] !== void 0)) {
        const d = s[f];
        d === Nv
          ? (c += tr(l[f]))
          : d === jv
          ? (c += Zt.transform(l[f]))
          : (c += l[f]);
      }
    return c;
  };
}
const X_ = (e) =>
  typeof e == "number" ? 0 : Zt.test(e) ? Zt.getAnimatableNone(e) : e;
function K_(e) {
  const i = Lv(e);
  return Bv(e)(i.map(X_));
}
const di = {
  test: q_,
  parse: Lv,
  createTransformer: Bv,
  getAnimatableNone: K_,
};
function sf(e, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? e + (i - e) * 6 * s
      : s < 1 / 2
      ? i
      : s < 2 / 3
      ? e + (i - e) * (2 / 3 - s) * 6
      : e
  );
}
function F_({ hue: e, saturation: i, lightness: s, alpha: r }) {
  (e /= 360), (i /= 100), (s /= 100);
  let l = 0,
    c = 0,
    f = 0;
  if (!i) l = c = f = s;
  else {
    const d = s < 0.5 ? s * (1 + i) : s + i - s * i,
      p = 2 * s - d;
    (l = sf(p, d, e + 1 / 3)), (c = sf(p, d, e)), (f = sf(p, d, e - 1 / 3));
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(c * 255),
    blue: Math.round(f * 255),
    alpha: r,
  };
}
function cl(e, i) {
  return (s) => (s > 0 ? i : e);
}
const kt = (e, i, s) => e + (i - e) * s,
  rf = (e, i, s) => {
    const r = e * e,
      l = s * (i * i - r) + r;
    return l < 0 ? 0 : Math.sqrt(l);
  },
  Q_ = [Df, Ui, Ma],
  Z_ = (e) => Q_.find((i) => i.test(e));
function pg(e) {
  const i = Z_(e);
  if (!i) return !1;
  let s = i.parse(e);
  return i === Ma && (s = F_(s)), s;
}
const yg = (e, i) => {
    const s = pg(e),
      r = pg(i);
    if (!s || !r) return cl(e, i);
    const l = { ...s };
    return (c) => (
      (l.red = rf(s.red, r.red, c)),
      (l.green = rf(s.green, r.green, c)),
      (l.blue = rf(s.blue, r.blue, c)),
      (l.alpha = kt(s.alpha, r.alpha, c)),
      Ui.transform(l)
    );
  },
  Mf = new Set(["none", "hidden"]);
function $_(e, i) {
  return Mf.has(e) ? (s) => (s <= 0 ? e : i) : (s) => (s >= 1 ? i : e);
}
function J_(e, i) {
  return (s) => kt(e, i, s);
}
function Oh(e) {
  return typeof e == "number"
    ? J_
    : typeof e == "string"
    ? Ah(e)
      ? cl
      : Zt.test(e)
      ? yg
      : tw
    : Array.isArray(e)
    ? Uv
    : typeof e == "object"
    ? Zt.test(e)
      ? yg
      : W_
    : cl;
}
function Uv(e, i) {
  const s = [...e],
    r = s.length,
    l = e.map((c, f) => Oh(c)(c, i[f]));
  return (c) => {
    for (let f = 0; f < r; f++) s[f] = l[f](c);
    return s;
  };
}
function W_(e, i) {
  const s = { ...e, ...i },
    r = {};
  for (const l in s)
    e[l] !== void 0 && i[l] !== void 0 && (r[l] = Oh(e[l])(e[l], i[l]));
  return (l) => {
    for (const c in r) s[c] = r[c](l);
    return s;
  };
}
function I_(e, i) {
  const s = [],
    r = { color: 0, var: 0, number: 0 };
  for (let l = 0; l < i.values.length; l++) {
    const c = i.types[l],
      f = e.indexes[c][r[c]],
      d = e.values[f] ?? 0;
    (s[l] = d), r[c]++;
  }
  return s;
}
const tw = (e, i) => {
  const s = di.createTransformer(i),
    r = ur(e),
    l = ur(i);
  return r.indexes.var.length === l.indexes.var.length &&
    r.indexes.color.length === l.indexes.color.length &&
    r.indexes.number.length >= l.indexes.number.length
    ? (Mf.has(e) && !l.values.length) || (Mf.has(i) && !r.values.length)
      ? $_(e, i)
      : br(Uv(I_(r, l), l.values), s)
    : cl(e, i);
};
function Vv(e, i, s) {
  return typeof e == "number" && typeof i == "number" && typeof s == "number"
    ? kt(e, i, s)
    : Oh(e)(e, i);
}
const ew = (e) => {
    const i = ({ timestamp: s }) => e(s);
    return {
      start: (s = !0) => Ut.update(i, s),
      stop: () => hi(i),
      now: () => (re.isProcessing ? re.timestamp : Se.now()),
    };
  },
  zv = (e, i, s = 10) => {
    let r = "";
    const l = Math.max(Math.round(i / s), 2);
    for (let c = 0; c < l; c++)
      r += Math.round(e(c / (l - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  fl = 2e4;
function Dh(e) {
  let i = 0;
  const s = 50;
  let r = e.next(i);
  for (; !r.done && i < fl; ) (i += s), (r = e.next(i));
  return i >= fl ? 1 / 0 : i;
}
function nw(e, i = 100, s) {
  const r = s({ ...e, keyframes: [0, i] }),
    l = Math.min(Dh(r), fl);
  return {
    type: "keyframes",
    ease: (c) => r.next(l * c).value / i,
    duration: mn(l),
  };
}
const iw = 5;
function kv(e, i, s) {
  const r = Math.max(i - iw, 0);
  return vv(s - e(r), i - r);
}
const Yt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  of = 0.001;
function aw({
  duration: e = Yt.duration,
  bounce: i = Yt.bounce,
  velocity: s = Yt.velocity,
  mass: r = Yt.mass,
}) {
  let l,
    c,
    f = 1 - i;
  (f = Vn(Yt.minDamping, Yt.maxDamping, f)),
    (e = Vn(Yt.minDuration, Yt.maxDuration, mn(e))),
    f < 1
      ? ((l = (m) => {
          const y = m * f,
            b = y * e,
            x = y - s,
            O = Nf(m, f),
            A = Math.exp(-b);
          return of - (x / O) * A;
        }),
        (c = (m) => {
          const b = m * f * e,
            x = b * s + s,
            O = Math.pow(f, 2) * Math.pow(m, 2) * e,
            A = Math.exp(-b),
            M = Nf(Math.pow(m, 2), f);
          return ((-l(m) + of > 0 ? -1 : 1) * ((x - O) * A)) / M;
        }))
      : ((l = (m) => {
          const y = Math.exp(-m * e),
            b = (m - s) * e + 1;
          return -of + y * b;
        }),
        (c = (m) => {
          const y = Math.exp(-m * e),
            b = (s - m) * (e * e);
          return y * b;
        }));
  const d = 5 / e,
    p = rw(l, c, d);
  if (((e = dn(e)), isNaN(p)))
    return { stiffness: Yt.stiffness, damping: Yt.damping, duration: e };
  {
    const m = Math.pow(p, 2) * r;
    return { stiffness: m, damping: f * 2 * Math.sqrt(r * m), duration: e };
  }
}
const sw = 12;
function rw(e, i, s) {
  let r = s;
  for (let l = 1; l < sw; l++) r = r - e(r) / i(r);
  return r;
}
function Nf(e, i) {
  return e * Math.sqrt(1 - i * i);
}
const ow = ["duration", "bounce"],
  lw = ["stiffness", "damping", "mass"];
function gg(e, i) {
  return i.some((s) => e[s] !== void 0);
}
function uw(e) {
  let i = {
    velocity: Yt.velocity,
    stiffness: Yt.stiffness,
    damping: Yt.damping,
    mass: Yt.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!gg(e, lw) && gg(e, ow))
    if (e.visualDuration) {
      const s = e.visualDuration,
        r = (2 * Math.PI) / (s * 1.2),
        l = r * r,
        c = 2 * Vn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(l);
      i = { ...i, mass: Yt.mass, stiffness: l, damping: c };
    } else {
      const s = aw(e);
      (i = { ...i, ...s, mass: Yt.mass }), (i.isResolvedFromDuration = !0);
    }
  return i;
}
function hl(e = Yt.visualDuration, i = Yt.bounce) {
  const s =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: i }
      : e;
  let { restSpeed: r, restDelta: l } = s;
  const c = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    d = { done: !1, value: c },
    {
      stiffness: p,
      damping: m,
      mass: y,
      duration: b,
      velocity: x,
      isResolvedFromDuration: O,
    } = uw({ ...s, velocity: -mn(s.velocity || 0) }),
    A = x || 0,
    M = m / (2 * Math.sqrt(p * y)),
    R = f - c,
    C = mn(Math.sqrt(p / y)),
    B = Math.abs(R) < 5;
  r || (r = B ? Yt.restSpeed.granular : Yt.restSpeed.default),
    l || (l = B ? Yt.restDelta.granular : Yt.restDelta.default);
  let N;
  if (M < 1) {
    const k = Nf(C, M);
    N = (J) => {
      const Z = Math.exp(-M * C * J);
      return (
        f - Z * (((A + M * C * R) / k) * Math.sin(k * J) + R * Math.cos(k * J))
      );
    };
  } else if (M === 1) N = (k) => f - Math.exp(-C * k) * (R + (A + C * R) * k);
  else {
    const k = C * Math.sqrt(M * M - 1);
    N = (J) => {
      const Z = Math.exp(-M * C * J),
        Q = Math.min(k * J, 300);
      return (
        f - (Z * ((A + M * C * R) * Math.sinh(Q) + k * R * Math.cosh(Q))) / k
      );
    };
  }
  const G = {
    calculatedDuration: (O && b) || null,
    next: (k) => {
      const J = N(k);
      if (O) d.done = k >= b;
      else {
        let Z = k === 0 ? A : 0;
        M < 1 && (Z = k === 0 ? dn(A) : kv(N, k, J));
        const Q = Math.abs(Z) <= r,
          K = Math.abs(f - J) <= l;
        d.done = Q && K;
      }
      return (d.value = d.done ? f : J), d;
    },
    toString: () => {
      const k = Math.min(Dh(G), fl),
        J = zv((Z) => G.next(k * Z).value, k, 30);
      return k + "ms " + J;
    },
    toTransition: () => {},
  };
  return G;
}
hl.applyToOptions = (e) => {
  const i = nw(e, 100, hl);
  return (
    (e.ease = i.ease), (e.duration = dn(i.duration)), (e.type = "keyframes"), e
  );
};
function jf({
  keyframes: e,
  velocity: i = 0,
  power: s = 0.8,
  timeConstant: r = 325,
  bounceDamping: l = 10,
  bounceStiffness: c = 500,
  modifyTarget: f,
  min: d,
  max: p,
  restDelta: m = 0.5,
  restSpeed: y,
}) {
  const b = e[0],
    x = { done: !1, value: b },
    O = (Q) => (d !== void 0 && Q < d) || (p !== void 0 && Q > p),
    A = (Q) =>
      d === void 0
        ? p
        : p === void 0 || Math.abs(d - Q) < Math.abs(p - Q)
        ? d
        : p;
  let M = s * i;
  const R = b + M,
    C = f === void 0 ? R : f(R);
  C !== R && (M = C - b);
  const B = (Q) => -M * Math.exp(-Q / r),
    N = (Q) => C + B(Q),
    G = (Q) => {
      const K = B(Q),
        W = N(Q);
      (x.done = Math.abs(K) <= m), (x.value = x.done ? C : W);
    };
  let k, J;
  const Z = (Q) => {
    O(x.value) &&
      ((k = Q),
      (J = hl({
        keyframes: [x.value, A(x.value)],
        velocity: kv(N, Q, x.value),
        damping: l,
        stiffness: c,
        restDelta: m,
        restSpeed: y,
      })));
  };
  return (
    Z(0),
    {
      calculatedDuration: null,
      next: (Q) => {
        let K = !1;
        return (
          !J && k === void 0 && ((K = !0), G(Q), Z(Q)),
          k !== void 0 && Q >= k ? J.next(Q - k) : (!K && G(Q), x)
        );
      },
    }
  );
}
function cw(e, i, s) {
  const r = [],
    l = s || zn.mix || Vv,
    c = e.length - 1;
  for (let f = 0; f < c; f++) {
    let d = l(e[f], e[f + 1]);
    if (i) {
      const p = Array.isArray(i) ? i[f] || Qe : i;
      d = br(p, d);
    }
    r.push(d);
  }
  return r;
}
function fw(e, i, { clamp: s = !0, ease: r, mixer: l } = {}) {
  const c = e.length;
  if ((xh(c === i.length), c === 1)) return () => i[0];
  if (c === 2 && i[0] === i[1]) return () => i[1];
  const f = e[0] === e[1];
  e[0] > e[c - 1] && ((e = [...e].reverse()), (i = [...i].reverse()));
  const d = cw(i, r, l),
    p = d.length,
    m = (y) => {
      if (f && y < e[0]) return i[0];
      let b = 0;
      if (p > 1) for (; b < e.length - 2 && !(y < e[b + 1]); b++);
      const x = or(e[b], e[b + 1], y);
      return d[b](x);
    };
  return s ? (y) => m(Vn(e[0], e[c - 1], y)) : m;
}
function hw(e, i) {
  const s = e[e.length - 1];
  for (let r = 1; r <= i; r++) {
    const l = or(0, i, r);
    e.push(kt(s, 1, l));
  }
}
function dw(e) {
  const i = [0];
  return hw(i, e.length - 1), i;
}
function mw(e, i) {
  return e.map((s) => s * i);
}
function pw(e, i) {
  return e.map(() => i || Rv).splice(0, e.length - 1);
}
function er({
  duration: e = 300,
  keyframes: i,
  times: s,
  ease: r = "easeInOut",
}) {
  const l = A_(r) ? r.map(hg) : hg(r),
    c = { done: !1, value: i[0] },
    f = mw(s && s.length === i.length ? s : dw(i), e),
    d = fw(f, i, { ease: Array.isArray(l) ? l : pw(i, l) });
  return {
    calculatedDuration: e,
    next: (p) => ((c.value = d(p)), (c.done = p >= e), c),
  };
}
const yw = (e) => e !== null;
function Mh(e, { repeat: i, repeatType: s = "loop" }, r, l = 1) {
  const c = e.filter(yw),
    d = l < 0 || (i && s !== "loop" && i % 2 === 1) ? 0 : c.length - 1;
  return !d || r === void 0 ? c[d] : r;
}
const gw = { decay: jf, inertia: jf, tween: er, keyframes: er, spring: hl };
function Hv(e) {
  typeof e.type == "string" && (e.type = gw[e.type]);
}
class Nh {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, s) {
    return this.finished.then(i, s);
  }
}
const vw = (e) => e / 100;
class jh extends Nh {
  constructor(i) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: s } = this.options;
        s && s.updatedAt !== Se.now() && this.tick(Se.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.());
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: i } = this;
    Hv(i);
    const {
      type: s = er,
      repeat: r = 0,
      repeatDelay: l = 0,
      repeatType: c,
      velocity: f = 0,
    } = i;
    let { keyframes: d } = i;
    const p = s || er;
    p !== er &&
      typeof d[0] != "number" &&
      ((this.mixKeyframes = br(vw, Vv(d[0], d[1]))), (d = [0, 100]));
    const m = p({ ...i, keyframes: d });
    c === "mirror" &&
      (this.mirroredGenerator = p({
        ...i,
        keyframes: [...d].reverse(),
        velocity: -f,
      })),
      m.calculatedDuration === null && (m.calculatedDuration = Dh(m));
    const { calculatedDuration: y } = m;
    (this.calculatedDuration = y),
      (this.resolvedDuration = y + l),
      (this.totalDuration = this.resolvedDuration * (r + 1) - l),
      (this.generator = m);
  }
  updateTime(i) {
    const s = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = s);
  }
  tick(i, s = !1) {
    const {
      generator: r,
      totalDuration: l,
      mixKeyframes: c,
      mirroredGenerator: f,
      resolvedDuration: d,
      calculatedDuration: p,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: m = 0,
      keyframes: y,
      repeat: b,
      repeatType: x,
      repeatDelay: O,
      type: A,
      onUpdate: M,
      finalKeyframe: R,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - l / this.speed, this.startTime)),
      s ? (this.currentTime = i) : this.updateTime(i);
    const C = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
      B = this.playbackSpeed >= 0 ? C < 0 : C > l;
    (this.currentTime = Math.max(C, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = l);
    let N = this.currentTime,
      G = r;
    if (b) {
      const Q = Math.min(this.currentTime, l) / d;
      let K = Math.floor(Q),
        W = Q % 1;
      !W && Q >= 1 && (W = 1),
        W === 1 && K--,
        (K = Math.min(K, b + 1)),
        !!(K % 2) &&
          (x === "reverse"
            ? ((W = 1 - W), O && (W -= O / d))
            : x === "mirror" && (G = f)),
        (N = Vn(0, 1, W) * d);
    }
    const k = B ? { done: !1, value: y[0] } : G.next(N);
    c && (k.value = c(k.value));
    let { done: J } = k;
    !B &&
      p !== null &&
      (J =
        this.playbackSpeed >= 0
          ? this.currentTime >= l
          : this.currentTime <= 0);
    const Z =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && J));
    return (
      Z && A !== jf && (k.value = Mh(y, this.options, R, this.speed)),
      M && M(k.value),
      Z && this.finish(),
      k
    );
  }
  then(i, s) {
    return this.finished.then(i, s);
  }
  get duration() {
    return mn(this.calculatedDuration);
  }
  get time() {
    return mn(this.currentTime);
  }
  set time(i) {
    (i = dn(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(Se.now());
    const s = this.playbackSpeed !== i;
    (this.playbackSpeed = i), s && (this.time = mn(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    const { driver: i = ew, startTime: s } = this.options;
    this.driver || (this.driver = i((l) => this.tick(l))),
      this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = s ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(Se.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.();
  }
  cancel() {
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return (this.startTime = 0), this.tick(i, !0);
  }
  attachTimeline(i) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
    );
  }
}
function bw(e) {
  for (let i = 1; i < e.length; i++) e[i] ?? (e[i] = e[i - 1]);
}
const Vi = (e) => (e * 180) / Math.PI,
  Lf = (e) => {
    const i = Vi(Math.atan2(e[1], e[0]));
    return Bf(i);
  },
  xw = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Lf,
    rotateZ: Lf,
    skewX: (e) => Vi(Math.atan(e[1])),
    skewY: (e) => Vi(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Bf = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  vg = Lf,
  bg = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  xg = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Tw = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: bg,
    scaleY: xg,
    scale: (e) => (bg(e) + xg(e)) / 2,
    rotateX: (e) => Bf(Vi(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Bf(Vi(Math.atan2(-e[2], e[0]))),
    rotateZ: vg,
    rotate: vg,
    skewX: (e) => Vi(Math.atan(e[4])),
    skewY: (e) => Vi(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Uf(e) {
  return e.includes("scale") ? 1 : 0;
}
function Vf(e, i) {
  if (!e || e === "none") return Uf(i);
  const s = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, l;
  if (s) (r = Tw), (l = s);
  else {
    const d = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = xw), (l = d);
  }
  if (!l) return Uf(i);
  const c = r[i],
    f = l[1].split(",").map(Ew);
  return typeof c == "function" ? c(f) : f[c];
}
const Sw = (e, i) => {
  const { transform: s = "none" } = getComputedStyle(e);
  return Vf(s, i);
};
function Ew(e) {
  return parseFloat(e.trim());
}
const Ya = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Ga = new Set(Ya),
  Tg = (e) => e === Pa || e === ot,
  _w = new Set(["x", "y", "z"]),
  ww = Ya.filter((e) => !_w.has(e));
function Aw(e) {
  const i = [];
  return (
    ww.forEach((s) => {
      const r = e.getValue(s);
      r !== void 0 &&
        (i.push([s, r.get()]), r.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const Hi = {
  width: ({ x: e }, { paddingLeft: i = "0", paddingRight: s = "0" }) =>
    e.max - e.min - parseFloat(i) - parseFloat(s),
  height: ({ y: e }, { paddingTop: i = "0", paddingBottom: s = "0" }) =>
    e.max - e.min - parseFloat(i) - parseFloat(s),
  top: (e, { top: i }) => parseFloat(i),
  left: (e, { left: i }) => parseFloat(i),
  bottom: ({ y: e }, { top: i }) => parseFloat(i) + (e.max - e.min),
  right: ({ x: e }, { left: i }) => parseFloat(i) + (e.max - e.min),
  x: (e, { transform: i }) => Vf(i, "x"),
  y: (e, { transform: i }) => Vf(i, "y"),
};
Hi.translateX = Hi.x;
Hi.translateY = Hi.y;
const qi = new Set();
let zf = !1,
  kf = !1,
  Hf = !1;
function qv() {
  if (kf) {
    const e = Array.from(qi).filter((r) => r.needsMeasurement),
      i = new Set(e.map((r) => r.element)),
      s = new Map();
    i.forEach((r) => {
      const l = Aw(r);
      l.length && (s.set(r, l), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      i.forEach((r) => {
        r.render();
        const l = s.get(r);
        l &&
          l.forEach(([c, f]) => {
            r.getValue(c)?.set(f);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (kf = !1), (zf = !1), qi.forEach((e) => e.complete(Hf)), qi.clear();
}
function Pv() {
  qi.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (kf = !0);
  });
}
function Rw() {
  (Hf = !0), Pv(), qv(), (Hf = !1);
}
class Lh {
  constructor(i, s, r, l, c, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = s),
      (this.name = r),
      (this.motionValue = l),
      (this.element = c),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (qi.add(this),
          zf || ((zf = !0), Ut.read(Pv), Ut.resolveKeyframes(qv)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: s,
      element: r,
      motionValue: l,
    } = this;
    if (i[0] === null) {
      const c = l?.get(),
        f = i[i.length - 1];
      if (c !== void 0) i[0] = c;
      else if (r && s) {
        const d = r.readValue(s, f);
        d != null && (i[0] = d);
      }
      i[0] === void 0 && (i[0] = f), l && c === void 0 && l.set(i[0]);
    }
    bw(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      qi.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (qi.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Cw = (e) => e.startsWith("--");
function Ow(e, i, s) {
  Cw(i) ? e.style.setProperty(i, s) : (e.style[i] = s);
}
const Dw = Th(() => window.ScrollTimeline !== void 0),
  Mw = {};
function Nw(e, i) {
  const s = Th(e);
  return () => Mw[i] ?? s();
}
const Yv = Nw(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Js = ([e, i, s, r]) => `cubic-bezier(${e}, ${i}, ${s}, ${r})`,
  Sg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Js([0, 0.65, 0.55, 1]),
    circOut: Js([0.55, 0, 1, 0.45]),
    backIn: Js([0.31, 0.01, 0.66, -0.59]),
    backOut: Js([0.33, 1.53, 0.69, 0.99]),
  };
function Gv(e, i) {
  if (e)
    return typeof e == "function"
      ? Yv()
        ? zv(e, i)
        : "ease-out"
      : Cv(e)
      ? Js(e)
      : Array.isArray(e)
      ? e.map((s) => Gv(s, i) || Sg.easeOut)
      : Sg[e];
}
function jw(
  e,
  i,
  s,
  {
    delay: r = 0,
    duration: l = 300,
    repeat: c = 0,
    repeatType: f = "loop",
    ease: d = "easeOut",
    times: p,
  } = {},
  m = void 0
) {
  const y = { [i]: s };
  p && (y.offset = p);
  const b = Gv(d, l);
  Array.isArray(b) && (y.easing = b);
  const x = {
    delay: r,
    duration: l,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: c + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return m && (x.pseudoElement = m), e.animate(y, x);
}
function Xv(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function Lw({ type: e, ...i }) {
  return Xv(e) && Yv()
    ? e.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class Bw extends Nh {
  constructor(i) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !i))
      return;
    const {
      element: s,
      name: r,
      keyframes: l,
      pseudoElement: c,
      allowFlatten: f = !1,
      finalKeyframe: d,
      onComplete: p,
    } = i;
    (this.isPseudoElement = !!c),
      (this.allowFlatten = f),
      (this.options = i),
      xh(typeof i.type != "string");
    const m = Lw(i);
    (this.animation = jw(s, r, l, m, c)),
      m.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !c)) {
          const y = Mh(l, this.options, d, this.speed);
          this.updateMotionValue ? this.updateMotionValue(y) : Ow(s, r, y),
            this.animation.cancel();
        }
        p?.(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return mn(Number(i));
  }
  get time() {
    return mn(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    (this.finishedTime = null), (this.animation.currentTime = dn(i));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(i) {
    this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, observe: s }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      i && Dw() ? ((this.animation.timeline = i), Qe) : s(this)
    );
  }
}
const Kv = { anticipate: _v, backInOut: Ev, circInOut: Av };
function Uw(e) {
  return e in Kv;
}
function Vw(e) {
  typeof e.ease == "string" && Uw(e.ease) && (e.ease = Kv[e.ease]);
}
const Eg = 10;
class zw extends Bw {
  constructor(i) {
    Vw(i),
      Hv(i),
      super(i),
      i.startTime && (this.startTime = i.startTime),
      (this.options = i);
  }
  updateMotionValue(i) {
    const {
      motionValue: s,
      onUpdate: r,
      onComplete: l,
      element: c,
      ...f
    } = this.options;
    if (!s) return;
    if (i !== void 0) {
      s.set(i);
      return;
    }
    const d = new jh({ ...f, autoplay: !1 }),
      p = dn(this.finishedTime ?? this.time);
    s.setWithVelocity(d.sample(p - Eg).value, d.sample(p).value, Eg), d.stop();
  }
}
const _g = (e, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (di.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function kw(e) {
  const i = e[0];
  if (e.length === 1) return !0;
  for (let s = 0; s < e.length; s++) if (e[s] !== i) return !0;
}
function Hw(e, i, s, r) {
  const l = e[0];
  if (l === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const c = e[e.length - 1],
    f = _g(l, i),
    d = _g(c, i);
  return !f || !d ? !1 : kw(e) || ((s === "spring" || Xv(s)) && r);
}
const qw = new Set(["opacity", "clipPath", "filter", "transform"]),
  Pw = Th(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Yw(e) {
  const {
    motionValue: i,
    name: s,
    repeatDelay: r,
    repeatType: l,
    damping: c,
    type: f,
  } = e;
  if (!(i?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: p, transformTemplate: m } = i.owner.getProps();
  return (
    Pw() &&
    s &&
    qw.has(s) &&
    (s !== "transform" || !m) &&
    !p &&
    !r &&
    l !== "mirror" &&
    c !== 0 &&
    f !== "inertia"
  );
}
const Gw = 40;
class Xw extends Nh {
  constructor({
    autoplay: i = !0,
    delay: s = 0,
    type: r = "keyframes",
    repeat: l = 0,
    repeatDelay: c = 0,
    repeatType: f = "loop",
    keyframes: d,
    name: p,
    motionValue: m,
    element: y,
    ...b
  }) {
    super(),
      (this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel();
      }),
      (this.createdAt = Se.now());
    const x = {
        autoplay: i,
        delay: s,
        type: r,
        repeat: l,
        repeatDelay: c,
        repeatType: f,
        name: p,
        motionValue: m,
        element: y,
        ...b,
      },
      O = y?.KeyframeResolver || Lh;
    (this.keyframeResolver = new O(
      d,
      (A, M, R) => this.onKeyframesResolved(A, M, x, !R),
      p,
      m,
      y
    )),
      this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(i, s, r, l) {
    this.keyframeResolver = void 0;
    const {
      name: c,
      type: f,
      velocity: d,
      delay: p,
      isHandoff: m,
      onUpdate: y,
    } = r;
    (this.resolvedAt = Se.now()),
      Hw(i, c, f, d) ||
        ((zn.instantAnimations || !p) && y?.(Mh(i, r, s)),
        (i[0] = i[i.length - 1]),
        (r.duration = 0),
        (r.repeat = 0));
    const x = {
        startTime: l
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Gw
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...r,
        keyframes: i,
      },
      O =
        !m && Yw(x)
          ? new zw({ ...x, element: x.motionValue.owner.current })
          : new jh(x);
    O.finished.then(() => this.notifyFinished()).catch(Qe),
      this.pendingTimeline &&
        ((this.stopTimeline = O.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = O);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, s) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), Rw()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const Kw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Fw(e) {
  const i = Kw.exec(e);
  if (!i) return [,];
  const [, s, r, l] = i;
  return [`--${s ?? r}`, l];
}
function Fv(e, i, s = 1) {
  const [r, l] = Fw(e);
  if (!r) return;
  const c = window.getComputedStyle(i).getPropertyValue(r);
  if (c) {
    const f = c.trim();
    return pv(f) ? parseFloat(f) : f;
  }
  return Ah(l) ? Fv(l, i, s + 1) : l;
}
function Bh(e, i) {
  return e?.[i] ?? e?.default ?? e;
}
const Qv = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Ya,
  ]),
  Qw = { test: (e) => e === "auto", parse: (e) => e },
  Zv = (e) => (i) => i.test(e),
  $v = [Pa, ot, pn, ci, k_, z_, Qw],
  wg = (e) => $v.find(Zv(e));
function Zw(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || gv(e)
    : !0;
}
const $w = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Jw(e) {
  const [i, s] = e.slice(0, -1).split("(");
  if (i === "drop-shadow") return e;
  const [r] = s.match(Rh) || [];
  if (!r) return e;
  const l = s.replace(r, "");
  let c = $w.has(i) ? 1 : 0;
  return r !== s && (c *= 100), i + "(" + c + l + ")";
}
const Ww = /\b([a-z-]*)\(.*?\)/gu,
  qf = {
    ...di,
    getAnimatableNone: (e) => {
      const i = e.match(Ww);
      return i ? i.map(Jw).join(" ") : e;
    },
  },
  Ag = { ...Pa, transform: Math.round },
  Iw = {
    rotate: ci,
    rotateX: ci,
    rotateY: ci,
    rotateZ: ci,
    scale: Xo,
    scaleX: Xo,
    scaleY: Xo,
    scaleZ: Xo,
    skew: ci,
    skewX: ci,
    skewY: ci,
    distance: ot,
    translateX: ot,
    translateY: ot,
    translateZ: ot,
    x: ot,
    y: ot,
    z: ot,
    perspective: ot,
    transformPerspective: ot,
    opacity: lr,
    originX: dg,
    originY: dg,
    originZ: ot,
  },
  Uh = {
    borderWidth: ot,
    borderTopWidth: ot,
    borderRightWidth: ot,
    borderBottomWidth: ot,
    borderLeftWidth: ot,
    borderRadius: ot,
    radius: ot,
    borderTopLeftRadius: ot,
    borderTopRightRadius: ot,
    borderBottomRightRadius: ot,
    borderBottomLeftRadius: ot,
    width: ot,
    maxWidth: ot,
    height: ot,
    maxHeight: ot,
    top: ot,
    right: ot,
    bottom: ot,
    left: ot,
    padding: ot,
    paddingTop: ot,
    paddingRight: ot,
    paddingBottom: ot,
    paddingLeft: ot,
    margin: ot,
    marginTop: ot,
    marginRight: ot,
    marginBottom: ot,
    marginLeft: ot,
    backgroundPositionX: ot,
    backgroundPositionY: ot,
    ...Iw,
    zIndex: Ag,
    fillOpacity: lr,
    strokeOpacity: lr,
    numOctaves: Ag,
  },
  tA = {
    ...Uh,
    color: Zt,
    backgroundColor: Zt,
    outlineColor: Zt,
    fill: Zt,
    stroke: Zt,
    borderColor: Zt,
    borderTopColor: Zt,
    borderRightColor: Zt,
    borderBottomColor: Zt,
    borderLeftColor: Zt,
    filter: qf,
    WebkitFilter: qf,
  },
  Jv = (e) => tA[e];
function Wv(e, i) {
  let s = Jv(e);
  return (
    s !== qf && (s = di), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
  );
}
const eA = new Set(["auto", "none", "0"]);
function nA(e, i, s) {
  let r = 0,
    l;
  for (; r < e.length && !l; ) {
    const c = e[r];
    typeof c == "string" && !eA.has(c) && ur(c).values.length && (l = e[r]),
      r++;
  }
  if (l && s) for (const c of i) e[c] = Wv(s, l);
}
class iA extends Lh {
  constructor(i, s, r, l, c) {
    super(i, s, r, l, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: r } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let p = 0; p < i.length; p++) {
      let m = i[p];
      if (typeof m == "string" && ((m = m.trim()), Ah(m))) {
        const y = Fv(m, s.current);
        y !== void 0 && (i[p] = y),
          p === i.length - 1 && (this.finalKeyframe = m);
      }
    }
    if ((this.resolveNoneKeyframes(), !Qv.has(r) || i.length !== 2)) return;
    const [l, c] = i,
      f = wg(l),
      d = wg(c);
    if (f !== d)
      if (Tg(f) && Tg(d))
        for (let p = 0; p < i.length; p++) {
          const m = i[p];
          typeof m == "string" && (i[p] = parseFloat(m));
        }
      else Hi[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      r = [];
    for (let l = 0; l < i.length; l++) (i[l] === null || Zw(i[l])) && r.push(l);
    r.length && nA(i, r, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: r } = this;
    if (!i || !i.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Hi[r](
        i.measureViewportBox(),
        window.getComputedStyle(i.current)
      )),
      (s[0] = this.measuredOrigin);
    const l = s[s.length - 1];
    l !== void 0 && i.getValue(r, l).jump(l, !1);
  }
  measureEndState() {
    const { element: i, name: s, unresolvedKeyframes: r } = this;
    if (!i || !i.current) return;
    const l = i.getValue(s);
    l && l.jump(this.measuredOrigin, !1);
    const c = r.length - 1,
      f = r[c];
    (r[c] = Hi[s](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([d, p]) => {
          i.getValue(d).set(p);
        }),
      this.resolveNoneKeyframes();
  }
}
function aA(e, i, s) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let r = document;
    const l = s?.[e] ?? r.querySelectorAll(e);
    return l ? Array.from(l) : [];
  }
  return Array.from(e);
}
const Iv = (e, i) => (i && typeof e == "number" ? i.transform(e) : e);
function sA(e) {
  return yv(e) && "offsetHeight" in e;
}
const Rg = 30,
  rA = (e) => !isNaN(parseFloat(e));
class oA {
  constructor(i, s = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, l = !0) => {
        const c = Se.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const f of this.dependents) f.dirty();
        l && this.events.renderRequest?.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = s.owner);
  }
  setCurrent(i) {
    (this.current = i),
      (this.updatedAt = Se.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = rA(this.current));
  }
  setPrevFrameValue(i = this.current) {
    (this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new Sh());
    const r = this.events[i].add(s);
    return i === "change"
      ? () => {
          r(),
            Ut.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, s) {
    (this.passiveEffect = i), (this.stopPassiveEffect = s);
  }
  set(i, s = !0) {
    !s || !this.passiveEffect
      ? this.updateAndNotify(i, s)
      : this.passiveEffect(i, this.updateAndNotify);
  }
  setWithVelocity(i, s, r) {
    this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(i, s = !0) {
    this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(i);
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = Se.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > Rg
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Rg);
    return vv(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((s) => {
        (this.hasAnimated = !0),
          (this.animation = i(s)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Va(e, i) {
  return new oA(e, i);
}
const { schedule: Vh } = Ov(queueMicrotask, !1),
  Ie = { x: !1, y: !1 };
function tb() {
  return Ie.x || Ie.y;
}
function lA(e) {
  return e === "x" || e === "y"
    ? Ie[e]
      ? null
      : ((Ie[e] = !0),
        () => {
          Ie[e] = !1;
        })
    : Ie.x || Ie.y
    ? null
    : ((Ie.x = Ie.y = !0),
      () => {
        Ie.x = Ie.y = !1;
      });
}
function eb(e, i) {
  const s = aA(e),
    r = new AbortController(),
    l = { passive: !0, ...i, signal: r.signal };
  return [s, l, () => r.abort()];
}
function Cg(e) {
  return !(e.pointerType === "touch" || tb());
}
function uA(e, i, s = {}) {
  const [r, l, c] = eb(e, s),
    f = (d) => {
      if (!Cg(d)) return;
      const { target: p } = d,
        m = i(p, d);
      if (typeof m != "function" || !p) return;
      const y = (b) => {
        Cg(b) && (m(b), p.removeEventListener("pointerleave", y));
      };
      p.addEventListener("pointerleave", y, l);
    };
  return (
    r.forEach((d) => {
      d.addEventListener("pointerenter", f, l);
    }),
    c
  );
}
const nb = (e, i) => (i ? (e === i ? !0 : nb(e, i.parentElement)) : !1),
  zh = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  cA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function fA(e) {
  return cA.has(e.tagName) || e.tabIndex !== -1;
}
const Wo = new WeakSet();
function Og(e) {
  return (i) => {
    i.key === "Enter" && e(i);
  };
}
function lf(e, i) {
  e.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 })
  );
}
const hA = (e, i) => {
  const s = e.currentTarget;
  if (!s) return;
  const r = Og(() => {
    if (Wo.has(s)) return;
    lf(s, "down");
    const l = Og(() => {
        lf(s, "up");
      }),
      c = () => lf(s, "cancel");
    s.addEventListener("keyup", l, i), s.addEventListener("blur", c, i);
  });
  s.addEventListener("keydown", r, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", r), i);
};
function Dg(e) {
  return zh(e) && !tb();
}
function dA(e, i, s = {}) {
  const [r, l, c] = eb(e, s),
    f = (d) => {
      const p = d.currentTarget;
      if (!Dg(d)) return;
      Wo.add(p);
      const m = i(p, d),
        y = (O, A) => {
          window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", x),
            Wo.has(p) && Wo.delete(p),
            Dg(O) && typeof m == "function" && m(O, { success: A });
        },
        b = (O) => {
          y(
            O,
            p === window ||
              p === document ||
              s.useGlobalTarget ||
              nb(p, O.target)
          );
        },
        x = (O) => {
          y(O, !1);
        };
      window.addEventListener("pointerup", b, l),
        window.addEventListener("pointercancel", x, l);
    };
  return (
    r.forEach((d) => {
      (s.useGlobalTarget ? window : d).addEventListener("pointerdown", f, l),
        sA(d) &&
          (d.addEventListener("focus", (m) => hA(m, l)),
          !fA(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0));
    }),
    c
  );
}
function ib(e) {
  return yv(e) && "ownerSVGElement" in e;
}
function mA(e) {
  return ib(e) && e.tagName === "svg";
}
const he = (e) => !!(e && e.getVelocity),
  pA = [...$v, Zt, di],
  yA = (e) => pA.find(Zv(e)),
  ab = E.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function gA(e = !0) {
  const i = E.useContext(gh);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: r, register: l } = i,
    c = E.useId();
  E.useEffect(() => {
    if (e) return l(c);
  }, [e]);
  const f = E.useCallback(() => e && r && r(c), [c, r, e]);
  return !s && r ? [!1, f] : [!0];
}
const sb = E.createContext({ strict: !1 }),
  Mg = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  za = {};
for (const e in Mg) za[e] = { isEnabled: (i) => Mg[e].some((s) => !!i[s]) };
function vA(e) {
  for (const i in e) za[i] = { ...za[i], ...e[i] };
}
const bA = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function dl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    bA.has(e)
  );
}
let rb = (e) => !dl(e);
function xA(e) {
  typeof e == "function" && (rb = (i) => (i.startsWith("on") ? !dl(i) : e(i)));
}
try {
  xA(require("@emotion/is-prop-valid").default);
} catch {}
function TA(e, i, s) {
  const r = {};
  for (const l in e)
    (l === "values" && typeof e.values == "object") ||
      ((rb(l) ||
        (s === !0 && dl(l)) ||
        (!i && !dl(l)) ||
        (e.draggable && l.startsWith("onDrag"))) &&
        (r[l] = e[l]));
  return r;
}
const Sl = E.createContext({});
function El(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function cr(e) {
  return typeof e == "string" || Array.isArray(e);
}
const kh = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Hh = ["initial", ...kh];
function _l(e) {
  return El(e.animate) || Hh.some((i) => cr(e[i]));
}
function ob(e) {
  return !!(_l(e) || e.variants);
}
function SA(e, i) {
  if (_l(e)) {
    const { initial: s, animate: r } = e;
    return {
      initial: s === !1 || cr(s) ? s : void 0,
      animate: cr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? i : {};
}
function EA(e) {
  const { initial: i, animate: s } = SA(e, E.useContext(Sl));
  return E.useMemo(() => ({ initial: i, animate: s }), [Ng(i), Ng(s)]);
}
function Ng(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const fr = {};
function _A(e) {
  for (const i in e) (fr[i] = e[i]), wh(i) && (fr[i].isCSSVariable = !0);
}
function lb(e, { layout: i, layoutId: s }) {
  return (
    Ga.has(e) ||
    e.startsWith("origin") ||
    ((i || s !== void 0) && (!!fr[e] || e === "opacity"))
  );
}
const wA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  AA = Ya.length;
function RA(e, i, s) {
  let r = "",
    l = !0;
  for (let c = 0; c < AA; c++) {
    const f = Ya[c],
      d = e[f];
    if (d === void 0) continue;
    let p = !0;
    if (
      (typeof d == "number"
        ? (p = d === (f.startsWith("scale") ? 1 : 0))
        : (p = parseFloat(d) === 0),
      !p || s)
    ) {
      const m = Iv(d, Uh[f]);
      if (!p) {
        l = !1;
        const y = wA[f] || f;
        r += `${y}(${m}) `;
      }
      s && (i[f] = m);
    }
  }
  return (r = r.trim()), s ? (r = s(i, l ? "" : r)) : l && (r = "none"), r;
}
function qh(e, i, s) {
  const { style: r, vars: l, transformOrigin: c } = e;
  let f = !1,
    d = !1;
  for (const p in i) {
    const m = i[p];
    if (Ga.has(p)) {
      f = !0;
      continue;
    } else if (wh(p)) {
      l[p] = m;
      continue;
    } else {
      const y = Iv(m, Uh[p]);
      p.startsWith("origin") ? ((d = !0), (c[p] = y)) : (r[p] = y);
    }
  }
  if (
    (i.transform ||
      (f || s
        ? (r.transform = RA(i, e.transform, s))
        : r.transform && (r.transform = "none")),
    d)
  ) {
    const { originX: p = "50%", originY: m = "50%", originZ: y = 0 } = c;
    r.transformOrigin = `${p} ${m} ${y}`;
  }
}
const Ph = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ub(e, i, s) {
  for (const r in i) !he(i[r]) && !lb(r, s) && (e[r] = i[r]);
}
function CA({ transformTemplate: e }, i) {
  return E.useMemo(() => {
    const s = Ph();
    return qh(s, i, e), Object.assign({}, s.vars, s.style);
  }, [i]);
}
function OA(e, i) {
  const s = e.style || {},
    r = {};
  return ub(r, s, e), Object.assign(r, CA(e, i)), r;
}
function DA(e, i) {
  const s = {},
    r = OA(e, i);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((s.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (s.tabIndex = 0),
    (s.style = r),
    s
  );
}
const MA = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  NA = { offset: "strokeDashoffset", array: "strokeDasharray" };
function jA(e, i, s = 1, r = 0, l = !0) {
  e.pathLength = 1;
  const c = l ? MA : NA;
  e[c.offset] = ot.transform(-r);
  const f = ot.transform(i),
    d = ot.transform(s);
  e[c.array] = `${f} ${d}`;
}
function cb(
  e,
  {
    attrX: i,
    attrY: s,
    attrScale: r,
    pathLength: l,
    pathSpacing: c = 1,
    pathOffset: f = 0,
    ...d
  },
  p,
  m,
  y
) {
  if ((qh(e, d, m), p)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: b, style: x } = e;
  b.transform && ((x.transform = b.transform), delete b.transform),
    (x.transform || b.transformOrigin) &&
      ((x.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    x.transform &&
      ((x.transformBox = y?.transformBox ?? "fill-box"), delete b.transformBox),
    i !== void 0 && (b.x = i),
    s !== void 0 && (b.y = s),
    r !== void 0 && (b.scale = r),
    l !== void 0 && jA(b, l, c, f, !1);
}
const fb = () => ({ ...Ph(), attrs: {} }),
  hb = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function LA(e, i, s, r) {
  const l = E.useMemo(() => {
    const c = fb();
    return (
      cb(c, i, hb(r), e.transformTemplate, e.style),
      { ...c.attrs, style: { ...c.style } }
    );
  }, [i]);
  if (e.style) {
    const c = {};
    ub(c, e.style, e), (l.style = { ...c, ...l.style });
  }
  return l;
}
const BA = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Yh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(BA.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function UA(e, i, s, { latestValues: r }, l, c = !1) {
  const d = (Yh(e) ? LA : DA)(i, r, l, e),
    p = TA(i, typeof e == "string", c),
    m = e !== E.Fragment ? { ...p, ...d, ref: s } : {},
    { children: y } = i,
    b = E.useMemo(() => (he(y) ? y.get() : y), [y]);
  return E.createElement(e, { ...m, children: b });
}
function jg(e) {
  const i = [{}, {}];
  return (
    e?.values.forEach((s, r) => {
      (i[0][r] = s.get()), (i[1][r] = s.getVelocity());
    }),
    i
  );
}
function Gh(e, i, s, r) {
  if (typeof i == "function") {
    const [l, c] = jg(r);
    i = i(s !== void 0 ? s : e.custom, l, c);
  }
  if (
    (typeof i == "string" && (i = e.variants && e.variants[i]),
    typeof i == "function")
  ) {
    const [l, c] = jg(r);
    i = i(s !== void 0 ? s : e.custom, l, c);
  }
  return i;
}
function Io(e) {
  return he(e) ? e.get() : e;
}
function VA({ scrapeMotionValuesFromProps: e, createRenderState: i }, s, r, l) {
  return { latestValues: zA(s, r, l, e), renderState: i() };
}
function zA(e, i, s, r) {
  const l = {},
    c = r(e, {});
  for (const x in c) l[x] = Io(c[x]);
  let { initial: f, animate: d } = e;
  const p = _l(e),
    m = ob(e);
  i &&
    m &&
    !p &&
    e.inherit !== !1 &&
    (f === void 0 && (f = i.initial), d === void 0 && (d = i.animate));
  let y = s ? s.initial === !1 : !1;
  y = y || f === !1;
  const b = y ? d : f;
  if (b && typeof b != "boolean" && !El(b)) {
    const x = Array.isArray(b) ? b : [b];
    for (let O = 0; O < x.length; O++) {
      const A = Gh(e, x[O]);
      if (A) {
        const { transitionEnd: M, transition: R, ...C } = A;
        for (const B in C) {
          let N = C[B];
          if (Array.isArray(N)) {
            const G = y ? N.length - 1 : 0;
            N = N[G];
          }
          N !== null && (l[B] = N);
        }
        for (const B in M) l[B] = M[B];
      }
    }
  }
  return l;
}
const db = (e) => (i, s) => {
  const r = E.useContext(Sl),
    l = E.useContext(gh),
    c = () => VA(e, i, r, l);
  return s ? c() : v_(c);
};
function Xh(e, i, s) {
  const { style: r } = e,
    l = {};
  for (const c in r)
    (he(r[c]) ||
      (i.style && he(i.style[c])) ||
      lb(c, e) ||
      s?.getValue(c)?.liveStyle !== void 0) &&
      (l[c] = r[c]);
  return l;
}
const kA = db({ scrapeMotionValuesFromProps: Xh, createRenderState: Ph });
function mb(e, i, s) {
  const r = Xh(e, i, s);
  for (const l in e)
    if (he(e[l]) || he(i[l])) {
      const c =
        Ya.indexOf(l) !== -1
          ? "attr" + l.charAt(0).toUpperCase() + l.substring(1)
          : l;
      r[c] = e[l];
    }
  return r;
}
const HA = db({ scrapeMotionValuesFromProps: mb, createRenderState: fb }),
  qA = Symbol.for("motionComponentSymbol");
function Na(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function PA(e, i, s) {
  return E.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        i && (r ? i.mount(r) : i.unmount()),
        s && (typeof s == "function" ? s(r) : Na(s) && (s.current = r));
    },
    [i]
  );
}
const Kh = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  YA = "framerAppearId",
  pb = "data-" + Kh(YA),
  yb = E.createContext({});
function GA(e, i, s, r, l) {
  const { visualElement: c } = E.useContext(Sl),
    f = E.useContext(sb),
    d = E.useContext(gh),
    p = E.useContext(ab).reducedMotion,
    m = E.useRef(null);
  (r = r || f.renderer),
    !m.current &&
      r &&
      (m.current = r(e, {
        visualState: i,
        parent: c,
        props: s,
        presenceContext: d,
        blockInitialAnimation: d ? d.initial === !1 : !1,
        reducedMotionConfig: p,
      }));
  const y = m.current,
    b = E.useContext(yb);
  y &&
    !y.projection &&
    l &&
    (y.type === "html" || y.type === "svg") &&
    XA(m.current, s, l, b);
  const x = E.useRef(!1);
  E.useInsertionEffect(() => {
    y && x.current && y.update(s, d);
  });
  const O = s[pb],
    A = E.useRef(
      !!O &&
        !window.MotionHandoffIsComplete?.(O) &&
        window.MotionHasOptimisedAnimation?.(O)
    );
  return (
    b_(() => {
      y &&
        ((x.current = !0),
        (window.MotionIsMounted = !0),
        y.updateFeatures(),
        y.scheduleRenderMicrotask(),
        A.current && y.animationState && y.animationState.animateChanges());
    }),
    E.useEffect(() => {
      y &&
        (!A.current && y.animationState && y.animationState.animateChanges(),
        A.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(O);
          }),
          (A.current = !1)));
    }),
    y
  );
}
function XA(e, i, s, r) {
  const {
    layoutId: l,
    layout: c,
    drag: f,
    dragConstraints: d,
    layoutScroll: p,
    layoutRoot: m,
    layoutCrossfade: y,
  } = i;
  (e.projection = new s(
    e.latestValues,
    i["data-framer-portal-id"] ? void 0 : gb(e.parent)
  )),
    e.projection.setOptions({
      layoutId: l,
      layout: c,
      alwaysMeasureLayout: !!f || (d && Na(d)),
      visualElement: e,
      animationType: typeof c == "string" ? c : "both",
      initialPromotionConfig: r,
      crossfade: y,
      layoutScroll: p,
      layoutRoot: m,
    });
}
function gb(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : gb(e.parent);
}
function uf(e, { forwardMotionProps: i = !1 } = {}, s, r) {
  s && vA(s);
  const l = Yh(e) ? HA : kA;
  function c(d, p) {
    let m;
    const y = { ...E.useContext(ab), ...d, layoutId: KA(d) },
      { isStatic: b } = y,
      x = EA(d),
      O = l(d, b);
    if (!b && yh) {
      FA();
      const A = QA(y);
      (m = A.MeasureLayout),
        (x.visualElement = GA(e, O, y, r, A.ProjectionNode));
    }
    return T.jsxs(Sl.Provider, {
      value: x,
      children: [
        m && x.visualElement
          ? T.jsx(m, { visualElement: x.visualElement, ...y })
          : null,
        UA(e, d, PA(O, x.visualElement, p), O, b, i),
      ],
    });
  }
  c.displayName = `motion.${
    typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`
  }`;
  const f = E.forwardRef(c);
  return (f[qA] = e), f;
}
function KA({ layoutId: e }) {
  const i = E.useContext(mv).id;
  return i && e !== void 0 ? i + "-" + e : e;
}
function FA(e, i) {
  E.useContext(sb).strict;
}
function QA(e) {
  const { drag: i, layout: s } = za;
  if (!i && !s) return {};
  const r = { ...i, ...s };
  return {
    MeasureLayout:
      i?.isEnabled(e) || s?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function ZA(e, i) {
  if (typeof Proxy > "u") return uf;
  const s = new Map(),
    r = (c, f) => uf(c, f, e, i),
    l = (c, f) => r(c, f);
  return new Proxy(l, {
    get: (c, f) =>
      f === "create"
        ? r
        : (s.has(f) || s.set(f, uf(f, void 0, e, i)), s.get(f)),
  });
}
function vb({ top: e, left: i, right: s, bottom: r }) {
  return { x: { min: i, max: s }, y: { min: e, max: r } };
}
function $A({ x: e, y: i }) {
  return { top: i.min, right: e.max, bottom: i.max, left: e.min };
}
function JA(e, i) {
  if (!i) return e;
  const s = i({ x: e.left, y: e.top }),
    r = i({ x: e.right, y: e.bottom });
  return { top: s.y, left: s.x, bottom: r.y, right: r.x };
}
function cf(e) {
  return e === void 0 || e === 1;
}
function Pf({ scale: e, scaleX: i, scaleY: s }) {
  return !cf(e) || !cf(i) || !cf(s);
}
function Bi(e) {
  return (
    Pf(e) ||
    bb(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function bb(e) {
  return Lg(e.x) || Lg(e.y);
}
function Lg(e) {
  return e && e !== "0%";
}
function ml(e, i, s) {
  const r = e - s,
    l = i * r;
  return s + l;
}
function Bg(e, i, s, r, l) {
  return l !== void 0 && (e = ml(e, l, r)), ml(e, s, r) + i;
}
function Yf(e, i = 0, s = 1, r, l) {
  (e.min = Bg(e.min, i, s, r, l)), (e.max = Bg(e.max, i, s, r, l));
}
function xb(e, { x: i, y: s }) {
  Yf(e.x, i.translate, i.scale, i.originPoint),
    Yf(e.y, s.translate, s.scale, s.originPoint);
}
const Ug = 0.999999999999,
  Vg = 1.0000000000001;
function WA(e, i, s, r = !1) {
  const l = s.length;
  if (!l) return;
  i.x = i.y = 1;
  let c, f;
  for (let d = 0; d < l; d++) {
    (c = s[d]), (f = c.projectionDelta);
    const { visualElement: p } = c.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (r &&
        c.options.layoutScroll &&
        c.scroll &&
        c !== c.root &&
        La(e, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), xb(e, f)),
      r && Bi(c.latestValues) && La(e, c.latestValues));
  }
  i.x < Vg && i.x > Ug && (i.x = 1), i.y < Vg && i.y > Ug && (i.y = 1);
}
function ja(e, i) {
  (e.min = e.min + i), (e.max = e.max + i);
}
function zg(e, i, s, r, l = 0.5) {
  const c = kt(e.min, e.max, l);
  Yf(e, i, s, c, r);
}
function La(e, i) {
  zg(e.x, i.x, i.scaleX, i.scale, i.originX),
    zg(e.y, i.y, i.scaleY, i.scale, i.originY);
}
function Tb(e, i) {
  return vb(JA(e.getBoundingClientRect(), i));
}
function IA(e, i, s) {
  const r = Tb(e, s),
    { scroll: l } = i;
  return l && (ja(r.x, l.offset.x), ja(r.y, l.offset.y)), r;
}
const kg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ba = () => ({ x: kg(), y: kg() }),
  Hg = () => ({ min: 0, max: 0 }),
  Kt = () => ({ x: Hg(), y: Hg() }),
  Gf = { current: null },
  Sb = { current: !1 };
function t2() {
  if (((Sb.current = !0), !!yh))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Gf.current = e.matches);
      e.addEventListener("change", i), i();
    } else Gf.current = !1;
}
const e2 = new WeakMap();
function n2(e, i, s) {
  for (const r in i) {
    const l = i[r],
      c = s[r];
    if (he(l)) e.addValue(r, l);
    else if (he(c)) e.addValue(r, Va(l, { owner: e }));
    else if (c !== l)
      if (e.hasValue(r)) {
        const f = e.getValue(r);
        f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l);
      } else {
        const f = e.getStaticValue(r);
        e.addValue(r, Va(f !== void 0 ? f : l, { owner: e }));
      }
  }
  for (const r in s) i[r] === void 0 && e.removeValue(r);
  return i;
}
const qg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class i2 {
  scrapeMotionValuesFromProps(i, s, r) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: s,
      presenceContext: r,
      reducedMotionConfig: l,
      blockInitialAnimation: c,
      visualState: f,
    },
    d = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Lh),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const x = Se.now();
        this.renderScheduledAt < x &&
          ((this.renderScheduledAt = x), Ut.render(this.render, !1, !0));
      });
    const { latestValues: p, renderState: m } = f;
    (this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = s.initial ? { ...p } : {}),
      (this.renderState = m),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = r),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = l),
      (this.options = d),
      (this.blockInitialAnimation = !!c),
      (this.isControllingVariants = _l(s)),
      (this.isVariantNode = ob(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current));
    const { willChange: y, ...b } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this
    );
    for (const x in b) {
      const O = b[x];
      p[x] !== void 0 && he(O) && O.set(p[x], !1);
    }
  }
  mount(i) {
    (this.current = i),
      e2.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, r) => this.bindToMotionValue(r, s)),
      Sb.current || t2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Gf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      hi(this.notifyUpdate),
      hi(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const s = this.features[i];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(i, s) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const r = Ga.has(i);
    r && this.onBindTransform && this.onBindTransform();
    const l = s.on("change", (d) => {
        (this.latestValues[i] = d),
          this.props.onUpdate && Ut.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      c = s.on("renderRequest", this.scheduleRender);
    let f;
    window.MotionCheckAppearSync &&
      (f = window.MotionCheckAppearSync(this, i, s)),
      this.valueSubscriptions.set(i, () => {
        l(), c(), f && f(), s.owner && s.stop();
      });
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in za) {
      const s = za[i];
      if (!s) continue;
      const { isEnabled: r, Feature: l } = s;
      if (
        (!this.features[i] &&
          l &&
          r(this.props) &&
          (this.features[i] = new l(this)),
        this.features[i])
      ) {
        const c = this.features[i];
        c.isMounted ? c.update() : (c.mount(), (c.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Kt();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, s) {
    this.latestValues[i] = s;
  }
  update(i, s) {
    (i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s);
    for (let r = 0; r < qg.length; r++) {
      const l = qg[r];
      this.propEventSubscriptions[l] &&
        (this.propEventSubscriptions[l](),
        delete this.propEventSubscriptions[l]);
      const c = "on" + l,
        f = i[c];
      f && (this.propEventSubscriptions[l] = this.on(l, f));
    }
    (this.prevMotionValues = n2(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(i) {
    const s = this.getClosestVariantNode();
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(i),
        () => s.variantChildren.delete(i)
      );
  }
  addValue(i, s) {
    const r = this.values.get(i);
    s !== r &&
      (r && this.removeValue(i),
      this.bindToMotionValue(i, s),
      this.values.set(i, s),
      (this.latestValues[i] = s.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const s = this.valueSubscriptions.get(i);
    s && (s(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState);
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, s) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let r = this.values.get(i);
    return (
      r === void 0 &&
        s !== void 0 &&
        ((r = Va(s === null ? void 0 : s, { owner: this })),
        this.addValue(i, r)),
      r
    );
  }
  readValue(i, s) {
    let r =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options);
    return (
      r != null &&
        (typeof r == "string" && (pv(r) || gv(r))
          ? (r = parseFloat(r))
          : !yA(r) && di.test(s) && (r = Wv(i, s)),
        this.setBaseTarget(i, he(r) ? r.get() : r)),
      he(r) ? r.get() : r
    );
  }
  setBaseTarget(i, s) {
    this.baseTarget[i] = s;
  }
  getBaseTarget(i) {
    const { initial: s } = this.props;
    let r;
    if (typeof s == "string" || typeof s == "object") {
      const c = Gh(this.props, s, this.presenceContext?.custom);
      c && (r = c[i]);
    }
    if (s && r !== void 0) return r;
    const l = this.getBaseTargetFromProps(this.props, i);
    return l !== void 0 && !he(l)
      ? l
      : this.initialValues[i] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[i];
  }
  on(i, s) {
    return this.events[i] || (this.events[i] = new Sh()), this.events[i].add(s);
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
  scheduleRenderMicrotask() {
    Vh.render(this.render);
  }
}
class Eb extends i2 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = iA);
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, s) {
    return i.style ? i.style[s] : void 0;
  }
  removeValueFromRenderState(i, { vars: s, style: r }) {
    delete s[i], delete r[i];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    he(i) &&
      (this.childSubscription = i.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
function _b(e, { style: i, vars: s }, r, l) {
  const c = e.style;
  let f;
  for (f in i) c[f] = i[f];
  l?.applyProjectionStyles(c, r);
  for (f in s) c.setProperty(f, s[f]);
}
function a2(e) {
  return window.getComputedStyle(e);
}
class s2 extends Eb {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = _b);
  }
  readValueFromInstance(i, s) {
    if (Ga.has(s)) return this.projection?.isProjecting ? Uf(s) : Sw(i, s);
    {
      const r = a2(i),
        l = (wh(s) ? r.getPropertyValue(s) : r[s]) || 0;
      return typeof l == "string" ? l.trim() : l;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return Tb(i, s);
  }
  build(i, s, r) {
    qh(i, s, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, r) {
    return Xh(i, s, r);
  }
}
const wb = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function r2(e, i, s, r) {
  _b(e, i, void 0, r);
  for (const l in i.attrs) e.setAttribute(wb.has(l) ? l : Kh(l), i.attrs[l]);
}
class o2 extends Eb {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Kt);
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (Ga.has(s)) {
      const r = Jv(s);
      return (r && r.default) || 0;
    }
    return (s = wb.has(s) ? s : Kh(s)), i.getAttribute(s);
  }
  scrapeMotionValuesFromProps(i, s, r) {
    return mb(i, s, r);
  }
  build(i, s, r) {
    cb(i, s, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(i, s, r, l) {
    r2(i, s, r, l);
  }
  mount(i) {
    (this.isSVGTag = hb(i.tagName)), super.mount(i);
  }
}
const l2 = (e, i) =>
  Yh(e) ? new o2(i) : new s2(i, { allowProjection: e !== E.Fragment });
function hr(e, i, s) {
  const r = e.getProps();
  return Gh(r, i, s !== void 0 ? s : r.custom, e);
}
const Xf = (e) => Array.isArray(e);
function u2(e, i, s) {
  e.hasValue(i) ? e.getValue(i).set(s) : e.addValue(i, Va(s));
}
function c2(e) {
  return Xf(e) ? e[e.length - 1] || 0 : e;
}
function f2(e, i) {
  const s = hr(e, i);
  let { transitionEnd: r = {}, transition: l = {}, ...c } = s || {};
  c = { ...c, ...r };
  for (const f in c) {
    const d = c2(c[f]);
    u2(e, f, d);
  }
}
function h2(e) {
  return !!(he(e) && e.add);
}
function Kf(e, i) {
  const s = e.getValue("willChange");
  if (h2(s)) return s.add(i);
  if (!s && zn.WillChange) {
    const r = new zn.WillChange("auto");
    e.addValue("willChange", r), r.add(i);
  }
}
function Ab(e) {
  return e.props[pb];
}
const d2 = (e) => e !== null;
function m2(e, { repeat: i, repeatType: s = "loop" }, r) {
  const l = e.filter(d2),
    c = i && s !== "loop" && i % 2 === 1 ? 0 : l.length - 1;
  return l[c];
}
const p2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  y2 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  g2 = { type: "keyframes", duration: 0.8 },
  v2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  b2 = (e, { keyframes: i }) =>
    i.length > 2
      ? g2
      : Ga.has(e)
      ? e.startsWith("scale")
        ? y2(i[1])
        : p2
      : v2;
function x2({
  when: e,
  delay: i,
  delayChildren: s,
  staggerChildren: r,
  staggerDirection: l,
  repeat: c,
  repeatType: f,
  repeatDelay: d,
  from: p,
  elapsed: m,
  ...y
}) {
  return !!Object.keys(y).length;
}
const Fh =
  (e, i, s, r = {}, l, c) =>
  (f) => {
    const d = Bh(r, e) || {},
      p = d.delay || r.delay || 0;
    let { elapsed: m = 0 } = r;
    m = m - dn(p);
    const y = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...d,
      delay: -m,
      onUpdate: (x) => {
        i.set(x), d.onUpdate && d.onUpdate(x);
      },
      onComplete: () => {
        f(), d.onComplete && d.onComplete();
      },
      name: e,
      motionValue: i,
      element: c ? void 0 : l,
    };
    x2(d) || Object.assign(y, b2(e, y)),
      y.duration && (y.duration = dn(y.duration)),
      y.repeatDelay && (y.repeatDelay = dn(y.repeatDelay)),
      y.from !== void 0 && (y.keyframes[0] = y.from);
    let b = !1;
    if (
      ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
        ((y.duration = 0), y.delay === 0 && (b = !0)),
      (zn.instantAnimations || zn.skipAnimations) &&
        ((b = !0), (y.duration = 0), (y.delay = 0)),
      (y.allowFlatten = !d.type && !d.ease),
      b && !c && i.get() !== void 0)
    ) {
      const x = m2(y.keyframes, d);
      if (x !== void 0) {
        Ut.update(() => {
          y.onUpdate(x), y.onComplete();
        });
        return;
      }
    }
    return d.isSync ? new jh(y) : new Xw(y);
  };
function T2({ protectedKeys: e, needsAnimating: i }, s) {
  const r = e.hasOwnProperty(s) && i[s] !== !0;
  return (i[s] = !1), r;
}
function Rb(e, i, { delay: s = 0, transitionOverride: r, type: l } = {}) {
  let { transition: c = e.getDefaultTransition(), transitionEnd: f, ...d } = i;
  r && (c = r);
  const p = [],
    m = l && e.animationState && e.animationState.getState()[l];
  for (const y in d) {
    const b = e.getValue(y, e.latestValues[y] ?? null),
      x = d[y];
    if (x === void 0 || (m && T2(m, y))) continue;
    const O = { delay: s, ...Bh(c || {}, y) },
      A = b.get();
    if (
      A !== void 0 &&
      !b.isAnimating &&
      !Array.isArray(x) &&
      x === A &&
      !O.velocity
    )
      continue;
    let M = !1;
    if (window.MotionHandoffAnimation) {
      const C = Ab(e);
      if (C) {
        const B = window.MotionHandoffAnimation(C, y, Ut);
        B !== null && ((O.startTime = B), (M = !0));
      }
    }
    Kf(e, y),
      b.start(
        Fh(y, b, x, e.shouldReduceMotion && Qv.has(y) ? { type: !1 } : O, e, M)
      );
    const R = b.animation;
    R && p.push(R);
  }
  return (
    f &&
      Promise.all(p).then(() => {
        Ut.update(() => {
          f && f2(e, f);
        });
      }),
    p
  );
}
function Ff(e, i, s = {}) {
  const r = hr(e, i, s.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: l = e.getDefaultTransition() || {} } = r || {};
  s.transitionOverride && (l = s.transitionOverride);
  const c = r ? () => Promise.all(Rb(e, r, s)) : () => Promise.resolve(),
    f =
      e.variantChildren && e.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: m = 0,
              staggerChildren: y,
              staggerDirection: b,
            } = l;
            return S2(e, i, p, m, y, b, s);
          }
        : () => Promise.resolve(),
    { when: d } = l;
  if (d) {
    const [p, m] = d === "beforeChildren" ? [c, f] : [f, c];
    return p().then(() => m());
  } else return Promise.all([c(), f(s.delay)]);
}
function S2(e, i, s = 0, r = 0, l = 0, c = 1, f) {
  const d = [],
    p = e.variantChildren.size,
    m = (p - 1) * l,
    y = typeof r == "function",
    b = y ? (x) => r(x, p) : c === 1 ? (x = 0) => x * l : (x = 0) => m - x * l;
  return (
    Array.from(e.variantChildren)
      .sort(E2)
      .forEach((x, O) => {
        x.notify("AnimationStart", i),
          d.push(
            Ff(x, i, { ...f, delay: s + (y ? 0 : r) + b(O) }).then(() =>
              x.notify("AnimationComplete", i)
            )
          );
      }),
    Promise.all(d)
  );
}
function E2(e, i) {
  return e.sortNodePosition(i);
}
function _2(e, i, s = {}) {
  e.notify("AnimationStart", i);
  let r;
  if (Array.isArray(i)) {
    const l = i.map((c) => Ff(e, c, s));
    r = Promise.all(l);
  } else if (typeof i == "string") r = Ff(e, i, s);
  else {
    const l = typeof i == "function" ? hr(e, i, s.custom) : i;
    r = Promise.all(Rb(e, l, s));
  }
  return r.then(() => {
    e.notify("AnimationComplete", i);
  });
}
function Cb(e, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== e.length) return !1;
  for (let r = 0; r < s; r++) if (i[r] !== e[r]) return !1;
  return !0;
}
const w2 = Hh.length;
function Ob(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const s = e.parent ? Ob(e.parent) || {} : {};
    return e.props.initial !== void 0 && (s.initial = e.props.initial), s;
  }
  const i = {};
  for (let s = 0; s < w2; s++) {
    const r = Hh[s],
      l = e.props[r];
    (cr(l) || l === !1) && (i[r] = l);
  }
  return i;
}
const A2 = [...kh].reverse(),
  R2 = kh.length;
function C2(e) {
  return (i) =>
    Promise.all(i.map(({ animation: s, options: r }) => _2(e, s, r)));
}
function O2(e) {
  let i = C2(e),
    s = Pg(),
    r = !0;
  const l = (p) => (m, y) => {
    const b = hr(e, y, p === "exit" ? e.presenceContext?.custom : void 0);
    if (b) {
      const { transition: x, transitionEnd: O, ...A } = b;
      m = { ...m, ...A, ...O };
    }
    return m;
  };
  function c(p) {
    i = p(e);
  }
  function f(p) {
    const { props: m } = e,
      y = Ob(e.parent) || {},
      b = [],
      x = new Set();
    let O = {},
      A = 1 / 0;
    for (let R = 0; R < R2; R++) {
      const C = A2[R],
        B = s[C],
        N = m[C] !== void 0 ? m[C] : y[C],
        G = cr(N),
        k = C === p ? B.isActive : null;
      k === !1 && (A = R);
      let J = N === y[C] && N !== m[C] && G;
      if (
        (J && r && e.manuallyAnimateOnMount && (J = !1),
        (B.protectedKeys = { ...O }),
        (!B.isActive && k === null) ||
          (!N && !B.prevProp) ||
          El(N) ||
          typeof N == "boolean")
      )
        continue;
      const Z = D2(B.prevProp, N);
      let Q = Z || (C === p && B.isActive && !J && G) || (R > A && G),
        K = !1;
      const W = Array.isArray(N) ? N : [N];
      let ct = W.reduce(l(C), {});
      k === !1 && (ct = {});
      const { prevResolvedValues: dt = {} } = B,
        oe = { ...dt, ...ct },
        de = (F) => {
          (Q = !0),
            x.has(F) && ((K = !0), x.delete(F)),
            (B.needsAnimating[F] = !0);
          const tt = e.getValue(F);
          tt && (tt.liveStyle = !1);
        };
      for (const F in oe) {
        const tt = ct[F],
          St = dt[F];
        if (O.hasOwnProperty(F)) continue;
        let _ = !1;
        Xf(tt) && Xf(St) ? (_ = !Cb(tt, St)) : (_ = tt !== St),
          _
            ? tt != null
              ? de(F)
              : x.add(F)
            : tt !== void 0 && x.has(F)
            ? de(F)
            : (B.protectedKeys[F] = !0);
      }
      (B.prevProp = N),
        (B.prevResolvedValues = ct),
        B.isActive && (O = { ...O, ...ct }),
        r && e.blockInitialAnimation && (Q = !1),
        Q &&
          (!(J && Z) || K) &&
          b.push(...W.map((F) => ({ animation: F, options: { type: C } })));
    }
    if (x.size) {
      const R = {};
      if (typeof m.initial != "boolean") {
        const C = hr(e, Array.isArray(m.initial) ? m.initial[0] : m.initial);
        C && C.transition && (R.transition = C.transition);
      }
      x.forEach((C) => {
        const B = e.getBaseTarget(C),
          N = e.getValue(C);
        N && (N.liveStyle = !0), (R[C] = B ?? null);
      }),
        b.push({ animation: R });
    }
    let M = !!b.length;
    return (
      r &&
        (m.initial === !1 || m.initial === m.animate) &&
        !e.manuallyAnimateOnMount &&
        (M = !1),
      (r = !1),
      M ? i(b) : Promise.resolve()
    );
  }
  function d(p, m) {
    if (s[p].isActive === m) return Promise.resolve();
    e.variantChildren?.forEach((b) => b.animationState?.setActive(p, m)),
      (s[p].isActive = m);
    const y = f(p);
    for (const b in s) s[b].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: f,
    setActive: d,
    setAnimateFunction: c,
    getState: () => s,
    reset: () => {
      (s = Pg()), (r = !0);
    },
  };
}
function D2(e, i) {
  return typeof i == "string" ? i !== e : Array.isArray(i) ? !Cb(i, e) : !1;
}
function Li(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Pg() {
  return {
    animate: Li(!0),
    whileInView: Li(),
    whileHover: Li(),
    whileTap: Li(),
    whileDrag: Li(),
    whileFocus: Li(),
    exit: Li(),
  };
}
class pi {
  constructor(i) {
    (this.isMounted = !1), (this.node = i);
  }
  update() {}
}
class M2 extends pi {
  constructor(i) {
    super(i), i.animationState || (i.animationState = O2(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    El(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    i !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let N2 = 0;
class j2 extends pi {
  constructor() {
    super(...arguments), (this.id = N2++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === r) return;
    const l = this.node.animationState.setActive("exit", !i);
    s &&
      !i &&
      l.then(() => {
        s(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: s } = this.node.presenceContext || {};
    s && s(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {}
}
const L2 = { animation: { Feature: M2 }, exit: { Feature: j2 } };
function dr(e, i, s, r = { passive: !0 }) {
  return e.addEventListener(i, s, r), () => e.removeEventListener(i, s);
}
function Sr(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const B2 = (e) => (i) => zh(i) && e(i, Sr(i));
function nr(e, i, s, r) {
  return dr(e, i, B2(s), r);
}
const Db = 1e-4,
  U2 = 1 - Db,
  V2 = 1 + Db,
  Mb = 0.01,
  z2 = 0 - Mb,
  k2 = 0 + Mb;
function ye(e) {
  return e.max - e.min;
}
function H2(e, i, s) {
  return Math.abs(e - i) <= s;
}
function Yg(e, i, s, r = 0.5) {
  (e.origin = r),
    (e.originPoint = kt(i.min, i.max, e.origin)),
    (e.scale = ye(s) / ye(i)),
    (e.translate = kt(s.min, s.max, e.origin) - e.originPoint),
    ((e.scale >= U2 && e.scale <= V2) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= z2 && e.translate <= k2) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function ir(e, i, s, r) {
  Yg(e.x, i.x, s.x, r ? r.originX : void 0),
    Yg(e.y, i.y, s.y, r ? r.originY : void 0);
}
function Gg(e, i, s) {
  (e.min = s.min + i.min), (e.max = e.min + ye(i));
}
function q2(e, i, s) {
  Gg(e.x, i.x, s.x), Gg(e.y, i.y, s.y);
}
function Xg(e, i, s) {
  (e.min = i.min - s.min), (e.max = e.min + ye(i));
}
function ar(e, i, s) {
  Xg(e.x, i.x, s.x), Xg(e.y, i.y, s.y);
}
function Ke(e) {
  return [e("x"), e("y")];
}
const Nb = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Kg = (e, i) => Math.abs(e - i);
function P2(e, i) {
  const s = Kg(e.x, i.x),
    r = Kg(e.y, i.y);
  return Math.sqrt(s ** 2 + r ** 2);
}
class jb {
  constructor(
    i,
    s,
    {
      transformPagePoint: r,
      contextWindow: l = window,
      dragSnapToOrigin: c = !1,
      distanceThreshold: f = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const x = hf(this.lastMoveEventInfo, this.history),
          O = this.startEvent !== null,
          A = P2(x.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!O && !A) return;
        const { point: M } = x,
          { timestamp: R } = re;
        this.history.push({ ...M, timestamp: R });
        const { onStart: C, onMove: B } = this.handlers;
        O ||
          (C && C(this.lastMoveEvent, x),
          (this.startEvent = this.lastMoveEvent)),
          B && B(this.lastMoveEvent, x);
      }),
      (this.handlePointerMove = (x, O) => {
        (this.lastMoveEvent = x),
          (this.lastMoveEventInfo = ff(O, this.transformPagePoint)),
          Ut.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (x, O) => {
        this.end();
        const { onEnd: A, onSessionEnd: M, resumeAnimation: R } = this.handlers;
        if (
          (this.dragSnapToOrigin && R && R(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const C = hf(
          x.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ff(O, this.transformPagePoint),
          this.history
        );
        this.startEvent && A && A(x, C), M && M(x, C);
      }),
      !zh(i))
    )
      return;
    (this.dragSnapToOrigin = c),
      (this.handlers = s),
      (this.transformPagePoint = r),
      (this.distanceThreshold = f),
      (this.contextWindow = l || window);
    const d = Sr(i),
      p = ff(d, this.transformPagePoint),
      { point: m } = p,
      { timestamp: y } = re;
    this.history = [{ ...m, timestamp: y }];
    const { onSessionStart: b } = s;
    b && b(i, hf(p, this.history)),
      (this.removeListeners = br(
        nr(this.contextWindow, "pointermove", this.handlePointerMove),
        nr(this.contextWindow, "pointerup", this.handlePointerUp),
        nr(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), hi(this.updatePoint);
  }
}
function ff(e, i) {
  return i ? { point: i(e.point) } : e;
}
function Fg(e, i) {
  return { x: e.x - i.x, y: e.y - i.y };
}
function hf({ point: e }, i) {
  return {
    point: e,
    delta: Fg(e, Lb(i)),
    offset: Fg(e, Y2(i)),
    velocity: G2(i, 0.1),
  };
}
function Y2(e) {
  return e[0];
}
function Lb(e) {
  return e[e.length - 1];
}
function G2(e, i) {
  if (e.length < 2) return { x: 0, y: 0 };
  let s = e.length - 1,
    r = null;
  const l = Lb(e);
  for (; s >= 0 && ((r = e[s]), !(l.timestamp - r.timestamp > dn(i))); ) s--;
  if (!r) return { x: 0, y: 0 };
  const c = mn(l.timestamp - r.timestamp);
  if (c === 0) return { x: 0, y: 0 };
  const f = { x: (l.x - r.x) / c, y: (l.y - r.y) / c };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function X2(e, { min: i, max: s }, r) {
  return (
    i !== void 0 && e < i
      ? (e = r ? kt(i, e, r.min) : Math.max(e, i))
      : s !== void 0 && e > s && (e = r ? kt(s, e, r.max) : Math.min(e, s)),
    e
  );
}
function Qg(e, i, s) {
  return {
    min: i !== void 0 ? e.min + i : void 0,
    max: s !== void 0 ? e.max + s - (e.max - e.min) : void 0,
  };
}
function K2(e, { top: i, left: s, bottom: r, right: l }) {
  return { x: Qg(e.x, s, l), y: Qg(e.y, i, r) };
}
function Zg(e, i) {
  let s = i.min - e.min,
    r = i.max - e.max;
  return i.max - i.min < e.max - e.min && ([s, r] = [r, s]), { min: s, max: r };
}
function F2(e, i) {
  return { x: Zg(e.x, i.x), y: Zg(e.y, i.y) };
}
function Q2(e, i) {
  let s = 0.5;
  const r = ye(e),
    l = ye(i);
  return (
    l > r
      ? (s = or(i.min, i.max - r, e.min))
      : r > l && (s = or(e.min, e.max - l, i.min)),
    Vn(0, 1, s)
  );
}
function Z2(e, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - e.min),
    i.max !== void 0 && (s.max = i.max - e.min),
    s
  );
}
const Qf = 0.35;
function $2(e = Qf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Qf),
    { x: $g(e, "left", "right"), y: $g(e, "top", "bottom") }
  );
}
function $g(e, i, s) {
  return { min: Jg(e, i), max: Jg(e, s) };
}
function Jg(e, i) {
  return typeof e == "number" ? e : e[i] || 0;
}
const J2 = new WeakMap();
class W2 {
  constructor(i) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Kt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i);
  }
  start(i, { snapToCursor: s = !1, distanceThreshold: r } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const c = (b) => {
        const { dragSnapToOrigin: x } = this.getProps();
        x ? this.pauseAnimation() : this.stopAnimation(),
          s && this.snapToCursor(Sr(b).point);
      },
      f = (b, x) => {
        const { drag: O, dragPropagation: A, onDragStart: M } = this.getProps();
        if (
          O &&
          !A &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = lA(O)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = b),
          (this.latestPanInfo = x),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ke((C) => {
            let B = this.getAxisMotionValue(C).get() || 0;
            if (pn.test(B)) {
              const { projection: N } = this.visualElement;
              if (N && N.layout) {
                const G = N.layout.layoutBox[C];
                G && (B = ye(G) * (parseFloat(B) / 100));
              }
            }
            this.originPoint[C] = B;
          }),
          M && Ut.postRender(() => M(b, x)),
          Kf(this.visualElement, "transform");
        const { animationState: R } = this.visualElement;
        R && R.setActive("whileDrag", !0);
      },
      d = (b, x) => {
        (this.latestPointerEvent = b), (this.latestPanInfo = x);
        const {
          dragPropagation: O,
          dragDirectionLock: A,
          onDirectionLock: M,
          onDrag: R,
        } = this.getProps();
        if (!O && !this.openDragLock) return;
        const { offset: C } = x;
        if (A && this.currentDirection === null) {
          (this.currentDirection = I2(C)),
            this.currentDirection !== null && M && M(this.currentDirection);
          return;
        }
        this.updateAxis("x", x.point, C),
          this.updateAxis("y", x.point, C),
          this.visualElement.render(),
          R && R(b, x);
      },
      p = (b, x) => {
        (this.latestPointerEvent = b),
          (this.latestPanInfo = x),
          this.stop(b, x),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      m = () =>
        Ke(
          (b) =>
            this.getAnimationState(b) === "paused" &&
            this.getAxisMotionValue(b).animation?.play()
        ),
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new jb(
      i,
      {
        onSessionStart: c,
        onStart: f,
        onMove: d,
        onSessionEnd: p,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        distanceThreshold: r,
        contextWindow: Nb(this.visualElement),
      }
    );
  }
  stop(i, s) {
    const r = i || this.latestPointerEvent,
      l = s || this.latestPanInfo,
      c = this.isDragging;
    if ((this.cancel(), !c || !l || !r)) return;
    const { velocity: f } = l;
    this.startAnimation(f);
    const { onDragEnd: d } = this.getProps();
    d && Ut.postRender(() => d(r, l));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: s } = this.visualElement;
    i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1);
  }
  updateAxis(i, s, r) {
    const { drag: l } = this.getProps();
    if (!r || !Ko(i, l, this.currentDirection)) return;
    const c = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + r[i];
    this.constraints &&
      this.constraints[i] &&
      (f = X2(f, this.constraints[i], this.elastic[i])),
      c.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: s } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      l = this.constraints;
    i && Na(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && r
      ? (this.constraints = K2(r.layoutBox, i))
      : (this.constraints = !1),
      (this.elastic = $2(s)),
      l !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ke((c) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(c) &&
            (this.constraints[c] = Z2(r.layoutBox[c], this.constraints[c]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !Na(i)) return !1;
    const r = i.current,
      { projection: l } = this.visualElement;
    if (!l || !l.layout) return !1;
    const c = IA(r, l.root, this.visualElement.getTransformPagePoint());
    let f = F2(l.layout.layoutBox, c);
    if (s) {
      const d = s($A(f));
      (this.hasMutatedConstraints = !!d), d && (f = vb(d));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: s,
        dragMomentum: r,
        dragElastic: l,
        dragTransition: c,
        dragSnapToOrigin: f,
        onDragTransitionEnd: d,
      } = this.getProps(),
      p = this.constraints || {},
      m = Ke((y) => {
        if (!Ko(y, s, this.currentDirection)) return;
        let b = (p && p[y]) || {};
        f && (b = { min: 0, max: 0 });
        const x = l ? 200 : 1e6,
          O = l ? 40 : 1e7,
          A = {
            type: "inertia",
            velocity: r ? i[y] : 0,
            bounceStiffness: x,
            bounceDamping: O,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...c,
            ...b,
          };
        return this.startAxisValueAnimation(y, A);
      });
    return Promise.all(m).then(d);
  }
  startAxisValueAnimation(i, s) {
    const r = this.getAxisMotionValue(i);
    return (
      Kf(this.visualElement, i), r.start(Fh(i, r, 0, s, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ke((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    Ke((i) => this.getAxisMotionValue(i).animation?.pause());
  }
  getAnimationState(i) {
    return this.getAxisMotionValue(i).animation?.state;
  }
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`,
      r = this.visualElement.getProps(),
      l = r[s];
    return (
      l ||
      this.visualElement.getValue(i, (r.initial ? r.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    Ke((s) => {
      const { drag: r } = this.getProps();
      if (!Ko(s, r, this.currentDirection)) return;
      const { projection: l } = this.visualElement,
        c = this.getAxisMotionValue(s);
      if (l && l.layout) {
        const { min: f, max: d } = l.layout.layoutBox[s];
        c.set(i[s] - kt(f, d, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: s } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Na(s) || !r || !this.constraints) return;
    this.stopAnimation();
    const l = { x: 0, y: 0 };
    Ke((f) => {
      const d = this.getAxisMotionValue(f);
      if (d && this.constraints !== !1) {
        const p = d.get();
        l[f] = Q2({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = c ? c({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ke((f) => {
        if (!Ko(f, i, null)) return;
        const d = this.getAxisMotionValue(f),
          { min: p, max: m } = this.constraints[f];
        d.set(kt(p, m, l[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    J2.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = nr(i, "pointerdown", (p) => {
        const { drag: m, dragListener: y = !0 } = this.getProps();
        m && y && this.start(p);
      }),
      r = () => {
        const { dragConstraints: p } = this.getProps();
        Na(p) && p.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: l } = this.visualElement,
      c = l.addEventListener("measure", r);
    l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()),
      Ut.read(r);
    const f = dr(window, "resize", () => this.scalePositionWithinConstraints()),
      d = l.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: m }) => {
          this.isDragging &&
            m &&
            (Ke((y) => {
              const b = this.getAxisMotionValue(y);
              b &&
                ((this.originPoint[y] += p[y].translate),
                b.set(b.get() + p[y].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      f(), s(), c(), d && d();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: r = !1,
        dragPropagation: l = !1,
        dragConstraints: c = !1,
        dragElastic: f = Qf,
        dragMomentum: d = !0,
      } = i;
    return {
      ...i,
      drag: s,
      dragDirectionLock: r,
      dragPropagation: l,
      dragConstraints: c,
      dragElastic: f,
      dragMomentum: d,
    };
  }
}
function Ko(e, i, s) {
  return (i === !0 || i === e) && (s === null || s === e);
}
function I2(e, i = 10) {
  let s = null;
  return Math.abs(e.y) > i ? (s = "y") : Math.abs(e.x) > i && (s = "x"), s;
}
class tR extends pi {
  constructor(i) {
    super(i),
      (this.removeGroupControls = Qe),
      (this.removeListeners = Qe),
      (this.controls = new W2(i));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Qe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Wg = (e) => (i, s) => {
  e && Ut.postRender(() => e(i, s));
};
class eR extends pi {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Qe);
  }
  onPointerDown(i) {
    this.session = new jb(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Nb(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: s,
      onPan: r,
      onPanEnd: l,
    } = this.node.getProps();
    return {
      onSessionStart: Wg(i),
      onStart: Wg(s),
      onMove: r,
      onEnd: (c, f) => {
        delete this.session, l && Ut.postRender(() => l(c, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = nr(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const tl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ig(e, i) {
  return i.max === i.min ? 0 : (e / (i.max - i.min)) * 100;
}
const Qs = {
    correct: (e, i) => {
      if (!i.target) return e;
      if (typeof e == "string")
        if (ot.test(e)) e = parseFloat(e);
        else return e;
      const s = Ig(e, i.target.x),
        r = Ig(e, i.target.y);
      return `${s}% ${r}%`;
    },
  },
  nR = {
    correct: (e, { treeScale: i, projectionDelta: s }) => {
      const r = e,
        l = di.parse(e);
      if (l.length > 5) return r;
      const c = di.createTransformer(e),
        f = typeof l[0] != "number" ? 1 : 0,
        d = s.x.scale * i.x,
        p = s.y.scale * i.y;
      (l[0 + f] /= d), (l[1 + f] /= p);
      const m = kt(d, p, 0.5);
      return (
        typeof l[2 + f] == "number" && (l[2 + f] /= m),
        typeof l[3 + f] == "number" && (l[3 + f] /= m),
        c(l)
      );
    },
  };
let t0 = !1;
class iR extends E.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: r,
        layoutId: l,
      } = this.props,
      { projection: c } = i;
    _A(aR),
      c &&
        (s.group && s.group.add(c),
        r && r.register && l && r.register(c),
        t0 && c.root.didUpdate(),
        c.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        c.setOptions({
          ...c.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (tl.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: s,
        visualElement: r,
        drag: l,
        isPresent: c,
      } = this.props,
      { projection: f } = r;
    return (
      f &&
        ((f.isPresent = c),
        (t0 = !0),
        l || i.layoutDependency !== s || s === void 0 || i.isPresent !== c
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== c &&
          (c
            ? f.promote()
            : f.relegate() ||
              Ut.postRender(() => {
                const d = f.getStack();
                (!d || !d.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      Vh.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: r,
      } = this.props,
      { projection: l } = i;
    l &&
      (l.scheduleCheckAfterUnmount(),
      s && s.group && s.group.remove(l),
      r && r.deregister && r.deregister(l));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function Bb(e) {
  const [i, s] = gA(),
    r = E.useContext(mv);
  return T.jsx(iR, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: E.useContext(yb),
    isPresent: i,
    safeToRemove: s,
  });
}
const aR = {
  borderRadius: {
    ...Qs,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Qs,
  borderTopRightRadius: Qs,
  borderBottomLeftRadius: Qs,
  borderBottomRightRadius: Qs,
  boxShadow: nR,
};
function sR(e, i, s) {
  const r = he(e) ? e : Va(e);
  return r.start(Fh("", r, i, s)), r.animation;
}
const rR = (e, i) => e.depth - i.depth;
class oR {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(i) {
    vh(this.children, i), (this.isDirty = !0);
  }
  remove(i) {
    bh(this.children, i), (this.isDirty = !0);
  }
  forEach(i) {
    this.isDirty && this.children.sort(rR),
      (this.isDirty = !1),
      this.children.forEach(i);
  }
}
function lR(e, i) {
  const s = Se.now(),
    r = ({ timestamp: l }) => {
      const c = l - s;
      c >= i && (hi(r), e(c - i));
    };
  return Ut.setup(r, !0), () => hi(r);
}
const Ub = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  uR = Ub.length,
  e0 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  n0 = (e) => typeof e == "number" || ot.test(e);
function cR(e, i, s, r, l, c) {
  l
    ? ((e.opacity = kt(0, s.opacity ?? 1, fR(r))),
      (e.opacityExit = kt(i.opacity ?? 1, 0, hR(r))))
    : c && (e.opacity = kt(i.opacity ?? 1, s.opacity ?? 1, r));
  for (let f = 0; f < uR; f++) {
    const d = `border${Ub[f]}Radius`;
    let p = i0(i, d),
      m = i0(s, d);
    if (p === void 0 && m === void 0) continue;
    p || (p = 0),
      m || (m = 0),
      p === 0 || m === 0 || n0(p) === n0(m)
        ? ((e[d] = Math.max(kt(e0(p), e0(m), r), 0)),
          (pn.test(m) || pn.test(p)) && (e[d] += "%"))
        : (e[d] = m);
  }
  (i.rotate || s.rotate) && (e.rotate = kt(i.rotate || 0, s.rotate || 0, r));
}
function i0(e, i) {
  return e[i] !== void 0 ? e[i] : e.borderRadius;
}
const fR = Vb(0, 0.5, wv),
  hR = Vb(0.5, 0.95, Qe);
function Vb(e, i, s) {
  return (r) => (r < e ? 0 : r > i ? 1 : s(or(e, i, r)));
}
function a0(e, i) {
  (e.min = i.min), (e.max = i.max);
}
function Ge(e, i) {
  a0(e.x, i.x), a0(e.y, i.y);
}
function s0(e, i) {
  (e.translate = i.translate),
    (e.scale = i.scale),
    (e.originPoint = i.originPoint),
    (e.origin = i.origin);
}
function r0(e, i, s, r, l) {
  return (
    (e -= i), (e = ml(e, 1 / s, r)), l !== void 0 && (e = ml(e, 1 / l, r)), e
  );
}
function dR(e, i = 0, s = 1, r = 0.5, l, c = e, f = e) {
  if (
    (pn.test(i) &&
      ((i = parseFloat(i)), (i = kt(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let d = kt(c.min, c.max, r);
  e === c && (d -= i),
    (e.min = r0(e.min, i, s, d, l)),
    (e.max = r0(e.max, i, s, d, l));
}
function o0(e, i, [s, r, l], c, f) {
  dR(e, i[s], i[r], i[l], i.scale, c, f);
}
const mR = ["x", "scaleX", "originX"],
  pR = ["y", "scaleY", "originY"];
function l0(e, i, s, r) {
  o0(e.x, i, mR, s ? s.x : void 0, r ? r.x : void 0),
    o0(e.y, i, pR, s ? s.y : void 0, r ? r.y : void 0);
}
function u0(e) {
  return e.translate === 0 && e.scale === 1;
}
function zb(e) {
  return u0(e.x) && u0(e.y);
}
function c0(e, i) {
  return e.min === i.min && e.max === i.max;
}
function yR(e, i) {
  return c0(e.x, i.x) && c0(e.y, i.y);
}
function f0(e, i) {
  return (
    Math.round(e.min) === Math.round(i.min) &&
    Math.round(e.max) === Math.round(i.max)
  );
}
function kb(e, i) {
  return f0(e.x, i.x) && f0(e.y, i.y);
}
function h0(e) {
  return ye(e.x) / ye(e.y);
}
function d0(e, i) {
  return (
    e.translate === i.translate &&
    e.scale === i.scale &&
    e.originPoint === i.originPoint
  );
}
class gR {
  constructor() {
    this.members = [];
  }
  add(i) {
    vh(this.members, i), i.scheduleRender();
  }
  remove(i) {
    if (
      (bh(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(i) {
    const s = this.members.findIndex((l) => i === l);
    if (s === 0) return !1;
    let r;
    for (let l = s; l >= 0; l--) {
      const c = this.members[l];
      if (c.isPresent !== !1) {
        r = c;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(i, s) {
    const r = this.lead;
    if (i !== r && ((this.prevLead = r), (this.lead = i), i.show(), r)) {
      r.instance && r.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = r),
        s && (i.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((i.snapshot = r.snapshot),
          (i.snapshot.latestValues = r.animationValues || r.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
      const { crossfade: l } = i.options;
      l === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: s, resumingFrom: r } = i;
      s.onExitComplete && s.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function vR(e, i, s) {
  let r = "";
  const l = e.x.translate / i.x,
    c = e.y.translate / i.y,
    f = s?.z || 0;
  if (
    ((l || c || f) && (r = `translate3d(${l}px, ${c}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (r += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const {
      transformPerspective: m,
      rotate: y,
      rotateX: b,
      rotateY: x,
      skewX: O,
      skewY: A,
    } = s;
    m && (r = `perspective(${m}px) ${r}`),
      y && (r += `rotate(${y}deg) `),
      b && (r += `rotateX(${b}deg) `),
      x && (r += `rotateY(${x}deg) `),
      O && (r += `skewX(${O}deg) `),
      A && (r += `skewY(${A}deg) `);
  }
  const d = e.x.scale * i.x,
    p = e.y.scale * i.y;
  return (d !== 1 || p !== 1) && (r += `scale(${d}, ${p})`), r || "none";
}
const df = ["", "X", "Y", "Z"],
  bR = 1e3;
let xR = 0;
function mf(e, i, s, r) {
  const { latestValues: l } = i;
  l[e] && ((s[e] = l[e]), i.setStaticValue(e, 0), r && (r[e] = 0));
}
function Hb(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: i } = e.options;
  if (!i) return;
  const s = Ab(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: l, layoutId: c } = e.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Ut, !(l || c));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Hb(r);
}
function qb({
  attachResizeListener: e,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: r,
  resetTransform: l,
}) {
  return class {
    constructor(f = {}, d = i?.()) {
      (this.id = xR++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(ER),
            this.nodes.forEach(RR),
            this.nodes.forEach(CR),
            this.nodes.forEach(_R);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = d ? d.root || d : this),
        (this.path = d ? [...d.path, d] : []),
        (this.parent = d),
        (this.depth = d ? d.depth + 1 : 0);
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new oR());
    }
    addEventListener(f, d) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Sh()),
        this.eventHandlers.get(f).add(d)
      );
    }
    notifyListeners(f, ...d) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...d);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = ib(f) && !mA(f)), (this.instance = f);
      const { layoutId: d, layout: p, visualElement: m } = this.options;
      if (
        (m && !m.current && m.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || d) && (this.isLayoutDirty = !0),
        e)
      ) {
        let y,
          b = 0;
        const x = () => (this.root.updateBlockedByResize = !1);
        Ut.read(() => {
          b = window.innerWidth;
        }),
          e(f, () => {
            const O = window.innerWidth;
            O !== b &&
              ((b = O),
              (this.root.updateBlockedByResize = !0),
              y && y(),
              (y = lR(x, 250)),
              tl.hasAnimatedSinceResize &&
                ((tl.hasAnimatedSinceResize = !1), this.nodes.forEach(y0)));
          });
      }
      d && this.root.registerSharedNode(d, this),
        this.options.animate !== !1 &&
          m &&
          (d || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: y,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: x,
              layout: O,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const A =
                  this.options.transition || m.getDefaultTransition() || jR,
                { onLayoutAnimationStart: M, onLayoutAnimationComplete: R } =
                  m.getProps(),
                C = !this.targetLayout || !kb(this.targetLayout, O),
                B = !b && x;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                B ||
                (b && (C || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const N = { ...Bh(A, "layout"), onPlay: M, onComplete: R };
                (m.shouldReduceMotion || this.options.layoutRoot) &&
                  ((N.delay = 0), (N.type = !1)),
                  this.startAnimation(N),
                  this.setAnimationOrigin(y, B);
              } else
                b || y0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = O;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        hi(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(OR),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Hb(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const b = this.path[y];
        (b.shouldResetTransform = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1);
      }
      const { layoutId: d, layout: p } = this.options;
      if (d === void 0 && !p) return;
      const m = this.getTransformTemplate();
      (this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(m0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(p0);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(AR),
            this.nodes.forEach(TR),
            this.nodes.forEach(SR))
          : this.nodes.forEach(p0),
        this.clearAllSnapshots();
      const d = Se.now();
      (re.delta = Vn(0, 1e3 / 60, d - re.timestamp)),
        (re.timestamp = d),
        (re.isProcessing = !0),
        nf.update.process(re),
        nf.preRender.process(re),
        nf.render.process(re),
        (re.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Vh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(wR), this.sharedNodes.forEach(DR);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ut.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ut.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ye(this.snapshot.measuredBox.x) &&
          !ye(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Kt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: d } = this.options;
      d &&
        d.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        );
    }
    updateScroll(f = "measure") {
      let d = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (d = !1),
        d && this.instance)
      ) {
        const p = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!l) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        d = this.projectionDelta && !zb(this.projectionDelta),
        p = this.getTransformTemplate(),
        m = p ? p(this.latestValues, "") : void 0,
        y = m !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (d || Bi(this.latestValues) || y) &&
        (l(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const d = this.measurePageBox();
      let p = this.removeElementScroll(d);
      return (
        f && (p = this.removeTransform(p)),
        LR(p),
        {
          animationId: this.root.animationId,
          measuredBox: d,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f) return Kt();
      const d = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(BR))) {
        const { scroll: m } = this.root;
        m && (ja(d.x, m.offset.x), ja(d.y, m.offset.y));
      }
      return d;
    }
    removeElementScroll(f) {
      const d = Kt();
      if ((Ge(d, f), this.scroll?.wasRoot)) return d;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p],
          { scroll: y, options: b } = m;
        m !== this.root &&
          y &&
          b.layoutScroll &&
          (y.wasRoot && Ge(d, f), ja(d.x, y.offset.x), ja(d.y, y.offset.y));
      }
      return d;
    }
    applyTransform(f, d = !1) {
      const p = Kt();
      Ge(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const y = this.path[m];
        !d &&
          y.options.layoutScroll &&
          y.scroll &&
          y !== y.root &&
          La(p, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
          Bi(y.latestValues) && La(p, y.latestValues);
      }
      return Bi(this.latestValues) && La(p, this.latestValues), p;
    }
    removeTransform(f) {
      const d = Kt();
      Ge(d, f);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        if (!m.instance || !Bi(m.latestValues)) continue;
        Pf(m.latestValues) && m.updateSnapshot();
        const y = Kt(),
          b = m.measurePageBox();
        Ge(y, b),
          l0(d, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, y);
      }
      return Bi(this.latestValues) && l0(d, this.latestValues), d;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== re.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const d = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== d;
      if (
        !(
          f ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: y, layoutId: b } = this.options;
      if (!(!this.layout || !(y || b))) {
        if (
          ((this.resolvedRelativeTargetAt = re.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Kt()),
              (this.relativeTargetOrigin = Kt()),
              ar(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                x.layout.layoutBox
              ),
              Ge(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Kt()), (this.targetWithTransforms = Kt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              q2(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Ge(this.target, this.layout.layoutBox),
              xb(this.target, this.targetDelta))
            : Ge(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const x = this.getClosestProjectingParent();
          x &&
          !!x.resumingFrom == !!this.resumingFrom &&
          !x.options.layoutScroll &&
          x.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Kt()),
              (this.relativeTargetOrigin = Kt()),
              ar(this.relativeTargetOrigin, this.target, x.target),
              Ge(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Pf(this.parent.latestValues) ||
          bb(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      const f = this.getLead(),
        d = !!this.resumingFrom || this !== f;
      let p = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1),
        d &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === re.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: m, layoutId: y } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || y))
      )
        return;
      Ge(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        x = this.treeScale.y;
      WA(this.layoutCorrected, this.treeScale, this.path, d),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Kt()));
      const { target: O } = f;
      if (!O) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (s0(this.prevProjectionDelta.x, this.projectionDelta.x),
          s0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ir(this.projectionDelta, this.layoutCorrected, O, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== x ||
          !d0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !d0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", O));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if ((this.options.visualElement?.scheduleRender(), f)) {
        const d = this.getStack();
        d && d.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Ba()),
        (this.projectionDelta = Ba()),
        (this.projectionDeltaWithTransform = Ba());
    }
    setAnimationOrigin(f, d = !1) {
      const p = this.snapshot,
        m = p ? p.latestValues : {},
        y = { ...this.latestValues },
        b = Ba();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !d);
      const x = Kt(),
        O = p ? p.source : void 0,
        A = this.layout ? this.layout.source : void 0,
        M = O !== A,
        R = this.getStack(),
        C = !R || R.members.length <= 1,
        B = !!(M && !C && this.options.crossfade === !0 && !this.path.some(NR));
      this.animationProgress = 0;
      let N;
      (this.mixTargetDelta = (G) => {
        const k = G / 1e3;
        g0(b.x, f.x, k),
          g0(b.y, f.y, k),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ar(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            MR(this.relativeTarget, this.relativeTargetOrigin, x, k),
            N && yR(this.relativeTarget, N) && (this.isProjectionDirty = !1),
            N || (N = Kt()),
            Ge(N, this.relativeTarget)),
          M &&
            ((this.animationValues = y), cR(y, m, this.latestValues, k, B, C)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (hi(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ut.update(() => {
          (tl.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Va(0)),
            (this.currentAnimation = sR(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (d) => {
                this.mixTargetDelta(d), f.onUpdate && f.onUpdate(d);
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(bR),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: d,
        target: p,
        layout: m,
        latestValues: y,
      } = f;
      if (!(!d || !p || !m)) {
        if (
          this !== f &&
          this.layout &&
          m &&
          Pb(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          p = this.target || Kt();
          const b = ye(this.layout.layoutBox.x);
          (p.x.min = f.target.x.min), (p.x.max = p.x.min + b);
          const x = ye(this.layout.layoutBox.y);
          (p.y.min = f.target.y.min), (p.y.max = p.y.min + x);
        }
        Ge(d, p),
          La(d, y),
          ir(this.projectionDeltaWithTransform, this.layoutCorrected, d, y);
      }
    }
    registerSharedNode(f, d) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new gR()),
        this.sharedNodes.get(f).add(d);
      const m = d.options.initialPromotionConfig;
      d.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(d)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: d, preserveFollowOpacity: p } = {}) {
      const m = this.getStack();
      m && m.promote(this, p),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        d && this.setOptions({ transition: d });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let d = !1;
      const { latestValues: p } = f;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (d = !0),
        !d)
      )
        return;
      const m = {};
      p.z && mf("z", f, m, this.animationValues);
      for (let y = 0; y < df.length; y++)
        mf(`rotate${df[y]}`, f, m, this.animationValues),
          mf(`skew${df[y]}`, f, m, this.animationValues);
      f.render();
      for (const y in m)
        f.setStaticValue(y, m[y]),
          this.animationValues && (this.animationValues[y] = m[y]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, d) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = Io(d?.pointerEvents) || ""),
          (f.transform = p ? p(this.latestValues, "") : "none");
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = Io(d?.pointerEvents) || "")),
          this.hasProjected &&
            !Bi(this.latestValues) &&
            ((f.transform = p ? p({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      f.visibility = "";
      const y = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let b = vR(this.projectionDeltaWithTransform, this.treeScale, y);
      p && (b = p(y, b)), (f.transform = b);
      const { x, y: O } = this.projectionDelta;
      (f.transformOrigin = `${x.origin * 100}% ${O.origin * 100}% 0`),
        m.animationValues
          ? (f.opacity =
              m === this
                ? y.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : y.opacityExit)
          : (f.opacity =
              m === this
                ? y.opacity !== void 0
                  ? y.opacity
                  : ""
                : y.opacityExit !== void 0
                ? y.opacityExit
                : 0);
      for (const A in fr) {
        if (y[A] === void 0) continue;
        const { correct: M, applyTo: R, isCSSVariable: C } = fr[A],
          B = b === "none" ? y[A] : M(y[A], m);
        if (R) {
          const N = R.length;
          for (let G = 0; G < N; G++) f[R[G]] = B;
        } else
          C ? (this.options.visualElement.renderState.vars[A] = B) : (f[A] = B);
      }
      this.options.layoutId &&
        (f.pointerEvents = m === this ? Io(d?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()),
        this.root.nodes.forEach(m0),
        this.root.sharedNodes.clear();
    }
  };
}
function TR(e) {
  e.updateLayout();
}
function SR(e) {
  const i = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: r } = e.layout,
      { animationType: l } = e.options,
      c = i.source !== e.layout.source;
    l === "size"
      ? Ke((y) => {
          const b = c ? i.measuredBox[y] : i.layoutBox[y],
            x = ye(b);
          (b.min = s[y].min), (b.max = b.min + x);
        })
      : Pb(l, i.layoutBox, s) &&
        Ke((y) => {
          const b = c ? i.measuredBox[y] : i.layoutBox[y],
            x = ye(s[y]);
          (b.max = b.min + x),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[y].max = e.relativeTarget[y].min + x));
        });
    const f = Ba();
    ir(f, s, i.layoutBox);
    const d = Ba();
    c ? ir(d, e.applyTransform(r, !0), i.measuredBox) : ir(d, s, i.layoutBox);
    const p = !zb(f);
    let m = !1;
    if (!e.resumeFrom) {
      const y = e.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: b, layout: x } = y;
        if (b && x) {
          const O = Kt();
          ar(O, i.layoutBox, b.layoutBox);
          const A = Kt();
          ar(A, s, x.layoutBox),
            kb(O, A) || (m = !0),
            y.options.layoutRoot &&
              ((e.relativeTarget = A),
              (e.relativeTargetOrigin = O),
              (e.relativeParent = y));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: i,
      delta: d,
      layoutDelta: f,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: m,
    });
  } else if (e.isLead()) {
    const { onExitComplete: s } = e.options;
    s && s();
  }
  e.options.transition = void 0;
}
function ER(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function _R(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function wR(e) {
  e.clearSnapshot();
}
function m0(e) {
  e.clearMeasurements();
}
function p0(e) {
  e.isLayoutDirty = !1;
}
function AR(e) {
  const { visualElement: i } = e.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function y0(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function RR(e) {
  e.resolveTargetDelta();
}
function CR(e) {
  e.calcProjection();
}
function OR(e) {
  e.resetSkewAndRotation();
}
function DR(e) {
  e.removeLeadSnapshot();
}
function g0(e, i, s) {
  (e.translate = kt(i.translate, 0, s)),
    (e.scale = kt(i.scale, 1, s)),
    (e.origin = i.origin),
    (e.originPoint = i.originPoint);
}
function v0(e, i, s, r) {
  (e.min = kt(i.min, s.min, r)), (e.max = kt(i.max, s.max, r));
}
function MR(e, i, s, r) {
  v0(e.x, i.x, s.x, r), v0(e.y, i.y, s.y, r);
}
function NR(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const jR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  b0 = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  x0 = b0("applewebkit/") && !b0("chrome/") ? Math.round : Qe;
function T0(e) {
  (e.min = x0(e.min)), (e.max = x0(e.max));
}
function LR(e) {
  T0(e.x), T0(e.y);
}
function Pb(e, i, s) {
  return (
    e === "position" || (e === "preserve-aspect" && !H2(h0(i), h0(s), 0.2))
  );
}
function BR(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const UR = qb({
    attachResizeListener: (e, i) => dr(e, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  pf = { current: void 0 },
  Yb = qb({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!pf.current) {
        const e = new UR({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (pf.current = e);
      }
      return pf.current;
    },
    resetTransform: (e, i) => {
      e.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  VR = {
    pan: { Feature: eR },
    drag: { Feature: tR, ProjectionNode: Yb, MeasureLayout: Bb },
  };
function S0(e, i, s) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", s === "Start");
  const l = "onHover" + s,
    c = r[l];
  c && Ut.postRender(() => c(i, Sr(i)));
}
class zR extends pi {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = uA(
        i,
        (s, r) => (S0(this.node, r, "Start"), (l) => S0(this.node, l, "End"))
      ));
  }
  unmount() {}
}
class kR extends pi {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = br(
      dr(this.node.current, "focus", () => this.onFocus()),
      dr(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function E0(e, i, s) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", s === "Start");
  const l = "onTap" + (s === "End" ? "" : s),
    c = r[l];
  c && Ut.postRender(() => c(i, Sr(i)));
}
class HR extends pi {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = dA(
        i,
        (s, r) => (
          E0(this.node, r, "Start"),
          (l, { success: c }) => E0(this.node, l, c ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Zf = new WeakMap(),
  yf = new WeakMap(),
  qR = (e) => {
    const i = Zf.get(e.target);
    i && i(e);
  },
  PR = (e) => {
    e.forEach(qR);
  };
function YR({ root: e, ...i }) {
  const s = e || document;
  yf.has(s) || yf.set(s, {});
  const r = yf.get(s),
    l = JSON.stringify(i);
  return r[l] || (r[l] = new IntersectionObserver(PR, { root: e, ...i })), r[l];
}
function GR(e, i, s) {
  const r = YR(i);
  return (
    Zf.set(e, s),
    r.observe(e),
    () => {
      Zf.delete(e), r.unobserve(e);
    }
  );
}
const XR = { some: 0, all: 1 };
class KR extends pi {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: s, margin: r, amount: l = "some", once: c } = i,
      f = {
        root: s ? s.current : void 0,
        rootMargin: r,
        threshold: typeof l == "number" ? l : XR[l],
      },
      d = (p) => {
        const { isIntersecting: m } = p;
        if (
          this.isInView === m ||
          ((this.isInView = m), c && !m && this.hasEnteredView)
        )
          return;
        m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m);
        const { onViewportEnter: y, onViewportLeave: b } = this.node.getProps(),
          x = m ? y : b;
        x && x(p);
      };
    return GR(this.node.current, f, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(FR(i, s)) && this.startObserver();
  }
  unmount() {}
}
function FR({ viewport: e = {} }, { viewport: i = {} } = {}) {
  return (s) => e[s] !== i[s];
}
const QR = {
    inView: { Feature: KR },
    tap: { Feature: HR },
    focus: { Feature: kR },
    hover: { Feature: zR },
  },
  ZR = { layout: { ProjectionNode: Yb, MeasureLayout: Bb } },
  $R = { ...L2, ...QR, ...VR, ...ZR },
  en = ZA($R, l2);
function Ws({ children: e, onClick: i, className: s }) {
  return T.jsx(en.button, {
    whileHover: { scale: 1 },
    whileTap: { scale: 0.95 },
    onClick: i,
    className: `px-6 py-2 bg-blue-600 text-white rounded-md font-semibold ${s}`,
    children: e,
  });
}
function JR() {
  const [e, i] = E.useState(!1),
    [s, r] = E.useState(null),
    l = vn(),
    c = async () => {
      try {
        const p = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          credentials: "include",
        });
        if (p.ok) {
          const m = await p.json();
          r(m);
        } else r(null);
      } catch (p) {
        console.error("Error fetching user:", p), r(null);
      }
    };
  E.useEffect(() => {
    c();
  }, []);
  const f = async () => {
      try {
        await fetch("http://localhost:5000/api/auth/logout", {
          method: "POST",
          credentials: "include",
        }),
          r(null),
          l("/auth/login");
      } catch (p) {
        console.error("Logout failed:", p);
      }
    },
    d = !!s;
  return T.jsxs("nav", {
    className: "bg-white shadow-sm sticky top-0 z-50",
    children: [
      T.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: T.jsxs("div", {
          className: "flex justify-between h-16 items-center",
          children: [
            T.jsx(Bt, {
              to: "/",
              className: "text-xl font-bold text-blue-600",
              children: T.jsx("img", {
                src: "/logo2.png",
                alt: "Campus Matrix",
                className: "h-10 w-32",
              }),
            }),
            T.jsxs("div", {
              className: "hidden md:flex items-center space-x-8",
              children: [
                d &&
                  s?.role === "mentee" &&
                  T.jsx(Bt, {
                    to: "/matching",
                    className: "text-gray-700 hover:text-blue-600",
                    children: "Find Mentor",
                  }),
                d &&
                  s?.role === "mentor" &&
                  T.jsx(Bt, {
                    to: "/matching",
                    className: "text-gray-700 hover:text-blue-600",
                    children: "Find Mentee",
                  }),
                T.jsx(Bt, {
                  to: "/goals",
                  className: "text-gray-700 hover:text-blue-600",
                  children: "Goals",
                }),
                T.jsx(Bt, {
                  to: "/resources",
                  className: "text-gray-700 hover:text-blue-600",
                  children: "Resources",
                }),
                T.jsx(Bt, {
                  to: "/events",
                  className: "text-gray-700 hover:text-blue-600",
                  children: "Events",
                }),
                d &&
                  T.jsxs(T.Fragment, {
                    children: [
                      T.jsx(Bt, {
                        to: "/messages",
                        className: "text-gray-700 hover:text-blue-600",
                        children: "Messages",
                      }),
                      T.jsx(Bt, {
                        to: "/profile",
                        className:
                          "w-10 h-10 rounded-full overflow-hidden border border-gray-300",
                        children: T.jsx("img", {
                          src: s?.image || "/avatar.png",
                          alt: s?.name || "User",
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      T.jsx("button", {
                        onClick: f,
                        className:
                          "text-white border border-red-600 px-3 bg-red-500 py-1 rounded hover:bg-red-600 cursor-pointer",
                        children: "Logout",
                      }),
                    ],
                  }),
                !d &&
                  T.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      T.jsx(Ws, {
                        variant: "outline",
                        children: T.jsx(Bt, {
                          to: "/auth/login",
                          children: "Login",
                        }),
                      }),
                      T.jsx(Ws, {
                        children: T.jsx(Bt, {
                          to: "/auth/signup",
                          children: "Sign Up",
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            T.jsx("div", {
              className: "md:hidden flex items-center",
              children: T.jsx("button", {
                onClick: () => i(!e),
                className: "p-2 text-gray-700 hover:text-blue-600",
                "aria-label": "Menu",
                children: e
                  ? T.jsx(fg, { className: "h-6 w-6" })
                  : T.jsx(y_, { className: "h-6 w-6" }),
              }),
            }),
          ],
        }),
      }),
      T.jsx("div", {
        className: `md:hidden fixed inset-0 bg-white z-40 transform ${
          e ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`,
        children: T.jsxs("div", {
          className: "flex flex-col h-full p-6 space-y-6",
          children: [
            T.jsxs("div", {
              className: "flex justify-between items-center",
              children: [
                T.jsx(Bt, {
                  to: "/",
                  className: "text-xl font-bold text-blue-600",
                  onClick: () => i(!1),
                  children: "Campus Matrix",
                }),
                T.jsx("button", {
                  onClick: () => i(!1),
                  children: T.jsx(fg, {
                    className: "h-6 w-6 text-gray-700 hover:text-blue-600",
                  }),
                }),
              ],
            }),
            T.jsxs("div", {
              className: "flex flex-col space-y-4",
              children: [
                d &&
                  s?.role === "mentee" &&
                  T.jsx(Bt, {
                    to: "/matching",
                    onClick: () => i(!1),
                    className: "text-lg text-gray-700 hover:text-blue-600",
                    children: "Find Mentor",
                  }),
                d &&
                  s?.role === "mentor" &&
                  T.jsx(Bt, {
                    to: "/matching",
                    onClick: () => i(!1),
                    className: "text-lg text-gray-700 hover:text-blue-600",
                    children: "Find Mentee",
                  }),
                T.jsx(Bt, {
                  to: "/goals",
                  onClick: () => i(!1),
                  className: "text-lg text-gray-700 hover:text-blue-600",
                  children: "Goals",
                }),
                T.jsx(Bt, {
                  to: "/resources",
                  onClick: () => i(!1),
                  className: "text-lg text-gray-700 hover:text-blue-600",
                  children: "Resources",
                }),
                T.jsx(Bt, {
                  to: "/events",
                  onClick: () => i(!1),
                  className: "text-lg text-gray-700 hover:text-blue-600",
                  children: "Events",
                }),
                d &&
                  T.jsx(Bt, {
                    to: "/messages",
                    onClick: () => i(!1),
                    className: "text-lg text-gray-700 hover:text-blue-600",
                    children: "Messages",
                  }),
              ],
            }),
            T.jsx("div", {
              className: "mt-auto pt-6 border-t border-gray-200",
              children: d
                ? T.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      T.jsx(Bt, {
                        to: "/profile",
                        onClick: () => i(!1),
                        className: "flex items-center space-x-2 text-lg",
                        children: T.jsx("span", { children: "Profile" }),
                      }),
                      T.jsx("button", {
                        onClick: () => {
                          i(!1), f();
                        },
                        className: "text-left text-lg text-red-600 w-full",
                        children: "Logout",
                      }),
                    ],
                  })
                : T.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      T.jsx(Ws, {
                        variant: "outline",
                        className: "w-full",
                        children: T.jsx(Bt, {
                          to: "/auth/login",
                          onClick: () => i(!1),
                          children: "Login",
                        }),
                      }),
                      T.jsx(Ws, {
                        className: "w-full",
                        children: T.jsx(Bt, {
                          to: "/auth/signup",
                          onClick: () => i(!1),
                          children: "Sign Up",
                        }),
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
      e &&
        T.jsx("div", {
          className: "fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden",
          onClick: () => i(!1),
        }),
    ],
  });
}
function WR() {
  const e = [
    {
      title: "Mentor-Mentee Matching",
      desc: "Smart matching based on interests, streams & language.",
    },
    {
      title: "Secure Messaging",
      desc: "Chat safely within the app, with moderation tools.",
    },
    {
      title: "Goal Tracking",
      desc: "Set goals, track progress, and celebrate success.",
    },
    {
      title: "Event Scheduling",
      desc: "Plan mentorship meets & workshops easily.",
    },
    {
      title: "Badges & Rewards",
      desc: "Earn points, badges, and certificates.",
    },
    {
      title: "Resource Library",
      desc: "Access guides, FAQs & campus help anytime.",
    },
  ];
  return T.jsx("section", {
    className: "py-20 bg-white",
    children: T.jsxs("div", {
      className: "max-w-6xl mx-auto px-4",
      children: [
        T.jsx("h2", {
          className: "text-3xl font-bold text-center text-gray-800 mb-12",
          children: "Key Features of Campus Matrix",
        }),
        T.jsx(en.div, {
          className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 1 },
          viewport: { once: !0 },
          children: e.map((i, s) =>
            T.jsxs(
              en.div,
              {
                className:
                  "p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                whileHover: { rotateX: 5, rotateY: -5, scale: 1.05 },
                transition: { duration: 0.1, delay: s * 0.05 },
                viewport: { once: !1 },
                style: { transformStyle: "preserve-3d" },
                children: [
                  T.jsx("h3", {
                    className: "text-xl font-semibold mb-2 text-blue-600",
                    children: i.title,
                  }),
                  T.jsx("p", { className: "text-gray-600", children: i.desc }),
                ],
              },
              s
            )
          ),
        }),
      ],
    }),
  });
}
function IR() {
  const e = [
    {
      name: "Aditi Sharma",
      role: "1st Year, CSE",
      quote:
        "Campus Matrix helped me find a mentor who guided me through my first year. Truly a game changer!",
    },
    {
      name: "Rahul Verma",
      role: "2nd Year, ECE",
      quote:
        "The goal tracking and event scheduling features kept me organized and motivated.",
    },
    {
      name: "Sneha Patil",
      role: "3rd Year, ME",
      quote:
        "Loved the badges and certificates! Made the whole learning experience more fun.",
    },
  ];
  return T.jsx("section", {
    className: "py-20 bg-gray-50",
    children: T.jsxs("div", {
      className: "max-w-6xl mx-auto px-4",
      children: [
        T.jsx("h2", {
          className: "text-3xl font-bold text-center text-gray-800 mb-12",
          children: "What Students Say",
        }),
        T.jsx(en.div, {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 1 },
          viewport: { once: !0 },
          children: e.map((i, s) =>
            T.jsxs(
              en.div,
              {
                className:
                  "bg-white p-6 rounded-lg shadow hover:shadow-lg transition",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                whileHover: { rotateX: -3, rotateY: 5, scale: 1.05 },
                transition: { delay: s * 0.1, duration: 0.1 },
                viewport: { once: !1 },
                style: { transformStyle: "preserve-3d" },
                children: [
                  T.jsx("p", {
                    className: "text-gray-700 mb-4",
                    children: i.quote,
                  }),
                  T.jsx("h3", {
                    className: "text-blue-600 font-semibold",
                    children: i.name,
                  }),
                  T.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: i.role,
                  }),
                ],
              },
              s
            )
          ),
        }),
      ],
    }),
  });
}
const tC = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  },
  gf = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } },
  Gb = () =>
    T.jsx(T.Fragment, {
      children: T.jsxs(en.main, {
        initial: "hidden",
        animate: "show",
        variants: tC,
        className:
          "flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-12",
        children: [
          T.jsx(en.h1, {
            variants: gf,
            className:
              "text-5xl md:text-6xl font-extrabold text-blue-700 mb-6 text-center leading-tight",
            transition: { duration: 0.8 },
            children: "Empower Your Campus Journey",
          }),
          T.jsx(en.p, {
            variants: gf,
            className: "text-xl text-gray-700 max-w-2xl text-center mb-10",
            transition: { delay: 0.2, duration: 0.8 },
            children:
              "Connect with mentors and buddies, set your goals, track your progress, and thrive together at Campus Matrix.",
          }),
          T.jsxs(en.div, {
            variants: gf,
            className: "flex flex-col sm:flex-row gap-4",
            transition: { delay: 0.4, duration: 0.6 },
            children: [
              T.jsx(Bt, {
                to: "/auth/signup",
                children: T.jsx(en.div, {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className:
                    "bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg cursor-pointer text-center",
                  children: "Get Started",
                }),
              }),
              T.jsx(Bt, {
                to: "/auth/login",
                children: T.jsx(en.div, {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className:
                    "bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-full shadow cursor-pointer text-center",
                  children: "Log In",
                }),
              }),
            ],
          }),
        ],
      }),
    });
function eC() {
  return T.jsxs("footer", {
    className: "text-center py-6 bg-gray-100 text-gray-600",
    children: [
      "© ",
      new Date().getFullYear(),
      " Campus Matrix. All rights reserved.",
    ],
  });
}
const Da = ({ children: e }) => {
  const [i, s] = E.useState(null);
  return (
    E.useEffect(() => {
      (async () => {
        try {
          const l = await fetch("http://localhost:5000/api/auth/check-auth", {
            credentials: "include",
          });
          s(l.ok);
        } catch {
          s(!1);
        }
      })();
    }, []),
    i === null
      ? T.jsx("div", { className: "text-center mt-20", children: "Loading..." })
      : i
      ? e
      : T.jsx(W0, { to: "/auth/login", replace: !0 })
  );
};
function Xb(e, i) {
  return function () {
    return e.apply(i, arguments);
  };
}
const { toString: nC } = Object.prototype,
  { getPrototypeOf: Qh } = Object,
  { iterator: wl, toStringTag: Kb } = Symbol,
  Al = ((e) => (i) => {
    const s = nC.call(i);
    return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  sn = (e) => ((e = e.toLowerCase()), (i) => Al(i) === e),
  Rl = (e) => (i) => typeof i === e,
  { isArray: Xa } = Array,
  mr = Rl("undefined");
function Er(e) {
  return (
    e !== null &&
    !mr(e) &&
    e.constructor !== null &&
    !mr(e.constructor) &&
    Ee(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Fb = sn("ArrayBuffer");
function iC(e) {
  let i;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (i = ArrayBuffer.isView(e))
      : (i = e && e.buffer && Fb(e.buffer)),
    i
  );
}
const aC = Rl("string"),
  Ee = Rl("function"),
  Qb = Rl("number"),
  _r = (e) => e !== null && typeof e == "object",
  sC = (e) => e === !0 || e === !1,
  el = (e) => {
    if (Al(e) !== "object") return !1;
    const i = Qh(e);
    return (
      (i === null ||
        i === Object.prototype ||
        Object.getPrototypeOf(i) === null) &&
      !(Kb in e) &&
      !(wl in e)
    );
  },
  rC = (e) => {
    if (!_r(e) || Er(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  oC = sn("Date"),
  lC = sn("File"),
  uC = sn("Blob"),
  cC = sn("FileList"),
  fC = (e) => _r(e) && Ee(e.pipe),
  hC = (e) => {
    let i;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ee(e.append) &&
          ((i = Al(e)) === "formdata" ||
            (i === "object" &&
              Ee(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  dC = sn("URLSearchParams"),
  [mC, pC, yC, gC] = ["ReadableStream", "Request", "Response", "Headers"].map(
    sn
  ),
  vC = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wr(e, i, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), Xa(e)))
    for (r = 0, l = e.length; r < l; r++) i.call(null, e[r], r, e);
  else {
    if (Er(e)) return;
    const c = s ? Object.getOwnPropertyNames(e) : Object.keys(e),
      f = c.length;
    let d;
    for (r = 0; r < f; r++) (d = c[r]), i.call(null, e[d], d, e);
  }
}
function Zb(e, i) {
  if (Er(e)) return null;
  i = i.toLowerCase();
  const s = Object.keys(e);
  let r = s.length,
    l;
  for (; r-- > 0; ) if (((l = s[r]), i === l.toLowerCase())) return l;
  return null;
}
const zi =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  $b = (e) => !mr(e) && e !== zi;
function $f() {
  const { caseless: e } = ($b(this) && this) || {},
    i = {},
    s = (r, l) => {
      const c = (e && Zb(i, l)) || l;
      el(i[c]) && el(r)
        ? (i[c] = $f(i[c], r))
        : el(r)
        ? (i[c] = $f({}, r))
        : Xa(r)
        ? (i[c] = r.slice())
        : (i[c] = r);
    };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && wr(arguments[r], s);
  return i;
}
const bC = (e, i, s, { allOwnKeys: r } = {}) => (
    wr(
      i,
      (l, c) => {
        s && Ee(l) ? (e[c] = Xb(l, s)) : (e[c] = l);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  xC = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  TC = (e, i, s, r) => {
    (e.prototype = Object.create(i.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: i.prototype }),
      s && Object.assign(e.prototype, s);
  },
  SC = (e, i, s, r) => {
    let l, c, f;
    const d = {};
    if (((i = i || {}), e == null)) return i;
    do {
      for (l = Object.getOwnPropertyNames(e), c = l.length; c-- > 0; )
        (f = l[c]), (!r || r(f, e, i)) && !d[f] && ((i[f] = e[f]), (d[f] = !0));
      e = s !== !1 && Qh(e);
    } while (e && (!s || s(e, i)) && e !== Object.prototype);
    return i;
  },
  EC = (e, i, s) => {
    (e = String(e)),
      (s === void 0 || s > e.length) && (s = e.length),
      (s -= i.length);
    const r = e.indexOf(i, s);
    return r !== -1 && r === s;
  },
  _C = (e) => {
    if (!e) return null;
    if (Xa(e)) return e;
    let i = e.length;
    if (!Qb(i)) return null;
    const s = new Array(i);
    for (; i-- > 0; ) s[i] = e[i];
    return s;
  },
  wC = (
    (e) => (i) =>
      e && i instanceof e
  )(typeof Uint8Array < "u" && Qh(Uint8Array)),
  AC = (e, i) => {
    const r = (e && e[wl]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const c = l.value;
      i.call(e, c[0], c[1]);
    }
  },
  RC = (e, i) => {
    let s;
    const r = [];
    for (; (s = e.exec(i)) !== null; ) r.push(s);
    return r;
  },
  CC = sn("HTMLFormElement"),
  OC = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, r, l) {
      return r.toUpperCase() + l;
    }),
  _0 = (
    ({ hasOwnProperty: e }) =>
    (i, s) =>
      e.call(i, s)
  )(Object.prototype),
  DC = sn("RegExp"),
  Jb = (e, i) => {
    const s = Object.getOwnPropertyDescriptors(e),
      r = {};
    wr(s, (l, c) => {
      let f;
      (f = i(l, c, e)) !== !1 && (r[c] = f || l);
    }),
      Object.defineProperties(e, r);
  },
  MC = (e) => {
    Jb(e, (i, s) => {
      if (Ee(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
        return !1;
      const r = e[s];
      if (Ee(r)) {
        if (((i.enumerable = !1), "writable" in i)) {
          i.writable = !1;
          return;
        }
        i.set ||
          (i.set = () => {
            throw Error("Can not rewrite read-only method '" + s + "'");
          });
      }
    });
  },
  NC = (e, i) => {
    const s = {},
      r = (l) => {
        l.forEach((c) => {
          s[c] = !0;
        });
      };
    return Xa(e) ? r(e) : r(String(e).split(i)), s;
  },
  jC = () => {},
  LC = (e, i) => (e != null && Number.isFinite((e = +e)) ? e : i);
function BC(e) {
  return !!(e && Ee(e.append) && e[Kb] === "FormData" && e[wl]);
}
const UC = (e) => {
    const i = new Array(10),
      s = (r, l) => {
        if (_r(r)) {
          if (i.indexOf(r) >= 0) return;
          if (Er(r)) return r;
          if (!("toJSON" in r)) {
            i[l] = r;
            const c = Xa(r) ? [] : {};
            return (
              wr(r, (f, d) => {
                const p = s(f, l + 1);
                !mr(p) && (c[d] = p);
              }),
              (i[l] = void 0),
              c
            );
          }
        }
        return r;
      };
    return s(e, 0);
  },
  VC = sn("AsyncFunction"),
  zC = (e) => e && (_r(e) || Ee(e)) && Ee(e.then) && Ee(e.catch),
  Wb = ((e, i) =>
    e
      ? setImmediate
      : i
      ? ((s, r) => (
          zi.addEventListener(
            "message",
            ({ source: l, data: c }) => {
              l === zi && c === s && r.length && r.shift()();
            },
            !1
          ),
          (l) => {
            r.push(l), zi.postMessage(s, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (s) => setTimeout(s))(
    typeof setImmediate == "function",
    Ee(zi.postMessage)
  ),
  kC =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(zi)
      : (typeof process < "u" && process.nextTick) || Wb,
  HC = (e) => e != null && Ee(e[wl]),
  z = {
    isArray: Xa,
    isArrayBuffer: Fb,
    isBuffer: Er,
    isFormData: hC,
    isArrayBufferView: iC,
    isString: aC,
    isNumber: Qb,
    isBoolean: sC,
    isObject: _r,
    isPlainObject: el,
    isEmptyObject: rC,
    isReadableStream: mC,
    isRequest: pC,
    isResponse: yC,
    isHeaders: gC,
    isUndefined: mr,
    isDate: oC,
    isFile: lC,
    isBlob: uC,
    isRegExp: DC,
    isFunction: Ee,
    isStream: fC,
    isURLSearchParams: dC,
    isTypedArray: wC,
    isFileList: cC,
    forEach: wr,
    merge: $f,
    extend: bC,
    trim: vC,
    stripBOM: xC,
    inherits: TC,
    toFlatObject: SC,
    kindOf: Al,
    kindOfTest: sn,
    endsWith: EC,
    toArray: _C,
    forEachEntry: AC,
    matchAll: RC,
    isHTMLForm: CC,
    hasOwnProperty: _0,
    hasOwnProp: _0,
    reduceDescriptors: Jb,
    freezeMethods: MC,
    toObjectSet: NC,
    toCamelCase: OC,
    noop: jC,
    toFiniteNumber: LC,
    findKey: Zb,
    global: zi,
    isContextDefined: $b,
    isSpecCompliantForm: BC,
    toJSONObject: UC,
    isAsyncFn: VC,
    isThenable: zC,
    setImmediate: Wb,
    asap: kC,
    isIterable: HC,
  };
function ut(e, i, s, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    i && (this.code = i),
    s && (this.config = s),
    r && (this.request = r),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
z.inherits(ut, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: z.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Ib = ut.prototype,
  tx = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  tx[e] = { value: e };
});
Object.defineProperties(ut, tx);
Object.defineProperty(Ib, "isAxiosError", { value: !0 });
ut.from = (e, i, s, r, l, c) => {
  const f = Object.create(Ib);
  return (
    z.toFlatObject(
      e,
      f,
      function (p) {
        return p !== Error.prototype;
      },
      (d) => d !== "isAxiosError"
    ),
    ut.call(f, e.message, i, s, r, l),
    (f.cause = e),
    (f.name = e.name),
    c && Object.assign(f, c),
    f
  );
};
const qC = null;
function Jf(e) {
  return z.isPlainObject(e) || z.isArray(e);
}
function ex(e) {
  return z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function w0(e, i, s) {
  return e
    ? e
        .concat(i)
        .map(function (l, c) {
          return (l = ex(l)), !s && c ? "[" + l + "]" : l;
        })
        .join(s ? "." : "")
    : i;
}
function PC(e) {
  return z.isArray(e) && !e.some(Jf);
}
const YC = z.toFlatObject(z, {}, null, function (i) {
  return /^is[A-Z]/.test(i);
});
function Cl(e, i, s) {
  if (!z.isObject(e)) throw new TypeError("target must be an object");
  (i = i || new FormData()),
    (s = z.toFlatObject(
      s,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (M, R) {
        return !z.isUndefined(R[M]);
      }
    ));
  const r = s.metaTokens,
    l = s.visitor || y,
    c = s.dots,
    f = s.indexes,
    p = (s.Blob || (typeof Blob < "u" && Blob)) && z.isSpecCompliantForm(i);
  if (!z.isFunction(l)) throw new TypeError("visitor must be a function");
  function m(A) {
    if (A === null) return "";
    if (z.isDate(A)) return A.toISOString();
    if (z.isBoolean(A)) return A.toString();
    if (!p && z.isBlob(A))
      throw new ut("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(A) || z.isTypedArray(A)
      ? p && typeof Blob == "function"
        ? new Blob([A])
        : Buffer.from(A)
      : A;
  }
  function y(A, M, R) {
    let C = A;
    if (A && !R && typeof A == "object") {
      if (z.endsWith(M, "{}"))
        (M = r ? M : M.slice(0, -2)), (A = JSON.stringify(A));
      else if (
        (z.isArray(A) && PC(A)) ||
        ((z.isFileList(A) || z.endsWith(M, "[]")) && (C = z.toArray(A)))
      )
        return (
          (M = ex(M)),
          C.forEach(function (N, G) {
            !(z.isUndefined(N) || N === null) &&
              i.append(
                f === !0 ? w0([M], G, c) : f === null ? M : M + "[]",
                m(N)
              );
          }),
          !1
        );
    }
    return Jf(A) ? !0 : (i.append(w0(R, M, c), m(A)), !1);
  }
  const b = [],
    x = Object.assign(YC, {
      defaultVisitor: y,
      convertValue: m,
      isVisitable: Jf,
    });
  function O(A, M) {
    if (!z.isUndefined(A)) {
      if (b.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + M.join("."));
      b.push(A),
        z.forEach(A, function (C, B) {
          (!(z.isUndefined(C) || C === null) &&
            l.call(i, C, z.isString(B) ? B.trim() : B, M, x)) === !0 &&
            O(C, M ? M.concat(B) : [B]);
        }),
        b.pop();
    }
  }
  if (!z.isObject(e)) throw new TypeError("data must be an object");
  return O(e), i;
}
function A0(e) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return i[r];
  });
}
function Zh(e, i) {
  (this._pairs = []), e && Cl(e, this, i);
}
const nx = Zh.prototype;
nx.append = function (i, s) {
  this._pairs.push([i, s]);
};
nx.toString = function (i) {
  const s = i
    ? function (r) {
        return i.call(this, r, A0);
      }
    : A0;
  return this._pairs
    .map(function (l) {
      return s(l[0]) + "=" + s(l[1]);
    }, "")
    .join("&");
};
function GC(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ix(e, i, s) {
  if (!i) return e;
  const r = (s && s.encode) || GC;
  z.isFunction(s) && (s = { serialize: s });
  const l = s && s.serialize;
  let c;
  if (
    (l
      ? (c = l(i, s))
      : (c = z.isURLSearchParams(i) ? i.toString() : new Zh(i, s).toString(r)),
    c)
  ) {
    const f = e.indexOf("#");
    f !== -1 && (e = e.slice(0, f)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return e;
}
class R0 {
  constructor() {
    this.handlers = [];
  }
  use(i, s, r) {
    return (
      this.handlers.push({
        fulfilled: i,
        rejected: s,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(i) {
    z.forEach(this.handlers, function (r) {
      r !== null && i(r);
    });
  }
}
const ax = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  XC = typeof URLSearchParams < "u" ? URLSearchParams : Zh,
  KC = typeof FormData < "u" ? FormData : null,
  FC = typeof Blob < "u" ? Blob : null,
  QC = {
    isBrowser: !0,
    classes: { URLSearchParams: XC, FormData: KC, Blob: FC },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  $h = typeof window < "u" && typeof document < "u",
  Wf = (typeof navigator == "object" && navigator) || void 0,
  ZC =
    $h &&
    (!Wf || ["ReactNative", "NativeScript", "NS"].indexOf(Wf.product) < 0),
  $C =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  JC = ($h && window.location.href) || "http://localhost",
  WC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: $h,
        hasStandardBrowserEnv: ZC,
        hasStandardBrowserWebWorkerEnv: $C,
        navigator: Wf,
        origin: JC,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fe = { ...WC, ...QC };
function IC(e, i) {
  return Cl(e, new fe.classes.URLSearchParams(), {
    visitor: function (s, r, l, c) {
      return fe.isNode && z.isBuffer(s)
        ? (this.append(r, s.toString("base64")), !1)
        : c.defaultVisitor.apply(this, arguments);
    },
    ...i,
  });
}
function tO(e) {
  return z
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((i) => (i[0] === "[]" ? "" : i[1] || i[0]));
}
function eO(e) {
  const i = {},
    s = Object.keys(e);
  let r;
  const l = s.length;
  let c;
  for (r = 0; r < l; r++) (c = s[r]), (i[c] = e[c]);
  return i;
}
function sx(e) {
  function i(s, r, l, c) {
    let f = s[c++];
    if (f === "__proto__") return !0;
    const d = Number.isFinite(+f),
      p = c >= s.length;
    return (
      (f = !f && z.isArray(l) ? l.length : f),
      p
        ? (z.hasOwnProp(l, f) ? (l[f] = [l[f], r]) : (l[f] = r), !d)
        : ((!l[f] || !z.isObject(l[f])) && (l[f] = []),
          i(s, r, l[f], c) && z.isArray(l[f]) && (l[f] = eO(l[f])),
          !d)
    );
  }
  if (z.isFormData(e) && z.isFunction(e.entries)) {
    const s = {};
    return (
      z.forEachEntry(e, (r, l) => {
        i(tO(r), l, s, 0);
      }),
      s
    );
  }
  return null;
}
function nO(e, i, s) {
  if (z.isString(e))
    try {
      return (i || JSON.parse)(e), z.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (s || JSON.stringify)(e);
}
const Ar = {
  transitional: ax,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (i, s) {
      const r = s.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        c = z.isObject(i);
      if ((c && z.isHTMLForm(i) && (i = new FormData(i)), z.isFormData(i)))
        return l ? JSON.stringify(sx(i)) : i;
      if (
        z.isArrayBuffer(i) ||
        z.isBuffer(i) ||
        z.isStream(i) ||
        z.isFile(i) ||
        z.isBlob(i) ||
        z.isReadableStream(i)
      )
        return i;
      if (z.isArrayBufferView(i)) return i.buffer;
      if (z.isURLSearchParams(i))
        return (
          s.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          i.toString()
        );
      let d;
      if (c) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return IC(i, this.formSerializer).toString();
        if ((d = z.isFileList(i)) || r.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return Cl(
            d ? { "files[]": i } : i,
            p && new p(),
            this.formSerializer
          );
        }
      }
      return c || l ? (s.setContentType("application/json", !1), nO(i)) : i;
    },
  ],
  transformResponse: [
    function (i) {
      const s = this.transitional || Ar.transitional,
        r = s && s.forcedJSONParsing,
        l = this.responseType === "json";
      if (z.isResponse(i) || z.isReadableStream(i)) return i;
      if (i && z.isString(i) && ((r && !this.responseType) || l)) {
        const f = !(s && s.silentJSONParsing) && l;
        try {
          return JSON.parse(i);
        } catch (d) {
          if (f)
            throw d.name === "SyntaxError"
              ? ut.from(d, ut.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return i;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: fe.classes.FormData, Blob: fe.classes.Blob },
  validateStatus: function (i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
z.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ar.headers[e] = {};
});
const iO = z.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  aO = (e) => {
    const i = {};
    let s, r, l;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (f) {
            (l = f.indexOf(":")),
              (s = f.substring(0, l).trim().toLowerCase()),
              (r = f.substring(l + 1).trim()),
              !(!s || (i[s] && iO[s])) &&
                (s === "set-cookie"
                  ? i[s]
                    ? i[s].push(r)
                    : (i[s] = [r])
                  : (i[s] = i[s] ? i[s] + ", " + r : r));
          }),
      i
    );
  },
  C0 = Symbol("internals");
function Zs(e) {
  return e && String(e).trim().toLowerCase();
}
function nl(e) {
  return e === !1 || e == null ? e : z.isArray(e) ? e.map(nl) : String(e);
}
function sO(e) {
  const i = Object.create(null),
    s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = s.exec(e)); ) i[r[1]] = r[2];
  return i;
}
const rO = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function vf(e, i, s, r, l) {
  if (z.isFunction(r)) return r.call(this, i, s);
  if ((l && (i = s), !!z.isString(i))) {
    if (z.isString(r)) return i.indexOf(r) !== -1;
    if (z.isRegExp(r)) return r.test(i);
  }
}
function oO(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (i, s, r) => s.toUpperCase() + r);
}
function lO(e, i) {
  const s = z.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + s, {
      value: function (l, c, f) {
        return this[r].call(this, i, l, c, f);
      },
      configurable: !0,
    });
  });
}
let _e = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, s, r) {
    const l = this;
    function c(d, p, m) {
      const y = Zs(p);
      if (!y) throw new Error("header name must be a non-empty string");
      const b = z.findKey(l, y);
      (!b || l[b] === void 0 || m === !0 || (m === void 0 && l[b] !== !1)) &&
        (l[b || p] = nl(d));
    }
    const f = (d, p) => z.forEach(d, (m, y) => c(m, y, p));
    if (z.isPlainObject(i) || i instanceof this.constructor) f(i, s);
    else if (z.isString(i) && (i = i.trim()) && !rO(i)) f(aO(i), s);
    else if (z.isObject(i) && z.isIterable(i)) {
      let d = {},
        p,
        m;
      for (const y of i) {
        if (!z.isArray(y))
          throw TypeError("Object iterator must return a key-value pair");
        d[(m = y[0])] = (p = d[m])
          ? z.isArray(p)
            ? [...p, y[1]]
            : [p, y[1]]
          : y[1];
      }
      f(d, s);
    } else i != null && c(s, i, r);
    return this;
  }
  get(i, s) {
    if (((i = Zs(i)), i)) {
      const r = z.findKey(this, i);
      if (r) {
        const l = this[r];
        if (!s) return l;
        if (s === !0) return sO(l);
        if (z.isFunction(s)) return s.call(this, l, r);
        if (z.isRegExp(s)) return s.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, s) {
    if (((i = Zs(i)), i)) {
      const r = z.findKey(this, i);
      return !!(r && this[r] !== void 0 && (!s || vf(this, this[r], r, s)));
    }
    return !1;
  }
  delete(i, s) {
    const r = this;
    let l = !1;
    function c(f) {
      if (((f = Zs(f)), f)) {
        const d = z.findKey(r, f);
        d && (!s || vf(r, r[d], d, s)) && (delete r[d], (l = !0));
      }
    }
    return z.isArray(i) ? i.forEach(c) : c(i), l;
  }
  clear(i) {
    const s = Object.keys(this);
    let r = s.length,
      l = !1;
    for (; r--; ) {
      const c = s[r];
      (!i || vf(this, this[c], c, i, !0)) && (delete this[c], (l = !0));
    }
    return l;
  }
  normalize(i) {
    const s = this,
      r = {};
    return (
      z.forEach(this, (l, c) => {
        const f = z.findKey(r, c);
        if (f) {
          (s[f] = nl(l)), delete s[c];
          return;
        }
        const d = i ? oO(c) : String(c).trim();
        d !== c && delete s[c], (s[d] = nl(l)), (r[d] = !0);
      }),
      this
    );
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const s = Object.create(null);
    return (
      z.forEach(this, (r, l) => {
        r != null && r !== !1 && (s[l] = i && z.isArray(r) ? r.join(", ") : r);
      }),
      s
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, s]) => i + ": " + s).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...s) {
    const r = new this(i);
    return s.forEach((l) => r.set(l)), r;
  }
  static accessor(i) {
    const r = (this[C0] = this[C0] = { accessors: {} }).accessors,
      l = this.prototype;
    function c(f) {
      const d = Zs(f);
      r[d] || (lO(l, f), (r[d] = !0));
    }
    return z.isArray(i) ? i.forEach(c) : c(i), this;
  }
};
_e.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
z.reduceDescriptors(_e.prototype, ({ value: e }, i) => {
  let s = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => e,
    set(r) {
      this[s] = r;
    },
  };
});
z.freezeMethods(_e);
function bf(e, i) {
  const s = this || Ar,
    r = i || s,
    l = _e.from(r.headers);
  let c = r.data;
  return (
    z.forEach(e, function (d) {
      c = d.call(s, c, l.normalize(), i ? i.status : void 0);
    }),
    l.normalize(),
    c
  );
}
function rx(e) {
  return !!(e && e.__CANCEL__);
}
function Ka(e, i, s) {
  ut.call(this, e ?? "canceled", ut.ERR_CANCELED, i, s),
    (this.name = "CanceledError");
}
z.inherits(Ka, ut, { __CANCEL__: !0 });
function ox(e, i, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status)
    ? e(s)
    : i(
        new ut(
          "Request failed with status code " + s.status,
          [ut.ERR_BAD_REQUEST, ut.ERR_BAD_RESPONSE][
            Math.floor(s.status / 100) - 4
          ],
          s.config,
          s.request,
          s
        )
      );
}
function uO(e) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (i && i[1]) || "";
}
function cO(e, i) {
  e = e || 10;
  const s = new Array(e),
    r = new Array(e);
  let l = 0,
    c = 0,
    f;
  return (
    (i = i !== void 0 ? i : 1e3),
    function (p) {
      const m = Date.now(),
        y = r[c];
      f || (f = m), (s[l] = p), (r[l] = m);
      let b = c,
        x = 0;
      for (; b !== l; ) (x += s[b++]), (b = b % e);
      if (((l = (l + 1) % e), l === c && (c = (c + 1) % e), m - f < i)) return;
      const O = y && m - y;
      return O ? Math.round((x * 1e3) / O) : void 0;
    }
  );
}
function fO(e, i) {
  let s = 0,
    r = 1e3 / i,
    l,
    c;
  const f = (m, y = Date.now()) => {
    (s = y), (l = null), c && (clearTimeout(c), (c = null)), e(...m);
  };
  return [
    (...m) => {
      const y = Date.now(),
        b = y - s;
      b >= r
        ? f(m, y)
        : ((l = m),
          c ||
            (c = setTimeout(() => {
              (c = null), f(l);
            }, r - b)));
    },
    () => l && f(l),
  ];
}
const pl = (e, i, s = 3) => {
    let r = 0;
    const l = cO(50, 250);
    return fO((c) => {
      const f = c.loaded,
        d = c.lengthComputable ? c.total : void 0,
        p = f - r,
        m = l(p),
        y = f <= d;
      r = f;
      const b = {
        loaded: f,
        total: d,
        progress: d ? f / d : void 0,
        bytes: p,
        rate: m || void 0,
        estimated: m && d && y ? (d - f) / m : void 0,
        event: c,
        lengthComputable: d != null,
        [i ? "download" : "upload"]: !0,
      };
      e(b);
    }, s);
  },
  O0 = (e, i) => {
    const s = e != null;
    return [(r) => i[0]({ lengthComputable: s, total: e, loaded: r }), i[1]];
  },
  D0 =
    (e) =>
    (...i) =>
      z.asap(() => e(...i)),
  hO = fe.hasStandardBrowserEnv
    ? ((e, i) => (s) => (
        (s = new URL(s, fe.origin)),
        e.protocol === s.protocol &&
          e.host === s.host &&
          (i || e.port === s.port)
      ))(
        new URL(fe.origin),
        fe.navigator && /(msie|trident)/i.test(fe.navigator.userAgent)
      )
    : () => !0,
  dO = fe.hasStandardBrowserEnv
    ? {
        write(e, i, s, r, l, c) {
          const f = [e + "=" + encodeURIComponent(i)];
          z.isNumber(s) && f.push("expires=" + new Date(s).toGMTString()),
            z.isString(r) && f.push("path=" + r),
            z.isString(l) && f.push("domain=" + l),
            c === !0 && f.push("secure"),
            (document.cookie = f.join("; "));
        },
        read(e) {
          const i = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return i ? decodeURIComponent(i[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function mO(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function pO(e, i) {
  return i ? e.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : e;
}
function lx(e, i, s) {
  let r = !mO(i);
  return e && (r || s == !1) ? pO(e, i) : i;
}
const M0 = (e) => (e instanceof _e ? { ...e } : e);
function Gi(e, i) {
  i = i || {};
  const s = {};
  function r(m, y, b, x) {
    return z.isPlainObject(m) && z.isPlainObject(y)
      ? z.merge.call({ caseless: x }, m, y)
      : z.isPlainObject(y)
      ? z.merge({}, y)
      : z.isArray(y)
      ? y.slice()
      : y;
  }
  function l(m, y, b, x) {
    if (z.isUndefined(y)) {
      if (!z.isUndefined(m)) return r(void 0, m, b, x);
    } else return r(m, y, b, x);
  }
  function c(m, y) {
    if (!z.isUndefined(y)) return r(void 0, y);
  }
  function f(m, y) {
    if (z.isUndefined(y)) {
      if (!z.isUndefined(m)) return r(void 0, m);
    } else return r(void 0, y);
  }
  function d(m, y, b) {
    if (b in i) return r(m, y);
    if (b in e) return r(void 0, m);
  }
  const p = {
    url: c,
    method: c,
    data: c,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: d,
    headers: (m, y, b) => l(M0(m), M0(y), b, !0),
  };
  return (
    z.forEach(Object.keys({ ...e, ...i }), function (y) {
      const b = p[y] || l,
        x = b(e[y], i[y], y);
      (z.isUndefined(x) && b !== d) || (s[y] = x);
    }),
    s
  );
}
const ux = (e) => {
    const i = Gi({}, e);
    let {
      data: s,
      withXSRFToken: r,
      xsrfHeaderName: l,
      xsrfCookieName: c,
      headers: f,
      auth: d,
    } = i;
    (i.headers = f = _e.from(f)),
      (i.url = ix(
        lx(i.baseURL, i.url, i.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      )),
      d &&
        f.set(
          "Authorization",
          "Basic " +
            btoa(
              (d.username || "") +
                ":" +
                (d.password ? unescape(encodeURIComponent(d.password)) : "")
            )
        );
    let p;
    if (z.isFormData(s)) {
      if (fe.hasStandardBrowserEnv || fe.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if ((p = f.getContentType()) !== !1) {
        const [m, ...y] = p
          ? p
              .split(";")
              .map((b) => b.trim())
              .filter(Boolean)
          : [];
        f.setContentType([m || "multipart/form-data", ...y].join("; "));
      }
    }
    if (
      fe.hasStandardBrowserEnv &&
      (r && z.isFunction(r) && (r = r(i)), r || (r !== !1 && hO(i.url)))
    ) {
      const m = l && c && dO.read(c);
      m && f.set(l, m);
    }
    return i;
  },
  yO = typeof XMLHttpRequest < "u",
  gO =
    yO &&
    function (e) {
      return new Promise(function (s, r) {
        const l = ux(e);
        let c = l.data;
        const f = _e.from(l.headers).normalize();
        let { responseType: d, onUploadProgress: p, onDownloadProgress: m } = l,
          y,
          b,
          x,
          O,
          A;
        function M() {
          O && O(),
            A && A(),
            l.cancelToken && l.cancelToken.unsubscribe(y),
            l.signal && l.signal.removeEventListener("abort", y);
        }
        let R = new XMLHttpRequest();
        R.open(l.method.toUpperCase(), l.url, !0), (R.timeout = l.timeout);
        function C() {
          if (!R) return;
          const N = _e.from(
              "getAllResponseHeaders" in R && R.getAllResponseHeaders()
            ),
            k = {
              data:
                !d || d === "text" || d === "json"
                  ? R.responseText
                  : R.response,
              status: R.status,
              statusText: R.statusText,
              headers: N,
              config: e,
              request: R,
            };
          ox(
            function (Z) {
              s(Z), M();
            },
            function (Z) {
              r(Z), M();
            },
            k
          ),
            (R = null);
        }
        "onloadend" in R
          ? (R.onloadend = C)
          : (R.onreadystatechange = function () {
              !R ||
                R.readyState !== 4 ||
                (R.status === 0 &&
                  !(R.responseURL && R.responseURL.indexOf("file:") === 0)) ||
                setTimeout(C);
            }),
          (R.onabort = function () {
            R &&
              (r(new ut("Request aborted", ut.ECONNABORTED, e, R)), (R = null));
          }),
          (R.onerror = function () {
            r(new ut("Network Error", ut.ERR_NETWORK, e, R)), (R = null);
          }),
          (R.ontimeout = function () {
            let G = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const k = l.transitional || ax;
            l.timeoutErrorMessage && (G = l.timeoutErrorMessage),
              r(
                new ut(
                  G,
                  k.clarifyTimeoutError ? ut.ETIMEDOUT : ut.ECONNABORTED,
                  e,
                  R
                )
              ),
              (R = null);
          }),
          c === void 0 && f.setContentType(null),
          "setRequestHeader" in R &&
            z.forEach(f.toJSON(), function (G, k) {
              R.setRequestHeader(k, G);
            }),
          z.isUndefined(l.withCredentials) ||
            (R.withCredentials = !!l.withCredentials),
          d && d !== "json" && (R.responseType = l.responseType),
          m && (([x, A] = pl(m, !0)), R.addEventListener("progress", x)),
          p &&
            R.upload &&
            (([b, O] = pl(p)),
            R.upload.addEventListener("progress", b),
            R.upload.addEventListener("loadend", O)),
          (l.cancelToken || l.signal) &&
            ((y = (N) => {
              R &&
                (r(!N || N.type ? new Ka(null, e, R) : N),
                R.abort(),
                (R = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(y),
            l.signal &&
              (l.signal.aborted ? y() : l.signal.addEventListener("abort", y)));
        const B = uO(l.url);
        if (B && fe.protocols.indexOf(B) === -1) {
          r(new ut("Unsupported protocol " + B + ":", ut.ERR_BAD_REQUEST, e));
          return;
        }
        R.send(c || null);
      });
    },
  vO = (e, i) => {
    const { length: s } = (e = e ? e.filter(Boolean) : []);
    if (i || s) {
      let r = new AbortController(),
        l;
      const c = function (m) {
        if (!l) {
          (l = !0), d();
          const y = m instanceof Error ? m : this.reason;
          r.abort(
            y instanceof ut ? y : new Ka(y instanceof Error ? y.message : y)
          );
        }
      };
      let f =
        i &&
        setTimeout(() => {
          (f = null), c(new ut(`timeout ${i} of ms exceeded`, ut.ETIMEDOUT));
        }, i);
      const d = () => {
        e &&
          (f && clearTimeout(f),
          (f = null),
          e.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(c)
              : m.removeEventListener("abort", c);
          }),
          (e = null));
      };
      e.forEach((m) => m.addEventListener("abort", c));
      const { signal: p } = r;
      return (p.unsubscribe = () => z.asap(d)), p;
    }
  },
  bO = function* (e, i) {
    let s = e.byteLength;
    if (s < i) {
      yield e;
      return;
    }
    let r = 0,
      l;
    for (; r < s; ) (l = r + i), yield e.slice(r, l), (r = l);
  },
  xO = async function* (e, i) {
    for await (const s of TO(e)) yield* bO(s, i);
  },
  TO = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const i = e.getReader();
    try {
      for (;;) {
        const { done: s, value: r } = await i.read();
        if (s) break;
        yield r;
      }
    } finally {
      await i.cancel();
    }
  },
  N0 = (e, i, s, r) => {
    const l = xO(e, i);
    let c = 0,
      f,
      d = (p) => {
        f || ((f = !0), r && r(p));
      };
    return new ReadableStream(
      {
        async pull(p) {
          try {
            const { done: m, value: y } = await l.next();
            if (m) {
              d(), p.close();
              return;
            }
            let b = y.byteLength;
            if (s) {
              let x = (c += b);
              s(x);
            }
            p.enqueue(new Uint8Array(y));
          } catch (m) {
            throw (d(m), m);
          }
        },
        cancel(p) {
          return d(p), l.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ol =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  cx = Ol && typeof ReadableStream == "function",
  SO =
    Ol &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (i) =>
            e.encode(i)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  fx = (e, ...i) => {
    try {
      return !!e(...i);
    } catch {
      return !1;
    }
  },
  EO =
    cx &&
    fx(() => {
      let e = !1;
      const i = new Request(fe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !i;
    }),
  j0 = 64 * 1024,
  If = cx && fx(() => z.isReadableStream(new Response("").body)),
  yl = { stream: If && ((e) => e.body) };
Ol &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
      !yl[i] &&
        (yl[i] = z.isFunction(e[i])
          ? (s) => s[i]()
          : (s, r) => {
              throw new ut(
                `Response type '${i}' is not supported`,
                ut.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const _O = async (e) => {
    if (e == null) return 0;
    if (z.isBlob(e)) return e.size;
    if (z.isSpecCompliantForm(e))
      return (
        await new Request(fe.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (z.isArrayBufferView(e) || z.isArrayBuffer(e)) return e.byteLength;
    if ((z.isURLSearchParams(e) && (e = e + ""), z.isString(e)))
      return (await SO(e)).byteLength;
  },
  wO = async (e, i) => {
    const s = z.toFiniteNumber(e.getContentLength());
    return s ?? _O(i);
  },
  AO =
    Ol &&
    (async (e) => {
      let {
        url: i,
        method: s,
        data: r,
        signal: l,
        cancelToken: c,
        timeout: f,
        onDownloadProgress: d,
        onUploadProgress: p,
        responseType: m,
        headers: y,
        withCredentials: b = "same-origin",
        fetchOptions: x,
      } = ux(e);
      m = m ? (m + "").toLowerCase() : "text";
      let O = vO([l, c && c.toAbortSignal()], f),
        A;
      const M =
        O &&
        O.unsubscribe &&
        (() => {
          O.unsubscribe();
        });
      let R;
      try {
        if (
          p &&
          EO &&
          s !== "get" &&
          s !== "head" &&
          (R = await wO(y, r)) !== 0
        ) {
          let k = new Request(i, { method: "POST", body: r, duplex: "half" }),
            J;
          if (
            (z.isFormData(r) &&
              (J = k.headers.get("content-type")) &&
              y.setContentType(J),
            k.body)
          ) {
            const [Z, Q] = O0(R, pl(D0(p)));
            r = N0(k.body, j0, Z, Q);
          }
        }
        z.isString(b) || (b = b ? "include" : "omit");
        const C = "credentials" in Request.prototype;
        A = new Request(i, {
          ...x,
          signal: O,
          method: s.toUpperCase(),
          headers: y.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: C ? b : void 0,
        });
        let B = await fetch(A, x);
        const N = If && (m === "stream" || m === "response");
        if (If && (d || (N && M))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((K) => {
            k[K] = B[K];
          });
          const J = z.toFiniteNumber(B.headers.get("content-length")),
            [Z, Q] = (d && O0(J, pl(D0(d), !0))) || [];
          B = new Response(
            N0(B.body, j0, Z, () => {
              Q && Q(), M && M();
            }),
            k
          );
        }
        m = m || "text";
        let G = await yl[z.findKey(yl, m) || "text"](B, e);
        return (
          !N && M && M(),
          await new Promise((k, J) => {
            ox(k, J, {
              data: G,
              headers: _e.from(B.headers),
              status: B.status,
              statusText: B.statusText,
              config: e,
              request: A,
            });
          })
        );
      } catch (C) {
        throw (
          (M && M(),
          C && C.name === "TypeError" && /Load failed|fetch/i.test(C.message)
            ? Object.assign(new ut("Network Error", ut.ERR_NETWORK, e, A), {
                cause: C.cause || C,
              })
            : ut.from(C, C && C.code, e, A))
        );
      }
    }),
  th = { http: qC, xhr: gO, fetch: AO };
z.forEach(th, (e, i) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: i });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: i });
  }
});
const L0 = (e) => `- ${e}`,
  RO = (e) => z.isFunction(e) || e === null || e === !1,
  hx = {
    getAdapter: (e) => {
      e = z.isArray(e) ? e : [e];
      const { length: i } = e;
      let s, r;
      const l = {};
      for (let c = 0; c < i; c++) {
        s = e[c];
        let f;
        if (
          ((r = s),
          !RO(s) && ((r = th[(f = String(s)).toLowerCase()]), r === void 0))
        )
          throw new ut(`Unknown adapter '${f}'`);
        if (r) break;
        l[f || "#" + c] = r;
      }
      if (!r) {
        const c = Object.entries(l).map(
          ([d, p]) =>
            `adapter ${d} ` +
            (p === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let f = i
          ? c.length > 1
            ? `since :
` +
              c.map(L0).join(`
`)
            : " " + L0(c[0])
          : "as no adapter specified";
        throw new ut(
          "There is no suitable adapter to dispatch the request " + f,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: th,
  };
function xf(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ka(null, e);
}
function B0(e) {
  return (
    xf(e),
    (e.headers = _e.from(e.headers)),
    (e.data = bf.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    hx
      .getAdapter(e.adapter || Ar.adapter)(e)
      .then(
        function (r) {
          return (
            xf(e),
            (r.data = bf.call(e, e.transformResponse, r)),
            (r.headers = _e.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            rx(r) ||
              (xf(e),
              r &&
                r.response &&
                ((r.response.data = bf.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = _e.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const dx = "1.11.0",
  Dl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, i) => {
    Dl[e] = function (r) {
      return typeof r === e || "a" + (i < 1 ? "n " : " ") + e;
    };
  }
);
const U0 = {};
Dl.transitional = function (i, s, r) {
  function l(c, f) {
    return (
      "[Axios v" +
      dx +
      "] Transitional option '" +
      c +
      "'" +
      f +
      (r ? ". " + r : "")
    );
  }
  return (c, f, d) => {
    if (i === !1)
      throw new ut(
        l(f, " has been removed" + (s ? " in " + s : "")),
        ut.ERR_DEPRECATED
      );
    return (
      s &&
        !U0[f] &&
        ((U0[f] = !0),
        console.warn(
          l(
            f,
            " has been deprecated since v" +
              s +
              " and will be removed in the near future"
          )
        )),
      i ? i(c, f, d) : !0
    );
  };
};
Dl.spelling = function (i) {
  return (s, r) => (console.warn(`${r} is likely a misspelling of ${i}`), !0);
};
function CO(e, i, s) {
  if (typeof e != "object")
    throw new ut("options must be an object", ut.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const c = r[l],
      f = i[c];
    if (f) {
      const d = e[c],
        p = d === void 0 || f(d, c, e);
      if (p !== !0)
        throw new ut("option " + c + " must be " + p, ut.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0) throw new ut("Unknown option " + c, ut.ERR_BAD_OPTION);
  }
}
const il = { assertOptions: CO, validators: Dl },
  hn = il.validators;
let Pi = class {
  constructor(i) {
    (this.defaults = i || {}),
      (this.interceptors = { request: new R0(), response: new R0() });
  }
  async request(i, s) {
    try {
      return await this._request(i, s);
    } catch (r) {
      if (r instanceof Error) {
        let l = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(l)
          : (l = new Error());
        const c = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? c &&
              !String(r.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + c)
            : (r.stack = c);
        } catch {}
      }
      throw r;
    }
  }
  _request(i, s) {
    typeof i == "string" ? ((s = s || {}), (s.url = i)) : (s = i || {}),
      (s = Gi(this.defaults, s));
    const { transitional: r, paramsSerializer: l, headers: c } = s;
    r !== void 0 &&
      il.assertOptions(
        r,
        {
          silentJSONParsing: hn.transitional(hn.boolean),
          forcedJSONParsing: hn.transitional(hn.boolean),
          clarifyTimeoutError: hn.transitional(hn.boolean),
        },
        !1
      ),
      l != null &&
        (z.isFunction(l)
          ? (s.paramsSerializer = { serialize: l })
          : il.assertOptions(
              l,
              { encode: hn.function, serialize: hn.function },
              !0
            )),
      s.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (s.allowAbsoluteUrls = !0)),
      il.assertOptions(
        s,
        {
          baseUrl: hn.spelling("baseURL"),
          withXsrfToken: hn.spelling("withXSRFToken"),
        },
        !0
      ),
      (s.method = (s.method || this.defaults.method || "get").toLowerCase());
    let f = c && z.merge(c.common, c[s.method]);
    c &&
      z.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (A) => {
          delete c[A];
        }
      ),
      (s.headers = _e.concat(f, c));
    const d = [];
    let p = !0;
    this.interceptors.request.forEach(function (M) {
      (typeof M.runWhen == "function" && M.runWhen(s) === !1) ||
        ((p = p && M.synchronous), d.unshift(M.fulfilled, M.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (M) {
      m.push(M.fulfilled, M.rejected);
    });
    let y,
      b = 0,
      x;
    if (!p) {
      const A = [B0.bind(this), void 0];
      for (
        A.unshift(...d), A.push(...m), x = A.length, y = Promise.resolve(s);
        b < x;

      )
        y = y.then(A[b++], A[b++]);
      return y;
    }
    x = d.length;
    let O = s;
    for (b = 0; b < x; ) {
      const A = d[b++],
        M = d[b++];
      try {
        O = A(O);
      } catch (R) {
        M.call(this, R);
        break;
      }
    }
    try {
      y = B0.call(this, O);
    } catch (A) {
      return Promise.reject(A);
    }
    for (b = 0, x = m.length; b < x; ) y = y.then(m[b++], m[b++]);
    return y;
  }
  getUri(i) {
    i = Gi(this.defaults, i);
    const s = lx(i.baseURL, i.url, i.allowAbsoluteUrls);
    return ix(s, i.params, i.paramsSerializer);
  }
};
z.forEach(["delete", "get", "head", "options"], function (i) {
  Pi.prototype[i] = function (s, r) {
    return this.request(
      Gi(r || {}, { method: i, url: s, data: (r || {}).data })
    );
  };
});
z.forEach(["post", "put", "patch"], function (i) {
  function s(r) {
    return function (c, f, d) {
      return this.request(
        Gi(d || {}, {
          method: i,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: f,
        })
      );
    };
  }
  (Pi.prototype[i] = s()), (Pi.prototype[i + "Form"] = s(!0));
});
let OO = class mx {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function (c) {
      s = c;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let c = r._listeners.length;
      for (; c-- > 0; ) r._listeners[c](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let c;
        const f = new Promise((d) => {
          r.subscribe(d), (c = d);
        }).then(l);
        return (
          (f.cancel = function () {
            r.unsubscribe(c);
          }),
          f
        );
      }),
      i(function (c, f, d) {
        r.reason || ((r.reason = new Ka(c, f, d)), s(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : (this._listeners = [i]);
  }
  unsubscribe(i) {
    if (!this._listeners) return;
    const s = this._listeners.indexOf(i);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const i = new AbortController(),
      s = (r) => {
        i.abort(r);
      };
    return (
      this.subscribe(s),
      (i.signal.unsubscribe = () => this.unsubscribe(s)),
      i.signal
    );
  }
  static source() {
    let i;
    return {
      token: new mx(function (l) {
        i = l;
      }),
      cancel: i,
    };
  }
};
function DO(e) {
  return function (s) {
    return e.apply(null, s);
  };
}
function MO(e) {
  return z.isObject(e) && e.isAxiosError === !0;
}
const eh = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(eh).forEach(([e, i]) => {
  eh[i] = e;
});
function px(e) {
  const i = new Pi(e),
    s = Xb(Pi.prototype.request, i);
  return (
    z.extend(s, Pi.prototype, i, { allOwnKeys: !0 }),
    z.extend(s, i, null, { allOwnKeys: !0 }),
    (s.create = function (l) {
      return px(Gi(e, l));
    }),
    s
  );
}
const Ot = px(Ar);
Ot.Axios = Pi;
Ot.CanceledError = Ka;
Ot.CancelToken = OO;
Ot.isCancel = rx;
Ot.VERSION = dx;
Ot.toFormData = Cl;
Ot.AxiosError = ut;
Ot.Cancel = Ot.CanceledError;
Ot.all = function (i) {
  return Promise.all(i);
};
Ot.spread = DO;
Ot.isAxiosError = MO;
Ot.mergeConfig = Gi;
Ot.AxiosHeaders = _e;
Ot.formToJSON = (e) => sx(z.isHTMLForm(e) ? new FormData(e) : e);
Ot.getAdapter = hx.getAdapter;
Ot.HttpStatusCode = eh;
Ot.default = Ot;
const {
    Axios: qD,
    AxiosError: PD,
    CanceledError: YD,
    isCancel: GD,
    CancelToken: XD,
    VERSION: KD,
    all: FD,
    Cancel: QD,
    isAxiosError: ZD,
    spread: $D,
    toFormData: JD,
    AxiosHeaders: WD,
    HttpStatusCode: ID,
    formToJSON: tM,
    getAdapter: eM,
    mergeConfig: nM,
  } = Ot,
  NO = Ot.create({ baseURL: "http://localhost:5000/api", withCredentials: !0 });
function jO() {
  const [e, i] = E.useState({ email: "", password: "" }),
    [s, r] = E.useState(""),
    l = vn(),
    c = async (f) => {
      f.preventDefault();
      try {
        const d = await NO.post("/auth/login", e, { withCredentials: !0 });
        l("/dashboard");
      } catch (d) {
        const p = d.response?.data?.message || "Login failed";
        r(p);
      }
    };
  return T.jsx("div", {
    className: "min-h-screen flex items-center justify-center bg-gray-100",
    children: T.jsxs("form", {
      onSubmit: c,
      className: "w-full max-w-md bg-white p-6 rounded-lg shadow-md",
      children: [
        T.jsx("h2", {
          className: "text-3xl font-bold text-center text-blue-600 mb-4",
          children: "Campus Matrix",
        }),
        T.jsx("p", {
          className: "text-lg text-center mb-6",
          children: "Log in to your account",
        }),
        s &&
          T.jsx("p", { className: "text-red-500 text-sm mb-2", children: s }),
        T.jsx("input", {
          type: "email",
          name: "email",
          value: e.email,
          onChange: (f) => i({ ...e, email: f.target.value }),
          placeholder: "Email address",
          className: "w-full p-3 border rounded mb-3",
          required: !0,
        }),
        T.jsx("input", {
          type: "password",
          name: "password",
          value: e.password,
          onChange: (f) => i({ ...e, password: f.target.value }),
          placeholder: "Password",
          className: "w-full p-3 border rounded mb-4",
          required: !0,
        }),
        T.jsx(Ws, {
          type: "submit",
          className:
            "w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 cursor-pointer",
          children: "Log In",
        }),
        T.jsxs("p", {
          className: "text-center mt-4 text-sm",
          children: [
            "Don’t have an account?",
            " ",
            T.jsx("span", {
              className: "text-blue-600 cursor-pointer hover:underline",
              onClick: () => l("/auth/signup"),
              children: "Sign Up",
            }),
          ],
        }),
      ],
    }),
  });
}
const LO = () => {
    const e = vn(),
      [i, s] = E.useState({
        name: "",
        email: "",
        password: "",
        year: "",
        role: "",
      }),
      [r, l] = E.useState(!1),
      c = (d) => {
        const { name: p, value: m } = d.target;
        if (p === "year") {
          let y = "",
            b = !1;
          m === "1"
            ? ((y = "mentee"), (b = !0))
            : m === "4" && ((y = "mentor"), (b = !0)),
            s((x) => ({ ...x, year: m, role: y })),
            l(b);
        } else s((y) => ({ ...y, [p]: m }));
      },
      f = async (d) => {
        d.preventDefault();
        try {
          await Ot.post("http://localhost:5000/api/auth/signup", i, {
            withCredentials: !0,
          }),
            e("/auth/login");
        } catch (p) {
          console.error(p), alert(p.response?.data?.message || "Signup failed");
        }
      };
    return T.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white",
      children: T.jsxs("div", {
        className: "bg-white p-8 rounded shadow-md w-full max-w-md",
        children: [
          T.jsx("h2", {
            className: "text-2xl font-bold mb-6 text-center text-indigo-600",
            children: "Sign Up",
          }),
          T.jsxs("form", {
            onSubmit: f,
            className: "space-y-4",
            children: [
              T.jsx("input", {
                type: "text",
                name: "name",
                placeholder: "Name",
                required: !0,
                value: i.name,
                onChange: c,
                className: "w-full px-4 py-2 border rounded",
              }),
              T.jsx("input", {
                type: "email",
                name: "email",
                placeholder: "Email",
                required: !0,
                value: i.email,
                onChange: c,
                className: "w-full px-4 py-2 border rounded",
              }),
              T.jsx("input", {
                type: "password",
                name: "password",
                placeholder: "Password",
                required: !0,
                value: i.password,
                onChange: c,
                className: "w-full px-4 py-2 border rounded",
              }),
              T.jsxs("select", {
                name: "year",
                required: !0,
                value: i.year,
                onChange: c,
                className: "w-full px-4 py-2 border rounded bg-white",
                children: [
                  T.jsx("option", { value: "", children: "Select Year" }),
                  T.jsx("option", { value: "1", children: "1st Year" }),
                  T.jsx("option", { value: "2", children: "2nd Year" }),
                  T.jsx("option", { value: "3", children: "3rd Year" }),
                  T.jsx("option", { value: "4", children: "4th Year" }),
                ],
              }),
              T.jsxs("select", {
                name: "role",
                required: !0,
                value: i.role,
                onChange: c,
                disabled: r,
                className: "w-full px-4 py-2 border rounded bg-white",
                children: [
                  T.jsx("option", { value: "", children: "Select Role" }),
                  T.jsx("option", { value: "mentee", children: "Mentee" }),
                  T.jsx("option", { value: "mentor", children: "Mentor" }),
                ],
              }),
              T.jsx("button", {
                type: "submit",
                className:
                  "w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200",
                children: "Sign Up",
              }),
            ],
          }),
          T.jsxs("p", {
            className: "mt-4 text-center text-sm",
            children: [
              "Already have an account?",
              " ",
              T.jsx("a", {
                href: "/auth/login",
                className: "text-indigo-600 hover:underline",
                children: "Login",
              }),
            ],
          }),
        ],
      }),
    });
  },
  BO = () => {
    const [e, i] = E.useState(null),
      s = vn();
    return (
      E.useEffect(() => {
        (async () => {
          try {
            const l = await fetch("http://localhost:5000/api/auth/me", {
              credentials: "include",
            });
            if (l.ok) {
              const c = await l.json();
              i(c);
            } else s("/");
          } catch (l) {
            console.error("Error fetching user:", l), s("/");
          }
        })();
      }, [s]),
      e
        ? e.hasProfile
          ? T.jsxs("div", {
              className: "p-4 space-y-6",
              children: [
                T.jsxs("h1", {
                  className: "text-3xl font-bold mb-6",
                  children: ["Welcome, ", e.name, "!"],
                }),
                T.jsxs("section", {
                  className:
                    "border p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition",
                  children: [
                    T.jsx("h2", {
                      className: "text-xl font-semibold mb-2",
                      children: "🔗 Mentor-Mentee Matching",
                    }),
                    T.jsx("p", {
                      children:
                        "Find the perfect match to grow and learn together.",
                    }),
                    T.jsx("button", {
                      onClick: () => s("/matching"),
                      className:
                        "cursor-pointer mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",
                      children:
                        e.role === "mentor" ? "Find Mentees" : "Find Mentor",
                    }),
                  ],
                }),
                T.jsxs("section", {
                  className:
                    "border p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition",
                  children: [
                    T.jsx("h2", {
                      className: "text-xl font-semibold mb-2",
                      children: "🎯 Goal Tracker",
                    }),
                    T.jsx("p", {
                      children:
                        "Set, view, and track your academic or personal goals.",
                    }),
                    T.jsx("button", {
                      onClick: () => s("/goals"),
                      className:
                        "cursor-pointer mt-3 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",
                      children: "View Goals",
                    }),
                  ],
                }),
                T.jsxs("section", {
                  className:
                    "border p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition",
                  children: [
                    T.jsx("h2", {
                      className: "text-xl font-semibold mb-2",
                      children: "💬 Messages",
                    }),
                    T.jsx("p", {
                      children: "Communicate with your mentor or mentee here.",
                    }),
                    T.jsx("button", {
                      onClick: () => s("/messages"),
                      className:
                        "cursor-pointer mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
                      children: "Open Messages",
                    }),
                  ],
                }),
                T.jsxs("section", {
                  className:
                    "border p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition",
                  children: [
                    T.jsx("h2", {
                      className: "text-xl font-semibold mb-2",
                      children: "👤 Profile",
                    }),
                    T.jsx("p", {
                      children: "View your profile, rewards, and achievements.",
                    }),
                    T.jsx("button", {
                      onClick: () => s("/profile"),
                      className:
                        "cursor-pointer mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",
                      children: "View Profile",
                    }),
                  ],
                }),
              ],
            })
          : T.jsxs("div", {
              className: "p-4",
              children: [
                T.jsxs("h2", {
                  className: "text-xl font-semibold",
                  children: ["Welcome, ", e.name, "!"],
                }),
                T.jsx("p", {
                  children: "Please complete your profile to get started.",
                }),
                T.jsx("button", {
                  onClick: () => s("/create-profile"),
                  className:
                    "mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                  children: "Create Profile",
                }),
              ],
            })
        : T.jsx("div", { className: "p-4", children: "Loading..." })
    );
  },
  UO = () => {
    const e = vn(),
      [i, s] = E.useState({
        department: "",
        bio: "",
        skills: "",
        interests: "",
        languages: "",
        gender: "",
        linkedin: "",
      }),
      r = (c) => {
        s((f) => ({ ...f, [c.target.name]: c.target.value }));
      },
      l = async (c) => {
        c.preventDefault();
        try {
          const f = await Ot.post(
            "http://localhost:5000/api/profile/create-profile",
            {
              ...i,
              skills: i.skills.split(",").map((d) => d.trim()),
              interests: i.interests.split(",").map((d) => d.trim()),
              languages: i.languages.split(",").map((d) => d.trim()),
            },
            { withCredentials: !0 }
          );
          (f.status === 200 || f.status === 201) && e("/dashboard");
        } catch (f) {
          console.error("Profile creation failed:", f),
            alert("Failed to create profile. Please try again.");
        }
      };
    return T.jsx("div", {
      className:
        "min-h-screen bg-gray-50 flex justify-center items-center px-4",
      children: T.jsxs("form", {
        onSubmit: l,
        className:
          "w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg space-y-4",
        children: [
          T.jsx("h2", {
            className: "text-2xl font-semibold text-center mb-4",
            children: "Create Your Profile",
          }),
          T.jsx("input", {
            type: "text",
            name: "department",
            placeholder: "Department",
            value: i.department,
            onChange: r,
            className: "w-full border p-2 rounded",
            required: !0,
          }),
          T.jsx("textarea", {
            name: "bio",
            placeholder: "Bio",
            value: i.bio,
            onChange: r,
            className: "w-full border p-2 rounded",
            rows: "4",
          }),
          T.jsx("input", {
            type: "text",
            name: "skills",
            placeholder: "Skills (comma-separated)",
            value: i.skills,
            onChange: r,
            className: "w-full border p-2 rounded",
          }),
          T.jsx("input", {
            type: "text",
            name: "interests",
            placeholder: "Interests (comma-separated)",
            value: i.interests,
            onChange: r,
            className: "w-full border p-2 rounded",
          }),
          T.jsx("input", {
            type: "text",
            name: "languages",
            placeholder: "Languages (comma-separated)",
            value: i.languages,
            onChange: r,
            className: "w-full border p-2 rounded",
          }),
          T.jsxs("select", {
            name: "gender",
            value: i.gender,
            onChange: r,
            className: "w-full border p-2 rounded",
            children: [
              T.jsx("option", { value: "", children: "Select Gender" }),
              T.jsx("option", { value: "Male", children: "Male" }),
              T.jsx("option", { value: "Female", children: "Female" }),
              T.jsx("option", { value: "Other", children: "Other" }),
            ],
          }),
          T.jsx("input", {
            type: "url",
            name: "linkedin",
            placeholder: "LinkedIn URL",
            value: i.linkedin,
            onChange: r,
            className: "w-full border p-2 rounded",
          }),
          T.jsx("button", {
            type: "submit",
            className:
              "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded",
            children: "Submit",
          }),
        ],
      }),
    });
  },
  VO = () => {
    const [e, i] = E.useState(null),
      s = vn();
    return (
      E.useEffect(() => {
        (async () => {
          try {
            const l = await fetch("http://localhost:5000/api/auth/me", {
              credentials: "include",
            });
            if (l.ok) {
              const c = await l.json();
              i(c), s("/dashboard");
            }
          } catch {}
        })();
      }, []),
      T.jsx(Gb, {})
    );
  },
  zO = () => {
    const [e, i] = E.useState(null),
      [s, r] = E.useState(null),
      l = vn();
    return (
      E.useEffect(() => {
        (async () => {
          try {
            const f = await fetch("http://localhost:5000/api/auth/me", {
              credentials: "include",
            });
            if (!f.ok) {
              l("/");
              return;
            }
            const d = await f.json();
            i(d);
            const p = await fetch("http://localhost:5000/api/profile/me", {
              credentials: "include",
            });
            if (p.ok) {
              const m = await p.json();
              r(m);
            } else r(null);
          } catch (f) {
            console.error(f), l("/");
          }
        })();
      }, [l]),
      e
        ? T.jsxs("div", {
            className: "p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg",
            children: [
              T.jsxs("h1", {
                className: "text-3xl font-bold mb-4",
                children: ["👤 ", e.name, "'s Profile"],
              }),
              T.jsxs("div", {
                className: "space-y-2 mb-6",
                children: [
                  T.jsxs("p", {
                    children: [
                      T.jsx("strong", { children: "Email:" }),
                      " ",
                      e.email,
                    ],
                  }),
                  T.jsxs("p", {
                    children: [
                      T.jsx("strong", { children: "Role:" }),
                      " ",
                      e.role,
                    ],
                  }),
                ],
              }),
              s
                ? T.jsxs(T.Fragment, {
                    children: [
                      T.jsxs("div", {
                        className: "space-y-2 mb-6",
                        children: [
                          T.jsxs("p", {
                            children: [
                              T.jsx("strong", { children: "Department:" }),
                              " ",
                              s.department,
                            ],
                          }),
                          T.jsxs("p", {
                            children: [
                              T.jsx("strong", { children: "Bio:" }),
                              " ",
                              s.bio || "Not added",
                            ],
                          }),
                          T.jsxs("p", {
                            children: [
                              T.jsx("strong", { children: "Skills:" }),
                              " ",
                              s.skills.join(", ") || "None",
                            ],
                          }),
                          T.jsxs("p", {
                            children: [
                              T.jsx("strong", { children: "Interests:" }),
                              " ",
                              s.interests.join(", ") || "None",
                            ],
                          }),
                          T.jsxs("p", {
                            children: [
                              T.jsx("strong", { children: "Languages:" }),
                              " ",
                              s.languages.join(", ") || "None",
                            ],
                          }),
                          T.jsxs("p", {
                            children: [
                              T.jsx("strong", { children: "Gender:" }),
                              " ",
                              s.gender,
                            ],
                          }),
                          s.linkedin &&
                            T.jsxs("p", {
                              children: [
                                T.jsx("strong", { children: "LinkedIn:" }),
                                " ",
                                T.jsx("a", {
                                  href: s.linkedin,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "text-blue-600 underline",
                                  children: "View Profile",
                                }),
                              ],
                            }),
                        ],
                      }),
                      T.jsxs("div", {
                        className: "mt-6",
                        children: [
                          T.jsx("h2", {
                            className: "text-xl font-semibold mb-2",
                            children: "🏅 Badges & Rewards",
                          }),
                          T.jsxs("ul", {
                            className: "list-disc list-inside text-gray-700",
                            children: [
                              T.jsx("li", { children: "🎓 Profile Completed" }),
                              T.jsx("li", {
                                children: "🤝 First Mentor/Mentee Matched",
                              }),
                              T.jsx("li", {
                                children: "✅ First Goal Achieved",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : T.jsx("p", {
                    className: "text-red-500",
                    children:
                      "No profile data found. Please complete your profile.",
                  }),
            ],
          })
        : T.jsx("div", { className: "p-4", children: "Loading user info..." })
    );
  },
  kO = [
    {
      id: 1,
      name: "Anjali Sharma",
      year: "3rd Year",
      expertise: "Web Development",
      image: "/avatars/mentor1.png",
    },
    {
      id: 2,
      name: "Rahul Verma",
      year: "4th Year",
      expertise: "Machine Learning",
      image: "/avatars/mentor2.png",
    },
    {
      id: 3,
      name: "Neha Gupta",
      year: "Final Year",
      expertise: "UI/UX Design",
      image: "/avatars/mentor3.png",
    },
  ],
  HO = [
    {
      id: 1,
      name: "Amit Singh",
      branch: "CSE",
      interests: "Backend Dev",
      image: "/avatars/mentee1.png",
    },
    {
      id: 2,
      name: "Pooja Patel",
      branch: "ECE",
      interests: "Competitive Programming",
      image: "/avatars/mentee2.png",
    },
    {
      id: 3,
      name: "Karan Mehta",
      branch: "IT",
      interests: "AI/ML",
      image: "/avatars/mentee3.png",
    },
  ],
  qO = () => {
    const [e, i] = E.useState(null),
      [s, r] = E.useState(!0),
      l = vn();
    return (
      E.useEffect(() => {
        (async () => {
          try {
            const f = await fetch("http://localhost:5000/api/auth/me", {
              credentials: "include",
            });
            if (f.ok) {
              const d = await f.json();
              i(d), setTimeout(() => r(!1), 3e3);
            } else l("/");
          } catch (f) {
            console.error(f), l("/");
          }
        })();
      }, [l]),
      s
        ? T.jsxs("div", {
            className: "flex flex-col items-center justify-center min-h-[60vh]",
            children: [
              T.jsx("img", {
                src: "/spinner.gif",
                alt: "Loading...",
                className: "w-72 h-72 mb-4",
              }),
              T.jsx("p", {
                className: "text-xl font-medium text-gray-600",
                children: "Matching...",
              }),
            ],
          })
        : T.jsxs("div", {
            className: "p-6 max-w-5xl mx-auto",
            children: [
              T.jsx("h1", {
                className: "text-3xl font-bold mb-6 text-center",
                children: "Mentor-Mentee Matching",
              }),
              T.jsxs("div", {
                className: "mb-4 text-center text-gray-500",
                children: [
                  "Matching simulation powered by ",
                  T.jsx("strong", { children: "Campus Matrix" }),
                  " ⚡",
                ],
              }),
              T.jsx("div", {
                className: "grid gap-6 sm:grid-cols-2 md:grid-cols-3",
                children:
                  e?.role === "mentee"
                    ? kO.map((c) =>
                        T.jsxs(
                          "div",
                          {
                            className:
                              "bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition",
                            children: [
                              T.jsx("img", {
                                src: c.image,
                                alt: c.name,
                                className:
                                  "w-20 h-20 mx-auto rounded-full mb-4 object-cover",
                              }),
                              T.jsx("h2", {
                                className: "text-xl font-semibold text-center",
                                children: c.name,
                              }),
                              T.jsx("p", {
                                className: "text-center text-gray-600",
                                children: c.year,
                              }),
                              T.jsx("p", {
                                className:
                                  "text-center text-blue-600 font-medium",
                                children: c.expertise,
                              }),
                              T.jsx("button", {
                                className:
                                  "mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600",
                                onClick: () =>
                                  ht.success("Mentor request sent!"),
                                children: "Request Mentor",
                              }),
                            ],
                          },
                          c.id
                        )
                      )
                    : HO.map((c) =>
                        T.jsxs(
                          "div",
                          {
                            className:
                              "bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition",
                            children: [
                              T.jsx("img", {
                                src: c.image,
                                alt: c.name,
                                className:
                                  "w-20 h-20 mx-auto rounded-full mb-4 object-cover",
                              }),
                              T.jsx("h2", {
                                className: "text-xl font-semibold text-center",
                                children: c.name,
                              }),
                              T.jsx("p", {
                                className: "text-center text-gray-600",
                                children: c.branch,
                              }),
                              T.jsx("p", {
                                className:
                                  "text-center text-purple-600 font-medium",
                                children: c.interests,
                              }),
                              T.jsx("button", {
                                className:
                                  "mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600",
                                onClick: () => ht.info("Profile viewed"),
                                children: "View Profile",
                              }),
                            ],
                          },
                          c.id
                        )
                      ),
              }),
            ],
          })
    );
  },
  PO = () => {
    const [e, i] = E.useState([]),
      [s, r] = E.useState(""),
      [l, c] = E.useState(""),
      [f, d] = E.useState(""),
      p = async () => {
        try {
          const O = await (
            await fetch("http://localhost:5000/api/goals", {
              credentials: "include",
            })
          ).json();
          i(O);
        } catch {
          ht.error("Failed to load goals.");
        }
      },
      m = async (x) => {
        x.preventDefault();
        try {
          (
            await fetch("http://localhost:5000/api/goals", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ title: s, description: l, deadline: f }),
            })
          ).ok
            ? (ht.success("Goal added!"), r(""), c(""), d(""), p())
            : ht.error("Failed to add goal.");
        } catch {
          ht.error("Server error.");
        }
      },
      y = async (x) => {
        try {
          (
            await fetch(`http://localhost:5000/api/goals/${x}`, {
              method: "DELETE",
              credentials: "include",
            })
          ).ok && (ht.success("Goal deleted."), p());
        } catch {
          ht.error("Error deleting goal.");
        }
      },
      b = async (x, O) => {
        try {
          (
            await fetch(`http://localhost:5000/api/goals/${x}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ completed: !O }),
            })
          ).ok && p();
        } catch {
          ht.error("Failed to update goal.");
        }
      };
    return (
      E.useEffect(() => {
        p();
      }, []),
      T.jsxs("div", {
        className: "max-w-3xl mx-auto p-6",
        children: [
          T.jsx("h1", {
            className: "text-3xl font-bold mb-6",
            children: "🎯 Your Goals",
          }),
          T.jsxs("div", {
            className: "bg-white shadow p-4 rounded mb-6",
            children: [
              T.jsx("h2", {
                className: "text-xl font-semibold mb-2",
                children: "Add a Goal",
              }),
              T.jsxs("form", {
                onSubmit: m,
                children: [
                  T.jsx("input", {
                    className: "border p-2 w-full mb-2",
                    placeholder: "Title",
                    value: s,
                    onChange: (x) => r(x.target.value),
                    required: !0,
                  }),
                  T.jsx("textarea", {
                    className: "border p-2 w-full mb-2",
                    placeholder: "Description",
                    value: l,
                    onChange: (x) => c(x.target.value),
                    required: !0,
                  }),
                  T.jsx("input", {
                    type: "date",
                    className: "border p-2 w-full mb-2",
                    value: f,
                    onChange: (x) => d(x.target.value),
                    required: !0,
                  }),
                  T.jsx("button", {
                    type: "submit",
                    className:
                      "bg-blue-600 text-white px-4 py-2 rounded cursor-pointer",
                    children: "Add Goal",
                  }),
                ],
              }),
            ],
          }),
          T.jsxs("div", {
            className: "space-y-4",
            children: [
              e.length === 0 &&
                T.jsx("p", { children: "No goals yet. Start by adding one!" }),
              e.map((x) =>
                T.jsxs(
                  "div",
                  {
                    className: `p-4 rounded shadow ${
                      x.completed ? "bg-green-100" : "bg-gray-100"
                    }`,
                    children: [
                      T.jsxs("div", {
                        className: "flex justify-between items-center",
                        children: [
                          T.jsx("h3", {
                            className: "text-lg font-semibold",
                            children: x.title,
                          }),
                          T.jsx("button", {
                            className:
                              "text-red-500 hover:text-red-700 cursor-pointer",
                            onClick: () => y(x._id),
                            children: "Delete Goal 🗑️",
                          }),
                        ],
                      }),
                      T.jsx("p", {
                        className: "text-sm text-gray-600 mb-1",
                        children: x.description,
                      }),
                      x.deadline &&
                        T.jsxs("p", {
                          className: "text-sm text-gray-500",
                          children: [
                            "Deadline: ",
                            new Date(x.deadline).toLocaleDateString(),
                          ],
                        }),
                      T.jsx("div", {
                        className: "mt-2",
                        children: T.jsx("button", {
                          className: `px-3 py-1 rounded cursor-pointer text-sm ${
                            x.completed
                              ? "bg-yellow-500 text-white"
                              : "bg-green-600 text-white"
                          }`,
                          onClick: () => b(x._id, x.completed),
                          children: x.completed
                            ? "Mark as Incomplete"
                            : "Mark as Completed",
                        }),
                      }),
                    ],
                  },
                  x._id
                )
              ),
            ],
          }),
        ],
      })
    );
  },
  yn = Object.create(null);
yn.open = "0";
yn.close = "1";
yn.ping = "2";
yn.pong = "3";
yn.message = "4";
yn.upgrade = "5";
yn.noop = "6";
const al = Object.create(null);
Object.keys(yn).forEach((e) => {
  al[yn[e]] = e;
});
const nh = { type: "error", data: "parser error" },
  yx =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  gx = typeof ArrayBuffer == "function",
  vx = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Jh = ({ type: e, data: i }, s, r) =>
    yx && i instanceof Blob
      ? s
        ? r(i)
        : V0(i, r)
      : gx && (i instanceof ArrayBuffer || vx(i))
      ? s
        ? r(i)
        : V0(new Blob([i]), r)
      : r(yn[e] + (i || "")),
  V0 = (e, i) => {
    const s = new FileReader();
    return (
      (s.onload = function () {
        const r = s.result.split(",")[1];
        i("b" + (r || ""));
      }),
      s.readAsDataURL(e)
    );
  };
function z0(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Tf;
function YO(e, i) {
  if (yx && e.data instanceof Blob)
    return e.data.arrayBuffer().then(z0).then(i);
  if (gx && (e.data instanceof ArrayBuffer || vx(e.data))) return i(z0(e.data));
  Jh(e, !1, (s) => {
    Tf || (Tf = new TextEncoder()), i(Tf.encode(s));
  });
}
const k0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Is = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < k0.length; e++) Is[k0.charCodeAt(e)] = e;
const GO = (e) => {
    let i = e.length * 0.75,
      s = e.length,
      r,
      l = 0,
      c,
      f,
      d,
      p;
    e[e.length - 1] === "=" && (i--, e[e.length - 2] === "=" && i--);
    const m = new ArrayBuffer(i),
      y = new Uint8Array(m);
    for (r = 0; r < s; r += 4)
      (c = Is[e.charCodeAt(r)]),
        (f = Is[e.charCodeAt(r + 1)]),
        (d = Is[e.charCodeAt(r + 2)]),
        (p = Is[e.charCodeAt(r + 3)]),
        (y[l++] = (c << 2) | (f >> 4)),
        (y[l++] = ((f & 15) << 4) | (d >> 2)),
        (y[l++] = ((d & 3) << 6) | (p & 63));
    return m;
  },
  XO = typeof ArrayBuffer == "function",
  Wh = (e, i) => {
    if (typeof e != "string") return { type: "message", data: bx(e, i) };
    const s = e.charAt(0);
    return s === "b"
      ? { type: "message", data: KO(e.substring(1), i) }
      : al[s]
      ? e.length > 1
        ? { type: al[s], data: e.substring(1) }
        : { type: al[s] }
      : nh;
  },
  KO = (e, i) => {
    if (XO) {
      const s = GO(e);
      return bx(s, i);
    } else return { base64: !0, data: e };
  },
  bx = (e, i) => {
    switch (i) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  xx = "",
  FO = (e, i) => {
    const s = e.length,
      r = new Array(s);
    let l = 0;
    e.forEach((c, f) => {
      Jh(c, !1, (d) => {
        (r[f] = d), ++l === s && i(r.join(xx));
      });
    });
  },
  QO = (e, i) => {
    const s = e.split(xx),
      r = [];
    for (let l = 0; l < s.length; l++) {
      const c = Wh(s[l], i);
      if ((r.push(c), c.type === "error")) break;
    }
    return r;
  };
function ZO() {
  return new TransformStream({
    transform(e, i) {
      YO(e, (s) => {
        const r = s.length;
        let l;
        if (r < 126)
          (l = new Uint8Array(1)), new DataView(l.buffer).setUint8(0, r);
        else if (r < 65536) {
          l = new Uint8Array(3);
          const c = new DataView(l.buffer);
          c.setUint8(0, 126), c.setUint16(1, r);
        } else {
          l = new Uint8Array(9);
          const c = new DataView(l.buffer);
          c.setUint8(0, 127), c.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (l[0] |= 128),
          i.enqueue(l),
          i.enqueue(s);
      });
    },
  });
}
let Sf;
function Fo(e) {
  return e.reduce((i, s) => i + s.length, 0);
}
function Qo(e, i) {
  if (e[0].length === i) return e.shift();
  const s = new Uint8Array(i);
  let r = 0;
  for (let l = 0; l < i; l++)
    (s[l] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), s;
}
function $O(e, i) {
  Sf || (Sf = new TextDecoder());
  const s = [];
  let r = 0,
    l = -1,
    c = !1;
  return new TransformStream({
    transform(f, d) {
      for (s.push(f); ; ) {
        if (r === 0) {
          if (Fo(s) < 1) break;
          const p = Qo(s, 1);
          (c = (p[0] & 128) === 128),
            (l = p[0] & 127),
            l < 126 ? (r = 3) : l === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (Fo(s) < 2) break;
          const p = Qo(s, 2);
          (l = new DataView(p.buffer, p.byteOffset, p.length).getUint16(0)),
            (r = 3);
        } else if (r === 2) {
          if (Fo(s) < 8) break;
          const p = Qo(s, 8),
            m = new DataView(p.buffer, p.byteOffset, p.length),
            y = m.getUint32(0);
          if (y > Math.pow(2, 21) - 1) {
            d.enqueue(nh);
            break;
          }
          (l = y * Math.pow(2, 32) + m.getUint32(4)), (r = 3);
        } else {
          if (Fo(s) < l) break;
          const p = Qo(s, l);
          d.enqueue(Wh(c ? p : Sf.decode(p), i)), (r = 0);
        }
        if (l === 0 || l > e) {
          d.enqueue(nh);
          break;
        }
      }
    },
  });
}
const Tx = 4;
function $t(e) {
  if (e) return JO(e);
}
function JO(e) {
  for (var i in $t.prototype) e[i] = $t.prototype[i];
  return e;
}
$t.prototype.on = $t.prototype.addEventListener = function (e, i) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(i),
    this
  );
};
$t.prototype.once = function (e, i) {
  function s() {
    this.off(e, s), i.apply(this, arguments);
  }
  return (s.fn = i), this.on(e, s), this;
};
$t.prototype.off =
  $t.prototype.removeListener =
  $t.prototype.removeAllListeners =
  $t.prototype.removeEventListener =
    function (e, i) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var s = this._callbacks["$" + e];
      if (!s) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var r, l = 0; l < s.length; l++)
        if (((r = s[l]), r === i || r.fn === i)) {
          s.splice(l, 1);
          break;
        }
      return s.length === 0 && delete this._callbacks["$" + e], this;
    };
$t.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var i = new Array(arguments.length - 1),
      s = this._callbacks["$" + e],
      r = 1;
    r < arguments.length;
    r++
  )
    i[r - 1] = arguments[r];
  if (s) {
    s = s.slice(0);
    for (var r = 0, l = s.length; r < l; ++r) s[r].apply(this, i);
  }
  return this;
};
$t.prototype.emitReserved = $t.prototype.emit;
$t.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
$t.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const Ml =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (i) => Promise.resolve().then(i)
      : (i, s) => s(i, 0),
  Fe =
    typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : Function("return this")(),
  WO = "arraybuffer";
function Sx(e, ...i) {
  return i.reduce((s, r) => (e.hasOwnProperty(r) && (s[r] = e[r]), s), {});
}
const IO = Fe.setTimeout,
  tD = Fe.clearTimeout;
function Nl(e, i) {
  i.useNativeTimers
    ? ((e.setTimeoutFn = IO.bind(Fe)), (e.clearTimeoutFn = tD.bind(Fe)))
    : ((e.setTimeoutFn = Fe.setTimeout.bind(Fe)),
      (e.clearTimeoutFn = Fe.clearTimeout.bind(Fe)));
}
const eD = 1.33;
function nD(e) {
  return typeof e == "string"
    ? iD(e)
    : Math.ceil((e.byteLength || e.size) * eD);
}
function iD(e) {
  let i = 0,
    s = 0;
  for (let r = 0, l = e.length; r < l; r++)
    (i = e.charCodeAt(r)),
      i < 128
        ? (s += 1)
        : i < 2048
        ? (s += 2)
        : i < 55296 || i >= 57344
        ? (s += 3)
        : (r++, (s += 4));
  return s;
}
function Ex() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function aD(e) {
  let i = "";
  for (let s in e)
    e.hasOwnProperty(s) &&
      (i.length && (i += "&"),
      (i += encodeURIComponent(s) + "=" + encodeURIComponent(e[s])));
  return i;
}
function sD(e) {
  let i = {},
    s = e.split("&");
  for (let r = 0, l = s.length; r < l; r++) {
    let c = s[r].split("=");
    i[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
  }
  return i;
}
class rD extends Error {
  constructor(i, s, r) {
    super(i),
      (this.description = s),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class Ih extends $t {
  constructor(i) {
    super(),
      (this.writable = !1),
      Nl(this, i),
      (this.opts = i),
      (this.query = i.query),
      (this.socket = i.socket),
      (this.supportsBinary = !i.forceBase64);
  }
  onError(i, s, r) {
    return super.emitReserved("error", new rD(i, s, r)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(i) {
    this.readyState === "open" && this.write(i);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(i) {
    const s = Wh(i, this.socket.binaryType);
    this.onPacket(s);
  }
  onPacket(i) {
    super.emitReserved("packet", i);
  }
  onClose(i) {
    (this.readyState = "closed"), super.emitReserved("close", i);
  }
  pause(i) {}
  createUri(i, s = {}) {
    return (
      i +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(s)
    );
  }
  _hostname() {
    const i = this.opts.hostname;
    return i.indexOf(":") === -1 ? i : "[" + i + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(i) {
    const s = aD(i);
    return s.length ? "?" + s : "";
  }
}
class oD extends Ih {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(i) {
    this.readyState = "pausing";
    const s = () => {
      (this.readyState = "paused"), i();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || s();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || s();
          }));
    } else s();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(i) {
    const s = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(r);
    };
    QO(i, this.socket.binaryType).forEach(s),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll());
  }
  doClose() {
    const i = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? i() : this.once("open", i);
  }
  write(i) {
    (this.writable = !1),
      FO(i, (s) => {
        this.doWrite(s, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const i = this.opts.secure ? "https" : "http",
      s = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (s[this.opts.timestampParam] = Ex()),
      !this.supportsBinary && !s.sid && (s.b64 = 1),
      this.createUri(i, s)
    );
  }
}
let _x = !1;
try {
  _x = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const lD = _x;
function uD() {}
class cD extends oD {
  constructor(i) {
    if ((super(i), typeof location < "u")) {
      const s = location.protocol === "https:";
      let r = location.port;
      r || (r = s ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && i.hostname !== location.hostname) ||
          r !== i.port);
    }
  }
  doWrite(i, s) {
    const r = this.request({ method: "POST", data: i });
    r.on("success", s),
      r.on("error", (l, c) => {
        this.onError("xhr post error", l, c);
      });
  }
  doPoll() {
    const i = this.request();
    i.on("data", this.onData.bind(this)),
      i.on("error", (s, r) => {
        this.onError("xhr poll error", s, r);
      }),
      (this.pollXhr = i);
  }
}
let Ua = class sl extends $t {
  constructor(i, s, r) {
    super(),
      (this.createRequest = i),
      Nl(this, r),
      (this._opts = r),
      (this._method = r.method || "GET"),
      (this._uri = s),
      (this._data = r.data !== void 0 ? r.data : null),
      this._create();
  }
  _create() {
    var i;
    const s = Sx(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    s.xdomain = !!this._opts.xd;
    const r = (this._xhr = this.createRequest(s));
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let l in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(l) &&
              r.setRequestHeader(l, this._opts.extraHeaders[l]);
        }
      } catch {}
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      (i = this._opts.cookieJar) === null || i === void 0 || i.addCookies(r),
        "withCredentials" in r &&
          (r.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout),
        (r.onreadystatechange = () => {
          var l;
          r.readyState === 3 &&
            ((l = this._opts.cookieJar) === null ||
              l === void 0 ||
              l.parseCookies(r.getResponseHeader("set-cookie"))),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof r.status == "number" ? r.status : 0);
                  }, 0));
        }),
        r.send(this._data);
    } catch (l) {
      this.setTimeoutFn(() => {
        this._onError(l);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this._index = sl.requestsCount++), (sl.requests[this._index] = this));
  }
  _onError(i) {
    this.emitReserved("error", i, this._xhr), this._cleanup(!0);
  }
  _cleanup(i) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = uD), i))
        try {
          this._xhr.abort();
        } catch {}
      typeof document < "u" && delete sl.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const i = this._xhr.responseText;
    i !== null &&
      (this.emitReserved("data", i),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
};
Ua.requestsCount = 0;
Ua.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", H0);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Fe ? "pagehide" : "unload";
    addEventListener(e, H0, !1);
  }
}
function H0() {
  for (let e in Ua.requests)
    Ua.requests.hasOwnProperty(e) && Ua.requests[e].abort();
}
const fD = (function () {
  const e = wx({ xdomain: !1 });
  return e && e.responseType !== null;
})();
class hD extends cD {
  constructor(i) {
    super(i);
    const s = i && i.forceBase64;
    this.supportsBinary = fD && !s;
  }
  request(i = {}) {
    return (
      Object.assign(i, { xd: this.xd }, this.opts), new Ua(wx, this.uri(), i)
    );
  }
}
function wx(e) {
  const i = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || lD)) return new XMLHttpRequest();
  } catch {}
  if (!i)
    try {
      return new Fe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
const Ax =
  typeof navigator < "u" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class dD extends Ih {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(),
      s = this.opts.protocols,
      r = Ax
        ? {}
        : Sx(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, s, r);
    } catch (l) {
      return this.emitReserved("error", l);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (i) =>
        this.onClose({
          description: "websocket connection closed",
          context: i,
        })),
      (this.ws.onmessage = (i) => this.onData(i.data)),
      (this.ws.onerror = (i) => this.onError("websocket error", i));
  }
  write(i) {
    this.writable = !1;
    for (let s = 0; s < i.length; s++) {
      const r = i[s],
        l = s === i.length - 1;
      Jh(r, this.supportsBinary, (c) => {
        try {
          this.doWrite(r, c);
        } catch {}
        l &&
          Ml(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const i = this.opts.secure ? "wss" : "ws",
      s = this.query || {};
    return (
      this.opts.timestampRequests && (s[this.opts.timestampParam] = Ex()),
      this.supportsBinary || (s.b64 = 1),
      this.createUri(i, s)
    );
  }
}
const Ef = Fe.WebSocket || Fe.MozWebSocket;
class mD extends dD {
  createSocket(i, s, r) {
    return Ax ? new Ef(i, s, r) : s ? new Ef(i, s) : new Ef(i);
  }
  doWrite(i, s) {
    this.ws.send(s);
  }
}
class pD extends Ih {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      );
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((i) => {
        this.onError("webtransport error", i);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((i) => {
          const s = $O(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = i.readable.pipeThrough(s).getReader(),
            l = ZO();
          l.readable.pipeTo(i.writable),
            (this._writer = l.writable.getWriter());
          const c = () => {
            r.read()
              .then(({ done: d, value: p }) => {
                d || (this.onPacket(p), c());
              })
              .catch((d) => {});
          };
          c();
          const f = { type: "open" };
          this.query.sid && (f.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(f).then(() => this.onOpen());
        });
      });
  }
  write(i) {
    this.writable = !1;
    for (let s = 0; s < i.length; s++) {
      const r = i[s],
        l = s === i.length - 1;
      this._writer.write(r).then(() => {
        l &&
          Ml(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var i;
    (i = this._transport) === null || i === void 0 || i.close();
  }
}
const yD = { websocket: mD, webtransport: pD, polling: hD },
  gD =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  vD = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function ih(e) {
  if (e.length > 8e3) throw "URI too long";
  const i = e,
    s = e.indexOf("["),
    r = e.indexOf("]");
  s != -1 &&
    r != -1 &&
    (e =
      e.substring(0, s) +
      e.substring(s, r).replace(/:/g, ";") +
      e.substring(r, e.length));
  let l = gD.exec(e || ""),
    c = {},
    f = 14;
  for (; f--; ) c[vD[f]] = l[f] || "";
  return (
    s != -1 &&
      r != -1 &&
      ((c.source = i),
      (c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":")),
      (c.authority = c.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (c.ipv6uri = !0)),
    (c.pathNames = bD(c, c.path)),
    (c.queryKey = xD(c, c.query)),
    c
  );
}
function bD(e, i) {
  const s = /\/{2,9}/g,
    r = i.replace(s, "/").split("/");
  return (
    (i.slice(0, 1) == "/" || i.length === 0) && r.splice(0, 1),
    i.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function xD(e, i) {
  const s = {};
  return (
    i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, l, c) {
      l && (s[l] = c);
    }),
    s
  );
}
const ah =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  rl = [];
ah &&
  addEventListener(
    "offline",
    () => {
      rl.forEach((e) => e());
    },
    !1
  );
class fi extends $t {
  constructor(i, s) {
    if (
      (super(),
      (this.binaryType = WO),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      i && typeof i == "object" && ((s = i), (i = null)),
      i)
    ) {
      const r = ih(i);
      (s.hostname = r.host),
        (s.secure = r.protocol === "https" || r.protocol === "wss"),
        (s.port = r.port),
        r.query && (s.query = r.query);
    } else s.host && (s.hostname = ih(s.host).host);
    Nl(this, s),
      (this.secure =
        s.secure != null
          ? s.secure
          : typeof location < "u" && location.protocol === "https:"),
      s.hostname && !s.port && (s.port = this.secure ? "443" : "80"),
      (this.hostname =
        s.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        s.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      s.transports.forEach((r) => {
        const l = r.prototype.name;
        this.transports.push(l), (this._transportsByName[l] = r);
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        s
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = sD(this.opts.query)),
      ah &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          rl.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(i) {
    const s = Object.assign({}, this.opts.query);
    (s.EIO = Tx), (s.transport = i), this.id && (s.sid = this.id);
    const r = Object.assign(
      {},
      this.opts,
      {
        query: s,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[i]
    );
    return new this._transportsByName[i](r);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const i =
      this.opts.rememberUpgrade &&
      fi.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const s = this.createTransport(i);
    s.open(), this.setTransport(s);
  }
  setTransport(i) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = i),
      i
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (s) => this._onClose("transport close", s));
  }
  onOpen() {
    (this.readyState = "open"),
      (fi.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush();
  }
  _onPacket(i) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", i), this.emitReserved("heartbeat"), i.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(i.data));
          break;
        case "ping":
          this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout();
          break;
        case "error":
          const s = new Error("server error");
          (s.code = i.data), this._onError(s);
          break;
        case "message":
          this.emitReserved("data", i.data),
            this.emitReserved("message", i.data);
          break;
      }
  }
  onHandshake(i) {
    this.emitReserved("handshake", i),
      (this.id = i.sid),
      (this.transport.query.sid = i.sid),
      (this._pingInterval = i.pingInterval),
      (this._pingTimeout = i.pingTimeout),
      (this._maxPayload = i.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const i = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + i),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, i)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const i = this._getWritablePackets();
      this.transport.send(i),
        (this._prevBufferLen = i.length),
        this.emitReserved("flush");
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let s = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const l = this.writeBuffer[r].data;
      if ((l && (s += nD(l)), r > 0 && s > this._maxPayload))
        return this.writeBuffer.slice(0, r);
      s += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const i = Date.now() > this._pingTimeoutTime;
    return (
      i &&
        ((this._pingTimeoutTime = 0),
        Ml(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      i
    );
  }
  write(i, s, r) {
    return this._sendPacket("message", i, s, r), this;
  }
  send(i, s, r) {
    return this._sendPacket("message", i, s, r), this;
  }
  _sendPacket(i, s, r, l) {
    if (
      (typeof s == "function" && ((l = s), (s = void 0)),
      typeof r == "function" && ((l = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const c = { type: i, data: s, options: r };
    this.emitReserved("packetCreate", c),
      this.writeBuffer.push(c),
      l && this.once("flush", l),
      this.flush();
  }
  close() {
    const i = () => {
        this._onClose("forced close"), this.transport.close();
      },
      s = () => {
        this.off("upgrade", s), this.off("upgradeError", s), i();
      },
      r = () => {
        this.once("upgrade", s), this.once("upgradeError", s);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : i();
            })
          : this.upgrading
          ? r()
          : i()),
      this
    );
  }
  _onError(i) {
    if (
      ((fi.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", i), this._onClose("transport error", i);
  }
  _onClose(i, s) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        ah &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1
            ),
          this._offlineEventListener))
      ) {
        const r = rl.indexOf(this._offlineEventListener);
        r !== -1 && rl.splice(r, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", i, s),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
fi.protocol = Tx;
class TD extends fi {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let i = 0; i < this._upgrades.length; i++)
        this._probe(this._upgrades[i]);
  }
  _probe(i) {
    let s = this.createTransport(i),
      r = !1;
    fi.priorWebsocketSuccess = !1;
    const l = () => {
      r ||
        (s.send([{ type: "ping", data: "probe" }]),
        s.once("packet", (b) => {
          if (!r)
            if (b.type === "pong" && b.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", s), !s)
              )
                return;
              (fi.priorWebsocketSuccess = s.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (y(),
                      this.setTransport(s),
                      s.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", s),
                      (s = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const x = new Error("probe error");
              (x.transport = s.name), this.emitReserved("upgradeError", x);
            }
        }));
    };
    function c() {
      r || ((r = !0), y(), s.close(), (s = null));
    }
    const f = (b) => {
      const x = new Error("probe error: " + b);
      (x.transport = s.name), c(), this.emitReserved("upgradeError", x);
    };
    function d() {
      f("transport closed");
    }
    function p() {
      f("socket closed");
    }
    function m(b) {
      s && b.name !== s.name && c();
    }
    const y = () => {
      s.removeListener("open", l),
        s.removeListener("error", f),
        s.removeListener("close", d),
        this.off("close", p),
        this.off("upgrading", m);
    };
    s.once("open", l),
      s.once("error", f),
      s.once("close", d),
      this.once("close", p),
      this.once("upgrading", m),
      this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || s.open();
          }, 200)
        : s.open();
  }
  onHandshake(i) {
    (this._upgrades = this._filterUpgrades(i.upgrades)), super.onHandshake(i);
  }
  _filterUpgrades(i) {
    const s = [];
    for (let r = 0; r < i.length; r++)
      ~this.transports.indexOf(i[r]) && s.push(i[r]);
    return s;
  }
}
let SD = class extends TD {
  constructor(i, s = {}) {
    const r = typeof i == "object" ? i : s;
    (!r.transports || (r.transports && typeof r.transports[0] == "string")) &&
      (r.transports = (r.transports || ["polling", "websocket", "webtransport"])
        .map((l) => yD[l])
        .filter((l) => !!l)),
      super(i, r);
  }
};
function ED(e, i = "", s) {
  let r = e;
  (s = s || (typeof location < "u" && location)),
    e == null && (e = s.protocol + "//" + s.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = s.protocol + e) : (e = s.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof s < "u" ? (e = s.protocol + "//" + e) : (e = "https://" + e)),
      (r = ih(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const c = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + c + ":" + r.port + i),
    (r.href =
      r.protocol + "://" + c + (s && s.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const _D = typeof ArrayBuffer == "function",
  wD = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  Rx = Object.prototype.toString,
  AD =
    typeof Blob == "function" ||
    (typeof Blob < "u" && Rx.call(Blob) === "[object BlobConstructor]"),
  RD =
    typeof File == "function" ||
    (typeof File < "u" && Rx.call(File) === "[object FileConstructor]");
function td(e) {
  return (
    (_D && (e instanceof ArrayBuffer || wD(e))) ||
    (AD && e instanceof Blob) ||
    (RD && e instanceof File)
  );
}
function ol(e, i) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let s = 0, r = e.length; s < r; s++) if (ol(e[s])) return !0;
    return !1;
  }
  if (td(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return ol(e.toJSON(), !0);
  for (const s in e)
    if (Object.prototype.hasOwnProperty.call(e, s) && ol(e[s])) return !0;
  return !1;
}
function CD(e) {
  const i = [],
    s = e.data,
    r = e;
  return (
    (r.data = sh(s, i)), (r.attachments = i.length), { packet: r, buffers: i }
  );
}
function sh(e, i) {
  if (!e) return e;
  if (td(e)) {
    const s = { _placeholder: !0, num: i.length };
    return i.push(e), s;
  } else if (Array.isArray(e)) {
    const s = new Array(e.length);
    for (let r = 0; r < e.length; r++) s[r] = sh(e[r], i);
    return s;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const s = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (s[r] = sh(e[r], i));
    return s;
  }
  return e;
}
function OD(e, i) {
  return (e.data = rh(e.data, i)), delete e.attachments, e;
}
function rh(e, i) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < i.length)
      return i[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let s = 0; s < e.length; s++) e[s] = rh(e[s], i);
  else if (typeof e == "object")
    for (const s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (e[s] = rh(e[s], i));
  return e;
}
const DD = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  MD = 5;
var vt;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(vt || (vt = {}));
class ND {
  constructor(i) {
    this.replacer = i;
  }
  encode(i) {
    return (i.type === vt.EVENT || i.type === vt.ACK) && ol(i)
      ? this.encodeAsBinary({
          type: i.type === vt.EVENT ? vt.BINARY_EVENT : vt.BINARY_ACK,
          nsp: i.nsp,
          data: i.data,
          id: i.id,
        })
      : [this.encodeAsString(i)];
  }
  encodeAsString(i) {
    let s = "" + i.type;
    return (
      (i.type === vt.BINARY_EVENT || i.type === vt.BINARY_ACK) &&
        (s += i.attachments + "-"),
      i.nsp && i.nsp !== "/" && (s += i.nsp + ","),
      i.id != null && (s += i.id),
      i.data != null && (s += JSON.stringify(i.data, this.replacer)),
      s
    );
  }
  encodeAsBinary(i) {
    const s = CD(i),
      r = this.encodeAsString(s.packet),
      l = s.buffers;
    return l.unshift(r), l;
  }
}
function q0(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class ed extends $t {
  constructor(i) {
    super(), (this.reviver = i);
  }
  add(i) {
    let s;
    if (typeof i == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      s = this.decodeString(i);
      const r = s.type === vt.BINARY_EVENT;
      r || s.type === vt.BINARY_ACK
        ? ((s.type = r ? vt.EVENT : vt.ACK),
          (this.reconstructor = new jD(s)),
          s.attachments === 0 && super.emitReserved("decoded", s))
        : super.emitReserved("decoded", s);
    } else if (td(i) || i.base64)
      if (this.reconstructor)
        (s = this.reconstructor.takeBinaryData(i)),
          s && ((this.reconstructor = null), super.emitReserved("decoded", s));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + i);
  }
  decodeString(i) {
    let s = 0;
    const r = { type: Number(i.charAt(0)) };
    if (vt[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === vt.BINARY_EVENT || r.type === vt.BINARY_ACK) {
      const c = s + 1;
      for (; i.charAt(++s) !== "-" && s != i.length; );
      const f = i.substring(c, s);
      if (f != Number(f) || i.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(f);
    }
    if (i.charAt(s + 1) === "/") {
      const c = s + 1;
      for (; ++s && !(i.charAt(s) === "," || s === i.length); );
      r.nsp = i.substring(c, s);
    } else r.nsp = "/";
    const l = i.charAt(s + 1);
    if (l !== "" && Number(l) == l) {
      const c = s + 1;
      for (; ++s; ) {
        const f = i.charAt(s);
        if (f == null || Number(f) != f) {
          --s;
          break;
        }
        if (s === i.length) break;
      }
      r.id = Number(i.substring(c, s + 1));
    }
    if (i.charAt(++s)) {
      const c = this.tryParse(i.substr(s));
      if (ed.isPayloadValid(r.type, c)) r.data = c;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(i) {
    try {
      return JSON.parse(i, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(i, s) {
    switch (i) {
      case vt.CONNECT:
        return q0(s);
      case vt.DISCONNECT:
        return s === void 0;
      case vt.CONNECT_ERROR:
        return typeof s == "string" || q0(s);
      case vt.EVENT:
      case vt.BINARY_EVENT:
        return (
          Array.isArray(s) &&
          (typeof s[0] == "number" ||
            (typeof s[0] == "string" && DD.indexOf(s[0]) === -1))
        );
      case vt.ACK:
      case vt.BINARY_ACK:
        return Array.isArray(s);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class jD {
  constructor(i) {
    (this.packet = i), (this.buffers = []), (this.reconPack = i);
  }
  takeBinaryData(i) {
    if (
      (this.buffers.push(i), this.buffers.length === this.reconPack.attachments)
    ) {
      const s = OD(this.reconPack, this.buffers);
      return this.finishedReconstruction(), s;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const LD = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: ed,
      Encoder: ND,
      get PacketType() {
        return vt;
      },
      protocol: MD,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function tn(e, i, s) {
  return (
    e.on(i, s),
    function () {
      e.off(i, s);
    }
  );
}
const BD = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Cx extends $t {
  constructor(i, s, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = i),
      (this.nsp = s),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const i = this.io;
    this.subs = [
      tn(i, "open", this.onopen.bind(this)),
      tn(i, "packet", this.onpacket.bind(this)),
      tn(i, "error", this.onerror.bind(this)),
      tn(i, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...i) {
    return i.unshift("message"), this.emit.apply(this, i), this;
  }
  emit(i, ...s) {
    var r, l, c;
    if (BD.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (
      (s.unshift(i),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(s), this;
    const f = { type: vt.EVENT, data: s };
    if (
      ((f.options = {}),
      (f.options.compress = this.flags.compress !== !1),
      typeof s[s.length - 1] == "function")
    ) {
      const y = this.ids++,
        b = s.pop();
      this._registerAckCallback(y, b), (f.id = y);
    }
    const d =
        (l =
          (r = this.io.engine) === null || r === void 0
            ? void 0
            : r.transport) === null || l === void 0
          ? void 0
          : l.writable,
      p =
        this.connected &&
        !(
          !((c = this.io.engine) === null || c === void 0) &&
          c._hasPingExpired()
        );
    return (
      (this.flags.volatile && !d) ||
        (p
          ? (this.notifyOutgoingListeners(f), this.packet(f))
          : this.sendBuffer.push(f)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(i, s) {
    var r;
    const l =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (l === void 0) {
      this.acks[i] = s;
      return;
    }
    const c = this.io.setTimeoutFn(() => {
        delete this.acks[i];
        for (let d = 0; d < this.sendBuffer.length; d++)
          this.sendBuffer[d].id === i && this.sendBuffer.splice(d, 1);
        s.call(this, new Error("operation has timed out"));
      }, l),
      f = (...d) => {
        this.io.clearTimeoutFn(c), s.apply(this, d);
      };
    (f.withError = !0), (this.acks[i] = f);
  }
  emitWithAck(i, ...s) {
    return new Promise((r, l) => {
      const c = (f, d) => (f ? l(f) : r(d));
      (c.withError = !0), s.push(c), this.emit(i, ...s);
    });
  }
  _addToQueue(i) {
    let s;
    typeof i[i.length - 1] == "function" && (s = i.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: i,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    i.push((l, ...c) =>
      r !== this._queue[0]
        ? void 0
        : (l !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), s && s(l))
            : (this._queue.shift(), s && s(null, ...c)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(i = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const s = this._queue[0];
    (s.pending && !i) ||
      ((s.pending = !0),
      s.tryCount++,
      (this.flags = s.flags),
      this.emit.apply(this, s.args));
  }
  packet(i) {
    (i.nsp = this.nsp), this.io._packet(i);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((i) => {
          this._sendConnectPacket(i);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(i) {
    this.packet({
      type: vt.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, i)
        : i,
    });
  }
  onerror(i) {
    this.connected || this.emitReserved("connect_error", i);
  }
  onclose(i, s) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", i, s),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((i) => {
      if (!this.sendBuffer.some((r) => String(r.id) === i)) {
        const r = this.acks[i];
        delete this.acks[i],
          r.withError &&
            r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(i) {
    if (i.nsp === this.nsp)
      switch (i.type) {
        case vt.CONNECT:
          i.data && i.data.sid
            ? this.onconnect(i.data.sid, i.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case vt.EVENT:
        case vt.BINARY_EVENT:
          this.onevent(i);
          break;
        case vt.ACK:
        case vt.BINARY_ACK:
          this.onack(i);
          break;
        case vt.DISCONNECT:
          this.ondisconnect();
          break;
        case vt.CONNECT_ERROR:
          this.destroy();
          const r = new Error(i.data.message);
          (r.data = i.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(i) {
    const s = i.data || [];
    i.id != null && s.push(this.ack(i.id)),
      this.connected
        ? this.emitEvent(s)
        : this.receiveBuffer.push(Object.freeze(s));
  }
  emitEvent(i) {
    if (this._anyListeners && this._anyListeners.length) {
      const s = this._anyListeners.slice();
      for (const r of s) r.apply(this, i);
    }
    super.emit.apply(this, i),
      this._pid &&
        i.length &&
        typeof i[i.length - 1] == "string" &&
        (this._lastOffset = i[i.length - 1]);
  }
  ack(i) {
    const s = this;
    let r = !1;
    return function (...l) {
      r || ((r = !0), s.packet({ type: vt.ACK, id: i, data: l }));
    };
  }
  onack(i) {
    const s = this.acks[i.id];
    typeof s == "function" &&
      (delete this.acks[i.id],
      s.withError && i.data.unshift(null),
      s.apply(this, i.data));
  }
  onconnect(i, s) {
    (this.id = i),
      (this.recovered = s && this._pid === s),
      (this._pid = s),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((i) => this.emitEvent(i)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((i) => {
        this.notifyOutgoingListeners(i), this.packet(i);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((i) => i()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: vt.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(i) {
    return (this.flags.compress = i), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(i) {
    return (this.flags.timeout = i), this;
  }
  onAny(i) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(i),
      this
    );
  }
  prependAny(i) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(i),
      this
    );
  }
  offAny(i) {
    if (!this._anyListeners) return this;
    if (i) {
      const s = this._anyListeners;
      for (let r = 0; r < s.length; r++)
        if (i === s[r]) return s.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(i) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(i),
      this
    );
  }
  prependAnyOutgoing(i) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(i),
      this
    );
  }
  offAnyOutgoing(i) {
    if (!this._anyOutgoingListeners) return this;
    if (i) {
      const s = this._anyOutgoingListeners;
      for (let r = 0; r < s.length; r++)
        if (i === s[r]) return s.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(i) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const s = this._anyOutgoingListeners.slice();
      for (const r of s) r.apply(this, i.data);
    }
  }
}
function Fa(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
Fa.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(),
      s = Math.floor(i * this.jitter * e);
    e = (Math.floor(i * 10) & 1) == 0 ? e - s : e + s;
  }
  return Math.min(e, this.max) | 0;
};
Fa.prototype.reset = function () {
  this.attempts = 0;
};
Fa.prototype.setMin = function (e) {
  this.ms = e;
};
Fa.prototype.setMax = function (e) {
  this.max = e;
};
Fa.prototype.setJitter = function (e) {
  this.jitter = e;
};
class oh extends $t {
  constructor(i, s) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      i && typeof i == "object" && ((s = i), (i = void 0)),
      (s = s || {}),
      (s.path = s.path || "/socket.io"),
      (this.opts = s),
      Nl(this, s),
      this.reconnection(s.reconnection !== !1),
      this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(s.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = s.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new Fa({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(s.timeout == null ? 2e4 : s.timeout),
      (this._readyState = "closed"),
      (this.uri = i);
    const l = s.parser || LD;
    (this.encoder = new l.Encoder()),
      (this.decoder = new l.Decoder()),
      (this._autoConnect = s.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(i) {
    return arguments.length
      ? ((this._reconnection = !!i), i || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(i) {
    return i === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = i), this);
  }
  reconnectionDelay(i) {
    var s;
    return i === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = i),
        (s = this.backoff) === null || s === void 0 || s.setMin(i),
        this);
  }
  randomizationFactor(i) {
    var s;
    return i === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = i),
        (s = this.backoff) === null || s === void 0 || s.setJitter(i),
        this);
  }
  reconnectionDelayMax(i) {
    var s;
    return i === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = i),
        (s = this.backoff) === null || s === void 0 || s.setMax(i),
        this);
  }
  timeout(i) {
    return arguments.length ? ((this._timeout = i), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(i) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new SD(this.uri, this.opts);
    const s = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const l = tn(s, "open", function () {
        r.onopen(), i && i();
      }),
      c = (d) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", d),
          i ? i(d) : this.maybeReconnectOnOpen();
      },
      f = tn(s, "error", c);
    if (this._timeout !== !1) {
      const d = this._timeout,
        p = this.setTimeoutFn(() => {
          l(), c(new Error("timeout")), s.close();
        }, d);
      this.opts.autoUnref && p.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(p);
        });
    }
    return this.subs.push(l), this.subs.push(f), this;
  }
  connect(i) {
    return this.open(i);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const i = this.engine;
    this.subs.push(
      tn(i, "ping", this.onping.bind(this)),
      tn(i, "data", this.ondata.bind(this)),
      tn(i, "error", this.onerror.bind(this)),
      tn(i, "close", this.onclose.bind(this)),
      tn(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(i) {
    try {
      this.decoder.add(i);
    } catch (s) {
      this.onclose("parse error", s);
    }
  }
  ondecoded(i) {
    Ml(() => {
      this.emitReserved("packet", i);
    }, this.setTimeoutFn);
  }
  onerror(i) {
    this.emitReserved("error", i);
  }
  socket(i, s) {
    let r = this.nsps[i];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new Cx(this, i, s)), (this.nsps[i] = r)),
      r
    );
  }
  _destroy(i) {
    const s = Object.keys(this.nsps);
    for (const r of s) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(i) {
    const s = this.encoder.encode(i);
    for (let r = 0; r < s.length; r++) this.engine.write(s[r], i.options);
  }
  cleanup() {
    this.subs.forEach((i) => i()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close");
  }
  disconnect() {
    return this._close();
  }
  onclose(i, s) {
    var r;
    this.cleanup(),
      (r = this.engine) === null || r === void 0 || r.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", i, s),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const i = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const s = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        i.skipReconnect ||
          (this.emitReserved("reconnect_attempt", i.backoff.attempts),
          !i.skipReconnect &&
            i.open((l) => {
              l
                ? ((i._reconnecting = !1),
                  i.reconnect(),
                  this.emitReserved("reconnect_error", l))
                : i.onreconnect();
            }));
      }, s);
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        });
    }
  }
  onreconnect() {
    const i = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", i);
  }
}
const $s = {};
function ll(e, i) {
  typeof e == "object" && ((i = e), (e = void 0)), (i = i || {});
  const s = ED(e, i.path || "/socket.io"),
    r = s.source,
    l = s.id,
    c = s.path,
    f = $s[l] && c in $s[l].nsps,
    d = i.forceNew || i["force new connection"] || i.multiplex === !1 || f;
  let p;
  return (
    d ? (p = new oh(r, i)) : ($s[l] || ($s[l] = new oh(r, i)), (p = $s[l])),
    s.query && !i.query && (i.query = s.queryKey),
    p.socket(s.path, i)
  );
}
Object.assign(ll, { Manager: oh, Socket: Cx, io: ll, connect: ll });
const Xe = ll("http://localhost:5000", { withCredentials: !0 }),
  UD = () => {
    const [e, i] = E.useState(null),
      [s, r] = E.useState(""),
      [l, c] = E.useState([]),
      [f, d] = E.useState(null),
      [p, m] = E.useState([]),
      [y, b] = E.useState(""),
      [x, O] = E.useState(!1),
      A = E.useRef(),
      M = E.useRef(null),
      R = (K) =>
        new Date(K).toLocaleString([], { hour: "2-digit", minute: "2-digit" }),
      C = async () => {
        try {
          const K = await Ot.get("http://localhost:5000/api/auth/me", {
            withCredentials: !0,
          });
          i(K.data), Xe.emit("addUser", K.data._id);
        } catch {
          ht.error("Failed to load user");
        }
      },
      B = async () => {
        try {
          const K = await Ot.get("http://localhost:5000/api/chat", {
              withCredentials: !0,
            }),
            W = Array.isArray(K.data) ? K.data : [];
          c(W), W.length > 0 && !f && d(W[0]);
        } catch {
          ht.error("Failed to load chats");
        }
      },
      N = async (K) => {
        try {
          const W = await Ot.get(`http://localhost:5000/api/messages/${K}`, {
            withCredentials: !0,
          });
          m(W.data);
        } catch {
          ht.error("Failed to load messages");
        }
      };
    E.useEffect(() => {
      C(), B();
    }, []),
      E.useEffect(() => {
        f?._id && (N(f._id), Xe.emit("joinRoom", f._id));
      }, [f]),
      E.useEffect(() => {
        const K = (W) => {
          W.chat._id === f?._id && m((ct) => [...ct, W]), B();
        };
        return (
          Xe.on("newMessage", K),
          Xe.on("typing", (W) => {
            W === f?._id && O(!0);
          }),
          Xe.on("stopTyping", (W) => {
            W === f?._id && O(!1);
          }),
          () => {
            Xe.off("newMessage", K), Xe.off("typing"), Xe.off("stopTyping");
          }
        );
      }, [f]);
    const G = (K) => {
        b(K.target.value),
          Xe.emit("typing", f._id),
          M.current && clearTimeout(M.current),
          (M.current = setTimeout(() => {
            Xe.emit("stopTyping", f._id);
          }, 2e3));
      },
      k = async () => {
        if (!(!y.trim() || !f?._id))
          try {
            const K = await Ot.post(
              "http://localhost:5000/api/messages/send",
              { chatId: f._id, content: y },
              { withCredentials: !0 }
            );
            b(""),
              m((W) => [...W, K.data]),
              Xe.emit("newMessage", K.data),
              Xe.emit("stopTyping", f._id);
          } catch {
            ht.error("Failed to send message");
          }
      },
      J = async () => {
        if (s.trim())
          try {
            const K = await Ot.post(
              "http://localhost:5000/api/chat",
              { email: s },
              { withCredentials: !0 }
            );
            r(""),
              c((W) =>
                W.find((dt) => dt._id === K.data._id) ? W : [K.data, ...W]
              ),
              d(K.data);
          } catch {
            ht.error("User not found or cannot start chat");
          }
      };
    E.useEffect(() => {
      A.current?.scrollIntoView({ behavior: "smooth" });
    }, [p]);
    const Z = (K) => {
        const W = {};
        return (
          K.forEach((ct) => {
            const dt = new Date(ct.createdAt).toDateString();
            W[dt] || (W[dt] = []), W[dt].push(ct);
          }),
          W
        );
      },
      Q = (K) => {
        const W = new Date().toDateString(),
          ct = new Date(Date.now() - 864e5).toDateString();
        return K === W ? "Today" : K === ct ? "Yesterday" : K;
      };
    return T.jsxs("div", {
      className: "h-screen flex flex-col sm:flex-row p-2 bg-gray-50",
      children: [
        T.jsx(fv, {}),
        T.jsxs("div", {
          className: "sm:w-1/4 w-full sm:pr-4 mb-4 sm:mb-0 border-r",
          children: [
            T.jsx("h2", {
              className: "text-lg font-semibold mb-2",
              children: "Chats",
            }),
            T.jsx("input", {
              type: "email",
              value: s,
              onChange: (K) => r(K.target.value),
              placeholder: "Start chat by email",
              className: "w-full mb-2 px-3 py-2 border rounded",
            }),
            T.jsx("button", {
              onClick: J,
              className:
                "w-full bg-blue-600 text-white px-3 py-2 mb-4 rounded cursor-pointer",
              children: "Start Chat",
            }),
            l.length === 0
              ? T.jsx("p", {
                  className: "text-sm text-gray-500",
                  children: "No chats yet",
                })
              : l.map((K) => {
                  const W = K.users.find((ct) => ct._id !== e?._id);
                  return T.jsxs(
                    "div",
                    {
                      onClick: () => d(K),
                      className: `cursor-pointer px-3 py-2 rounded mb-2 ${
                        f?._id === K._id ? "bg-blue-200" : "hover:bg-gray-100"
                      }`,
                      children: [
                        T.jsxs("div", {
                          className: "font-medium",
                          children: [
                            W?.name || "Self",
                            " (",
                            W?.role || e?.role,
                            ")",
                          ],
                        }),
                        K.latestMessage &&
                          T.jsx("div", {
                            className: "text-xs text-gray-500 truncate",
                            children: K.latestMessage.content,
                          }),
                      ],
                    },
                    K._id
                  );
                }),
          ],
        }),
        T.jsx("div", {
          className: "sm:w-3/4 w-full flex flex-col border rounded-md h-[85vh]",
          children: f
            ? T.jsxs(T.Fragment, {
                children: [
                  T.jsxs("div", {
                    className: "bg-blue-100 p-2 font-semibold rounded-t-md",
                    children: [
                      "Chat with",
                      " ",
                      f.users.find((K) => K._id !== e?._id)?.name || "Self",
                    ],
                  }),
                  T.jsxs("div", {
                    className: "flex-1 overflow-y-auto p-4",
                    children: [
                      Object.entries(Z(p)).map(([K, W], ct) =>
                        T.jsxs(
                          "div",
                          {
                            children: [
                              T.jsx("div", {
                                className:
                                  "text-center text-sm text-gray-500 my-2",
                                children: Q(K),
                              }),
                              W.map((dt, oe) => {
                                const de =
                                    dt.sender === e?._id ||
                                    dt.sender?._id === e?._id,
                                  Ht = dt.readBy?.length > 1;
                                return T.jsxs(
                                  "div",
                                  {
                                    ref: A,
                                    className: `mb-2 px-4 py-2 rounded-lg max-w-[75%] break-words ${
                                      de
                                        ? "ml-auto bg-green-100 text-right w-fit"
                                        : "mr-auto bg-yellow-100 text-left w-fit"
                                    }`,
                                    children: [
                                      T.jsx("div", { children: dt.content }),
                                      T.jsxs("div", {
                                        className:
                                          "text-xs text-gray-500 mt-1 flex justify-end gap-1",
                                        children: [
                                          R(dt.createdAt),
                                          de &&
                                            T.jsx("span", {
                                              children: Ht ? "✓✓" : "✓",
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  oe
                                );
                              }),
                            ],
                          },
                          ct
                        )
                      ),
                      x &&
                        T.jsx("div", {
                          className: "text-sm italic text-gray-400 mb-2",
                          children: "Typing...",
                        }),
                    ],
                  }),
                  T.jsxs("div", {
                    className: "p-2 border-t flex gap-2",
                    children: [
                      T.jsx("input", {
                        type: "text",
                        value: y,
                        onChange: G,
                        placeholder: "Type your message",
                        className: "flex-1 px-3 py-2 border rounded",
                      }),
                      T.jsx("button", {
                        onClick: k,
                        className:
                          "bg-blue-600 text-white px-4 py-2 rounded cursor-pointer",
                        children: "Send",
                      }),
                    ],
                  }),
                ],
              })
            : T.jsx("div", {
                className: "m-auto text-gray-500",
                children: "Select or start a chat to begin messaging.",
              }),
        }),
      ],
    });
  };
function VD() {
  const [e, i] = E.useState(null),
    [s, r] = E.useState(!1);
  return (
    E.useEffect(() => {
      (async () => {
        try {
          const c = await fetch("http://localhost:5000/api/auth/me", {
            credentials: "include",
          });
          if (c.ok) {
            const f = await c.json();
            i(f);
          } else i(null);
        } catch {
          i(null);
        } finally {
          r(!0);
        }
      })();
    }, []),
    s
      ? T.jsxs(T.Fragment, {
          children: [
            T.jsxs(xE, {
              children: [
                T.jsx(JR, {}),
                T.jsxs(JS, {
                  children: [
                    T.jsx(We, {
                      path: "/",
                      element: e
                        ? T.jsx(W0, { to: "/dashboard" })
                        : T.jsxs(T.Fragment, {
                            children: [
                              T.jsx(Gb, {}),
                              T.jsx(WR, {}),
                              T.jsx(IR, {}),
                              T.jsx(eC, {}),
                            ],
                          }),
                    }),
                    T.jsx(We, { path: "/auth/login", element: T.jsx(jO, {}) }),
                    T.jsx(We, { path: "/auth/signup", element: T.jsx(LO, {}) }),
                    T.jsx(We, { path: "/me", element: T.jsx(VO, {}) }),
                    T.jsx(We, {
                      path: "/create-profile",
                      element: T.jsx(Da, { children: T.jsx(UO, {}) }),
                    }),
                    T.jsx(We, {
                      path: "/profile",
                      element: T.jsx(Da, { children: T.jsx(zO, {}) }),
                    }),
                    T.jsx(We, {
                      path: "/matching",
                      element: T.jsx(Da, { children: T.jsx(qO, {}) }),
                    }),
                    T.jsx(We, {
                      path: "/dashboard",
                      element: T.jsx(Da, { children: T.jsx(BO, {}) }),
                    }),
                    T.jsx(We, {
                      path: "/goals",
                      element: T.jsx(Da, { children: T.jsx(PO, {}) }),
                    }),
                    T.jsx(We, {
                      path: "/messages",
                      element: T.jsx(Da, { children: T.jsx(UD, {}) }),
                    }),
                  ],
                }),
              ],
            }),
            T.jsx(fv, {
              position: "top-right",
              autoClose: 3e3,
              hideProgressBar: !1,
              newestOnTop: !0,
              closeOnClick: !0,
              pauseOnFocusLoss: !0,
              draggable: !0,
              pauseOnHover: !0,
              theme: "light",
            }),
          ],
        })
      : null
  );
}
oS.createRoot(document.getElementById("root")).render(
  T.jsx(Nt.StrictMode, { children: T.jsx(VD, {}) })
);
