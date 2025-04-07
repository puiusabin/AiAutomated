import { motion, useScroll, useTransform, useMotionValue } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

export default function WorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="bg-black px-4 py-16 sm:px-8 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div>
          <h2 className="mb-16 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl md:text-5xl">
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
          <p className="mb-8 text-gray-400">
            Trusted by high-performing companies
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {[
              { name: "Tarscase", width: "120px" },
              { name: "Mine Work", width: "140px" },
              { name: "OPJE", width: "100px" },
              { name: "Old Yo", width: "80px" },
              { name: "Hamilton", width: "130px" },
              { name: "Signature", width: "110px" },
            ].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                viewport={{ once: true }}
                className="opacity-70 grayscale transition-opacity hover:opacity-100"
                style={{ width: company.width }}
              >
                <div className="h-8 rounded-md bg-gray-700"></div>
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
  sectionRef: React.RefObject<HTMLElement | null>;
  lineIndex: number;
  isGray?: boolean;
}

function AnimatedTextLine({
  text,
  sectionRef,
  lineIndex,
  isGray = false,
}: AnimatedTextLineProps) {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start -10%", "center -30%"],
  });

  // Base offset calculation remains the same
  const baseOffset = 0.3 + lineIndex * 0.06;

  // Add useEffect to handle initial visibility check
  const [initiallyVisible, setInitiallyVisible] = useState(false);

  useEffect(() => {
    // Check if element is already in viewport on page load/refresh
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setInitiallyVisible(entry.isIntersecting);
        },
        { threshold: 0.1 },
      );

      observer.observe(sectionRef.current);

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, []);

  return (
    <span ref={lineRef} className={`block ${isGray ? "text-gray-500" : ""}`}>
      {text.split("").map((char, index) => (
        <AnimatedCharacter
          key={index}
          char={char}
          scrollYProgress={scrollYProgress}
          charIndex={index}
          totalChars={text.length}
          baseOffset={baseOffset}
          initiallyVisible={initiallyVisible}
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
  initiallyVisible: boolean;
}

function AnimatedCharacter({
  char,
  scrollYProgress,
  charIndex,
  totalChars,
  baseOffset,
  initiallyVisible,
}: AnimatedCharacterProps) {
  const charOffset = baseOffset + (charIndex / totalChars) * 0.02;

  // Create a derived motion value that accounts for initial visibility
  const adjustedProgress = useMotionValue(0);

  useEffect(() => {
    // If initially visible, set the progress based on current scroll position
    if (initiallyVisible) {
      const unsubscribe = scrollYProgress.onChange((value: number) => {
        adjustedProgress.set(Math.max(value, 0));
      });

      // Trigger immediate update
      adjustedProgress.set(scrollYProgress.get());

      return unsubscribe;
    } else {
      // Normal behavior for elements not initially visible
      const unsubscribe = scrollYProgress.onChange((value: number) => {
        adjustedProgress.set(value);
      });

      return unsubscribe;
    }
  }, [initiallyVisible, scrollYProgress]);

  // Use the adjusted progress for the color transform
  const color = useTransform(
    adjustedProgress,
    [charOffset, charOffset + 0.0005],
    ["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 1)"],
  );

  return (
    <motion.span
      style={{
        color,
        display: "inline-block",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}
