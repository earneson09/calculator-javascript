const display = document.getElementById("display");
const decimal = document.getElementById("decimal");
const displayStr = document.getElementById("displayStr");
let calculationResults = 0;
let operationTypes = ["add", "subtract", "divide", "multiply"];
let operationInUse = "";

function updateDisplay(input) {
  
  const lastDigit = displayStr.innerHTML[displayStr.innerHTML.length -1];
  
   if(display.innerHTML === "0" && operationTypes.indexOf(input) === -1 && input != "clear" && input != ".") {
       display.innerHTML = input;
     
     }else if(operationTypes.indexOf(input) >= 0) {
     
       if (lastDigit === "+" || lastDigit === "x" || lastDigit === "/"){
         if(input === "subtract"){
           display.innerHTML = document.getElementById(input).innerHTML;
         }else {
           display.innerHTML = "0";
           operationInUse = input;
         }
         
       }else if (operationInUse === ""){
       operationInUse = input;
       calculationResults = display.innerHTML;
       display.innerHTML = "0";
       }else if(display.innerHTML === "-"){
         if(operationTypes.indexOf(input) === -1){
           display.innerHTML += input
         }else {
           display.innerHTML = "0";
           operationInUse = input;
         }
     }else {
       calculationResults = doTheMath (parseFloat(calculationResults), parseFloat(display.innerHTML), operationInUse);
       display.innerHTML = "0"
       operationInUse = input;
     }
        
       
  }else if(input === 'equals') {
    display.innerHTML = doTheMath(parseFloat(calculationResults), parseFloat(display.innerHTML), operationInUse);
    calculationResults = 0;
    operationInUse = "";
  } else if(input === 'clear'){
    display.innerHTML = "0";
    calculationResults = 0;
    operationInUse = "";
    displayStr.innerHTML = "0";
  }else if(input === '.'){
    if (display.innerHTML.indexOf(".") === -1) {
    display.innerHTML += ".";
  }
  }else {
     display.innerHTML += input
  } 
  
  if(displayStr.innerHTML === "0" && input != "clear" && operationTypes.indexOf(input) === -1){
    displayStr.innerHTML = input;
  }else if(input === 'add'){
    displayStr.innerHTML += "+"; 
  }else if(input === 'subtract'){
      displayStr.innerHTML += "-";
  }else if(input === 'multiply'){
    displayStr.innerHTML += "x";
  }else if(input === 'divide'){
    displayStr.innerHTML += "/";
  }else if(input === 'clear'){
    displayStr.innerHTML = "0"
  }else if(input === 'decimal'){
      displayStr.innerHTML += "."
  }else if(input === 'equals'){
    displayStr.innerHTML += "=" + display.innerHTML;
  }else {
    displayStr.innerHTML += input
  }
console.log(calculationResults, "<= calc result", display.innerHTML, "<= display", operationInUse);
};

function doTheMath (firstNum, secondNum, operation){

  let result = "";
  
  if (operation === "add"){
    result = firstNum + secondNum
  }else if(operation === "subtract"){
    result = firstNum - secondNum
  }else if(operation === "multiply"){
    result = firstNum * secondNum
  }else if(operation === "divide"){
    result = firstNum / secondNum
  };
  return result.toString();
};