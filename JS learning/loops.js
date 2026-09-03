// for (let i =0; i < 100; i++) {
//     console.log(1+i);
// }

let obj = {
    name: "Eric",
    role: "UI/UX Designer"
}

for (const key in obj) {
    console.log(key);
}
 

for (const character of "Eric") {
    console.log(character);
}

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

let i = 12;
do {
    console.log(i);
    i++;
} while (i < 10);