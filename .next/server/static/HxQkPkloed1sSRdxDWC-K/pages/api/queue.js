module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aF/i");


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

/***/ "MFJ/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getQueue; });
/* unused harmony export makeJob */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return makeOrFindJob; });
/* harmony import */ var crontab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jkDE");
/* harmony import */ var crontab__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crontab__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IF/j");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var api = null;
var jobs = [];

var boot = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(reset) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              crontab__WEBPACK_IMPORTED_MODULE_0___default.a.load(function (err, _api) {
                if (err) {
                  return reject(err);
                }

                api = _api;
                jobs = api.jobs().map(function (j) {
                  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* buildJob */ "a"])(j, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])());
                });
                return resolve(api);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function boot(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getJobs = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(reset) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!reset) {
              _context2.next = 3;
              break;
            }

            _context2.next = 3;
            return boot(reset);

          case 3:
            return _context2.abrupt("return", jobs.map(function (job) {
              return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* serialiseJob */ "c"])(job);
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getJobs(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getQueue = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", api.jobs().map(function (j) {
              return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* buildJob */ "a"])(j, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])());
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getQueue() {
    return _ref3.apply(this, arguments);
  };
}();
var makeJob = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    var newJob;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // await boot();
            newJob = api.create(data.command, data.interval, data.comment);

            if (!(!newJob || !newJob.isValid())) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", {
              error: 'Invalid cron syntax'
            });

          case 3:
            return _context4.abrupt("return", Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* buildJob */ "a"])(newJob, data.key));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function makeJob(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteJob = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(key) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve) {
                var job;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        job = jobs.find(function (job) {
                          return job.key === key;
                        });
                        jobs = jobs.filter(function (job) {
                          return job.key !== key;
                        });
                        api.remove(job.job);
                        api.save(function () {
                          resolve({
                            job: job,
                            jobs: jobs
                          });
                        });

                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x5) {
                return _ref6.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteJob(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
var makeOrFindJob = function makeOrFindJob(data) {
  // console.log(api);
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
      var existing, job;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              // await boot();
              existing = jobs.find(function (job) {
                return job.key === data.key;
              }); // console.log(jobs)

              if (existing) {
                api.remove(existing.job);
                jobs = jobs.filter(function (job) {
                  return job.key !== data.key;
                });
              }

              _context7.next = 4;
              return makeJob(data);

            case 4:
              job = _context7.sent;
              jobs.push(job);
              api.save(function () {
                resolve({
                  job: job,
                  jobs: jobs
                });
              });

            case 7:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x6, _x7) {
      return _ref7.apply(this, arguments);
    };
  }());
};

/***/ }),

/***/ "aF/i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_crontab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MFJ/");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IF/j");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var jobs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Object(_utils_crontab__WEBPACK_IMPORTED_MODULE_0__[/* getQueue */ "c"])();

          case 3:
            jobs = _context.sent;
            res.statusCode = 200;
            res.json(jobs.map(function (j) {
              return Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[/* serialiseJob */ "c"])(j);
            }));
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.statusCode = 500;
            res.json({
              error: _context.t0.message
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "jkDE":
/***/ (function(module, exports) {

module.exports = require("crontab");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });