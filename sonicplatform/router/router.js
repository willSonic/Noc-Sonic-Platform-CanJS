
steal('can',
	  'can/observe',
      'can/control/route',
      'sonicplatform/models/user.js',
	  function(can, route, User) {



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
	return can.Control(

	/* @prototype */
	{
	    defaults:{
	       userState:null,
	       updateController:null
	    },
	
         init: function(element, options) {
              this.options.updateController = options['updateController'];
              this.options.userState  = options['userState'];
              steal.dev.log("[Router] init this.element = "+this.element[0]);   
    	 },
    	 
         ":type route" : function(data) {
            steal.dev.log("[Router] type ---(data.type---)  ="+data.type); 
             switch(data.type){
               case '/login':
                   steal.dev.log("[Router] type ---  /login ---"); 
                   this.element[0].removeController();
                   this.element[0].loadController('login', this.options.userState);
                   can.route("/login");
               break;
               case '/registration':
                   steal.dev.log("[Router] type ---  /registration ---"); 
                   this.element[0].removeController();
                   this.element[0].loadController('registration', this.options.userState);
                   can.route("/registration");
               break;
               case '/dashboard':
            	   if(this.options.userState.loggedInUser){
                       this.element[0].removeController();
                       this.element[0].loadController('userDashboard', this.options.userState);
                      // steal.dev.log("[Router] type ---  /dashboard ---"); 
                       can.route( "/dashboard");    
            	   }else{ 
            		   can.route.attr({route:"login", type : "/login" });  
                       /*this.element[0].removeController();
                       this.element[0].loadController('login', this.options.userState);
                       can.route("/login");*/
            	   }
               break;
               case '/about':
                   steal.dev.log("[Router] type ---  /about ---"); 
                   this.element[0].removeController();
                   this.element[0].loadController('about', this.options.userState);
                   can.route("/about");
               break;
             }
              steal.dev.log("[Router] type route"); 
         },

         "login route" : function(data) {
             steal.dev.log("[Router]login route ---"); 
             can.route({type: "/login", route:":type"});
          },
          
          
         '{userState} loggedInUser': function(Construct, event, loggedInUser){
        	 steal.dev.log("Router... userSTate");
        	 
         },
         
         ":dashboard route" : function(data) {
               steal.dev.log("[Router] dashboard route"); 
          },
         
         "sonic-collection/:id route" : function(data) {
              steal.dev.log("[Router] type sonic-collection/:id"); 
         },
         
         "route" : function(data){
              steal.dev.log("[Router] catchall route"); 
         }
    	
    	
     });
});
	 