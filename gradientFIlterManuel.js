let img;

function preload(){
  img = loadImage('mps.jpg');
}

function setup(){
  w = 188;
  h = 242;
  createCanvas(2*w,h);
}

function draw(){
ownFilter();
image(img,w,0);
  noLoop();
}

function ownFilter(){
  for (let i=0;i<w; i += 1){
    for (let j=0;j<h; += 1){
      let c = img.get(i,j);
      fill((c[0]+c[1]+c[2])/(3)-j);
      noStroke();
      rect(i,j,1,1);
    }
  }
}
