function Palindrome(str) {
     str = str.toLowerCase()
    let reverse =""

    for (let i =str.length -1 ; i >= 0 ; i--){
        reverse += str[i]
    }
    return str === reverse
}

console.log(Palindrome("racecar"))
console.log(Palindrome("hello"))