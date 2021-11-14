var express = require('express')
var cors = require('cors')
var app = express()
const port = 3000;

app.use(cors())

app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
  res.send({"message": 'get from server'})
})


app.post('/register', function (req, res) {
  console.log(req.body);
  res.status(200).send({"message": 'Data recieved'})
})

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port '+port)
})
