app.factory("myfactory",($http,$q)=>{
    var object = {
         arr : [],
        callserver : function(){
         var pr = $q.defer();
         var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/";
        
                
         $http.get(url).then(function(data){
             pr.resolve(data.data)
             console.log("success")
           
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
     } , 
       storeserver : function(id){
           console.log(id)
         var pr = $q.defer();
         var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/"+id;
        
                console.log(url)
         $http.get(url).then(function(data){
             pr.resolve(data.data)
             console.log("success")
           
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
     },
        productserver : function(id){
         var pr = $q.defer();
         var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/"+id+"/products";
        
                
         $http.get(url).then(function(data){
             pr.resolve(data.data)
             console.log("success")
           
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
     },
        load : function(){
           
              var usedata = localStorage.getItem("storeid")
              console.log(usedata)
          pushdata=JSON.parse(usedata)
          return pushdata;
        },
        loaddata : function(){
            var usedata = localStorage.getItem("storedata")
              console.log(usedata)
          this.arr=JSON.parse(usedata)
        } ,
        loadcounter : function(){
            
           var usedata = localStorage.getItem("counter")
              
          var counter=JSON.parse(usedata)
          console.log(counter)
          return counter;
        },
        saveid : function(data){
                     var json = JSON.stringify(data)
         localStorage.setItem('storeid',json);
            console.log(localStorage)
        },
        savedata : function(arr){
                  var json = JSON.stringify(arr)
         localStorage.setItem('storedata',json);
            console.log(localStorage)
        },
        savecounter : function(counter){
            console.log(counter)
                   var json = JSON.stringify(counter)
         localStorage.setItem('counter',json);
        },
            addproduct : function(modal){
             
                
                console.log(modal)
                this.arr.push(modal)
                console.log(this.arr)
                this.savedata(this.arr)
            },
        check : function(modal){
       console.log("modal"+modal)
      
      var match =  this.arr.filter(function(obj){
           return obj.id == modal.id
       })
      
         return match;
      },
        arrlength : function(){
           
//            if(this.arr==null){
//                return 0
//            }
//            else{
        return this.arr.length;
    
        }
    }
    return object
})