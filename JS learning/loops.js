
// i++ means add 1 to the value of i after each round of the loop!!!

// for loop

// for (let i =0; i < 100; i++) {
//     console.log(1+i);
// }

// [This block of code translates to: for each value of i from 0 to 99, print the value of i.
// ]

// for in loop

let obj = {
    name: "Eric",
    role: "UI/UX Designer"
}

for (const key in obj) {
    console.log(key);
}

// [This block of code translates to: for each key in the object, print the key.]

// for of loop

for (const characters of "Eric") {
    console.log(characters);
}

// [This block of code translates to: for each character in the string "Eric", print the character.]

// while loop

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// [This block of code translates to: while the value of i is less than 10, keep printing the value of i.
//     The loop will stop when i is no longer less than 10.
// ]

// do while loop

let i = 12;
do {
    console.log(i);
    i++;
} while (i < 10);

// [This block of code translates to: First print the value of i, doesn't matter if it meets the condition or not. Then act like a regular while loop.
// in this case, the loop will only run once because the value of i is already greater than 10. //]