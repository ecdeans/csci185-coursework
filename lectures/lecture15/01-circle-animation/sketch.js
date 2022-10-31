// const circleData = [
//     {x: 500, y: 50, d: 100, speedX: 3, speedY: 3},
//     {x: 300, y: 150, d: 50, speedX: 2, speedY: 0},
//     {x: 400, y: 400, d: 25, speedX: 0, speedY: 1},
//     {x: 40, y: 520, d: 80, speedX: 2, speedY: 0},
//     {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5},
//     {x: 350, y: 350, d: 70, speedX: 1, speedY: 1}
// ];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    let i = 0;
    while(i < 100) {
        const ball = {
            x: randomIntFromInterval(2, 200),
            y: randomIntFromInterval(2, 200),
            d: randomIntFromInterval(1, 100),
            speedX: 3,
            speedY: 3
        
        };
        
        i++;

        circle(ball.x, ball.y, ball.d);
    }

    drawGrid(canvasWidth, canvasHeight);

}

// initialize variables outside of the function:
// let x = 0;
// let y = 0;
// let d = 50;
// let speedX = 3;
// let speedY = 2;

// Objects



function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min + 1) * min)
}



// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:
// function draw() {
//     clear();
//     fill('hotpink');
//     circle(ball.x, ball.y, ball.d);
//     ball.x += ball.speedX;
//     ball.y += ball.speedY;
//     // ballOne.d += ballOne.speedX/4

// }