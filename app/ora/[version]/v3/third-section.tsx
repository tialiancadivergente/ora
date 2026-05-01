"use client";

import { handleScroll } from "@/lib/utils";
import { getOraActiveHeadlineVariant } from "@/lib/config/ora-subdomain-headline-config";
import { Check, X } from "lucide-react";

export default function ThirdSection() {
	const subdomain = getOraActiveHeadlineVariant();

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
					<div className="w-full max-w-[349px] md:w-[424px] md:max-w-none min-h-[360px] md:min-h-[480px] rounded-[16px] p-[24px] md:p-[32px] flex flex-col gap-6 border border-[rgba(211,0,0,0.45)] bg-[linear-gradient(141.1deg,rgba(90,0,0,0)_0%,rgba(90,0,0,0.25)_100%)] mx-auto md:mx-0">
						
						<div className="w-[56px] h-[3px] bg-[#D30000]" />

						<h2 className="font-[Spectral] font-bold text-[24px] leading-[125%] uppercase text-[#E0D0A6]">
							{subdomain === "gg" ? (
								<>NÃO É PRA VOCÊ SE...</>
							) : (
								<>NÃO É PRA VOCÊ SE...</>
							)}
						</h2>

						<div className="flex flex-col gap-4">
							{subdomain === "gg" ? (
								<>
									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#FF1A1A]">
											<X className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você está totalmente satisfeito com sua vida financeira hoje.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#FF1A1A]">
											<X className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você busca soluções rápidas sem mudar comportamento.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#FF1A1A]">
											<X className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você não está disposto a olhar para seus próprios padrões.
										</p>
									</div>
								</>
							) : (
								<>
									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#FF1A1A]">
											<X className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você <span className="font-bold">está satisfeito com sua vida financeira</span> hoje.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#FF1A1A]">
											<X className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você <span className="font-bold">quer resultado da noite para o dia</span> sem mudar nada.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#FF1A1A]">
											<X className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você <span className="font-bold">não está disposto a olhar para os seus próprios padrões</span> com honestidade.
										</p>
									</div>
								</>
							)}
						</div>
					</div>

					<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50px] w-[50px] items-center justify-center rounded-full bg-[#C89B45] shadow-[0_8px_20px_rgba(200,155,69,0.3)] z-10">
						<X className="h-[25px] w-[23px] stroke-[3] text-[#F2F2F2]" />
					</div>

					<div className="w-full max-w-[349px] md:w-[424px] md:max-w-none min-h-[360px] md:min-h-[480px] rounded-[16px] p-[24px] md:p-[32px] flex flex-col gap-6 border border-[rgba(48,204,121,0.55)] bg-[linear-gradient(141.1deg,rgba(12,83,46,0)_0%,rgba(12,83,46,0.25)_100%)] mx-auto md:mx-0">
						
						<div className="w-[56px] h-[3px] bg-[#30CC79]" />

						<h2 className="font-[Spectral] font-bold text-[24px] leading-[125%] uppercase text-[#E0D0A6]">
							{subdomain === "gg" ? (
								<>É PRA VOCÊ SE...</>
							) : (
								<>É PRA VOCÊ SE...</>
							)}
						</h2>

						<div className="flex flex-col gap-4">
							{subdomain === "gg" ? (
								<>
									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
											<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você quer ter mais clareza e organização na sua vida financeira.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
											<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você quer tomar decisões financeiras com mais segurança e menos impulso.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
											<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você quer sair da sensação de instabilidade e ter mais previsibilidade.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
											<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você quer construir uma relação mais equilibrada com dinheiro.
										</p>
									</div>

								</>
							) : (
								<>
									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
											<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você quer <span className="font-bold">ter dinheiro sobrando na conta todo mês,</span> não só sobreviver até o próximo.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
											<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você quer <span className="font-bold">entender por que o dinheiro vai embora</span> mesmo nos meses que você ganha bem.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
											<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você quer <span className="font-bold">independência financeira de verdade.</span> Suas escolhas. Sua vida. Sem depender de ninguém.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
											<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você quer <span className="font-bold">quitar as dívidas que tão arrastando</span> e finalmente limpar o nome.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] bg-[#18F28A]">
											<Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />
										</div>
										<p className="font-[Mulish] text-[14px] md:text-[16px] leading-[145%] text-white">
											Você quer <span className="font-bold">sair da montanha-russa e ter estabilidade</span> pra planejar o futuro sem aquela ansiedade.
										</p>
									</div>
								</>
							)}
						</div>
					</div>
				</div>

				<div className="mt-10 w-full flex justify-center">
					<button
						onClick={() => handleScroll()}
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
							text-[16px]
							leading-[145%]
							uppercase
							flex
							items-center
							justify-center
							shadow-[0px_6px_12px_#0B7D466E,0px_22px_22px_#0B7D465E,0px_51px_30px_#0B7D4638,0px_90px_36px_#0B7D4612,0px_140px_39px_#0B7D4603]
							hover:bg-[radial-gradient(50%_142.16%_at_50%_50%,#49FFC1_0%,#00B454_100%)]
							hover:shadow-[0px_8px_16px_#0B7D4680,0px_32px_32px_#0B7D4660,0px_61px_40px_#0B7D4640]
							hover:scale-[1.025]
						"
					>
						QUERO PARTICIPAR DO ENCONTRO COM ELTON
					</button>
				</div>
			</div>
		</section>
	);
}