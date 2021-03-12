const start = document.getElementById("start");

start.addEventListener("click", startQuiz )
let TIMER;
function startQuiz(){
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(countRender,1000);
    progressRender();
    questionRender();
    quiz.style.display = "block";
}



const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");
// these are the question
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

//   let lastQuestionIdex = question.length - 1;
  const lastQuestion = question.length - 1;
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

// this is for the timer
const questionTime = 25; //seconds per question
const gaugeWidth = 150;
let count     =     0;
const gaugeProgressUnit = gaugeWidth/questionTime;

function counterRender(){
    if( count <= questionTime ){
        counter.innerHTML = count;
        timeGauge,style.width = gaugeProgressUnit * count + "px" ;
        count++;
    }else{
        count = 0;
        answerIsWrong();
        if( runningQuestionIndex < lastQuestionIndex ){
            runningQuestionIndex++;
            questionRender();
        }else{ clearInterval(TIMER);
               scoreRender();
        }
    }
}
//this might be duplicated
let TIMER = 
    setInterval(counterRender,1000);

    // Stop running: setInterval()
    // clearInterval( TIMER );

    let score =0;
    function checkAnswer(answer){
        if(question[runningQuestionIndex].correct == answer){
            score++;
            answerIsCorrect();
        }else{
            answerIsWrong();
        }
        if(runningQuestionIndex < lastQuestionIdex){
            count = 0;
            runningQuestionIndex++;
            questionRender();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
// if statement
    if( Y == "one"){
        X = 1;
    }else {
        X = 0;
    }
// else if statement
    if( Y == "one"){
        X = 1;
    }else if(Y == "zero"){
        X = 0;
    } else {
        X = 2;
    }

    function scoreRender(){
        scoreContainer.style.display = "block";
        let scorePerCent = Math.round(100 * score / questions.length );
        scoreContainer.innerHTML = "<p>" + scorePerCent + "%</p>";
    }
