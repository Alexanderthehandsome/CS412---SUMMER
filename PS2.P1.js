function* Function() {
    index_1 = 0; index_2 = 1;
    while (true) {
        yield index_1; a = index_1
        index_1 = index_2; index_2 = a + index_2
    }
}
function* If_odd() {
    const Generator = Function();
    while (true) {
        let a = Generator.next().value
        if(a % 2 == 0) {
            yield a
        }

    }
}
const Generator = If_odd();
console.log(Generator.next().value);
console.log(Generator.next().value);
console.log(Generator.next().value);
console.log(Generator.next().value);
console.log(Generator.next().value);
console.log(Generator.next().value);


