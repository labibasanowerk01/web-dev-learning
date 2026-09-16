function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewstr
    if (views > 1000000) {
        viewstr = views / 1000000 + "M" + " views"
    }
    else if (views > 100000) {
        viewstr = views / 1000 + "k" + " views"
    }
    else {
        viewstr = views + " views"
    }

    let html = `<div class="card">
            <img src="${thumbnail}"
                alt="">
                <div class="capsule">
                    ${duration}
                </div>
                <h1>${title}</h1>
                <p class ="title2">${cName} . ${viewstr} . ${monthsOld}</p>
            </div>`
    
            document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

let crc = [function () {
    createCard(
        "Introduction to Frontend | Sigma web dev video #1",
        "CodeWithHarry",
        450000,
        "1 month ago",
        "28:15",
        "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
    )},
    function () {
    createCard(
        "Introduction to Backend | Sigma web dev video #2",
        "CodeWithHarry",
        610000,
        "1 month ago",
        "28:15",
        "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
    )
},
    function () {
    createCard(
        "Introduction to AI | Sigma web dev video #3",
        "CodeWithHarry",
        236783,
        "1 month ago",
        "28:15",
        "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
    )
},
    function () {
    createCard(
        "Introduction to Machine learning | Sigma web dev video #4",
        "CodeWithHarry",
        560000,
        "1 month ago",
        "28:15",
        "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
    )
},
    function () {
    createCard(
        "Introduction to Databases | Sigma web dev video #5",
        "CodeWithHarry",
        120000,
        "1 month ago",
        "28:15",
        "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
    )
},

]


let btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
        let randomIndex = Math.floor(Math.random() * crc.length);
        crc[randomIndex]();
});