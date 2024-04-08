import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import WhyWaitSection from "@/components/WhyWaitSection";


const Home = () => {
  return (
    <div className="">
      <Header />
      <Hero/>
      <Sponsors/>
      <WhyWaitSection/>
      <Footer />
    </div>
  );
}

export default Home