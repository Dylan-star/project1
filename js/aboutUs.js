$(function () {
    var wTop=$(window).height();//浏览器可视区域的高度
    var ftTop=$(".flow-title").offset().top;
    var flowTop=$("#flow").offset().top;//"流程"距离整个页面顶部的距离
    var aboutTop=$("#about").offset().top;
    //缩放窗口重新计算可视区高度
    $(window).on("resize",function () {
        wTop=$(window).height();
    });
//    当页面向下滚动
    $(window).scroll(function () {
        //页面滚动时可视区到顶部的距离在变化
        var t_wTop=$(document).scrollTop();
        if(t_wTop+wTop>aboutTop) {
          $(".text").removeClass("hide");
          $(".text").addClass("animated bounceInUp");
        }
        
        //“流程”标题动画
        if(t_wTop+wTop>ftTop) {
            $(".flow-title>.tit>p").removeClass("hide");
            $(".flow-title>.tit>p").addClass("animated bounceInDown");

        }
        if(t_wTop+wTop>parseInt(200+flowTop)){
            $("#flow>.pic>li>img").addClass("animated flip")
        }

    })
});