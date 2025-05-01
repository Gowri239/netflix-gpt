import React from "react";
import { useSelector } from "react-redux";
import languageConfig from "../utils/languageConstants";

const SearchBar = () => {
  const languageKey = useSelector((store) => store.language.preferredLanguage);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black/80 px-3 w-1/2 h-20 grid grid-cols-12 rounded-lg">
        <input
          className="my-4 mx-2 px-2 bg-white col-span-9 rounded-lg"
          type="text"
          placeholder={languageConfig[languageKey].gptSearchPlaceholder}
        />
        <button className="bg-red-700 col-span-3 my-4 mx-2 text-white rounded-lg cursor-pointer">
          {languageConfig[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
