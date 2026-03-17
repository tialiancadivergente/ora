"use client";

import React from "react";
import { CalendarDays, Smartphone } from "lucide-react";
import Image from "next/image";
import {
	LeadCaptureForm,
	LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";

interface ContainerProps {
	titleRedLine: React.ReactNode | null;
	redLine: React.ReactNode | null;
	formName: string;
	onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
	submitError?: string | null;
}

export default function HeroSection({
	titleRedLine,
	formName,
	onSubmit,
	submitError,
}: ContainerProps) {
	return (
		<section
			id="hero"
			className="relative min-h-[1000px] md:h-[1080px] flex flex-col justify-start overflow-hidden bg-[#071117] bg-[url('/images/ora/v1/primeira_dobra_mobile.webp')] md:bg-[url('/images/ora/v1/primeira_dobra_desktop.webp')] bg-cover bg-center px-4 pt-5 pb-6 md:p-0"
		>
			<div className="w-full max-w-[349px] md:max-w-[527px] flex flex-col items-start md:items-start text-left md:text-left mt-0 md:mt-[45px] md:ml-[210px] mx-auto md:mx-0">
				<div className="mb-[16px] w-full flex justify-start">
					<Image
						src="/images/ora/v1/logo_o_proximo_nivel.png"
						alt="Logo"
						width={175}
						height={81}
						className="mx-0 w-[175px] h-auto"
					/>
				</div>

				<h1
					className="
						font-spectral
						font-bold
						uppercase
						text-white
						text-[20px]
						leading-[120%]
						tracking-[-0.02em]
						w-full
						max-w-[349px]
						text-left
						md:w-[527px]
						md:max-w-none
						md:text-[32px]
						md:text-left
					"
				>
					{titleRedLine}
				</h1>

				<div
					className="
						flex
						flex-wrap
						items-center
						justify-start
						md:justify-start
						gap-x-[10px]
						gap-y-[8px]
						md:gap-[20px]
						mt-[16px]
						text-white
						font-mulish
						text-[12px]
						md:text-[16px]
						w-full
						max-w-[349px]
						md:w-auto
						md:max-w-none
					"
				>
					<div className="flex items-center gap-1.5 min-w-0">
						<CalendarDays
							size={16}
							color="#C0964B"
							className="shrink-0 md:w-[18px] md:h-[18px]"
						/>
						<span className="leading-[120%]">
							Segunda-feira, 23/03, às 20h
						</span>
					</div>

					<div className="flex items-center gap-1.5 min-w-0">
						<Smartphone
							size={16}
							color="#C0964B"
							className="shrink-0 md:w-[18px] md:h-[18px]"
						/>
						<span className="leading-[120%]">Ao vivo e sem replay</span>
					</div>
				</div>

				<div
					className="
						mt-[16px]
						w-full
						max-w-[349px]
						md:w-[527px]
						md:max-w-none
						border-l-[2px]
						border-[#C0964B]
						bg-[#FFFFFF0A]
						backdrop-blur-[13.5px]
						px-[20px]
						md:px-[24px]
						py-[8px]
					"
				>
					<p
						className="
							font-spectral
							font-semibold
							text-[#E0D0A6]
							text-[16px]
							leading-[120%]
							md:text-[20px]
							text-left
						"
					>
						Você já foi aliado. Já conhece o método. Já tentou.
						Mas o dinheiro ainda não está sobrando. E você sabe
						que não é por falta de esforço.
					</p>
				</div>

				<p
					className="
						mt-[16px]
						text-white
						font-mulish
						text-[14px]
						leading-[125%]
						w-full
						max-w-[349px]
						md:w-[527px]
						md:max-w-none
						md:text-[16px]
						text-left
					"
				>
					Nesse <strong>encontro ao vivo com os mentores da Aliança Divergente</strong>,
					você vai entender o que realmente impede você de romper seu teto financeiro.
					E por que a nova Aliança 2.0 foi criada para levar você ao seu próximo nível.
				</p>

				<div className="mt-[20px] w-full max-w-[349px] md:max-w-[527px]">
					<LeadCaptureForm
						formName={formName}
						onSubmit={onSubmit}
						submitError={submitError}
						emailInputClassName="w-full h-[52px] md:h-[56px] px-[16px] rounded-[8px] border border-[#6F6F6F] bg-[#0404040A] backdrop-blur-[20px] placeholder:text-white text-white font-mulish font-medium text-[16px] leading-[145%] outline-none"
						ddiSelectClassName="h-[52px] md:h-[56px] py-4 pl-[40px] pr-[28px] bg-[#FFFFFF1A] rounded-l-[8px] border border-[#6F6F6F] border-r-[0px] text-white font-mulish font-medium text-[16px] leading-[145%] focus:outline-none appearance-none"
						phoneInputClassName="w-full !h-[52px] md:!h-[56px] px-[16px] py-4 rounded-r-[8px] bg-[#0404040A] backdrop-blur-[20px] placeholder:text-white text-white font-mulish font-medium text-[16px] leading-[145%] focus:outline-none border border-[#6F6F6F] border-l-[0px]"
						buttonClassName="mt-[12px] mb-[12px] w-full h-[52px] md:h-[56px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-black transition-all hover:brightness-110 border border-transparent [background:radial-gradient(50%_142.16%_at_50%_50%,_#2DF289_0%,_#00873F_100%)] shadow-[0px_6px_12px_rgba(11,125,70,0.43),0px_22px_22px_rgba(11,125,70,0.37),0px_51px_30px_rgba(11,125,70,0.22)]"
					/>
				</div>

				<p
					className="
						mt-[16px]
						text-white
						font-mulish
						text-[12px]
						md:text-[14px]
						leading-[125%]
						w-full
						max-w-[349px]
						md:w-[527px]
						md:max-w-none
						text-left
					"
				>
					Um encontro exclusivo e gratuito para ex-aliados que já tentaram,
					sabem que o método funciona, mas ainda não conseguiram romper o
					teto financeiro de vez.
				</p>
			</div>
		</section>
	);
}