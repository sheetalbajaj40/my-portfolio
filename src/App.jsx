import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import About from './pages/About';

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

const MainContent = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    homeRef,
    aboutRef,
    skillsRef,
    experienceRef,
    projectsRef,
    contactRef
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollToSection={scrollToSection} refs={refs} />

      <main className="flex-grow">
        <Routes>
          {/* Landing page with all sections */}
          <Route path="/" element={<LandingPage refs={refs} />} />
          
          {/* Individual page routes */}
          <Route path="/about" element={
            <section className="min-h-screen">
              <About />
            </section>
          } />
          <Route path="/skills" element={
            <section className="min-h-screen">
              <Skills />
            </section>
          } />
          <Route path="/experience" element={
            <section className="min-h-screen">
              <Experience />
            </section>
          } />
          <Route path="/projects" element={
            <section className="min-h-screen">
              <Projects />
            </section>
          } />
          <Route path="/contact" element={
            <section className="min-h-screen">
              <Contact />
            </section>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <MainContent />
    </Router>
  );
};

export default App;
