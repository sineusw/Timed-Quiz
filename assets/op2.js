// const start = document.getElementById("start");

// start.addEventListener("click", startQuiz )
// let TIMER;
// function startQuiz(){
//     start.style.display = "none";
//     renderQuestion();
//     counterRender();
//     TIMER = setInterval(countRender,1000);
//     progressRender();
//     questionRender();
//     quiz.style.display = "block";
// }



// const quiz = document.getElementById("quiz");

// const qImg = document.getElementById("questionImage");

// const question = document.getElementById("question");

// const counter = document.getElementById("counter");

// const timeGauge = document.getElementById("timeGauge");

// const choiceA = document.getElementById("A");
// const choiceB = document.getElementById("B");
// const choiceC = document.getElementById("C");
// const choiceD = document.getElementById("D");

// const progress = document.getElementById("progress");

// const scoreContainer = document.getElementById("scoreContainer");
// // these are the question
// let questions = [
//     {
//       question : "What is the fastest land animal?",
//       choiceA : "Lion",
//       choiceB : "Bear",
//       choiceC: "Cheetah",
//       choiceD: "Antelope",
//       correct : "C"
//     },
//     {
//       question : "What does the “M's” in M&Ms stand for?",
//       choiceA : "Mars and Murrie",
//       choiceB : "Milk and Mmmm",
//       choiceC : "Many and More",
//       choiceD : "Mars and More",
//       correct : "A"
//       },
//     {
//         question : "What is the national animal of Scotland?",
//         choiceA : "Unicorn",
//         choiceB : "Polar Bear",
//         choiceC : "Golden Eagle",
//         choiceD : "Enigmatic Scottish Wildcat",
//         correct : "A"
//     },
//     {
//         question : "Where was the fortune cookie invented?",
//           choiceA: "Japan",
//           choiceB: "America",
//           choiceC: "China",
//           choiceD: "Australia",
//           correct : "B"
//       },
//     {
//         question5: "What is the plastic piece on the end of a shoelace called?",
//           choiceA : "Lace Stopper",
//           choiceB : "Aglet",
//           choiceC : "Stinefit",
//           choiceD : "Lace End Piece",
//           correct : "B"
//     }
//   ];

// //   array = [a, b, c, d]

// //   let lastQuestionIdex = question.length - 1;
//   const lastQuestion = question.length - 1;
//   let runningQuestionIndex = 0;

//   function renderQuestion(){
//       let q = questions[runningQuestionIndex];
//       question.innerHTML = "<p>" +q.question+ "</p>";
//       choiceA.innerHTML = q.choiceA;
//       choiceB.innerHTML = q.choiceB;
//       choiceC.innerHTML = q.choiceC;
//       choiceD.innerHTML = q.choiceD;
//   }
  
//   function progressRender(){
//       for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
//           progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
//       }
//     }
//     function answerIsCorrect(){
//       document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
//     }
//     function answerIsWrong(){
//         document.getElementById(runningQuestionIndex).style.backgroundColor = "red"
//     }

// // this is for the timer
// const questionTime = 25; //seconds per question
// const gaugeWidth = 150;
// let count     =     0;
// const gaugeProgressUnit = gaugeWidth/questionTime;

// function counterRender(){
//     if( count <= questionTime ){
//         counter.innerHTML = count;
//         timeGauge.style.width = gaugeProgressUnit * count + "px" ;
//         count++;
//     }else{
//         count = 0;
//         answerIsWrong();
//         if( runningQuestionIndex < lastQuestionIndex ){
//             runningQuestionIndex++;
//             questionRender();
//         }else{ clearInterval(TIMER);
//                scoreRender();
//         }
//     }
// }
// //this might be duplicated
// // let TIMER = 
//     setInterval(counterRender,1000);

//     // Stop running: setInterval()
//     // clearInterval( TIMER );

//     let score =0;
//     function checkAnswer(answer){
//         if(question[runningQuestionIndex].correct == answer){
//             score++;
//             answerIsCorrect();
//         }else{
//             answerIsWrong();
//         }
//         if(runningQuestionIndex < lastQuestionIdex){
//             count = 0;
//             runningQuestionIndex++;
//             questionRender();
//         }else{
//             clearInterval(TIMER);
//             scoreRender();
//         }
//     }
// // // if statement
// //     if( Y == "one"){
// //         X = 1;
// //     }else {
// //         X = 0;
// //     }
// // // else if statement
// //     if( Y == "one"){
// //         X = 1;
// //     }else if(Y == "zero"){
// //         X = 0;
// //     } else {
// //         X = 2;
// //     }

//     function scoreRender(){
//         scoreContainer.style.display = "block";
//         let scorePerCent = Math.round(100 * score / questions.length );
//         scoreContainer.innerHTML = "<p>" + scorePerCent + "%</p>";
//     }

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
// const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
//question //: "What is the fastest land animal?",
//       choiceA : "Lion",
//       choiceB : "Bear",
//       choiceC: "Cheetah",
//       choiceD: "Antelope",
//       correct : "C"
//     },
//     {
//       question : "What does the “M's” in M&Ms stand for?",
//       choiceA : "Mars and Murrie",
//       choiceB : "Milk and Mmmm",
//       choiceC : "Many and More",
//       choiceD : "Mars and More",
//       correct : "A"
//       },
//     {
//         question : "What is the national animal of Scotland?",
//         choiceA : "Unicorn",
//         choiceB : "Polar Bear",
//         choiceC : "Golden Eagle",
//         choiceD : "Enigmatic Scottish Wildcat",
//         correct : "A"
//     },
//     {
//         question : "Where was the fortune cookie invented?",
//           choiceA: "Japan",
//           choiceB: "America",
//           choiceC: "China",
//           choiceD: "Australia",
//           correct : "B"
//       },
//     {
//         question5: "What is the plastic piece on the end of a shoelace called?",
//           choiceA : "Lace Stopper",
//           choiceB : "Aglet",
//           choiceC : "Stinefit",
//           choiceD : "Lace End Piece",
//           correct : "B"
let questions = [
    {
        question : "What is the fastest land animal?",
        // imgSrc : "img/html.png",
        choiceA: "Lion",
        choiceB : "Bear",
        choiceC : "Cheetah",
        choiceD : "Antelope",
        correct : "C"
    },{
        question : "What does the “M's” in M&Ms stand for?",
        // imgSrc : "img/html.png",
        choiceA : "Mars and Murrie",
        choiceB : "Milk and Mmmm",
        choiceC : "Many and More",
        choiceD : "Mars and More",
        correct : "A"
    },{
        question : "What is the national animal of Scotland?",
        // imgSrc : "img/js.png",
        choiceA : "Unicorn",
        choiceB : "Polar Bear",
        choiceC : "Golden Eagle",
        choiceD : "Scottish Wildcat",
        correct : "A"
    },{
        question : "Where was the fortune cookie invented?",
        // imgSrc : "img/js.png",
        choiceA: "Japan",
        choiceB: "America",
        choiceC: "China",
        choiceD: "Australia",
        correct : "B"
    },{
        question : "What is the plastic piece on the end of a shoelace called?",
        // imgSrc : "img/js.png",
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
        // change progress color to red
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

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
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

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    

      
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
