import './LevelsList.css';
import LevelsItem from '../LevelsItem/LevelsItem';
import { listItemsColors } from '../../data/colors';
import { setBackground } from '../../utils/utils';

function LevelsList() {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="levels-list">
      <h2 className="levels-list__title">Choose your level</h2>
      <ul className="levels-list__list">
        {levels.map((level, index) => {
          return (
            <LevelsItem
              level={level}
              key={level}
              background={setBackground(index, listItemsColors)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default LevelsList;
