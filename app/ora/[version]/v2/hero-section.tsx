"use client";

import React from "react";
import Image from "next/image";
import {
	LeadCaptureForm,
	LeadCaptureSubmitData,
} from "./lead-capture-form-ora";

interface ContainerProps {
	titleRedLine: React.ReactNode | null;
	redLine: React.ReactNode | null;
	formName: string;
	onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
	submitError?: string | null;
}

export default function HeroSection({
	formName,
	onSubmit,
	submitError,
}: ContainerProps) {
	const eventSchema = {
		"@context": "https://schema.org",
		"@type": "Event",
		name: "O Resgate dos Relacionamentos",
		description:
			"Encontro ao vivo da Aliança Divergente para ex-aliadas que já conhecem o método, já tentaram e ainda não destravaram a vida amorosa.",
		startDate: "2026-04-27T20:00:00-03:00",
		eventAttendanceMode:
			"https://schema.org/OnlineEventAttendanceMode",
		eventStatus: "https://schema.org/EventScheduled",
		image: [
			"/images/ora/v2/hero-desktop.webp",
			"/images/ora/v2/hero-mobile.webp",
		],
		organizer: {
			"@type": "Organization",
			name: "Aliança Divergente",
		},
	};

	return (
		<>
			<div className="absolute top-0 left-0 z-20 flex md:hidden w-full h-[68px] items-center justify-center bg-[#917E5A] px-[65px] py-[10px]">
				<p className="text-center font-spectral italic text-white text-[15px] leading-[24px]">
					<span className="font-bold">
						Segunda-feira, 27 de abril
					</span>
					<span className="font-normal"> | 20h</span>
					<br />
					<span className="font-normal">
						Ao vivo e sem replay
					</span>
				</p>
			</div>

			<div className="absolute top-0 left-0 z-20 hidden md:flex h-[35px] w-full items-center justify-center bg-[#917E5A] py-[8px]">
				<p className="text-center font-spectral italic text-white text-[15px] leading-[100%]">
					<span className="font-bold">
						Segunda-feira, 27 de abril
					</span>
					<span className="font-normal">
						{" "}
						| 20h | Ao vivo e sem replay
					</span>
				</p>
			</div>
			<section
				id="hero"
				aria-label="Seção principal do evento O Resgate dos Relacionamentos"
				className="relative h-[1385px] md:h-[845px] flex flex-col justify-start overflow-hidden bg-[#e9e7e4] bg-[url('/images/ora/v2/hero-mobile.webp')] md:bg-[url('/images/ora/v2/hero-desktop.webp')] bg-cover bg-center bg-no-repeat px-4 pt-5 pb-6 md:p-0"
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(eventSchema),
					}}
				/>

				<h2 className="sr-only">
					Encontro ao vivo sobre relacionamento para mulheres que já
					conhecem o método e desejam destravar a vida amorosa
				</h2>

				<div className="w-full max-w-[349px] md:w-[600px] md:max-w-none md:h-full flex flex-col items-start md:items-start justify-center text-left md:text-left mt-24 md:mt-0 lg:ml-[120px] xl:ml-[280px] mx-auto md:mx-0 md:bg-[#E9E7E4] md:px-[40px] md:pt-[64px] md:pb-[64px]">
					<div className="mb-[16px] w-full flex justify-center md:justify-start">
						<Image
							src="/images/ora/v2/logo-o-resgate-dos-relacionamentos.png"
							alt="Logo do evento O Resgate dos Relacionamentos, da Aliança Divergente"
							width={430}
							height={78}
							className="mx-auto md:mx-0 w-[280px] md:w-[280px] h-auto"
							priority
						/>
					</div>

					<h1
						className="
						font-spectral
						italic
						text-[#006D71]
						text-[24px]
						leading-[120%]
						w-full
						max-w-[349px]
						md:w-[521px]
						md:max-w-none
						text-left
					"
					>
						Você já tentou. Rodou protocolo, fez conversa difícil,
						conhece o método.{" "}
						<span className="font-bold italic">
							Então por que o seu relacionamento não melhora?
						</span>
					</h1>

					<p
						className="
						mt-[16px] md:mt-[4px]
						font-spectral
						font-light
						text-[#104448]
						text-[16px]
						leading-[140%]
						w-full
						max-w-[349px]
						md:w-[521px]
						md:max-w-none
						text-left
					"
					>
						Nesse encontro ao vivo com os mentores da Aliança
						Divergente, você vai finalmente enxergar o ponto cego
						específico que está travando o seu relacionamento, e
						que é diferente de tudo que você já trabalhou antes.
						<br />
						<br />
						<span className="font-bold text-[#104448]">
							Porque quando o problema persiste depois do método,
							não é falta de esforço. É algo que você não consegue
							ver sozinha. E esse encontro existe pra isso.
						</span>
					</p>

					<div className="mt-[20px] w-full max-w-[350px] md:w-[521px] md:max-w-none">
						<LeadCaptureForm
							formName={formName}
							onSubmit={onSubmit}
							submitError={submitError}
							nameInputClassName="w-full h-[52px] px-[10px] pt-[12.5px] pb-[12.5px] rounded-none border-0 border-b-[1.5px] border-[#C0964B] bg-[#FFFFFF] placeholder:text-[#AFA69D] text-[#104448] font-mulish font-medium text-[16px] leading-[145%] outline-none shadow-none"
							emailInputClassName="w-full h-[52px] px-[10px] pt-[12.5px] pb-[12.5px] rounded-none border-0 border-b-[1.5px] border-[#C0964B] bg-[#FFFFFF] placeholder:text-[#AFA69D] text-[#104448] font-mulish font-medium text-[16px] leading-[145%] outline-none shadow-none"
							ddiSelectClassName="w-[88px] h-[52px] px-[10px] pt-[12.5px] pb-[12.5px] rounded-none border-0 border-b-[1.5px] border-[#C0964B] bg-[#FFFFFF] text-[#917E5A] font-mulish font-medium text-[16px] leading-[145%] focus:outline-none appearance-none"
							phoneInputClassName="flex-1 w-full h-[52px] px-[10px] pt-[12.5px] pb-[12.5px] rounded-none border-0 border-b-[1.5px] border-[#C0964B] bg-[#FFFFFF] placeholder:text-[#AFA69D] text-[#104448] font-mulish font-medium text-[16px] leading-[145%] focus:outline-none shadow-none"
							buttonClassName="mt-[12px] mb-[12px] w-full h-[72px] md:h-[68px] px-[32px] py-[16px] md:py-[20px] rounded-none border-0 bg-[#C0964B] text-white font-spectral font-bold text-[18px] md:text-[18px] leading-[20px] md:leading-[28px] uppercase text-center align-middle transition-none shadow-none hover:brightness-100"
						/>
					</div>

					<p
						className="
						mt-[16px]
						md:mt-[-1px]
						font-spectral
						font-light
						text-[#104448]
						text-[12px]
						md:text-[14px]
						leading-[130%]
						w-full
						max-w-[350px]
						md:w-[521px]
						md:max-w-none
						text-left
					"
					>
						Encontro exclusivo e gratuito para ex-aliadas que já
						conhecem o método, já
						<br className="hidden md:block" />
						tentaram e ainda não destravaram a vida amorosa.
					</p>

					<p className="sr-only">
						Página de inscrição do evento O Resgate dos
						Relacionamentos, encontro ao vivo da Aliança Divergente
						para mulheres que desejam entender por que o
						relacionamento não melhora e identificar o ponto cego
						que trava a vida amorosa.
					</p>
				</div>
			</section>
		</>
	);
}