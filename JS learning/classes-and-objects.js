
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


class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  console.log(user.name); // John
  
  user.name = "Harry" // Name is too short.
  console.log(user.name)