var connect = require('connect');
var serveStatic = require('serve-static');

// settings for heroku
//var port = process.env.PORT || CONFIG.port || 8080;

// default settings
var port = 8080
connect().use(serveStatic(__dirname + '/public')).listen(port);
