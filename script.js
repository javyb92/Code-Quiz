var timeEl = document.querySelector(".time");

var secondsLeft = 90;
const startButton= document.getElementById('start-btn');

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " SECONDS LEFT!";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }


// nextQuestion()


// function nextQuestion(){}


// function selectAnswer(){}


// const questions = [





    
// ]

setTime();