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
  let array = 'muTHu rama krishnan';
  
  //converting to title caps using anonymous function
  console.log('converting to title caps using anonymous function');
  convertTitleCase = function(){
     return array.toLowerCase().split(' ').map(function(x){
     x=x.replace(x[0], x[0].toUpperCase());
     return x;
    }).join(' ');
  }
  console.log(convertTitleCase());
  
   //converting to title caps using IIFE
  console.log('converting to title caps using IIFE');
  
  (function(){
     console.log(array.toLowerCase().split(' ').map(function(x){
     x=x.replace(x[0], x[0].toUpperCase());
     return x;
    }).join(' '));
  })();


  //end-here
});

