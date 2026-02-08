"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { FoxForMenSection } from "@/components/sections/FoxForMenSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Hero />
      <WhyUs />
      <HowItWorks />
      <FeaturedProducts />
      <FoxForMenSection />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
