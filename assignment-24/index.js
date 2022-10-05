const mountain = "K2";
const boy = "Hamza";
const cat = "Cute";
const students = 6;
const gender = "female";
const game = "football";
const car = "Civic";
const bike = "Buggati";
const provinces = 4;
const laptop = ["Lenovo","HP"];

 


alert("case to check if mountain is equal to K2, I predict the console.log will be true");
console.log(mountain == "K2");

alert("case to check if mountain is equal to everst, I predict the console.log will be false");
console.log(mountain == "Everest");

alert("case to check cat , predict false due lower case c")
console.log(cat == "cute")

alert("case to check students , predict true")
console.log(students == 6)

alert("case to check students , predict false")
console.log(students > 6)

alert("case to check students , predict true")
console.log(students < 6)

alert("case to check and operator , predict true")
console.log(gender == "female" && game == "football")

alert("case to check or operator, predict false")
console.log((gender == "male" || game == "cricket"))

alert("Case to check an array, predict false");
console.log(Array.isArray(bike));     

alert("Case to check array, predict true")
console.log(Array.isArray(laptop));

