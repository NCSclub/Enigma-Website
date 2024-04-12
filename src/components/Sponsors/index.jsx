import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  const logosData = [
    { link: "", path: "/images/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/images/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/images/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/images/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/images/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/images/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/images/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/images/sponsors/logo1.png", name: "Enigma" },

    // Add more links and paths as needed
  ];

  return (
    <section id="sponsors" className="flex flex-col items-center space-y-6 overflow-hidden">
      <div className="h-fit w-full py-10 bg-title-shadow bg-contain bg-center bg-no-repeat flex justify-center items-center">
        <h1 className="font-text font-semibold text-center text-5xl max-lg:text-4xl text-white">
          Sponsors
        </h1>
      </div>
      <h1 className=" text-center text-2xl  font-semibold   md:text-3xl text-[#AFAFAF]">
        Heartfelt thanks to our{" "}
        <span className="text-white  font-bold">Sponsors</span>{" "}
      </h1>
      <div className=" space-y-12  space-x-reverse overflow-hidden w-fit 	">
        <div className="">
          <Marquee speed={60} pauseOnHover direction>
            <ul className="flex space-x-9 overflow-hidden   ">
              {logosData.map((logo, index) => (
                <li
                  key={index}
                  className="bg-[#0B0D2F] overflow-hidden ml-6   bg-gradient-to-r from-[#0B0D2F] to-[#151851] shadow-2xl bg-opacity-40 rounded-3xl p-12 flex justify-center items-center"
                >
                  <Link
                    target="_blank"
                    href={logo.link}
                    className="overflow-hidden "
                  >
                    <Image
                      key={index}
                      width={150}
                      height={100}
                      src={logo.path}
                      alt={logo.name}
                      className="overflow-hidden "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Marquee>
        </div>
        <div>
          <Marquee speed={60} pauseOnHover>
            <ul className="flex space-x-9  overflow-hidden ">
              {logosData.map((logo, index) => (
                <li
                  key={index}
                  className="bg-[#0B0D2F] overflow-hidden ml-6  bg-gradient-to-r from-[#0B0D2F] to-[#151851] shadow-2xl bg-opacity-40 rounded-3xl p-12 flex justify-center items-center"
                >
                  <Link
                    target="_blank"
                    href={logo.link}
                    className=" overflow-hidden  "
                  >
                    <Image
                      key={index}
                      width={150}
                      height={100}
                      src={logo.path}
                      alt={logo.name}
                      className="overflow-hidden "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
