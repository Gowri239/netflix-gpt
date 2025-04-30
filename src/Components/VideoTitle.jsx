import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-20 absolute bg-gradient-to-r from-black aspect-video">
      <h1 className="font-bold text-white text-5xl my-2">{title}</h1>
      <p className="text-lg text-white w-1/2 my-6">{overview}</p>
      <div>
        <button className="bg-white hover:bg-white/90 text-black rounded-lg px-8 py-3 text-xl font-bold cursor-pointer">
          Play
        </button>
        <button className="bg-gray-400 mx-3 text-white rounded-lg px-8 py-3 text-xl font-bold cursor-pointer">
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
