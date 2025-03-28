"use client"
import { InputFieldProps } from "../../../../packages/data/InputFieldData";

export const Inputfields = ({ icon: Icon, placeholderText, heading, type }: InputFieldProps) => {
  return (
    <div className="z-10 relative flex flex-col w-full h-[15%] mb-2">
      <h3 className="text-[#304D69] text-md font-medium mb-1 ">{heading} </h3>
      <div className="absolute transform translate-y-9.5 translate-x-2"><Icon size={20} className="text-[#6B829A] " /></div>
      <input placeholder={placeholderText} type={type} className="focus:outline-none placeholder:text-[#6B829A] border border-[#6B829A]/30 p-2 rounded-xl pl-10  bg-[#ECF0F6] text-[#6B829A]" />
    </div>

  );
};
