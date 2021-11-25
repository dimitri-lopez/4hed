var array = [];
let xMax = 600;

let nSnowflakes = 100;
//let midX = windowWidth / 2;
//let midY = windowHeight / 2;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    background(0);
    
    for(let i = 0; i < nSnowflakes; i++){
        array.push(new SnowFlake());
        console.log(array[i]);
    }
    
    strokeWeight(1);
    textFont();
    textSize(50);
    textAlign(CENTER);
    
//    textSize(32);
}

function mousePressed() {
    for(let i = 0; i < 30; i++){
        array.push(new SnowFlake(mouseX, mouseY));
    }
}

function mouseDragged(){
    array.push(new SnowFlake(mouseX, mouseY));
}

function draw() {
    // background(86, 80, 88, 250);
    // background(224,211,226,200)
    background(219,204,220,255)


    strokeWeight(1);
    text("[   4   H   E   D   ]", windowWidth/2, windowHeight/2)
    fill(0, 0, 0, 255);
    // fill(255, 86, 80, 88);

    
    for(let i = 0; i < array.length; i++){
        array[i].updatePosition();
        array[i].draw();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    
}
