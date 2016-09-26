var express = require ('express');
var bodyParser = require ('body-parser');
var path = require('path');
require('./node_modules/angular/controller')(App)

var app = express();

// configire the app

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"node_modules")));
app.use(express.static(path.join(__dirname,'views')));

// use middlewares

app.use(bodyParser.json());

// define routes

app.get('/contactlist',function(req,res){
    
    console.log('Request for Contact List');
    var person1 = {
        Name : "Jay Fartiyal",
        Email : "jayfartiyal@hotmail.com",
        Phone : "9886762064"
    };
    
    var person2 = {
        Name : "Preethi K A",
        Email : "preethiKA@hotmail.com",
        Phone : "9972232062"
    };
    
    var person3 = {
        Name : "Utkarsh Roy",
        Email : "utkarshRoy@hotmail.com",
        Phone : "9878965002"
    };
    
    var contactList = [person1,person2,person3];
    
    res.json(contactList);
});

// start the server

var port = process.env.PORT || 8080;

app.listen(port,function(err){
    if(err !=null)
        console.log('Error in starting server at port : ',port);
    else
        console.log('Successfully starting server at port : ',port);
})