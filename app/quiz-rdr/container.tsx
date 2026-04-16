"use client";

import type { QuizQuestion } from "@/app/modules/lead-score/lead-score.types";
import { useEffect } from "react";
import HeroSection from "./hero-section";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";

interface ContainerQuestProps {
  isFetchingQuestions: boolean;
  fetchError: string | null;
  fetchQuestions: () => void | Promise<void>;
  currentQuestionData: QuizQuestion | undefined;
  submitError: string | null;
  submitSuccess: boolean;
  totalQuestions: number;
  selectedSingleValue: string;
  selectedMultipleValue: string[];
  handleAnswer: (value: string) => void;
  handleMultipleAnswer: (value: string) => void;
  currentQuestion: number;
  handleBack: () => void;
  handleNext: () => void | Promise<void>;
  isCurrentQuestionAnswered: boolean;
  isSubmittingAnswers: boolean;
  whatsappUrl: string;
  theme: string;
}

export default function ContainerQuest({
  isFetchingQuestions,
  fetchError,
  fetchQuestions,
  currentQuestionData,
  submitError,
  submitSuccess,
  totalQuestions,
  selectedSingleValue,
  selectedMultipleValue,
  handleAnswer,
  handleMultipleAnswer,
  currentQuestion,
  handleBack,
  handleNext,
  isCurrentQuestionAnswered,
  isSubmittingAnswers,
  whatsappUrl,
  theme,
}: ContainerQuestProps) {
  useEffect(() => {
    const html = document.documentElement;

    if (theme === "2") {
      html.classList.add("light");
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
      html.classList.remove("light");
    }
  }, [theme]);

  return (
    <>
      <HeroSection
        isFetchingQuestions={isFetchingQuestions}
        fetchError={fetchError}
        fetchQuestions={fetchQuestions}
        currentQuestionData={currentQuestionData}
        submitError={submitError}
        submitSuccess={submitSuccess}
        totalQuestions={totalQuestions}
        selectedSingleValue={selectedSingleValue}
        selectedMultipleValue={selectedMultipleValue}
        handleAnswer={handleAnswer}
        handleMultipleAnswer={handleMultipleAnswer}
        currentQuestion={currentQuestion}
        handleBack={handleBack}
        handleNext={handleNext}
        isCurrentQuestionAnswered={isCurrentQuestionAnswered}
        isSubmittingAnswers={isSubmittingAnswers}
        whatsappUrl={whatsappUrl}
        theme={theme}
      />

      <StepOne />
      <StepTwo />
      <StepThree />
    </>
  );
}