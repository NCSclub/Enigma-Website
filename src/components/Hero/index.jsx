import CountdownTimer from "./CountDown";
import { GrMapLocation } from "react-icons/gr";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center mt-10 leading-[90px]">
        <p className="text-white text-[90px] leading-non  text-center font-bold">
          A{" "}
          <span className="text-[#0485B9] bg-blueborder bg-center text-center bg-no-repeat px-6">
            CREATIVE{" "}
          </span>
        </p>
        <p className="text-white justify-center mt-10 leading-[75px] text-[70px] leading-non max-w-[ ] text-center font-bold">
          THAT DRIVES ENGAGEMENT
        </p>
      </div>
      <div className="flex  flex-col lg:flex-row-reverse justify-center items-center gap-3 lg:gap-8 lg:mt-[40px]  ">
        <CountdownTimer />
        
          <div className=" hidden bg-white w-[5px] h-[130px] lg:block   text-center items-center rounded" ></div>
       
        <div className="flex text-xl justify-center items-center  gap-8 text-white lg:text-3xl font-medium">
          <GrMapLocation className="text-[60px] " />
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
