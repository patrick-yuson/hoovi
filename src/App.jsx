import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StorySubmission from './pages/StorySubmission'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story-submission" element={<StorySubmission />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
