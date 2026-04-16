"use client";

import { handleScroll } from "@/lib/utils";

export default function SecondSection() {
	return (
		<section
			className={`
				w-full
				min-h-[900px]
				md:min-h-[1362px]

				bg-[url('/images/ora/v2/second-desktop.webp')]
				md:bg-[url('/images/ora/v2/second-desktop.webp')]

				bg-no-repeat
				bg-center
				bg-cover
				md:bg-top

				flex
				justify-center
				items-start

				px-6
				pt-[90px]
				md:pt-[140px]
			`}
		>
			<div
				className="
					w-full
					max-w-[880px]
					flex
					flex-col
					items-start
					md:items-center
					mx-auto
				"
			>
				<h2
					className="
						w-full
						max-w-[880px]
						text-center
						font-[Spectral]
						font-bold
						uppercase
						text-[#917E5A]
						text-[30px]
						md:text-[48px]
						leading-[110%]
						md:leading-[100%]
						tracking-[0.12em]
						md:tracking-[0.16em]
						mb-[36px]
						md:mb-[52px]
					"
				>
					VOCÊ SE
					<br />
					RECONHECE AQUI?
				</h2>

				<div className="w-full max-w-[880px]">
					<h3
						className="
							font-[Spectral]
							font-bold
							text-[#006D71]
							text-[26px]
							md:text-[40px]
							leading-[120%]
							md:leading-[50px]
							mb-[20px]
							md:mb-[24px]
						"
					>
						1. Você está em um relacionamento ruim...
					</h3>

					<div
						className="
							font-[Mulish]
							font-light
							text-[#104448]
							text-[16px]
							md:text-[18px]
							leading-[26px]
							md:leading-[28px]
							space-y-4
						"
					>
						<p>
							E já colocou limites. Teve as conversas difíceis.
							Entendeu os padrões. Rompeu algumas coisas.
							<span className="font-bold">
								{" "}
								Mas ainda existe algo te impedindo de ter uma vida
								mais leve.
							</span>
						</p>

						<p>
							Seu marido não assume o lugar de provedor, você até
							tenta, mas não consegue descansar. Ainda se cobra,
							ainda se sente culpada, ainda é você quem carrega. E
							quando tenta abrir espaço para ele assumir o papel
							dele, algo trava de novo.
						</p>

						<p className="font-bold">
							O pior não é o casamento ruim. O pior é o cansaço de
							já ter feito tanto e ainda estar no mesmo lugar.
						</p>
					</div>
				</div>

				<div className="w-full max-w-[880px] mt-[44px] md:mt-[48px]">
					<h3
						className="
							font-[Spectral]
							font-bold
							text-[#006D71]
							text-[26px]
							md:text-[40px]
							leading-[120%]
							md:leading-[50px]
							mb-[20px]
							md:mb-[24px]
						"
					>
						2. Você está solteira...
					</h3>

					<div
						className="
							font-[Mulish]
							font-light
							text-[#104448]
							text-[16px]
							md:text-[18px]
							leading-[26px]
							md:leading-[28px]
							space-y-4
						"
					>
						<p>
							Você já trabalhou seu feminino. Parou de ser
							guerreira. Sabe o que quer:
							<span className="font-bold">
								{" "}
								um homem provedor, protetor, que queira casar e
								construir algo real.
							</span>
						</p>

						<p>
							Mas quando você olha ao redor, o que geralmente aparece
							não é esse homem, é o contrário. E quando aparece um
							homem bom e você acaba afastando ele sem entender por
							quê.
						</p>

						<p>Essas situações não são azar.</p>

						<p className="font-bold">
							São padrões que ainda estão ativados em você e que você
							não consegue ver e quebrar sozinha.
						</p>

						<p>
							Padrões que fazem você atrair ou manter homens que não
							assumem o papel deles. Que faz você afastar o homem bom
							quando ele aparece. Que faz você tomar a frente de tudo
							e depois não conseguir parar, mesmo querendo.
						</p>

						<p className="font-bold">
							Esse encontro foi pensado pra você finalmente ver e
							romper com esses padrões de relacionamentos.
						</p>
					</div>
				</div>

				<div className="mt-[32px] md:mt-[48px] mb-8 md:mb-0 w-full flex justify-center">
					<button
						onClick={handleScroll}
						className="
							w-full
							max-w-[520px]
							h-[68px]
							px-[32px]
							py-[20px]

							bg-[#C0964B]
							text-white

							font-[Spectral]
							font-bold
							text-[16px]
							md:text-[18px]
							leading-[28px]
							tracking-[0.9px]
							uppercase

							flex
							items-center
							justify-center
							text-center

							md:whitespace-nowrap

							transition-all
							duration-200
							hover:brightness-110
						"
					>
						QUERO DESTRAVAR MEU RELACIONAMENTO
					</button>
				</div>
			</div>
		</section>
	);
}