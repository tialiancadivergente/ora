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
							w-full
							md:w-[513px]
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
						POR QUE O DINHEIRO ATÉ ENTRA, MAS NÃO FICA?
					</h2>

					<div
						className="
							w-full
							md:w-[513px]
							font-[Mulish]
							text-[16px]
							leading-[145%]
							text-white
							space-y-4
						"
					>
						<>
							<p>
								Você já provou que tem capacidade. Já trabalhou duro. Já fez sua
								parte. Já teve meses bons. Já achou que tinha pegado o jeito.
							</p>

							<p>Mas o dinheiro continua sumindo.</p>

							<p>
								A conta zera. A dívida volta. E a estabilidade que parecia perto vai
								embora de novo.
							</p>

							<p>
								E esse ciclo não é falta de esforço. Não é falta de disciplina. Não
								é porque você não sabe lidar com dinheiro.
							</p>

							<p>
								É porque existe um padrão presente no seu financeiro que você não
								consegue ver sozinho.
							</p>

							<p>
								Um padrão que faz o dinheiro entrar, mas não ficar. Que faz você
								ganhar mais, mas não sobrar mais. Que faz você quitar uma dívida e
								criar outra sem nem perceber.
							</p>

							<p>
								E este encontro foi pensado para que você consiga identificar qual é
								o SEU padrão.
							</p>

							<p>Ver onde e como ele age no seu financeiro.</p>

							<p>
								Entender por que ele se ativa exatamente quando você está prestes a
								estabilizar.
							</p>

							<p>
								E decidir se você quer continuar nesse ciclo... ou se você está
								pronto para romper e garantir um futuro melhor.
							</p>

							<p>
								É a sua chance de ter acesso único aos mentores da Aliança
								Divergente.
							</p>
						</>
					</div>

					<div className="mt-[16px] md:mt-[32px] mb-8 md:mb-0 w-full">
						<button
							onClick={handleScroll}
							className="
								w-full
								h-[58px]
								rounded-[8px]
								border
								border-transparent
								bg-[radial-gradient(50%_142.16%_at_50%_50%,#2DF289_0%,#00873F_100%)]
								text-[#071117]
								font-[Mulish]
								font-extrabold
								text-[13px]
								md:text-[16px]
								leading-[145%]
								uppercase
								flex
								items-center
								justify-center
								px-4
								text-center
								whitespace-nowrap
								shadow-[0px_6px_12px_#0B7D466E,0px_22px_22px_#0B7D465E,0px_51px_30px_#0B7D4638,0px_90px_36px_#0B7D4612,0px_140px_39px_#0B7D4603]
								hover:bg-[radial-gradient(50%_142.16%_at_50%_50%,#49FFC1_0%,#00B454_100%)]
								hover:shadow-[0px_8px_16px_#0B7D4680,0px_32px_32px_#0B7D4660,0px_61px_40px_#0B7D4640]
								hover:scale-[1.025]
							"
						>
							QUERO FAZER A MINHA VIRADA FINANCEIRA
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}