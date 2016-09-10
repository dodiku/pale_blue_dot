var canvasHeight, canvasWidth, cnv;

var timeInterval = 3000;
var h = 40;
var w = 40;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  canvasWidth = 400;
  canvasHeight = 400;
  // cnv = createCanvas(canvasWidth, canvasHeight);
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  smooth();
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(30, 32, 33);
  smooth();
  fill(142, 227, 239);
	noStroke();
	// ellipse(200, 200, w, h);
  ellipse((windowWidth/2), (windowHeight/2), w, h);
}

function mousePressed(){
  console.log("click");
  timeInterval = 3000;
  w = w + 20;
  h = h + 20;
  setTimeout(reduceSize, timeInterval);

  // if (w >= canvasWidth){
  //   //reseting the circle
  //   w = 40;
  //   h = 40;
  // }
  // else{
  //   console.log("elsei");
  //   w = w + 20;
  //   h = h + 20;
  //   setTimeout(reduceSize, timeInterval);
  // }
}

function reduceSize () {
  console.log("reducing size...");
    w = w - 20;
    h = h - 20;

}
