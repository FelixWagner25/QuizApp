function getEndScreenTemplate() {
  return `
        <img src="./img/brain result.png" class="result-img my-4" >
        <div class="endsrceen-text">
            <h5 class="card-title" id="question_text">Quiz beendet</h5>
            <div class="my-4">Dein Spielstand: ${correctAnswerScore} / ${questions.length}</div>
            <div class="question-footer-endscreen">
            <button
                href="#"
                class="btn btn-primary"
                id="next_question_btn"
                onclick="repeatQuiz()"
            >
                Quiz Wiederholen
            </button>
            </div>
        </div>
        `;
}

function getQuizScreenTemplate() {
  return `
    <h5 class="card-title mb-3" id="question_text">Frage</h5>

          <div class="card mt-2" onclick="answer(1)">
            <div class="card-body quiz-answer-card" id="answer_1">
              Antwort I
            </div>
          </div>
          <div class="card mt-2" onclick="answer(2)">
            <div class="card-body quiz-answer-card" id="answer_2">
              Antwort II
            </div>
          </div>
          <div class="card mt-2" onclick="answer(3)">
            <div class="card-body quiz-answer-card" id="answer_3">
              Antwort III
            </div>
          </div>
          <div class="card mt-2" onclick="answer(4)">
            <div class="card-body quiz-answer-card" id="answer_4">
              Antwort IV
            </div>
          </div>
          <div class="progress mt-4" role="progressbar" style="height: 12px">
            <div id="progress_bar" class="progress-bar" style="width: 0%"></div>
          </div>
          <div class="question-footer my-2">
            <div>
              <b id="current_question">1</b> von
              <b id="total_questions_number">5</b> Fragen
            </div>
            <button
              href="#"
              class="btn btn-primary"
              id="next_question_btn"
              disabled
              onclick="getNextQuestion()"
            >
              Nächste Frage
            </button>
          </div>
    `;
}
