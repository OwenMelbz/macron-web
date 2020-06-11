module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "IF/j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export waitFor */
/* unused harmony export asyncForEach */
/* unused harmony export emojiUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return serialiseJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return placeholder; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var waitFor = function waitFor(seconds) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, seconds * 1000);
  });
};
var asyncForEach = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(array, callback) {
    var index;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            index = 0;

          case 1:
            if (!(index < array.length)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return callback(array[index], index, array);

          case 4:
            index++;
            _context.next = 1;
            break;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function asyncForEach(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var emojiUrl = function emojiUrl(emoji) {
  // Create a canvas element
  var canvas = document.createElement('canvas');
  canvas.height = 64;
  canvas.width = 64; // Get the canvas context

  var context = canvas.getContext('2d');
  context.font = '64px serif';
  context.fillText(emoji, 0, 64); // Get the custom URL

  return canvas.toDataURL();
};
var buildJob = function buildJob(job, key) {
  return {
    job: job,
    key: key,
    name: job.comment() || job.render()
  };
};
var serialiseJob = function serialiseJob(job) {
  return {
    key: job.key,
    name: job.name,
    job: {
      comment: job.job.comment(),
      command: job.job.command(),
      minute: job.job.minute().toString(),
      hour: job.job.hour().toString(),
      dom: job.job.dom().toString(),
      month: job.job.month().toString(),
      dow: job.job.dow().toString()
    }
  };
};
var placeholder = function placeholder() {
  return {
    "key": Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
    "name": "hello world",
    "job": {
      "comment": "hello world",
      "command": "echo 'hello world'",
      "minute": "*",
      "hour": "*",
      "dom": "*",
      "month": "*",
      "dow": "*"
    }
  };
};

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./components/Placeholder.js
var __jsx = external_react_default.a.createElement;



function Placeholder(_ref) {
  var onCreate = _ref.onCreate;

  var StartButton = function StartButton() {
    return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
      onClick: onCreate,
      type: "primary"
    }, "Create Job");
  };

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "h-screen flex flex-col items-center justify-center"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Result"], {
    style: {
      padding: 30
    },
    status: "500",
    title: "Nothing to see.",
    subTitle: "Pick job or create a new one from the left.",
    extra: StartButton()
  }));
}

/* harmony default export */ var components_Placeholder = (Placeholder);
// CONCATENATED MODULE: ./utils/events.js
var fire = function fire(name, detail) {
  return document.dispatchEvent(new CustomEvent(name, {
    detail: detail
  }));
};
var off = function off(name, callback) {
  return document.removeEventListener(name, callback);
};
var on = function on(name, callback) {
  return document.addEventListener(name, callback);
};
// CONCATENATED MODULE: ./components/Sidebar.js
var Sidebar_jsx = external_react_default.a.createElement;




function Sidebar(_ref) {
  var jobs = _ref.jobs,
      job = _ref.job,
      onSelect = _ref.onSelect,
      onCreate = _ref.onCreate;

  var _useState = Object(external_react_["useState"])([]),
      selected = _useState[0],
      setSelected = _useState[1];

  var select = function select(_ref2) {
    var key = _ref2.key;
    setSelected([key]);
    var job = jobs.find(function (j) {
      return j.key === key;
    });
    onSelect(job);
  };

  var reset = function reset() {
    setSelected([]);
  };

  var updated = function updated(_ref3) {
    var detail = _ref3.detail;
    setSelected([detail.key]);
  };

  Object(external_react_["useEffect"])(function () {
    if (job) {
      setSelected([job.key]);
    } else {
      setSelected([]);
    } // on('new-job', reset)
    // on('updated', updated)


    return function () {// off('new-job', reset)
      // off('updated', updated)
    };
  }, [job]);
  return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Menu"], {
    onClick: select,
    mode: "inline",
    selectedKeys: selected,
    className: "h-screen overflow-x-hidden overflow-y-auto"
  }, /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "ant-menu-item ant-menu-item-only-child",
    role: "menuitem",
    style: {
      paddingLeft: 24,
      height: 60
    }
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    onClick: onCreate,
    type: "primary",
    className: "w-full"
  }, "Create Job"))), jobs.map(function (job) {
    return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Menu"].Item, {
      key: job.key
    }, job.name);
  }));
}

/* harmony default export */ var components_Sidebar = (Sidebar);
// CONCATENATED MODULE: ./components/CronBuilder.js
var CronBuilder_jsx = external_react_default.a.createElement;



