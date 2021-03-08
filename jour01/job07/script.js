/**
 * Display a sentence according to day is on holyday or not
 * @param {int} annee Année representé par une entier à 4 chiffre
 * @param {int} mois mois representé par un entier de 1 a 12
 * @param {int} jour Jours représenté par un entier compris entre 28 et 31 selon le mois
 */
function jourtravaille(annee, mois, jour) {
    // Table of month in french for display
    let moisFR = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    let feriee
    //Table of Object (hollyday)
    let joursOff = [
        new Date(2020, 0, 1),
        new Date(2020, 3, 12),
        new Date(2020, 3, 13),
        new Date(2020, 4, 1),
        new Date(2020, 4, 8),
        new Date(2020, 4, 21),
        new Date(2020, 4, 31),
        new Date(2020, 5, 1),
        new Date(2020, 6, 14),
        new Date(2020, 7, 15),
        new Date(2020, 10, 1),
        new Date(2020, 10, 11),
        new Date(2020, 11, 25)
    ]
    //Test user entry
    for (let i = 0; i < joursOff.length; i++) {
        let strDate = joursOff[i].toDateString()
        let date = new Date(annee, mois, jour).toDateString()
        date === strDate ? feriee = true : ''
    }
    //Display sentence
    if (feriee === true) console.log("Oui," + ' ' + jour + ' ' + moisFR[mois] + ' ' + annee + ' ' + "est un jour ferié")
    else console.log("Non," + ' ' + jour + ' ' + moisFR[mois] + ' ' + annee + ' ' + "n'est pas un jour ferié")
}
