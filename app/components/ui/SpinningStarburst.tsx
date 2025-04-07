import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface SpinningStarburstProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const SpinningStarburst: React.FC<SpinningStarburstProps> = ({
  width = 200,
  height = 200,
  color = "white",
  className = "",
}) => {
  const scrollVelocity = useMotionValue(0);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const balancingRef = useRef(false);

  // Speed multiplier for spinning
  const speedMultiplier = 8;

  // Spring physics configuration for natural oscillation
  const springConfig = { damping: 10, stiffness: 30, mass: 1.2 };
  const rotate = useSpring(0, springConfig);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      // Cancel any ongoing balancing when new scrolling starts
      balancingRef.current = false;

      // Update scroll velocity with multiplier for faster spinning
      scrollVelocity.set(scrollDelta * speedMultiplier);
      lastScrollY.current = currentScrollY;

      // Set scrolling state
      isScrolling.current = true;

      // Clear previous timeout and set new one
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // When scrolling stops, let the natural physics take over
      scrollTimeoutRef.current = setTimeout(() => {
        isScrolling.current = false;
        balancingRef.current = true;
      }, 50);
    };

    // Set up animation frame loop
    let prevTime = 0;
    let animationFrameId: number;

    const animateRotation = (time: number) => {
      if (prevTime === 0) {
        prevTime = time;
        animationFrameId = requestAnimationFrame(animateRotation);
        return;
      }

      prevTime = time;

      // Apply rotation based on current state
      if (isScrolling.current) {
        // Fast spinning during active scrolling
        rotate.set(rotate.get() + scrollVelocity.get() * 1.5);
      } else if (balancingRef.current) {
        // Natural physics-based balancing that allows movement in both directions
        const currentVelocity = scrollVelocity.get();

        // Apply rotation based on current velocity
        rotate.set(rotate.get() + currentVelocity);

        // Create a damping effect that simulates natural oscillation
        if (Math.abs(currentVelocity) < 3 && Math.abs(currentVelocity) > 0.1) {
          // Apply a gentle opposite force when velocity is small
          const counterForce =
            -Math.sign(currentVelocity) *
            Math.min(0.15, Math.abs(currentVelocity) * 0.2);
          scrollVelocity.set(currentVelocity + counterForce);
        } else {
          // Otherwise apply a gradual damping
          const dampedVelocity = currentVelocity * 0.986;
          scrollVelocity.set(dampedVelocity);
        }

        // If velocity is extremely low, eventually stop completely
        if (Math.abs(currentVelocity) < 0.05) {
          scrollVelocity.set(0);
          balancingRef.current = false;
        }
      } else {
        // Normal state - gentle damping
        const currentVelocity = scrollVelocity.get();
        if (Math.abs(currentVelocity) > 0.05) {
          const dampedVelocity = currentVelocity * 0.97;
          scrollVelocity.set(dampedVelocity);
          rotate.set(rotate.get() + dampedVelocity);
        }
      }

      animationFrameId = requestAnimationFrame(animateRotation);
    };

    // Apply an initial spin on mount for visual flair
    rotate.set(45);
    scrollVelocity.set(5); // Start with some initial velocity
    balancingRef.current = true; // Start in balancing mode

    // Start animation and event listeners
    window.addEventListener("scroll", handleScroll);
    animationFrameId = requestAnimationFrame(animateRotation);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [rotate, scrollVelocity]);

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      style={{ rotate }}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M100.2 190L100.2 10L101 10L101 190H100.2Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M131.004 184.708L69.4406 15.5629L70.1923 15.2892L131.756 184.434L131.004 184.708Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M158.14 169.198L42.4384 31.3102L43.0512 30.796L158.753 168.684L158.14 169.198Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M178.336 145.344L22.4514 55.344L22.8514 54.6512L178.736 144.651L178.336 145.344Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M189.154 116.02L11.8888 84.7629L12.0278 83.975L189.293 115.232L189.154 116.02Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M189.291 84.7637L12.0256 116.02L11.8867 115.233L189.152 83.9759L189.291 84.7637Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M178.729 55.3465L22.8445 145.347L22.4445 144.654L178.329 54.6537L178.729 55.3465Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M158.744 31.3162L43.042 169.204L42.4292 168.69L158.131 30.802L158.744 31.3162Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M131.744 15.5696L70.1806 184.714L69.4288 184.441L130.992 15.2959L131.744 15.5696Z"
        fill={color}
      />
    </motion.svg>
  );
};

export default SpinningStarburst;
