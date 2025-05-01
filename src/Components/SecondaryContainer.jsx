import React from "react";
import MoviesContainer from "./MoviesContainer";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MoviesContainer
          title={"Now Playing"}
          movies={movies?.nowPlayingMovies}
        />
        <MoviesContainer title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MoviesContainer title={"Popular"} movies={movies?.popularMovies} />
        <MoviesContainer title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
