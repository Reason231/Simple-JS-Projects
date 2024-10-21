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


const questionElement=document.getElementById("question")
const answerButton=document.getElementById("answer-button")
const nextButton=document.getElementById("next-btn")

let currentQuestionIndex=0
let score=0

function startQuiz(){
    currentQuestionIndex=0;
    score=0
    nextButton.innerHTML="Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex+1
    questionElement.innerHTML=questionNo+". "+currentQuestion.question

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text
        // It adds the class to the button
        button.classList.add("btn")
        // The button is displayed under the answer-buttons class
        answerButton.appendChild(button)

        if(answer.correct){
            // It will add the answer correct true or false in the button.dataset
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
    
    })
}

// It removes the previous questions for the new one
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        // It removes the answers button
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect = selectBtn.dataset.correct === "true"
    if(isCorrect){
        // It makes the btn background blue
        selectBtn.classList.add("correct")
        score++
    }
    else {
        // It makes the btn background red
        selectBtn.classList.add("incorrect")
    }

    
    Array.from(answerButton.children).forEach(button=>{
        // After clicking the answer, it goes through another 3 answer to see which is true
        if(button.dataset.correct === "true"){
            // After clickining, if the clicked answer is wrong, then it will automatically show the true answer after finding and makes the blue color
            button.classList.add("correct")
        }
        button.disabled=true
    })
    nextButton.style.display = "block"
}

nextButton.addEventListener("click",()=>{

    // It shows the next question
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    }else{
        // It will restart the quiz, if no questions left
        startQuiz()
    }
})

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        // It shows the next question with the updated currentQuestionIndex
        showQuestion()
    }
    else{
        showScore()
    }
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You score ${score} out of ${questions.length}`
    nextButton.innerHTML="Play Again"
    nextButton.style.display = "block"
}

startQuiz()