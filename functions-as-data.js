/**************************FUNCTIONS AS DATA************************************/

/**Functions as First Class Citizens in functional programming:
 * >>>functions are viewed as other types strings numbers or objects
 * >>>functions playing the roles of:
 * 1>>> parameters passed in functions
 * 2>>> variables that can be assigned data to declared as const like any other variable
 * 3>>> data assigned to variables / functions e.g., <<const sayHello = hello;>> in the example below
 * 
 */

const hello = (name) => console.log(`Hey ${name}`);
const sayHello = hello;
sayHello("Muchi");


/************Using a ternary operator to dynamically change function's definition***************/

const myFunction = true             // assign a condition to a function e.g., true
    ? ()=>console.log("Its True")   //tenary operator (?)meaning "if condition is true",  being determined by a function
    : ()=>console.log("its False");   // ternary operator (:) for "if not true" being determined by a function
myFunction();


/********************Writing a function to check if we are working in development environment********
 * this type of function has a lot of applications liek:
 * A/B testing, different implementations of function, for performance reasons*********/
// const DevEnmt = true;

// const ProdData = () => {
//     let shipment = [
//         {CaseID:700001, shipper:"UPS" },
//         {CaseID:700002, shipper:"FedEx"},
//         {CaseID:700003, shipper:"Laser"}
//     ]
//     console.log(shipment);
// }

// const TestData = () => {
//     let shipment = [
//         {CaseID:101, shipper:"FedEx"},
//         {CaseID:102, shipper:"UPS"},
//         {CaseID:103, shipper:"Laser"}
//     ]
//     console.log(shipment);
// }

// const fetchData = DevEnmt
//     ?()=>TestData
//     :()=>ProdData;
  


/*****************CREATING AN ARRAY OF FUNCTIONS*********************
 * 
*/

const doubleUp = (x) => x * 2;
const subtractOne = (x) => x - 1;
const trippleUp = (x) = (x) => x * 3;
const addFive = x => x + 5;

const funcsArray = [
    doubleUp,
    subtractOne,
    trippleUp,
    addFive,
    Math.sqrt
]
let number = 42;
funcsArray.forEach(func => number = func(number))
console.log(number);