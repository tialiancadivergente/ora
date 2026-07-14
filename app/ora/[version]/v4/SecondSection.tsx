"use client";

import { ArrowUpRight } from "lucide-react";
import { handleScroll } from "@/lib/utils";

export default function SecondSection() {
	return (
		<section
			aria-labelledby="segunda-dobra-titulo"
			className="relative h-[751px] w-full overflow-hidden bg-[#E0D0A6] bg-[url('/images/ora/v4/bg_segunda_dobra__mobile.png')] bg-[length:auto_751px] bg-center bg-top bg-no-repeat md:h-[810px] md:bg-[url('/images/ora/v4/bg_segunda_dobra_desktop.png')] md:bg-[length:100%_810px]"
		>
			<h2
				id="segunda-dobra-titulo"
				className="absolute left-1/2 top-[58.83px] w-[346.59px] max-w-[calc(100%-32px)] -translate-x-1/2 font-spectral text-[23.44px] font-bold uppercase leading-[125%] text-[#071117] md:top-[86.39px] md:w-[720.69px] md:max-w-none md:text-center md:text-[47.99px]"
			>
				Por que o dinheiro até entra, mas <span className="underline decoration-[1px] underline-offset-[4px]">não fica?</span>
			</h2>

			<div className="absolute left-1/2 top-[147.42px] w-[346.59px] max-w-[calc(100%-32px)] -translate-x-1/2 space-y-[12px] font-mulish text-[14.99px] leading-[23.31px] text-[#071117] md:top-[237.92px] md:w-[828.86px] md:max-w-none md:space-y-[20px] md:text-center md:text-[25px] md:font-bold md:leading-[35px]">
				<p className="font-bold">
					Você já provou que tem capacidade. Já trabalhou duro. Já fez a sua parte. Já teve meses bons. Já achou que tinha pegado o jeito.
				</p>

				<p className="font-normal md:font-bold">
					A conta zera. A dívida volta. E aquela estabilidade que parecia perto some de novo. E esse ciclo não é falta de esforço. Não é falta de disciplina. Não é porque você não sabe lidar com dinheiro.
				</p>
			</div>

			<div className="absolute left-1/2 top-[370.02px] w-[346.59px] max-w-[calc(100%-32px)] -translate-x-1/2 space-y-[10px] font-mulish text-[12.22px] font-normal leading-[20.37px] text-[#071117] md:top-[507.92px] md:w-[897.19px] md:max-w-none md:space-y-[14px] md:text-center md:text-[20px] md:font-bold md:leading-[30px]">
				<p>
					É porque tem um padrão que se repete no seu financeiro, e ninguém nunca te mostrou como interromper ele. Um padrão que faz o dinheiro entrar, mas não ficar. Que faz você ganhar mais, mas não sobrar mais. Que faz você quitar uma conta e criar outra sem nem perceber.
				</p>

				<p>
					E esse encontro foi pensado pra você conseguir identificar qual é o SEU padrão.
					<br className="hidden md:block" /> Ver onde e como ele age no seu financeiro. Entender por que ele sempre volta justo quando você está perto de estabilizar.
				</p>

				<p>
					E decidir se você quer continuar nesse ciclo... ou se você está pronto pra retomar o controle e garantir um futuro melhor.{" "}
					<span className="underline decoration-[1px] underline-offset-[3px]">É a sua chance de sentar cara a cara com os mentores.</span>
				</p>
			</div>

			<button
				type="button"
				onClick={handleScroll}
				className="absolute left-1/2 top-[660px] flex h-[66.05px] w-[349.96px] max-w-[calc(100%-32px)] -translate-x-1/2 items-center justify-center gap-[16.04px] rounded-[8.02px] border border-transparent bg-[radial-gradient(50%_142.16%_at_50%_50%,#2DF289_0%,#00873F_100%)] px-[48.13px] py-[10.03px] font-mulish text-[16.04px] font-extrabold uppercase leading-[145%] text-[#071117] shadow-[0px_6px_12px_#0B7D466E,0px_22px_22px_#0B7D465E,0px_51px_30px_#0B7D4638] transition-transform hover:scale-[1.025] hover:bg-[radial-gradient(50%_142.16%_at_50%_50%,#49FFC1_0%,#00B454_100%)] md:hidden"
			>
				<span className="text-center">
					Quero fazer a minha
					<br />
					retomada financeira
				</span>

				<ArrowUpRight className="h-[22px] w-[22px] shrink-0 stroke-[2.5]" />
			</button>
		</section>
	);
}