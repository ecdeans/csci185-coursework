const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn
    
    drawGrid(canvasWidth, canvasHeight);

}

// function definition goes here:

function drawElmo(x, y, size, color, nose) {
    // head
    fill(color);
    circle(x, y, size);
    // eyes
    let eyeSize = size/5;
    // iris
        fill('white');
        circle(x-eyeSize*0.7, y-eyeSize*0.8, eyeSize);
        circle(x+eyeSize*0.7, y-eyeSize*0.8, eyeSize);
    // pupils
        fill('black');
        circle(x-eyeSize*0.7, y-eyeSize*0.8, eyeSize*0.25);
        circle(x+eyeSize*0.7, y-eyeSize*0.8, eyeSize*0.25);
    // nose
    if (nose != false) {
        fill('pink');
        ellipse(x, y, size*0.25, size*0.35);
    }


}





