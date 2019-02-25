
const {getTestMock} = require('../../models/match/app-main-model')
const appMainView = require('../../views/match/app-main.html') 
const render = async () => {
    let template = Handlebars.compile(appMainView)
    let mock = await getTestMock()
<<<<<<< HEAD
    console.log(dataChange(mock))
    let data=dataChange(mock)
    $('#app #main').html(template({data:data}))
    
=======
    $('#app #main').html(template({ mock: mock }))
>>>>>>> 704e507846f953d086b3d28fd45d9955e60c9b1f
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