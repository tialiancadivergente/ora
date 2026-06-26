"use client";

import React from "react";
import Image from "next/image";
import { handleScroll } from "@/lib/utils";
import { CalendarDays, Smartphone } from "lucide-react";

export default function FourthSection() {
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
						PARTICIPE DA VIRADA
					</span>

					<span className="block font-normal text-[#00535D]">
						{" "}
						<span className="relative inline-block font-bold italic">
							FINANCEIRA
							<span className="absolute left-0 bottom-[-4px] w-full border-t-[2px] border-[#B7A36D]" />
						</span>
					</span>
				</h2>

				<p className="mt-4 w-full md:w-[544px] text-center font-[Mulish] font-bold text-[16px] md:text-[20px] leading-[145%] text-[#003036]">
					E conheça o novo Marca-Passos com inteligência artificial integrada
				</p>

				<div className="mt-3 w-full md:w-[544px] text-center text-[#003036] font-[Mulish] text-[16px] leading-[145%] md:mt-6">
					<p>
						Um encontro ao vivo com os mentores da Aliança Divergente pra quem já viveu o processo, sabe que funciona, mas ainda precisa destravar o financeiro.
					</p>

					<p className="mt-3 md:mt-6 font-bold text-[16px] leading-[145%]">
						Nesse encontro você vai:
					</p>
				</div>

				<div className="mt-4 md:mt-8 space-y-2 md:space-y-3">
					<div className="w-full md:w-[544px] bg-[#B7A36D] px-[16px] py-[14px] flex flex-col gap-[10px] min-h-[51px]">
						<p className="text-[#003036] font-[Mulish] text-[14px] md:text-[16px] leading-[145%] tracking-[0em] md:tracking-[-0.03em]">
							<span className="font-bold">Entender o que faz o dinheiro não ficar</span> e parar de repetir o mesmo ciclo.
						</p>
					</div>

					<div className="w-full md:w-[544px] bg-[#B7A36D] px-[16px] py-[14px] flex flex-col gap-[10px] min-h-[51px]">
						<p className="text-[#003036] font-[Mulish] text-[14px] md:text-[16px] leading-[145%] tracking-[0em] md:tracking-[-0.03em]">
							<span className="font-bold">Identificar o padrão que opera no seu financeiro</span> sem você perceber.
						</p>
					</div>

					<div className="w-full md:w-[544px] bg-[#B7A36D] px-[16px] py-[14px] flex flex-col gap-[10px] md:min-h-[159px]">
						<p className="text-[#003036] font-[Mulish] text-[14px] md:text-[16px] leading-[145%] tracking-[0em] md:tracking-[-0.03em]">
							<span className="font-bold">Conhecer o novo Marca-Passos com inteligência artificial integrada</span> e como ele foi pensado pra te dar:
						</p>

						<ul className="text-[#003036] font-[Mulish] text-[14px] md:text-[16px] leading-[145%] tracking-[0em] md:tracking-[-0.03em]">
							<li>* Dinheiro sobrando na conta todo mês.</li>
							<li>* Independência financeira de verdade.</li>
							<li>* Quitação das dívidas que arrastam.</li>
							<li>* Estabilidade para planejar o futuro com tranquilidade.</li>
						</ul>
					</div>

					<div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-[#003036] font-[Mulish] text-[14px] leading-[145%] font-medium">
						<div className="flex items-center gap-2">
							<CalendarDays size={18} />
							<span>Segunda-feira, 06/07 às 20h</span>
						</div>

						<div className="flex items-center gap-2">
							<Smartphone size={18} />
							<span>Ao vivo e sem replay</span>
						</div>
					</div>
				</div>

				<div className="mt-12 md:mt-8 w-full">
					<button
						onClick={() => handleScroll()}
						className="
							w-full
							max-w-[413px]
							h-[54px] md:h-[58px]
							rounded-[8px]
							border
							px-[24px]
							flex items-center justify-center
							font-[Mulish]
							text-[13px] md:text-[16px]
							font-extrabold uppercase
							text-[#07210F]
							bg-[radial-gradient(#2DF289,#00873F)]
							border-[#1E8B4C]
							whitespace-nowrap
							mx-auto
							md:!mx-auto
						"
						style={{
							width: "calc(100% + 32px)",
							marginLeft: "-16px",
							marginRight: "-16px",
							maxWidth: "413px",
						}}
					>
						QUERO FAZER A MINHA VIRADA FINANCEIRA
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