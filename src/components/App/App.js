import './App.css';
import Quiz from '../Quiz/Quiz';
import LevelsList from '../LevelsList/LevelsList';

function App() {
  return (
    <div className="app">
      <div className="pal1"></div>
      <h1 className="app__title">Time to learn Chinese</h1>
      {/* <Quiz /> */}
      <LevelsList />
    </div>
  );
}

export default App;
