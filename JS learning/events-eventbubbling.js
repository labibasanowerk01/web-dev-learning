let button = document.querySelector('.btn')
let box = document.querySelector('.box')

button.addEventListener("click", () => {
    box.innerHTML = 'you just clicked the button <b>You Fool!</b>'
})

button.addEventListener("contextmenu", () => {
    alert('WHY WOULD YOU RIGHT CLICK??!');
})

document.addEventListener("keydown", (e) => {
    alert(e.key + ' ' + e.code);
})