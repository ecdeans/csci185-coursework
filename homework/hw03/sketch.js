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
    drawCreature(333, 227, 99, '#94ba77', '#3f5364', 'blue');
    drawCreature(117, 314, 91, '#648d8e', '#afc272', 'yellow');

    drawCreature(400, 400, 400, '#648d8e', false)
    
    drawGrid(canvasWidth, canvasHeight);

}

// define your drawCreature function here:

function drawCreature(centerX, centerY, sizeMain, colorOne, nose) {
    fill(colorOne);
    circle(centerX, centerY, sizeMain);
    let smallSize = sizeMain/5
    noFill();
    circle(centerX-smallSize, centerY-smallSize, smallSize)
    circle(centerX+smallSize, centerY-smallSize, smallSize)
    noFill();
    circle(centerX-smallSize, centerY-smallSize, smallSize*0.25)
    circle(centerX+smallSize, centerY-smallSize, smallSize*0.25)
    if (nose != false) {
        noFill();
        ellipse(centerX, centerY, sizeMain*0.4, sizeMain*0.5);
    }

    strokeWeight(sizeMain/20)
    
}

