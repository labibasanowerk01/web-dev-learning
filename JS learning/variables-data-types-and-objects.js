console.log('learning variables, data types, and objects');

let a = 10; //number data type
a = a + 1;
// allowed
const d = 50;

// d = d + 1;
// not allowed, const variable cannot be reassigned because it is a constant

let b = 20; //number data type
let c = "Labiba"; //string data type

// console.log( a + b + ' This is the sum of a and b ' );

// console.log( 'My name is ' + c );

console.log( typeof a, typeof b, typeof c );

{
    // let a = 32;
    console.log( a );
}


let _a = "Samiha";
// allowed

// let 100a = "Samiha";
// not allowed, variable name cannot start with a number

let x = "Liba";
let y = 22;
let z = 2.5;
const p = true;
let q = undefined;
let r = null;

console.log( x, y, z, p, q, r );

console.log( typeof x, typeof y, typeof z, typeof p, typeof q, typeof r );

let o = {
    name: "Amitabh Bachpan",
    "job code": 6767,
    is_alive: true
}
o.salary = "7crore";

console.log(o);


o.salary = "100crore";

console.log(o);