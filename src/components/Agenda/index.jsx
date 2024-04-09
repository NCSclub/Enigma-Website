"use client";

import { useState, useEffect } from "react";

import AgendaItem from "./AgendaItem/index.jsx";
import { DayOneAgenda, DayTwoAgenda } from "./agendaObj.js";
import Button from "./AgendaButton/index.jsx";



const Agenda = () => {
  const [index, setIndex] = useState(0);
  const [agenda, setAgenda] = useState(DayOneAgenda);
  const [translate, setTranslate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % agenda.length);
      setTranslate((prevTranslate) => !prevTranslate);
    }, 3000);

    return () => clearInterval(interval);
  }, [agenda]);

  const handleButtonClick = (day) => {
    setAgenda(day === 1 ? DayOneAgenda : DayTwoAgenda);
    setIndex(0);
    setTranslate(false);
  };

  return (
    <section id="agenda" className="h-fit w-screen text-white px-10">
      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <div className="h-fit w-full py-20 bg-title-shadow bg-contain bg-center bg-no-repeat flex justify-center items-center">
          <h1 className="font-text font-semibold text-center text-5xl max-lg:text-4xl">Enigma Agenda</h1>
        </div>
        <div className="flex gap-5">
          <Button onClick={() => handleButtonClick(1)}>DAY1</Button>
          <Button onClick={() => handleButtonClick(2)}>DAY2</Button>
        </div>
        <div className="h-fit w-fit px-16 py-10 bg-[#15153F] rounded-lg flex justify-center max-md:flex-wrap items-center gap-5">
          {agenda[index].time.map((time, i) => (
            <AgendaItem
              key={i}
              time={time}
              title={agenda[index].title[i]}
              translate={translate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
