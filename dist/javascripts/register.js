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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/controllers/register/app-register-controller.js":
/*!*************************************************************************!*\
  !*** ./src/javascripts/controllers/register/app-register-controller.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n//渲染\r\nconst render = ()=>{\r\n    //获取视图\r\n    let registerMain=__webpack_require__(/*! ../../views/register/main.html */ \"./src/javascripts/views/register/main.html\")\r\n    //渲染\r\n    $(\"#app\").html(registerMain)\r\n    //js\r\n     //获取验证码\r\n     let arr1=[]\r\n     let arr2=[]\r\n     let arr3=[]\r\n     let arr4=[]\r\n     let arr = []\r\n     let bool1=false\r\n     let bool2=false\r\n     let bool3=false\r\n     let bool4=false\r\n     let bool5=false\r\n     function getRandomNum() {\r\n         for(var i=48;i<58;i++){\r\n \r\n             arr2.push(String.fromCharCode(i))\r\n         }\r\n         arr2.sort(function () {\r\n             return Math.random()-0.5;\r\n         })\r\n         arr2.length=2;\r\n         return arr2;\r\n     }\r\n     function getRandomString() {\r\n         for(var i=97;i<123;i++){\r\n             arr1.push(String.fromCharCode(i))\r\n         }\r\n         for(var i=65;i<91;i++){\r\n             arr3.push(String.fromCharCode(i))\r\n         }\r\n \r\n         arr1=arr3.concat(arr1)\r\n         arr1.sort(function () {\r\n             return Math.random()-0.5;\r\n         })\r\n         arr1.length=2;\r\n         return arr1;\r\n     }\r\n     function getRrweima(a,b) {\r\n         arr4=a.concat(b)\r\n         arr4.sort(function () {\r\n             return Math.random()-0.5;\r\n         })\r\n \r\n \r\n         return arr4.join(\"\");\r\n     }\r\n     $(\".getCode\").on(\"click\",function () {\r\n         $(\".codeBox\").html(getRrweima(getRandomString(),getRandomNum()))\r\n \r\n     })\r\n     //验证\r\n     $(\".checkBox\").on(\"click\",function () {\r\n         bool4=!bool4\r\n \r\n     })\r\n     $(\".register\").on(\"click\",function () {\r\n         //验证码验证\r\n         if ($(\".codeInput\")[0].value===$(\".codeBox\").text()) {\r\n             bool1=true\r\n         }else{\r\n             bool1=false\r\n             $(\".error\").text(\"请输入正确验证码\").css({\r\n                 opacity:\"1\"\r\n             })\r\n             setTimeout(function () {\r\n                 $(\".error\").css({\r\n                     opacity:\"0\"\r\n                 })\r\n             },2000)\r\n         }\r\n         //用户名验证\r\n         if ($(\".userInput\")[0].value) {\r\n             bool2=true\r\n         }else{\r\n             bool2=false\r\n             $(\".error\").text(\"请输入有效用户名\").css({\r\n                 opacity:\"1\"\r\n             })\r\n             setTimeout(function () {\r\n                 $(\".error\").css({\r\n                     opacity:\"0\"\r\n                 })\r\n             },2000)\r\n         }\r\n         //密码验证\r\n         if ($(\".passwordInput\")[0].value) {\r\n             bool3=true\r\n             console.log(\"密码验证成功\")\r\n         }else{\r\n             bool3=false\r\n             $(\".error\").text(\"请输入有效密码\").css({\r\n                 opacity:\"1\"\r\n             })\r\n             setTimeout(function () {\r\n                 $(\".error\").css({\r\n                     opacity:\"0\"\r\n                 })\r\n             },2000)\r\n         }\r\n         //手机号验证\r\n         if ($(\".telInput\")[0].value) {\r\n             bool5=true\r\n         }else{\r\n             bool5=false\r\n \r\n             $(\".error\").text(\"请输入有效手机号\").css({\r\n                 opacity:\"1\"\r\n             })\r\n             setTimeout(function () {\r\n                 $(\".error\").css({\r\n                     opacity:\"0\"\r\n                 })\r\n             },2000)\r\n         }\r\n         //协议是否勾选\r\n         if (!bool4){\r\n             $(\".error\").text(\"请勾选协议\").css({\r\n                 opacity:\"1\"\r\n             })\r\n             setTimeout(function () {\r\n                 $(\".error\").css({\r\n                     opacity:\"0\"\r\n                 })\r\n             },2000)\r\n         }\r\n         if (bool3&&bool2&&bool1&&bool4&&bool5) {\r\n            $(\".error\").text(\"注册成功\").css({\r\n                opacity:\"1\"\r\n            })\r\n            setTimeout(function () {\r\n                $(\".error\").css({\r\n                    opacity:\"0\"\r\n                })\r\n            },2000)\r\n             let obj = {\r\n                 user:$(\".userInput\")[0].value,\r\n                 password:$(\".passwordInput\")[0].value,\r\n                 tel:$(\".telInput\")[0].value,\r\n             }\r\n             arr.push(obj)\r\n             localStorage.setItem(\"arrList\",JSON.stringify(arr))\r\n            \r\n             //跳转到登陆\r\n            //  location.href = 'http://localhost:3000/normalLogin.html'\r\n         }else{\r\n \r\n         }\r\n     })\r\n}\r\nmodule.exports={\r\n    render\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/register/app-register-controller.js?");

/***/ }),

/***/ "./src/javascripts/register.js":
/*!*************************************!*\
  !*** ./src/javascripts/register.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const render = __webpack_require__(/*! ./controllers/register/app-register-controller */ \"./src/javascripts/controllers/register/app-register-controller.js\")\r\nconsole.log(render.render)\r\nrender.render()\n\n//# sourceURL=webpack:///./src/javascripts/register.js?");

/***/ }),

/***/ "./src/javascripts/views/register/main.html":
/*!**************************************************!*\
  !*** ./src/javascripts/views/register/main.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"error animate\\\" ></div><a href=\\\"/index.html\\\" class=\\\"logo-a\\\">    <img class=\\\"logo\\\" src=\\\"../../../static/images/logo_black.png\\\"></a><div class=\\\"main\\\">    <div class=\\\"tel\\\">        <input type=\\\"text\\\" placeholder=\\\"手机号\\\" class=\\\"telInput\\\">    </div>    <div class=\\\"user\\\">        <input type=\\\"text\\\" placeholder=\\\"用户名\\\" class=\\\"userInput\\\">    </div>    <div class=\\\"password\\\">        <input type=\\\"password\\\" placeholder=\\\"密码\\\" class=\\\"passwordInput\\\">    </div>    <div class=\\\"code\\\">        <input type=\\\"text\\\" placeholder=\\\"验证码\\\" class=\\\"codeInput\\\">        <div class=\\\"getCode\\\">获取验证码</div>    </div>    <div class=\\\"codeBox\\\"></div>    <div class=\\\"register\\\">注册</div>    <div class=\\\"bottom\\\">        <input type=\\\"checkbox\\\" class=\\\"checkBox\\\">        我已阅读并接受用户协议    </div>    <a href=\\\"/normalLogin.html\\\" style=\\\"float:right\\\">登陆</a></div>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/register/main.html?");

/***/ })

/******/ });