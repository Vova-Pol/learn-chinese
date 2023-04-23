import './LevelsList.css';
import LevelsItem from '../LevelsItem/LevelsItem';
import { listItemsColors } from '../../data/colors';
import { setBackground } from '../../utils/utils';

function LevelsList() {
  const levels = [1, 2, 3, 4, 5];

  return (
    <div className="levels-list">
      <h2 className="levels-list__title">Choose your level</h2>
      <ul className="levels-list__list">
        {levels.map((stage) => {
          return (
            <LevelsItem
              stage={stage}
              key={stage}
              background={setBackground(levels.indexOf(stage), listItemsColors)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default LevelsList;
