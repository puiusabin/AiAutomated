import type { Route } from "./+types/home";
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import CardContainer from "../components/ui/CardContainer";
import HeroSection from "../components/home/HeroSection";
import WorkflowSection from "../components/home/WorkflowSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Automated - AI Services for Business Growth" },
    { name: "description", content: "AI automation services to help your business grow with cutting-edge technology" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-4 sm:py-8 px-4 sm:px-8 font-['Plus_Jakarta_Sans']">
      {/* Floating Navbar - always visible with no background */}
      <Navbar isFloating={true} bgClass="" />

      <div className="w-full max-w-7xl mt-16">
        <CardContainer>
          {/* Hero content */}
          <main className="px-4 sm:px-8 md:px-12 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-24">
            <HeroSection />
          </main>
        </CardContainer>
      </div>

      {/* Sections outside the card container */}
      <div className="w-full max-w-7xl mt-16">
        <WorkflowSection />
      </div>
      
      {/* How it works section */}
    </div>
  );
}
