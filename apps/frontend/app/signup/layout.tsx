"use client"

import { CgProfile } from "react-icons/cg";
import {AnimatedBubbleBg} from './component/bubbleanimationbg'
import {InputFieldsData} from '../../../../packages/data/InputFieldData'
import { SigninButtons } from "../ui/signinButtons";
import {signinButtonsData} from '../../../../packages/data/signinbuttondata'
import { Inputfields } from "../ui/inputFields";

export default function SignUP(){
  return (
    <div className=" w-screen h-screen bg-[#F7F9FC] flex flex-col items-center gap-4 overflow-hidden">
      <AnimatedBubbleBg />
      {/* Main Heading*/}
      <div className="z-10 w-[40%] h-[18%]">
        <h2 className="font-bold text-4xl text-center text-[#304D69] mb-2">ReLis</h2>
        <h3 className="font-medium text-lg text-center text-[#6B829A] ">Your Systematic Review Companion</h3>
      </div>

      <div className="z-10 flex flex-col bg-white/10 shadow-[0px_0px_12px_2px_rgba(0,0,0,0.1)] w-[30%] h-[84%] rounded-xl p-6 border border-[#6B829A]/40 mb-4">
        <h3 className="text-[#304D69] font-medium text-3xl mb-2">Create an Account</h3>
        <h3 className="text-[#6B829A] text-md mb-2">Enter your details to create your account</h3>

        {/*Sign in Button for Google and Microsoft*/}
        <div className="flex">
          {signinButtonsData.map((items, index) => (<SigninButtons key={index} {...items } />))}
          
        </div>

        {/*These are input Fields for email,username,password & confirm password*/}
        {InputFieldsData.map((items, index) => (<Inputfields key={index} {...items} />))}

        {/*Button for Submitting the Form*/}
        <div className="relative w-full h-[9%] bg-[#304D69] rounded-xl text-white text-lg font-semibold text-center py-2 mb-2">
          <span>Create Account</span>
          <CgProfile size={30} color="white" className="absolute top-2 left-1/4" />
        </div>
        <div className="w-full h-[9%] text-center">
          <span className="text-[#6B829A]">Already have an account?</span>
          <span className="text-[#304D69] ml-1">Sign in</span>
        </div>
      </div>

    </div>
  )
}
