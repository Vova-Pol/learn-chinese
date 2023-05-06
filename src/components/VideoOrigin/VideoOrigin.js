import { useState } from 'react';
import './VideoOrigin.css';
import { useParams } from 'react-router-dom';
import { getVideoFileLocal } from '../../utils/utils.ts';

function VideoOrigin() {
  const [speed, setSpeed] = useState(80);

  const { origin, episode } = useParams();

  function handleSpeedButton() {
    if (speed === 80) {
      setSpeed(100);
    } else {
      setSpeed(80);
    }
  }

  return (
    <div className="video-origin">
      <video
        className="video-origin__video"
        src={getVideoFileLocal(episode, speed)}
        controls
        preload="auto"
      ></video>
      <div className="video-origin__player-buttons">
        <button
          onClick={handleSpeedButton}
          type="button"
          className="video-origin__speed-button"
        >
          {speed === 80 ? '80%' : '100%'}
        </button>
      </div>
    </div>
  );
}

export default VideoOrigin;
