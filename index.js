'use strict'
const express = require('express');
const pug = require('pug');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
require('express-handlebars')

app.listen(3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.render('index', { title: "Ini get!" });
})

app.post('/', (req, res) => {
  let teks = req.body.teks;
  // res.send(req.body.teks)
  res.render('index', { title: teks  });
})

app.put('/', (req, res) => {
  res.send('index', { title: "Ini put!" })
})

app.delete('/', (req, res) => {
  res.send('index', { title: "Ini delete!" })
})

app.get('/test', (req, res) => {
  res.render('test', { title: "Hore!", body: "This is handlebars!"});
})
