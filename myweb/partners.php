<?php
 
require_once 'partners/DB_Functions.php';
$db = new DB_Functions();
 
// json response array
$response = array("error" => FALSE);
 
if (isset($_POST['storename']) && isset($_POST['storeaddress']) &&isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['mobilenumber']) && isset($_POST['email']) && isset($_POST['password'])) {
 
    // receiving the post params
    $storename = $_POST['storename'];
    $storeaddress=$_POST['storeaddress'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $mobilenumber=$_POST['mobilenumber'];
    $email=$_POST['email'];
    $password=$_POST['password'];
 
    // check if user is already existed with the same email
    if ($db->isUserExisted($mobilenumber)) {
        // user already existed
        //$response["error"] = TRUE;
        $response["error_msg"] = "User already existed with " . $mobilenumber;
        echo json_encode($response);
    } else {
        // create a new user
        $user = $db->storeUser($storename,$storeaddress,$firstname,$lastname,$mobilenumber,$email,$password);
        if ($user) {
            // user stored successfully
            //$response["error"] = FALSE;
            //$response["uid"] = $user["unique_id"];
            //$response["user"]["firstname"] = $user["firstname"];
            //$response["user"]["lastname"]=$user["lastname"];
            //$response["user"]["email"] = $user["email"];
            //$response["user"]["mobilenumber"]=$user['mobilenumber'];
            //$response["user"]["created_at"] = $user["created_at"];
            //$response["user"]["updated_at"] = $user["updated_at"];
            $response["user"]="You have successfully registered.Please login to continue.";
            //echo json_encode($response);
        } else {
            // user failed to store
           // $response["error"] = TRUE;
            $response["error_msg"] = "Unknown error occurred in registration!";
            //echo json_encode($response);
        }
    }
} else {
    //$response["error"] = TRUE;
    //$response["error_msg"] = "Required parameters (name, email or password) is missing!";
    //echo json_encode($response);
}
?>



<!DOCTYPE html>
<html>
<head>
   <title>Halanx-'Everyone's Personal Shopper'</title>
   <meta content="width=device-width, initial-scale=1.0" name="viewport" >
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
   <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
  <title>Halanx-'Everyone's Personal Shopper'</title>
  <meta name="robots" content="index,follow">
  <meta name="description" content="Get groceries and meals delivered from your favourite store and restaurant in as little as an hour.">
  <meta name="keywords" content="groceries,foods,meals">
   <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="theme-color" content="#ffffff">
   <meta property="og:locale" content="noodp"/>
  <link rel="canonical" href="http://www.halanx.com/"/>
  <meta name="robots" content="en_GB"/>
  <meta property="og:type" content="website"/>
  <meta property="og:description" content="Halanx-Everyone's Personal Shopper"/>
  <meta property="og:url" content="http://halanx.com"/>
  <meta property="og:site_name" content="Halanx">
  <meta name="twitter:card" content="summary"/>
  <meta name="twitter:description" content="Get groceries and meals delivered from your store and restaurant in as little as an hour"/>
  <meta name="twitter:title" content="Halanx-'Everyone's Personal Shopper">
  <link rel="stylesheet" href="partners.css">
</head>


<body>

<nav class="navbar navbar-fixed-top" role="navigation">
   <div class="container-fluid">
       <!-- add header -->
       <div class="navbar-header">
           <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar1">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
           </button>
           <a class="navbar-brand" href="index.html"><img src="https://s3-us-west-2.amazonaws.com/halanx-web/logo.png" class="img-responsive img-circle" width="50" height="50"> </a>
           <a class="navbar-brand navbar-bg" href="index.html">Halanx</a>
       </div>
       <!-- menu items -->
       <div class="collapse navbar-collapse" id="navbar1">
           <ul class="nav navbar-nav navbar-right">
              <button class="btn btn-danger btn-md pull-right"> Login </button>

           </ul>
       </div>
   </div>
</nav>

<div class="container">
<h1></h1>
</div>

<div class="container">
<h1></h1>
</div>

<div class="container-fluid bg1">
	<div class="row">


	  <div class="col-md-3">
      <div class="row row_4">Grow your Business</div>
      <div class="row_2">1. Get more customers with less staff.</div>
      <div class="row_3">Our app and site will put your products in front of whole team</div>
      <div class="row_2">2. Do what you care about</div>
      <div class="row_3">We will take care of customers and logistics before,during and after delivery.</div>
      
      
      </div>


    	<div class="col-md-5">
      		<form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="signupform">
        		<fieldset>
          		<legend>Apply Today!</legend>

            	<div class="form-group">
              	<label for="name">Store Name</label>
                <input type="text" name="storename" placeholder="Enter the Store Name"   class="form-control" id="storename"/>
                </div>

              	<div class="form-group">
                <label for="lastname">Store Address</label>
                <input type="text" name="storeaddress" placeholder="Enter the Store Address"  class="form-control" id="storeaddress"/>
              	</div>

                <div class="form-group">
                <label for="name">First Name</label>
                <input type="text" name="firstname" placeholder="Enter first name"  class="form-control" id="firstname"/>
                </div>

                <div class="form-group">
                <label for="name">Last Name</label>
                <input type="text" name="lastname" placeholder="Enter lastname" required class="form-control" id="password" />
                </div>



                <div class="form-group">
                <label for="name">Mobile Number</label>
                <input type="text" name="mobilenumber" placeholder="Enter the contact number"   class="form-control" id="mobilenumber" />
                </div>

                <div class="form-group">
                <label for="name">Email Id</label>
                <input type="text" name="email" placeholder="Enter email"   class="form-control" id="email" />
                </div>

                <div class="form-group">
                <label for="name">Password</label>
                <input type="password" name="password" placeholder="Enter password"   class="form-control" id="password" />
                </div>

                <div class="form-group">
                <input type="submit" value="Continue" id="submit"   class="btn btn-danger"/>
                </div>
                </fieldset>
            </form>

			<span class="text-success"><?php if(isset($response["user"])) {echo $response["user"];}   ?></span>

        </div>

      <div class="col-md-3">
       
      <div class="row_2">1.Signup</div>
      <div class="row_3">Give us your contact info</div>
      <div class="row_2">2.We'll contact you</div>
      <div class="row_3">Our Sales team will get back to you quickly and we'll collect any more info we need to get you listed</div>
      <div class="row_2">3.Start getting orders this week</div>
      <div class="row_3">Once you're listed, you'll start receiving orders from our customers</div>
      
      </div>
 </div>
</div>

<div class="container-fluid bg3">
	<div class="row row_11">
		<div class="col-md-2 text-center"><a  href="aboutus.html">About Us</a></div>
		<div class="col-md-2 text-center"><a  href="#">Careers</a></div>
		<div class="col-md-2 text-center"><a href="#">Blog</a></div>
		<div class="col-md-2 text-center"><a href="privacy.html">Privacy</a></div>
		<div class="col-md-2 text-center"><a href="contactus.html">Contact Us</a></div>
		<div class="col-md-2 text-center"><a href="terms.html">Terms</a></div>
	</div>

	<div class="row row_13">
		<div class="text-center center-block">
	       <a href="https://www.facebook.com/halanxtech"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
		   <a href="https://www.twitter.com/halanxtech"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
		   <a href="https://www.instagram.com/halanxtech"><i id="social-gp" class="fa fa-instagram fa-3x social"></i></a>

		</div>
	</div>



   <div class="row row_12">
	<span class="glyphicon glyphicon-copyright-mark"> Halanx 2017 </span>
   </div>
</div>


  
</body>
</html>