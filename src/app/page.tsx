'use client';

import { useEffect } from 'react';
import HeroSection from "@/components/home/HeroSection";
import ValueCards from "@/components/home/ValueCards";
import WasteToResourceSection from "@/components/home/WasteToResourceSection";
import ResourceCirculationSection from "@/components/home/ResourceCirculationSection";
import EconomicEnvironmentalSection from "@/components/home/EconomicEnvironmentalSection";
import CTASection from "@/components/home/CTASection";

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
