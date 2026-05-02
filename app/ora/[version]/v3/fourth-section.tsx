"use client";

import React from "react";
import Image from "next/image";
import { handleScroll } from "@/lib/utils";
import { CalendarDays, Smartphone } from "lucide-react";
import { getOraActiveHeadlineVariant } from "@/lib/config/ora-subdomain-headline-config";

export default function FourthSection() {
	const subdomain = getOraActiveHeadlineVariant();

	return (
		<section
			className="
				w-full
				min-h-[1180px]
				md:min-h-[1338px]
				bg-[#071117]
				bg-[url('/images/ora/v1/quarta_dobra_mobile_teste.webp')]
				md:bg-[url('/images/ora/v1/quarta_dobra_desktop_teste.webp')]
				bg-cover
				bg-center
				bg-no-repeat
				flex
				flex-col
				justify-center
				px-2
				pt-36
				pb-6
				md:px-4
				md:pt-16
				md:pb-8
			"
		>
			<div
				className="
					flex	
					flex-col
					w-full
					mx-auto
					max-w-[349px]
					md:max-w-[512px]
					px-4
					mt-[120px]
					pt-[6px]
					md:mt-[80px]
					pb-3
					items-center
				"
			>
				<h2 className="text-center font-[Spectral] text-[32px] leading-[120%] w-full md:w-[544px] md:h-[76px]">
					<span className="block font-normal text-[#00535D]">
						PARTICIPE DA LIVE EXCLUSIVA
					</span>

					<span className="block font-normal text-[#00535D]">
						COM{" "}
						<span className="relative inline-block font-bold italic">
							ELTON EULER
							<span className="absolute left-0 bottom-[-4px] w-full border-t-[2px] border-[#B7A36D]" />
						</span>
					</span>
				</h2>

				<p className="mt-4 text-center font-[Mulish] font-bold text-[20px] leading-[145%] text-[#003036]">
					E conheça a nova Aliança Divergente 2.0
				</p>

				<div className="mt-3 text-center text-[#003036] font-[Mulish] text-[16px] leading-[145%] md:mt-6">
					<p>
						Um encontro ao vivo para quem já conhece o método e quer aprofundar a forma como lida com sua vida financeira.
					</p>

					<p className="mt-3 md:mt-6 font-bold text-[16px] leading-[145%]">
						Nesse encontro você vai:
					</p>
				</div>

				<div className="mt-4 md:mt-8 space-y-2 md:space-y-3">

					{subdomain === "gg" ? (
						<>
							<div className="w-full md:w-[544px] bg-[#B7A36D] px-[16px] py-[14px] flex flex-col gap-[10px] md:min-h-[120px]">
								<ul className="text-[#003036] font-[Mulish] text-[16px] leading-[145%] tracking-[-0.03em]">
									<li>• Entender quais padrões impactam suas decisões financeiras</li>
									<li>• Identificar comportamentos que se repetem sem você perceber</li>
									<li>• Desenvolver mais clareza sobre sua organização financeira</li>
									<li>• Conhecer a Aliança 2.0 e sua nova estrutura</li>
								</ul>
							</div>

							<p className="text-center text-[#003036] font-[Mulish] font-bold text-[16px] leading-[145%]">
								Com foco em:
							</p>

							<div className="w-full md:w-[544px] bg-[#B7A36D] px-[16px] py-[14px] flex flex-col gap-[10px] md:min-h-[120px]">
								<ul className="text-[#003036] font-[Mulish] text-[16px] leading-[145%] tracking-[-0.03em]">
									<li>• Mais consciência nas decisões</li>
									<li>• Mais consistência no dia a dia</li>
									<li>• Mais organização financeira</li>
									<li>• Mais tranquilidade para planejar o futuro</li>
								</ul>
							</div>
						</>
					) : (
						<>
							<div className="w-full md:w-[544px] bg-[#B7A36D] px-[16px] py-[14px] flex flex-col gap-[10px] min-h-[51px]">
								<p className="text-[#003036] font-[Mulish] text-[16px] leading-[145%] tracking-[-0.03em]">
									<span className="font-bold">Entender o que faz o dinheiro não ficar</span> e parar de repetir o mesmo ciclo.
								</p>
							</div>

							<div className="w-full md:w-[544px] bg-[#B7A36D] px-[16px] py-[14px] flex flex-col gap-[10px] min-h-[51px]">
								<p className="text-[#003036] font-[Mulish] text-[16px] leading-[145%] tracking-[-0.03em]">
									<span className="font-bold">Identificar o padrão que opera no seu financeiro</span> sem você perceber.
								</p>
							</div>

							<div className="w-full md:w-[544px] bg-[#B7A36D] px-[16px] py-[14px] flex flex-col gap-[10px] md:min-h-[159px]">
								<p className="text-[#003036] font-[Mulish] text-[16px] leading-[145%] tracking-[-0.03em]">
									<span className="font-bold">Conhecer a nova Aliança 2.0</span> e como ela foi pensada pra te dar:
								</p>
								<ul className="text-[#003036] font-[Mulish] text-[16px] leading-[145%] tracking-[-0.03em]">
									<li>* Dinheiro sobrando na conta todo mês.</li>
									<li>* Independência financeira de verdade.</li>
									<li>* Quitação das dívidas que arrastam.</li>
									<li>* Estabilidade para planejar o futuro com tranquilidade.</li>
								</ul>
							</div>
						</>
					)}

					<div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-[#003036] font-[Mulish] text-[14px] leading-[145%] font-medium">
						<div className="flex items-center gap-2">
							<CalendarDays size={18} />
							<span>Segunda-feira, 11 de maio, às 20h</span>
						</div>

						<div className="flex items-center gap-2">
							<Smartphone size={18} />
							<span>Ao vivo e sem replay</span>
						</div>
					</div>
				</div>

				<div className="mt-12 md:mt-14 w-full">
					<button
						onClick={() => handleScroll()}
						className="
							w-full h-[54px] md:h-[58px] rounded-[8px] border
							px-[24px] py-[14px] flex items-center justify-center
							font-[Mulish] text-[16px]
							font-extrabold uppercase text-[#07210F]
							bg-[radial-gradient(#2DF289,#00873F)]
							border-[#1E8B4C]
						"
					>
						QUERO PARTICIPAR DO ENCONTRO COM ELTON
					</button>
				</div>
			</div>

			<div className="mt-[260px] md:mt-56 flex flex-col items-center gap-4">
				<Image
					src="/images/ora/v3/logo-rodape.png"
					alt="Logo"
					width={175}
					height={70}
					className="w-[140px] md:w-[160px]"
				/>

				<p className="text-white text-[14px] md:text-[16px] mb-4 md:mb-6 text-center">
					© 2026 Aliança Divergente — Todos os Direitos Reservados
				</p>

				<div className="flex flex-col items-center gap-1">
					<p className="text-white text-[14px] md:text-[16px] text-center leading-tight">
						CNPJ nº 48.424.807/0001-88
					</p>

					<p className="text-white text-[14px] md:text-[16px] text-center leading-tight">
						<a
							href="https://www.aliancadivergente.com.br/politicas-de-privacidade"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							Política de privacidade
						</a>
						&nbsp;&nbsp;|&nbsp;&nbsp;
						<a href="#" className="hover:underline">
							Termos de uso
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}