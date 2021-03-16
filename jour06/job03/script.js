// Media queries
let largeScreen = window.matchMedia("(min-width:1600px)");
let mediumScreen = window.matchMedia("(min-width:768px)");
let smallScreen = window.matchMedia("(max-width:767px)");


//
function responsive(e) {
    if (largeScreen.matches) {
        console.log('LARGE')
        $('main').css({
            "display": "flex",
            "flex-direction":"row"
        })
        $('.section').css({
            "width": "23%",
            "height": "200px",
        })
    } else if (mediumScreen.matches) {
        console.log('MEDIUM')
        $('main').css({
            "display": "flex",
            "flex-direction":"row",
            "flex-wrap": "wrap"
        })
        $('.section').css({
            "width": "45%",
            "height": "300px",
        })
    } else if (smallScreen.matches) {
        console.log('SMALL')
        $('main').css({
            "display": "flex",
            "flex-direction": "column",
        })
        $('main .section').css({
            "width": "90%",
            "height": "200px",
            "align-self":"center"
        })
    }
}

window.addEventListener('resize', responsive)