import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StorySubmission from './pages/StorySubmission';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import Stories from './pages/Stories';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story-submission" element={<StorySubmission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
