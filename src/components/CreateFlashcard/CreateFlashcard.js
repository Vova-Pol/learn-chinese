import './CreateFlashcard.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function CreateFlashcard() {
  const { values, handleChange, setValues, errors, isValid, resetForm } =
    useFormAndValidation({
      character: '',
      pinyin: '',
      translation: '',
      episode: '',
    });

  function handleSubmit(evt) {
    evt.preventDefault();

    setValues({
      character: '',
      pinyin: '',
      translation: '',
      episode: '',
    });
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
    </div>
  );
}

export default CreateFlashcard;
