const questions = [
    {
        question: "Identify this scale",
        answers: [
            {text: "C Dorian", correct: false},
            {text: "C Locrian", correct: false},
            {text: "C Major", correct: true},
            {text: "C phrigian", correct: false},
        ]
    },
    {
        question: "Identify this scale",
        answers: [
            {text: "C Dorian", correct: true},
            {text: "C phrigian", correct: false},
            {text: "C Major", correct: false},
            {text: "C Locrian", correct: false},
        ]  
    },
    {
        question: "Identify this scale",
        answers: [
            {text: "C Dorian", correct: false},
            {text: "C Locrian", correct: false},
            {text: "C Major", correct: false},
            {text: "C phrigian", correct: true},
        ]
    },
    {
        question: "Identify this scale",
        answers: [
            {text: "C Dorian", correct: false},
            {text: "C Locrian", correct: true},
            {text: "C Major", correct: false},
            {text: "C phrigian", correct: false},
        ]
    },
    {
        question: "Identify this scale",
        answers: [
            {text: "C Dorian", correct: false},
            {text: "C Locrian", correct: true},
            {text: "C Major", correct: false},
            {text: "C phrigian", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

startQuiz();