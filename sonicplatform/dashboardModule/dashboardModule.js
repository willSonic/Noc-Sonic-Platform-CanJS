
steal(
	  'can',
      'can/view/mustache',	 
      'static/js/jquery.min.js',
	  'sonicplatform/models/user.js',
	  'static/js/bootstrap.js',
	   function( can, Registration) {



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
    	
        '.dashboardMenu click' :function(el, ev){
             ev.preventDefault();
	         ev.stopPropagation();
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
	 