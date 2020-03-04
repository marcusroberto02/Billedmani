let img1;
let img2
w = 188;
h = 242;

function preload() {
  img1 = loadImage("mps.jpg");
  img2 = loadImage("mpsFull.jpg");
}

function setup() {
  createCanvas(275, 387);
  image(img2, 0,0,275,387);
}

function draw(){
  noStroke();
  ownFilter();
  noLoop();
}

function ownFilter() {
  for (let i = 0; i < w; i += 1) {
    for (let j = 0; j < h; j += 1) {
      fill([getRGBvalue(0,i,j),  getRGBvalue(1,i,j),  getRGBvalue(2,i,j), getRGBvalue(3,i,j)*0.5]);
      rect(i, j, 1, 1);
    }
  }
}

function getRGBvalue(n,i,j){
  c = img1.get(i, j)[n];
  return c;
}
