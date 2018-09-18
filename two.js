function setup() {
    createCanvas(400, 400);
}

var x = 10;
var c = 20;
var changeInX = 5;
var changeInY = 3;
function draw() {
    background(220);
    fill(100,100,40);
	  noStroke();
    ellipse(x, mouseY, 40);
    ellipse(c, 100,40);
    x = x + changeInX;
	  c = c + changeInY;
   
    if (x > width) {
        changeInX = -5;
    }

    if (x < 0) {
        changeInX = 5;
    }
	
	  if ( c > width) {
			changeInY = -3;
		}
	
	  if (c < 0) {
			changeInY = 3}
}
