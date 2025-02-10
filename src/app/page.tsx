"use client";
import { useEffect, useRef } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";

const JsmpegPlayer = ({ videoUrl, options, wrapperClassName }) => {
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    const player = new JSMpeg.VideoElement(
      videoWrapperRef.current,
      videoUrl,
      options,
    );

    const handleUserInteraction = () => {
      if (!player) {
        initPlayer();
        document.removeEventListener("click", handleUserInteraction);
      }
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);

      player.destroy();
    };
  }, [videoUrl, options]);

  return <div className="w-80 h-80 bg-white" ref={videoWrapperRef}></div>;
};

export default function Home() {
  const videoUrl = "ws://localhost:9999/";
  const options = { autoplay: true, loop: true };

  return (
    <div>
      My stream
      <JsmpegPlayer
        wrapperClassName="video-wrapper"
        videoUrl={videoUrl}
        options={options}
      />
    </div>
  );
}
