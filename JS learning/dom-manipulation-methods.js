// let boxes = document.getElementsByClassName("box");

// console.log(boxes);

// boxes[2].style.backgroundColor = "blue";

// document.getElementById('bluebox').style.backgroundColor = "blue";

// document.querySelector('.box').style.backgroundColor = "blue";

document.querySelectorAll('.box').forEach(e=> {
    e.style.backgroundColor = "blue";
});
