let btn = document.getElementById('btn');
btn.onclick = function () {
    e.preventDefault();

    let text = document.querySelector('.intro');
    text.classList.add('anim');
    let logo = document.querySelector('.header');
    logo.style.backgroundColor = '#214e6e';

    document.querySelector('.skill-cenn').style.marginLeft = '50px';
};


$(function () {
    $(window).scroll(function() {
        $('#learn .whereskill').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    $(window).scroll(function() {
        $('.skill').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    $(window).scroll(function() {
        $('form .input1').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    $(window).scroll(function() {
        $('form .input2').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInRight");
            }
        });
    });

    $(window).scroll(function() {
        $('form .input3').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    $(window).scroll(function() {
        $('form .input4').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+750) {
                $(this).addClass("fadeInRight");
            }
        });
    });

    $(window).scroll(function() {
        $('form .btnform').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+850) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
});