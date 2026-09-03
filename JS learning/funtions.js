function jobinfo(name) {
   console.log("hey " + name + " welcome");
   console.log(name + " you are a software engineer");
}
// [This block of code is a function that takes a name as an argument and prints a welcome message and a job title for that person. The function is then called three times with different names: "Eric", "Labiba", and "Samiha".]

jobinfo("Eric");
jobinfo("Labiba");
jobinfo("Samiha");

function sum(a, b, c=4) {
    // console.log(a + b);
    return a + b + c;
}

let result1 = sum(10,20);
let result2 = sum(2,5);
let result3 = sum(10,20,5);

console.log("The sum of these numbers is " + result1);
console.log("The sum of these numbers is " + result2);
console.log("The sum of these numbers is " + result3);

// [This block of code defines a function called `sum` that takes three parameters: `a`, `b`, and an optional parameter `c` with a default value of 4. The function returns the sum of the three parameters. The function is then called three times with different arguments, and the results are stored in variables `result1`, `result2`, and `result3`. Finally, the results are printed to the console.]

const func = (x) => {
    console.log("I am an arrow function and my value is " + x);
}

func(15);
func(20);
func(25);

// [This block of code defines an arrow function called `func` that takes a single parameter `x` and prints a message to the console that includes the value of `x`. The function is then called three times with different values: 15, 20, and 25.]