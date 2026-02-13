let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const btn = document.getElementById("reset-btn");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const compChoices = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return compChoices[randidx];

}

const drawGame = () => {
    msg.innerText = "Game was draw . Play again!";
    msg.style.backgroundColor = "gray";


}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `User wins! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Computer wins! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw choice
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //Scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //Rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else if(userChoice === "scissors"){
            //Paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice,);
    }
        


}

choices.forEach((choice) => {
    choice.addEventListener('click', () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});