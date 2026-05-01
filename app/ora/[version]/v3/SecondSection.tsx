"use client";

import { getOraActiveHeadlineVariant } from "@/lib/config/ora-subdomain-headline-config";
import { handleScroll } from "@/lib/utils";

export default function SecondSection() {
	const subdomain = getOraActiveHeadlineVariant();
	return (
		<section
			className={`
				w-full
				min-h-[1632px]
				md:min-h-[961px]

				bg-[url('/images/ora/v1/segunda_dobra_mobile.webp')]
				md:bg-[url('/images/ora/v1/segunda_dobra_desktop.webp')]

				bg-no-repeat
				bg-center
				bg-cover
				flex
				justify-center
				items-start
				md:items-center
				px-6
				pt-[510px]
				md:pt-0
			`}
		>
			<div
				className="
					w-full
					max-w-[1200px]
					grid
					md:grid-cols-2
					gap-10
					items-center
				"
			>

				<div className="hidden md:flex justify-center">
					<img
						src="/images/ora/v1/carteira-dinheiro.webp"
						alt=""
						className="w-[420px]"
					/>
				</div>

				<div className="max-w-[513px]">
					<h2
						className="
							font-[Spectral]
							font-bold
							text-[24px]
							md:text-[28px]
							leading-[125%]
							uppercase
							text-[#E0D0A6]
							mb-6
						"
					>
						{subdomain === "gg" ? (
							<>
								POR QUE PARECE DIFÍCIL MANTER CONSISTÊNCIA FINANCEIRA?
							</>
						) : (
							<>
								POR QUE O DINHEIRO ATÉ ENTRA, MAS NÃO FICA?
							</>
						)}
					</h2>

					<div
						className="
							font-[Mulish]
							text-[16px]
							leading-[145%]
							text-white
							space-y-4
						"
					>
						{subdomain === "gg" ? (
							<>
								<p>Você acorda, trabalha, paga conta, dorme. Repete.</p>

								<p>
									Tem meses que o dinheiro até entra bem. Mas não fica.
									A conta zera. A dívida volta. E aquela sensação de que
									você está sempre correndo atrás, nunca na frente,
									não vai embora.
								</p>

								<p>
									E esse ciclo não é falta de esforço. Não é falta de
									disciplina. Não é porque você não sabe lidar com
									dinheiro.
								</p>

								<p>
									<span className="text-[#E0D0A6]">
										É um teto que opera por baixo do seu financeiro
									</span>{" "}
									que você não consegue ver sozinho.
								</p>

								<p>
									Um teto que faz o dinheiro entrar, mas não ficar.
									Que faz você ganhar mais, mas não sobrar mais.
									Que faz você quitar uma dívida e criar outra
									sem nem perceber.
								</p>

								<p>
									Quem está dentro da Aliança hoje já entendeu isso.
									Não é o método que muda o financeiro,
									é romper esse teto que muda tudo.
								</p>

								<p>
									E este encontro foi pensado para você finalmente
									ver esse teto.
								</p>

								<p>
									Entender onde e como ele opera no seu financeiro.
								</p>

								<p>
									Descobrir por que ele se ativa exatamente quando
									você está prestes a romper e entrar em uma nova fase.
								</p>

								<p>
									E decidir: você continua preso nesse teto...
									ou você está pronto para romper e entrar no
									seu próximo nível?
								</p>

								<p className="font-bold text-[#E0D0A6]">
									É a sua chance de ter acesso único, exclusivo
									e gratuito aos mentores da Aliança Divergente.
								</p>
							</>
						) : (
							<>
								<p>Você acorda, trabalha, paga conta, dorme. Repete.</p>

								<p>
									Tem meses que o dinheiro até entra bem. Mas não fica.
									A conta zera. A dívida volta. E aquela sensação de que
									você está sempre correndo atrás, nunca na frente,
									não vai embora.
								</p>

								<p>
									E esse ciclo não é falta de esforço. Não é falta de
									disciplina. Não é porque você não sabe lidar com
									dinheiro.
								</p>

								<p>
									<span className="text-[#E0D0A6]">
										É um teto que opera por baixo do seu financeiro
									</span>{" "}
									que você não consegue ver sozinho.
								</p>

								<p>
									Um teto que faz o dinheiro entrar, mas não ficar.
									Que faz você ganhar mais, mas não sobrar mais.
									Que faz você quitar uma dívida e criar outra
									sem nem perceber.
								</p>

								<p>
									Quem está dentro da Aliança hoje já entendeu isso.
									Não é o método que muda o financeiro,
									é romper esse teto que muda tudo.
								</p>

								<p>
									E este encontro foi pensado para você finalmente
									ver esse teto.
								</p>

								<p>
									Entender onde e como ele opera no seu financeiro.
								</p>

								<p>
									Descobrir por que ele se ativa exatamente quando
									você está prestes a romper e entrar em uma nova fase.
								</p>

								<p>
									E decidir: você continua preso nesse teto...
									ou você está pronto para romper e entrar no
									seu próximo nível?
								</p>

								<p className="font-bold text-[#E0D0A6]">
									É a sua chance de ter acesso único, exclusivo
									e gratuito aos mentores da Aliança Divergente.
								</p>
							</>
						)}

					</div>

					<div className="mt-[16px] md:mt-[32px] mb-8 md:mb-0">
						<button
							onClick={handleScroll}
							className="
							w-full
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
							hover:bg-[radial-gradient(50%_142.16%_at_50%_50%,#49FFC1_0%,#00B454_100%)]
							hover:shadow-[0px_8px_16px_#0B7D4680,0px_32px_32px_#0B7D4660,0px_61px_40px_#0B7D4640]
							hover:scale-[1.025]
						"
						>
							QUERO ROMPER MEU TETO FINANCEIRO
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}