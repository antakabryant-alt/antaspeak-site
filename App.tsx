import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Logos from './pages/Logos';
import Flyers from './pages/Flyers';
import CV from './pages/CV';
import CVDesigns from './pages/CVDesigns';
import { Download, X } from 'lucide-react';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  React.useEffect(() => {
    if (hash) {
      // Small delay to ensure the element is rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBubble, setShowInstallBubble] = useState(false);

  useEffect(() => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(err => {
          console.log('ServiceWorker registration failed: ', err);
        });
    }

    // Handle PWA Install Prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBubble(true);

      // Auto-hide after 5 seconds
      setTimeout(() => {
        setShowInstallBubble(false);
      }, 5000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    setShowInstallBubble(false);
    deferredPrompt.prompt();
    
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
    setDeferredPrompt(null);
  };

  return (
    <Router>
      <ScrollToTop />
      
      {/* Install Bubble */}
      {showInstallBubble && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] bg-[#1a1a1a] border border-gray-700 shadow-2xl rounded-full px-5 py-3 flex items-center gap-4 transition-all duration-500 animate-bounce">
          <span className="text-white text-sm font-medium whitespace-nowrap">Installer AntAcademy pour un accès rapide</span>
          <button 
            onClick={handleInstallClick}
            className="bg-brand-blue hover:bg-blue-600 text-white text-xs font-bold py-2 px-4 rounded-full transition-colors flex items-center gap-1"
          >
            <Download size={14} />
            Installer
          </button>
          <button onClick={() => setShowInstallBubble(false)} className="text-gray-400 hover:text-white ml-1">
            <X size={18} />
          </button>
        </div>
      )}

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/flyers" element={<Flyers />} />
          <Route path="/services/cv" element={<CV />} />
          <Route path="/logos" element={<Logos />} />
          <Route path="/cv-designs" element={<CVDesigns />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;