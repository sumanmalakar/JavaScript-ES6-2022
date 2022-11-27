// Create an application with following rules:
// admin - gets full access
// subadmin - gets access create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "admin";

switch (user) {
  case "admin":
    console.log("You get full access")
    break;
  case "Subadmin":
    console.log("gets access create/delete courses")
    break;
  case "testprep":
    console.log("gets access to create/delete tests")
    break;
  case "user":
    console.log("gets access to consume content")
    break;

  default:
    console.log("Trail user")
    break;
}