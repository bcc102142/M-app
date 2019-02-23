
const { getFilmsList } = require('../../models/index/app-main-model')
const appMainView = require('../../views/index/app-main.html') 
let page=1
let dataList = []


const render = async () => {
   
    let data1 = await getFilmsList(page)
    dataList=[...dataList,...data1.data.content]
    console.log(dataList)
    let template = Handlebars.compile(appMainView)
    $('#app #main').html(template({ data: dataList }))

    $('.main-more').on('click',async () => {
        page++
        let data2 = await getFilmsList(page)
        dataList=[...dataList,...data2.data.content]
        console.log(dataList)
        template = Handlebars.compile(appMainView)
        $('#app #main').html(template({ data: dataList }))
    })
    
    // let dataList = await getFilmsList()
    // console.log(data)
    // let template = Handlebars.compile(appMainView)
}

//获取数据
module.exports = { render }