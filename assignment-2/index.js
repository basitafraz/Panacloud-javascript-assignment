let user = prompt ("Please enter your name");

let upper = user.toUpperCase();
let lower = user.toLowerCase();

const firstLetter = user.charAt(0)

const firstLetterCap = firstLetter.toUpperCase()

const remainingLetters = user.slice(1)

const letters = remainingLetters.toLowerCase(); 

const capcase = firstLetterCap + letters;


document.write("Your entered name:" + user + "<br>");

document.write("Your name in capital case is: " + upper + "<br>");
document.write("Your name in lower case is: " + lower+ "<br>"); 
document.write("Your name in title case is: " + capcase + "<br>"); 