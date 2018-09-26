/* 
* @Author: Marte
* @Date:   2018-09-20 14:14:57
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-25 14:11:10
*/

$(document).ready(function(){


    $(".content_h").load('../index.html #login');
    $(".content_s").load('../index.html #search');
    // $(".content_n").load('../index.html #nav');

    var id=$(location).attr('search').slice(4,5);
    var table=$(location).attr('search').slice(12);
    // console.log(table);
    // console.log(id);
    $.ajax({
        type:'get',
        url:'../api/content.php',
        data:{'id':id,'table':table},
        dataType:"json",
        success:function(res){
            

// console.log(res[0].imgurl);
            var data=` 
                <div class="bigimg"><img src="../${res[0].imgurl}.jpg" alt="" /></div>
                <ul class="smimgall">
                    <i><</i>
                    <li><img src="../${res[0].imgurl}.jpg" alt="" /></li>
                    <li><img src="../${res[0].imgurl}.1.jpg" alt="" /></li>
                    <li><img src="../${res[0].imgurl}.2.jpg" alt="" /></li>
                   
                    <li><img src="../${res[0].imgurl}.jpg" alt="" /></li>
                    <li><img src="../${res[0].imgurl}.2.jpg" alt="" /></li>
                    <li><img src="../${res[0].imgurl}.3.jpg" alt="" /></li>
                    <i>></i>
                </ul>`


            var price=`
                    <p class="price">￥<span class="show1">${res[0].nowprice}</span></p>
                    <span class="ruci">如此生活价</span>
                    <br />
                    <span>(参考价格<del>￥${res[0].delprice}</del>)</span>
                    <div class="erweima">
                        <img src="../img/erweima.png" alt="" />
                        <p>移动端扫购更便捷</p>
                    </div>
            `

            $('.boxl').append(data);
            $('.boxc_m').append(price);

            $('.title').text(res[0].title1);
            $('.maijia').text(res[0].home);


        }
    })

    var goodslist=Cookie.get('goodslist');

    if(goodslist===''){
        goodslist=[]
    }else{
        goodslist=JSON.parse(goodslist);
        // goodslist必须为json字符串
    }

var guid=$(location).attr('search').slice(4,5);
     
//点击加入购物车，存cookie
$('.container').on('click',function(e){
            var target=e.target;

        if(e.target.className==='btn2'){
  
                var currentli=$(target).parent().parent().parent().children().eq(0);
        
                var guid=$(location).attr('search').slice(4,5);
             // console.log(currentli.parent().children().eq(1).children().eq(1).children().eq(0).children().text());
                var currentgoods=goodslist.filter(function(g){
                   return  g.guid===guid;
                })

                if(currentgoods.length>0){
                    // currentgoods[0].qty=1;
                    console.log($('.numc').val())
                    console.log(currentgoods[0].qty)
                    currentgoods[0].qty=currentgoods[0].qty*1+$('.numc').val()*1;

                  
                }else{
                    var goods={
                        guid:guid,
                        imgurl:currentli.children().eq(0).children().eq(0)[0].src,
                        title:$(e.target).parent().parent().children().eq(0).text(),
                        dianpu:currentli.parent().children().eq(2).children().eq(3).children().eq(0).text(),
                        price:currentli.parent().children().eq(1).children().eq(1).children().eq(0).children().text(),
                        qty:$('.numc').val()*1
                        // currentli.parent()
                    }
                    goodslist.push(goods);
                }

                Cookie.set('goodslist',JSON.stringify(goodslist));
        }

        goodslist.map(function(item,idx){
            $('.car2').html(idx+1)

        })
    })


 $('.car1').on('mouseenter',function(){

        $('.carlist')[0].innerHTML=goodslist.map(function(item){
              // console.log(item);

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
        }).join('')+'<button class="jiesuan">去结算</button>';

    
    })

// 自增购物车数量
    goodslist.map(function(item,idx){
        $('.car2').html(idx+1)
    })

// 点击结算按钮跳转到购物车页面
    $('.liji').on('click',function(){
        // console.log(11111111)
        $(location).attr('href','../html/car.html')
    });

// 点击实现增加数量
    $('.jia').on('click',function(){
        
        $('.numc').val($('.numc').val()*1+1)
    });
// 点击实现减少数量
    $('.jian').on('click',function(){
        if($('.numc').val()*1<=0){
            $('.numc').val(0)
        }else{
            $('.numc').val($('.numc').val()*1-1)
        }
    });

//切换图片
    // $('.boxl').on('click',function(e){
    //     console.log(111);
    // })
});