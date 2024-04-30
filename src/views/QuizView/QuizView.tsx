import React, { useEffect, useState } from "react";
import cn from "classnames";
import { questions, categories } from "./questions";
import styles from "./QuizView.module.scss";

import Header from "../HomePageView/components/Header";
import Footer from "../HomePageView/components/Footer";

import quizimage from "../../images/quiz/quizimage.jpg";

const importAll = (r: any) => {
  return r.keys().map((img: any) => {
    return {
      id: img,
      image: r(img),
    };
  });
};

const quizImages = importAll(
  require.context("../../images/quiz/", false, /\.(png|jpe?g|svg|jpg)$/)
);

let filteredQuestions: any[] = [];
const QuizView = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [isQuizEnded, setIsQuizEnded] = useState(false);

  const onNextClick = () => {
    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex === filteredQuestions.length - 1)
      setIsQuizEnded(true);
  };
  const onPreviousClick = () => {
    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };
  const setFilteredCategoryQuestions = () => {
    categories.forEach((category: any) => {
      const categoryQuestions = questions.filter(
        (objQue: any) => objQue?.category === category.name
      );

      let numberOfQuestions = category.weightage,
        i = 0;
      do {
        const questionIndex = Math.floor(
          Math.random() * categoryQuestions.length
        );
        const quizIndex = filteredQuestions.findIndex(
          (question) => question?.id === categoryQuestions[questionIndex]?.id
        );
        if (quizIndex < 0) {
          i = i + 1;
          filteredQuestions.push(categoryQuestions[questionIndex]);
        }
      } while (i < numberOfQuestions);
    });
  };
  useEffect(() => {
    filteredQuestions = [];
    setFilteredCategoryQuestions();
  }, []);

  const onOptionClick = (event: any, opt: any) => {
    setSelectedOption(opt?.id);
    if (opt.id === filteredQuestions[currentQuestionIndex]?.correctAnswer?.id)
      setQuizScore(quizScore + 1);
  };

  const getOptionIndex = (index: number) => {
    if (index === 0) return "A";
    else if (index === 1) return "B";
    else if (index === 2) return "C";
    else if (index === 3) return "D";
  };

  const getQuestionImage = () => {
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    let currindex = quizImages.findIndex((img: any) =>
      img?.id?.includes(currentQuestion?.imageName || "")
    );
    return quizImages[currindex]?.image;
  };
  const getAnswerImage = (image: string): string => {
    let currindex = quizImages.findIndex((img: any) =>
      img?.id?.includes(image)
    );
    return quizImages[currindex]?.image;
  };

  const quizStart = (
    <div className={styles.quizStartContainer}>
      <h4>We have created a quiz to test traffic knowledge. </h4>
      <img src={quizimage} alt={"quiz"} />
      <button
        className={styles.startQuizBtn}
        onClick={() => setIsQuizStarted(!isQuizStarted)}
      >
        Start Quiz
      </button>
    </div>
  );
  const isCorrectOption = (opt: any) =>
    selectedOption &&
    opt?.id.toString() ===
      filteredQuestions[currentQuestionIndex]?.correctAnswer?.id;

  const isWrongOption = (opt: any) =>
    selectedOption &&
    selectedOption === opt?.id &&
    opt?.id !== filteredQuestions[currentQuestionIndex]?.correctAnswer?.id;

  const onRetakeQuiz = () => {
    filteredQuestions = [];
    setFilteredCategoryQuestions();
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setIsQuizStarted(false);
    setQuizScore(0);
    setIsQuizEnded(false);
  };
  return (
    <>
      <Header />
      <div className={styles.quizContainer}>
        <div className={styles.quizHeadLine}>
          <h2>Traffic Quiz</h2>
        </div>
        {!isQuizStarted && quizStart}

        {isQuizStarted && !isQuizEnded && (
          <>
            <div className={styles.quizQuestion}>
              <p>
                Question ({currentQuestionIndex + 1}/{filteredQuestions?.length}
                )
                {/* Category: {filteredQuestions[currentQuestionIndex]?.category} */}
              </p>
              <p>
                {filteredQuestions[currentQuestionIndex]?.question}
                &nbsp;&nbsp;&nbsp;
              </p>
              {filteredQuestions[currentQuestionIndex]?.imageName && (
                <img
                  src={getQuestionImage()}
                  height="100"
                  width="100"
                  alt="trafficImage"
                />
              )}

              <div className={styles.optionContainer}>
                {filteredQuestions[currentQuestionIndex].options.map(
                  (opt: any, index: number) => {
                    return (
                      <button
                        disabled={!!selectedOption}
                        className={cn(
                          styles.option,
                          isCorrectOption(opt) && styles.correctAnswer,
                          isWrongOption(opt) && styles.wrongAnswer
                        )}
                        onClick={(event) => onOptionClick(event, opt)}
                      >
                        {getOptionIndex(index)}.&nbsp;
                        {opt.image && (
                          <img
                            src={getAnswerImage(opt?.image)}
                            height="40"
                            width="40"
                            alt="trafficImage"
                          />
                        )}
                        {opt?.answer}
                        {isCorrectOption(opt) && (
                          <i
                            className={cn("fa fa-check", styles.correctIcon)}
                            aria-hidden="true"
                          ></i>
                        )}
                        {isWrongOption(opt) && (
                          <i
                            className={cn("fa fa-times", styles.wrongIcon)}
                            aria-hidden="true"
                          ></i>
                        )}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
            <div className={styles.quizScore}>Score: {quizScore}</div>
            <div className={styles.buttonContainer}>
              {/* {currentQuestionIndex > 0 && (
                <button className={styles.nextBtn} onClick={onPreviousClick}>
                  Previous
                </button>
              )} */}

              {selectedOption && (
                <button className={styles.nextBtn} onClick={onNextClick}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {isQuizEnded && (
          <>
            {/* <div className={styles.quizScore}>
              {" "}
              Quiz has ended. <br /> <br /> {quizScore} out of{" "}
              {filteredQuestions?.length} questions answered are correct.
            </div> */}

            <button className={styles.retakeBtn} onClick={onRetakeQuiz}>
              Retake Quiz
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default QuizView;
