import { useEffect, useState, useRef } from 'react';
import './Study.css';
import { api } from '../../utils/Api';
import { useParams } from 'react-router-dom';

function Study(props) {
  const { origin, episode } = useParams();
  const [cardsList, _setCardsList] = useState([]);
  const [shownCard, _setShownCard] = useState({});

  const leftArrowCode = 37;
  const rightArrowCode = 39;
  const spaceCode = 32;

  useEffect(() => {
    api
      .getAllFlashcards()
      .then((res) => {
        const cardsList = res.data.filter(
          (card) => card.origin === origin && card.episode === episode,
        );

        setCardsList(cardsList);
        setShownCard(cardsList[0]);

        window.addEventListener('keydown', handleKeyDown);

        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Непонятная костыльная идея с useRef для получения
  // актуального значения стейта в eventListener (нашел на stackOverflow)

  const shownCardRef = useRef(shownCard);

  function setShownCard(card) {
    shownCardRef.current = card;
    _setShownCard(card);
  }

  const cardsListRef = useRef(cardsList);

  function setCardsList(cardsList) {
    cardsListRef.current = cardsList;
    _setCardsList(cardsList);
  }

  function handleKeyDown(evt) {
    const currCard = shownCardRef.current;
    const currList = cardsListRef.current;
    let newCard;
    switch (evt.keyCode) {
      case leftArrowCode:
        evt.preventDefault();
        newCard = currList[currList.indexOf(currCard) - 1];
        setShownCard(newCard);
        break;
      case rightArrowCode:
        evt.preventDefault();
        newCard = currList[currList.indexOf(currCard) + 1];
        setShownCard(newCard);
        break;
      case spaceCode:
        evt.preventDefault();
        setShownCard(currList[currList.indexOf(currCard) + 1]);
        break;
      default:
        break;
    }
  }

  // function handleKeyup(evt) {
  //   switch (evt.keyCode) {
  //     case leftArrowCode:
  //       evt.preventDefault();
  //       console.log('left');
  //       break;
  //     case rightArrowCode:
  //       evt.preventDefault();
  //       console.log('right');
  //       break;
  //     case spaceCode:
  //       evt.preventDefault();
  //       console.log('space');
  //       break;
  //     default:
  //       return;
  //   }
  // }

  return (
    <div className="study">
      <h1 className="study__title">Учим новые иероглифы</h1>
      <div className="study__card">
        <h3 className="study__character">{shownCard.character}</h3>
        <p className="study__pinyin">{shownCard.pinyin}</p>
        <p className="study__translation">{shownCard.translation}</p>
      </div>
      <div className="study__keys-container">
        <span className="study__arrow-left">&#8592;</span>
        <span className="study__space">space</span>
        <span className="study__arrow-right">&#8594;</span>
      </div>
    </div>
  );
}

export default Study;
