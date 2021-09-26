class player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 32;

        //physics
        this.gravity = 7;
        this.yspeed = 0;

        objects.push(this);
    }

    step() {
        //for mouse controls
        // this.x = mouseX;
        // this.y = mouseY;
        // if (keyDown.W) this.y += 4;

        this.yspeed += this.gravity;
        this.y += this.yspeed;
    }
    draw() {
        // this.y += 5;
        strokeColor(255,255,255);
        noFill();
        rectangle(this.x,this.y,this.size,this.size);
    }
}