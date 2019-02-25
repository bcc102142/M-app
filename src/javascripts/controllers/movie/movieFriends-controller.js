

const movieHeader=require('../../views/movie/movie-header.html');
const movieMain=require('../../views/movie/movie-main.html');
const movieFooter=require('../../views/movie/movie-footer.html');



 const movieFriendsRender=()=>{
    $('#header').html(movieHeader);
    $('#main').html(movieMain);
    $('.movie-main_banner').html(movieBanner);
    $('#footer').html(movieFooter);
}