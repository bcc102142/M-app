
// const api=require('../api')
const api=require('../../api/jobs')


const requestList=()=>{

    return api.request({
        url: "/job/api/hotPosition.do?cityId=47&pageNo=1&pageSize=10",
    })
}

module.exports={
    requestList
};