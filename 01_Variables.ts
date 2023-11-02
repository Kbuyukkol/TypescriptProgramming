let myName: string = "Mustafa";

let myName2= "Ayşe";

let num: number= 15;

//Union Types
function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");

  