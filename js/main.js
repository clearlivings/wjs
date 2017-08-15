/**
 * Created by Administrator on 2017/6/4.
 */
$(function(){
    function resize() {
        var innerwidth = $(window).width();
        var screenWidth = innerwidth < 768;
        $("#main_id > .carousel-inner > .item").each(function (i, item) {
            var $item = $(item);
            var imgSrc = $item.data(screenWidth ? 'image-xs' : 'image-lg');
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            if (screenWidth) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            }
            else {
                $item.empty();
            }
        });
        var $ulContainer = $(".nav-tabs");
        var width=30;
        /*console.log($ulcontainer.children());*/
        $ulContainer.children().each(function(i,element) {
            width += element.clientWidth;
            /*console.log(width);*/
        });
        if(width>$(window).width()){
            $ulContainer.css('width',width)
                .parent().css('overflow-x','scroll');
        }
    }
    $(window).on('resize',resize).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip();

    var $new = $(".new");
    $("#news .nav-pills a").on('click',function(){
        /*console.log(0);*/
        /*console.log($new);*/
        var $this = $(this);
        var title = $this.data("title");
        $new.text(title);
    });

    var $startX,$endX;
    var distance;
    var offset = 50;
    var $carousel = $(".carousel");
    $carousel.on("touchstart",function(e){
        /*console.log(e.originalEvent.touches[0].clientX);*/
        $startX = e.originalEvent.touches[0].clientX;
            /*console.log($startX);*/
    });
    $carousel.on("touchmove",function(e){
        $endX = e.originalEvent.touches[0].clientX;
        /*console.log($endX);*/
    });
    $carousel.on("touchend",function(e){
       /* console.log($startX);*/
        var distance = Math.abs($startX-$endX);
        if(distance>offset){
            $(this).carousel($startX>$endX?'next':'prev');
        }
    })
});

