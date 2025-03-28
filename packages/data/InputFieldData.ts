import { CgProfile } from "react-icons/cg";
import { IconType } from "react-icons";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";



export type InputFieldProps = {
  icon: IconType,
  placeholderText: string,
  heading: string,
  type: string,
}

export const InputFieldsData: InputFieldProps[] = [
  {
    icon: CgProfile,
    placeholderText: "Enter your Full Name",
    heading: "Full Name",
    type: "text",
  },
  {
    icon: MdOutlineMail,
    placeholderText: "Enter your Email",
    heading: "Email",
    type: "email",
  },
  {
    icon: TbLockPassword,
    placeholderText: "*******",
    heading: "Password",
    type: "password",
  },
  {
    icon: TbLockPassword,
    placeholderText: "*******",
    heading: "Confirm Password",
    type: "password",
  },
]
