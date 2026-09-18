let button = document.querySelector('.btn')
let box = document.querySelector('.box')

button.addEventListener("click", () => {
    box.innerHTML = 'you just clicked the button <b>You Fool!</b>'
})

button.addEventListener("contextmenu", () => {
    alert('WHY WOULD YOU RIGHT CLICK??!');
})

document.addEventListener("keydown", (e) => {
    console.log(e.key, e.code);
})

document.querySelector('.container-2').addEventListener("click", () => {
    alert('Container-2 was clicked');
})

document.querySelector('.childcontainer').addEventListener("click", (e) => {
    alert('Child container was clicked');
    e.stopPropagation()
})

document.querySelector('.child').addEventListener("click", (e) => {
    alert('Child was clicked');
    e.stopPropagation()
})

let colors = ['blue', 'red', 'pink', 'purple', 'gray'];


function bgcolor() {
    let box = document.querySelector('.child');
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// setInterval(() => {
//     bgcolor()
// }, 1000);


setTimeout(() => {
    bgcolor()
}, 1000);