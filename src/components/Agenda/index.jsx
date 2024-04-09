"use client";

import { useState, useEffect, useMemo, memo } from "react";
import AgendaItem from "./AgendaItem/index.jsx";
import { DayOneAgenda, DayTwoAgenda } from "./agendaObj.js";
import MemoizedButton from "./AgendaButton/index.jsx";

const MemoizedAgendaItem = memo(AgendaItem);

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

  // Memoize the agenda state to prevent unnecessary re-renders
  const memoizedAgenda = useMemo(() => agenda, [agenda]);

  return (
    <section id="agenda" className="h-fit w-screen text-white px-10">
      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <div className="h-fit w-full py-20 bg-title-shadow bg-contain bg-center bg-no-repeat flex justify-center items-center">
          <h1 className="font-text font-semibold text-center text-5xl max-lg:text-4xl">Enigma Agenda</h1>
        </div>
        <div className="flex gap-16 max-lg:gap-5">
          <MemoizedButton onClick={() => handleButtonClick(1)}>DAY1</MemoizedButton>
          <MemoizedButton onClick={() => handleButtonClick(2)}>DAY2</MemoizedButton>
        </div>
        <div className="h-fit w-fit px-7 py-10 bg-[#15153F] rounded-lg flex justify-center max-md:flex-wrap items-center gap-5">
          {memoizedAgenda[index].time.map((time, i) => (
            <MemoizedAgendaItem
              key={i}
              time={time}
              title={memoizedAgenda[index].title[i]}
              translate={translate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
