let img;
let crack;
function preload() {
  img = loadImage("donaldtrump.jpg")
  crack = loadImage("crack.png")
}

let w, h, offsetY

let slider;
function setup() {
  //input = createFileInput(handleFile);
  //input.position(0, 0);
  w = 300
  h = 380
  offsetY = 50
  pixelDensity(0.5)
  createCanvas(w,offsetY+h+170)
  textFont('Georgia')
  fill(0)
  textSize(30)
  text('Old Filter', 90, 30)
  textSize(20)
  text('VEJLEDNING:', 20, offsetY+h+50)
  textSize(15)
  text('Ryk musen over i venstre side af billedet', 20, offsetY+h+70)
  text('Bevæg slideren mod højre for at', 20, offsetY+h+90)
  text('få billedet til at se ældre ud', 20, offsetY+h+110)
  text('Af Aske, Emilie, Viggo og Marcus', 20, offsetY+h+130)
  img.loadPixels()
  slider = createSlider(0,3,0,1);
  slider.position(10, offsetY+h+10);
  slider.style('width', '280px');

  //text('VEJLEDNING:', 20, h+30);
  noStroke()
}

function draw() {
  let val = slider.value()
  if (val == 0){
    image(img,0,offsetY)
  } else if (val == 1){
    oldFilter()
  } else if (val == 2) {
    brownEdges()
  } else if (val == 3) {
    blackCracks()
  }


}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}

function oldFilter(){
  for (i = 0; i < w; i+=1){
    for (j = 0; j < h; j+=1){
      fill(greyScale(i,j))
      rect(i,j+offsetY,1,1)
    }
  }
}

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}

function greyScale(i,j){
  c = (getPixelValue(0,i,j)+getPixelValue(1,i,j)+getPixelValue(2,i,j))/3
  return c
}

function blackCracks(){
  image(crack, 0, offsetY, w, h)
}

function brownEdges(){
  edgeColor = color(150,116,8)
  edgeColor.setAlpha(5)
  fill(edgeColor)
  rect(0,offsetY,w,h)
}
