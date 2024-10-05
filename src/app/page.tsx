"use client";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainSection from "@/components/Home/MainSection";
import AboutSection from "@/components/Home/AboutSection";
import FatureSection from "@/components/Home/FatureSection";
import MarqueeSection from "@/components/Home/MarqueeSection";
import MobileSection from "@/components/Home/MobileSection";
import ContactSection from "@/components/Home/ContactSection";
import FaqSection from "@/components/Home/FaqSection";

const page = () => {
  return (
    <div className="main">
      <Navbar />

      <MainSection />
      <AboutSection />
      <FatureSection />
      <MarqueeSection />
      <MobileSection />
      <ContactSection />
      <FaqSection />

      <Footer />
    </div>
  );
};

export default page;
