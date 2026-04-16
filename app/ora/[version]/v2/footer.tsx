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
					gap-[16px]
					px-[20px]
					py-[32px]

					md:flex-row
					md:justify-center
					md:gap-[32px]
					md:px-[40px]
					md:py-[28px]
				"
			>
				<Image
					src="/images/ora/v2/Logo.png"
					alt="Aliança Divergente"
					width={220}
					height={32}
					className="w-[190px] md:w-[220px] h-auto object-contain"
				/>

				<p
					className="
						font-[Spectral]
						font-normal
						text-[13px]
						md:text-[15px]
						leading-[120%]
						text-center
						text-white
					"
				>
					Copyright © 2026. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
}