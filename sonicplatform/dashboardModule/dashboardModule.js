
steal(
	  'can',
      'can/view/mustache',	 
	  'sonicplatform/models/user.js',
	   function( can, User) {



	/**
	 * @constructor sonicplatform/dashboardModule
	 * @parent dashboardModule
	 * @inherits can.Control
	 */
	return can.Control({
	    defaults:{
	    
	    },
	
    	init : function(){
    		 steal.dev.log("Calling DashboardModule from init");
             var el = this;
    		 var renderer = can.view('//sonicplatform/dashboardModule/templates/dashboardportal.mustache', {});
             document.getElementById(this.element[0].id).appendChild(renderer);
    	},
    	
        '.dashboardMenu a click' :function(el, ev){
             ev.preventDefault();
             $(this).tab('show');
        },
    	
    	'button[type=submit] click' : function(el, ev){
	         ev.preventDefault();
	         ev.stopPropagation();
    		 steal.dev.log("Calling MENU from input[submit] click");
    		 return;
    	}
     });
});
	 