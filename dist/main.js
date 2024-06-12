/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\nclass App {\n  constructor() {\n    this.router = new _router_js__WEBPACK_IMPORTED_MODULE_0__.Router();\n    window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this));\n    window.addEventListener('popstate', this.handleRouteChanging.bind(this));\n  }\n  handleRouteChanging() {\n    this.router.openRoute();\n  }\n}\nnew App();\n\n//# sourceURL=webpack://js-w/./src/app.js?");

/***/ }),

/***/ "./src/componets/account.js":
/*!**********************************!*\
  !*** ./src/componets/account.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Account: () => (/* binding */ Account)\n/* harmony export */ });\nclass Account {\n  constructor() {\n    this.processElement = null;\n    this.fields = [{\n      name: 'name',\n      id: 'name',\n      element: null,\n      regex: /[А-ЯЁ][а-яё]* [А-ЯЁ][а-яё]*$/,\n      valid: false\n    }, {\n      name: 'email',\n      id: 'email',\n      element: null,\n      regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+/,\n      valid: false\n    }, {\n      name: 'password',\n      id: 'password',\n      element: null,\n      regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,\n      valid: false\n    }, {\n      name: 'repeat_password',\n      id: 'repeat_password',\n      element: null,\n      regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,\n      valid: false\n    }];\n    const that = this;\n    this.fields.forEach(item => {\n      item.element = document.getElementById(item.id);\n      item.element.onchange = function () {\n        that.validateField.call(that, item, this);\n      };\n    });\n    this.processElement = document.getElementById('process');\n    this.processElement.onclick = function () {\n      that.processAccount();\n    };\n    this.lastElement = document.getElementById('auth_text');\n    this.lastElement.onclick = function () {\n      location.href = 'form.html';\n    };\n  }\n  validateField(field, element) {\n    let password = document.getElementById('password').value;\n    let confirmPassword = document.getElementById('repeat_password').value;\n    if (!element.value || !element.value.match(field.regex)) {\n      element.style.borderColor = 'red';\n      field.valid = false;\n    } else {\n      element.removeAttribute('style');\n      field.valid = true;\n    }\n    this.validateAccount();\n  }\n  validateAccount() {\n    const validAccount = this.fields.every(item => item.valid);\n    if (validAccount) {\n      this.processElement.removeAttribute('disabled');\n    } else {\n      this.processElement.setAttribute('disabled', 'disabled');\n    }\n    return validAccount;\n  }\n  processAccount() {\n    if (this.validateAccount()) {\n      let paramString = '';\n      this.fields.forEach(item => {\n        paramString += (!paramString ? '?' : '&') + item.name + '=' + item.element.value;\n      });\n      location.href = 'home.html' + paramString;\n    }\n  }\n}\n\n//# sourceURL=webpack://js-w/./src/componets/account.js?");

/***/ }),

/***/ "./src/componets/form.js":
/*!*******************************!*\
  !*** ./src/componets/form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: () => (/* binding */ Form)\n/* harmony export */ });\nclass Form {\n  constructor() {\n    this.agreeElement = null;\n    this.processElement = null;\n    this.fields = [{\n      name: 'email',\n      id: 'email',\n      element: null,\n      regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+/,\n      valid: false\n    }, {\n      name: 'password',\n      id: 'password',\n      element: null,\n      regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,\n      valid: false\n    }];\n    const that = this;\n    this.fields.forEach(item => {\n      item.element = document.getElementById(item.id);\n      item.element.onchange = function () {\n        that.validateField.call(that, item, this);\n      };\n    });\n    this.processElement = document.getElementById('process');\n    this.processElement.onclick = function () {\n      that.processForm();\n    };\n    this.processElement = document.getElementById('authText');\n    this.processElement.onclick = function () {\n      location.href = 'account.html';\n    };\n    this.agreeElement = document.getElementById('flexCheckDefault');\n    this.agreeElement.onchange = function () {\n      that.validateForm();\n    };\n  }\n  validateField(field, element) {\n    if (!element.value || !element.value.match(field.regex)) {\n      element.style.borderColor = 'red';\n      field.valid = false;\n    } else {\n      element.removeAttribute('style');\n      field.valid = true;\n    }\n    this.validateForm();\n  }\n  validateForm() {\n    const validForm = this.fields.every(item => item.valid);\n    const isValid = this.agreeElement.checked && validForm;\n    if (isValid) {\n      this.processElement.removeAttribute('disabled');\n    } else {\n      this.processElement.setAttribute('disabled', 'disabled');\n    }\n    return isValid;\n  }\n  processForm() {\n    if (this.validateForm()) {\n      let paramString = '';\n      this.fields.forEach(item => {\n        paramString += (!paramString ? '?' : '&') + item.name + '=' + item.element.value;\n      });\n      location.href = 'home.html' + paramString;\n    }\n  }\n}\n\n//# sourceURL=webpack://js-w/./src/componets/form.js?");

