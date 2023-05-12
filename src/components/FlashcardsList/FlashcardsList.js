import './FlashcardsList.css';
import { api } from '../../utils/Api';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BKRS_SERACH_URL } from '../../utils/appConfig';
import VideoOrigin from '../VideoOrigin/VideoOrigin';
import EditFlashcardPopup from '../EditFlashcardPopup/EditFlashcardPopup';
import CreateFlashcard from '../../pages/CreateFlashcard/CreateFlashcard';

function FlashcardsList() {
  const [flashcardsList, setFlashcardsList] = useState([]);
  const { origin, episode } = useParams();
  const [editableCard, setEditableCard] = useState({});
  const [editFlashcardPopupIsOpened, setEditFlashcardPopupIsOpened] =
    useState(false);
  const [addFlashcardsDropDownIsOpened, setAddFlashcardDropDownIsOpened] =
    useState(false);

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

  function handleOnEdit(cardElem) {
    setEditableCard(cardElem);
    setEditFlashcardPopupIsOpened(true);
  }

  function handleCheckbox() {
    setAddFlashcardDropDownIsOpened(!addFlashcardsDropDownIsOpened);
  }

  return (
    <div className="flashcards-list">
      <h1 className="flashcards-list__title">Карточки</h1>
      <h2 className="flashcards-list__subtitle">
        {origin} • {episode}
      </h2>
      <VideoOrigin />
      <div className="flashcards-list__links-container">
        <Link
          to={`/flashcards/${origin}/${episode}/study`}
          className="flashcards-list__study-link"
        >
          Учить
        </Link>
        <Link
          to={`/flashcards/${origin}/${episode}/quiz`}
          className="flashcards-list__quiz-link"
        >
          Пройти диктант
        </Link>
      </div>
      <div
        className="flashcards-list__drop-down-button"
        onClick={handleCheckbox}
      >
        Создать карточку
        <span className="flashcards-list__drop-down-arrow"></span>
      </div>
      {addFlashcardsDropDownIsOpened ? (
        <CreateFlashcard episode={episode} />
      ) : null}
      <ul className="flashcards-list__list">
        {flashcardsList.map((card) => {
          if (card.origin === origin && card.episode === episode) {
            return (
              <li className="flashcards-list__item" key={card._id}>
                <Link
                  to={BKRS_SERACH_URL + card.character}
                  className="flashcards-list__item-link"
                  target="_blank"
                >
                  <h3 className="flashcards-list__item-title">
                    {card.character}
                  </h3>
                  <div className="flashcards-list__item-info">
                    <p className="flashcards-list__item-pinyin">
                      {card.pinyin}
                    </p>
                    <p className="flashcards-list__item-translation">
                      {card.translation}
                    </p>
                  </div>
                </Link>
                <span
                  className="flashcards-list__item-edit-button"
                  onClick={handleOnEdit}
                ></span>
              </li>
            );
          } else {
            return;
          }
        })}
      </ul>
      {editFlashcardPopupIsOpened ? (
        <EditFlashcardPopup cardData={editableCard} />
      ) : null}
    </div>
  );
}

export default FlashcardsList;
