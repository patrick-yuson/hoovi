import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StorySubmission from './pages/StorySubmission';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story-submission" element={<StorySubmission />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
