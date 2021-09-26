class player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        this.bbx = new bbox(this.x, this.y, this.size, this.size);

        //physics
        this.gravity = 5;
        this.yspeed = 0;

        objects.push(this);
    }

    step() {
        //for mouse controls
        // this.x = mouseX;
        // this.y = mouseY;
        // if (keyDown.W) this.y += 4;

        this.yspeed += this.gravity;
        if (wallCollision(this.bbx, this.x, this.y+this.yspeed)) {
            while(!wallCollision(this.bbx, this.x, this.y + Math.sign(this.yspeed))) {
                this.y += Math.sign(this.yspeed)
            }
            this.yspeed = 0;
        }
        if (this.yspeed > 30) {
            this.yspeed = 30;
        }
        this.y += this.yspeed;
        this.bbx.update(this.x, this.y);
    }
    draw() {
        // this.y += 5;
        strokeColor(255,255,255);
        noFill();
        rectangle(this.x,this.y,this.size,this.size);
        // this.bbx.draw();

    }
}