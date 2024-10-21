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

// Approach
// 1. The first aprroach would be show question and answers
// 2. The second would be add the counter
// 3. The third would be next button add event listener
// 4. The fourth would be button click event listener
// 5. 


const question = document.getElementById("question");
const answer = document.getElementById("answer-button");
const next = document.getElementById("next-btn");

let questionCounter = 0;

function startQuiz() {
    questionFunction();
    answerFunction();
}

function questionFunction() {
    question.innerHTML = `${questionCounter + 1}. ${questions[questionCounter].question}`;
}

function answerFunction() {
    answer.innerHTML = "";

    questions[questionCounter].answers.forEach((answerOption) => {
        let button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answerOption.text;

        answer.appendChild(button);

        button.addEventListener("click", () => {
            if (answerOption.correct) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }

            next.style.display = "block";
        });
        button.disabled=true
    });
}

next.addEventListener("click", function() {
    questionCounter++;

    if (questionCounter < questions.length) {
        questionFunction();
        answerFunction();
        next.style.display = "none";
    }
});

startQuiz();






