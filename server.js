var express = require ('express');
var bodyParser = require ('body-parser');

var app = express();

// configire the app

// use middlewares

// define routes

// start the server

var port = process.env.PORT || 8080;

app.listen(port,function(err){
    if(err !=null)
        console.log('Error in starting server at port : ',port);
    else
        console.log('Successfully starting server at port : ',port);
})