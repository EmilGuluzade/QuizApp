const quizData = [
  {
    question: "What is most popular proq lang?",
    a: "Python",
    b: "Java",
    c: "Javascript",
    d: "PHP",
    e: "C++",
    correct: "c",
  },
  {
    question: "Who is the president of Azerbaijan?",
    a: "Python",
    b: "Java",
    c: "Javascript",
    d: "Ilham Aliyev",
    e: "C++",
    correct: "d",
  },
  {
    question: "What is the most using lang in the world?",
    a: "Python",
    b: "English",
    c: "Javascript",
    d: "PHP",
    e: "C++",
    correct: "b",
  },
  {
    question: "What is your pronous ?",
    a: "He/Him",
    b: "Java",
    c: "Javascript",
    d: "PHP",
    e: "C++",
    correct: "a",
  },
  {
    question: "What is this app name?",
    a: "Python",
    b: "Java",
    c: "Javascript",
    d: "PHP",
    e: "Quizz App",
    correct: "e",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});