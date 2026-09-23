//  function getdata() {
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve ('Hello')
//         }, 3500);
//     })
// }

async function getdata() {
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = await x.text()
   return data
   
}

async function main() {

let data = await getdata()

console.log(data)

    console.log('Process Data');
    console.log('task 2');
}

main()

// data.then(()=>{
//     console.log('Process Data');
//     console.log('task 2');
    
// })

// Fetch API example 
async function fecthing () {

    let X = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com',
    age : 46
  })
}
)
.catch(error => console.error(error));
 let data = await X.json()
 console.log(data);
 
}

fecthing()


