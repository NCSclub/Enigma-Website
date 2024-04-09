import Card from './card.jsx';

import Ncs from '../../../public/images/AboutTheClubs/NCS.png';
import Pic1 from '../../../public/images/AboutTheClubs/pic1.png';
import Marconics from '../../../public/images/AboutTheClubs/marconics.png';
import Pic2 from '../../../public/images/AboutTheClubs/pic2.png';

const AboutTheClubSection = () => {
  return (
    <div className='w-screen h-[70vh] flex flex-col items-center justify-center'>
      <div className='h-20 w-96 bg-contain bg-no-repeat flex justify-center items-center bg-b-title text-white text-center'>
        <h1 className='text-3xl font-text md:text-4xl'>Contributors</h1>
      </div>
      <div className='hidden md:grid grid-cols-2 gap-16 place-items-center'>
        <Card logo={Ncs} desc="The NCS club aims to create an inclusive platform for tech enthusiasts to improve their skills and knowledge in computer science. They offer workshops, and collaborative projects, to foster growth." image={Pic1} widthLogo={45} widthImage={350}/>
        <Card logo={Marconics} desc="Marconics Club, founded in April 2023, is a non-profit organization preparing students for careers through company visits and events on entrepreneurship, marketing, and supply chain management." image={Pic2} widthLogo={60} widthImage={350}/>
      </div>
      <div className='grid grid-cols-1 gap-y-44 md:hidden'>
        <Card logo={Ncs} desc="The NCS club aims to create an inclusive platform for tech enthusiasts to improve their skills and knowledge in computer science. They offer workshops, and collaborative projects, to foster growth." image={Pic1} widthLogo={40} widthImage={270}/>
        <Card logo={Marconics} desc="Marconics Club, founded in April 2023, is a non-profit organization preparing students for careers through company visits and events on entrepreneurship, marketing, and supply chain management." image={Pic2} widthLogo={60} widthImage={270}/>
      </div>
    </div>
  );
}

export default AboutTheClubSection;
