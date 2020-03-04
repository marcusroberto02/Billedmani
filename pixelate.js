let img;

function preload(){
  img = loadImage('mpsFull.jpg');
}

function setup(){
  createCanvas(275*2,387);
}

function draw(){
  image(img,275,0);
  ownFilter();
}

function ownFilter(){
  let pixelSize = map(mouseX , 0, width, 1, 16);
  for (let i=0;i<width; i = i+pixelSize){
    for (let j=0;j<height; j = j+pixelSize){
      let c = img.get(i,j);
      fill(c);
      noStroke();
      ellipse(i,j,pixelSize,pixelSize);
    }
  }
}
