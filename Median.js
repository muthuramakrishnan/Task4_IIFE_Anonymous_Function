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
  let array1 = [1,2,3,4,5];
  let array2= [12,17,19,20,21];
 
    //normal method
console.log('calculating using anonymous function');
  let findTheMedian = function()
  {
      console.log('Median ='+((array1[array1.length-1] + array2[0])/2));
  }
  
  findTheMedian();
  
  
  console.log('calculating using IIFE');
  (()=>
  {
      console.log('Median ='+((array1[array1.length-1] + array2[0])/2));
  })();
  //end-here
});

