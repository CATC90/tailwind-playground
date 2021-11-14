import { ChevronUpIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const TableColumnTitle = ({
  children,
  width = "flex-1",
  withFilter = false,
}) => {
  return (
    <div
      className={`flex ${width} items-center text-left pb-2 font-bold cursor-pointer`}
    >
      {withFilter && (
        <ChevronUpIcon className="h-4 w-4 pr-1 transition-transform hover:rotate-180 hover:-translate-x-1" />
      )}
      {children}
    </div>
  );
};

export const TableBody = ({ children, columns }) => {
  return (
    <>
      <div className="flex w-full h-10 border-b border-gray-200 z-10 gap-4">
        <TableColumnTitle width="w-28" />
        <TableColumnTitle withFilter>Nombre</TableColumnTitle>
        <TableColumnTitle withFilter>Dirección</TableColumnTitle>
        <TableColumnTitle width="w-36">Status</TableColumnTitle>
        <TableColumnTitle></TableColumnTitle>
      </div>
      <div className="w-full overflow-y-scroll">{children}</div>
    </>
  );
};
