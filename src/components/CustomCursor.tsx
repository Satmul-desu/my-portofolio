"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isPointerDevice) return null;

  return (
    <>
      <motion.div
        className="fixed w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: mousePos.x - 12, y: mousePos.y - 12 }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
          animate={{ x: mousePos.x - 250, y: mousePos.y - 250 }}
          transition={{ type: "spring", damping: 30, stiffness: 150 }}
        />
      </div>
    </>
  );
}
