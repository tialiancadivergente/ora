"use client";

import React from "react";
import { CalendarDays, Smartphone } from "lucide-react";
import Image from "next/image";
import {
	LeadCaptureForm,
	LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";
import { getOraActiveHeadlineVariant } from "@/lib/config/ora-subdomain-headline-config";

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
	const subdomain = getOraActiveHeadlineVariant();

	const marqueeLine =
		"11 DE MAIO • LIVE EXCLUSIVA COM ELTON EULER • ESPECIAL PARA EX-ALIADOS •";

	return (
		<section
			id="hero"
			className={`
				relative
				min-h-[1210px]
				md:min-h-[900px]
				flex
				flex-col
				justify-start
				overflow-hidden
				bg-[#071117]
				bg-[url('/images/ora/v3/bg-hero-mobile.webp')]
				md:bg-[url('/images/ora/v3/bg-hero-desktop.webp')]
				bg-cover
				bg-center
				bg-no-repeat
				px-4
				pt-0 md:pt-0
				pb-6
				md:p-0
			`}
		>
			<div className="relative w-screen h-8 md:h-14 bg-[#930000] overflow-hidden flex items-center left-1/2 -translate-x-1/2">
				<div className="marquee-track flex whitespace-nowrap">
					<div className="flex whitespace-nowrap">
						{Array.from({ length: 8 }).map((_, index) => (
							<span
								key={`marquee-a-${index}`}
								className="font-mulish font-extrabold uppercase text-white text-[14px] tracking-[0.04em] px-3"
							>
								{marqueeLine}
							</span>
						))}
					</div>

					<div className="flex whitespace-nowrap" aria-hidden="true">
						{Array.from({ length: 8 }).map((_, index) => (
							<span
								key={`marquee-b-${index}`}
								className="font-mulish font-extrabold uppercase text-white text-[14px] tracking-[0.04em] px-3"
							>
								{marqueeLine}
							</span>
						))}
					</div>
				</div>
			</div>

			<div className="w-full max-w-[349px] md:max-w-[527px] flex flex-col items-start text-left mt-[18px] md:mt-[20px] md:ml-[210px] mx-auto md:mx-0">
				<div className="mb-[16px] w-full flex justify-start">
					<Image
						src="/images/ora/v3/logo-rodape.png"
						alt="Logo"
						width={175}
						height={81}
						className="w-[175px] h-auto"
					/>
				</div>

				<h1 className="font-spectral font-bold uppercase text-white text-[20px] leading-[120%] tracking-[-0.02em] w-full md:w-[527px] md:text-[32px]">
					{titleRedLine}
				</h1>

				<div className="flex flex-wrap items-center gap-x-[10px] gap-y-[8px] md:gap-[20px] mt-[16px] text-white font-mulish text-[12px] md:text-[16px]">
					<div className="flex items-center gap-1.5">
						<CalendarDays size={16} color="#C0964B" className="md:w-[18px] md:h-[18px]" />
						<span>Segunda-feira, 11 de maio, às 20h</span>
					</div>

					<div className="flex items-center gap-1.5">
						<Smartphone size={16} color="#C0964B" className="md:w-[18px] md:h-[18px]" />
						<span>Ao vivo e sem replay</span>
					</div>
				</div>

				<div className="mt-[16px] w-full md:w-[527px] border-l-[2px] border-[#C0964B] bg-[#FFFFFF0A] backdrop-blur-[13.5px] px-[20px] md:px-[24px] py-[8px]">
					<p className="font-spectral font-semibold text-[#E0D0A6] text-[16px] md:text-[20px]">
						{subdomain === "gg" ? (
							<>
								Você já foi aliado. Já conhece o método.
								Mas ainda não conseguiu estabilizar a sua
								vida financeira como gostaria.
							</>
						) : (
							<>
								Você já foi aliado. Já conhece o método. Já tentou.
								Mas o dinheiro ainda não está sobrando. E você sabe
								que não é por falta de esforço.
							</>
						)}
					</p>
				</div>

				<p className="mt-[16px] text-white font-mulish text-[14px] md:text-[16px] leading-[125%] w-full md:w-[527px]">
					Nesse{" "}
					<span className="font-extrabold">
						encontro ao vivo com Elton Euler
					</span>
					, você vai entender por que isso acontece e como a Aliança 2.0 foi criada para te ajudar nisso.
				</p>

				<div className="mt-[20px] w-full md:w-[527px]">
					<LeadCaptureForm
						formName={formName}
						onSubmit={onSubmit}
						submitError={submitError}
						nameInputClassName="w-full h-[52px] md:h-[56px] px-[16px] rounded-[8px] border border-[#6F6F6F] bg-[#0404040A] backdrop-blur-[20px] text-white placeholder:text-white font-mulish text-[16px]"
						emailInputClassName="w-full h-[52px] md:h-[56px] px-[16px] rounded-[8px] border border-[#6F6F6F] bg-[#0404040A] backdrop-blur-[20px] text-white placeholder:text-white font-mulish text-[16px]"
						ddiSelectClassName="h-[52px] md:h-[56px] py-4 pl-[40px] pr-[28px] bg-[#FFFFFF1A] rounded-l-[8px] border border-[#6F6F6F] text-white font-mulish text-[16px]"
						phoneInputClassName="w-full h-[52px] md:h-[56px] px-[16px] py-4 rounded-r-[8px] bg-[#0404040A] backdrop-blur-[20px] text-white placeholder:text-white font-mulish text-[16px] border border-[#6F6F6F]"
						buttonClassName="mt-[12px] mb-[12px] w-full h-[52px] md:h-[56px] rounded-[8px] font-mulish font-extrabold text-[16px] leading-[145%] uppercase text-black [background:radial-gradient(50%_142.16%_at_50%_50%,_#2DF289_0%,_#00873F_100%)] shadow-[0px_6px_12px_rgba(11,125,70,0.43),0px_22px_22px_rgba(11,125,70,0.37),0px_51px_30px_rgba(11,125,70,0.22)]"
					/>
				</div>
			</div>

			<style jsx>{`
				@keyframes marquee-slide {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				.marquee-track {
					width: max-content;
					animation: marquee-slide 24s linear infinite;
					will-change: transform;
				}
			`}</style>
		</section>
	);
}