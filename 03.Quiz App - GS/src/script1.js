const questions = [
    {
        question: "Which map is the smallest in PUBG Mobile?",
        answers: [
            { text: "Erangel", correct: false },
            { text: "Sanhok", correct: true },
            { text: "Miramar", correct: false },
            { text: "Vikendi", correct: false }
        ]
    },
    {
        question: "What is the maximum number of players in a classic PUBG Mobile match?",
        answers: [
            { text: "50", correct: false },
            { text: "100", correct: true },
            { text: "75", correct: false },
            { text: "120", correct: false }
        ]
    },
    {
        question: "Which vehicle is the fastest in PUBG Mobile?",
        answers: [
            { text: "Dacia", correct: true },
            { text: "Buggy", correct: false },
            { text: "UAZ", correct: false },
            { text: "Motorcycle", correct: false }
        ]
    },
    {
        question: "What does the Red Zone signify in PUBG Mobile?",
        answers: [
            { text: "High loot area", correct: false },
            { text: "Air Drop incoming", correct: false },
            { text: "Bombing area", correct: true },
            { text: "Safe zone", correct: false }
        ]
    },
    {
        question: "Which of these weapons is a sniper rifle in PUBG Mobile?",
        answers: [
            { text: "M416", correct: false },
            { text: "AWM", correct: true },
            { text: "Uzi", correct: false },
            { text: "AKM", correct: false }
        ]
    },
    {
        question: "Which item allows you to recover full health in PUBG Mobile?",
        answers: [
            { text: "Energy Drink", correct: false },
            { text: "First Aid Kit", correct: false },
            { text: "Med Kit", correct: true },
            { text: "Bandage", correct: false }
        ]
    },
    {
        question: "How many members can be in a PUBG Mobile squad?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which of these is NOT a map in PUBG Mobile?",
        answers: [
            { text: "Erangel", correct: false },
            { text: "Miramar", correct: false },
            { text: "Vikendi", correct: false },
            { text: "Dust 2", correct: true }
        ]
    },
    {
        question: "What type of ammo does the Kar98k use in PUBG Mobile?",
        answers: [
            { text: "7.62mm", correct: true },
            { text: "5.56mm", correct: false },
            { text: "9mm", correct: false },
            { text: ".45 ACP", correct: false }
        ]
    },
    {
        question: "Which mode in PUBG Mobile has the fastest-paced gameplay?",
        answers: [
            { text: "Classic", correct: false },
            { text: "Arcade", correct: true },
            { text: "Payload", correct: false },
            { text: "TDM", correct: false }
        ]
    }
];

const question = document.getElementById("question");
const answer = document.getElementById("answer-button");
const next = document.getElementById("next-btn");

let counter = 0;
let rightAnswer=0

function startQuiz() {
    questionFunction();
    answerFunction();
}

startQuiz();

function questionFunction() {
    question.innerHTML = `${counter + 1}. ${questions[counter].question}`;
}


function answerFunction() {
    answer.innerHTML = "";

    let trueAnswer; // Declare trueAnswer outside the loop but assign it inside

    questions[counter].answers.forEach((answerOption) => {

        // The true answer is assigned to the trueAnswer variable
        if(answerOption.correct == true){
            trueAnswer = answerOption.text; // Assign only when the correct answer is found
        }

        // It puts the answerOption  to the button
        let button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answerOption.text;
        answer.appendChild(button);
        

        // It checks if the selected button is right or wrong
        button.addEventListener("click", () => {
            if (answerOption.correct) {
                button.classList.add("correct");
                rightAnswer++
            } else {
                button.classList.add("incorrect");

                // It the selected option is wrong, then it will show the right answer
                let exceptSelected = document.querySelectorAll("button");
                exceptSelected.forEach((exceptbtn) => {
                    // It checks other button except than the selected button
                    if(exceptbtn !== button) {
                        // It checks the true answer with other non-selected buttons and finds the true one, and shows the true one
                        if(trueAnswer == exceptbtn.textContent) {
                            exceptbtn.classList.add("correct");
                        }
                    }
                });
            }
            
            // Disable all buttons after selection
            let exceptSelected = document.querySelectorAll("button");
            
            exceptSelected.forEach((exceptbtn) => {
                // It disables all the option button after selection
                exceptbtn.disabled = true;
                if(exceptbtn.id == "next-btn"){
                    // It disables the disabled button action for the next button
                    exceptbtn.disabled = false
                }
            });

            // It shows the next button after selection
            next.style.display = "block";
        });
    });
}


next.addEventListener("click", function() {
    counter++;
    if (counter < questions.length) {
        questionFunction();
        answerFunction();
        next.style.display = "none";
        next.innerHTML="Next"

        if(counter == question.length-1){
            next.innerHTML="Result"
       }
    }
    else{
        question.innerHTML=`You got ${rightAnswer} out of ${questions.length}`
        answer.innerHTML = "";
        next.innerHTML="Restart"
        // It updates the value to the -1 so the question can be repeated from 1. It is not 0 when we click on next button it again counter ++ from above
        counter=-1
        return counter;
    }
});







