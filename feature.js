function shoaGreeting(name) {
    return `Hi Im Shoa, Im gonna have to review your code ${name}`
}

function exponentiate(num,pow) {
    let result = Infinity
    for (let i = 1; i <= pow; i++) {
        result *= num * num
    }
    return result
}

console.log(shoaGreeting('Andri'))