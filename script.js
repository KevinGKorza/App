const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let countRightAnswers = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
}
)
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  countRightAnswers = 0;
  c = 20;
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  if (selectedButton.dataset = correct) {
    countRightAnswers++;
  }
  document.getElementById('score001').innerHTML = countRightAnswers;
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function timer001() {
  c = c - 1;
  if (c < 20) {
    time001.innerHTML = c;
  }

  if (c < 1) {
    window.clearInterval(update);
  }
}

update = setInterval('timer001()', 1000);

const questions = [
  {
    question: 'What is 4 + 4?',
    answers: [
      { text: '4', correct: false },
      { text: '22', correct: false },
      { text: '8', correct: true },
      { text: '44', correct: false }
    ]
  },
  {
    question: 'Who is the developer of this game?',
    answers: [
      { text: 'Otis', correct: true },
      { text: 'Jesus', correct: false },
      { text: 'Mike', correct: false },
      { text: 'Jason', correct: false }
    ]
  },
  {
    question: 'What is the middle day of the week?',
    answers: [
      { text: 'Monday', correct: false },
      { text: 'Thursday', correct: true },
      { text: 'Wednesday', correct: false },
      { text: 'Friday', correct: false }
    ]
  },
  {
    question: 'What is the middle day of the work week?',
    answers: [
      { text: 'Monday', correct: false },
      { text: 'Thursday', correct: false },
      { text: 'Wednesday', correct: true },
      { text: 'Friday', correct: false }
    ]
  },
  {
    question: 'Monday, Tuesday, ______, Thursday?',
    answers: [
      { text: 'Monday', correct: false },
      { text: 'Thursday', correct: false },
      { text: 'Wednesday', correct: true },
      { text: 'Friday', correct: false }
    ]
  },
  {
    question: '1, 2, 3, ____, 5',
    answers: [
      { text: '1', correct: false },
      { text: '2', correct: false },
      { text: '4', correct: true },
      { text: '3', correct: false }
    ]
  },
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '2', correct: false },
      { text: '22', correct: false },
      { text: '24', correct: false }
    ]
  },
  {
    question: 'May, June, ______?',
    answers: [
      { text: 'May', correct: false },
      { text: 'July', correct: true },
      { text: 'June', correct: false },
      { text: 'April', correct: false }
    ]
  },
  {
    question: 'Untied State of ______',
    answers: [
      { text: 'Washington', correct: false },
      { text: 'New York', correct: false },
      { text: 'America', correct: true },
      { text: 'Maryland', correct: false }
    ]
  },
  {
    question: 'If b=y, and y=3, then b=?',
    answers: [
      { text: '2', correct: false },
      { text: '3', correct: true },
      { text: '4', correct: false },
      { text: '6', correct: false }
    ]
  },
  {
    question: 'If ab=y, and a=4, b=2, then y=?',
    answers: [
      { text: '8', correct: true },
      { text: '6', correct: false },
      { text: '4', correct: false },
      { text: '2', correct: false }
    ]
  },
  {
    question: 'If x=y, and x=0, then y=??',
    answers: [
      { text: '0', correct: true },
      { text: '2', correct: false },
      { text: '4', correct: false },
      { text: '8', correct: false }
    ]
  }
]
