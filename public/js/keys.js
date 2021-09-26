var mouseX = 0;
var mouseY = 0;
document.onmousemove = function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY; 
}

// Keyboard events
var keyPress = {};
var keyDown = {};
var keyRelease = {};
for (var i = 0; i < 255; i++) {
    var l = String.fromCharCode(i);
    keyPress[l] = false;
    keyRelease[l] = false;
    keyDown[l] = false;
}
document.onkeypress = function(event) {
    var key = (event.key).toUpperCase();
    if(!keyDown[key]) {
        keyDown[key] = true;
        keyPress[key] = true;
    }
}
document.onkeyup = function(event) {
    var key = (event.key).toUpperCase();
    keyDown[key] = false;
    keyRelease[key] = true;
}

function keyEnd() {
    for (var i in keyPress) {
        keyPress[i] = false;
        keyRelease[i] = false;
    }
}