

const jobsMain = require("../../views/jobs/jobs-main.html");
const { requestList } = require('../../models/jobs/jobsMain-models');
const BScroll = require('better-scroll').default;
let num = 0;
let mainBool = false;



const render = () => {
    getList();

    // console.log(better);
}

//遮罩点击事件
function init() {
    $('.main-item_search-city').on('click', () => {
        if (!mainBool) {
            $('.main-citiesSimple').css('height', '100%');
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
    let better = new BScroll('#main', {
        pullUpLoad: true
    });
    better.on("pullingUp", () => {
        console.log("ccc")
    })
    let resoultList = await requestList(num);
    let res = JSON.parse(resoultList);
    let template = Handlebars.compile(jobsMain);
    $('#main div').append(template({ data: res.data.data }));
    init();
}


module.exports = {
    render
}