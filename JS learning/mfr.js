let arr = [1,2,3,4,6,8,9];

// let newarr = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }


let newarr = arr.map((e,index,value)=>{
    return (`${e**2} ${index} ${value}`)
})

// console.log(newarr);

function greaterthanfive(e) {
    if (e >= 5) {
    return true
    }
    else {
        return false
    }
}

console.log(arr.filter(greaterthanfive));

let arr2 = [5,6,7,8]

const red = (a,b)=>{
    return a+b
}

console.log(arr2.reduce(red))


console.log(Array.from("LABIBA"))

// Array.from() can create array from any Object