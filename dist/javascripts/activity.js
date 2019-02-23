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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/activity.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/activity.js":
/*!*************************************!*\
  !*** ./src/javascripts/activity.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appController = __webpack_require__(/*! ./controllers/activity/app-controller */ \"./src/javascripts/controllers/activity/app-controller.js\")\r\n\r\nsetTimeout(function(){\r\n    appController.render()\r\n},200)\n\n//# sourceURL=webpack:///./src/javascripts/activity.js?");

/***/ }),

/***/ "./src/javascripts/api/index.js":
/*!**************************************!*\
  !*** ./src/javascripts/api/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 封装api是为了统一处理跨域路径 还有 对请求回来的数据的处理\r\nconst api = {\r\n    request ({\r\n        url, data, methods\r\n    }, mock) {\r\n        return $.ajax({\r\n            url: (mock ? '' : '/myzhanku' ) + url,\r\n            data: data || {},\r\n            methods: methods || 'get',\r\n            success: (res) => {\r\n               \r\n                return res\r\n            },\r\n            error: (error) => {\r\n                console.log('请求出错了', error)\r\n            }\r\n        }) \r\n    },\r\n    mock (options) {\r\n        return this.request(options, true)\r\n    }\r\n}\r\n\r\nmodule.exports = api\n\n//# sourceURL=webpack:///./src/javascripts/api/index.js?");

/***/ }),

/***/ "./src/javascripts/controllers/activity/app-controller.js":
/*!****************************************************************!*\
  !*** ./src/javascripts/controllers/activity/app-controller.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 整个应用程序的控制器，其中有一个任务就是将app应用的主体视图渲染到页面\r\n\r\nconst appMainController = __webpack_require__(/*! ./app-main-controller */ \"./src/javascripts/controllers/activity/app-main-controller.js\")\r\n\r\n\r\nconst render = () => {\r\n    // 1. 获取视图\r\n    let appHeaderView = __webpack_require__(/*! ../../views/activity/app-header.html */ \"./src/javascripts/views/activity/app-header.html\")\r\n    let appFooterView = __webpack_require__(/*! ../../views/activity/app-footer.html */ \"./src/javascripts/views/activity/app-footer.html\")\r\n    \r\n\r\n    // 2. 渲染视图\r\n    $('#app #header').html(appHeaderView)\r\n   \r\n    $('#app #footer').html(appFooterView)\r\n    //head菜单点击事件\r\n    let bool = false;\r\n    $(\".header-right-nav\").on(\"click\",function (e) {\r\n        bool=!bool;\r\n        if(bool){\r\n            $('.header-right-nav-img').attr(\"src\",\"../../../static/images/关闭.png\")\r\n            $(\".header-right-nav-son\").animate({\r\n                height: '4.2rem',\r\n                }, 300)\r\n        }else{\r\n            $('.header-right-nav-img').attr(\"src\",\"../../../static/images/菜单.png\")\r\n            $(\".header-right-nav-son\").animate({\r\n                height: '0rem',\r\n                }, 300)\r\n        }\r\n    })\r\n    //head菜单返回首页\r\n    $(\".returnHome\").on(\"click\",function (e) {\r\n        location.href='/';\r\n    })\r\n    // 渲染主体区域\r\n    appMainController.render()\r\n        \r\n}\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/activity/app-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/activity/app-main-controller.js":
/*!*********************************************************************!*\
  !*** ./src/javascripts/controllers/activity/app-main-controller.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst { getTestMock} = __webpack_require__(/*! ../../models/activity/app-main-model */ \"./src/javascripts/models/activity/app-main-model.js\")\r\nconst appMainView = __webpack_require__(/*! ../../views/activity/app-main.html */ \"./src/javascripts/views/activity/app-main.html\") \r\nlet page=0\r\nlet dataList = []\r\nconst render = async () => {\r\n    //初始化\r\n    \r\n    let template = Handlebars.compile(appMainView)\r\n    let mock = await getTestMock(page)\r\n    dataList=[...dataList,...mock]\r\n    $('#app #main').html(template({ mock: mock }))\r\n    console.log(mock)\r\n    //点击渲染效果\r\n    $('.main-more').on('click',async () => {\r\n        page++\r\n        if(page ===3){\r\n            alert(\"到头了\")\r\n            return\r\n        }\r\n        let data2 = await getTestMock(page)\r\n        console.log(data2,dataList)\r\n        dataList=[...dataList,...data2]\r\n        console.log(dataList)\r\n        template = Handlebars.compile(appMainView)\r\n        $('#app #main').html(template({ mock: dataList }))\r\n    })\r\n}\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/activity/app-main-controller.js?");

/***/ }),

/***/ "./src/javascripts/models/activity/app-main-model.js":
/*!***********************************************************!*\
  !*** ./src/javascripts/models/activity/app-main-model.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../../api */ \"./src/javascripts/api/index.js\")\r\n\r\nconst getTestMock = (page) => {\r\n    return api.mock({ url: `http://localhost:400${page}/content` })\r\n}\r\nmodule.exports = {\r\n    getTestMock\r\n}\r\n\n\n//# sourceURL=webpack:///./src/javascripts/models/activity/app-main-model.js?");

