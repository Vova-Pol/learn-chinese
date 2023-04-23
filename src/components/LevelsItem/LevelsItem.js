import './LevelsItem.css';

function LevelsItem(props) {
  function handleLevelsItemClick() {
    console.log('Hi, its level ' + props.stage);
  }
  return (
    <li
      className="levels-list__level-item"
      style={{ backgroundColor: props.background }}
      onClick={handleLevelsItemClick}
    >
      {`Level ${props.stage}`}
    </li>
  );
}

export default LevelsItem;
