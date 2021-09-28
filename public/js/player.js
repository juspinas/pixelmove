class player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = window.innerHeight / 33
        this.bbx = new bbox(this.x, this.y, this.size, this.size);

        //physics
        this.gravity = this.size / 8;
        this.yspeed = 0;
        this.maxspeed = this.size / 3;
        this.xspeed = 0; //Current speed

        objects.push(this);
    }

    step() {
        //for mouse controls
        // this.x = mouseX;
        // this.y = mouseY;

        // Gravity
        this.yspeed += this.gravity;

        // Jumping
        var jumpheight = this.size;
        var ground = wallCollision(this.bbx,this.x,this.y+1);
        if(keyPress.W && ground) this.yspeed = - jumpheight;

        // Vertical collision
        if (wallCollision(this.bbx, this.x, this.y+this.yspeed)) {
            while(!wallCollision(this.bbx, this.x, this.y + Math.sign(this.yspeed))) {
                this.y += Math.sign(this.yspeed)
            }
            this.yspeed = 0;
        }

        // Setting max falling speed
        if (this.yspeed > 30) {
            this.yspeed = 30;
        }

        this.y += this.yspeed;
        this.bbx.update(this.x, this.y);

        // Horizontal movement
        var d = keyDown.D - keyDown.A;
        this.xspeed = d * this.maxspeed;

        // Horizontal collision
        if (wallCollision(this.bbx, this.x + this.xspeed, this.y)) {
            while(!wallCollision(this.bbx, this.x + Math.sign(this.xspeed), this.y)) {
                this.x += Math.sign(this.xspeed)
            }
            this.xspeed = 0;
        }

        this.x += this.xspeed;
    }
    draw() {
        // this.y += 5;
        strokeColor(0,150,0);
        noFill();
        // noStroke;
        fillColor(0,100,0)
        rectangle(this.x,this.y,this.size,this.size);
        // this.bbx.draw();

    }
}