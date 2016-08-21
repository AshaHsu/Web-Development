var colors = ["#043F81", "#ff7800", "#FF9B19", "#CAA1DD", "#9276A1", "#71CBEC", "#168ED3", "#E5C041", "#8AC555", "#18A43B"];
var i = 0;
var education = true;
var experience = false;
var lastScrollTop = 0;
var job = 0;
var fingerTop = 0;
var fingerLeft = 0;
var scrollstop = false;
var step = 0;

var main = function() {
    eduColor();
    job = $('.job').offset().top;
    // search = $('.search').offset().top;

    fingerTop = $('.screen').css('top');
    fingerLeft = $('.screen').offset().left;

    $('.finger').css('margin-left', function() {
        return parseInt($(window).width(), 10) + 500 + 'px';
    });
    $('.finger').css('top', function() {
        return parseInt(fingerTop, 10) - 250 + 'px';
    });

    $('#jobEx').css('margin-top', function() {
        return parseInt(fingerTop, 10) - 50 + 'px';

    });

    $(window).on('beforeunload', function() {
        location.reload();
        $('.finger').css('margin-left', function() {
            return parseInt($(window).width(), 10) + 500 + 'px';
        });
        // $(window).scrollTop(0);
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
   
        doCheck();

        if (scroll < 1400) {
            education = true;
            experience = false;
            searchPage = false;
            $("#title").stop().animate(eduColor(), 600);
            $('#schooltime').css({
                '-webkit-transform': 'translateY(' + (scroll * 5) + 'px)',
                '-moz-transform': 'translateY(' + (scroll * 5) + 'px)',
                '-ms-transform': 'translateY(' + (scroll * 5) + 'px)',
                'transform': 'translateY(' + (scroll * 5) + 'px)'
            });

            $('#description').css({
                '-webkit-transform': 'translateY(' + (-scroll) + 'px)',
                '-moz-transform': 'translateY(' + (-scroll) + 'px)',
                '-ms-transform': 'translateY(' + (-scroll) + 'px)',
                'transform': 'translateY(' + (-scroll) + 'px)'
            });
        } else {
            if (education) {

                if (scroll >= job) {
                    $('.job').css({
                        top: '0px',
                        position: 'fixed'
                    });

                    experience = true;
                    education = false;
                }

                if (scroll > lastScrollTop) {
                    $("#title").stop().animate(jobColorDown(), 1600);
                } else {
                    $("#title").stop().animate(jobColorUp(), 1600);
                }
                lastScrollTop = scroll;
             } 
            else if (experience) {

                if ($('.finger').offset().left - 150 > fingerLeft) {
                    if (scroll > lastScrollTop) {
                        $('.finger').css({
                            '-webkit-transform': 'translateX(' + (-scroll / 4) + 'px)',
                            '-moz-transform': 'translateX(' + (-scroll / 4) + 'px)',
                            '-ms-transform': 'translateX(' + (-scroll / 4) + 'px)',
                            'transform': 'translateX(' + (-scroll / 4) + 'px)'
                        });
                    } else {
                        $('.finger').css({
                            '-webkit-transform': 'translateX(' + (-scroll / 4) + 'px)',
                            '-moz-transform': 'translateX(' + (-scroll / 4) + 'px)',
                            '-ms-transform': 'translateX(' + (-scroll / 4) + 'px)',
                            'transform': 'translateX(' + (-scroll / 4) + 'px)'
                        });
                    }
                    lastScrollTop = scroll;
                } else {
                    if (scroll < lastScrollTop) {
                        $('.finger').css({
                            '-webkit-transform': 'translateX(' + (-scroll / 4) + 'px)',
                            '-moz-transform': 'translateX(' + (-scroll / 4) + 'px)',
                            '-ms-transform': 'translateX(' + (-scroll / 4) + 'px)',
                            'transform': 'translateX(' + (-scroll / 4) + 'px)'
                        });
                        lastScrollTop = scroll;
                    } else {
                        scrollstop = true;
                        // $('.search').css('marginTop', $('.job').outerHeight(true) );
                        if (scrollstop) {
                            step++;
                            step = step + 10;
                            if (scroll > lastScrollTop) {
                                $('.job').css({
                                    '-webkit-transform': 'translateY(' + (-step) + 'px)',
                                    '-moz-transform': 'translateY(' + (-step) + 'px)',
                                    '-ms-transform': 'translateY(' + (-step) + 'px)',
                                    'transform': 'translateY(' + (-step) + 'px)'
                                });
                            }
                        }
                    }
                }

                if (scroll < job) {
                    $('.job').css({
                        position: 'relative'
                    });

                    experience = false;
                    education = true;
                    searchPage = false;
                };
            } 
        };
    });
};

$(window).resize(function() {

    // location.reload();
    // $(window).scrollTop(0);

});

$.fn.isVisible = function() {
    var rect = this[0].getBoundingClientRect();
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function jobColorDown() {
    $("#title td").each(function() {
        var rgb = $(this).css('background-color')
            .match(/(\d+)/g)
            .map(function(n) {
                return +n;
            });
        $(this).css("background-color", "rgb(" + (rgb[0] + 2) + ", " + (rgb[1]) + "," + (rgb[2] - 2) + ")");
    });
}

function jobColorUp() {
    $("#title td").each(function() {
        var rgb = $(this).css('background-color')
            .match(/(\d+)/g)
            .map(function(n) {
                return +n;
            });
        $(this).css("background-color", "rgb(" + (rgb[0] - 3) + ", " + (rgb[1] - 2) + "," + rgb[2] + ")");
    });
}

function eduColor() {
    i = 0;
    $("td").each(function() {
        $(this).css("background-color", colors[i++]); // increment here
    });
}

function doCheck() {
    var notification = $('#scrollh');
    var elementToDetect = $('#description td');
    var cap = $('#schooltime');

    if (elementToDetect.isVisible()) {
        // notification.html('element is visible');
    } else {
        // notification.html('element is <strong>not</strong> visible');
        elementToDetect.css('display', 'hidden');
        cap.css('display', 'hidden');
    }
}


$(document).ready(main);
