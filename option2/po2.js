const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGuage");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");

let questions = [
    {
      question : "What is the fastest land animal?",
      choiceA : "Lion",
      choiceB : "Bear",
      choiceC: "Cheetah",
      choiceD: "Antelope",
      correct : "C"
    },
    {
      question : "What does the “M's” in M&Ms stand for?",
      choiceA : "Mars and Murrie",
      choiceB : "Milk and Mmmm",
      choiceC : "Many and More",
      choiceD : "Mars and More",
      correct : "A"
      },
    {
        question : "What is the national animal of Scotland?",
        choiceA : "Unucorn",
        choiceB : "Polar Bear",
        choiceC : "Golden Eagle",
        choiceD : "Enigmatic Scottish Wildcat",
        correct : "A"
    },
    {
        question : "Where was the fortune cookie invented?",
          choiceA: "Japan",
          choiceB: "America",
          choiceC: "China",
          choiceD: "Australia",
          correct : "B"
      },
    {
        question5: "What is the plastic piece on the end of a shoelace called?",
          choiceA : "Lace Stopper",
          choiceB : "Aglet",
          choiceC : "Stinefit",
          choiceD : "Lace End Piece",
          correct : "B"
    }
  ];

//   array = [a, b, c, d]

  let lastQuestionIdex = question.length- 1;
  let runningQuestionIndex = 0;

  function renderQuestion(){
      let q = questions[runningQuestionIndex];
      question.innerHTML = "<p>" +q.question+ "</p>";
      choiceA.innerHTML = q.choiceA;
      choiceB.innerHTML = q.choiceB;
      choiceC.innerHTML = q.choiceC;
      choiceD.innerHTML = q.choiceD;
  }
  
  function progressRender(){
      for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
          progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
      }
    }
    function answerIsCorrect(){
      document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
    }
    function answerIsWrong(){
        document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
    }