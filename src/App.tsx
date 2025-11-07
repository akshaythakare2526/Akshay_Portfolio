import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import StarfieldBackground from './components/StarfieldBackground.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Resume from './pages/Resume.tsx';
import QuizApplicationDetails from './pages/QuizApplicationDetails.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark relative">
        <StarfieldBackground />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects/quiz-application" element={<QuizApplicationDetails />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
