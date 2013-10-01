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
           return $.ajax({
             url: '/recipes.json',
             type: 'get',
             dataType: 'json'})
         },
         
         findOne : function(params){
           return $.ajax({
             url: '/user/' + params.id,
             type: 'get',
             dataType: 'json'})
         },
         
         update : function(id, attrs ) {
    			return $.post("/user/"+id+".json",attrs, null,"json");
  		 },
  		 
         create : function( attrs ){
               return can.post("/user.json",attrs, undefined ,"json");
         },
         
         destroy : function(id){
            return can.post("/user/destroy/"+id,{});
         }
            
        },  { 
        
        
        });
});