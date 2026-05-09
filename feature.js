// feature.js
function exponentiate(num, pow) {
    let result = 1;
    for (let i = 0; i < pow; i++) {
        result *= num;
    }
    return result;
}

console.log(exponentiate(5, 2)); // Returns 25