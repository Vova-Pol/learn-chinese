import './FlashcardsList.css';
import { api } from '../../utils/Api';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BKRS_SERACH_URL } from '../../utils/appConfig';

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
              <Link
                to={BKRS_SERACH_URL + card.character}
                className="flashcards-list__link"
                target="_blank"
              >
                <h3 className="flashcards-list__item-title">
                  {card.character}
                </h3>
                <div className="flashcards-list__item-info">
                  <p className="flashcards-list__item-pinyin">{card.pinyin}</p>
                  <p className="flashcards-list__item-translation">
                    {card.translation}
                  </p>
                </div>
                <span className="flashcards-list__item-edit-button"></span>
              </Link>
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
