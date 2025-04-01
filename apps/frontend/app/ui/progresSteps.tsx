import { CgCheck } from "react-icons/cg";
import { motion } from "framer-motion";

export type ProgresStepsProps = {
  step: string;
  topdist: number;
  progress?: number;
};

export const ProgresSteps = ({
  step,
  topdist,
  progress,
}: ProgresStepsProps) => {
  const isCompleted = (progress ?? -1) >= topdist;

  return (
    <div
      className="absolute w-8 h-8 rounded-full bg-[#304D69] transform -translate-x-2"
      style={{ top: `${topdist}%` }}
    >
      <div>
        {isCompleted ? (
          <motion.div
            initial={{ scale: 0, rotateY: 0 }}
            animate={{ scale: [0, 1.5, 1], rotateY: 720 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ perspective: 1000 }}
          >
            <CgCheck
              className="text-white transform -translate-y-1 -translate-x-1"
              size={40}
            />
          </motion.div>
        ) : (
          <h3
            className={`text-white ${step === "10" ? "ml-[6px]" : "ml-[11px]"} mt-[4px] font-bold`}
          >
            {step}
          </h3>
        )}
      </div>
    </div>
  );
};
