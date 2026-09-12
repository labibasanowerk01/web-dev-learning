let colors = ['blue', 'red', 'pink', 'purple', 'gray'];

let boxes = document.querySelectorAll('.box');

function bgcolor() {
    boxes.forEach(function(box) {
        let bgcol = Math.floor(Math.random() * colors.length);
        box.style.backgroundColor = colors[bgcol];
    });
}

bgcolor();

// function color() {
//     boxes.forEach(function(box) {
//         let color = Math.floor(Math.random() * colors.length);
//         box.style.color = colors[color];
//     });
// }

// color();

boxes.forEach (box => {
    let color = Math.floor(Math.random()*colors.length)
    box.style.color=colors[color]
})

