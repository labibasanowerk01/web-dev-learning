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