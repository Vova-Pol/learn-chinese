import '../../index.css';
import './App.css';
import Quiz from '../Quiz/Quiz';
import { Routes, Route } from 'react-router-dom';
import Search from '../Search/Search';
import Header from '../Header/Header';
import CreateFlashcard from '../CreateFlashcard/CreateFlashcard';
import Flashcards from '../Flashcards/Flashcards';
import FlashcardsList from '../FlashcardsList/FlashcardsList';
import Study from '../Study/Study';
import Main from '../Main/Main';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create-flashcard" element={<CreateFlashcard />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route
            path="/flashcards/:origin/:episode"
            element={<FlashcardsList />}
          />
          <Route
            path="/flashcards/:origin/:episode/study"
            element={<Study />}
          />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
