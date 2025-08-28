const questions = [
  { id: 1, question: "What's your skin type?", options: ["Oily", "Dry", "Combination", "Normal"] },
  { id: 2, question: "What's your main skin concern?", options: ["Acne", "Aging", "Dark Spots", "Sensitive Skin"] },
  { id: 3, question: "How often do you use skincare products?", options: ["Daily", "Few times a week", "Rarely"] },
];

const recommendations = {
  Oily: "✨ Try our oil-control face wash & lightweight moisturizer. Say goodbye to shine and hello to balance.",
  Dry: "💧 Our hydrating serum & nourishing night cream are perfect for you. Give your skin the deep moisture it craves.",
  Combination: "🌿 Balance your skin with our toner & gel moisturizer. A perfect harmony for your T-zone and cheeks.",
  Normal: "🌸 Maintain your glow with our daily essentials kit. Simple, kind care to keep your skin vibrant and healthy.",
};

let step = 0;
let answers = {};
let result = null;

const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const progressBar = document.getElementById("quiz-progress-bar");
const progressText = document.getElementById("quiz-progress-text");
const quizCard = document.getElementById("quiz-card");
const quizResult = document.getElementById("quiz-result");
const recommendationEl = document.getElementById("quiz-recommendation");

function loadQuestion() {
  const q = questions[step];
  questionEl.textContent = q.question;

  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "quiz-btn";
    btn.onclick = () => handleAnswer(option);
    optionsEl.appendChild(btn);
  });

  // progress
  progressBar.style.width = ((step + 1) / questions.length) * 100 + "%";
  progressText.textContent = `Question ${step + 1} of ${questions.length}`;
}

function handleAnswer(option) {
  answers[questions[step].id] = option;

  if (step + 1 < questions.length) {
    step++;
    loadQuestion();
  } else {
    const skinType = answers[1] || option;
    result = recommendations[skinType] || "🌟 We'll recommend a custom kit!";
    showResult();
  }
}

function showResult() {
  quizCard.classList.add("hidden");
  quizResult.classList.remove("hidden");
  recommendationEl.textContent = result;
}

function restartQuiz() {
  step = 0;
  answers = {};
  result = null;
  quizResult.classList.add("hidden");
  quizCard.classList.remove("hidden");
  loadQuestion();
}

// initialize
document.addEventListener("DOMContentLoaded", loadQuestion);
