let questions = [];
let currentQuestionIndex = 0;

// Load questions from the JSON file
async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        questions = await response.json();
        loadQuestion();
    } catch (error) {
        console.error('Failed to load questions:', error);
    }
}

// Load a question
function loadQuestion() {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').innerText = currentQuestion.question;
    } else {
        document.getElementById('question').innerText = "No more questions!";
    }
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Example of advancing to the next question after submitting an answer
document.getElementById('submitAnswer').addEventListener('click', nextQuestion);

// Initialize
loadQuestions();
