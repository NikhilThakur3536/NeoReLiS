"use client";

import { AnimatedBubble } from "../ui/animationbg";
import { bubbleDataArr } from "../../../../packages/data/animatedBubbleData";

export const AnimatedBubbleBg = () => {
  return (
    <div className=" relative w-full h-full">
      {bubbleDataArr.map((items, index) => (
        <AnimatedBubble key={index} icon={items.icon} />
      ))}
    </div>
  );
};
