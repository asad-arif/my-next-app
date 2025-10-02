"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "@/components/configurators/chair/Experience";
import Configurator from "@/components/configurators/chair/Configurator";
import "./chair-configurator.css";

export default function ChairConfigurator() {
  return (
    <div className="chair-configurator">
      <Canvas dpr={[1, 2]}>
        <color attach="background" args={["#213547"]} />
        <fog attach="fog" args={["#213547", 10, 20]} />
        <Experience />
      </Canvas>
      <Configurator />
    </div>
  );
}
