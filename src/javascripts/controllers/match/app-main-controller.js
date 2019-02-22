
const { getFilmsList,getTestMock} = require('../../models/match/app-main-model')
const appMainView = require('../../views/match/app-main.html') 
const render = async () => {
    // 渲染首页的电影列表
    // let filmsList = await getFilmsList()
    let template = Handlebars.compile(appMainView)
    let mock = await getTestMock()
    $('#app #main').html(template({ mock: mock }))
    console.log(mock.setRequestHeader,mock)
}

module.exports = { render }