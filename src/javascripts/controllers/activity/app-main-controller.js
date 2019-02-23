
const { getTestMock} = require('../../models/activity/app-main-model')
const appMainView = require('../../views/activity/app-main.html') 
let page=0
let dataList = []
const render = async () => {
    //初始化
    
    let template = Handlebars.compile(appMainView)
    let mock = await getTestMock(page)
    dataList=[...dataList,...mock]
    $('#app #main').html(template({ mock: mock }))
    console.log(mock)
    //点击渲染效果
    $('.main-more').on('click',async () => {
        page++
        if(page ===3){
            alert("到头了")
            return
        }
        let data2 = await getTestMock(page)
        console.log(data2,dataList)
        dataList=[...dataList,...data2]
        console.log(dataList)
        template = Handlebars.compile(appMainView)
        $('#app #main').html(template({ mock: dataList }))
    })
}

module.exports = { render }