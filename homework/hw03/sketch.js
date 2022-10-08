function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 115, 85, '#5e6976', '#1b324d', 'red');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880', 'red');
    drawCreature(454, 423, 141, '#aebb83', '#227876', 'red');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
    curve(
        600, 100,       // control point
        400, 100, 
        100, 200,
        100, 100        // control point
    )
}

// define your drawCreature function here:

function drawCreature(centerX, centerY, sizeMain, colorOne, colorTwo, noseColor) {
    fill(colorOne);
    circle(centerX, centerY, sizeMain);
    let smallSize = sizeMain/5
    fill(colorTwo)
    circle(centerX-smallSize, centerY-smallSize, smallSize)
    circle(centerX+smallSize, centerY-smallSize, smallSize)
    fill(colorOne)
    circle(centerX-smallSize, centerY-smallSize, smallSize*0.25)
    circle(centerX+smallSize, centerY-smallSize, smallSize*0.25)
    fill(noseColor);
    ellipse(centerX, centerY, sizeMain*0.4, sizeMain*0.5);
    noFill()
    strokeWeight(sizeMain/20)
    curve(
        centerX-smallSize*10, centerY-sizeMain,
        centerX-smallSize*2, centerY+sizeMain*0.25,
        centerX+smallSize*2, centerY+sizeMain*0.28,
        centerX-smallSize*2, centerY+sizeMain,
    )
    strokeWeight(3)
    
}

