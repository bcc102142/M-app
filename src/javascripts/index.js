
const appController = require('./controllers/index/app-controller')
console.log(appController)
setTimeout(function(){
    appController.render()
},200)
