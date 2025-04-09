import React from "react";
import SpinningStarburst from "./SpinningStarburst";
import type { StepData } from "../home/data/howItWorksData";

interface StepCardProps {
  step: StepData;
}

export default function StepCard({ step }: StepCardProps) {
  return (
    <div
      className={`${step.bgColor} ${step.textColor} flex w-full flex-col justify-between rounded-4xl p-12 ${
        step.number < 4 ? "h-[400px]" : ""
      }`}
    >
      {/* Top div with step number and title */}
      <div>
        <div
          className={`mb-6 inline-block w-fit rounded-full border ${step.borderColor} px-4 py-1`}
        >
          Step {step.number}
        </div>

        {step.hasImage && (
          <div className="mb-6 flex items-center justify-center py-8">
            <div className="h-[200px] w-[200px]">
              <SpinningStarburst
                width={200}
                height={200}
                color={step.textColor === "text-black" ? "black" : "white"}
              />
            </div>
          </div>
        )}
      </div>

      {/* Bottom div with content */}
      <div className="mt-6">
        <h3 className="mb-4 text-2xl font-semibold">{step.title}</h3>

        {step.description && <p className="font-thin text-white/80">{step.description}</p>}

        {step.cta && (
          <a href={step.cta.href} className="mt-4 inline-flex items-center">
            {step.cta.text} <span className="ml-1">↓</span>
          </a>
        )}
      </div>
    </div>
  );
}
