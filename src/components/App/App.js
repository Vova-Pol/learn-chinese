import './App.css';
import Quiz from '../Quiz/Quiz';
import LevelsList from '../LevelsList/LevelsList';
import ExercisesList from '../ExercisesList/ExercisesList';
import { Routes, Route } from 'react-router-dom';
import LevelsItem from '../LevelsItem/LevelsItem';

function App() {
  return (
    <div className="app">
      <div className="pal pal1"></div>
      <div className="pal pal2"></div>
      <div className="pal pal3"></div>

      <h1 className="app__title">Time to learn Chinese</h1>
      <Routes>
        <Route path="/levels" element={<LevelsList />} />
        <Route path="/levels/:level" element={<LevelsItem />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>

      <ExercisesList />
    </div>
  );
}

export default App;
