// Load all of the plugin dependencies

steal( 
	   'sonicplatform/router',
	   'sonicplatform/navigator',
	   'sonicplatform/login',
	   'sonicplatform/registration',
	   'sonicplatform/DashboardModule',
	   'jquery',
	   'bootstrap',
	   'can/observe',
	   function( Router, Navigator, Login, Registration, DashboardModule){
	    var currentBaseView = 'home';
	    var userState = new can.Observe();
    	removeController = function (){
	        steal.dev.log("[Sonicplatform.js]---- removeController  currentBaseView =" + currentBaseView);
	        document.getElementById(currentBaseView).innerHTML='';
    	}
    	
    	loadController = function(controller){
	         steal.dev.log("[Sonicplatform.js]---- loadController  controller =" + controller);
	         switch(controller){
	           case "login":
       	            Login = new Login("#userLogin", {
       	        	  userState:userState
           	       });
           	       currentBaseView = 'userLogin';
	           break;
	           case "registration":
       	            Registration = new Registration("#userRegistration", {
       	        	    userState:userState
           	       });
           	       currentBaseView = 'userRegistration';
	           break;
	           case "userDashboard":
	        	   DashboardModule = new DashboardModule("#userDashboard", {
	        		 userState:userState
	           	   });
	           	  currentBaseView = 'assetUploader';
		       break;
	         
	         }
    	}
	   
	    // Create the state that will be shared by everything
	    steal.dev.log("[Sonicplatform.js]---- inside first function");
	  
        Navigator =  new Navigator("#navigator", {
    	      mostCurrentNocs:"go there"
    	});
    	
    	
        
    	Router = new Router(window, {
    		userState:userState
	       });
});
      
      
      

