const express = require('express');
const bodyParser = require('body-parser')
var app = express();

var port = 3000;
var src = express.Router();

//setting view
app.set('view engine', 'ejs');
app.set('views', '../view')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



src.route('/src')
  .get((req, res) => {
    res.render('src')
  })



app.get('/', function (req, res) {
  var data = {data: "Home"}
  res.render('tampilan', {data});
});


app.post('/', function(req, res){
  // console.log(req.body);
  var text1 = req.body.text1 || "hallo"
  var text2 = req.body.text2
  res.send("Ciluk Baaa " + text1 + " " + text2)
})


//
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
app.use('/', src)

app.listen(port, () => {
  console.log("server runs");
})
