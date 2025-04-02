import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import LatestOffers from "@/components/home/LatestOffers";
import WhyUsSection from "@/components/home/WhyUsSection";
import PartnersSection from "@/components/home/PartnersSection";
import CustomerServiceSection from "@/components/home/CustomerServiceSection";

const Index: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <HeroSection />
          <LatestOffers />
          <WhyUsSection />
          <PartnersSection />
          <CustomerServiceSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