/***/ }),

/***/ "./src/javascripts/views/activity/app-footer.html":
/*!********************************************************!*\
  !*** ./src/javascripts/views/activity/app-footer.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"            <a class=\\\"footer-top\\\">                <img src=\\\"https://static.zcool.cn/v3.5.20190116010519.5/zcool/client/image/down-app2.png\\\" width=\\\"100%\\\" style=\\\"display:block\\\">            </a>            <div class=\\\"footer-bottom\\\">                <ul>                    <li><a href=\\\"#\\\" style=\\\"color: #999\\\">触屏版</a></li>                    <li><a href=\\\"#\\\" style=\\\"border-left: 1px solid #999;padding-left: 6px\\\">电脑版</a></li>                </ul>                <ul>                    <li><a href=\\\"#\\\" >回顶部</a></li>                    <li><a href=\\\"#\\\" style=\\\"padding-right: 8px;border-right: 1px solid #999\\\">反馈</a></li>                </ul>                <div class=\\\"copyright\\\">Copyright© 2006 - 2019 ZCOOL</div>                </div>    \"\n\n//# sourceURL=webpack:///./src/javascripts/views/activity/app-footer.html?");

/***/ }),

/***/ "./src/javascripts/views/activity/app-header.html":
/*!********************************************************!*\
  !*** ./src/javascripts/views/activity/app-header.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"        <header id=\\\"app-header\\\">            <div class=\\\"header-left\\\">                <a href=\\\"/\\\">                    <img src=\\\"//static.zcool.cn/git_z/z/common/images/svg/logo.svg\\\" alt=\\\"\\\">                </a>            </div>            <div class=\\\"header-right\\\">                <a href=\\\"#\\\" class=\\\"header-right-button\\\">下载App</a>                <a href=\\\"#\\\" class=\\\"header-right-nav\\\">                    <img src=\\\"../../static/images/菜单.png\\\" class=\\\"header-right-nav-img\\\" alt=\\\"\\\">                    <div class=\\\"header-right-nav-son\\\">                        <div>                            <img src=\\\"https://static.zcool.cn/zcool/mobile/images/svg/search.svg\\\">                            <p>搜索</p>                        </div>                        <div class=\\\"returnHome\\\">                                <img src=\\\"https://static.zcool.cn/zcool/mobile/images/svg/back.svg\\\">                                <p>返回首页</p>                            </div>                        <div>                            <img src=\\\"https://static.zcool.cn/zcool/mobile/images/svg/login.svg\\\">                            <p>登陆<span>/</span>注册</p>                        </div>                    </div>                </a>            </div>        </header>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/activity/app-header.html?");

/***/ }),

/***/ "./src/javascripts/views/activity/app-main.html":
/*!******************************************************!*\
  !*** ./src/javascripts/views/activity/app-main.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"  <!--需要循环的-->  {{#each mock}}  <div class=\\\"main-item\\\">        <img src=\\\"{{img}}\\\" />        <div class=\\\"main-item-right\\\">            <div class=\\\"main-item-right-top\\\">{{title}}</div>            <div class=\\\"main-item-right-bottom\\\">                <div style=\\\"color: #333333\\\">{{auther}}</div>                <div style=\\\"color: #333333;margin-top: 4px \\\">                    <span style=\\\"margin-right:14px\\\">                        <svg width=\\\".45rem\\\" height=\\\".35rem\\\" viewBox=\\\"0 0 16 13\\\"><g fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"><g transform=\\\"translate(1 2)\\\" stroke=\\\"#C1C1C1\\\" stroke-width=\\\"1.5\\\"><path d=\\\"M13.19 5A6.642 6.642 0 0 0 .799 5 6.642 6.642 0 0 0 13.19 5z\\\"></path><circle cx=\\\"7\\\" cy=\\\"5\\\" r=\\\"1.75\\\"></circle></g><path d=\\\"M0 0h16v13H0z\\\"></path></g></svg>                        {{viewCount}}                    </span>                    <span>                        <svg width=\\\".45rem\\\" height=\\\".35rem\\\" viewBox=\\\"0 0 16 13\\\"><g fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"><path d=\\\"M0 0h16v13H0z\\\"></path><g stroke=\\\"#C1C1C1\\\" stroke-width=\\\"1.5\\\"><path d=\\\"M8.001 2.928l.685-1.21a1.39 1.39 0 0 1 1.92-.525c.673.396.903 1.274.515 1.96l-.45.794a.238.238 0 0 0 .208.355h1.715c.777 0 1.406.643 1.406 1.435 0 .095-.01.19-.027.282l-.844 3.827A1.413 1.413 0 0 1 11.751 11H3.937A.947.947 0 0 1 3 10.043V5.26c0-.528.42-.957.937-.957h1.71c.974 0 1.874-.525 2.354-1.374z\\\"></path><path d=\\\"M6 4.81v5.714\\\" stroke-linecap=\\\"round\\\"></path></g></g></svg>                        {{recommendCount}}                    </span>                </div>            </div>        </div>    </div>    {{/each}}\"\n\n//# sourceURL=webpack:///./src/javascripts/views/activity/app-main.html?");

/***/ })

/******/ });