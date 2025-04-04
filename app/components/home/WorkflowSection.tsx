import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

export default function WorkflowSection() {
  const sectionRef = useRef(null);
  
  return (
    <section ref={sectionRef} className="px-4 sm:px-8 md:px-12 py-16 md:py-24 bg-black">
      <div className="max-w-5xl mx-auto">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
            <AnimatedTextLine 
              text="Enhance your workflows to" 
              sectionRef={sectionRef} 
              lineIndex={0} 
            />
            <AnimatedTextLine 
              text="maximize performance and take" 
              sectionRef={sectionRef} 
              lineIndex={1} 
            />
            <AnimatedTextLine 
              text="effective control of your time." 
              sectionRef={sectionRef} 
              lineIndex={2} 
            />
            <AnimatedTextLine 
              text="Focus on what truly matters to" 
              sectionRef={sectionRef} 
              lineIndex={3} 
            />
            <AnimatedTextLine 
              text="your business, while routine tasks" 
              sectionRef={sectionRef} 
              lineIndex={4} 
            />
            <AnimatedTextLine 
              text="run on autopilot with the help of" 
              sectionRef={sectionRef} 
              lineIndex={5} 
            />
            <AnimatedTextLine 
              text="our no-code and code-based" 
              sectionRef={sectionRef} 
              lineIndex={6} 
              isGray={true}
            />
            <AnimatedTextLine 
              text="solutions." 
              sectionRef={sectionRef} 
              lineIndex={7} 
              isGray={true}
            />
          </h2>
        </div>

        <div className="mt-20">
          <p className="text-gray-400 mb-8">Trusted by high-performing companies</p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {[
              { name: "Tarscase", width: "120px" },
              { name: "Mine Work", width: "140px" },
              { name: "OPJE", width: "100px" },
              { name: "Old Yo", width: "80px" },
              { name: "Hamilton", width: "130px" },
              { name: "Signature", width: "110px" }
            ].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                viewport={{ once: true }}
                className="grayscale opacity-70 hover:opacity-100 transition-opacity"
                style={{ width: company.width }}
              >
                <div className="h-8 bg-gray-700 rounded-md"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface AnimatedTextLineProps {
  text: string;
  sectionRef: React.RefObject<HTMLElement>;
  lineIndex: number;
  isGray?: boolean;
}

function AnimatedTextLine({ text, sectionRef, lineIndex, isGray = false }: AnimatedTextLineProps) {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"] // Changed offset to make animation happen when element is in view
  });
  
  // Adjusted base offset to ensure animation happens when visible
  const baseOffset = 0.1 + (lineIndex * 0.05);
  
  return (
    <span
      ref={lineRef}
      className={`block ${isGray ? 'text-gray-500' : ''}`}
    >
      {text.split('').map((char, index) => (
        <AnimatedCharacter 
          key={index} 
          char={char} 
          scrollYProgress={scrollYProgress} 
          charIndex={index} 
          totalChars={text.length}
          baseOffset={baseOffset}
        />
      ))}
    </span>
  );
}

interface AnimatedCharacterProps {
  char: string;
  scrollYProgress: any;
  charIndex: number;
  totalChars: number;
  baseOffset: number;
}

function AnimatedCharacter({ char, scrollYProgress, charIndex, totalChars, baseOffset }: AnimatedCharacterProps) {
  // Reduced the character offset multiplier to ensure all characters animate within the scroll range
  const charOffset = baseOffset + (charIndex / totalChars * 0.05);
  
  // Transform scroll progress to color - using a step function for instant pop
  const color = useTransform(
    scrollYProgress,
    [charOffset, charOffset + 0.001], 
    ["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 1)"]
  );
  
  return (
    <motion.span
      style={{ 
        color,
        display: 'inline-block'
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}