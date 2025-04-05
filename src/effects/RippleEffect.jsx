import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);
  const rippleTimeouts = useRef({});
  const isThrottled = useRef(false);
  const MAX_RIPPLES = 5; // Limit maximum active ripples

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (isThrottled.current) return;
      isThrottled.current = true;

      setTimeout(() => {
        isThrottled.current = false;
      }, 150); // Increased throttle for better performance

      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea");

      if (isInteractive) return;

      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      // Limit number of active ripples more aggressively
      setRipples((prev) => {
        const updatedRipples = [...prev, newRipple];
        return updatedRipples.length > MAX_RIPPLES
          ? updatedRipples.slice(updatedRipples.length - MAX_RIPPLES)
          : updatedRipples;
      });

      // Remove ripple after animation completes
      rippleTimeouts.current[newRipple.id] = setTimeout(() => {
        setRipples((prev) =>
          prev.filter((ripple) => ripple.id !== newRipple.id)
        );
        delete rippleTimeouts.current[newRipple.id];
      }, 2000);
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      Object.values(rippleTimeouts.current).forEach(clearTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none"
          initial={{
            width: 0,
            height: 0,
            opacity: 0.7,
            top: ripple.y,
            left: ripple.x,
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            width: 1000,
            height: 1000,
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(8px)",
            willChange: "transform, opacity, width, height",
            zIndex: 0,
          }}
        />
      ))}
    </AnimatePresence>
  );
};

export default RippleEffect;
