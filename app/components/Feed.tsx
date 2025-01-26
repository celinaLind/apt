"use client";

import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const DUMMY_VIDEOS = [
  {
    id: 1,
    url: "../../lib/videos/DopeAlgebra.mp4",
    caption: "Cool dance moves! #dance",
  },
  {
    id: 2,
    url: "/placeholder.svg?height=720&width=480",
    caption: "Beautiful sunset #nature",
  },
  {
    id: 3,
    url: "/placeholder.svg?height=720&width=480",
    caption: "Funny cat video #pets",
  },
];

export default function Feed() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % DUMMY_VIDEOS.length);
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + DUMMY_VIDEOS.length) % DUMMY_VIDEOS.length
    );
  };

  return (
    <div className="w-full h-[calc(96vh-4rem)] max-w-md mx-auto mt-12">
      <VideoPlayer
        video={DUMMY_VIDEOS[currentVideoIndex]}
        onNextVideo={handleNextVideo}
        onPreviousVideo={handlePreviousVideo}
      />
    </div>
  );
}
