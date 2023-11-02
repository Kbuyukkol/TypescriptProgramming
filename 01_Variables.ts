let myName: string = "Mustafa"; // Explicit way : writing out the type

//myName = 42;

let myName2 = "Ayşe"; //Implicit way : forces TypeScript to infer the value

let num: number = 15;

//num="15";

let num2= 15;

// any 
let myVar: any;
myVar= "konya";
myVar= 42;

//unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
let myVar2: unknown;

// Casting
let myVar3: unknown = "Hello world!";
console.log((myVar3 as string).length); //as
console.log((<string>myVar).length); // <> : This will not work with TSX, such as on React files.

//Union Types
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");


