'use strict'

const express = require('express')
const pug = require('pug');
const path = require('path');


let app = express()

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.get('/', function (req, res){
  res.render('server', {title: "I love Hacktiv8!"})
});

app.post('/', function(req, res){
  console.log(req.body);
  // var data = {
  //   firstname : req.body.firstname,
  //   lastname : req.body.lastname
  // }
  res.send('Got a POST request');
});

app.put('/', function(req, res){
  res.send('Got a PUT request at /user')
});

app.delete('/', function(req, res){
  res.send('Got a Delete request at /user')
})

app.listen(3000)
