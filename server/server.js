var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var values = {};
var path = require ("path");

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//Begining of functions
app.post('/addition', function(req,res){
  values = req.body;
  var addAmount = parseInt(values.a) + parseInt(values.b);
  res.send(addAmount + '');
});

app.post('/subtraction', function(req,res){
  values = req.body;
  var subtractAmount = values.a - values.b;
  res.send(subtractAmount + '');
});

app.post('/multiplication', function(req,res){
  values = req.body;
  var multiplyAmount = values.a * values.b;
  res.send(multiplyAmount + '');
});

app.post('/division', function(req,res){
  values = req.body;
  var divideAmount = values.a / values.b;
  res.send(divideAmount + '');
});
// server static files

app.get("/*", function(req, res) {  //function catches anything in the folder
  console.log('got a request!, req:', req.params[0]);

var file = req.params[0] || "/views/index.html";
res.sendFile(path.join(__dirname, "/public/", file));
//Aynything in public will come back as a request
});
app.listen(5000, function() {
  console.log('listening on the port 5000');
});
