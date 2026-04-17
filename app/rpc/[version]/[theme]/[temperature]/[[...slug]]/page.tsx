"use client";

import SplashScreen from "@/app/ora/[version]/v2/SplashScreen";
import RpcV2 from "../../../v2";

export default function Home() {

  return (
    <SplashScreen>
      <RpcV2 />
    </SplashScreen>
  );
}
