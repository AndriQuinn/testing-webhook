// feature.js
function exponentiate(num,pow) {
    let result = num
    for (let i = 0; i <= pow; i++) {
      result *= num
    }

    return result
}

console.log(exponentiate(5))