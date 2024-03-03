import React, { ReactNode } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  mode: "border" | "background";
}

const CustomButton: React.FC<IButtonProps> = ({ children, mode, ...rest }) => {
  return (
    <button
      className={`${mode === "border" ? "bg-transparent border-white-100" : "bg-white-100 border-white-100"} text-${mode === "border" ? "white" : "purple"}-100 border-[1px]  px-5 md:px-10 py-3 md:py-5 text-center  font-[16px] mx-2 w-[240px] ${mode === "border" ? "hover:bg-white-100 hover:text-purple-100" : "hover:bg-transparent hover:text-white-100"} transition duration-500 ease-in-out`}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;
