import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovies from "../hooks/useMovies";

const Browse = () => {
  const movieTypes = ["now_playing", "popular", "top_rated", "upcoming"];
  movieTypes.map((type) => {
    useMovies(type);
  });
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
