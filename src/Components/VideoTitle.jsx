import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-20">
      <h1 className="font-bold text-5xl my-2">{title}</h1>
      <p className="text-lg w-1/2 my-6">{overview}</p>
      <div>
        <button className="bg-gray-500/60 text-white rounded-lg px-8 py-3 text-xl font-bold">
          ▶️ Play
        </button>
        <button className="bg-gray-500/60 mx-3 text-white rounded-lg px-8 py-3 text-xl font-bold">
          ℹ️ Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
