import Image from "next/image";
import Link from "next/link";

import TopArrow from "../../../public/images/Footer/topArrow.svg";
import NcsLogo from "../../../public/images/Footer/ncsLogo.svg";
import MacroLogo from "../../../public/images/Footer/macroLogo.svg";
import EnigmaLogo from "../../../public/images/Footer/EnigmaLogo.svg";

const Footer = () => {
  return (
    <footer className="w-screen h-[22vh] bg-black">
      <div className="w-full h-full flex p-3 justify-between gap-7 items-center">
        <div>
          <Image
            src={EnigmaLogo}
            alt=""
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col gap-5 justify-end">
          <div className="flex gap-5 justify-center">
            <Image
              src={NcsLogo}
              width={50}
              height={50}
              alt=""
            />
            <Image
              src={MacroLogo}
              width={50}
              height={50}
              alt=""
            />
          </div>
          <div>
            <p className="font-subtext text-white text-center max-lg:text-sm max-sm:text-xs">Made with ❤️ by NCS</p>
          </div>
        </div>
        <div>
          <button className="hover:bg-slate-400 hover:rounded-md p-2">
            <Link href="/" className="flex gap-2">
              <span className="text-white font-text max-lg:text-sm max-sm:text-xs">
                Back to the top
              </span>
              <Image alt="" src={TopArrow} />
            </Link>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
