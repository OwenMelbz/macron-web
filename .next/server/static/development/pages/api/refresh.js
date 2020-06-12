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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/refresh.js":
/*!******************************!*\
  !*** ./pages/api/refresh.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_crontab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/crontab */ \"./utils/crontab.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/helpers */ \"./utils/helpers.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    const jobs = await Object(_utils_crontab__WEBPACK_IMPORTED_MODULE_0__[\"getJobs\"])(true);\n    res.statusCode = 200;\n    res.json(jobs);\n  } catch (error) {\n    res.statusCode = 500;\n    res.json({\n      error: error.message\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVmcmVzaC5qcz84YzdjIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImpvYnMiLCJnZXRKb2JzIiwic3RhdHVzQ29kZSIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLHNFQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSTtBQUNGLFVBQU1DLElBQUksR0FBRyxNQUFNQyw4REFBTyxDQUFDLElBQUQsQ0FBMUI7QUFDQUYsT0FBRyxDQUFDRyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FILE9BQUcsQ0FBQ0ksSUFBSixDQUFTSCxJQUFUO0FBQ0QsR0FKRCxDQUlFLE9BQU9JLEtBQVAsRUFBYztBQUNkTCxPQUFHLENBQUNHLFVBQUosR0FBaUIsR0FBakI7QUFDQUgsT0FBRyxDQUFDSSxJQUFKLENBQVM7QUFDUEMsV0FBSyxFQUFFQSxLQUFLLENBQUNDO0FBRE4sS0FBVDtBQUdEO0FBQ0YsQ0FYRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9yZWZyZXNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7Z2V0Sm9icywgZ2V0UXVldWV9IGZyb20gXCIuLi8uLi91dGlscy9jcm9udGFiXCI7XG5pbXBvcnQge3NlcmlhbGlzZUpvYn0gZnJvbSBcIi4uLy4uL3V0aWxzL2hlbHBlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgam9icyA9IGF3YWl0IGdldEpvYnModHJ1ZSk7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgcmVzLmpzb24oam9icyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgcmVzLmpzb24oe1xuICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgfSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/refresh.js\n");

/***/ }),

/***/ "./utils/crontab.js":
/*!**************************!*\
  !*** ./utils/crontab.js ***!
  \**************************/
