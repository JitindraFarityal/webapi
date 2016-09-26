var express = require ('express');
var bodyParser = require ('body-parser');
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs("mongodb://jitindrafartiyal-webapi-3816549:27017/contactlist", ['contactlist'])

var app = express();

// configire the app

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"node_modules")));
app.use(express.static(path.join(__dirname,'views')));

// use middlewares

app.use(bodyParser.json());

// define routes

    // instantiate mongoDB database
    var url="mongodb://jitindrafartiyal-webapi-3816549:27017/contactlist";

app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');

  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});
// start the server

var port = process.env.PORT || 8080;

app.listen(port,function(err){
    if(err !=null)
        console.log('Error in starting server at port : ',port);
    else
        console.log('Successfully starting server at port : ',port);
})