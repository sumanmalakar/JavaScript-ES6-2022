var myMap = new Map();

myMap.set(1, "Uno")
myMap.set(2, "dos")
myMap.set(3, "Tres")
myMap.set(4, "Cuatro")

console.log(myMap)

// for(let key of myMap.keys()){
//   console.log(`key is ${key}`)
// }

// for(let value of myMap.values()) {
//   console.log(`Value is ${value}`);
// }


// for(let [key, value] of myMap){
//   console.log(`Key is : ${key} and value is ${value}`)
// }

myMap.forEach((key)=> console.log(`${key}`));
myMap.forEach((value)=> console.log(`${value}`));
myMap.forEach((v, k)=> console.log(`value =  ${v}  and key = ${k}`));

myMap.delete(2);

console.log(myMap)