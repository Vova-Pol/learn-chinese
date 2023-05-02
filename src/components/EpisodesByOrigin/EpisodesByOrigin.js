import { Link } from 'react-router-dom';
import './EpisodesByOrigin.css';
import thumbnailLittleReunion from '../../images/little-reunion-thumbnail.png';
import thumbnailChineseClass101 from '../../images/chinese-class-101.png';

function EpisodesByOrigin(props) {
  // Кривоватое решение для импорта thumbnail
  // Идея с require() почему-то не сработала
  const thumbnail =
    props.originTitle === '小欢喜'
      ? thumbnailLittleReunion
      : props.originTitle === 'ChineseClass101.com'
      ? thumbnailChineseClass101
      : null;

  return (
    <div className="episodes-by-origin">
      <h2 className="episodes-by-origin__title">{props.originTitle}</h2>
      <div className="episodes-by-origin__info-container">
        <img
          // src={require(props.thumbnailPath)}
          src={thumbnail}
          alt={props.title}
          className="episodes-by-origin__thumbnail"
        ></img>
        <ul className="episodes-by-origin__list">
          {props.episodes.map((episode, i) => {
            return (
              <li key={i} className="episodes-by-origin__item">
                <Link
                  className="episodes-by-origin__link"
                  to={`/flashcards/${props.originTitle}/${episode.title}`}
                >
                  {episode.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default EpisodesByOrigin;
