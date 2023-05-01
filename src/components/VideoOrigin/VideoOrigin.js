import { useState } from 'react';
import './VideoOrigin.css';
import { renderYouTubeLink } from '../../utils/utils';
import { useParams } from 'react-router-dom';
import { ORIGINS_DATA } from '../../data/episodes';

function VideoOrigin() {
  const [replay, setReplay] = useState(false);
  const [playerSpeed, setPlayerSpeed] = useState(1);

  const { origin, episode } = useParams();

  const getVideoData = (origin, episode) => {
    const originFound = ORIGINS_DATA.find((elem) => elem.title === origin);
    const episodeFound = originFound.episodes.find(
      (elem) => elem.title === episode,
    );

    const { videoId, startTime, endTime } = episodeFound;
    // ORIGINS_DATA.forEach((originElem) => {
    //   if (origin === originElem.title) {
    //     origin.episodes.forEach
    //     const episodeElem = originElem.episodes[episode];
    //     videoId = episodeElem.videoId;
    //     startTime = episodeElem.startTime;
    //     endTime = episodeElem.endTime;
    //   }
    // });
    return { videoId, startTime, endTime };
  };

  const { videoId, startTime, endTime } = getVideoData(origin, episode);

  return (
    <div className="video-origin">
      <iframe
        className="video-origin__video"
        id="ytplayer"
        type="text/html"
        width="480"
        height="270"
        src={renderYouTubeLink(videoId, startTime, endTime)}
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
