"use strict"

const express = require('express')
let app = express()

app.get('/',function (req, res){

  res.send('Iam Oke');
})

app.post('/', function (req, res){
  res.send('Aku disimpan')
})

app.put('/user', function(req, res){
  res.send('aku diupdate')
})
app.delete('/user', function (req,res){
  res.send('aku dihapus')
})

app.listen(3000)
