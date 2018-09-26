
// 导航功能：
$(function(){
    // console.log(888)
    $('.nav_l').on("click",function(){
        $('.nav_l .show1').toggle();
            console.log(4444)
    })

    $('#foot').load('../html/login.html .bottom')





// 生成1F页面 

$.ajax({
    type:"get",
    url:"../api/1F.php",
    dataType:"json",

    success:function(res){
            // console.log(res[0].imgurl);
  // res是数组
  // 
        // var $rew_list=`

        //     <ul id="row_list1">

        //         <li><a href=""><img src="${res[0]}img/chanp2.jpg" alt="" /></a></li>
        //         <li><a href=""><img src="img/chanp2.jpg" alt="" /></a></li>
        //         <li><a href=""><img src="img/chanp2.jpg" alt="" /></a></li>
        //         <li><a href=""><img src="img/chanp2.jpg" alt="" /></a></li>
        //         <li><a href=""><img src="${res[0].}.jpg" alt="" /></a></li>

        //     </ul>
        //     <div id="row_list2">
        //         <img src="img/chanp1.jpg" alt="" />
        //     </div>
        // `
        var $box1=
        `
            <a href="">
                <img src='../${res[0].imgurl}.jpg' alt="" />
            </a>
        `
            $('.1F1').append($box1);


        var $li=
                `
                    <li><a href="#">连体袜</a></li>
                    <li><a href="#">丝袜</a></li>
                    <li><a href="#">正装皮鞋</a></li>
                    <li><a href="#">连衣裙</a></li>
                    <li><a href="#">牛仔裤</a></li>
                    <li><a href="#">衬衫</a></li>
                    <li><a href="#">文胸内衣</a></li>
                    <li><a href="#">休闲鞋</a></li>
                    <li><a href="#">服饰配件</a></li>
                    <li><a href="#">西装</a></li>
                `
            $('.1F2').append($li);

        // 除去第一条数据：
        res=res.slice(1);
        res.map(function(item){
            var $box =
                    `
                    <li data-id=${item.id} class="smb">
                        <a href="#">
                            <img src='../${item.imgurl}.jpg' alt="" />
                        </a>
                    </li>
                    `
            $('.1Fbox').append($box);
        })
    }
})
// console.log($("#row_list"))
// console.log($('#floor001'))
$(".floor001").on('click',function(e){
    // $(location).attr('href',"https://www.baidu.com/")
     // var $target=$(e.target);
     // if($target.tagName=="IMG"){
        // $(location).attr('href',"https://www.baidu.com/")
     // }
       var target=$(e.target)
        if(e.target.tagName=="IMG"){

            var id=$(e.target).parent().parent().attr("data-id")
console.log(id)
            $(location).attr('href',`../html/content.html?id=${id}&table=1F`);

        }
})



// 轮播图。。。。。。。。。。。。。。。
let banner = document.getElementsByClassName('banner')[0];

            let ul=banner.children[0];

            // 初始化
            let index = 0;

            // 无缝滚动关键1：把第一张复制到最后
            ul.appendChild(ul.children[0].cloneNode(true));

            let len = ul.children.length;

            // 设置ul宽度，实现水平排列效果
            ul.style.width = banner.clientWidth * len + 'px';
            console.log(ul.style.width)

            // 添加分页
            let page = document.createElement('div');
            page.className = 'page';
            for(let i=0;i<len-1;i++){
                let span = document.createElement('span');
                span.innerText = i+1;
                if(i===index){
                    span.className = 'active';
                }

                page.appendChild(span);
            }
            banner.appendChild(page);


            // 添加上一张、下一张按钮
            let btnNext = document.createElement('span');
            btnNext.className = 'btn-next';
            btnNext.innerHTML = '&gt;';

            let btnPrev = document.createElement('span');
            btnPrev.className = 'btn-prev';
            btnPrev.innerHTML = '&lt;';

            banner.appendChild(btnPrev);
            banner.appendChild(btnNext);


            let timer = setInterval(autoPlay,3000);


            // 鼠标移入移除
            banner.onmouseover = ()=>{
                clearInterval(timer);
            }

            banner.onmouseout = ()=>{
                timer = setInterval(autoPlay,3000);

            }

            banner.onclick = e=>{
                // 点击分页切换
                if(e.target.parentNode.className === 'page'){
                    // 修改index值为当前分页数字-1
                    index = e.target.innerText-1;

                    show();
                }

                // 上一张，下一张
                else if(e.target.className === 'btn-prev'){
                    index--;
                    show();
                }else if(e.target.className === 'btn-next'){
                    index++;
                    show();
                }
            }


            function autoPlay(){
                index++;

                show();
            }


            function show(){
                if(index>=len){
                    // 无缝滚动关键2：当滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1
                    ul.style.left = 0;
                    index = 1;
                }else if(index<0){
                    index = len-2;
                }

                animate(ul,{left:-index*banner.clientWidth});

                for(let i=0;i<len-1;i++){
                    page.children[i].className = ''
                }

                if(index===len-1){
                    page.children[0].className = 'active';
                }else{
                    page.children[index].className = 'active';
                    
                }
            }

})




// let num=0;
// let len=$('.bannerul').get(1).children.length;
// console.log(len);
// var timer=setInterval(autoplay,2000)

// function autoplay(){
//     num++;
//     show();

// }

// function show(){

//     if(num>=len){
//         // console.log(len)
//         $(".bannerul").css('left',0);

//         num==1;

//     }
//      $(".bannerul").animate({left:-num*$("#banner").width()},2000)
// }