/***/ }),

/***/ "./src/componets/home.js":
/*!*******************************!*\
  !*** ./src/componets/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\nclass Home {\n  constructor() {\n    checkUserData();\n    const that = this;\n    this.processElement = document.getElementById('nav_item');\n    this.processElement.onclick = function () {\n      location.href = 'income_expenses.html';\n    };\n  }\n}\n\n//# sourceURL=webpack://js-w/./src/componets/home.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _componets_account_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componets/account.js */ \"./src/componets/account.js\");\n/* harmony import */ var _componets_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componets/form.js */ \"./src/componets/form.js\");\n/* harmony import */ var _componets_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componets/home.js */ \"./src/componets/home.js\");\n\n\n\nclass Router {\n  constructor() {\n    this.routes = [{\n      route: '#/',\n      title: 'Авторизация',\n      template: 'templates/form.html',\n      styles: 'styles/form.css',\n      load: () => {\n        new _componets_form_js__WEBPACK_IMPORTED_MODULE_1__.Form();\n      }\n    }, {\n      route: '#/form',\n      title: 'Регистрация',\n      template: 'templates/account.html',\n      styles: 'styles/account.css',\n      load: () => {\n        new _componets_account_js__WEBPACK_IMPORTED_MODULE_0__.Account();\n      }\n    }, {\n      route: '#/home',\n      title: 'Главная',\n      template: 'templates/home.html',\n      styles: 'styles/index.css',\n      load: () => {\n        new _componets_home_js__WEBPACK_IMPORTED_MODULE_2__.Home();\n      }\n    }, {\n      route: '#/category',\n      title: 'Категории',\n      template: 'templates/category.html',\n      styles: '',\n      load: () => {}\n    }, {\n      route: '#/creation_expenses',\n      title: 'Создание категории расходов',\n      template: 'templates/creation_expenses.html',\n      styles: '',\n      load: () => {}\n    }, {\n      route: '#/edit-operations',\n      title: 'Редактирование дохода/расхода',\n      template: 'templates/edit-operations.html',\n      styles: '',\n      load: () => {}\n    }, {\n      route: '#/expenses',\n      title: 'Расходы',\n      template: 'templates/expenses.html',\n      styles: '',\n      load: () => {}\n    }, {\n      route: '#/income',\n      title: 'Доходы',\n      template: 'templates/income.html',\n      styles: 'styles/income.css',\n      load: () => {}\n    }, {\n      route: '#/income_expenses',\n      title: 'Доходы и расходы',\n      template: 'templates/income_expenses.html',\n      styles: 'styles/income_expenses.css',\n      load: () => {}\n    }, {\n      route: '#/kor_category',\n      title: 'Редактирование категории доходов',\n      template: 'templates/kor_category.html',\n      styles: '',\n      load: () => {}\n    }, {\n      route: '#/kor_expenses',\n      title: 'Редактирование категории расходов',\n      template: 'templates/kor_expenses.html',\n      styles: '',\n      load: () => {}\n    }, {\n      route: '#/operations',\n      title: 'Создание дохода/расхода',\n      template: 'templates/operations.html',\n      styles: '',\n      load: () => {}\n    }];\n  }\n  async openRoute() {\n    const newRoute = this.routes.find(item => {\n      return item.route === window.location.hash.split('?')[0];\n    });\n    if (!newRoute) {\n      window.location.href = '#/';\n      return;\n    }\n    document.getElementById('content').innerHTML = await fetch(newRoute.template).then(response => response.text());\n    document.getElementById('styles').setAttribute('href', newRoute.styles);\n    document.getElementById('title').innerText = newRoute.title;\n    newRoute.load();\n  }\n}\n\n//# sourceURL=webpack://js-w/./src/router.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;