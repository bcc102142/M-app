
// const api=require('../api')
const api = require('../../api/jobs')



const requestList = (num) => {
    
    return api.request({
        url: `/job/api/hotPosition.do?cityId=47&pageNo=${num}&pageSize=10`,
    })
}

module.exports = {
    requestList
};