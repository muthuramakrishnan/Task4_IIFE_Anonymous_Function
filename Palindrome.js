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
  let array = 'malayalam,guvi,hellooo,madam,muthu';
  console.log('calculating using anonymous function');
  let returnPalindromeStrings = function() {
          array = array.split(',');
          array.forEach(function(x){ 
          for(let i=0;i<=parseInt((x.length)/2);i++)
          {
              if(x[i]!=x[x.length-i-1])
              {
                  return -1;
              }
          }
          console.log(x);
        });
  };
  
returnPalindromeStrings();

console.log('calculating using IIFE');
array = 'malayalam,guvi,hellooo,madam,muthu';
  (function() {
          array = array.split(',');
          array.forEach(function(x){ 
          for(let i=0;i<=parseInt((x.length)/2);i++)
          {
              if(x[i]!=x[x.length-i-1])
              {
                  return -1;
              }
          }
          console.log(x);
        });
  })();
  //end-here
});

