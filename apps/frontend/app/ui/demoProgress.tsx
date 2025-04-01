import { ProgressStepsData } from "../../../../packages/data/progresStepsData";
import { ProgresSteps } from "./progresSteps";
import { motion } from "framer-motion";

type progress = {
  progress: number;
};

export const DemoProgress = ({ progress }: progress) => {
  return (
    <div className="flex w-full h-full p-6 top-2 gap-6">
      <div className="relative w-4 h-[95%] my-2 bg-[#6B829A]/20 border border-[#6B829A]/40 rounded-2xl">
        <motion.div
          className="w-full bg-[#304D69] rounded-2xl"
          style={{ height: `${progress}%` }}
          initial={{ height: "0%" }}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
        {ProgressStepsData.map((items, index) => (
          <ProgresSteps key={index} {...items} progress={progress} />
        ))}
      </div>
    </div>
  );
};
