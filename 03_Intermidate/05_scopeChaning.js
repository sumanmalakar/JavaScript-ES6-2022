var name = "Suman";

console.log("Line number 3", name);

function sayName(){
  // var name = "My S"
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo(){
    // var name = "Suman Malakar";
    console.log("Line number 12", name);
  }
}

sayName();