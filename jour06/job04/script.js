//Reprenez vos fichiers index.php et style.css. Ajoutez en haut de la page,
//un header qui contient une liste de trois liens : Accueil, Présentation,
//Contact. Lorsque la résolution est inférieure ou égale à 767. Les liens
//disparaissent pour laisser place à un hamburger button. Lorsque l’on clique
//sur celui-ci, les liens apparaissent. Si on re-clique, les liens disparaissent.

let largeScreen = window.matchMedia("(min-width:1600px)");
let mediumScreen = window.matchMedia("(min-width:768px)");
let smallScreen = window.matchMedia("(max-width:767px)");

//
function responsive(e) {
    if (largeScreen.matches) {
        console.log('LARGE')
        $('main').css({
            "display": "flex",
            "flex-direction": "row"
        })
        $('.section').css({
            "width": "23%",
            "height": "200px",
        })
    } else if (mediumScreen.matches) {
        console.log('MEDIUM')
        $('main').css({
            "display": "flex",
            "flex-direction": "row",
            "flex-wrap": "wrap"
        })
        $('.section').css({
            "width": "45%",
            "height": "300px",
        })
        $('ul').css("display", "block");

    } else if (smallScreen.matches) {
        console.log('SMALL')
        $('main').css({
            "display": "flex",
            "flex-direction": "column",
        })
        $('.section').css({
            "width": "90%",
            "height": "200px",
            "align-self": "center"
        })
    }
}

window.addEventListener('resize', responsive)