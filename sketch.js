let pixels;
let pixelSize = 50;

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  fullscreen(true);
  let r = '#F00';
  let w = '#FFF';

  pixels = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, r, r, 0, r, r, 0, 0],
    [0, r, 0, 0, r, 0, 0, r, 0],
    [0, r, 0, 0, 0, 0, 0, r, 0],
    [0, 0, r, 0, 0, 0, r, 0, 0],
    [0, 0, 0, r, 0, r, 0, 0, 0],
    [0, 0, 0, 0, r, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

}

function draw() {

  translate(0, 0, -100);

  rotateY((frameCount * 0.01) * 0.5);
  translate(-200, -150, 0);
  translate(0, cos(frameCount / 20), cos(frameCount / 10) * 10);


  background(0);


  for (let row of pixels) {
    push();
    for (let pixel of row) {

      if (pixel) {
        stroke(0);
        fill(pixel);
      } else {
        noStroke();
        // stroke(255);
        noFill();
      }

      box(pixelSize);
      translate(pixelSize, 0);
    }
    pop();
    translate(0, pixelSize);

  }

}


// ui stuff
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
