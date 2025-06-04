import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Landing page component that combines all sections
const LandingPage = ({ refs }) => (
  <>
    <section ref={refs.homeRef} id="home">
      <Home />
    </section>
    <section ref={refs.aboutRef} id="about">
      <About />
    </section>
    <section ref={refs.skillsRef} id="skills">
      <Skills />
    </section>
    <section ref={refs.experienceRef} id="experience">
      <Experience />
    </section>
    <section ref={refs.projectsRef} id="projects">
      <Projects />
    </section>
    <section ref={refs.contactRef} id="contact">
      <Contact />
    </section>
  </>
);

function App() {
  const refs = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    skillsRef: useRef(null),
    experienceRef: useRef(null),
    projectsRef: useRef(null),
    contactRef: useRef(null)
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <ScrollToTop />
        <Navbar scrollToSection={scrollToSection} refs={refs} />
        <Routes>
          <Route path="/" element={<LandingPage refs={refs} />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
