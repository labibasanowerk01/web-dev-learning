const callback = (arg) => {
    console.log(arg)
}

const loadscript = (cb) => {
 cb ('lol')
}

loadscript (callback)

console.log (callback ('lol'))


let prom1 = new Promise((resolve, reject) => {
    let num = Math.random ()
    if (num<0.5) {
        reject ('The number is too small')
    }
    else {
        setInterval(() => {
    console.log('Hello');
    resolve ('Bye')
}, 3000);


}
})

prom1.then ((a)=>{
    console.log(a);

}).catch ((error)=>{
    console.log(error)
})

let prom2 = new Promise((resolve, reject) => {
    let num = Math.random ()
    if (num<0.5) {
        reject ('The number is too small 2')
    }
    else {
        setInterval(() => {
    console.log('Hello 2');
    resolve ('Bye 2')
}, 3000);


}
})

prom2.then ((a)=>{
    console.log(a);

}).catch ((error)=>{
    console.log(error)
})


let prom3 = Promise.all([prom1, prom2])
let prom4 = Promise.allSettled([prom1, prom2])

prom3.then((b)=>{
    console.log(b)
}).catch((err)=>{
    console.log(err)
})

prom4.then((b)=>{
    console.log(b)
}).catch((err)=>{
    console.log(err)
})

let prom5 = Promise.resolve(`I'm too cool`)
let prom6 = Promise.reject('Sadly not me though')

console.log(prom5);

prom6.catch((err)=>{
    console.log(err)
})

let prom7 = Promise.race([prom1,prom2])

prom7.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})