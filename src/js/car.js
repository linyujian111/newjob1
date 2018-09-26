/* 
* @Author: Marte
* @Date:   2018-09-23 14:21:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-25 01:16:51
*/

$(document).ready(function(){








    $('#top').load('../index.html #login');

    var goodslist = Cookie.get('goodslist');

        if(goodslist.length<=0){
                goodslist = [];
            }else{
                goodslist = JSON.parse(goodslist);
            }
    
// 封装有一个生成页面的函数render
        // $('.goods').html(render());

        render();

        function render(){
            var att=[];
            // 根据数据生成HTML结构
            $('.goods').html(goodslist.map(function(goods){
            var total=0;
            total+=goods.price.slice(1)*goods.qty;
            
             // att.push(total)
             // console.log(att) 
            return `
            
                <ul class="goodslist">
                                
                    <li class="tupian">
                        <input type="checkbox"  class="goodsbtn" checked/>
                        <img src="${goods.imgurl}" alt="" />
                    </li>

                    <li class="biaoti">
                        <span>${goods.title}</span>
                    </li>
     
                    <li class="color">
                        <span>黄色</span>
                    </li>
                           
                    <li class="price">
                        <span class="price1">￥${goods.price.slice(1)}</span>
                    </li>
                                   
                    <li class="num">
                        <button class="jian">-</button>
                        <input type="text" value='${goods.qty}' class="num1" />
                        <button class="jia">+</button>
                    </li>
                             
                    <li class="heji">
                        <span class="heji1">￥${total}</span>
                    </li>
                               
                    <li class="delgood">
                        <button class="delbtn">删除</button> 
                    </li>
                </ul>
                `
             })
            );
        };

// 数量减少
        $('.jian').on('click',function(){
            // 数量降到0时，最小为0；
            if($(this).parent().children().eq(1).val()*1<=0){
                 $(this).parent().children().eq(1).val(0);   
            }else{
            // 数量每按一次减少1
        $(this).parent().children().eq(1).val(
        $(this).parent().children().eq(1).val()*1-1
                )
            }      
            // 数量减少，计算总价      
            // 获取当前价格
            var jg= $(this).parent().parent().children().eq(3).children().text().slice(1)*1;
            console.log(jg)

            // 获取当前数量：
            var sl=$(this).parent().children().eq(1).val()

            // 计算总和：
          console.log(sl)
            var all=jg*1*sl*1
            //写入页面
            $(this).parent().parent().children().eq(5).children().text('￥'+all);

            // 减少商品必须重新计算总金额
            alladd();

        })

// 数量增加
        $('.jia').on('click',function(){
            // 数量降到0时，最小为0；
            
            // 数量每按一次+1
        $(this).parent().children().eq(1).val(
        $(this).parent().children().eq(1).val()*1+1
                )
                
            // 数量减少，计算总价      
            // 获取当前价格
            var jg= $(this).parent().parent().children().eq(3).children().text().slice(1)*1;
            console.log(jg)

            // 获取当前数量：
            var sl=$(this).parent().children().eq(1).val()

            // 计算总和：
          console.log(sl)
            var all=jg*1*sl*1
            //写入页面
            $(this).parent().parent().children().eq(5).children().text('￥'+all);
            // 增加商品必须重新计算总金额
            alladd();

        })

// 点击删除按钮
$('.delbtn').on('click',function(){
    // 更新总费用
   
    // 删除该行的产品信息
    $(this).parent().parent().children().remove();

    //点击更新全部商品数量
    $('.allgoods').text(
            $('.goodslist .delgood').length
    );

    // 删除商品必须重新计算总金额
alladd();

})
    //一开始显示全部商品数量

$('.allgoods').text(
    $('.goodslist .delgood').length
);


// 封装更新总费用
        function alladd(){

            // console.log($('.heji1'));
            var numall=0;
            // 获取当前页面每个商品的小计金额
             $('.heji1').each(function(idx,item){
            numall+=$(item).text().slice(1)*1;
            return numall
})
    console.log(numall)

//          var att=[];
//             // $('.allp').html

//             goodslist.map(function(goods){
                
//                 att.push(goods.price.slice(1)*goods.qty*1);

//                 return att
//              })
//             console.log(att)
// var num=0;
//             att.forEach(function(item){
//                 num=num+item
//                 return num
//             })
//             console.log(num)
$('.allp').html(numall);
        };

alladd();

});