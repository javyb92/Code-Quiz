// Var, Const, let

const nextButton = document.getElementById('Next-btn')
const startButton = document.getElementById('quizStart-btn');
const answerButton = document.getElementById('answer-buttons');
let questionEl = document.getElementById('question');

// Global Variables, scoreNumber is for score, count is vital for showing questions
var scoreNumber = 0;
var count= -1;

// start button
startButton.addEventListener('click', quizStart);

function quizStart(){
  document.getElementById("Next-btn").style.visibility = "visible";
  document.getElementById("quizStart-btn").style.visibility = "hidden";
  timeSet();
  nextQuestionSet();
  nextButton.addEventListener('click', nextQuestionSet);
  
  
};

// Timer stuff
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

// Score Stuff
function score(){
  var scoreEl = document.querySelector("#scorenumber");
  scoreEl.textContent = scoreNumber;
}

// Question stuff, Placeholder Questions I made,See line 91 for actual answers

function nextQuestionSet(){
count++;
if(count<7) { 
 document.getElementById("question").innerHTML = (questions[count].question); 
 document.getElementById("answer0").innerHTML = questions[count].answers[0].text; 
 document.getElementById("answer1").innerHTML = questions[count].answers[1].text; 
 document.getElementById("answer2").innerHTML = questions[count].answers[2].text;
 document.getElementById("answer3").innerHTML = questions[count].answers[3].text; 
};
answerButton.addEventListener('click', checkanswer);
// else{
// // alert("Done!");
// }
}; 

// Check Answers, right now every button pressed is a correct answer as shown by an alert, score doesnt work.

function checkanswer() {

  if (this){
    alert("correct answer");
    scorenumber++;
  }

  else{
    alert("wrong");
  }
};
  
// Questions, using placeholder questions
const questions = [
{
  question:  'What color is the sky?',
  answers:[

    { text: 'Blue', correct: true},
    { text: 'Green', correct: false},
    { text: 'Red', correct: false},
    { text: 'Banana', correct: false},

          ]
}, 
{
  question: 'What color is the moon?',
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
    { text: 'Green', correct: true},
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