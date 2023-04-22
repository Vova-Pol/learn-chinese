import LevelsItem from '../LevelsItem/LevelsItem';
import './LevelsList.css';

function LevelsList() {
  const levels = [1, 2, 3];

  return (
    <div className="levels-list">
      <h2 className="levels-list__title">Choose your level</h2>
      <ul className="levels-list__list">
        {levels.map((stage) => {
          return <LevelsItem stage={stage} key={stage} />;
        })}
      </ul>
    </div>
  );
}

export default LevelsList;
