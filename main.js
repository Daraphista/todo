/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'); */\n/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap'); */\n\n* {\n  font-family: 'Roboto', sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: rgb(255, 255, 255);\n  font-size: 1.25rem;\n  box-sizing: border-box;\n  border: none;\n}\n\n*::-webkit-scrollbar {\n  display: none;\n}\n\n*:focus {\n  outline: none;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n}\n\nbutton {\n  border: none;\n  background-color: #ffffff00;\n  border-radius: 0.1875rem;\n  padding-inline: 1rem;\n  padding-block: .5rem;\n  text-align: left;\n  cursor: pointer;\n  transition: 150ms;\n}\n\ninput {\n  color: rgb(44, 44, 44);\n  /* font-size: 1rem; */\n  padding: .25rem;\n  width: 100%;\n}\n\nbutton.selected {\n  background-color: #454545;\n}\n\nbutton:hover {\n  padding-left: 1.15rem;\n  background-color: #454545;\n}\n\nh2 {\n  font-size: 1.875rem;\n}\n\n/* content */\n\n#content {\n  min-width: 100%;\n  display: flex;\n}\n\n/* navbar */\n\n.navbar {\n  background-color: #393939;\n  min-width: 24.47%;\n  align-items: center;\n  gap: 2.625rem;\n  padding-block: 2.625rem;\n}\n\n.navbar, \n.navbar .categories,\n.navbar .projects,\n.navbar .projects div {\n  display: flex;\n}\n\n.navbar,\n.navbar .categories,\n.navbar .projects,\n.navbar .projects div {\n  flex-direction: column;\n}\n\n.navbar section div {\n  gap: 1.4375rem;\n}\n\n.navbar button {\n  display: flex;\n  align-items: center;\n}\n\n.navbar button:hover {\n  background-color: #4F4F4F;\n}\n\n.navbar button i {\n  display: none;\n  transition: 150ms;\n}\n\n.navbar button:hover i{\n  display: block;\n  margin-left: auto;\n  font-size: 1rem;\n  color: rgb(253, 80, 80);\n}\n\n.navbar button.add {\n  position: relative;\n  transition: none;\n}\n\n.navbar button.add.activated {\n  padding-inline: 0;\n  min-height: 50px;\n}\n\n.navbar button.add.activated:hover {\n  background-color: #ffffff00;\n}\n\n.navbar button.add.activated span {\n  display: none;\n}\n\n.navbar button.add form {\n  display: none;\n}\n\n.navbar button.add.activated form {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  gap: .25rem;\n}\n\n.navbar button.add input {\n  width: 90%;\n  border-radius: 50rem;\n}\n\n.navbar button.add .confirmation {\n  border-radius: 50rem;\n  background-color: #0066FF;\n  /* min-height: 34px; */\n  min-width: 40px;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.navbar section {\n  width: 80%;\n}\n\n/* main */\n\n.main,\n.main section {\n  display: flex;\n}\n\n.main section {\n  flex-direction: column;\n}\n\n.main {\n  background-color: #2C2B2B;\n  min-width: 75.53%;\n  justify-content: center;\n}\n\n.main section {\n  width: min(70%);\n  padding-block: 8%;\n  gap: 2rem;\n}\n\n.main section .task {\n  display: flex;\n  align-items: center;\n  border-radius: 0.1875rem;\n  cursor: pointer;\n  gap: .5rem;\n  padding-inline: 1rem;\n  padding-block: .5rem;\n  transition: 150ms;\n}\n\n.main section .task:hover {\n  background-color: #454545;\n  transform: translateY(-.25rem);\n}\n\n.main section .task .date {\n  margin-left: auto;\n  position: relative;\n}\n\n.main section .task .date input {\n  display: none;\n}\n\n.main section .task .date.revealed span {\n  display: none;\n}\n\n.main section .task .date.revealed input {\n  display: flex;\n  min-width: none;width: 10rem;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0;\n  font-size: 1rem;\n  border-radius: 50rem;\n  padding: .25rem;\n}\n\n.main section button.add {\n  position: relative;\n  transition: none;\n}\n\n.main section button.add.activated {\n  padding-inline: 0;\n  min-height: 50px;\n}\n\n.main section button.add.activated:hover {\n  background-color: #ffffff00;\n}\n\n.main section button.add.activated span {\n  display: none;\n}\n\n.main section button.add form {\n  display: none;\n}\n\n.main section button.add.activated form {\n  position: absolute;\n  min-width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  gap: .25rem;\n}\n\n.main section button.add input {\n  width: 100%;\n  border-radius: 50rem;\n}\n\n.main section button.add .confirmation {\n  border-radius: 50rem;\n  background-color: #0066FF;\n  /* min-height: 34px; */\n  min-width: 40px;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'); */\n/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap'); */\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n* {\n  font-family: 'Roboto', sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: rgb(255, 255, 255);\n  font-size: 1.25rem;\n  box-sizing: border-box;\n  border: none;\n}\n\n*::-webkit-scrollbar {\n  display: none;\n}\n\n*:focus {\n  outline: none;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n}\n\nbutton {\n  border: none;\n  background-color: #ffffff00;\n  border-radius: 0.1875rem;\n  padding-inline: 1rem;\n  padding-block: .5rem;\n  text-align: left;\n  cursor: pointer;\n  transition: 150ms;\n}\n\ninput {\n  color: rgb(44, 44, 44);\n  /* font-size: 1rem; */\n  padding: .25rem;\n  width: 100%;\n}\n\nbutton.selected {\n  background-color: #454545;\n}\n\nbutton:hover {\n  padding-left: 1.15rem;\n  background-color: #454545;\n}\n\nh2 {\n  font-size: 1.875rem;\n}\n\n/* content */\n\n#content {\n  min-width: 100%;\n  display: flex;\n}\n\n/* navbar */\n\n.navbar {\n  background-color: #393939;\n  min-width: 24.47%;\n  align-items: center;\n  gap: 2.625rem;\n  padding-block: 2.625rem;\n}\n\n.navbar, \n.navbar .categories,\n.navbar .projects,\n.navbar .projects div {\n  display: flex;\n}\n\n.navbar,\n.navbar .categories,\n.navbar .projects,\n.navbar .projects div {\n  flex-direction: column;\n}\n\n.navbar section div {\n  gap: 1.4375rem;\n}\n\n.navbar button {\n  display: flex;\n  align-items: center;\n}\n\n.navbar button:hover {\n  background-color: #4F4F4F;\n}\n\n.navbar button i {\n  display: none;\n  transition: 150ms;\n}\n\n.navbar button:hover i{\n  display: block;\n  margin-left: auto;\n  font-size: 1rem;\n  color: rgb(253, 80, 80);\n}\n\n.navbar button.add {\n  position: relative;\n  transition: none;\n}\n\n.navbar button.add.activated {\n  padding-inline: 0;\n  min-height: 50px;\n}\n\n.navbar button.add.activated:hover {\n  background-color: #ffffff00;\n}\n\n.navbar button.add.activated span {\n  display: none;\n}\n\n.navbar button.add form {\n  display: none;\n}\n\n.navbar button.add.activated form {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  gap: .25rem;\n}\n\n.navbar button.add input {\n  width: 90%;\n  border-radius: 50rem;\n}\n\n.navbar button.add .confirmation {\n  border-radius: 50rem;\n  background-color: #0066FF;\n  /* min-height: 34px; */\n  min-width: 40px;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.navbar section {\n  width: 80%;\n}\n\n/* main */\n\n.main,\n.main section {\n  display: flex;\n}\n\n.main section {\n  flex-direction: column;\n}\n\n.main {\n  background-color: #2C2B2B;\n  min-width: 75.53%;\n  justify-content: center;\n}\n\n.main section {\n  width: min(70%);\n  padding-block: 8%;\n  gap: 2rem;\n}\n\n.main section .task {\n  display: flex;\n  align-items: center;\n  border-radius: 0.1875rem;\n  cursor: pointer;\n  gap: .5rem;\n  padding-inline: 1rem;\n  padding-block: .5rem;\n  transition: 150ms;\n}\n\n.main section .task:hover {\n  background-color: #454545;\n  transform: translateY(-.25rem);\n}\n\n.main section .task .date {\n  margin-left: auto;\n  position: relative;\n}\n\n.main section .task .date input {\n  display: none;\n}\n\n.main section .task .date.revealed span {\n  display: none;\n}\n\n.main section .task .date.revealed input {\n  display: flex;\n  min-width: none;width: 10rem;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0;\n  font-size: 1rem;\n  border-radius: 50rem;\n  padding: .25rem;\n}\n\n.main section button.add {\n  position: relative;\n  transition: none;\n}\n\n.main section button.add.activated {\n  padding-inline: 0;\n  min-height: 50px;\n}\n\n.main section button.add.activated:hover {\n  background-color: #ffffff00;\n}\n\n.main section button.add.activated span {\n  display: none;\n}\n\n.main section button.add form {\n  display: none;\n}\n\n.main section button.add.activated form {\n  position: absolute;\n  min-width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  gap: .25rem;\n}\n\n.main section button.add input {\n  width: 100%;\n  border-radius: 50rem;\n}\n\n.main section button.add .confirmation {\n  border-radius: 50rem;\n  background-color: #0066FF;\n  /* min-height: 34px; */\n  min-width: 40px;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOM = (() => {
  const addClassNames = (element, ...classNames) => {
    classNames.forEach(className => {
      element.classList.add(className);
    })
  }
  const createContainer = (parent, ...classNames) => {
    const container = document.createElement('div');
    parent.appendChild(container);
    addClassNames(container, ...classNames)
    
    return container;
  }
  const createSection = (parent, ...classNames) => {
    const section = document.createElement('section');
    parent.appendChild(section);
    addClassNames(section, ...classNames)

    return section;
  }
  const createHeading = (parent, type, text, ...classNames) => {
    const heading = document.createElement(type);
    heading.textContent = text;
    addClassNames(heading, ...classNames);
    parent.appendChild(heading);
  }
  const createPara = (parent, text, ...classNames) => {
    const para = document.createElement('p');
    para.textContent = text;
    addClassNames(para, ...classNames);
    parent.appendChild(para);
  }
  const createLink = (parent, text, target, href, color) => {
    const link = document.createElement('a');
    link.textContent = text;
    link.target = target;
    link.href = href;
    link.style.color = color;

    parent.appendChild(link);

    return link;
  }
  const createSpan = (parent, text, ...classNames) => {
    const span = document.createElement('span');
    span.textContent = text;
    addClassNames(span, ...classNames);
    parent.appendChild(span);

    return span
  }
  const createList = (parent, liNestsElements, ...lis) => {
    const ul = document.createElement('ul');
    parent.appendChild(ul);
    if(liNestsElements) {
      lis.forEach(li => {
        const item = document.createElement('li');
        item.appendChild(li);
        ul.appendChild(item);
      })
    } else {
      lis.forEach(li => {
        const item = document.createElement('li');
        item.textContent = li;
        ul.appendChild(item);
      })
    }

    return ul;
  }
  const createImage = (parent, src) => {
    const image = document.createElement('img');
    image.src = src;
    parent.appendChild(image);
  }
  const createIcon = (parent, ...classNames) => {
    const icon = document.createElement('i');
    parent.appendChild(icon);
    addClassNames(icon, ...classNames)

    return icon;
  }
  const createIframe = (parent, src, loading) => {
    const iFrame = document.createElement('iframe');
    iFrame.src = src;
    iFrame.loading = loading;
    parent.appendChild(iFrame);
  }
  const createInput = (parent, placeholder, id, type) => {
    const input = document.createElement('input');
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    parent.appendChild(input)

    return input;
  }
  const createForm = (parent) => {
    const form = document.createElement('form');
    parent.appendChild(form);

    return form;
  }
  const createButton = (parent, text, ...classNames) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.type = 'button';
    addClassNames(button, ...classNames);
    parent.appendChild(button);

    return button;
  }
  const removeElement = (element) => {
    const parent = element.parent;
    parent.removeChild(element);
  }

  return {
  addClassNames,
  createContainer, 
  createSection, 
  createHeading, 
  createPara,
  createLink,
  createSpan,
  createList,
  createImage,
  createIcon,
  createIframe,
  createInput,
  createForm,
  createButton,
  removeElement,
  }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Data = (() => {
  const ProjectState = (title = 'unnamed') => {
  const tasks = [];
  return { title, tasks };
  }
  const CategoryState = (title) => {
  const tasks = [];
  return { title, tasks };
  }
  const TaskState = (title) => {
  let priority = 'urgent';
  let dueDate = 'no date';
  return { title, priority, dueDate };
  }

  let projects = localStorage.getItem('projects') 
  ? JSON.parse(localStorage.getItem('projects')) 
  : [];

  let categories = localStorage.getItem('categories') 
  ? JSON.parse(localStorage.getItem('categories')) 
  : [
  CategoryState('Inbox'), 
  CategoryState('Today'), 
  CategoryState('This week')
  ];

  console.log('%c Categories', 'color: orange;');
  console.table(categories);
  console.log('%c Projects', 'color: green;');
  console.table(projects);
  console.log('%c Localstorage', 'color: pink');
  console.table(localStorage);

  const Deleter = (array, state) => ({
  deleteSelf: () => {
    array.splice(array.indexOf(state), 1);
    console.log('deleted')
  }
  })
  const Creator = (state) => ({
  createTask: (title = 'unnamed') => {
    const task = TaskState(title)
    state.tasks.push(task);
    return task;
  }
  })
  const TitleChanger = (state) => ({
  changeTitle: (text) => {
    state.title = text;
  }
  })
  const DateChanger = (state) => ({
  changeDueDate: (text) => {
    state.dueDate = text;
  }
  })
  const PriorityChanger = (state) => ({
  changePriority: (text) => {
    state.priority;
  }
  })

  const composeObjects = (projects) => {
    projects.forEach(ProjectState => {
      if(ProjectState.tasks.length != 0) {
        ProjectState.tasks.forEach(TaskState => {
          return Object.assign(
            TaskState,
            Deleter(ProjectState.tasks, TaskState),
            TitleChanger(TaskState),
            DateChanger(TaskState),
            PriorityChanger(TaskState),
          )
        })
      }
      return Object.assign(
        ProjectState, 
        Deleter(projects, ProjectState),
        Creator(ProjectState),
        TitleChanger(ProjectState),
      );
    })
  };

  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('categories', JSON.stringify(categories));

  return { projects, categories, ProjectState, TaskState, composeObjects };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const content = document.querySelector('#content');

const Todo = (() => {
  let categories = localStorage.getItem('categories') 
  ? JSON.parse(localStorage.getItem('categories')) 
  : [
    CategoryState('Inbox'), 
    CategoryState('Today'), 
    CategoryState('This week')
  ];
  
  let projects = localStorage.getItem('projects') 
  ? JSON.parse(localStorage.getItem('projects')) 
  : [];

  _data__WEBPACK_IMPORTED_MODULE_1__["default"].composeObjects(projects);

  const _NavBar = (()=> {
    const _loadCategories = (parent) => {
      const section = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createSection(parent, 'category-section');
      const categoriesContainer = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer(section, 'categories');
      categories.forEach(category => {
        const button = (category.title == 'Inbox') 
        ? _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(categoriesContainer, category.title, 'selected') 
        : _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(categoriesContainer, category.title);
        button.setAttribute('data-index', categories.indexOf(category));

        button.addEventListener('click', e => {
          document.querySelector('.navbar .selected').classList.remove('selected');
          button.classList.add('selected');
          console.log(`category '${category.title}' was clicked`, button.classList);
        })
      })
    }

    const _loadProjects = (parent) => {
      const section = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createSection(parent, 'project-section');
      const projectsBar = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer(section, 'projects');
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createHeading(projectsBar, 'h2', 'Projects');
        const projectsContainer = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer(projectsBar, 'projects');
          projects.forEach(project => {
            let title = (project.title === '') ? 'untitled' : project.title;
            const button = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(projectsContainer, title);
            button.setAttribute('data-index', projects.indexOf(project));
            console.log(button.dataset.index);
            button.addEventListener('click', e => {
              document.querySelector('.navbar .selected').classList.remove('selected');
              button.classList.add('selected');
              console.log(`project '${title}' was clicked`);
            })

            const icon = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createIcon(button, 'far', 'fa-trash-alt')
            icon.addEventListener('click', e => {
              project.deleteSelf();
              localStorage.setItem('projects', JSON.stringify(projects));
              alert(`Are you sure you want to delete project '${title}'?`);
              location.reload();
            })
          })

        const addProjectBtn = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(projectsBar, '', 'add');
        addProjectBtn.addEventListener('click', e => {
          if(!e.target.classList.contains('confirmation')) {
            addProjectBtn.classList.add('activated');
            console.log('Add Project is activated');
          }
          if(addProjectBtn.classList.contains('activated')) {
            // content.style.cursor = 'pointer';
          }
        })
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createSpan(addProjectBtn, '+ Add Project');

        const addProjectForm = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createForm(addProjectBtn)
        const input = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createInput(addProjectForm, 'Project title...', 'add-project', 'text');
        
        const confirmationBtn = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(addProjectForm, '+', 'confirmation');
        confirmationBtn.addEventListener('click', () => {
          addProjectBtn.classList.remove('activated');
          const project = _data__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectState(input.value);
          projects.push(project);
          localStorage.setItem('projects', JSON.stringify(projects));
          console.log(projects);
          location.reload();
        })
    }

    const container = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer(
      document.querySelector('#content'), 
      'navbar'
    );

    const load = () => {
      _loadCategories(container);
      _loadProjects(container);
    }

    return { load };
  })();
  const _Main = (() => {
    const _container = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer(
      document.getElementById('content'), 
      'main'
    );
    const load = () => {
      const section = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createSection(_container);

      const selected = document.querySelector('.selected');
      let headingText;
      if(selected.parentElement.classList.contains('categories')) {
        headingText = categories[selected.dataset.index].title;
      } else if(selected.parentElement.classList.contains('projects')) {
        headingText = projects[selected.dataset.index].title;
      }

      const heading = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createHeading(section, 'h2', headingText);
      const tasks = projects[selected.dataset.index].tasks;
      console.log(tasks);
      tasks.forEach(task => {
        const container = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer(section, 'task');
        const icon = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createIcon(container, 'far', 'fa-circle');
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createSpan(container, task.title);
        const date = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer(container, 'date');
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createSpan(date, task.dueDate);
        const dateInput = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createInput(date, '', '', 'date');
        const dateValue = dateInput.value;
        date.addEventListener('click', (e) => {
          if(e.target.tagName !== 'INPUT') {
            date.classList.add('revealed');
          }
        })
        window.addEventListener('click', e => {
          const dateValue2 = dateInput.value;
          if(dateValue != dateValue2) {
            task.dueDate = dateValue2;
            console.log(task);
            localStorage.setItem('projects', JSON.stringify(projects));
            reloadMain();
          }
          // const form = document.querySelector('.date.revealed form');
          if(e.target.closest('.revealed') == null) {
            document.querySelector('.revealed').classList.remove('revealed');
          }
        })
        icon.addEventListener('click', e => {
          icon.classList.remove('far')
          icon.classList.remove('fa-circle');
          icon.classList.add('fas');
          icon.classList.add('fa-check');
          task.deleteSelf();
          localStorage.setItem('projects', JSON.stringify(projects));
          console.log('lmao');
        })
      })
      
      const button = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(section, '', 'add');
      _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createSpan(button, '+ Add Task');
      const buttonForm = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createForm(button);
      const buttonFormInput = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createInput(buttonForm, 'I want to...', '', 'text');
      const selectedProjectBtn = document.querySelector('.projects .selected');
      const confirmationBtn = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(buttonForm, '+', 'confirmation');
      button.addEventListener('click', e => {
        const project = projects[selectedProjectBtn.dataset.index];
        console.log(project);
        
        if(!e.target.classList.contains('confirmation')) {
          button.classList.add('activated');
        } else {
          button.classList.remove('activated');
          console.log(selectedProjectBtn.dataset.index);
          project.createTask(buttonFormInput.value);
          reloadMain();
          projects = JSON.parse(localStorage.getItem('projects'));
        }
        if(button.classList.contains('activated')) {
          console.log('asdkjfhsakdjf')
          // content.style.cursor = 'pointer';
        }
        
        localStorage.setItem('projects', JSON.stringify(projects));  
      })
    }

    return { load };
  })();
  
  const load = (parent) => {
    _NavBar.load(parent);
    _Main.load(parent);
  }

  const clearMain = () => {
    const main = document.querySelector('.main');
    while(main.firstElementChild) {
      main.removeChild(main.firstElementChild);
    }
  }

  const reloadMain = () => {
    clearMain();
    _Main.load();
  }

  return { load, reloadMain };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



const content = document.querySelector('#content');
_ui__WEBPACK_IMPORTED_MODULE_1__["default"].load(content);

const buttons = Array.from(document.querySelectorAll('.navbar button'));
buttons.forEach(button => button.addEventListener('click', () => {
  console.log('cleared main');
  _ui__WEBPACK_IMPORTED_MODULE_1__["default"].reloadMain();
}))

content.addEventListener('click', e => {
  if(e.target.closest('button.add') == null) {
    document.querySelector('.activated').classList.remove('activated');
  }
})

window.addEventListener('click', e => {
  // console.log(e, e.target);
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDeElsQjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsYUFBYTtBQUNiLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOzs7Ozs7VUNqTm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ0c7O0FBRXhCO0FBQ0EsZ0RBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBZTtBQUNqQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDAmZGlzcGxheT1zd2FwJyk7ICovXFxuLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMCZkaXNwbGF5PXN3YXAnKTsgKi9cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbio6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjE4NzVyZW07XFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gIHBhZGRpbmctYmxvY2s6IC41cmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDE1MG1zO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBjb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xcbiAgLyogZm9udC1zaXplOiAxcmVtOyAqL1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0NTQ1O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjE1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NDU0NTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG59XFxuXFxuLyogY29udGVudCAqL1xcblxcbiNjb250ZW50IHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIG5hdmJhciAqL1xcblxcbi5uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcXG4gIG1pbi13aWR0aDogMjQuNDclO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMi42MjVyZW07XFxuICBwYWRkaW5nLWJsb2NrOiAyLjYyNXJlbTtcXG59XFxuXFxuLm5hdmJhciwgXFxuLm5hdmJhciAuY2F0ZWdvcmllcyxcXG4ubmF2YmFyIC5wcm9qZWN0cyxcXG4ubmF2YmFyIC5wcm9qZWN0cyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hdmJhcixcXG4ubmF2YmFyIC5jYXRlZ29yaWVzLFxcbi5uYXZiYXIgLnByb2plY3RzLFxcbi5uYXZiYXIgLnByb2plY3RzIGRpdiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2YmFyIHNlY3Rpb24gZGl2IHtcXG4gIGdhcDogMS40Mzc1cmVtO1xcbn1cXG5cXG4ubmF2YmFyIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmJhciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcXG59XFxuXFxuLm5hdmJhciBidXR0b24gaSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdHJhbnNpdGlvbjogMTUwbXM7XFxufVxcblxcbi5uYXZiYXIgYnV0dG9uOmhvdmVyIGl7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHJnYigyNTMsIDgwLCA4MCk7XFxufVxcblxcbi5uYXZiYXIgYnV0dG9uLmFkZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbn1cXG5cXG4ubmF2YmFyIGJ1dHRvbi5hZGQuYWN0aXZhdGVkIHtcXG4gIHBhZGRpbmctaW5saW5lOiAwO1xcbiAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuLm5hdmJhciBidXR0b24uYWRkLmFjdGl2YXRlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XFxufVxcblxcbi5uYXZiYXIgYnV0dG9uLmFkZC5hY3RpdmF0ZWQgc3BhbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2YmFyIGJ1dHRvbi5hZGQgZm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2YmFyIGJ1dHRvbi5hZGQuYWN0aXZhdGVkIGZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuMjVyZW07XFxufVxcblxcbi5uYXZiYXIgYnV0dG9uLmFkZCBpbnB1dCB7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTByZW07XFxufVxcblxcbi5uYXZiYXIgYnV0dG9uLmFkZCAuY29uZmlybWF0aW9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZGRjtcXG4gIC8qIG1pbi1oZWlnaHQ6IDM0cHg7ICovXFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmJhciBzZWN0aW9uIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi8qIG1haW4gKi9cXG5cXG4ubWFpbixcXG4ubWFpbiBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluIHNlY3Rpb24ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDMkIyQjtcXG4gIG1pbi13aWR0aDogNzUuNTMlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHNlY3Rpb24ge1xcbiAgd2lkdGg6IG1pbig3MCUpO1xcbiAgcGFkZGluZy1ibG9jazogOCU7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5tYWluIHNlY3Rpb24gLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjE4NzVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBnYXA6IC41cmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICBwYWRkaW5nLWJsb2NrOiAuNXJlbTtcXG4gIHRyYW5zaXRpb246IDE1MG1zO1xcbn1cXG5cXG4ubWFpbiBzZWN0aW9uIC50YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTQ1NDU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4yNXJlbSk7XFxufVxcblxcbi5tYWluIHNlY3Rpb24gLnRhc2sgLmRhdGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYWluIHNlY3Rpb24gLnRhc2sgLmRhdGUgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW4gc2VjdGlvbiAudGFzayAuZGF0ZS5yZXZlYWxlZCBzcGFuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluIHNlY3Rpb24gLnRhc2sgLmRhdGUucmV2ZWFsZWQgaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi13aWR0aDogbm9uZTt3aWR0aDogMTByZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTByZW07XFxuICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5tYWluIHNlY3Rpb24gYnV0dG9uLmFkZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbn1cXG5cXG4ubWFpbiBzZWN0aW9uIGJ1dHRvbi5hZGQuYWN0aXZhdGVkIHtcXG4gIHBhZGRpbmctaW5saW5lOiAwO1xcbiAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuLm1haW4gc2VjdGlvbiBidXR0b24uYWRkLmFjdGl2YXRlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XFxufVxcblxcbi5tYWluIHNlY3Rpb24gYnV0dG9uLmFkZC5hY3RpdmF0ZWQgc3BhbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbiBzZWN0aW9uIGJ1dHRvbi5hZGQgZm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbiBzZWN0aW9uIGJ1dHRvbi5hZGQuYWN0aXZhdGVkIGZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuMjVyZW07XFxufVxcblxcbi5tYWluIHNlY3Rpb24gYnV0dG9uLmFkZCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xcbn1cXG5cXG4ubWFpbiBzZWN0aW9uIGJ1dHRvbi5hZGQgLmNvbmZpcm1hdGlvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1MHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY2RkY7XFxuICAvKiBtaW4taGVpZ2h0OiAzNHB4OyAqL1xcbiAgbWluLXdpZHRoOiA0MHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMEZBQTBGO0FBQzFGLDhGQUE4Rjs7QUFHOUY7RUFDRSxpQ0FBaUM7RUFDakMsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtF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QUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwJmRpc3BsYXk9c3dhcCcpOyAqL1xcbi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDAmZGlzcGxheT1zd2FwJyk7ICovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTg3NXJlbTtcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgcGFkZGluZy1ibG9jazogLjVyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMTUwbXM7XFxufVxcblxcbmlucHV0IHtcXG4gIGNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XFxuICAvKiBmb250LXNpemU6IDFyZW07ICovXFxuICBwYWRkaW5nOiAuMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTQ1NDU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuMTVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0NTQ1O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbn1cXG5cXG4vKiBjb250ZW50ICovXFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogbmF2YmFyICovXFxuXFxuLm5hdmJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xcbiAgbWluLXdpZHRoOiAyNC40NyU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyLjYyNXJlbTtcXG4gIHBhZGRpbmctYmxvY2s6IDIuNjI1cmVtO1xcbn1cXG5cXG4ubmF2YmFyLCBcXG4ubmF2YmFyIC5jYXRlZ29yaWVzLFxcbi5uYXZiYXIgLnByb2plY3RzLFxcbi5uYXZiYXIgLnByb2plY3RzIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2YmFyLFxcbi5uYXZiYXIgLmNhdGVnb3JpZXMsXFxuLm5hdmJhciAucHJvamVjdHMsXFxuLm5hdmJhciAucHJvamVjdHMgZGl2IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXZiYXIgc2VjdGlvbiBkaXYge1xcbiAgZ2FwOiAxLjQzNzVyZW07XFxufVxcblxcbi5uYXZiYXIgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2YmFyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xcbn1cXG5cXG4ubmF2YmFyIGJ1dHRvbiBpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAxNTBtcztcXG59XFxuXFxuLm5hdmJhciBidXR0b246aG92ZXIgaXtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogcmdiKDI1MywgODAsIDgwKTtcXG59XFxuXFxuLm5hdmJhciBidXR0b24uYWRkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcblxcbi5uYXZiYXIgYnV0dG9uLmFkZC5hY3RpdmF0ZWQge1xcbiAgcGFkZGluZy1pbmxpbmU6IDA7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubmF2YmFyIGJ1dHRvbi5hZGQuYWN0aXZhdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXG59XFxuXFxuLm5hdmJhciBidXR0b24uYWRkLmFjdGl2YXRlZCBzcGFuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXZiYXIgYnV0dG9uLmFkZCBmb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXZiYXIgYnV0dG9uLmFkZC5hY3RpdmF0ZWQgZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxuXFxuLm5hdmJhciBidXR0b24uYWRkIGlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MHJlbTtcXG59XFxuXFxuLm5hdmJhciBidXR0b24uYWRkIC5jb25maXJtYXRpb24ge1xcbiAgYm9yZGVyLXJhZGl1czogNTByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NkZGO1xcbiAgLyogbWluLWhlaWdodDogMzRweDsgKi9cXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2YmFyIHNlY3Rpb24ge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLyogbWFpbiAqL1xcblxcbi5tYWluLFxcbi5tYWluIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW4gc2VjdGlvbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMyQjJCO1xcbiAgbWluLXdpZHRoOiA3NS41MyU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4gc2VjdGlvbiB7XFxuICB3aWR0aDogbWluKDcwJSk7XFxuICBwYWRkaW5nLWJsb2NrOiA4JTtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLm1haW4gc2VjdGlvbiAudGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTg3NXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGdhcDogLjVyZW07XFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gIHBhZGRpbmctYmxvY2s6IC41cmVtO1xcbiAgdHJhbnNpdGlvbjogMTUwbXM7XFxufVxcblxcbi5tYWluIHNlY3Rpb24gLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NDU0NTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjI1cmVtKTtcXG59XFxuXFxuLm1haW4gc2VjdGlvbiAudGFzayAuZGF0ZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1haW4gc2VjdGlvbiAudGFzayAuZGF0ZSBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbiBzZWN0aW9uIC50YXNrIC5kYXRlLnJldmVhbGVkIHNwYW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW4gc2VjdGlvbiAudGFzayAuZGF0ZS5yZXZlYWxlZCBpbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLXdpZHRoOiBub25lO3dpZHRoOiAxMHJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MHJlbTtcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLm1haW4gc2VjdGlvbiBidXR0b24uYWRkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcblxcbi5tYWluIHNlY3Rpb24gYnV0dG9uLmFkZC5hY3RpdmF0ZWQge1xcbiAgcGFkZGluZy1pbmxpbmU6IDA7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubWFpbiBzZWN0aW9uIGJ1dHRvbi5hZGQuYWN0aXZhdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXG59XFxuXFxuLm1haW4gc2VjdGlvbiBidXR0b24uYWRkLmFjdGl2YXRlZCBzcGFuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluIHNlY3Rpb24gYnV0dG9uLmFkZCBmb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluIHNlY3Rpb24gYnV0dG9uLmFkZC5hY3RpdmF0ZWQgZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxuXFxuLm1haW4gc2VjdGlvbiBidXR0b24uYWRkIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTByZW07XFxufVxcblxcbi5tYWluIHNlY3Rpb24gYnV0dG9uLmFkZCAuY29uZmlybWF0aW9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZGRjtcXG4gIC8qIG1pbi1oZWlnaHQ6IDM0cHg7ICovXFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBET00gPSAoKCkgPT4ge1xuICBjb25zdCBhZGRDbGFzc05hbWVzID0gKGVsZW1lbnQsIC4uLmNsYXNzTmFtZXMpID0+IHtcbiAgICBjbGFzc05hbWVzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pXG4gIH1cbiAgY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKHBhcmVudCwgLi4uY2xhc3NOYW1lcykgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGFkZENsYXNzTmFtZXMoY29udGFpbmVyLCAuLi5jbGFzc05hbWVzKVxuICAgIFxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbiAgY29uc3QgY3JlYXRlU2VjdGlvbiA9IChwYXJlbnQsIC4uLmNsYXNzTmFtZXMpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICBhZGRDbGFzc05hbWVzKHNlY3Rpb24sIC4uLmNsYXNzTmFtZXMpXG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfVxuICBjb25zdCBjcmVhdGVIZWFkaW5nID0gKHBhcmVudCwgdHlwZSwgdGV4dCwgLi4uY2xhc3NOYW1lcykgPT4ge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGFkZENsYXNzTmFtZXMoaGVhZGluZywgLi4uY2xhc3NOYW1lcyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICB9XG4gIGNvbnN0IGNyZWF0ZVBhcmEgPSAocGFyZW50LCB0ZXh0LCAuLi5jbGFzc05hbWVzKSA9PiB7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBhZGRDbGFzc05hbWVzKHBhcmEsIC4uLmNsYXNzTmFtZXMpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwYXJhKTtcbiAgfVxuICBjb25zdCBjcmVhdGVMaW5rID0gKHBhcmVudCwgdGV4dCwgdGFyZ2V0LCBocmVmLCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgbGluay50YXJnZXQgPSB0YXJnZXQ7XG4gICAgbGluay5ocmVmID0gaHJlZjtcbiAgICBsaW5rLnN0eWxlLmNvbG9yID0gY29sb3I7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICByZXR1cm4gbGluaztcbiAgfVxuICBjb25zdCBjcmVhdGVTcGFuID0gKHBhcmVudCwgdGV4dCwgLi4uY2xhc3NOYW1lcykgPT4ge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgYWRkQ2xhc3NOYW1lcyhzcGFuLCAuLi5jbGFzc05hbWVzKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICByZXR1cm4gc3BhblxuICB9XG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAocGFyZW50LCBsaU5lc3RzRWxlbWVudHMsIC4uLmxpcykgPT4ge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGlmKGxpTmVzdHNFbGVtZW50cykge1xuICAgICAgbGlzLmZvckVhY2gobGkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzLmZvckVhY2gobGkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGxpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHVsO1xuICB9XG4gIGNvbnN0IGNyZWF0ZUltYWdlID0gKHBhcmVudCwgc3JjKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgfVxuICBjb25zdCBjcmVhdGVJY29uID0gKHBhcmVudCwgLi4uY2xhc3NOYW1lcykgPT4ge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGljb24pO1xuICAgIGFkZENsYXNzTmFtZXMoaWNvbiwgLi4uY2xhc3NOYW1lcylcblxuICAgIHJldHVybiBpY29uO1xuICB9XG4gIGNvbnN0IGNyZWF0ZUlmcmFtZSA9IChwYXJlbnQsIHNyYywgbG9hZGluZykgPT4ge1xuICAgIGNvbnN0IGlGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGlGcmFtZS5zcmMgPSBzcmM7XG4gICAgaUZyYW1lLmxvYWRpbmcgPSBsb2FkaW5nO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpRnJhbWUpO1xuICB9XG4gIGNvbnN0IGNyZWF0ZUlucHV0ID0gKHBhcmVudCwgcGxhY2Vob2xkZXIsIGlkLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LmlkID0gaWQ7XG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5wdXQpXG5cbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgY29uc3QgY3JlYXRlRm9ybSA9IChwYXJlbnQpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHJldHVybiBmb3JtO1xuICB9XG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChwYXJlbnQsIHRleHQsIC4uLmNsYXNzTmFtZXMpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYWRkQ2xhc3NOYW1lcyhidXR0b24sIC4uLmNsYXNzTmFtZXMpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuICBjb25zdCByZW1vdmVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudDtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4ge1xuICBhZGRDbGFzc05hbWVzLFxuICBjcmVhdGVDb250YWluZXIsIFxuICBjcmVhdGVTZWN0aW9uLCBcbiAgY3JlYXRlSGVhZGluZywgXG4gIGNyZWF0ZVBhcmEsXG4gIGNyZWF0ZUxpbmssXG4gIGNyZWF0ZVNwYW4sXG4gIGNyZWF0ZUxpc3QsXG4gIGNyZWF0ZUltYWdlLFxuICBjcmVhdGVJY29uLFxuICBjcmVhdGVJZnJhbWUsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVGb3JtLFxuICBjcmVhdGVCdXR0b24sXG4gIHJlbW92ZUVsZW1lbnQsXG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTTsiLCJjb25zdCBEYXRhID0gKCgpID0+IHtcbiAgY29uc3QgUHJvamVjdFN0YXRlID0gKHRpdGxlID0gJ3VubmFtZWQnKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIHJldHVybiB7IHRpdGxlLCB0YXNrcyB9O1xuICB9XG4gIGNvbnN0IENhdGVnb3J5U3RhdGUgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgcmV0dXJuIHsgdGl0bGUsIHRhc2tzIH07XG4gIH1cbiAgY29uc3QgVGFza1N0YXRlID0gKHRpdGxlKSA9PiB7XG4gIGxldCBwcmlvcml0eSA9ICd1cmdlbnQnO1xuICBsZXQgZHVlRGF0ZSA9ICdubyBkYXRlJztcbiAgcmV0dXJuIHsgdGl0bGUsIHByaW9yaXR5LCBkdWVEYXRlIH07XG4gIH1cblxuICBsZXQgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSBcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSBcbiAgOiBbXTtcblxuICBsZXQgY2F0ZWdvcmllcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yaWVzJykgXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcmllcycpKSBcbiAgOiBbXG4gIENhdGVnb3J5U3RhdGUoJ0luYm94JyksIFxuICBDYXRlZ29yeVN0YXRlKCdUb2RheScpLCBcbiAgQ2F0ZWdvcnlTdGF0ZSgnVGhpcyB3ZWVrJylcbiAgXTtcblxuICBjb25zb2xlLmxvZygnJWMgQ2F0ZWdvcmllcycsICdjb2xvcjogb3JhbmdlOycpO1xuICBjb25zb2xlLnRhYmxlKGNhdGVnb3JpZXMpO1xuICBjb25zb2xlLmxvZygnJWMgUHJvamVjdHMnLCAnY29sb3I6IGdyZWVuOycpO1xuICBjb25zb2xlLnRhYmxlKHByb2plY3RzKTtcbiAgY29uc29sZS5sb2coJyVjIExvY2Fsc3RvcmFnZScsICdjb2xvcjogcGluaycpO1xuICBjb25zb2xlLnRhYmxlKGxvY2FsU3RvcmFnZSk7XG5cbiAgY29uc3QgRGVsZXRlciA9IChhcnJheSwgc3RhdGUpID0+ICh7XG4gIGRlbGV0ZVNlbGY6ICgpID0+IHtcbiAgICBhcnJheS5zcGxpY2UoYXJyYXkuaW5kZXhPZihzdGF0ZSksIDEpO1xuICAgIGNvbnNvbGUubG9nKCdkZWxldGVkJylcbiAgfVxuICB9KVxuICBjb25zdCBDcmVhdG9yID0gKHN0YXRlKSA9PiAoe1xuICBjcmVhdGVUYXNrOiAodGl0bGUgPSAndW5uYW1lZCcpID0+IHtcbiAgICBjb25zdCB0YXNrID0gVGFza1N0YXRlKHRpdGxlKVxuICAgIHN0YXRlLnRhc2tzLnB1c2godGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cbiAgfSlcbiAgY29uc3QgVGl0bGVDaGFuZ2VyID0gKHN0YXRlKSA9PiAoe1xuICBjaGFuZ2VUaXRsZTogKHRleHQpID0+IHtcbiAgICBzdGF0ZS50aXRsZSA9IHRleHQ7XG4gIH1cbiAgfSlcbiAgY29uc3QgRGF0ZUNoYW5nZXIgPSAoc3RhdGUpID0+ICh7XG4gIGNoYW5nZUR1ZURhdGU6ICh0ZXh0KSA9PiB7XG4gICAgc3RhdGUuZHVlRGF0ZSA9IHRleHQ7XG4gIH1cbiAgfSlcbiAgY29uc3QgUHJpb3JpdHlDaGFuZ2VyID0gKHN0YXRlKSA9PiAoe1xuICBjaGFuZ2VQcmlvcml0eTogKHRleHQpID0+IHtcbiAgICBzdGF0ZS5wcmlvcml0eTtcbiAgfVxuICB9KVxuXG4gIGNvbnN0IGNvbXBvc2VPYmplY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgcHJvamVjdHMuZm9yRWFjaChQcm9qZWN0U3RhdGUgPT4ge1xuICAgICAgaWYoUHJvamVjdFN0YXRlLnRhc2tzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIFByb2plY3RTdGF0ZS50YXNrcy5mb3JFYWNoKFRhc2tTdGF0ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICBUYXNrU3RhdGUsXG4gICAgICAgICAgICBEZWxldGVyKFByb2plY3RTdGF0ZS50YXNrcywgVGFza1N0YXRlKSxcbiAgICAgICAgICAgIFRpdGxlQ2hhbmdlcihUYXNrU3RhdGUpLFxuICAgICAgICAgICAgRGF0ZUNoYW5nZXIoVGFza1N0YXRlKSxcbiAgICAgICAgICAgIFByaW9yaXR5Q2hhbmdlcihUYXNrU3RhdGUpLFxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICBQcm9qZWN0U3RhdGUsIFxuICAgICAgICBEZWxldGVyKHByb2plY3RzLCBQcm9qZWN0U3RhdGUpLFxuICAgICAgICBDcmVhdG9yKFByb2plY3RTdGF0ZSksXG4gICAgICAgIFRpdGxlQ2hhbmdlcihQcm9qZWN0U3RhdGUpLFxuICAgICAgKTtcbiAgICB9KVxuICB9O1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xuXG4gIHJldHVybiB7IHByb2plY3RzLCBjYXRlZ29yaWVzLCBQcm9qZWN0U3RhdGUsIFRhc2tTdGF0ZSwgY29tcG9zZU9iamVjdHMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERhdGE7IiwiaW1wb3J0IERPTSBmcm9tICcuL0RPTSdcbmltcG9ydCBEYXRhIGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmNvbnN0IFRvZG8gPSAoKCkgPT4ge1xuICBsZXQgY2F0ZWdvcmllcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yaWVzJykgXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcmllcycpKSBcbiAgOiBbXG4gICAgQ2F0ZWdvcnlTdGF0ZSgnSW5ib3gnKSwgXG4gICAgQ2F0ZWdvcnlTdGF0ZSgnVG9kYXknKSwgXG4gICAgQ2F0ZWdvcnlTdGF0ZSgnVGhpcyB3ZWVrJylcbiAgXTtcbiAgXG4gIGxldCBwcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpIFxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIFxuICA6IFtdO1xuXG4gIERhdGEuY29tcG9zZU9iamVjdHMocHJvamVjdHMpO1xuXG4gIGNvbnN0IF9OYXZCYXIgPSAoKCk9PiB7XG4gICAgY29uc3QgX2xvYWRDYXRlZ29yaWVzID0gKHBhcmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VjdGlvbiA9IERPTS5jcmVhdGVTZWN0aW9uKHBhcmVudCwgJ2NhdGVnb3J5LXNlY3Rpb24nKTtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXNDb250YWluZXIgPSBET00uY3JlYXRlQ29udGFpbmVyKHNlY3Rpb24sICdjYXRlZ29yaWVzJyk7XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSAoY2F0ZWdvcnkudGl0bGUgPT0gJ0luYm94JykgXG4gICAgICAgID8gRE9NLmNyZWF0ZUJ1dHRvbihjYXRlZ29yaWVzQ29udGFpbmVyLCBjYXRlZ29yeS50aXRsZSwgJ3NlbGVjdGVkJykgXG4gICAgICAgIDogRE9NLmNyZWF0ZUJ1dHRvbihjYXRlZ29yaWVzQ29udGFpbmVyLCBjYXRlZ29yeS50aXRsZSk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBjYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpKTtcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyIC5zZWxlY3RlZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coYGNhdGVnb3J5ICcke2NhdGVnb3J5LnRpdGxlfScgd2FzIGNsaWNrZWRgLCBidXR0b24uY2xhc3NMaXN0KTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgX2xvYWRQcm9qZWN0cyA9IChwYXJlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSBET00uY3JlYXRlU2VjdGlvbihwYXJlbnQsICdwcm9qZWN0LXNlY3Rpb24nKTtcbiAgICAgIGNvbnN0IHByb2plY3RzQmFyID0gRE9NLmNyZWF0ZUNvbnRhaW5lcihzZWN0aW9uLCAncHJvamVjdHMnKTtcbiAgICAgICAgRE9NLmNyZWF0ZUhlYWRpbmcocHJvamVjdHNCYXIsICdoMicsICdQcm9qZWN0cycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IERPTS5jcmVhdGVDb250YWluZXIocHJvamVjdHNCYXIsICdwcm9qZWN0cycpO1xuICAgICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSAocHJvamVjdC50aXRsZSA9PT0gJycpID8gJ3VudGl0bGVkJyA6IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBET00uY3JlYXRlQnV0dG9uKHByb2plY3RzQ29udGFpbmVyLCB0aXRsZSk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24uZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhciAuc2VsZWN0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYHByb2plY3QgJyR7dGl0bGV9JyB3YXMgY2xpY2tlZGApO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IERPTS5jcmVhdGVJY29uKGJ1dHRvbiwgJ2ZhcicsICdmYS10cmFzaC1hbHQnKVxuICAgICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICBwcm9qZWN0LmRlbGV0ZVNlbGYoKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICAgICAgICAgICAgYWxlcnQoYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgcHJvamVjdCAnJHt0aXRsZX0nP2ApO1xuICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gRE9NLmNyZWF0ZUJ1dHRvbihwcm9qZWN0c0JhciwgJycsICdhZGQnKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgIGlmKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbmZpcm1hdGlvbicpKSB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2YXRlZCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZCBQcm9qZWN0IGlzIGFjdGl2YXRlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZhdGVkJykpIHtcbiAgICAgICAgICAgIC8vIGNvbnRlbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgRE9NLmNyZWF0ZVNwYW4oYWRkUHJvamVjdEJ0biwgJysgQWRkIFByb2plY3QnKTtcblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IERPTS5jcmVhdGVGb3JtKGFkZFByb2plY3RCdG4pXG4gICAgICAgIGNvbnN0IGlucHV0ID0gRE9NLmNyZWF0ZUlucHV0KGFkZFByb2plY3RGb3JtLCAnUHJvamVjdCB0aXRsZS4uLicsICdhZGQtcHJvamVjdCcsICd0ZXh0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb25maXJtYXRpb25CdG4gPSBET00uY3JlYXRlQnV0dG9uKGFkZFByb2plY3RGb3JtLCAnKycsICdjb25maXJtYXRpb24nKTtcbiAgICAgICAgY29uZmlybWF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgY29uc3QgcHJvamVjdCA9IERhdGEuUHJvamVjdFN0YXRlKGlucHV0LnZhbHVlKTtcbiAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTS5jcmVhdGVDb250YWluZXIoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLCBcbiAgICAgICduYXZiYXInXG4gICAgKTtcblxuICAgIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgICBfbG9hZENhdGVnb3JpZXMoY29udGFpbmVyKTtcbiAgICAgIF9sb2FkUHJvamVjdHMoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBsb2FkIH07XG4gIH0pKCk7XG4gIGNvbnN0IF9NYWluID0gKCgpID0+IHtcbiAgICBjb25zdCBfY29udGFpbmVyID0gRE9NLmNyZWF0ZUNvbnRhaW5lcihcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JyksIFxuICAgICAgJ21haW4nXG4gICAgKTtcbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2VjdGlvbiA9IERPTS5jcmVhdGVTZWN0aW9uKF9jb250YWluZXIpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgICAgbGV0IGhlYWRpbmdUZXh0O1xuICAgICAgaWYoc2VsZWN0ZWQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhdGVnb3JpZXMnKSkge1xuICAgICAgICBoZWFkaW5nVGV4dCA9IGNhdGVnb3JpZXNbc2VsZWN0ZWQuZGF0YXNldC5pbmRleF0udGl0bGU7XG4gICAgICB9IGVsc2UgaWYoc2VsZWN0ZWQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RzJykpIHtcbiAgICAgICAgaGVhZGluZ1RleHQgPSBwcm9qZWN0c1tzZWxlY3RlZC5kYXRhc2V0LmluZGV4XS50aXRsZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGVhZGluZyA9IERPTS5jcmVhdGVIZWFkaW5nKHNlY3Rpb24sICdoMicsIGhlYWRpbmdUZXh0KTtcbiAgICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdHNbc2VsZWN0ZWQuZGF0YXNldC5pbmRleF0udGFza3M7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBET00uY3JlYXRlQ29udGFpbmVyKHNlY3Rpb24sICd0YXNrJyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBET00uY3JlYXRlSWNvbihjb250YWluZXIsICdmYXInLCAnZmEtY2lyY2xlJyk7XG4gICAgICAgIERPTS5jcmVhdGVTcGFuKGNvbnRhaW5lciwgdGFzay50aXRsZSk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBET00uY3JlYXRlQ29udGFpbmVyKGNvbnRhaW5lciwgJ2RhdGUnKTtcbiAgICAgICAgRE9NLmNyZWF0ZVNwYW4oZGF0ZSwgdGFzay5kdWVEYXRlKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gRE9NLmNyZWF0ZUlucHV0KGRhdGUsICcnLCAnJywgJ2RhdGUnKTtcbiAgICAgICAgY29uc3QgZGF0ZVZhbHVlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICBpZihlLnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3JldmVhbGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlVmFsdWUyID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgIGlmKGRhdGVWYWx1ZSAhPSBkYXRlVmFsdWUyKSB7XG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBkYXRlVmFsdWUyO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgICAgICAgICAgcmVsb2FkTWFpbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUucmV2ZWFsZWQgZm9ybScpO1xuICAgICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoJy5yZXZlYWxlZCcpID09IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZlYWxlZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3JldmVhbGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYXInKVxuICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2lyY2xlJyk7XG4gICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYXMnKTtcbiAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZWNrJyk7XG4gICAgICAgICAgdGFzay5kZWxldGVTZWxmKCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbG1hbycpO1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgY29uc3QgYnV0dG9uID0gRE9NLmNyZWF0ZUJ1dHRvbihzZWN0aW9uLCAnJywgJ2FkZCcpO1xuICAgICAgRE9NLmNyZWF0ZVNwYW4oYnV0dG9uLCAnKyBBZGQgVGFzaycpO1xuICAgICAgY29uc3QgYnV0dG9uRm9ybSA9IERPTS5jcmVhdGVGb3JtKGJ1dHRvbik7XG4gICAgICBjb25zdCBidXR0b25Gb3JtSW5wdXQgPSBET00uY3JlYXRlSW5wdXQoYnV0dG9uRm9ybSwgJ0kgd2FudCB0by4uLicsICcnLCAndGV4dCcpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzIC5zZWxlY3RlZCcpO1xuICAgICAgY29uc3QgY29uZmlybWF0aW9uQnRuID0gRE9NLmNyZWF0ZUJ1dHRvbihidXR0b25Gb3JtLCAnKycsICdjb25maXJtYXRpb24nKTtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbc2VsZWN0ZWRQcm9qZWN0QnRuLmRhdGFzZXQuaW5kZXhdO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbmZpcm1hdGlvbicpKSB7XG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2YXRlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3RCdG4uZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgcHJvamVjdC5jcmVhdGVUYXNrKGJ1dHRvbkZvcm1JbnB1dC52YWx1ZSk7XG4gICAgICAgICAgcmVsb2FkTWFpbigpO1xuICAgICAgICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZhdGVkJykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnYXNka2pmaHNha2RqZicpXG4gICAgICAgICAgLy8gY29udGVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7ICBcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbG9hZCB9O1xuICB9KSgpO1xuICBcbiAgY29uc3QgbG9hZCA9IChwYXJlbnQpID0+IHtcbiAgICBfTmF2QmFyLmxvYWQocGFyZW50KTtcbiAgICBfTWFpbi5sb2FkKHBhcmVudCk7XG4gIH1cblxuICBjb25zdCBjbGVhck1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgd2hpbGUobWFpbi5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByZWxvYWRNYWluID0gKCkgPT4ge1xuICAgIGNsZWFyTWFpbigpO1xuICAgIF9NYWluLmxvYWQoKTtcbiAgfVxuXG4gIHJldHVybiB7IGxvYWQsIHJlbG9hZE1haW4gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi91aSc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuVG9kby5sb2FkKGNvbnRlbnQpO1xuXG5jb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyIGJ1dHRvbicpKTtcbmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnY2xlYXJlZCBtYWluJyk7XG4gIFRvZG8ucmVsb2FkTWFpbigpO1xufSkpXG5cbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgaWYoZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmFkZCcpID09IG51bGwpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZhdGVkJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGVkJyk7XG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhlLCBlLnRhcmdldCk7XG59KVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==