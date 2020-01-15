(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("frint-react"), require("react"), require("frint"), require("frint-store"), require("rxjs/operator/map"), require("rxjs/Observable"), require("rxjs/operator/scan"), require("rxjs/operator/merge"), require("prop-types"), require("rxjs/operator/concatMap"), require("rxjs/operator/delay"), require("rxjs/operator/filter"));
	else if(typeof define === 'function' && define.amd)
		define(["frint-react", "react", "frint", "frint-store", "rxjs/operator/map", "rxjs/Observable", "rxjs/operator/scan", "rxjs/operator/merge", "prop-types", "rxjs/operator/concatMap", "rxjs/operator/delay", "rxjs/operator/filter"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("frint-react"), require("react"), require("frint"), require("frint-store"), require("rxjs/operator/map"), require("rxjs/Observable"), require("rxjs/operator/scan"), require("rxjs/operator/merge"), require("prop-types"), require("rxjs/operator/concatMap"), require("rxjs/operator/delay"), require("rxjs/operator/filter")) : factory(root["FrintReact"], root["React"], root["Frint"], root["FrintStore"], root["Rx"]["Observable"]["prototype"], root["Rx"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["PropTypes"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GREEN_COLOR = exports.GREEN_COLOR = '#5cb85c';
var RED_COLOR = exports.RED_COLOR = '#d9534f';
var ORANGE_COLOR = exports.ORANGE_COLOR = '#FFA500';
var DEFAULT_COLOR = exports.DEFAULT_COLOR = GREEN_COLOR;

var CHANGE_COLOR = exports.CHANGE_COLOR = 'CHANGE_COLOR';
var CHANGE_COLOR_ASYNC = exports.CHANGE_COLOR_ASYNC = 'CHANGE_COLOR_ASYNC';

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeColor = changeColor;

var _constants = __webpack_require__(6);

function changeColor(color) {
  return {
    type: _constants.CHANGE_COLOR,
    color: color
  };
}

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(23);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.app.registerApp(_app2.default, {
  regions: ['sidebar']
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frint = __webpack_require__(2);

var _frintReact = __webpack_require__(0);

var _frintStore = __webpack_require__(3);

var _constants = __webpack_require__(6);

var _Root = __webpack_require__(24);

var _Root2 = _interopRequireDefault(_Root);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _epics = __webpack_require__(28);

var _epics2 = _interopRequireDefault(_epics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frint.createApp)({
  name: 'ColorApp',
  providers: [{
    name: 'component',
    useValue: _Root2.default
  }, {
    name: 'store',
    useFactory: function useFactory(_ref) {
      var app = _ref.app;

      var Store = (0, _frintStore.createStore)({
        initialState: {
          color: {
            value: _constants.DEFAULT_COLOR
          }
        },
        reducer: _reducers2.default,
        epic: _epics2.default,
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _frintReact = __webpack_require__(0);

var _Observable = __webpack_require__(5);

var _concatMap = __webpack_require__(25);

var _map = __webpack_require__(4);

var _merge = __webpack_require__(9);

var _scan = __webpack_require__(7);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _color = __webpack_require__(11);

var _constants = __webpack_require__(6);

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
          'App: Color'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Color value in ',
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
          'div',
          null,
          _react2.default.createElement(
            'button',
            {
              className: 'button',
              onClick: function onClick() {
                return _this2.props.changeColor(_constants.GREEN_COLOR);
              },
              style: { backgroundColor: _constants.GREEN_COLOR, color: '#fff' }
            },
            'Green'
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'button',
              onClick: function onClick() {
                return _this2.props.changeColor(_constants.RED_COLOR);
              },
              style: { backgroundColor: _constants.RED_COLOR, color: '#fff' }
            },
            'Red'
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'button',
              onClick: function onClick() {
                return _this2.props.changeColorAsync(_constants.ORANGE_COLOR);
              },
              style: { backgroundColor: _constants.ORANGE_COLOR, color: '#fff' }
            },
            'Async'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'Counter value from ',
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
          'p',
          null,
          _react2.default.createElement(
            'a',
            {
              href: '#',
              onClick: function onClick() {
                return _this2.props.incrementCounter();
              }
            },
            'Increment'
          ),
          ' counter from here.'
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
  changeColorAsync: _propTypes2.default.func,
  regionProps: _propTypes2.default.object,
  foo: _propTypes2.default.object,
  bar: _propTypes2.default.object,
  baz: _propTypes2.default.object
};
exports.default = (0, _frintReact.observe)(function (app) {
  var _context;

  // eslint-disable-line func-names
  // self
  var store = app.get('store');
  var region = app.get('region');

  var state$ = (_context = store.getState$(), _map.map).call(_context, function (state) {
    return {
      color: state.color.value
    };
  });

  var regionProps$ = (_context = region.getProps$(), _map.map).call(_context, function (regionProps) {
    return {
      regionProps: regionProps
    };
  });

  var actions$ = _Observable.Observable.of({
    changeColor: function changeColor() {
      return store.dispatch(_color.changeColor.apply(undefined, arguments));
    },
    changeColorAsync: function changeColorAsync(color) {
      return store.dispatch({
        type: _constants.CHANGE_COLOR_ASYNC,
        color: color
      });
    }
  });

  var services$ = _Observable.Observable.of({
    foo: app.get('foo'),
    bar: app.get('bar'),
    baz: app.get('baz')
  });

  // other app: CounterApp
  var counterApp$ = app.getAppOnceAvailable$('CounterApp');
  var counterAppState$ = (_context = _concatMap.concatMap.call(counterApp$, function (counterApp) {
    return counterApp.get('store').getState$();
  }), _map.map).call(_context, function (counterState) {
    return {
      counter: counterState.counter.value
    };
  });

  var counterAppActions$ = _map.map.call(counterApp$, function (counterApp) {
    var counterStore = counterApp.get('store');
    return {
      incrementCounter: function incrementCounter() {
        return counterStore.dispatch({ type: 'INCREMENT_COUNTER' });
      }
    };
  });

  // combine them all into props
  return (_context = (_context = (_context = (_context = (_context = _merge.merge.call(state$, regionProps$), _merge.merge).call(_context, actions$), _merge.merge).call(_context, services$), _merge.merge).call(_context, counterAppState$), _merge.merge).call(_context, counterAppActions$), _scan.scan).call(_context, function (props, emitted) {
    return _extends({}, props, emitted);
  }, {
    // default props to start with
    counter: 0
  });
})(Root);
module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frintStore = __webpack_require__(3);

var _color = __webpack_require__(27);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frintStore.combineReducers)({
  color: _color2.default
});
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = color;

var _constants = __webpack_require__(6);

var INITIAL_STATE = {
  value: _constants.DEFAULT_COLOR
};

function color() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _constants.CHANGE_COLOR:
      return Object.assign({}, {
        value: action.color
      });

    default:
      return state;
  }
}
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frintStore = __webpack_require__(3);

var _color = __webpack_require__(29);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frintStore.combineEpics)(_color2.default);
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = colorEpic$;

var _delay = __webpack_require__(30);

var _filter = __webpack_require__(31);

var _map = __webpack_require__(4);

var _constants = __webpack_require__(6);

var _color = __webpack_require__(11);

function colorEpic$(action$) {
  var _context;

  return (_context = (_context = _filter.filter.call(action$, function (action) {
    return action.type === _constants.CHANGE_COLOR_ASYNC;
  }), _delay.delay).call(_context, 1000), _map.map).call(_context, function (action) {
    return (0, _color.changeColor)(action.color);
  });
}
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=app-color.js.map