const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  let array1 = [1,1,2,3,4,5,6];
  
  //method 1
  console.log([... new Set(array1)]);
  
  //end-here
});

