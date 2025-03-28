"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {VideosData } from "../../../../packages/data/videosdata"

export type Video = {
  url: string;
  title: string;
  subtitle: string;
};

export const DemoMainSection = ({ clickHandler }: { clickHandler: () => void }) => {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, VideosData.length - 1));
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const currentVideo: Video = VideosData[currentIndex] ?? {
    url: "",
    title: "Unknown",
    subtitle: "No details available",
  };

  return (
    <div className="flex flex-col w-full h-full ml-16 mt-2">
    {/* Video Title & Description */}
    <div className="flex flex-col w-[90%] px-6">
      <h2 className="font-bold text-[#304D69] text-4xl mb-1">{currentVideo.title}</h2>
      <h3 className="font-medium text-[#6B829A] mb-4">{currentVideo.subtitle}</h3>
    </div>

    {/* Video Displaying Component */}
    <div className="flex flex-col w-[90%] h-[95%] bg-white rounded-2xl p-4 ">
      {/* Video Playing Section */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-[90%] h-[90%] bg-gray-100 rounded-xl ml-14 border-2 border-dashed flex items-center justify-center overflow-hidden"
      >
        <iframe
          src={currentVideo.url}
          title={currentVideo.title}
          allowFullScreen
          className="w-full h-full rounded-xl"
        ></iframe>
      </motion.div>

      {/* Section Below Video */}
      <div className="flex flex-col w-full px-8">
        <hr className="w-full h-2 text-gray-200 mt-4" />
        <div className="flex justify-between w-full px-8">
          {/* Next & Previous Buttons */}
          <div className="flex gap-2">
            <button
              onClick={prevVideo}
              disabled={currentIndex === 0}
              className="bg-[#6B829A]/10 w-24 h-12 p-2 rounded-xl border border-[#6B829A]/30 text-lg font-medium text-[#304D69] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={nextVideo}
              disabled={currentIndex === VideosData.length - 1}
              className="bg-[#6B829A]/10 w-24 h-12 p-2 rounded-xl border border-[#6B829A]/30 text-lg font-medium text-[#304D69] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>

          {/* Mark as Completed Button */}
          <div>
            <button
              className="w-48 h-12 bg-[#304D69] rounded-xl text-white text-lg font-medium hover:cursor-pointer"
              onClick={clickHandler}
            >
              Mark As Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};