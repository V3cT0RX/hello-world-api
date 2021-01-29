var express = require('express');
var router = express.Router();

//  Data is stored in data.json
var data = require('../data.json');

/*
receives the language as parameter 
responds with status 200 and required message in case the language is available 
otherwise responds with status 400 and error  
*/
router.get('/', function (req, res, next) {
  let lang = req.query.language;

  let langData = data.lang_list;
  let sent = false;
  for (i = 0; i < langData.length; i++) {
    // console.log(langData[i])
    if (langData[i].lang_name == lang) {
      res.status(200).json({
        message: {
          ID: "A" + Math.floor(Math.random() * 10000), //random id generated according to yml file
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
