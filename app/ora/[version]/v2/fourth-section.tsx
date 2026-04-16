"use client";

import { handleScroll } from "@/lib/utils";

export default function FourthSection() {
	return (
		<section
			className="
				w-full
				bg-[url('/images/ora/v2/fourth-desktop.webp')]
				md:bg-[url('/images/ora/v2/fourth-desktop.webp')]
				bg-cover
				bg-center
				bg-no-repeat
				flex
				justify-center
				px-6
				py-[72px]
				md:py-[60px]
			"
		>
			<div className="w-full max-w-[880px] flex flex-col items-center">
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
						leading-[120%]
						md:leading-[120%]
						tracking-[0.12em]
						md:tracking-[0.16em]
					"
				>
					O QUE VOCÊ VAI
					<br />
					DESCOBRIR NO ENCONTRO
				</h2>

				<p
					className="
						w-full
						max-w-[880px]
						mt-[32px]
						md:mt-[36px]
						text-center
						font-[Spectral]
						font-light
						text-[#006D71]
						text-[18px]
						md:text-[24px]
						leading-[140%]
						md:leading-[120%]
					"
				>
					Não é mais um encontro sobre padrões em geral. Este foi desenhado
					<br className="hidden md:block" />
					especificamente para quem já fez a Aliança, já rodou os protocolos,
					<br className="hidden md:block" />
					<span className="font-bold">
						mas o relacionamento, dentro do casamento ou na busca por um homem
						<br className="hidden md:block" />
						bom, ainda não destravou.
					</span>
				</p>

				{/* 🔥 MAIS RESPIRO ENTRE OS BLOCOS */}
				<div className="w-full mt-[40px] md:mt-[48px] flex flex-col gap-[16px] md:gap-[18px]">
					{[
						{
							title:
								"O ponto cego específico que ainda opera no seu relacionamento",
							desc:
								"O que está agindo nos bastidores e que os protocolos anteriores ainda não alcançaram, tanto para quem está casada quanto para quem está solteira.",
						},
						{
							title:
								"Por que você mantém ou atrai homens que não assumem o papel deles",
							desc:
								"E o que está agindo nos bastidores e que os protocolos anteriores ainda não alcançaram, tanto para quem está casada quanto para quem está solteira.",
						},
						{
							title:
								"Por que você pode estar afastando o homem bom sem perceber",
							desc:
								"O que impede o homem provedor e protetor de chegar e ficar.",
						},
						{
							title:
								"O que a nova Aliança 2.0 trouxe de diferente para relacionamentos",
							desc:
								"Ferramentas novas para destravar a vida afetiva de quem já conhece o método mas ainda não saiu do lugar.",
						},
						{
							title: "O próximo passo concreto",
							desc:
								"Não só entendimento. Um olhar direto sobre o que está travado e o que fazer a partir daqui.",
						},
					].map((item, i) => (
						<div
							key={i}
							className="
								w-full
								min-h-[80px]
								bg-[#F4F0E9]
								rounded-[2px]
								px-[16px]
								py-[14px]
								flex
								items-start
								gap-[14px]
							"
						>
							<div
								className="
									w-[23px]
									shrink-0
									text-center
									font-[Spectral]
									font-bold
									text-[28px]
									md:text-[40px]
									leading-[28px]
									text-[#006D71]
								"
							>
								{i + 1}
							</div>

							<div className="flex-1 pt-[2px]">
								<h3
									className="
										font-[Spectral]
										font-bold
										text-[15px]
										md:text-[18px]
										leading-[22px]
										md:leading-[28px]
										text-[#07242C]
									"
								>
									{item.title}
								</h3>

								<p
									className="
										mt-[4px]
										font-[Spectral]
										font-normal
										text-[13px]
										md:text-[16px]
										leading-[20px]
										md:leading-[24px]
										text-[#104448]
									"
								>
									{item.desc}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* 🔥 MAIS ESPAÇO ATÉ A DATA */}
				<p
					className="
						w-full
						mt-[48px]
						md:mt-[56px]
						text-center
						font-[Spectral]
						font-bold
						italic
						text-[#006D71]
						text-[16px]
						md:text-[24px]
						leading-[130%]
						md:leading-[100%]
					"
				>
					Segunda, 27 de abril&nbsp; | &nbsp;20h&nbsp; | &nbsp;100% online&nbsp;
					| &nbsp;Gratuito&nbsp; | &nbsp;Sem replay
				</p>

				{/* 🔥 MAIS ESPAÇO ATÉ O BOTÃO */}
				<div className="mt-[32px] md:mt-[40px] w-full flex justify-center">
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
						"
					>
						QUERO DESTRAVAR MEU RELACIONAMENTO
					</button>
				</div>
			</div>
		</section>
	);
}