var nextButton = document.getElementById('Next-btn').style.visibility = "hidden";
var startButton = document.getElementById('quizStart-btn')
const questionEl = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');

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
        alert("Times up!")
      }
    }, 1000);
};


// function selectAnswer(){

// if true


// if false


// }


const questions = [
{

  question: 'What color is the sky?',
  answers:[

    { text: 'Blue', correct: true},
    { text: 'Green', correct: false},
    { text: 'Red', correct: false},
    { text: 'Banana', correct: false},

          ]



}, 
{

  question: 'What color is the moon',
  answers:[

    { text: 'White', correct: true},
    { text: 'Green', correct: false},
    { text: 'Pink', correct: false},
    { text: 'Death Star', correct: false},

          ]



},  
{

  question: 'What color is the Dallas Cowboys Logo?',
  answers:[

    { text: 'Blue', correct: true},
    { text: 'Green', correct: false},
    { text: 'Eagles', correct: false},
    { text: 'Orange', correct: false},

          ]



},   
{

  question: 'What color is is the Dallas Stars Logo?',
  answers:[

    { text: 'White', correct: false},
    { text: 'Green', correct: false},
    { text: 'Redwings', correct: false},
    { text: 'Yellow', correct: false},
          ]



},   
{

  question: 'What color is the White House',
  answers:[

    { text: 'White', correct: true},
    { text: 'Black', correct: false},
    { text: 'Grey', correct: false},
    { text: 'Blue', correct: false},

          ]



},   
{

  question: 'What color is Rainbow?',
  answers:[

    { text: 'All of Them', correct: true},
    { text: 'Apple', correct: false},
    { text: 'Only Brown', correct: false},
    { text: 'Ford Mustang', correct: false},
    

          ]



},   
{

  question: '9 + 1 =?',
  answers:[

    { text: '10', correct: true},
    { text: '9', correct: false},
    { text: '01', correct: false},
    { text: '91', correct: false},

          ]



},      
];



function showQuestion(){
  
  var questionEl = document.getElementById("question").innerHTML = questions[0].question;



};


