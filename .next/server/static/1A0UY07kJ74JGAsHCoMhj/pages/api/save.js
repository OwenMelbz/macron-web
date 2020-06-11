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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rFhQ");


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

const waitFor = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));
const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};
const emojiUrl = emoji => {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.height = 64;
  canvas.width = 64; // Get the canvas context

  const context = canvas.getContext('2d');
  context.font = '64px serif';
  context.fillText(emoji, 0, 64); // Get the custom URL

  return canvas.toDataURL();
};
const buildJob = (job, key) => ({
  job,
  key,
  name: job.comment() || job.render()
});
const serialiseJob = job => ({
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
});
const placeholder = () => {
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



let api = null;
let jobs = [];

const boot = async reset => {
  // if (api && !reset) {
  //     return api;
  // }
  return new Promise((resolve, reject) => {
    crontab__WEBPACK_IMPORTED_MODULE_0___default.a.load((err, _api) => {
      if (err) {
        return reject(err);
      }

      api = _api;
      jobs = api.jobs().map(j => Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* buildJob */ "a"])(j, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])()));
      return resolve(api);
    });
  });
};

const getJobs = async reset => {
  if (reset) {
    await boot(reset);
  }

  return jobs.map(job => {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* serialiseJob */ "c"])(job);
  });
};
const getQueue = async () => {
  // await boot();
  return api.jobs().map(j => Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* buildJob */ "a"])(j, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])()));
};
const makeJob = async data => {
  // await boot();
  const newJob = api.create(data.command, data.interval, data.comment);

  if (!newJob || !newJob.isValid()) {
    return {
      error: 'Invalid cron syntax'
    };
  }

  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* buildJob */ "a"])(newJob, data.key);
};
const deleteJob = async key => {
  return new Promise(async resolve => {
    const job = jobs.find(job => job.key === key);
    jobs = jobs.filter(job => job.key !== key);
    api.remove(job.job);
    api.save(() => {
      resolve({
        job,
        jobs
      });
    });
  });
};
const makeOrFindJob = data => {
  // console.log(api);
  return new Promise(async (resolve, reject) => {
    // await boot();
    const existing = jobs.find(job => job.key === data.key); // console.log(jobs)

    if (existing) {
      api.remove(existing.job);
      jobs = jobs.filter(job => job.key !== data.key);
    }

    const job = await makeJob(data);
    jobs.push(job);
    api.save(() => {
      resolve({
        job,
        jobs
      });
    });
  });
};

/***/ }),

/***/ "jkDE":
/***/ (function(module, exports) {

module.exports = require("crontab");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "rFhQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_crontab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MFJ/");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IF/j");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const payload = JSON.parse(req.body);
  const {
    job,
    jobs,
    error
  } = await Object(_utils_crontab__WEBPACK_IMPORTED_MODULE_0__[/* makeOrFindJob */ "d"])(payload);

  if (error) {
    return res.json({
      error
    });
  }

  res.json({
    job: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[/* serialiseJob */ "c"])(job),
    jobs: jobs.map(j => Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[/* serialiseJob */ "c"])(j))
  });
});

/***/ })

/******/ });