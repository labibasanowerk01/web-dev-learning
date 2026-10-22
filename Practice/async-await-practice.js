
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

// async function start () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Start");
//         }, 2000);
//     });
// }

// async function process () {
//     const startMessage = await start();
//     console.log(`${startMessage}`);
//     console.log("Waited 2 seconds");
//     return "Process completed";
// }

// process().then(console.log);


// function getUser() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         id: 1,
//         name: "Rahim",
//         age: 22
//       });
//     }, 1000);
//   });
// }

// async function showUser() {   
//   const user = await getUser();
//   console.log(`${user.name}, ${user.age}`);
// }
// showUser();


// async function multiply(a, b) {
//   return a * b;
// }

// async function main() {
//   const result = await multiply(5, 4);
//   console.log(result);
// }
// main();

// function getNumber() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(100), 1000);
//   });
// }

// async function printNum() {
//   const num = await getNumber();
//   console.log(num);
// }
// printNum();

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function greet() {
//   await delay(2000);
//   return "Hello, World!"; 
// }
// greet().then(console.log);

// function wait() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Done!"), 1000);
//   });
// }

// async function main() {
//   console.log("Start");

//   const result = await wait();

//   console.log(result);
//   console.log("End");
// }

// main();
// console.log("Outside");

// async function getdata() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 1000);
//   });
// }

// async function showData() {
//   const data = await getdata();
//   console.log(data);
// }
// showData();

// function getNumber() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(100), 1000);
//   });
// }

// async function  showNumber() {
//   const num = await getNumber();
//   return num * 2;
// }

// const result = showNumber();
// result.then(console.log);

 async function task1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Task 1 completed"), 1000);
  });
}

async function task2() {
  const result1 = await task1();
  console.log(result1);
  return new Promise(resolve => {
    setTimeout(() => resolve("Task 2 completed"), 2000);
  });
}

async function task3() {
  const result2 = await task2();
  console.log(result2);
  return new Promise(resolve => {
    setTimeout(() => resolve("Task 3 completed"), 1000);
  });
}

task3().then(console.log);

// async function getUser() {
//   try {
//    const response = fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then(response => response.json())
//       .then(data => console.log(data.id, data.name, data.email));
  
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
// } catch (error) {
//     console.error("Error", error.message);
//   }}

//   getUser();


// async function getPosts() {
//   try {
//     const response = fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log(data.title, data.body));

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//   } catch (error) {
//     console.error("Error", error.message);
//   }
// }
// getPosts();

// async function getUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/3")
//     .then(response => response.json())
//     .then(data => console.log(data.name, data.email));

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//   } catch (error) {
//     console.error("Error", error.message);
//   }
// }
// getUser();

let btn = document.querySelector(".ga");
btn.addEventListener("click", getActivity);

let activity = document.querySelector(".act");

async function getActivity() {
  try {
    const response = await fetch("https://bored-api.appbrewery.com/random");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    activity.textContent = data.activity;
  } catch (error) {
    activity.textContent = "Failed to load the activity.Try again!";
    console.error("Error", error.message);
  }
}


const postids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

async function getPostDetails() {
  try {
    const posts = await Promise.all(
      postids.map(async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
    );
    posts.forEach((post) => {
      console.log(`Title: ${post.title}, Body: ${post.body}`);
    });
  } catch (error) {
    console.error("Error", error.message);
  }
}

getPostDetails();
