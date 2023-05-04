import { useState } from 'react';
import './VideoOrigin.css';
import { useParams } from 'react-router-dom';
import { getVideoFileLocal } from '../../utils/utils.ts';

function VideoOrigin() {
  const [replay, setReplay] = useState(false);
  const [playerSpeed, setPlayerSpeed] = useState(1);

  const { origin, episode } = useParams();

  return (
    <div className="video-origin">
      <video
        className="video-origin__video"
        src={getVideoFileLocal(episode)}
        controls
        preload="auto"
      ></video>
      <div className="video-origin__player-buttons">
        <button type="button" className="video-origin__speed-button"></button>
        <button type="button" className="video-origin__replay-button"></button>
      </div>
    </div>
  );
}

export default VideoOrigin;
