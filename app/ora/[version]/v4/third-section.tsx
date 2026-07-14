"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, X } from "lucide-react";
import { handleScroll } from "@/lib/utils";

const negativeItems: ReactNode[] = [
	<>Você está <strong>satisfeito com sua vida financeira</strong> hoje.</>,
	<>Você <strong>quer resultado da noite para o dia</strong> sem mudar nada.</>,
	<>Você <strong>não está disposto a olhar pros seus próprios padrões</strong> com honestidade.</>,
];

const positiveItems: ReactNode[] = [
	<>Você quer <strong>ter dinheiro sobrando na conta todo mês</strong>, não só sobreviver até o próximo.</>,
	<>Você quer <strong>entender por que o dinheiro vai embora</strong> mesmo nos meses que você ganha bem.</>,
	<>Você quer <strong>independência financeira de verdade.</strong> Suas escolhas. Sua vida. Sem depender de ninguém.</>,
	<>Você quer <strong>quitar as dívidas que tão arrastando</strong> e finalmente limpar o nome.</>,
	<>Você quer <strong>sair da montanha-russa e ter estabilidade</strong> pra planejar o futuro sem aquela ansiedade.</>,
];

function CardItem({ positive = false, children }: { positive?: boolean; children: ReactNode }) {
	return (
		<div className="flex items-start gap-[10px] md:gap-3">
			<span className={`mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[2px] ${positive ? "bg-[#18F28A]" : "bg-[#FF1A1A]"}`}>
				{positive ? <Check className="h-[10px] w-[10px] stroke-[3] text-[#071117]" /> : <X className="h-[10px] w-[10px] stroke-[3] text-[#071117]" />}
			</span>
			<p className="font-mulish text-[13px] font-normal leading-[145%] text-white md:text-[16px]">{children}</p>
		</div>
	);
}

