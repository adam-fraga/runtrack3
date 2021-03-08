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
