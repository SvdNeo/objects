// object literals
const Car = {
    name:"Ford",
    make:"2010",
    cost:"500000",
    details:()=>{ console.log(`The car is ${this.name} made in the year ${this.make} and sold at ${this.cost}`)}
}
Car.capacity = "4";// adding properties
// console.log(Car);
Car.start = function engine(){
    console.log("Start the engine")
}
Car.start(); // adding methods


console.log(Car);