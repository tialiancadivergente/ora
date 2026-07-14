import Image from "next/image";

export default function Footer() {
	return (
		<footer className="flex w-full justify-center bg-[#E2D3AB]">
			<div className="flex w-full max-w-[1920px] flex-col items-center justify-center gap-[16px] px-[20px] py-[40px] md:py-[48px]">
				<Image
					src="/images/ora/v4/Logo_01.svg"
					alt="Aliança Divergente"
					width={525}
					height={69}
					className="h-[39px] w-[294px] max-w-full object-contain md:h-[69px] md:w-[525px]"
				/>

				<p className="text-center font-raleway text-[14px] font-normal leading-[120%] text-[#003036] md:text-[16px]">
					© 2026 Aliança Divergente — Todos os Direitos Reservados.
				</p>

				<p className="text-center font-raleway text-[14px] font-normal leading-[120%] text-[#003036] md:text-[16px]">
					CNPJ nº 48.424.807/0001-88
				</p>

				<p className="text-center font-raleway text-[14px] font-normal leading-[120%] text-[#003036] md:text-[16px]">
					<a href="https://www.aliancadivergente.com.br/politicas-de-privacidade" target="_blank" rel="noopener noreferrer" className="hover:underline">
						Política de privacidade
					</a>
					&nbsp;&nbsp;|&nbsp;&nbsp;
					<a href="#" className="hover:underline">
						Termos de uso
					</a>
				</p>
			</div>
		</footer>
	);
}