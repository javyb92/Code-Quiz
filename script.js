var nextButton = document.getElementById('Next-btn').style.visibility = "hidden";
var startButton = document.getElementById('quizStart-btn')
// var questionEl = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');

var currentQuestionsIndex;


startButton.addEventListener('click', quizStart);


function quizStart(){
  document.getElementById("quizStart-btn").style.visibility = "hidden";
  document.getElementById("Next-btn").style.visibility = "visible";
  timeSet();
  showQuestion();
};

function timeSet(){
  var secondsLeft = 90;
  var timeEl = document.querySelector(".time");
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " SECONDS LEFT!";
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
};


// function selectAnswer(){}



var questions = [
{

  question: 'What color is the sky?',
  answers:[

    { text: 'Blue', correct: true},
    { text: 'Green', correct: false}

          ]



}  
];


function showQuestion(){
  question.innerText = questions;

}