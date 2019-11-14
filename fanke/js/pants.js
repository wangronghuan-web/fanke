/********获取商品信息*********/
$(function (){
    $.ajax({
        url: '../fanke.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json){
            var results = '';
            var results1 = '';
            var results2 = '';
            var results3 = '';
            var results4 = '';
            $.each(json,function (index,item){
                //console.log(item.id)
                var id=Number(item.id)
                if(id>=439&&id<=472){
                    results+=`
                        <div class="good" id=${item.id}>
                            <img src="http://i5.vanclimg.com/cms/20160926/new3323.png" alt="">
                            <a href="details.html" class="link"><img src="${item.url}" alt=""></a>
                            <span>${item.title}</span>
                            <p><i>￥${item.price}</i><b>${item.charge}</b></P>
                        </div>`
                }
                if(id>=473&&id<=505){
                    results1+=`
                        <div class="good" id=${item.id}>
                            <img src="http://i5.vanclimg.com/cms/20160926/new3323.png" alt="">
                            <a href="details.html" class="link"><img src="${item.url}" alt=""></a>
                            <span>${item.title}</span>
                            <p><i>￥${item.price}</i><b>${item.charge}</b></P>
                        </div>`
                }
                if(id>=506&&id<=533){
                    results2+=`
                        <div class="good" id=${item.id}>
                            <img src="http://i5.vanclimg.com/cms/20160926/new3323.png" alt="">
                            <a href="details.html" class="link"><img src="${item.url}" alt=""></a>
                            <span>${item.title}</span>
                            <p><i>￥${item.price}</i><b>${item.charge}</b></P>
                        </div>`
                }
                // if(id>=490&&id<=506){
                //     results3+=`
                //         <div class="good" id=${item.id}>
                //             <img src="http://i5.vanclimg.com/cms/20160926/new3323.png" alt="">
                //             <a href="details.html"><img src="${item.url}" alt=""></a>
                //             <span>${item.title}</span>
                //             <p><i>${item.price}</i><b>${item.charge}</b></P>
                //         </div>`
                // }
                // if(id>=507&&id<=533){
                //     results4+=`
                //         <div class="good" id=${item.id}>
                //             <img src="http://i5.vanclimg.com/cms/20160926/new3323.png" alt="">
                //             <a href="details.html"><img src="${item.url}" alt=""></a>
                //             <span>${item.title}</span>
                //             <p><i>${item.price}</i><b>${item.charge}</b></P>
                //         </div>`
                // }                
            });
            $('.New_products').html(results);
            $('.Oxford').html(results1);
            $('.Flannel').html(results2);
            $('.Corduroy').html(results3);
            $('.Hemp').html(results4);
            details()
            Hover()
        }
    });
});
$('.type').children('p').click(function(){
    var i=document.createElement('i')
    $(this).css({'background':'#b80001'}).siblings().css({'background':'#ddd'})
    $(this).find('a').css('color','#fff').siblings().find('a').css('color','black')
    $(this).append(i).siblings().find('i').remove()
})
/*********点击商品图片跳转详情**********/
function details(){
    var arr=[];
    [{}]
    $('.link').click(function(){
        var id=$(this).parent('.good').attr('id')
        console.log(id)
        localStorage.setItem('ID',id)
    })
}

/*********划过商品**********/
function Hover(){
    $('.good').hover(function(){
        $(this).css({'background':'pink'})
    },function(){
        $(this).css({'background':'#fff'})
    })
}




/*********轮播图**********/
var mySwiper = new Swiper('#mySwiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})  
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
}
mySwiper.el.onmouseout = function () {
    mySwiper.autoplay.start();
} 
var mySwiper = new Swiper('#mySwiper', {

    loop: true,

    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
}
mySwiper.el.onmouseout = function () {
    mySwiper.autoplay.start();
}     