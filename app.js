var express = require('express');
var app = express();
var Request = require('request');
var http = require('http').Server(app);
// var io = require('socket.io')(http);

// *************************
// CONFIGURATIONS
// *************************

app.set("views", __dirname + '/views');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static( __dirname + '/public' ));

var port = process.env.PORT || 3000;

// circle dimensions
var h = 20;
var w = 20;
var increment = 20;

// *************************
// ROUTERS
// *************************
app.get('/', function(req, res){
  console.log('user enters..');
  res.render('index');
});

app.get("*", function(req, res){
	res.send('Ooops.. nothing here.');
});


var server = app.listen(port);
console.log("App is served on localhost: " + port);

var io = require('socket.io').listen(server);
var userCount = 0;


io.on('connection', function(socket){
  userCount = userCount + 1;
  console.log('a user connected');
  console.log('number of connected users: ' + userCount);
  io.sockets.emit('userCount', userCount);
  socket.emit('dimensions', {h: h, w: w});

  socket.on('disconnect', function(){
    userCount = userCount - 1;
    console.log('user disconnected');
    console.log('number of connected users: ' + userCount);
    io.sockets.emit('userCount', userCount);
  });

  socket.on('click', function(){
    h = h + increment;
    w = w + increment;
    io.sockets.emit('dimensions', {h: h, w: w});
  });

  socket.on('reduce', function(){
    h = h - increment;
    w = w - increment;
    io.sockets.emit('dimensions', {h: h, w: w});
  });

});
