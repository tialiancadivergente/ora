"use client";

import Image from "next/image";

export default function StepThree() {
	return (
		<section
			className="w-full h-[549px] flex items-center bg-cover bg-center bg-no-repeat px-4"
			style={{
				backgroundImage: "url('/images/ora/v2/dobra-quiz.webp')",
			}}
		>
			<div className="w-full max-w-[1200px] mx-auto">
				
				<div className="flex flex-col items-center text-center gap-6 max-w-[392px] mx-auto md:mx-0 md:ml-[280px]">

					<div>
						<p
							className="text-[24px] md:text-[32px] font-bold leading-[40px] md:leading-[50px] text-[#006D71]"
							style={{ fontFamily: '"Spectral", serif' }}
						>
							Agora é só aguardar os
							<br />
							nossos próximos recados.
						</p>

						<p
							className="mt-2 text-[24px] md:text-[32px] font-bold leading-[40px] md:leading-[50px] text-[#006D71]"
							style={{ fontFamily: '"Spectral", serif' }}
						>
							Até o dia 27/04!
						</p>
					</div>

					<div className="mt-2">
						<Image
							src="/images/ora/v2/logo-alianca.png"
							alt="Logo Aliança Divergente"
							width={284}
							height={37}
							className="object-contain"
						/>
					</div>

					<p
						className="text-[12px] text-[#006D71]"
						style={{ fontFamily: '"Spectral", serif' }}
					>
						Copyright © 2026. Todos os direitos reservados.
					</p>

				</div>
			</div>
		</section>
	);
}