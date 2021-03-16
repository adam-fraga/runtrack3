let largeScreen = window.matchMedia("(min-width:1600px)");
let mediumScreen = window.matchMedia("(min-width:768px)");
let smallScreen = window.matchMedia("(max-width:767px)");

// Responsive si redimension
function responsive(e) {
    let main = $('main');
    let menu = $('#header_menu');
    let bg_menu = $('#burger_menu');
    let section = $('.section');
    if (largeScreen.matches) {
        main.css({
            "display": "flex",
            "flex-direction": "row"
        })
        section.css({
            "width": "23%",
            "height": "200px",
        })
    } else if (mediumScreen.matches) {
        main.css({
            "display": "flex",
            "flex-direction": "row",
            "flex-wrap": "wrap"
        })
        section.css({
            "width": "45%",
            "height": "300px",
        })
        menu.css("display", "flex");
        bg_menu.css("display", "none");
    } else if (smallScreen.matches) {
        main.css({
            "display": "flex",
            "flex-direction": "column",
        })
        section.css({
            "width": "90%",
            "height": "200px",
            "align-self": "center"
        })
        menu.css("display", "none");
        bg_menu.css("display", "block");
    }
}

function displayLink(e){
$('#header_menu').css("display","block")
}

// Responsive au chargement de la page
window.onload = function () {
    responsive();
}
window.addEventListener('resize', responsive);
document.querySelector('#burger_menu').addEventListener('click',displayLink);