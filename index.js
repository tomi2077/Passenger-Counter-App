

let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count  = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function saved() {
    let countSeparator = count + " - "
    saveEL.textContent += countSeparator
    countEl.innerText = 0
    count  = 0
}






// let username  = "per"
// let message = "You are a three new notifications"

// let messageToUser = message + "," + username + "!"

// console.log(messageToUser)


// let welcomeEL = document.getElementById("welcome-el")

// let name = "Tomi Ajayi"

// let greeting = "Hello, Good morning "

// welcomeEL.innerText = greeting + name 
// welcomeEL.innerText +=  "👋"

