
const { getFilmsList } = require('../../models/index/app-main-model')
const appMainView = require('../../views/index/app-main.html') 

const render = async () => {

    let data = await getFilmsList()
    console.log(data.data)
    let template = Handlebars.compile(appMainView)
    $('#app #main').html(template({ data: data.data.content }))

}
module.exports = { render }