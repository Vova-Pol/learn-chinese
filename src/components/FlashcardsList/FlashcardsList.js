import './FlashcardsList.css';
import { api } from '../../utils/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FlashcardsList() {
  const [flashcardsList, setFlashcardsList] = useState([]);
  const { origin, episode } = useParams();

  useEffect(() => {
    api
      .getAllFlashcards()
      .then((res) => {
        setFlashcardsList(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <ul className="flashcards-list">
      {flashcardsList.map((card) => {
        if (card.origin === origin && card.episode === episode) {
          return (
            <li className="flashcards-list__item" key={card._id}>
              <h3 className="flashcards-list__item-title">{card.character}</h3>
              <div className="flashcards-list__item-info">
                <p className="flashcards-list__item-pinyin">{card.pinyin}</p>
                <p className="flashcards-list__item-translation">
                  {card.translation}
                </p>
              </div>
            </li>
          );
        } else {
          return;
        }
      })}
    </ul>
  );
}

export default FlashcardsList;
