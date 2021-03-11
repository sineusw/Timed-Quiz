const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        // the code we want to run for each question goes here
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults(){}

// show quiz asap
buildQuiz();

// when you click submit the results will show up
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
      question: "What is the fastest land animal?",
      answers: {
        a: "Lion",
        b: "Bear",
        c: "Cheetah",
        d: "Antelope"
      },
      correctAnswer: "c"
    },
    {
      question: "What does the “M's” in M&Ms stand for?",
      answers: {
        a: "Mars and Murrie",
        b: "Milk and Mmmm",
        c: "Many and More",
        d: "Mars and More"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the national animal of Scotland?",
      answers: {
        a: "Unucorn",
        b: "Polar Bear",
        c: "Golden Eagle",
        d: "Enigmatic Scottish Wildcat"
      },
      correctAnswer: "a"
    }
    {
        question: "Where was the fortune cookie invented?",
        answers: {
          a: "Japan",
          b: "America",
          c: "China",
          d: "Australia"
        },
        correctAnswer: "b"
      },
      {
        question: "What is the plastic piece on the end of a shoelace called?",
        answers: {
          a: "Lace Stopper",
          b: "Aglet",
          c: "Stinefit",
          d: "Lace End Piece"
        },
        correctAnswer: "ab"
      }
  ];