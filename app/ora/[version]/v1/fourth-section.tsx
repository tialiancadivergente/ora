"use client";

import React from "react";
import Image from "next/image";

export default function FourthSection() {
    return (
        <section
            className="
				w-full
				min-h-[1180px]
				md:min-h-[1008px]
				bg-[#071117]
				bg-[url('/images/ora/v1/quarta_dobra_mobile_teste.webp')]
				md:bg-[url('/images/ora/v1/quarta_dobra_desktop_teste.webp')]
				bg-cover
				bg-center
				bg-no-repeat
				flex
				justify-center
				px-2
				pt-36
				pb-6
				md:px-4
				md:pt-16
				md:pb-8
			"
        >
            <div
                className="
					w-full
					max-w-[349px]
					md:max-w-[512px]
					px-4
					mt-[80px]
					pt-[6px]
					md:mt-0
					pb-3
					md:px-[52px]
					md:pt-[20px]
					md:pb-6
				"
            >
                <h2
                    className="
						text-center
						text-[#00535D]
						font-[Spectral]
						text-[24px]
						leading-[120%]
						md:text-[26px]
					"
                >
                    Participe do{" "}
                    <span className="relative inline-block font-bold italic">
                        Próximo Nível
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1px] hidden h-0 w-[170px] rotate-[0.82deg] border-t-[2px] border-[#B7A36D] md:block" />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] block h-0 w-[160px] border-t-[2px] border-[#B7A36D] md:hidden" />
                    </span>
                </h2>

                <div
                    className="
						mt-3
						text-center
						text-[#003036]
						font-[Mulish]
						text-[14px]
						leading-[140%]
						font-normal
						md:mt-3
						md:text-[14px]
						md:leading-[145%]
					"
                >
                    <p>
                        E tenha a certeza de um futuro melhor com a nova Aliança
                        Divergente 2.0
                    </p>

                    <p className="mt-3 md:mt-3">
                        Um encontro ao vivo com os mentores da Aliança Divergente pra
                        quem já viveu o método, sabe que funciona, mas ainda precisa
                        romper o teto financeiro.
                    </p>

                    <p className="mt-3 md:mt-3 font-bold">Nesse encontro você vai:</p>
                </div>

                <div className="mt-4 md:mt-4 space-y-2 md:space-y-[4px]">
                    <div
                        className="
							w-full
							bg-[#B7A36D]
							px-4
							py-3
							min-h-[60px]
							flex
							items-center
							md:min-h-[77px]
							md:px-[14px]
							md:py-[10px]
						"
                    >
                        <p
                            className="
								text-[#003036]
								font-[Mulish]
								text-[13px]
								leading-[130%]
								font-bold
								md:text-[14px]
								md:leading-[145%]
							"
                        >
                            Entender o que faz o teto financeiro se manter e parar de
                            repetir o mesmo ciclo.
                        </p>
                    </div>

                    <div
                        className="
							w-full
							bg-[#B7A36D]
							px-4
							py-3
							min-h-[60px]
							flex
							items-center
							md:min-h-[63px]
							md:px-[14px]
							md:py-[10px]
						"
                    >
                        <p
                            className="
								text-[#003036]
								font-[Mulish]
								text-[13px]
								leading-[130%]
								font-bold
								md:text-[14px]
								md:leading-[145%]
							"
                        >
                            Identificar o padrão que opera no seu financeiro sem você
                            perceber.
                        </p>
                    </div>

                    <div
                        className="
							w-full
							bg-[#B7A36D]
							px-4
							py-3
							min-h-[142px]
							flex
							items-start
							md:min-h-[93px]
							md:px-[14px]
							md:py-[10px]
						"
                    >
                        <div
                            className="
								text-[#003036]
								font-[Mulish]
								text-[13px]
								leading-[130%]
								md:text-[14px]
								md:leading-[145%]
							"
                        >
                            <p className="font-bold">
                                Conhecer a nova Aliança 2.0 e como ela foi pensada para te
                                levar ao seu próximo nível, te dando:
                            </p>

                            <div className="mt-3 md:mt-3">
                                <p>
                                    Dinheiro sobrando na conta todo mês. Independência
                                    financeira de verdade. Quitação das dívidas que arrastam.
                                    Estabilidade pra planejar o futuro com tranquilidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-0 md:mt-0 flex justify-center">
                    <div className="mt-4 md:mt-[16px] flex justify-center">
                        <div className="mt-4 md:mt-[16px]">
                            <div className="mt-4 md:mt-[16px]">
                                <div className="mt-0 md:mt-[4px] flex justify-center">
                                    <button
                                        className="
        -mt-[12px]
        w-full
        h-[54px]
        rounded-[8px]
        border
        px-[24px]
        py-[14px]
        flex
        items-center
        justify-center
        gap-[10px]

        font-[Mulish]
        text-[12px]
        md:text-[14px]
        leading-[145%]
        font-extrabold
        uppercase

        text-[#07210F]
        bg-[radial-gradient(50%_142.16%_at_50%_50%,#2DF289_0%,#00873F_100%)]

        shadow-[0px_6px_12px_#0B7D466E,0px_22px_22px_#0B7D465E,0px_51px_30px_#0B7D4638]

        border-[#1E8B4C]
    "
                                    >
                                        QUERO ROMPER MEU TETO FINANCEIRO
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BLOCO DO RODAPÉ CONTROLADO SEPARADAMENTE NO MOBILE */}

                <div className="mt-[280px] md:mt-36 md:translate-y-[60px] flex flex-col items-center justify-center gap-3 md:gap-4">
                    <Image
                        src="/images/ora/v1/logo_roda_pe.png"
                        alt="Logo"
                        width={160}
                        height={70}
                        className="object-contain w-[140px] md:w-[160px] h-auto"
                    />

                    <p
                        className="
							text-center
							text-white
							font-raleway
							font-normal
							text-[14px]
							md:text-[16px]
							leading-[100%]
						"
                    >
                        2026 Aliança Divergente © Todos os Direitos Reservados.
                    </p>
                </div>

            </div>
        </section>
    );
}