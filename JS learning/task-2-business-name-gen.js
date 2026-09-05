/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/


function adjectives() {
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";
    let d = Math.floor(Math.random() * 3)

    if (d == 0) { return (a) }
    else if (d == 1) { return (b) }
    else if (d == 2) { return (c) }

}
function sname() {
    let p = "Engine";
    let q = "Foods";
    let r = "Garments";
    let s = Math.floor(Math.random() * 3)

    if (s == 0) { return (p) }
    else if (s == 1) { return (q) }
    else if (s == 2) { return (r) }

}
function antword() {
    let x = "Bros";
    let y = "Limited";
    let z = "Hub";
    let h = Math.floor(Math.random() * 3)

    if (h == 0) { return (x) }
    else if (h == 1) { return (y) }
    else if (h == 2) { return (z) }

}

console.log(`Business name: ${adjectives()} ${sname()} ${antword()}`)

