import React, { useEffect } from "react";
import Header from "./Header";
import { NOW_PLAYING_MOVIES_URL, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const resp = await fetch(NOW_PLAYING_MOVIES_URL, options);
    const data = await resp.json();
    console.log("data", data);
    dispatch(addNowPlayingMovies(data.results));
  };
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
