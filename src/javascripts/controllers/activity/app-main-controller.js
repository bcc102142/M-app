
const { getTestMock} = require('../../models/activity/app-main-model')
const appMainView = require('../../views/activity/app-main.html') 
const render = async () => {
    let template = Handlebars.compile(appMainView)
    let mock = await getTestMock()
    $('#app #main').html(template({ mock: mock }))
    console.log(mock.setRequestHeader,mock)
}

module.exports = { render }