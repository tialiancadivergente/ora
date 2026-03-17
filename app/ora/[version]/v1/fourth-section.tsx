"use client";

import React from "react";

export default function FourthSection() {
    return (
        <section
            className="
				w-full
				min-h-[600px]
				md:min-h-[800px]
				bg-[#071117]
				bg-[url('/images/seu-caminho/mobile.webp')]
				md:bg-[url('/images/ora/v1/quarta_dobra_desktop.webp')]
				bg-cover
				bg-center
				bg-no-repeat
				flex
				justify-center
				px-2
				py-7
				md:px-4
				md:py-8
			"
        >
            <div
                className="
					w-full
					max-w-[349px]
					md:max-w-[631px]
					bg-[#D8CCA7]
					px-4
					pt-[28px]
					pb-4
					md:px-[59.5px]
					md:pt-[28px]
					md:pb-6
				"
            >
                <h2
                    className="
		text-center
		text-[#00535D]
		font-[Spectral]
		text-[24px]
		md:text-[32px]
		leading-[120%]
	"
                >
                    Participe do{" "}
                    <span className="font-bold italic border-b-2 border-[#B7A36D] pb-[2px]">
                        Próximo Nível
                    </span>
                </h2>

                <div
                    className="
						mt-4
						md:mt-3
						text-center
						text-[#003036]
						font-[Mulish]
						text-[14px]
						leading-[145%]
						font-normal
						md:text-[16px]
					"
                >
                    <p>
                        E tenha a certeza de um futuro melhor com a nova Aliança
                        Divergente 2.0
                    </p>

                    <p className="mt-3">
                        Um encontro ao vivo com os mentores da Aliança Divergente pra
                        quem já viveu o método, sabe que funciona, mas ainda precisa
                        romper o teto financeiro.
                    </p>

                    <p className="mt-3 font-bold">Nesse encontro você vai:</p>
                </div>

                <div className="mt-4 md:mt-5 space-y-3">
                    <div
                        className="
							w-full
							bg-[#B7A36D]
							px-6
							py-4
							min-h-[70px]
							md:min-h-[78px]
							flex
							items-center
						"
                    >
                        <p
                            className="
								text-[#003036]
								font-[Mulish]
								text-[14px]
								leading-[135%]
								font-bold
								md:text-[16px]
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
							px-6
							py-4
							min-h-[70px]
							md:min-h-[78px]
							flex
							items-center
						"
                    >
                        <p
                            className="
								text-[#003036]
								font-[Mulish]
								text-[14px]
								leading-[135%]
								font-bold
								md:text-[16px]
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
							px-6
							py-4
							min-h-[200px]
							md:min-h-[163px]
							flex
							items-start
						"
                    >
                        <div
                            className="
								text-[#003036]
								font-[Mulish]
								text-[14px]
								leading-[135%]
								md:text-[16px]
								md:leading-[145%]
							"
                        >
                            <p className="font-bold">
                                Conhecer a nova Aliança 2.0 e como ela foi pensada para te
                                levar ao seu próximo nível, te dando:
                            </p>

                            <div className="mt-4">
                                <p>
                                    Dinheiro sobrando na conta todo mês. Independência
                                    <br />
                                    financeira de verdade. Quitação das dívidas que arrastam.
                                    <br />
                                    Estabilidade pra planejar o futuro com tranquilidade
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 md:mt-6">
                    <button
                        className="
							w-full
							min-h-[58px]
							rounded-[8px]
							border
							px-12
							py-4
							font-[Mulish]
							text-[14px]
							leading-[145%]
							font-extrabold
							uppercase
							text-[#07210F]
							bg-[radial-gradient(50%_142.16%_at_50%_50%,#2DF289_0%,#00873F_100%)]
							shadow-[0px_6px_12px_0px_#0B7D466E,0px_22px_22px_0px_#0B7D465E,0px_51px_30px_0px_#0B7D4638,0px_90px_36px_0px_#0B7D4612,0px_140px_39px_0px_#0B7D4603]
							border-[#1E8B4C]
						"
                    >
                        QUERO ROMPER MEU TETO FINANCEIRO
                    </button>
                </div>
            </div>
        </section>
    );
}