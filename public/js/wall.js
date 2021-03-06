var walls = [];
class wall {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = window.innerHeight / 32
        this.bbx = new bbox(this.x,this.y,this.size,this.size);
        objects.push(this);
        walls.push(this);
    }
    draw() {
        noStroke();
        // strokeColor(120,120,120);
        fillColor(150,150,150)
        // noFill();
        strokeSize(1);
        rectangle(this.x,this.y,this.size,this.size);
    }
}
function wallCollision(bbx, x, y) {
    var lastX = bbx.x1;
    var lastY = bbx.y1;
    bbx.update(x,y);
    var ret = false;
    for (var i = 0; i < walls.length; i++) {
        if (walls[i].bbx.collision(bbx)) {
            ret = true;
            break;
        }
    }

    bbx.update(lastX,lastY);
    return ret;
}