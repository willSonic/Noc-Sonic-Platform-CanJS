
steal('can',
      'can/view/mustache',
	  'sonicplatform/models/platformschema.js', 
	   function( can, Mustache, Platformschema) {



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
	    },
	
        init: function(element, options) {
             steal.dev.log("Calling Platformschema from this.element = "+this.element[0]);
             this.instance = Platformschema.findOne({}, this.schemaResult);
    		                                              
    	},
    	
	    schemaResult :function(dataModel, attemptState, resObject){
	    	var jsonObj = JSON.parse(resObject.responseText);
            var renderer = can.view('//sonicplatform/navigator/templates/navbar.mustache', {href:"#!/login", label:"Login", navSchema:jsonObj.links});
            document.getElementById('navigator').appendChild(renderer);
	    }
    	
    	
    	
     });
});
	 