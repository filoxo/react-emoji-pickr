
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
  (global = global || self, factory(global.React, global.ReactDOM));
}(this, (function (React, ReactDOM) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

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
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function Trigger(props) {
    return React__default.createElement("button", _extends({}, props, {
      type: "button"
    }));
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

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

  var css = ".Listbox_listbox__3U5Dc {\n  border: 1px solid slategrey;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n}\n\n.Listbox_categories__3mZpj {\n  border-bottom: 1px solid slategrey;\n}\n\n.Listbox_categoryBtn__263j9 {\n  background: none;\n  border: none;\n  line-height: 0;\n  padding: 2px;\n  margin: 2px 1px;\n  border-radius: 3px;\n}\n\n.Listbox_categoryBtn__263j9:hover {\n  background: gainsboro;\n}\n\n.Listbox_search__2r_cS {\n  border: 1px solid slategrey;\n  border-radius: 3px;\n  display: block;\n  margin: 6px;\n  padding: 3px;\n}\n";
  var styles = {
    "listbox": "Listbox_listbox__3U5Dc",
    "categories": "Listbox_categories__3mZpj",
    "categoryBtn": "Listbox_categoryBtn__263j9",
    "search": "Listbox_search__2r_cS"
  };
  styleInject(css);
  var TabContext = React__default.createContext({
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
    return React__default.createElement("button", _extends({}, props, {
      role: "tab",
      id: id,
      "aria-selected": isSelected,
      "aria-controls": id + "-panel",
      onClick: function onClick() {
        return setCurrentTab(id);
      },
      "aria-label": label,
      tabIndex: !isSelected ? "-1" : undefined
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
        case "ArrowRight":
          e.preventDefault();
          var nextTabIndex = Math.min(currentTabIndex + 1, tabsRef.current.length - 1);
          tabsRef.current[nextTabIndex].click();
          tabsRef.current[nextTabIndex].focus();
          break;

        case "ArrowLeft":
          e.preventDefault();
          var prevTabIndex = Math.max(currentTabIndex - 1, 0);
          tabsRef.current[prevTabIndex].click();
          tabsRef.current[prevTabIndex].focus();
          break;
      }
    };

    return React__default.createElement("div", _extends({}, props, {
      ref: tablistRef,
      onKeyDown: handleKeypress,
      role: "tablist"
    }));
  }

  function Tabpanel(_ref) {
    var children = _ref.children,
        id = _ref.id;

    var _useContext = React.useContext(TabContext),
        currentTab = _useContext.currentTab;

    var isSelected = currentTab === id;
    return React__default.createElement("div", {
      role: "tabpanel",
      id: id + "-panel",
      "aria-labelledby": id,
      tabIndex: "0",
      hidden: !isSelected
    }, isSelected && children);
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

    return React__default.createElement(TabContext.Provider, {
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
    ALL: "All",
    FACES: "Faces",
    ANIMALS: "Animals",
    FOODS: "Foods",
    SPORTS: "Sports",
    VEHICLES: "Vehicles",
    THINGS: "Things",
    SYMBOLS: "Symbols",
    FLAGS: "Flags",
    SPECIAL: "SpecialCharacters"
  };

  var IconBase = function IconBase(pathD) {
    return function (_ref) {
      var _ref$size = _ref.size,
          size = _ref$size === void 0 ? 16 : _ref$size;
      return React__default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size
      }, React__default.createElement("path", {
        d: pathD
      }));
    };
  };

  var IconPeople = IconBase("M8 7a2 2 0 100 4 2 2 0 000-4m8 0a2 2 0 100 4 2 2 0 000-4m-.8 8c-.7 1.2-1.8 2-3.3 2-1.5 0-2.7-.8-3.4-2H15m3-2H6a6 6 0 1012 0M12 0a12 12 0 100 24 12 12 0 000-24m0 22a10 10 0 110-20 10 10 0 010 20");
  var IconRecent = IconBase("M12 0a12 12 0 100 24 12 12 0 000-24m0 22a10 10 0 110-20 10 10 0 010 20m1-18h-2v7H9v2h2v2h2v-2h4v-2h-4z");

  function CategoriesTablist(props) {
    return React__default.createElement(Tabs.Tablist, {
      "aria-label": "Emoji Categories"
    }, React__default.createElement(Tabs.Tab, {
      id: CATEGORIES.ALL,
      label: "Recent and all emoji"
    }, React__default.createElement(IconRecent, null)), React__default.createElement(Tabs.Tab, {
      id: CATEGORIES.FACES,
      label: "People emoji"
    }, React__default.createElement(IconPeople, null)));
  }

  function CategoryTabpanels(props) {
    return React__default.createElement("div", null, React__default.createElement(Tabs.Tabpanel, {
      id: CATEGORIES.ALL
    }, "All content"), React__default.createElement(Tabs.Tabpanel, {
      id: CATEGORIES.FACES
    }, "Faces content"));
  }

  function Listbox(props) {
    return React__default.createElement("div", {
      className: styles.listbox
    }, React__default.createElement(Tabs, {
      initialTab: CATEGORIES.ALL
    }, React__default.createElement(CategoriesTablist, null), React__default.createElement("input", {
      type: "text",
      placeholder: "Search...",
      autoFocus: true,
      className: styles.search
    }), React__default.createElement(CategoryTabpanels, null)));
  }

  function ReactEmojiPickr(props) {
    var _React$useState = React__default.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isOpen = _React$useState2[0],
        setIsOpen = _React$useState2[1];

    var trigger = React__default.cloneElement(React__default.Children.only(props.children), {
      "aria-expanded": isOpen ? "true" : null,
      onClick: function onClick(e) {
        setIsOpen(!isOpen);
      }
    });
    return React__default.createElement(React__default.Fragment, null, trigger, isOpen && React__default.createElement(Listbox, null));
  }

  ReactEmojiPickr.propTypes = {
    children: function ReactEmojiPickrTriggerType(props, propName, componentName) {
      if (props[propName].type !== Trigger) {
        return new Error("Invalid child supplied to ".concat(componentName, ". It must only render a ReactEmojiPickr.Trigger!"));
      }
    }
  };
  ReactEmojiPickr.Trigger = Trigger;
  ReactEmojiPickr.Listbox = Listbox;

  var App = function App() {
    return React__default.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh"
      }
    }, React__default.createElement(ReactEmojiPickr, null, React__default.createElement(ReactEmojiPickr.Trigger, null, ":D")));
  };

  ReactDOM.render(React__default.createElement(App, null), document.getElementById("root"));

})));
