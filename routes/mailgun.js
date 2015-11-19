var express = require('express');
var router = express.Router();
var api_key = 'key-3e522d2966a5fbb738696e453ccde349';
var domain = 'mail.laurenfazah.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

/*
 * GET home page.
 */
router.get('/mailgun', function(req, res, next) {
    console.log("here??");
    // res.render('mailgun');


        // var data = {
        //   from: body.name + ' <' + body.email + '>',
        //   to: 'laurenfazah@gmail.com',
        //   subject: 'Portfolio Message',
        //   text: body.message
        // };

        // mailgun.messages().send(data, function (error, body) {
        //   console.log(body);
        // });

        var data = {
          from: 'Lauren <laurenfazah@me.com>',
          to: 'laurenfazah@gmail.com',
          subject: 'Portfolio Message',
          text: "working???????"
        };

        mailgun.messages().send(data, function (error, body) {
        });


});
module.exports = router;
