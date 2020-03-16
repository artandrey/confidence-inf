"use strict"




let itemsArray = ["stone", "shears", "paper"];
const random = function () {
        return itemsArray[Math.floor(Math.random() * Math.floor(3))];
}

const logic = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("Ничья")
    }
    else if (userChoice === "shears" && computerChoice === "stone") {
        console.log("user"+userChoice);
        console.log("computer"+computerChoice);
        console.log("Компьютер победил");
    }
    else if (userChoice === "stone" && computerChoice === "shears") {
        console.log("user"+userChoice);
        console.log("computer"+computerChoice);
        console.log("Вы победили");
    }
    else if (userChoice === "shears" && computerChoice === "paper") {
        console.log("user"+userChoice);
        console.log("computer"+computerChoice);
        console.log("Вы победили");
    }
    else if (userChoice === "paper" && computerChoice === "shears") {
        console.log("user"+userChoice);
        console.log("computer"+computerChoice);
        console.log("Компьютер победил");
    }
    else if (userChoice === "stone" && computerChoice ==="paper") {
        console.log("user"+userChoice);
        console.log("computer"+computerChoice);
        console.log("Компьютер победил");
    }
    else if (userChoice === "paper" && computerChoice === "stone") {
        console.log("user"+userChoice);
        console.log("computer"+computerChoice);
        console.log("Вы победили");
    }
    
}

for (let i = 0; i < 100; i++) {
    console.log(random())
}

