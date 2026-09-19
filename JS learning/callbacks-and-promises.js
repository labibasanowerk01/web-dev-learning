const callback = (arg) => {
    console.log(arg)
}

const loadscript = (cb) => {
 cb ('lol')
}

loadscript (callback)

console.log (callback ('lol'))




