app.controller("myctrl",($scope,myfactory)=>{
    
     $scope.showclass = false;
   $scope.movex = true;
    if(localStorage.storedata){
 myfactory.loaddata()
    }
   
   $scope.counter= myfactory.loadcounter();
   console.log($scope.counter);
    $scope.mystore= function(id){
         myfactory.saveid(id);
        var promise =  myfactory.productserver(id);
         promise.then(function(data){
        console.log(data)


       $scope.mydata = data;
       
      },function(err){
        alert("err");   
    } )
         datalogo(id);
     }
    load_id();
     getdata();
    
    
//    $scope.mydata = myfactory.load(); 
   
function load_id(){
    var id = myfactory.load();
    console.log(id)
   $scope.mystore(id);
    
}
  
    function getdata(){
    var promise = myfactory.callserver();
    promise.then(function(data){
        console.log(data)
       $scope.storedata = data;
      

        console.log($scope.storedata);
      },function(err){
        alert("err");   
    } );
    }
      
    $scope.addsidebar = ()=>{
        $scope.movex = !$scope.movex;
    }
$scope.addstore = ()=>{
    $scope.showclass = !$scope.showclass;
    
}
    

     $scope.addmodal = (data)=>{
         $scope.modal = data;
     }
 
     
     
     
     function datalogo(id){
           var promise = myfactory.storeserver(id);
    promise.then(function(data){
        console.log(data)
       $scope.StoreLogo = data.StoreLogo;
       
      },function(err){
        alert("err");   
    } );
     }
         
    $scope.addtocart = (modal)=>{
//       var len = myfactory.arrlength();
//        console.log(len)
//        if(len==0){
//             myfactory.addproduct(modal)
//        }
        
//        else{
       var match =  myfactory.check(modal)
   
       if(match.length==1){
          alert("already present in cart")
       }
        else{
        
        modal.quantity = $scope.quantity;
         myfactory.addproduct(modal)
       
        $scope.counter = myfactory.arrlength();
            myfactory.savecounter($scope.counter)
         Notification.requestPermission(function(){
            var n = new Notification("Halanx", {
                body : "ADDED TO CART",
                icon : "images/success.png"
            });
           },1000);
        }

        
        
    }
     
    
    
});