// Array to store questions, options, and correct answers
const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: 0
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Mozilla", "Microsoft"],
        correctAnswer: 0
    },
    {
        question: "Which of these is a JavaScript data type?",
        options: ["String", "Car", "Float", "Array"],
        correctAnswer: 0
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: ["var arr = []", "var arr = {}", "var arr = ()"],
        correctAnswer: 0
    },
    {
        question: "How do you add a comment in JavaScript?",
        options: ["// comment", "/* comment */", "// comment //"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question and options
function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    const questionElement = document.getElementById("quiz");

    questionElement.innerHTML = `
        <div class="question">${questionData.question}</div>
        <ul class="options">
            ${questionData.options.map((option, index) => `
                <li>
                    <input type="radio" name="option" value="${index}" id="option${index}">
                    <label for="option${index}">${option}</label>
                </li>
            `).join('')}
        </ul>
    `;
}

// Function to check the answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        const questionData = quizData[currentQuestionIndex];
        if (answerIndex === questionData.correctAnswer) {
            score++;
        }
    }
}

// Function to show the result
function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Your score is ${score} out of ${quizData.length}.`;
}

// Event listener for the "Next" button
document.getElementById("next-button").addEventListener("click", () => {
    checkAnswer();

    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResult();
        document.getElementById("next-button").disabled = true;
    }
});

// Initialize the quiz
loadQuestion();
