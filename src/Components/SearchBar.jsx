import React from "react";

const SearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black/80 px-3 w-1/2 h-20 grid grid-cols-12 rounded-lg">
        <input
          className="my-4 mx-2 px-2 bg-white col-span-10 rounded-lg"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button className="bg-red-700 col-span-2 my-4 mx-2 text-white rounded-lg cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
