"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CustomRadio } from "@/app/components/custom-input";
import {
  LeadCaptureForm,
  type LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";
import {
  isMultipleInputType,
  isOpenInputType,
} from "@/app/modules/lead-score/lead-score-input-type";
import type { QuizQuestion } from "@/app/modules/lead-score/lead-score.types";
import { useEffect } from "react";
import { Calendar, Smartphone } from "lucide-react";
import StepOne from "@/app/quiz-rdr/step-one";
import StepTwo from "@/app/quiz-rdr/step-two";
import StepThree from "@/app/quiz-rdr/step-three";

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
  showLeadCaptureForm: boolean;
  onLeadCaptureSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  leadFormSubmitError: string | null;
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
  showLeadCaptureForm,
  onLeadCaptureSubmit,
  leadFormSubmitError,
}: ContainerQuestProps) {
  const progress = totalQuestions
    ? ((currentQuestion + 1) / totalQuestions) * 100
    : 0;
  const isLastQuestion = currentQuestion === totalQuestions - 1;

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
    <div>
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#E9E5E1] px-4">
        <div className="container mx-auto relative h-full px-4">
          <div className="flex flex-col items-center justify-center text-center py-8">
            <div className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/ora/v2/logo-quiz.png"
                  alt="Logo"
                  width={401}
                  height={185}
                  className="w-[260px] md:w-[401px]"
                />
              </div>

              <div
                className="text-center text-[#006D71] mb-8"
                style={{
                  fontFamily: '"Spectral", serif',
                  fontStyle: "italic",
                  whiteSpace: "nowrap",
                }}
              >
                <span className="text-[16px] sm:text-[20px] md:text-[32px] font-normal">
                  Evento Online | Sem Replay |{" "}
                </span>
                <span className="text-[16px] sm:text-[20px] md:text-[32px] font-bold">
                  27 de abril às 20h
                </span>
              </div>

              {!showLeadCaptureForm && (
                <>
                  <div className="w-full max-w-[880px] mx-auto mb-10">
                    <div className="relative h-[52px] bg-white overflow-hidden px-5 flex items-center">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#006D71B2] shadow-[inset_0px_0px_19.6px_0px_#00F6FF]"
                        style={{ width: `${progress}%` }}
                      />
                      <p
                        className="relative z-10 text-[14px] sm:text-[16px] md:text-[18px] text-[#000000]"
                        style={{
                          fontFamily: '"Mulish", sans-serif',
                          fontStyle: "italic",
                        }}
                      >
                        <span className="font-bold">Quase lá! </span>
                        <span>Siga os próximos passos para finalizar a sua inscrição</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-[880px] mx-auto text-[#07242C]">
                    <div className="bg-[#F3EFE8] border border-[#E0DBD1] rounded-[8px] p-6 md:p-10 max-w-[880px] mx-auto">
                      <div className="relative z-10">
                        {isFetchingQuestions && (
                          <div className="text-white text-center py-8">
                            Carregando perguntas...
                          </div>
                        )}

                        {!isFetchingQuestions && fetchError && (
                          <div className="text-center py-4">
                            <p className="text-red-300 mb-4">{fetchError}</p>
                            <Button
                              onClick={fetchQuestions}
                              className="bg-teal-600 hover:bg-teal-700 text-[#07242C]"
                            >
                              TENTAR NOVAMENTE
                            </Button>
                          </div>
                        )}

                        {!isFetchingQuestions && !fetchError && currentQuestionData && (
                          <>
                            {submitError && (
                              <p className="text-red-300 text-sm mb-3 text-left">
                                {submitError}
                              </p>
                            )}
                            {submitSuccess && (
                              <p className="!text-green-300 text-sm mb-3 text-left">
                                Respostas enviadas com sucesso.
                              </p>
                            )}

                            <h3
                              className="text-[#07242C] text-base md:text-lg font-medium mb-4 md:mb-5 md:text-left text-center"
                              style={{
                                color: "#07242C",
                                fontFamily: '"Roboto", Sans-serif',
                              }}
                            >
                              {currentQuestionData.question}
                            </h3>

                            {isOpenInputType(currentQuestionData.inputType) ? (
                              <input
                                type="text"
                                value={selectedSingleValue}
                                onChange={(e) => handleAnswer(e.target.value)}
                                placeholder="Digite sua resposta aqui..."
                                className="w-full px-4 py-3 rounded-lg border border-white bg-transparent text-[#07242C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                style={{ fontFamily: '"Roboto", Sans-serif' }}
                              />
                            ) : isMultipleInputType(currentQuestionData.inputType) ? (
                              <div className="space-y-2">
                                {currentQuestionData.options.map((option) => {
                                  const checked = selectedMultipleValue.includes(
                                    option.value
                                  );
                                  return (
                                    <button
                                      key={option.value}
                                      type="button"
                                      onClick={() => handleMultipleAnswer(option.value)}
                                      className="w-full text-left flex items-center gap-2 !text-[#07242C]"
                                    >
                                      <span
                                        className={`h-4 w-4 border border-white rounded-sm inline-flex items-center justify-center "bg-[#FFFFFF]"
                                          }`}
                                      >
                                        {checked && (
                                          <span className="h-2 w-2 bg-teal-700 rounded-sm !text-[#07242C]" />
                                        )}
                                      </span>
                                      <span className="!text-[#07242C]">{option.label}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            ) : (
                              <CustomRadio
                                textColorLabel="!text-[#07242C]"
                                borderColorRadio="border-[#767676]"
                                style={{ fontFamily: '"Roboto", Sans-serif' }}
                                options={currentQuestionData.options}
                                value={selectedSingleValue}
                                onChange={handleAnswer}
                              />
                            )}

                            <div className="grid grid-cols-2 gap-3 md:gap-5 mt-5 md:mt-7">
                              {currentQuestion > 0 ? (
                                <Button
                                  variant="outline"
                                  onClick={handleBack}
                                  className="mt-[12px] mb-[12px] w-full h-[72px] md:h-[68px] px-[32px] py-[16px] md:py-[20px] rounded-none border-0 bg-[#D6B678] text-white font-spectral font-bold text-[18px] md:text-[18px] leading-[20px] md:leading-[28px] uppercase text-center align-middle transition-none shadow-none hover:bg-[#B98A41] hover:text-white"
                                >
                                  VOLTAR
                                </Button>
                              ) : (
                                <div />
                              )}
                              <Button
                                onClick={handleNext}
                                disabled={!isCurrentQuestionAnswered || isSubmittingAnswers}
                                className={`mt-[12px] mb-[12px] w-full h-[72px] md:h-[68px] px-[32px] py-[16px] md:py-[20px] rounded-none border-0 bg-[#C0964B] text-white font-spectral font-bold text-[18px] md:text-[18px] leading-[20px] md:leading-[28px] uppercase text-center align-middle transition-none shadow-none hover:brightness-100 ${currentQuestion === 0 ? "col-span-2" : ""
                                  } hover:bg-[#B98A41]`}
                              >
                                {isLastQuestion
                                  ? isSubmittingAnswers
                                    ? "ENVIANDO..."
                                    : submitSuccess
                                      ? "ENVIADO"
                                      : "ENVIAR"
                                  : "PRÓXIMA"}
                              </Button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="mb-6 md:mb-8 text-center text-white">
                {showLeadCaptureForm && (
                  <div className="w-full max-w-lg mx-auto mt-10">
                    <LeadCaptureForm
                      formName="quiz-lead-capture"
                      onSubmit={onLeadCaptureSubmit}
                      submitError={leadFormSubmitError}
                      submitLabel="ENVIAR"
                      nameInputClassName="w-full h-[52px] px-[10px] pt-[12.5px] pb-[12.5px] rounded-none border-0 border-b-[1.5px] border-[#C0964B] bg-[#FFFFFF] placeholder:text-[#AFA69D] text-[#104448] font-mulish font-medium text-[16px] leading-[145%] outline-none shadow-none"
                      emailInputClassName="w-full h-[52px] px-[10px] pt-[12.5px] pb-[12.5px] rounded-none border-0 border-b-[1.5px] border-[#C0964B] bg-[#FFFFFF] placeholder:text-[#AFA69D] text-[#104448] font-mulish font-medium text-[16px] leading-[145%] outline-none shadow-none"
                      ddiSelectClassName="w-[88px] h-[52px] px-[10px] pt-[12.5px] pb-[12.5px] rounded-none border-0 border-b-[1.5px] border-[#C0964B] bg-[#FFFFFF] text-[#917E5A] font-mulish font-medium text-[16px] leading-[145%] focus:outline-none appearance-none"
                      phoneInputClassName="flex-1 w-full h-[52px] px-[10px] pt-[12.5px] pb-[12.5px] rounded-none border-0 border-b-[1.5px] border-[#C0964B] bg-[#FFFFFF] placeholder:text-[#AFA69D] text-[#104448] font-mulish font-medium text-[16px] leading-[145%] focus:outline-none shadow-none"
							        buttonClassName="mt-[12px] mb-[12px] w-full h-[72px] md:h-[68px] px-[32px] py-[16px] md:py-[20px] rounded-none border-0 bg-[#C0964B] text-white font-spectral font-bold text-[18px] md:text-[18px] leading-[20px] md:leading-[28px] uppercase text-center align-middle transition-none shadow-none hover:brightness-100"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <StepOne />
      <StepTwo />
      <StepThree />
    </div>
  );
}
