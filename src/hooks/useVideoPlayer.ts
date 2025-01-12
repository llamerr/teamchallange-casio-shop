'use client';

import { useRef, useState } from 'react';

export const useVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        videoRef.current.volume = 0.5;
        videoRef.current.muted = false;
      }
      setIsPlaying(!isPlaying);
    }
  };

  return { videoRef, togglePlay, isPlaying };
};

export default useVideoPlayer;
