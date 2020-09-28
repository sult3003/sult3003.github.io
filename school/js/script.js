new WOW().init();

$(function () {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.chevron').fadeIn();
    } else {
        $('.chevron').fadeOut();
    }
});

$('[data-modal=call]').on('click', function () {
    $('.overlay, #call').fadeIn();

});

$('.modal__close').on('click', function () {
    $('.overlay, #call, #thanks').fadeOut();

});

$('#call-form').validate({
    errorClass: "inval",
    rules: {
        name: "required",
        phone: "required",
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        name: "Пожалуйста введите свое имя",
        phone: "Пожалуйста введите свой номер",
        email: {
            required: "Пожалуйста введите свою почту",
            email: "Не правильный формат почты"
        }
    }
});
$('#call form').validate({
    errorClass: "invalid",
    rules: {
        name: "required",
        phone: "required",
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        name: "Пожалуйста введите свое имя",
        phone: "Пожалуйста введите свой номер",
        email: {
            required: "Пожалуйста введите свою почту",
            email: "Не правильный формат почты"
        }
    }
});

$('input[name=phone]').mask('+7 (999) 999-99-99');

$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function(){
        $(this).find("input").val("");
        $('#call').fadeOut();
        $('.overlay,#thanks').fadeIn();
        $('form').trigger('reset');
    });
    return false;
});

$(document).ready(function(){
    $('.corousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
      });
  });

  $(function () {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("#team").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

    
});
