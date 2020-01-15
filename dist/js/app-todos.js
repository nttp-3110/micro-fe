(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("frint-react"), require("react"), require("frint"), require("frint-store"), require("rxjs/BehaviorSubject"), require("rxjs/Observable"), require("rxjs/operator/map"), require("rxjs/operator/scan"), require("lodash"), require("rxjs/operator/merge"));
	else if(typeof define === 'function' && define.amd)
		define(["frint-react", "react", "frint", "frint-store", "rxjs/BehaviorSubject", "rxjs/Observable", "rxjs/operator/map", "rxjs/operator/scan", "lodash", "rxjs/operator/merge"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("frint-react"), require("react"), require("frint"), require("frint-store"), require("rxjs/BehaviorSubject"), require("rxjs/Observable"), require("rxjs/operator/map"), require("rxjs/operator/scan"), require("lodash"), require("rxjs/operator/merge")) : factory(root["FrintReact"], root["React"], root["Frint"], root["FrintStore"], root["Rx"], root["Rx"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["_"], root["Rx"]["Observable"]["prototype"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_31__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.removeTodo = removeTodo;
exports.updateTodo = updateTodo;

var _constants = __webpack_require__(11);

function addTodo(title) {
  return {
    type: _constants.TODOS_ADD,
    title: title
  };
}

function removeTodo(id) {
  return {
    type: _constants.TODOS_DELETE,
    id: id
  };
}

function updateTodo(id, title) {
  return {
    type: _constants.TODOS_UPDATE,
    id: id,
    title: title
  };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TODOS_ADD = exports.TODOS_ADD = 'TODOS_ADD';
var TODOS_DELETE = exports.TODOS_DELETE = 'TODOS_DELETE';
var TODOS_UPDATE = exports.TODOS_UPDATE = 'TODOS_UPDATE';

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
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(29);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.app.registerApp(_app2.default, {
  regions: ['main'],
  weight: 100
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(9);

var _lodash2 = _interopRequireDefault(_lodash);

var _frint = __webpack_require__(2);

var _frintStore = __webpack_require__(3);

var _frintReact = __webpack_require__(0);

var _Root = __webpack_require__(30);

var _Root2 = _interopRequireDefault(_Root);

var _reducers = __webpack_require__(33);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frint.createApp)({
  name: 'TodosApp',
  providers: [{
    name: 'component',
    useValue: _Root2.default
  }, {
    name: 'store',
    useFactory: function useFactory(_ref) {
      var app = _ref.app;

      var Store = (0, _frintStore.createStore)({
        initialState: {
          todos: {
            records: [{
              id: _lodash2.default.uniqueId(),
              title: 'First todo'
            }, {
              id: _lodash2.default.uniqueId(),
              title: 'Second todo'
            }]
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
/* 30 */
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

var _BehaviorSubject = __webpack_require__(4);

var _Observable = __webpack_require__(5);

var _map = __webpack_require__(6);

var _merge = __webpack_require__(31);

var _scan = __webpack_require__(7);

var _todos = __webpack_require__(10);

var _Item = __webpack_require__(32);

var _Item2 = _interopRequireDefault(_Item);

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
        null,
        _react2.default.createElement(
          'h5',
          null,
          'App: Todos'
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: 'todoInput' },
          'Create a new Todo item'
        ),
        _react2.default.createElement('input', {
          className: 'u-full-width',
          type: 'text',
          placeholder: 'my todo title...',
          id: 'todoInput',
          value: this.props.inputValue,
          onChange: function onChange(e) {
            return _this2.props.changeInput(e.target.value);
          }
        }),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'button-primary',
            onClick: function onClick() {
              return _this2.props.addTodo(_this2.props.inputValue);
            }
          },
          'Submit'
        ),
        _react2.default.createElement(
          'div',
          null,
          this.props.todos.map(function (todo, index) {
            return _react2.default.createElement(_Item2.default, {
              key: 'todo-' + index,
              todo: todo
            });
          })
        )
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

exports.default = (0, _frintReact.observe)(function (app) {
  var _context;

  // eslint-disable-line func-names
  var store = app.get('store');

  var state$ = (_context = store.getState$(), _map.map).call(_context, function (state) {
    return {
      todos: state.todos.records
    };
  });

  var formInput$ = (_context = new _BehaviorSubject.BehaviorSubject(''), _map.map).call(_context, function (inputValue) {
    return {
      inputValue: inputValue
    };
  });
  var clearInput = function clearInput() {
    return formInput$.next('');
  };
  var changeInput = function changeInput(value) {
    return formInput$.next(value);
  };

  var actions$ = _Observable.Observable.of({
    addTodo: function addTodo() {
      clearInput();
      return store.dispatch(_todos.addTodo.apply(undefined, arguments));
    },
    changeInput: changeInput,
    clearInput: clearInput
  });

  return (_context = _merge.merge.call(state$, actions$, formInput$), _scan.scan).call(_context, function (props, emitted) {
    return _extends({}, props, emitted);
  }, {
    todos: []
  });
})(Root);
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _frintReact = __webpack_require__(0);

var _BehaviorSubject = __webpack_require__(4);

var _todos = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var todo = this.props.todo;


      return _react2.default.createElement(
        'div',
        { style: { background: '#f1f1f1', border: '1px solid #e1e1e1', marginBottom: '15px', padding: '15px', borderRadius: '4px' } },
        !this.props.showEditForm && _react2.default.createElement(
          'p',
          null,
          todo.title,
          '[',
          _react2.default.createElement(
            'a',
            { href: 'javascript:', onClick: function onClick() {
                return _this2.props.edit(todo);
              } },
            'edit'
          ),
          '] [',
          _react2.default.createElement(
            'a',
            { href: 'javascript:', onClick: function onClick() {
                return _this2.props.removeTodo(todo.id);
              } },
            'x'
          ),
          ']'
        ),
        this.props.showEditForm && _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('input', {
            className: 'u-full-width',
            type: 'text',
            placeholder: 'my todo title...',
            id: 'todoItemInput',
            value: this.props.inputValue,
            onChange: function onChange(e) {
              return _this2.props.changeInput(e.target.value);
            }
          }),
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'button-primary',
              onClick: function onClick() {
                return _this2.props.submit(todo.id, _this2.props.inputValue);
              }
            },
            'Submit'
          ),
          '[',
          _react2.default.createElement(
            'a',
            { href: 'javascript:', onClick: function onClick() {
                return _this2.props.cancelEdit();
              } },
            'cancel'
          ),
          ']'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Below is Region ',
          _react2.default.createElement(
            'strong',
            null,
            'todo-item'
          ),
          ' that is specific to this Todo item:'
        ),
        _react2.default.createElement(_frintReact.Region, {
          name: 'todo-item',
          uniqueKey: 'todo-item-' + todo.id,
          data: { text: todo.title }
        })
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

exports.default = (0, _frintReact.observe)(function (app) {
  var showEditForm$ = new _BehaviorSubject.BehaviorSubject(false); // start with hidden form
  var formInput$ = new _BehaviorSubject.BehaviorSubject('');
  var store = app.get('store');

  var cancelEdit = function cancelEdit() {
    formInput$.next(''); // clear input field value
    showEditForm$.next(false);
  };

  return (0, _frintReact.streamProps)()
  // dispatchable actions against store
  .setDispatch({ removeTodo: _todos.removeTodo }, store)

  // stream values
  .set(showEditForm$, function (showEditForm) {
    return { showEditForm: showEditForm };
  }).set(formInput$, function (inputValue) {
    return { inputValue: inputValue };
  })

  // form actions
  .set({
    edit: function edit(todo) {
      formInput$.next(todo.title); // set input field value
      showEditForm$.next(true);
    },
    changeInput: function changeInput(value) {
      formInput$.next(value);
    },
    cancelEdit: cancelEdit,
    submit: function submit(id, newTitle) {
      store.dispatch((0, _todos.updateTodo)(id, newTitle));
      cancelEdit();
    }
  })

  // final observable
  .get$();
})(Item);
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frintStore = __webpack_require__(3);

var _todos = __webpack_require__(34);

var _todos2 = _interopRequireDefault(_todos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frintStore.combineReducers)({
  todos: _todos2.default
});
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = todos;

var _lodash = __webpack_require__(9);

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
  records: []
};

function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _constants.TODOS_ADD:
      return Object.assign({}, {
        records: [].concat(_toConsumableArray(state.records), [{
          id: _lodash2.default.uniqueId(),
          title: action.title
        }])
      });

    case _constants.TODOS_DELETE:
      return Object.assign({}, {
        records: state.records.filter(function (todo) {
          return todo.id != action.id;
        })
      });

    case _constants.TODOS_UPDATE:
      return Object.assign({}, {
        records: state.records.map(function (todo) {
          if (todo.id !== action.id) {
            return todo;
          }

          todo.title = action.title;

          return todo;
        })
      });

    default:
      return state;
  }
}
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=app-todos.js.map