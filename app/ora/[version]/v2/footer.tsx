import Image from "next/image";

export default function Footer() {
	return (
		<footer className="w-full bg-[#104448]">
			<div
				className="
					w-full
					max-w-[1920px]
					mx-auto
					flex
					flex-col
					items-center
					justify-center
					gap-[20px]
					px-[20px]
					py-[32px]

					md:flex-row
					md:justify-center
					md:items-center
					md:gap-[40px]
					md:px-[40px]
				"
			>
				{/* ESQUERDA */}
				<p
					className="
						font-[Spectral]
						font-normal
						text-[13px]
						md:text-[15px]
						leading-[120%]
						text-center md:text-left
						text-white
					"
				>
					Copyright © 2026. Todos os direitos reservados.
				</p>

				{/* CENTRO */}
				<div className="flex justify-center">
					<Image
						src="/images/ora/v2/Logo.png"
						alt="Aliança Divergente"
						width={220}
						height={32}
						className="w-[190px] md:w-[220px] h-auto object-contain"
					/>
				</div>

				{/* DIREITA */}
				<div
					className="
						font-[Spectral]
						font-normal
						text-[13px]
						md:text-[15px]
						leading-[140%]
						text-center md:text-right
						text-white
					"
				>
					<p>
						<a
							href="/politicas/politica-privacidade-alianca-divergente.pdf"
							download="politica-privacidade.pdf"
							className="hover:underline"
						>
							Política de privacidade
						</a>
						&nbsp;&nbsp;|&nbsp;&nbsp;
						Termos de uso
					</p>

					<p className="mt-[4px]">
						CNPJ nº 48.424.807/0001-88
					</p>
				</div>
			</div>
		</footer>
	);
}