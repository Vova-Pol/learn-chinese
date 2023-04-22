import './LevelsItem.css';

function LevelsItem(props) {
  function setClassName(stage) {
    const initClassName =
      'levels-list__level-item levels-list__level-item_color_';
    switch (stage) {
      case 1:
        return initClassName + 'light-green';
      case 2:
        return initClassName + 'blue';
      case 3:
        return initClassName + 'green';
      default:
        console.log('Something went wrong in switch/case');
    }
  }

  function handleLevelsItemClick() {
    console.log('Hi, its level ' + props.stage);
  }
  return (
    <li className={setClassName(props.stage)} onClick={handleLevelsItemClick}>
      {`Level ${props.stage}`}
    </li>
  );
}

export default LevelsItem;
