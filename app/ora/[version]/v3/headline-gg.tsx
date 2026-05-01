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
        Uma live especial para te ajudar a identificar e reorganizar os padrões que impactam sua vida financeira.
      </>
    ),

    text: (
      <>
        Você já foi aliado. Já conhece o método.
        Mas ainda não conseguiu estabilizar a sua vida financeira como gostaria.
      </>
    ),
  },
];