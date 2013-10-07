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
    	 attributes:{
    		 id:"string",
    		 loggedIn:false,
    		 username:"username",
    		 role:"string",
    		 firstname:"string",
    		 lastname:"string",
    		 email:"string"
    	 },
     
         findAll : function(params){
           return $.ajax({
             url: '/recipes.json',
             type: 'get',
             dataType: 'json'});
         },
          
         findOne : function(params){
           return $.ajax({ url: '/login',type: 'POST',data:params, dataType: 'json'});
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
            setId :function(id){
            	steal.dev.log("User.Model-- setID id = "+id);
            	this.attr('id', id);
            	return id;
            },

            setUsername :function(username){
            	this.attr('username',username);
            	return username;
            }
         
        });
});