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
  let array1 = [1,2,3,4,5,6,7];
  let k = 2;
  
  let tempArray = [];
  
  for(let i=0;i<2;i++)
  {
      tempArray.push(array1[i]);
      array1.shift();
  }
  
  tempArray.forEach((value) =>   array1.push(value))

  console.log(array1);
  
  //end-here
});

