/// <reference path='../typings/globals/jquery/index.d.ts' />

$(document).ready(function () {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    animateNav();
    userAnimation();
    experienceAnimation();
    progressBarAnimation();
    interestingsAnimation();
    contactsAnimation();

    // Animated Navbar

    $(".first-button").on("click", function () {
        $(".animated-icon1").toggleClass("open");
    });
    $(".second-button").on("click", function () {
        $(".animated-icon2").toggleClass("open");
    });
    $(".third-button").on("click", function () {
        $(".animated-icon3").toggleClass("open");
    });

    // Animated Progress Bar
    $(window).on("scroll", progressBarAnimation);
    $(window).bind("resize", progressBarAnimation);

    // Header Animations
    $(window).on("scroll", animateNav);
    $(window).bind("resize", animateNav);

    // About Animations
    $(window).on("scroll", userAnimation);
    $(window).bind("resize", userAnimation);

    // Experience Animations
    $(window).on("scroll", experienceAnimation);
    $(window).bind("resize", experienceAnimation);

    // Interestings Animations
    $(window).on("scroll", interestingsAnimation);
    $(window).bind("resize", interestingsAnimation);

    // Contacts Animations
    $(window).on("scroll", contactsAnimation);
    $(window).bind("resize", contactsAnimation);

    // Functions
    function animateNav() {
        let currentScroll = $(this).scrollTop();

        if ($(window).width() > 750 && currentScroll >= 100) {
            $(".site-header nav").addClass("navbar-animated");
        } else {
            $(".site-header nav").removeClass("navbar-animated");
        }
    }

    function userAnimation() {
        let currentScroll = $(this).scrollTop();
        let windowHeight = $(window).height();

        if (currentScroll >= $("#about .user-info").offset().top - windowHeight + $("#about .user-info").height() / 2) {
            $(".user-info").addClass("user-animation-right");
        }

        if (currentScroll >= $("#about .user-more").offset().top - windowHeight + $("#about .user-more").height() / 2) {
            $(".user-more").addClass("user-animation-bottom");
        }
    }

    function experienceAnimation() {
        let currentScroll = $(this).scrollTop();
        let windowHeight = $(window).height();
        let cards = $(".card").toArray();

        for (let i = 0; i < cards.length; i++) {
            if (currentScroll >= $(cards[i]).offset().top + $(cards[i]).height() / 3 - windowHeight) {
                if ($(window).width() > 768) {
                    setTimeout(function () {
                        $(cards[i]).addClass("item-pop");
                    }, (i * 1000) / 5);
                } else {
                    $(cards[i]).addClass("item-pop");
                }
            }
        }
    }

    function progressBarAnimation() {
        let currentScroll = $(this).scrollTop();
        let windowHeight = $(window).height();
        let skills = $(".skill");

        for (let i = 0; i < skills.length; i++) {
            let currentBar = $(".progress-bar")[i];
            let procent = $(currentBar).attr("aria-valuenow");
        
            // If screen is on mobile phone animation not working!
            if ($(window).width() < 768) {
                $(currentBar).css("width", `${procent}%`)
            }
            else (currentScroll >= $(skills[i]).offset().top - windowHeight && currentScroll <= $(skills[i]).offset().top + ($(skills[i]).height() + 200)) {
                $(currentBar).animate(
                    {
                        width: `${procent}%`,
                    },
                    2500
                );
            }
        }
    }

    function interestingsAnimation() {
        let currentScroll = $(this).scrollTop();
        let windowHeight = $(window).height();
        let interest = $("#interest");
        let items = $("#interest .item");

        for (let i = 0; i < items.length - 1; i += 2) {
            // Left
            if (currentScroll >= $(items[i]).offset().top + $(items[i]).height() / 3 - windowHeight) {
                $(items[i]).addClass("item-left");
            }

            // Right
            if (currentScroll >= $(items[i + 1]).offset().top + $(items[i + 1]).height() / 3 - windowHeight) {
                $(items[i + 1]).addClass("item-right");
            }
        }
    }

    function contactsAnimation() {
        let currentScroll = $(this).scrollTop();
        let windowHeight = $(window).height();

        if (currentScroll >= $("#contactMe").offset().top - windowHeight + $("#contactMe").height() / 2) {
            $("#contactMe").addClass("contacts-item-animation");
        }

        if (currentScroll >= $("#findMe").offset().top - windowHeight + $("#findMe").height() / 2) {
            $("#findMe").addClass("contacts-item-animation");
        }
    }
});
