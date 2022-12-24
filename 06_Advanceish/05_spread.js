// var returnedValue  = Math.max(2,5,7,4,2,8);
// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj, {a: 1, b:2, c: 3}, {z: 9, y: 8, x: 7});
// console.log(myObj);

// function sumOne(a,b){
// return a+b;
// }

// console.log(sumOne(5,4));

// var myA = [5,4];
// // console.log(sumOne(...myA)) // spread Operator


function sumTwo(a, b, ...args) {
  console.log(args)
  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [multi, sum]
}


console.log(sumTwo(20, 3, 5, 1, 8, 9)); 