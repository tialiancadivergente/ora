"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ContainerQuestProps {
  whatsappUrl: string;
  theme: string;
}

export default function ContainerQuest({
  whatsappUrl,
  theme,
}: ContainerQuestProps) {
  useEffect(() => {
    const html = document.documentElement;

    if (theme === "2") {
      html.classList.add("light");
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
      html.classList.remove("light");
    }
  }, [theme]);

  return (
    <div>
      <section className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden bg-[#071117]">
        <div className="container relative mx-auto h-full px-4">
          <div className="flex flex-col items-center pb-4 pt-4 text-center md:pt-8">
            <div className="mx-auto w-full max-w-4xl">
              <div className="mb-2 flex justify-center md:mb-3">
                <Image
                  src="/images/ora/v4/Group 1.png"
                  alt="Logotipo"
                  width={367}
                  height={179}
                  priority
                  className="w-[220px] object-contain md:w-[330px]"
                />
              </div>

              <h1
                className="mx-auto mb-3 text-center uppercase text-white md:mb-4"
                style={{
                  fontFamily: '"Spectral", serif',
                  fontWeight: 700,
                  lineHeight: "1.05",
                }}
              >
                <span className="block text-[24px] md:text-[50px]" />
                <span className="mt-1 block text-[24px] md:text-[50px]" />
              </h1>

              <div className="mb-4 flex justify-center md:mb-5">
                <div
                  className="w-full max-w-[689px]"
                  style={{
                    padding: "8px 18px",
                    borderLeft: "2px solid #C0964B",
                    borderRight: "2px solid #C0964B",
                    backdropFilter: "blur(13.5px)",
                  }}
                >
                  <p
                    className="text-center"
                    style={{
                      fontFamily: '"Spectral", serif',
                      fontWeight: 600,
                      fontSize: "15px",
                      lineHeight: "120%",
                      color: "#E0D0A6",
                    }}
                  >
                    <span className="hidden md:block md:text-[20px]">
                      Segunda-feira • 06 de julho • às 20h
                    </span>

                    <span className="block md:hidden">
                      Segunda-feira
                      <br />
                      06 de julho • às 20h
                    </span>
                  </p>
                </div>
              </div>

              <div className="my-3 flex justify-center md:my-5">
                <div
                  className="w-full max-w-[574px]"
                  style={{
                    padding: "0.82px",
                    borderRadius: "54px",
                    border: "1px solid #F8F5E5",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div className="relative h-[38px] w-full overflow-hidden rounded-[54px] md:h-[42px]">
                    <div
                      style={{
                        width: "90%",
                        height: "100%",
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                        background:
                          "linear-gradient(90deg, #EB8500 0%, #FFB554 100%)",
                        boxShadow: "0px 0px 32.8px 0px #F09013",
                      }}
                    />

                    <p className="absolute inset-0 hidden items-center justify-start whitespace-nowrap px-5 text-left text-sm font-bold text-[#000000] md:flex">
                      Quase lá! Siga os próximos passos para finalizar a sua
                      inscrição.
                    </p>

                    <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-[11px] font-bold leading-tight text-[#000000] md:hidden">
                      Quase lá! Siga os próximos passos
                      <br />
                      para finalizar a sua inscrição
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="mx-auto w-full max-w-[689px]"
                style={{
                  paddingTop: "24px",
                  paddingRight: "clamp(16px, 6vw, 72px)",
                  paddingBottom: "28px",
                  paddingLeft: "clamp(16px, 6vw, 72px)",
                  background: "#E0D0A6",
                }}
              >
                <div
                  className="mx-auto mb-4 w-full max-w-[545px]"
                  style={{
                    background: "#B7A36D",
                    padding: "14px 16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: '"Mulish", sans-serif',
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "140%",
                      color: "#003036",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontWeight: 700 }}>PASSO 1 -</span> Clique no
                    botão abaixo e entre agora mesmo para o grupo de WhatsApp
                    oficial da{" "}
                    <span style={{ fontWeight: 700 }}>
                      A VIRADA FINANCEIRA
                    </span>
                    . Lá você receberá todos os avisos e novidades importantes
                    em primeira mão.
                  </p>
                </div>

                <Button
                  className="mx-auto flex items-center justify-center hover:opacity-90"
                  style={{
                    width: "100%",
                    maxWidth: "413px",
                    minHeight: "56px",
                    padding: "16px 24px",
                    borderRadius: "8px",
                    background:
                      "radial-gradient(59.67% 258.78% at 50% 50%, #2DF289 0%, #00873F 100%)",
                    fontFamily: '"Mulish", sans-serif',
                    fontWeight: 800,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    color: "#000000",
                  }}
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  ENTRAR NO GRUPO DO WHATSAPP
                </Button>

                <div className="mt-4 text-center">
                  <p
                    style={{
                      fontFamily: '"Spectral", serif',
                      fontWeight: 400,
                      fontSize: "20px",
                      color: "#003036",
                    }}
                  >
                    Agora é só aguardar os nossos próximos recados.
                  </p>

                  <p
                    style={{
                      fontFamily: '"Spectral", serif',
                      fontWeight: 700,
                      fontStyle: "italic",
                      fontSize: "20px",
                      color: "#00535D",
                    }}
                  >
                    Nos vemos no dia 06 de julho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mb-4 mt-4 flex w-full flex-col items-center justify-center gap-3">
          <Image
            src="/images/ora/v3/logo-rodape.png"
            alt="Logo rodapé"
            width={130}
            height={60}
          />

          <p className="text-center text-xs !text-[#FFFFFF] md:text-sm">
            © 2026 Aliança Divergente — Todos os Direitos Reservados
          </p>
        </footer>
      </section>
    </div>
  );
}