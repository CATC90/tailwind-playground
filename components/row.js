import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";

const Avatar = () => {
  return (
    <div className="w-28 flex justify-center">
      <img
        class="object-cover w-10 h-10 rounded-full"
        src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Profile image"
      />
    </div>
  );
};
const ActionWrapper = ({ children }) => {
  return <div className="flex flex-1 justify-end"> {children} </div>;
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
  return (
    <div className="w-32 text-left">
      <span className="rounded-full bg-indigo-500 uppercase py-1 px-4 text-xs font-bold text-white">
        {label}
      </span>
    </div>
  );
};

const ColumnData = ({ title, subtitle = "" }) => {
  return (
    <div className="text-left flex-1">
      <p className="font-semibold text-sm">{title}</p>
      {subtitle && <p className="font-thin text-sm">{subtitle}</p>}
    </div>
  );
};

const Row = () => {
  return (
    <div className="flex items-center border-t shadow drop-shadow-md w-full h-14 hover:bg-gray-200 gap-4">
      <Avatar />
      <ColumnData title="Carlos Trujillo" subtitle="catc_90@hotmail.com" />
      <ColumnData title="Macul" subtitle="Santa cristina 3148" />
      <Status>New</Status>
      <ActionWrapper>
        <Action icon={EyeIcon} />
        <Action icon={TrashIcon} />
        <Action icon={PencilIcon} />
      </ActionWrapper>
    </div>
  );
};

export { Row };
