"use client";

import { handleScroll } from "@/lib/utils";

export default function ThirdSection() {
	return (
		<section
			className="
				w-full
				bg-[url('/images/ora/v2/third-desktop.webp')]
				bg-no-repeat
				bg-center
				bg-cover
				flex
				justify-center
				px-5
				py-[56px]
				md:py-[72px]
			"
		>
			<div className="w-full max-w-[876px] flex flex-col items-center">
				<h2
					className="
						w-full
						text-center
						font-[Spectral]
						font-bold
						text-[#EAE6E1]
						text-[30px]
						md:text-[40px]
						leading-[120%]
						md:leading-[50px]
						mb-[28px]
						md:mb-[32px]
					"
				>
					Esse encontro é para você se...
				</h2>

				<div className="w-full flex flex-col gap-[16px]">
					{[
						"Você está em um relacionamento travado e já fez muito, mas ainda não conseguiu ver o que especificamente bloqueia o seu parceiro de assumir o papel dele.",
						"Você está solteira, trabalhou seu feminino, sabe o que quer em um homem e não entende por que esse homem não chega, ou por que você acaba afastando quem aparece.",
						"Você quer parar de ser a forte, a guerreira. Quer ter permissão real de descansar, ser cuidada, ser protegida e não apenas saber disso na teoria.",
						"Você quer clareza do seu ponto cego específico em relacionamentos.",
						"Você quer o próximo passo real, não só inspiração.",
					].map((text, i) => (
						<div key={i} className="flex items-start gap-[12px]">
							<div className="w-[32px] h-[32px] shrink-0 flex items-center justify-center">
								<div className="w-[28px] h-[28px] rounded-full bg-[#C0964B] flex items-center justify-center">
									<span className="text-white text-[14px] leading-none">
										✓
									</span>
								</div>
							</div>
							<p
								className="
									font-[Spectral]
									text-white
									text-[15px]
									md:text-[18px]
									leading-[24px]
									md:leading-[28px]
								"
							>
								{text}
							</p>
						</div>
					))}
				</div>

				<h2
					className="
						w-full
						text-center
						font-[Spectral]
						font-bold
						text-[30px]
						md:text-[40px]
						leading-[120%]
						md:leading-[50px]
						mt-[36px]
						md:mt-[40px]
						mb-[24px]
					"
				>
					<span className="text-[#CA9A63]">NÃO</span>{" "}
					<span className="text-[#EAE6E1]">é para você se...</span>
				</h2>

				<div className="w-full flex flex-col gap-[16px]">
					{[
						"Você está satisfeita com a sua vida amorosa hoje.",
						"Você quer resultado sem olhar para os seus próprios padrões.",
						"Você não está disposta a enxergar o que ainda está invisível na sua vida afetiva.",
					].map((text, i) => (
						<div key={i} className="flex items-start gap-[12px]">
							<div className="w-[32px] h-[32px] shrink-0 flex items-center justify-center">
								<div className="w-[28px] h-[28px] rounded-full bg-[#C4674D] flex items-center justify-center">
									<span className="text-white text-[14px] leading-none">
										×
									</span>
								</div>
							</div>
							<p
								className="
									font-[Spectral]
									text-white
									text-[15px]
									md:text-[18px]
									leading-[24px]
									md:leading-[28px]
								"
							>
								{text}
							</p>
						</div>
					))}
				</div>

				<div className="mt-[36px] md:mt-[40px] w-full flex justify-center">
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