"use client";

import Image from "next/image";

export default function StepOne() {
	return (
		<section className="w-full bg-[#006D71] px-4 py-[72px] md:px-6 md:py-[96px]">
			<div className="mx-auto flex w-full max-w-[876px] flex-col items-center gap-8 md:gap-12">
				
				<div className="flex w-full max-w-[748px] flex-col items-start justify-center gap-4 text-left md:flex-row md:items-start md:gap-6">
					
					<div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-[#25D366] p-[20px] md:mt-[6px]">
						<Image
							src="/images/ora/v2/whatsapp.png"
							alt="WhatsApp"
							width={40}
							height={40}
							className="object-contain"
						/>
					</div>

					<div className="w-full max-w-[748px]">
						
						<div className="flex flex-col md:flex-row md:flex-wrap md:items-start md:gap-x-2">
							<h2
								className="text-[32px] font-bold leading-[40px] text-white md:text-[40px] md:leading-[48px]"
								style={{ fontFamily: '"Spectral", serif' }}
							>
								Passo 1
							</h2>

							<p
								className="mt-1 text-[16px] leading-[28px] text-white md:mt-[8px] md:text-[18px] md:leading-[32px]"
								style={{ fontFamily: '"Spectral", serif' }}
							>
								Clique no botão abaixo e
							</p>
						</div>

						<h3
							className="mt-2 text-[30px] font-bold leading-[38px] text-[#25D366] md:text-[40px] md:leading-[50px]"
							style={{ fontFamily: '"Spectral", serif' }}
						>
							Entre agora mesmo para o grupo
							<br />
							de WhatsApp Oficial do Encontro
						</h3>

					</div>
				</div>

				<div className="flex w-full max-w-[814px] flex-col items-center text-center">
					<p
						className="text-[20px] font-light text-white md:text-[24px]"
						style={{ fontFamily: '"Spectral", serif' }}
					>
						GRUPO FECHADO COM OS MENTORES DA ALIANÇA!
					</p>

					<p
						className="mt-5 text-[20px] font-light text-white md:text-[24px]"
						style={{ fontFamily: '"Spectral", serif' }}
					>
						Lá você receberá todos os avisos, materiais e novidades importantes em primeira mão.
					</p>
				</div>

				<a
					href="https://sendflow.click/i/oraabr26"
					target="_blank"
					rel="noopener noreferrer"
					className="flex h-[68px] w-full max-w-[353px] items-center justify-center bg-[#25D366] px-8 py-5 text-center text-[16px] font-bold uppercase tracking-[0.9px] text-white transition-opacity duration-200 hover:opacity-90 md:text-[18px]"
					style={{ fontFamily: '"Spectral", serif' }}
				>
					Entrar no grupo oficial
				</a>

			</div>
		</section>
	);
}