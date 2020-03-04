let img;
function preload() {
  img = loadImage('mps.jpg');
}

function setup() {
  w = 188;
  h = 242;
  createCanvas(2 * w, h);
  noStroke();
}

function draw() {
  ownFilter();
  image(img, w, 0);
  noLoop();
}

function ownFilter() {
  for (let i = 0; i < w; i += 1) {
    for (let j = 0; j < h; j += 1) {
      fill([getRGBvalue(0,i,j),  getRGBvalue(1,i,j),  getRGBvalue(2,i,j)]);
      rect(i, j, 1, 1);
    }
  }
}

function getRGBvalue(n,i,j){
  c = 5*img.get(i, j)[n]-(img.get(i-1, j)[n]+img.get(i+1, j)[n]+
  img.get(i, j-1)[n]+img.get(i, j+1)[n]);
  return c;
}
