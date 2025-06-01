import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWeeksDropdownOpen, setIsWeeksDropdownOpen] = useState(false);

  // Refs for dropdown containers
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  // Custom navigation handler to ensure scroll to top
  const handleNavigation = (path) => {
    navigate(path, { state: { scrollToTop: true } });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if dropdown is open
      if (!isWeeksDropdownOpen) return;

      // Check if click is outside both the dropdown and the button that toggles it
      const isClickOutsideDesktopDropdown = desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target);
      const isClickOutsideMobileDropdown = mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target);
      const isClickOutsideButton = dropdownButtonRef.current && !dropdownButtonRef.current.contains(event.target);

      if ((isClickOutsideDesktopDropdown && isClickOutsideMobileDropdown && isClickOutsideButton)) {
        setIsWeeksDropdownOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isWeeksDropdownOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isHomePage = location.pathname === '/';

  const isWeekPage = location.pathname.startsWith('/week');

  const weekPages = [
    { path: '/week1', label: 'Week 1', dates: 'Feb 24-28' },
    { path: '/week2', label: 'Week 2', dates: 'Mar 3-7' },
    { path: '/week3', label: 'Week 3', dates: 'Mar 10-14' },
    { path: '/week4', label: 'Week 4', dates: 'Mar 17-21' },
    { path: '/week5', label: 'Week 5', dates: 'Mar 24-28' },
    { path: '/week6', label: 'Week 6', dates: 'Mar 31-Apr 4' },
    { path: '/week7', label: 'Week 7', dates: 'Apr 7-11' },
    { path: '/week8', label: 'Week 8', dates: 'Apr 14-18' },
    { path: '/week9', label: 'Week 9', dates: 'Apr 21-25' },
    { path: '/week10', label: 'Week 10', dates: 'Apr 28-May 2' },
    { path: '/week11', label: 'Week 11', dates: 'May 5-9' },
    { path: '/week12', label: 'Week 12', dates: 'May 12-16' },
    { path: '/week13', label: 'Week 13', dates: 'May 19-23' },
  ];

  const navLinks = [
    { path: '/', icon: Home, label: 'Home' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-normal backdrop-blur-md ${
      isScrolled || !isHomePage
        ? 'bg-bg-secondary/90 border-b border-color-3'
        : 'bg-bg-primary/90 border-b border-color-3'
    }`}>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo/Brand */}
          <button
            onClick={() => handleNavigation('/')}
            className="group flex items-center text-left cursor-pointer"
          >
            <div className="flex flex-col border-l border-color-3 pl-4">
              <span className="text-xl md:text-2xl font-bold font-secondary tracking-wide transition-colors duration-normal text-color-1 group-hover:text-color-3">
                INTERNSHIP BLOG
              </span>
              <span className="text-xs font-medium transition-colors duration-normal text-color-2 group-hover:text-color-3/80">
                by Kenneth Espela
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6'>
            {/* Home Link */}
            {navLinks.map(({ path, icon: Icon, label }) => (
              <button
                key={path}
                onClick={() => handleNavigation(path)}
                className={`flex items-center space-x-2 px-5 py-2 transition-all duration-normal cursor-pointer ${
                  isActive(path)
                    ? 'bg-color-3 text-bg-primary border-l border-t border-white shadow-elevated'
                    : 'text-color-1 hover:bg-bg-tertiary/80 border-l border-transparent hover:border-color-3 hover:text-color-3'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}

            {/* Weeks Dropdown */}
            <div className="relative group">
              <button
                ref={dropdownButtonRef}
                onClick={() => setIsWeeksDropdownOpen(!isWeeksDropdownOpen)}
                className={`flex items-center justify-between px-5 py-2 transition-all duration-normal min-w-[150px] cursor-pointer ${
                  isWeekPage
                    ? 'bg-color-3 text-bg-primary border-l border-t border-white shadow-elevated'
                    : 'text-color-1 hover:bg-bg-tertiary/80 border-l border-transparent hover:border-color-3 hover:text-color-3'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BookOpen size={18} />
                  <span>WEEKLY LOGS</span>
                </div>
                {isWeeksDropdownOpen ?
                  <ChevronUp size={16} className="transition-transform duration-normal" /> :
                  <ChevronDown size={16} className="transition-transform duration-normal" />
                }
              </button>

              {isWeeksDropdownOpen && (
                <div
                  ref={desktopDropdownRef}
                  className="absolute top-full right-0 mt-2 w-[400px] bg-black/95 z-50 rounded-lg border-l border-t border-color-3 animate-slideDown shadow-elevated backdrop-blur-3xl"
                  style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)' }}>
                  <div className="max-h-[75vh] overflow-y-auto p-6">
                    <div className="grid grid-cols-1 gap-6">
                      {weekPages.map((week) => (
                        <button
                          key={week.path}
                          onClick={() => {
                            setIsWeeksDropdownOpen(false);
                            handleNavigation(week.path);
                          }}
                          className={`group flex items-center justify-between px-6 py-4 rounded-lg transition-all duration-fast hover:scale-[1.02] cursor-pointer ${
                            isActive(week.path)
                              ? 'bg-color-3 text-bg-primary border-l border-t border-bg-primary shadow-elevated'
                              : 'text-color-1 bg-bg-tertiary/90 backdrop-blur-xl border-l border-t border-color-3/50 hover:border-color-3 hover:shadow-elevated hover:bg-bg-tertiary/95'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <span className="font-medium text-base tracking-wide">{week.label}</span>
                          </div>
                          <span className={`text-sm px-4 py-2 rounded-lg transition-colors duration-normal ${
                            isActive(week.path)
                              ? 'bg-bg-primary text-color-3'
                              : 'bg-bg-secondary/95 backdrop-blur-lg text-color-1 group-hover:bg-color-3/20'
                          }`}>{week.dates}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 transition-all duration-normal text-color-1 hover:bg-bg-tertiary border-l border-t border-transparent hover:border-color-3 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ?
              <X size={24} className="animate-spin-once" /> :
              <Menu size={24} />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden absolute top-16 left-0 right-0 bg-black border-t border-color-3 animate-slideDown shadow-card'>
            <div className='py-2'>
              {/* Home Link */}
              {navLinks.map(({ path, icon: Icon, label }) => (
                <button
                  key={path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigation(path);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 transition-all duration-normal border-b border-color-3/10 w-full text-left cursor-pointer ${
                    isActive(path)
                      ? 'bg-color-3 text-bg-primary border-l border-t border-white shadow-elevated'
                      : 'text-color-1 hover:bg-bg-tertiary/80 border-l border-transparent hover:border-color-3 hover:text-color-3'
                  }`}
                >
                  <Icon size={20} className={isActive(path) ? '' : 'text-color-3'} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}

              {/* Mobile Weeks Accordion */}
              <div className="border-b border-color-3/10">
                <button
                  onClick={() => setIsWeeksDropdownOpen(!isWeeksDropdownOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 transition-all duration-normal cursor-pointer ${
                    isWeekPage
                      ? 'bg-color-3 text-bg-primary border-l border-t border-white shadow-elevated'
                      : 'text-color-1 hover:bg-bg-tertiary/80 border-l border-transparent hover:border-color-3 hover:text-color-3'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <BookOpen size={20} className={isWeekPage ? '' : 'text-color-3'} />
                    <span className="font-medium">WEEKLY LOGS</span>
                  </div>
                  {isWeeksDropdownOpen ?
                    <ChevronUp size={18} className="transition-transform duration-normal" /> :
                    <ChevronDown size={18} className="transition-transform duration-normal" />
                  }
                </button>

                {isWeeksDropdownOpen && (
                  <div
                    ref={mobileDropdownRef}
                    className="bg-black backdrop-blur-3xl animate-slideDown p-4"
                    style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)' }}>
                    {/* Scroll indicator */}
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-1 bg-color-3/50 rounded-full"></div>
                    </div>

                    {/* Scrollable weeks container */}
                    <div className="max-h-[40vh] overflow-y-auto pr-2 pb-2 border-b-2 border-t-2 border-color-3/20 my-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#E0E0E0 #111' }}>
                      <div className="grid grid-cols-1 gap-3 pt-2">
                        {/* Scroll instruction */}
                        <div className="text-center text-color-3 text-xs mb-2 font-medium bg-black/50 py-1 px-2 rounded-full border border-color-3/30">
                          ↓ Scroll to see all weeks ↓
                        </div>

                        {weekPages.map((week) => (
                          <button
                            key={week.path}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsWeeksDropdownOpen(false);
                              handleNavigation(week.path);
                            }}
                            className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-fast hover:scale-[1.02] w-full text-left cursor-pointer ${
                              isActive(week.path)
                                ? 'bg-color-3 text-bg-primary border-l border-t border-bg-primary shadow-elevated'
                                : 'text-color-1 bg-bg-tertiary/90 backdrop-blur-xl border-l border-t border-color-3/50 hover:border-color-3 hover:shadow-elevated hover:bg-bg-tertiary/95'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="font-medium text-sm">{week.label}</span>
                            </div>
                            <span className="text-xs px-3 py-1 bg-black/30 rounded">{week.dates}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bottom scroll indicator */}
                    <div className="flex justify-center mt-2">
                      <div className="w-10 h-1 bg-color-3/50 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;