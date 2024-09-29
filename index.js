// Define a function called getGrade that will prompt the user to input student marks
function getGrade() {
    // Prompt the user to input student marks and store the input in the mark variable
    let mark = parseInt(prompt("Enter student marks (between 0 and 100): "));
  
    // Check if the input mark is within the valid range (0 to 100)
    if (isNaN(mark)||mark < 0 || mark > 100) {
      // If the input is invalid, print an error message and exit the function
      console.log("Invalid input. Please enter a mark between 0 and 100.");
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

function speedDetector(speed) {
    let speedLimit = 70;
    let demeritPoints = 0;
    if (speed > speedLimit) {
        console.log('OK');
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`points: ${demeritPoints}`);
        if (demeritPoints > 12) {
            console.log('License suspended');
        } else {
            console.log('Speed is fine');
        }
    }
}
// Test The Function
speedDetector(85); // Output: Points: 2
speedDetector(120); // Output: Points: 10, License suspended