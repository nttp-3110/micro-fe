(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("frint-react"), require("frint"), require("react"), require("rxjs/Observable"), require("rxjs/BehaviorSubject"));
	else if(typeof define === 'function' && define.amd)
		define(["frint-react", "frint", "react", "rxjs/Observable", "rxjs/BehaviorSubject"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("frint-react"), require("frint"), require("react"), require("rxjs/Observable"), require("rxjs/BehaviorSubject")) : factory(root["FrintReact"], root["Frint"], root["React"], root["Rx"], root["Rx"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_11__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */,
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _frintReact = __webpack_require__(0);

var _app = __webpack_require__(9);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.app = new _app2.default();

(0, _frintReact.render)(window.app, document.getElementById('root'));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frint = __webpack_require__(2);

var _Root = __webpack_require__(10);

var _Root2 = _interopRequireDefault(_Root);

var _Foo = __webpack_require__(12);

var _Foo2 = _interopRequireDefault(_Foo);

var _Bar = __webpack_require__(13);

var _Bar2 = _interopRequireDefault(_Bar);

var _Baz = __webpack_require__(14);

var _Baz2 = _interopRequireDefault(_Baz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frint.createApp)({
  name: 'microFeApp',
  providers: [{
    name: 'component',
    useValue: _Root2.default
  }, {
    name: 'foo',
    useClass: _Foo2.default,
    cascade: true, // the same instance will be shared with children
    deps: ['app']
  }, {
    name: 'bar',
    useClass: _Bar2.default,
    cascade: true,
    scoped: true, // the same class, will be shared with children, but with fresh new instance scoped by Child
    deps: ['app']
  }, {
    name: 'baz',
    useClass: _Baz2.default,
    cascade: false, // will not be shared with children at all
    deps: ['app']
  }]
});
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _frintReact = __webpack_require__(0);

var _BehaviorSubject = __webpack_require__(11);

var _Observable = __webpack_require__(4);

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

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'seven columns' },
            _react2.default.createElement(
              'h3',
              null,
              'Main'
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(_frintReact.Region, {
              name: 'main',
              data: {
                hi: 'available from props of \'main\' region',
                showSidebar: this.props.showSidebar
              }
            }),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'h3',
              null,
              'Core: ',
              this.props.appName
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: '#',
                  onClick: function onClick() {
                    return _this2.props.toggle(!_this2.props.showSidebar);
                  }
                },
                'Toggle sidebar'
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
                  ' (self): is from ',
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
                  ' (self): is from ',
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
                  ' (self): is from ',
                  _react2.default.createElement(
                    'code',
                    null,
                    this.props.baz.getAppName()
                  )
                )
              )
            )
          ),
          this.props.showSidebar && _react2.default.createElement(
            'div',
            { className: 'five columns' },
            _react2.default.createElement(
              'h3',
              null,
              'Sidebar'
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(_frintReact.Region, {
              name: 'sidebar',
              data: {
                hi: 'data from \'sidebar\' region here',
                showSidebar: this.props.showSidebar
              }
            })
          )
        )
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

exports.default = (0, _frintReact.observe)(function (app) {
  var sidebarToggle$ = new _BehaviorSubject.BehaviorSubject(true).map(function (toggleValue) {
    return {
      showSidebar: toggleValue
    };
  });

  var actions$ = _Observable.Observable.of({
    toggle: function toggle(value) {
      sidebarToggle$.next(value);
    }
  });

  var services$ = _Observable.Observable.of({
    foo: app.get('foo'),
    bar: app.get('bar'),
    baz: app.get('baz')
  });

  return sidebarToggle$.merge(actions$).merge(services$).scan(function (props, emitted) {
    return _extends({}, props, emitted);
  }, {
    // start with these props
    appName: app.getName()
  });
})(Root);
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function () {
  function Foo(_ref) {
    var app = _ref.app;

    _classCallCheck(this, Foo);

    this.app = app;
  }

  _createClass(Foo, [{
    key: "getAppName",
    value: function getAppName() {
      return this.app.getName();
    }
  }]);

  return Foo;
}();

exports.default = Foo;
module.exports = exports["default"];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bar = function () {
  function Bar(_ref) {
    var app = _ref.app;

    _classCallCheck(this, Bar);

    this.app = app;
  }

  _createClass(Bar, [{
    key: "getAppName",
    value: function getAppName() {
      return this.app.getName();
    }
  }]);

  return Bar;
}();

exports.default = Bar;
module.exports = exports["default"];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Baz = function () {
  function Baz(_ref) {
    var app = _ref.app;

    _classCallCheck(this, Baz);

    this.app = app;
  }

  _createClass(Baz, [{
    key: "getAppName",
    value: function getAppName() {
      return this.app.getName();
    }
  }]);

  return Baz;
}();

exports.default = Baz;
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=core.js.map