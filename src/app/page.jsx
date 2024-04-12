"use client"

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutTheClubsSection from "@/components/AboutTheClubs";
import Agenda from "@/components/Agenda";
import Sponsors from "@/components/Sponsors";
import WhyWaitSection from "@/components/WhyWaitSection";
import Footer from "@/components/Footer";
import AboutTheEventSection from "@/components/AboutTheEvent";
import gsap from 'gsap';
import { useEffect } from "react";
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const Home = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    // If there's no direct destroy method, you might not need to destroy it explicitly

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 

  return (
    <div id="smooth-wrapper" className=" overflow-hidden relative flex flex-col gap-32">
      <div id="smooth-content">
      <div className=" smooth-content flex flex-col gap-32 bg-header-shadow bg-right-top bg-no-repeat">
       <div className="   flex flex-col gap-12 ">
        <Header />
        <Hero />
        </div>
        <AboutTheClubsSection  />
        <AboutTheEventSection/>
        <Agenda />
      </div>
      <div className="flex flex-col gap-32 bg-footer-shadow bg-left bg-no-repeat">
        <Sponsors />
        <WhyWaitSection />
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default Home;
