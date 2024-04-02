import Image from "next/image";
import Link from "next/link";

import TopArrow from "../../../public/images/Footer/topArrow.svg";
import NcsLogo from "../../../public/images/Footer/ncsLogo.svg";
import MacroLogo from "../../../public/images/Footer/macroLogo.svg";
import EnigmaLogo from "../../../public/images/Footer/EnigmaLogo.svg";

const Footer = () => {
  return (
    <footer className="w-screen h-[20vh] bg-black">
      <div className="flex p-5 justify-between items-center">
        <div>
          <Image
            className="object-cover"
            src={EnigmaLogo}
            alt=""
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex gap-7 justify-center">
            <Image
              className="object-cover"
              src={NcsLogo}
              width={50}
              height={50}
              alt=""
            />
            <Image
              className="object-cover"
              src={MacroLogo}
              width={50}
              height={50}
              alt=""
            />
          </div>
          <div>
            <p className="font-subtext text-white max-lg:text-sm">Made with ❤️ by NCS</p>
          </div>
        </div>
        <div>
          <button className="hover:bg-slate-400 hover:rounded-md p-2">
            <Link href="/" className="flex gap-2">
              <span className="text-white font-text font-bold max-lg:text-sm">
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
