// Module Dependencies
var express = require('express'),
   routes = require('./middleware/routes'),
   mongoose = require('mongoose'),
   mongo = require('mongodb'),
   passport = require('./middleware/configs/auth'),
   mongoStore = require('connect-mongo')(express),
   path = require('path'),
   redis = require('redis'),
   moment = require('moment');

var app = module.exports = express();
global.app = app;

var config = require('./middleware/configs/config.js');

// Connect to the database once
var DB = require('./middleware/configs/database');
var db = new DB.startup('mongodb://localhost/'+config.dbname);

var RedisStore = require('connect-redis')(express);
var redisClient = require('redis').createClient();


// Setup session store variables
var storeConf = {
   db: {
      db: 'sonicplatformsessionstore',
      host: '127.0.0.1',
      port: '6379',
      client:redisClient,
      prefix:'sess'
   },
   secret: '12345ABCDEFnocSonic!#',
   expires:false,
   httpOnly:true,
   maxAge :  new Date(Date.now() + 3600000)
};


// provide site-wide variables
app.locals.config = config;

// use date manipulation tool moment
app.locals.moment = moment;

// App Config
app.configure(function(){
   console.log("__dirname"+__dirname);
   app.set( __dirname + '/');
   // Middleware to highlight the current top level path
   app.use(function(req, res, next) {
      var current = req.path.split('/');
      res.locals.current = '/' + current[1];
      res.locals.url = 'http://' + req.get('host') + req.url;
      next();
   });
   app.use(express.bodyParser());
   app.use(express.cookieParser());
   app.use(express.methodOverride());
   app.use(express.session({store : new RedisStore(storeConf.db),
	                        secret: storeConf.secret,
	                        maxAge:storeConf.maxAge,
	                        cookie:{
	                        	maxAge:storeConf.maxAge, 
	                        	expires: false
	                        }}));
   app.use(passport.initialize());
   app.use(passport.session());
   app.use(app.router);
   app.use(express.static(__dirname + '/'));
   app.use("/steal", express.static(__dirname + '/steal'));
   app.use( express.static(__dirname + '/static'));
   app.use( express.static(__dirname + '/canjs'));
   app.use( express.static(__dirname + '/sonicplatform'));

});



//environment specific config
app.configure('development', function(){
   app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
   app.use(express.errorHandler());
});


// Load the router
require('./middleware/routes')(app);





var port = config.port;
app.listen(port, function() {
  console.log("Listening on " + port);
});