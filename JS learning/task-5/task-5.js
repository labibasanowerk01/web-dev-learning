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

createCard(
    "Introduction to Frontend | Sigma web dev video #3",
    "CodeWithHarry",
    450000,
    "1 month ago",
    "28:15",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
)