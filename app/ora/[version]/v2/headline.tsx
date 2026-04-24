import type { ReactNode } from "react";

interface IHeadline {
  id: number | string;
  isPicture: boolean;
  isLogo: boolean;
  title: ReactNode;
  text: ReactNode;
}

const subheadline = (
  <>
    Nesse encontro ao vivo com os mentores da Aliança Divergente, você vai
    <br />
    finalmente enxergar o ponto cego específico que está travando o seu
    <br />
    relacionamento, e que é diferente de tudo que você já trabalhou antes.
    <br />
    <br />
    <span className="font-bold text-[#104448]">
      Porque quando o problema persiste depois do método, não é falta de
      <br />
      esforço. É algo que você não consegue ver sozinha. E esse encontro
      <br />
      existe pra isso.
    </span>
  </>
);

export const Headline: IHeadline[] = [
  {
    id: "h0",
    isPicture: false,
    isLogo: true,

    title: (
      <span className="font-bold">
        Você já tentou. Rodou protocolo, fez conversa
        <br />
        difícil, conhece o método. Então por que o seu
        <br />
        relacionamento não melhora?
      </span>
    ),

    text: subheadline,
  },

  {
    id: "h1",
    isPicture: false,
    isLogo: true,

    title: (
      <span className="font-bold">
        Descubra o que falta para viver o relacionamento que você sempre sonhou,
        <br />
        ainda em 2026.
        <br />
      </span>
    ),

    text: subheadline,
  },

  {
    id: "h2",
    isPicture: false,
    isLogo: true,

    title: (
      <span className="font-bold">
        Descubra por que você ainda não tem o amor
        <br />
        que sempre sonhou mesmo depois de
        <br />
        tudo que já tentou.
      </span>
    ),

    text: subheadline,
  },

  {
    id: "h3",
    isPicture: false,
    isLogo: true,

    title: (
      <span className="font-bold">
        Descubra como atrair e manter o relacionamento dos seus sonhos sem se perder de você mesma.
        <br />
      </span>
    ),

    text: subheadline,
  },

  {
    id: "h4",
    isPicture: false,
    isLogo: true,

    title: (
      <span className="font-bold">
        Descubra como ter um amor que te sustenta
        <br />
        sem que você precise carregar ele.
        <br />
      </span>
    ),

    text: subheadline,
  },

  {
    id: "h5",
    isPicture: false,
    isLogo: true,

    title: (
      <span className="font-bold">
        Descubra o que faz um relacionamento durar
        <br />
        que os casais felizes nunca falam em público.
        <br />
      </span>
    ),

    text: subheadline,
  },
];