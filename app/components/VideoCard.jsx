// Purpose: VideoCard component for the course page
import ReactPlayer from "react-player";
const VideoCard = ({ video }) => {
  return (
    <section className="my-6 grid grid-cols-1 place-content-center">
      <div className="flex justify-center items-center">
        <ReactPlayer url={video.videoUrl} style={{ maxWidth: "100%" }} />
      </div>
      <div className="mt-8 p-4 bg-white rounded-md">
        {video.studyMaterial && (
          <>
            <h3 className="my-4 text-gray-700 text-2xl font-bold">
              Study Materials
            </h3>
            <div className="border-2 border-slate-600 flex gap-2 items-center my-4 p-2 rounded-md w-fit">
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <a href={video.studyMaterial} target="_blank">
                Study Material (click me!)
              </a>
            </div>
          </>
        )}
        {video.book && (
          <>
            <h3 className="my-4 text-gray-700 text-2xl font-bold">
              Recommended Book
            </h3>
            <div className="border-2 border-slate-600 flex gap-2 items-center w-fit p-2 rounded-md">
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
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <a href={video.book} target="_blank">
                Book (click me!)
              </a>
            </div>
          </>
        )}
        {video.additionalInfo && (
          <>
            <h3 className="my-4 text-gray-700 text-2xl font-bold">
              Additional Information
            </h3>
            <p className="text-gray-700">{video.additionalInfo}</p>
          </>
        )}
        {!video.book && !video.studyMaterial && !video.additionalInfo && (
          <h3 className="text-gray-700">No additional Study Materials</h3>
        )}
      </div>
    </section>
  );
};

export default VideoCard;
