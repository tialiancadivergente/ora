"use client";

import React from "react";
import { CalendarDays, Smartphone, ChevronDown } from "lucide-react";
import Image from "next/image";

interface ContainerProps {
	titleRedLine: React.ReactNode | null;
	redLine: React.ReactNode | null;
	formName: string;
	onSubmit: (data: any) => void | Promise<void>;
	submitError?: string | null;
}

export default function HeroSection({
	titleRedLine,
}: ContainerProps) {
	return (
		<section
			id="hero"
			className={`relative h-[1000px] md:h-[985px] flex flex-col justify-start overflow-hidden bg-[#071117] bg-[url('/images/cida/v1/background_mobile.webp')] md:bg-[url('/images/ora/v1/primeira_dobra_desktop.webp')] bg-cover bg-center p-4 md:p-0`}
		>

			{/* CONTAINER DO BLOCO */}
			<div className="w-full max-w-[349px] md:max-w-[527px] flex flex-col items-center md:items-start text-center md:text-left mt-[20px] md:mt-[80px] md:ml-[210px]">

				{/* LOGO */}
				<div className="mb-[16px]">
					<Image
						src="/images/ora/v1/logo_o_proximo_nivel.png"
						alt="Logo"
						width={175}
						height={81}
						className="mx-auto md:mx-0"
					/>
				</div>

				{/* HEADLINE */}
				<h1
					className="
					font-spectral
					font-bold
					uppercase
					text-white
					text-[20px]
					leading-[120%]
					tracking-[-0.02em]
					w-[349px]
					text-center
					md:w-[527px]
					md:text-[32px]
					md:text-left
					"
				>
					{titleRedLine}
				</h1>

				{/* DATA */}
				<div
					className="
					flex
					items-center
					justify-center
					md:justify-start
					gap-[20px]
					mt-[16px]
					text-white
					font-mulish
					text-[14px]
					md:text-[16px]
					"
				>
					<div className="flex items-center gap-2">
						<CalendarDays size={18} color="#C0964B" />
						<span>Segunda-feira, 23/03, às 20h</span>
					</div>

					<div className="flex items-center gap-2">
						<Smartphone size={18} color="#C0964B" />
						<span>Ao vivo e sem replay</span>
					</div>
				</div>

				{/* FRAME */}
				<div
					className="
					mt-[16px]
					w-[349px]
					md:w-[527px]
					border-l-[2px]
					border-[#C0964B]
					bg-[#FFFFFF0A]
					backdrop-blur-[13.5px]
					px-[24px]
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
						"
					>
						Você já foi aliado. Já conhece o método. Já tentou.
						Mas o dinheiro ainda não está sobrando. E você sabe
						que não é por falta de esforço.
					</p>
				</div>

				{/* TEXTO */}
				<p
					className="
					mt-[16px]
					text-white
					font-mulish
					text-[14px]
					leading-[125%]
					w-[349px]
					md:w-[527px]
					md:text-[16px]
					"
				>
					Nesse <strong>encontro ao vivo com os mentores da Aliança Divergente</strong>,
					você vai entender o que realmente impede você de romper seu teto financeiro.
					E por que a nova Aliança 2.0 foi criada para levar você ao seu próximo nível.
				</p>

				{/* FORM */}
				<div className="mt-[20px] w-full flex flex-col gap-[12px]">

					<input
						placeholder="Seu nome:"
						className="
						w-[349px]
						md:w-[527px]
						h-[52px]
						md:h-[56px]
						px-[16px]
						rounded-[8px]
						border
						border-[#6F6F6F]
						bg-[#0404040A]
						backdrop-blur-[20px]
						font-mulish
						font-medium
						text-[16px]
						leading-[145%]
						text-white
						placeholder:text-white
						outline-none
						"
					/>

					<input
						placeholder="Seu melhor e-mail:"
						className="
						w-[349px]
						md:w-[527px]
						h-[52px]
						md:h-[56px]
						px-[16px]
						rounded-[8px]
						border
						border-[#6F6F6F]
						bg-[#0404040A]
						backdrop-blur-[20px]
						font-mulish
						font-medium
						text-[16px]
						leading-[145%]
						text-white
						placeholder:text-white
						outline-none
						"
					/>

					{/* WHATSAPP */}
					<div
						className="
						w-[349px]
						md:w-[527px]
						h-[52px]
						md:h-[56px]
						flex
						items-stretch
						rounded-[8px]
						border
						border-[#6F6F6F]
						bg-[#0404040A]
						backdrop-blur-[20px]
						overflow-hidden
						"
					>
						<div className="relative flex items-center gap-2 px-[14px] border-r border-[#6F6F6F] bg-[#FFFFFF1A]">

							<span className="font-mulish font-medium text-[16px] leading-[145%] text-white">
								BR
							</span>

							<span className="font-mulish font-medium text-[16px] leading-[145%] text-white">
								+55
							</span>

							<ChevronDown size={16} color="#FFFFFF" className="ml-1 pointer-events-none shrink-0" />

							<select
								defaultValue="+55"
								className="
								absolute
								inset-0
								w-full
								h-full
								opacity-0
								cursor-pointer
								"
							>
								<option value="+55">Brasil (+55)</option>
								<option value="+1">Estados Unidos (+1)</option>
								<option value="+351">Portugal (+351)</option>
								<option value="+44">Reino Unido (+44)</option>
							</select>
						</div>

						<input
							type="tel"
							placeholder="Seu WhatsApp:"
							className="
							flex-1
							h-full
							px-[16px]
							bg-transparent
							font-mulish
							font-medium
							text-[16px]
							leading-[145%]
							text-white
							placeholder:text-white
							outline-none
							"
						/>
					</div>

				</div>

				{/* BOTÃO */}
				<button
					className="
					mt-[16px]
					w-[349px]
					md:w-[527px]
					h-[52px]
					md:h-[56px]
					rounded-[8px]
					font-mulish
					font-extrabold
					text-[16px]
					leading-[145%]
					uppercase
					text-black
					"
					style={{
						background:
							"radial-gradient(50% 142.16% at 50% 50%, #2DF289 0%, #00873F 100%)",
						border: "1px solid",
						borderImageSource:
							"linear-gradient(180deg,#30CC79 0%,#0C532E 100%)",
						boxShadow:
							"0px 6px 12px #0B7D466E, 0px 22px 22px #0B7D465E, 0px 51px 30px #0B7D4638",
					}}
				>
					QUERO ROMPER MEU TETO FINANCEIRO
				</button>

				{/* TEXTO FINAL */}
				<p
					className="
					mt-[16px]
					text-white
					font-mulish
					text-[12px]
					md:text-[14px]
					leading-[125%]
					w-[349px]
					md:w-[527px]
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