  let num1 = 10;
  let num2 = -5;
  let num3 = 0;
  
  determineNumberSign(num1); 
  determineNumberSign(num2); 
  determineNumberSign(num3); 
  

  function determineNumberSign(number) {
    if (number > 0) {
      console.log("Positive");
    } else if (number < 0) {
      console.log("Negative");
    } else {
      console.log("Zero");
    }
  }