/*! exports provided: getJobs, getQueue, makeJob, deleteJob, makeOrFindJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getJobs\", function() { return getJobs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQueue\", function() { return getQueue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeJob\", function() { return makeJob; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteJob\", function() { return deleteJob; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeOrFindJob\", function() { return makeOrFindJob; });\n/* harmony import */ var crontab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crontab */ \"crontab\");\n/* harmony import */ var crontab__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crontab__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./utils/helpers.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet api = null;\nlet jobs = [];\n\nconst boot = async reset => {\n  // if (api && !reset) {\n  //     return api;\n  // }\n  return new Promise((resolve, reject) => {\n    crontab__WEBPACK_IMPORTED_MODULE_0___default.a.load((err, _api) => {\n      if (err) {\n        return reject(err);\n      }\n\n      api = _api;\n      jobs = api.jobs().map(j => Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"buildJob\"])(j, Object(uuid__WEBPACK_IMPORTED_MODULE_2__[\"v4\"])()));\n      return resolve(api);\n    });\n  });\n};\n\nconst getJobs = async reset => {\n  if (reset) {\n    await boot(reset);\n  }\n\n  return jobs.map(job => {\n    return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"serialiseJob\"])(job);\n  });\n};\nconst getQueue = async () => {\n  // await boot();\n  return api.jobs().map(j => Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"buildJob\"])(j, Object(uuid__WEBPACK_IMPORTED_MODULE_2__[\"v4\"])()));\n};\nconst makeJob = async data => {\n  // await boot();\n  const newJob = api.create(data.command, data.interval, data.comment);\n\n  if (!newJob || !newJob.isValid()) {\n    return {\n      error: 'Invalid cron syntax'\n    };\n  }\n\n  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"buildJob\"])(newJob, data.key);\n};\nconst deleteJob = async key => {\n  return new Promise(async resolve => {\n    const job = jobs.find(job => job.key === key);\n    jobs = jobs.filter(job => job.key !== key);\n    api.remove(job.job);\n    api.save(() => {\n      resolve({\n        job,\n        jobs\n      });\n    });\n  });\n};\nconst makeOrFindJob = data => {\n  // console.log(api);\n  return new Promise(async (resolve, reject) => {\n    // await boot();\n    const existing = jobs.find(job => job.key === data.key); // console.log(jobs)\n\n    if (existing) {\n      api.remove(existing.job);\n      jobs = jobs.filter(job => job.key !== data.key);\n    }\n\n    const job = await makeJob(data);\n    jobs.push(job);\n    api.save(() => {\n      resolve({\n        job,\n        jobs\n      });\n    });\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jcm9udGFiLmpzPzMwNTIiXSwibmFtZXMiOlsiYXBpIiwiam9icyIsImJvb3QiLCJyZXNldCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY3JvbnRhYiIsImxvYWQiLCJlcnIiLCJfYXBpIiwibWFwIiwiaiIsImJ1aWxkSm9iIiwidjQiLCJnZXRKb2JzIiwiam9iIiwic2VyaWFsaXNlSm9iIiwiZ2V0UXVldWUiLCJtYWtlSm9iIiwiZGF0YSIsIm5ld0pvYiIsImNyZWF0ZSIsImNvbW1hbmQiLCJpbnRlcnZhbCIsImNvbW1lbnQiLCJpc1ZhbGlkIiwiZXJyb3IiLCJrZXkiLCJkZWxldGVKb2IiLCJmaW5kIiwiZmlsdGVyIiwicmVtb3ZlIiwic2F2ZSIsIm1ha2VPckZpbmRKb2IiLCJleGlzdGluZyIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxHQUFHLEdBQUcsSUFBVjtBQUNBLElBQUlDLElBQUksR0FBRyxFQUFYOztBQUVBLE1BQU1DLElBQUksR0FBRyxNQUFPQyxLQUFQLElBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUVBLFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUNwQ0Msa0RBQU8sQ0FBQ0MsSUFBUixDQUFhLENBQUNDLEdBQUQsRUFBTUMsSUFBTixLQUFlO0FBQ3hCLFVBQUlELEdBQUosRUFBUztBQUNMLGVBQU9ILE1BQU0sQ0FBQ0csR0FBRCxDQUFiO0FBQ0g7O0FBRURULFNBQUcsR0FBR1UsSUFBTjtBQUVBVCxVQUFJLEdBQUdELEdBQUcsQ0FBQ0MsSUFBSixHQUFXVSxHQUFYLENBQWVDLENBQUMsSUFBSUMseURBQVEsQ0FBQ0QsQ0FBRCxFQUFJRSwrQ0FBRSxFQUFOLENBQTVCLENBQVA7QUFFQSxhQUFPVCxPQUFPLENB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Y3JvbnRhYiBmcm9tIFwiY3JvbnRhYlwiO1xuaW1wb3J0IHtidWlsZEpvYiwgc2VyaWFsaXNlSm9ifSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQge3Y0fSBmcm9tIFwidXVpZFwiO1xuXG5sZXQgYXBpID0gbnVsbDtcbmxldCBqb2JzID0gW107XG5cbmNvbnN0IGJvb3QgPSBhc3luYyAocmVzZXQpID0+IHtcbiAgICAvLyBpZiAoYXBpICYmICFyZXNldCkge1xuICAgIC8vICAgICByZXR1cm4gYXBpO1xuICAgIC8vIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNyb250YWIubG9hZCgoZXJyLCBfYXBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFwaSA9IF9hcGk7XG5cbiAgICAgICAgICAgIGpvYnMgPSBhcGkuam9icygpLm1hcChqID0+IGJ1aWxkSm9iKGosIHY0KCkpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoYXBpKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEpvYnMgPSBhc3luYyAocmVzZXQpID0+IHtcbiAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgYXdhaXQgYm9vdChyZXNldCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpvYnMubWFwKGpvYiA9PiB7XG4gICAgICAgIHJldHVybiBzZXJpYWxpc2VKb2Ioam9iKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFF1ZXVlID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIGF3YWl0IGJvb3QoKTtcblxuICAgIHJldHVybiBhcGkuam9icygpLm1hcChqID0+IGJ1aWxkSm9iKGosIHY0KCkpKTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VKb2IgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIC8vIGF3YWl0IGJvb3QoKTtcblxuICAgIGNvbnN0IG5ld0pvYiA9IGFwaS5jcmVhdGUoZGF0YS5jb21tYW5kLCBkYXRhLmludGVydmFsLCBkYXRhLmNvbW1lbnQpO1xuXG4gICAgaWYgKCFuZXdKb2IgfHwgIW5ld0pvYi5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXJyb3I6ICdJbnZhbGlkIGNyb24gc3ludGF4JyxcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnVpbGRKb2IobmV3Sm9iLCBkYXRhLmtleSlcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUpvYiA9IGFzeW5jIGtleSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGpvYiA9IGpvYnMuZmluZChqb2IgPT4gam9iLmtleSA9PT0ga2V5KTtcbiAgICAgICAgam9icyA9IGpvYnMuZmlsdGVyKGpvYiA9PiBqb2Iua2V5ICE9PSBrZXkpO1xuXG4gICAgICAgIGFwaS5yZW1vdmUoam9iLmpvYik7XG5cbiAgICAgICAgYXBpLnNhdmUoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgam9iLFxuICAgICAgICAgICAgICAgIGpvYnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VPckZpbmRKb2IgPSBkYXRhID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhhcGkpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIGF3YWl0IGJvb3QoKTtcblxuICAgICAgICBjb25zdCBleGlzdGluZyA9IGpvYnMuZmluZChqb2IgPT4gam9iLmtleSA9PT0gZGF0YS5rZXkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhqb2JzKVxuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgIGFwaS5yZW1vdmUoZXhpc3Rpbmcuam9iKTtcbiAgICAgICAgICAgIGpvYnMgPSBqb2JzLmZpbHRlcihqb2IgPT4gam9iLmtleSAhPT0gZGF0YS5rZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgam9iID0gYXdhaXQgbWFrZUpvYihkYXRhKTtcblxuICAgICAgICBqb2JzLnB1c2goam9iKTtcblxuICAgICAgICBhcGkuc2F2ZSgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBqb2IsXG4gICAgICAgICAgICAgICAgam9icyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/crontab.js\n");

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: endpoint, waitFor, asyncForEach, emojiUrl, buildJob, serialiseJob, placeholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"endpoint\", function() { return endpoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"waitFor\", function() { return waitFor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asyncForEach\", function() { return asyncForEach; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emojiUrl\", function() { return emojiUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildJob\", function() { return buildJob; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serialiseJob\", function() { return serialiseJob; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"placeholder\", function() { return placeholder; });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\n\nconst endpoint = path => {\n  return `${window.location.origin}/api/${path}`;\n};\nconst waitFor = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));\nconst asyncForEach = async (array, callback) => {\n  for (let index = 0; index < array.length; index++) {\n    await callback(array[index], index, array);\n  }\n};\nconst emojiUrl = emoji => {\n  // Create a canvas element\n  const canvas = document.createElement('canvas');\n  canvas.height = 64;\n  canvas.width = 64; // Get the canvas context\n\n  const context = canvas.getContext('2d');\n  context.font = '64px serif';\n  context.fillText(emoji, 0, 64); // Get the custom URL\n\n  return canvas.toDataURL();\n};\nconst buildJob = (job, key) => ({\n  job,\n  key,\n  name: job.comment() || job.render()\n});\nconst serialiseJob = job => ({\n  key: job.key,\n  name: job.name,\n  job: {\n    comment: job.job.comment(),\n    command: job.job.command(),\n    minute: job.job.minute().toString(),\n    hour: job.job.hour().toString(),\n    dom: job.job.dom().toString(),\n    month: job.job.month().toString(),\n    dow: job.job.dow().toString()\n  }\n});\nconst placeholder = () => {\n  return {\n    \"key\": Object(uuid__WEBPACK_IMPORTED_MODULE_0__[\"v4\"])(),\n    \"name\": \"hello world\",\n    \"job\": {\n      \"comment\": \"hello world\",\n      \"command\": \"echo 'hello world'\",\n      \"minute\": \"*\",\n      \"hour\": \"*\",\n      \"dom\": \"*\",\n      \"month\": \"*\",\n      \"dow\": \"*\"\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9oZWxwZXJzLmpzPzIwNWYiXSwibmFtZXMiOlsiZW5kcG9pbnQiLCJwYXRoIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJ3YWl0Rm9yIiwic2Vjb25kcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImFzeW5jRm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJpbmRleCIsImxlbmd0aCIsImVtb2ppVXJsIiwiZW1vamkiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxUZXh0IiwidG9EYXRhVVJMIiwiYnVpbGRKb2IiLCJqb2IiLCJrZXkiLCJuYW1lIiwiY29tbWVudCIsInJlbmRlciIsInNlcmlhbGlzZUpvYiIsImNvbW1hbmQiLCJtaW51dGUiLCJ0b1N0cmluZyIsImhvdXIiLCJkb20iLCJtb250aCIsImRvdyIsInBsYWNlaG9sZGVyIiwidjQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxRQUFRLEdBQUdDLElBQUksSUFBSTtBQUM1QixTQUFRLEdBQUVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBTyxRQUFPSCxJQUFLLEVBQTdDO0FBQ0gsQ0FGTTtBQUlBLE1BQU1JLE9BQU8sR0FBR0MsT0FBTyxJQUMxQixJQUFJQyxPQUFKLENBQVlDLE9BQU8sSUFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLE9BQU8sR0FBRyxJQUFwQixDQUFqQyxDQURHO0FBR0EsTUFBTUksWUFBWSxHQUFHLE9BQU9DLEtBQVAsRUFBY0MsUUFBZCxLQUEyQjtBQUNuRCxPQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHRixLQUFLLENBQUNHLE1BQWxDLEVBQTBDRCxLQUFLLEVBQS9DLEVBQW1EO0FBQy9DLFVBQU1ELFFBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxLQUFELENBQU4sRUFBZUEsS0FBZixFQUFzQkYsS0FBdEIsQ0FBZDtBQUNIO0FBQ0osQ0FKTTtBQU1BLE1BQU1JLFFBQVEsR0FBR0MsS0FBSyxJQUFJO0FBQzdCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRixRQUFNLENBQUNHLE1BQVAsR0FBZ0IsRUFBaEI7QUFDQUgsUUFBTSxDQUFDSSxLQUFQLEdBQWUsRUFBZixDQUo2QixDQU03Qjs7QUFDQSxRQUFNQyxPQUFPLEdBQUdMLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUNBRCxTQUFPLENBQUNFLElBQVIsR0FBZSxZQUFmO0FBQ0FGLFNBQU8sQ0FBQ0csUUFBUixDQUFpQlQsS0FBakIsRUFBd0IsQ0FBeEIsRUFBMkIsRUFBM0IsRUFUNkIsQ0FXN0I7O0FBQ0EsU0FBT0MsTUFBTSxDQUFDUyxTQUFQLEVBQVA7QUFDSCxDQWJNO0FBZUEsTUFBTUMsUUFBUSxHQUFHLENBQUNDLEdBQUQsRUFBTUMsR0FBTixNQUFlO0FBQ25DRCxLQURtQztBQUVuQ0MsS0FGbUM7QUFHbkNDLE1BQUksRUFBRUYsR0FBRyxDQUFDRyxPQUFKLE1BQWlCSCxHQUFHLENBQUNJLE1BQUo7QUFIWSxDQUFmLENBQWpCO0FBTUEsTUFBTUMsWUFBWSxHQUFHTCxHQUFHLEtBQUs7QUFDaENDLEtBQUcsRUFBRUQsR0FBRyxDQUFDQyxHQUR1QjtBQUVoQ0MsTUFBSSxFQUFFRixHQUFHLENBQUNFLElBRnNCO0FBR2hDRixLQUFHLEVBQUU7QUFDREcsV0FBTyxFQUFFSCxHQUFHLENBQUNBLEdBQUosQ0FBUUcsT0FBUixFQURSO0FBRURHLFdBQU8sRUFBRU4sR0FBRyxDQUFDQSxHQUFKLENBQVFNLE9BQVIsRUFGUjtBQUdEQyxVQUFNLEVBQUVQLEdBQUcsQ0FBQ0EsR0FBSixDQUFRTyxNQUFSLEdBQWlCQyxRQUFqQixFQUhQO0FBSURDLFFBQUksRUFBRVQsR0FBRyxDQUFDQSxHQUFKLENBQVFTLElBQVIsR0FBZUQsUUFBZixFQUpMO0FBS0RFLE9BQUcsRUFBRVYsR0FBRyxDQUFDQSxHQUFKLENBQVFVLEdBQVIsR0FBY0YsUUFBZCxFQUxKO0FBTURHLFNBQUssRUFBRVgsR0FBRyxDQUFDQSxHQUFKLENBQVFXLEtBQVIsR0FBZ0JILFFBQWhCLEVBTk47QUFPREksT0FBRyxFQUFFWixHQUFHLENBQUNBLEdBQUosQ0FBUVksR0FBUixHQUFjSixRQUFkO0FBUEo7QUFIMkIsQ0FBTCxDQUF4QjtBQWNBLE1BQU1LLFdBQVcsR0FBRyxNQUFNO0FBQzdCLFNBQU87QUFDSCxXQUFPQywrQ0FBRSxFQUROO0FBRUgsWUFBUSxhQUZMO0FBR0gsV0FBTztBQUNILGlCQUFXLGFBRFI7QUFFSCxpQkFBVyxvQkFGUjtBQUdILGdCQUFVLEdBSFA7QUFJSCxjQUFRLEdBSkw7QUFLSCxhQUFPLEdBTEo7QUFNSCxlQUFTLEdBTk47QUFPSCxhQUFPO0FBUEo7QUFISixHQUFQO0FBYUgsQ0FkTSIsImZpbGUiOiIuL3V0aWxzL2hlbHBlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Y0fSBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSBwYXRoID0+IHtcbiAgICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpLyR7cGF0aH1gXG59XG5cbmV4cG9ydCBjb25zdCB3YWl0Rm9yID0gc2Vjb25kcyA9PlxuICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBzZWNvbmRzICogMTAwMCkpO1xuXG5leHBvcnQgY29uc3QgYXN5bmNGb3JFYWNoID0gYXN5bmMgKGFycmF5LCBjYWxsYmFjaykgPT4ge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgYXdhaXQgY2FsbGJhY2soYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlbW9qaVVybCA9IGVtb2ppID0+IHtcbiAgICAvLyBDcmVhdGUgYSBjYW52YXMgZWxlbWVudFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA2NDtcbiAgICBjYW52YXMud2lkdGggPSA2NDtcblxuICAgIC8vIEdldCB0aGUgY2FudmFzIGNvbnRleHRcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5mb250ID0gJzY0cHggc2VyaWYnO1xuICAgIGNvbnRleHQuZmlsbFRleHQoZW1vamksIDAsIDY0KTtcblxuICAgIC8vIEdldCB0aGUgY3VzdG9tIFVSTFxuICAgIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCk7XG59O1xuXG5leHBvcnQgY29uc3QgYnVpbGRKb2IgPSAoam9iLCBrZXkpID0+ICh7XG4gICAgam9iLFxuICAgIGtleSxcbiAgICBuYW1lOiBqb2IuY29tbWVudCgpIHx8IGpvYi5yZW5kZXIoKSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXNlSm9iID0gam9iID0+ICh7XG4gICAga2V5OiBqb2Iua2V5LFxuICAgIG5hbWU6IGpvYi5uYW1lLFxuICAgIGpvYjoge1xuICAgICAgICBjb21tZW50OiBqb2Iuam9iLmNvbW1lbnQoKSxcbiAgICAgICAgY29tbWFuZDogam9iLmpvYi5jb21tYW5kKCksXG4gICAgICAgIG1pbnV0ZTogam9iLmpvYi5taW51dGUoKS50b1N0cmluZygpLFxuICAgICAgICBob3VyOiBqb2Iuam9iLmhvdXIoKS50b1N0cmluZygpLFxuICAgICAgICBkb206IGpvYi5qb2IuZG9tKCkudG9TdHJpbmcoKSxcbiAgICAgICAgbW9udGg6IGpvYi5qb2IubW9udGgoKS50b1N0cmluZygpLFxuICAgICAgICBkb3c6IGpvYi5qb2IuZG93KCkudG9TdHJpbmcoKSxcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgcGxhY2Vob2xkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJrZXlcIjogdjQoKSxcbiAgICAgICAgXCJuYW1lXCI6IFwiaGVsbG8gd29ybGRcIixcbiAgICAgICAgXCJqb2JcIjoge1xuICAgICAgICAgICAgXCJjb21tZW50XCI6IFwiaGVsbG8gd29ybGRcIixcbiAgICAgICAgICAgIFwiY29tbWFuZFwiOiBcImVjaG8gJ2hlbGxvIHdvcmxkJ1wiLFxuICAgICAgICAgICAgXCJtaW51dGVcIjogXCIqXCIsXG4gICAgICAgICAgICBcImhvdXJcIjogXCIqXCIsXG4gICAgICAgICAgICBcImRvbVwiOiBcIipcIixcbiAgICAgICAgICAgIFwibW9udGhcIjogXCIqXCIsXG4gICAgICAgICAgICBcImRvd1wiOiBcIipcIlxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/helpers.js\n");

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/api/refresh.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/owen/Sites/macron-web/pages/api/refresh.js */"./pages/api/refresh.js");


/***/ }),

/***/ "crontab":
/*!**************************!*\
  !*** external "crontab" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crontab\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcm9udGFiXCI/MGNiNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjcm9udGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3JvbnRhYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///crontab\n");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCI/MzcxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid\n");

/***/ })

/******/ });