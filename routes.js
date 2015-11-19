module.exports = function(app){
    // Declare routes here
    var mailgun = require('./routes/mailgun');

    // Bind routes here
    app.use('/', mailgun);
};
