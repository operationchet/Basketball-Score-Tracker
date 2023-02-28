let scoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")
let homeScore = 0
let guestScore = 0
let zeroEl = document.getElementById("homeScore")
let zeroEl2 = document.getElementById("guestScore")


function zero() {
    let homeScore = 0
    let guestScore = 0
    zeroEl2.textContent = guestScore
    zeroEl.textContent = homeScore
}


function addOne() {
    homeScore += 1
    scoreEl.textContent = homeScore
}

function addTwo() {
    homeScore += 2
    scoreEl.textContent = homeScore
}

function addThree() {
    homeScore += 3
    scoreEl.textContent = homeScore
}

function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
