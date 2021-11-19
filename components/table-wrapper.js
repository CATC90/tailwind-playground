import React from "react";

export const TableWrapper = ({ children }) => {
  return (
    <figure className="flex flex-col max-w-max bg-gray-100 rounded-xl p-0 max-h-80 relative font-nunito">
      {children}
    </figure>
  );
};
