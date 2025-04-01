"use client";

import React, { useState } from "react";
import { InputFieldProps } from "../../../../packages/data/InputFieldData";

export const Inputfields = ({
  icon: Icon,
  placeholderText,
  heading,
  type,
  confirmPassword = false,
  mainPassword,
  onChange,
}: InputFieldProps) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  // Password validation function
  const validatePassword = (input: string) => {
    if (!input) {
      setError("");
      return;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        input,
      )
    ) {
      setError(
        "Password must have 8+ characters, uppercase, lowercase, number & special character.",
      );
    } else {
      setError("");
    }
  };

  // Confirm password validation function
  const validateConfirmPassword = (input: string) => {
    if (!input) {
      setError("");
      return;
    }
    if (mainPassword && input !== mainPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValue(input);
    setTouched(true);

    if (confirmPassword) {
      validateConfirmPassword(input);
    } else {
      validatePassword(input);
    }

    if (onChange) onChange(input);
  };

  return (
    <div className="relative flex flex-col w-full">
      <h3 className="text-[#304D69] text-md font-medium mb-1">{heading}</h3>

      {/* Input Wrapper */}
      <div className="relative flex flex-col mb-4">
        {/* Icon */}
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
          <Icon size={20} className="text-[#6B829A]" />
        </div>

        {/* Input Field */}
        <input
          placeholder={placeholderText}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          className={`w-full focus:outline-none placeholder:text-[#6B829A] border border-[#6B829A]/30 p-2 rounded-xl pl-10 bg-[#ECF0F6] text-[#6B829A] transition-all duration-300 ${
            error && touched ? "border-red-500" : ""
          }`}
        />

        {/* Error Messages */}
        {error && touched && (
          <p
            className={`absolute border border-[#6B829A]/20 p-1 bg-white rounded-md text-red-500 text-xs top-1/2 transform -translate-y-1/2 left-3/4 w-[80%] text-center ${
              confirmPassword ? "left-[105%]" : "left-[105%]"
            }`}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
