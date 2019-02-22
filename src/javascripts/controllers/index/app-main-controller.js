
const { getFilmsList } = require('../../models/index/app-main-model')
const appMainView = require('../../views/index/app-main.html') 
// const render = () => {
//     let appMainView = require('../../views/index/app-main.html') 
           
//     getFilmsList((data) => { // 获取了model的数据

//         console.log(data.data)
//         let template = Handlebars.compile(appMainView)
//         $('#app #main').html(template({ films: data.data.content }))//传入了ajax数据的对象
//     })

// }

const render = async () => {
  
    // 渲染首页的电影列表
   
    let data = await getFilmsList()
    console.log(data.data)
    let template = Handlebars.compile(appMainView)
    $('#app #main').html(template({ data: data.data.content }))

}
module.exports = { render }




// const { getFilmsList} = require('../../models/activity/app-main-model')

// const render = async () => {
//     //渲染首页的电影列表
//     let appMainView = require('../../views/index/app-main.html') 
//     let filmsList = await getFilmsList()
//     let template = Handlebars.compile(appMainView)
//     $('#app #main').html(template({ films: filmsList.movieList }))
// }

// module.exports = { render }