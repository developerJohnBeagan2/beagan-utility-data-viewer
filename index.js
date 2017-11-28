var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));

app.get('/api/data', function(req, res) {
  var contents = fs.readFileSync("data/utilData.json", "utf8");
  var jsonContent = JSON.parse(contents);
  res.json(jsonContent);
});

app.use(express.static(path.join(__dirname, '/dist/')));
//
var filePath = path.join(__dirname, '/dist/') + 'index.html';
app.use(function(req, res) { 
	res.sendFile(filePath);
});


//app.use(express.static(__dirname + '/dist'));

//app.get('/', function(request, response) {
//  response.render('index.html');
//});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


