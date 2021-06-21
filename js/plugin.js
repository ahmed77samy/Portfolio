// logo
$(`.logo`).click(function () {
    window.open("index.html" , "_self")
})

// details menu
$(`nav ul li .demo-icon`).mouseenter(function () {
    let data = $(this).data(`show`);
    $(`nav ul li span.${data}`).css(`opacity`, "1")
})
$(`nav ul li .demo-icon`).mouseleave(function () {
    $(`nav ul li span`).css(`opacity`, "0")
})

// animate screen
$(`nav > ul li .demo-icon`).click(function () {
    let data = $(this).data("main");
    $("body , html").animate({
        scrollTop : "0"
    })
    $(`.cover .screen .back`).addClass("animate");
    setTimeout(function () {
        $(`.cover .screen .back`).removeClass("animate")
    },2000)
    setTimeout(() => {
        $(`div.main`).fadeOut(0);
        $(`div.${data}`).fadeIn(0);
        $(`nav > ul li .demo-icon`).removeClass(`active`);
        $(this).addClass(`active`);
    },1000)
})

// animate progress par
$(window).ready(function () {
    $(".feat .skills .bar .progress").each(function () {
        let data =$(this).data("prog");
        $(this).animate({
            width: `${data}%`
        },1000)
    })
})

// open portofilo
$(".porto .details .content .photo .overflow").click(function () {
    let data = $(this).data('href');
    window.open(`${data}`,"_blank")
})
