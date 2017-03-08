/**
 * Created by kotn0 on 07.03.2017.
 */
$(document).ready(function () {
    //$("#nextImg").hide();

    $("#mobileMenu").click(function () {
        if ($(".desktopMenu").is(":hidden")) {
            $(".desktopMenu").slideDown("slow");
        } else {
            $(".desktopMenu").slideUp("fast");
        }
    });

    $(window).resize(function () {
        if ($(window).width() < 768) {
            $(".desktopMenu").hide();
            $("#mobileMenu").show();
        }
        else {
            $(".desktopMenu").show();
            $("#mobileMenu").hide();
        }
    });
});

$(window).on("load", function () {
    setTimeout(function () {
        $("#currentImg").fadeOut(2000);
        $("#nextImg").fadeIn(2000);
    }, 1000);
});

