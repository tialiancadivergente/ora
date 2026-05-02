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
      <section
        className={`relative flex items-start justify-center flex-col overflow-hidden min-h-screen bg-[url('/images/ora/v3/bg-quiz-mobile.webp')] md:bg-[url('/images/ora/v3/bg-quiz.webp')] bg-cover bg-center`}
      >
        <div className="container mx-auto relative h-full px-4">
          <div className="flex flex-col items-center text-center pt-4 md:pt-8 pb-4">
            <div className="w-full max-w-4xl mx-auto">

              <div className="mb-2 md:mb-3 flex justify-center">
                <Image
                  src="/images/ora/v3/logo-quiz.png"
                  alt="Logotipo"
                  width={367}
                  height={179}
                  priority
                  className="object-contain w-[220px] md:w-[330px]"
                />
              </div>

              <h1
                className="text-white uppercase text-center mx-auto mb-3 md:mb-4"
                style={{
                  fontFamily: '"Spectral", serif',
                  fontWeight: 700,
                  lineHeight: "1.05",
                }}
              >
                <span className="block text-[24px] md:text-[50px]">
                  LIVE EXCLUSIVA COM
                </span>
                <span className="block text-[24px] md:text-[50px] mt-1">
                  ELTON EULER
                </span>
              </h1>

              <div className="flex justify-center mb-4 md:mb-5">
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
                      EVENTO ONLINE SEM REPLAY | 11 de maio às 20h
                    </span>

                    <span className="block md:hidden">
                      EVENTO ONLINE SEM REPLAY
                      <br />
                      11 de maio às 20h
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-center my-3 md:my-5">
                <div
                  className="w-full max-w-[574px]"
                  style={{
                    padding: "0.82px",
                    borderRadius: "54px",
                    border: "1px solid #F8F5E5",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div className="relative w-full h-[38px] md:h-[42px] rounded-[54px] overflow-hidden">
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

                    {/* TEXTO DESKTOP */}
                    <p className="hidden md:flex absolute inset-0 items-center justify-start px-5 text-sm font-bold text-left whitespace-nowrap text-[#000000]">
                      Quase lá! Siga os próximos passos para finalizar a sua inscrição.
                    </p>

                    {/* TEXTO MOBILE */}
                    <p className="flex md:hidden absolute inset-0 items-center justify-center px-4 text-[11px] font-bold text-center leading-tight text-[#000000]">
                      Quase lá! Siga os próximos passos
                      <br />
                      para finalizar a sua inscrição
                    </p>

                  </div>
                </div>
              </div>

              <div
                className="w-full max-w-[689px] mx-auto"
                style={{
                  paddingTop: "24px",
                  paddingRight: "clamp(16px, 6vw, 72px)",
                  paddingBottom: "28px",
                  paddingLeft: "clamp(16px, 6vw, 72px)",
                  background: "#E0D0A6",
                }}
              >

                <div
                  className="w-full max-w-[545px] mx-auto mb-4"
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
                    <span style={{ fontWeight: 700 }}>PASSO 1 -</span>{" "}
                    Clique no botão abaixo e entre agora mesmo para o grupo de WhatsApp oficial da{" "}
                    <span style={{ fontWeight: 700 }}>
                      LIVE EXCLUSIVA COM ELTON EULER
                    </span>.{" "}
                    Lá você receberá todos os avisos e novidades importantes em primeira mão.
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
                    Nos vemos no dia 11/05.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        <footer className="w-full flex items-center justify-center flex-col mb-4 mt-4 gap-3">
          <Image
            src="/images/ora/v3/logo-rodape.png"
            alt="Logo rodapé"
            width={130}
            height={60}
          />

          <p className="!text-[#FFFFFF] text-xs md:text-sm text-center">
            © 2026 Aliança Divergente — Todos os Direitos Reservados
          </p>
        </footer>
      </section>
    </div>
  );
}