var userScore= 0
var quizTime= 60
const startButton= document.getElementById('start-btn')


startButton.addEventListener("click", startQuiz)

function startQuiz(){
    confirm("Click OK!")
    if(window.confirm){
        window.open("gamepage.html")
    }
}

nextQuestion()


startTimer()


function nextQuestion(){}


function selectAnswer(){}


const questions = [





    
]