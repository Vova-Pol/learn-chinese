import { useEffect, useState } from 'react';
import './Study.css';
import { api } from '../../utils/Api';
import { useParams } from 'react-router-dom';

function Study(props) {
  const { origin, episode } = useParams();
  const [cardsList, setCardsList] = useState([]);
  const [shownCard, setShownCard] = useState({});

  useEffect(() => {
    api
      .getAllFlashcards()
      .then((res) => {
        const cardsList = res.data.filter(
          (card) => card.origin === origin && card.episode === episode,
        );
        setCardsList(cardsList);
        setShownCard(cardsList[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function onLeftArrow() {
    if (shownCard === cardsList[0]) {
      return;
    } else {
      const newIndex = cardsList.indexOf(shownCard) - 1;
      setShownCard(cardsList[newIndex]);
    }
  }

  function onRightArrow() {
    if (shownCard === cardsList[cardsList.length - 1]) {
      return;
    } else {
      const newIndex = cardsList.indexOf(shownCard) + 1;
      setShownCard(cardsList[newIndex]);
    }
  }

  return (
    <div className="study">
      <h1 className="study__title">Study and take a quiz!</h1>
      <div className="study__card">
        <h3 className="study__character">{shownCard.character}</h3>
        <p className="study__pinyin">{shownCard.pinyin}</p>
        <p className="study__translation">{shownCard.translation}</p>
      </div>
      <div className="study__buttons-container">
        <button
          onClick={onLeftArrow}
          type="button"
          className="study__arrow-button"
        >
          &#8592;
        </button>
        <button
          onClick={onRightArrow}
          type="button"
          className="study__arrow-button"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Study;
