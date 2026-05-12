function exponentiate(num, exp) {
    let result = 1;
    for (let i = 0; i < Math.floor(exp); i++) {
        result *= num;
    }
    return result;
}

function greet(name) {
    return `Hello ${name}`
}

console.log(greet('Andri'))