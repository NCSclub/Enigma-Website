import Image from "next/image";

const AboutTheEventSection = () => {
  return (
    <section id="aboutTheEvent" className="text-white">
      <div className="bg-title-shadow mb-12 p-6 bg-center w-full bg-no-repeat h-full py-12 text-white text-center">
        <h1 className="text-4xl font-text md:text-5xl font-semibold">
          About Enigma{" "}
        </h1>
      </div>
      <div className="flex justify-center px-5">
        <div className="hidden md:flex ">
          <Image alt="" src="/images/aboutEvent/1.png" width={500} height={500} />
        </div>
        <div className="flex flex-col justify-center  items-center gap-5 md:w-1/2 ">
          <div className="flex justify-start items-start">
            <h1 className="text-5xl font-text font-bold mb-8 text-center lg:text-left ">
              Company showcase{" "}
            </h1>
          </div>
          <p className="text-2xl text-center font-text lg:w-1/2 md:w-fit lg:text-left text-[#AFAFAF]">
            Explore a variety of opportunities, chat directly with company
            representatives, and gain valuable insights into your field of
            interest.{" "}
          </p>
        </div>
      </div>
      <div className=" md:hidden flex mt-12 justify-center items-center px-5">
        <Image alt="" src="/images/aboutEvent/phone.png" width={500} height={500} />
      </div>

      <div className="flex flex-row-reverse justify-center mt-12 lg:mt-6 px-5">
        <div className="hidden md:flex">
          <Image alt="" src="/images/aboutEvent/2.png" width={500} height={500} />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 md:w-1/2 ">
          <div className="flex justify-start items-start">
            <h1 className="text-5xl font-text font-bold mb-8 ">IDEATHON</h1>
          </div>
          <p className="text-2xl lg:w-1/2 md:w-fit text-[#AFAFAF] font-text text-center lg:text-left">
            {" "}
            The Enigma Ideathon is your chance to tackle real-world problems
            faced by businesses. Companies will unveil their toughest
            challenges, and you`ll team up to brainstorm and develop innovative
            solutions.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTheEventSection;
