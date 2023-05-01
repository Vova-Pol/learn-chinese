import { Link } from 'react-router-dom';
import './EpisodesByOrigin.css';

function EpisodesByOrigin(props) {
  return (
    <div className="episodes-by-origin">
      <h2 className="episodes-by-origin__title">{props.originTitle}</h2>
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
  );
}

export default EpisodesByOrigin;
