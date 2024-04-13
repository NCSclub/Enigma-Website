import { useEffect, useState } from "react";

const CountdownTimer = ({ setDisabled }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-17") - +new Date();
    if (difference > 0) {
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setDisabled(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, setDisabled]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const { days, hours, minutes, seconds } = timeLeft;
  const displayTime = `${days != 0 ? formatTime(days) + ":" : ""}${formatTime(
    hours
  )}:${formatTime(minutes)}:${formatTime(seconds)}`;

  return (
    <div className="text-[60px]  text-center text-white font-bold lg:text-[90px]">
      {displayTime}
    </div>
  );
};

export default CountdownTimer;
