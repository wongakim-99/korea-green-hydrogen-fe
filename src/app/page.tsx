'use client';

import { useEffect } from 'react';
import HeroSection from "@/components/page/home/HeroSection";
import ValueCards from "@/components/page/home/ValueCards";
import WasteToResourceSection from "@/components/page/home/WasteToResourceSection";
import ResourceCirculationSection from "@/components/page/home/ResourceCirculationSection";
import EconomicEnvironmentalSection from "@/components/page/home/EconomicEnvironmentalSection";
import CTASection from "@/components/page/home/CTASection";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('homepage-snap');
    return () => {
      document.documentElement.classList.remove('homepage-snap');
    };
  }, []);

  return (
    <>
      <HeroSection />
      <ValueCards />
      <WasteToResourceSection />
      <ResourceCirculationSection />
      <EconomicEnvironmentalSection />
      <CTASection />
    </>
  );
}
