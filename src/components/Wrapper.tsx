import React from "react";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="max-w-md w-full m-3 p-4 bg-white shadow-lg rounded-lg min-h-[300px]">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
