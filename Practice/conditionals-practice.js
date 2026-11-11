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