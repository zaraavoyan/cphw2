
var x1 = 10;
var y1 = 20;
var x2 = 100;
var y2 = 50;
var x3 = 20;
var y3 = 40;
var speedX1 = 5;
var speedY1 = 3;
var speedX2 = 10;
var speedY2 = 3;
var speedX3 = 8;
var speedY3 = 3;
function setup() {
	createCanvas(400, 400);
}


function draw() {
	background(220);
	fill(100, 100, 40);
	noStroke();
	
	x1 = x1 + speedX1;
  y1 = y1 + speedY1;
	x2 = x2 + speedX2;
	y2 = y2 + speedY2;
	x3 = x3 + speedX3;
	y3 = y3 + speedY3;
	
firstBall();
secondBall();
thirdBall();
	
	
	ellipse(x1,y1, 40);
	ellipse(x2,y2, 40);
	ellipse(x3,y3, 40);
	
}

function firstBall() {
		if (x1 > width) {
		speedX1 = speedX1* -1;
	}
	
	if (y1 < 0) {
		speedY1 = speedY1* -1;
	}
	if (y1> height) {
		speedY1 = speedY1* -1;
	}
	if (x1 < 0) {
		speedX1 = speedX1* -1;
}
}

function secondBall() {
	if (x2 > width) {
		speedX2 = speedX2* -1;
	}
	
	if (y2 < 0) {
		speedY2 = speedY2* -1;
	}
	if (y2> height) {
		speedY2 = speedY2* -1;
	}
	if (x2 < 0) {
		speedX2 = speedX2* -1;
}
}

function thirdBall() {
	if (x3 > width) {
		speedX3 = speedX3* -1;
	}
	
	if (y3 < 0) {
		speedY3 = speedY3* -1;
	}
	if (y3> height) {
		speedY3 = speedY3* -1;
	}
	if (x3 < 0) {
		speedX3 = speedX3* -1;
}}
