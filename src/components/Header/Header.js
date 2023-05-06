import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header__navbar">
        <Link to="/">
          <Logo className="header__logo" />
        </Link>
        <Link className="header__link" to="/">
          Главная
        </Link>
        <Link className="header__link" to="/quiz">
          Диктант
        </Link>
        <Link className="header__link" to="/search">
          Поиск
        </Link>
        <Link className="header__link" to="/flashcards">
          Карточки
        </Link>
      </nav>
    </header>
  );
}

export default Header;
