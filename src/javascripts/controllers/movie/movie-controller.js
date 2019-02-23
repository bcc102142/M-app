const Swiper=require('swiper').default;
const movieBanner=require('../../views/movie/movie-banner.html');
const movieHeader=require('../../views/movie/movie-header.html');
const movieMain=require('../../views/movie/movie-main.html');
const movieFooter=require('../../views/movie/movie-footer.html');


 const render=()=>{
   console.log(Swiper);
    $('#header').html(movieHeader);
    $('#main').html(movieMain);
    $('.movie-main_banner').html(movieBanner);
    $('#footer').html(movieFooter);
      var mySwiper = new Swiper ('.swiper-container', {
        autoplay:true,//自动播放
        loop:true,//自动循环
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })   
 }

 module.exports={
     render
 }
