// function init() {
//   var firstName = "Suman Malakar";
//   console.log("I am init");
//   function sayFirstName() {
//     console.log(firstName);
//   }

//   return sayFirstName();
// }

// var value =  init();

// // value();


function doAddition(x){
  console.log(x)
  return function(y){
    console.log(y)

    return x + y;

  }
}

// var add5 = doAddition(40);
// console.log(add5(5))

console.log(doAddition(9)(3));

function Addition_of_three(x) {
  console.log(x)
  return function (y) {
    console.log(y)
    return function(z){
      console.log(z)
      return x+y+z;
    }

  }
}

console.log(Addition_of_three(10)(20)(30)); // curring