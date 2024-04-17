  let year1 = 2024; 
  let year2 = 2023; 
  
  isLeapYear(year1); 
  isLeapYear(year2); 

  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("Leap year");
    } else {
      console.log("Not a leap year");
    }
  }
                        
  