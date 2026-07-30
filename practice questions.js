//1. Variables + Output//

let firstName = "Ayesha";
let age = 20;

console.log("Hi, I am " + firstName + " and I am " + age + " years old");

//2. Calculator//

let a = 10, b = 5;

console.log("Sum:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

//3. Even or Odd//

let num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//4. Largest of 3 numbers//

let x = 15, y = 22, z = 18;

if (x >= y && x >= z) {
    console.log("Largest:", x);
} else if (y >= x && y >= z) {
    console.log("Largest:", y);
} else {
    console.log("Largest:", z);
}

//5. Loop - Print 1 to 10//

console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Even Numbers:");
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

//6. Array Basics//

let fruits = ["apple", "banana", "mango"];

fruits.push("orange");

fruits.shift();

console.log(fruits);
console.log("Length:", fruits.length);

//7. Reverse a String//

// I dont know how to perform this proble

//8. Function - Grade Checker//

function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else {
        return "F";
    }
}

console.log(getGrade(95)); 
console.log(getGrade(85)); 
console.log(getGrade(72)); 
console.log(getGrade(60)); 

//9. Object Basics//

let student = {
    name: "Ayesha",
    rollNo: 17170,
    subjects: ["software engineering", "maths"]
};

console.log(student.name + " studies " + student.subjects[0] + " and " + student.subjects[1]);

