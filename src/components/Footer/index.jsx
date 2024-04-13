"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import TopArrow from "../../../public/images/Footer/topArrow.svg";
import NcsLogo from "../../../public/images/Footer/ncsLogo.svg";
import MacroLogo from "../../../public/images/Footer/macroLogo.svg";
import EnigmaLogo from "../../../public/images/Footer/EnigmaLogo.svg";

const ClubsSocialMedia = [
  {
    NcsLink: "https://www.linkedin.com/company/numidia-computer-society/",
    MarconicsLink: "https://www.linkedin.com/company/marconics-club/",
    icon: <FontAwesomeIcon className="w-7 h-7" icon={faLinkedin} />,
  },
  {
    NcsLink: "https://www.instagram.com/ncs._club/",
    MarconicsLink: "https://www.instagram.com/marconics_ehec/",
    icon: <FontAwesomeIcon className="w-7 h-7" icon={faInstagram} />,
  },
  {
    NcsLink: "/",
    MarconicsLink: "https://www.facebook.com/people/Marconics-club/",
    icon: <FontAwesomeIcon className="w-7 h-7" icon={faFacebook} />,
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="w-screen h-[30vh]">
      <div className="h-1/3 bg-[#009FD9] flex gap-20 max-lg:gap-3 justify-center items-center">
        <p className="font-text text-white max-lg:hidden">Connect With NCS</p>
        <ul className="flex gap-7 max-lg:gap-2 justify-center items-center">
          {ClubsSocialMedia.map((social, index) => (
            <li key={index}>
              <Link href={social.NcsLink}>{social.icon}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-7  max-lg:gap-2 justify-center items-center">
          <Image
            className="object-cover"
            src={NcsLogo}
            width={40}
            height={40}
            alt=""
          />
          <Image
            className="object-cover"
            src={MacroLogo}
            width={55}
            height={55}
            alt=""
          />
        </div>
        <ul className="flex gap-7 max-lg:gap-2 justify-center items-center">
          {ClubsSocialMedia.map((social, index) => (
            <li key={index}>
              <Link href={social.NcsLink}>{social.icon}</Link>
            </li>
          ))}
        </ul>
        <p className="font-text text-white max-lg:hidden">
          Connect With Marconics
        </p>
      </div>
      <div className="flex p-5 h-2/3 bg-black justify-between items-center">
        <div>
          <Image
            className="object-cover"
            src={EnigmaLogo}
            alt=""
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col gap-5 max-lg:gap-5 justify-center">
          <p className="font-subtext text-white max-lg:text-sm">
            Made with ❤️ by NCS
          </p>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-slate-400 hover:rounded-md p-2 max-lg:hidden relative right-5"
          >
            <a href="#navbar" className="flex gap-2">
              <span className="text-white font-text font-bold max-lg:text-sm">
                Back to the top
              </span>
              <Image alt="" src={TopArrow} />
            </a>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
