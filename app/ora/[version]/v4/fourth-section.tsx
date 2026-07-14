"use client";

import Image from "next/image";
import { ArrowUpRight, CalendarDays, Smartphone } from "lucide-react";
import { handleScroll } from "@/lib/utils";

const bulletItems = [
	"Dinheiro na conta no fim do mês.",
	"Controle das suas escolhas, sem depender de ninguém.",
	"As dívidas que se arrastam colocadas em ordem.",
	"Estabilidade pra planejar o futuro com tranquilidade.",
];

export default function FourthSection() {
	return (
		<section
			id="quarta-dobra"
			aria-labelledby="quarta-dobra-titulo"
			className="relative h-[533px] w-full overflow-hidden bg-[#071117] bg-[url('/images/ora/v4/quarta_dobra_mobile.png')] bg-[length:auto_533px] bg-center bg-top bg-no-repeat md:h-[977px] md:bg-[url('/images/ora/v4/quarta_dobra_desktop.png')] md:bg-[length:auto_977px] md:bg-center md:bg-top"
		>
			<div className="relative mx-auto h-full w-full max-w-[1920px]">
				<div className="absolute left-1/2 top-[27px] w-[331.34px] max-w-[calc(100%-32px)] -translate-x-1/2 md:left-[150px] md:top-[220px] md:w-[632px] md:max-w-none md:translate-x-0">
					<h2 id="quarta-dobra-titulo" className="font-spectral text-[23.91px] font-semibold leading-[120%] text-[#E0D0A6] md:w-[569.61px] md:text-[41.11px]">
						Um encontro ao vivo com os mentores da Aliança pra quem já começou essa caminhada e quer, de uma vez, voltar a ter o dinheiro sob controle.
					</h2>

					<div className="mt-[10px] flex items-center gap-[4px] md:mt-[26px] md:gap-[8px]">
						<p className="shrink-0 font-mulish text-[16.1px] font-normal leading-[145%] tracking-[-0.02em] text-white md:w-[343px] md:text-[30.72px]">
							Nesse encontro você vai:
						</p>

						<div className="h-[1.23px] w-[118.63px] shrink-0 bg-[#E0D0A6] md:h-[2.34px] md:w-[226.37px]" />
					</div>

					<div className="mt-[12px] space-y-[6px] md:mt-[20px] md:space-y-[11px]">
						<div className="flex min-h-[32.92px] w-[347.86px] max-w-full items-center bg-[#B7A36D] px-[10.24px] py-[8.96px] md:h-[59.57px] md:w-[632px] md:px-[18.61px] md:py-[16.28px]">
							<p className="font-mulish text-[10.24px] leading-[145%] tracking-[-0.03em] text-[#003036] md:text-[18.61px]">
								<span className="font-bold">Entender o que faz o dinheiro não ficar</span> e parar de repetir o mesmo ciclo.
							</p>
						</div>

						<div className="flex min-h-[32.92px] w-[347.86px] max-w-full items-center bg-[#B7A36D] px-[10.24px] py-[8.96px] md:h-[59.57px] md:w-[632px] md:px-[18.61px] md:py-[16.28px]">
							<p className="font-mulish text-[10.24px] leading-[145%] tracking-[-0.03em] text-[#003036] md:text-[18.61px]">
								<span className="font-bold">Identificar o padrão que opera no seu financeiro</span> sem você perceber.
							</p>
						</div>

						<div className="relative min-h-[162.92px] w-[347.86px] max-w-full bg-[#E2D3AB] px-[10.24px] py-[8.96px] md:h-[220px] md:w-[632px] md:px-[18.61px] md:py-[16.28px]">
							<Image
								src="/images/ora/v4/Ellipse 92.png"
								alt=""
								aria-hidden="true"
								width={83}
								height={83}
								className="pointer-events-none absolute left-[-14px] top-[70px] h-[44px] w-[44px] object-contain drop-shadow-[5px_6px_6.3px_rgba(0,0,0,0.25)] md:left-[-36px] md:top-[46px] md:h-[82.55px] md:w-[82.55px]"
							/>

							<div className="pl-[20px] md:pl-[50px]">
								<p className="font-mulish text-[10.66px] leading-[145%] tracking-[-0.03em] text-[#003036] md:w-[530.36px] md:text-[18.61px]">
									<span className="font-bold">Conhecer o novo Marca-Passos com inteligência artificial integrada</span> e como ele foi pensado pra te dar:
								</p>

								<ul className="mt-[8px] space-y-[2px] font-mulish text-[10.66px] leading-[145%] tracking-[-0.03em] text-[#003036] md:mt-[10px] md:text-[18.61px]">
									{bulletItems.map((item) => (
										<li key={item} className="flex items-start gap-[6px] md:gap-[8px]">
											<span className="mt-[4px] block h-[3px] w-[3px] shrink-0 rounded-full bg-[#003036] md:mt-[8px] md:h-[5px] md:w-[5px]" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="absolute right-[182px] top-[825px] hidden w-[430px] flex-col items-start md:flex">
					<div className="mb-[18px] flex items-center gap-[24px] whitespace-nowrap font-mulish text-[12.31px] font-medium leading-[145%] text-white">
						<div className="flex items-center gap-[6px]">
							<CalendarDays className="h-[14px] w-[14px] text-[#C0964B]" />
							<span>Segunda, 20/07 | 20h 100% online</span>
						</div>

						<div className="flex items-center gap-[6px]">
							<Smartphone className="h-[14px] w-[14px] text-[#C0964B]" />
							<span>Gratuito | Sem replay</span>
						</div>
					</div>

					<button
						type="button"
						onClick={handleScroll}
						className="flex h-[56px] w-[430px] items-center justify-center gap-[16px] rounded-[8px] border border-[#30CC79] bg-[radial-gradient(50%_142.16%_at_50%_50%,#2DF289_0%,#00873F_100%)] px-[48px] py-[16px] font-mulish text-[16px] font-extrabold uppercase leading-[145%] text-[#071117] shadow-[0px_6px_12px_#0B7D466E,0px_22px_22px_#0B7D465E,0px_51px_30px_#0B7D4638,0px_90px_36px_#0B7D4612,0px_140px_39px_#0B7D4603] transition-transform hover:scale-[1.02]"
					>
						<span className="whitespace-nowrap">Quero fazer a minha virada financeira</span>
						<ArrowUpRight className="h-[18px] w-[18px] shrink-0 stroke-[2.5]" />
					</button>
				</div>
			</div>
		</section>
	);
}