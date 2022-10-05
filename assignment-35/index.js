let animal = ["Sheep", "Goat", "Markhor", "baby-sheep"];

for(let i; i < animal.length; i++){
    console.log(animal[i]);
    if(animal[i] == "Sheep") {
        console.log("Not a pet but a farm animal")
    } else if ( animal[i] == "Goat") {
        console.log("They are very gentle creatures")
    } else if (animal[i] == "Markhor") {
        console.log("You can hunt them but can't keep them as a pet")
    } else {
        console.log ("They are just damn cute");
    }
}