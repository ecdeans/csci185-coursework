function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    noFill();
    let counter = 0;
    while (counter < 70) {
        // circle(100, 0 + counter*10, 50);
        circle(200, 10 + counter*20, 50 + counter*10);

        counter += 1;
    }



    // fill('red');
    // noFill();
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
