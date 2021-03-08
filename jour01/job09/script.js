// Créez une fonction “tri” qui prend en paramètres un tableau de nombres
// nommé “numbers” et une variable “order” qui contient “asc” ou “desc”. A
// l’aide d’un algorithme, cette fonction doit trier le tableau dans l’ordre
// ascendant ou décroissant, selon le paramètre passé, puis retourner le
// tableau

/**
 * Sort a Table of numbers acording to user prefere asc or desc
 * @param {array} numbers
 * @param {string} order
 * @returns {*}
 */
function tri(numbers, order) {
    switch (order) {
        case 'asc':
            numbers.sort(function (a, b) {
                return a - b
            })
            return numbers
        case 'desc':
            numbers.sort(function (a, b) {
                return b - a
            })
            return numbers
    }
}
