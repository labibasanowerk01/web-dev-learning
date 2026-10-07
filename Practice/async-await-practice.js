
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

async function login () {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("Login successful");
    }, 1000);
})}

async function getProfile () {
    const loginMessage = await login();
    console.log(loginMessage);
    return "Profile loaded";
}

async function getPosts () {
    const profileMessage = await getProfile();
    console.log(profileMessage);
    return "Posts loaded";
}

getPosts().then(console.log);