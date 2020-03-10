var opertatorval = "";
var a = "";
var b = "";
//var g = "";
//var h;
var decimalv = "";
var numbernotclicked = false;
var equalpressed = false;
var displayval = '0';
var dp = false;
function check(x) {
    if (opertatorval !== "") {
        b += x;
        document.getElementById("calc-display-val").innerHTML = b;

    }
    else {

        a += x;
        document.getElementById("calc-display-val").innerHTML = a;
    }
}
function operator(y) {
    opertatorval = y;
    document.getElementById("calc-display-val").innerHTML = opertatorval;

}
function decimalval(z) {

    if (opertatorval !== "") {
        if (dp) {
            b += z;
            document.getElementById("calc-display-val").innerHTML = b;
            dp = false;
        }
        return false;
    }
    else if (opertatorval == "" && dp == false) {
        dp = true;
        if (dp) {
            a += z;
            document.getElementById("calc-display-val").innerHTML = a;
        }
        else {
            a = a;
        }

        return false;

    }
}
function equal() {

    switch (opertatorval) {
        case '+':
            a = parseFloat(a) + parseFloat(b);
            break;
        case '-':
            a = parseFloat(a) - parseFloat(b);
            break;
        case '*':
            a = a * b;
            break;
        case '/':
            a = a / b;
            break;
        case '%':
            a = a % b;
            break;
        default:
            break;
    }
    document.getElementById('calc-display-val').innerHTML = a;
    opertatorval = '';
    b = '';
}
function clearfun(x) {
    a = '';
    b = '';
    c = '';
    opertatorval = '';
    dp = false;
    document.getElementById("calc-display-val").innerHTML = '0';
}