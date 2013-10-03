
steal('can',
      'can/view/mustache',	  
      'sonicplatform/models/beat.js',
	  'sonicplatform/models/user.js', 
	function( can, Registration) {



	/**
	 * @constructor sonicplatform/menu
	 * @parent menu
	 * @inherits can.Control
	 * @test srchr/history/test.html
	 * @demo srchr/history/history.html
	 */
	return can.Control({
	    defaults:{
	    
	    },
	
    	init : function(){
    		 steal.dev.log("Calling MENU from init");
             var el = this;
    		 var renderer = can.view('//sonicplatform/menu/templates/menuhorizontal.mustache', {});
             document.getElementById(this.element[0].id).appendChild(renderer);
    	},
    	
    	registrationLoaded : function(result){
    	},
    	
    	'button[type=submit] click' : function(el, ev){
	         ev.preventDefault();
	         ev.stopPropagation();
    		 steal.dev.log("Calling MENU from input[submit] click");
    		 return;
    	}
     });
});
	 