const current_users = ["Admin", "Asim", "Basit", "Waleed", "Ashar"];

const lower1 = current_users.map(element => {
  return element.toLowerCase();
});

let new_users = ["asim","basit","Asad","Amjad","Ali"]

const lower2 = new_users.map(element => {
    return element.toLowerCase();
  });

//  console.log(lower2) 

for(let i = 0; i < lower2.length; i++) {   
    
    if(lower1.includes(lower2[i]))
    {
    alert(lower2[i] + " needs a new username")   
    }
    else {
    alert(lower2[i] + ": This user name is available");        
    }     
}    

   