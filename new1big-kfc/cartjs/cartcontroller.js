app.controller("cartctrl",function($scope,myfactory){
    
    autoload();
    
    
    function autoload()
 {
       
     $scope.cartproductlist = myfactory.load();
    $scope.totalamount   = myfactory.calculatetotal($scope.cartproductlist)
    if($scope.cartproductlist.length==0){
          $scope.emptyclass = false;
        $scope.cartclass = true;
    }
     else{
          $scope.emptyclass = true;
     $scope.cartclass = false;
     }
 }

    $scope.deleteproduct = (list)=>{
         console.log(list)
       list.Active = false;
        console.log(list)
     var finalarr =    myfactory.filterfunction($scope.cartproductlist)
     $scope.cartproductlist = finalarr;
        $scope.totalamount = myfactory.calculatetotal($scope.cartproductlist)
         var json = JSON.stringify($scope.cartproductlist)
          localStorage.setItem('storedata',json);
          console.log(localStorage)
          myfactory.load();
        var len = myfactory.cartlength($scope.cartproductlist);
         var json = JSON.stringify(len)
          localStorage.setItem('counter',json);
        if($scope.cartproductlist.length==0){
          $scope.emptyclass = false;
        $scope.cartclass = true;
    }
     else{
          $scope.emptyclass = true;
     $scope.cartclass = false;
     }
    }
    
   $scope.updateminus= (list)=>{
    list.quantity--;
     
       
       $scope.totalamount=myfactory.calculatetotal($scope.cartproductlist)
        var json = JSON.stringify($scope.cartproductlist)
          localStorage.setItem('storedata',json);
   }
   $scope.updateplus = (list)=>{
     
       
       list.quantity++;
      
    $scope.totalamount   = myfactory.calculatetotal($scope.cartproductlist)
     var json = JSON.stringify($scope.cartproductlist)
          localStorage.setItem('storedata',json);
   }
//   $scope.submitcart = ()=>{
//       var obj = {};
//       obj.arr = $scope.cartproductlist
//      console.log( $scope.cartproductlist)
//      var promise = myfactory.callserver( obj)
//       promise.then(function(data){
//        console.log(data)
//    },
//                 function(err){
//        alert("err")
//        
//    }
//                )
//   }
   
   
})