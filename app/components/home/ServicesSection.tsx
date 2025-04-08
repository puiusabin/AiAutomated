
import React from "react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Business process automation",
      description:
        "Let AI handle repetitive tasks and workflows. Improve efficiency, minimize errors, and free up time for strategic work, ultimately driving cost savings.",
    },
    {
      id: 2,
      title: "Integrate AI into your company's data",
      description:
        "Our AI automation services empower you to leverage data-driven automation, generate actionable insights, and use predictive analytics to support informed decision-making.",
    },
    {
      id: 3,
      title: "AI-powered apps development",
      description:
        "We develop apps that deliver personalized, real-time insights and transform user experiences, including AI chatbots, image recognition for augmented reality, and predictive analytics for top-tier recommendations.",
    },
    {
      id: 4,
      title: "AI automation consulting",
      description:
        "Looking to find the best solution for your needs? We offer tailored consultations to provide custom solutions that align with your specific processes and industry requirements.",
    },
    {
      id: 5,
      title: "Generative AI integration",
      description:
        "No more wasting hours on content creation – whether it's copy, images, videos, or voiceovers. We streamline the process, enabling you to produce content up to 27x faster.",
    },
    {
      id: 6,
      title: "Ongoing Maintenance and Support",
      description:
        "We don't stop at project delivery. As your partners, we provide continuous improvements, scalability options, and ongoing support to ensure your project grows alongside your business.",
    },
  ];

  return (
    <section className="bg-black px-4 py-16 sm:px-8 md:px-12 md:py-24">
      <div className="relative mx-auto w-full max-w-5xl">
        <h2 className="relative z-10 mb-16 text-3xl leading-tight font-semibold tracking-tight text-white sm:text-3xl md:text-3xl">
          Services
        </h2>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="mx-auto flex h-[370px] w-full max-w-[320px] flex-col pt-6"
            >
              <div className="mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-500">
                  {service.id}
                </div>
              </div>

              <h3 className="mb-4 text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
