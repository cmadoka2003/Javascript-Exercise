'use strict';

const message = document.querySelector(".message");
const nbrReveal = document.querySelector(".number");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const restart = document.querySelector(".again");
const color = document.querySelector(".color");
const reset = document.querySelector(".reset");

let nbrRandom = Number(Math.trunc(Math.random() * 20 + 1));
let calcul = 20;
let topscore = 0

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (calcul > 1) {

        if (!guess) {
            message.textContent = "Veillez renseigner un nombre";
        }

        else if (guess > 0 && guess <= 20) {
            if (guess !== nbrRandom) {
                calcul--;
                console.log(calcul)
                score.textContent = calcul;      
                if (guess < nbrRandom) {
                    message.textContent = "Too Low"
                }
                else{
                    message.textContent = "Too High"
                }
            }

            else if (guess === nbrRandom){
                message.textContent = "Bonne Réponse"
                color.style.background = "green";
                nbrReveal.textContent = nbrRandom;
                if (calcul > Number(highscore.textContent)) {
                    highscore.textContent = calcul;
                    localStorage.setItem("highscore", highscore.textContent);
                    reset.style.display = "";
                }
            }
        }

        else {
            message.textContent = "Mettre un nombre compris entre 0 et 20";
        }
    }

    else {
        message.textContent = "Game Over"
        color.style.background = "red";
        score.textContent = "0";
    }
    
})


let sauvscore = localStorage.getItem("highscore") || "0";
highscore.textContent = sauvscore;
console.log(sauvscore)

if (highscore.textContent === "0") {
    reset.style.display = "none"
    console.log("hello")
}

restart.addEventListener("click", function () {
    color.style.background = "#222";
    message.textContent = "Start guessing..."
    nbrRandom = Number(Math.trunc(Math.random() * 20 + 1));
    calcul = 20;
    score.textContent = calcul;
    nbrReveal.textContent = "?";
})


reset.addEventListener("click", function () {
    localStorage.removeItem("highscore");
    highscore.textContent = "0";
    reset.style.display = "none"
    console.log("hello");
})





