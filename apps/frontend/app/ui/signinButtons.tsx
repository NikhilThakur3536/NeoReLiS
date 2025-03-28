"use client"
import { IconType } from "react-icons";

export type signinButtonProps = {
  icon: IconType,
  label: string,
}

export const SigninButtons = ({ icon: Icon, label }: signinButtonProps) => {
  return (
    <div className="z-10 flex w-full h-12 mb-1">
      <div className="w-full h-full p-1">
        <div className="relative flex jusify-center w-fit-content h-fit-content bg-[#6B829A]/10 px-4 py-2 rounded-lg border border-[#6B829A]/30">
          <div><Icon className="absolute text-[#304D69] transform translate-y-1 translate-x-6" /></div>
          <div className="pl-14 font-semibold text-[#304D69]">{label}</div>
        </div>
      </div>
    </div>
  )
}
