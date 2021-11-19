import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";

const Avatar = ({ href }) => {
  return (
    <div className="hidden md:flex min-w-[6rem] justify-center">
      <img
        className="object-cover w-10 h-10 rounded-full"
        src={href}
        alt="Profile image"
      />
    </div>
  );
};
const ActionWrapper = ({ children }) => {
  return <div className="flex  justify-end"> {children} </div>;
};
const Action = ({ icon }) => {
  const Icon = icon;
  return (
    <div className="h-10 w-10 rounded-full hover:bg-gray-300 cursor-pointer flex justify-center items-center">
      <Icon className="h-6 w-6 mx-2 text-gray-700" />
    </div>
  );
};

const Status = ({ label, variant }) => {
  const variants = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
    neutral: "bg-indigo-500",
    disabled: "bg-grey-500",
  };
  return (
    <div className="text-left min-w-[9rem]">
      <span
        className={`rounded-full ${variants[variant]} uppercase py-1 px-4 text-xs font-bold text-white`}
      >
        {label}
      </span>
    </div>
  );
};

const ColumnData = ({ title, subtitle = "" }) => {
  return (
    <div className="text-left flex-auto min-w-[9rem] w-32">
      <p className="font-semibold text-sm">{title}</p>
      {subtitle && <p className="font-thin text-sm">{subtitle}</p>}
    </div>
  );
};

const Row = ({ rowData }) => {
  const { avatar, rows, status, actions } = rowData;
  return (
    <div className="flex items-center border-t shadow drop-shadow-md w-full h-14 hover:bg-gray-200 gap-6 overflow-y-hidden">
      {avatar && <Avatar href={avatar} />}
      {rows.map(({ title, subtitle }) => (
        <ColumnData title={title} subtitle={subtitle} />
      ))}
      {status && <Status label={status.label} variant={status.variant} />}
      {actions && (
        <ActionWrapper>
          {actions.view && <Action icon={EyeIcon} />}
          {actions.delete && <Action icon={TrashIcon} />}
          {actions.update && <Action icon={PencilIcon} />}
        </ActionWrapper>
      )}
    </div>
  );
};

export { Row };
