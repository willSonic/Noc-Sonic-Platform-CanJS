steal('can', 'can/model', function( can ) {
	
	/**
	 * @constructor sonicplaform/models/platformschema
	 * @inherits can.Model
	 * @parent sonicplaform
	 * 
	 * Provides a schema for a layout of the sites
	 * 
	 * 
	 */
	return  can.Model({
		  /*
		   *
		   */
         
           findOne : function(params, successFunc){
              return can.ajax({
                 url: '/platformschema',
                 type: 'get',
                 dataType: 'json',
                 success:successFunc});
           }
            
        },  { 
        
        
        });
});