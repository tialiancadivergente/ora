"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	isMultipleInputType,
	isOpenInputType,
} from "@/app/modules/lead-score/lead-score-input-type";
import type { QuizQuestion } from "@/app/modules/lead-score/lead-score.types";
import { useEffect } from "react";

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

export default function HeroSection({
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
	const progress = totalQuestions
		? ((currentQuestion + 1) / totalQuestions) * 100
		: 0;

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
		<section className="min-h-screen flex flex-col items-center justify-center bg-[#E9E5E1] px-4">
			<div className="w-full max-w-[960px] mx-auto py-10">
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

				<div className="bg-[#F3EFE8] border border-[#E0DBD1] rounded-[8px] p-6 md:p-10 max-w-[880px] mx-auto">
					{currentQuestionData && (
						<>
							<h3
								className="mb-6 text-[#07242C]"
								style={{
									fontFamily: '"Spectral", serif',
									fontWeight: 700,
									fontSize: "18px",
									lineHeight: "28px",
								}}
							>
								{currentQuestionData.question}
							</h3>

							<div className="space-y-3">
								{currentQuestionData.options.map((option) => {
									const checked = selectedSingleValue === option.value;

									return (
										<button
											key={option.value}
											type="button"
											onClick={() => handleAnswer(option.value)}
											className="flex items-center gap-3"
										>
											<span className="w-[18px] h-[18px] border border-[#104448] rounded-full flex items-center justify-center">
												{checked && (
													<span className="w-[10px] h-[10px] bg-[#104448] rounded-full" />
												)}
											</span>

											<span
												className="text-[#104448]"
												style={{
													fontFamily: '"Spectral", serif',
													fontSize: "16px",
												}}
											>
												{option.label}
											</span>
										</button>
									);
								})}
							</div>

							<div className="flex flex-col items-center mt-8 gap-4">
								<Button
									onClick={handleNext}
									className="w-full max-w-[436px] h-[68px] bg-[#C0964B] text-white uppercase"
									style={{
										fontFamily: '"Spectral", serif',
										fontWeight: 700,
										fontSize: "18px",
										letterSpacing: "0.9px",
									}}
								>
									Quero entender o que me trava
								</Button>
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	);
}