var canvasHeight, canvasWidth, cnv;

// var timeInterval = 3000;
var h = 5;
var w = 5;
var limit, restartInterval, final;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  canvasWidth = 400;
  canvasHeight = 400;
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  smooth();
}

function windowResized() {
  centerCanvas();
}

var socket = io();
socket.emit('user', 'new user is connected');
socket.on('userCount', function(userCount){
  console.log('total number of users online is: ' + userCount);
});

socket.on('dimensions', function(data){
  w = data.w;
  h = data.h;
  limit = data.limit;
  restartInterval = data.restartInterval;
  final = data.final;
  console.log('new data came to light...');
  console.log('h = ' + h);
  console.log('w = ' + w);
  console.log('limit: ' + limit);
  console.log('restartInterval: ' + restartInterval);
  console.log('final state: ' + final);
});

function mousePressed(){
  if (final === 0) {
    console.log("click");
    socket.emit('click', 'click');
    // setTimeout(reduceSize, timeInterval);
    // final = 0;
  }
}

function draw() {
  background(30, 32, 33);
  smooth();
  fill(142, 227, 239);
	noStroke();
  if (final === 0) {
    ellipse((windowWidth/2), (windowHeight/2), w, h);
  }
  if (final === 1) {
    ellipse((windowWidth/2), (windowHeight/2), limit, limit);
    // ... add text...
    textSize(32);
    fill(30, 32, 33);
    textAlign('center');
    text("hello itp", (windowWidth/2), (windowHeight/2));
    //
    // setTimeout(restart, restartInterval);
  }

}


function reduceSize () {
  console.log("reducing size...");
  socket.emit('reduce', 'reduce');
}

function restart (){
  final = 0;
}
