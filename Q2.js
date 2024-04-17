  let grade1 = 95;
  let grade2 = 85;
  let grade3 = 75;
  let grade4 = 65;
  let grade5 = 55;
  
  determineGrade(grade1);
   // Output: A
  determineGrade(grade2); 
  // Output: B
  determineGrade(grade3); 
  // Output: C
  determineGrade(grade4); 
  // Output: D
  determineGrade(grade5); 
  // Output: F
  

  function determineGrade(score) {
    if (score >= 90) {
      console.log("A");
    } else if (score >= 80 && score <= 89) {
      console.log("B");
    } else if (score >= 70 && score <= 79) {
      console.log("C");
    } else if (score >= 60 && score <= 69) {
      console.log("D");
    } else {
      console.log("F");
    }
  }
  