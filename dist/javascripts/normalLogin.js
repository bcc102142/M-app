/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/normalLogin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/controllers/normalLogin/app-normalLogin-controller.js":
/*!*******************************************************************************!*\
  !*** ./src/javascripts/controllers/normalLogin/app-normalLogin-controller.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\n\r\nconst render = () => {\r\n    //获取密码登陆视图\r\n    let loginHtml = __webpack_require__(/*! ../../views/normalLogin/normalLogin.html */ \"./src/javascripts/views/normalLogin/normalLogin.html\")\r\n    //渲染\r\n    $('#app').html(loginHtml)\r\n    //添加js\r\n     //获取验证码\r\n     let arr1=[]\r\n     let arr2=[]\r\n     let arr3=[]\r\n     let arr4=[]\r\n     let arr = []\r\n     let bool2=false\r\n     let bool3=false\r\n  \r\n   \r\n     $(\".login\").on(\"click\",function () {\r\n         //拿数据\r\n        \r\n         //解析数据\r\n         arr = JSON.parse(localStorage.getItem('arrList'))\r\n         console.log(arr)\r\n         arr.forEach(function(item){\r\n             //用户名密码验证\r\n             console.log($(\".userInput\")[0].value===item.user,$(\".passwordInput\")[0].value===item.password)\r\n            if ($(\".userInput\")[0].value===item.user&&$(\".passwordInput\")[0].value===item.password) {\r\n                $(\".error\").text(\"登陆成功\").css({\r\n                    opacity:\"1\"\r\n                })\r\n              //跳转到首页\r\n             location.href='http://localhost:3000/index.html'\r\n             bool2=true\r\n            }\r\n            \r\n         });\r\n         \r\n         if(!bool2){\r\n            $(\".error\").text(\"用户名或密码错误\").css({\r\n                opacity:\"1\"\r\n            })\r\n            setTimeout(function () {\r\n                $(\".error\").css({\r\n                    opacity:\"0\"\r\n                })\r\n            },2000)\r\n        }\r\n       \r\n         //密码验证\r\n        //  if ($(\".passwordInput\")[0].value) {\r\n        //      bool3=true\r\n        //  }else{\r\n        //      bool3=false\r\n        //      $(\".error\").text(\"请输入正确密码\").css({\r\n        //          opacity:\"1\"\r\n        //      })\r\n        //      setTimeout(function () {\r\n        //          $(\".error\").css({\r\n        //              opacity:\"0\"\r\n        //          })\r\n        //      },2000)\r\n        //  }\r\n         //验证成功后\r\n        //  if (bool2) {\r\n        //      alert(\"登陆成功\")\r\n        //       //跳转到首页\r\n        //      location.href='http://localhost:3000/index.html'\r\n            \r\n        //  }\r\n       \r\n     })\r\n       \r\n \r\n}\r\n\r\nmodule.exports={\r\n    render\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/normalLogin/app-normalLogin-controller.js?");

/***/ }),

/***/ "./src/javascripts/normalLogin.js":
/*!****************************************!*\
  !*** ./src/javascripts/normalLogin.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const render = __webpack_require__(/*! ./controllers/normalLogin/app-normalLogin-controller */ \"./src/javascripts/controllers/normalLogin/app-normalLogin-controller.js\")\r\nconsole.log(render.render)\r\nrender.render()\n\n//# sourceURL=webpack:///./src/javascripts/normalLogin.js?");

/***/ }),

/***/ "./src/javascripts/views/normalLogin/normalLogin.html":
/*!************************************************************!*\
  !*** ./src/javascripts/views/normalLogin/normalLogin.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"error animate\\\" ></div><a href=\\\"/index.html\\\" class=\\\"logo-a\\\">    <img class=\\\"logo\\\" src=\\\"../../../static/images/logo_black.png\\\"></a><div class=\\\"main\\\">    <div class=\\\"user\\\">        <input type=\\\"text\\\" placeholder=\\\"用户名\\\" class=\\\"userInput\\\">    </div>    <div class=\\\"password\\\">        <input type=\\\"password\\\" placeholder=\\\"密码\\\" class=\\\"passwordInput\\\">    </div>    <div class=\\\"login\\\">登陆</div></div><a href=\\\"\\\">手机号登陆</a>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/normalLogin/normalLogin.html?");

/***/ })

/******/ });