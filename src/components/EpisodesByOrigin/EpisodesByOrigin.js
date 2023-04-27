import { Link } from 'react-router-dom';
import './EpisodesByOrigin.css';

function EpisodesByOrigin(props) {
  const allEpisodesList = props.flashcardsList.map((card) => card.episode);
  const uniqueEpisodesList = [...new Set(allEpisodesList)];
  return (
    <div className="episodes-by-origin">
      <h2 className="episodes-by-origin__title">{props.origin}</h2>
      <ul className="episodes-by-origin__list">
        {uniqueEpisodesList.map((episode) => {
          return (
            <li className="episodes-by-origin__item">
              <Link
                className="episodes-by-origin__link"
                to={`/flashcards/${props.origin}/${episode}`}
              >
                {episode}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EpisodesByOrigin;
