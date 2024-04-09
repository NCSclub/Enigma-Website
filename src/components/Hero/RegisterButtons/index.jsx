import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Register() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row max-w-[200px] justify-center mt-8 gap-4 items-center mx-auto lg:gap-12 ">
        <button className="bg-white py-4 px-8 text-2xl font-bold rounded-xl text-[#0485B9] flex justify-center items-center gap-2  ">
          Register
          <FaArrowRight className="text-[#0485B9] rounded-full w-[30px] h-[30px] p-[4px]" />
        </button>

        <button className="bg-[#0485B9] py-4 px-8 text-2xl  font-semibold rounded-xl text-white flex justify-center items-center gap-2">
          Register
          <FaArrowRight className="text-white rounded-full w-[30px] h-[30px] p-[4px]" />
        </button>
      </div>
    </div>
  );
}

export default Register;
