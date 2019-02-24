
//渲染
const render = ()=>{
    //获取视图
    let registerMain=require("../../views/register/main.html")
    //渲染
    $("#app").html(registerMain)
    //js
     //获取验证码
     let arr1=[]
     let arr2=[]
     let arr3=[]
     let arr4=[]
     let arr = []
     let bool1=false
     let bool2=false
     let bool3=false
     let bool4=false
     let bool5=false
     function getRandomNum() {
         for(var i=48;i<58;i++){
 
             arr2.push(String.fromCharCode(i))
         }
         arr2.sort(function () {
             return Math.random()-0.5;
         })
         arr2.length=2;
         return arr2;
     }
     function getRandomString() {
         for(var i=97;i<123;i++){
             arr1.push(String.fromCharCode(i))
         }
         for(var i=65;i<91;i++){
             arr3.push(String.fromCharCode(i))
         }
 
         arr1=arr3.concat(arr1)
         arr1.sort(function () {
             return Math.random()-0.5;
         })
         arr1.length=2;
         return arr1;
     }
     function getRrweima(a,b) {
         arr4=a.concat(b)
         arr4.sort(function () {
             return Math.random()-0.5;
         })
 
 
         return arr4.join("");
     }
     $(".getCode").on("click",function () {
         $(".codeBox").html(getRrweima(getRandomString(),getRandomNum()))
 
     })
     //验证
     $(".checkBox").on("click",function () {
         bool4=!bool4
 
     })
     $(".register").on("click",function () {
         //验证码验证
         if ($(".codeInput")[0].value===$(".codeBox").text()) {
             bool1=true
         }else{
             bool1=false
             $(".error").text("请输入正确验证码").css({
                 opacity:"1"
             })
             setTimeout(function () {
                 $(".error").css({
                     opacity:"0"
                 })
             },2000)
         }
         //用户名验证
         if ($(".userInput")[0].value) {
             bool2=true
         }else{
             bool2=false
             $(".error").text("请输入有效用户名").css({
                 opacity:"1"
             })
             setTimeout(function () {
                 $(".error").css({
                     opacity:"0"
                 })
             },2000)
         }
         //密码验证
         if ($(".passwordInput")[0].value) {
             bool3=true
             console.log("密码验证成功")
         }else{
             bool3=false
             $(".error").text("请输入有效密码").css({
                 opacity:"1"
             })
             setTimeout(function () {
                 $(".error").css({
                     opacity:"0"
                 })
             },2000)
         }
         //手机号验证
         if ($(".telInput")[0].value) {
             bool5=true
         }else{
             bool5=false
 
             $(".error").text("请输入有效手机号").css({
                 opacity:"1"
             })
             setTimeout(function () {
                 $(".error").css({
                     opacity:"0"
                 })
             },2000)
         }
         //协议是否勾选
         if (!bool4){
             $(".error").text("请勾选协议").css({
                 opacity:"1"
             })
             setTimeout(function () {
                 $(".error").css({
                     opacity:"0"
                 })
             },2000)
         }
         if (bool3&&bool2&&bool1&&bool4&&bool5) {
            $(".error").text("注册成功").css({
                opacity:"1"
            })
            setTimeout(function () {
                $(".error").css({
                    opacity:"0"
                })
            },2000)
             let obj = {
                 user:$(".userInput")[0].value,
                 password:$(".passwordInput")[0].value,
                 tel:$(".telInput")[0].value,
             }
             arr.push(obj)
             localStorage.setItem("arrList",JSON.stringify(arr))
            
             //跳转到登陆
            //  location.href = 'http://localhost:3000/normalLogin.html'
         }else{
 
         }
     })
}
module.exports={
    render
}