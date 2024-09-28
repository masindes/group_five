function grade (marks) {
    if (marks >=80 && marks <=100)
        return 'A';
    else if (marks >=60 && marks <=79)
        return 'B';
    else if (marks >=49 && marks <=59)
        return 'C';
    else if (marks >=40 && marks <49)
        return 'D';
    else return ('E')

}
function main(){
    let input = prompt("Enter your marks(0-100):");
    let marks = parseInt(input);
    if (!isNaN(marks)&& marks>=0 && marks <=100){
        let grade=grades(marks);
        alert(`The grade is:${grade}`);
    
    }else {
        alert('Please enter valid marks between 0 and 100');
    }

}



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