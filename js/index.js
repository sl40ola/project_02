$(function() {
    toggleTool()
    let flag = true
    $(window).scroll(function() {
        toggleTool()
        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {

                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current")
                }
            })
        }
    })

    function toggleTool() {
        if ($(document).scrollTop() >= $(".recommend").offset().top) {
            $(".fixedtool").fadeIn()
        } else {
            $(".fixedtool").fadeOut()
        }
    }
    $(".fixedtool li").click(function() {
        flag = false
            //选出对用索引号得内容区的盒子
        $("body, html").stop().animate({
            scrollTop: $(".floor .w").eq($(this).index()).offset().top
        }, function() {
            flag = true
        })
        $(this).addClass("current").siblings().removeClass("current")
    })
})