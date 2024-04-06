"use client";

import Image from "next/image.js";
import navbar from "./navbarContent.js";
import Link from "next/link.js";

import { GrMenu } from "react-icons/gr";
import { useState } from "react";
import  MobileNavBar  from "./MobileNavBar/index.jsx";

const Header = () => {
  const [isClick, setisClick] = useState(false);



  const toggleNavBar = () => {
    setisClick(!isClick);
  };

  return (
    <nav className="w-screen px-5 py-7 h-[10vh]">
      <div className="flex justify-between items-center gap-8">
        <div>
          <Image
            className="object-cover top-7"
            src="/images/Header/EnigmaLogo.svg"
            alt=""
            width={150}
            height={150}
          />
        </div>
        <div className=" max-lg:hidden">
          <ul className="text-white font-text text-sm flex flex-row justify-center gap-10">
            {navbar.map((item) => (
              <button key={item.title}>
                <Link href={item.link}>
                  <span>{item.title}</span>
                </Link>
              </button>
            ))}
          </ul>
        </div>
        <div className=" lg:hidden">
          <button onClick={toggleNavBar}>
            <GrMenu className="text-white w-8 h-8" />
          </button>
        </div>
      </div>
      <MobileNavBar isClick={isClick} toggleNavBar={toggleNavBar}/>
    </nav>
  );
};

export default Header;

