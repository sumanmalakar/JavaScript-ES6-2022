// Allow user to access course if he is:
// logged in from email
// logged in from Google 
// logged in from Facebook

var email = false;
var facebook = false;
var google = false;

if(email || facebook || google){
  console.log("Login Success");
}else{
  console.log("Please login..")
}