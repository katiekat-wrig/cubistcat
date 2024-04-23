let img1;
let overlayimg;

function setup() {
  createCanvas(300, 350);
}

function preload() {
// img1 = loadImage("cube-cat.png");
  overlayimg = loadImage("AdobeStock_583961744.jpeg");
}

function draw() {
background(238, 198, 74)
//image(img1, 0, 0, 300, 350,  0, 0)
strokeWeight(0);

//tail
push();
fill(35, 26, 25);
rect(150,300, 150,20)
pop();

//body bottom-right
push();
fill(35, 26, 25);
rect(120,211,80,110)
pop();

//body bottom-left
push();
fill(52, 51, 48);
rect(75,210,47,110)
pop();

//arm left
push();
fill(35, 26, 25);
rect(90,212,25,110)
rect(82,305,35,20)

pop(); 

//arm right
push();
fill(52, 51, 48);
rect(125,210,25,110)
rect(118,305,35,20)

pop();

//body top-right
push();
fill(52, 51, 48);
rect(95,150,60,63)
triangle(155, 160, 202, 213, 155, 213)

//body top-left
push();
noStroke;
fill(35, 26, 25);
rect(90,162,32,51)
triangle(90, 160, 75, 213, 92, 213)
pop()

//head bottom-left
push();
noStroke;
fill(52, 51, 48);
rect(67,130,55,32);
pop();

//head bottom-right
push();
noStroke;
fill(35, 26, 25);
rect(122,130,55,32);
pop();

//head top-left
push();
fill(35, 26, 25);
rect(67,80,55,50)
pop()

//ear top-left
push();
noStroke;
triangle(67, 80, 67, 25, 101, 80)
pop()

//head/ear top-right
push();
noStroke;
fill(52, 51, 48);
rect(122,80,55,50)
triangle(177, 80, 177, 25, 140, 80)
pop()

//eyes
//left iris
push();
fill(238, 198, 74)
ellipse(95, 115, 30 ,30)
pop();
//left pupil
push();
fill(35, 26, 25);
ellipse(98, 115, 12, 20)
pop();

//right iris
push();
fill(238, 198, 74)
ellipse(145, 115, 30 ,30)
pop();
//right pupil
push();
fill(35, 26, 25);
ellipse(148, 115, 12, 20)
pop();

//Interaction
if (mouseIsPressed){
  //eyes
  //left iris
  push();
  fill(238, 198, 74)
  ellipse(95, 115, 30 ,30)
  pop();
  //left pupil
  push();
  fill(35, 26, 25);
  ellipse(95, 115, 25, 25)
  pop();

  //right iris
  push();
  fill(238, 198, 74)
  ellipse(145, 115, 30 ,30)
  pop();
  //right pupil
  push();
  fill(35, 26, 25);
  ellipse(145, 115, 25, 25)
  pop();
}

//texture overlay
push();
blendMode(OVERLAY)
image(overlayimg, 0, 0, 300, 350,  0, 0)
pop();
} 