export default function ThirdSection() {
	return (
		<section
			aria-labelledby="terceira-dobra-titulo"
			className="relative z-0 ml-[calc(50%_-_50vw)] h-[1253px] w-screen overflow-hidden bg-[#061416] bg-[url('/images/ora/v4/bg_terceira_dobra_mobile.png')] bg-[length:auto_1253px] bg-center bg-top bg-no-repeat md:h-[1723px] md:bg-[url('/images/ora/v4/bg_terceira_dobra_desktop.png')] md:bg-[length:auto_1723px] md:bg-center md:bg-top"
		>
			<button
				type="button"
				onClick={handleScroll}
				className="absolute left-1/2 top-[45px] z-40 hidden h-[86.24px] w-[457.91px] -translate-x-1/2 items-center justify-center gap-[20.99px] rounded-[10.5px] border border-[#30CC79] bg-[radial-gradient(50%_142.16%_at_50%_50%,#2DF289_0%,#00873F_100%)] px-[62.98px] py-[13.12px] font-mulish text-[20.99px] font-extrabold uppercase leading-[145%] text-[#071117] shadow-[0px_6px_12px_#0B7D466E,0px_22px_22px_#0B7D465E,0px_51px_30px_#0B7D4638,0px_90px_36px_#0B7D4612,0px_140px_39px_#0B7D4603] transition-transform hover:scale-[1.025] md:flex"
			>
				<span className="text-center">
					Quero fazer a minha
					<br />
					retomada financeira
				</span>
				<ArrowUpRight className="h-[28px] w-[28px] shrink-0 stroke-[2.5]" />
			</button>

			<h2
				id="terceira-dobra-titulo"
				className="absolute left-1/2 top-[38px] z-30 w-[348px] max-w-[calc(100%-32px)] -translate-x-1/2 text-center font-spectral text-[33.38px] font-bold uppercase leading-[125%] text-[#E0D0A6] md:top-[230px] md:w-[784px] md:max-w-none md:text-[28px]"
			>
				Esse encontro com os mentores
			</h2>

			<div className="absolute left-1/2 top-[140px] h-[906px] w-full -translate-x-1/2 md:top-[310px] md:h-[486px] md:w-[864px]">
				<div className="absolute left-1/2 top-0 z-10 h-[490px] w-[calc(100%-32px)] max-w-[422px] -translate-x-1/2 rounded-[16px] border border-[rgba(211,0,0,0.45)] bg-[linear-gradient(141.1deg,rgba(90,0,0,0)_0%,rgba(90,0,0,0.25)_100%)] p-[30px] md:left-0 md:h-[486px] md:w-[424px] md:max-w-none md:translate-x-0 md:p-[32px]">
					<div className="mb-[21px] h-[3px] w-[80px] bg-[#D30000]" />

					<h3 className="mb-[24px] font-spectral text-[21px] font-bold uppercase leading-[125%] text-[#E0D0A6] md:text-[24px]">
						Não é pra você se...
					</h3>

					<div className="flex flex-col gap-[12px] md:gap-4">
						{negativeItems.map((item, index) => <CardItem key={index}>{item}</CardItem>)}
					</div>
				</div>

				<div className="absolute left-1/2 top-[325px] z-20 h-[581px] w-[calc(100%-32px)] max-w-[422px] -translate-x-1/2 rounded-[16px] border border-[rgba(48,204,121,0.55)] bg-[linear-gradient(141.1deg,rgba(12,83,46,0)_0%,rgba(12,83,46,0.25)_100%)] p-[30px] md:left-auto md:right-0 md:top-0 md:h-[486px] md:w-[424px] md:max-w-none md:translate-x-0 md:p-[32px]">
					<div className="mb-[21px] h-[3px] w-[80px] bg-[#30CC79]" />

					<h3 className="mb-[24px] font-spectral text-[21px] font-bold uppercase leading-[125%] text-[#E0D0A6] md:text-[24px]">
						É pra você se...
					</h3>

					<div className="flex flex-col gap-[11px] md:gap-4">
						{positiveItems.map((item, index) => <CardItem key={index} positive>{item}</CardItem>)}
					</div>
				</div>

				<Image
					src="/images/ora/v4/Group 1171274984.png"
					alt=""
					aria-hidden="true"
					width={300}
					height={300}
					className="pointer-events-none absolute right-[14px] top-[300px] z-30 h-auto w-[110px] object-contain md:left-[20px] md:right-auto md:top-[285px] md:w-[255px]"
				/>

				<Image
					src="/images/ora/v4/Group 1171274985.png"
					alt=""
					aria-hidden="true"
					width={180}
					height={180}
					className="pointer-events-none absolute -right-[35px] top-[590px] z-30 h-auto w-[110px] object-contain md:-right-[40px] md:-top-[45px] md:w-[150px]"
				/>

				<div className="absolute left-1/2 top-[258px] z-30 hidden h-[50px] w-[50px] -translate-x-1/2 items-center justify-center rounded-full bg-[#C89B45] shadow-[0_8px_20px_rgba(200,155,69,0.3)] md:flex">
					<X className="h-[25px] w-[25px] stroke-[3] text-white" />
				</div>
			</div>

			<button
				type="button"
				onClick={handleScroll}
				className="absolute left-1/2 top-[948px] z-40 flex h-[66.05px] w-[349.96px] max-w-[calc(100%-32px)] -translate-x-1/2 items-center justify-center gap-[16px] rounded-[8px] border border-[#30CC79] bg-[radial-gradient(50%_142.16%_at_50%_50%,#2DF289_0%,#00873F_100%)] px-[48px] py-[10px] font-mulish text-[16.04px] font-extrabold uppercase leading-[145%] text-[#071117] shadow-[0px_6px_12px_#0B7D466E,0px_22px_22px_#0B7D465E,0px_51px_30px_#0B7D4638,0px_90px_36px_#0B7D4612,0px_140px_39px_#0B7D4603] transition-transform hover:scale-[1.025] md:top-[850px] md:h-[58px] md:w-[513px] md:max-w-none md:gap-[12px] md:px-4 md:py-0 md:text-[16px]"
			>
				<span className="whitespace-nowrap text-center">
					Quero fazer a minha <br className="md:hidden" />
					retomada financeira
				</span>
				<ArrowUpRight className="h-[21px] w-[21px] shrink-0 stroke-[2.5]" />
			</button>

			<Image
				src="/images/ora/v4/logo_mobile.png"
				alt="Participe da Retomada Financeira"
				width={420}
				height={170}
				className="pointer-events-none absolute bottom-[18px] left-1/2 z-30 h-auto w-[420px] max-w-[calc(100%-32px)] -translate-x-1/2 object-contain md:hidden"
			/>

			<img
				src="/images/ora/v4/logo_versão_desktop.png"
				alt="Participe da Retomada Financeira"
				className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-auto w-full object-contain md:block"
			/>
		</section>
	);
}