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
    id: "h1",
    isPicture: false,
    isLogo: true,

    title: (
      <>
        Como ter dinheiro sobrando na conta  e a certeza de um futuro melhor.
      </>
    ),

    text: (
      <>
        Você já foi aliado. Já conhece o método.
        Mas o dinheiro ainda não está sobrando.
      </>
    ),
  },
];