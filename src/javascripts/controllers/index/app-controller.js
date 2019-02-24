// 整个应用程序的控制器，其中有一个任务就是将app应用的主体视图渲染到页面

const appMainController = require('./app-main-controller')


const render = () => {
    // 1. 获取视图
    let appHeaderView = require('../../views/index/app-header.html')
    let appFooterView = require('../../views/index/app-footer.html')
    let appNavView = require('../../views/index/app-nav.html')

    // 2. 渲染视图
    $('#app #header').html(appHeaderView)
    $('#app #nav').html(appNavView)
    $('#app #footer').html(appFooterView)
    //头部菜单点击事件
    let bool = false;
    $(".header-right-nav").on("click",function (e) {
        bool=!bool;
        if(bool){
            $('.header-right-nav-img').attr("src","../../../static/images/关闭.png")
            $(".header-right-nav-son").animate({
                height: '3.12rem',
                }, 300)
        }else{
            $('.header-right-nav-img').attr("src","../../../static/images/菜单.png")
            $(".header-right-nav-son").animate({
                height: '0rem',
                }, 300)
        }
    })
    //登陆注册能点击了（0.0）
    $(".returnRegister").on("click",function (e) {
        location.href='/register.html';
    })
    // 渲染主体区域
    appMainController.render()
        
}
module.exports = { render }