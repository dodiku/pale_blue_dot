var height, width, canvasHeight, canvasWidth;
var timeInterval = 3000;

function setup() {
  canvasWidth = 400;
  canvasHeight = 400;
  createCanvas(canvasWidth, canvasHeight);
  height = 40;
  width = 40;
}

function draw() {
  background(220);
  smooth();
	ellipse(200, 200, width, height);
}

function mousePressed(){
  console.log("click");

  console.log("reseting timeInterval to 3000");
  timeInterval = 3000;

  if (width >= canvasWidth){
    //reseting the circle
    width = 40;
    height = 40;
  }
  else{
    console.log("else");
    width = width + 20;
    height = height + 20;
    setTimeout(reduceSize, timeInterval);
  }
}

function reduceSize () {
  console.log("reducing size...");
    width = width - 20;
    height = height - 20;

}
