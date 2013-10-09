
steal('can',
      'can/view/mustache',   
       'sonicplatform/models/user.js',
       function( can, Mustache, User) {
 
    /**
     * @constructor srchr/history
     * @parent srchr
     * @inherits can.Control
     * @test srchr/history/test.html
     *
     * Saves a list of [srchr/models/search] instances
     * in local storage and allows you to remove these
     * instances and set them as the new `currentSearch`.
     *
     * Create a `History` control with a compute representing
     * the current search like:
     *
     *     var currentSearch = can.compute(
     *           new Search({
     *             query: "ice cream",
     *             types: ["Flickr","Google"]})
     *     );
     *     new History("#list", {
     *       currentSearch: currentSearch
     *     });
     *
     * @demo srchr/history/history.html
     */
    return can.Control.extend({
        defaults:{
        	userState:null,
            loginLock: true,
            user:null
        },
     
        init: function(element, options) {
             steal.dev.log("[Login] from this.element = "+this.element[0]);
             this.options.userState  = options['userState'];
             var el = this;
             var renderer = can.view('//sonicplatform/login/templates/login.mustache', {});
             document.getElementById(this.element[0].id).appendChild(renderer);
                                                           
        },
         
        "#login-button click" : function(el, ev){             
            ev.preventDefault();
            ev.stopPropagation();
            if(!this.loginLock){
                this.loginLock = true;
                var self = this;
                User.findOne({username:el[0].form.username.value, password:el[0].form.password.value},function(result){
                	self.userFound(result);
                });
            }
        },
         
        userFound : function(modelUser){
        	this.options.user  = new User({id:modelUser._data.user._id,
        								   firstname:modelUser._data.user.name.first,
        								   lastname:modelUser._data.user.name.last,
        								   username:modelUser._data.user.username,
        								   email:modelUser._data.user.email,
        								   sonicRole:modelUser._data.user.sonicRole,
        								   loggedIn:true});
        	this.options.userState.attr('loggedInUser', this.options.user);
        	steal.dev.log('[Login Controler]--- this.options.userid ='+this.options.user.id);
             
        }
   });
});