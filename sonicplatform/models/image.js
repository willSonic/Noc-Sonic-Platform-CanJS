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
             url: '/image.json',
             type: 'get',
             dataType: 'json'})
         },
          
         findOne : function(params, success){
           return $.ajax({ url: '/image',  type: 'GET',  data:params,  dataType: 'json',  success:success})
         },
          
         update : function(id, attrs ) {
                return $.ajax("/image/"+id+".json",attrs, null,"json");
         },
          
         create : function(params, success){
             return $.ajax({ url: '/image',  type: 'POST',  data:params,  dataType: 'json',  success:success})
         },
          
         destroy : function(id){
            return can.post("/image/destroy/"+id,{});
         }
             
        },  {
         
         
        });
});