import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'AntAcademy', path: '/#antacademy' },
  { label: 'Nos Services', path: '/services' },
  { label: 'Nos Réalisations', path: '/portfolio' },
  { label: 'À propos', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    const current = location.pathname;
    if (path === '/') return current === '/';
    
    // Gestion des pages orphelines ou sous-catégories spécifiques
    if (path === '/services' && (current === '/logos' || current.startsWith('/services'))) return true;
    if (path === '/portfolio' && current === '/cv-designs') return true;
    
    return current.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-white relative">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3 border-b border-white/5' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            {!logoError ? (
              <img 
                src="https://i.postimg.cc/5y22Td7n/logo-png.png" 
                alt="AntaDigital" 
                className="h-[50px] w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="text-2xl font-extrabold tracking-tighter flex items-center gap-1">
                <span className="text-white group-hover:text-brand-orange transition-colors">Anta</span>
                <span className="text-brand-blue">Digital</span>
                <div className="w-2 h-2 bg-brand-orange rounded-full mt-3 ml-1"></div>
              </div>
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative group py-2 ${
                    active ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-blue transition-all duration-300 ease-in-out ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
            <a 
              href="https://wa.me/66853673624"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-blue-600 text-white text-sm font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Discuter sur WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-brand-dark shadow-2xl transition-all duration-300 overflow-hidden border-t border-white/10 ${
            isMobileMenuOpen ? 'max-h-screen py-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col px-6 space-y-4">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-lg font-medium py-3 border-b border-gray-800 transition-colors ${
                    active ? 'text-brand-blue' : 'text-gray-200 hover:text-brand-orange'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a 
              href="https://wa.me/66853673624"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-blue-600 text-center text-white font-bold py-4 rounded-xl mt-6 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button (Visible on all pages) */}
      <a
        href="https://wa.me/66853673624"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-brand-blue hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 animate-bounce-slow flex items-center justify-center"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap hidden group-hover:block shadow-lg">
          On répond vite !
        </span>
      </a>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#050b1a] pt-16 pb-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Info */}
            <div>
              <div className="text-2xl font-bold tracking-tighter flex items-center gap-1 mb-6">
                <span className="text-white">Anta</span>
                <span className="text-brand-blue">Digital</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                L'agence de référence en Guinée pour digitaliser votre activité. Nous combinons créativité locale et standards internationaux pour faire décoller votre business.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Navigation</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-brand-orange transition-colors">Accueil</Link></li>
                <li><Link to="/#antacademy" className="text-gray-400 hover:text-brand-orange transition-colors">AntAcademy</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-brand-orange transition-colors">Nos Services</Link></li>
                <li><Link to="/portfolio" className="text-gray-400 hover:text-brand-orange transition-colors">Nos Réalisations</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-brand-orange transition-colors">Demander un devis</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Expertises</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services" className="text-gray-400 hover:text-brand-orange transition-colors">Création de Sites Web</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-brand-orange transition-colors">Logos & Flyers</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-brand-orange transition-colors">Gestion Réseaux Sociaux</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-brand-orange transition-colors">Cartes d'invitation</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Nous trouver</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="text-brand-orange shrink-0 mt-1" size={18} />
                  <span className="text-gray-400">Conakry, Guinée<br />Services disponibles dans toute l'Afrique</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-brand-orange shrink-0" size={18} />
                  <a href="tel:+66853673624" className="text-gray-400 hover:text-white transition-colors">+66 85 367 3624</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-brand-orange shrink-0" size={18} />
                  <a href="mailto:info@antadigital.online" className="text-gray-400 hover:text-white transition-colors">info@antadigital.online</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} AntaDigital Guinée. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;