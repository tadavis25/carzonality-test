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
            "Going out with friends",
            "Reading a book",
            "Going on an adventure",
            "Watching movies"
        ]
    },
    {
        question: "What matters to you most in a car?",
        answers: [
            "Speed and performance", 
            "Comfort and luxury",
            "Off-road capabilities",
            "Freedom"
        ]
    },    
    {
        question: "What type of journey do you prefer?",
        answers: [
            "A thrilling road trip",
            "A relaxing drive through the countryside",
            "An adventurous off-road expedition",
            "A spontaneous drive with no destination"
        ]
    },
    {
        question: "What type of person are you?",
        answers: [
            "A thrill-seeker who loves excitement",
            "A person who values comfort and luxury",
            "An adventurer who loves outdoor challenges",
            "A free spirit who values independence"
        ]
    },
    {
        question: "What is your ideal weekend getaway?",
        answers: [
            "A weekend at a beach resort",
            "A cozy cabin in the mountains",
            "An exciting city break",
            "A peaceful retreat in the countryside"
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
           
                    document.getElementById("quiz").style.display = "none";
            
                    document.getElementById("results").style.display = "block";
            
                    document.getElementById("result-title").textContent = "Your Car Type";
            
                    document.getElementById("result-description").textContent = "Your result will appear here.";
                }
            });
            answerButtons.appendChild(button);
        });
    }

