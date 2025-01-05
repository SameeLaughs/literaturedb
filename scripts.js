let questions = [];
let currentQuestionIndex = 0;

async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        questions = await response.json();
        loadQuestion();
    } catch (error) {
        console.error('Failed to load questions:', error);
    }
}

function loadQuestion() {
    if (questions.length > 0) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').innerText = currentQuestion.question;
    }
}
loadQuestions();
