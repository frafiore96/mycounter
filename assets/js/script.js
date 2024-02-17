"use strict";

const body = document.body;

// myCounter
const heading = document.createElement("h1"); //creo Heading
body.prepend(heading);
heading.className = "heading";
heading.innerHTML = "myCounter";

const counterContainer = document.createElement("div"); //creo div con il counter
heading.after(counterContainer);
counterContainer.className = "counter-container";

const minusContainer = document.createElement("div"); //creo div per il pultante "-"
counterContainer.append(minusContainer);
minusContainer.className = "minus-container";

const minusBtn = document.createElement("button");
minusContainer.append(minusBtn);
minusBtn.className = "btn minus-btn";
minusBtn.innerHTML = "-";

const boxCounterContainer = document.createElement("div"); //creo div per separare risultato dai pulsanti
counterContainer.append(boxCounterContainer);
boxCounterContainer.className = "box-container";

const counter = document.createElement("div"); // contiene il risultato
boxCounterContainer.append(counter)
counter.className = "counter";
counter.innerHTML = "0";

const plusContainer = document.createElement("div"); //creo div per il pulsante "+"
counterContainer.append(plusContainer);
plusContainer.className = "plus-container";

const plusBtn = document.createElement("button");
plusContainer.append(plusBtn);
plusBtn.className = "btn plus-btn";
plusBtn.innerHTML = "+";

const resetContainer = document.createElement("div"); //creo div per il pulsante "reset"
counterContainer.after(resetContainer);
resetContainer.className = "reset-container";

const resetBtn = document.createElement("button");
resetContainer.append(resetBtn);
resetBtn.className = "btn reset-btn";
resetBtn.innerHTML = "reset";

let result = 0;       
minusBtn.addEventListener("click", decreaseResult);
resetBtn.addEventListener("click", resetResult);
plusBtn.addEventListener("click", increaseResult); 

function increaseResult() {
    result++;
    displayResult();
}

function decreaseResult() {
    result--;
    displayResult();
}

function resetResult() {
    result=0;
    displayResult();
}

function displayResult() {
    counter.innerHTML = result.toString();
}

const btns = document.querySelectorAll(".btn");
for (let btn of btns) {
    btn.addEventListener("dblclick", e => {
        e.preventDefault();
    })
}

            



