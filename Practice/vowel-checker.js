function Vcheck(str) {
    let counter = 0;
    let vowels ='aeiou'
    for ( let char of str.toLowerCase()){
        if (vowels.includes(char)){
            counter++
        }
    }
    return  counter
}

console.log(Vcheck("hello"))
console.log(Vcheck("JavaScript"))