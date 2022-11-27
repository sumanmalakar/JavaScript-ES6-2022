// Show user a singout button if he is authenticated,
// other wise show him option to Login/Signup

var authenticated = false;

// if(authenticated){
//   console.log("Show signout button");
// }else{
//   console.log("Show login option")
// }

authenticated ? console.log("Show singout button") : console.log("show login option");