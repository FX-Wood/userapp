// var express = require('express');

// var app = express();

// app.set('view engine', 'ejs');

var db = require('./models');

// Create

// db.user.create({
//     firstname: 'Mike',
//     lastname: 'Shull',
//     age: 103
// })
// .then(function(data) {
//     // console.log(data);
// });

// // READ ONE

// db.user.find({
//     where: {id: 1}
// })
// .then(function(user) {
//     // console.log(user);
// })

// READ ALL

// db.user.findAll().then(function(users) {
//     console.log(users);
//     res.json(users)
// });

// Update

db.user.update({
    firstname: 'Steve',
    lastname: 'Taco'
}, {
    where: {id: '1'}
})
.then(function(user) {
    console.log(user)
})