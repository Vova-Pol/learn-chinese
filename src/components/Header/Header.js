import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header__navbar">
        <Link className="header__link" to="/levels">
          Levels
        </Link>
        <Link className="header__link" to="/quiz">
          Quiz
        </Link>
        <Link className="header__link" to="/search">
          Search
        </Link>
      </nav>
    </header>
  );
}

export default Header;
