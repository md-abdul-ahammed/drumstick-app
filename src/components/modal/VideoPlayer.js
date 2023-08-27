import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactPlayer from "react-player/lazy";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = ({ url, closePlayer }) => {
  return (
    <div className="fixed z-[99] top-0 left-0 w-full h-screen bg-[#000000df]">
      <div className="md:w-[70%] w-[90%] relative m-auto h-full flex items-center justify-center">
        <ReactPlayer
          width="100%"
          muted={false}
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                playsinline: 1,
              },
            },
          }}
          controls={true}
          height="70%"
          url={url}
        />
        <div className="absolute top-[8%] md:top-[5%] right-[-2%] md:right-[-8%]">
          <FontAwesomeIcon
            className="cursor-pointer"
            onClick={() => closePlayer("")}
            icon={faXmark}
            size="2xl"
            color={"white"}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
