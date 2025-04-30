import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NOW_PLAYING_MOVIES_URL, options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
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
};

export default useNowPlayingMovies;
