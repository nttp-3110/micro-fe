(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("frint-react"), require("react"), require("frint"), require("frint-store"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["frint-react", "react", "frint", "frint-store", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("frint-react"), require("react"), require("frint"), require("frint-store"), require("prop-types")) : factory(root["FrintReact"], root["React"], root["Frint"], root["FrintStore"], root["PropTypes"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_21__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INCREMENT_COUNTER = exports.INCREMENT_COUNTER = "INCREMENT_COUNTER";
var DECREMENT_COUNTER = exports.DECREMENT_COUNTER = "DECREMENT_COUNTER";

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(19);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.app.registerApp(_app2.default, {
  regions: ['main'],
  weight: 50
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frint = __webpack_require__(2);

var _frintStore = __webpack_require__(3);

var _frintReact = __webpack_require__(0);

var _Root = __webpack_require__(20);

var _Root2 = _interopRequireDefault(_Root);

var _reducers = __webpack_require__(23);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frint.createApp)({
  name: 'CounterApp',
  providers: [{
    name: 'component',
    useValue: _Root2.default
  }, {
    name: 'store',
    useFactory: function useFactory(_ref) {
      var app = _ref.app;

      var Store = (0, _frintStore.createStore)({
        initialState: {
          counter: {
            value: 5
          }
        },
        reducer: _reducers2.default,
        deps: { app: app }
      });

      return new Store();
    },
    deps: ['app']
  }, {
    name: 'region',
    useClass: _frintReact.RegionService
  }]
});
module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _frintReact = __webpack_require__(0);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _counter = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var codeStyle = {
        color: this.props.color,
        backgroundColor: this.props.color
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h5',
          null,
          'App: Counter'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Counter value in ',
          _react2.default.createElement(
            'strong',
            null,
            'CounterApp'
          ),
          ': ',
          _react2.default.createElement(
            'code',
            null,
            this.props.counter
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            {
              className: 'button button-primary',
              onClick: function onClick() {
                return _this2.props.incrementCounter();
              }
            },
            '+'
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'button',
              onClick: function onClick() {
                return _this2.props.decrementCounter();
              }
            },
            '-'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'Color value from ',
          _react2.default.createElement(
            'strong',
            null,
            'ColorApp'
          ),
          ': ',
          _react2.default.createElement(
            'code',
            { style: codeStyle },
            this.props.color
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'a',
            {
              href: '#',
              onClick: function onClick() {
                return _this2.props.changeColor('blue');
              }
            },
            'Change'
          ),
          ' to blue from here!'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'Region Props:'
            )
          ),
          _react2.default.createElement(
            'pre',
            null,
            _react2.default.createElement(
              'code',
              null,
              JSON.stringify(this.props.regionProps, null, 2)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'Services:'
            )
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Foo'
              ),
              ' (cascaded): is from ',
              _react2.default.createElement(
                'code',
                null,
                this.props.foo.getAppName()
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Bar'
              ),
              ' (cascaded and scoped): is from ',
              _react2.default.createElement(
                'code',
                null,
                this.props.bar.getAppName()
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Baz'
              ),
              ' (not cascaded): is unavaialble - ',
              _react2.default.createElement(
                'code',
                null,
                this.props.baz
              )
            )
          )
        )
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

Root.propTypes = {
  color: _propTypes2.default.string,
  counter: _propTypes2.default.number,
  incrementCounter: _propTypes2.default.func,
  decrementCounter: _propTypes2.default.func,
  changeColor: _propTypes2.default.func,
  regionProps: _propTypes2.default.object,
  foo: _propTypes2.default.object,
  bar: _propTypes2.default.object,
  baz: _propTypes2.default.object
};
exports.default = (0, _frintReact.observe)(function (app) {
  // eslint-disable-line func-names
  return (0, _frintReact.streamProps)({}) // start with defualt props
  // map state to this Component's props
  .set(app.get('store').getState$(), function (state) {
    return { counter: state.counter.value };
  })

  // map Region's props to this Component's props
  .set(app.get('region').getProps$(), function (regionProps) {
    return { regionProps: regionProps };
  })

  // map dispatchable actions
  .setDispatch({
    incrementCounter: _counter.incrementCounter,
    decrementCounter: _counter.decrementCounter
  }, app.get('store'))

  // services
  .set({
    foo: app.get('foo'),
    bar: app.get('bar'),
    baz: app.get('baz')
  })

  // other app: ColorApp
  .set(app.getAppOnceAvailable$('ColorApp'), function (colorApp) {
    return colorApp.get('store').getState$();
  }, function (colorAppState) {
    return { color: colorAppState.color.value };
  }).set(app.getAppOnceAvailable$('ColorApp'), function (colorApp) {
    return colorApp.get('store');
  }, function (colorAppStore) {
    return {
      changeColor: function changeColor(color) {
        return colorAppStore.dispatch({
          type: 'CHANGE_COLOR',
          color: color
        });
      }
    };
  })

  // return composed Observable
  .get$();
})(Root);
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incrementCounter = incrementCounter;
exports.decrementCounter = decrementCounter;

var _constants = __webpack_require__(8);

function incrementCounter() {
  return {
    type: _constants.INCREMENT_COUNTER
  };
}

function decrementCounter() {
  return {
    type: _constants.DECREMENT_COUNTER
  };
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frintStore = __webpack_require__(3);

var _counter = __webpack_require__(24);

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frintStore.combineReducers)({
  counter: _counter2.default
});
module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = counter;

var _constants = __webpack_require__(8);

var INITIAL_STATE = {
  value: 5
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _constants.INCREMENT_COUNTER:
      return Object.assign({}, {
        value: state.value + 1
      });

    case _constants.DECREMENT_COUNTER:
      return Object.assign({}, {
        value: state.value - 1
      });

    default:
      return state;
  }
}
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=app-counter.js.map