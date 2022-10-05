let array = ["Grandfather", "Grandmother", "Uncle"]

// alert(array[0] + " Your invited")
// alert(array[1] + " Your also invited")
// alert(array[2] + " is not available")

alert("I am inviting " + array.length() + " people" );
array[3] = "Aunty";

alert("Now I am inviting " + array.length() + "people");  

alert("So I've found a bigger table and I'm inviting more people now")

array.push("cousin"); // adds item to the end of array
array.unshift("Mamu")
array.splice(2, 0, "Younger brother", "Older sister"); 

for (let i = 0; i <array.length; i++) { 
    alert(array[i] + " is now invited");              
    console.log(array[i])
}

alert("So now I am inviting " + array.length() + " people");

alert("So here's the thing, I can only call two people because the table is arriving late, so I have to drop the list to two people. Sorry:(");

array.splice(2,6)  

for (let i = 0; i <array.length; i++) { 
    alert(array[i] + " is only invited");           
    console.log(array[i])
}

alert("Now I am only inviting " + array.length() + " people");                  
array.splice(0,2);
alert(array);  
