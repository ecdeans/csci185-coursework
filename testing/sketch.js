const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
    

    
    

    //drawBubbles();
}

function draw() {
    drawGrid(canvasWidth, canvasHeight);


    drawPlane(100, 50)
}

// picks a random number between 0 and 100:
    // let rando = Math.random() * 100;
    // console.log(rando);
    
    // picks a random number between 10 and 500:
   // rando = Math.random() * 490 + 10;
    //console.log(rando);

// function drawStars() {
//     strokeWeight(0);
//     fill('white');
//     for (let i = 0; i < 1000; i++) {
//         const x = Math.random() * canvasWidth;
//         const y = Math.random() * canvasHeight;
//         const width = Math.random() * 2 + 0.5;
//         circle(x, y, width);
//     }
// }

function drawBubbles() {
    strokeWeight(1);
    stroke('white');
    noFill()
    for (let i = 0; i <= 1000; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 40 + 5;
        circle(x, y, width);
    }
}

function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min + 1) * min)
}

function drawPlane(pX, pY) {
    rect(pX, pY, pX * 0.25, pY * 0.25)
}