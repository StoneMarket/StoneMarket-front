/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 91:
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 995:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "49b3696368d5fa0b69dc.svg";

/***/ }),

/***/ 847:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bd09e686c674a29fb6f9.jpg";

/***/ }),

/***/ 802:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eaba2f397c4f2168c68f.jpg";

/***/ }),

/***/ 397:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0992569121a2a37b0547.jpg";

/***/ }),

/***/ 812:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ce71b395baf1a436458e.jpg";

/***/ }),

/***/ 830:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "219339bcdcc2707f82ee.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			62: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(91);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/stones.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(830), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(995), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(847), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(812), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(397), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(802), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html> <html class=\"page\" lang=\"ru\"> <head> <meta charset=\"UTF-8\"> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\"> <title>Камни | StoneMarket</title> </head> <body class=\"page__body\"> <header class=\"header\"> <div class=\"header__container container\"> <div class=\"header__logo logo\"> <a class=\"logo__link\" href=\"./index.html\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Stone Market\"> </a> </div> <nav class=\"header__nav nav\"> <ul class=\"nav__list list-reset\"> <li class=\"nav__item\"> <a class=\"nav__link\" href=\"./stones.html\">Камни</a> </li> <li class=\"nav__item\"> <a class=\"nav__link\" href=\"./chests.html\">Сундуки</a> </li> <li class=\"nav__item\"> <a class=\"nav__link\" href=\"./inventory.html\">Инвентарь</a> </li> <li class=\"nav__item\"> <a class=\"nav__link\" href=\"./information.html\">Информация</a> </li> </ul> </nav> <div class=\"header__sign-in sign-in\"> <a class=\"sign-in__link\" href=\"./signin.html\">Войти</a> </div> </div> </header> <main class=\"main\"> <section class=\"stones\"> <div class=\"stones__container container\"> <h2 class=\"stones__heading section-heading\">Камни</h2> <ul class=\"stones__list list-reset\"> <li class=\"stones__item stone color-ancient\"> <div class=\"stone__header\"> <img class=\"stone__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Чёрная дыра\"> </div> <div class=\"stone__main\"> <div class=\"stone__content\"> <h3 class=\"stone__name\">Чёрная дыра</h3> <p class=\"stone__description\">Описание</p> <div class=\"stone__rare\">Ancient</div> </div> <div class=\"stone__footer\"> <button class=\"stone__buy button-reset\">Купить</button> <div class=\"stone__price\">99 999 999C</div> </div> </div> </li> <li class=\"stones__item stone color-arcana\"> <div class=\"stone__header\"> <img class=\"stone__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Рубин\"> </div> <div class=\"stone__main\"> <div class=\"stone__content\"> <h3 class=\"stone__name\">Рубин</h3> <p class=\"stone__description\">Описание</p> <div class=\"stone__rare\">Arcana</div> </div> <div class=\"stone__footer\"> <button class=\"stone__buy button-reset\">Купить</button> <div class=\"stone__price\">10 999 999C</div> </div> </div> </li> <li class=\"stones__item stone color-immortal\"> <div class=\"stone__header\"> <img class=\"stone__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Метеорит\"> </div> <div class=\"stone__main\"> <div class=\"stone__content\"> <h3 class=\"stone__name\">Метеорит</h3> <p class=\"stone__description\">Описание</p> <div class=\"stone__rare\">Immortal</div> </div> <div class=\"stone__footer\"> <button class=\"stone__buy button-reset\">Купить</button> <div class=\"stone__price\">5 999 999C</div> </div> </div> </li> <li class=\"stones__item stone color-legendary\"> <div class=\"stone__header\"> <img class=\"stone__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Еремеевит\"> </div> <div class=\"stone__main\"> <div class=\"stone__content\"> <h3 class=\"stone__name\">Еремеевит</h3> <p class=\"stone__description\">Описание</p> <div class=\"stone__rare\">Legendary</div> </div> <div class=\"stone__footer\"> <button class=\"stone__buy button-reset\">Купить</button> <div class=\"stone__price\">1 000 000C</div> </div> </div> </li> </ul> </div> </section> </main> </body> </html>";
// Exports
/* harmony default export */ var stones = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/stones.js



}();
/******/ })()
;