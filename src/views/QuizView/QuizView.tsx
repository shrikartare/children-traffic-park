import React, { useState } from "react";
import cn from "classnames";
import { questions } from "./questions";
import styles from "./QuizView.module.css";

import Header from "../HomePageView/components/Header";
import Footer from "../HomePageView/components/Footer";
import logo from "../../images/logo.jpg";

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

  return (
    <>
      <Header />
      <div className={styles.quizContainer}>
        <div className={styles.quizHeadLine}>
          <h2>Traffic/Road Quiz</h2>
        </div>

        <div className={styles.quizQuestion}>
          <p>
            {questions[currentQuestionIndex].id}.&nbsp;
            {questions[currentQuestionIndex]?.question}
            &nbsp;&nbsp;&nbsp;
            {/* {currentQuestionIndex+1}/{questions?.length} */}
          </p>
          <img src={logo} height="100" width="100" alt="trafficImage" />
          <div className={styles.optionContainer}>
            {questions[currentQuestionIndex].options.map((opt) => {
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
        <div className={styles.buttonContainer}>
          {currentQuestionIndex > 0 && (
            <button className={styles.nextBtn} onClick={onPreviousClick}>
              Previous
              {/* <i className={cn("fa fa-long-arrow-left", styles.arrowRight)}></i> */}
            </button>
          )}

          {optionSelected && currentQuestionIndex < questions.length - 1 && (
            <button className={styles.nextBtn} onClick={onNextClick}>
              Next
              {/* <i
                className={cn("fa fa-long-arrow-right", styles.arrowRight)}
              ></i> */}
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizView;
