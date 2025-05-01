import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MovieVideosURL, options } from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/moviesSlice";

const useMovies = (moviesType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const url = `${MovieVideosURL}/${moviesType}?page=1`;
    const resp = await fetch(url, options);
    const data = await resp.json();
    if (moviesType === "now_playing")
      dispatch(addNowPlayingMovies(data.results));

    if (moviesType === "popular") dispatch(addPopularMovies(data.results));

    if (moviesType === "upcoming") dispatch(addUpcomingMovies(data.results));

    if (moviesType === "top_rated") dispatch(addTopRatedMovies(data.results));
  };
};

export default useMovies;
