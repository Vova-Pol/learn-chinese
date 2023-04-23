import './LevelsItem.css';

function LevelsItem(props) {
  function handleLevelsItemClick() {
    console.log('Hi, its level ' + props.level);
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
