function* Generator() {
    a= yield; b = a.split(' ')
    for (const z of b) {
        console.log(z);
    }
}
var Generator = Generator();

Generator.next('All I know is something like a bird within her sang');
Generator.next('All I know is something like a bird within her sang');

