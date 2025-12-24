let userScore = 0;
let compScore = 0;
let userChoice = 0;

let result = document.querySelector("#result");
let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".images");
let uscore = document.querySelector("#user-score");
let cscore = document.querySelector("#comp-score");

let gamelogic = () => {
    const available_choices = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*3);
    const compChoice = available_choices[random];
    console.log(compChoice);
    if (userChoice === compChoice) {
        msg.innerText = "Its A Draw";                           // draw
        result.style.backgroundColor = "#eede2dff";
    }
    else if (userChoice === "Rock" && compChoice === "Paper") {
        msg.innerText = "Computer Wins";                        // lose
        result.style.backgroundColor = "#ff0000";
        compScore++ ;
    }
    else if  (userChoice === "Paper" && compChoice === "Scissors") {
        msg.innerText = "Computer Wins";                        // lose
        result.style.backgroundColor = "#ff0000";
        compScore++ ;
    }
    else if (userChoice === "Scissors" && compChoice === "Rock") {
        msg.innerText = "Computer Wins";                        //lose 
        result.style.backgroundColor = "#ff0000";
        compScore++ ;
    }
    else if (userChoice === "Rock" && compChoice === "Scissors") {
        msg.innerText = "You Won, Congrats";                    // win
        result.style.backgroundColor = "#00ff00";
        userScore++ ;
    }
    else if (userChoice === "Paper" && compChoice === "Rock") {
        msg.innerText = "You Won, Congrats";                    // win
        result.style.backgroundColor = "#00ff00";
        userScore++ ;
    }
    else if (userChoice === "Scissors" && compChoice === "Paper") {
        msg.innerText = "You Won, Congrats";                    // win
        result.style.backgroundColor = "#00ff00";
        userScore++ ;
    }
    uscore.innerText = userScore;
    cscore.innerText = compScore;
}

choices.forEach((choice)=> ( 
    choice.addEventListener("click",()=>{
        userChoice = choice.id;
        gamelogic();
    })
))