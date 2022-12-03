var testArray = [2,4,6,3,1,5,9,8];

console.log(testArray.fill(1));
console.log(testArray.fill("h", 2));

const myNumber = [23,24,25,55,66,77,87,99]

const result1 = myNumber.filter((num) => num < 25);
console.log(result1);

const result2 = myNumber.filter((num) => num > 25);
console.log(result2);

const result3 = myNumber.filter((num) => num === 25);
console.log(result3);


const result4 = myNumber.filter((num) => num != 25);
console.log(result4);

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"]

console.log(users.slice(1));
console.log(users.slice(1, 3));
console.log(users.slice(1, 4));


users.splice(1, 2, "HI")
console.log(users);
users.splice(1, 3, "HI")
console.log(users);
users.splice(1, 3, "HI", "BYE")
console.log(users);