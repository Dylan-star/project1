$(function () {
    var wTop=$(window).height();//浏览器可视区域的高度
    var aboutUsTop=$("#aboutUs").offset().top;//"关于我们"距离整个页面顶部的距离
    var flowTop=$("#flow").offset().top;//"流程"距离整个页面顶部的距离
    var caseShowTop=$("#caseShow").offset().top;//"案例展示"距离整个页面顶部的距离
    var newsTop=$("#news").offset().top;//"新闻资讯"距离整个页面顶部的距离
    var onlineTop=$("#online").offset().top;//"在线预约"距离整个页面顶部的距离
    //缩放窗口重新计算可视区高度
    $(window).on("resize",function () {
        wTop=$(window).height();
    });
//    当页面向下滚动
    $(window).scroll(function () {
        //页面滚动时可视区到顶部的距离在变化
        var t_wTop=$(document).scrollTop();
        //关于我们 正文动画
        if(t_wTop+wTop>parseInt(100+aboutUsTop)) {
            $("#aboutUs>.contain>.content>.words").removeClass("hide");
            $("#aboutUs>.contain>.content>.words").addClass("animated bounceInUp");
        }
        //关于我们 图片 动画 （200 让页面进入一会再动画）
        if(t_wTop+wTop>parseInt(200+aboutUsTop)){
            $("#aboutUs>.contain>.pic").removeClass("hide");
            $("#aboutUs>.contain>.pic>img:eq(0)").addClass("animated bounceInRight");
            $("#aboutUs>.contain>.pic>img:eq(1)").addClass("animated bounceInDown");
        }
        //流程 动画
        if(t_wTop+wTop>parseInt(200+flowTop)){
            $("#flow>.pic>li>img").addClass("animated flip")
        }
    //    "案例展示"标题动画
        if(t_wTop+wTop>parseInt(200+caseShowTop)){
            $("#caseShow>.classify").removeClass("hide");
            $("#caseShow>.classify").addClass("animated bounceInLeft");
            $("#caseShow>.title>a").removeClass("hide");
            $("#caseShow>.title>a:eq(0)").addClass("animated bounceInRight");
            $("#caseShow>.title>a:eq(1)").addClass("animated bounceInDown");
        }
    //    新闻资讯 标题动画
        if(t_wTop+wTop>parseInt(200+newsTop)){
            $("#news>.contain>.title>a").removeClass("hide");
            $("#news>.contain>.title>a:eq(0)").addClass("animated bounceInRight");
            $("#news>.contain>.title>a:eq(1)").addClass("animated bounceInDown");
        }
    //    在线预约 标题动画
        if(t_wTop+wTop>parseInt(200+onlineTop)){
            $("#online>.title>a").removeClass("hide");
            $("#online>.title>a:eq(0)").addClass("animated bounceInRight");
            $("#online>.title>a:eq(1)").addClass("animated bounceInDown");
        }
    })
});