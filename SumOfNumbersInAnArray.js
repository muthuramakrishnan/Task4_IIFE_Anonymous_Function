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
  let array = [34,55,77,12,10,1,6,5,4,3,2,1];
  
  //normal method
  let sum = array.reduce((accumulator,current)=>accumulator+current);
  console.log(sum);
  
  
  console.log('calculating using anonymous function');
  let calculateSum = function()
  {
    return array.reduce((accumulator,current)=>accumulator+current);  
  }
  console.log(calculateSum());
  
  
  console.log('calculating using IIFE');
  
  (()=>{
    console.log(array.reduce((accumulator,current)=>accumulator+current));
  })();
  //end-here
});

