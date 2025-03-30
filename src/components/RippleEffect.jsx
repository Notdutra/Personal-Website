import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const RippleEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseDown = (e) => {
      // Check if the clicked element is interactive
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
      setRipples((prev) => [...prev, newRipple]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <>
      {/* Mouse follow gradient */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.06) 0%, transparent 35%)`,
          filter: "blur(100px)",
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Ripple Effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="fixed pointer-events-none"
            initial={{
              width: 0,
              height: 0,
              opacity: 1,
              x: ripple.x,
              y: ripple.y,
            }}
            animate={{
              width: 2000,
              height: 2000,
              opacity: 0,
              x: ripple.x - 1000,
              y: ripple.y - 1000,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
              opacity: {
                duration: 2,
                ease: "easeOut",
              },
            }}
            style={{
              background:
                "radial-gradient(circle, transparent 0%, rgba(45, 212, 191, 0.3) 45%, transparent 50%)",
              borderRadius: "50%",
              filter: "blur(8px)",
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default RippleEffect;
