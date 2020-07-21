var array = [];
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    background(0);
    
    for(let i = 0; i < 300; i++){
        array.push(new SnowFlake());
        console.log(array[i]);
    }
}



function draw() {
    background(0);
    
    for(let i = 0; i < array.length; i++){
        array[i].updatePosition();
        array[i].draw();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    
}
