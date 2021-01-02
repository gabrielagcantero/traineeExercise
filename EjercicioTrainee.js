let vehicleList = [];
const puma = "=============================="

class Vehicle {
    constructor(tmark, model, price){
        this.tmark = tmark;
        this.model = model;
        this.price = price;
        vehicleList.push(this);
    }
}

class Car extends Vehicle{
    constructor (tmark, model, price, doors){
        super(tmark, model, price);  
        this.doors = doors;
    }
}

class Moto extends Vehicle {
    constructor(tmark, model, price, cylind){
        super(tmark, model, price);  
        this.cylind = cylind;
    }
}

const car1 = new Car("Peugeot", "206", "$200.000,00", "4");
const car2 = new Car("Peugeot", "208", "$250.000,00", "5");
const moto1 = new Moto("Honda", "Titan", "$60.000,00", "125cc");
const moto2 = new Moto("Yamaha", "YBR", "$80.500,50", "160cc");

for (let i=0; i<vehicleList.length; i++){
    if (vehicleList[i].doors!==undefined){
        console.log("Marca:", vehicleList[i].tmark, "// Modelo:", vehicleList[i].model, "// Puertas:", vehicleList[i].doors, "// Precio:", vehicleList[i].price); 
    } else {
        console.log("Marca:", vehicleList[i].tmark, "// Modelo:", vehicleList[i].model, "// Cilindrada:", vehicleList[i].cylind, "// Precio:", vehicleList[i].price); 
    }
}

console.log(puma);

let numberPrices = vehicleList.map(elem => (elem.price.replace(/[$.]/g, "")));
let floatPrices = numberPrices.map(elem => parseFloat(elem.replace(/[,]/g, ".")));
let maxPrice = vehicleList[floatPrices.indexOf(Math.max.apply(null, floatPrices))].tmark + " " + vehicleList[floatPrices.indexOf(Math.max.apply(null, floatPrices))].model;
let minPrice = vehicleList[floatPrices.indexOf(Math.min.apply(null, floatPrices))].tmark + " " + vehicleList[floatPrices.indexOf(Math.min.apply(null, floatPrices))].model;

console.log("Vehículo más caro:", maxPrice);
console.log("Vehículo más barato:", minPrice);

let models = vehicleList.map(elem => elem.model);

function modelIndex(search){
    let index = -1;
    for (let i=0; i<models.length; i++){
        let aux = models[i].indexOf(search);
        if (aux !== -1){
            index = i;
            break;
        }
    }
    return index;
}

function modelSearch(search){
    let aux = modelIndex(search);
    return vehicleList[aux].tmark + " " + vehicleList[aux].model + " " + vehicleList[aux].price;    
}

console.log("Vehículo que contiene en el modelo la letra ‘Y’:", modelSearch("Y"));
console.log(puma);
console.log("Vehículos ordenados por precio de mayor a menor:");

let orderPrices = floatPrices.slice().sort((a,b) => b-a);
for(let i=0; i<orderPrices.length; i++){
    let aux = floatPrices.indexOf(orderPrices[i])
    console.log(vehicleList[aux].tmark, vehicleList[aux].model);
}