import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const IndexWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <div className="w-[100vw] mt-[100vh] border-b-gray-200 z-10 bg-background">
      {children}
    </div>
  );
};

export default IndexWrapper;
