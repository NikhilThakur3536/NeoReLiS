"use client"

import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";
import { useState, useEffect } from "react";

export type iconprop = {
  icon: IconType;
};

export const AnimatedBubble = ({ icon: Icon }: iconprop) => {
  const screenWidth = window.innerWidth;


  const [randomX, setRandomX] = useState(Math.random() * screenWidth);

  useEffect(() => {
    setRandomX(Math.random() * screenWidth);
  }, [screenWidth]);

  return (
    <motion.div
      className="absolute"
      style={{ left: randomX, top: "-50px" }}
      initial={{ y: -50, scale: 0.5 }}
      animate={{
        y: window.innerHeight + 50,
        scale: [0.5, 1, 0.8, 1],
        x: [
          randomX,
        ],
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
