import './CreateFlashcard.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { api } from '../../utils/Api';
import { useState } from 'react';

function CreateFlashcard() {
  const { values, handleChange, setValues, errors, isValid, resetForm } =
    useFormAndValidation({
      character: '',
      pinyin: '',
      translation: '',
      episode: '',
    });

  const [resultText, setResultText] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(null);

  function handleSubmit(evt) {
    evt.preventDefault();
    setResultText('');
    api
      .postFlashcard(values)
      .then((res) => {
        console.log(res);
        setIsSuccessful(true);
        setResultText('Карточка успешно создана!');
      })
      .catch((err) => {
        setIsSuccessful(false);
        setResultText('Произошла ошибка на сервере. Попробуйте ещё раз.');
        console.error(err);
      });

    resetForm();
  }

  return (
    <div className="create-flashcard">
      <h1 className="create-flashcard__title">Create a Flashcard</h1>
      <form className="create-flashcard__form" onSubmit={handleSubmit}>
        <input
          className="create-flashcard__input"
          type="text"
          name="character"
          value={values.character}
          onChange={handleChange}
          required
          placeholder="你好"
        ></input>
        <input
          className="create-flashcard__input"
          type="text"
          name="pinyin"
          value={values.pinyin}
          onChange={handleChange}
          required
          placeholder="nǐ hǎo"
        ></input>
        <input
          className="create-flashcard__input"
          type="text"
          name="translation"
          value={values.translation}
          onChange={handleChange}
          required
          placeholder="здравствуйте, привет"
        ></input>
        <input
          className="create-flashcard__input"
          type="text"
          name="episode"
          value={values.episode}
          onChange={handleChange}
          required
          placeholder="1"
        ></input>
        <button type="submit" className="create-flashcard__button">
          Create
        </button>
      </form>
      {resultText ? (
        <span
          className={
            isSuccessful
              ? 'create-flashcard__result create-flashcard__result_type_success'
              : 'create-flashcard__result create-flashcard__result_type_error'
          }
        >
          {resultText}
        </span>
      ) : null}
    </div>
  );
}

export default CreateFlashcard;
