"use client";

import Image from "next/image";
import { useEffect } from "react";

interface ContainerQuestProps {
	totalQuestions: number;
	currentQuestion: number;
	theme: string;
}

export default function HeroSection({ theme }: ContainerQuestProps) {
	const progress = 90;

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
		<section className="w-full flex flex-col items-center justify-start bg-[#006D71] px-4 pt-10 md:pt-16">
			
			<div className="w-full max-w-[960px] mx-auto flex flex-col items-center">
				
				<div className="flex justify-center mb-3 md:mb-4">
					<Image
						src="/images/ora/v2/logo-teste.png"
						alt="Logo"
						width={500}
						height={220}
						className="w-[300px] md:w-[500px] h-auto"
					/>
				</div>

				<div
					className="text-center text-white mb-4 md:mb-6"
					style={{
						fontFamily: '"Spectral", serif',
						fontStyle: "italic",
					}}
				>
					<span className="text-[14px] sm:text-[18px] md:text-[28px] font-normal">
						Evento Online | Sem Replay |{" "}
					</span>
					<span className="text-[14px] sm:text-[18px] md:text-[28px] font-bold">
						27 de abril às 20h
					</span>
				</div>

				<div className="w-full max-w-[900px] mx-auto mb-0">
					<div className="relative h-[44px] md:h-[52px] bg-white/20 overflow-hidden px-4 flex items-center rounded-sm">
						
						<div
							className="absolute left-0 top-0 h-full bg-[#25D366]"
							style={{ width: `${progress}%` }}
						/>

						<p
							className="relative z-10 text-[13px] sm:text-[14px] md:text-[16px] text-white"
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

			</div>
		</section>
	);
}