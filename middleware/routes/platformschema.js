// home.js - top level routes that handle your basic pages and user accounts

var User = require('../models/user');

var maxDataSong = 4 * 1024 * 1024; //4mb
var maxDataBeat = 2 * 1024 * 1024;//2mb
var maxDataImage = .10 * 1024 * 1024; //10th of mb ..100 kb.


module.exports = {
   /* 
    index: function(req, res) {
      res.render('index.html');
    },
    */
    
    
    getPlatform : function(req, res) {
         res.send( {"links":[{"label":"Home","key":"front","path":"/"},{"label":"Sonic Dashboard","key":"userDashboard","path":"/myDashboard"},{"label":"About","key":"about","path":"/about"}]});
    },

   // app.post('/uploadBeat...)
    handleUpload : function (req, res, next) {
           console.log(req.files);
    },

    // app.get('/login'...)
    login: function(req, res) {
        res.send(200, {user:req.user});
    },
    
    userDashboard: function(req, res, next){
        User.findOne({'_id':req.user._id}, function (err, user) {
             if (err) { 
            	  console.log("[platformschema]--- userDashboard  --- =ERR")
            	  next(err);
             }
             res.send(200, {user:user, beats:{ beat:{
            	                                     title:"YOu Got it Made",
            	                                     genre:"Hip Hop",
            	                                     genreStyle: "Southern Bounce"
            	                                     }
                                              } 
                            });
         });
     },
    // app.get('/logout'...)
     logout: function (req, res){
         res.redirect('/');
    }
 };

/*module.exports = {

   // app.get('/'...)
   index: function(req, res) {
      res.render('index.jade', {
         title: app.locals.config.name,
         user: req.user
      });
   },

   // app.get('/about'...)
   about: function(req, res) {
      res.render('about.jade', {
         title: 'About ' + app.locals.config.name,
         user: req.user
      });
   },

   // app.get('/about/tos'...)
   tos: function(req, res) {
      res.render('tos.jade', {
         title: app.locals.config.name + ' Terms of Service',
         user: req.user
      });
   },

   // app.get('register'...)
   getRegister: function (req, res) {
      res.render('register.jade', {
          title: 'Register for '+app.locals.config.name,
          user: req.user
      });
   },

   // app.get('/checkExists')
   checkExists: function(req, res, next) {
      var data = req.query;
      var query = {};
      if (data.username) {
         query['username'] = data.username;
      } else if (data.email) {
         query['email'] = data.email;
      } else {
         res.send(400, {'message':'Invalid Request'});
      }
      User.findOne(query, function(err, user) {
         if (err) {
            res.send(500, err);
         } else if (user) {
            res.send(409, {'message':'User Exists'});
         } else {
            res.send(200, {'message':'All Clear'});
         }
      });
   },

      // app.post('/register'...)
   postRegister: function (req, res, next) {
      var user = new User(req.body);
      user.save( function (err) {
         if (err) { next(err); }
         res.redirect('/profile');
      });
   },

   // app.get('/profile')
   profile: function (req, res, next) {
      User.findOne({'_id':req.user._id}, function (err, user) {
         if (err) { next(err); }
         res.render('profile.jade', {
            title: user.name.first + '\'s Profile',
            user: user
         });
      });
   },

      // app.get('/logout'...)
   logout: function (req, res){
        req.logout();
        res.redirect('/');
   }
};*/