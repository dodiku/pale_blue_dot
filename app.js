var express = require('express');
var app = express();
var Request = require('request');

// *************************
// CONFIGURATIONS
// *************************

app.set("views", __dirname + '/views');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static( __dirname + '/public' ));

var port = process.env.PORT || 3000;

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

app.listen(port);
console.log("App is served on localhost: " + port);
