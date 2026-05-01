"use client";

import { useParams } from "next/navigation";
import Formv1 from "@/app/ora/[version]/v1";
import Formv2 from "@/app/ora/[version]/v2";
import SplashScreenOro from "@/app/components/SplashScreen/SplashScreenOro";
import Formv3 from "@/app/ora/[version]/v3";

export default function Home() {
  const { version, slug } = useParams();

  console.log('slug =>', slug);

  if (version === "v2") {
    return <Formv2 />;
  }

  if (version === "v3") {
    return <Formv3 />;
  }

  return (
    <SplashScreenOro>
      <Formv1 />
    </SplashScreenOro>
  );
}
