import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Certifications from './components/certifications/Certifications';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import RedditApp from './components/reddit/RedditApp';
import Weather from './components/weather/Weather';
import Portfolio from './components/portfolio/Portfolio';

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWithTransition><Home /></PageWithTransition>} />
        <Route path="/about" element={<PageWithTransition><About /></PageWithTransition>} />
        <Route path="/contact" element={<PageWithTransition><Contact /></PageWithTransition>} />
        <Route path="/resume" element={<PageWithTransition><Resume /></PageWithTransition>} />
        <Route path="/projects" element={<PageWithTransition><Projects /></PageWithTransition>} />
        <Route path="/certifications" element={<PageWithTransition><Certifications /></PageWithTransition>} />
        <Route path="/reddit/*" element={<PageWithTransition><RedditApp /></PageWithTransition>} />
        <Route path="/weather/*" element={<PageWithTransition><Weather /></PageWithTransition>} />
        <Route path="/portfolio" element={<PageWithTransition><Portfolio /></PageWithTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const PageWithTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.5, ease: 'linear' }}
    >
      {children}
    </motion.div>
  );
};

const MainRouter = () => {
  return (
    <Router>
      <Navbar />
      <AppRouter />
      <Footer />
    </Router>
  );
};

export default MainRouter;
