let space = 30;
let r;
let g;
let b;
let x = 0;
let y = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);
	r = random(255);
	g = random(255);
	b = random(255);
}

function draw(){
	stroke(r,g,b);
	strokeWeight(7);
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
		r -= random(30);
		b += random(30);
		g += random(30);
		console.log(true);
	}else if(x >= windowWidth){
		x = 0;
		y += space;
		r += random(30);
		g -= random(30);
		b -= random(30);
	}
	if(y >= height){
		background(0);
		x=0;
		y=0;
	}
}
