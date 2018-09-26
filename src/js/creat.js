/* 
* @Author: Marte
* @Date:   2018-09-19 09:33:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-23 13:34:46
*/

$(function(){
    // 页面的头部
    $('#top').load("../html/login.html .header")
    // 页面的尾部
    $("#bottom").load("../html/login.html .bottom")

console.log($('#checkbox').is(':checked'));
var $use
var $psw
$('.zhuce').on("click",function(){
    console.log(222)
$use=$('.usertel').val();
$psw=$('.password').val();
    var $psw2=$('.password2').val();
    console.log($psw2,$psw);
    if($psw2!=$psw){
        alert('两次密码不一致。请重新输入');
        return
    }else if(!$('#checkbox').is(':checked')){
        alert('请认真阅读《用户注册协议》打钩再点击注册')
    return
    }else if($('#inputEmail3').val()!==$('.yxm').text()){
        alert("请输入验证码")
        return
    }



    $.ajax({
        type:'post',
        url:'../api/create.php',
        data:{username:$use,password:$psw},
        success:function(res){
            if(res=='yes'){
                // $(location).attr('href','../html/login.html')
            }else if(res=="no"){
                alert('用户已经存在');
            }
        }
    }) 


})
    // 手机号码验证
$('.usertel').on("change",function(){
    $use=$('.usertel').val();
    var Reg=/^1[3-9]\d{9}$/;
    if(!Reg.test($use)){
        alert('手机号码不合法');
    }
})

    // 封装随机验证码
    function suiji(){
        var idx='';
        for(var i=0;i<4;i++){
        idx+=parseInt(Math.random()*4)
        }
        $('.yzm').text(idx);
    }
   
//页面刷新生成随机验证码
    suiji();
//点击刷新生成随机验证码
$('.yzm').on("click",function(){
    suiji();
})


$('.password').on("change",function(){
    console.log(1111111)
    $psw=$('.password').val()

    var Regpsw=/^\S{6,16}$/;
    if(!Regpsw.test($psw)){
        alert('密码不合法');
    }
})

   
});

   // 验证码验证
   
   // 密码验证
