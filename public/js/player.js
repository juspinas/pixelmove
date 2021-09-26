class player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        objects.push(this);
    }
    step() {
        this.x = mouseX;
        this.y = mouseY;
    }
    draw() {
        this.y += 5;
        strokeColor(255,255,255);
        noFill();
        rectangle(this.x,this.y,this.size,this.size);
    }
}