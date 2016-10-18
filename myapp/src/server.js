'use strict'

const express = require('express')
var path = require('path');

let app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/',function (request,response) {
  response.render('index',{title: "Ini Title"})
})

app.post('/',function (request,response) {
  response.send("HELO WORLD !")
})

app.listen(3000)