function CronBuilder(_ref) {
  var job = _ref.job,
      onSave = _ref.onSave,
      onCancel = _ref.onCancel,
      onDelete = _ref.onDelete;

  var _useState = Object(external_react_["useState"])(job.job.command),
      command = _useState[0],
      setCommand = _useState[1];

  var _useState2 = Object(external_react_["useState"])(job.job.comment),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(job.job.minute),
      minute = _useState3[0],
      setMinute = _useState3[1];

  var _useState4 = Object(external_react_["useState"])(job.job.hour),
      hour = _useState4[0],
      setHour = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(job.job.dom),
      day = _useState5[0],
      setDay = _useState5[1];

  var _useState6 = Object(external_react_["useState"])(job.job.month),
      month = _useState6[0],
      setMonth = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(job.job.dow),
      weekday = _useState7[0],
      setWeekday = _useState7[1];

  var _useState8 = Object(external_react_["useState"])(job.key ? 'custom' : 'minutely'),
      frequency = _useState8[0],
      setFrequency = _useState8[1];

  var help = function help(preset) {
    setFrequency(preset);

    switch (preset) {
      case 'minutely':
        setMinute('*');
        setHour('*');
        setDay('*');
        setMonth('*');
        setWeekday('*');
        break;

      case 'hourly':
        setMinute('0');
        setHour('*');
        setDay('*');
        setMonth('*');
        setWeekday('*');
        break;

      case 'nightly':
        setMinute('0');
        setHour('0');
        setDay('*');
        setMonth('*');
        setWeekday('*');
        break;

      case 'weekly':
        setMinute('0');
        setHour('0');
        setDay('*');
        setMonth('*');
        setWeekday('1');
        break;

      case 'monthly':
        setMinute('0');
        setHour('0');
        setDay('1');
        setMonth('*');
        setWeekday('*');
        break;

      default:
        break;
    }
  };

  var save = function save() {
    onSave(job, {
      command: command,
      name: name,
      minute: minute,
      hour: hour,
      day: day,
      month: month,
      weekday: weekday
    });
  };

  var cancel = function cancel() {
    return onCancel();
  };

  var remove = function remove() {
    return onDelete(job);
  };

  Object(external_react_["useEffect"])(function () {
    setName(job.job.comment);
    setCommand(job.job.command);
    setMinute(job.job.minute);
    setHour(job.job.hour);
    setDay(job.job.dom);
    setMonth(job.job.month);
    setWeekday(job.job.dow);
    setFrequency(job.key ? 'custom' : 'minutely');
  }, [job]);
  return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Form"], {
    layout: "vertical"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Form"].Item, {
    label: "Name / Comment"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"], {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  })), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Form"].Item, {
    label: "Command"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"], {
    value: command,
    onChange: function onChange(e) {
      return setCommand(e.target.value);
    }
  })), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Form"].Item, {
    label: "Every"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Radio"].Group, {
    value: frequency,
    onChange: function onChange(e) {
      return help(e.target.value);
    },
    defaultValue: frequency,
    buttonStyle: "solid"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Radio"].Button, {
    value: "minutely"
  }, "Minute"), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Radio"].Button, {
    value: "hourly"
  }, "Hour"), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Radio"].Button, {
    value: "nightly"
  }, "Night"), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Radio"].Button, {
    value: "weekly"
  }, "Week"), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Radio"].Button, {
    value: "monthly"
  }, "Month"), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Radio"].Button, {
    value: "custom"
  }, "Custom"))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Form"].Item, {
    label: "Custom"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"].Group, {
    compact: true
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"], {
    value: minute,
    onChange: function onChange(e) {
      return setMinute(e.target.value) || setFrequency('custom');
    },
    style: {
      width: '20%'
    }
  }), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"], {
    value: hour,
    onChange: function onChange(e) {
      return setHour(e.target.value) || setFrequency('custom');
    },
    style: {
      width: '20%'
    }
  }), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"], {
    value: day,
    onChange: function onChange(e) {
      return setDay(e.target.value) || setFrequency('custom');
    },
    style: {
      width: '20%'
    }
  }), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"], {
    value: month,
    onChange: function onChange(e) {
      return setMonth(e.target.value) || setFrequency('custom');
    },
    style: {
      width: '20%'
    }
  }), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"], {
    value: weekday,
    onChange: function onChange(e) {
      return setWeekday(e.target.value) || setFrequency('custom');
    },
    style: {
      width: '20%'
    }
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mt-10 flex items-center justify-between"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"].Group, null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    onClick: save,
    type: "primary"
  }, "Save"), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    onClick: cancel
  }, "Cancel"))), /*#__PURE__*/external_react_default.a.createElement("div", null, job.key && /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    onClick: remove,
    danger: true,
    type: "primary"
  }, "Delete")))));
}

/* harmony default export */ var components_CronBuilder = (CronBuilder);
// CONCATENATED MODULE: ./components/Editor.js
var Editor_jsx = external_react_default.a.createElement;



