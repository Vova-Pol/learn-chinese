import './App.css';
import Quiz from '../Quiz/Quiz';
import LevelsList from '../LevelsList/LevelsList';
import ExercisesList from '../ExercisesList/ExercisesList';

function App() {
  return (
    <div className="app">
      <div className="pal pal1"></div>
      <div className="pal pal2"></div>
      <div className="pal pal3"></div>

      <h1 className="app__title">Time to learn Chinese</h1>
      {/* <Quiz /> */}
      {/* <LevelsList /> */}
      <ExercisesList />
    </div>
  );
}

export default App;
