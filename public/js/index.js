var canvas = document.getElementById("myCanvas");
var render = canvas.getContext("2d");
var width;
var height;

var numSquareVertical = 31;
var numSquareHorizontal = 34;
var wallSpacing = window.innerHeight / 32 //Should be same as wall size

window.onresize = function() {
    width = 35*wallSpacing;
    height = window.innerHeight;
    // height = 30*wallSpacing;
    canvas.width = width;
    canvas.height = height;
    drawLoop();
    // console.log(window.innerHeight);
}

var objects = [];

// Top&Bottom Boundary walls~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
for (var i = 0; i < numSquareHorizontal+1; i++) { //35 squares long
    new wall(i * wallSpacing, 0);
    new wall(i * wallSpacing, numSquareVertical*wallSpacing);
}

// Left&Right Boundary walls~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
for (var i = 0; i < (numSquareVertical); i++) {
    new wall(0, i * wallSpacing);
    new wall(numSquareHorizontal*wallSpacing, i * wallSpacing);
}

// 1st platform
new wall(10*wallSpacing, wallSpacing*(numSquareVertical-3));
new wall(11*wallSpacing, wallSpacing*(numSquareVertical-3));
new wall(12*wallSpacing, wallSpacing*(numSquareVertical-3));

// 2nd platform ~~~~
new wall(3*wallSpacing, wallSpacing*(numSquareVertical-6));
new wall(4*wallSpacing, wallSpacing*(numSquareVertical-6));
new wall(5*wallSpacing, wallSpacing*(numSquareVertical-6));
new wall(6*wallSpacing, wallSpacing*(numSquareVertical-6));
new wall(7*wallSpacing, wallSpacing*(numSquareVertical-6));
new wall(8*wallSpacing, wallSpacing*(numSquareVertical-6));

// 3rd platform ~~~~
new wall(11*wallSpacing, wallSpacing*(numSquareVertical-9));
new wall(12*wallSpacing, wallSpacing*(numSquareVertical-9));
new wall(13*wallSpacing, wallSpacing*(numSquareVertical-9));
new wall(14*wallSpacing, wallSpacing*(numSquareVertical-9));
new wall(15*wallSpacing, wallSpacing*(numSquareVertical-9));
new wall(16*wallSpacing, wallSpacing*(numSquareVertical-9));

// 4th platform
new wall(20*wallSpacing, wallSpacing*(numSquareVertical-11));
new wall(21*wallSpacing, wallSpacing*(numSquareVertical-11));
new wall(22*wallSpacing, wallSpacing*(numSquareVertical-11));
new wall(22*wallSpacing, wallSpacing*(numSquareVertical-12));
new wall(23*wallSpacing, wallSpacing*(numSquareVertical-12));
new wall(24*wallSpacing, wallSpacing*(numSquareVertical-12));

// 5th platform ~~~~
new wall(26*wallSpacing, wallSpacing*(numSquareVertical-15));
new wall(27*wallSpacing, wallSpacing*(numSquareVertical-15));
new wall(28*wallSpacing, wallSpacing*(numSquareVertical-15));
new wall(29*wallSpacing, wallSpacing*(numSquareVertical-15));
new wall(30*wallSpacing, wallSpacing*(numSquareVertical-15));
new wall(31*wallSpacing, wallSpacing*(numSquareVertical-15));

// 6th platform

new wall(7*wallSpacing, wallSpacing*(numSquareVertical-13));
new wall(8*wallSpacing, wallSpacing*(numSquareVertical-13));
new wall(9*wallSpacing, wallSpacing*(numSquareVertical-13));

// 7th platform
new wall(3*wallSpacing, wallSpacing*(numSquareVertical-15));
new wall(4*wallSpacing, wallSpacing*(numSquareVertical-15));
new wall(5*wallSpacing, wallSpacing*(numSquareVertical-15));

// 8th platform ~~~~
new wall(6*wallSpacing, wallSpacing*(numSquareVertical-19));
new wall(7*wallSpacing, wallSpacing*(numSquareVertical-19));
new wall(8*wallSpacing, wallSpacing*(numSquareVertical-19));
new wall(9*wallSpacing, wallSpacing*(numSquareVertical-19));
new wall(10*wallSpacing, wallSpacing*(numSquareVertical-19));
new wall(11*wallSpacing, wallSpacing*(numSquareVertical-19));
new wall(12*wallSpacing, wallSpacing*(numSquareVertical-19));
new wall(12*wallSpacing, wallSpacing*(numSquareVertical-20));
new wall(12*wallSpacing, wallSpacing*(numSquareVertical-21));
new wall(12*wallSpacing, wallSpacing*(numSquareVertical-22));
new wall(12*wallSpacing, wallSpacing*(numSquareVertical-23));

// 9th platform
new wall(4*wallSpacing, wallSpacing*(numSquareVertical-23));

// 10th platform
new wall(10*wallSpacing, wallSpacing*(numSquareVertical-24));
new wall(11*wallSpacing, wallSpacing*(numSquareVertical-24));
new wall(12*wallSpacing, wallSpacing*(numSquareVertical-24));

// 11th platform
new wall(18*wallSpacing, wallSpacing*(numSquareVertical-19));
new wall(19*wallSpacing, wallSpacing*(numSquareVertical-19));

// 12th platform
new wall(23*wallSpacing, wallSpacing*(numSquareVertical-21));
new wall(24*wallSpacing, wallSpacing*(numSquareVertical-21));

// 13th platform
new wall(20*wallSpacing, wallSpacing*(numSquareVertical-24));

// 14th platform
new wall(25*wallSpacing, wallSpacing*(numSquareVertical-26));

// 15th platform (FINAL)
new wall(30*wallSpacing, wallSpacing*(numSquareVertical-26));
new wall(31*wallSpacing, wallSpacing*(numSquareVertical-26));
new wall(32*wallSpacing, wallSpacing*(numSquareVertical-26));
new wall(33*wallSpacing, wallSpacing*(numSquareVertical-26));

// Create Player
var Player = new player(3*wallSpacing ,wallSpacing*(numSquareVertical-3));

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