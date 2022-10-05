function make_car(manufacturer, model, options){
    car_dict = {
        'manufacturer': manufacturer,
        'model': model,
        ...options
    } 
    console.log(car_dict);
    return car_dict;
}

let param1 = "Honda";

let param2 = "1991";
let param3 = "param1";

let my_outback = make_car('subaru', 'outback', {param1,param2,param3})
console.log(my_outback);
alert(my_outback);

