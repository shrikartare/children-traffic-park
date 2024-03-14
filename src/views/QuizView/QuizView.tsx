import React, { useState } from "react";
import cn from "classnames";
import { questions } from "./questions";
import styles from "./QuizView.module.css";

import Header from "../HomePageView/components/Header";
import Footer from "../HomePageView/components/Footer";

// const quizImages = require.context(
//   "../../images/quiz",
//   false,
//   /\.(png|jpe?g|svg)$/
// );

const importAll = (r: any) => {
  return r.keys().map(r);
};

const quizImages = importAll(
  require.context("../../images/quiz/", false, /\.(png|jpe?g|svg|jpg)$/)
);

console.log("quizImages", quizImages);
const QuizView = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [optionSelected, setOptionSelected] = useState("");

  const onNextClick = () => {
    setOptionSelected("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const onPreviousClick = () => {
    setOptionSelected("");
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const onOptionClick = (event: any, opt: any) => {
    setOptionSelected(opt);
  };

  const getOptionIndex = (index: number) => {
    if (index === 0) return "A";
    else if (index === 1) return "B";
    else if (index === 2) return "C";
    else if (index === 3) return "D";
  };

  const getQuestionImage = () => {
    const currentQuestion = questions[currentQuestionIndex];
    let currindex = quizImages.findIndex((imgName: string) =>
      imgName.includes(currentQuestion?.imageName || "")
    );

    return quizImages[currindex];
  };
  return (
    <>
      <Header />
      <div className={styles.quizContainer}>
        <div className={styles.quizHeadLine}>
          <h2>Traffic Quiz</h2>
        </div>

        <div className={styles.quizQuestion}>
          <p>
            Question ({currentQuestionIndex + 1}/{questions?.length})
          </p>
          <p>
            {questions[currentQuestionIndex].id}.&nbsp;
            {questions[currentQuestionIndex]?.question}
            &nbsp;&nbsp;&nbsp;
          </p>
          <img
            src={getQuestionImage()}
            height="100"
            width="100"
            alt="trafficImage"
          />
          <div className={styles.optionContainer}>
            {questions[currentQuestionIndex].options.map((opt, index) => {
              const isCorrectAnsSelected =
                optionSelected ===
                questions[currentQuestionIndex]?.correctAnswer;

              return (
                <button
                  disabled={optionSelected !== ""}
                  className={cn(
                    styles.option,
                    opt === questions[currentQuestionIndex]?.correctAnswer &&
                      optionSelected &&
                      styles.correctAnswer,
                    !isCorrectAnsSelected &&
                      optionSelected === opt &&
                      styles.wrongAnswer
                  )}
                  onClick={(event) => onOptionClick(event, opt)}
                >
                  {getOptionIndex(index)}.&nbsp;
                  {opt}
                  {opt === questions[currentQuestionIndex]?.correctAnswer &&
                    optionSelected && (
                      <i
                        className={cn("fa fa-check", styles.correctIcon)}
                        aria-hidden="true"
                      ></i>
                    )}
                  {!isCorrectAnsSelected && optionSelected === opt && (
                    <i
                      className={cn("fa fa-times", styles.wrongIcon)}
                      aria-hidden="true"
                    ></i>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {optionSelected === questions[currentQuestionIndex]?.correctAnswer &&
          optionSelected && (
            <p className={styles.correctLabel}>
              &nbsp; {optionSelected} is correct
              <i className={cn("fa fa-check")} aria-hidden="true"></i>{" "}
            </p>
          )}

        {optionSelected !== questions[currentQuestionIndex]?.correctAnswer &&
          optionSelected && (
            <p className={styles.inCorrectLabel}>
              &nbsp;{optionSelected} is incorrect
              <i className={cn("fa fa-times")} aria-hidden="true"></i>
            </p>
          )}
        <div className={styles.buttonContainer}>
          {currentQuestionIndex > 0 && (
            <button className={styles.nextBtn} onClick={onPreviousClick}>
              Previous
            </button>
          )}

          {optionSelected && currentQuestionIndex < questions.length - 1 && (
            <button className={styles.nextBtn} onClick={onNextClick}>
              Next
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizView;
