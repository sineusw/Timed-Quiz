// these are all the consts
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
// these are the questions
let questions = [
    {
        question : "What is the fastest land animal?",
        choiceA: "Lion",
        choiceB : "Bear",
        choiceC : "Cheetah",
        choiceD : "Antelope",
        correct : "C"
    },{
        question : "What does the “M's” in M&Ms stand for?",
        choiceA : "Mars and Murrie",
        choiceB : "Milk and Mmmm",
        choiceC : "Many and More",
        choiceD : "Mars and More",
        correct : "A"
    },{
        question : "What is the national animal of Scotland?",
        choiceA : "Unicorn",
        choiceB : "Polar Bear",
        choiceC : "Golden Eagle",
        choiceD : "Scottish Wildcat",
        correct : "A"
    },{
        question : "Where was the fortune cookie invented?",
        choiceA: "Japan",
        choiceB: "America",
        choiceC: "China",
        choiceD: "Australia",
        correct : "B"
    },{
        question : "What is the plastic piece on the end of a shoelace called?",
        choiceA : "Stinefit",
        choiceB : "Aglet",
        choiceC : "Lace Stopper",
        choiceD : "Lace End Piece",
        correct : "B"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 25; // 25s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
// start button
start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color bubble to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnswer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // if answer is right
        score++;
        // change progress color bubble to green
        answerIsCorrect();
    }else{
        // if answer is wrong
        // change progress color bubble to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// if answer is Right
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// if answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // finding out the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    

      
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
