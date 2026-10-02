let largest = -Infinity;
let secondLargest = -Infinity;

function seclarge(array) {
for (let num of array) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    }
    else if (num > secondLargest && num < largest) {
        secondLargest = num;    
    }
}
return secondLargest;
}

console.log(seclarge([44,11,35,12,23,87,37,43,90])); 