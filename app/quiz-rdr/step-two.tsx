"use client";

import Image from "next/image";

export default function StepTwo() {
	return (
		<section className="w-full bg-[#C0964B] px-4 py-[72px] md:px-6 md:py-[96px]">
			<div className="mx-auto flex w-full max-w-[876px] flex-col items-center gap-8 md:gap-12">
				<div className="flex w-full max-w-[748px] flex-col items-start justify-center gap-4 text-left md:flex-row md:items-start md:gap-6">
					
					<div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-[#F4F0E1] px-[20px] pt-[18px] pb-[22px] md:mt-[6px]">
						<Image
							src="/images/ora/v2/envelope-open.png"
							alt="E-mail"
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
								Passo 2
							</h2>

							<p
								className="mt-1 text-[16px] leading-[28px] text-white md:mt-[8px] md:text-[18px] md:leading-[32px]"
								style={{ fontFamily: '"Spectral", serif' }}
							>
								Entre no seu e-mail e
							</p>

						</div>

						<h3
							className="mt-2 text-[30px] font-bold leading-[38px] text-white md:text-[40px] md:leading-[50px]"
							style={{ fontFamily: '"Spectral", serif' }}
						>
							Veja se recebeu a confirmação
							<br />
							da sua inscrição
						</h3>

					</div>
				</div>

				<div className="flex w-full max-w-[876px] flex-col items-center text-center">
					<p
						className="text-[20px] font-light text-white md:text-[24px]"
						style={{ fontFamily: '"Spectral", serif' }}
					>
						O envio pode demorar alguns minutos. Se não tiver encontrado, não esqueça de verificar a caixa de SPAM.
					</p>
				</div>

				<div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-7">
					
					<a
						href="https://mail.google.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-[72px] w-full max-w-[181px] items-center justify-center gap-4 bg-white px-8 py-5"
					>
						<Image
							src="/images/ora/v2/gmail 1.png"
							alt="Gmail"
							width={24}
							height={24}
							className="object-contain"
						/>
						<span
							className="text-[16px] uppercase tracking-[1.6px] text-[#104448] md:text-[18px]"
							style={{ fontFamily: '"Spectral", serif' }}
						>
							Gmail
						</span>
					</a>

					<a
						href="https://outlook.live.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-[72px] w-full max-w-[216px] items-center justify-center gap-4 bg-white px-8 py-5"
					>
						<Image
							src="/images/ora/v2/Microsoft_Outlook_Icon_(2025–present) 1.png"
							alt="Outlook"
							width={24}
							height={24}
							className="object-contain"
						/>
						<span
							className="text-[16px] uppercase tracking-[1.6px] text-[#104448] md:text-[18px]"
							style={{ fontFamily: '"Spectral", serif' }}
						>
							Outlook
						</span>
					</a>

				</div>
			</div>
		</section>
	);
}