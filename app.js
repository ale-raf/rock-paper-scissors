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
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${convertToWord(user)}(user) beats ${convertToWord(computer)}(comp). You win ! 🔥`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => {
        userChoice_div.classList.remove("green-glow");
    }, 300)
}

function lose(user, computer) {
    const userChoice_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${convertToWord(user)}(user) loses to ${convertToWord(computer)}(comp). You lost... 🫤`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => {
        document.getElementById(user).classList.remove("red-glow");
    }, 300)
}

function draw(user, computer) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${convertToWord(user)}(user) equals ${convertToWord(computer)}(comp). It's a draw. 😉`;
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