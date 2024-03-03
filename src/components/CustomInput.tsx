import React from "react";
import { Input } from "./ui/input";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CustomInput: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div>
      <p className="text-gray-100 text-[12px] md:text-[16px] mb-2 font-light">
        {label}
      </p>
      <Input
        {...rest}
        className="text-white-100 bg-input border-inputBorder border-2 focus:outline-0 focus:shadow-none rounded-[2px]"
      />
    </div>
  );
};

export default CustomInput;
