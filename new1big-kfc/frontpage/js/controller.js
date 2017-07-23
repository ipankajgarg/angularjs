app.controller("myctrl",($scope,myfactory)=>{
    storename();
    function storename()
    {var promise = myfactory.callserver();
    promise.then(function(data){
        console.log(data)
       $scope.stores = data;
        console.log($scope.stores)
      },function(err){
        alert("err");   
    } );
    }
  
    $scope.select=(store)=>{
        console.log(store)
        myfactory.save(store.id)
    }
   
})