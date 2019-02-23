
const { getFilmsList,getTestMock} = require('../../models/match/app-main-model')
const appMainView = require('../../views/match/app-main.html') 
const render = async () => {
    // 渲染首页的电影列表
    // let filmsList = await getFilmsList()
    let template = Handlebars.compile(appMainView)
    let mock = await getTestMock()
    console.log(dataChange(mock))
    let data=dataChange(mock)
    $('#app #main').html(template({data:data}))
    
}
const dataChange = function(data){
    
    for (let index = 0; index < data.length; index++) {
        let day=data[index].residueDay;
        // data[index].residueDay=data[index].isEnd ? "已结束" : day;

        if(data[index].isEnd){
            data[index].text = "已结束";
        }else{
            data[index].text = `剩余<span>${day}</span>天`;
        }
    }
    return data
   

}

module.exports = { render }