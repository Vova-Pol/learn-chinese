import { useEffect, useState } from 'react';
import './Flashcards.css';
import { api } from '../../utils/Api';
import EpisodesByOrigin from '../EpisodesByOrigin/EpisodesByOrigin';

function Flashcards() {
  const [flashcardsList, setFlashcardsList] = useState([]);
  const [originsList, setOriginsList] = useState([]);

  useEffect(() => {
    api
      .getAllFlashcards()
      .then((res) => {
        setFlashcardsList(res.data);
        const allOrigins = res.data.map((card) => card.origin);
        const uniqueOrigins = [...new Set(allOrigins)];
        setOriginsList(uniqueOrigins);
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
      {originsList.map((origin) => {
        const flashcardsByOriginList = flashcardsList.filter(
          (card) => card.origin === origin,
        );
        return (
          <EpisodesByOrigin
            origin={origin}
            flashcardsList={flashcardsByOriginList}
          />
        );
      })}
    </div>
  );
}

export default Flashcards;
