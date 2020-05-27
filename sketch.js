let brickWidth;
let rows;
let columns;
let from;
let to;

function setup() {

    createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {

//     rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    translate(-100, -100);

    background(0);
    fill(255, 0, 0);

    box();

    translate(50, 0);
    box();

    translate(50, 50);
    box();

    translate(50, -50);
    box();

    translate(50, 0);
    box();

    translate(50, 50);
    box();

    translate(0, 50);
    box();

    translate(-50, 50);
    box();

    translate(-50, 50);
    box();

    translate(-50, 50);
    box();

    translate(-50, -50);
    box();

    translate(-50, -50);
    box();

    translate(-50, -50);
    box();

    translate(0, -50);
    box();

}

function drawBalls() {
    push();
    //     rotateZ(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.02);

    //     noFill();
    stroke(320);
    sphere(12, 6, 6);

    pop();

}

function drawBricks() {
    push();
    translate(-(brickWidth * columns) / 2, 100 - windowHeight / 2);

    background(0);

    for (let y = 0; y < rows; y++) {

        let rowColor = lerpColor(from, to, y / rows);

        //         fill(rowColor);
        noFill();
        stroke(rowColor);
        //         noStroke();

        translate(0, brickWidth);

        push();
        for (let x = 0; x < columns; x++) {
            translate(brickWidth, 0);
            box(brickWidth, brickWidth);
        }
        pop();

    }
    pop();
}

// ui stuff

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
