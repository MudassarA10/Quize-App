const questions = [
  {
    question: "what is the capital of Pakistan",
    answer: [
      { text: "Karachi", correct: false },
      { text: "Islamabad", correct: true },
      { text: "Lahore", correct: false },
      { text: "Wazirabad", correct: false },
    ],
  },
  {
    question: "what is the capital of India",
    answer: [
      { text: "Mumbai", correct: false },
      { text: "Kolkata", correct: false },
      { text: "Delhi", correct: true },
      { text: "Pune", correct: false },
    ],
  },
  {
    question: "what is the capital of USA",
    answer: [
      { text: "Anglos", correct: false },
      { text: "New York", correct: true },
      { text: "Washington DC", correct: false },
      { text: "Ohoyo", correct: false },
    ],
  },
  {
    question: "what is the capital of Uk",
    answer: [
      { text: "London", correct: true },
      { text: "Manchester", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: false },
    ],
  },
  {
    question: "what is the capital of Australia",
    answer: [
      { text: "Perth", correct: false },
      { text: "Adelaide", correct: false },
      { text: "None", correct: false },
      { text: "Sydney", correct: true },
    ],
  },
  {
    question: "what is the capital of UAE",
    answer: [
      { text: "sharhjah", correct: false },
      { text: "dubai", correct: false },
      { text: "RASAL KHAMA", correct: false },
      { text: "Abu Dabhi", correct: true },
    ],
  },
  {
    question: "what is the capital of Newzeland",
    answer: [
      { text: "kula", correct: false },
      { text: "Auckland", correct: false },
      { text: "jino", correct: false },
      { text: "Chriescherch", correct: true },
    ],
  },
  {
    question: "what is the capital of Japan",
    answer: [
      { text: "Perth", correct: false },
      { text: "Adelaide", correct: false },
      { text: "None", correct: false },
      { text: "tokyo", correct: true },
    ],
  },
  {
    question: "what is the capital of Bandladesh",
    answer: [
      { text: "Perth", correct: false },
      { text: "Sylhet", correct: false },
      { text: "None", correct: false },
      { text: "Dhaka", correct: true },
    ],
  },
  {
    question: "what is the capital of china",
    answer: [
      { text: "bijing", correct: false },
      { text: "meo", correct: false },
      { text: "None", correct: false },
      { text: "krmabad", correct: true },
    ],
  },
];

const questionEl = document.getElementById("question");
const answerBtnContainer = document.getElementById("question-answer");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
//////////////////////////////////////////////
function showQuestion() {
  answerBtnContainer.innerHTML = "";
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtnContainer.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
//////////////////////////////////
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "NEXT";
  showQuestion();
}
/////////////////////////////////////////
function selectAnswer(e) {
  const selectedbtn = e.target;
  const isCorrect = selectedbtn.dataset.correct === "true";
  if (isCorrect) {
    selectedbtn.classList.add("correct");
    score++;
  } else {
    selectedbtn.classList.add("incorrect");
  }
  Array.from(answerBtnContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}
///////////////////////////////////////////////
function reset() {
  nextBtn.style.display = "none";
  while (answerBtnContainer.firstChild) {
    answerBtnContainer.removeChild(answerBtnContainer.firstChild);
  }
}
/////////////////////////////////////////////

function showscore() {
  reset();
  questionEl.innerHTML = `Your Score is ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again!";
  nextBtn.style.display = "block";
}
/////////////////////////////////////////////////
function handlenextbtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showscore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handlenextbtn();
  } else {
    startQuiz();
  }
});

startQuiz();
