var express = require('express');
var router = express.Router();

var data = require('../data.json');

router.get('/', function (req, res, next) {
  let lang = req.query.language;

  let langData = data.lang_list;
  let sent = false;
  for (i = 0; i < langData.length; i++) {
    // console.log(langData[i])
    if (langData[i].lang_name == lang) {
      res.status(200).json({
        message: {
          ID: "A" + Math.floor(Math.random() * 10000),
          msgText: langData[i].greeting
        }
      })
      sent = true;
    }
  }

  if (!sent)
    res.status(400).json({
      error_message: "The requested language is not supported"
    });

});

module.exports = router;
