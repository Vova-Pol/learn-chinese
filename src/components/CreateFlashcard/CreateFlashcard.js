import './CreateFlashcard.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { api } from '../../utils/Api';
import { useState } from 'react';
import { ORIGINS_DATA } from '../../data/origins';

function CreateFlashcard(props) {
  const defaultSelectInputValue = '小欢喜';

  const { values, handleChange, setValues, errors, isValid, resetForm } =
    useFormAndValidation({
      character: '',
      pinyin: '',
      translation: '',
      origin: defaultSelectInputValue,
      episode: props.episode,
    });

  const [resultText, setResultText] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(null);

  function handleSubmit(evt) {
    evt.preventDefault();
    setResultText('');
    console.log(values);
    api
      .postFlashcard(values)
      .then((res) => {
        console.log(res);
        setIsSuccessful(true);
        setResultText('Карточка успешно создана!');
        resetForm();
      })
      .catch((err) => {
        setIsSuccessful(false);
        setResultText('Произошла ошибка на сервере. Попробуйте ещё раз.');
        console.error(err);
      });
  }

  return (
    <div className="create-flashcard">
      <form className="create-flashcard__form" onSubmit={handleSubmit}>
        <label htmlFor="character" className="create-flashcard__label">
          Иероглиф:
        </label>
        <input
          className="create-flashcard__input"
          type="text"
          id="character"
          name="character"
          value={values.character}
          onChange={handleChange}
          required
          placeholder="你好"
        ></input>
        <label htmlFor="pinyin" className="create-flashcard__label">
          Пиньинь:
        </label>
        <input
          className="create-flashcard__input"
          type="text"
          id="pinyin"
          name="pinyin"
          value={values.pinyin}
          onChange={handleChange}
          required
          placeholder="nǐ hǎo"
        ></input>
        <label htmlFor="translation" className="create-flashcard__label">
          Перевод:
        </label>
        <input
          className="create-flashcard__input"
          type="text"
          id="translation"
          name="translation"
          value={values.translation}
          onChange={handleChange}
          required
          placeholder="здравствуйте, привет"
        ></input>
        <label htmlFor="episode" className="create-flashcard__label">
          Эпизод:
        </label>
        <input
          className="create-flashcard__input"
          type="text"
          id="episode"
          name="episode"
          value={values.episode}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="origin" className="create-flashcard__label">
          Источник:
        </label>
        <select
          className="create-flashcard__input"
          type="text"
          id="origin"
          name="origin"
          onChange={handleChange}
          defaultValue={defaultSelectInputValue}
          required
        >
          {ORIGINS_DATA.map((origin, i) => {
            return (
              <option key={i} value={origin.title}>
                {origin.title}
              </option>
            );
          })}
        </select>

        <button type="submit" className="create-flashcard__button">
          Создать
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
