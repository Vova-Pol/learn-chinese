import { useState } from 'react';
import './VideoOrigin.css';
import { renderYouTubeLink } from '../../utils/utils';
import { useParams } from 'react-router-dom';
import { ORIGINS_DATA } from '../../data/episodes';

function VideoOrigin() {
  const [replay, setReplay] = useState(false);
  const [playerSpeed, setPlayerSpeed] = useState(1);

  const { origin, episode } = useParams();

  // Кривой способ получения данных для ссылки на видео
  // Фикс: исправить данные карточек и данные ORIGINS_DATA так,
  // чтобы они имели связь (занести ORIGINS в БД)

  const getVideoData = (origin, episodeTitle) => {
    let videoId;
    let startTime;
    let endTime;
    if (origin === '小欢喜') {
      const episode = ORIGINS_DATA[0].episodes.episodeTitle;
      videoId = episode.videoId;
      startTime = episode.startTime;
      endTime = episode.endTime;
      return { videoId, startTime, endTime };
    } else if (origin === 'ChineseClass101.com') {
      const episode = ORIGINS_DATA[1].episodes[episodeTitle];
      videoId = episode.videoId;
      startTime = episode.startTime;
      endTime = episode.endTime;
      return { videoId, startTime, endTime };
    }
  };

  const { videoId, startTime, endTime } = getVideoData(origin, episode);
  console.log(videoId, startTime);

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
