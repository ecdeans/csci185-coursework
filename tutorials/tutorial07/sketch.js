function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 100, 'hotpink');
    drawCircle(200, 100, 50, 'darkblue');
    drawCircle(300, 100, 100, 'teal');
    drawCircle(400, 100, 50, 'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 100, 62.5, 'teal');
    drawOval(200, 200, 62.5, 100, 'hotpink');
    drawOval(300, 200, 100, 62.5, 'darkblue');
    drawOval(400, 200, 62.5, 100, 'teal');

    // Exercise 3:
    drawBullseye(100, 300, 100, 'teal', 'navy');
    drawBullseye(200, 300, 50, 'teal', 'navy');
    drawBullseye(300, 300, 100, 'teal', 'navy');
    drawBullseye(400, 300, 50, 'teal', 'navy');

    // Exercise 4:
    drawFace();

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, diameter, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, diameter);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}

// fill('teal');
//     ellipse(100, 200, 100, 62.5);

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, fillX, fillY) {
   fill(fillX);
    circle(centerX, centerY, size);
    fill(fillY);
    circle(centerX, centerY, size * 0.75);
    fill(fillX);
    circle(centerX, centerY, size * 0.5);
    fill(fillY);
    circle(centerX, centerY, size * 0.25);
}

// fill('teal');
// circle(100, 300, 100);
// fill('navy');
// circle(100, 300, 75);
// fill('teal');
// circle(100, 300, 50);
// fill('navy');
// circle(100, 300, 25);

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace() {
    fill('white');
    circle(100, 400, 50);
    fill('black');
    circle(92, 392, 8);
    circle(108, 392, 8);
}



    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    // drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    // drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    // drawCreature(454, 423, 141, '#aebb83', '#227876');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);


// define your drawCreature function here:

function drawCreature() {

}