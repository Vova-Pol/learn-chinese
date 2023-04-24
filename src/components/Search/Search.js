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

  return (
    <div className="search">
      <h1 className="search__title">Frequency Dictionary Search</h1>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="&#128270; find the hieroglyph"
          value={values.search}
          onChange={handleChange}
          required
        ></input>
        <button type="submit" className="search__submit-button">
          Search
        </button>
      </form>
      <div className="search__result-container">
        <h2 className="search__result-character">{resultList[0]}</h2>
        <span className="search__amount-text">
          {resultList.length +
            ' hieroglyph' +
            (resultList.length > 1 ? 's' : '') +
            ' found!'}
        </span>
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
