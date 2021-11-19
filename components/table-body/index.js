import { ChevronUpIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const TableColumnAvatar = () => {
  return <div className={`hidden md:flex min-w-[6rem]`} />;
};

const TableColumnActions = () => {
  return <div className={`flex max-w-[8rem]`} />;
};

const TableColumnTitle = ({
  title,
  width = "flex-1",
  withFilter = false,
  onFilter,
  defaultFilter,
}) => {
  const [isDecreasingFilter, setFilter] = useState(defaultFilter || false);

  const handleClick = () => {
    setFilter(!isDecreasingFilter);
    onFilter({ title, isDecreasingFilter: !isDecreasingFilter });
  };

  return (
    <div
      onClick={handleClick}
      className={`flex min-w-[9rem] items-center text-left pb-2 font-bold cursor-pointer`}
    >
      {withFilter && (
        <ChevronUpIcon
          className={`h-4 w-4 pr-1 transition-transform ${
            isDecreasingFilter && "rotate-180 -translate-x-1"
          } `}
        />
      )}
      {title}
    </div>
  );
};

export const TableBody = ({ children, columns, hasAvatar, hasActions }) => {
  return (
    <>
      <div className="flex w-full h-10 border-b border-gray-200 z-10 gap-6">
        {hasAvatar && <TableColumnAvatar width="w-28" />}
        {columns.map(({ title, hasFilter, handleFilter, isDefaultFilter }) => (
          <TableColumnTitle
            title={title}
            withFilter={hasFilter}
            onFilter={handleFilter}
            defaultFilter={isDefaultFilter}
          />
        ))}
      </div>
      <div className="w-full overflow-y-scroll">{children}</div>
    </>
  );
};
