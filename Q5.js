  let sideA = 5;
  let sideB = 5;
  let sideC = 5;
  
  determineTriangleType(sideA, sideB, sideC); // Output: Equilateral
  
  sideA = 4;
  sideB = 4;
  sideC = 6;
  
  determineTriangleType(sideA, sideB, sideC); // Output: Isosceles
  
  sideA = 3;
  sideB = 4;
  sideC = 5;
  
  determineTriangleType(sideA, sideB, sideC); // Output: Scalene
  

  function determineTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
      console.log("Equilateral");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  }
  
  