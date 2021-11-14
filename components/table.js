import React from "react";

export const Table = ({ children }) => {
  return (
    <figure class="flex flex-col bg-gray-100 rounded-xl p-0 max-h-80 relative font-nunito w-[774px]">
      {children}
    </figure>
  );
};