function Editor(_ref) {
  var job = _ref.job,
      onCancel = _ref.onCancel,
      onSave = _ref.onSave,
      onDelete = _ref.onDelete;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "flex flex-col p-8"
  }, /*#__PURE__*/external_react_default.a.createElement("main", {
    className: "flex-grow"
  }, /*#__PURE__*/external_react_default.a.createElement(components_CronBuilder, {
    onSave: onSave,
    onCancel: onCancel,
    onDelete: onDelete,
    job: job
  })));
}

/* harmony default export */ var components_Editor = (Editor);
// EXTERNAL MODULE: ./utils/helpers.js
var helpers = __webpack_require__("IF/j");

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









function App(_ref) {
  var initialJobs = _ref.initialJobs;

  var _useState = Object(external_react_["useState"])(initialJobs),
      jobs = _useState[0],
      setJobs = _useState[1];

  var _useState2 = Object(external_react_["useState"])(null),
      job = _useState2[0],
      setJob = _useState2[1];

  var connect = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var selected,
          res,
          js,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              selected = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
              _context.next = 3;
              return fetch('http://localhost:3000/api/get');

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              js = _context.sent;
              setJobs(js);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function connect() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onCreate = function onCreate() {
    if (job && !job.key) {
      return 'already an unsaved job.';
    }

    fire('new-job');
    var b = Object(helpers["b" /* placeholder */])();
    return setJob(b);
  };

  var onCancel = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var res, js;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              external_antd_["message"].success('Changes cancelled.');
              setJob(null);
              _context2.next = 4;
              return fetch('http://localhost:3000/api/refresh');

            case 4:
              res = _context2.sent;
              _context2.next = 7;
              return res.json();

            case 7:
              js = _context2.sent;
              setJobs(js);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onCancel() {
      return _ref3.apply(this, arguments);
    };
  }();

  var onSave = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(j, payload) {
      var data, res, _yield$res$json, job, jobs, error;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              data = {
                key: j.key,
                command: payload.command,
                comment: payload.name,
                interval: [payload.minute, payload.hour, payload.day, payload.month, payload.weekday].join(' ')
              };
              _context3.next = 3;
              return fetch('http://localhost:3000/api/save', {
                method: 'POST',
                body: JSON.stringify(data)
              });

            case 3:
              res = _context3.sent;
              _context3.next = 6;
              return res.json();

            case 6:
              _yield$res$json = _context3.sent;
              job = _yield$res$json.job;
              jobs = _yield$res$json.jobs;
              error = _yield$res$json.error;

              if (!error) {
                _context3.next = 12;
                break;
              }

              return _context3.abrupt("return", external_antd_["message"].error(error));

            case 12:
              setJobs(jobs);
              setJob(job);
              return _context3.abrupt("return", external_antd_["message"].success("".concat(job.name, " saved.")));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onSave(_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var onDelete = function onDelete(j) {
    external_antd_["Modal"].confirm({
      title: j.name,
      content: "Are you sure you want to delete this job?",
      onOk: function () {
        var _onOk = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var res, jobs;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return fetch('http://localhost:3000/api/delete', {
                    method: 'POST',
                    body: j.key
                  });

                case 2:
                  res = _context4.sent;
                  _context4.next = 5;
                  return res.json();

                case 5:
                  jobs = _context4.sent;
                  setJobs(jobs);
                  setJob(null);
                  external_antd_["message"].error("".concat(j.name, " deleted."));

                case 9:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        function onOk() {
          return _onOk.apply(this, arguments);
        }

        return onOk;
      }()
    });
  };

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "flex flex-wrap min-h-screen"
  }, /*#__PURE__*/external_react_default.a.createElement("nav", {
    className: "w-1/4"
  }, /*#__PURE__*/external_react_default.a.createElement(components_Sidebar, {
    onCreate: onCreate,
    jobs: jobs,
    job: job,
    onSelect: setJob
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "w-3/4"
  }, job ? /*#__PURE__*/external_react_default.a.createElement(components_Editor, {
    onCancel: onCancel,
    onSave: onSave,
    onDelete: onDelete,
    job: job
  }) : /*#__PURE__*/external_react_default.a.createElement(components_Placeholder, {
    onCreate: onCreate
  }))));
}

var getServerSideProps = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return fetch('http://localhost:3000/api/refresh');

          case 3:
            res = _context5.sent;
            _context5.next = 6;
            return res.json();

          case 6:
            _context5.t0 = _context5.sent;
            _context5.t1 = {
              initialJobs: _context5.t0
            };
            return _context5.abrupt("return", {
              props: _context5.t1
            });

          case 11:
            _context5.prev = 11;
            _context5.t2 = _context5["catch"](0);
            return _context5.abrupt("return", {
              props: {
                initialJobs: []
              }
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function getServerSideProps() {
    return _ref5.apply(this, arguments);
  };
}();
/* harmony default export */ var pages = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });