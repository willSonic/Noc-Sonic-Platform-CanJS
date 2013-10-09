// Route Definitions
var passport = require('passport');
var User = require('./models/user');
var fileupload = require('fileupload').createFileUpload('./uploadBeat').middleware;

//Include Routing Subfiles
var platform = require('./routes/platformschema');


/**
 * function restrict(req, res, next) {
 * This function checks to see if the user is logged in, 
 * and can be used in any route that requires auth
 */
function restrict(req, res, next) {
	  console.log("[routes.js]--restrict --- req.user ATTEMPT");
  if (req.user) {
	  console.log("[routes.js]--restrict --- req.user PRESENT");
      next();
  } else {
	  console.log("[routes.js]--restrict --- req.user NOT-PRESENT");
      res.redirect('/login');
  }
}

function fileUploadSetUp(req, res, next) {
	if(req.user) {
		 req.files.file['updatePath']="moozungu";
		 next();
 	 } else {
 	    res.redirect('/login');
 	 }
}

/**
 * function isAdmin(req, res, next)
 * This function checks to see if the user is an admin of the site
 * If not, redirects them away
 * 
 */
function isAdmin(req, res, next) {
  if (req.user.role==='admin') {
     next();
  } else {
     res.redirect('/');
  }
}

module.exports = function(app){
// be sure to put any variable routes after any static routes (same path)
   /**
    * Home Routes - Home page, about, contact, etc
    */
   
 //  app.get('/login', platform.login);
   // TODO: Figure out how to present failure messages to user
   app.post('/login',
   passport.authenticate('local', {
      failureRedirect: '/login'
   }),
   function (req, res) {
	console.log("[routes.js]--post /loging ---req._passport.session.user._id ="+ req._passport.session.user._id );
	  req.session['sessionStart'] = Date.now();
	  res.cookie('user_id',  req._passport.session.user, {expires: 0});
      res.send(200, {user:req.user});
   });

   app.use('/dashboard', restrict, platform.userDashboard);
   
   app.post('/uploadBeat', fileUploadSetUp, fileupload, platform.handleUpload);
   
   app.get('/platformschema',   platform.getPlatform);
   app.get('/about',   platform.getPlatform);
   
   
 /*  app.get('/logout', restrict, home.logout);
   app.get('/about', home.about);
   app.get('/about/tos', home.tos);
   app.get('/register', home.getRegister);
   app.post('/register', home.postRegister);
   app.get('/checkExists', home.checkExists);
   app.get('/profile', restrict, home.profile);*/

};