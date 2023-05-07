import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="main">
      <span className="main__title-character">你好</span>
      <h1 className="main__title">Добро пожаловать в Learn Chinese!</h1>
      <section className="greeting main__section">
        <article className="greeting__title-container">
          <h2 className="greeting__title section-title">
            Учи китайский с Learn Chinese
          </h2>
          <p className="greeting__text">
            Learn Chinese – это удобный инструмент в изучении китайского языка.
            Новички могут проходить курсы для начинающих, а продвинутые студенты
            могут сами выбирать материалы для изучения.
          </p>
        </article>
        <img
          className="greeting__image"
          src={require('../../images/main/greeting.jpg')}
        ></img>
      </section>
      <section className="functionality main__section">
        <h2 className="functionality__title section-title">
          Как учиться на Learn Chinese?
        </h2>
        <div className="functionality__container">
          <div className="functionality__image-container">
            <img
              className="functionality__image"
              src={require('../../images/main/for-beginner.jpg')}
            ></img>
          </div>
          <div className="functionality__info">
            <h3 className="functionality__subtitle">Новичкам:</h3>
            <ul className="functionality__list">
              <li className="functionality__item">
                Проходить уроки для начинающих
              </li>
              <li className="functionality__item">
                Учить новые слова и выражения с помощью карточек
              </li>
              <li className="functionality__item">
                Пробовать свои силы в разделе тестов и диктанотов
              </li>
              <li className="functionality__item">
                Изучать новые иероглифы в словаре
              </li>
              <li className="functionality__item">
                Ставить цели и отслеживать прогресс в личном кабинете
              </li>
            </ul>
          </div>
        </div>
        <div className="functionality__container">
          <div className="functionality__image-container">
            <img
              className="functionality__image"
              src={require('../../images/main/for-intermediate.jpg')}
            ></img>
          </div>
          <div className="functionality__info">
            <h3 className="functionality__subtitle">Продвинутым:</h3>
            <ul className="functionality__list">
              <li className="functionality__item">
                Войти или зарегистрироваться &#40;так тебе будет доступен полный
                функционал&#41;
              </li>
              <li className="functionality__item">
                Загрузить видеоролик, по которому хочешь учиться
              </li>
              <li className="functionality__item">
                Создать карточки с новыми словами
              </li>
              <li className="functionality__item">
                Учить новые слова и проходить диктанты для закрепления материала
              </li>
              <li className="functionality__item">
                Ставить цели и отслеживать прогресс в личном кабинете
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="suggestion">
        <h2 className="suggestion__title">Что ж, давай начнем?</h2>
        <div className="suggestion__buttons-container">
          <Link className="suggestion__button" to="/login">
            Войти
          </Link>
          <Link className="suggestion__button" to="/register">
            Зарегистрироваться
          </Link>
        </div>
        <div className="suggestion__underline"></div>
        <Link className="suggestion__button" to="/lessons">
          Начать учиться!
        </Link>
      </section>
    </div>
  );
}

export default Main;
