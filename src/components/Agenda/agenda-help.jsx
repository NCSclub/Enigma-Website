'use client'
import { useState, useEffect } from 'react';
import styles from '../../styles/agenda.module.css';

const day1 = [
  { time: '17:00 - 18:00', activity: 'Check-IN' },
  { time: '17:30 - 18:00', activity: 'Ice breaking' },
  { time: '18:00 - 18:30', activity: 'Opening Ceremony' },
  { time: '19:00 - 20:00', activity: 'Hackathon start' },
  { time: '20:00 - 21:00', activity: 'Dinner' },
  { time: '23:00 - 00:00', activity: 'Mentoring session 1' },
  { time: '01:00 - 02:00', activity: 'Fun Activity' },
  { time: '03:00 - 03:30', activity: 'Coffee/Tea Break' }
];
const day2 = [
  { time: '08:00 - 09:00', activity: 'Breakfast' },
  { time: '10:00 - 11:00', activity: 'Mentoring session 3' },
  { time: '12:00 - 13:00', activity: 'Lunch break and activities' },
  { time: '13:00 - 14:00', activity: 'Lunch break and activities' },
  { time: '14:00 - 15:00', activity: 'Lunch break and activities' },
  { time: '15:00 - 16:00', activity: 'Lunch break and activities' },
  { time: '16:00 - 17:00', activity: 'Lunch break and activities' },
  { time: '17:00 - 18:00', activity: 'Lunch break and activities' },
  { time: '18:00 - 19:00', activity: 'Lunch break and activities' },
  { time: '19:00 - 20:00', activity: 'Lunch break and activities' },
  { time: '20:00 - 21:00', activity: 'Lunch break and activities' }
];
const day3 = [
  { time: '08:00 - 09:00', activity: 'Breakfast' },
  { time: '10:00 - 11:00', activity: 'Mentoring session 3' },
  { time: '12:00 - 13:00', activity: 'Lunch break and activities' },
  { time: '13:00 - 14:00', activity: 'Lunch break and activities' },
  { time: '14:00 - 15:00', activity: 'Lunch break and activities' },
  { time: '15:00 - 16:00', activity: 'Lunch break and activities' },
  { time: '16:00 - 17:00', activity: 'Lunch break and activities' },
  { time: '17:00 - 18:00', activity: 'Lunch break and activities' },
  { time: '18:00 - 19:00', activity: 'Lunch break and activities' },
  { time: '19:00 - 20:00', activity: 'Lunch break and activities' },
  { time: '20:00 - 21:00', activity: 'Lunch break and activities' }
];
const days = [day1, day2, day3]

const Agenda_v1 = () => {
  const [clickedDay, setClickedDay] = useState(0);
  const [displayedItems, setDisplayedItems] = useState(day1);
  const [activeIndexMD, setActiveIndexMD] = useState(0); //for desktop >md
  const [activeIndexSM, setActiveIndexSM] = useState(0); //for mobile <md

  const handleClick = (index) => {
    if (clickedDay !== index) {
      setClickedDay(index);
      setDisplayedItems(days[index])
      setActiveIndexMD(0);
      setActiveIndexSM(0);
    }
  };

  function splitIntoSubarrays(arr, size) {
    return arr.reduce((result, value, index) => {
      if (index % size === 0) {
        result.push(arr.slice(index, index + size));
      }
      return result;
    }, []);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndexMD((prev) => ((prev == (displayedItems.length-3)) ? 0 : prev+1));
      setActiveIndexSM((prev) => ((prev == (splitIntoSubarrays(displayedItems, 3).length-1)) ? 0 : prev+1))
    }, 3000);
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [clickedDay]);

  return (
    <section className="w-full overflow-hidden py-14 md:pt-14 md:pb-20 px-4 sm:px-8 flex flex-col gap-10 md:gap-24 items-center font-sans">
      <h3 className={`font-bold text-3xl md:text-6xl text-white text-center ${styles.title} drop-shadow-md`}>Our event Agenda</h3>
      <div className='w-full max-w-7xl flex items-center justify-center'>
        <div className="flex flex-col gap-4 md:gap-8 w-full items">
          <div className={`w-full flex items-center justify-center ${styles.title} gap-4 md:gap-12`}>
            {
              ['Day1', 'Day2', 'Day3'].map((day, index) => (
                <div
                  className={`w-full sm:w-1/3 px-2 py-4 md:py-10 md:px-8 bg-[#15153F] font-bold md:text-4xl sm:text-3xl text-lg rounded-xl text-white cursor-pointer text-center ${(clickedDay === index) ? 'bg-purple' : ''}`}
                  key={index}
                  style={{
                    boxShadow: (clickedDay === index) && '0 0 129px 2px #C200DB',
                  }}
                  onClick={() => handleClick(index)}
                >
                  {day}
                </div>
              ))
            }
          </div>
          <div className="bg-[#15153F] gap-y-16 overflow-x-hidden py-10 text-xl flex items-center scrollbar-hide justify-start rounded-xl bg-[url('/images/Agenda/Shape.svg')] bg-center bg-repeat-x bg-cover">
            <div className='hidden md:contents'>
              {/* for the >md */}
              {splitIntoSubarrays(displayedItems, 3).map((dayItems, index) => (
                <div
                  key={index}
                  className='min-w-full max-w-full flex flex-col md:flex-row items-center gap-y-16'
                >
                  {
                    dayItems.map((day, idx) => (
                      <div
                        key={idx}
                        className='max-w-[33.333%] min-w-[33.333%] transition-all flex items-center justify-center'
                        style={{
                          transform: `translateX(-${activeIndexMD*(100)}%)`,
                          transition: 'transform 2s ease'
                        }}
                      >
                        <div
                          className={`${([(index*3)+idx, (index*3)+idx+1].includes(activeIndexMD)) ? styles.fadeout : ''} flex rounded-full transition-all flex-col items-center justify-center aspect-square h-44 w-44 sm:h-52 sm:w-52 md:h-44 md:w-44 lg:w-52 lg:h-52 ${styles.rotate}`}
                        >
                          <div className="text-center aspect-square p-4 flex items-center justify-center flex-col gap-1">
                            <p className="font-sans text-[#FFFAF3]">{day.time}</p>
                            <p className="font-bold text-[#0EC9E3] px-5">{day.activity}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))}
            </div>
            <div className='md:hidden contents'>
              {/* for the <md */}
              {splitIntoSubarrays(displayedItems, 3).map((dayItems, index) => (
                <div
                  key={index}
                  className={`min-w-full max-w-full flex flex-col md:flex-row items-center gap-y-16 ${([index, index+1].includes(activeIndexSM)) ? styles.fadeout : ''}`}
                  style={{
                    transition: 'transform 2s ease',
                    transform: `translateX(-${activeIndexSM*(100)}%)`
                  }}
                >
                  <div className='contents'>
                    {
                      dayItems.map((day, idx) => (
                        <div
                          key={idx}
                          className='w-full transition-all flex items-center justify-center'
                        >
                          <div
                            className={`flex rounded-full transition-all flex-col items-center justify-center aspect-square h-44 w-44 sm:h-52 sm:w-52 md:h-44 md:w-44 lg:w-52 lg:h-52 ${styles.rotate}`}
                          >
                            <div className="text-center aspect-square p-4 flex items-center justify-center flex-col gap-1">
                              <p className="font-sans text-[#FFFAF3]">{day.time}</p>
                              <p className="font-bold text-[#0EC9E3] px-5">{day.activity}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Agenda_v1