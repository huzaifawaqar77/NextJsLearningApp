"use client";
import { useState } from "react";
import VideoCard from "./VideoCard";

const VideoCardList = ({ video }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [toggleVideo, setToggleVideo] = useState(false);
  const handleToggleVideo = () => {
    setToggleVideo(!toggleVideo);
  };
  const handleCurrentVideo = (vid) => {
    setCurrentVideo(vid);
    handleToggleVideo();
  };
  return (
    <li className="my-2 py-4 bg-stone-200 px-6 rounded-md font-semibold">
      <div className="flex justify-between items-center ">
        <h3 className="text-purple-500">{video.lectureName}</h3>
        <i className="cursor-pointer" onClick={() => handleCurrentVideo(video)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </i>
      </div>
      <div className="w-full grid grid-cols-1 place-items-center">
        {toggleVideo && <VideoCard video={currentVideo} />}
      </div>
    </li>
  );
};

export default VideoCardList;
