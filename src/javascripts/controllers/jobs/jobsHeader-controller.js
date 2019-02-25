


// const jobsHeader = require("../views/jobs-header.html");
const jobsHeader = require("../../views/jobs/jobs-header.html");
let clickBool=false;


const render = () => {
    $('#header').append(jobsHeader);
    init();
}
function init() {
    let headerIcon = document.querySelector('.header-icon');
    headerIcon.addEventListener("click", clickHandler, true);
    $('#app').on('click', () => {
        $('#app').removeClass('app-move');
        $('.header-icon i').removeClass('clickIcon');
        clickBool = !clickBool;
    });
  
}

function clickHandler(e) {
    e.stopPropagation();
    if (!clickBool) {
        $('#app-aside').show();
        $('.header-icon i').addClass("clickIcon")
        // $('html').css('overflow','hidden');
        // $('body').css('overflow','hidden');
        $('#app').addClass("app-move")
    } else {
        $('#app').removeClass('app-move');
        $('.header-icon i').removeClass('clickIcon');
       setTimeout(()=>{
        $('#app-aside').hide();
       },500)
      
    }
    clickBool=!clickBool;

}
module.exports = {
    render
}