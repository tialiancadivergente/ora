import type { ReactNode } from "react";

interface IHeadline {
  id: number | string;
  isPicture: boolean;
  isLogo: boolean;
  title: ReactNode;
  text: ReactNode;
}

export const Headline: IHeadline[] = [
  {
    id: "h0",
    isPicture: false,
    isLogo: true,

    title: (
      <>
        COMO ROMPER SEU TETO
        <br />
        FINANCEIRO E ENTRAR EM
        <br />
        UMA NOVA FASE DA SUA VIDA
      </>
    ),

    text: (
      <>
        Segunda-feira, 23/03, às 20h &nbsp; • &nbsp; Ao vivo e sem replay
      </>
    ),
  },
];