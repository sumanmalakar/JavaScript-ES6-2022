fetch("https://api.chucknorris.io/jokes/random")
.then((response) =>{
return response.json();
})
.then((data) =>{
  var joke = data.value;
  console.log("Joke :- ", joke)
})
.catch();


// fetch("https://api.chucknorris.io/jokes/random")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("DATA is :", data)
//   })
//   .catch();

