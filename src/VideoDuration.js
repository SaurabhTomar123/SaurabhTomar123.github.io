import React from 'react'
import Video from "./video.mp4";
import { useEffect, useRef } from "react";


export const VideoDuration = ({Video}) => {
  const videoEl= useRef(null);

  const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;
    console.log(`The video is ${Video.duration} seconds long.`);
  };
    return (
    <div>
     <video controls autostart autoPlay src={Video} ref={videoEl} onLoadedMetadata={handleLoadedMetadata} type="video/mp4" />
    </div>
  )
}
/*const MyVideo = ({ src }) => {
    const videoEl = useRef(null);
  
    const handleLoadedMetadata = () => {
      const video = videoEl.current;
      if (!video) return;
      console.log(`The video is ${video.duration} seconds long.`);
    };
  
    return (
      <div>
        
      </div>
    );
  };*/