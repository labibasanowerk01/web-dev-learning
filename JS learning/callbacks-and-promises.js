const callback = (arg) => {
    console.log(arg)
}

const loadscript = (cb) => {
 cb ('lol')
}

loadscript (callback)

console.log (callback ('lol'))


let prom1 = new Promise((resolve, reject) => {
setInterval(() => {
    console.log('Hello');
    resolve ('Bye')
}, 3000);

})

prom1.then ((a)=>{
    console.log(a);

})