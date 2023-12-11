// object literals
const Car = {
    name:"Ford",
    make:"2010",
    cost:"500000",
   
}
Car.capacity = "4";// adding properties
// console.log(Car);
Car.start = function engine(){
    console.log("Start the engine")
}
console.log(Car);
//Object.freeze(Car);
Car.details = function(){ console.log(`The car is ${this.name} made in the year ${this.make} and sold at ${this.cost}`)}
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
//console.log(newCompany1);

// object by constructor method
function _company(name,technology,capacity){
    this.name = name;
    this.technology = technology;
    this.capacity = capacity;
}

const newCompany = new _company("wipro","JS","2000");
//console.log(newCompany);

// task 1 Hello, object
const user ={};// created an empty object
user.name = "John"; // provided a property name with value
user.surName = "Smith"; // provided a property surName with value
user.name = "Pete";
delete user.name ;
//console.log(user)

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true
}

//Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    
  }
  let sum =0;
  for(let key in salaries){
    sum += salaries[key]
  }
  //console.log(sum)

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "number") {
        obj[key] *= 2;
      }
    }
  }
  
  multiplyNumeric(menu);
  
  //console.log(menu);

  // creating an object by constructor which is a singleton object

const social = new Object();
social.id = "qwerty123";
social.name = "user"
social.isLoggedIn = "true";
console.log(social);

// defining object inside object

const newCollege = {
collegeName:{
  detailedName:{
    society:"KLS",
    name:"VDIT"
  }
  
},
place:"Uttar Kannada"

}
console.log(newCollege.collegeName.detailedName.society);

//merging the objects
//const mergedObj = Object.assign({},social,newCollege);
// this can also be done in this manner i.e through spread operator
const mergedObj = {...social,...newCollege}
console.log(mergedObj)

// normally data from database is restored in terms of array of objects

const dataBase = [{
  1:"a"
},
{
  b2:"b",
  email:"sd@gmail.com"
},
{
  3:"c"
}]

console.log(dataBase[1].b2)
console.log(Object.keys(Car));// here we get the keys in form of array which can be manipulated by using array methods
console.log(Object.values(Car)); // similarly values
console.log(Car.hasOwnProperty("name"))

// object reference
const user1 = {name:"Sanjay"};
const admin = user1;
console.log(admin);
admin.name = "Vinay";
console.log(user1);

let clone = {};
for(let key in user1){
  clone[key]= user1[key]
}
clone.name = "Lucky";
console.log(user1)
console.log(clone)


//structured clone

const geometrical = {
  name:"Triangle",
  sizes:{
    height:"100",
    base:"25"
  }
}
 const cloned = structuredClone(geometrical);
 console.log(geometrical.sizes === cloned.sizes)// false
 cloned.sizes.height = "120";
 console.log(geometrical.sizes.height);// 100 so there is no change

 let user2 = {name:"Dsv"};
 console.log(user2.name);
  user2 = null;
  if (user2 !== null) {
    console.log(user2.name);
  } else {
    console.log("user2 is null");
  }

// 
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user3 = makeUser();

//console.log( user.ref.name ); // undefined as here this refers to global object which seems to be undefined

// it can be rewritten as 
function makeUser2(){
  return{
    name:"John",
    ref:function(){
      return this
    }
  }
}
let user4 = makeUser2();

console.log( user4.ref().name );// John here this refers to its outer object which refers to name : "John"

//calculator
// let calculator = {
//   read: function(){
    
//       this.a=+prompt("Enter first value");
//       this.b=+prompt("Enter second value")

  
    
//   },
//   sum:function(){
//      this.read()
  
//     return this.a+this.b;
    
//   },
//   mul:function(){
    
//     return this.a*this.b
//   }

// };
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//   step: 0,
//   up:function() {
//     this.step++;
//     return this
//   },
//   down:function() {
//     this.step--;
//     return this
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//     return this
//   }
// };
// ladder.up().up().down().showStep().down().showStep();

//methods in constructor
class User5 {
  constructor(name) {
    this.name = name;

    this.sayHi = function () {
      console.log("My name is: " + this.name);
    };
  }
}

let john = new User5("John");

john.sayHi(); // My name is: John

//constructor object

let obj = {}

function A(name){
return obj;
}
function B(name){
  return obj;
  }
  console.log( new A() == new B() )

  //calculator using constructor method
  function Calculator1(read,sum,mul){
    this.read=function(){
this.a= +prompt("Enter the first number ");
this.b= +prompt("Enter the second number ");
    }
    this.sum = function(){
      return this.a+this.b
    }
    this.mul = function(){
      return this.a*this.b
    }
  }
  let calculator2 = new Calculator1();
calculator2.read();

alert( "Sum=" + calculator2.sum() );
alert( "Mul=" + calculator2.mul() );
  