const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // drawCreature(425, 225, 200);

    drawGrid(canvasWidth, canvasHeight);
}

// replace this function with YOUR creature!
// function drawCreature(x, y, width, primaryColor='hotpink', secondaryColor='black') {
//     fill(primaryColor);
//     stroke(secondaryColor);
//     circle(x, y, width);

//     noStroke();
//     fill('black');
//     textSize(16);
//     textAlign(CENTER);
//     text("Replace with your creature", x, y);
// }

function draw() {

    drawFlowerCursor(mouseX, mouseY);

}

function drawPlane(pX, pY) {
    
    rect(pX, pY, pX * 1, pY * 0.25);
    fill('pink')
    triangle(pX*25, pY, pX, pY*.25, pX, pY);


    // triangle(this.x + 35, this.y + 15, this.x + 65, this.y - 40, this.x + 65, this.y + 15);
}

function mouseClicked() {
    drawFlowerCursor(mouseX, mouseY)
}

function drawFlowerCursor(fX, fY) {
    let fDiameter = 20;
    fill('pink');
    ellipse(fX, fY + fDiameter/2, fDiameter);
    ellipse(fX, fY - fDiameter/2, fDiameter);
    ellipse(fX + fDiameter/2, fY, fDiameter);
    ellipse(fX - fDiameter/2, fY, fDiameter);
    fill('yellow');
    ellipse(fX, fY, fDiameter);
}