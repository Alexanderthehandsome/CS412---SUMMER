const Func = str => {

    return str.split('').sort().join('')

}

module.exports = Func

console.log(`The new reversed string is: ${Func("supercalifragilisticexpialidocious")}`)
