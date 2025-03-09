import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Calendar, Menu, X } from 'lucide-react';

const Nav = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isHomePage = location.pathname === '/';
;
  const navLinks = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/week1', icon: BookOpen, label: 'Week 1' },
    { path: '/week2', icon: Calendar, label: 'Week 2' },
  ];
    
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ?  'bg-4 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <Link 
            to="/" 
            className={`text-2xl font-bold ${isScrolled || !isHomePage ? 'text-2' : 'text-4'}`}
          >
            Internship Blog 
            <span  className={`text-xs px-1 font-bold ${isScrolled || !isHomePage ? 'text-2' : 'text-white'}`}>by Kenneth Espela</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive(path)
                    ? `${isScrolled || !isHomePage ?'bg-1 text-4' : 'bg-white/20 text-white'}`
                    : `${isScrolled || !isHomePage ? 'text-1 hover:bg-4' : 'text-white hover:bg-white/10'}`
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled || isHomePage ? 'text-1' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-blue-50'>
            <div className='px-4 py-2 space-y-1'>
              {navLinks.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${
                    isActive(path)
                      ? 'bg-white text-2'
                      : 'text-2 hover:bg-4'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;