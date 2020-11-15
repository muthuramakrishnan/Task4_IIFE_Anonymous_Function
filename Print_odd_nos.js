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
  let array = [32,75,23,22,4,2,7,6,5];
  
  //print using IFFE
  console.log("Printing using IIFE");
  (function(){
      array.forEach(value=>{
      if(value%2!==0)
      console.log(value);
  })
  })();

//print using anonymous function
console.log("Now Printing using anonymous function");
let printOddNums = function(){
      array.forEach(value=>{
      if(value%2!==0)
      console.log(value);
      })
};
printOddNums();

  //end-here
});

