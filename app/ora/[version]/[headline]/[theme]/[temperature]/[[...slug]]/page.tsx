"use client";

import { useParams } from "next/navigation";
import Formv1 from "@/app/ora/[version]/v1";
import Formv2 from "@/app/ora/[version]/v2";
import SplashScreenOro from "@/app/components/SplashScreen/SplashScreenOro";
import Formv3 from "@/app/ora/[version]/v3";
import Formv4 from "@/app/ora/[version]/v4";
import Formv5 from "@/app/ora/[version]/v5";


export default function Home() {
  const { version, slug } = useParams();

  console.log('slug =>', slug);

  if (version === "v2") {
    return <Formv2 />;
  }

  if (version === "v3") {
    return <Formv3 />;
  }

  if (version === "v4") {
    return <Formv4 />;
  }

  if (version === "v5") {
    return <Formv5 />;
  }

  return (
    <SplashScreenOro>
      <Formv1 />
    </SplashScreenOro>
  );
}
