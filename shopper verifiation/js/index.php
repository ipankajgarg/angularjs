<?php


session_start();
 
$user['mobilenumber']= $_SESSION['mobilenumber'];


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
     
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>

 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
 <link rel="stylesheet" href="assets/css/style.css">
 <script src="libs/angular.min.js"></script>
 <script src="js/module.js"></script>
 <script src="js/factory.js"></script>
 <script src="js/controller.js"></script>
</head>
<body ng-app = "myapp" ng-controller="myctrl" style="background-color: #f7f7f7;">
 <div id="controller">
      <div id="header">
      <div class="container-fluid">
           <div class="row"> 
                   <div class="  col-md-3 col-sm-4 col-9">
                       <div class="logo">
                           <img src="../images/logo.png" alt="image" >
                           <span>halanx</span>
                           
                       </div>
                       
                   </div>
<!--
                  
-->
                       <div class="col-md-2 offset-md-7 col-sm-2 offset-sm-6 col-3" >
                           <div class="logout_btn">
                               <a href="">logout</a>
                           </div>
                       </div>

               </div>
      </div>
  </div>
      <?php

                  echo "Your Account id is: ".$_SESSION['mobilenumber']." ";

                  ?>
  <div id="content">
  <div class="container-fluid">
      <div class="row">
      <div class="col-12">
             <div class="storelist">
          <ul>
             <a href="../main.html" class="block">
              <li ng-repeat= "store in stores" ng-click="select(store)">
                 <div class="image">
                    <a href="../main.html"> <img ng-src="{{store.StoreLogo}}" alt=""></a>
                 </div>
                  <a href="../main.html">{{store.StoreName}}</a>
              </li>
              </a>
          </ul>
         
      </div> 
      </div>
        </div>
  </div>

  </div>
 </div> 
 <div class="row">
 <?php

                  echo "Your Account id is: ".$_SESSION['mobilenumber']." ";

                  ?>
 </div>  
</body>
</html>
