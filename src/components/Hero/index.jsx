import CountdownTimer from "./CountDown";
import { GrMapLocation } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col justify-center mt-10 lg:leading-[90px]">
        <p className=" flex flex-row space-x-6 mb-4 justify-center text-white leading-non  text-center font-bold">
          <span className="text-7xl lg:text-9xl">A</span>
          <span className="text-[#0485B9] bg-blueborder bg-center text-center bg-no-repeat bg-contain   lg:px-6">
            <span className=" text-6xl p-2 lg:text-8xl flex items-center justify-center  lg:p-2 ">CREATIVE{" "}</span>
          </span>
        </p>
        <p className="text-white justify-center lg:mt-10 leading-[75px] text-5xl lg:text-[70px] leading-non max-w-[ ] text-center font-bold">
          THAT DRIVES ENGAGEMENT
        </p>
      </div>
      <div className="flex  flex-col lg:flex-row-reverse justify-center items-center gap-3 lg:gap-8 lg:mt-[40px]  ">
        <CountdownTimer />

          <div className=" hidden bg-white w-[5px] h-[130px] lg:block   text-center items-center rounded" ></div>

        <div className="flex text-xl justify-center items-center  gap-8 text-white lg:text-3xl font-medium">
          <GrMapLocation className="text-[40px] lg:text-[60px]" />
          <p className="max-w-[300px]  lg:max-w-[450px]">
            CYBERPARC OF SIDI ABDELLAH AlGER-RAHMANIA
          </p>
        </div>
      </div>

<div>

<button></button>
<button></button>


</div>




    </div>
  );
};

export default Hero;