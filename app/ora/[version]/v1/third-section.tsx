"use client";

import { Check, X } from "lucide-react";

export default function ThirdSection() {
	return (
		<section
			className="
				w-full
				min-h-[1100px]
				md:min-h-[760px]
				bg-[url('/images/ora/v1/terceira_dobra_mobile.webp.webp')]
				md:bg-[url('/images/ora/v1/terceira_dobra_desktop.webp')]
				bg-no-repeat
				bg-center
				bg-cover
				px-5
				py-14
				flex
				justify-center
			"
		>
			<div className="w-full max-w-[980px] flex flex-col items-center">
				<div
					className="
						relative
						w-full
						flex
						flex-col
						md:flex-row
						items-center
						md:items-stretch
						justify-center
						gap-4
						md:gap-2
					"
				>
					<div
						className="
							w-full
							max-w-[349px]
							md:w-[424px]
							md:max-w-none
							min-h-[360px]
							md:min-h-[480px]
							rounded-[16px]
							p-[24px]
							md:p-[32px]
							flex
							flex-col
							gap-6
							border
							border-[rgba(211,0,0,0.45)]
							bg-[linear-gradient(141.1deg,rgba(90,0,0,0)_0%,rgba(90,0,0,0.25)_100%)]
							mx-auto
							md:mx-0
						"
					>
						<div className="w-[56px] h-[3px] bg-[#D30000]" />

						<h2
							className="
								font-[Spectral]
								font-bold
								text-[24px]
								leading-[125%]
								uppercase
								text-[#E0D0A6]
							"
						>
							ESSE ENCONTRO NÃO É PRA VOCÊ SE...
						</h2>

						<div className="flex flex-col gap-4">
							<div className="flex items-start gap-3">
								<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#FF1A1A]">
									<X className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
								</div>
								<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
									Você{" "}
									<span className="font-bold">
										está satisfeito com sua vida financeira
									</span>{" "}
									hoje.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#FF1A1A]">
									<X className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
								</div>
								<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
									Você{" "}
									<span className="font-bold">
										quer resultado da noite para o dia
									</span>{" "}
									sem mudar nada.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#FF1A1A]">
									<X className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
								</div>
								<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
									Você{" "}
									<span className="font-bold">
										não está disposto a olhar para os seus próprios padrões
									</span>{" "}
									com honestidade.
								</p>
							</div>
						</div>
					</div>

					<div
						className="
							hidden
							md:flex
							absolute
							left-1/2
							top-1/2
							-translate-x-1/2
							-translate-y-1/2
							h-[50px]
							w-[50px]
							items-center
							justify-center
							rounded-full
							bg-[#C89B45]
							shadow-[0_8px_20px_rgba(200,155,69,0.3)]
							z-10
						"
					>
						<X className="h-[25px] w-[23px] stroke-[3] text-[#F2F2F2]" />
					</div>

					<div
						className="
							w-full
							max-w-[349px]
							md:w-[424px]
							md:max-w-none
							min-h-[360px]
							md:min-h-[480px]
							rounded-[16px]
							p-[24px]
							md:p-[32px]
							flex
							flex-col
							gap-6
							border
							border-[rgba(48,204,121,0.55)]
							bg-[linear-gradient(141.1deg,rgba(12,83,46,0)_0%,rgba(12,83,46,0.25)_100%)]
							mx-auto
							md:mx-0
						"
					>
						<div className="w-[56px] h-[3px] bg-[#30CC79]" />

						<h2
							className="
								font-[Spectral]
								font-bold
								text-[24px]
								leading-[125%]
								uppercase
								text-[#E0D0A6]
							"
						>
							ESSE ENCONTRO É PRA VOCÊ SE...
						</h2>

						<div className="flex flex-col gap-4">
							<div className="flex items-start gap-3">
								<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
									<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
								</div>
								<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
									Você{" "}
									<span className="font-bold">
										quer romper seu teto financeiro
									</span>{" "}
									e entrar em uma nova fase da sua vida.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
									<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
								</div>
								<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
									Você <span className="font-bold">já tentou antes</span> e sabe
									que o método funciona — mas ainda não conseguiu romper o teto
									pra você.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
									<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
								</div>
								<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
									Você quer{" "}
									<span className="font-bold">
										entender o que está travando seu próximo nível
									</span>
									, além do que você já sabe.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
									<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
								</div>
								<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
									Você quer{" "}
									<span className="font-bold">
										quitar as dívidas que tão arrastando
									</span>{" "}
									e finalmente limpar o nome.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
									<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
								</div>
								<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
									Você quer{" "}
									<span className="font-bold">
										sair da montanha-russa e ter estabilidade
									</span>{" "}
									pra planejar o futuro sem aquela ansiedade.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-10 w-full flex justify-center">
					<button
						className="
							w-[349px]
							md:w-[513px]
							h-[58px]
							rounded-[8px]
							border
							border-transparent
							bg-[radial-gradient(50%_142.16%_at_50%_50%,#2DF289_0%,#00873F_100%)]
							text-[#071117]
							font-[Mulish]
							font-extrabold
							text-[14px]
							uppercase
							flex
							items-center
							justify-center
							shadow-[0px_6px_12px_#0B7D466E,0px_22px_22px_#0B7D465E,0px_51px_30px_#0B7D4638,0px_90px_36px_#0B7D4612,0px_140px_39px_#0B7D4603]
						"
					>
						QUERO ROMPER MEU TETO FINANCEIRO
					</button>
				</div>
			</div>
		</section>
	);
}