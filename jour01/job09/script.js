/**
 * Function sort table of number asc or desc acording to user's choice
 * @param numbers
 * @param order
 * @returns {boolean}
 */
function tri(numbers, order) {
    let tmp
    if (order === 'asc') {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] > numbers[i]) {
                    tmp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = tmp;
                }
            }
        }
        return numbers
    } else if (order === 'desc') {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] < numbers[i]) {
                    tmp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = tmp;
                }
            }
        }
        return numbers
    }
}
