/**
 *Return true or false according to Leap year
 * @param {int} annee
 * @returns {boolean}
 */
function bisextile(annee) {
    if (annee % 4 === 0 && annee % 100 !== 0) {
        return true
    } else return false
}
