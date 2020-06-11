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



function Placeholder({
  onCreate
}) {
  const StartButton = () => {
    return __jsx(external_antd_["Button"], {
      onClick: onCreate,
      type: "primary"
    }, "Create Job");
  };

  return __jsx("div", {
    className: "h-screen flex flex-col items-center justify-center"
  }, __jsx(external_antd_["Result"], {
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
const fire = (name, detail) => document.dispatchEvent(new CustomEvent(name, {
  detail
}));
const off = (name, callback) => document.removeEventListener(name, callback);
const on = (name, callback) => document.addEventListener(name, callback);
// CONCATENATED MODULE: ./components/Sidebar.js
var Sidebar_jsx = external_react_default.a.createElement;




function Sidebar({
  jobs,
  job,
  onSelect,
  onCreate
}) {
  const {
    0: selected,
    1: setSelected
  } = Object(external_react_["useState"])([]);

  const select = ({
    key
  }) => {
    setSelected([key]);
    const job = jobs.find(j => j.key === key);
    onSelect(job);
  };

  const reset = () => {
    setSelected([]);
  };

  const updated = ({
    detail
  }) => {
    setSelected([detail.key]);
  };

  Object(external_react_["useEffect"])(() => {
    if (job) {
      setSelected([job.key]);
    } else {
      setSelected([]);
    } // on('new-job', reset)
    // on('updated', updated)


    return () => {// off('new-job', reset)
      // off('updated', updated)
    };
  }, [job]);
  return Sidebar_jsx(external_antd_["Menu"], {
    onClick: select,
    mode: "inline",
    selectedKeys: selected,
    className: "h-screen overflow-x-hidden overflow-y-auto"
  }, Sidebar_jsx("li", {
    className: "ant-menu-item ant-menu-item-only-child",
    role: "menuitem",
    style: {
      paddingLeft: 24,
      height: 60
    }
  }, Sidebar_jsx("div", {
    className: "mt-4"
  }, Sidebar_jsx(external_antd_["Button"], {
    onClick: onCreate,
    type: "primary",
    className: "w-full"
  }, "Create Job"))), jobs.map(job => Sidebar_jsx(external_antd_["Menu"].Item, {
    key: job.key
  }, job.name)));
}

/* harmony default export */ var components_Sidebar = (Sidebar);
// CONCATENATED MODULE: ./components/CronBuilder.js
var CronBuilder_jsx = external_react_default.a.createElement;



function CronBuilder({
  job,
  onSave,
  onCancel,
  onDelete
}) {
  const {
    0: command,
    1: setCommand
  } = Object(external_react_["useState"])(job.job.command);
  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])(job.job.comment);
  const {
    0: minute,
    1: setMinute
  } = Object(external_react_["useState"])(job.job.minute);
  const {
    0: hour,
    1: setHour
  } = Object(external_react_["useState"])(job.job.hour);
  const {
    0: day,
    1: setDay
  } = Object(external_react_["useState"])(job.job.dom);
  const {
    0: month,
    1: setMonth
  } = Object(external_react_["useState"])(job.job.month);
  const {
    0: weekday,
    1: setWeekday
  } = Object(external_react_["useState"])(job.job.dow);
  const {
    0: frequency,
    1: setFrequency
  } = Object(external_react_["useState"])(job.key ? 'custom' : 'minutely');

  const help = preset => {
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

  const save = () => {
    onSave(job, {
      command,
      name,
      minute,
      hour,
      day,
      month,
      weekday
    });
  };

  const cancel = () => onCancel();

  const remove = () => onDelete(job);

  Object(external_react_["useEffect"])(() => {
    setName(job.job.comment);
    setCommand(job.job.command);
    setMinute(job.job.minute);
    setHour(job.job.hour);
    setDay(job.job.dom);
    setMonth(job.job.month);
    setWeekday(job.job.dow);
    setFrequency(job.key ? 'custom' : 'minutely');
  }, [job]);
  return CronBuilder_jsx(external_antd_["Form"], {
    layout: "vertical"
  }, CronBuilder_jsx(external_antd_["Form"].Item, {
    label: "Name / Comment"
  }, CronBuilder_jsx(external_antd_["Input"], {
    value: name,
    onChange: e => setName(e.target.value)
  })), CronBuilder_jsx(external_antd_["Form"].Item, {
    label: "Command"
  }, CronBuilder_jsx(external_antd_["Input"], {
    value: command,
    onChange: e => setCommand(e.target.value)
  })), CronBuilder_jsx(external_antd_["Form"].Item, {
    label: "Every"
  }, CronBuilder_jsx(external_antd_["Radio"].Group, {
    value: frequency,
    onChange: e => help(e.target.value),
    defaultValue: frequency,
    buttonStyle: "solid"
  }, CronBuilder_jsx(external_antd_["Radio"].Button, {
    value: "minutely"
  }, "Minute"), CronBuilder_jsx(external_antd_["Radio"].Button, {
    value: "hourly"
  }, "Hour"), CronBuilder_jsx(external_antd_["Radio"].Button, {
    value: "nightly"
  }, "Night"), CronBuilder_jsx(external_antd_["Radio"].Button, {
    value: "weekly"
  }, "Week"), CronBuilder_jsx(external_antd_["Radio"].Button, {
    value: "monthly"
  }, "Month"), CronBuilder_jsx(external_antd_["Radio"].Button, {
    value: "custom"
  }, "Custom"))), CronBuilder_jsx(external_antd_["Form"].Item, {
    label: "Custom"
  }, CronBuilder_jsx(external_antd_["Input"].Group, {
    compact: true
  }, CronBuilder_jsx(external_antd_["Input"], {
    value: minute,
    onChange: e => setMinute(e.target.value) || setFrequency('custom'),
    style: {
      width: '20%'
    }
  }), CronBuilder_jsx(external_antd_["Input"], {
    value: hour,
    onChange: e => setHour(e.target.value) || setFrequency('custom'),
    style: {
      width: '20%'
    }
  }), CronBuilder_jsx(external_antd_["Input"], {
    value: day,
    onChange: e => setDay(e.target.value) || setFrequency('custom'),
    style: {
      width: '20%'
    }
  }), CronBuilder_jsx(external_antd_["Input"], {
    value: month,
    onChange: e => setMonth(e.target.value) || setFrequency('custom'),
    style: {
      width: '20%'
    }
  }), CronBuilder_jsx(external_antd_["Input"], {
    value: weekday,
    onChange: e => setWeekday(e.target.value) || setFrequency('custom'),
    style: {
      width: '20%'
    }
  })), CronBuilder_jsx("div", {
    className: "mt-10 flex items-center justify-between"
  }, CronBuilder_jsx("div", null, CronBuilder_jsx(external_antd_["Button"].Group, null, CronBuilder_jsx(external_antd_["Button"], {
    onClick: save,
    type: "primary"
  }, "Save"), CronBuilder_jsx(external_antd_["Button"], {
    onClick: cancel
  }, "Cancel"))), CronBuilder_jsx("div", null, job.key && CronBuilder_jsx(external_antd_["Button"], {
    onClick: remove,
    danger: true,
    type: "primary"
  }, "Delete")))));
}

/* harmony default export */ var components_CronBuilder = (CronBuilder);
// CONCATENATED MODULE: ./components/Editor.js
var Editor_jsx = external_react_default.a.createElement;



function Editor({
  job,
  onCancel,
  onSave,
  onDelete
}) {
  return Editor_jsx("div", {
    className: "flex flex-col p-8"
  }, Editor_jsx("main", {
    className: "flex-grow"
  }, Editor_jsx(components_CronBuilder, {
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








function App({
  initialJobs
}) {
  const {
    0: jobs,
    1: setJobs
  } = Object(external_react_["useState"])(initialJobs);
  const {
    0: job,
    1: setJob
  } = Object(external_react_["useState"])(null);

  const connect = async (selected = null) => {
    const res = await fetch('http://localhost:3000/api/get');
    const js = await res.json();
    setJobs(js);
  };

  const onCreate = () => {
    if (job && !job.key) {
      return 'already an unsaved job.';
    }

    fire('new-job');
    const b = Object(helpers["b" /* placeholder */])();
    return setJob(b);
  };

  const onCancel = async () => {
    external_antd_["message"].success('Changes cancelled.');
    setJob(null);
    const res = await fetch('http://localhost:3000/api/refresh');
    const js = await res.json();
    setJobs(js);
  };

  const onSave = async (j, payload) => {
    const data = {
      key: j.key,
      command: payload.command,
      comment: payload.name,
      interval: [payload.minute, payload.hour, payload.day, payload.month, payload.weekday].join(' ')
    };
    const res = await fetch('http://localhost:3000/api/save', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const {
      job,
      jobs,
      error
    } = await res.json();

    if (error) {
      return external_antd_["message"].error(error);
    }

    setJobs(jobs);
    setJob(job);
    return external_antd_["message"].success(`${job.name} saved.`);
  };

  const onDelete = j => {
    external_antd_["Modal"].confirm({
      title: j.name,
      content: `Are you sure you want to delete this job?`,
      onOk: async () => {
        const res = await fetch('http://localhost:3000/api/delete', {
          method: 'POST',
          body: j.key
        });
        const jobs = await res.json();
        setJobs(jobs);
        setJob(null);
        external_antd_["message"].error(`${j.name} deleted.`);
      }
    });
  };

  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx("div", {
    className: "flex flex-wrap min-h-screen"
  }, pages_jsx("nav", {
    className: "w-1/4"
  }, pages_jsx(components_Sidebar, {
    onCreate: onCreate,
    jobs: jobs,
    job: job,
    onSelect: setJob
  })), pages_jsx("div", {
    className: "w-3/4"
  }, job ? pages_jsx(components_Editor, {
    onCancel: onCancel,
    onSave: onSave,
    onDelete: onDelete,
    job: job
  }) : pages_jsx(components_Placeholder, {
    onCreate: onCreate
  }))));
}

const getServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/refresh');
    return {
      props: {
        initialJobs: await res.json()
      }
    };
  } catch (error) {
    return {
      props: {
        initialJobs: []
      }
    };
  }
};
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