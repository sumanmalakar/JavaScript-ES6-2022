// import User from "./06_classes";

const User = require("./06_classes");

const suman = new User("suman", "malakars041@gmail.com")

console.log(suman.getInfo());
suman.enrollCourse("php");
suman.enrollCourse("Angular");

console.log(suman.getCourseList())

let courses = suman.getCourseList();

courses.forEach( (c)=> console.log(c))