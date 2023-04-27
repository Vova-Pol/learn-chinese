import { useEffect, useState } from 'react';
import './Flashcards.css';
import { api } from '../../utils/Api';

function Flashcards() {
  const [flashcardsList, setFlashcardsList] = useState([]);

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
    <div className="flashcards">
      <h1 className="flashcards__title">Flashcards</h1>
      <ul className="flashcards__list">
        {flashcardsList.map((card) => {
          return (
            <li className="flashcards__item" key={card._id}>
              <h3 className="flashcards__item-title">{card.character}</h3>
              <div className="flashcards__item-info">
                <p className="flashcards__item-pinyin">{card.pinyin}</p>
                <p className="flashcards__item-translation">
                  {card.translation}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Flashcards;
