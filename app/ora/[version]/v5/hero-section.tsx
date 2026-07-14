"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { CalendarDays, Smartphone } from "lucide-react";
import { LeadCaptureForm, type LeadCaptureSubmitData } from "./lead-capture-form-updated";

interface ContainerProps {
	titleRedLine: ReactNode | null;
	redLine: ReactNode | null;
	formName: string;
	onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
	submitError?: string | null;
}

export default function HeroSection({ formName, onSubmit, submitError }: ContainerProps) {
	return (
		<section
			id="hero"
			aria-labelledby="hero-title"
			className="relative h-[809px] w-full overflow-hidden bg-[#071117] bg-[url('/images/ora/v4/bg_segunda_dobra_mobile.png')] bg-[length:auto_809px] bg-top bg-center bg-no-repeat md:h-[835px] md:bg-[url('/images/ora/v4/bg_primeira_dobra_descktop.png')] md:bg-[length:auto_835px]"
		>
			<div className="relative z-10 mx-auto flex h-full w-full max-w-[480px] flex-col items-center px-4 pt-[80px] text-center md:mx-0 md:ml-[clamp(72px,9.4vw,180px)] md:w-[527px] md:max-w-none md:items-start md:px-0 md:pt-[20px] md:text-left">
				<div className="flex items-center justify-center gap-[16px] whitespace-nowrap font-mulish text-[10px] leading-[145%] text-white md:justify-start md:gap-[24px] md:text-[14px]">
					<div className="flex items-center gap-[6px]">
						<CalendarDays className="h-[14px] w-[14px] text-[#C0964B] md:h-[17px] md:w-[17px]" />
						<span>Segunda, 20/07 | 20h 100% online</span>
					</div>

					<div className="flex items-center gap-[6px]">
						<Smartphone className="h-[14px] w-[14px] text-[#C0964B] md:h-[17px] md:w-[17px]" />
						<span>Gratuito | Sem replay</span>
					</div>
				</div>

				<h1 id="hero-title" className="mt-[16px] w-[327.6px] max-w-full font-spectral text-[22.62px] font-semibold uppercase leading-[120%] text-[#E0D0A6] md:mt-[28px] md:w-[465px] md:text-[35.35px]">
					Como ter dinheiro na conta e a certeza de um{" "}
					<span className="underline decoration-[1px] underline-offset-[5px]">futuro melhor.</span>
				</h1>

				<p className="mt-[15px] w-[312.38px] max-w-full font-mulish text-[12.17px] font-normal leading-[145%] tracking-[-0.02em] text-white md:mt-[20px] md:w-[465px] md:text-[17.37px]">
					Em algum momento você decidiu dar um jeito na sua vida financeira. Chegou a começar. Mas a rotina apertou, outras urgências entraram na frente, e aquela sensação de que o dinheiro entra e some, voltou. Se você chegou até aqui, é porque essa história ainda não terminou.
				</p>

				<p className="mt-[16px] w-[248.23px] max-w-full font-mulish text-[10.06px] font-normal leading-[145%] tracking-[-0.02em] text-[#E0D0A6] md:mt-[20px] md:w-[436.7px] md:text-[17.7px]">
					Nesse encontro ao vivo com os mentores da Aliança, você vai entender por que o dinheiro nunca fica e saber o passo a passo para mudar isso de vez.
				</p>

				<div className="mt-[24px] w-[327.6px] max-w-full md:mt-[30px] md:w-[527px]">
					<LeadCaptureForm
						formName={formName}
						onSubmit={onSubmit}
						submitError={submitError}
						submitLabel={"QUERO FAZER A MINHA\nRETOMADA FINANCEIRA ↗"}
						nameInputClassName="h-[44px] w-full rounded-[8px] border border-[#6F6F6F] bg-[#0404040A] px-[14px] font-mulish text-[14px] text-white backdrop-blur-[20px] placeholder:text-white md:h-[56px] md:px-[16px] md:text-[16px]"
						emailInputClassName="h-[44px] w-full rounded-[8px] border border-[#6F6F6F] bg-[#0404040A] px-[14px] font-mulish text-[14px] text-white backdrop-blur-[20px] placeholder:text-white md:h-[56px] md:px-[16px] md:text-[16px]"
						ddiSelectClassName="h-[44px] rounded-l-[8px] border border-[#6F6F6F] bg-[#FFFFFF1A] py-2 pl-[36px] pr-[24px] font-mulish text-[14px] text-white md:h-[56px] md:py-4 md:pl-[40px] md:pr-[28px] md:text-[16px]"
						phoneInputClassName="h-[44px] w-full rounded-r-[8px] border border-[#6F6F6F] bg-[#0404040A] px-[14px] py-2 font-mulish text-[14px] text-white backdrop-blur-[20px] placeholder:text-white md:h-[56px] md:px-[16px] md:py-4 md:text-[16px]"
						buttonClassName="mt-[10px] mb-0 h-[60px] w-full whitespace-pre-line rounded-[8px] font-mulish text-[14px] font-extrabold uppercase leading-[135%] text-black [background:radial-gradient(50%_142.16%_at_50%_50%,#2DF289_0%,#00873F_100%)] shadow-[0px_6px_12px_rgba(11,125,70,0.43),0px_22px_22px_rgba(11,125,70,0.37),0px_51px_30px_rgba(11,125,70,0.22)] md:mt-[12px] md:h-[98px] md:text-[23px]"
					/>
				</div>

				<p className="mt-[18px] w-[125.33px] font-mulish text-[8px] font-normal leading-[120%] text-white md:w-[527px] md:text-center md:text-[16px]">
					Um encontro cara a cara com os mentores pra quem já começou essa caminhada e quer voltar a ter o controle do próprio dinheiro.
				</p>
			</div>

			<Image
				src="/images/ora/v4/logo_desktop.png"
				alt="A Retomada Financeira"
				width={700}
				height={650}
				priority
				className="pointer-events-none absolute left-[59.48%] top-[162px] z-20 hidden h-auto w-[clamp(420px,36vw,700px)] object-contain md:block"
			/>
		</section>
	);
}