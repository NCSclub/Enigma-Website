import Card from './card.jsx';

const AboutTheClubSection = () => {
  const ncs = '/images/AboutTheClubs/NCS.png';
  const pic1 = '/images/AboutTheClubs/pic1.png';
  const marconics = '/images/AboutTheClubs/marconics.png';
  const pic2 = '/images/AboutTheClubs/pic2.png';
    return (
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='h-20 w-96 bg-contain bg-no-repeat flex justify-center items-center bg-b-title text-white text-center'>
          <h1 className='text-3xl font-text md:text-4xl'>Contributors</h1>
          </div>
        <div className='hidden md:grid grid-cols-2 gap-16 place-items-center'>
          <Card logo={ncs} desc="The NCS club aims to create an inclusive platform for tech enthusiasts to improve their skills and knowledge in computer science. They offer workshops, collaborative projects, and discussions to foster growth for both beginners and experts." image={pic1} widthLogo={45} widthImage={350}/>
          <Card logo={marconics} desc="Marconics Club, founded in April 2023, is a non-profit organization preparing students for careers through company visits and events on entrepreneurship, marketing, and supply chain management." image={pic2} widthLogo={60} widthImage={350}/>
        </div>
        <div className='grid grid-cols-1 gap-y-44 md:hidden'>
          <Card logo={ncs} desc="The NCS club aims to create an inclusive platform for tech enthusiasts to improve their skills and knowledge in computer science. They offer workshops, collaborative projects, and discussions to foster growth for both beginners and experts." image={pic1} widthLogo={40} widthImage={270}/>
          <Card logo={marconics} desc="Marconics Club, founded in April 2023, is a non-profit organization preparing students for careers through company visits and events on entrepreneurship, marketing, and supply chain management." image={pic2} widthLogo={60} widthImage={270}/>
        </div>
      </div>
     
    );
  }

  export default AboutTheClubSection