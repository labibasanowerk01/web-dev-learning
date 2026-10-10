
// function getuser() {
//      return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User: John");
//         }, 2000);
//         })}

//         async function displayUser() {
//             const user = await getuser();
//             console.log(user);
//         }
//         displayUser();

// async function getuser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "John" });
//         }, 2000);
//     });
// }

// async function getPosts(userId) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([
//                 "Post 1",
//                 "Post 2",
//                 "Post 3"
//             ]);
//         }, 2000);
//     })};

// async function main (){
//     console.log("Getting user...");
    
//     const user = await getuser();

//     console.log("User found:", user.name);

//     console.log("Getting posts...");

//     const posts = await getPosts(user.id);

//     console.log("Posts found:", posts);
// }

// main();

// async function login () {
//     return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Login successful");
//     }, 1000);
// })}

// async function getProfile () {
//     const loginMessage = await login();
//     console.log(loginMessage);
//     return "Profile loaded";
// }

// async function getPosts () {
//     const profileMessage = await getProfile();
//     console.log(profileMessage);
//     return "Posts loaded";
// }

// getPosts().then(console.log);

async function start () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Start");
        }, 2000);
    });
}

async function process () {
    const startMessage = await start();
    console.log(`${startMessage}`);
    console.log("Waited 2 seconds");
    return "Process completed";
}

process().then(console.log);


function getUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Rahim",
        age: 22
      });
    }, 1000);
  });
}

async function showUser() {   
  const user = await getUser();
  console.log(`${user.name}, ${user.age}`);
}
showUser();


async function multiply(a, b) {
  return a * b;
}

async function main() {
  const result = await multiply(5, 4);
  console.log(result);
}
main();