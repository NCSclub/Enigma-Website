"use client";

import { useState, useEffect } from "react";

import AgendaItem from "./AgendaItem/index.jsx";
import { DayOneAgenda, DayTwoAgenda } from './agendaObj.js'


const Agenda = () => {
  const [index, setIndex] = useState(0);
  const [agenda, setAgenda] = useState(DayOneAgenda);
  const [translate, setTranslate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % agenda.length);
      setTranslate(prevTranslate => !prevTranslate);
    }, 3000);

    return () => clearInterval(interval);
  }, [agenda]);

  const handleButtonClick = (day) => {
    setAgenda(day === 1 ? DayOneAgenda : DayTwoAgenda);
    setIndex(0);
    setTranslate(false); 
  };

  return (
    <section className="h-screen w-screen text-white">
      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <div className="h-24 w-96 bg-title-shadow bg-cover flex justify-center items-center">
          <h1 className="font-text text-4xl">Our event Agenda</h1>
        </div>
        <div className="flex gap-9">
          <button onClick={() => handleButtonClick(1)} className="bg-[#15153F] h-20 w-44 rounded-lg font-text text-2xl font-bold hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500 hover:-translate-y-2 hover:duration-700">DAY1</button>
          <button onClick={() => handleButtonClick(2)} className="bg-[#15153F] h-20 w-44 rounded-lg font-text text-2xl font-bold hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500 hover:-translate-y-2 hover:duration-700">DAY2</button>
        </div>
        <div className="h-1/3 w-2/4 p-5 bg-[#15153F] rounded-lg flex justify-center items-center gap-10">
          {agenda[index].time.map((time, i) => (
            <AgendaItem key={i} time={time} title={agenda[index].title[i]} className={`${translate ? '-translate-y-2 duration-700' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;

