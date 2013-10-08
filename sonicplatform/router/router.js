
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
	       updateController:null,
	    },
	
         init: function(element, options) {
              this.options.updateController = options['updateController'];
              steal.dev.log("[Router] init this.element = "+this.element[0]);      
    	 },
    	
        ":type route" : function(data) {
             switch(data.type){
               case '/login':
                   steal.dev.log("[Router] type ---  /login ---"); 
                   this.element[0].removeController();
                   this.element[0].loadController('login');
                   can.route("/login");
               break;
               case '/registration':
                   steal.dev.log("[Router] type ---  /registration ---"); 
                   this.element[0].removeController();
                   this.element[0].loadController('registration');
                   can.route("/registration");
               break;
               case '/myDashboard':
                   steal.dev.log("[Router] type ---  /myDashboard ---"); 
                   this.element[0].removeController();
                   this.element[0].loadController('userDashboard');
                   can.route("/myDashboard");
               break;
             }
              steal.dev.log("[Router] type route"); 
         },

         '{userState} loggedInUser': function(Construct, event, loggedInUser){
        	 steal.dev.log("Router... userSTate");
        	 
         },
         
         ":myDashboard route" : function(data) {
               steal.dev.log("[Router] myDashboard route"); 
          },
         
        ":login route" : function(data) {
              steal.dev.log("[Router] login route"); 
         },
         "sonic-collection/:id route" : function(data) {
              steal.dev.log("[Router] type sonic-collection/:id"); 
         },
         
         "route" : function(data){
              steal.dev.log("[Router] catchall route"); 
         }
    	
    	
     });
});
	 