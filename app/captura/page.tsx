"use client";

import React, { useState } from "react";

import SquareButton from "@/components/SquareButton";

const Page = () => {
  const [floor, setFloor] = useState(0);

  return (
    <main className="p-5 pl-24 pr-8 w-full">
      <div id="button-group">
        <div id="floor-buttons" className="flex gap-10">
          <SquareButton innerText="PB" lowerText="Planta Baja" />
          <SquareButton innerText="1" lowerText="Primer piso" />
          <SquareButton innerText="2" lowerText="Segundo piso" />
          <SquareButton innerText="3" lowerText="Tercer piso" />
        </div>
      </div>
    </main>
  );
};

export default Page;
