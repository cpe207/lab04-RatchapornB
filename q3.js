function primeNumber(a) {
    var x = 0;
    for (var i = 0; i < a; i++) {
        if (a % i === 0) {
            x++;
        }
    }
    if (x > 0)
        return "NO";
    else
        return "YES";
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
