steal('can',
      'can/view/mustache',   
       'sonicplatform/models/user.js',
       'sonicplatform/models/image.js',
       function( can, Mustache, User, Image) {
 
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
            loginLock: true
        },
     
        init: function(element, options) {
             steal.dev.log("[Login] from this.element = "+this.element[0]);
             var el = this;
             var renderer = can.view('//sonicplatform/login/templates/login.mustache', {});
             document.getElementById(this.element[0].id).appendChild(renderer);
                                                           
        },
         
        "#login-button click" : function(el, ev){             
            ev.preventDefault();
            ev.stopPropagation();
            if(!this.loginLock){
                this.loginLock = true;
                User.findOne({username:el[0].form.username.value, password:el[0].form.password.value}, this.userFound);
            }
             
            return false;
        },
         
        uploadComplete : function(modelResult){
            steal.dev.log('[Login Controler]--- loginResult ='+modelResult);
             
        }
   });
});