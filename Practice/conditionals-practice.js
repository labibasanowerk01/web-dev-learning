let age = 16

if (age >= 18) {
    console.log("You can drive.");
} else {
    console.log("You cannot drive yet.");
}

let marks = 85

if (marks > 100) {
    console.log("Invalid marks. Please enter marks between 0 and 100.");
} else if (marks >= 80) {
    console.log("You got an A+ grade.");
} else if (marks >= 70) {
    console.log("You got an A grade.");
}
else if (marks >= 60) {
    console.log("You got a A- grade.");
}
else if (marks >= 50) {
    console.log("You got a B grade.");
}
else if (marks >= 40) {
    console.log("You got a C grade.");
}
else if (marks >= 33) {
    console.log("You got a D grade.");
}
else {
    console.log("You failed. Try again !");
}

let year = 1996

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

let a = 5341
let b = 101
let c = 1231

if (a > b && a > c) {
    console.log(a + " is the largest number.");
}else if (b > a && b > c) {
    console.log(b + " is the largest number.");
}else {
    console.log(c + " is the largest number.");
}

let ang1 = 0
let ang2 = 60
let ang3 = 60

if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) {
    console.log("Invalid angles. Angles must be greater than 0.");
}else if (ang1 + ang2 + ang3 === 180) {
    console.log("The angles form a valid triangle.");
} else {
    console.log("The angles do not form a valid triangle.");
}