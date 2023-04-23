import './ExercisesList.css';
import { useParams } from 'react-router-dom';

function ExercisesList() {
  const { level } = useParams();
  return (
    <div className="exercise-list">
      <h2 className="exercise-list__title">Exercises from level {level}</h2>
      <ul className="exercise-list__list">
        <li className="exercise-list__item">
          <div className="exercise-list__title-container">
            <span className="exercise-list__order-number">1</span>
            <h3 className="exercise-list__item-title">Greeting!</h3>
          </div>
          <p className="exercise-list__item-description">
            Learn how to start a conversation and ask a few qustions.
          </p>
          <button className="exercise-list__item-button">Start</button>
        </li>
      </ul>
    </div>
  );
}

export default ExercisesList;
