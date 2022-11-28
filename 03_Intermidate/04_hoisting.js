// var num = 2;

// function sayMe(){
//   console.log("say Me");
// }

// sayMe();

tipper(5);
tipper("5");


function tipper(a){
  var bill = parseInt(a); // typeCast string to int
  console.log(bill + 5);
}

// bigTipper("200") // error dega


var bigTipper =  function (a){
  var bill = parseInt(a); // typeCast string to int
  console.log(bill + 5);
}

bigTipper("200")


console.log(name);
var name = "suman";

sayName()

function sayName(){
  var name = "MR. S";
  console.log(name)
}

console.log(name)
