import { useEffect } from "react";
import { MovieVideosURL, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    const url = `${MovieVideosURL}/${movieId}/videos`;
    const resp = await fetch(url, options);
    const data = await resp.json();

    const trailerVideos = data?.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailerVideo =
      trailerVideos.length > 0 ? trailerVideos[0] : data?.results[0];

    dispatch(addTrailerVideo(trailerVideo));
  };

  useEffect(() => {
    getTrailerVideo();
  }, []);
};

export default useTrailerVideo;
