import './Main.css';

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
            Ты сам выбираешь, по каким материалам тебе заниматься.
          </p>
        </article>
        <img
          className="greeting__image"
          src={require('../../images/title-image.jpg')}
        ></img>
      </section>
      <section className="functionality main__section">
        <h2 className="functionality__title section-title">
          Как учиться на Learn Chinese?
        </h2>
        <div className="functionality__info">
          <img
            className="functionality__image"
            src={require('../../images/functionality-image.jpg')}
          ></img>
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
      </section>
    </div>
  );
}

export default Main;
