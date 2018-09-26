/* 
* @Author: Marte
* @Date:   2018-09-19 17:29:45
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-24 22:45:12
*/

$(document).ready(function(){

    $('.list_header').load('../index.html #login')
    $('.list_search').load('../index.html #search')
    $('.list_nav').load('../index.html #nav')

    $.ajax({
        type:'get',
        url:'../api/list.php',
        // data:{username:$use,password:$psw},
        dataType:'json',
        success:function(res){

            var $main='';

            $(res).map(function(idx,item){
                // console.log(item);
                // var num=0
            return $main+=`
                <div class="main0 fl" data-id="${item.id}">
                    <div class="main1">
                        <div class="showboxl">
                            <a href="#">
                                <img src="../${item.imgurl}.jpg" alt="" />
                            </a>
                            <ul class="simg">
                                <li>
                                    <img src="../${item.imgurl}.jpg" alt="" />
                                </li>
                            </ul>

                            <h4>${item.title1}</h4>
                            <div class="show1box">
                                <p class="show2">${item.title2}</p>
                            </div>
                            
                            <p class="show1">
                                <span>￥${item.nowprice}</span>
                                <del>${item.delprice}</del>
                            </p>
                            <p>${item.home}</p>
                            <p class="show3">
                                <button class="add">加入购物车</button>
                                <button>关注商品</button>
                            </p>
                        </div>
                        <div class="showboxr">
                            <div class="btn1">v</div>
                            <div><img src="../${item.imgurl}.jpg" class='showr'/></div>
                            <div><img src="../${item.imgurl}.1.jpg" class='showr'/></div>
                            <div><img src="../${item.imgurl}.2.jpg" class='showr'/></div>
                            <div class="btn2">^</div>
                        </div>
                    </div>            
                </div>`
              })
                $('.main').append($main)
        }
    })

//图片切换效果
    $('.main').on('mouseover',function(e){
       
        if(e.target.className=="showr"){
            e.target.parentNode.parentNode.parentNode.children[0].children[0].children[0].src=e.target.src;
        }
    })


// 点击商品跳转详情页面
    $('.main').on('click',function(e){
        var target=$(e.target)
        if(e.target.tagName=="IMG"){
            var id=target.parent().parent().parent().parent().attr('data-id')
            $(location).attr('href',`../html/content.html?id=${id}&table=goods`)
        }
    })



// 声明一个变量用于存放所有添加的商品信息
    var goodslist=Cookie.get('goodslist');

    if(goodslist===''){
        goodslist=[]
    }else{
        goodslist=JSON.parse(goodslist);
        // goodslist必须为json字符串
    }


    $('.main').on('click',function(e){
            var target=e.target;
        if(target.className==='add'){
                var currentli=$(target).parent().parent();
            // console.log();
                var guid=currentli.parent().parent()[0].getAttribute('data-id');
                // console.log(guid);
                var currentgoods=goodslist.filter(function(g){
                   return  g.guid===guid;
                })

                // console.log(currentli.children().eq(4).children().eq(0).text());
                if(currentgoods.length>0){
                    currentgoods[0].qty++;
                }else{
                    var goods={
                        guid:guid,
                        imgurl:currentli.children().children().eq(0)[0].src,
                        title:currentli.children().eq(2).text(),
                        dianpu:currentli.children().eq(5).eq(0).text(),
                        price:currentli.children().eq(4).children().eq(0).text(),
                        qty:1
                    }
                    goodslist.push(goods);
                }

                Cookie.set('goodslist',JSON.stringify(goodslist));
        }

        goodslist.map(function(item,idx){
            $('.car2').html(idx+1)

        })
    })
   // console.log($(".main0"))
//点击添加商品到购物车
    // $(".main0").on('click',function(e){
    //     console.log(e.target);

    // })
    $('.smcar').on('click',function(){
        $(location).attr('href','../html/car.html')

    })

    
 
    


    // $(.carlist).html(goodli);
    $('.car1').on('mouseenter',function(){

        $('.carlist')[0].innerHTML=goodslist.map(function(item){
              console.log(item);

            return `
             <li>
                <div class='fl tupian'><img src="${item.imgurl}" alt=""/></div>
                <div class='fl wenzi'>
                    <span class="biaoti">${item.title}</span>
                    <span class="jiage">价格：${item.price}</span>
                    <span class="num">数量：${item.qty}</span>
                </div> 
            </li>
            `
        }).join('')+'<button>去结算</button>';

    
    })

// 自增购物车数量
    goodslist.map(function(item,idx){
        $('.car2').html(idx+1)
    
    })


});