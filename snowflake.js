class SnowFlake{

    constructor(x = random(width), y = random(height)){
        this.x = x;
        this.y = y;
        this.r = random(10);
        this.xForce = 0;
        this.yForce = 2 + this.r / 10;
        this.offset = 0;
    }

    updatePosition(){
        this.x += Math.sin(map(this.y + random(this.y), 0, height, 0, 1.3 * Math.PI));
        this.y += this.yForce;

        if(this.x > width)
            this.x = 0;
        else if(this.x < 0)
            this.x = width;
        if(this.y > height)
            this.y = 0;
        else if(this.y < 0)
            this.y = height;
    }

    draw(){
        stroke(120, 102, 124);
        strokeWeight(this.r);
        point(this.x, this.y);
    }
}
