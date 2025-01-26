import {
  Heart,
  MessageCircle,
  Share2,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

interface Video {
  id: number;
  url: string;
  caption: string;
}

interface VideoPlayerProps {
  video: Video;
  onNextVideo: () => void;
  onPreviousVideo: () => void;
}

export default function VideoPlayer({
  video,
  onNextVideo,
  onPreviousVideo,
}: VideoPlayerProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative w-full h-full bg-black">
      <video
        src={video.url}
        className="w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
      />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-lg mb-2">{video.caption}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              onClick={handleLike}
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              <Heart
                className={`w-6 h-6 ${
                  isLiked ? "text-red-500 fill-red-500" : ""
                }`}
              />
            </button>
            <button aria-label="Comment">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button aria-label="Share">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            <button onClick={onPreviousVideo} aria-label="Previous video">
              <ChevronUp className="w-6 h-6" />
            </button>
            <button onClick={onNextVideo} aria-label="Next video">
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
