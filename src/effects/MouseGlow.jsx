import React from "react";
import { useState, useEffect, useRef } from "react";

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useEffect(() => {
    let lastX = mousePosition.x;
    let lastY = mousePosition.y;

    const handleMouseMove = (e) => {
      // Store values for smooth animation
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        // Smooth movement - interpolate between positions
        setMousePosition(() => ({
          x: lastX,
          y: lastY,
        }));
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.06) 0%, transparent 35%)`,
        filter: "blur(100px)",
        transform: "translate3d(0, 0, 0)",
        willChange: "background",
        backfaceVisibility: "hidden",
        transition: "background 0.15s ease",
        zIndex: 0,
      }}
    />
  );
};

export default MouseGlow;
