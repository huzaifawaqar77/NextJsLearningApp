"use client";

import VideoCardList from "@/app/components/VideoCardList";

const VideosNav = ({ navVideos }) => {
  return (
    <div className="span-col-1 w-full">
      <nav className="flex flex-col items-center justify-center">
        <ul className="w-full">
          {navVideos &&
            navVideos.map((video, index) => (
              <VideoCardList video={video} key={index} />
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default VideosNav;
