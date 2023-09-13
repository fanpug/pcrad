"use client";

import React, { SetStateAction, useState } from "react";

import SquareButton from "@/components/SquareButton";
import SearchCaptura from "@/components/SearchCaptura";

import { salones } from "../../constants";

const Page = () => {
  const [floor, setFloor] = useState<number>(0);
  const [classroom, setClassroom] = useState<string>("");

  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const [teachers, setTeachers] = useState([]);

  const handleSetFloor = (floorText: SetStateAction<string>) => {
    let floorNum = floorText === "PB" ? 0 : Number(floorText);
    setFloor(floorNum);
  };

  const handleSetClassroom = (classText: SetStateAction<string>) => {
    setClassroom(classText);
    console.log(classroom);
  };


 
  // if (error) return <div className="text-9xl">failed to load</div>
  // if (isLoading) return <div className="text-9xl">loading...</div>
  // console.log(data);
  
 
  // // render data
  // return <div className="text-9xl">hello {data[0].name}!</div>

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
        <SearchCaptura />

      </div>
    </main>
  );
};


export default Page;
