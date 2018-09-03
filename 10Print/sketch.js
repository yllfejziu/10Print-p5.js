let r;
let g;
let b;
let x;
let y;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);
	r = random(100,255);
	g = random(100,255);
	b = random(100,255);
	x = 0;
	y = 0;
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

	if(y >= height / 2 && x >= width){
		x = 0;
		y += space;
		r += random(30);
		b += random(30);
		g += random(30);
	}else if(x >= width){
		x = 0;
		y += space;
		r -= random(30);
		g -= random(30);
		b -= random(30);
	}
	if(y >= height){
		setTimeout(setup, 1000);
	}
}
