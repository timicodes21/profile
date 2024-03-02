import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  width?: number;
}

const Badge: React.FC<IProps> = ({ children, width }) => {
  return (
    <div
      className="bg-border font-bold px-3 py-1 inline text-center rounded-[99px]"
      style={{ width: width ? `${width}px` : "100px" }}
    >
      <p className="text-purple-100 inline">{children}</p>
    </div>
  );
};

export default Badge;
