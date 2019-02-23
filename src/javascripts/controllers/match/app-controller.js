// 整个应用程序的控制器，其中有一个任务就是将app应用的主体视图渲染到页面

const appMainController = require('./app-main-controller')


const render = () => {
    // 1. 获取视图
    let appHeaderView = require('../../views/match/app-header.html')
    let appFooterView = require('../../views/match/app-footer.html')
    

    // 2. 渲染视图
    $('#app #header').html(appHeaderView)
   
    $('#app #footer').html(appFooterView)
    //头部菜单点击事件
    let bool = false;
    $(".header-right-nav").on("click",function (e) {
        bool=!bool;
        if(bool){
            $('.header-right-nav-img').attr("src","../../../static/images/关闭.png")
            $(".header-right-nav-son").animate({
                height: '4.2rem',
                }, 300)
        }else{
            $('.header-right-nav-img').attr("src","../../../static/images/菜单.png")
            $(".header-right-nav-son").animate({
                height: '0rem',
                }, 300)
        }
    })
    //head菜单返回首页
    $(".returnHome").on("click",function (e) {
        location.href='/';
    })
    // 渲染主体区域
    appMainController.render()
        
}

module.exports = { render }