function getGrade() {
    // Prompt the user to input student marks and store the input in the mark variable
    
    let mark = parseInt(prompt("Enter student marks ( 0-100): "));
  
    // Check if the input mark is within the valid range (0 to 100)
    if (isNaN(mark)||mark < 0 || mark > 100) {
      // If the input is invalid, print an error message and exit the function
      console.log("Invalid input. Please enter a mark between 0 and 100.");
      alert("Invalid input. Please enter a mark between 0 and 100.");
      return;
    }
  
    // Declare a variable to store the grade
    let grade;
  
    // Check if the mark is greater than 79
    if (mark > 79) {
      // If true, assign the grade 'A' to the grade variable
      grade = "A";
    } 
    // Check if the mark is between 60 and 79 (inclusive)
    else if (mark >= 60 && mark <= 79) {
      // If true, assign the grade 'B' to the grade variable
      grade = "B";
    } 
    // Check if the mark is between 49 and 59 (inclusive)
    else if (mark >= 49 && mark <= 59) {
      // If true, assign the grade 'C' to the grade variable
      grade = "C";
    } 
    // Check if the mark is between 40 and 49 (inclusive)
    else if (mark >= 40 && mark <= 49) {
      // If true, assign the grade 'D' to the grade variable
      grade = "D";
    } 
    // If the mark is less than 40
    else {
      // Assign the grade 'E' to the grade variable
      grade = "E";
    }
  
    // Print the calculated grade to the console
    alert(`Grade: ${grade}`);
    
  }
  
  // Call the getGrade function to start the program
  getGrade();
  
  
  
  
  
  
   
  function speedDetector() {
  let  speed =parseInt(prompt('please enter your speed'));
    
    // creates a function speed where you have to parse on the value in the speed 
    
    if(isNaN(speed)){
        alert('please enter a valid speed')
        return;
    }
    let speedLimit = 70;
    let demeritPoints = 0;
    if (speed<=speedLimit){
        console.log(`you have recorded a speed of ${speed} which is acceptable `);
        alert(`you have recorded a speed of ${speed} which is acceptable ` );
    }
    
     else {
         demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`points: ${demeritPoints}`);
        alert(` You have exceeded the expected speed limit, you have  ${demeritPoints} demeritPoints`);
        
        if (demeritPoints > 12) {
            console.log('License suspended');
            alert('License suspended');
            
        } else {
            console.log('Speed is fine');
            alert(`you have ${demeritPoints}, if you get more ${12-demeritPoints} points, your license will be suspended`);
        }
    }
  }
  // Test The Function
  // speedDetector(85); // Output: Points: 2
  // speedDetector(120); // Output: Points: 10, License suspended
  speedDetector()