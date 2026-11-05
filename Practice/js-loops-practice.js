for (let i = 0; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

let evenSum = 0;
for (let i=0; i < 100; i++) {
    if ( i % 2 === 0) {
        evenSum = evenSum + i;
    }
}
console.log(evenSum);

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Black"
};

for (let value in car) {
    console.log(car[value]);
}

const user = {name: "Karim", age: 25, country: "Bangladesh"};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

const students = ["Rahim", "Karim", "Sakib", "Nabil"];

students.forEach(student => {
    console.log(`${students.indexOf(student)} ${student}`);
});