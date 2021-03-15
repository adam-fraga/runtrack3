
    // Initialise taille fenêtre
    let large = window.matchMedia("(min-width:1680px)")
    let medium = window.matchMedia("(min-width:1280px)")
    let small = window.matchMedia("(max-width:1280px)")

    // Evenement resize sur fenetre
    window.addEventListener('resize', function (e) {
        if (large.matches) {
            document.querySelector('link').setAttribute("href","style2.css")
        } else if (medium.matches) {
            document.querySelector('link').setAttribute("href","style3.css")

        } else if (small.matches) {
            document.querySelector('link').setAttribute("href","style4.css")
        }
    })
