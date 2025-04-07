import React from "react";

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
    },
    {
      number: 2,
      title: "Share your vision",
      description:
        "Once we have your vision, we'll analyse your goals, business requirements and constraints, break the project into bite-sized tasks, and start implementing.",
      bgColor: "bg-[#121212]",
      textColor: "text-white",
    },
    {
      number: 3,
      title: "Continuous results",
      description:
        "Our team effectively solves your tasks and implements AI as a strategic asset, ensuring it becomes an integral part of your company's workflow.",
      bgColor: "bg-[#121212]",
      textColor: "text-white",
    },
    {
      number: 4,
      title: "Enjoy the growth",
      description: "",
      bgColor: "bg-[#121212]",
      textColor: "text-white",
      hasImage: true,
    },
  ];

  return (
    <section className="bg-black px-4 py-16 sm:px-8 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section title will go here */}
        <h2 className="mb-16 text-3xl leading-tight font-semibold tracking-tight text-white sm:text-3xl md:text-3xl">
          How it works?
        </h2>

        {/* Steps container will go here */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.bgColor} ${step.textColor} flex min-h-[400px] w-full flex-col rounded-4xl p-12`}
            >
              <div className="mb-12 inline-block w-fit rounded-full border border-gray-700 px-4 py-1">
                Step {step.number}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">{step.title}</h3>

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

              {step.hasImage && (
                <div className="flex flex-grow items-center justify-center">
                  <div className="h-32 w-32">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      {[...Array(24)].map((_, i) => (
                        <line
                          key={i}
                          x1="50"
                          y1="50"
                          x2={50 + 45 * Math.cos((i * Math.PI) / 12)}
                          y2={50 + 45 * Math.sin((i * Math.PI) / 12)}
                          stroke="white"
                          strokeWidth="0.5"
                        />
                      ))}
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
