function solve() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    var delta = b * b - 4 * a * c;
    var x1, x2;

    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById('result').innerHTML = 'Phương trình có 2 nghiệm: x1 = ' + x1 + ', x2 = ' + x2;
    } else if (delta === 0) {
        x1 = x2 = -b / (2 * a);
        document.getElementById('result').innerHTML = 'Phương trình có nghiệm kép: x1 = x2 = ' + x1;
    } else {
        document.getElementById('result').innerHTML = 'Phương trình không có nghiệm thực';
    }
}