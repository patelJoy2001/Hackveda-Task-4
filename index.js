function bulbOn() {
    document.getElementById('bulbImg').src = 'https://i.postimg.cc/6QyTynzr/bulb-on.png';
}
function bulbOff() {
    document.getElementById('bulbImg').src = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png';
}

function scopeEx1() {
    var msg = "Hello, world!";
    document.getElementById('scopeOp1').innerHTML = msg;
}
function scopeEx2() {

    document.getElementById('scopeOp2').innerHTML = "ReferenceError: msg is not defined at Object.";
}

function closureOp() {
    document.getElementById('closureOutput').innerHTML = "Welcome to JavaScript";
}


