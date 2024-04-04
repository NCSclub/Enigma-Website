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
    <section className="h-screen w-screen text-white ">
      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <div className="h-24 w-96 bg-title-shadow bg-cover flex justify-center items-center">
          <h1 className="font-text text-4xl">Our event Agenda</h1>
        </div>
        <div className="flex gap-5 mx-10">
          <Button onClick={() => handleButtonClick(1)}>DAY1</Button>
          <Button onClick={() => handleButtonClick(2)}>DAY2</Button>
        </div>
        <div className="h-fit w-fit p-5 bg-[#15153F] rounded-lg flex justify-center items-center gap-3">
          {agenda[index].time.map((time, i) => (
            <AgendaItem
              key={i}
              time={time}
              title={agenda[index].title[i]}
              className={`${translate ? "-translate-y-2 duration-700" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
