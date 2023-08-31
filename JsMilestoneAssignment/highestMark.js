function findHighestMarks(marks) {
    let highestMarks = Math.max(...marks);
    let highestStudentIndex = marks.indexOf(highestMarks);
    
    return [highestMarks, highestStudentIndex];
}

// Input the marks of five students
let marks = [88,89,98,30,67];

let [highestMarks, highestStudentIndex] = findHighestMarks(marks);

console.log(`The highest marks scored by a student: ${highestMarks}`);
console.log(`This student is student ${highestStudentIndex + 1}`);
