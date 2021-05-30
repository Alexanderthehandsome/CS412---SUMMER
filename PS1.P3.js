function Func(input_str,input_lambda) {
    return input_lambda(input_str)
}
const Expression_1 = Func("supercalifragilisticexpialidocious",
    function (ret)
    {ret = ret.split('c');
    let j;
    for( j = 1; j<ret.length;j++)
    {ret[j] = 'c'+ ret[j]}
        return ret})

const Expression_2 = Func("supercalifragilisticexpialidocious",
    function (ret)
    {let j;
        for(j = 0; j<ret.length; j++)
        return {originalString: ret,
            modifiedString: ret.replace(/a/gi,'A'),
            numberReplaced: ret.match(/a/gi).length,
            length: ret.length}})

module.exports = Func
console.log(Expression_1)
console.log(Expression_2)