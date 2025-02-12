"use client";
import { useEffect, useRef } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";

interface JsmpegPlayerProps {
  videoUrl: string;
  options: {
    autoplay: boolean;
    loop: boolean;
  };
}

const JsmpegPlayer = ({ videoUrl, options }: JsmpegPlayerProps) => {
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    const player = new JSMpeg.VideoElement(
      videoWrapperRef.current,
      videoUrl,
      options,
    );

    return () => {
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
      <JsmpegPlayer videoUrl={videoUrl} options={options} />
    </div>
  );
}
