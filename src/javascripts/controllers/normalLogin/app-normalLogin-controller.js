


const render = () => {
    //获取密码登陆视图
    let loginHtml = require('../../views/normalLogin/normalLogin.html')
    //渲染
    $('#app').html(loginHtml)
    //添加js
     //获取验证码
     let arr1=[]
     let arr2=[]
     let arr3=[]
     let arr4=[]
     let arr = []
     let bool2=false
     let bool3=false
  
   
     $(".login").on("click",function () {
         //拿数据
        
         //解析数据
         arr = JSON.parse(localStorage.getItem('arrList'))
         console.log(arr)
         arr.forEach(function(item){
             //用户名密码验证
             console.log($(".userInput")[0].value===item.user,$(".passwordInput")[0].value===item.password)
            if ($(".userInput")[0].value===item.user&&$(".passwordInput")[0].value===item.password) {
                $(".error").text("登陆成功").css({
                    opacity:"1"
                })
              //跳转到首页
             location.href='http://localhost:3000/index.html'
             bool2=true
            }
            
         });
         
         if(!bool2){
            $(".error").text("用户名或密码错误").css({
                opacity:"1"
            })
            setTimeout(function () {
                $(".error").css({
                    opacity:"0"
                })
            },2000)
        }
       
         //密码验证
        //  if ($(".passwordInput")[0].value) {
        //      bool3=true
        //  }else{
        //      bool3=false
        //      $(".error").text("请输入正确密码").css({
        //          opacity:"1"
        //      })
        //      setTimeout(function () {
        //          $(".error").css({
        //              opacity:"0"
        //          })
        //      },2000)
        //  }
         //验证成功后
        //  if (bool2) {
        //      alert("登陆成功")
        //       //跳转到首页
        //      location.href='http://localhost:3000/index.html'
            
        //  }
       
     })
       
 
}

module.exports={
    render
}