$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});



$(document).ready(function() {


    //toggle bar
    $(".toggle-mobile").click(function() {
        $('.mobile-menu').addClass('opened');
    });
    $(".close-mobile").click(function() {
        $('.mobile-menu').removeClass('opened');
    });

    //search mobile
    // $(".search-mobile").click(function() {
    //     $('.search-top').toggleClass('active');
    // });



    $(".hasDatepicker").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#check-in").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#check-out").flatpickr({
        dateFormat: "d/m/Y"
    });



    //hover function
    $(".nav-link").mouseover(function() {
        $(this).css('opacity', '.7');
    });
    $(".nav-link").mouseout(function() {
        $(this).css('opacity', '1');
    });

    // $(document).mouseup(function(e) {
    //     if ($(e.target).closest(".nav-menu").length ===
    //         0) {
    //         $('.nav-menu').removeClass('active-nav');
    //         $('body').removeClass('ov-hidden');
    //         $('.bg-ov').removeClass('active-nav');
    //     }
    // });





});