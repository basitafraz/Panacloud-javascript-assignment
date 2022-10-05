let age = prompt("Please enter your age");

if (age < 2) {
    alert("This guy is a baby")
}
else if(age == 2 && age < 4 ) {
    alert("This person is a toddler")
}
else if(age >= 4 && age <13 ){
    alert("This person's a kid")
}
else if(age >= 13 && age <20 ){
    alert("This person's a teenager")
}
else if(age >= 20 && age <65 ){
    alert("This person's a adult")
}
else{
    alert("This person is an elder")
}