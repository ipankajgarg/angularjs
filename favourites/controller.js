app2.controller("myctrl",($scope,myfactory)=>{
      callfav();
    myfactory.loaddata()
    function callfav(){
var mobilenumber=localStorage.getItem("mobilenumber");
//        var mobilenumber = 9711556178;
       var promise = myfactory.favlist(mobilenumber);
               promise.then(function(data){
        console.log(data.FavoriteItems);
$scope.arr = data.FavoriteItems;
      },function(err){
        alert("err");   
    } )
    }
    $scope.add = (data)=>{
        console.log(data)
        data.quantity = 1;
            var match =  myfactory.check(data)
   
       if(match.length==1){
          alert("already present in cart")
       }
        else{
         myfactory.addproduct(data)
       
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
})
    