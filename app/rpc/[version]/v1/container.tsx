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
      <section
        className={`relative flex items-center justify-center flex-col overflow-hidden h-full bg-[url('/images/ora/quiz/bg-quiz-mobile.webp')] md:bg-[url('/images/ora/quiz/bg-quiz.webp')] bg-cover bg-center`}
      >
        <div className="container mx-auto relative h-full px-4">
          <div className="flex flex-col items-center justify-center text-center py-8">
            <div className="w-full max-w-4xl mx-auto">
              <div className="mb-6 md:mb-8 flex justify-center mt-6">
                <Image
                  src={theme === "1" ? "/images/ora/quiz/logo-proximo-nivel.png" : "/images/ora/quiz/logo-proximo-nivel.png"}
                  alt="Logotipo Proximo Nivel"
                  width={401}
                  height={185}
                  priority
                  className="object-contain select-none pointer-events-none w-[348px] md:w-[401px]"
                />
              </div>

              <div className="flex items-center justify-center flex-col md:flex-row gap-1 md:gap-2">
                <div className="flex items-center gap-2">
                  <Calendar size={24} color="#C0964B" />
                  <div className="text-white text-xl font-medium">Segunda-feira, 23/03, às 20h</div>
                </div>
                <div className="w-[1px] md:h-[24px] h-[1px] bg-[#C0964B]" />
                <div className="flex items-center gap-2">
                  <Smartphone size={24} color="#C0964B" />
                  <div className="text-white text-xl font-medium">Ao vivo e sem replay</div>
                </div>
              </div>

              {!showLeadCaptureForm && (
                <>
                  <div className="my-10 md:my-16 min-h-[50px] ">
                    <div className="relative w-full overflow-hidden rounded-lg min-h-[50px] border border-[#737373] bg-[#D3CAC033]">
                      <div
                        className="absolute inset-y-0 left-0 min-h-[50px] bg-gradient-to-r from-[#2DF289] to-[#75FFB6] shadow-[0px_0px_40px_0px_rgba(105,253,174,0.30)] transition-all duration-300"
                        style={{
                          width: `${Math.min(100, Math.max(0, progress))}%`,
                        }}
                      />
                      <p
                        className="relative z-10 px-5 py-3 text-left text-sm md:text-[18px] font-bold text-[#003036] font-mulish min-h-[50px] "
                      >
                        Quase lá! Siga os próximos passos para finalizar a sua inscrição.
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-2xl mx-auto">
                    <div className="relative overflow-hidden bg-[#02161C] rounded-2xl border border-[#C0964B] p-4 md:p-7 mb-6 md:mb-8 ">
                      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_-60%,_#0C3E4D_0%,_rgba(6,34,43,0)_100%)]" />
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
                              className="bg-teal-600 hover:bg-teal-700 text-white"
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
                              className="text-white text-base md:text-lg font-medium mb-4 md:mb-5 md:text-left text-center"
                              style={{
                                color: "#fff",
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
                                className="w-full px-4 py-3 rounded-lg border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                                      className="w-full text-left flex items-center gap-2 text-white"
                                    >
                                      <span
                                        className={`h-4 w-4 border border-white rounded-sm inline-flex items-center justify-center ${checked ? "bg-white" : "bg-transparent"
                                          }`}
                                      >
                                        {checked && (
                                          <span className="h-2 w-2 bg-teal-700 rounded-sm" />
                                        )}
                                      </span>
                                      <span>{option.label}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            ) : (
                              <CustomRadio
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
                                  className="bg-transparent border-gray-700 text-white hover:text-white hover:bg-gray-800 md:text-base font-black min-h-[47px] rounded-[41px] font-mulish"
                                >
                                  VOLTAR
                                </Button>
                              ) : (
                                <div />
                              )}
                              <Button
                                onClick={handleNext}
                                disabled={!isCurrentQuestionAnswered || isSubmittingAnswers}
                                className={`bg-[#936C27] bg-[radial-gradient(circle,_#E2CA9E_25%,_#936C27_100%)] font-black min-h-[47px] rounded-[41px] font-mulish text-[#02161C] text-sm md:text-base transition-colors duration-200 ${currentQuestion === 0 ? "col-span-2" : ""
                                  } hover:bg-[#B98A41] hover:bg-[radial-gradient(circle,_#ECD7B0_25%,_#B98A41_100%)]`}
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
                {showLeadCaptureForm ? (
                  <div className="w-full max-w-lg mx-auto mt-10">
                    <LeadCaptureForm
                      formName="quiz-lead-capture"
                      onSubmit={onLeadCaptureSubmit}
                      submitError={leadFormSubmitError}
                      submitLabel="ENVIAR"
                      nameInputClassName="w-full h-[52px] md:h-[56px] px-[16px] rounded-[8px] border border-[#6F6F6F] bg-[#0404040A] backdrop-blur-[20px] placeholder:text-white text-white font-mulish font-medium text-[16px] leading-[145%] outline-none"
                      emailInputClassName="w-full h-[52px] md:h-[56px] px-[16px] rounded-[8px] border border-[#6F6F6F] bg-[#0404040A] backdrop-blur-[20px] placeholder:text-white text-white font-mulish font-medium text-[16px] leading-[145%] outline-none"
                      ddiSelectClassName="h-[52px] md:h-[56px] py-4 pl-[40px] pr-[28px] bg-[#FFFFFF1A] rounded-l-[8px] border border-[#6F6F6F] border-r-[0px] text-white font-mulish font-medium text-[16px] leading-[145%] focus:outline-none appearance-none"
                      phoneInputClassName="w-full !h-[52px] md:!h-[56px] px-[16px] py-4 rounded-r-[8px] bg-[#0404040A] backdrop-blur-[20px] placeholder:text-white text-white font-mulish font-medium text-[16px] leading-[145%] focus:outline-none border border-[#6F6F6F] border-l-[0px]"
                      buttonClassName="mt-[12px] mb-[12px] w-full h-[52px] md:h-[56px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-black transition-all hover:brightness-110 border border-transparent [background:radial-gradient(50%_142.16%_at_50%_50%,_#2DF289_0%,_#00873F_100%)] shadow-[0px_6px_12px_rgba(11,125,70,0.43),0px_22px_22px_rgba(11,125,70,0.37),0px_51px_30px_rgba(11,125,70,0.22)]"
                    />
                  </div>
                ) : (
                  <>
                    <p
                      className="dark:text-white light:text-[#07242C] text-xs md:text-sm mb-4 md:mb-5"
                      style={{ fontFamily: '"Roboto", Sans-serif' }}
                    >
                      Após responder as questões, toque no botão abaixo
                      <br className="hidden md:block" />
                      para receber o link e materiais do evento:
                    </p>

                    <Button
                      className="w-full !text-[#07242C] max-w-sm py-4 md:py-6 text-sm md:text-base hover:opacity-90 transition-opacity duration-300 rounded-3xl bg-[#936C27] bg-[radial-gradient(circle,_#E2CA9E_25%,_#936C27_100%)]"
                      onClick={() => window.open(whatsappUrl, "_blank")}
                    >
                      Entrar no Grupo
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-[#00171a] h-[150px]">
        <div className="container mx-auto h-full px-4 flex items-center justify-between">
          <p
            className="text-white text-sm text-center md:text-left font-mulish"
          >
            Copyright © O Resgate Dos Otimistas. <br />Todos os direitos reservados.
          </p>
          <Image
            src={"/images/logo.png"}
            alt="Logotipo O Resgate Dos Otimistas"
            width={250}
            height={32}
            priority
            className="object-contain select-none pointer-events-none h-auto"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </footer>
    </div>
  );
}
