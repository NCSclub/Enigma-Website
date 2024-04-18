import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutTheClubsSection from "@/components/AboutTheClubs";
import Agenda from "@/components/Agenda";
import Sponsors from "@/components/Sponsors";
import WhyWaitSection from "@/components/WhyWaitSection";
import Footer from "@/components/Footer";
import AboutTheEventSection from "@/components/AboutTheEvent";

export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  creator: "Enigma Team",
  keywords: [
    "Enigma",
    "challenges",
    "Ideathon",
    "talks",
    "Startups",
    "NCS",
    "Macronics",
  ],
  title: "Enigma",
  description:
    "Enigma is a Startup Extchange hosted in NIT by NCS & Marconics Club",
};

const Home = () => {
  return (
    <main className="overflow-hidden relative flex flex-col gap-32">
      <div className="flex flex-col gap-32 bg-header-shadow bg-right-top bg-no-repeat">
        <div className="flex flex-col gap-12 ">
          <Hero />
        </div>
        <AboutTheClubsSection />
        <AboutTheEventSection />
        <Agenda />
      </div>
      <div className="flex flex-col gap-32 bg-footer-shadow bg-left bg-no-repeat">
        <Sponsors />
        <WhyWaitSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
