const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const treePositionList = [];

const c1 = {
    x: 100,
    y: 100,
    width: 100,
    speed: 6,
    color: 'red',
    color2: 'black'
};

const c2 = {
    x: 1100,
    y: 300,
    width: 100,
    speed: 3,
    color: 'green',
    color2: 'black'

};

const c3 = {
    x: 1100,
    y: 375,
    width: 100,
    speed: 1,
    color: 'purple',
    color2: 'black'

};

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
};

let circleX = 150;
let circleY = 150;

// animation loop:
function draw() {

    // clear the canvas:
    clear();

    // move the car:
    c1.x += c1.speed;
    c2.x -= c2.speed;
    c3.x += c3.speed;
    c3.speed += .003;

    //draw car:
    drawCreature(c1.x, c1.y, c1.width, c1.color, c1.color2);
    drawCreature(c2.x, c2.y, c2.width, c2.color, c2.color2);
    drawCreature(c3.x, c3.y, c3.width, c3.color, c3.color2);

    //draw house
    drawLandscapeObject(100, 125, 100, 100, 'pink', 'teal');
    drawLandscapeObject(400, 125, 100, 100, 'pink', 'teal');
    drawLandscapeObject(700, 125, 100, 100, 'pink', 'teal');
    drawLandscapeObject(100, 400, 150, 100, 'pink', 'teal');
    drawLandscapeObject(500, 400, 150, 100, 'pink', 'teal');

    
    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);

    if (c1.x >= 1500) {
        c1.x = -100;
    }
  
    if (c2.x <= -100) {
        c2.x = 1500;
    }

    if (c3.x >= 1500) {
        c3.x = -100;
    }
    //draw trees
    for (const treePosition of treePositionList) {
        fill('green');
        drawTree(treePosition.x, treePosition.y);
    }

    drawFlowerCursor(mouseX, mouseY);

    if (keyIsPressed) {
        if (keyCode == UP_ARROW) {
          circleY--;
        }
        else if (keyCode == DOWN_ARROW) {
          circleY++;
        }
        else if(keyCode == LEFT_ARROW){
          circleX--;
        }
        else if(keyCode == RIGHT_ARROW){
         circleX++;
        }
      }

      circle(circleX, circleY, 50);


}


  circle(circleX, circleY, 50);

function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        y -= 2;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 2;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 2;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 2;
    } else if (ev.code == 'Space') {
        width += 2;
    } else if (ev.code == 'Escape') {
        width -= 2;
    }

    // redraw circle:
    clear();
    fill(sun.color);
    circle(sun.x, sun.y, sun.width);

}

document.addEventListener('keydown', moveController);


function mouseFlowerDrag() {
    drawFlowerCursor(10, 10);
}


function mouseDragged() {
    const treePosition = {
        x: mouseX,
        y: mouseY,
    }
    treePositionList.push(treePosition)
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

function drawTree(x, y){
    let tHeight = 50;
    let tWidth = 30;
    const treeBaseY = y + tHeight * 0.9;
  
    //trunk
    fill('brown');
    rect(x - tWidth * 0.1, 
        treeBaseY,
        tWidth * 0.2, 
        tHeight * 0.1);
  
    //leaves
    fill('lightgreen');
    triangle(x, y,
             x + tWidth * 0.5, treeBaseY,
             x - tWidth * 0.5, treeBaseY);

    }

function drawCreature(cX, cY, cSize, cPrimaryColor, cSecondaryColor) {
    strokeWeight(0);
    
    // body
    fill(cPrimaryColor);
    rect(cX - cSize/4, cY - (cSize/5 + cSize/7), cSize / 2, cSize/7); // top
    rect(cX - cSize/2, cY - cSize/5, cSize, cSize/5); // bottom

    // wheels
    fill(cSecondaryColor);
    circle(cX - cSize / 4, cY, cSize / 6);
    circle(cX + cSize / 4, cY, cSize / 6);
}


function drawLandscapeObject(hX, hY, hWidth, hHeight, hMainColor, hRoofColor) {
    const frontY = hY + hHeight * .3;
    const fHeight = hHeight * .7;

    // main
  fill(hMainColor);
  rect(hX, frontY, hWidth, fHeight);
  
  // roof
  fill(hRoofColor);
  triangle(hX, frontY,
        hX + hWidth * .5, hY,
        hX + hWidth, frontY);

  //window setup
  const wWidth = hWidth * .3;
  const wHeight = fHeight * .3;
  const windowY = frontY + fHeight * .15;
  
  const lWX = hX + hWidth * .1;
  const rWX = (hX + hWidth) - (hWidth * .1) - wWidth;
  
  //windows
  fill('yellow');
  rect(lWX, windowY, wWidth, wHeight);
  rect(rWX, windowY, wWidth, wHeight);

  //door setup
  
  const dWidth = hWidth * .25;
  const dHeight = fHeight * .4;
  const dX = hX + hWidth * .5 - dWidth * .5;
  const dY = hY + hHeight - dHeight;
  
  //door
  fill('brown');
  rect(dX, dY, dWidth, dHeight);
  }
