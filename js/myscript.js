let score = {
    sport: 0,
    luxury: 0,
    offroad: 0,
    comfort: 0
};

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
           { text: "Going out with friends", type: "sport" },
            { text: "Reading a book", type: "luxury" },
            { text: "Going on an adventure", type: "offroad" },
            { text: "Watching movies", type: "comfort" }
        ]
    },
    {
        question: "What matters to you most in a car?",
        answers: [
            { text: "Speed and performance", type: "sport" },
            { text: "Comfort and luxury", type: "luxury" },
            { text: "Off-road capabilities", type: "offroad" },
            { text: "Freedom", type: "comfort" }
        ]
    },    
    {
        question: "What type of journey do you prefer?",
        answers: [
            { text: "A thrilling road trip", type: "sport" },
            { text: "A relaxing drive through the countryside", type: "comfort" },
            { text: "An adventurous off-road expedition", type: "offroad" },
            { text: "A spontaneous drive with no destination", type: "luxury" }
        ]
    },
    {
        question: "What type of person are you?",
        answers: [
            { text: "A thrill-seeker who loves excitement", type: "sport" },
            { text: "A person who values comfort and luxury", type: "luxury" },
            { text: "An adventurer who loves outdoor challenges", type: "offroad" },
            { text: "A free spirit who values independence", type: "comfort" }
        ]
    },
    {
        question: "What is your ideal weekend getaway?",
        answers: [
            { text: "A weekend at a beach resort", type: "luxury" },
            { text: "A cozy cabin in the mountains", type: "offroad" },
            { text: "An exciting city break", type: "sport" },
            { text: "A peaceful retreat in the countryside", type: "comfort" }
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
            button.textContent = answer.text;
            button.classList.add('answer-btn');

            button.addEventListener('click', () => {
                score[answer.type]++;
                currentQuestion++;
               
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {

                    let highest = "sport";
                    for (let type in score) {
                        if (score[type] > score[highest]) {
                            highest = type;
                        }
                    }

                    document.getElementById("quiz").style.display = "none";
            
                    document.getElementById("results").style.display = "block";
            
                    document.getElementById("result-title").textContent = "Your Car Type";
            
                    document.getElementById("result-description").textContent = "Your result will appear here.";

                    document.getElementById("result-title").textContent = highest;
                }
            });
            answerButtons.appendChild(button);
        });
    }

