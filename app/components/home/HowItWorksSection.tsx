import React from "react";
import StepCard from "../ui/StepCard";
import { steps } from "./data/howItWorksData";

export default function HowItWorksSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-8 md:px-12 md:py-24">
      <div className="relative mx-auto w-full max-w-5xl">
        <h2 className="relative z-10 mb-16 text-3xl leading-tight font-semibold tracking-tight text-white sm:text-3xl md:text-3xl">
          How it works?
        </h2>

        <div className="relative z-10 grid grid-cols-1 gap-1 md:grid-cols-2">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
