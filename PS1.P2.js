function Operator(input) {
    switch (input[1]) {
        case '^':
            return (left,right) => Math.pow(left,right)
        case'-' :
            return (left,right) => left - right
        case'+' :
            return (left,right) => left + right
        case'/' :
            return (left,right) => left / right
        case'*' :
            return (left,right) => left * right
    }
}

function  Func(input) {
    return Operator(input)(parseInt(input[0]),parseInt(input[2]))
}

module.exports = Func

console.log(` 4+2 is: ${Func("4+2")}`)
console.log(` 5*7 is: ${Func("5*7")}`)
console.log(` 6-1 is: ${Func("6-1")}`)
console.log(` 9/2 is: ${Func("9/2")}`)
console.log(` 2^8 is: ${Func("2^8")}`)