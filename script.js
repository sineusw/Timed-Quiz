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
        for(currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${question3}" value="${letter}">
              ${"a"} :
              ${currentQuestion.answers["a"]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question1} </div>
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
      question2: "What does the “M's” in M&Ms stand for?",
      answers2: {
        a: "Mars and Murrie",
        b: "Milk and Mmmm",
        c: "Many and More",
        d: "Mars and More"
      },
      correctAnswer2: "a"
    },
    {
      question3: "What is the national animal of Scotland?",
      answers3: {
        a: "Unucorn",
        b: "Polar Bear",
        c: "Golden Eagle",
        d: "Enigmatic Scottish Wildcat"
      },
      correctAnswer3: "a"
    }
    {
        question4: "Where was the fortune cookie invented?",
        answers4: {
          a: "Japan",
          b: "America",
          c: "China",
          d: "Australia"
        },
        correctAnswer4: "b"
      },
      {
        question5: "What is the plastic piece on the end of a shoelace called?",
        answers5: {
          a: "Lace Stopper",
          b: "Aglet",
          c: "Stinefit",
          d: "Lace End Piece"
        },
        correctAnswer5: "ab"
      }
  ];