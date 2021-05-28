
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React, global.ReactDOM));
}(this, (function (React, ReactDOM) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose$1(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
  }

  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit$1(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var propTypes = {
    exports: {}
  };
  var reactIs = {
    exports: {}
  };
  var reactIs_development = {};
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if (_typeof(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }

  {
    reactIs.exports = reactIs_development;
  }
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  /* eslint-disable no-unused-vars */


  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118


      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var printWarning$1 = function printWarning$1() {};

  {
    var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning$1 = function printWarning$1(text) {
      var message = 'Warning: ' + text;

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */


  function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has$1(typeSpecs, typeSpecName)) {
          var error; // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.

          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
              err.name = 'Invariant Violation';
              throw err;
            }

            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
          } catch (ex) {
            error = ex;
          }

          if (error && !(error instanceof Error)) {
            printWarning$1((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }

          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning$1('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }
  /**
   * Resets warning cache when testing.
   *
   * @private
   */


  checkPropTypes$1.resetWarningCache = function () {
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes$1;
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactIs$1 = reactIs.exports;
  var assign = objectAssign;
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var checkPropTypes = checkPropTypes_1;
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  var printWarning = function printWarning() {};

  {
    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */

    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }
    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */


    var ANONYMOUS = '<<anonymous>>'; // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */

    /*eslint-disable no-self-compare*/

    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */


    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    } // Make `instanceof Error` still work for returned errors.


    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }

      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret$1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;

            if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }

        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }

            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }

          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }

        var propValue = props[propName];

        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }

        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);

          if (error instanceof Error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        if (!ReactIs$1.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }

        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);

          if (type === 'symbol') {
            return String(value);
          }

          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }

      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }

        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }

        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);

            if (error instanceof Error) {
              return error;
            }
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (typeof checker !== 'function') {
          printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];

          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }

      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }

        for (var key in shapeTypes) {
          var checker = shapeTypes[key];

          if (!checker) {
            continue;
          }

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        } // We need to check all keys in case some are required but missing from
        // props.


        var allKeys = assign({}, props[propName], shapeTypes);

        for (var key in allKeys) {
          var checker = shapeTypes[key];

          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (_typeof(propValue)) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;

        case 'boolean':
          return !propValue;

        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }

          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);

          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;

            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;

                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;

        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      } // falsy value can't be a Symbol


      if (!propValue) {
        return false;
      } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      } // Fallback for non-spec compliant Symbols which are polyfilled.


      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    } // Equivalent of `typeof` but with special handling for array and regexp.


    function getPropType(propValue) {
      var propType = _typeof(propValue);

      if (Array.isArray(propValue)) {
        return 'array';
      }

      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }

      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }

      return propType;
    } // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.


    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }

      var propType = getPropType(propValue);

      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }

      return propType;
    } // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"


    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);

      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;

        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;

        default:
          return type;
      }
    } // Returns class name of the object, if any.


    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }

      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */


  {
    var ReactIs = reactIs.exports; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }

  var PropTypes = propTypes.exports;
  var Trigger = /*#__PURE__*/React__default['default'].forwardRef(function Trigger(props, ref) {
    return /*#__PURE__*/React__default['default'].createElement("button", _extends({}, props, {
      ref: ref,
      type: "button",
      "data-emoji-trigger": true
    }));
  });
  var TabContext = /*#__PURE__*/React__default['default'].createContext({
    currentTab: null,
    setCurrentTab: function setCurrentTab() {}
  });

  function Tab(_ref) {
    var label = _ref.label,
        id = _ref.id,
        props = _objectWithoutProperties(_ref, ["label", "id"]);

    var _useContext = React.useContext(TabContext),
        currentTab = _useContext.currentTab,
        setCurrentTab = _useContext.setCurrentTab;

    var isSelected = id === currentTab;
    return /*#__PURE__*/React__default['default'].createElement("button", _extends({}, props, {
      "data-emoji-category-tab": true,
      role: "tab",
      id: id,
      "aria-selected": isSelected,
      "aria-controls": id + '-panel',
      onClick: function onClick() {
        return setCurrentTab(id);
      },
      "aria-label": label,
      tabIndex: !isSelected ? '-1' : undefined
    }));
  }

  function Tablist(props) {
    var tablistRef = React.useRef();
    var tabsRef = React.useRef([]);
    React.useEffect(function () {
      tabsRef.current = Array.from(tablistRef.current.querySelectorAll('[role="tab"]'));
    }, [props.children]);

    var handleKeypress = function handleKeypress(e) {
      var currentTabIndex = tabsRef.current.findIndex(function (tab) {
        return tab === e.target;
      });

      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          var nextTabIndex = Math.min(currentTabIndex + 1, tabsRef.current.length - 1);
          tabsRef.current[nextTabIndex].click();
          tabsRef.current[nextTabIndex].focus();
          break;

        case 'ArrowLeft':
          e.preventDefault();
          var prevTabIndex = Math.max(currentTabIndex - 1, 0);
          tabsRef.current[prevTabIndex].click();
          tabsRef.current[prevTabIndex].focus();
          break;
      }
    };

    return /*#__PURE__*/React__default['default'].createElement("div", _extends({}, props, {
      ref: tablistRef,
      onKeyDown: handleKeypress,
      role: "tablist"
    }));
  }

  function Tabpanel(_ref) {
    var children = _ref.children,
        id = _ref.id,
        props = _objectWithoutProperties(_ref, ["children", "id"]);

    var _useContext = React.useContext(TabContext),
        currentTab = _useContext.currentTab;

    var isSelected = currentTab === id;
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({}, props, {
      role: "tabpanel",
      id: id + '-panel',
      "aria-labelledby": id,
      hidden: !isSelected,
      "data-emoji-list": true
    }), isSelected && children);
  }

  function Tabs(_ref) {
    var children = _ref.children,
        initialTab = _ref.initialTab;

    var _useState = React.useState(function () {
      return initialTab;
    }),
        _useState2 = _slicedToArray(_useState, 2),
        currentTab = _useState2[0],
        setCurrentTab = _useState2[1];

    return /*#__PURE__*/React__default['default'].createElement(TabContext.Provider, {
      value: {
        currentTab: currentTab,
        setCurrentTab: setCurrentTab
      }
    }, children);
  }

  Tabs.Tab = Tab;
  Tabs.Tablist = Tablist;
  Tabs.Tabpanel = Tabpanel;
  var CATEGORIES = {
    ACTIVITIES: 'Activities',
    ALL: 'All',
    ANIMALS: 'Animals',
    FACES: 'Faces and people',
    FLAGS: 'Flags',
    FOODS: 'Food and drink',
    NATURE: 'Nature',
    OBJECTS: 'Objects',
    SYMBOLS: 'Symbols',
    TRAVEL_AND_PLACES: 'Travel and places'
  };

  var IconBase = function IconBase(pathD) {
    return function (_ref) {
      var _ref$size = _ref.size,
          size = _ref$size === void 0 ? 16 : _ref$size;
      return /*#__PURE__*/React__default['default'].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size
      }, /*#__PURE__*/React__default['default'].createElement("path", {
        d: pathD
      }));
    };
  };

  var IconActivity = IconBase('M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113');
  var IconFlags = IconBase('M0 0l6 24h2L2 0zm21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.6 3h7.8l2 8H8.6l-2-8zm8.8 10l-2.9 1.9-.4-1.9h3.3zm3.6 0l-1.5-6h2l2 8H16l3-2z');
  var IconFoods = IconBase('M17 5c-1.8 0-2.9.4-3.7 1 .5-1.3 1.8-3 4.7-3a1 1 0 000-2c-3 0-4.6 1.3-5.5 2.5l-.2.2c-.6-1.9-1.5-3.7-3-3.7C8.5 0 7.7.3 7 1c-2 1.5-1.7 2.9-.5 4C3.6 5.2 0 7.4 0 13c0 4.6 5 11 9 11 2 0 2.4-.5 3-1 .6.5 1 1 3 1 4 0 9-6.4 9-11 0-6-4-8-7-8M8.2 2.5c.7-.5 1-.5 1-.5.4.2 1 1.4 1.4 3-1.6-.6-2.8-1.3-3-1.8l.6-.7M15 22c-1 0-1.2-.1-1.6-.4l-.1-.2a2 2 0 00-2.6 0l-.1.2c-.4.3-.5.4-1.6.4-2.8 0-7-5.4-7-9C2 7 6.5 7 7 7c2 0 2.5.4 3.4 1.2l.3.3a2 2 0 002.6 0l.3-.3c1-.8 1.5-1.2 3.4-1.2.5 0 5 .1 5 6 0 3.6-4.2 9-7 9');
  var IconNature = IconBase('M19 0c-1 0-2.2.8-3.1 1.5-1.3-.4-2.6-.5-3.9-.5-1.3 0-2.6.1-3.9.5-.9-.7-2-1.5-3-1.5C3.4 0 0 2.7 0 7c0 2.5.3 4.3 1 5l1.3 1c.2 3.1 1 5.2 2.6 6.3.9.6 2.2 1 3.2 1.1L8 21c0 1.8 2.4 3 4 3s4-1.2 4-3v-.6c2.5-.4 5.4-1.9 5.9-7.6.3-.2.8-.5 1-.8.8-.7 1.1-2.5 1.1-5 0-4.3-3.4-7-5-7M3.1 9.1l-.9 1.3C2.2 10 2 9 2 7c0-3.3 2.5-5 3-5 .3 0 .8.2 1.4.6A8 8 0 004 7.8c-.1.6-.4.9-.8 1.3M12 22c-.9 0-2-.7-2-1 0-.7.5-1.2 1-1.6v.6a1 1 0 102 0v-.6c.5.4 1 1 1 1.6 0 .3-1.1 1-2 1m3-3.5a4.8 4.8 0 00-1.3-1c1.1-.5 2.3-1.3 2.3-2.2 0-1.8-1.8-2.2-4-2.2s-4 .4-4 2.2c0 .9 1.2 1.7 2.3 2.2a4.8 4.8 0 00-1.3 1c-1 0-2.2-.3-3-.8-1.3-1-1.8-3-1.8-6.5.5-.9 1.5-1.5 1.8-3.1C6 6 7.4 4.4 8.4 3.5c1-.3 2.2-.5 3.5-.5 1.5 0 2.7.2 3.8.6C16.7 4.5 18 6 18 8c.3 1.6 1.3 2.2 1.8 3l.1.2c0 6-2 7-4.9 7.2m6.6-8.2v-.2a7.6 7.6 0 00-.8-1 3 3 0 01-.8-1.3 8 8 0 00-2.4-5.1c.6-.4 1-.6 1.3-.6.6 0 3 1.7 3.1 5 0 1.8-.3 3.2-.4 3.2M15.5 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3m-7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3');
  var IconObjects = IconBase('M14.7 12.4c-.8 0-1.1-.8-1.5-1.8-.5-1-.7-1.5-1.2-1.5s-.8.5-1.3 1.5c-.4 1-.8 1.8-1.6 1.8h-.3c-.5-.2-.8-.7-1.3-1.8l-.2-1A3 3 0 007 9H7a1 1 0 010-2c1.7 0 2 1.4 2.2 2.1.5-1 1.3-2 2.8-2 1.5 0 2.3 1.1 2.7 2.1.2-.8.6-2.2 2.3-2.2a1 1 0 110 2c-.2 0-.3.5-.3.7a6.5 6.5 0 01-.3 1c-.5 1-.8 1.7-1.7 1.7M12 0a9 9 0 00-5 16.5V21s2 3 5 3 5-3 5-3v-4.5A9 9 0 0012 0zm0 2a7 7 0 110 14 7 7 0 010-14zM9 17.5a9 9 0 006 0v.8a7 7 0 01-3 .7 7 7 0 01-3-.7zm.2 3a8.9 8.9 0 002.8.5c1 0 1.9-.2 2.8-.5-.6.7-1.6 1.5-2.8 1.5-1.1 0-2.1-.8-2.8-1.5z');
  var IconPeople = IconBase('M8 7a2 2 0 100 4 2 2 0 000-4m8 0a2 2 0 100 4 2 2 0 000-4m-.8 8c-.7 1.2-1.8 2-3.3 2-1.5 0-2.7-.8-3.4-2H15m3-2H6a6 6 0 1012 0M12 0a12 12 0 100 24 12 12 0 000-24m0 22a10 10 0 110-20 10 10 0 010 20');
  var IconPlaces = IconBase('M22.5 9.5l-1-.4-.1-.1h.6c.6 0 1-.4 1-1 0-1-.9-2-2-2h-.6l-.8-1.7C19.3 3 18.1 2 16.8 2H7.2C6 2 4.7 3 4.4 4.3L3.6 6H3C1.9 6 1 7 1 8c0 .6.4 1 1 1h.6v.1l-1 .4a2 2 0 00-1.4 2l.7 7.6a1 1 0 001 .9H3v1c0 1.1.9 2 2 2h2a2 2 0 002-2v-1h6v1c0 1.1.9 2 2 2h2a2 2 0 002-2v-1h1.1a1 1 0 001-.9l.7-7.5a2 2 0 00-1.3-2.1M6.3 4.9c.1-.5.5-.9 1-.9h9.5c.4 0 .8.4 1 .9L19.2 9H4.7zM7 21H5v-1h2zm12 0h-2v-1h2zm2.2-3H2.8l-.7-6.6.9-.4h18l.9.4zM6.5 12a2.5 2.5 0 100 5 2.5 2.5 0 000-5m0 3a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5m11-3a2.5 2.5 0 100 5 2.5 2.5 0 000-5m0 3a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5');
  var IconRecent = IconBase('M12 0a12 12 0 100 24 12 12 0 000-24m0 22a10 10 0 110-20 10 10 0 010 20m1-18h-2v7H9v2h2v2h2v-2h4v-2h-4z');
  var IconSymbols = IconBase('M0 0h11v2H0zm4 11h3V6h4V4H0v2h4zm11.5 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5m0-3c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5m6 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5m0 3a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.5m.5-9l-9 9 1.5 1.5 9-9zm-5-2c2.2 0 4-1.1 4-2.5V2s1-.2 1.5 1c.5 1 .5 3 .5 3s1-1.1 1-3.1c0-3-3-2.9-3-2.9h-2v6.3a5.9 5.9 0 00-2-.3c-2.2 0-4 1.1-4 2.5s1.8 2.5 4 2.5m-6.7 9.5l-1.5-1.6A47.5 47.5 0 017.4 20l-2-2.2L7 16c.3-.4.3-1 .3-1.4 0-.6-.2-1.2-.8-1.7-.5-.6-1.3-1-2.3-1a3 3 0 00-2.4 1c-.5.6-.8 1.1-.8 1.7 0 .9.4 1.8 1.3 2.9-.9.6-1.5 1.2-1.8 1.7a3.5 3.5 0 00-.6 1.9c0 .8.3 1.5 1 2 .6.6 1.4.9 2.4.9a8 8 0 003.8-1.1l1 1.1h2.9L9 21.6l1.3-1.1zM3.6 14a1 1 0 01.7-.3c.3 0 .6 0 .7.3a.8.8 0 01.3.6c0 .5-.4 1.1-1.2 1.8-.6-.6-.8-1.2-.8-1.7a.9.9 0 01.3-.7m.1 7.9c-.4 0-.7-.1-1-.3-.3-.3-.4-.5-.4-.8 0-.6.5-1.3 1.5-2.1L6 21.2a5 5 0 01-2.3.8');

  var toId = function toId(str) {
    return str.replace(/\W/g, '_');
  };

  var toPx = function toPx(v) {
    return "".concat(v, "px");
  };

  var getNthSibling = function getNthSibling(elem, index) {
    if (!elem || index === 0) return elem;

    if (Math.sign(index) === 1) {
      return index > 1 ? getNthSibling(elem.nextElementSibling, index - 1) : elem.nextElementSibling;
    } else {
      return index < -1 ? getNthSibling(elem.previousElementSibling, index + 1) : elem.previousElementSibling;
    }
  };

  function CategoriesTablist(props) {
    return /*#__PURE__*/React__default['default'].createElement(Tabs.Tablist, {
      "aria-label": "Emoji Categories",
      "data-emoji-category-tablist": true
    }, /*#__PURE__*/React__default['default'].createElement(Tabs.Tab, {
      id: toId(CATEGORIES.ALL),
      label: "Recent and all emoji"
    }, /*#__PURE__*/React__default['default'].createElement(IconRecent, null)), /*#__PURE__*/React__default['default'].createElement(Tabs.Tab, {
      id: toId(CATEGORIES.FACES),
      label: CATEGORIES.FACES + ' emoji'
    }, /*#__PURE__*/React__default['default'].createElement(IconPeople, null)), /*#__PURE__*/React__default['default'].createElement(Tabs.Tab, {
      id: toId(CATEGORIES.ANIMALS),
      label: CATEGORIES.ANIMALS + ' emoji'
    }, /*#__PURE__*/React__default['default'].createElement(IconNature, null)), /*#__PURE__*/React__default['default'].createElement(Tabs.Tab, {
      id: toId(CATEGORIES.FOODS),
      label: CATEGORIES.FOODS + ' emoji'
    }, /*#__PURE__*/React__default['default'].createElement(IconFoods, null)), /*#__PURE__*/React__default['default'].createElement(Tabs.Tab, {
      id: toId(CATEGORIES.ACTIVITIES),
      label: CATEGORIES.ACTIVITIES + ' emoji'
    }, /*#__PURE__*/React__default['default'].createElement(IconActivity, null)), /*#__PURE__*/React__default['default'].createElement(Tabs.Tab, {
      id: toId(CATEGORIES.TRAVEL_AND_PLACES),
      label: CATEGORIES.TRAVEL_AND_PLACES + ' emoji'
    }, /*#__PURE__*/React__default['default'].createElement(IconPlaces, null)), /*#__PURE__*/React__default['default'].createElement(Tabs.Tab, {
      id: toId(CATEGORIES.OBJECTS),
      label: CATEGORIES.OBJECTS + ' emoji'
    }, /*#__PURE__*/React__default['default'].createElement(IconObjects, null)), /*#__PURE__*/React__default['default'].createElement(Tabs.Tab, {
      id: toId(CATEGORIES.SYMBOLS),
      label: CATEGORIES.SYMBOLS + ' emoji'
    }, /*#__PURE__*/React__default['default'].createElement(IconSymbols, null)), /*#__PURE__*/React__default['default'].createElement(Tabs.Tab, {
      id: toId(CATEGORIES.FLAGS),
      label: CATEGORIES.FLAGS + ' emoji'
    }, /*#__PURE__*/React__default['default'].createElement(IconFlags, null)));
  }

  function CategoryTabpanel(_ref) {
    var category = _ref.category,
        emoji = _ref.emoji,
        onClick = _ref.onClick;
    var buttonsPerRow = React.useRef(1);

    var _useState = React.useState(''),
        _useState2 = _slicedToArray(_useState, 2),
        searchFilter = _useState2[0],
        setSearchFilter = _useState2[1];

    var containerWatchRef = React.useCallback(function (node) {
      if (node !== null) {
        var containerWidth = node.getBoundingClientRect().width;
        var buttonWidth = node.querySelector('[data-emoji-button]').getBoundingClientRect().width;
        buttonsPerRow.current = Math.floor(containerWidth / buttonWidth);
      }
    }, []);

    var handleEmojiClick = function handleEmojiClick(e) {
      if (e.target.hasAttribute('data-emoji-button')) {
        e.target.value = e.target.innerText;
        onClick(e);
      }
    };

    var getFocusTarget = function getFocusTarget(target, key) {
      switch (key) {
        case 'ArrowUp':
          return getNthSibling(target, -buttonsPerRow.current);

        case 'ArrowDown':
          return getNthSibling(target, buttonsPerRow.current);

        case 'ArrowLeft':
          return target.previousElementSibling;

        case 'ArrowRight':
          return target.nextElementSibling;

        default:
          return;
      }
    };

    var handleSearchFilter = function handleSearchFilter(evt) {
      setSearchFilter(evt.target.value);
    };

    var handleEmojiKeyboardNavigation = function handleEmojiKeyboardNavigation(e) {
      var nextTarget = getFocusTarget(e.target, e.key);

      if (nextTarget) {
        e.preventDefault();
        nextTarget.focus();
      }
    };

    var emojisToDisplay = !searchFilter ? emoji : emoji.filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2);

      _ref3[0];
      var names = _ref3[1];
      return names.some(function (name) {
        return name.toLowerCase().includes(searchFilter.toLowerCase());
      });
    });
    return /*#__PURE__*/React__default['default'].createElement(Tabs.Tabpanel, {
      id: toId(category)
    }, /*#__PURE__*/React__default['default'].createElement("input", {
      type: "text",
      placeholder: "Search ".concat(category, "..."),
      onChange: handleSearchFilter,
      "data-emoji-searchinput": ""
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      "data-emoji-scroll-list": "",
      ref: containerWatchRef,
      onClick: handleEmojiClick,
      onKeyDown: handleEmojiKeyboardNavigation
    }, emojisToDisplay.map(function (_ref4, index) {
      var _ref5 = _slicedToArray(_ref4, 2),
          emoji = _ref5[0],
          names = _ref5[1];

      return /*#__PURE__*/React__default['default'].createElement("button", {
        key: emoji,
        type: "button",
        "data-emoji-button": "",
        "data-emoji-list-index": index,
        "aria-label": names.join(' ')
      }, emoji);
    })));
  }

  var ACTIVITIES = [['🎃', ['jack_o_lantern']], ['🎄', ['christmas_tree']], ['🎆', ['fireworks']], ['🎇', ['sparkler']], ['✨', ['sparkles']], ['🎈', ['balloon']], ['🎉', ['tada']], ['🎊', ['confetti_ball']], ['🎋', ['tanabata_tree']], ['🎍', ['bamboo']], ['🎎', ['dolls']], ['🎏', ['flags']], ['🎐', ['wind_chime']], ['🎑', ['rice_scene']], ['🎀', ['ribbon']], ['🎁', ['gift']], ['🎗️', ['reminder_ribbon']], ['🎟️', ['admission_tickets']], ['🎫', ['ticket']], ['🎖️', ['medal']], ['🏆', ['trophy']], ['🏅', ['sports_medal']], ['🥇', ['first_place_medal']], ['🥈', ['second_place_medal']], ['🥉', ['third_place_medal']], ['⚽', ['soccer']], ['⚾', ['baseball']], ['🏀', ['basketball']], ['🏐', ['volleyball']], ['🏈', ['football']], ['🏉', ['rugby_football']], ['🎾', ['tennis']], ['🎱', ['8ball']], ['🎳', ['bowling']], ['🏏', ['cricket_bat_and_ball']], ['🏑', ['field_hockey_stick_and_ball']], ['🏒', ['ice_hockey_stick_and_puck']], ['🏓', ['table_tennis_paddle_and_ball']], ['🏸', ['badminton_racquet_and_shuttlecock']], ['🥊', ['boxing_glove']], ['🥋', ['martial_arts_uniform']], ['🥅', ['goal_net']], ['🎯', ['dart']], ['⛳', ['golf']], ['⛸️', ['ice_skate']], ['🎣', ['fishing_pole_and_fish']], ['🎽', ['running_shirt_with_sash']], ['🎿', ['ski']], ['🛷', ['sled']], ['🥌', ['curling_stone']], ['🎮', ['video_game']], ['🕹️', ['joystick']], ['🎲', ['game_die']], ['♠️', ['spades']], ['♥️', ['hearts']], ['♦️', ['diamonds']], ['♣️', ['clubs']], ['🃏', ['black_joker']], ['🀄', ['mahjong']], ['🎴', ['flower_playing_cards']]];
  var ANIMALS = [['🐵', ['monkey_face']], ['🐒', ['monkey']], ['🦍', ['gorilla']], ['🐶', ['dog']], ['🐕', ['dog2']], ['🐩', ['poodle']], ['🐺', ['wolf']], ['🦊', ['fox_face']], ['🐱', ['cat']], ['🐈', ['cat2']], ['🦁', ['lion_face']], ['🐯', ['tiger']], ['🐅', ['tiger2']], ['🐆', ['leopard']], ['🐴', ['horse']], ['🐎', ['racehorse']], ['🦄', ['unicorn_face']], ['🦓', ['zebra_face']], ['🦌', ['deer']], ['🐮', ['cow']], ['🐂', ['ox']], ['🐃', ['water_buffalo']], ['🐄', ['cow2']], ['🐷', ['pig']], ['🐖', ['pig2']], ['🐗', ['boar']], ['🐽', ['pig_nose']], ['🐏', ['ram']], ['🐑', ['sheep']], ['🐐', ['goat']], ['🐪', ['dromedary_camel']], ['🐫', ['camel']], ['🦒', ['giraffe_face']], ['🐘', ['elephant']], ['🦏', ['rhinoceros']], ['🐭', ['mouse']], ['🐁', ['mouse2']], ['🐀', ['rat']], ['🐹', ['hamster']], ['🐰', ['rabbit']], ['🐇', ['rabbit2']], ['🐿️', ['chipmunk']], ['🦔', ['hedgehog']], ['🦇', ['bat']], ['🐻', ['bear']], ['🐨', ['koala']], ['🐼', ['panda_face']], ['🐾', ['feet', 'paw_prints']], ['🦃', ['turkey']], ['🐔', ['chicken']], ['🐓', ['rooster']], ['🐣', ['hatching_chick']], ['🐤', ['baby_chick']], ['🐥', ['hatched_chick']], ['🐦', ['bird']], ['🐧', ['penguin']], ['🕊️', ['dove_of_peace']], ['🦅', ['eagle']], ['🦆', ['duck']], ['🦉', ['owl']], ['🐸', ['frog']], ['🐊', ['crocodile']], ['🐢', ['turtle']], ['🦎', ['lizard']], ['🐍', ['snake']], ['🐲', ['dragon_face']], ['🐉', ['dragon']], ['🦕', ['sauropod']], ['🦖', ['t-rex']], ['🐳', ['whale']], ['🐋', ['whale2']], ['🐬', ['dolphin', 'flipper']], ['🐟', ['fish']], ['🐠', ['tropical_fish']], ['🐡', ['blowfish']], ['🦈', ['shark']], ['🐙', ['octopus']], ['🐚', ['shell']], ['🦀', ['crab']], ['🦐', ['shrimp']], ['🦑', ['squid']], ['🐌', ['snail']], ['🦋', ['butterfly']], ['🐛', ['bug']], ['🐜', ['ant']], ['🐝', ['bee', 'honeybee']], ['🐞', ['beetle']], ['🦗', ['cricket']], ['🕷️', ['spider']], ['🕸️', ['spider_web']], ['🦂', ['scorpion']], ['💐', ['bouquet']], ['🌸', ['cherry_blossom']], ['💮', ['white_flower']], ['🏵️', ['rosette']], ['🌹', ['rose']], ['🥀', ['wilted_flower']], ['🌺', ['hibiscus']], ['🌻', ['sunflower']], ['🌼', ['blossom']], ['🌷', ['tulip']], ['🌱', ['seedling']], ['🌲', ['evergreen_tree']], ['🌳', ['deciduous_tree']], ['🌴', ['palm_tree']], ['🌵', ['cactus']], ['🌾', ['ear_of_rice']], ['🌿', ['herb']], ['☘️', ['shamrock']], ['🍀', ['four_leaf_clover']], ['🍁', ['maple_leaf']], ['🍂', ['fallen_leaf']], ['🍃', ['leaves']]];
  var FACES_AND_PEOPLE = [['😀', ['grinning']], ['😁', ['grin']], ['😂', ['joy']], ['🤣', ['rolling_on_the_floor_laughing']], ['😃', ['smiley']], ['😄', ['smile']], ['😅', ['sweat_smile']], ['😆', ['laughing', 'satisfied']], ['😉', ['wink']], ['😊', ['blush']], ['😋', ['yum']], ['😎', ['sunglasses']], ['😍', ['heart_eyes']], ['😘', ['kissing_heart']], ['😗', ['kissing']], ['😙', ['kissing_smiling_eyes']], ['😚', ['kissing_closed_eyes']], ['☺️', ['relaxed']], ['🙂', ['slightly_smiling_face']], ['🤗', ['hugging_face']], ['🤩', ['star-struck', 'grinning_face_with_star_eyes']], ['🤔', ['thinking_face']], ['🤨', ['face_with_raised_eyebrow', 'face_with_one_eyebrow_raised']], ['😐', ['neutral_face']], ['😑', ['expressionless']], ['😶', ['no_mouth']], ['🙄', ['face_with_rolling_eyes']], ['😏', ['smirk']], ['😣', ['persevere']], ['😥', ['disappointed_relieved']], ['😮', ['open_mouth']], ['🤐', ['zipper_mouth_face']], ['😯', ['hushed']], ['😪', ['sleepy']], ['😫', ['tired_face']], ['😴', ['sleeping']], ['😌', ['relieved']], ['😛', ['stuck_out_tongue']], ['😜', ['stuck_out_tongue_winking_eye']], ['😝', ['stuck_out_tongue_closed_eyes']], ['🤤', ['drooling_face']], ['😒', ['unamused']], ['😓', ['sweat']], ['😔', ['pensive']], ['😕', ['confused']], ['🙃', ['upside_down_face']], ['🤑', ['money_mouth_face']], ['😲', ['astonished']], ['☹️', ['white_frowning_face']], ['🙁', ['slightly_frowning_face']], ['😖', ['confounded']], ['😞', ['disappointed']], ['😟', ['worried']], ['😤', ['triumph']], ['😢', ['cry']], ['😭', ['sob']], ['😦', ['frowning']], ['😧', ['anguished']], ['😨', ['fearful']], ['😩', ['weary']], ['🤯', ['exploding_head', 'shocked_face_with_exploding_head']], ['😬', ['grimacing']], ['😰', ['cold_sweat']], ['😱', ['scream']], ['😳', ['flushed']], ['🤪', ['zany_face', 'grinning_face_with_one_large_and_one_small_eye']], ['😵', ['dizzy_face']], ['😡', ['rage']], ['😠', ['angry']], ['🤬', ['face_with_symbols_on_mouth', 'serious_face_with_symbols_covering_mouth']], ['😷', ['mask']], ['🤒', ['face_with_thermometer']], ['🤕', ['face_with_head_bandage']], ['🤢', ['nauseated_face']], ['🤮', ['face_vomiting', 'face_with_open_mouth_vomiting']], ['🤧', ['sneezing_face']], ['😇', ['innocent']], ['🤠', ['face_with_cowboy_hat']], ['🤡', ['clown_face']], ['🤥', ['lying_face']], ['🤫', ['shushing_face', 'face_with_finger_covering_closed_lips']], ['🤭', ['face_with_hand_over_mouth', 'smiling_face_with_smiling_eyes_and_hand_covering_mouth']], ['🧐', ['face_with_monocle']], ['🤓', ['nerd_face']], ['😈', ['smiling_imp']], ['👿', ['imp']], ['👹', ['japanese_ogre']], ['👺', ['japanese_goblin']], ['💀', ['skull']], ['☠️', ['skull_and_crossbones']], ['👻', ['ghost']], ['👽', ['alien']], ['👾', ['space_invader']], ['🤖', ['robot_face']], ['💩', ['hankey', 'poop', 'shit']], ['😺', ['smiley_cat']], ['😸', ['smile_cat']], ['😹', ['joy_cat']], ['😻', ['heart_eyes_cat']], ['😼', ['smirk_cat']], ['😽', ['kissing_cat']], ['🙀', ['scream_cat']], ['😿', ['crying_cat_face']], ['😾', ['pouting_cat']], ['🙈', ['see_no_evil']], ['🙉', ['hear_no_evil']], ['🙊', ['speak_no_evil']], ['👶', ['baby']], ['🧒', ['child']], ['👦', ['boy']], ['👧', ['girl']], ['🧑', ['adult']], ['👨', ['man']], ['👩', ['woman']], ['🧓', ['older_adult']], ['👴', ['older_man']], ['👵', ['older_woman']], ['👨‍⚕️', ['male-doctor']], ['👩‍⚕️', ['female-doctor']], ['👨‍🎓', ['male-student']], ['👩‍🎓', ['female-student']], ['👨‍🏫', ['male-teacher']], ['👩‍🏫', ['female-teacher']], ['👨‍⚖️', ['male-judge']], ['👩‍⚖️', ['female-judge']], ['👨‍🌾', ['male-farmer']], ['👩‍🌾', ['female-farmer']], ['👨‍🍳', ['male-cook']], ['👩‍🍳', ['female-cook']], ['👨‍🔧', ['male-mechanic']], ['👩‍🔧', ['female-mechanic']], ['👨‍🏭', ['male-factory-worker']], ['👩‍🏭', ['female-factory-worker']], ['👨‍💼', ['male-office-worker']], ['👩‍💼', ['female-office-worker']], ['👨‍🔬', ['male-scientist']], ['👩‍🔬', ['female-scientist']], ['👨‍💻', ['male-technologist']], ['👩‍💻', ['female-technologist']], ['👨‍🎤', ['male-singer']], ['👩‍🎤', ['female-singer']], ['👨‍🎨', ['male-artist']], ['👩‍🎨', ['female-artist']], ['👨‍✈️', ['male-pilot']], ['👩‍✈️', ['female-pilot']], ['👨‍🚀', ['male-astronaut']], ['👩‍🚀', ['female-astronaut']], ['👨‍🚒', ['male-firefighter']], ['👩‍🚒', ['female-firefighter']], ['👮', ['cop']], ['👮‍♂️', ['male-police-officer']], ['👮‍♀️', ['female-police-officer']], ['🕵️', ['sleuth_or_spy']], ['🕵️‍♂️', ['male-detective']], ['🕵️‍♀️', ['female-detective']], ['💂', ['guardsman']], ['💂‍♂️', ['male-guard']], ['💂‍♀️', ['female-guard']], ['👷', ['construction_worker']], ['👷‍♂️', ['male-construction-worker']], ['👷‍♀️', ['female-construction-worker']], ['🤴', ['prince']], ['👸', ['princess']], ['👳', ['man_with_turban']], ['👳‍♂️', ['man-wearing-turban']], ['👳‍♀️', ['woman-wearing-turban']], ['👲', ['man_with_gua_pi_mao']], ['🧕', ['person_with_headscarf']], ['🧔', ['bearded_person']], ['👱', ['person_with_blond_hair']], ['👱‍♂️', ['blond-haired-man']], ['👱‍♀️', ['blond-haired-woman']], ['🤵', ['man_in_tuxedo']], ['👰', ['bride_with_veil']], ['🤰', ['pregnant_woman']], ['🤱', ['breast-feeding']], ['👼', ['angel']], ['🎅', ['santa']], ['🤶', ['mrs_claus', 'mother_christmas']], ['🧙', ['mage']], ['🧙‍♀️', ['female_mage']], ['🧙‍♂️', ['male_mage']], ['🧚', ['fairy']], ['🧚‍♀️', ['female_fairy']], ['🧚‍♂️', ['male_fairy']], ['🧛', ['vampire']], ['🧛‍♀️', ['female_vampire']], ['🧛‍♂️', ['male_vampire']], ['🧜', ['merperson']], ['🧜‍♀️', ['mermaid']], ['🧜‍♂️', ['merman']], ['🧝', ['elf']], ['🧝‍♀️', ['female_elf']], ['🧝‍♂️', ['male_elf']], ['🧞', ['genie']], ['🧞‍♀️', ['female_genie']], ['🧞‍♂️', ['male_genie']], ['🧟', ['zombie']], ['🧟‍♀️', ['female_zombie']], ['🧟‍♂️', ['male_zombie']], ['🙍', ['person_frowning']], ['🙍‍♂️', ['man-frowning']], ['🙍‍♀️', ['woman-frowning']], ['🙎', ['person_with_pouting_face']], ['🙎‍♂️', ['man-pouting']], ['🙎‍♀️', ['woman-pouting']], ['🙅', ['no_good']], ['🙅‍♂️', ['man-gesturing-no']], ['🙅‍♀️', ['woman-gesturing-no']], ['🙆', ['ok_woman']], ['🙆‍♂️', ['man-gesturing-ok']], ['🙆‍♀️', ['woman-gesturing-ok']], ['💁', ['information_desk_person']], ['💁‍♂️', ['man-tipping-hand']], ['💁‍♀️', ['woman-tipping-hand']], ['🙋', ['raising_hand']], ['🙋‍♂️', ['man-raising-hand']], ['🙋‍♀️', ['woman-raising-hand']], ['🙇', ['bow']], ['🙇‍♂️', ['man-bowing']], ['🙇‍♀️', ['woman-bowing']], ['🤦', ['face_palm']], ['🤦‍♂️', ['man-facepalming']], ['🤦‍♀️', ['woman-facepalming']], ['🤷', ['shrug']], ['🤷‍♂️', ['man-shrugging']], ['🤷‍♀️', ['woman-shrugging']], ['💆', ['massage']], ['💆‍♂️', ['man-getting-massage']], ['💆‍♀️', ['woman-getting-massage']], ['💇', ['haircut']], ['💇‍♂️', ['man-getting-haircut']], ['💇‍♀️', ['woman-getting-haircut']], ['🚶', ['walking']], ['🚶‍♂️', ['man-walking']], ['🚶‍♀️', ['woman-walking']], ['🏃', ['runner', 'running']], ['🏃‍♂️', ['man-running']], ['🏃‍♀️', ['woman-running']], ['💃', ['dancer']], ['🕺', ['man_dancing']], ['👯', ['dancers']], ['👯‍♂️', ['man-with-bunny-ears-partying']], ['👯‍♀️', ['woman-with-bunny-ears-partying']], ['🧖', ['person_in_steamy_room']], ['🧖‍♀️', ['woman_in_steamy_room']], ['🧖‍♂️', ['man_in_steamy_room']], ['🧗', ['person_climbing']], ['🧗‍♀️', ['woman_climbing']], ['🧗‍♂️', ['man_climbing']], ['🧘', ['person_in_lotus_position']], ['🧘‍♀️', ['woman_in_lotus_position']], ['🧘‍♂️', ['man_in_lotus_position']], ['🛀', ['bath']], ['🛌', ['sleeping_accommodation']], ['🕴️', ['man_in_business_suit_levitating']], ['🗣️', ['speaking_head_in_silhouette']], ['👤', ['bust_in_silhouette']], ['👥', ['busts_in_silhouette']], ['🤺', ['fencer']], ['🏇', ['horse_racing']], ['⛷️', ['skier']], ['🏂', ['snowboarder']], ['🏌️', ['golfer']], ['🏌️‍♂️', ['man-golfing']], ['🏌️‍♀️', ['woman-golfing']], ['🏄', ['surfer']], ['🏄‍♂️', ['man-surfing']], ['🏄‍♀️', ['woman-surfing']], ['🚣', ['rowboat']], ['🚣‍♂️', ['man-rowing-boat']], ['🚣‍♀️', ['woman-rowing-boat']], ['🏊', ['swimmer']], ['🏊‍♂️', ['man-swimming']], ['🏊‍♀️', ['woman-swimming']], ['⛹️', ['person_with_ball']], ['⛹️‍♂️', ['man-bouncing-ball']], ['⛹️‍♀️', ['woman-bouncing-ball']], ['🏋️', ['weight_lifter']], ['🏋️‍♂️', ['man-lifting-weights']], ['🏋️‍♀️', ['woman-lifting-weights']], ['🚴', ['bicyclist']], ['🚴‍♂️', ['man-biking']], ['🚴‍♀️', ['woman-biking']], ['🚵', ['mountain_bicyclist']], ['🚵‍♂️', ['man-mountain-biking']], ['🚵‍♀️', ['woman-mountain-biking']], ['🏎️', ['racing_car']], ['🏍️', ['racing_motorcycle']], ['🤸', ['person_doing_cartwheel']], ['🤸‍♂️', ['man-cartwheeling']], ['🤸‍♀️', ['woman-cartwheeling']], ['🤼', ['wrestlers']], ['🤼‍♂️', ['man-wrestling']], ['🤼‍♀️', ['woman-wrestling']], ['🤽', ['water_polo']], ['🤽‍♂️', ['man-playing-water-polo']], ['🤽‍♀️', ['woman-playing-water-polo']], ['🤾', ['handball']], ['🤾‍♂️', ['man-playing-handball']], ['🤾‍♀️', ['woman-playing-handball']], ['🤹', ['juggling']], ['🤹‍♂️', ['man-juggling']], ['🤹‍♀️', ['woman-juggling']], ['👫', ['couple', 'man_and_woman_holding_hands']], ['👬', ['two_men_holding_hands']], ['👭', ['two_women_holding_hands']], ['💏', ['couplekiss']], ['👩‍❤️‍💋‍👨', ['woman-kiss-man']], ['👨‍❤️‍💋‍👨', ['man-kiss-man']], ['👩‍❤️‍💋‍👩', ['woman-kiss-woman']], ['💑', ['couple_with_heart']], ['👩‍❤️‍👨', ['woman-heart-man']], ['👨‍❤️‍👨', ['man-heart-man']], ['👩‍❤️‍👩', ['woman-heart-woman']], ['👪', ['family', 'man-woman-boy']], ['👨‍👩‍👦', ['man-woman-boy', 'family']], ['👨‍👩‍👧', ['man-woman-girl']], ['👨‍👩‍👧‍👦', ['man-woman-girl-boy']], ['👨‍👩‍👦‍👦', ['man-woman-boy-boy']], ['👨‍👩‍👧‍👧', ['man-woman-girl-girl']], ['👨‍👨‍👦', ['man-man-boy']], ['👨‍👨‍👧', ['man-man-girl']], ['👨‍👨‍👧‍👦', ['man-man-girl-boy']], ['👨‍👨‍👦‍👦', ['man-man-boy-boy']], ['👨‍👨‍👧‍👧', ['man-man-girl-girl']], ['👩‍👩‍👦', ['woman-woman-boy']], ['👩‍👩‍👧', ['woman-woman-girl']], ['👩‍👩‍👧‍👦', ['woman-woman-girl-boy']], ['👩‍👩‍👦‍👦', ['woman-woman-boy-boy']], ['👩‍👩‍👧‍👧', ['woman-woman-girl-girl']], ['👨‍👦', ['man-boy']], ['👨‍👦‍👦', ['man-boy-boy']], ['👨‍👧', ['man-girl']], ['👨‍👧‍👦', ['man-girl-boy']], ['👨‍👧‍👧', ['man-girl-girl']], ['👩‍👦', ['woman-boy']], ['👩‍👦‍👦', ['woman-boy-boy']], ['👩‍👧', ['woman-girl']], ['👩‍👧‍👦', ['woman-girl-boy']], ['👩‍👧‍👧', ['woman-girl-girl']], ['🤳', ['selfie']], ['💪', ['muscle']], ['👈', ['point_left']], ['👉', ['point_right']], ['☝️', ['point_up']], ['👆', ['point_up_2']], ['🖕', ['middle_finger', 'reversed_hand_with_middle_finger_extended']], ['👇', ['point_down']], ['✌️', ['v']], ['🤞', ['crossed_fingers', 'hand_with_index_and_middle_fingers_crossed']], ['🖖', ['spock-hand']], ['🤘', ['the_horns', 'sign_of_the_horns']], ['🤙', ['call_me_hand']], ['🖐️', ['raised_hand_with_fingers_splayed']], ['✋', ['hand', 'raised_hand']], ['👌', ['ok_hand']], ['👍', ['+1', 'thumbsup']], ['👎', ['-1', 'thumbsdown']], ['✊', ['fist']], ['👊', ['facepunch', 'punch']], ['🤛', ['left-facing_fist']], ['🤜', ['right-facing_fist']], ['🤚', ['raised_back_of_hand']], ['👋', ['wave']], ['🤟', ['i_love_you_hand_sign']], ['✍️', ['writing_hand']], ['👏', ['clap']], ['👐', ['open_hands']], ['🙌', ['raised_hands']], ['🤲', ['palms_up_together']], ['🙏', ['pray']], ['🤝', ['handshake']], ['💅', ['nail_care']], ['👂', ['ear']], ['👃', ['nose']], ['👣', ['footprints']], ['👀', ['eyes']], ['👁️', ['eye']], ['👁️‍🗨️', ['eye-in-speech-bubble']], ['🧠', ['brain']], ['👅', ['tongue']], ['👄', ['lips']], ['💋', ['kiss']], ['💘', ['cupid']], ['❤️', ['heart']], ['💓', ['heartbeat']], ['💔', ['broken_heart']], ['💕', ['two_hearts']], ['💖', ['sparkling_heart']], ['💗', ['heartpulse']], ['💙', ['blue_heart']], ['💚', ['green_heart']], ['💛', ['yellow_heart']], ['🧡', ['orange_heart']], ['💜', ['purple_heart']], ['🖤', ['black_heart']], ['💝', ['gift_heart']], ['💞', ['revolving_hearts']], ['💟', ['heart_decoration']], ['❣️', ['heavy_heart_exclamation_mark_ornament']], ['💌', ['love_letter']], ['💤', ['zzz']], ['💢', ['anger']], ['💣', ['bomb']], ['💥', ['boom', 'collision']], ['💦', ['sweat_drops']], ['💨', ['dash']], ['💫', ['dizzy']], ['💬', ['speech_balloon']], ['🗨️', ['left_speech_bubble']], ['🗯️', ['right_anger_bubble']], ['💭', ['thought_balloon']], ['🕳️', ['hole']], ['👓', ['eyeglasses']], ['🕶️', ['dark_sunglasses']], ['👔', ['necktie']], ['👕', ['shirt', 'tshirt']], ['👖', ['jeans']], ['🧣', ['scarf']], ['🧤', ['gloves']], ['🧥', ['coat']], ['🧦', ['socks']], ['👗', ['dress']], ['👘', ['kimono']], ['👙', ['bikini']], ['👚', ['womans_clothes']], ['👛', ['purse']], ['👜', ['handbag']], ['👝', ['pouch']], ['🛍️', ['shopping_bags']], ['🎒', ['school_satchel']], ['👞', ['mans_shoe', 'shoe']], ['👟', ['athletic_shoe']], ['👠', ['high_heel']], ['👡', ['sandal']], ['👢', ['boot']], ['👑', ['crown']], ['👒', ['womans_hat']], ['🎩', ['tophat']], ['🎓', ['mortar_board']], ['🧢', ['billed_cap']], ['⛑️', ['helmet_with_white_cross']], ['📿', ['prayer_beads']], ['💄', ['lipstick']], ['💍', ['ring']], ['💎', ['gem']]];
  var FOOD_AND_DRINK = [['🍇', ['grapes']], ['🍈', ['melon']], ['🍉', ['watermelon']], ['🍊', ['tangerine']], ['🍋', ['lemon']], ['🍌', ['banana']], ['🍍', ['pineapple']], ['🍎', ['apple']], ['🍏', ['green_apple']], ['🍐', ['pear']], ['🍑', ['peach']], ['🍒', ['cherries']], ['🍓', ['strawberry']], ['🥝', ['kiwifruit']], ['🍅', ['tomato']], ['🥥', ['coconut']], ['🥑', ['avocado']], ['🍆', ['eggplant']], ['🥔', ['potato']], ['🥕', ['carrot']], ['🌽', ['corn']], ['🌶️', ['hot_pepper']], ['🥒', ['cucumber']], ['🥦', ['broccoli']], ['🍄', ['mushroom']], ['🥜', ['peanuts']], ['🌰', ['chestnut']], ['🍞', ['bread']], ['🥐', ['croissant']], ['🥖', ['baguette_bread']], ['🥨', ['pretzel']], ['🥞', ['pancakes']], ['🧀', ['cheese_wedge']], ['🍖', ['meat_on_bone']], ['🍗', ['poultry_leg']], ['🥩', ['cut_of_meat']], ['🥓', ['bacon']], ['🍔', ['hamburger']], ['🍟', ['fries']], ['🍕', ['pizza']], ['🌭', ['hotdog']], ['🥪', ['sandwich']], ['🌮', ['taco']], ['🌯', ['burrito']], ['🥙', ['stuffed_flatbread']], ['🥚', ['egg']], ['🍳', ['fried_egg', 'cooking']], ['🥘', ['shallow_pan_of_food']], ['🍲', ['stew']], ['🥣', ['bowl_with_spoon']], ['🥗', ['green_salad']], ['🍿', ['popcorn']], ['🥫', ['canned_food']], ['🍱', ['bento']], ['🍘', ['rice_cracker']], ['🍙', ['rice_ball']], ['🍚', ['rice']], ['🍛', ['curry']], ['🍜', ['ramen']], ['🍝', ['spaghetti']], ['🍠', ['sweet_potato']], ['🍢', ['oden']], ['🍣', ['sushi']], ['🍤', ['fried_shrimp']], ['🍥', ['fish_cake']], ['🍡', ['dango']], ['🥟', ['dumpling']], ['🥠', ['fortune_cookie']], ['🥡', ['takeout_box']], ['🍦', ['icecream']], ['🍧', ['shaved_ice']], ['🍨', ['ice_cream']], ['🍩', ['doughnut']], ['🍪', ['cookie']], ['🎂', ['birthday']], ['🍰', ['cake']], ['🥧', ['pie']], ['🍫', ['chocolate_bar']], ['🍬', ['candy']], ['🍭', ['lollipop']], ['🍮', ['custard']], ['🍯', ['honey_pot']], ['🍼', ['baby_bottle']], ['🥛', ['glass_of_milk']], ['☕', ['coffee']], ['🍵', ['tea']], ['🍶', ['sake']], ['🍾', ['champagne']], ['🍷', ['wine_glass']], ['🍸', ['cocktail']], ['🍹', ['tropical_drink']], ['🍺', ['beer']], ['🍻', ['beers']], ['🥂', ['clinking_glasses']], ['🥃', ['tumbler_glass']], ['🥤', ['cup_with_straw']], ['🥢', ['chopsticks']], ['🍽️', ['knife_fork_plate']], ['🍴', ['fork_and_knife']], ['🥄', ['spoon']], ['🔪', ['hocho', 'knife']], ['🏺', ['amphora']]];
  var FLAGS = [['🏁', ['checkered_flag']], ['🚩', ['triangular_flag_on_post']], ['🎌', ['crossed_flags']], ['🏴', ['waving_black_flag']], ['🏳️', ['waving_white_flag']], ['🏳️‍🌈', ['rainbow-flag']], ['🇦🇨', ['flag-ac']], ['🇦🇩', ['flag-ad']], ['🇦🇪', ['flag-ae']], ['🇦🇫', ['flag-af']], ['🇦🇬', ['flag-ag']], ['🇦🇮', ['flag-ai']], ['🇦🇱', ['flag-al']], ['🇦🇲', ['flag-am']], ['🇦🇴', ['flag-ao']], ['🇦🇶', ['flag-aq']], ['🇦🇷', ['flag-ar']], ['🇦🇸', ['flag-as']], ['🇦🇹', ['flag-at']], ['🇦🇺', ['flag-au']], ['🇦🇼', ['flag-aw']], ['🇦🇽', ['flag-ax']], ['🇦🇿', ['flag-az']], ['🇧🇦', ['flag-ba']], ['🇧🇧', ['flag-bb']], ['🇧🇩', ['flag-bd']], ['🇧🇪', ['flag-be']], ['🇧🇫', ['flag-bf']], ['🇧🇬', ['flag-bg']], ['🇧🇭', ['flag-bh']], ['🇧🇮', ['flag-bi']], ['🇧🇯', ['flag-bj']], ['🇧🇱', ['flag-bl']], ['🇧🇲', ['flag-bm']], ['🇧🇳', ['flag-bn']], ['🇧🇴', ['flag-bo']], ['🇧🇶', ['flag-bq']], ['🇧🇷', ['flag-br']], ['🇧🇸', ['flag-bs']], ['🇧🇹', ['flag-bt']], ['🇧🇻', ['flag-bv']], ['🇧🇼', ['flag-bw']], ['🇧🇾', ['flag-by']], ['🇧🇿', ['flag-bz']], ['🇨🇦', ['flag-ca']], ['🇨🇨', ['flag-cc']], ['🇨🇩', ['flag-cd']], ['🇨🇫', ['flag-cf']], ['🇨🇬', ['flag-cg']], ['🇨🇭', ['flag-ch']], ['🇨🇮', ['flag-ci']], ['🇨🇰', ['flag-ck']], ['🇨🇱', ['flag-cl']], ['🇨🇲', ['flag-cm']], ['🇨🇳', ['cn', 'flag-cn']], ['🇨🇴', ['flag-co']], ['🇨🇵', ['flag-cp']], ['🇨🇷', ['flag-cr']], ['🇨🇺', ['flag-cu']], ['🇨🇻', ['flag-cv']], ['🇨🇼', ['flag-cw']], ['🇨🇽', ['flag-cx']], ['🇨🇾', ['flag-cy']], ['🇨🇿', ['flag-cz']], ['🇩🇪', ['de', 'flag-de']], ['🇩🇬', ['flag-dg']], ['🇩🇯', ['flag-dj']], ['🇩🇰', ['flag-dk']], ['🇩🇲', ['flag-dm']], ['🇩🇴', ['flag-do']], ['🇩🇿', ['flag-dz']], ['🇪🇦', ['flag-ea']], ['🇪🇨', ['flag-ec']], ['🇪🇪', ['flag-ee']], ['🇪🇬', ['flag-eg']], ['🇪🇭', ['flag-eh']], ['🇪🇷', ['flag-er']], ['🇪🇸', ['es', 'flag-es']], ['🇪🇹', ['flag-et']], ['🇪🇺', ['flag-eu']], ['🇫🇮', ['flag-fi']], ['🇫🇯', ['flag-fj']], ['🇫🇰', ['flag-fk']], ['🇫🇲', ['flag-fm']], ['🇫🇴', ['flag-fo']], ['🇫🇷', ['fr', 'flag-fr']], ['🇬🇦', ['flag-ga']], ['🇬🇧', ['gb', 'uk', 'flag-gb']], ['🇬🇩', ['flag-gd']], ['🇬🇪', ['flag-ge']], ['🇬🇫', ['flag-gf']], ['🇬🇬', ['flag-gg']], ['🇬🇭', ['flag-gh']], ['🇬🇮', ['flag-gi']], ['🇬🇱', ['flag-gl']], ['🇬🇲', ['flag-gm']], ['🇬🇳', ['flag-gn']], ['🇬🇵', ['flag-gp']], ['🇬🇶', ['flag-gq']], ['🇬🇷', ['flag-gr']], ['🇬🇸', ['flag-gs']], ['🇬🇹', ['flag-gt']], ['🇬🇺', ['flag-gu']], ['🇬🇼', ['flag-gw']], ['🇬🇾', ['flag-gy']], ['🇭🇰', ['flag-hk']], ['🇭🇲', ['flag-hm']], ['🇭🇳', ['flag-hn']], ['🇭🇷', ['flag-hr']], ['🇭🇹', ['flag-ht']], ['🇭🇺', ['flag-hu']], ['🇮🇨', ['flag-ic']], ['🇮🇩', ['flag-id']], ['🇮🇪', ['flag-ie']], ['🇮🇱', ['flag-il']], ['🇮🇲', ['flag-im']], ['🇮🇳', ['flag-in']], ['🇮🇴', ['flag-io']], ['🇮🇶', ['flag-iq']], ['🇮🇷', ['flag-ir']], ['🇮🇸', ['flag-is']], ['🇮🇹', ['it', 'flag-it']], ['🇯🇪', ['flag-je']], ['🇯🇲', ['flag-jm']], ['🇯🇴', ['flag-jo']], ['🇯🇵', ['jp', 'flag-jp']], ['🇰🇪', ['flag-ke']], ['🇰🇬', ['flag-kg']], ['🇰🇭', ['flag-kh']], ['🇰🇮', ['flag-ki']], ['🇰🇲', ['flag-km']], ['🇰🇳', ['flag-kn']], ['🇰🇵', ['flag-kp']], ['🇰🇷', ['kr', 'flag-kr']], ['🇰🇼', ['flag-kw']], ['🇰🇾', ['flag-ky']], ['🇰🇿', ['flag-kz']], ['🇱🇦', ['flag-la']], ['🇱🇧', ['flag-lb']], ['🇱🇨', ['flag-lc']], ['🇱🇮', ['flag-li']], ['🇱🇰', ['flag-lk']], ['🇱🇷', ['flag-lr']], ['🇱🇸', ['flag-ls']], ['🇱🇹', ['flag-lt']], ['🇱🇺', ['flag-lu']], ['🇱🇻', ['flag-lv']], ['🇱🇾', ['flag-ly']], ['🇲🇦', ['flag-ma']], ['🇲🇨', ['flag-mc']], ['🇲🇩', ['flag-md']], ['🇲🇪', ['flag-me']], ['🇲🇫', ['flag-mf']], ['🇲🇬', ['flag-mg']], ['🇲🇭', ['flag-mh']], ['🇲🇰', ['flag-mk']], ['🇲🇱', ['flag-ml']], ['🇲🇲', ['flag-mm']], ['🇲🇳', ['flag-mn']], ['🇲🇴', ['flag-mo']], ['🇲🇵', ['flag-mp']], ['🇲🇶', ['flag-mq']], ['🇲🇷', ['flag-mr']], ['🇲🇸', ['flag-ms']], ['🇲🇹', ['flag-mt']], ['🇲🇺', ['flag-mu']], ['🇲🇻', ['flag-mv']], ['🇲🇼', ['flag-mw']], ['🇲🇽', ['flag-mx']], ['🇲🇾', ['flag-my']], ['🇲🇿', ['flag-mz']], ['🇳🇦', ['flag-na']], ['🇳🇨', ['flag-nc']], ['🇳🇪', ['flag-ne']], ['🇳🇫', ['flag-nf']], ['🇳🇬', ['flag-ng']], ['🇳🇮', ['flag-ni']], ['🇳🇱', ['flag-nl']], ['🇳🇴', ['flag-no']], ['🇳🇵', ['flag-np']], ['🇳🇷', ['flag-nr']], ['🇳🇺', ['flag-nu']], ['🇳🇿', ['flag-nz']], ['🇴🇲', ['flag-om']], ['🇵🇦', ['flag-pa']], ['🇵🇪', ['flag-pe']], ['🇵🇫', ['flag-pf']], ['🇵🇬', ['flag-pg']], ['🇵🇭', ['flag-ph']], ['🇵🇰', ['flag-pk']], ['🇵🇱', ['flag-pl']], ['🇵🇲', ['flag-pm']], ['🇵🇳', ['flag-pn']], ['🇵🇷', ['flag-pr']], ['🇵🇸', ['flag-ps']], ['🇵🇹', ['flag-pt']], ['🇵🇼', ['flag-pw']], ['🇵🇾', ['flag-py']], ['🇶🇦', ['flag-qa']], ['🇷🇪', ['flag-re']], ['🇷🇴', ['flag-ro']], ['🇷🇸', ['flag-rs']], ['🇷🇺', ['ru', 'flag-ru']], ['🇷🇼', ['flag-rw']], ['🇸🇦', ['flag-sa']], ['🇸🇧', ['flag-sb']], ['🇸🇨', ['flag-sc']], ['🇸🇩', ['flag-sd']], ['🇸🇪', ['flag-se']], ['🇸🇬', ['flag-sg']], ['🇸🇭', ['flag-sh']], ['🇸🇮', ['flag-si']], ['🇸🇯', ['flag-sj']], ['🇸🇰', ['flag-sk']], ['🇸🇱', ['flag-sl']], ['🇸🇲', ['flag-sm']], ['🇸🇳', ['flag-sn']], ['🇸🇴', ['flag-so']], ['🇸🇷', ['flag-sr']], ['🇸🇸', ['flag-ss']], ['🇸🇹', ['flag-st']], ['🇸🇻', ['flag-sv']], ['🇸🇽', ['flag-sx']], ['🇸🇾', ['flag-sy']], ['🇸🇿', ['flag-sz']], ['🇹🇦', ['flag-ta']], ['🇹🇨', ['flag-tc']], ['🇹🇩', ['flag-td']], ['🇹🇫', ['flag-tf']], ['🇹🇬', ['flag-tg']], ['🇹🇭', ['flag-th']], ['🇹🇯', ['flag-tj']], ['🇹🇰', ['flag-tk']], ['🇹🇱', ['flag-tl']], ['🇹🇲', ['flag-tm']], ['🇹🇳', ['flag-tn']], ['🇹🇴', ['flag-to']], ['🇹🇷', ['flag-tr']], ['🇹🇹', ['flag-tt']], ['🇹🇻', ['flag-tv']], ['🇹🇼', ['flag-tw']], ['🇹🇿', ['flag-tz']], ['🇺🇦', ['flag-ua']], ['🇺🇬', ['flag-ug']], ['🇺🇲', ['flag-um']], ['🇺🇳', ['flag-un']], ['🇺🇸', ['us', 'flag-us']], ['🇺🇾', ['flag-uy']], ['🇺🇿', ['flag-uz']], ['🇻🇦', ['flag-va']], ['🇻🇨', ['flag-vc']], ['🇻🇪', ['flag-ve']], ['🇻🇬', ['flag-vg']], ['🇻🇮', ['flag-vi']], ['🇻🇳', ['flag-vn']], ['🇻🇺', ['flag-vu']], ['🇼🇫', ['flag-wf']], ['🇼🇸', ['flag-ws']], ['🇽🇰', ['flag-xk']], ['🇾🇪', ['flag-ye']], ['🇾🇹', ['flag-yt']], ['🇿🇦', ['flag-za']], ['🇿🇲', ['flag-zm']], ['🇿🇼', ['flag-zw']], ['🏴󠁧󠁢󠁥󠁮󠁧󠁿', ['flag-england']], ['🏴󠁧󠁢󠁳󠁣󠁴󠁿', ['flag-scotland']], ['🏴󠁧󠁢󠁷󠁬󠁳󠁿', ['flag-wales']]];
  var OBJECTS = [['🔇', ['mute']], ['🔈', ['speaker']], ['🔉', ['sound']], ['🔊', ['loud_sound']], ['📢', ['loudspeaker']], ['📣', ['mega']], ['📯', ['postal_horn']], ['🔔', ['bell']], ['🔕', ['no_bell']], ['🎼', ['musical_score']], ['🎵', ['musical_note']], ['🎶', ['notes']], ['🎙️', ['studio_microphone']], ['🎚️', ['level_slider']], ['🎛️', ['control_knobs']], ['🎤', ['microphone']], ['🎧', ['headphones']], ['📻', ['radio']], ['🎷', ['saxophone']], ['🎸', ['guitar']], ['🎹', ['musical_keyboard']], ['🎺', ['trumpet']], ['🎻', ['violin']], ['🥁', ['drum_with_drumsticks']], ['📱', ['iphone']], ['📲', ['calling']], ['☎️', ['phone', 'telephone']], ['📞', ['telephone_receiver']], ['📟', ['pager']], ['📠', ['fax']], ['🔋', ['battery']], ['🔌', ['electric_plug']], ['💻', ['computer']], ['🖥️', ['desktop_computer']], ['🖨️', ['printer']], ['⌨️', ['keyboard']], ['🖱️', ['three_button_mouse']], ['🖲️', ['trackball']], ['💽', ['minidisc']], ['💾', ['floppy_disk']], ['💿', ['cd']], ['📀', ['dvd']], ['🎥', ['movie_camera']], ['🎞️', ['film_frames']], ['📽️', ['film_projector']], ['🎬', ['clapper']], ['📺', ['tv']], ['📷', ['camera']], ['📸', ['camera_with_flash']], ['📹', ['video_camera']], ['📼', ['vhs']], ['🔍', ['mag']], ['🔎', ['mag_right']], ['🔬', ['microscope']], ['🔭', ['telescope']], ['📡', ['satellite_antenna']], ['🕯️', ['candle']], ['💡', ['bulb']], ['🔦', ['flashlight']], ['🏮', ['izakaya_lantern', 'lantern']], ['📔', ['notebook_with_decorative_cover']], ['📕', ['closed_book']], ['📖', ['book', 'open_book']], ['📗', ['green_book']], ['📘', ['blue_book']], ['📙', ['orange_book']], ['📚', ['books']], ['📓', ['notebook']], ['📒', ['ledger']], ['📃', ['page_with_curl']], ['📜', ['scroll']], ['📄', ['page_facing_up']], ['📰', ['newspaper']], ['🗞️', ['rolled_up_newspaper']], ['📑', ['bookmark_tabs']], ['🔖', ['bookmark']], ['🏷️', ['label']], ['💰', ['moneybag']], ['💴', ['yen']], ['💵', ['dollar']], ['💶', ['euro']], ['💷', ['pound']], ['💸', ['money_with_wings']], ['💳', ['credit_card']], ['💹', ['chart']], ['💱', ['currency_exchange']], ['💲', ['heavy_dollar_sign']], ['✉️', ['email', 'envelope']], ['📧', ['e-mail']], ['📨', ['incoming_envelope']], ['📩', ['envelope_with_arrow']], ['📤', ['outbox_tray']], ['📥', ['inbox_tray']], ['📦', ['package']], ['📫', ['mailbox']], ['📪', ['mailbox_closed']], ['📬', ['mailbox_with_mail']], ['📭', ['mailbox_with_no_mail']], ['📮', ['postbox']], ['🗳️', ['ballot_box_with_ballot']], ['✏️', ['pencil2']], ['✒️', ['black_nib']], ['🖋️', ['lower_left_fountain_pen']], ['🖊️', ['lower_left_ballpoint_pen']], ['🖌️', ['lower_left_paintbrush']], ['🖍️', ['lower_left_crayon']], ['📝', ['memo', 'pencil']], ['💼', ['briefcase']], ['📁', ['file_folder']], ['📂', ['open_file_folder']], ['🗂️', ['card_index_dividers']], ['📅', ['date']], ['📆', ['calendar']], ['🗒️', ['spiral_note_pad']], ['🗓️', ['spiral_calendar_pad']], ['📇', ['card_index']], ['📈', ['chart_with_upwards_trend']], ['📉', ['chart_with_downwards_trend']], ['📊', ['bar_chart']], ['📋', ['clipboard']], ['📌', ['pushpin']], ['📍', ['round_pushpin']], ['📎', ['paperclip']], ['🖇️', ['linked_paperclips']], ['📏', ['straight_ruler']], ['📐', ['triangular_ruler']], ['✂️', ['scissors']], ['🗃️', ['card_file_box']], ['🗄️', ['file_cabinet']], ['🗑️', ['wastebasket']], ['🔒', ['lock']], ['🔓', ['unlock']], ['🔏', ['lock_with_ink_pen']], ['🔐', ['closed_lock_with_key']], ['🔑', ['key']], ['🗝️', ['old_key']], ['🔨', ['hammer']], ['⛏️', ['pick']], ['⚒️', ['hammer_and_pick']], ['🛠️', ['hammer_and_wrench']], ['🗡️', ['dagger_knife']], ['⚔️', ['crossed_swords']], ['🔫', ['gun']], ['🏹', ['bow_and_arrow']], ['🛡️', ['shield']], ['🔧', ['wrench']], ['🔩', ['nut_and_bolt']], ['⚙️', ['gear']], ['🗜️', ['compression']], ['⚗️', ['alembic']], ['⚖️', ['scales']], ['🔗', ['link']], ['⛓️', ['chains']], ['💉', ['syringe']], ['💊', ['pill']], ['🚬', ['smoking']], ['⚰️', ['coffin']], ['⚱️', ['funeral_urn']], ['🗿', ['moyai']], ['🛢️', ['oil_drum']], ['🔮', ['crystal_ball']], ['🛒', ['shopping_trolley']]];
  var SYMBOLS = [['🏧', ['atm']], ['🚮', ['put_litter_in_its_place']], ['🚰', ['potable_water']], ['🚺', ['womens']], ['♿', ['wheelchair']], ['🚹', ['mens']], ['🚻', ['restroom']], ['🚼', ['baby_symbol']], ['🚾', ['wc']], ['🛂', ['passport_control']], ['🛃', ['customs']], ['🛄', ['baggage_claim']], ['🛅', ['left_luggage']], ['⚠️', ['warning']], ['🚸', ['children_crossing']], ['⛔', ['no_entry']], ['🚫', ['no_entry_sign']], ['🚳', ['no_bicycles']], ['🚭', ['no_smoking']], ['🚯', ['do_not_litter']], ['🚱', ['non-potable_water']], ['🚷', ['no_pedestrians']], ['📵', ['no_mobile_phones']], ['🔞', ['underage']], ['☢️', ['radioactive_sign']], ['☣️', ['biohazard_sign']], ['⬆️', ['arrow_up']], ['↗️', ['arrow_upper_right']], ['➡️', ['arrow_right']], ['↘️', ['arrow_lower_right']], ['⬇️', ['arrow_down']], ['↙️', ['arrow_lower_left']], ['⬅️', ['arrow_left']], ['↖️', ['arrow_upper_left']], ['↕️', ['arrow_up_down']], ['↔️', ['left_right_arrow']], ['↩️', ['leftwards_arrow_with_hook']], ['↪️', ['arrow_right_hook']], ['⤴️', ['arrow_heading_up']], ['⤵️', ['arrow_heading_down']], ['🔃', ['arrows_clockwise']], ['🔄', ['arrows_counterclockwise']], ['🔙', ['back']], ['🔚', ['end']], ['🔛', ['on']], ['🔜', ['soon']], ['🔝', ['top']], ['🛐', ['place_of_worship']], ['⚛️', ['atom_symbol']], ['🕉️', ['om_symbol']], ['✡️', ['star_of_david']], ['☸️', ['wheel_of_dharma']], ['☯️', ['yin_yang']], ['✝️', ['latin_cross']], ['☦️', ['orthodox_cross']], ['☪️', ['star_and_crescent']], ['☮️', ['peace_symbol']], ['🕎', ['menorah_with_nine_branches']], ['🔯', ['six_pointed_star']], ['♈', ['aries']], ['♉', ['taurus']], ['♊', ['gemini']], ['♋', ['cancer']], ['♌', ['leo']], ['♍', ['virgo']], ['♎', ['libra']], ['♏', ['scorpius']], ['♐', ['sagittarius']], ['♑', ['capricorn']], ['♒', ['aquarius']], ['♓', ['pisces']], ['⛎', ['ophiuchus']], ['🔀', ['twisted_rightwards_arrows']], ['🔁', ['repeat']], ['🔂', ['repeat_one']], ['▶️', ['arrow_forward']], ['⏩', ['fast_forward']], ['⏭️', ['black_right_pointing_double_triangle_with_vertical_bar']], ['⏯️', ['black_right_pointing_triangle_with_double_vertical_bar']], ['◀️', ['arrow_backward']], ['⏪', ['rewind']], ['⏮️', ['black_left_pointing_double_triangle_with_vertical_bar']], ['🔼', ['arrow_up_small']], ['⏫', ['arrow_double_up']], ['🔽', ['arrow_down_small']], ['⏬', ['arrow_double_down']], ['⏸️', ['double_vertical_bar']], ['⏹️', ['black_square_for_stop']], ['⏺️', ['black_circle_for_record']], ['⏏️', ['eject']], ['🎦', ['cinema']], ['🔅', ['low_brightness']], ['🔆', ['high_brightness']], ['📶', ['signal_strength']], ['📳', ['vibration_mode']], ['📴', ['mobile_phone_off']], ['♀️', ['female_sign']], ['♂️', ['male_sign']], ['⚕️', ['medical_symbol', 'staff_of_aesculapius']], ['♻️', ['recycle']], ['⚜️', ['fleur_de_lis']], ['🔱', ['trident']], ['📛', ['name_badge']], ['🔰', ['beginner']], ['⭕', ['o']], ['✅', ['white_check_mark']], ['☑️', ['ballot_box_with_check']], ['✔️', ['heavy_check_mark']], ['✖️', ['heavy_multiplication_x']], ['❌', ['x']], ['❎', ['negative_squared_cross_mark']], ['➕', ['heavy_plus_sign']], ['➖', ['heavy_minus_sign']], ['➗', ['heavy_division_sign']], ['➰', ['curly_loop']], ['➿', ['loop']], ['〽️', ['part_alternation_mark']], ['✳️', ['eight_spoked_asterisk']], ['✴️', ['eight_pointed_black_star']], ['❇️', ['sparkle']], ['‼️', ['bangbang']], ['⁉️', ['interrobang']], ['❓', ['question']], ['❔', ['grey_question']], ['❕', ['grey_exclamation']], ['❗', ['exclamation', 'heavy_exclamation_mark']], ['〰️', ['wavy_dash']], ['©️', ['copyright']], ['®️', ['registered']], ['™️', ['tm']], ['#️⃣', ['hash']], ['*️⃣', ['keycap_star']], ['0️⃣', ['zero']], ['1️⃣', ['one']], ['2️⃣', ['two']], ['3️⃣', ['three']], ['4️⃣', ['four']], ['5️⃣', ['five']], ['6️⃣', ['six']], ['7️⃣', ['seven']], ['8️⃣', ['eight']], ['9️⃣', ['nine']], ['🔟', ['keycap_ten']], ['💯', ['100']], ['🔠', ['capital_abcd']], ['🔡', ['abcd']], ['🔢', ['1234']], ['🔣', ['symbols']], ['🔤', ['abc']], ['🅰️', ['a']], ['🆎', ['ab']], ['🅱️', ['b']], ['🆑', ['cl']], ['🆒', ['cool']], ['🆓', ['free']], ['ℹ️', ['information_source']], ['🆔', ['id']], ['Ⓜ️', ['m']], ['🆕', ['new']], ['🆖', ['ng']], ['🅾️', ['o2']], ['🆗', ['ok']], ['🅿️', ['parking']], ['🆘', ['sos']], ['🆙', ['up']], ['🆚', ['vs']], ['🈁', ['koko']], ['🈂️', ['sa']], ['🈷️', ['u6708']], ['🈶', ['u6709']], ['🈯', ['u6307']], ['🉐', ['ideograph_advantage']], ['🈹', ['u5272']], ['🈚', ['u7121']], ['🈲', ['u7981']], ['🉑', ['accept']], ['🈸', ['u7533']], ['🈴', ['u5408']], ['🈳', ['u7a7a']], ['㊗️', ['congratulations']], ['㊙️', ['secret']], ['🈺', ['u55b6']], ['🈵', ['u6e80']], ['▪️', ['black_small_square']], ['▫️', ['white_small_square']], ['◻️', ['white_medium_square']], ['◼️', ['black_medium_square']], ['◽', ['white_medium_small_square']], ['◾', ['black_medium_small_square']], ['⬛', ['black_large_square']], ['⬜', ['white_large_square']], ['🔶', ['large_orange_diamond']], ['🔷', ['large_blue_diamond']], ['🔸', ['small_orange_diamond']], ['🔹', ['small_blue_diamond']], ['🔺', ['small_red_triangle']], ['🔻', ['small_red_triangle_down']], ['💠', ['diamond_shape_with_a_dot_inside']], ['🔘', ['radio_button']], ['🔲', ['black_square_button']], ['🔳', ['white_square_button']], ['⚪', ['white_circle']], ['⚫', ['black_circle']], ['🔴', ['red_circle']], ['🔵', ['large_blue_circle']]];
  var TRAVEL_AND_PLACES = [['🌍', ['earth_africa']], ['🌎', ['earth_americas']], ['🌏', ['earth_asia']], ['🌐', ['globe_with_meridians']], ['🗺️', ['world_map']], ['🗾', ['japan']], ['🏔️', ['snow_capped_mountain']], ['⛰️', ['mountain']], ['🌋', ['volcano']], ['🗻', ['mount_fuji']], ['🏕️', ['camping']], ['🏖️', ['beach_with_umbrella']], ['🏜️', ['desert']], ['🏝️', ['desert_island']], ['🏞️', ['national_park']], ['🏟️', ['stadium']], ['🏛️', ['classical_building']], ['🏗️', ['building_construction']], ['🏘️', ['house_buildings']], ['🏙️', ['cityscape']], ['🏚️', ['derelict_house_building']], ['🏠', ['house']], ['🏡', ['house_with_garden']], ['🏢', ['office']], ['🏣', ['post_office']], ['🏤', ['european_post_office']], ['🏥', ['hospital']], ['🏦', ['bank']], ['🏨', ['hotel']], ['🏩', ['love_hotel']], ['🏪', ['convenience_store']], ['🏫', ['school']], ['🏬', ['department_store']], ['🏭', ['factory']], ['🏯', ['japanese_castle']], ['🏰', ['european_castle']], ['💒', ['wedding']], ['🗼', ['tokyo_tower']], ['🗽', ['statue_of_liberty']], ['⛪', ['church']], ['🕌', ['mosque']], ['🕍', ['synagogue']], ['⛩️', ['shinto_shrine']], ['🕋', ['kaaba']], ['⛲', ['fountain']], ['⛺', ['tent']], ['🌁', ['foggy']], ['🌃', ['night_with_stars']], ['🌄', ['sunrise_over_mountains']], ['🌅', ['sunrise']], ['🌆', ['city_sunset']], ['🌇', ['city_sunrise']], ['🌉', ['bridge_at_night']], ['♨️', ['hotsprings']], ['🌌', ['milky_way']], ['🎠', ['carousel_horse']], ['🎡', ['ferris_wheel']], ['🎢', ['roller_coaster']], ['💈', ['barber']], ['🎪', ['circus_tent']], ['🎭', ['performing_arts']], ['🖼️', ['frame_with_picture']], ['🎨', ['art']], ['🎰', ['slot_machine']], ['🚂', ['steam_locomotive']], ['🚃', ['railway_car']], ['🚄', ['bullettrain_side']], ['🚅', ['bullettrain_front']], ['🚆', ['train2']], ['🚇', ['metro']], ['🚈', ['light_rail']], ['🚉', ['station']], ['🚊', ['tram']], ['🚝', ['monorail']], ['🚞', ['mountain_railway']], ['🚋', ['train']], ['🚌', ['bus']], ['🚍', ['oncoming_bus']], ['🚎', ['trolleybus']], ['🚐', ['minibus']], ['🚑', ['ambulance']], ['🚒', ['fire_engine']], ['🚓', ['police_car']], ['🚔', ['oncoming_police_car']], ['🚕', ['taxi']], ['🚖', ['oncoming_taxi']], ['🚗', ['car', 'red_car']], ['🚘', ['oncoming_automobile']], ['🚙', ['blue_car']], ['🚚', ['truck']], ['🚛', ['articulated_lorry']], ['🚜', ['tractor']], ['🚲', ['bike']], ['🛴', ['scooter']], ['🛵', ['motor_scooter']], ['🚏', ['busstop']], ['🛣️', ['motorway']], ['🛤️', ['railway_track']], ['⛽', ['fuelpump']], ['🚨', ['rotating_light']], ['🚥', ['traffic_light']], ['🚦', ['vertical_traffic_light']], ['🚧', ['construction']], ['🛑', ['octagonal_sign']], ['⚓', ['anchor']], ['⛵', ['boat', 'sailboat']], ['🛶', ['canoe']], ['🚤', ['speedboat']], ['🛳️', ['passenger_ship']], ['⛴️', ['ferry']], ['🛥️', ['motor_boat']], ['🚢', ['ship']], ['✈️', ['airplane']], ['🛩️', ['small_airplane']], ['🛫', ['airplane_departure']], ['🛬', ['airplane_arriving']], ['💺', ['seat']], ['🚁', ['helicopter']], ['🚟', ['suspension_railway']], ['🚠', ['mountain_cableway']], ['🚡', ['aerial_tramway']], ['🛰️', ['satellite']], ['🚀', ['rocket']], ['🛸', ['flying_saucer']], ['🛎️', ['bellhop_bell']], ['🚪', ['door']], ['🛏️', ['bed']], ['🛋️', ['couch_and_lamp']], ['🚽', ['toilet']], ['🚿', ['shower']], ['🛁', ['bathtub']], ['⌛', ['hourglass']], ['⏳', ['hourglass_flowing_sand']], ['⌚', ['watch']], ['⏰', ['alarm_clock']], ['⏱️', ['stopwatch']], ['⏲️', ['timer_clock']], ['🕰️', ['mantelpiece_clock']], ['🕛', ['clock12']], ['🕧', ['clock1230']], ['🕐', ['clock1']], ['🕜', ['clock130']], ['🕑', ['clock2']], ['🕝', ['clock230']], ['🕒', ['clock3']], ['🕞', ['clock330']], ['🕓', ['clock4']], ['🕟', ['clock430']], ['🕔', ['clock5']], ['🕠', ['clock530']], ['🕕', ['clock6']], ['🕡', ['clock630']], ['🕖', ['clock7']], ['🕢', ['clock730']], ['🕗', ['clock8']], ['🕣', ['clock830']], ['🕘', ['clock9']], ['🕤', ['clock930']], ['🕙', ['clock10']], ['🕥', ['clock1030']], ['🕚', ['clock11']], ['🕦', ['clock1130']], ['🌑', ['new_moon']], ['🌒', ['waxing_crescent_moon']], ['🌓', ['first_quarter_moon']], ['🌔', ['moon', 'waxing_gibbous_moon']], ['🌕', ['full_moon']], ['🌖', ['waning_gibbous_moon']], ['🌗', ['last_quarter_moon']], ['🌘', ['waning_crescent_moon']], ['🌙', ['crescent_moon']], ['🌚', ['new_moon_with_face']], ['🌛', ['first_quarter_moon_with_face']], ['🌜', ['last_quarter_moon_with_face']], ['🌡️', ['thermometer']], ['☀️', ['sunny']], ['🌝', ['full_moon_with_face']], ['🌞', ['sun_with_face']], ['⭐', ['star']], ['🌟', ['star2']], ['🌠', ['stars']], ['☁️', ['cloud']], ['⛅', ['partly_sunny']], ['⛈️', ['thunder_cloud_and_rain']], ['🌤️', ['mostly_sunny', 'sun_small_cloud']], ['🌥️', ['barely_sunny', 'sun_behind_cloud']], ['🌦️', ['partly_sunny_rain', 'sun_behind_rain_cloud']], ['🌧️', ['rain_cloud']], ['🌨️', ['snow_cloud']], ['🌩️', ['lightning', 'lightning_cloud']], ['🌪️', ['tornado', 'tornado_cloud']], ['🌫️', ['fog']], ['🌬️', ['wind_blowing_face']], ['🌀', ['cyclone']], ['🌈', ['rainbow']], ['🌂', ['closed_umbrella']], ['☂️', ['umbrella']], ['☔', ['umbrella_with_rain_drops']], ['⛱️', ['umbrella_on_ground']], ['⚡', ['zap']], ['❄️', ['snowflake']], ['☃️', ['snowman']], ['⛄', ['snowman_without_snow']], ['☄️', ['comet']], ['🔥', ['fire']], ['💧', ['droplet']], ['🌊', ['ocean']]];
  var ALL = [].concat(FACES_AND_PEOPLE, ACTIVITIES, ANIMALS, FLAGS, FOOD_AND_DRINK, OBJECTS, SYMBOLS, TRAVEL_AND_PLACES);

  function CategoryTabpanels(props) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(CategoryTabpanel, {
      onClick: props.onClick,
      category: CATEGORIES.ALL,
      emoji: ALL
    }), /*#__PURE__*/React__default['default'].createElement(CategoryTabpanel, {
      onClick: props.onClick,
      category: CATEGORIES.FACES,
      emoji: FACES_AND_PEOPLE
    }), /*#__PURE__*/React__default['default'].createElement(CategoryTabpanel, {
      onClick: props.onClick,
      category: CATEGORIES.ANIMALS,
      emoji: ANIMALS
    }), /*#__PURE__*/React__default['default'].createElement(CategoryTabpanel, {
      onClick: props.onClick,
      category: CATEGORIES.FOODS,
      emoji: FOOD_AND_DRINK
    }), /*#__PURE__*/React__default['default'].createElement(CategoryTabpanel, {
      onClick: props.onClick,
      category: CATEGORIES.ACTIVITIES,
      emoji: ACTIVITIES
    }), /*#__PURE__*/React__default['default'].createElement(CategoryTabpanel, {
      onClick: props.onClick,
      category: CATEGORIES.TRAVEL_AND_PLACES,
      emoji: TRAVEL_AND_PLACES
    }), /*#__PURE__*/React__default['default'].createElement(CategoryTabpanel, {
      onClick: props.onClick,
      category: CATEGORIES.OBJECTS,
      emoji: OBJECTS
    }), /*#__PURE__*/React__default['default'].createElement(CategoryTabpanel, {
      onClick: props.onClick,
      category: CATEGORIES.SYMBOLS,
      emoji: SYMBOLS
    }), /*#__PURE__*/React__default['default'].createElement(CategoryTabpanel, {
      onClick: props.onClick,
      category: CATEGORIES.FLAGS,
      emoji: FLAGS
    }));
  }

  function ReactEmojiPickr(props) {
    var _React$useState = React__default['default'].useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isOpen = _React$useState2[0],
        setIsOpen = _React$useState2[1];

    var triggerRef = React.useRef();
    var listboxRef = React.useRef();
    var trigger = /*#__PURE__*/React__default['default'].cloneElement(React__default['default'].Children.only(props.children), {
      'aria-expanded': isOpen ? 'true' : null,
      onClick: function onClick(e) {
        setIsOpen(!isOpen);
      },
      ref: triggerRef
    });

    var onEmojiSelectInternal = function onEmojiSelectInternal(e) {
      var shouldRemainOpen = !!props.onEmojiSelect(e);
      setIsOpen(shouldRemainOpen);
      return e;
    }; // TODO: maybe expose this as a prop so that consumers can provide their own logic?


    var positionAndAlignListbox = function positionAndAlignListbox() {
      var triggerRect = triggerRef.current.getBoundingClientRect();
      var alignAxisVertical = props.position === 'top' || props.position === 'bottom'; // reset all styles...

      var style = {
        bottom: '',
        top: '',
        left: '',
        right: '',
        transform: ''
      };

      switch (props.position) {
        case 'top':
          style.bottom = toPx(document.documentElement.clientHeight - triggerRect.top);
          break;

        case 'bottom':
          style.top = toPx(triggerRect.bottom);
          break;

        case 'left':
          style.right = toPx(triggerRect.right);
          break;

        case 'right':
          style.left = toPx(triggerRect.right);
          break;
      }

      switch (props.align) {
        case 'start':
          if (alignAxisVertical) {
            style.left = toPx(triggerRect.left);
          } else {
            style.top = toPx(triggerRect.top);
          }

          break;

        case 'center':
          if (alignAxisVertical) {
            style.left = toPx(triggerRect.left + triggerRect.width / 2);
            style.transform = 'translateX(-50%)';
          } else {
            style.top = toPx(triggerRect.top + triggerRect.height / 2);
            style.transform = 'translateY(-50%)';
          }

          break;

        case 'end':
          if (alignAxisVertical) {
            style.right = toPx(triggerRect.left);
          } else {
            style.bottom = toPx(document.documentElement.clientHeight - triggerRect.bottom);
          }

          break;
      }

      for (var s in style) {
        listboxRef.current.style[s] = style[s];
      }
    };

    React.useLayoutEffect(function () {
      if (isOpen) {
        var timeout;

        var rafPositionAndAlignListbox = function rafPositionAndAlignListbox() {
          if (timeout) window.cancelAnimationFrame(timeout);
          timeout = window.requestAnimationFrame(positionAndAlignListbox);
        };

        positionAndAlignListbox();
        window.addEventListener('scroll', rafPositionAndAlignListbox);
        window.addEventListener('resize', rafPositionAndAlignListbox);
        return function cleanup() {
          window.removeEventListener('scroll', rafPositionAndAlignListbox);
          window.removeEventListener('resize', rafPositionAndAlignListbox);
        };
      }
    }, [isOpen, props]);
    React.useEffect(function () {
      if (isOpen) {
        var firstFocusableElem = listboxRef.current && listboxRef.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusableElem) firstFocusableElem.focus();
      }
    }, [isOpen]);

    var handleKeyboardClose = function handleKeyboardClose(_ref) {
      var key = _ref.key;

      if (key === 'Escape') {
        triggerRef.current && triggerRef.current.focus();
        setIsOpen(false);
      }
    };

    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, trigger, isOpen && /*#__PURE__*/React__default['default'].createElement("div", {
      ref: listboxRef,
      onKeyDown: handleKeyboardClose,
      "data-emoji-listbox": true
    }, /*#__PURE__*/React__default['default'].createElement(Tabs, {
      initialTab: CATEGORIES.ALL
    }, /*#__PURE__*/React__default['default'].createElement(CategoriesTablist, null), /*#__PURE__*/React__default['default'].createElement(CategoryTabpanels, {
      onClick: onEmojiSelectInternal
    }))));
  }

  ReactEmojiPickr.propTypes = {
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    align: PropTypes.oneOf(['start', 'center', 'end']),
    onEmojiSelect: PropTypes.func.isRequired,
    children: function ReactEmojiPickrTriggerType(props, propName, componentName) {
      if (props[propName].type !== Trigger) {
        return new Error("Invalid child supplied to ".concat(componentName, ". It must only render a ReactEmojiPickr.Trigger!"));
      }
    }
  };
  ReactEmojiPickr.defaultProps = {
    position: 'top',
    align: 'center'
  };
  ReactEmojiPickr.Trigger = Trigger;

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "[data-emoji-trigger] {\n  border: 1px solid slategrey;\n  border-radius: 3px;\n}\n\n[data-emoji-listbox] {\n  background: #fff;\n  border: 1px solid slategrey;\n  border-radius: 3px;\n  /* margin: 3px; */\n  position: fixed;\n}\n\n[data-emoji-button],\n[data-emoji-category-tab] {\n  border: none;\n  border-radius: 3px;\n  background: none;\n  padding: 2px;\n}\n\n[data-emoji-button]:hover,\n[data-emoji-category-tab]:hover {\n  background: gainsboro;\n}\n\n[data-emoji-category-tab] {\n  line-height: 0;\n  margin: 0 1px;\n}\n\n[data-emoji-list] {\n  display: flex;\n  flex-direction: column;\n}\n\n[data-emoji-button] {\n  font-size: 18px;\n  line-height: 1.3;\n}\n\n[data-emoji-button]::before {\n  content: \"\";\n  padding-left: 3px;\n}\n\n[data-emoji-category-tab][aria-selected=\"true\"] {\n  position: relative;\n}\n\n[data-emoji-category-tab][aria-selected=\"true\"] {\n  fill: steelblue;\n}\n\n[data-emoji-category-tab][aria-selected=\"true\"]::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  border-bottom: 2px solid steelblue;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n[data-emoji-category-tablist] {\n  border-bottom: 1px solid slategrey;\n  display: flex;\n  justify-content: space-evenly;\n  padding: 2px 1px;\n}\n\n[data-emoji-searchinput] {\n  border: 1px solid slategrey;\n  border-radius: 3px;\n  margin: 6px;\n  padding: 4px 6px;\n}\n\n[data-emoji-scroll-list]:not([hidden]) {\n  display: grid;\n  grid-template-columns: repeat(7, 28px);\n  grid-template-rows: auto;\n  grid-column-gap: 3px;\n  max-height: 200px;\n  overflow-x: scroll;\n  padding: 2px 4px;\n}\n";
  styleInject(css_248z);

  var Radio = function Radio(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties$1(_ref, ["children"]);

    return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("label", null, /*#__PURE__*/React__default['default'].createElement("input", _extends$1({}, props, {
      type: "radio"
    })), children));
  };

  var App = function App() {
    var _useState = React.useState('top'),
        _useState2 = _slicedToArray$1(_useState, 2),
        position = _useState2[0],
        setPosition = _useState2[1];

    var _useState3 = React.useState('center'),
        _useState4 = _slicedToArray$1(_useState3, 2),
        align = _useState4[0],
        setAlignment = _useState4[1];

    var _useState5 = React.useState([]),
        _useState6 = _slicedToArray$1(_useState5, 2),
        selectedEmojis = _useState6[0],
        setSelectedEmojis = _useState6[1];

    var _useState7 = React.useState(false),
        _useState8 = _slicedToArray$1(_useState7, 2),
        keepEmojiMenuOpenAfterSelection = _useState8[0],
        setKeepEmojiOpen = _useState8[1];

    var handleKeepEmojiOpenSetting = function handleKeepEmojiOpenSetting() {
      setKeepEmojiOpen(!keepEmojiMenuOpenAfterSelection);
    };

    var handleEmojiSelect = function handleEmojiSelect(evt) {
      var emoji = evt.target.value;
      console.log('selected emoji:', emoji);
      setSelectedEmojis(selectedEmojis.concat(emoji));
      return keepEmojiMenuOpenAfterSelection;
    };

    var handleSetPosition = function handleSetPosition(e) {
      return setPosition(e.target.value);
    };

    var handleSetAlignment = function handleSetAlignment(e) {
      return setAlignment(e.target.value);
    };

    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        width: '100vw',
        height: '100vh',
        margin: '25vh 0'
      }
    }, /*#__PURE__*/React__default['default'].createElement("fieldset", null, /*#__PURE__*/React__default['default'].createElement("legend", null, "Positioning"), /*#__PURE__*/React__default['default'].createElement(Radio, {
      name: "positioning",
      value: "top",
      onChange: handleSetPosition,
      checked: position === 'top'
    }, "Top"), /*#__PURE__*/React__default['default'].createElement(Radio, {
      name: "positioning",
      value: "bottom",
      onChange: handleSetPosition,
      checked: position === 'bottom'
    }, "Bottom"), /*#__PURE__*/React__default['default'].createElement(Radio, {
      name: "positioning",
      value: "left",
      onChange: handleSetPosition,
      checked: position === 'left'
    }, "Left"), /*#__PURE__*/React__default['default'].createElement(Radio, {
      name: "positioning",
      value: "right",
      onChange: handleSetPosition,
      checked: position === 'right'
    }, "Right")), /*#__PURE__*/React__default['default'].createElement("fieldset", null, /*#__PURE__*/React__default['default'].createElement("legend", null, "Alignment"), /*#__PURE__*/React__default['default'].createElement(Radio, {
      name: "alignment",
      value: "start",
      onChange: handleSetAlignment,
      checked: align === 'start'
    }, "Start"), /*#__PURE__*/React__default['default'].createElement(Radio, {
      name: "alignment",
      value: "center",
      onChange: handleSetAlignment,
      checked: align === 'center'
    }, "Center"), /*#__PURE__*/React__default['default'].createElement(Radio, {
      name: "alignment",
      value: "end",
      onChange: handleSetAlignment,
      checked: align === 'end'
    }, "End")), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("label", null, /*#__PURE__*/React__default['default'].createElement("input", {
      type: "checkbox",
      checked: keepEmojiMenuOpenAfterSelection,
      onChange: handleKeepEmojiOpenSetting
    }), "Keep emoji menu open after selection?")), /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React__default['default'].createElement(ReactEmojiPickr, {
      onEmojiSelect: handleEmojiSelect,
      position: position,
      align: align
    }, /*#__PURE__*/React__default['default'].createElement(ReactEmojiPickr.Trigger, {
      "aria-label": "Select an emoji",
      id: "emojiBtnTrigger",
      style: {
        margin: 3
      }
    }, ":D")), /*#__PURE__*/React__default['default'].createElement("p", null, "Selected emojis: ", selectedEmojis.join(' '), " ")));
  };

  ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement(App, null), document.getElementById('root'));

})));
