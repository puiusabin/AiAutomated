import type { Route } from "./+types/home";
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import CardContainer from "../components/ui/CardContainer";
import HeroSection from "../components/home/HeroSection";
import WorkflowSection from "../components/home/WorkflowSection";
import HowItWorksSection from "~/components/home/HowItWorksSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Automated - AI Services for Business Growth" },
    {
      name: "description",
      content:
        "AI automation services to help your business grow with cutting-edge technology",
    },
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    // Main wrapper with 24px padding
    <div className="flex min-h-screen flex-col items-center justify-start bg-black px-6 py-4 font-['Plus_Jakarta_Sans'] text-white sm:py-8">
      {/* Floating Navbar */}
      <Navbar isFloating={true} bgClass="" />

      {/* Hero section */}
      <div className="mt-16 w-full max-w-7xl">
        <CardContainer>
          <main className="px-4 pt-8 pb-12 sm:px-8 sm:pt-12 sm:pb-16 md:px-12 md:pt-16 md:pb-24">
            <HeroSection />
          </main>
        </CardContainer>
      </div>

      {/* Additional wrapper with 56px padding for all sections after hero */}
      <div className="mt-16 w-full px-14">
        <div className="mx-auto max-w-7xl">
          {/* Workflow section */}
          <WorkflowSection />

          {/* How it works section */}
          <HowItWorksSection />
        </div>
      </div>
    </div>
  );
}
