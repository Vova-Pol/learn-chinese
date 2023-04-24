import './LevelsItem.css';
import { useNavigate } from 'react-router-dom';

function LevelsItem(props) {
  const navigate = useNavigate();

  function handleLevelsItemClick() {
    navigate(`/levels/${props.level}`);
  }
  return (
    <li
      className="levels-list__level-item"
      style={{ backgroundColor: props.background }}
      onClick={handleLevelsItemClick}
    >
      {`Level ${props.level}`}
    </li>
  );
}

export default LevelsItem;
