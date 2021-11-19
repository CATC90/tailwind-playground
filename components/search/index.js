import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Search = () => {
  return (
    <div className="border rounded focus:shadow-outline shadow flex items-center">
      <input
        className="bg-transparent appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id="username"
        type="text"
        placeholder="Buscar"
      />
      <SearchIcon className="h-5 w-5 mx-2 text-gray-700" />
    </div>
  );
};

export { Search };
