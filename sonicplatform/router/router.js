
steal('can',
	  'can/observe',
      'can/control/route',
	  function(can, route) {

	return can.Control(

	/* @prototype */
	{
	    defaults:{
	       userState:null,
	       appControl:null
	    },
	
         init: function(element, options) {
              this.options.userState  = options['userState'];
              this.options.appControl = this.element[0];
    	 },
         
    	 
         ":type route" : function(data) { 
             steal.dev.log("[Router] :type route -- data.type ="+data.type); 
             switch(data.type){
               case 'login':
            	   this.options.appControl.removeController();
            	   this.options.appControl.loadController('login', this.options.userState);
                   can.route("#!login");
               break;
               case 'registration':
            	   this.options.appControl.removeController();
            	   this.options.appControl.loadController('registration', this.options.userState);
                   can.route("#!registration");
               break;
               case 'about':
                   this.options.appControl.removeController();
                   this.options.appControl.loadController('about', this.options.userState);
                   can.route("#!about");
               break;
               case 'dashboard':
        	      if(this.options.userState.loggedInUser){
        	    	  this.options.appControl.removeController();
        	    	  this.options.appControl.loadController('userDashboard', this.options.userState);
                      can.route( "dashboard");    
        	       }else{ 
        	             steal.dev.log("[Router] :type route..dashboard/login");
        	             can.route.attr({route:"type", type:"login"});
        	             //can.route("#!login");
        	            // window.location.hash ="/login";
                       //  can.route.attr({type:"login"});
                       //can.route("#!/login");
        	    	   //as user is not available re-route to log in view
                	//    this.options.appControl.removeController();
                	 //   this.options.appControl.loadController('login', this.options.userState);
                       //can.route.attr({route:"type", type:"/login"});
                     //  can.route.attr("route", "type");
                     //  can.route( "/login");    
        	       }
               break;
             
             }
         },

         
         "route" : function(data){
              steal.dev.log("[Router] catchall route"); 
         }
    	
    	
     });
});
	 