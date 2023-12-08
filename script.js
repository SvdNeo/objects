// object literals
const Car = {
    name:"Ford",
    make:"2010",
    cost:"500000",
    details:()=>{ console.log(`The car is ${Car.name} made in the year ${Car.make} and sold at ${Car.cost}`)}
}
Car.capacity = "4";// adding properties
// console.log(Car);
Car.start = function engine(){
    console.log("Start the engine")
}
Car.start(); // adding methods
Car.details();


console.log(Car);
// const Car = {
//     name: "Ford",
//     make: "2010",
//     cost: "500000",
//     capacity: "4", // adding properties

//     start: function() {
//         console.log("Start the engine");
//     }, // adding methods

//     details: function() {
//         console.log(`The car is ${this.name} made in the year ${this.make} and sold at ${this.cost}`);
//     }
// };

// Car.start();
// Car.details();
// console.log(Car);


// ES6 approach 
class company {
    constructor(name, technology, capacity) {
        this.name = name;
        this.technology = technology;
        this.capacity = capacity;
    }
}

const newCompany1 = new company("Neoito","ReactJS","200");
console.log(newCompany1);

// object by constructor method
function _company(name,technology,capacity){
    this.name = name;
    this.technology = technology;
    this.capacity = capacity;
}

const newCompany = new _company("wipro","JS","2000");
console.log(newCompany);

// task 1 Hello, object
const user ={};// created an empty object
user.name = "John"; // provided a property name with value
user.surName = "Smith"; // provided a property surName with value
user.name = "Pete";
delete user.name ;
console.log(user)