
// BALL MOVE
// var ball = {}

// function setup() {
// 	createCanvas(windowWidth,windowHeight);
// 	background(0);
// 	ball.x = random(0, windowWidth);
// 	ball.y = random(0, windowHeight);
// 	ball.xspeed = random(50,60);
// 	ball.yspeed = random(50,60);
// }

// function draw() {  
// 	display();
// 	move();
// 	bounce();
// }

// function move(){
// 	ball.x = ball.x + ball.xspeed;
// 	ball.y = ball.y + ball.yspeed;
// }

// function bounce(){
// 	if(ball.x > width || ball.x < 0)
// 		ball.xspeed = -ball.xspeed;
// 	if(ball.y > height || ball.y < 0)
// 		ball.yspeed = -ball.yspeed;
// }

// function display(){
// 	noStroke();
// 	fill(random(100,255), random(100,200), random(100.255));

// 	ellipse(ball.x, ball.y, 24, 24);


// --------------------
let space = 20;
let r = 30;
let g = 255;
let b = 70;
let x = 0;
let y = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw(){
	stroke(r,g,b);
	strokeWeight(4);
	fill(255);
	
	if(random(1) < 0.5){
	line(x, y, x + space, y + space);
	}else{
		line(x + space, y, x, y + space);
	}

	x+= space;

	if(y >= windowHeight / 2 && x >= windowWidth){
		x = 0;
		y += space;
		r -= 30;
		b += 30;
		g += 20;
		console.log(true);
	}else if(x >= windowWidth){
		x = 0;
		y += space;
		r += 20;
		g -= 20;
		b -= 20;
	}

}