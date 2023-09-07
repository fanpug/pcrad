"use client";

import React, { SetStateAction, useState } from "react";

import SquareButton from "@/components/SquareButton";

const Page = () => {
  const [floor, setFloor] = useState(0);
  const [classroom, setClassroom] = useState("0");

  const handleSetFloor = (floorText: SetStateAction<String>) => {
    let floorNum = floorText === "PB" ? 0 : Number(floorText);
    setFloor(floorNum);
    console.log(floor);
    
  };

  return (
    <main className="p-5 pl-24 pr-8 w-full">
      <div id="button-group">
        <div id="floor-buttons" className="flex gap-10">
          <SquareButton
            innerText="PB"
            lowerText="Planta Baja"
            handleOnClick={handleSetFloor}
          />
          <SquareButton
            innerText="1"
            lowerText="Primer piso"
            handleOnClick={handleSetFloor}
          />
          <SquareButton
            innerText="2"
            lowerText="Segundo piso"
            handleOnClick={handleSetFloor}
          />
          <SquareButton
            innerText="3"
            lowerText="Tercer piso"
            handleOnClick={handleSetFloor}
          />
        </div>
        <div id="classroom-buttons">

        </div>
      </div>
    </main>
  );
};


export default Page;
