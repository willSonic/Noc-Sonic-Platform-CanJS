steal('can', function( can ) {
     
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
     
         findAll : function(params){
                return $.ajax({   url: '/beat.json',
                                 type: 'get',
                             dataType: 'json'});
         },
          
         findOne : function(params, success){
                return $.ajax({ url: '/findBeat',  
                	           type: 'GET',  
                	           data: params,  
                	       dataType: 'json',  
                	        success: success});
         },
          
         update : function(params, success ) {
                return $.ajax({ url: "/updateBeat/"+params.id+".json",
                		       data: params,
                    	       dataType: 'json',  
                   	           success: success});
         },
          
         create : function(params, success){
                 return $.ajax({ url: '/uploadBeat',  
                	            type: 'POST', 
                	            data:  params,  
                	            dataType: 'json',  
                	            success:success});
         },
          
         destroy : function(id){
                 return can.post("/beat/destroy/"+id,{});
         }
             
        },  {
         
         
        });
});