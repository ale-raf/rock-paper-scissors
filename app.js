let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result > p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${convertToWord(user)}(user) beats ${convertToWord(computer)}(comp). You win ! 🔥`;
}

function lose() {
    // computerScore++;
    // computerScore_span.innerHTML = computerScore;
    // userScore_span.innerHTML = userScore;
    // result.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}. You lose ! 🔥`;
}

function draw() {

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock.addEventListener("click", function() {
        game('r');
    })
    paper.addEventListener("click", function() {
        game('p');
    })
    scissors.addEventListener("click", function() {
        game('s');
    })
}
main();