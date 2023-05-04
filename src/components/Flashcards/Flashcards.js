import { useEffect, useState } from 'react';
import './Flashcards.css';
import { api } from '../../utils/Api';
import EpisodesByOrigin from '../EpisodesByOrigin/EpisodesByOrigin';
import { ORIGINS_DATA } from '../../data/origins';

function Flashcards() {
  const [flashcardsList, setFlashcardsList] = useState([]);
  const [originsList, setOriginsList] = useState(ORIGINS_DATA);

  useEffect(() => {
    api
      .getAllFlashcards()
      .then((res) => {
        setFlashcardsList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(flashcardsList);
  console.log(originsList);
  return (
    <div className="flashcards">
      <h1 className="flashcards__title">Flashcards</h1>
      {originsList.map((origin, i) => {
        return (
          <EpisodesByOrigin
            key={i}
            originTitle={origin.title}
            episodes={origin.episodes}
          />
        );
      })}
    </div>
  );
}

export default Flashcards;
