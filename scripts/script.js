let currentQuestionIndex = 0;

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
  } else {
    answerParentNodeRef.classList.add("bg-danger");
  }
}
