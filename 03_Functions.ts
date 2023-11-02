// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// void type
function myFunc(): void {
  console.log("Hello");
}

//Return type annotation
function getFavoriteNumber(): number {
  return 26;
}

// Anonymous Functions
const names = ["Ali", "Veli", "Ahmet"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

//Optional parameter
function Greet(greeting: string, name?: string): string {
  return greeting + " " + name + "!";
}

Greet("Hello", "Steve"); //OK, returns "Hello Steve!"
Greet("Hi"); // OK, returns "Hi undefined!".

//Default parameter
function Greet2(name: string, greeting: string = "Hello"): string {
  return greeting + " " + name + "!";
}

Greet2("Steve"); //OK, returns "Hello Steve!"
Greet2("Steve", "Hi"); // OK, returns "Hi Steve!".
