
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";


const Sponsors = () => {

  const logosData = [
    { link: "", path: "/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/sponsors/logo1.png", name: "Enigma" },
    { link: "", path: "/sponsors/logo1.png", name: "Enigma" },

    // Add more links and paths as needed
  ];


    return (
      <div className="flex flex-col items-center space-y-6">
       <div className="bg-[url('/sponsors/shadow.svg')] p-6 bg-center w-full bg-no-repeat h-full py-12"><h1 className="text-center  text-4xl md:text-6xl  font-semibold ">Sponsors</h1></div> 
        <h1 className=" text-center text-2xl    md:text-3xl text-[#AFAFAF]">Heartfelt thanks to our <span className="text-white font-bold">Sponsors</span> </h1>
<div className=" space-y-12  space-x-reverse overflow-hidden w-fit 	">
<div>
<Marquee speed={60} pauseOnHover  delay={6} >
  <ul className="flex space-x-9 overflow-hidden   ">
    {logosData.map((logo, index) => (
      <li key={index} className='bg-[#0B0D2F] overflow-hidden   bg-gradient-to-r from-[#0B0D2F] to-[#151851] shadow-2xl bg-opacity-40 rounded-3xl py-8 px-6 flex justify-center items-center'>
        <Link target="_blank" href={logo.link} className="overflow-hidden ">
          <Image key={index} width={150} height={100} src={logo.path} alt={logo.name} className='overflow-hidden ' />
        </Link>
      </li>
    ))}
  </ul>
</Marquee>

      </div>
      <div>
      <Marquee speed={60} pauseOnHover  >
  <ul className="flex space-x-9  overflow-hidden ">
    {logosData.map((logo, index) => (
      <li key={index} className='bg-[#0B0D2F] overflow-hidden  bg-gradient-to-r from-[#0B0D2F] to-[#151851] shadow-2xl bg-opacity-40 rounded-3xl py-8 px-6 flex justify-center items-center'>
        <Link target="_blank" href={logo.link} className=" overflow-hidden  ">
          <Image key={index} width={150} height={100} src={logo.path} alt={logo.name} className='overflow-hidden ' />
        </Link>
      </li>
    ))}
  </ul>
</Marquee>
      </div>
      </div>

      </div>
    );
  }
  
  export default Sponsors