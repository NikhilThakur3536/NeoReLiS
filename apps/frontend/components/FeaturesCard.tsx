import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactSVGElement } from "react";

export type FeatureCardsProps = {
  icon?: IconProp;
  heading: string;
  description: string;
};

export const FeaturesCard = ({
  icon,
  heading,
  description,
}: FeatureCardsProps) => {
  return (
    <div className="flex flex-col mt-10  w-fit max-w-80 h-56 shadow-(--div-shadow-card) bg-white rounded-xl border-1">
      <div className="flex w-full px-2 py-1">
        <div className="w-fit-content h-fit-content p-2 bg-[#6B829A]/20 border border-[#6B829A]/30 rounded-xl my-2 mx-1">
          {icon}
        </div>
        <div className=" flex items-center justify-center mx-2 px-2">
          <h3 className="font-bold text-[#304D69] text-2xl">{heading}</h3>
        </div>
      </div>
      <div className="w-ful px-2 py-4">
        <h3 className="font-medium text-lg text-[#6B829A] montserrat px-2">
          {description}
        </h3>
      </div>
    </div>
  );
};
