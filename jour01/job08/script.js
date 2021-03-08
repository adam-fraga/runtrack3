/**
 * Test if 2 number are prime and display the sum of both
 * @param a
 * @param b
 */
function sommenombrespremiers(a, b) {

    // Function test if a number is prime or not
    let isPrime = function (nb) {
        if (nb < 2) return false;
        for (let i = 2; i <= Math.sqrt(nb); i++)
            if (nb % i === 0) return false;
        return true;
    }
    // Display sum of two prime number or false
    if (isPrime(a) === true && isPrime(b) === true) {
        console.log(a + b)
    } else console.log(false)
}