const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeEv = document.querySelector('.menu__close'),
    closeLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active');
});

closeEv.addEventListener('click', ()=>{
    menu.classList.remove('active');
});

$(function () {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        
        return closeLink.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });
    });
});

$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function(){
        $(this).find("input").val("");
        $(this).find("textarea").val("");
        $('.overlay,#thanks').fadeIn();
        $('form').trigger('reset');
    });
    return false;
});

$('.modal__close').on('click', function () {
    $('.overlay, #call, #thanks').fadeOut();

});

