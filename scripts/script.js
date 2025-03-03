let currentQuestionIndex = 0;
let correctAnswerScore = 0;

function init() {
  setTotalQuestionsNumber(questions);
  showCurrentQuestion();
}

function setTotalQuestionsNumber(array) {
  contentRef = document.getElementById("total_questions_number");
  contentRef.innerHTML = String(array.length);
}

function showCurrentQuestion() {
  let question = questions[currentQuestionIndex];
  document.getElementById("question_text").innerHTML = String(
    question.question
  );
  document.getElementById("answer_1").innerHTML = String(question.answer_1);
  document.getElementById("answer_2").innerHTML = String(question.answer_2);
  document.getElementById("answer_3").innerHTML = String(question.answer_3);
  document.getElementById("answer_4").innerHTML = String(question.answer_4);
}

function answer(answerIndex) {
  let question = questions[currentQuestionIndex];
  let answerId = "answer_" + String(answerIndex);
  let answerParentNodeRef = document.getElementById(answerId).parentNode;

  if (answerIndex == question.correct_answer) {
    answerParentNodeRef.classList.add("bg-success");
    correctAnswerScore += 1;
  } else {
    answerParentNodeRef.classList.add("bg-danger");
    highlightCorrectAnswer();
  }
  enableNextQuestionBtn();
}

function highlightCorrectAnswer() {
  let correctQuestionIndex = questions[currentQuestionIndex].correct_answer;
  let correctAnswerId = "answer_" + String(correctQuestionIndex);
  let correctAnswerParentNodeRef =
    document.getElementById(correctAnswerId).parentNode;
  correctAnswerParentNodeRef.classList.add("bg-success");
}

function enableNextQuestionBtn() {
  document.getElementById("next_question_btn").disabled = false;
}

function disableNextQuestionBtn() {
  document.getElementById("next_question_btn").disabled = true;
}

function getNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    removeAnswerBgs();
    disableNextQuestionBtn();
    setCurrentQuestionNumber();
    showCurrentQuestion();
    setProgressBar();
  } else {
    showEndScreen();
  }
}

function removeAnswerBgs() {
  let answerElementIds = ["answer_1", "answer_2", "answer_3", "answer_4"];
  for (let i = 0; i < answerElementIds.length; i++) {
    let answerParentNodeRef = document.getElementById(
      answerElementIds[i]
    ).parentNode;
    answerParentNodeRef.classList.remove("bg-success", "bg-danger");
  }
}

function setCurrentQuestionNumber() {
  document.getElementById("current_question").innerHTML = String(
    currentQuestionIndex + 1
  );
}

function showEndScreen() {
  let quizScreenRef = document.getElementById("question_screen");
  quizScreenRef.innerHTML = "";
  quizScreenRef.innerHTML = getEndScreenTemplate();
}

function repeatQuiz() {
  currentQuestionIndex = 0;
  correctAnswerScore = 0;

  let quizScreenRef = document.getElementById("question_screen");
  quizScreenRef.innerHTML = "";
  quizScreenRef.innerHTML = getQuizScreenTemplate();

  setTotalQuestionsNumber(questions);
  showCurrentQuestion();
}

function setProgressBar() {
  let progressValue = currentQuestionIndex / questions.length;
  progressValuePercent = parseFloat(progressValue).toFixed(2) * 100;
  progressValuePercentStr = String(progressValuePercent) + " %";

  let progressbarRef = document.getElementById("progress_bar");
  progressbarRef.style = "width: " + progressValuePercent + "%";
}
