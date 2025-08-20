$(".nav-category").on("click", function (e) {
    $(".nav-category").removeClass("active-category");
    $(e.target).addClass("active-category")
})
let infoOfNav = $("#navbar").offset().top
let navHeight = $(".my-nav").outerHeight();
let helfNav = (navHeight / 2)

console.log(infoOfNav);


import { Game } from "./games.module.js";
new Game();

$(document).ready(function () {
    $("#loader span").fadeOut(500, function () {
        $("#loader").fadeOut(500, function () {
            $("#loader").addClass("d-none");
            $("#loader span").show();
        });
    });
})

$(window).scroll(function () {
    const scrollPosition = $(window).scrollTop();
    if (scrollPosition >= infoOfNav - navHeight) {
        $("#navbar .container")
            .removeClass("position-absolute")
            .addClass("fixed-top");
    } else {
        $("#navbar .container")
            .removeClass("fixed-top")
            .addClass("position-absolute");
    }

})
