import React from "react";
import SpinningStarburst from "../ui/SpinningStarburst";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Subscribe",
      description:
        "If our services is a good fit, start your subscription. Access your project board, and we'll reach out the same day for a introductory discussion.",
      cta: { text: "Plans & Pricing", href: "#pricing" },
      bgColor: "bg-white",
      textColor: "text-black",
      borderColor: "border-black",
    },
    {
      number: 2,
      title: "Share your vision",
      description:
        "Once we have your vision, we'll analyse your goals, business requirements and constraints, break the project into bite-sized tasks, and start implementing.",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      borderColor: "border-white/80",
    },
    {
      number: 3,
      title: "Continuous results",
      description:
        "Our team effectively solves your tasks and implements AI as a strategic asset, ensuring it becomes an integral part of your company's workflow.",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      borderColor: "border-white/80",
    },
    {
      number: 4,
      title: "Enjoy the growth",
      description:
        "Our results drive your business growth, which is our main goal. We offer detailed instructions, training, and tech support as long as you need to maximize our work's value.",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      borderColor: "border-white/80",
      hasImage: true,
    },
  ];

  return (
    <section className="bg-black px-4 py-16 sm:px-8 md:px-12 md:py-24">
      <div className="relative mx-auto w-full max-w-5xl">
        {/* Removed the spinning starburst background element */}

        <h2 className="relative z-10 mb-16 text-3xl leading-tight font-semibold tracking-tight text-white sm:text-3xl md:text-3xl">
          How it works?
        </h2>

        <div className="relative z-10 grid grid-cols-1 gap-1 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
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

                {step.hasImage ? (
                  <>
                    <div className="mb-6 flex items-center justify-center py-8">
                      <div className="h-[200px] w-[200px]">
                        <SpinningStarburst
                          width={200}
                          height={200}
                          color={
                            step.textColor === "text-black" ? "black" : "white"
                          }
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </>
                ) : (
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                )}
              </div>

              {/* Bottom div with content */}
              <div className="mt-6">
                {step.description && (
                  <p className="text-base opacity-80">{step.description}</p>
                )}

                {step.cta && (
                  <a
                    href={step.cta.href}
                    className="mt-4 inline-flex items-center"
                  >
                    {step.cta.text} <span className="ml-1">↓</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
