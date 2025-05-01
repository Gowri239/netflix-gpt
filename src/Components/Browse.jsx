import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovies from "../hooks/useMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const movieTypes = ["now_playing", "popular", "top_rated", "upcoming"];
  movieTypes.map((type) => {
    useMovies(type);
  });

  const gptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
