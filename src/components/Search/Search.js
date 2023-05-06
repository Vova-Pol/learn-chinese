import './Search.css';
import { useState } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { char5_000 } from '../../data/freq';
import { Link } from 'react-router-dom';

function Search() {
  const bkrs_search_url = 'https://bkrs.info/slovo.php?ch=';
  const [resultList, setResultList] = useState([]);
  const [isNothingFound, setIsNothingFound] = useState(false);

  const { values, handleChange, setValues, errors, isValid, resetForm } =
    useFormAndValidation({ search: '' });

  function handleSubmit(evt) {
    evt.preventDefault();
    const result = char5_000.filter((char) => char.includes(values.search));
    setResultList(result);
  }

  // Отображение надописи "Найдено 25 иероглифов" требует написания
  // функции-утилиты, которая будет подставлять нужное окончание

  return (
    <div className="search">
      <h1 className="search__title">Поиск по частотному словарю</h1>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="&#128270; введите символ"
          value={values.search}
          onChange={handleChange}
          required
        ></input>
        <button type="submit" className="search__submit-button">
          Поиск
        </button>
      </form>
      <div className="search__result-container">
        <h2 className="search__result-character">{resultList[0]}</h2>
        {/* <span className="search__amount-text">
          {resultList.length +
            ' иероглиф' +
            (String(resultList.length).endsWith('1') ? '' : 'ов') +
            ' найдено!'}
        </span> */}
      </div>
      <ul className="search__result-list">
        {resultList.map((char, i) => {
          return (
            <li key={i} className="search__result-item">
              <Link
                className="search__result-link"
                to={bkrs_search_url + char}
                target="_blank"
              >
                {char}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Search;
