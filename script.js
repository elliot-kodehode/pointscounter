const aTeamScore = document.getElementById("a-teamscore")
const bTeamScore = document.getElementById("b-teamscore")
const winningTeam = document.getElementById("winning-team") 

//  Starting points and adding it to containers
let aTeamPoints = 0;
aTeamScore.textContent = aTeamPoints;

let bTeamPoints = 0;
bTeamScore.textContent = bTeamPoints;

// functions for adding and subtracting points
const aIncrement = () => {
    aTeamPoints++;
    aTeamScore.textContent = aTeamPoints;
    updateWinningTeam();
}
const aDecrement = () => {
    aTeamPoints--;
    aTeamScore.textContent = aTeamPoints;
    updateWinningTeam();
}

const bIncrement = () => {
    bTeamPoints++;
    bTeamScore.textContent = bTeamPoints;
    updateWinningTeam();
}
const bDecrement = () => {
    bTeamPoints--;
    bTeamScore.textContent = bTeamPoints;
    updateWinningTeam();
}

// Selecting buttons
const aIncrementCount = document.getElementById("a-add")
const aDecrementCount = document.getElementById("a-subtract")
const bIncrementCount = document.getElementById("b-add")
const bDecrementCount = document.getElementById("b-subtract")

// Event listener for adding/subtracting on click
aIncrementCount.addEventListener("click", aIncrement);
aDecrementCount.addEventListener("click", aDecrement);
bIncrementCount.addEventListener("click", bIncrement);
bDecrementCount.addEventListener("click", bDecrement);

// Winner!

winningTeam.textContent = "Game is ready to start"; // Not sure how i can make this one not needed or if i even can 😔
const updateWinningTeam = () => {
    if (aTeamPoints > bTeamPoints) {
        winningTeam.textContent = "Team A is winning!";
    } else if (aTeamPoints < bTeamPoints) {
        winningTeam.textContent = "Team B is winning!";
    } else if (aTeamPoints === bTeamPoints && aTeamPoints !== 0) {
        winningTeam.textContent = "It's a tie!";
    } else {
        winningTeam.textContent = "Game is ready to start";
    }
};

// Start new round

const refreshBtn = document.getElementById("refresh")

function restart () {
    aTeamPoints = 0;
    bTeamPoints = 0;
    aTeamScore.textContent = aTeamPoints;
    bTeamScore.textContent = bTeamPoints;
    updateWinningTeam ();
}
refreshBtn.addEventListener("click", restart);