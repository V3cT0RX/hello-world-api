var express = require('express');
var router = express.Router();

//FRONTEND CAN BE FOUND IN  public FOLDER

/* GET home page. */
router.get('/', function (req, res, next) {
  //res.send('<h1>HELLO WORLD API</h1>hello world api at /hello');
});

module.exports = router;
