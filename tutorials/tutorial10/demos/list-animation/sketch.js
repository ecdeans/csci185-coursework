const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let color = 'white';
const treePositionList = [];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function randInt(min, max) { 
	// min and max included 
	return Math.floor(randDecimal(min, max));
}
function randDecimal(min, max) { 
	// min and max included 
	return Math.random() * (max - min + 1) + min;
}

function getRandomColor() {
    const palette = [ '#1b998b', '#ed217c', '#2d3047', '#fffd82', '#ff9b71'];
    const idx = randInt(0, palette.length - 1);
    return palette[idx];
}

function mouseDragged() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const treePosition = {
        x: mouseX,
        y: mouseY,
    }
    treePositionList.push(treePosition)
}

function draw() {
    clear();
    // 2. loop through the bubbles list and draw / animate each bubble:
    for (const treePosition of treePositionList) {
        fill('green');
        drawTree(treePosition.x, treePosition.y);
        // bubble.y += bubble.speed;

        // if (bubble.y < -100) {
            // bubble.y = canvasHeight + 100;
        // }
    }

    // message:
    fill('black');
    textAlign(CENTER);
    textSize(16);
    text("Drag to add bubbles.", canvasWidth/2, canvasHeight/2);

}

function drawTree(x, y){
    let treeHeight = 50;
    let treeWidth = 30;
    const treeBottomY = y + treeHeight * 0.9;
  
    // trunk
    stroke(101, 0, 11);
    fill(150, 75, 0);
    rect(x - treeWidth * 0.1, treeBottomY,
        treeWidth * 0.2, treeHeight * 0.1);
  
    // tree
    stroke(34, 139, 34);
    fill(38, 230, 0);
    triangle(x, y,
             x + treeWidth * 0.5, treeBottomY,
             x - treeWidth * 0.5, treeBottomY);

    }