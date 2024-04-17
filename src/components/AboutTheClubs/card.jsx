import Image from "next/image";

const Card = ({ logo, desc, image, widthLogo, widthImage }) => {
  return (
    <div className="">
      <div className="h-96 w-80 bg-[#15151D]/60 text-[#AFAFAF] mt-9 border-t-4 rounded-t-2xl border-[#4BD2E4] rounded-b-2xl md:h-80 md:w-96">
        <div className="h-24 flex justify-center items-center pb-4">
          <Image
            className=""
            src={logo}
            width={widthLogo}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div>
          <p className="text-center font-light leading-relaxed text-lg px-3 font-text">
            {desc}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          className="z-20 relative bottom-16 md:bottom-10 rounded-lg"
          src={image}
          width={widthImage}
          height={150}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Card;
