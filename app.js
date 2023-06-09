const quizData = [
    {
        question: 'Sivrisineklerin kaç adet dişi vardır?',
        a: '45',
        b: '47',
        c: '50',
        d: '52',
        correct: 'b',
    },
    {
        question: 'Zürafaların dilleri kaç cm uzayabilir?',
        a: '30',
        b: '35',
        c: '40',
        d: '45',
        correct: 'd',
    },
    {
        question: 'Ahtapotların kaç kalbi vardır',
        a: '5',
        b: '4',
        c: '3',
        d: '2',
        correct: 'c',
    },
    {
        question: 'Timsahlar suyun altında kaç saat kalabilir?',
        a: '5',
        b: '4',
        c: '6',
        d: '2',
        correct: 'd',
    },
    {
        question: 'Ahtapotların kaç kolu vardır?',
        a: '6',
        b: '7',
        c: '8',
        d: '9',
        correct: 'c',
    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('questions')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2> Test tamamlandı, Puanınız: ${score * 20} </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene </button>

    `
    }
  }
})