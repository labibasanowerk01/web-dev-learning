
// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
// rabbit._proto_ = animal; sets rabbit's [[Prototype]] to animal

class Animals {
    constructor(name) {
        this.name = name
        console.log('New object is created');

    }

    eats() {
        console.log('I am eating');

    }
    jumps() {
        console.log('I am jumping');

    }
}

class lion extends Animals {
    constructor(name) {
        super(name)
        this.name
        console.log('This is a lion');
    }
    eats() {
        super.eats()
        console.log('I am eating meat');

    }
}

let l = new lion('Makulu');

console.log(l);


let a = new Animals('Bunny');
console.log(a);
