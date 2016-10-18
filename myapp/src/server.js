'use strict'

const express = require('express')
var path = require('path');
// var logger = require('morgan');
let app = express()

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));


// var routes = require('../index');
// app.use('/', routes);

app.get('/',function(req,res) {
  // res.send('I GET Hacktiv8!!!!')
  res.render('index', {title: 'GET'})
})

app.post('/',function(req,res) {
  res.render('index', {title: 'POST'})
})

app.put('/',function(req,res) {
  res.render('index', {title: 'PUT'})
})

app.delete('/',function(req,res) {
  res.render('index', {title: 'DELETE'})
})




app.listen(3000)
// module.exports = app;
