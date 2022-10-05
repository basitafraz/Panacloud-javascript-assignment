let array = ["Grandfather", "Grandmother", "Uncle"]

alert(array[0] + " Your invited")
alert(array[1] + " Your also invited")
alert(array[2] + " is not available")

array[3] = "Aunty";

alert(array[3] + ", I guess that you're invted then")  

alert("So I've found a bigger table and I'm inviting more people now")

array.push("cousin"); // adds item to the end of array
array.unshift("Mamu")
array.splice(2, 0, "Younger brother", "Older sister"); 

for (let i = 0; i <array.length; i++) { 
    alert(array[i] + " is now invited");              
    console.log(array[i])
}

alert("So here's the thing, I can only call two people because the table is arriving late, so I have to drop the list to two people. Sorry:(");

array.splice(2,6)  

for (let i = 0; i <array.length; i++) { 
    alert(array[i] + " is only invited");           
    console.log(array[i])
}

alert(array);            
array.splice(0,2);
alert(array);  