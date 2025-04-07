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
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-4 sm:py-8 px-4 sm:px-8 font-['Plus_Jakarta_Sans']">
      {/* Floating Navbar */}
      <Navbar isFloating={true} bgClass="" />

      <div className="w-full max-w-7xl mt-16">
        <CardContainer>
          {/* Hero section */}
          <main className="px-4 sm:px-8 md:px-12 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-24">
            <HeroSection />
          </main>
        </CardContainer>
      </div>

      {/* Workflow section */}
      <div className="w-full max-w-7xl mt-16">
        <WorkflowSection />
      </div>
      {/* How it works section */}
      <div className="w-full max-w-7xl mt-16">
        <HowItWorksSection />
      </div>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        id="svg-1800298055_1379"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M100.2 190L100.2 10L101 10L101 190H100.2Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M131.004 184.708L69.4406 15.5629L70.1923 15.2892L131.756 184.434L131.004 184.708Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M158.14 169.198L42.4384 31.3102L43.0512 30.796L158.753 168.684L158.14 169.198Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M178.336 145.344L22.4514 55.344L22.8514 54.6512L178.736 144.651L178.336 145.344Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M189.154 116.02L11.8888 84.7629L12.0278 83.975L189.293 115.232L189.154 116.02Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M189.291 84.7637L12.0256 116.02L11.8867 115.233L189.152 83.9759L189.291 84.7637Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M178.729 55.3465L22.8445 145.347L22.4445 144.654L178.329 54.6537L178.729 55.3465Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M158.744 31.3162L43.042 169.204L42.4292 168.69L158.131 30.802L158.744 31.3162Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M131.744 15.5696L70.1806 184.714L69.4288 184.441L130.992 15.2959L131.744 15.5696Z"
          fill="white"
        ></path>
      </svg>
    </div>
  );
}
