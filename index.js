let homeScore = 0
let guestScore = 0

let homeDisaply = document.getElementById("homescore")
let guestDisaply = document.getElementById("guestscore")


function homeadd1() {
    homeScore += 1
    homeDisaply.textContent = homeScore
    
}

function homeadd2() {
    homeScore += 2
    homeDisaply.textContent = homeScore
    
}

function homeadd3() {
    homeScore += 3
    homeDisaply.textContent = homeScore
    
}

function guestadd1() {
    guestScore += 1
    guestDisaply.textContent = guestScore
    
}

function guestadd2() {
    guestScore += 2
    guestDisaply.textContent = guestScore
    
}

function guestadd3() {
    guestScore += 3
    guestDisaply.textContent = guestScore
    
}

function reset(){
    homeScore = 0;
    guestScore = 0;
    guestDisaply.textContent = guestScore;
    homeDisaply.textContent = homeScore
}