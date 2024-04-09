"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";

import { motion } from "framer-motion";

import CountdownTimer from "./CountDown";

const Hero = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  return (
    <section id="hero" className="overflow-hidden">
      <div className="flex flex-col justify-center mt-10 lg:leading-[90px]">
        <p className="flex flex-row space-x-6 mb-4 justify-center text-white leading-non text-center font-bold">
          <span className="text-7xl lg:text-7xl font-title">A</span>
          <span className="text-[#0485B9] bg-blueborder bg-center text-center bg-no-repeat bg-contain lg:px-6 flex justify-center items-center">
            <span className="text-6xl p-2 lg:text-5xl flex items-center justify-center font-title lg:p-2">
              CREATIVE
            </span>
          </span>
        </p>
        <p className="text-white justify-center lg:mt-10 leading-[75px] text-5xl lg:text-[70px] leading-non  text-center font-bold font-title">
          THAT DRIVES ENGAGEMENT
        </p>
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-3 lg:gap-4 lg:mt-[40px]">
        <div className={isButtonDisabled ? " hidden" : "block"}>
          <CountdownTimer setDisabled={setButtonDisabled} />
        </div>
        <div className={!isButtonDisabled ? " hidden" : "block"}>
          <h1 className="text-[65px] text-center text-white font-bold  lg:text-[100px] ">
            00:00:00
          </h1>
        </div>
        <div className="hidden bg-white w-[5px] h-[130px] lg:block text-center items-center rounded"></div>
        <div className="flex text-xl justify-center items-center gap-8 text-white hover:text-[#0485B9]  lg:text-xl font-medium">
          <Link
            className="flex justify-center items-center gap-6 "
            target="_blank"
            href="https://maps.app.goo.gl/9Aeizen7VEjrkLD6A"
          >
            <GrMapLocation className="text-[40px] lg:text-[60px] cursor-pointer   " />

            <p className="max-w-[300px] lg:max-w-[300px] font-link font-bold">
              CYBERPARC OF SIDI ABDELLAH AlGER-RAHMANIA
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-5 justify-center items-center mt-8">
        <div className="flex p-8 lg:p-0 lg:mr-16 justify-center mt-12 lg:mt-0 flex-row lg:space-y-16 pr-28">
          <div className="flex  justify-start w-1/2 lg:w-auto lg:mr-6 flex-col-reverse space-x-6">
            <div className="flex  justify-end pr-2 lg:pr-0 relative bottom-4">
              <Image
                width={100}
                height={200}
                src="/images/hero/arrow.png"
                alt=""
              />
            </div>
            <h1 className="font-bold text-lg font-subtext lg:text-xl text-white w-[240px] lg:w-[270px] mt-6 relative bottom-6 text-center pl-10">
              REGISTER FOR COMPANY SHOWCASE
            </h1>
          </div>
          <div className="flex justify-end items-end lg:justify-start">
            <Link target="_blank" href="https://meet.google.com/">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex space-x-2 items-center bg-[#0598CE] p-4 rounded-xl text-3xl font-medium text-white 
         ${
           isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
         } hover:bg-blue-500`}
                disabled={isButtonDisabled}
              >
                <span>Register</span> <FaArrowRight />
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-5">
          <div className="flex   justify-end items-end w-5/6 relative left-20 lg:left-6 lg:w-auto flex-row-reverse space-x-12 mr-6">
            <h1 className="font-bold font-subtext text-center text-lg lg:text-xl text-[#0598CE] pl-6 lg:w-[250px] relative right-10  top-2  ">
              REGISTER FOR IDEATHON
            </h1>
            <Image
              width={100}
              height={200}
              src="/images/hero/arrow1.png"
              alt=""
            />
          </div>
          <div className="flex justify-start items-start pr-28 lg:pr-0 lg:justify-start">
            <Link target="_blank" href="https://meet.google.com/">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`  flex relative right-6 space-x-2 w-fit items-center bg-white p-4 rounded-xl text-3xl font-[600] text-[#0598CE] ${
                  isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                } hover:bg-blue-200`}
                disabled={isButtonDisabled}
              >
                <span>Register</span>
                <div>
                  <FaArrowRight />
                </div>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
