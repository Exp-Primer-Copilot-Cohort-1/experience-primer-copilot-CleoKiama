


//create a server with express
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//get the comment list
app.get('/api/comments', function(req, res) {
  fs.readFile('comments.json', 'utf8', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

//add a comment
app.post('/api/comments', function(req, res) {
  fs.readFile('comments.json', 'utf8', function(err, data) {
    var comments = JSON.parse(data);
    comments.push(req.body);
  });
})
