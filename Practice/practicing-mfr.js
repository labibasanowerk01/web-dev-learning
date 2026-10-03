const numbers = [2, 4, 6, 8, 10];

let exp = numbers.map(num => num ** 2);

console.log(exp);

function even(e) {
    return e % 2 === 0;
}

let newnums = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = newnums.filter(even);

console.log(evenNumbers);

const prices = [100, 250, 50, 75];


let total = prices.reduce((a, b) => a + b);

console.log(total);

const names = ["rahim", "karim", "hasan", "sadia"];

let upnames = names.map(n => n.toUpperCase());

console.log(upnames);

const people = [
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 22 },
    { name: "Hasan", age: 15 },
    { name: "Sadia", age: 25 }
];


let adults = people.filter(person => person.age >= 18);

console.log(adults);

const products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
    { name: "Mouse", price: 20 }
];

let productNames = products.map(p => p.name);

console.log(productNames);

const cart = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 }
];

let totalprice = cart.reduce((sum, item) => sum + item.price, 0);
console.log(totalprice);

const purchases = [
    { item: "Laptop", price: 800, paid: true },
    { item: "Phone", price: 500, paid: false },
    { item: "Mouse", price: 20, paid: true },
    { item: "Keyboard", price: 50, paid: true }
];

let paidItems = purchases.filter(purchase => purchase.paid);

let totalPaid = paidItems.reduce((sum, item) => sum + item.price, 0);

console.log(totalPaid);

const items = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
    { name: "Monitor", price: 300 },
    { name: "Keyboard", price: 50 }
];

const maxprice = items.reduce((max, item) => {
    return item.price > max ? item.price : max;
})

console.log(maxprice);

const fruits = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];

let fruitCount = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});

console.log(fruitCount);

const orders = [
    { customer: "Rahim", amount: 1200, status: "completed" },
    { customer: "Karim", amount: 800, status: "cancelled" },
    { customer: "Sadia", amount: 1500, status: "completed" },
    { customer: "Hasan", amount: 500, status: "completed" },
    { customer: "Nadia", amount: 2000, status: "cancelled" }
];

let completedOrders = orders.filter(order => order.status === "completed");

let customerNames = completedOrders.map(order => order.customer);

console.log(customerNames);

let sum = completedOrders.reduce((total, order) => total + order.amount, 0);

console.log(sum);

let customerbase = Array.from(completedOrders.map(order => order.amount, 0));

console.log(customerbase);

const results = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    acc.total += order.amount;
    return acc;
}, { completed: 0, 
    cancelled: 0,
    total: 0 });

console.log(results);