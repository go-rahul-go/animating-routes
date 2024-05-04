
import './App.css';
import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
function App() {
  const location=useLocation()
  return (
    <>
      <Navbar />
      <AnimatePresence >
        <Routes location={location} key={location.key}>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App;
