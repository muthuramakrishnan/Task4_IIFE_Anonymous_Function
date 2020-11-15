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
console.log('calculating using anonymous function');
  let returnPrimeNumbers = function()
  {
      return array.filter((x)=>{
      if(x<=1) return;
      for(let i=2;i*i<=x;i++)
      {
          if(x%i===0) return
      }
      return x;
  });
  }
  console.log(returnPrimeNumbers());
  
  
  
  console.log('calculating using IIFE');
  
  (function()
  {
      array.filter((x)=>{
      if(x<=1) return;
      for(let i=2;i*i<=x;i++)
      {
          if(x%i===0) return
      }
      console.log(x);
  });
  })();
  //end-here
});

