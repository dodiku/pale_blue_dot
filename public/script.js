var canvasHeight, canvasWidth, cnv;

var timeInterval = 3000;
var h = 5;
var w = 5;


// var socket = io();

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

var socket = io();
socket.emit('user', 'new user is connected');
socket.on('userCount', function(userCount){
  console.log('total number of users online is: ' + userCount);
});

socket.on('dimensions', function(data){
  w = data.w;
  h = data.h;
  console.log('new data came to light...');
  console.log('h = ' + h);
  console.log('w = ' + w);
});

function mousePressed(){
  socket.emit('msg', 'hello from the client...');
  console.log("click");
  timeInterval = 3000;
  // w = w + 20;
  // h = h + 20;
  socket.emit('click', 'click');
  setTimeout(reduceSize, timeInterval);
}

function draw() {
  background(30, 32, 33);
  smooth();
  fill(142, 227, 239);
	noStroke();
	// ellipse(200, 200, w, h);
  ellipse((windowWidth/2), (windowHeight/2), w, h);
}


function reduceSize () {
  console.log("reducing size...");
    // w = w - 20;
    // h = h - 20;
    socket.emit('reduce', 'reduce');
}
