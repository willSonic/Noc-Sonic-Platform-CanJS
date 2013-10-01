// Load all of the plugin dependencies

steal(
	   'sonicplatform/router',
	   'sonicplatform/navigator',
	   'sonicplatform/login',
	   'sonicplatform/registration',
	   function( Router, Navigator, Login, Registration){
	    var currentBaseView = 'home'
	   
    	removeController = function (){
	        steal.dev.log("[Sonicplatform.js]---- removeController  currentBaseView =" + currentBaseView);
	        document.getElementById(currentBaseView).innerHTML='';
    	}
    	
    	loadController = function(controller){
	         steal.dev.log("[Sonicplatform.js]---- loadController  controller =" + controller);
	         switch(controller){
	           case "login":
       	         Login = new Login("#userLogin", {
           	            mostCurrentNocs:"go there"
           	       });
           	       currentBaseView = 'userLogin';
	           break;
	           case "registration":
       	          Registration = new Registration("#userRegistration", {
           	            mostCurrentNocs:"go there"
           	       });
           	       currentBaseView = 'userRegistration';
	           break;
	         
	         }
    	}
	   
	    // Create the state that will be shared by everything
	    steal.dev.log("[Sonicplatform.js]---- inside first function");
	  
        Navigator =  new Navigator("#navigator", {
    	      mostCurrentNocs:"go there"
    	});
    	
    	
        
    	Router = new Router(window);
});
      
      
      

