import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Agenda from "@/components/Agenda";
import Sponsors from "@/components/Sponsors";
import WhyWaitSection from "@/components/WhyWaitSection";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Enigma",
  description:
    "Enigma is a Startup Extchange hosted in NIT by NCS & Marconics Club",
};


const Home = () => {
  return (
    <div className="overflow-hidden relative">
      <Header /> 
      <Hero/>
      <Agenda/>
      <Sponsors/>
      <WhyWaitSection/>
      <Footer />
    </div>
  );
}

export default Home