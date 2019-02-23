
// const movieBanner=require('../../views/movie/movie-banner.html')
// const Swiper=require('swiper').default;
// const {getMovieList}=require('../../models/movie/movie-bannerModel');

// const render= async ()=>{
//     // $('.movie-main_banner').html(movieBanner);


//     let list=await getMovieList();
//     console.log(getMoveList,list);
//     // var mySwiper = new Swiper ('.swiper-container', {
//     //     autoplay:true,
//     //     // 如果需要分页器
//     //     pagination: {
//     //       el: '.swiper-pagination',
//     //     }
//     //   })        
// }



// module.exports={
//     render
// }


const { getMovieList} = require('../../models/movie/movie-bannerModel')
const render = async () => {
    let mock = await getMovieList()
    console.log(mock)
}

module.exports = { render }