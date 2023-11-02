
//for loopö
for (let i = 0; i < 3; i++) {
    console.log ("Block statement execution no." + i);
  }

// for of
let arr = [10, 20, 30, 40];

for (let val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}

let str = "Hello World";

for (let char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}

//for in

for (let index1 in arr) {
  console.log(index1); // prints elements: 0, 1, 2, 3
}

