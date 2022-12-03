var user  = {
  firstName : "Suman",
  lastName  : "Malakar",
  role : "Admin",
  loginCount : 32,
  facebookSignedIn : true
} 

console.log(user.firstName, user.role);

console.log(user["lastName"]);

console.log(user.loginCount)
user.loginCount = 44;
console.log(user.loginCount)

console.table(user)