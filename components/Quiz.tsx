"use client";

import { useState } from "react";
import { questions } from "@/lib/data";

const optIcons = ["🅰️", "🅱️", "🅾️", "🆕"];

type Outcome = {
  title: string;
  emoji: string;
  msg: string;
};

function getOutcome(score: number, total: number): Outcome {
  const pct = score / total;
  if (pct === 1) return { emoji: "🏆", title: "Perfect Score!", msg: "You're an animal genius! Amazing!" };
  if (pct >= 0.8) return { emoji: "🌟", title: "Superstar!", msg: "Incredible — you really know your animals!" };
  if (pct >= 0.6) return { emoji: "😄", title: "Great Job!", msg: "You're learning fast — keep exploring!" };
  if (pct >= 0.4) return { emoji: "🙂", title: "Good Effort!", msg: "Keep reading those animal facts!" };
  return { emoji: "🐾", title: "Keep Exploring!", msg: "The animals are waiting to teach you more!" };
}

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const q = questions[index];
  const answered = selected !== null;

  function choose(i: number) {
    if (answered) return;
    setSelected(i);
    if (i === q.correct) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 < questions.length) {
      setIndex((n) => n + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  }

  const progress = finished
    ? 100
    : (index / questions.length) * 100;

  return (
    <section className="section quiz-section" id="quiz">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">🧩 Test Your Knowledge</span>
          <h2>Animal Quiz Time!</h2>
          <p>How many can you get right?</p>
        </div>

        {!finished ? (
          <div className="quiz-box">
            <div className="quiz-progress">
              <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
            </div>
            <div className="quiz-counter">
              Question {index + 1} of {questions.length}
            </div>

            <div className="quiz-question">{q.q}</div>

            <div className="quiz-options">
              {q.options.map((opt, i) => {
                let cls = "quiz-opt";
                if (answered) {
                  if (i === q.correct) cls += " correct";
                  else if (i === selected) cls += " wrong";
                }
                return (
                  <button
                    key={i}
                    className={cls}
                    disabled={answered}
                    onClick={() => choose(i)}
                  >
                    <span className="opt-icon">
                      {answered && i === q.correct ? "✅" : optIcons[i]}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="quiz-result">
                <div className="result-icon">
                  {selected === q.correct ? q.emojiCorrect : q.emojiWrong}
                </div>
                <div className="result-msg">
                  <strong>
                    {selected === q.correct ? "Correct! " : "Not quite! "}
                  </strong>
                  {q.explanation}
                </div>
                <button className="btn btn-primary" onClick={next}>
                  {index + 1 < questions.length ? "Next Question →" : "See Results 🎯"}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="quiz-score-board">
            {(() => {
              const o = getOutcome(score, questions.length);
              return (
                <>
                  <div className="score-emoji">{o.emoji}</div>
                  <h3>{o.title}</h3>
                  <p>{o.msg}</p>
                  <div className="score-display">
                    {score} / {questions.length}
                  </div>
                  <button className="btn btn-primary" onClick={restart}>
                    Play Again 🎉
                  </button>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
