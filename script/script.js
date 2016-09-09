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
  cnv = createCanvas(canvasWidth, canvasHeight);
  // centerCanvas();
  //
  //
  // // var myCanvas = createCanvas(canvasWidth, canvasHeight);
  // // myCanvas.parent('canvas');
  // var x = (windowWidth - width) / 2;
  // var y = (windowHeight - height) / 2;
  // myCanvas.position(x, y);
  smooth();
	// ellipse(200, 200, w, h);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(220);
  smooth();
	ellipse(200, 200, w, h);
}

function mousePressed(){
  console.log("click");

  console.log("reseting timeInterval to 3000");
  timeInterval = 3000;

  if (w >= canvasWidth){
    //reseting the circle
    w = 40;
    h = 40;
  }
  else{
    console.log("else");
    w = w + 20;
    h = h + 20;
    setTimeout(reduceSize, timeInterval);
  }
}

function reduceSize () {
  console.log("reducing size...");
    w = w - 20;
    h = h - 20;

}
