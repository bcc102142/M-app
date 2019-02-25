

const jobsMain = require("../../views/jobs/jobs-main.html");
const { requestList } = require('../../models/jobs/jobsMain-models');
const BScroll = require('better-scroll').default;
let num = 0;
let mainBool = false;
let better = new BScroll('#main', {
    pullUpLoad: true
});

const itemInit = () => {// 初始化数据
    targetDate = null // 日期对比依据
    movieIds = [] // 所有的电影的id
    page = -1 // 页数
    pageSize = 10// 每页10条
    jobsListSource = [] // 所有的电影
    hasMore = true // 有无更多
    loading = false // 是否正在加载
}
const render = () => {
    itemInit();
    getList();
    init();

    better.on("pullingUp", () => {
        console.log("ccc")
        getList();
        better.finishPullUp();
    })
    
}

//遮罩点击事件
function init() {
    let height=$('#main').height();
    $('.main-item_search-city').on('click', () => {
        if (!mainBool) {
            $('.main-citiesSimple').css('height', height);
            $('.main-item_hot').css('overflow', 'hidden');
            $('.main-item_search-city i').css('backgroundImage', 'url("/static/images/city-icon-up.png")');
        } else {
            $('.main-citiesSimple').css('height', '0');
            $('.main-item_hot').css('overflow', 'auto');
            $('.main-item_search-city i').css(' backgroundImage', ' url("/static/images/city-icon.png")');
        }
        mainBool = !mainBool;
    });
    $('.main-citiesSimple').on('click', () => {
        $('.main-item_hot').css('overflow', 'auto');
        $('.main-item_search-city i').css(' backgroundImage', ' url("/static/images/city-icon.png")');
        $('.main-citiesSimple').css('height', '0');
        mainBool = !mainBool;
    })
};
//获取数据
async function getList() {
    num++;
    console.log(num);
    let resoultList = await requestList(num);
    let res = JSON.parse(resoultList);
    jobsListSource=[...jobsListSource,...res.data.data]
    console.log(jobsListSource)
    let template = Handlebars.compile(jobsMain);
    $('#main .main-better').html(template({ data: jobsListSource }));
    if (better) better.refresh();

}



module.exports = {
    render
}