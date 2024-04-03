"use client";

import Image from "next/image.js";
import navbar from "./navbarContent.js";
import Link from "next/link.js";

import { GrMenu, GrClose } from "react-icons/gr";
import { useState } from "react";

const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavBar = () => {
    setisClick(!isClick);
  };

  return (
    <nav className="w-screen p-10 h-[10vh]">
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
            {isClick ? (
              <GrClose className="text-white w-8 h-8" />
            ) : (
              <GrMenu className="text-white w-8 h-8" />
            )}
          </button>
        </div>
      </div>
      {isClick && (
        <div className="z-10 absolute top-0 left-0 bg-black/95 w-[50vw] rounded-md p-6 flex flex-col gap-8 justify-start lg:hidden">
          <ul className="text-white font-bold font-text text-sm flex flex-col gap-10">
            {navbar.map((item) => (
              <button key={item.title} className="hover:bg-slate-400 h-12 hover:rounded-md">
                <Link href={item.link}>
                  <span>{item.title}</span>
                </Link>
              </button>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
