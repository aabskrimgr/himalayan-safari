import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';
import LiveChatIndicator from './components/LiveChatIndicator';
import Home from './pages/Home';
import TrekDetails from './pages/TrekDetails';
import Booking from './pages/Booking';
import About from './pages/About';
import './App.css';

function App() {
  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trek/:id" element={<TrekDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
        <LiveChatIndicator />
      </div>
    </Router>
  );
}

export default App;

