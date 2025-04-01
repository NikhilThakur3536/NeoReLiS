"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";
import { useState, useEffect } from "react";

export type IconProp = {
  icon: IconType;
};

export const AnimatedBubble = ({ icon: Icon }: IconProp) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [randomX, setRandomX] = useState<number>(0);

  useEffect(() => {
    // Ensure this runs only on client-side
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      setRandomX(Math.random() * window.innerWidth);

      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [screenWidth]);

  return (
    <motion.div
      className="absolute"
      style={{ left: randomX, top: "-50px" }}
      initial={{ y: -50, scale: 0.5 }}
      animate={{
        y: screenWidth > 0 ? window.innerHeight + 50 : 1000,
        scale: [0.5, 1, 0.8, 1],
        x: [randomX],
      }}
      transition={{
        duration: Math.random() * 6 + 6,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <div className="w-fit h-fit rounded-full bg-[#d3dbe3] p-2">
        <Icon size={50} color="white" />
      </div>
    </motion.div>
  );
};
