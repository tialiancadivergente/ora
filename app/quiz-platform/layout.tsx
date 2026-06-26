import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A Virada Financeira",
  description:
    "Nesse encontro ao vivo com os mentores, você vai entender por que isso acontece e como a Aliança 2.0 foi criada para te ajudar nisso.",
};

export default function QuizLayout({ children }: { children: ReactNode }) {
  return (
    <div className={inter.className}>
      <main>{children}</main>
      <Analytics />
    </div>
  );
}