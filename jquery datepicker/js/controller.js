   app.controller("myctrl",($scope,myfactory)=>{
//        $scope.getdate = ()=>{
//            alert("hello")
//            console.log($scope.date)
//        }
       autocall();
        function autocall(){
            $scope.desired = myfactory.desired();
            $scope.time = myfactory.time();
            $scope.mytime = true;
        }
       $scope.changeschedule = (i)=>{
            myfactory.check($scope.desired)
            if(i.service=="schedule for later"){
                $scope.mytime = false;  
            }
           else{
            $scope.mytime = true;   
           }
           i.mark = !i.mark;
       }
             $scope.timeadded=(i)=>{
           console.log("hello")
//           check($scope.time)
             myfactory.check($scope.time)
           i.mark = !i.mark
          
       }
             $scope.postdata = ()=>{
                 
     var date = $("#hw_datepicker").val()
                 var obj = {};
                 if(date==""){
                     alert("please enter a date")
                 }
                 obj.date =date
                 console.log(obj.date)
                  var data= myfactory.gettrue($scope.desired)
                  if(data.service=="schedule for later"){
                 obj.schedule = data.service;
                     var time =  myfactory.gettrue($scope.time)
                     obj.time=time.timing
                  console.log( obj.schedule)
                  post(obj)
                  }
                 else{
                     obj.schedule = data.service
                     post(obj)
                 }
             }
             function post(obj){
                 alert("hello")
                 console.log(obj)
             }
        
    })