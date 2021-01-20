
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

$(function () {

    try {
        $("#sel1 , #sel2 , #sel3 , #sel4").select2({
            placeholder: "Lựa chọn"
        });
    } catch (error) {
    
    }


    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("input[type='image']").click(function () {
        $("input[id='imgInp']").click();
    });
    $("#imgInp").change(function () {
        readURL(this);
    });


    // Upload btn on change call function
    $(".uploadlogo").change(function () {
        var filename = readURL(this);
        $(this).parent().children('span').html(filename.length > 28 ? filename.slice(0, 25) + '...' : filename);
    });
    // Read File and return value  
    function readURL(input) {
        var url = input.value;
        let ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        if (input.files && input.files[0] && (
            ext == "png" || ext == "jpeg" || ext == "jpg" || ext == "gif" || ext == "pdf"
        )) {
            var path = $(input).val();
            var filename = path.replace(/^.*\\/, "");
            // $('.fileUpload span').html('Uploaded Proof : ' + filename);
            return "File: " + filename;
        } else {
            $(input).val("");
            return "Only image/pdf formats are allowed!";
        }
    }
    // Upload btn end

});








