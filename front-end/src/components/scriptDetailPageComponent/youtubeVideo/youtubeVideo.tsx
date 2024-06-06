import React, { useRef } from 'react';
import YouTube from 'react-youtube';
import { getVideoId } from '@utils/getYoutubeId';

interface YoutubeVideoProps {
  youtubeUrl: string;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ youtubeUrl }) => {
  const youtubePlayer = useRef<any>(null);

  const onPlayerReady = (event: any) => {
    youtubePlayer.current = event.target;
  };

  return (
    <YouTube
      videoId={getVideoId(youtubeUrl)}
      opts={{
        width: '600px',
        height: '350px',
        playerVars: {
          autoplay: 0,
          rel: 0,
          modestbranding: 1,
        },
      }}
      onReady={onPlayerReady}
      onEnd={(e) => {
        e.target.stopVideo(0);
      }}
    />
  );
};

export default YoutubeVideo;
