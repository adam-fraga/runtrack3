<!--- #ffca4b lorsque la résolution est comprise entre 1680 et 1920-->
<!--- #275fa0 lorsque la résolution est comprise entre 1280 et 1680-->
<!--- #ffffff lorsque la résolution est inférieure à 1280-->

// Initialise taille fenêtre
let large = window.matchMedia("(min-width:1680px)")
let medium = window.matchMedia("(min-width:1280px)")
let small = window.matchMedia("(max-width:1280px)")

// Evenement resize sur fenetre
window.addEventListener('resize', function (e) {
    if (large.matches) {
        $('body').css('background','#ffca4b')
    } else if (medium.matches) {
        $('body').css('background','#275fa0')
    } else if (small.matches) {
        $('body').css('background','#ffffff')
    }
})
