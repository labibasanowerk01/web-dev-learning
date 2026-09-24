// function getnum() {
//     return Number(prompt("Enter a number"));
// }


// function getnum2() {
//     return Number(prompt("Enter a number"));
// }

// function sum() {
//     return getnum() + getnum2()
// }

// console.log(sum())

let a = prompt("Enter the first number")

let b = prompt("Enter the second number")

let sum = parseInt(a) + parseInt(b)

if (isNaN(a) || isNaN(b) || isNaN(sum)) {
    throw SyntaxError("Sorry enter numbers only")
}

let x = 1

function main() {
    
    try {
        console.log("The sum is " + sum*x);
        
    } catch (error) {
        alert("Sorry there's an error")
        alert(error.name)
        alert(error.message)
        alert(error.stack)
    }
    finally {
        
        console.log('The operation is done');
        
    }
}
    let c = main()

    // "finally" is mainly useful for functions. When you want to run code written after "return"