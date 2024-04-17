
  let angle1 = 45;
  let angle2 = 135; 
  let angle3 = 225; 
  let angle4 = 315; 
  let angle5 = 400; 
  
  classifyAngle(angle1); 
  // Output: First quadrant
  classifyAngle(angle2); 
  // Output: Second quadrant
  classifyAngle(angle3); 
  // Output: Third quadrant
  classifyAngle(angle4);
   // Output: Fourth quadrant
  classifyAngle(angle5);
   // Output: Invalid angle. Angle should be between 0 and 360 degrees.
  

  function classifyAngle(angle) {
    if (angle >= 0 && angle < 90) {
      console.log("First quadrant");
    } else if (angle >= 90 && angle < 180) {
      console.log("Second quadrant");
    } else if (angle >= 180 && angle < 270) {
      console.log("Third quadrant");
    } else if (angle >= 270 && angle < 360) {
      console.log("Fourth quadrant");
    } else {
      console.log("Invalid angle. Angle should be between 0 and 360 degrees.");
    }
  }