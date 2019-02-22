

// const jobsMain = require("../views/jobs-main.html");
// const { requestList } = require('../models/jobsMain-models');
const jobsMain = require("../../views/jobs/jobs-main.html");
const { requestList } = require('../../models/jobs/jobsMain-models');


let mainBool=false;

const render = async () => {
    let resoultList = await requestList();
    let res = JSON.parse(resoultList);
    let template = Handlebars.compile(jobsMain);
    $('#main').append(template({ data: res.data.data }));
}
function init() {
    $('.main-item_search-city').on('click',()=>{
       if(!mainBool){
        $('.main-citiesSimple').css('height','100%');
        $('.main-item_hot').css('overflow','hidden');
        $('.main-item_search-city i').css('backgroundImage','url("/static/images/city-icon-up.png")');   
       }else{
        $('.main-citiesSimple').css('height','0');
        $('.main-item_hot').css('overflow','auto');
        $('.main-item_search-city i').css(' backgroundImage',' url("/static/images/city-icon.png")');
       }
       mainBool=!mainBool;
    });
    $('.main-citiesSimple').on('click',()=>{
        $('.main-item_hot').css('overflow','auto');
        $('.main-item_search-city i').css(' backgroundImage',' url("/static/images/city-icon.png")');
        $('.main-citiesSimple').css('height','0');
        mainBool=!mainBool;
    })
};
module.exports = {
    render,
    init
}