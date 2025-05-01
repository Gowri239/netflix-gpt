import React from "react";
import SearchBar from "./SearchBar";
import GPTSuggestions from "./GPTSuggestions";
import { BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMAGE} alt="background" />
      </div>
      <SearchBar />
      <GPTSuggestions />
    </div>
  );
};

export default GptSearch;
