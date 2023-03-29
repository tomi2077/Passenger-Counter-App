

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


