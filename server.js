// var express = require('express');

// var app = express();

// app.set('view engine', 'ejs');

var db = require('./models');

// Create

db.user.create({
    firstName: 'Steve',
    lastName: 'Peters',
    age: 99
})
.then()