let a = Math.floor(Math.random()*100)
console.log(a);

let b = Number(prompt("Enter your guess"))

function guess() {
    if (b>a){
        alert('Too High')
    }
    else if (a>b) {
        alert ('Too Low')
    }
    else {
        alert('Correct')
    }
}

guess ()