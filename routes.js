module.exports = function(app){
    // Declare routes here
    var index = require('./routes/index');
    var mailgun = require('./routes/mailgun');

    // Bind routes here
    app.use('/', index);
    app.use('/', mailgun);
};
