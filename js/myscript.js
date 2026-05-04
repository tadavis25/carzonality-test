const startButton = 
document.getElementById('start-btn');
const homeSection = 
document.getElementById('home');
const quizSection = 
document.getElementById('quiz');

startButton.addEventListener('click',
function () {
    homeSection.style.display = 'none';
    quizSection.style.display = 'block';
    showQuestion();
});

const questions = [
    {
    question: "How do you spend your weekends?",
        answers: [  
            "A) Going out with friends",
            "B) Reading a book",
            "C) Going on an adventure",
            "D) Watching movies"
        ]
    },
    {
        question: "What matters most to you in a car?",
        answers: [
            "A) Speed and performance", 
            "B) Comfort and luxury",
            "C) Off-road capabilities",
            "D) Freedom"
        ]
    }
];
    let currentQuestion = 0;

    function showQuestion() {
        const questionText = document.getElementById('question-text');
        const answerButtons = document.getElementById('answer-buttons');
        questionText.textContent = questions[currentQuestion].question;
        answerButtons.innerHTML = '';
        questions[currentQuestion].answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answer-btn');

            button.addEventListener('click', () => {
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    alert('Quiz completed!');
                }
            });
            answerButtons.appendChild(button);
        });
    }

