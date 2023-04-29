import { useState } from 'react';
import './VideoOrigin.css';
import { renderYouTubeLink } from '../../utils/utils';

function VideoOrigin() {
  const [replay, setReplay] = useState(false);
  const [playerSpeed, setPlayerSpeed] = useState(1);

  return (
    <div className="video-origin">
      <iframe
        className="video-origin__video"
        id="ytplayer"
        type="text/html"
        width="480"
        height="270"
        src={renderYouTubeLink('mTMb8e_gDzE', '1:41', '3:15')}
        allowFullScreen
      ></iframe>
      <div className="video-origin__player-buttons">
        <button type="button" className="video-origin__speed-button"></button>
        <button type="button" className="video-origin__replay-button"></button>
      </div>
    </div>
  );
}

export default VideoOrigin;
