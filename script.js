
let compScore = String(0);
let userScore = String(0);

let allStyle = document.querySelectorAll(".style");

allStyle.forEach((all) => {
    all.addEventListener("click", () => {
        let user = all.getAttribute("id");
        startGame(user);
    });
});

function startGame(userChoice) {

    const option = ["stone", "paper", "scissor"];

    let compChoice = option[Math.floor(Math.random() * 3)];

    document.querySelector(".usr-cho").innerText = `User choose : ${userChoice}`;

    document.querySelector(".comp-cho").innerText = `User choose : ${compChoice}`;
    

    if (compChoice === userChoice) {
        document.querySelector(".current").innerText = "Match is Draw";
        return;
    }

    if ((userChoice === "stone" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "stone") ||
        (userChoice === "scissor" && compChoice === "paper")) {
        document.querySelector(".current").innerText = "Congratulation , You are winner !";
        userScore++;
    }
    else {
        document.querySelector(".current").innerText = "Winner is Computer , Better luck next time.";
        compScore++;
    }

    document.querySelector(".count-1").innerText = userScore;

    document.querySelector(".count-2").innerText = compScore;
    
}





