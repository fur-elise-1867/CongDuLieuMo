
$("[data-trigger]").unbind();
$("[data-trigger]").click(function () {
    var trigger_id = $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});


$(".custom--mega-menu").unbind();
$(".custom--mega-menu").click(function () {
    let width = Number($(window).width());
    if (width > 992)
        return;
    else
        $("[data-trigger]").trigger('click');
});

// close button 
$(".btn-close").unbind();
$(".btn-close").click(function (e) {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 




$(".coltrol--menu").unbind();
$(".coltrol--menu").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("activeMenu");
    $(this).parent('.cols--menu').toggleClass("activeMenu");
    $('.cols--body').toggleClass("activeMenu");
    $('.btn--not-bg > span').toggleClass("hide");
    $('.btn--not-bg > i.far').toggleClass("hide");
});


$(".btn--not-bg").unbind();
$(".btn--not-bg").click(function (e) {
    // e.stopPropagation();
});
