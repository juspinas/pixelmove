var canvas = document.getElementById("myCanvas");
var render = canvas.getContext("2d");
var width;
var height;

canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

window.onresize = function() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    drawLoop();
}

var objects = [];

// Main Platform
for (var i = 0; i < 32; i++) {
    new wall(i*32, screen.height-200);
}

// 1st platform
new wall(10*32, screen.height-200-(32*3));
new wall(11*32, screen.height-200-(32*3));
new wall(12*32, screen.height-200-(32*3));

// 2nd platform ~~~~
new wall(3*32, screen.height-200-(32*6));
new wall(4*32, screen.height-200-(32*6));
new wall(5*32, screen.height-200-(32*6));
new wall(6*32, screen.height-200-(32*6));
new wall(7*32, screen.height-200-(32*6));
new wall(8*32, screen.height-200-(32*6));

// 3rd platform ~~~~
new wall(11*32, screen.height-200-(32*9));
new wall(12*32, screen.height-200-(32*9));
new wall(13*32, screen.height-200-(32*9));
new wall(14*32, screen.height-200-(32*9));
new wall(15*32, screen.height-200-(32*9));
new wall(16*32, screen.height-200-(32*9));

// 4th platform
new wall(21*32, screen.height-200-(32*10));
new wall(22*32, screen.height-200-(32*10));
new wall(22*32, screen.height-200-(32*11));
new wall(23*32, screen.height-200-(32*11));

// 5th platform ~~~~
new wall(26*32, screen.height-200-(32*14));
new wall(27*32, screen.height-200-(32*14));
new wall(28*32, screen.height-200-(32*14));
new wall(29*32, screen.height-200-(32*14));
new wall(30*32, screen.height-200-(32*14));
new wall(31*32, screen.height-200-(32*14));

// 6th platform
new wall(7*32, screen.height-200-(32*12));
new wall(8*32, screen.height-200-(32*12));

// 7th platform
new wall(3*32, screen.height-200-(32*14));
new wall(4*32, screen.height-200-(32*14));

// 8th platform ~~~~
new wall(6*32, screen.height-200-(32*18));
new wall(7*32, screen.height-200-(32*18));
new wall(8*32, screen.height-200-(32*18));
new wall(9*32, screen.height-200-(32*18));
new wall(10*32, screen.height-200-(32*18));
new wall(11*32, screen.height-200-(32*18));

// 9th platform
new wall(21*32, screen.height-200-(32*16));
new wall(22*32, screen.height-200-(32*16));
new wall(22*32, screen.height-200-(32*17));

// 10th platform
new wall(20*32, screen.height-200-(32*21));

// 11th platform
new wall(24*32, screen.height-200-(32*22));

//12th platform ~~~FINAL~~~
new wall(29*32, screen.height-200-(32*23));
new wall(30*32, screen.height-200-(32*23));
new wall(31*32, screen.height-200-(32*23));


var Player = new player(50,50);
window.onresize();

function loop() {
    stepLoop();
    drawLoop();
    keyEnd();
}

function stepLoop() {
    for (var i=0; i < objects.length; i++) {
        if (objects[i].step) objects[i].step();
    }
}
function drawLoop() {
    background(25,25,25);
    for (var i=0; i < objects.length; i++) {
        if (objects[i].draw) objects[i].draw();
    }
}
var target_fps = 30;
setInterval(loop, 1000/target_fps);