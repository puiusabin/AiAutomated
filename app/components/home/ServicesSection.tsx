
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  // Create refs for the section and each icon
  const sectionRef = useRef(null);
  
  // Use framer-motion's useScroll hook to track scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create transform values for each icon based on scroll progress
  // All icons will move up (negative Y values) as scroll progress increases
  // Starting positions are now higher (smaller positive values)
  const yellowIconY = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const yellowIconRotate = useTransform(scrollYProgress, [0, 1], [0, -60]);
  
  const numberSixY = useTransform(scrollYProgress, [0, 1], [80, -250]);
  const numberSixRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  
  const whiteKnotY = useTransform(scrollYProgress, [0, 1], [120, -280]);
  const whiteKnotRotate = useTransform(scrollYProgress, [0, 1], [0, 75]);
  
  const purpleBarsY = useTransform(scrollYProgress, [0, 1], [90, -320]);
  const purpleBarsRotate = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const chartY = useTransform(scrollYProgress, [0, 1], [110, -350]);
  const chartRotate = useTransform(scrollYProgress, [0, 1], [0, 65]);
  
  const cursorY = useTransform(scrollYProgress, [0, 1], [70, -200]);
  const cursorX = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={sectionRef} className="bg-black px-4 py-16 sm:px-8 md:px-12 md:py-24">
      <div className="relative mx-auto w-full max-w-5xl">
        <h2 className="relative z-10 mb-16 text-3xl leading-tight font-semibold tracking-tight text-white sm:text-3xl md:text-3xl">
          Services
        </h2>
        
        {/* Service cards */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="mx-auto flex h-[370px] w-full max-w-[320px] flex-col pt-6"
            >
              <div className="mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50 text-white/50">
                  {service.id}
                </div>
              </div>

              <h3 className="mb-4 text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed font-thin text-white/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Floating icons container */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Yellow icon */}
          <motion.div 
            className="absolute top-[5%] left-[15%]"
            style={{ 
              y: yellowIconY,
              rotate: yellowIconRotate,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          >
            <div className="bg-yellow-400 w-20 h-20 rounded-xl flex items-center justify-center">
              <svg width="56" height="56" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 8C13.4 8 8 13.4 8 20C8 26.6 13.4 32 20 32C26.6 32 32 26.6 32 20C32 13.4 26.6 8 20 8ZM20 28C15.6 28 12 24.4 12 20C12 15.6 15.6 12 20 12C24.4 12 28 15.6 28 20C28 24.4 24.4 28 20 28Z"
                  fill="white"
                />
                <path
                  d="M20 16C17.8 16 16 17.8 16 20C16 22.2 17.8 24 20 24C22.2 24 24 22.2 24 20C24 17.8 22.2 16 20 16ZM20 22C18.9 22 18 21.1 18 20C18 18.9 18.9 18 20 18C21.1 18 22 18.9 22 20C22 21.1 21.1 22 20 22Z"
                  fill="white"
                />
                <path
                  d="M32 12C32 14.2 30.2 16 28 16C25.8 16 24 14.2 24 12C24 9.8 25.8 8 28 8C30.2 8 32 9.8 32 12Z"
                  fill="white"
                />
                <path
                  d="M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12Z"
                  fill="white"
                />
                <path
                  d="M16 28C16 30.2 14.2 32 12 32C9.8 32 8 30.2 8 28C8 25.8 9.8 24 12 24C14.2 24 16 25.8 16 28Z"
                  fill="white"
                />
                <path
                  d="M32 28C32 30.2 30.2 32 28 32C25.8 32 24 30.2 24 28C24 25.8 25.8 24 28 24C30.2 24 32 25.8 32 28Z"
                  fill="white"
                />
              </svg>
            </div>
          </motion.div>

          {/* Number 6 icon */}
          <motion.div 
            className="absolute top-[20%] left-[40%]"
            style={{ 
              y: numberSixY,
              rotate: numberSixRotate,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 12 }}
          >
            <div className="bg-white w-20 h-20 rounded-xl flex items-center justify-center">
              <div className="relative">
                <div className="absolute top-1 left-0 w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-5xl font-bold text-black">6</span>
              </div>
            </div>
          </motion.div>

          {/* Other icons remain the same... */}
        </div>
      </div>
    </section>
  );
}
