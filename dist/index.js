import Ce from "react";
import { Switch as cr } from "antd";
import dr from "classnames";
var Z = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function vr() {
  if (Se)
    return A;
  Se = 1;
  var P = Ce, y = Symbol.for("react.element"), j = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, W = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(_, c, S) {
    var p, g = {}, m = null, Y = null;
    S !== void 0 && (m = "" + S), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (Y = c.ref);
    for (p in c)
      T.call(c, p) && !$.hasOwnProperty(p) && (g[p] = c[p]);
    if (_ && _.defaultProps)
      for (p in c = _.defaultProps, c)
        g[p] === void 0 && (g[p] = c[p]);
    return { $$typeof: y, type: _, key: m, ref: Y, props: g, _owner: W.current };
  }
  return A.Fragment = j, A.jsx = x, A.jsxs = x, A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function pr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var P = Ce, y = Symbol.for("react.element"), j = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), _ = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), Q = Symbol.iterator, Pe = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var w = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        xe("error", e, t);
      }
    }
    function xe(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ke = !1, De = !1, Fe = !1, Ae = !1, Ie = !1, ee;
    ee = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === T || e === $ || Ie || e === W || e === S || e === p || Ae || e === Y || ke || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === x || e.$$typeof === _ || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case j:
          return "Portal";
        case $:
          return "Profiler";
        case W:
          return "StrictMode";
        case S:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return re(r) + ".Consumer";
          case x:
            var t = e;
            return re(t._context) + ".Provider";
          case c:
            return $e(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case m: {
            var o = e, u = o._payload, i = o._init;
            try {
              return b(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, k = 0, te, ne, ae, ie, oe, ue, se;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (k === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        k++;
      }
    }
    function Le() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, e, {
              value: te
            }),
            info: E({}, e, {
              value: ne
            }),
            warn: E({}, e, {
              value: ae
            }),
            error: E({}, e, {
              value: ie
            }),
            group: E({}, e, {
              value: oe
            }),
            groupCollapsed: E({}, e, {
              value: ue
            }),
            groupEnd: E({}, e, {
              value: se
            })
          });
        }
        k < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = w.ReactCurrentDispatcher, B;
    function L(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var J = !1, N;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ne();
    }
    function le(e, r) {
      if (!e || J)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (v) {
              n = v;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, f = d.length - 1; s >= 1 && f >= 0 && a[s] !== d[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== d[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== d[f]) {
                    var h = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, h), h;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        J = !1, U.current = u, Le(), Error.prepareStackTrace = o;
      }
      var C = e ? e.displayName || e.name : "", R = C ? L(C) : "";
      return typeof e == "function" && N.set(e, R), R;
    }
    function Ve(e, r, t) {
      return le(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Me(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case S:
          return L("Suspense");
        case p:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case g:
            return V(e.type, r, t);
          case m: {
            var n = e, o = n._payload, u = n._init;
            try {
              return V(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var D = Object.prototype.hasOwnProperty, ce = {}, de = w.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, o) {
      {
        var u = Function.call.bind(D);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(o), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, M(o), l("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Be = Array.isArray;
    function q(e) {
      return Be(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (qe(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ve(e);
    }
    var F = w.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, be, K;
    K = {};
    function Ge(e) {
      if (D.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = b(F.current.type);
        K[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(F.current.type), e.ref), K[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          he || (he = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          be || (be = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, o) {
      {
        var u, i = {}, a = null, d = null;
        t !== void 0 && (pe(t), a = "" + t), ze(r) && (pe(r.key), a = "" + r.key), Ge(r) && (d = r.ref, Xe(r, o));
        for (u in r)
          D.call(r, u) && !Ke.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, f), d && Ze(i, f);
        }
        return Qe(e, a, d, o, n, F.current, i);
      }
    }
    var G = w.ReactCurrentOwner, ge = w.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function ye() {
      {
        if (G.current) {
          var e = b(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var _e = {};
    function tr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function me(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + b(e._owner.type) + "."), O(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), O(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && me(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = je(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              X(i.value) && me(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = b(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            O(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    var Re = {};
    function Te(e, r, t, n, o, u) {
      {
        var i = We(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = rr(o);
          d ? a += d : a += ye();
          var s;
          e === null ? s = "null" : q(e) ? s = "array" : e !== void 0 && e.$$typeof === y ? (s = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = er(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (q(h)) {
                for (var C = 0; C < h.length; C++)
                  Ee(h[C], e);
                Object.freeze && Object.freeze(h);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(h, e);
        }
        if (D.call(r, "key")) {
          var R = b(e), v = Object.keys(r).filter(function(lr) {
            return lr !== "key";
          }), H = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Re[R + H]) {
            var fr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            l(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, R, fr, R), Re[R + H] = !0;
          }
        }
        return e === T ? ar(f) : nr(f), f;
      }
    }
    function ir(e, r, t) {
      return Te(e, r, t, !0);
    }
    function or(e, r, t) {
      return Te(e, r, t, !1);
    }
    var ur = or, sr = ir;
    I.Fragment = T, I.jsx = ur, I.jsxs = sr;
  }()), I;
}
process.env.NODE_ENV === "production" ? Z.exports = vr() : Z.exports = pr();
var hr = Z.exports;
const Oe = hr.jsx, br = "_buttonSwitch-container_f2o11_1", gr = {
  "buttonSwitch-container": "_buttonSwitch-container_f2o11_1",
  buttonSwitchContainer: br
}, Er = ({
  className: P,
  containerClassName: y,
  ...j
}) => /* @__PURE__ */ Oe(
  "div",
  {
    className: dr(
      gr["buttonSwitch-container"],
      y
    ),
    children: /* @__PURE__ */ Oe(cr, { className: P, ...j })
  }
);
export {
  Er as ButtonSwitch
};
