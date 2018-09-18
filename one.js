function setup() {
    createCanvas(400, 400);
}

var x = 10;
var changeInX = 5;
var changeInY = 3;
function draw() {
    background(220);
    fill(100,100,40);
	  noStroke();
    ellipse(x, mouseY, 40);

    x = x + changeInX;
    y = mouseY + changeInY
    if (x > width) {
        changeInX = -3;
    }

    if (x < 0) {
        changeInX = 3;
    }
}
