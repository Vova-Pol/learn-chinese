import '../../index.css';
import './App.css';
import Quiz from '../../pages/Quiz/Quiz';
import { Routes, Route } from 'react-router-dom';
import Search from '../../pages/Search/Search';
import Header from '../Header/Header';
import CreateFlashcard from '../../pages/CreateFlashcard/CreateFlashcard';
import Flashcards from '../../pages/Flashcards/Flashcards';
import FlashcardsList from '../FlashcardsList/FlashcardsList';
import Study from '../../pages/Study/Study';
import Main from '../../pages/Main/Main';
import Footer from '../Footer/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
