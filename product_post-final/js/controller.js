app.controller("myctrl",($scope,myfactory,$base64)=>{
    $scope.hide = true;
  $scope.postdata= ()=>{            
var obj={}
               
obj.ProductName = $scope.productname
   obj.Price = $scope.productprice
               obj.Category = $scope.productcategory
//               console.log($scope.files[0].name)
//               obj.ProductImage = $scope.image
               obj.Features = $scope.productdescription
               obj.ProductSize = $scope.productsize
              obj.StoreId = $scope.availablestores
               console.log(obj)
               console.log($scope.image)
              var promise =  myfactory.callserver(obj)
               promise.then((data)=>{
                   alert("data sent")
				console.log(data)
				console.log("Get the Data in Promise...")
                image(data.id)
			},(err)=>{
				alert("data not sent")
				
			})
               
               
               
               }
  
  $scope.try = ()=>{
      console.log($scope.files[0].name)
  }
  
  function image(id){
      var data=mydata();
      var obj ={}
      obj.ProductString = data;
      obj.ProductId = id;
    var promise =  myfactory.callimage(obj,id);
        promise.then((data)=>{
				
//				var str = data.ProductString ;
//            console.log(str)
//                console.log(data.ProductString);
            alert("image sent")
          check(data.ProductString,obj.ProductString)
			},(err)=>{
				
				alert("image not sent");
			})
  }

  
  
  
//  function image(id){
//      console.log($scope.files[0])
//      var obj = {};
//      obj.image = $scope.files[0];
//obj.ProductId = id;
//    var promise =  myfactory.callimage(obj,id);
//        promise.then((data)=>{
//				
//				var str = data.ProductString ;
//            console.log(str)
//                console.log(data.ProductString);
//          check(data.ProductString,obj.ProductString)
//			},(err)=>{
//				
//				alert("error");
//			})
//
//  }
    function mydata(){
       

    console.log($scope.vm)
    console.log($scope.vm.uploadme)
    return $scope.vm.uploadme
    }
    $scope.print = ()=>{
      console.log($scope.vm) 
     
    }
    
    
    function check(data1,data2){
        if(data1==data2){
           alert("yes") 
        }
        else{
            alert("no")
        }
    }
    
    
    
    $scope.getdata = ()=>{
     var promise =  myfactory.getproduct()
      promise.then((data)=>{
                   alert("success")
				console.log(data)
				$scope.arr = data
               
			},(err)=>{
				
				console.log("Get the Err in Promise...");
			})
    }
    
    
    $scope.filldata = (i)=>{
       $scope.productname = i.ProductName
  $scope.productprice = i.Price
              $scope.productcategory = i.Category
//               console.log($scope.files[0].name)
$scope.image = i.ProductImage
              $scope.productdescription = i.Features
               $scope.productsize = i.ProductSize
              $scope.availablestores = i.StoreId;
        $scope.myid = i.id
        alert("added")
        
        
    }
    
    $scope.update=()=>{
        var obj={}
               
obj.ProductName = $scope.productname
   obj.Price = $scope.productprice
               obj.Category = $scope.productcategory
//               console.log($scope.files[0].name)
//               obj.ProductImage = $scope.image
               obj.Features = $scope.productdescription
               obj.ProductSize = $scope.productsize
              obj.StoreId = $scope.availablestores
               console.log(obj)
               console.log($scope.image)
               console.log($scope.myid)
              var promise =  myfactory.updateserver(obj,$scope.myid)
               promise.then((data)=>{
                   alert("data updated")
				console.log(data)
				console.log("Get the Data in Promise...")
                image1($scope.myid)
                console.log($scope.myid)
			},(err)=>{
				
				console.log("data not updated");
			})
               
            
        }
     function image1(id){
      var data=mydata();
      var obj ={}
      obj.ProductString = data;
      obj.ProductId = id;
    var promise =  myfactory.callimage1(obj,id);
        promise.then((data)=>{
//				alert("patch function")
//				var str = data.ProductString ;
//            console.log(str)
//                console.log(data.ProductString);
            console.log("image updated")
          check(data.ProductString,obj.ProductString)
			},(err)=>{
				
				alert("image not updated");
			})
  }

    
    
    
//function check(data){
//            var decoded = $base64.decode(data);
//        console.log(decoded) 
//}
////    
////    function go(data){
////       
////     
////        var json = JSON.stringify(data)
//////       localStorage.setItem("convert", json);
//////       var use = localStorage.getItem("convert")
////       console.log(json)
////       return json;
//    
////   }
//    function mydata(data){
//   var encoded = $base64.encode(data);
//        console.log(encoded)
//         var decoded = $base64.decode(encoded);
//        console.log(decoded)
//        return encoded
////        var urlSafeBase64EncodedString = encodeURIComponent(encoded);
////        return urlSafeBase64EncodedString ;
//        
//        
////        var encodedString = btoa(data);
////        console.log(encodedString)
////        var decodedString = atob(encodedString)
////        console.log(decodedString)
////        
////        return encodedString ;
//    }
    

//    function getBase64Image(base64string) {
//    return base64string.replace(/^data:image\/(png|jpg);base64,/, "");
//}
//    
//   function go(data){
//var imgData = JSON.stringify(data);
//        return imgData;
//    }
    
   
    
//    function getBase64Image(string){
//    var encodedString = btoa(string);
//    
//console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"
//        return encodedString 
//    }
    
//    function getBase64Image(string){
//    var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
//
//
//
//// Encode the String
//var encodedString = Base64.encode(string);
//console.log(encodedString)
//return encodedString;
//    }
    
    
    
    
//    var Base64 = {
//
//// private property
//_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
//
//// public method for encoding
//encode : function (input) {
//    var output = "";
//    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
//    var i = 0;
//
//    input = Base64._utf8_encode(input);
//
//    while (i < input.length) {
//
//        chr1 = input.charCodeAt(i++);
//        chr2 = input.charCodeAt(i++);
//        chr3 = input.charCodeAt(i++);
//
//        enc1 = chr1 >> 2;
//        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
//        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
//        enc4 = chr3 & 63;
//
//        if (isNaN(chr2)) {
//            enc3 = enc4 = 64;
//        } else if (isNaN(chr3)) {
//            enc4 = 64;
//        }
//
//        output = output +
//        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
//        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
//
//    }
//
//    return output;
//},
//        _utf8_encode : function (string) {
//    string = string.replace(/\r\n/g,"\n");
//    var utftext = "";
//
//    for (var n = 0; n < string.length; n++) {
//
//        var c = string.charCodeAt(n);
//
//        if (c < 128) {
//            utftext += String.fromCharCode(c);
//        }
//        else if((c > 127) && (c < 2048)) {
//            utftext += String.fromCharCode((c >> 6) | 192);
//            utftext += String.fromCharCode((c & 63) | 128);
//        }
//        else {
//            utftext += String.fromCharCode((c >> 12) | 224);
//            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
//            utftext += String.fromCharCode((c & 63) | 128);
//        }
//
//    }
//
//    return utftext;
//}
//    }

    
               })