import Card from "./card.jsx";
import NCS from "../../../public/images/AboutTheClubs/NCS.png";
import marconics from "../../../public/images/AboutTheClubs/marconics.png";
import pic1 from "../../../public/images/AboutTheClubs/pic1.jpg";
import pic2 from "../../../public/images/AboutTheClubs/MacroPic.png";

const AboutTheClubSection = () => {
  return (
    <div id="aboutTheClubs" className="w-screen flex flex-col items-center justify-center h-fit">
      <div className="bg-title-shadow mb-12 p-6 bg-center w-full bg-no-repeat h-full py-12 text-white text-center">
        <h1 className="text-4xl font-text md:text-5xl font-semibold">Contributors</h1>
      </div>
      <div className="hidden md:grid grid-cols-2 gap-16 place-items-center">
        <Card
          logo={NCS}
          desc="The NCS club is a student organization at Numidia Institute of Technology (NIT), that provides an inclusive platform for tech enthusiasts to boost their computer science skills. Through workshops and projects, they foster community growth."
          image={pic1}
          widthLogo={45}
          widthImage={335}
        />
        <Card
          logo={marconics}
          desc="Marconics Club, founded in April 2023, is a non-profit organization based at the School of Commercial High Studies. It prepares students for careers through company visits and events on entrepreneurship, marketing, and supply chain management."
          image={pic2}
          widthLogo={60}
          widthImage={350}
        />
      </div>
      <div className="grid grid-cols-1 gap-y-30 md:hidden">
        <Card
          logo={NCS}
          desc="The NCS club aims to create an inclusive platform for tech enthusiasts to improve their skills and knowledge in computer science. They offer workshops, and collaborative projects, to foster growth."
          image={pic1}
          widthLogo={40}
          widthImage={270}
        />
        <Card
          logo={marconics}
          desc="Marconics Club, founded in April 2023, is a non-profit organization preparing students for careers through company visits and events on entrepreneurship, marketing, and supply chain management."
          image={pic2}
          widthLogo={60}
          widthImage={270}
        />
      </div>
    </div>
  );
};

export default AboutTheClubSection;
