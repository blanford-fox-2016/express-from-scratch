'use strict'

const express = require('express');
let router = express.Router()
let app = express()
var path = require('path');
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug')
app.listen(3000)


app.get('/', function (req, res) {
  res.render('server',{title: 'GET METHOD', message: 'this is GET method'})
})

app.post('/', function (req, res) {
  res.send('this is post method')
})

app.put('/', function (req, res) {
  res.send('this is put method')
})

app.delete('/', function (req, res) {
  res.send('this is delete method')
})
