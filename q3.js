function primeNumber(a) {
    if (a <= 1) {
        console.log('NO');
        return;
    }
    for (var i = 2; i < a; i++) {
        if (a % i === 0) {
            console.log('NO');
            return;
        }
    }
    console.log('YES');
    return;
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
//รหัสนักศึกษา : 660610790
//ชื่อ-สกุล : รัชชาพร บัวนุช
