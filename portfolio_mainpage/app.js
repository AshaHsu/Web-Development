var main = function() {

   firstAnimate();
showSlides();
//$(".left").animate({width:'90%'},350);



};

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}



function firstAnimate()
{
 $("#computer").animate({
        top: '-=28%',
                opacity: 0.85,

    }, 1500, function() {
        // Animation complete.
        $("#computer")
            .animate({ top: '=28%' }, 2000)
            .animate({ top: '+=28%', opacity: 0.25, }, 1500);
    });

$("#keyboard ").animate({
        right: '-=28%',
                opacity: 0.85,

    }, 1500, function() {
        // Animation complete.
        $("#keyboard")
            .animate({ right: '=28%' }, 2000)
            .animate({ right: '+=28%', opacity: 0.25, }, 1500);
    });


$("#mouse ").animate({
        left: '-=25%',
        opacity: 0.85,

    }, 1500, function() {
        // Animation complete.
        $("#mouse")
            .animate({ left: '=25%' }, 2000)
            .animate({ left: '+=25%', opacity: 0.25, }, 1500)
            .animate({ left: '=25%' }, 5000,function () {
              secondAnimate();
            });
    });
}

function secondAnimate()
{
$("#ipad").animate({
        top: '-=28%',
                opacity: 0.85,

    }, 1500, function() {
        // Animation complete.
        $("#ipad")
            .animate({ top: '=28%' }, 2000)
            .animate({ top: '+=28%', opacity: 0.25, }, 1500);
    });


$("#iphone ").animate({
        right: '-=25%',
                opacity: 0.85,

    }, 1500, function() {
        // Animation complete.
        $("#iphone")
            .animate({ right: '=25%' }, 2000)
            .animate({ right: '+=25%', opacity: 0.25, }, 1500);
    });

$("#android ").animate({
        left: '-=28%',
        opacity: 0.85,

    }, 1500, function() {
        // Animation complete.
        $("#android")
            .animate({ left: '=28%' }, 2000)
            .animate({ left: '+=28%', opacity: 0.25, }, 1500)
            .animate({ left: '=28%' }, 5000,function () {
              thirdAnimate();
            });
    });
}


function thirdAnimate(){
$("#remote").animate({
        top: '-=25%',
                opacity: 0.85,

    }, 1500, function() {
        // Animation complete.
        $("#remote")
            .animate({ top: '=25%' }, 2000)
            .animate({ top: '+=25%', opacity: 0.25, }, 1500);
    });

$("#mario ").animate({
        right: '-=28%',
                opacity: 0.85,

    }, 1500, function() {
        // Animation complete.
        $("#mario")
            .animate({ right: '=28%' }, 2000)
            .animate({ right: '+=28%', opacity: 0.25, }, 1500);
    });

$("#pokemon ").animate({
        left: '-=28%',
        opacity: 0.85,

    }, 1500, function() {
        // Animation complete.
        $("#pokemon")
            .animate({ left: '=28%' }, 2000)
            .animate({ left: '+=28%', opacity: 0.25, }, 1500)
            .animate({ left: '=28%' }, 5000,function () {
              firstAnimate();
            });
    });


}
$(document).ready(main);
