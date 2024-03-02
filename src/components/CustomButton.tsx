import React, { ReactNode } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  mode: "border" | "background";
}

const CustomButton: React.FC<IButtonProps> = ({ children, mode, ...rest }) => {
  return (
    <button
      className={`${mode === "border" ? "bg-transparent border-[1px] border-white-100" : "bg-white-100 border-white-100"}  px-5 md:px-10 py-3 md:py-5 text-center  font-[16px] mx-2 w-[240px]`}
      type="button"
      {...rest}
    >
      <p className={`text-${mode === "border" ? "white" : "purple"}-100`}>
        {children}
      </p>
    </button>
  );
};

export default CustomButton;
