"use client";

import React, { SetStateAction, useState } from "react";

import SquareButton from "@/components/SquareButton";

import { salones } from "../../constants";

const Page = () => {
  const [floor, setFloor] = useState(0);
  const [classroom, setClassroom] = useState("0");

  const handleSetFloor = (floorText: SetStateAction<string>) => {
    let floorNum = floorText === "PB" ? 0 : Number(floorText);
    setFloor(floorNum);
  };

  const handleSetClassroom = (classText: SetStateAction<string>) => {
    setClassroom(classText);
    console.log(classroom);
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
        <div id="classroom-buttons" className="flex gap-10 mt-6 flex-wrap">
          {
            floor === 0 ?
            (
              <SquareButton
                innerText="LP7"
                lowerText="La explanada"
                handleOnClick={handleSetClassroom}
              />
            
            )
            :
            salones[floor].map((salon, index) => (
              <li key={index} className="list-none">
                <SquareButton 
                  innerText={salon}
                  lowerText={`Salón ${salon}`}
                  handleOnClick={handleSetClassroom}
                />
              </li>
            ))
          }
        </div>
      </div>
      <div id="teacher-list" className="mt-8">
        <h2 className="text-4xl">
          Buscar docentes:
        </h2>


      </div>
    </main>
  );
};


export default Page;
