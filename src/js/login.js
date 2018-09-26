


$(function(){


$(".btn_login").on('click',function(){
    var $user=$(".user").val();
    var $psw=$(".psw").val();

    $.ajax({
        type:"post",
        url:"../api/login.php",
        data:{
            username:$user,
            password:$psw
        },
        // dataType:"json",
        success:function(res){
            if(res=="yes"){
                $(location).attr('href','../index.html')
            }else if(res=="no"){
                alert("用户名已经存在")

            }
        }
    })
})

})
